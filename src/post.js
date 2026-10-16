// Post-processing chain (medium / high quality):
//   world → first-person hands → bloom (only the glowing strips, disc and sparks pass the threshold)
//   → speed lens (radial streak + colour fringe at high speed, vignette, red edge when hurt) → tone map → FXAA
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

const LensShader = {
  uniforms: { tDiffuse: { value: null }, uSpeed: { value: 0 }, uHurt: { value: 0 }, uVig: { value: 0.28 }, uAspect: { value: 1 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uSpeed, uHurt, uVig, uAspect; varying vec2 vUv;
    void main(){
      vec2 c = vUv - 0.5; vec2 cc = vec2(c.x * uAspect, c.y); float d = length(cc);
      float edge = smoothstep(0.18, 0.75, d);
      vec3 col;
      if (uSpeed > 0.01) {
        // streak toward the centre, stronger at the edges (centre stays sharp for aiming)
        float k = uSpeed * 0.06 * edge;
        vec3 acc = vec3(0.0);
        for (int i = 0; i < 6; i++) { float t = float(i) / 5.0; acc += texture2D(tDiffuse, vUv - c * k * t).rgb; }
        col = acc / 6.0;
        float ca = uSpeed * 0.006 * edge;
        col.r = mix(col.r, texture2D(tDiffuse, vUv - c * (k * 0.5 - ca)).r, 0.6);
        col.b = mix(col.b, texture2D(tDiffuse, vUv - c * (k * 0.5 + ca)).b, 0.6);
      } else col = texture2D(tDiffuse, vUv).rgb;
      col *= 1.0 - uVig * smoothstep(0.35, 1.0, d) - uSpeed * 0.12 * edge;
      col = mix(col, vec3(1.4, 0.05, 0.08), uHurt * 0.55 * smoothstep(0.3, 0.9, d));
      gl_FragColor = vec4(col, 1.0);
    }`,
};

export class Post {
  constructor(renderer, scene, camera, hand, Q) {
    this.renderer = renderer; this.Q = Q;
    const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: Q.msaa || 0 });
    rt.texture.name = 'redshift.hdr';
    const C = this.composer = new EffectComposer(renderer, rt);
    this.world = new RenderPass(scene, camera);
    this.hands = new RenderPass(hand.scene, hand.camera); this.hands.clear = false; this.hands.clearDepth = true;
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), Q.bloom, 0.25, 1.5);
    this.lens = new ShaderPass(LensShader);
    this.out = new OutputPass();
    C.addPass(this.world); C.addPass(this.hands); C.addPass(this.bloom); C.addPass(this.lens); C.addPass(this.out);
    if (!Q.msaa) { this.fxaa = new ShaderPass(FXAAShader); C.addPass(this.fxaa); }
  }
  setSize(w, h, pr) {
    this.composer.setPixelRatio(pr); this.composer.setSize(w, h);
    this.lens.uniforms.uAspect.value = w / h;
    if (this.fxaa) this.fxaa.material.uniforms.resolution.value.set(1 / (w * pr), 1 / (h * pr));
  }
  render(dt, { hands = true, speed = 0, hurt = 0, vignette = 0.28 } = {}) {
    this.hands.enabled = hands;
    const u = this.lens.uniforms; u.uSpeed.value = speed; u.uHurt.value = hurt; u.uVig.value = vignette;
    this.composer.render(dt);
  }
}
