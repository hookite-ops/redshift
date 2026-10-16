(()=>{var qc="169";var cf=0,Gh=1,hf=2;var ju=1,Yc=2,Oi=3,hn=0,Le=1,We=2,Ii=0,xs=1,Mo=2,Wh=3,Xh=4,uf=5,Nn=100,df=101,ff=102,pf=103,mf=104,gf=200,xf=201,yf=202,vf=203,bl=204,wl=205,_f=206,Mf=207,bf=208,wf=209,Sf=210,Tf=211,Ef=212,Af=213,Rf=214,Sl=0,Tl=1,El=2,bs=3,Al=4,Rl=5,Cl=6,Pl=7,Qu=0,Cf=1,Pf=2,cn=0,$c=1,Zc=2,Jc=3,Kc=4,If=5,jc=6,vr=7;var td=300,ws=301,Ss=302,Il=303,Ll=304,ia=306,cr=1e3,Fn=1001,Dl=1002,di=1003,Lf=1004;var Nr=1005;var Mi=1006,Ba=1007;var zn=1008;var qi=1009,ed=1010,id=1011,hr=1012,Qc=1013,Bn=1014,Gi=1015,ai=1016,th=1017,eh=1018,Ts=1020,nd=35902,sd=1021,rd=1022,wi=1023,od=1024,ad=1025,ys=1026,Es=1027,ld=1028,ih=1029,cd=1030,nh=1031;var sh=1033,mo=33776,go=33777,xo=33778,yo=33779,Ul=35840,Nl=35841,kl=35842,Fl=35843,zl=36196,Bl=37492,Ol=37496,Hl=37808,Vl=37809,Gl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,$l=37815,Zl=37816,Jl=37817,Kl=37818,jl=37819,Ql=37820,tc=37821,vo=36492,ec=36494,ic=36495,hd=36283,nc=36284,sc=36285,rc=36286;var bo=2300,oc=2301,Oa=2302,qh=2400,Yh=2401,$h=2402;var Df=3200,Uf=3201;var ud=0,Nf=1,ln="",Ge="srgb",pn="srgb-linear",rh="display-p3",na="display-p3-linear",wo="linear",ce="srgb",So="rec709",To="p3";var jn=7680;var Zh=519,kf=512,Ff=513,zf=514,dd=515,Bf=516,Of=517,Hf=518,Vf=519,ac=35044,mn=35048;var Jh="300 es",Wi=2e3,Eo=2001,un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,vs=Math.PI/180,ur=180/Math.PI;function Xi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[r&255]+Fe[r>>8&255]+Fe[r>>16&255]+Fe[r>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function Pe(r,t,e){return Math.max(t,Math.min(e,r))}function oh(r,t){return(r%t+t)%t}function Gf(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Wf(r,t,e){return r!==t?(e-r)/(t-r):0}function rr(r,t,e){return(1-e)*r+e*t}function Xf(r,t,e,i){return rr(r,t,1-Math.exp(-e*i))}function qf(r,t=1){return t-Math.abs(oh(r,t*2)-t)}function Yf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function $f(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Zf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Jf(r,t){return r+Math.random()*(t-r)}function Kf(r){return r*(.5-Math.random())}function jf(r){r!==void 0&&(Kh=r);let t=Kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qf(r){return r*vs}function tp(r){return r*ur}function ep(r){return(r&r-1)===0&&r!==0}function ip(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function np(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sp(r,t,e,i,n){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),d=s((t-i)/2),u=o((t-i)/2),f=s((i-t)/2),g=o((i-t)/2);switch(n){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function bi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ht={DEG2RAD:vs,RAD2DEG:ur,generateUUID:Xi,clamp:Pe,euclideanModulo:oh,mapLinear:Gf,inverseLerp:Wf,lerp:rr,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:$f,randInt:Zf,randFloat:Jf,randFloatSpread:Kf,seededRandom:jf,degToRad:Qf,radToDeg:tp,isPowerOfTwo:ep,ceilPowerOfTwo:ip,floorPowerOfTwo:np,setQuaternionFromProperEuler:sp,normalize:re,denormalize:bi},et=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class r{constructor(t,e,i,n,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=n[0],p=n[3],m=n[6],y=n[1],v=n[4],b=n[7],R=n[2],E=n[5],A=n[8];return s[0]=o*x+a*y+l*R,s[3]=o*p+a*v+l*E,s[6]=o*m+a*b+l*A,s[1]=c*x+h*y+d*R,s[4]=c*p+h*v+d*E,s[7]=c*m+h*b+d*A,s[2]=u*x+f*y+g*R,s[5]=u*p+f*v+g*E,s[8]=u*m+f*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new zt;function fd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rp(){let r=Ao("canvas");return r.style.display="block",r}var jh={};function _o(r){r in jh||(jh[r]=!0,console.warn(r))}function op(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function ap(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lp(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qh=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tu=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$s={[pn]:{transfer:wo,primaries:So,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Ge]:{transfer:ce,primaries:So,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[na]:{transfer:wo,primaries:To,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(tu),fromReference:r=>r.applyMatrix3(Qh)},[rh]:{transfer:ce,primaries:To,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(tu),fromReference:r=>r.applyMatrix3(Qh).convertLinearToSRGB()}},cp=new Set([pn,na]),Qt={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!cp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=$s[t].toReference,n=$s[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return $s[r].primaries},getTransfer:function(r){return r===ln?wo:$s[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray($s[t].luminanceCoefficients)}};function _s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Va(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Qn,lc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Ao("canvas")),Qn.width=t.width,Qn.height=t.height;let i=Qn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ao("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=_s(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_s(e[i]/255)*255):e[i]=_s(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hp=0,Ro=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Ga(n[o].image)):s.push(Ga(n[o]))}else s=Ga(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var up=0,ri=class r extends un{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Fn,n=Fn,s=Mi,o=zn,a=wi,l=qi,c=r.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Xi(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cr:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cr:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=td;ri.DEFAULT_ANISOTROPY=1;var ae=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,b=(f+1)/2,R=(m+1)/2,E=(h+u)/4,A=(d+x)/4,P=(g+p)/4;return v>b&&v>R?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=E/i,s=A/i):b>R?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=E/n,s=P/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=A/s,n=P/s),this.set(i,n,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends un{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new ri(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ro(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends cc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Co=class extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xe=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let p=1-a,m=l*u+c*f+h*g+d*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let R=Math.sqrt(v),E=Math.atan2(R,m*y);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}let b=a*y;if(l=l*p+u*b,c=c*p+f*b,h=h*p+g*b,d=d*p+x*b,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(s/2),u=l(i/2),f=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),d=2*(s*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=n+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wa=new M,eu=new Xe,On=class{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yi):yi.fromBufferAttribute(s,o),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Fr.subVectors(this.max,Zs),ts.subVectors(t.a,Zs),es.subVectors(t.b,Zs),is.subVectors(t.c,Zs),en.subVectors(es,ts),nn.subVectors(is,es),Rn.subVectors(ts,is);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-Rn.z,Rn.y,en.z,0,-en.x,nn.z,0,-nn.x,Rn.z,0,-Rn.x,-en.y,en.x,0,-nn.y,nn.x,0,-Rn.y,Rn.x,0];return!Xa(e,ts,es,is,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,ts,es,is,Fr))?!1:(zr.crossVectors(en,nn),e=[zr.x,zr.y,zr.z],Xa(e,ts,es,is,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ni=[new M,new M,new M,new M,new M,new M,new M,new M],yi=new M,kr=new On,ts=new M,es=new M,is=new M,en=new M,nn=new M,Rn=new M,Zs=new M,Fr=new M,zr=new M,Cn=new M;function Xa(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Cn.fromArray(r,s);let a=n.x*Math.abs(Cn.x)+n.y*Math.abs(Cn.y)+n.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=i.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var dp=new On,Js=new M,qa=new M,Hn=class{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):dp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Js,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(qa)),this.expandByPoint(Js.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ki=new M,Ya=new M,Br=new M,sn=new M,$a=new M,Or=new M,Za=new M,dr=class{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ya.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),sn.copy(this.origin).sub(Ya);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=sn.dot(this.direction),l=-sn.dot(Br),c=sn.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ya).addScaledVector(Br,u),f}intersectSphere(t,e){ki.subVectors(t.center,this.origin);let i=ki.dot(this.direction),n=ki.dot(ki)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,n,s){$a.subVectors(e,t),Or.subVectors(i,t),Za.crossVectors($a,Or);let o=this.direction.dot(Za),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,t);let l=a*this.direction.dot(Or.crossVectors(sn,Or));if(l<0)return null;let c=a*this.direction.dot($a.cross(sn));if(c<0||l+c>o)return null;let h=-a*sn.dot(Za);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class r{constructor(t,e,i,n,s,o,a,l,c,h,d,u,f,g,x,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,d,u,f,g,x,p)}set(t,e,i,n,s,o,a,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fp,t,pp)}lookAt(t,e,i){let n=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),rn.crossVectors(i,ni),rn.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),rn.crossVectors(i,ni)),rn.normalize(),Hr.crossVectors(ni,rn),n[0]=rn.x,n[4]=Hr.x,n[8]=ni.x,n[1]=rn.y,n[5]=Hr.y,n[9]=ni.y,n[2]=rn.z,n[6]=Hr.z,n[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],v=i[7],b=i[11],R=i[15],E=n[0],A=n[4],P=n[8],k=n[12],_=n[1],w=n[5],L=n[9],N=n[13],B=n[2],X=n[6],z=n[10],Y=n[14],V=n[3],rt=n[7],st=n[11],ht=n[15];return s[0]=o*E+a*_+l*B+c*V,s[4]=o*A+a*w+l*X+c*rt,s[8]=o*P+a*L+l*z+c*st,s[12]=o*k+a*N+l*Y+c*ht,s[1]=h*E+d*_+u*B+f*V,s[5]=h*A+d*w+u*X+f*rt,s[9]=h*P+d*L+u*z+f*st,s[13]=h*k+d*N+u*Y+f*ht,s[2]=g*E+x*_+p*B+m*V,s[6]=g*A+x*w+p*X+m*rt,s[10]=g*P+x*L+p*z+m*st,s[14]=g*k+x*N+p*Y+m*ht,s[3]=y*E+v*_+b*B+R*V,s[7]=y*A+v*w+b*X+R*rt,s[11]=y*P+v*L+b*z+R*st,s[15]=y*k+v*N+b*Y+R*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+s*l*d-n*c*d-s*a*u+i*c*u+n*a*f-i*l*f)+x*(+e*l*f-e*c*u+s*o*u-n*o*f+n*c*h-s*l*h)+p*(+e*c*d-e*a*f-s*o*d+i*o*f+s*a*h-i*c*h)+m*(-n*a*h-e*l*d+e*a*u+n*o*d-i*o*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=d*p*c-x*u*c+x*l*f-a*p*f-d*l*m+a*u*m,v=g*u*c-h*p*c-g*l*f+o*p*f+h*l*m-o*u*m,b=h*x*c-g*d*c+g*a*f-o*x*f-h*a*m+o*d*m,R=g*d*l-h*x*l-g*a*u+o*x*u+h*a*p-o*d*p,E=e*y+i*v+n*b+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=y*A,t[1]=(x*u*s-d*p*s-x*n*f+i*p*f+d*n*m-i*u*m)*A,t[2]=(a*p*s-x*l*s+x*n*c-i*p*c-a*n*m+i*l*m)*A,t[3]=(d*l*s-a*u*s-d*n*c+i*u*c+a*n*f-i*l*f)*A,t[4]=v*A,t[5]=(h*p*s-g*u*s+g*n*f-e*p*f-h*n*m+e*u*m)*A,t[6]=(g*l*s-o*p*s-g*n*c+e*p*c+o*n*m-e*l*m)*A,t[7]=(o*u*s-h*l*s+h*n*c-e*u*c-o*n*f+e*l*f)*A,t[8]=b*A,t[9]=(g*d*s-h*x*s-g*i*f+e*x*f+h*i*m-e*d*m)*A,t[10]=(o*x*s-g*a*s+g*i*c-e*x*c-o*i*m+e*a*m)*A,t[11]=(h*a*s-o*d*s-h*i*c+e*d*c+o*i*f-e*a*f)*A,t[12]=R*A,t[13]=(h*x*n-g*d*n+g*i*u-e*x*u-h*i*p+e*d*p)*A,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*p-e*a*p)*A,t[15]=(o*d*n-h*a*n+h*i*l-e*d*l-o*i*u+e*a*u)*A,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,x=o*h,p=o*d,m=a*d,y=l*c,v=l*h,b=l*d,R=i.x,E=i.y,A=i.z;return n[0]=(1-(x+m))*R,n[1]=(f+b)*R,n[2]=(g-v)*R,n[3]=0,n[4]=(f-b)*E,n[5]=(1-(u+m))*E,n[6]=(p+y)*E,n[7]=0,n[8]=(g+v)*A,n[9]=(p-y)*A,n[10]=(1-(u+x))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=ns.set(n[0],n[1],n[2]).length(),o=ns.set(n[4],n[5],n[6]).length(),a=ns.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],vi.copy(this);let c=1/s,h=1/o,d=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,e.setFromRotationMatrix(vi),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,n,s,o,a=Wi){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n),f,g;if(a===Wi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Eo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Wi){let l=this.elements,c=1/(e-t),h=1/(i-n),d=1/(o-s),u=(e+t)*c,f=(i+n)*h,g,x;if(a===Wi)g=(o+s)*d,x=-2*d;else if(a===Eo)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ns=new M,vi=new le,fp=new M(0,0,0),pp=new M(1,1,1),rn=new M,Hr=new M,ni=new M,iu=new le,nu=new Xe,fi=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mp=0,su=new M,ss=new Xe,Fi=new le,Vr=new M,Ks=new M,gp=new M,xp=new Xe,ru=new M(1,0,0),ou=new M(0,1,0),au=new M(0,0,1),lu={type:"added"},yp={type:"removed"},rs={type:"childadded",child:null},Ja={type:"childremoved",child:null},De=class r extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new M,e=new fi,i=new Xe,n=new M(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new le},normalMatrix:{value:new zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vr.copy(t):Vr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ks,Vr,this.up):Fi.lookAt(Vr,Ks,this.up),this.quaternion.setFromRotationMatrix(Fi),n&&(Fi.extractRotation(n.matrixWorld),ss.setFromRotationMatrix(Fi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lu),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lu),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};De.DEFAULT_UP=new M(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _i=new M,zi=new M,Ka=new M,Bi=new M,os=new M,as=new M,cu=new M,ja=new M,Qa=new M,tl=new M,el=new ae,il=new ae,nl=new ae,Vi=class r{constructor(t=new M,e=new M,i=new M){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),_i.subVectors(t,e),n.cross(_i);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){_i.subVectors(n,e),zi.subVectors(i,e),Ka.subVectors(t,e);let o=_i.dot(_i),a=_i.dot(zi),l=_i.dot(Ka),c=zi.dot(zi),h=zi.dot(Ka),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return el.setScalar(0),il.setScalar(0),nl.setScalar(0),el.fromBufferAttribute(t,e),il.fromBufferAttribute(t,i),nl.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(el,s.x),o.addScaledVector(il,s.y),o.addScaledVector(nl,s.z),o}static isFrontFacing(t,e,i,n){return _i.subVectors(i,e),zi.subVectors(t,e),_i.cross(zi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),_i.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;os.subVectors(n,i),as.subVectors(s,i),ja.subVectors(t,i);let l=os.dot(ja),c=as.dot(ja);if(l<=0&&c<=0)return e.copy(i);Qa.subVectors(t,n);let h=os.dot(Qa),d=as.dot(Qa);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(os,o);tl.subVectors(t,s);let f=os.dot(tl),g=as.dot(tl);if(g>=0&&f<=g)return e.copy(s);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(as,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return cu.subVectors(s,n),a=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(cu,a);let m=1/(p+x+u);return o=x*m,a=u*m,e.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function sl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=oh(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=sl(o,s,t+1/3),this.g=sl(o,s,t),this.b=sl(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=Ge){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=pd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Qt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Pe(ze.r*255,0,255))*65536+Math.round(Pe(ze.g*255,0,255))*256+Math.round(Pe(ze.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ze.copy(this),e);let i=ze.r,n=ze.g,s=ze.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ge){Qt.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,i=ze.g,n=ze.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(on),this.setHSL(on.h+t,on.s+e,on.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(on),t.getHSL(Gr);let i=rr(on.h,Gr.h,e),n=rr(on.s,Gr.s,e),s=rr(on.l,Gr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new ct;ct.NAMES=pd;var vp=0,Li=class extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=xs,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=wl,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==wl&&(i.blendDst=this.blendDst),this.blendEquation!==Nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},te=class extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new M,Wr=new et,pe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}};var Io=class extends pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Lo=class extends pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Bt=class extends pe{constructor(t,e,i){super(new Float32Array(t),e,i)}},_p=0,ui=new le,rl=new De,ls=new M,si=new On,js=new On,Ce=new M,oe=class r extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fd(t)?Lo:Io)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,i){return ui.makeTranslation(t,e,i),this.applyMatrix4(ui),this}scale(t,e,i){return ui.makeScale(t,e,i),this.applyMatrix4(ui),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];si.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(t){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(si.min,js.min),si.expandByPoint(Ce),Ce.addVectors(si.max,js.max),si.expandByPoint(Ce)):(si.expandByPoint(js.min),si.expandByPoint(js.max))}si.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)Ce.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ce));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(t,c),Ce.add(ls)),n=Math.max(n,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new M,l[P]=new M;let c=new M,h=new M,d=new M,u=new et,f=new et,g=new et,x=new M,p=new M;function m(P,k,_){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,k),d.fromBufferAttribute(i,_),u.fromBufferAttribute(s,P),f.fromBufferAttribute(s,k),g.fromBufferAttribute(s,_),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[P].add(x),a[k].add(x),a[_].add(x),l[P].add(p),l[k].add(p),l[_].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,k=y.length;P<k;++P){let _=y[P],w=_.start,L=_.count;for(let N=w,B=w+L;N<B;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new M,b=new M,R=new M,E=new M;function A(P){R.fromBufferAttribute(n,P),E.copy(R);let k=a[P];v.copy(k),v.sub(R.multiplyScalar(R.dot(k))).normalize(),b.crossVectors(E,k);let w=b.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,k=y.length;P<k;++P){let _=y[P],w=_.start,L=_.count;for(let N=w,B=w+L;N<B;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new M,s=new M,o=new M,a=new M,l=new M,c=new M,h=new M,d=new M;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new pe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new le,Pn=new dr,Xr=new Hn,uu=new M,qr=new M,Yr=new M,$r=new M,ol=new M,Zr=new M,du=new M,Jr=new M,gt=class extends De{constructor(t=new oe,e=new te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){Zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(ol.fromBufferAttribute(d,t),o?Zr.addScaledVector(ol,h):Zr.addScaledVector(ol.sub(e),h))}e.add(Zr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Pn.copy(t.ray).recast(t.near),!(Xr.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Xr,uu)===null||Pn.origin.distanceToSquared(uu)>(t.far-t.near)**2))&&(hu.copy(s).invert(),Pn.copy(t.ray).applyMatrix4(hu),!(i.boundingBox!==null&&Pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,R=v;b<R;b+=3){let E=a.getX(b),A=a.getX(b+1),P=a.getX(b+2);n=Kr(this,m,t,i,c,h,d,E,A,P),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);n=Kr(this,o,t,i,c,h,d,y,v,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,R=v;b<R;b+=3){let E=b,A=b+1,P=b+2;n=Kr(this,m,t,i,c,h,d,E,A,P),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,v=p+1,b=p+2;n=Kr(this,o,t,i,c,h,d,y,v,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function Mp(r,t,e,i,n,s,o,a){let l;if(t.side===Le?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===hn,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:r}}function Kr(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,qr),r.getVertexPosition(l,Yr),r.getVertexPosition(c,$r);let h=Mp(r,t,e,i,qr,Yr,$r,du);if(h){let d=new M;Vi.getBarycoord(du,qr,Yr,$r,d),n&&(h.uv=Vi.getInterpolatedAttribute(n,a,l,c,d,new et)),s&&(h.uv1=Vi.getInterpolatedAttribute(s,a,l,c,d,new et)),o&&(h.normal=Vi.getInterpolatedAttribute(o,a,l,c,d,new M),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new M,materialIndex:0};Vi.getNormal(qr,Yr,$r,u.normal),h.face=u,h.barycoord=d}return h}var Ot=class r extends oe{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(d,2));function g(x,p,m,y,v,b,R,E,A,P,k){let _=b/A,w=R/P,L=b/2,N=R/2,B=E/2,X=A+1,z=P+1,Y=0,V=0,rt=new M;for(let st=0;st<z;st++){let ht=st*w-N;for(let Nt=0;Nt<X;Nt++){let Vt=Nt*_-L;rt[x]=Vt*y,rt[p]=ht*v,rt[m]=B,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[m]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Nt/A),d.push(1-st/P),Y+=1}}for(let st=0;st<P;st++)for(let ht=0;ht<A;ht++){let Nt=u+ht+X*st,Vt=u+ht+X*(st+1),O=u+(ht+1)+X*(st+1),j=u+(ht+1)+X*st;l.push(Nt,Vt,j),l.push(Vt,O,j),V+=6}a.addGroup(f,V,k),f+=V,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function As(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ve(r){let t={};for(let e=0;e<r.length;e++){let i=As(r[e]);for(let n in i)t[n]=i[n]}return t}function bp(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function md(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var gn={clone:As,merge:Ve},wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ye=class extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Do=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},an=new M,fu=new et,pu=new et,Ie=class extends Do{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(an.x,an.y).multiplyScalar(-t/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(an.x,an.y).multiplyScalar(-t/an.z)}getViewSize(t,e){return this.getViewBounds(t,fu,pu),e.subVectors(pu,fu)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,hs=1,uc=class extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ie(cs,hs,t,e);n.layers=this.layers,this.add(n);let s=new Ie(cs,hs,t,e);s.layers=this.layers,this.add(s);let o=new Ie(cs,hs,t,e);o.layers=this.layers,this.add(o);let a=new Ie(cs,hs,t,e);a.layers=this.layers,this.add(a);let l=new Ie(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Ie(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Uo=class extends ri{constructor(t,e,i,n,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dc=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Uo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ot(5,5,5),s=new ye({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:Ii});s.uniforms.tEquirect.value=e;let o=new gt(n,s),a=e.minFilter;return e.minFilter===zn&&(e.minFilter=Mi),new uc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}},al=new M,Tp=new M,Ep=new zt,Hi=class{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=al.subVectors(i,e).cross(Tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(al),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ep.getNormalMatrix(t),n=this.coplanarPoint(al).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},In=new Hn,jr=new M,fr=class{constructor(t=new Hi,e=new Hi,i=new Hi,n=new Hi,s=new Hi,o=new Hi){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){let i=this.planes,n=t.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],f=n[8],g=n[9],x=n[10],p=n[11],m=n[12],y=n[13],v=n[14],b=n[15];if(i[0].setComponents(l-s,u-c,p-f,b-m).normalize(),i[1].setComponents(l+s,u+c,p+f,b+m).normalize(),i[2].setComponents(l+o,u+h,p+g,b+y).normalize(),i[3].setComponents(l-o,u-h,p-g,b-y).normalize(),i[4].setComponents(l-a,u-d,p-x,b-v).normalize(),e===Wi)i[5].setComponents(l+a,u+d,p+x,b+v).normalize();else if(e===Eo)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(jr.x=n.normal.x>0?t.max.x:t.min.x,jr.y=n.normal.y>0?t.max.y:t.min.y,jr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gd(){let r=null,t=!1,e=null,i=null;function n(s,o){e(s,o),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ap(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var oi=class r extends oe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*u-o;for(let v=0;v<c;v++){let b=v*d-s;g.push(b,-y,0),x.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,b=y+c*(m+1),R=y+1+c*(m+1),E=y+1+c*m;f.push(v,b,E),f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Ip,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:kp,batching_vertex:Fp,begin_vertex:zp,beginnormal_vertex:Bp,bsdfs:Op,iridescence_fragment:Hp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:Zp,color_vertex:Jp,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:im,emissivemap_pars_fragment:nm,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:_m,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:xm,lights_lambert_pars_fragment:ym,lights_pars_begin:vm,lights_toon_fragment:Mm,lights_toon_pars_fragment:bm,lights_phong_fragment:wm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Em,lights_fragment_begin:Am,lights_fragment_maps:Rm,lights_fragment_end:Cm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Dm,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:km,map_particle_pars_fragment:Fm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Om,morphcolor_vertex:Hm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:$m,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:i0,premultiplied_alpha_fragment:n0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:x0,specularmap_pars_fragment:y0,tonemapping_fragment:v0,tonemapping_pars_fragment:_0,transmission_fragment:M0,transmission_pars_fragment:b0,uv_pars_fragment:w0,uv_pars_vertex:S0,uv_vertex:T0,worldpos_vertex:E0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:P0,cube_vert:I0,cube_frag:L0,depth_vert:D0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:k0,equirect_vert:F0,equirect_frag:z0,linedashed_vert:B0,linedashed_frag:O0,meshbasic_vert:H0,meshbasic_frag:V0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:K0,meshphysical_frag:j0,meshtoon_vert:Q0,meshtoon_frag:tg,points_vert:eg,points_frag:ig,shadow_vert:ng,shadow_frag:sg,sprite_vert:rg,sprite_frag:og},ot={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Pi={basic:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ve([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ve([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ve([ot.points,ot.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ve([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ve([ot.common,ot.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ve([ot.sprite,ot.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ve([ot.common,ot.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ve([ot.lights,ot.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Pi.physical={uniforms:Ve([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Qr={r:0,b:0,g:0},Ln=new fi,ag=new le;function lg(r,t,e,i,n,s,o){let a=new ct(0),l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,b=g(y);b===null?m(a,l):b&&b.isColor&&(m(b,1),v=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,v){let b=g(v);b&&(b.isCubeTexture||b.mapping===ia)?(h===void 0&&(h=new gt(new Ot(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:As(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ln.copy(v.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(Ln)),h.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ce,(d!==b||u!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new gt(new oi(2,2),new ye({name:"BackgroundMaterial",uniforms:As(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(Qr,md(r)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:p}}function cg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,o=!1;function a(_,w,L,N,B){let X=!1,z=d(N,L,w);s!==z&&(s=z,c(s.object)),X=f(_,N,L,B),X&&g(_,N,L,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(_,w,L,N),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(_){return r.bindVertexArray(_)}function h(_){return r.deleteVertexArray(_)}function d(_,w,L){let N=L.wireframe===!0,B=i[_.id];B===void 0&&(B={},i[_.id]=B);let X=B[w.id];X===void 0&&(X={},B[w.id]=X);let z=X[N];return z===void 0&&(z=u(l()),X[N]=z),z}function u(_){let w=[],L=[],N=[];for(let B=0;B<e;B++)w[B]=0,L[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:N,object:_,attributes:{},index:null}}function f(_,w,L,N){let B=s.attributes,X=w.attributes,z=0,Y=L.getAttributes();for(let V in Y)if(Y[V].location>=0){let st=B[V],ht=X[V];if(ht===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),st===void 0||st.attribute!==ht||ht&&st.data!==ht.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(_,w,L,N){let B={},X=w.attributes,z=0,Y=L.getAttributes();for(let V in Y)if(Y[V].location>=0){let st=X[V];st===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(st=_.instanceColor));let ht={};ht.attribute=st,st&&st.data&&(ht.data=st.data),B[V]=ht,z++}s.attributes=B,s.attributesNum=z,s.index=N}function x(){let _=s.newAttributes;for(let w=0,L=_.length;w<L;w++)_[w]=0}function p(_){m(_,0)}function m(_,w){let L=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;L[_]=1,N[_]===0&&(r.enableVertexAttribArray(_),N[_]=1),B[_]!==w&&(r.vertexAttribDivisor(_,w),B[_]=w)}function y(){let _=s.newAttributes,w=s.enabledAttributes;for(let L=0,N=w.length;L<N;L++)w[L]!==_[L]&&(r.disableVertexAttribArray(L),w[L]=0)}function v(_,w,L,N,B,X,z){z===!0?r.vertexAttribIPointer(_,w,L,B,X):r.vertexAttribPointer(_,w,L,N,B,X)}function b(_,w,L,N){x();let B=N.attributes,X=L.getAttributes(),z=w.defaultAttributeValues;for(let Y in X){let V=X[Y];if(V.location>=0){let rt=B[Y];if(rt===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){let st=rt.normalized,ht=rt.itemSize,Nt=t.get(rt);if(Nt===void 0)continue;let Vt=Nt.buffer,O=Nt.type,j=Nt.bytesPerElement,ut=O===r.INT||O===r.UNSIGNED_INT||rt.gpuType===Qc;if(rt.isInterleavedBufferAttribute){let at=rt.data,At=at.stride,Rt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Gt=0;Gt<V.locationSize;Gt++)m(V.location+Gt,at.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Gt=0;Gt<V.locationSize;Gt++)p(V.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let Gt=0;Gt<V.locationSize;Gt++)v(V.location+Gt,ht/V.locationSize,O,st,At*j,(Rt+ht/V.locationSize*Gt)*j,ut)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,rt.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let at=0;at<V.locationSize;at++)v(V.location+at,ht/V.locationSize,O,st,ht*j,ht/V.locationSize*at*j,ut)}}else if(z!==void 0){let st=z[Y];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(V.location,st);break;case 3:r.vertexAttrib3fv(V.location,st);break;case 4:r.vertexAttrib4fv(V.location,st);break;default:r.vertexAttrib1fv(V.location,st)}}}}y()}function R(){P();for(let _ in i){let w=i[_];for(let L in w){let N=w[L];for(let B in N)h(N[B].object),delete N[B];delete w[L]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;let w=i[_.id];for(let L in w){let N=w[L];for(let B in N)h(N[B].object),delete N[B];delete w[L]}delete i[_.id]}function A(_){for(let w in i){let L=i[w];if(L[_.id]===void 0)continue;let N=L[_.id];for(let B in N)h(N[B].object),delete N[B];delete L[_.id]}}function P(){k(),o=!0,s!==n&&(s=n,c(s.object))}function k(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:k,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function hg(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,i,u[x])}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ug(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){return!(A!==wi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==qi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gi&&!P)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:R,maxSamples:E}}function dg(r){let t=this,e=null,i=0,n=!1,s=!1,o=new Hi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!n||g===null||g.length===0||s&&!p)s?h(null):c();else{let y=s?0:i,v=y*4,b=m.clippingState||null;l.value=b,b=h(g,u,v,f);for(let R=0;R!==v;++R)b[R]=e[R];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,b=f;v!==x;++v,b+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function fg(r){let t=new WeakMap;function e(o,a){return a===Il?o.mapping=ws:a===Ll&&(o.mapping=Ss),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Il||a===Ll)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new dc(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Rs=class extends Do{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,mu=[.125,.215,.35,.446,.526,.582],kn=20,ll=new Rs,gu=new ct,cl=null,hl=0,ul=0,dl=!1,Un=(1+Math.sqrt(5))/2,us=1/Un,xu=[new M(-Un,us,0),new M(Un,us,0),new M(-us,0,Un),new M(us,0,Un),new M(0,Un,-us),new M(0,Un,us),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cl,hl,ul),this._renderer.xr.enabled=dl,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:ai,format:wi,colorSpace:pn,depthBuffer:!1},n=yu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pg(s)),this._blurMaterial=mg(s,t,e)}return n}_compileMaterial(t){let e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,i,n){let a=new Ie(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(gu),h.toneMapping=cn,h.autoClear=!1;let f=new te({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new gt(new Ot,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(gu),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;to(n,y*v,m>2?v:0,v,v),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ws||t.mapping===Ss;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let s=n?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;to(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ll)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xu[(n-s-1)%xu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,n,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",s),this._halfBlur(o,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new gt(this._lodPlanes[n],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*kn-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):kn;p>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);let m=[],y=0;for(let A=0;A<kn;++A){let P=A/x,k=Math.exp(-P*P/2);m.push(k),A===0?y+=k:A<p&&(y+=2*k)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let b=this._sizeLods[n],R=3*b*(n>v-gs?n-v+gs:0),E=4*(this._cubeSize-b);to(e,R,E,3*b,2*b),l.setRenderTarget(e),l.render(d,ll)}};function pg(r){let t=[],e=[],i=[],n=r,s=r-gs+1+mu.length;for(let o=0;o<s;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>r-gs?l=mu[o-r+gs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*f),v=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,P=E>2?0:-1,k=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(k,x*g*E),v.set(u,p*g*E);let _=[E,E,E,E,E,E];b.set(_,m*g*E)}let R=new oe;R.setAttribute("position",new pe(y,x)),R.setAttribute("uv",new pe(v,p)),R.setAttribute("faceIndex",new pe(b,m)),t.push(R),n>gs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yu(r,t,e){let i=new ke(r,t,e);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function mg(r,t,e){let i=new Float32Array(kn),n=new M(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function vu(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function _u(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gg(r){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Il||l===Ll,h=l===ws||l===Ss;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Cs(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Cs(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function xg(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&_o("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function yg(r,t,e,i){let n={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}u.removeEventListener("dispose",o),delete n[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],r.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,b=y.length;v<b;v+=3){let R=y[v+0],E=y[v+1],A=y[v+2];u.push(R,E,E,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let R=v+0,E=v+1,A=v+2;u.push(R,E,E,A,A,R)}}else return;let p=new(fd(u)?Lo:Io)(u,1);p.version=x;let m=s.get(d);m&&t.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function vg(r,t,e){let i;function n(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(i,f,s,u*o),e.update(f,i,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,u*o,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function d(u,f,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<x.length;y++)e.update(m,i,x[y])}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function _g(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Mg(r,t,e){let i=new WeakMap,n=new ae;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let k=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",k)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*R*4*d),A=new Co(E,b,R,d);A.type=Gi,A.needsUpdate=!0;let P=v*4;for(let _=0;_<d;_++){let w=p[_],L=m[_],N=y[_],B=b*R*4*_;for(let X=0;X<w.count;X++){let z=X*P;f===!0&&(n.fromBufferAttribute(w,X),E[B+z+0]=n.x,E[B+z+1]=n.y,E[B+z+2]=n.z,E[B+z+3]=0),g===!0&&(n.fromBufferAttribute(L,X),E[B+z+4]=n.x,E[B+z+5]=n.y,E[B+z+6]=n.z,E[B+z+7]=0),x===!0&&(n.fromBufferAttribute(N,X),E[B+z+8]=n.x,E[B+z+9]=n.y,E[B+z+10]=n.z,E[B+z+11]=N.itemSize===4?n.w:1)}}u={count:d,texture:A,size:new et(b,R)},i.set(a,u),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function bg(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var No=class extends ri{constructor(t,e,i,n,s,o,a,l,c,h=ys){if(h!==ys&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ys&&(i=Bn),i===void 0&&h===Es&&(i=Ts),super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xd=new ri,Mu=new No(1,1),yd=new Co,vd=new hc,_d=new Uo,bu=[],wu=[],Su=new Float32Array(16),Tu=new Float32Array(9),Eu=new Float32Array(4);function Ns(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=bu[n];if(s===void 0&&(s=new Float32Array(n),bu[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ae(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Re(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function sa(r,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function wg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Sg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2fv(this.addr,t),Re(e,t)}}function Tg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;r.uniform3fv(this.addr,t),Re(e,t)}}function Eg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4fv(this.addr,t),Re(e,t)}}function Ag(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Eu.set(i),r.uniformMatrix2fv(this.addr,!1,Eu),Re(e,i)}}function Rg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Tu.set(i),r.uniformMatrix3fv(this.addr,!1,Tu),Re(e,i)}}function Cg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Su.set(i),r.uniformMatrix4fv(this.addr,!1,Su),Re(e,i)}}function Pg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ig(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2iv(this.addr,t),Re(e,t)}}function Lg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3iv(this.addr,t),Re(e,t)}}function Dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4iv(this.addr,t),Re(e,t)}}function Ug(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ng(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2uiv(this.addr,t),Re(e,t)}}function kg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3uiv(this.addr,t),Re(e,t)}}function Fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4uiv(this.addr,t),Re(e,t)}}function zg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Mu.compareFunction=dd,s=Mu):s=xd,e.setTexture2D(t||s,n)}function Bg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||vd,n)}function Og(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||_d,n)}function Hg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||yd,n)}function Vg(r){switch(r){case 5126:return wg;case 35664:return Sg;case 35665:return Tg;case 35666:return Eg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return kg;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Hg}}function Gg(r,t){r.uniform1fv(this.addr,t)}function Wg(r,t){let e=Ns(t,this.size,2);r.uniform2fv(this.addr,e)}function Xg(r,t){let e=Ns(t,this.size,3);r.uniform3fv(this.addr,e)}function qg(r,t){let e=Ns(t,this.size,4);r.uniform4fv(this.addr,e)}function Yg(r,t){let e=Ns(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function $g(r,t){let e=Ns(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Zg(r,t){let e=Ns(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Jg(r,t){r.uniform1iv(this.addr,t)}function Kg(r,t){r.uniform2iv(this.addr,t)}function jg(r,t){r.uniform3iv(this.addr,t)}function Qg(r,t){r.uniform4iv(this.addr,t)}function tx(r,t){r.uniform1uiv(this.addr,t)}function ex(r,t){r.uniform2uiv(this.addr,t)}function ix(r,t){r.uniform3uiv(this.addr,t)}function nx(r,t){r.uniform4uiv(this.addr,t)}function sx(r,t,e){let i=this.cache,n=t.length,s=sa(e,n);Ae(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||xd,s[o])}function rx(r,t,e){let i=this.cache,n=t.length,s=sa(e,n);Ae(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||vd,s[o])}function ox(r,t,e){let i=this.cache,n=t.length,s=sa(e,n);Ae(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||_d,s[o])}function ax(r,t,e){let i=this.cache,n=t.length,s=sa(e,n);Ae(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||yd,s[o])}function lx(r){switch(r){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return $g;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return tx;case 36294:return ex;case 36295:return ix;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}var fc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Vg(e.type)}},pc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lx(e.type)}},mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},fl=/(\w+)(\])?(\[|\.)?/g;function Au(r,t){r.seq.push(t),r.map[t.id]=t}function cx(r,t,e){let i=r.name,n=i.length;for(fl.lastIndex=0;;){let s=fl.exec(i),o=fl.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Au(e,c===void 0?new fc(a,r,t):new pc(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new mc(a),Au(e,d)),e=d}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),o=t.getUniformLocation(e,s.name);cx(s,o,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Ru(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var hx=37297,ux=0;function dx(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function fx(r){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(r),i;switch(t===e?i="":t===To&&e===So?i="LinearDisplayP3ToLinearSRGB":t===So&&e===To&&(i="LinearSRGBToLinearDisplayP3"),r){case pn:case na:return[i,"LinearTransferOETF"];case Ge:case rh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Cu(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+dx(r.getShaderSource(t),o)}else return n}function px(r,t){let e=fx(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mx(r,t){let e;switch(t){case $c:e="Linear";break;case Zc:e="Reinhard";break;case Jc:e="Cineon";break;case Kc:e="ACESFilmic";break;case jc:e="AgX";break;case vr:e="Neutral";break;case If:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var eo=new M;function gx(){Qt.getLuminanceCoefficients(eo);let r=eo.x.toFixed(4),t=eo.y.toFixed(4),e=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function yx(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function vx(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function sr(r){return r!==""}function Pu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(r){return r.replace(_x,bx)}var Mx=new Map;function bx(r,t){let e=Ft[t];if(e===void 0){let i=Mx.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return gc(e)}var wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(r){return r.replace(wx,Sx)}function Sx(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Du(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ex(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Ss:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ax(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function Rx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qu:t="ENVMAP_BLENDING_MULTIPLY";break;case Cf:t="ENVMAP_BLENDING_MIX";break;case Pf:t="ENVMAP_BLENDING_ADD";break}return t}function Cx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Px(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tx(e),c=Ex(e),h=Ax(e),d=Rx(e),u=Cx(e),f=xx(e),g=yx(s),x=n.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`)):(p=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),m=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cn?"#define TONE_MAPPING":"",e.toneMapping!==cn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==cn?mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,px("linearToOutputTexel",e.outputColorSpace),gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=gc(o),o=Pu(o,e),o=Iu(o,e),a=gc(a),a=Pu(a,e),a=Iu(a,e),o=Lu(o),a=Lu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=y+p+o,b=y+m+a,R=Ru(n,n.VERTEX_SHADER,v),E=Ru(n,n.FRAGMENT_SHADER,b);n.attachShader(x,R),n.attachShader(x,E),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(w){if(r.debug.checkShaderErrors){let L=n.getProgramInfoLog(x).trim(),N=n.getShaderInfoLog(R).trim(),B=n.getShaderInfoLog(E).trim(),X=!0,z=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,R,E);else{let Y=Cu(n,R,"vertex"),V=Cu(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+Y+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||B==="")&&(z=!1);z&&(w.diagnostics={runnable:X,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:B,prefix:m}})}n.deleteShader(R),n.deleteShader(E),P=new Ms(n,x),k=vx(n,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let k;this.getAttributes=function(){return k===void 0&&A(this),k};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(x,hx)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ux++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=E,this}var Ix=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new yc(t),e.set(t,i)),i}},yc=class{constructor(t){this.id=Ix++,this.code=t,this.usedTimes=0}};function Lx(r,t,e,i,n,s,o){let a=new Po,l=new xc,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,f=n.vertexTextures,g=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,w,L,N,B){let X=N.fog,z=B.geometry,Y=_.isMeshStandardMaterial?N.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||Y),rt=V&&V.mapping===ia?V.image.height:null,st=x[_.type];_.precision!==null&&(g=n.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Nt=ht!==void 0?ht.length:0,Vt=0;z.morphAttributes.position!==void 0&&(Vt=1),z.morphAttributes.normal!==void 0&&(Vt=2),z.morphAttributes.color!==void 0&&(Vt=3);let O,j,ut,at;if(st){let Je=Pi[st];O=Je.vertexShader,j=Je.fragmentShader}else O=_.vertexShader,j=_.fragmentShader,l.update(_),ut=l.getVertexShaderID(_),at=l.getFragmentShaderID(_);let At=r.getRenderTarget(),Rt=B.isInstancedMesh===!0,Gt=B.isBatchedMesh===!0,Yt=!!_.map,Wt=!!_.matcap,I=!!V,ti=!!_.aoMap,$t=!!_.lightMap,Kt=!!_.bumpMap,It=!!_.normalMap,de=!!_.displacementMap,Ut=!!_.emissiveMap,C=!!_.metalnessMap,S=!!_.roughnessMap,H=_.anisotropy>0,Z=_.clearcoat>0,Q=_.dispersion>0,$=_.iridescence>0,St=_.sheen>0,lt=_.transmission>0,xt=H&&!!_.anisotropyMap,jt=Z&&!!_.clearcoatMap,it=Z&&!!_.clearcoatNormalMap,yt=Z&&!!_.clearcoatRoughnessMap,Lt=$&&!!_.iridescenceMap,Dt=$&&!!_.iridescenceThicknessMap,vt=St&&!!_.sheenColorMap,Zt=St&&!!_.sheenRoughnessMap,kt=!!_.specularMap,ue=!!_.specularColorMap,D=!!_.specularIntensityMap,pt=lt&&!!_.transmissionMap,q=lt&&!!_.thicknessMap,J=!!_.gradientMap,dt=!!_.alphaMap,mt=_.alphaTest>0,Jt=!!_.alphaHash,Te=!!_.extensions,Ze=cn;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ze=r.toneMapping);let ee={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:O,fragmentShader:j,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&B._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&B.instanceColor!==null,instancingMorph:Rt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:pn,alphaToCoverage:!!_.alphaToCoverage,map:Yt,matcap:Wt,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:rt,aoMap:ti,lightMap:$t,bumpMap:Kt,normalMap:It,displacementMap:f&&de,emissiveMap:Ut,normalMapObjectSpace:It&&_.normalMapType===Nf,normalMapTangentSpace:It&&_.normalMapType===ud,metalnessMap:C,roughnessMap:S,anisotropy:H,anisotropyMap:xt,clearcoat:Z,clearcoatMap:jt,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,dispersion:Q,iridescence:$,iridescenceMap:Lt,iridescenceThicknessMap:Dt,sheen:St,sheenColorMap:vt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:ue,specularIntensityMap:D,transmission:lt,transmissionMap:pt,thicknessMap:q,gradientMap:J,opaque:_.transparent===!1&&_.blending===xs&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:Jt,combine:_.combine,mapUv:Yt&&p(_.map.channel),aoMapUv:ti&&p(_.aoMap.channel),lightMapUv:$t&&p(_.lightMap.channel),bumpMapUv:Kt&&p(_.bumpMap.channel),normalMapUv:It&&p(_.normalMap.channel),displacementMapUv:de&&p(_.displacementMap.channel),emissiveMapUv:Ut&&p(_.emissiveMap.channel),metalnessMapUv:C&&p(_.metalnessMap.channel),roughnessMapUv:S&&p(_.roughnessMap.channel),anisotropyMapUv:xt&&p(_.anisotropyMap.channel),clearcoatMapUv:jt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&p(_.sheenRoughnessMap.channel),specularMapUv:kt&&p(_.specularMap.channel),specularColorMapUv:ue&&p(_.specularColorMap.channel),specularIntensityMapUv:D&&p(_.specularIntensityMap.channel),transmissionMapUv:pt&&p(_.transmissionMap.channel),thicknessMapUv:q&&p(_.thicknessMap.channel),alphaMapUv:dt&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(It||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Yt||dt),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Yt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===We,flipSided:_.side===Le,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Te&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&_.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function y(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(v(w,_),b(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function b(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function R(_){let w=x[_.type],L;if(w){let N=Pi[w];L=gn.clone(N.uniforms)}else L=_.uniforms;return L}function E(_,w){let L;for(let N=0,B=h.length;N<B;N++){let X=h[N];if(X.cacheKey===w){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Px(r,w,_,s),h.push(L)),L}function A(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function P(_){l.remove(_)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:E,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:k}}function Dx(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Ux(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Uu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Nu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(d,u,f,g,x,p){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},r[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=p),t++,m}function a(d,u,f,g,x,p){let m=o(d,u,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(d,u,f,g,x,p){let m=o(d,u,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Ux),i.length>1&&i.sort(u||Uu),n.length>1&&n.sort(u||Uu)}function h(){for(let d=t,u=r.length;d<u;d++){let f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function Nx(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new Nu,r.set(i,[o])):n>=s.length?(o=new Nu,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function kx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new ct};break;case"SpotLight":e={position:new M,direction:new M,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new M,halfWidth:new M,halfHeight:new M};break}return r[t.id]=e,e}}}function Fx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var zx=0;function Bx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ox(r){let t=new kx,e=Fx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let n=new M,s=new le,o=new le;function a(c){let h=0,d=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,v=0,b=0,R=0,E=0,A=0;c.sort(Bx);for(let k=0,_=c.length;k<_;k++){let w=c[k],L=w.color,N=w.intensity,B=w.distance,X=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=L.r*N,d+=L.g*N,u+=L.b*N;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],N);A++}else if(w.isDirectionalLight){let z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Y=w.shadow,V=e.get(w);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=w.shadow.matrix,y++}i.directional[f]=z,f++}else if(w.isSpotLight){let z=t.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=B,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[x]=z;let Y=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,Y.updateMatrices(w),w.castShadow&&E++),i.spotLightMatrix[x]=Y.matrix,w.castShadow){let V=e.get(w);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=X,b++}x++}else if(w.isRectAreaLight){let z=t.get(w);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=z,p++}else if(w.isPointLight){let z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){let Y=w.shadow,V=e.get(w);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=z,g++}else if(w.isHemisphereLight){let z=t.get(w);z.skyColor.copy(w.color).multiplyScalar(N),z.groundColor.copy(w.groundColor).multiplyScalar(N),i.hemi[m]=z,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==b||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=b,P.numSpotMaps=R,P.numLightProbes=A,i.version=zx++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let v=c[m];if(v.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),d++}else if(v.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),f++}else if(v.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function ku(r){let t=new Ox(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Hx(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new ku(r),t.set(n,[a])):s>=o.length?(a=new ku(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var vc=class extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_c=class extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wx(r,t,e){let i=new fr,n=new et,s=new et,o=new ae,a=new vc({depthPacking:Uf}),l=new _c,c={},h=e.maxTextureSize,d={[hn]:Le,[Le]:hn,[We]:We},u=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Vx,fragmentShader:Gx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new oe;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let m=this.type;this.render=function(E,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let k=r.getRenderTarget(),_=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ii),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=m!==Oi&&this.type===Oi,B=m===Oi&&this.type!==Oi;for(let X=0,z=E.length;X<z;X++){let Y=E[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let rt=V.getFrameExtents();if(n.multiply(rt),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/rt.x),n.x=s.x*rt.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/rt.y),n.y=s.y*rt.y,V.mapSize.y=s.y)),V.map===null||N===!0||B===!0){let ht=this.type!==Oi?{minFilter:di,magFilter:di}:{};V.map!==null&&V.map.dispose(),V.map=new ke(n.x,n.y,ht),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let st=V.getViewportCount();for(let ht=0;ht<st;ht++){let Nt=V.getViewport(ht);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),L.viewport(o),V.updateMatrices(Y,ht),i=V.getFrustum(),b(A,P,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Oi&&y(V,P),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(k,_,w)};function y(E,A){let P=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ke(n.x,n.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,P,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,P,f,x,null)}function v(E,A,P,k){let _=null,w=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=_.uuid,N=A.uuid,B=c[L];B===void 0&&(B={},c[L]=B);let X=B[N];X===void 0&&(X=_.clone(),B[N]=X,A.addEventListener("dispose",R)),_=X}if(_.visible=A.visible,_.wireframe=A.wireframe,k===Oi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let L=r.properties.get(_);L.light=P}return _}function b(E,A,P,k,_){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Oi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let N=t.update(E),B=E.material;if(Array.isArray(B)){let X=N.groups;for(let z=0,Y=X.length;z<Y;z++){let V=X[z],rt=B[V.materialIndex];if(rt&&rt.visible){let st=v(E,rt,k,_);E.onBeforeShadow(r,E,A,P,N,st,V),r.renderBufferDirect(P,null,N,st,E,V),E.onAfterShadow(r,E,A,P,N,st,V)}}}else if(B.visible){let X=v(E,B,k,_);E.onBeforeShadow(r,E,A,P,N,X,null),r.renderBufferDirect(P,null,N,X,E,null),E.onAfterShadow(r,E,A,P,N,X,null)}}let L=E.children;for(let N=0,B=L.length;N<B;N++)b(L[N],A,P,k,_)}function R(E){E.target.removeEventListener("dispose",R);for(let P in c){let k=c[P],_=E.target.uuid;_ in k&&(k[_].dispose(),delete k[_])}}}var Xx={[Sl]:Tl,[El]:Cl,[Al]:Pl,[bs]:Rl,[Tl]:Sl,[Cl]:El,[Pl]:Al,[Rl]:bs};function qx(r){function t(){let D=!1,pt=new ae,q=null,J=new ae(0,0,0,0);return{setMask:function(dt){q!==dt&&!D&&(r.colorMask(dt,dt,dt,dt),q=dt)},setLocked:function(dt){D=dt},setClear:function(dt,mt,Jt,Te,Ze){Ze===!0&&(dt*=Te,mt*=Te,Jt*=Te),pt.set(dt,mt,Jt,Te),J.equals(pt)===!1&&(r.clearColor(dt,mt,Jt,Te),J.copy(pt))},reset:function(){D=!1,q=null,J.set(-1,0,0,0)}}}function e(){let D=!1,pt=!1,q=null,J=null,dt=null;return{setReversed:function(mt){pt=mt},setTest:function(mt){mt?ut(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(mt){q!==mt&&!D&&(r.depthMask(mt),q=mt)},setFunc:function(mt){if(pt&&(mt=Xx[mt]),J!==mt){switch(mt){case Sl:r.depthFunc(r.NEVER);break;case Tl:r.depthFunc(r.ALWAYS);break;case El:r.depthFunc(r.LESS);break;case bs:r.depthFunc(r.LEQUAL);break;case Al:r.depthFunc(r.EQUAL);break;case Rl:r.depthFunc(r.GEQUAL);break;case Cl:r.depthFunc(r.GREATER);break;case Pl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=mt}},setLocked:function(mt){D=mt},setClear:function(mt){dt!==mt&&(r.clearDepth(mt),dt=mt)},reset:function(){D=!1,q=null,J=null,dt=null}}}function i(){let D=!1,pt=null,q=null,J=null,dt=null,mt=null,Jt=null,Te=null,Ze=null;return{setTest:function(ee){D||(ee?ut(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(ee){pt!==ee&&!D&&(r.stencilMask(ee),pt=ee)},setFunc:function(ee,Je,Ui){(q!==ee||J!==Je||dt!==Ui)&&(r.stencilFunc(ee,Je,Ui),q=ee,J=Je,dt=Ui)},setOp:function(ee,Je,Ui){(mt!==ee||Jt!==Je||Te!==Ui)&&(r.stencilOp(ee,Je,Ui),mt=ee,Jt=Je,Te=Ui)},setLocked:function(ee){D=ee},setClear:function(ee){Ze!==ee&&(r.clearStencil(ee),Ze=ee)},reset:function(){D=!1,pt=null,q=null,J=null,dt=null,mt=null,Jt=null,Te=null,Ze=null}}}let n=new t,s=new e,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,y=null,v=null,b=null,R=null,E=new ct(0,0,0),A=0,P=!1,k=null,_=null,w=null,L=null,N=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,z=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=z>=2);let V=null,rt={},st=r.getParameter(r.SCISSOR_BOX),ht=r.getParameter(r.VIEWPORT),Nt=new ae().fromArray(st),Vt=new ae().fromArray(ht);function O(D,pt,q,J){let dt=new Uint8Array(4),mt=r.createTexture();r.bindTexture(D,mt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<q;Jt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(pt,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(pt+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return mt}let j={};j[r.TEXTURE_2D]=O(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=O(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=O(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=O(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ut(r.DEPTH_TEST),s.setFunc(bs),$t(!1),Kt(Gh),ut(r.CULL_FACE),I(Ii);function ut(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function at(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function At(D,pt){return h[D]!==pt?(r.bindFramebuffer(D,pt),h[D]=pt,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=pt),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=pt),!0):!1}function Rt(D,pt){let q=u,J=!1;if(D){q=d.get(pt),q===void 0&&(q=[],d.set(pt,q));let dt=D.textures;if(q.length!==dt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Jt=dt.length;mt<Jt;mt++)q[mt]=r.COLOR_ATTACHMENT0+mt;q.length=dt.length,J=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,J=!0);J&&r.drawBuffers(q)}function Gt(D){return f!==D?(r.useProgram(D),f=D,!0):!1}let Yt={[Nn]:r.FUNC_ADD,[df]:r.FUNC_SUBTRACT,[ff]:r.FUNC_REVERSE_SUBTRACT};Yt[pf]=r.MIN,Yt[mf]=r.MAX;let Wt={[gf]:r.ZERO,[xf]:r.ONE,[yf]:r.SRC_COLOR,[bl]:r.SRC_ALPHA,[Sf]:r.SRC_ALPHA_SATURATE,[bf]:r.DST_COLOR,[_f]:r.DST_ALPHA,[vf]:r.ONE_MINUS_SRC_COLOR,[wl]:r.ONE_MINUS_SRC_ALPHA,[wf]:r.ONE_MINUS_DST_COLOR,[Mf]:r.ONE_MINUS_DST_ALPHA,[Tf]:r.CONSTANT_COLOR,[Ef]:r.ONE_MINUS_CONSTANT_COLOR,[Af]:r.CONSTANT_ALPHA,[Rf]:r.ONE_MINUS_CONSTANT_ALPHA};function I(D,pt,q,J,dt,mt,Jt,Te,Ze,ee){if(D===Ii){g===!0&&(at(r.BLEND),g=!1);return}if(g===!1&&(ut(r.BLEND),g=!0),D!==uf){if(D!==x||ee!==P){if((p!==Nn||v!==Nn)&&(r.blendEquation(r.FUNC_ADD),p=Nn,v=Nn),ee)switch(D){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mo:r.blendFunc(r.ONE,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,b=null,R=null,E.set(0,0,0),A=0,x=D,P=ee}return}dt=dt||pt,mt=mt||q,Jt=Jt||J,(pt!==p||dt!==v)&&(r.blendEquationSeparate(Yt[pt],Yt[dt]),p=pt,v=dt),(q!==m||J!==y||mt!==b||Jt!==R)&&(r.blendFuncSeparate(Wt[q],Wt[J],Wt[mt],Wt[Jt]),m=q,y=J,b=mt,R=Jt),(Te.equals(E)===!1||Ze!==A)&&(r.blendColor(Te.r,Te.g,Te.b,Ze),E.copy(Te),A=Ze),x=D,P=!1}function ti(D,pt){D.side===We?at(r.CULL_FACE):ut(r.CULL_FACE);let q=D.side===Le;pt&&(q=!q),$t(q),D.blending===xs&&D.transparent===!1?I(Ii):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),n.setMask(D.colorWrite);let J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),de(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(D){k!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),k=D)}function Kt(D){D!==cf?(ut(r.CULL_FACE),D!==_&&(D===Gh?r.cullFace(r.BACK):D===hf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),_=D}function It(D){D!==w&&(X&&r.lineWidth(D),w=D)}function de(D,pt,q){D?(ut(r.POLYGON_OFFSET_FILL),(L!==pt||N!==q)&&(r.polygonOffset(pt,q),L=pt,N=q)):at(r.POLYGON_OFFSET_FILL)}function Ut(D){D?ut(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function C(D){D===void 0&&(D=r.TEXTURE0+B-1),V!==D&&(r.activeTexture(D),V=D)}function S(D,pt,q){q===void 0&&(V===null?q=r.TEXTURE0+B-1:q=V);let J=rt[q];J===void 0&&(J={type:void 0,texture:void 0},rt[q]=J),(J.type!==D||J.texture!==pt)&&(V!==q&&(r.activeTexture(q),V=q),r.bindTexture(D,pt||j[D]),J.type=D,J.texture=pt)}function H(){let D=rt[V];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(D){Nt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Nt.copy(D))}function vt(D){Vt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Vt.copy(D))}function Zt(D,pt){let q=l.get(pt);q===void 0&&(q=new WeakMap,l.set(pt,q));let J=q.get(D);J===void 0&&(J=r.getUniformBlockIndex(pt,D.name),q.set(D,J))}function kt(D,pt){let J=l.get(pt).get(D);a.get(pt)!==J&&(r.uniformBlockBinding(pt,J,D.__bindingPointIndex),a.set(pt,J))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,rt={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,y=null,v=null,b=null,R=null,E=new ct(0,0,0),A=0,P=!1,k=null,_=null,w=null,L=null,N=null,Nt.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ut,disable:at,bindFramebuffer:At,drawBuffers:Rt,useProgram:Gt,setBlending:I,setMaterial:ti,setFlipSided:$t,setCullFace:Kt,setLineWidth:It,setPolygonOffset:de,setScissorTest:Ut,activeTexture:C,bindTexture:S,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:yt,texImage3D:Lt,updateUBOMapping:Zt,uniformBlockBinding:kt,texStorage2D:jt,texStorage3D:it,texSubImage2D:$,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:Dt,viewport:vt,reset:ue}}function Fu(r,t,e,i){let n=Yx(i);switch(e){case sd:return r*t;case od:return r*t;case ad:return r*t*2;case ld:return r*t/n.components*n.byteLength;case ih:return r*t/n.components*n.byteLength;case cd:return r*t*2/n.components*n.byteLength;case nh:return r*t*2/n.components*n.byteLength;case rd:return r*t*3/n.components*n.byteLength;case wi:return r*t*4/n.components*n.byteLength;case sh:return r*t*4/n.components*n.byteLength;case mo:case go:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xo:case yo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Fl:return Math.max(r,16)*Math.max(t,8)/4;case Ul:case kl:return Math.max(r,8)*Math.max(t,8)/2;case zl:case Bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ql:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case jl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case vo:case ec:case ic:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hd:case nc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case sc:case rc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yx(r){switch(r){case qi:case ed:return{byteLength:1,components:1};case hr:case id:case ai:return{byteLength:2,components:1};case th:case eh:return{byteLength:2,components:4};case Bn:case Qc:case Gi:return{byteLength:4,components:1};case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function $x(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):Ao("canvas")}function x(C,S,H){let Z=1,Q=Ut(C);if((Q.width>H||Q.height>H)&&(Z=H/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(Z*Q.width),St=Math.floor(Z*Q.height);d===void 0&&(d=g($,St));let lt=S?g($,St):d;return lt.width=$,lt.height=St,lt.getContext("2d").drawImage(C,0,0,$,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+St+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==di&&C.minFilter!==Mi}function m(C){r.generateMipmap(C)}function y(C,S,H,Z,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===r.RED&&(H===r.FLOAT&&($=r.R32F),H===r.HALF_FLOAT&&($=r.R16F),H===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.R8UI),H===r.UNSIGNED_SHORT&&($=r.R16UI),H===r.UNSIGNED_INT&&($=r.R32UI),H===r.BYTE&&($=r.R8I),H===r.SHORT&&($=r.R16I),H===r.INT&&($=r.R32I)),S===r.RG&&(H===r.FLOAT&&($=r.RG32F),H===r.HALF_FLOAT&&($=r.RG16F),H===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RG8UI),H===r.UNSIGNED_SHORT&&($=r.RG16UI),H===r.UNSIGNED_INT&&($=r.RG32UI),H===r.BYTE&&($=r.RG8I),H===r.SHORT&&($=r.RG16I),H===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGB8UI),H===r.UNSIGNED_SHORT&&($=r.RGB16UI),H===r.UNSIGNED_INT&&($=r.RGB32UI),H===r.BYTE&&($=r.RGB8I),H===r.SHORT&&($=r.RGB16I),H===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGBA8UI),H===r.UNSIGNED_SHORT&&($=r.RGBA16UI),H===r.UNSIGNED_INT&&($=r.RGBA32UI),H===r.BYTE&&($=r.RGBA8I),H===r.SHORT&&($=r.RGBA16I),H===r.INT&&($=r.RGBA32I)),S===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),S===r.RGBA){let St=Q?wo:Qt.getTransfer(Z);H===r.FLOAT&&($=r.RGBA32F),H===r.HALF_FLOAT&&($=r.RGBA16F),H===r.UNSIGNED_BYTE&&($=St===ce?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(C,S){let H;return C?S===null||S===Bn||S===Ts?H=r.DEPTH24_STENCIL8:S===Gi?H=r.DEPTH32F_STENCIL8:S===hr&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Bn||S===Ts?H=r.DEPTH_COMPONENT24:S===Gi?H=r.DEPTH_COMPONENT32F:S===hr&&(H=r.DEPTH_COMPONENT16),H}function b(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==di&&C.minFilter!==Mi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){let S=C.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S)}function E(C){let S=C.target;S.removeEventListener("dispose",E),k(S)}function A(C){let S=i.get(C);if(S.__webglInit===void 0)return;let H=C.source,Z=u.get(H);if(Z){let Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(C),Object.keys(Z).length===0&&u.delete(H)}i.remove(C)}function P(C){let S=i.get(C);r.deleteTexture(S.__webglTexture);let H=C.source,Z=u.get(H);delete Z[S.__cacheKey],o.memory.textures--}function k(C){let S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Z]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=C.textures;for(let Z=0,Q=H.length;Z<Q;Z++){let $=i.get(H[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(C)}let _=0;function w(){_=0}function L(){let C=_;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),_+=1,C}function N(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function B(C,S){let H=i.get(C);if(C.isVideoTexture&&It(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(H,C,S);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+S)}function X(C,S){let H=i.get(C);if(C.version>0&&H.__version!==C.version){Vt(H,C,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+S)}function z(C,S){let H=i.get(C);if(C.version>0&&H.__version!==C.version){Vt(H,C,S);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+S)}function Y(C,S){let H=i.get(C);if(C.version>0&&H.__version!==C.version){O(H,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+S)}let V={[cr]:r.REPEAT,[Fn]:r.CLAMP_TO_EDGE,[Dl]:r.MIRRORED_REPEAT},rt={[di]:r.NEAREST,[Lf]:r.NEAREST_MIPMAP_NEAREST,[Nr]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[Ba]:r.LINEAR_MIPMAP_NEAREST,[zn]:r.LINEAR_MIPMAP_LINEAR},st={[kf]:r.NEVER,[Vf]:r.ALWAYS,[Ff]:r.LESS,[dd]:r.LEQUAL,[zf]:r.EQUAL,[Hf]:r.GEQUAL,[Bf]:r.GREATER,[Of]:r.NOTEQUAL};function ht(C,S){if(S.type===Gi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Mi||S.magFilter===Ba||S.magFilter===Nr||S.magFilter===zn||S.minFilter===Mi||S.minFilter===Ba||S.minFilter===Nr||S.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,V[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,V[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,V[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,rt[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===di||S.minFilter!==Nr&&S.minFilter!==zn||S.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Nt(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));let Z=S.source,Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));let $=N(S);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[$].usedTimes++;let St=Q[C.__cacheKey];St!==void 0&&(Q[C.__cacheKey].usedTimes--,St.usedTimes===0&&P(S)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return H}function Vt(C,S,H){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);let Q=Nt(C,S),$=S.source;e.bindTexture(Z,C.__webglTexture,r.TEXTURE0+H);let St=i.get($);if($.version!==St.__version||Q===!0){e.activeTexture(r.TEXTURE0+H);let lt=Qt.getPrimaries(Qt.workingColorSpace),xt=S.colorSpace===ln?null:Qt.getPrimaries(S.colorSpace),jt=S.colorSpace===ln||lt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=x(S.image,!1,n.maxTextureSize);it=de(S,it);let yt=s.convert(S.format,S.colorSpace),Lt=s.convert(S.type),Dt=y(S.internalFormat,yt,Lt,S.colorSpace,S.isVideoTexture);ht(Z,S);let vt,Zt=S.mipmaps,kt=S.isVideoTexture!==!0,ue=St.__version===void 0||Q===!0,D=$.dataReady,pt=b(S,it);if(S.isDepthTexture)Dt=v(S.format===Es,S.type),ue&&(kt?e.texStorage2D(r.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Dt,it.width,it.height,0,yt,Lt,null));else if(S.isDataTexture)if(Zt.length>0){kt&&ue&&e.texStorage2D(r.TEXTURE_2D,pt,Dt,Zt[0].width,Zt[0].height);for(let q=0,J=Zt.length;q<J;q++)vt=Zt[q],kt?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,Lt,vt.data):e.texImage2D(r.TEXTURE_2D,q,Dt,vt.width,vt.height,0,yt,Lt,vt.data);S.generateMipmaps=!1}else kt?(ue&&e.texStorage2D(r.TEXTURE_2D,pt,Dt,it.width,it.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,yt,Lt,it.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,it.width,it.height,0,yt,Lt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ue&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,Dt,Zt[0].width,Zt[0].height,it.depth);for(let q=0,J=Zt.length;q<J;q++)if(vt=Zt[q],S.format!==wi)if(yt!==null)if(kt){if(D)if(S.layerUpdates.size>0){let dt=Fu(vt.width,vt.height,S.format,S.type);for(let mt of S.layerUpdates){let Jt=vt.data.subarray(mt*dt/vt.data.BYTES_PER_ELEMENT,(mt+1)*dt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,mt,vt.width,vt.height,1,yt,Jt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,it.depth,yt,vt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Dt,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,it.depth,yt,Lt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Dt,vt.width,vt.height,it.depth,0,yt,Lt,vt.data)}else{kt&&ue&&e.texStorage2D(r.TEXTURE_2D,pt,Dt,Zt[0].width,Zt[0].height);for(let q=0,J=Zt.length;q<J;q++)vt=Zt[q],S.format!==wi?yt!==null?kt?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,Lt,vt.data):e.texImage2D(r.TEXTURE_2D,q,Dt,vt.width,vt.height,0,yt,Lt,vt.data)}else if(S.isDataArrayTexture)if(kt){if(ue&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,Dt,it.width,it.height,it.depth),D)if(S.layerUpdates.size>0){let q=Fu(it.width,it.height,S.format,S.type);for(let J of S.layerUpdates){let dt=it.data.subarray(J*q/it.data.BYTES_PER_ELEMENT,(J+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,yt,Lt,dt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Lt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,yt,Lt,it.data);else if(S.isData3DTexture)kt?(ue&&e.texStorage3D(r.TEXTURE_3D,pt,Dt,it.width,it.height,it.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Lt,it.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,yt,Lt,it.data);else if(S.isFramebufferTexture){if(ue)if(kt)e.texStorage2D(r.TEXTURE_2D,pt,Dt,it.width,it.height);else{let q=it.width,J=it.height;for(let dt=0;dt<pt;dt++)e.texImage2D(r.TEXTURE_2D,dt,Dt,q,J,0,yt,Lt,null),q>>=1,J>>=1}}else if(Zt.length>0){if(kt&&ue){let q=Ut(Zt[0]);e.texStorage2D(r.TEXTURE_2D,pt,Dt,q.width,q.height)}for(let q=0,J=Zt.length;q<J;q++)vt=Zt[q],kt?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,yt,Lt,vt):e.texImage2D(r.TEXTURE_2D,q,Dt,yt,Lt,vt);S.generateMipmaps=!1}else if(kt){if(ue){let q=Ut(it);e.texStorage2D(r.TEXTURE_2D,pt,Dt,q.width,q.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Lt,it)}else e.texImage2D(r.TEXTURE_2D,0,Dt,yt,Lt,it);p(S)&&m(Z),St.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function O(C,S,H){if(S.image.length!==6)return;let Z=Nt(C,S),Q=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);let $=i.get(Q);if(Q.version!==$.__version||Z===!0){e.activeTexture(r.TEXTURE0+H);let St=Qt.getPrimaries(Qt.workingColorSpace),lt=S.colorSpace===ln?null:Qt.getPrimaries(S.colorSpace),xt=S.colorSpace===ln||St===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let jt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let J=0;J<6;J++)!jt&&!it?yt[J]=x(S.image[J],!0,n.maxCubemapSize):yt[J]=it?S.image[J].image:S.image[J],yt[J]=de(S,yt[J]);let Lt=yt[0],Dt=s.convert(S.format,S.colorSpace),vt=s.convert(S.type),Zt=y(S.internalFormat,Dt,vt,S.colorSpace),kt=S.isVideoTexture!==!0,ue=$.__version===void 0||Z===!0,D=Q.dataReady,pt=b(S,Lt);ht(r.TEXTURE_CUBE_MAP,S);let q;if(jt){kt&&ue&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Zt,Lt.width,Lt.height);for(let J=0;J<6;J++){q=yt[J].mipmaps;for(let dt=0;dt<q.length;dt++){let mt=q[dt];S.format!==wi?Dt!==null?kt?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,mt.width,mt.height,Dt,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Zt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,mt.width,mt.height,Dt,vt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Zt,mt.width,mt.height,0,Dt,vt,mt.data)}}}else{if(q=S.mipmaps,kt&&ue){q.length>0&&pt++;let J=Ut(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Zt,J.width,J.height)}for(let J=0;J<6;J++)if(it){kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,yt[J].width,yt[J].height,Dt,vt,yt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,yt[J].width,yt[J].height,0,Dt,vt,yt[J].data);for(let dt=0;dt<q.length;dt++){let Jt=q[dt].image[J].image;kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Jt.width,Jt.height,Dt,vt,Jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Zt,Jt.width,Jt.height,0,Dt,vt,Jt.data)}}else{kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,vt,yt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,Dt,vt,yt[J]);for(let dt=0;dt<q.length;dt++){let mt=q[dt];kt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Dt,vt,mt.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Zt,Dt,vt,mt.image[J])}}}p(S)&&m(r.TEXTURE_CUBE_MAP),$.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function j(C,S,H,Z,Q,$){let St=s.convert(H.format,H.colorSpace),lt=s.convert(H.type),xt=y(H.internalFormat,St,lt,H.colorSpace);if(!i.get(S).__hasExternalTextures){let it=Math.max(1,S.width>>$),yt=Math.max(1,S.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,xt,it,yt,S.depth,0,St,lt,null):e.texImage2D(Q,$,xt,it,yt,0,St,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Kt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,i.get(H).__webglTexture,0,$t(S)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,i.get(H).__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(C,S,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){let Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,$=v(S.stencilBuffer,Q),St=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=$t(S);Kt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,$,S.width,S.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,C)}else{let Z=S.textures;for(let Q=0;Q<Z.length;Q++){let $=Z[Q],St=s.convert($.format,$.colorSpace),lt=s.convert($.type),xt=y($.internalFormat,St,lt,$.colorSpace),jt=$t(S);H&&Kt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,xt,S.width,S.height):Kt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,xt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,xt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);let Z=i.get(S.depthTexture).__webglTexture,Q=$t(S);if(S.depthTexture.format===ys)Kt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Es)Kt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function At(C){let S=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=r.createRenderbuffer(),ut(S.__webglDepthbuffer[Z],C,!1);else{let Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ut(S.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(C,S,H){let Z=i.get(C);S!==void 0&&j(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&At(C)}function Gt(C){let S=C.texture,H=i.get(C),Z=i.get(S);C.addEventListener("dispose",E);let Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,o.memory.textures++),$){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)H.__webglFramebuffer[lt][xt]=r.createFramebuffer()}else H.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)H.__webglFramebuffer[lt]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(St)for(let lt=0,xt=Q.length;lt<xt;lt++){let jt=i.get(Q[lt]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Kt(C)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){let xt=Q[lt];H.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);let jt=s.convert(xt.format,xt.colorSpace),it=s.convert(xt.type),yt=y(xt.internalFormat,jt,it,xt.colorSpace,C.isXRRenderTarget===!0),Lt=$t(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,yt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ht(r.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)j(H.__webglFramebuffer[lt][xt],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,xt);else j(H.__webglFramebuffer[lt],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(S)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let lt=0,xt=Q.length;lt<xt;lt++){let jt=Q[lt],it=i.get(jt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),ht(r.TEXTURE_2D,jt),j(H.__webglFramebuffer,C,jt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),p(jt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),ht(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)j(H.__webglFramebuffer[xt],C,S,r.COLOR_ATTACHMENT0,lt,xt);else j(H.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,lt,0);p(S)&&m(lt),e.unbindTexture()}C.depthBuffer&&At(C)}function Yt(C){let S=C.textures;for(let H=0,Z=S.length;H<Z;H++){let Q=S[H];if(p(Q)){let $=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,St=i.get(Q).__webglTexture;e.bindTexture($,St),m($),e.unbindTexture()}}}let Wt=[],I=[];function ti(C){if(C.samples>0){if(Kt(C)===!1){let S=C.textures,H=C.width,Z=C.height,Q=r.COLOR_BUFFER_BIT,$=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=i.get(C),lt=S.length>1;if(lt)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);let jt=i.get(S[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,jt,0)}r.blitFramebuffer(0,0,H,Z,0,0,H,Z,Q,r.NEAREST),l===!0&&(Wt.length=0,I.length=0,Wt.push(r.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Wt.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);let jt=i.get(S[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,jt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function $t(C){return Math.min(n.maxSamples,C.samples)}function Kt(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function de(C,S){let H=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==pn&&H!==ln&&(Qt.getTransfer(H)===ce?(Z!==wi||Q!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Ut(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=w,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=Rt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ti,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Kt}function Zx(r,t){function e(i,n=ln){let s,o=Qt.getTransfer(n);if(i===qi)return r.UNSIGNED_BYTE;if(i===th)return r.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===nd)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return r.BYTE;if(i===id)return r.SHORT;if(i===hr)return r.UNSIGNED_SHORT;if(i===Qc)return r.INT;if(i===Bn)return r.UNSIGNED_INT;if(i===Gi)return r.FLOAT;if(i===ai)return r.HALF_FLOAT;if(i===sd)return r.ALPHA;if(i===rd)return r.RGB;if(i===wi)return r.RGBA;if(i===od)return r.LUMINANCE;if(i===ad)return r.LUMINANCE_ALPHA;if(i===ys)return r.DEPTH_COMPONENT;if(i===Es)return r.DEPTH_STENCIL;if(i===ld)return r.RED;if(i===ih)return r.RED_INTEGER;if(i===cd)return r.RG;if(i===nh)return r.RG_INTEGER;if(i===sh)return r.RGBA_INTEGER;if(i===mo||i===go||i===xo||i===yo)if(o===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ul||i===Nl||i===kl||i===Fl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zl||i===Bl||i===Ol)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zl||i===Bl)return o===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ol)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===tc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vo||i===ec||i===ic)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===vo)return o===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hd||i===nc||i===sc||i===rc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Mc=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xe=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jx={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ri,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ye({vertexShader:Kx,fragmentShader:jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends un{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=new bc,p=e.getContextAttributes(),m=null,y=null,v=[],b=[],R=new et,E=null,A=new Ie;A.layers.enable(1),A.viewport=new ae;let P=new Ie;P.layers.enable(2),P.viewport=new ae;let k=[A,P],_=new Mc;_.layers.enable(1),_.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let j=v[O];return j===void 0&&(j=new or,v[O]=j),j.getTargetRaySpace()},this.getControllerGrip=function(O){let j=v[O];return j===void 0&&(j=new or,v[O]=j),j.getGripSpace()},this.getHand=function(O){let j=v[O];return j===void 0&&(j=new or,v[O]=j),j.getHandSpace()};function N(O){let j=b.indexOf(O.inputSource);if(j===-1)return;let ut=v[j];ut!==void 0&&(ut.update(O.inputSource,O.frame,c||o),ut.dispatchEvent({type:O.type,data:O.inputSource}))}function B(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",X);for(let O=0;O<v.length;O++){let j=b[O];j!==null&&(b[O]=null,v[O].disconnect(j))}w=null,L=null,x.reset(),t.setRenderTarget(m),f=null,u=null,d=null,n=null,y=null,Vt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(O){if(n=O,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",B),n.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),n.renderState.layers===void 0){let j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,j),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ke(f.framebufferWidth,f.framebufferHeight,{format:wi,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,ut=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=p.stencil?Es:ys,ut=p.stencil?Ts:Bn);let At={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(At),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ke(u.textureWidth,u.textureHeight,{format:wi,type:qi,depthTexture:new No(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Vt.setContext(n),Vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(O){for(let j=0;j<O.removed.length;j++){let ut=O.removed[j],at=b.indexOf(ut);at>=0&&(b[at]=null,v[at].disconnect(ut))}for(let j=0;j<O.added.length;j++){let ut=O.added[j],at=b.indexOf(ut);if(at===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=b.length){b.push(ut),at=Rt;break}else if(b[Rt]===null){b[Rt]=ut,at=Rt;break}if(at===-1)break}let At=v[at];At&&At.connect(ut)}}let z=new M,Y=new M;function V(O,j,ut){z.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(ut.matrixWorld);let at=z.distanceTo(Y),At=j.projectionMatrix.elements,Rt=ut.projectionMatrix.elements,Gt=At[14]/(At[10]-1),Yt=At[14]/(At[10]+1),Wt=(At[9]+1)/At[5],I=(At[9]-1)/At[5],ti=(At[8]-1)/At[0],$t=(Rt[8]+1)/Rt[0],Kt=Gt*ti,It=Gt*$t,de=at/(-ti+$t),Ut=de*-ti;if(j.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ut),O.translateZ(de),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),At[10]===-1)O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let C=Gt+de,S=Yt+de,H=Kt-Ut,Z=It+(at-Ut),Q=Wt*Yt/S*C,$=I*Yt/S*C;O.projectionMatrix.makePerspective(H,Z,Q,$,C,S),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function rt(O,j){j===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(j.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(n===null)return;let j=O.near,ut=O.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),_.near=P.near=A.near=j,_.far=P.far=A.far=ut,(w!==_.near||L!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,L=_.far);let at=O.parent,At=_.cameras;rt(_,at);for(let Rt=0;Rt<At.length;Rt++)rt(At[Rt],at);At.length===2?V(_,A,P):_.projectionMatrix.copy(A.projectionMatrix),st(O,_,at)};function st(O,j,ut){ut===null?O.matrix.copy(j.matrixWorld):(O.matrix.copy(ut.matrixWorld),O.matrix.invert(),O.matrix.multiply(j.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ur*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ht=null;function Nt(O,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;ut.length!==_.cameras.length&&(_.cameras.length=0,at=!0);for(let Rt=0;Rt<ut.length;Rt++){let Gt=ut[Rt],Yt=null;if(f!==null)Yt=f.getViewport(Gt);else{let I=d.getViewSubImage(u,Gt);Yt=I.viewport,Rt===0&&(t.setRenderTargetTextures(y,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let Wt=k[Rt];Wt===void 0&&(Wt=new Ie,Wt.layers.enable(Rt),Wt.viewport=new ae,k[Rt]=Wt),Wt.matrix.fromArray(Gt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Gt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Rt===0&&(_.matrix.copy(Wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),at===!0&&_.cameras.push(Wt)}let At=n.enabledFeatures;if(At&&At.includes("depth-sensing")){let Rt=d.getDepthInformation(ut[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,n.renderState)}}for(let ut=0;ut<v.length;ut++){let at=b[ut],At=v[ut];at!==null&&At!==void 0&&At.update(at,j,c||o)}ht&&ht(O,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let Vt=new gd;Vt.setAnimationLoop(Nt),this.setAnimationLoop=function(O){ht=O},this.dispose=function(){}}},Dn=new fi,Qx=new le;function ty(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,md(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Le&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Le&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),v=y.envMap,b=y.envMapRotation;v&&(p.envMap.value=v,Dn.copy(b),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),p.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(Dn)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Le&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ey(r,t,e,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let b=v.program;i.uniformBlockBinding(y,b)}function c(y,v){let b=n[y.id];b===void 0&&(g(y),b=h(y),n[y.id]=b,y.addEventListener("dispose",p));let R=v.program;i.updateUBOMapping(y,R);let E=t.render.frame;s[y.id]!==E&&(u(y),s[y.id]=E)}function h(y){let v=d();y.__bindingPointIndex=v;let b=r.createBuffer(),R=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,R,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let v=n[y.id],b=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,A=b.length;E<A;E++){let P=Array.isArray(b[E])?b[E]:[b[E]];for(let k=0,_=P.length;k<_;k++){let w=P[k];if(f(w,E,k,R)===!0){let L=w.__offset,N=Array.isArray(w.value)?w.value:[w.value],B=0;for(let X=0;X<N.length;X++){let z=N[X],Y=x(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,L+B,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,v,b,R){let E=y.value,A=v+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let P=R[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(y){let v=y.uniforms,b=0,R=16;for(let A=0,P=v.length;A<P;A++){let k=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,w=k.length;_<w;_++){let L=k[_],N=Array.isArray(L.value)?L.value:[L.value];for(let B=0,X=N.length;B<X;B++){let z=N[B],Y=x(z),V=b%R,rt=V%Y.boundary,st=V+rt;b+=rt,st!==0&&R-st<Y.storage&&(b+=R-st),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=Y.storage}}}let E=b%R;return E>0&&(b+=R-E),y.__size=b,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){let v=y.target;v.removeEventListener("dispose",p);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function m(){for(let y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:l,update:c,dispose:m}}var ko=class{constructor(t={}){let{canvas:e=rp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=cn,this.toneMappingExposure=1;let v=this,b=!1,R=0,E=0,A=null,P=-1,k=null,_=new ae,w=new ae,L=null,N=new ct(0),B=0,X=e.width,z=e.height,Y=1,V=null,rt=null,st=new ae(0,0,X,z),ht=new ae(0,0,X,z),Nt=!1,Vt=new fr,O=!1,j=!1,ut=new le,at=new le,At=new M,Rt=new ae,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function Wt(){return A===null?Y:1}let I=i;function ti(T,U){return e.getContext(T,U)}try{let T={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),I===null){let U="webgl2";if(I=ti(U,T),I===null)throw ti(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $t,Kt,It,de,Ut,C,S,H,Z,Q,$,St,lt,xt,jt,it,yt,Lt,Dt,vt,Zt,kt,ue,D;function pt(){$t=new xg(I),$t.init(),kt=new Zx(I,$t),Kt=new ug(I,$t,t,kt),It=new qx(I),Kt.reverseDepthBuffer&&It.buffers.depth.setReversed(!0),de=new _g(I),Ut=new Dx,C=new $x(I,$t,It,Ut,Kt,kt,de),S=new fg(v),H=new gg(v),Z=new Ap(I),ue=new cg(I,Z),Q=new yg(I,Z,de,ue),$=new bg(I,Q,Z,de),Dt=new Mg(I,Kt,C),it=new dg(Ut),St=new Lx(v,S,H,$t,Kt,ue,it),lt=new ty(v,Ut),xt=new Nx,jt=new Hx($t),Lt=new lg(v,S,H,It,$,u,l),yt=new Wx(v,$,Kt),D=new ey(I,de,Kt,It),vt=new hg(I,$t,de),Zt=new vg(I,$t,de),de.programs=St.programs,v.capabilities=Kt,v.extensions=$t,v.properties=Ut,v.renderLists=xt,v.shadowMap=yt,v.state=It,v.info=de}pt();let q=new wc(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=$t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(X,z,!1))},this.getSize=function(T){return T.set(X,z)},this.setSize=function(T,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,z=U,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),G===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(X*Y,z*Y).floor()},this.setDrawingBufferSize=function(T,U,G){X=T,z=U,Y=G,e.width=Math.floor(T*G),e.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(_)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,U,G,W){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,U,G,W),It.viewport(_.copy(st).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(ht)},this.setScissor=function(T,U,G,W){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,U,G,W),It.scissor(w.copy(ht).multiplyScalar(Y).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){It.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(T=!0,U=!0,G=!0){let W=0;if(T){let F=!1;if(A!==null){let nt=A.texture.format;F=nt===sh||nt===nh||nt===ih}if(F){let nt=A.texture.type,ft=nt===qi||nt===Bn||nt===hr||nt===Ts||nt===th||nt===eh,Mt=Lt.getClearColor(),wt=Lt.getClearAlpha(),Ct=Mt.r,Pt=Mt.g,Tt=Mt.b;ft?(f[0]=Ct,f[1]=Pt,f[2]=Tt,f[3]=wt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Ct,g[1]=Pt,g[2]=Tt,g[3]=wt,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),xt.dispose(),jt.dispose(),Ut.dispose(),S.dispose(),H.dispose(),$.dispose(),ue.dispose(),D.dispose(),St.dispose(),q.dispose(),q.removeEventListener("sessionstart",Nh),q.removeEventListener("sessionend",kh),An.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=de.autoReset,U=yt.enabled,G=yt.autoUpdate,W=yt.needsUpdate,F=yt.type;pt(),de.autoReset=T,yt.enabled=U,yt.autoUpdate=G,yt.needsUpdate=W,yt.type=F}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Jt(T){let U=T.target;U.removeEventListener("dispose",Jt),Te(U)}function Te(T){Ze(T),Ut.remove(T)}function Ze(T){let U=Ut.get(T).programs;U!==void 0&&(U.forEach(function(G){St.releaseProgram(G)}),T.isShaderMaterial&&St.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,W,F,nt){U===null&&(U=Gt);let ft=F.isMesh&&F.matrixWorld.determinant()<0,Mt=rf(T,U,G,W,F);It.setMaterial(W,ft);let wt=G.index,Ct=1;if(W.wireframe===!0){if(wt=Q.getWireframeAttribute(G),wt===void 0)return;Ct=2}let Pt=G.drawRange,Tt=G.attributes.position,se=Pt.start*Ct,fe=(Pt.start+Pt.count)*Ct;nt!==null&&(se=Math.max(se,nt.start*Ct),fe=Math.min(fe,(nt.start+nt.count)*Ct)),wt!==null?(se=Math.max(se,0),fe=Math.min(fe,wt.count)):Tt!=null&&(se=Math.max(se,0),fe=Math.min(fe,Tt.count));let ve=fe-se;if(ve<0||ve===1/0)return;ue.setup(F,W,Mt,G,wt);let ei,ie=vt;if(wt!==null&&(ei=Z.get(wt),ie=Zt,ie.setIndex(ei)),F.isMesh)W.wireframe===!0?(It.setLineWidth(W.wireframeLinewidth*Wt()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(F.isLine){let Et=W.linewidth;Et===void 0&&(Et=1),It.setLineWidth(Et*Wt()),F.isLineSegments?ie.setMode(I.LINES):F.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else F.isPoints?ie.setMode(I.POINTS):F.isSprite&&ie.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ie.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Et=F._multiDrawStarts,Ne=F._multiDrawCounts,ne=F._multiDrawCount,xi=wt?Z.get(wt).bytesPerElement:1,Kn=Ut.get(W).currentProgram.getUniforms();for(let ii=0;ii<ne;ii++)Kn.setValue(I,"_gl_DrawID",ii),ie.render(Et[ii]/xi,Ne[ii])}else if(F.isInstancedMesh)ie.renderInstances(se,ve,F.count);else if(G.isInstancedBufferGeometry){let Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ne=Math.min(G.instanceCount,Et);ie.renderInstances(se,ve,Ne)}else ie.render(se,ve)};function ee(T,U,G){T.transparent===!0&&T.side===We&&T.forceSinglePass===!1?(T.side=Le,T.needsUpdate=!0,Ur(T,U,G),T.side=hn,T.needsUpdate=!0,Ur(T,U,G),T.side=We):Ur(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),p=jt.get(G),p.init(U),y.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==G&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let W=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let nt=F.material;if(nt)if(Array.isArray(nt))for(let ft=0;ft<nt.length;ft++){let Mt=nt[ft];ee(Mt,G,F),W.add(Mt)}else ee(nt,G,F),W.add(nt)}),y.pop(),p=null,W},this.compileAsync=function(T,U,G=null){let W=this.compile(T,U,G);return new Promise(F=>{function nt(){if(W.forEach(function(ft){Ut.get(ft).currentProgram.isReady()&&W.delete(ft)}),W.size===0){F(T);return}setTimeout(nt,10)}$t.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Je=null;function Ui(T){Je&&Je(T)}function Nh(){An.stop()}function kh(){An.start()}let An=new gd;An.setAnimationLoop(Ui),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(T){Je=T,q.setAnimationLoop(T),T===null?An.stop():An.start()},q.addEventListener("sessionstart",Nh),q.addEventListener("sessionend",kh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,A),p=jt.get(T,y.length),p.init(U),y.push(p),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Vt.setFromProjectionMatrix(at),j=this.localClippingEnabled,O=it.init(this.clippingPlanes,j),x=xt.get(T,m.length),x.init(),m.push(x),q.enabled===!0&&q.isPresenting===!0){let nt=v.xr.getDepthSensingMesh();nt!==null&&Na(nt,U,-1/0,v.sortObjects)}Na(T,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(V,rt),Yt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Yt&&Lt.addToRenderList(x,T),this.info.render.frame++,O===!0&&it.beginShadows();let G=p.state.shadowsArray;yt.render(G,T,U),O===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=x.opaque,F=x.transmissive;if(p.setupLights(),U.isArrayCamera){let nt=U.cameras;if(F.length>0)for(let ft=0,Mt=nt.length;ft<Mt;ft++){let wt=nt[ft];zh(W,F,T,wt)}Yt&&Lt.render(T);for(let ft=0,Mt=nt.length;ft<Mt;ft++){let wt=nt[ft];Fh(x,T,wt,wt.viewport)}}else F.length>0&&zh(W,F,T,U),Yt&&Lt.render(T),Fh(x,T,U);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,U),ue.resetDefaultState(),P=-1,k=null,y.pop(),y.length>0?(p=y[y.length-1],O===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Na(T,U,G,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Vt.intersectsSprite(T)){W&&Rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(at);let ft=$.update(T),Mt=T.material;Mt.visible&&x.push(T,ft,Mt,G,Rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Vt.intersectsObject(T))){let ft=$.update(T),Mt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Rt.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Rt.copy(ft.boundingSphere.center)),Rt.applyMatrix4(T.matrixWorld).applyMatrix4(at)),Array.isArray(Mt)){let wt=ft.groups;for(let Ct=0,Pt=wt.length;Ct<Pt;Ct++){let Tt=wt[Ct],se=Mt[Tt.materialIndex];se&&se.visible&&x.push(T,ft,se,G,Rt.z,Tt)}}else Mt.visible&&x.push(T,ft,Mt,G,Rt.z,null)}}let nt=T.children;for(let ft=0,Mt=nt.length;ft<Mt;ft++)Na(nt[ft],U,G,W)}function Fh(T,U,G,W){let F=T.opaque,nt=T.transmissive,ft=T.transparent;p.setupLightsView(G),O===!0&&it.setGlobalState(v.clippingPlanes,G),W&&It.viewport(_.copy(W)),F.length>0&&Dr(F,U,G),nt.length>0&&Dr(nt,U,G),ft.length>0&&Dr(ft,U,G),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function zh(T,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ke(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?ai:qi,minFilter:zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let nt=p.state.transmissionRenderTarget[W.id],ft=W.viewport||_;nt.setSize(ft.z,ft.w);let Mt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Yt&&Lt.render(G);let wt=v.toneMapping;v.toneMapping=cn;let Ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),O===!0&&it.setGlobalState(v.clippingPlanes,W),Dr(T,G,W),C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Tt=0,se=U.length;Tt<se;Tt++){let fe=U[Tt],ve=fe.object,ei=fe.geometry,ie=fe.material,Et=fe.group;if(ie.side===We&&ve.layers.test(W.layers)){let Ne=ie.side;ie.side=Le,ie.needsUpdate=!0,Bh(ve,G,W,ei,ie,Et),ie.side=Ne,ie.needsUpdate=!0,Pt=!0}}Pt===!0&&(C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt))}v.setRenderTarget(Mt),v.setClearColor(N,B),Ct!==void 0&&(W.viewport=Ct),v.toneMapping=wt}function Dr(T,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,nt=T.length;F<nt;F++){let ft=T[F],Mt=ft.object,wt=ft.geometry,Ct=W===null?ft.material:W,Pt=ft.group;Mt.layers.test(G.layers)&&Bh(Mt,U,G,wt,Ct,Pt)}}function Bh(T,U,G,W,F,nt){T.onBeforeRender(v,U,G,W,F,nt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,U,G,W,T,nt),F.transparent===!0&&F.side===We&&F.forceSinglePass===!1?(F.side=Le,F.needsUpdate=!0,v.renderBufferDirect(G,U,W,F,T,nt),F.side=hn,F.needsUpdate=!0,v.renderBufferDirect(G,U,W,F,T,nt),F.side=We):v.renderBufferDirect(G,U,W,F,T,nt),T.onAfterRender(v,U,G,W,F,nt)}function Ur(T,U,G){U.isScene!==!0&&(U=Gt);let W=Ut.get(T),F=p.state.lights,nt=p.state.shadowsArray,ft=F.state.version,Mt=St.getParameters(T,F.state,nt,U,G),wt=St.getProgramCacheKey(Mt),Ct=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ct===void 0&&(T.addEventListener("dispose",Jt),Ct=new Map,W.programs=Ct);let Pt=Ct.get(wt);if(Pt!==void 0){if(W.currentProgram===Pt&&W.lightsStateVersion===ft)return Hh(T,Mt),Pt}else Mt.uniforms=St.getUniforms(T),T.onBeforeCompile(Mt,v),Pt=St.acquireProgram(Mt,wt),Ct.set(wt,Pt),W.uniforms=Mt.uniforms;let Tt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Tt.clippingPlanes=it.uniform),Hh(T,Mt),W.needsLights=af(T),W.lightsStateVersion=ft,W.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Pt,W.uniformsList=null,Pt}function Oh(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Ms.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Hh(T,U){let G=Ut.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function rf(T,U,G,W,F){U.isScene!==!0&&(U=Gt),C.resetTextureUnits();let nt=U.fog,ft=W.isMeshStandardMaterial?U.environment:null,Mt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pn,wt=(W.isMeshStandardMaterial?H:S).get(W.envMap||ft),Ct=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Tt=!!G.morphAttributes.position,se=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color,ve=cn;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=v.toneMapping);let ei=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=ei!==void 0?ei.length:0,Et=Ut.get(W),Ne=p.state.lights;if(O===!0&&(j===!0||T!==k)){let hi=T===k&&W.id===P;it.setState(W,T,hi)}let ne=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ne.state.version||Et.outputColorSpace!==Mt||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==wt||W.fog===!0&&Et.fog!==nt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Ct||Et.vertexTangents!==Pt||Et.morphTargets!==Tt||Et.morphNormals!==se||Et.morphColors!==fe||Et.toneMapping!==ve||Et.morphTargetsCount!==ie)&&(ne=!0):(ne=!0,Et.__version=W.version);let xi=Et.currentProgram;ne===!0&&(xi=Ur(W,U,F));let Kn=!1,ii=!1,ka=!1,Me=xi.getUniforms(),tn=Et.uniforms;if(It.useProgram(xi.program)&&(Kn=!0,ii=!0,ka=!0),W.id!==P&&(P=W.id,ii=!0),Kn||k!==T){Kt.reverseDepthBuffer?(ut.copy(T.projectionMatrix),ap(ut),lp(ut),Me.setValue(I,"projectionMatrix",ut)):Me.setValue(I,"projectionMatrix",T.projectionMatrix),Me.setValue(I,"viewMatrix",T.matrixWorldInverse);let hi=Me.map.cameraPosition;hi!==void 0&&hi.setValue(I,At.setFromMatrixPosition(T.matrixWorld)),Kt.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Me.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,ii=!0,ka=!0)}if(F.isSkinnedMesh){Me.setOptional(I,F,"bindMatrix"),Me.setOptional(I,F,"bindMatrixInverse");let hi=F.skeleton;hi&&(hi.boneTexture===null&&hi.computeBoneTexture(),Me.setValue(I,"boneTexture",hi.boneTexture,C))}F.isBatchedMesh&&(Me.setOptional(I,F,"batchingTexture"),Me.setValue(I,"batchingTexture",F._matricesTexture,C),Me.setOptional(I,F,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",F._indirectTexture,C),Me.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",F._colorsTexture,C));let Fa=G.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0)&&Dt.update(F,G,xi),(ii||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,Me.setValue(I,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(tn.envMap.value=wt,tn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),ii&&(Me.setValue(I,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&of(tn,ka),nt&&W.fog===!0&&lt.refreshFogUniforms(tn,nt),lt.refreshMaterialUniforms(tn,W,Y,z,p.state.transmissionRenderTarget[T.id]),Ms.upload(I,Oh(Et),tn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ms.upload(I,Oh(Et),tn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Me.setValue(I,"center",F.center),Me.setValue(I,"modelViewMatrix",F.modelViewMatrix),Me.setValue(I,"normalMatrix",F.normalMatrix),Me.setValue(I,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let hi=W.uniformsGroups;for(let za=0,lf=hi.length;za<lf;za++){let Vh=hi[za];D.update(Vh,xi),D.bind(Vh,xi)}}return xi}function of(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function af(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,G){Ut.get(T.texture).__webglTexture=U,Ut.get(T.depthTexture).__webglTexture=G;let W=Ut.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let G=Ut.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){A=T,R=U,E=G;let W=!0,F=null,nt=!1,ft=!1;if(T){let wt=Ut.get(T);if(wt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(wt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(wt.__hasExternalTextures)C.rebindTextures(T,Ut.get(T.texture).__webglTexture,Ut.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Tt=T.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&Ut.has(Tt)&&(T.width!==Tt.image.width||T.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}let Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ft=!0);let Pt=Ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?F=Pt[U][G]:F=Pt[U],nt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?F=Ut.get(T).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[G]:F=Pt,_.copy(T.viewport),w.copy(T.scissor),L=T.scissorTest}else _.copy(st).multiplyScalar(Y).floor(),w.copy(ht).multiplyScalar(Y).floor(),L=Nt;if(It.bindFramebuffer(I.FRAMEBUFFER,F)&&W&&It.drawBuffers(T,F),It.viewport(_),It.scissor(w),It.setScissorTest(L),nt){let wt=Ut.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,G)}else if(ft){let wt=Ut.get(T.texture),Ct=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,G||0,Ct)}P=-1},this.readRenderTargetPixels=function(T,U,G,W,F,nt,ft){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){It.bindFramebuffer(I.FRAMEBUFFER,Mt);try{let wt=T.texture,Ct=wt.format,Pt=wt.type;if(!Kt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&G>=0&&G<=T.height-F&&I.readPixels(U,G,W,F,kt.convert(Ct),kt.convert(Pt),nt)}finally{let wt=A!==null?Ut.get(A).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,W,F,nt,ft){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){let wt=T.texture,Ct=wt.format,Pt=wt.type;if(!Kt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-W&&G>=0&&G<=T.height-F){It.bindFramebuffer(I.FRAMEBUFFER,Mt);let Tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),I.readPixels(U,G,W,F,kt.convert(Ct),kt.convert(Pt),0);let se=A!==null?Ut.get(A).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,se);let fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await op(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(Tt),I.deleteSync(fe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,G=0){T.isTexture!==!0&&(_o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-G),F=Math.floor(T.image.width*W),nt=Math.floor(T.image.height*W),ft=U!==null?U.x:0,Mt=U!==null?U.y:0;C.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ft,Mt,F,nt),It.unbindTexture()},this.copyTextureToTexture=function(T,U,G=null,W=null,F=0){T.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let nt,ft,Mt,wt,Ct,Pt;G!==null?(nt=G.max.x-G.min.x,ft=G.max.y-G.min.y,Mt=G.min.x,wt=G.min.y):(nt=T.image.width,ft=T.image.height,Mt=0,wt=0),W!==null?(Ct=W.x,Pt=W.y):(Ct=0,Pt=0);let Tt=kt.convert(U.format),se=kt.convert(U.type);C.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let fe=I.getParameter(I.UNPACK_ROW_LENGTH),ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),ie=I.getParameter(I.UNPACK_SKIP_ROWS),Et=I.getParameter(I.UNPACK_SKIP_IMAGES),Ne=T.isCompressedTexture?T.mipmaps[F]:T.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Ct,Pt,nt,ft,Tt,se,Ne.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Ct,Pt,Ne.width,Ne.height,Tt,Ne.data):I.texSubImage2D(I.TEXTURE_2D,F,Ct,Pt,nt,ft,Tt,se,Ne),I.pixelStorei(I.UNPACK_ROW_LENGTH,fe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Et),F===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G=null,W=null,F=0){T.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0);let nt,ft,Mt,wt,Ct,Pt,Tt,se,fe,ve=T.isCompressedTexture?T.mipmaps[F]:T.image;G!==null?(nt=G.max.x-G.min.x,ft=G.max.y-G.min.y,Mt=G.max.z-G.min.z,wt=G.min.x,Ct=G.min.y,Pt=G.min.z):(nt=ve.width,ft=ve.height,Mt=ve.depth,wt=0,Ct=0,Pt=0),W!==null?(Tt=W.x,se=W.y,fe=W.z):(Tt=0,se=0,fe=0);let ei=kt.convert(U.format),ie=kt.convert(U.type),Et;if(U.isData3DTexture)C.setTexture3D(U,0),Et=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),Et=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Ne=I.getParameter(I.UNPACK_ROW_LENGTH),ne=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xi=I.getParameter(I.UNPACK_SKIP_PIXELS),Kn=I.getParameter(I.UNPACK_SKIP_ROWS),ii=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pt),T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Et,F,Tt,se,fe,nt,ft,Mt,ei,ie,ve.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,F,Tt,se,fe,nt,ft,Mt,ei,ve.data):I.texSubImage3D(Et,F,Tt,se,fe,nt,ft,Mt,ei,ie,ve),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ii),F===0&&U.generateMipmaps&&I.generateMipmap(Et),It.unbindTexture()},this.initRenderTarget=function(T){Ut.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),It.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,It.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===rh?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===na?"display-p3":"srgb"}};var Fo=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dn=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},zo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},He=new M,pr=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ps=class extends Li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ds,Qs=new M,fs=new M,ps=new M,ms=new et,tr=new et,Md=new le,io=new M,er=new M,no=new M,zu=new et,pl=new et,Bu=new et,mr=class extends De{constructor(t=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zo(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new pr(i,3,0,!1)),ds.setAttribute("uv",new pr(i,2,3,!1))}this.geometry=ds,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let o=this.center;so(io.set(-.5,-.5,0),ps,o,fs,n,s),so(er.set(.5,-.5,0),ps,o,fs,n,s),so(no.set(.5,.5,0),ps,o,fs,n,s),zu.set(0,0),pl.set(1,0),Bu.set(1,1);let a=t.ray.intersectTriangle(io,er,no,!1,Qs);if(a===null&&(so(er.set(-.5,.5,0),ps,o,fs,n,s),pl.set(0,1),a=t.ray.intersectTriangle(io,no,er,!1,Qs),a===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:Vi.getInterpolation(Qs,io,er,no,zu,pl,Bu,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function so(r,t,e,i,n,s){ms.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(tr.x=s*ms.x-n*ms.y,tr.y=n*ms.x+s*ms.y):tr.copy(ms),r.copy(t),r.x+=tr.x,r.y+=tr.y,r.applyMatrix4(Md)}var Yi=class extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Bo=new M,Oo=new M,Ou=new le,ir=new dr,ro=new Hn,ml=new M,Hu=new M,gr=class extends De{constructor(t=new oe,e=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Bo.fromBufferAttribute(e,n-1),Oo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Bo.distanceTo(Oo);t.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(n),ro.radius+=s,t.ray.intersectsSphere(ro)===!1)return;Ou.copy(n).invert(),ir.copy(t.ray).applyMatrix4(Ou);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),y=h.getX(x+1),v=oo(this,t,ir,l,m,y);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=oo(this,t,ir,l,x,p);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=oo(this,t,ir,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=oo(this,t,ir,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function oo(r,t,e,i,n,s){let o=r.geometry.attributes.position;if(Bo.fromBufferAttribute(o,n),Oo.fromBufferAttribute(o,s),e.distanceSqToSegment(Bo,Oo,ml,Hu)>i)return;ml.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(ml);if(!(l<t.near||l>t.far))return{distance:l,point:Hu.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}var Vu=new M,Gu=new M,Is=class extends gr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Vu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Vu.distanceTo(Gu);t.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sc=class extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wu=new le,Tc=new dr,ao=new Hn,lo=new M,Ho=class extends De{constructor(t=new oe,e=new Sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(n),ao.radius+=s,t.ray.intersectsSphere(ao)===!1)return;Wu.copy(n).invert(),Tc.copy(t.ray).applyMatrix4(Wu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let p=c.getX(g);lo.fromBufferAttribute(d,p),Xu(lo,p,l,n,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)lo.fromBufferAttribute(d,g),Xu(lo,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xu(r,t,e,i,n,s,o){let a=Tc.distanceSqToPoint(r);if(a<e){let l=new M;Tc.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var fn=class extends ri{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new et:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new M,n=[],s=[],o=[],a=new M,l=new le;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new M)}s[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pe(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Pe(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends pi{constructor(t=0,e=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ec=class extends xr{constructor(t,e,i,n,s,o){super(t,e,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let r=0,t=0,e=0,i=0;function n(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+i*a}}}var co=new M,gl=new lh,xl=new lh,yl=new lh,Ac=class extends pi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new M){let i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%s]:(co.subVectors(n[0],n[1]).add(n[0]),c=co);let d=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(co.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=co),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),gl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,p),xl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,p),yl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),yl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(gl.calc(l),xl.calc(l),yl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new M().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qu(r,t,e,i,n){let s=(i-t)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*r+e}function iy(r,t){let e=1-r;return e*e*t}function ny(r,t){return 2*(1-r)*r*t}function sy(r,t){return r*r*t}function ar(r,t,e,i){return iy(r,t)+ny(r,e)+sy(r,i)}function ry(r,t){let e=1-r;return e*e*e*t}function oy(r,t){let e=1-r;return 3*e*e*r*t}function ay(r,t){return 3*(1-r)*r*r*t}function ly(r,t){return r*r*r*t}function lr(r,t,e,i,n){return ry(r,t)+oy(r,e)+ay(r,i)+ly(r,n)}var Vo=class extends pi{constructor(t=new et,e=new et,i=new et,n=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new et){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,n.x,s.x,o.x,a.x),lr(t,n.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rc=class extends pi{constructor(t=new M,e=new M,i=new M,n=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new M){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,n.x,s.x,o.x,a.x),lr(t,n.y,s.y,o.y,a.y),lr(t,n.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Go=class extends pi{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends pi{constructor(t=new M,e=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new M){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new M){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wo=class extends pi{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(ar(t,n.x,s.x,o.x),ar(t,n.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pc=class extends pi{constructor(t=new M,e=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new M){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(ar(t,n.x,s.x,o.x),ar(t,n.y,s.y,o.y),ar(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let i=e,n=this.points,s=(n.length-1)*t,o=Math.floor(s),a=s-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(qu(a,l.x,c.x,h.x,d.x),qu(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new et().fromArray(n))}return this}},Yu=Object.freeze({__proto__:null,ArcCurve:Ec,CatmullRomCurve3:Ac,CubicBezierCurve:Vo,CubicBezierCurve3:Rc,EllipseCurve:xr,LineCurve:Go,LineCurve3:Cc,QuadraticBezierCurve:Wo,QuadraticBezierCurve3:Pc,SplineCurve:Xo}),Ic=class extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let o=n[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let o=s[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Yu[n.type]().fromJSON(n))}return this}},Lc=class extends Ic{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Go(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Wo(this.currentPoint.clone(),new et(t,e),new et(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,o){let a=new Vo(this.currentPoint.clone(),new et(t,e),new et(i,n),new et(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Xo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,s,o),this}absarc(t,e,i,n,s,o){return this.absellipse(t,e,i,i,n,s,o),this}ellipse(t,e,i,n,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,o,a,l),this}absellipse(t,e,i,n,s,o,a,l){let c=new xr(t,e,i,n,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Dc=class r extends oe{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Pe(n,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,d=new M,u=new et,f=new M,g=new M,x=new M,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let v=i+y*h*n,b=Math.sin(v),R=Math.cos(v);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*b,d.y=t[E].y,d.z=t[E].x*R,o.push(d.x,d.y,d.z),u.x=y/e,u.y=E/(t.length-1),a.push(u.x,u.y);let A=l[3*E+0]*b,P=l[3*E+1],k=l[3*E+0]*R;c.push(A,P,k)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let b=v+y*t.length,R=b,E=b+t.length,A=b+t.length+1,P=b+1;s.push(R,E,P),s.push(A,P,E)}this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},$i=class r extends Dc{constructor(t=1,e=1,i=4,n=8){let s=new Lc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}};var be=class r extends oe{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,x=[],p=i/2,m=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function y(){let b=new M,R=new M,E=0,A=(e-t)/i;for(let P=0;P<=s;P++){let k=[],_=P/s,w=_*(e-t)+t;for(let L=0;L<=n;L++){let N=L/n,B=N*l+a,X=Math.sin(B),z=Math.cos(B);R.x=w*X,R.y=-_*i+p,R.z=w*z,d.push(R.x,R.y,R.z),b.set(X,A,z).normalize(),u.push(b.x,b.y,b.z),f.push(N,1-_),k.push(g++)}x.push(k)}for(let P=0;P<n;P++)for(let k=0;k<s;k++){let _=x[k][P],w=x[k+1][P],L=x[k+1][P+1],N=x[k][P+1];t>0&&(h.push(_,w,N),E+=3),e>0&&(h.push(w,L,N),E+=3)}c.addGroup(m,E,0),m+=E}function v(b){let R=g,E=new et,A=new M,P=0,k=b===!0?t:e,_=b===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,p*_,0),u.push(0,_,0),f.push(.5,.5),g++;let w=g;for(let L=0;L<=n;L++){let B=L/n*l+a,X=Math.cos(B),z=Math.sin(B);A.x=k*z,A.y=p*_,A.z=k*X,d.push(A.x,A.y,A.z),u.push(0,_,0),E.x=X*.5+.5,E.y=z*.5*_+.5,f.push(E.x,E.y),g++}for(let L=0;L<n;L++){let N=R+L,B=w+L;b===!0?h.push(B,B+1,N):h.push(B+1,B,N),P+=3}c.addGroup(m,P,b===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qo=class r extends be{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yo=class r extends oe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new M,b=new M,R=new M;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],b),f(e[E+2],R),l(v,b,R,y)}function l(y,v,b,R){let E=R+1,A=[];for(let P=0;P<=E;P++){A[P]=[];let k=y.clone().lerp(b,P/E),_=v.clone().lerp(b,P/E),w=E-P;for(let L=0;L<=w;L++)L===0&&P===E?A[P][L]=k:A[P][L]=k.clone().lerp(_,L/w)}for(let P=0;P<E;P++)for(let k=0;k<2*(E-P)-1;k++){let _=Math.floor(k/2);k%2===0?(u(A[P][_+1]),u(A[P+1][_]),u(A[P][_])):(u(A[P][_+1]),u(A[P+1][_+1]),u(A[P+1][_]))}}function c(y){let v=new M;for(let b=0;b<s.length;b+=3)v.x=s[b+0],v.y=s[b+1],v.z=s[b+2],v.normalize().multiplyScalar(y),s[b+0]=v.x,s[b+1]=v.y,s[b+2]=v.z}function h(){let y=new M;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];let b=p(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;o.push(b,1-R)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){let v=o[y+0],b=o[y+2],R=o[y+4],E=Math.max(v,b,R),A=Math.min(v,b,R);E>.9&&A<.1&&(v<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function f(y,v){let b=y*3;v.x=t[b+0],v.y=t[b+1],v.z=t[b+2]}function g(){let y=new M,v=new M,b=new M,R=new M,E=new et,A=new et,P=new et;for(let k=0,_=0;k<s.length;k+=9,_+=6){y.set(s[k+0],s[k+1],s[k+2]),v.set(s[k+3],s[k+4],s[k+5]),b.set(s[k+6],s[k+7],s[k+8]),E.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),R.copy(y).add(v).add(b).divideScalar(3);let w=p(R);x(E,_+0,y,w),x(A,_+2,v,w),x(P,_+4,b,w)}}function x(y,v,b,R){R<0&&y.x===1&&(o[v]=y.x-1),b.x===0&&b.z===0&&(o[v]=R/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var ho=new M,uo=new M,vl=new M,fo=new Vi,$o=class extends oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),s=Math.cos(vs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:p,c:m}=fo;if(x.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),fo.getNormal(vl),d[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,d[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,d[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){let v=(y+1)%3,b=d[y],R=d[v],E=fo[h[y]],A=fo[h[v]],P=`${b}_${R}`,k=`${R}_${b}`;k in u&&u[k]?(vl.dot(u[k].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(A.x,A.y,A.z)),u[k]=null):P in u||(u[P]={index0:c[y],index1:c[v],normal:vl.clone()})}}for(let g in u)if(u[g]){let{index0:x,index1:p}=u[g];ho.fromBufferAttribute(a,x),uo.fromBufferAttribute(a,p),f.push(ho.x,ho.y,ho.z),f.push(uo.x,uo.y,uo.z)}this.setAttribute("position",new Bt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Zo=class r extends Yo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Jo=class r extends Yo{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Zi=class r extends oe{constructor(t=.5,e=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/n,f=new M,g=new et;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let m=s+p/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<n;x++){let p=x*(i+1);for(let m=0;m<i;m++){let y=m+p,v=y,b=y+i+1,R=y+i+2,E=y+1;a.push(v,b,E),a.push(b,R,E)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ue=class r extends oe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new M,u=new M,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let y=[],v=m/i,b=0;m===0&&o===0?b=.5/e:m===i&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){let E=R/e;d.x=-t*Math.cos(n+E*s)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(n+E*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(E+b,1-v),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let v=h[m][y+1],b=h[m][y],R=h[m+1][y],E=h[m+1][y+1];(m!==0||o>0)&&f.push(v,b,E),(m!==i-1||l<Math.PI)&&f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Be=class r extends oe{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new M,d=new M,u=new M;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let x=g/n*s,p=f/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let x=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,m=(n+1)*(f-1)+g,y=(n+1)*f+g;o.push(x,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ko=class extends ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends Li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function po(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function cy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ls=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uc=class extends Ls{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yh:s=t,a=2*e-i;break;case $h:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yh:o=t,l=2*i-e;break;case $h:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,y=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-f)*p+(1.5+f)*x+.5*g,b=f*p-f*x;for(let R=0;R!==a;++R)s[R]=m*o[h+R]+y*o[c+R]+v*o[l+R]+b*o[d+R];return s}},Nc=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},kc=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Si=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=po(e,this.TimeBufferType),this.values=po(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:po(t.times,Array),values:po(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case bo:e=this.InterpolantFactoryMethodDiscrete;break;case oc:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&cy(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Oa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=oc;var Vn=class extends Si{constructor(t,e,i){super(t,e,i)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=bo;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Si{};Fc.prototype.ValueTypeName="color";var zc=class extends Si{};zc.prototype.ValueTypeName="number";var Bc=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Xe.slerpFlat(s,0,o,c-a,o,c,l);return s}},jo=class extends Si{InterpolantFactoryMethodLinear(t){return new Bc(this.times,this.values,this.getValueSize(),t)}};jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Si{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=bo;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends Si{};Oc.prototype.ValueTypeName="vector";var Hc=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},hy=new Hc,Vc=class{constructor(t){this.manager=t!==void 0?t:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ds=class extends yr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},_l=new le,$u=new M,Zu=new M,Qo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;$u.setFromMatrixPosition(t.matrixWorld),e.position.copy($u),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),_l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ju=new le,nr=new M,Ml=new M,Gc=class extends Qo{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),i.position.copy(nr),Ml.copy(i.position),Ml.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ml),i.updateMatrixWorld(),n.makeTranslation(-nr.x,-nr.y,-nr.z),Ju.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}},ta=class extends yr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Gc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Wc=class extends Qo{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ea=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ku();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ku(){return performance.now()}var ch="\\[\\]\\.:\\/",uy=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",dy="[^"+ch.replace("\\.","")+"]",fy=/((?:WC+[\/:])*)/.source.replace("WC",hh),py=/(WCOD+)?/.source.replace("WCOD",dy),my=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),gy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),xy=new RegExp("^"+fy+py+my+gy+"$"),yy=["material","materials","bones","map"],Xc=class{constructor(t,e,i){let n=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ge=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uy,"")}static parseTrackName(t){let e=xy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);yy.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Xc;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);function uh(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new oe,c=0;for(let h=0;h<r.length;++h){let d=r[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<r.length;++u){let f=r[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(let h in s){let d=bd(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let g=bd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function bd(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new pe(o,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);a.setComponent(u+d,g,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}var Ji={WALLRUN:1,GRAPPLE:2,NOWALL:4},_r=1e-7,oa=class{constructor(t=220,e=4){this.half=t,this.cell=e,this.n=Math.ceil(t*2/e),this.cells=new Array(this.n*this.n),this.tris=[],this.nrm=[],this.box=[],this.flags=[],this.count=0,this.stamp=0,this.marks=null,this.groundY=0,this._c={px:0,py:0,pz:0,qx:0,qy:0,qz:0,d2:0}}addGeometry(t,e,i=Ji.WALLRUN|Ji.GRAPPLE){let n=t.index?t.toNonIndexed():t,s=n.attributes.position,o=new M,a=[],l=[];for(let c=0;c<s.count;c++)o.fromBufferAttribute(s,c),e&&o.applyMatrix4(e),l.push(o.x,o.y,o.z),l.length===9&&(this.addTri(l,i),l.length=0);n!==t&&n.dispose()}addTri(t,e){let[i,n,s,o,a,l,c,h,d]=t,u=o-i,f=a-n,g=l-s,x=c-i,p=h-n,m=d-s,y=f*m-g*p,v=g*x-u*m,b=u*p-f*x,R=Math.hypot(y,v,b);if(R<1e-9)return;y/=R,v/=R,b/=R;let E=this.count++;this.tris.push(i,n,s,o,a,l,c,h,d),this.nrm.push(y,v,b);let A=Math.min(i,o,c),P=Math.min(n,a,h),k=Math.min(s,l,d),_=Math.max(i,o,c),w=Math.max(n,a,h),L=Math.max(s,l,d);this.box.push(A,P,k,_,w,L),this.flags.push(e);let N=this.cell,B=this.half,X=this.n,z=Math.max(0,Math.floor((A+B)/N)),Y=Math.min(X-1,Math.floor((_+B)/N)),V=Math.max(0,Math.floor((k+B)/N)),rt=Math.min(X-1,Math.floor((L+B)/N));for(let st=z;st<=Y;st++)for(let ht=V;ht<=rt;ht++){let Nt=st*X+ht;(this.cells[Nt]||(this.cells[Nt]=[])).push(E)}}clear(){this.cells=new Array(this.n*this.n),this.tris=[],this.nrm=[],this.box=[],this.flags=[],this.count=0,this.stamp=0,this.marks=null}build(){this.T=new Float32Array(this.tris),this.N=new Float32Array(this.nrm),this.B=new Float32Array(this.box),this.F=new Uint8Array(this.flags),this.marks=new Uint32Array(this.count),this.tris=this.nrm=this.box=this.flags=null;for(let t=0;t<this.cells.length;t++)this.cells[t]&&(this.cells[t]=Int32Array.from(this.cells[t]))}_gather(t,e,i,n,s,o,a){let l=this.cell,c=this.half,h=this.n,d=Math.max(0,Math.floor((t+c)/l)),u=Math.min(h-1,Math.floor((n+c)/l)),f=Math.max(0,Math.floor((i+c)/l)),g=Math.min(h-1,Math.floor((o+c)/l)),x=++this.stamp,p=this.marks,m=this.B;a.length=0;for(let y=d;y<=u;y++)for(let v=f;v<=g;v++){let b=this.cells[y*h+v];if(b)for(let R=0;R<b.length;R++){let E=b[R];if(p[E]===x)continue;p[E]=x;let A=E*6;m[A]>n||m[A+3]<t||m[A+1]>s||m[A+4]<e||m[A+2]>o||m[A+5]<i||a.push(E)}}return a}_segTri(t,e,i,n,s,o,a){let l=this.T,c=a*9,h=l[c],d=l[c+1],u=l[c+2],f=l[c+3],g=l[c+4],x=l[c+5],p=l[c+6],m=l[c+7],y=l[c+8],v=this._c,b=n-t,R=s-e,E=o-i,A=f-h,P=g-d,k=x-u,_=p-h,w=m-d,L=y-u,N=R*L-E*w,B=E*_-b*L,X=b*w-R*_,z=A*N+P*B+k*X;if(Math.abs(z)>_r){let O=1/z,j=t-h,ut=e-d,at=i-u,At=(j*N+ut*B+at*X)*O;if(At>=0&&At<=1){let Rt=ut*k-at*P,Gt=at*A-j*k,Yt=j*P-ut*A,Wt=(b*Rt+R*Gt+E*Yt)*O;if(Wt>=0&&At+Wt<=1){let I=(_*Rt+w*Gt+L*Yt)*O;if(I>=0&&I<=1)return v.px=v.qx=t+b*I,v.py=v.qy=e+R*I,v.pz=v.qz=i+E*I,v.d2=0}}}let Y=1/0,V,rt,st,ht,Nt,Vt;for(let O=0;O<2;O++){let j=O?n:t,ut=O?s:e,at=O?o:i;My(j,ut,at,h,d,u,f,g,x,p,m,y,Wn);let At=(j-Wn[0])**2+(ut-Wn[1])**2+(at-Wn[2])**2;At<Y&&(Y=At,V=j,rt=ut,st=at,ht=Wn[0],Nt=Wn[1],Vt=Wn[2])}for(let O=0;O<3;O++){let Yt=by(t,e,i,n,s,o,O===0?h:O===1?f:p,O===0?d:O===1?g:m,O===0?u:O===1?x:y,O===0?f:O===1?p:h,O===0?g:O===1?m:d,O===0?x:O===1?y:u,Xn);Yt<Y&&(Y=Yt,V=Xn[0],rt=Xn[1],st=Xn[2],ht=Xn[3],Nt=Xn[4],Vt=Xn[5])}return v.px=V,v.py=rt,v.pz=st,v.qx=ht,v.qy=Nt,v.qz=Vt,v.d2=Y}collideCapsule(t,e,i,n,s=4){n.length=0;let o=wd;for(let a=0;a<s;a++){let l=t.x,c=t.y+e,h=t.z,d=t.y+i-e,u=0,f=0,g=0,x=0;t.y<this.groundY&&(u=this.groundY-t.y,f=0,g=1,x=0),this._gather(l-e,t.y-.01,h-e,l+e,t.y+i+.01,h+e,o);for(let y=0;y<o.length;y++){let v=o[y],b=this._segTri(l,c,h,l,d,h,v);if(b>=e*e)continue;let R=this._c,E,A,P,k,_=this.N,w=v*3;if(b<1e-10){let L=_[w],N=_[w+1],B=_[w+2],X=this.T,z=v*9,Y=(c+d)/2;(l-X[z])*L+(Y-X[z+1])*N+(h-X[z+2])*B<0&&(L=-L,N=-N,B=-B);let rt=(l-X[z])*L+(c-X[z+1])*N+(h-X[z+2])*B,st=(l-X[z])*L+(d-X[z+1])*N+(h-X[z+2])*B;E=e-Math.min(rt,st),A=L,P=N,k=B}else{let L=Math.sqrt(b);E=e-L,A=(R.px-R.qx)/L,P=(R.py-R.qy)/L,k=(R.pz-R.qz)/L;let N=A*_[w]+P*_[w+1]+k*_[w+2];Math.abs(N)>.999&&(A=_[w],P=_[w+1],k=_[w+2],E=e-N*L)}E>u&&(u=E,f=A,g=P,x=k)}if(u<=0)break;let p=u+1e-4;t.x+=f*p,t.y+=g*p,t.z+=x*p;let m=(n.length<ra.length||ra.push({x:0,y:0,z:0,depth:0}),ra[n.length]);m.x=f,m.y=g,m.z=x,m.depth=u,n.push(m)}return n.length>0}capsuleFree(t,e,i,n,s){if(e<this.groundY-.001)return!1;let o=this._gather(t-n,e,i-n,t+n,e+s,i+n,wd);for(let a=0;a<o.length;a++)if(this._segTri(t,e+n,i,t,e+s-n,i,o[a])<n*n-1e-6)return!1;return!0}raycast(t,e,i,n,s,o,a,l=vy,c=0){let h=a,d=-1;if(s<-1e-6&&e>this.groundY){let L=(this.groundY-e)/s;L<h&&(h=L,d=-2)}let u=this.cell,f=this.half,g=this.n,x=Math.floor((t+f)/u),p=Math.floor((i+f)/u),m=n>0?1:-1,y=o>0?1:-1,v=Math.abs(n)>1e-9?u/Math.abs(n):1/0,b=Math.abs(o)>1e-9?u/Math.abs(o):1/0,R=Math.abs(n)>1e-9?((n>0?x+1:x)*u-f-t)/n:1/0,E=Math.abs(o)>1e-9?((o>0?p+1:p)*u-f-i)/o:1/0,A=++this.stamp,P=this.marks,k=this.T,_=this.F,w=0;for(let L=0;L<400;L++){if(x>=0&&p>=0&&x<g&&p<g){let B=this.cells[x*g+p];if(B)for(let X=0;X<B.length;X++){let z=B[X];if(P[z]===A||(P[z]=A,c&&!(_[z]&c)))continue;let Y=z*9,V=_y(t,e,i,n,s,o,k[Y],k[Y+1],k[Y+2],k[Y+3],k[Y+4],k[Y+5],k[Y+6],k[Y+7],k[Y+8]);V>0&&V<h&&(h=V,d=z)}}let N=Math.min(R,E);if(h<=N||N>a||(w=N,R<E?(x+=m,R+=v):(p+=y,E+=b),x<0&&m<0||p<0&&y<0||x>=g&&m>0||p>=g&&y>0))break}if(d===-1)return null;if(l.t=h,l.x=t+n*h,l.y=e+s*h,l.z=i+o*h,d===-2)l.nx=0,l.ny=1,l.nz=0,l.flags=Ji.GRAPPLE,l.tri=-1;else{let L=this.N,N=d*3,B=L[N],X=L[N+1],z=L[N+2];B*n+X*s+z*o>0&&(B=-B,X=-X,z=-z),l.nx=B,l.ny=X,l.nz=z,l.flags=_[d],l.tri=d}return l}},wd=[],ra=[],Wn=[0,0,0],Xn=[0,0,0,0,0,0],vy={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0};function _y(r,t,e,i,n,s,o,a,l,c,h,d,u,f,g){let x=c-o,p=h-a,m=d-l,y=u-o,v=f-a,b=g-l,R=n*b-s*v,E=s*y-i*b,A=i*v-n*y,P=x*R+p*E+m*A;if(Math.abs(P)<1e-9)return-1;let k=1/P,_=r-o,w=t-a,L=e-l,N=(_*R+w*E+L*A)*k;if(N<0||N>1)return-1;let B=w*m-L*p,X=L*x-_*m,z=_*p-w*x,Y=(i*B+n*X+s*z)*k;return Y<0||N+Y>1?-1:(y*B+v*X+b*z)*k}function My(r,t,e,i,n,s,o,a,l,c,h,d,u){let f=o-i,g=a-n,x=l-s,p=c-i,m=h-n,y=d-s,v=r-i,b=t-n,R=e-s,E=f*v+g*b+x*R,A=p*v+m*b+y*R;if(E<=0&&A<=0){u[0]=i,u[1]=n,u[2]=s;return}let P=r-o,k=t-a,_=e-l,w=f*P+g*k+x*_,L=p*P+m*k+y*_;if(w>=0&&L<=w){u[0]=o,u[1]=a,u[2]=l;return}let N=E*L-w*A;if(N<=0&&E>=0&&w<=0){let O=E/(E-w);u[0]=i+f*O,u[1]=n+g*O,u[2]=s+x*O;return}let B=r-c,X=t-h,z=e-d,Y=f*B+g*X+x*z,V=p*B+m*X+y*z;if(V>=0&&Y<=V){u[0]=c,u[1]=h,u[2]=d;return}let rt=Y*A-E*V;if(rt<=0&&A>=0&&V<=0){let O=A/(A-V);u[0]=i+p*O,u[1]=n+m*O,u[2]=s+y*O;return}let st=w*V-Y*L;if(st<=0&&L-w>=0&&Y-V>=0){let O=(L-w)/(L-w+(Y-V));u[0]=o+(c-o)*O,u[1]=a+(h-a)*O,u[2]=l+(d-l)*O;return}let ht=1/(st+rt+N),Nt=rt*ht,Vt=N*ht;u[0]=i+f*Nt+p*Vt,u[1]=n+g*Nt+m*Vt,u[2]=s+x*Nt+y*Vt}function by(r,t,e,i,n,s,o,a,l,c,h,d,u){let f=i-r,g=n-t,x=s-e,p=c-o,m=h-a,y=d-l,v=r-o,b=t-a,R=e-l,E=f*f+g*g+x*x,A=p*p+m*m+y*y,P=p*v+m*b+y*R,k,_;if(E<=_r&&A<=_r)k=_=0;else if(E<=_r)k=0,_=Math.min(1,Math.max(0,P/A));else{let w=f*v+g*b+x*R;if(A<=_r)_=0,k=Math.min(1,Math.max(0,-w/E));else{let L=f*p+g*m+x*y,N=E*A-L*L;k=N!==0?Math.min(1,Math.max(0,(L*P-w*A)/N)):0,_=(L*k+P)/A,_<0?(_=0,k=Math.min(1,Math.max(0,-w/E))):_>1&&(_=1,k=Math.min(1,Math.max(0,(L-w)/E)))}}return u[0]=r+f*k,u[1]=t+g*k,u[2]=e+x*k,u[3]=o+p*_,u[4]=a+m*_,u[5]=l+y*_,(u[0]-u[3])**2+(u[1]-u[4])**2+(u[2]-u[5])**2}function dh(r,t,e,i=4,n=4){let s=new Ot(r,t,e),o=s.attributes.uv,a=s.attributes.position,l=s.attributes.normal;for(let c=0;c<o.count;c++){let h=Math.abs(l.getX(c)),d=Math.abs(l.getY(c)),u=a.getX(c)+r/2,f=a.getY(c)+t/2,g=a.getZ(c)+e/2,x,p;d>.5?(x=u,p=g):h>.5?(x=g,p=f):(x=u,p=f),o.setXY(c,x/i,p/n)}return s}function Sd(r,t,e,i=4,n=4,s="all"){let o=r/2,a={a:new M(-o,0,0),b:new M(o,0,0),c:new M(o,0,t),d:new M(-o,0,t),e:new M(o,e,t),f:new M(-o,e,t)},l=[],c=[],h=[],d=Math.hypot(t,e),u="top",f=(v,b,R,E,A,P,k)=>{if(s!=="all"&&s!==u)return;let _=v,w=b,L=R,N=E,B=A,X=P;new M().subVectors(w,_).cross(new M().subVectors(L,_)).dot(k)<0&&([w,L]=[L,w],[B,X]=[X,B]);let Y=new M().subVectors(w,_).cross(new M().subVectors(L,_)).normalize();l.push(_.x,_.y,_.z,w.x,w.y,w.z,L.x,L.y,L.z),c.push(...N,...B,...X);for(let V=0;V<3;V++)h.push(Y.x,Y.y,Y.z)},g=r/i,x=new M(0,t,-e);f(a.a,a.b,a.e,[0,0],[g,0],[g,d/n],x),f(a.a,a.e,a.f,[0,0],[g,d/n],[0,d/n],x),u="sides";let p=new M(0,-1,0);f(a.a,a.b,a.c,[0,0],[g,0],[g,t/n],p),f(a.a,a.c,a.d,[0,0],[g,t/n],[0,t/n],p);let m=new M(0,0,1);f(a.d,a.c,a.e,[0,0],[g,0],[g,e/n],m),f(a.d,a.e,a.f,[0,0],[g,e/n],[0,e/n],m),f(a.b,a.c,a.e,[0,0],[t/i,0],[t/i,e/n],new M(1,0,0)),f(a.a,a.d,a.f,[0,0],[t/i,0],[t/i,e/n],new M(-1,0,0));let y=new oe;return y.setAttribute("position",new Bt(l,3)),y.setAttribute("normal",new Bt(h,3)),y.setAttribute("uv",new Bt(c,2)),y}function Ti(r){let t=document.createElement("canvas");return t.width=t.height=r,t}function Td(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Ed(r,t=2){let e=r.width,i=r.getContext("2d").getImageData(0,0,e,e).data,n=Ti(e),s=n.getContext("2d"),o=s.createImageData(e,e),a=o.data,l=(c,h)=>i[((h+e)%e*e+(c+e)%e)*4]/255;for(let c=0;c<e;c++)for(let h=0;h<e;h++){let d=(l(h+1,c)-l(h-1,c))*t,u=(l(h,c+1)-l(h,c-1))*t,f=Math.hypot(d,u,1),g=(c*e+h)*4;a[g]=(-d/f*.5+.5)*255,a[g+1]=(u/f*.5+.5)*255,a[g+2]=(1/f*.5+.5)*255,a[g+3]=255}return s.putImageData(o,0,0),n}function ks(r,{srgb:t=!1,repeat:e=!0,aniso:i=8}={}){let n=new fn(r);return e&&(n.wrapS=n.wrapT=cr),t&&(n.colorSpace=Ge),n.anisotropy=i,n}function Ad(r=1024){let t=Td(7),e=4,i=r/e,n=Math.max(3,r/256),s=Ti(r),o=s.getContext("2d"),a=Ti(r),l=a.getContext("2d"),c=Ti(r),h=c.getContext("2d");o.fillStyle="#d9d9d5",o.fillRect(0,0,r,r),l.fillStyle="#000",l.fillRect(0,0,r,r),h.fillStyle="#e6e6e6",h.fillRect(0,0,r,r);for(let x=0;x<e;x++)for(let p=0;p<e;p++){let m=p*i+n/2,y=x*i+n/2,v=i-n,b=242+t()*9|0;o.fillStyle=`rgb(${b},${b},${b-2})`,o.fillRect(m,y,v,v);let R=o.createLinearGradient(m,y,m+v,y+v);R.addColorStop(0,"rgba(255,255,255,0.35)"),R.addColorStop(1,"rgba(0,0,0,0.035)"),o.fillStyle=R,o.fillRect(m,y,v,v),l.fillStyle="#fff",l.fillRect(m+1,y+1,v-2,v-2);let E=95+t()*30|0;h.fillStyle=`rgb(${E},${E},${E})`,h.fillRect(m,y,v,v),t()<.35&&(o.fillStyle="rgba(0,0,0,0.06)",o.fillRect(m+v*.06,y+v*.06,v*.05,v*.05))}let d=o.getImageData(0,0,r,r),u=d.data;for(let x=0;x<u.length;x+=4){let p=(t()-.5)*6;u[x]+=p,u[x+1]+=p,u[x+2]+=p}o.putImageData(d,0,0);let f=Ti(r),g=f.getContext("2d");return g.filter="blur(1.5px)",g.drawImage(a,0,0),{map:ks(s,{srgb:!0,aniso:16}),normalMap:ks(Ed(f,3),{aniso:16}),roughnessMap:ks(c,{aniso:16})}}function Rd(r=1024){let t=Td(11),e=4,i=r/e,n=Math.max(4,r/200),s=Ti(r),o=s.getContext("2d"),a=Ti(r),l=a.getContext("2d"),c=Ti(r),h=c.getContext("2d");o.fillStyle="#cfcfcb",o.fillRect(0,0,r,r),l.fillStyle="#000",l.fillRect(0,0,r,r),h.fillStyle="#fff",h.fillRect(0,0,r,r);for(let x=0;x<e;x++)for(let p=0;p<e;p++){let m=p*i+n/2,y=x*i+n/2,v=i-n,b=246+t()*7|0;o.fillStyle=`rgb(${b},${b},${b})`,o.fillRect(m,y,v,v),l.fillStyle="#c8c8c8",l.fillRect(m,y,v,v),l.fillStyle="#fff",l.fillRect(m+n,y+n,v-2*n,v-2*n);let R=150+t()*40|0;h.fillStyle=`rgb(${R},${R},${R})`,h.fillRect(m,y,v,v);for(let[A,P]of[[.06,.06],[.94,.06],[.06,.94],[.94,.94]])l.fillStyle="#7a7a7a",l.beginPath(),l.arc(m+v*A,y+v*P,n*.9,0,7),l.fill(),o.fillStyle="rgba(0,0,0,0.12)",o.beginPath(),o.arc(m+v*A,y+v*P,n*.7,0,7),o.fill();let E=t();if(E<.18)for(let A=0;A<6;A++)l.fillStyle="#909090",l.fillRect(m+v*.3,y+v*(.3+A*.07),v*.4,n*.8),o.fillStyle="rgba(0,0,0,0.07)",o.fillRect(m+v*.3,y+v*(.3+A*.07),v*.4,n*.8);else E<.3?(l.strokeStyle="#a0a0a0",l.lineWidth=n*.6,l.strokeRect(m+v*.25,y+v*.25,v*.5,v*.5),o.strokeStyle="rgba(0,0,0,0.06)",o.lineWidth=n*.5,o.strokeRect(m+v*.25,y+v*.25,v*.5,v*.5)):E<.36&&(o.fillStyle="#ff5a1f",o.fillRect(m+v*.08,y+v*.82,v*.12,v*.04))}let d=o.getImageData(0,0,r,r),u=d.data;for(let x=0;x<u.length;x+=4){let p=(t()-.5)*5;u[x]+=p,u[x+1]+=p,u[x+2]+=p}o.putImageData(d,0,0);let f=Ti(r),g=f.getContext("2d");return g.filter="blur(1px)",g.drawImage(a,0,0),{map:ks(s,{srgb:!0}),normalMap:ks(Ed(f,2.2)),roughnessMap:ks(c)}}function Cd(r,t,e=512){let i=Ti(e),n=i.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,e,e);let s=e/(2*t),o=(h,d)=>{for(let u of r)n.save(),n.translate((u.x+t)*s,(u.z+t)*s),n.globalAlpha=d*(u.k??1),n.fillStyle="#000",u.r?(n.beginPath(),n.arc(0,0,(u.r+h)*s,0,7),n.fill()):(n.rotate(-(u.ry||0)),n.fillRect(-(u.w/2+h)*s,-(u.d/2+h)*s,(u.w+2*h)*s,(u.d+2*h)*s)),n.restore()};for(let[h,d]of[[1.6,.06],[1,.08],[.55,.1],[.25,.14],[.05,.2]])o(h,d);let a=Ti(e),l=a.getContext("2d");l.filter="blur(3px)",l.drawImage(i,0,0);let c=new fn(a);return c.channel=1,c}var wy=r=>{let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296},Fs=[[-1,-1],[1,-1],[-1,1],[1,1]],Di={arena:{id:"arena",name:"\uD654\uC774\uD2B8 \uC544\uB808\uB098",desc:"\uAC00\uC6B4\uB370 \uBB34\uB300 \xB7 \uAE30\uB465 4\uAC1C \xB7 \uBAA8\uC11C\uB9AC \uACE0\uC9C0\uB300",accent:16734751,seed:42,build(r){r.cyl(0,0,0,7,1,"top");let t=new Be(7.02,.06,6,96);t.rotateX(Math.PI/2),r.deco(t,0,1,0,"glow"),r.deco(new be(7.04,7.04,.3,64,1,!0),0,.15,0,"dark");for(let e=0;e<4;e++){let i=e*Math.PI/2;r.ramp(Math.sin(i)*11,Math.cos(i)*11,i+Math.PI,4,4.2,1)}for(let[e,i]of Fs)r.box(e*17,0,i*17,3,9,3,"block",0,{trim:!0});for(let e=0;e<4;e++){let i=e*Math.PI/2+Math.PI/4;r.box(Math.cos(i)*28,0,Math.sin(i)*28,7,1.4,1,"block",-i+Math.PI/2,{trim:!0})}for(let[e,i,n]of[[0,-30,0],[0,30,0],[-30,0,Math.PI/2],[30,0,Math.PI/2]])r.box(e,0,i,10,2.6,1,"block",n,{trim:!0});for(let[e,i]of Fs){let n=e*40,s=i*40;r.box(n,0,s,14,3.5,14,"top",0,{trim:!0}),r.ramp(n,s-i*17,i>0?0:Math.PI,5,10,3.5),r.high(n+e*2,3.5,s+i*2)}for(let e=0;e<12;e++){let i=e/12*Math.PI*2+.13,n=36+e%2*6,s=Math.cos(i)*n,o=Math.sin(i)*n;Math.abs(Math.abs(s)-40)<9&&Math.abs(Math.abs(o)-40)<9||r.spawn(s,o)}for(let[e,i]of[[0,-42],[0,42],[-42,0],[42,0],[-22,-40],[22,40],[-24,8],[24,-8],[8,24],[-8,-24],[0,15],[0,-15],[15,0],[-15,0]])r.spawn(e,i);for(let e of[[-17,-17],[17,-17],[-17,17],[17,17],[0,-30],[0,30],[-30,0],[30,0],[0,0]])r.addCover(...e);r.deco(r.ring(9.3,9.5),0,.01,0,"paint"),r.deco(r.ring(13.8,13.9),0,.01,0,"paintDark");for(let e=0;e<4;e++){let i=e*Math.PI/2+Math.PI/4,n=new oi(.14,22);n.rotateX(-Math.PI/2),r.deco(n,Math.sin(i)*25,.01,Math.cos(i)*25,"paintDark",i)}}},spire:{id:"spire",name:"\uC2A4\uD30C\uC774\uC5B4",desc:"\uD0D1\uACFC \uACF5\uC911 \uB370\uD06C \xB7 \uC810\uD504\uB300 \xB7 \uB192\uC774 \uC2F8\uC6C0",accent:1688575,wallH:14,headroom:22,seed:7,build(r){r.box(0,0,0,8,16,8,"block",0,{trim:!0}),r.box(0,5.2,-7,20,.8,6,"top"),r.box(0,5.2,7,20,.8,6,"top"),r.box(-7,5.2,0,6,.8,8,"top"),r.box(7,5.2,0,6,.8,8,"top");for(let[e,i]of Fs)r.cyl(e*9.2,0,i*9.2,.5,5.2,"dark");let t=new Be(14.1,.06,4,4);t.rotateX(Math.PI/2),t.rotateY(Math.PI/4),r.deco(t,0,6.02,0,"glow");for(let[e,i]of[[0,-11.8],[0,11.8],[-11.8,0],[11.8,0]])r.jumpPad(e,0,i,22);r.jumpPad(0,6,-5.2,32,1.2),r.jumpPad(0,6,5.2,32,1.2),r.high(0,16,0);for(let[e,i]of Fs)r.box(e*26,5.2,i*26,10,.8,10,"top",0,{trim:!0}),r.cyl(e*26,0,i*26,.7,5.2,"dark"),r.ramp(e*26,i*7,i>0?0:Math.PI,4,14,6),r.box(e*15.5,5.2,i*15.5,3,.8,17,"top",Math.atan2(e,i)),r.high(e*27,6,i*27);r.high(0,6,-7),r.high(0,6,7),r.high(-7,6,0),r.high(7,6,0);for(let[e,i]of[[36,0],[-36,0],[0,36],[0,-36]])r.box(e,0,i,3,8,3,"block",0,{trim:!0});for(let[e,i]of Fs)r.box(e*36,0,i*18,1,1.4,7,"block",0,{trim:!0}),r.box(e*18,0,i*36,7,1.4,1,"block",0,{trim:!0});for(let[e,i]of[[40,40],[-40,40],[40,-40],[-40,-40],[0,43],[0,-43],[43,0],[-43,0],[20,0],[-20,0],[0,20],[0,-20],[40,12],[-40,-12],[12,-40],[-12,40]])r.spawn(e,i);for(let e of[[0,0],[36,0],[-36,0],[0,36],[0,-36],[26,26],[-26,26],[26,-26],[-26,-26]])r.addCover(...e);r.deco(r.ring(16,16.2),0,.01,0,"paint")}},lanes:{id:"lanes",name:"\uD68C\uB791",desc:"\uBCBD\uC73C\uB85C \uB098\uB25C \uC138 \uAC08\uB798 \uAE38 \xB7 \uAC00\uC18D \uBC1C\uD310 \xB7 \uBCBD \uD295\uAE30\uAE30",accent:16723338,wallH:10,seed:19,build(r){for(let t of[-1,1])for(let[e,i]of[[-36,-20],[-14,-3],[3,14],[20,36]])r.box((e+i)/2,0,t*12,i-e,4.5,1,"block",0,{trim:!0});r.boostPad(-41,0,0,Math.PI/2,8,3.5),r.boostPad(41,0,0,-Math.PI/2,8,3.5),r.cyl(0,0,0,1.6,3.4,"block",{trim:!0});for(let[t,e,i,n]of[[-27,-4,1,5],[27,4,1,5],[-9,5,4,1],[9,-5,4,1]])r.box(t,0,e,i,1.3,n,"block",0,{trim:!0});for(let t of[-1,1]){r.box(0,0,t*44.5,76,2.5,9,"top",0,{trim:!0}),r.ramp(48,t*44.5,-Math.PI/2,8,10,2.5),r.ramp(-48,t*44.5,Math.PI/2,8,10,2.5),r.box(-20,0,t*28,4,2.2,4,"block",.3,{trim:!0}),r.box(10,0,t*24,2,3.5,6,"block",0,{trim:!0}),r.box(30,0,t*30,5,1.4,1,"block",0,{trim:!0}),r.cyl(-5,0,t*32,1.2,7,"block",{trim:!0});for(let e of[-25,0,25])r.high(e,2.5,t*44.5)}r.box(43,0,0,4,10,4,"block",0,{trim:!0}),r.box(-43,0,0,4,10,4,"block",0,{trim:!0});for(let[t,e]of[[44,20],[-44,20],[44,-20],[-44,-20],[30,6],[-30,-6],[-30,6],[30,-6],[0,22],[0,-22],[-32,32],[-32,-32],[18,34],[18,-34],[-12,0],[12,0]])r.spawn(t,e);for(let t of[[-27,-4],[27,4],[-9,5],[9,-5],[0,0],[-20,28],[-20,-28],[10,24],[10,-24],[43,0],[-43,0],[-5,32],[-5,-32]])r.addCover(...t);for(let t of[-1,1]){let e=new oi(72,.14);e.rotateX(-Math.PI/2),r.deco(e,0,.01,t*6,"paintDark")}{let t=new oi(60,.2);t.rotateX(-Math.PI/2),r.deco(t,0,.01,0,"paint")}}},forest:{id:"forest",name:"\uAE30\uB465 \uC232",desc:"\uBE7D\uBE7D\uD55C \uAE30\uB465 \uC0AC\uC774 \xB7 \uD295\uACA8 \uB9DE\uD788\uAE30 \uCC9C\uAD6D",accent:2546042,seed:31,build(r){let t=wy(31),e=12.5;for(let i=-3;i<=3;i++)for(let n=-3;n<=3;n++){if(Math.abs(i)<=1&&Math.abs(n)<=1)continue;let s=i*e+(t()-.5)*4,o=n*e+(t()-.5)*4;if(Math.abs(i)===2&&Math.abs(n)===2){let l=Math.sign(i),c=Math.sign(n);r.box(l*25,0,c*25,6,4,6,"top",0,{trim:!0}),r.jumpPad(l*25-l*4.8,0,c*25,20),r.high(l*25,4,c*25);continue}let a=t();a<.55?r.cyl(s,0,o,1+t()*.8,6+t()*5,"block",{trim:!0}):a<.8?r.box(s,0,o,2.6,4+t()*5,2.6,"block",t()*Math.PI,{trim:!0}):r.box(s,0,o,4,1.3,1.5,"block",t()*Math.PI,{trim:!0}),r.addCover(s,o)}r.cyl(0,0,0,1.5,12,"block",{trim:!0});for(let i=0;i<4;i++){let n=i*Math.PI/2+Math.PI/4;r.box(Math.sin(n)*9,0,Math.cos(n)*9,6,1.3,1,"block",n,{trim:!0})}r.addCover(0,0);for(let i=-4;i<4;i++)for(let n=-4;n<4;n++)i+n&1&&r.spawn((i+.5)*e,(n+.5)*e);r.deco(r.ring(15,15.2),0,.01,0,"paint")}},orbit:{id:"orbit",name:"\uADA4\uB3C4",desc:"\uB465\uADFC \uACE0\uAC00 \uD2B8\uB799 \xB7 \uAC00\uC18D \uBC1C\uD310\uC73C\uB85C \uBE59\uAE00\uBE59\uAE00",accent:16760602,seed:57,build(r){for(let e=0;e<36;e++){let i=e/36*Math.PI*2;r.box(Math.sin(i)*34,0,Math.cos(i)*34,6.4,2,10,"top",i,{ao:!0})}for(let e of[29,39]){let i=new Be(e,.07,4,120);i.rotateX(Math.PI/2),r.deco(i,0,2.02,0,"glow")}for(let e=0;e<4;e++){let i=e*Math.PI/2+.2;r.boostPad(Math.sin(i)*34,2,Math.cos(i)*34,i+Math.PI/2,8,4)}for(let e=0;e<4;e++){let i=e*Math.PI/2+Math.PI/4;r.ramp(Math.sin(i)*22.2,Math.cos(i)*22.2,i,5,7,2),r.ramp(Math.sin(i)*45.8,Math.cos(i)*45.8,i+Math.PI,5,7,2)}r.cyl(0,0,0,7,1.5,"top",{trim:!0}),r.cyl(0,1.5,0,1.4,9,"block",{trim:!0});for(let e=0;e<4;e++){let i=e*Math.PI/2;r.ramp(Math.sin(i)*10.5,Math.cos(i)*10.5,i+Math.PI,3,3.6,1.5)}for(let e=0;e<6;e++){let i=e/6*Math.PI*2+.5;r.box(Math.sin(i)*17,0,Math.cos(i)*17,5,1.3,1,"block",i,{trim:!0}),r.addCover(Math.sin(i)*17,Math.cos(i)*17)}for(let[e,i]of Fs)r.box(e*43,0,i*43,8,7,8,"top",0,{trim:!0}),r.jumpPad(e*36.6,0,i*43,24),r.high(e*43,7,i*43),r.addCover(e*43,i*43);r.addCover(0,0);for(let e=0;e<8;e++){let i=e/8*Math.PI*2+.3;r.spawn(Math.sin(i)*14,Math.cos(i)*14),r.spawn(Math.sin(i+.4)*34,Math.cos(i+.4)*34,2)}for(let[e,i]of[[45,0],[-45,0],[0,45],[0,-45]])r.spawn(e,i);r.deco(r.ring(24.5,24.7),0,.01,0,"paint")}}},fh=Object.keys(Di);var xn=new le,zs=new Xe,Bs=new fi,ph=new M,mh=new M(1,1,1);function Os(r,{floor:t=!1,aoU:e=null,E:i=70,base:n=.6}={}){return r.onBeforeCompile=s=>{s.uniforms.rsAo=e||{value:null},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRsW;`).replace("#include <project_vertex>",`#include <project_vertex>
vRsW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRsW;
uniform sampler2D rsAo; uniform float rsE;`).replace("#include <map_fragment>",`#include <map_fragment>
`+(t?"diffuseColor.rgb *= mix(0.42, 1.0, texture2D(rsAo, vRsW.xz / (2.0 * rsE) + 0.5).r);":`diffuseColor.rgb *= mix(${n.toFixed(2)}, 1.0, smoothstep(0.0, 1.6, vRsW.y)) * mix(0.9, 1.0, smoothstep(0.0, 9.0, vRsW.y));`))},r.customProgramCacheKey=()=>t?"rsfloor":"rswall"+n,r}var aa=class{constructor(t,e){this.scene=t,this.Q=e,this.col=new oa(90,4),this.half=50,this.objects=[];let i=e.shadows,n=i?1024:512,s=Ad(n),o=Rd(n),a=(l,c,h=.6)=>new Xt({color:l,map:o.map,normalMap:o.normalMap,normalScale:new et(h,h),roughnessMap:o.roughnessMap,roughness:c,metalness:0});this.M={floor:new Xt({map:s.map,normalMap:s.normalMap,normalScale:new et(.7,.7),roughnessMap:s.roughnessMap,roughness:.75,metalness:0,envMapIntensity:.9}),wall:Os(a(16053490,.8)),block:Os(a(16777215,.7)),top:Os(a(15329766,.75),{base:.66}),ramp:Os(new Xt({color:14869215,map:s.map,normalMap:s.normalMap,roughness:.7}),{base:.7}),dark:Os(new Xt({color:2763311,roughness:.5,metalness:.3}),{base:.8}),glow:new te({color:16777215}),glowSoft:new te({color:16777215}),pad:new te({color:16777215}),paint:new Xt({color:16742981,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),paintDark:new Xt({color:10132118,roughness:.7,transparent:!0,opacity:.55,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})},this.aoU={value:null},Os(this.M.floor,{floor:!0,aoU:this.aoU,E:70}),this.edgeMat=new Yi({color:10263704,transparent:!0,opacity:.35}),this.load("arena")}load(t){let e=Di[t]||Di.arena;for(let n of this.objects)this.scene.remove(n),n.geometry.dispose();this.objects=[],this.col.clear(),this.map=e,this.mapId=e.id,this.batches=new Map,this.edges=[],this.spawnGround=[],this.spawnHigh=[],this.cover=[],this.jumpPads=[],this.boostPads=[],this.animated=[],this.footprints=[];let i=new ct(e.accent);return this.accent=i.clone(),this.M.glow.color.copy(i).multiplyScalar(6),this.M.glowSoft.color.copy(i).lerp(new ct(16777215),.65).multiplyScalar(2.6),this.M.pad.color.copy(i).multiplyScalar(4),this.M.paint.color.copy(i).lerp(new ct(16777215),.15),this.wallH=e.wallH||12,this.ceiling=this.wallH+(e.headroom||14),this.buildShell(),e.build(this),this.skyline(e.seed||42),this.aoU.value&&this.aoU.value.dispose(),this.aoU.value=Cd(this.footprints,70),this.finalize(),this.spawnGround=this.spawnGround.filter(n=>this.col.capsuleFree(n.x,n.y+.05,n.z,.42,1.8)),this.spawnHigh=this.spawnHigh.filter(n=>this.col.capsuleFree(n.x,n.y+.05,n.z,.42,1.8)),this.cover.length||this.cover.push([0,0]),e}add(t,e,i,{collide:n=!0,edges:s=!0}={}){let o=t.index?t.toNonIndexed():t;e&&o.applyMatrix4(e);for(let a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);this.batches.has(i)||this.batches.set(i,[]),this.batches.get(i).push(o),n&&this.col.addGeometry(o,null,Ji.WALLRUN|Ji.GRAPPLE),s&&this.edges.push(new $o(o,30))}box(t,e,i,n,s,o,a="block",l=0,c={}){e<.05&&c.collide!==!1&&c.ao!==!1&&this.footprints.push({x:t,z:i,w:n,d:o,ry:l,k:Math.min(1,.45+s*.08)}),Bs.set(0,l,0),zs.setFromEuler(Bs),xn.compose(ph.set(t,e+s/2,i),zs,mh),this.add(dh(n,s,o,8,8),xn,a,c),c.trim&&(e<.05&&this.deco(new Ot(n+.06,.35,o+.06),t,.175,i,"dark",l),s>2.5?this.deco(new Ot(n+.05,.13,o+.05),t,e+s-.7,i,"glow",l):this.deco(new Ot(n+.04,.06,o+.04),t,e+s-.03,i,"glowSoft",l))}cyl(t,e,i,n,s,o="block",a={}){let l=Math.max(16,Math.round(n*10));if(e<.05&&a.collide!==!1&&this.footprints.push({x:t,z:i,r:n,k:Math.min(1,.45+s*.08)}),xn.makeTranslation(t,e+s/2,i),this.add(new be(n,n,s,l),xn,o,a),a.trim){e<.05&&this.deco(new be(n+.04,n+.04,.35,l),t,.175,i,"dark");let c=new Be(n+.02,.06,6,l*2);c.rotateX(Math.PI/2),this.deco(c,t,e+s-(s>2.5?.7:.03),i,s>2.5?"glow":"glowSoft")}}ramp(t,e,i,n,s,o,a=0){Bs.set(0,i,0),zs.setFromEuler(Bs),xn.compose(ph.set(t,a,e),zs,mh),this.add(Sd(n,s,o,8,8),xn,"ramp"),a<.05&&this.footprints.push({x:t+Math.sin(i)*s/2,z:e+Math.cos(i)*s/2,w:n,d:s,ry:i,k:.25})}deco(t,e,i,n,s,o=0,a=0){Bs.set(a,o,0),zs.setFromEuler(Bs),xn.compose(ph.set(e,i,n),zs,mh),this.add(t,xn,s,{collide:!1,edges:!1})}ring(t,e,i=96){let n=new Zi(t,e,i);return n.rotateX(-Math.PI/2),n}jumpPad(t,e,i,n=22,s=1.6){this.jumpPads.push({x:t,y:e,z:i,r:s,power:n}),this.deco(new be(s,s+.15,.12,32),t,e+.06,i,"dark");let o=new Be(s-.15,.09,6,40);o.rotateX(Math.PI/2),this.deco(o,t,e+.14,i,"pad"),this.deco(this.ring(.3,.55,24),t,e+.13,i,"pad");let a=new be(.05,.05,2.4,6);this.deco(a,t,e+1.3,i,"glowSoft")}boostPad(t,e,i,n,s=8,o=3){let a=new M(Math.sin(n),0,Math.cos(n));this.boostPads.push({x:t,y:e,z:i,dir:a,len:s,w:o}),this.deco(new Ot(o,.06,s),t,e+.03,i,"dark",n);for(let l=-1;l<=1;l++)for(let c of[-1,1]){let h=new Ot(.16,.05,o*.55);h.rotateY(c*.7),h.translate(c*o*.18,0,0),this.deco(h,t+a.x*l*s*.28,e+.07,i+a.z*l*s*.28,"pad",n)}}spawn(t,e,i=0){this.spawnGround.push(new M(t,i,e))}high(t,e,i){this.spawnHigh.push(new M(t,e,i))}addCover(t,e){this.cover.push([t,e])}buildShell(){let t=this.half,e=this.wallH,i=2,n=new oi(t*2+40,t*2+40);n.rotateX(-Math.PI/2);{let o=n.attributes.uv,a=n.attributes.position;for(let l=0;l<o.count;l++)o.setXY(l,a.getX(l)/8,-a.getZ(l)/8)}this.add(n,null,"floor",{collide:!1,edges:!1}),this.box(0,0,-t-i/2,t*2+i*2,e,i,"wall"),this.box(0,0,t+i/2,t*2+i*2,e,i,"wall"),this.box(-t-i/2,0,0,i,e,t*2,"wall"),this.box(t+i/2,0,0,i,e,t*2,"wall");let s=(o,a,l)=>new Ot(o,a,l);for(let[o,a,l]of[[0,-t,0],[0,t,Math.PI],[-t,0,Math.PI/2],[t,0,-Math.PI/2]]){let c=new M(-o,0,-a).normalize(),h=new M(Math.cos(l),0,-Math.sin(l)),d=t*2;this.deco(s(d,.45,.08),o+c.x*.04,.225,a+c.z*.04,"dark",l),this.deco(s(d,.16,.06),o+c.x*.04,e-.7,a+c.z*.04,"glow",l),this.deco(s(d,.05,.05),o+c.x*.03,e*.52,a+c.z*.03,"glowSoft",l);for(let u=-4;u<=4;u++)this.deco(s(.12,3.2,.06),o+c.x*.035+h.x*u*10,e-3.6,a+c.z*.035+h.z*u*10,"glowSoft",l)}}skyline(t){let e=(o,a,l)=>new Ot(o,a,l),i=(o=>()=>(o=o*16807%2147483647)/2147483647)(t);for(let o=0;o<26;o++){let a=o/26*Math.PI*2+i()*.12,l=92+i()*70,c=26+i()*70,h=8+i()*14,d=Math.sin(a)*l,u=Math.cos(a)*l;this.deco(dh(h,c,h*(.6+i()*.8),8,8).translate(0,c/2-2,0),d,0,u,"wall",-a),i()<.7&&this.deco(e(.4,c*.6,.4),d-Math.sin(a)*h*.45,c*.45,u-Math.cos(a)*h*.45,"glowSoft",-a)}let n=new Be(88,.55,8,200);n.rotateX(Math.PI/2),this.deco(n,0,78,0,"glow");let s=new Be(88,2.4,6,120);s.rotateX(Math.PI/2),this.deco(s,0,80.5,0,"dark")}finalize(){for(let[t,e]of this.batches){let i=uh(e,!1);for(let o of e)o.dispose();let n=new gt(i,this.M[t]),s=t!=="glow"&&t!=="glowSoft"&&t!=="pad";n.castShadow=s&&t!=="floor"&&!t.startsWith("paint"),n.receiveShadow=s,this.scene.add(n),this.objects.push(n)}if(this.edges.length){let t=uh(this.edges,!1);for(let i of this.edges)i.dispose();let e=new Is(t,this.edgeMat);this.scene.add(e),this.objects.push(e)}this.batches=null,this.edges=null,this.col.build()}update(t,e){for(let i of this.animated)i(t,e)}};var K={gravity:30,runSpeed:11.5,crouchSpeed:5,groundAccel:14,friction:8,stopSpeed:5,airAccel:12,airCap:1,airControl:3.5,airSteer:1.7,jumpVel:10.2,airJumpVel:9.6,airJumps:1,coyote:.11,jumpBuffer:.13,slideTarget:16.5,slideBoostMin:3.5,slideBoostMax:9,slideBoostCd:1.25,slideFriction:.42,slideMinSpeed:4.5,slideSteer:2.2,slideLandFactor:.38,dashCharges:2,dashRecharge:1.6,dashBurst:27,dashTime:.13,dashGain:5,wallrunMin:6,wallrunTime:1.75,wallrunSpeed:14,wallJumpOut:8.5,wallJumpUp:9.5,climbTime:.45,climbVel:7.5,grappleRange:75,grappleHookSpeed:200,grapplePull:40,grappleYank:7,grappleCharges:2,grappleRecharge:2.4,maxSpeed:80,standH:1.8,crouchH:1.05,radius:.4},Oe={coyote:.16,jumpBuffer:.2,momentumDecay:2.6,groundTurn:7,airTurn:4.2,airBrake:9,airAccel:9,dashCharges:3,dashRecharge:1.15,wallReach:.85,wallrunTime:2.6,wallSagStart:1.1,wallrunMin:3,slideFriction:.32,slideSteer:3.2,grappleTap:!0},Sy=new M(0,1,0),me=new M,yn=new M,Pd=new M,la=[],gh=new M,ca={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Id={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Hs=class{constructor(t,e){this.map=t,this.col=t.col,this.ev=e,this.pos=new M,this.prevPos=new M,this.vel=new M,this.yaw=0,this.pitch=0,this.reset(new M(0,0,30),Math.PI)}reset(t,e){this.pos.copy(t),this.prevPos.copy(t),this.vel.set(0,0,0),this.yaw=e,this.pitch=0,this.h=K.standH,this.eyeH=K.standH-.14,this.prevEyeH=this.eyeH,this.grounded=!1,this.groundN=new M(0,1,0),this.groundTime=0,this.airTime=0,this.coyoteT=0,this.bufferT=0,this.airJumps=K.airJumps,this.state="air",this.crouching=!1,this.sliding=!1,this.slideCd=0,this.slideT=0,this.dashCharges=this.easy===!1?K.dashCharges:Oe.dashCharges,this.dashRegen=0,this.dashT=0,this.dashDir=new M,this.dashExit=0,this.wall=null,this.wallCd=0,this.lastWallN=new M,this.wallContact=null,this.climbT=0,this.climbUsed=!1,this.mantle=null,this.hook=null,this.grapple=null,this.grappleCharges=K.grappleCharges,this.grappleRegen=0,this.stagger=0,this.burstT=0,this.burstDir=new M,this.burstSpeed=0,this.burstExit=0,this.speed=0,this.hSpeed=0,this.jumpedTick=!1,this.lastLand=0,this.padCd=0,this.alive=!0,this.easy=this.easy??!0}get dashMax(){return this.easy?Oe.dashCharges:K.dashCharges}get eye(){return Pd.set(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}lookDir(t){return t.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}flatFwd(t){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}flatRight(t){return t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}wish(t,e){let i=this.flatFwd(me),n=this.flatRight(yn);e.set(i.x*t.fwd+n.x*t.right,0,i.z*t.fwd+n.z*t.right);let s=e.length();return s>0&&e.divideScalar(s),e}accelerate(t,e,i,n,s=1/0){let o=this.vel.x*t.x+this.vel.z*t.z,a=Math.min(e,s)-o;if(a<=0)return;let l=Math.min(i*n*e,a);this.vel.x+=t.x*l,this.vel.z+=t.z*l}friction(t,e){let i=this.grounded,n=i?this.vel.length():Math.hypot(this.vel.x,this.vel.z);if(n<.05){this.vel.x=this.vel.z=0,i&&(this.vel.y=0);return}let s=Math.max(n,K.stopSpeed)*t*e,o=Math.max(0,n-s)/n;this.vel.x*=o,this.vel.z*=o,i&&(this.vel.y*=o)}steer(t,e,i){let n=Math.hypot(this.vel.x,this.vel.z);if(n<.5)return;let s=this.vel.x/n,o=this.vel.z/n,a=s*t.z-o*t.x,l=s*t.x+o*t.z,c=Math.atan2(a,l),h=Math.sign(c)*Math.min(Math.abs(c),e*i),d=Math.cos(h),u=Math.sin(h);this.vel.x=(s*d-o*u)*n,this.vel.z=(s*u+o*d)*n}tick(t,e,i){this.prevPos.copy(this.pos),this.prevEyeH=this.eyeH;let n=this.wish(e,new M),s=n.lengthSq()>0;this.jumpedTick=!1,this.coyoteT-=t,this.bufferT-=t,this.dashCd=(this.dashCd||0)-t,this.steerLock=(this.steerLock||0)-t,this.slideCd-=t,this.wallCd-=t,this.padCd-=t,this.stagger=Math.max(0,this.stagger-t);let o=this.easy;e.jumpPressed&&(this.bufferT=o?Oe.jumpBuffer:K.jumpBuffer);let a=o?Oe.dashRecharge:K.dashRecharge;this.dashCharges<this.dashMax?(this.dashRegen+=t,this.dashRegen>=a&&(this.dashCharges++,this.dashRegen=0)):this.dashRegen=0,this.grappleCharges<K.grappleCharges&&!this.grapple&&!this.hook&&(this.grappleRegen+=t,this.grappleRegen>=K.grappleRecharge&&(this.grappleCharges++,this.grappleRegen=0));let l=this.stagger>0;if(this.mantle){this.tickMantle(t);return}let c=e.crouch&&!l;c&&!this.crouching&&(this.crouching=!0,this.grounded&&this.hSpeedNow()>K.slideMinSpeed-1&&this.startSlide(n),this.wall&&this.endWall()),!c&&this.crouching&&this.canStand()&&(this.crouching=!1,this.sliding=!1);let h=this.crouching?K.crouchH:K.standH;h<this.h?this.h=h:h>this.h&&(this.h=Math.min(h,this.h+t*9));let d=this.h-(this.crouching?.2:.14);this.eyeH+=(d-this.eyeH)*Math.min(1,t*16),e.dashPressed&&this.dashCharges>0&&!l&&this.startDash(s?n:this.flatFwd(new M),e),this.dashT>0&&(this.dashT-=t,this.vel.x=this.dashDir.x*Math.max(K.dashBurst,this.dashExit+6),this.vel.z=this.dashDir.z*Math.max(K.dashBurst,this.dashExit+6),this.grounded||(this.vel.y=Math.max(this.vel.y,0)*.5),this.dashT<=0&&(this.vel.x=this.dashDir.x*this.dashExit,this.vel.z=this.dashDir.z*this.dashExit)),this.burstT>0&&(this.burstT-=t,this.vel.copy(this.burstDir).multiplyScalar(this.burstSpeed),this.burstT<=0&&this.vel.copy(this.burstDir).multiplyScalar(this.burstExit)),e.grapplePressed&&o&&(this.grapple||this.hook)&&(this.grapple?this.releaseGrapple(!1):this.hook=null,e.grapplePressed=!1),e.grapplePressed&&!this.hook&&!this.grapple&&this.grappleCharges>0&&!l&&this.fireHook(i),this.hook&&this.tickHook(t,i),this.grapple&&this.tickGrapple(t,e,i),this.noWall||(this.scanWall(),this.wall?this.tickWall(t,e,n):!this.grounded&&!this.grapple&&this.dashT<=0&&this.tryWall(e,n)),this.bufferT>0&&!l&&(this.wall?(this.wallJump(e),this.bufferT=0):this.grounded||this.coyoteT>0?(this.groundJump(),this.bufferT=0):e.jumpPressed&&this.grapple?(this.releaseGrapple(!0),this.vel.y=Math.max(this.vel.y,0)+5,this.bufferT=0,this.ev.jump("grapple")):e.jumpPressed&&this.airJumps>0&&(this.airJump(n,s),this.bufferT=0)),e.jumpHeld&&e.autoHop&&this.grounded&&!this.jumpedTick&&!l&&this.groundTime>0&&this.groundJump();let u=K.runSpeed*(this.speedMul||1);if(!(this.wall||this.dashT>0||this.burstT>0)){if(this.grounded)if(this.sliding)this.tickSlide(t,e,n,s);else if(o&&s&&!l&&!this.crouching&&this.hSpeedNow()>u+.5){let p=this.hSpeedNow();this.steer(n,Oe.groundTurn*(1-Math.min(.55,p/70)),t);let m=Math.max(u,p-Oe.momentumDecay*t)/p;this.vel.x*=m,this.vel.z*=m}else{this.jumpedTick||this.friction(K.friction,t);let p=this.crouching?K.crouchSpeed:u;if(s&&!l){let m=this.groundN;me.copy(n).addScaledVector(m,-n.dot(m)).normalize();let y=this.vel.dot(me),v=p-y;v>0&&this.vel.addScaledVector(me,Math.min(K.groundAccel*t*p,v))}}else if(o){if(s&&!l){let p=this.hSpeedNow();if((p>.5?(this.vel.x*n.x+this.vel.z*n.z)/p:1)<-.4&&p>2){let y=Math.max(0,p-Oe.airBrake*t)/p;this.vel.x*=y,this.vel.z*=y}else!this.grapple&&this.steerLock<=0&&this.steer(n,Oe.airTurn*(1-Math.min(.5,p/80)),t);this.hSpeedNow()<u&&this.accelerate(n,u,Oe.airAccel,t),this.accelerate(n,K.runSpeed,K.airAccel,t,K.airCap)}}else if(s&&!l){this.accelerate(n,K.runSpeed,K.airAccel,t,K.airCap);let p=this.hSpeedNow();if(p<K.runSpeed*.95&&this.accelerate(n,K.runSpeed,K.airControl,t),e.fwd>0&&e.right===0&&!this.grapple&&this.steerLock<=0){let m=K.airSteer*(1.2-Math.min(.7,p/60));this.steer(this.flatFwd(yn),m,t)}}}if(this.grounded){if(this.sliding){let p=this.groundN;me.set(0,-K.gravity,0),me.addScaledVector(p,-me.dot(p)),this.vel.addScaledVector(me,t)}}else{let p=K.gravity;this.wall||this.climbT>0?p=0:this.dashT>0?p*=.1:this.burstT>0?p=0:this.crouching&&this.vel.y<0&&(p*=1.55),this.vel.y-=p*t}let f=this.vel.length();f>K.maxSpeed&&this.vel.multiplyScalar(1-Math.min(1,(f-K.maxSpeed)/f*t*6));let g=this.grounded;gh.copy(this.vel);let x=gh.y;this.integrate(t),g&&this.wallContact&&!this.jumpedTick&&this.stepUp(gh),g&&!this.grounded&&!this.jumpedTick&&this.dashT<=0&&this.vel.y<3&&!this.grapple&&this.snap(),!this.mantle&&!this.wall&&e.fwd>0&&this.wallContact&&this.vel.y<6&&!l&&this.tryMantle(),this.checkPads(),this.grounded?(g||this.onLand(x,n),this.groundTime+=t,this.airTime=0,this.coyoteT=o?Oe.coyote:K.coyote,this.airJumps=K.airJumps,this.climbUsed=!1,this.wall&&this.endWall()):(this.groundTime=0,this.airTime+=t),this.sliding&&!this.grounded&&this.airTime>.15&&(this.sliding=!1),this.hSpeed=this.hSpeedNow(),this.speed=this.vel.length(),this.state=this.mantle?"mantle":this.wall?"wall":this.grapple?"grapple":this.dashT>0?"dash":this.sliding?"slide":this.grounded?"ground":"air",this.pos.y<-30&&this.ev.fell&&this.ev.fell()}hSpeedNow(){return Math.hypot(this.vel.x,this.vel.z)}get invuln(){return this.dashT>0||this.burstT>0}burst(t,e,i,n){this.burstDir=t.clone().normalize(),this.burstSpeed=e,this.burstT=i,this.burstExit=n,this.wall&&this.endWall(),this.grapple&&this.releaseGrapple(!1),this.sliding=!1,this.grounded&&this.burstDir.y<.05&&(this.burstDir.y=Math.max(this.burstDir.y,.02))}integrate(t){let e=this.vel.length(),i=Math.min(10,Math.max(1,Math.ceil(e*t/.22))),n=t/i;this.grounded=!1,this.wallContact=null;for(let s=0;s<i;s++)if(this.pos.addScaledVector(this.vel,n),this.col.collideCapsule(this.pos,K.radius,this.h,la))for(let o of la){o.y>.68?(this.grounded=!0,this.groundN.set(o.x,o.y,o.z)):o.y<-.6?this.vel.y>0&&(this.vel.y=0):Math.abs(o.y)<.35&&(this.wallContact={x:o.x,y:o.y,z:o.z});let a=this.vel.x*o.x+this.vel.y*o.y+this.vel.z*o.z;a<0&&(this.vel.x-=o.x*a,this.vel.y-=o.y*a,this.vel.z-=o.z*a)}if(this.grounded&&!this.sliding){let s=this.vel.dot(this.groundN);s<0&&this.vel.addScaledVector(this.groundN,-s)}}snap(){if(me.copy(this.pos),me.y-=.45,this.col.collideCapsule(me,K.radius,this.h,la)){let e=null;for(let s of la)s.y>.68&&(!e||s.y<e.y)&&(e=s);if(!e)return;let i=Math.hypot(me.x-this.pos.x,me.y-(this.pos.y-.45),me.z-this.pos.z),n=this.pos.y-.45+i/Math.max(.68,e.y);if(n<=this.pos.y+.05){this.pos.y=Math.min(this.pos.y,n+.001),this.grounded=!0,this.groundN.set(e.x,e.y,e.z);let s=this.vel.dot(this.groundN);s>0&&this.vel.addScaledVector(this.groundN,-s)}}}stepUp(t){let e=Math.hypot(t.x,t.z);if(e<1)return;let i=t.x/e,n=t.z/e,s=this.pos.x+i*(K.radius+.12),o=this.pos.z+n*(K.radius+.12),a=this.col.raycast(s,this.pos.y+.5,o,0,-1,0,.5,Id);if(!a||a.ny<.7)return;let l=a.y-this.pos.y;l<.03||l>.46||this.col.capsuleFree(this.pos.x+i*.08,a.y+.02,this.pos.z+n*.08,K.radius,this.h)&&(this.pos.set(this.pos.x+i*.08,a.y+.02,this.pos.z+n*.08),this.vel.x=t.x,this.vel.z=t.z,this.vel.y<0&&(this.vel.y=0),this.grounded=!0)}canStand(){return this.col.capsuleFree(this.pos.x,this.pos.y+.02,this.pos.z,K.radius-.02,K.standH)}groundJump(){let t=this.grounded?this.groundN:Sy;if(this.vel.y=Math.max(this.vel.y,0)+K.jumpVel,t.y<.97&&(this.vel.x+=t.x*2,this.vel.z+=t.z*2),this.sliding){let e=this.hSpeedNow();if(e>1){let i=(e+.6)/e;this.vel.x*=i,this.vel.z*=i}this.ev.jump("slide")}else this.ev.jump("ground");this.sliding=!1,this.grounded=!1,this.coyoteT=0,this.jumpedTick=!0}airJump(t,e){if(this.airJumps--,this.vel.y=Math.max(this.vel.y*.25,0)+K.airJumpVel,e){let i=Math.max(this.hSpeedNow(),K.runSpeed*.85),n=this.hSpeedNow()||1,s=this.vel.x/n*.3+t.x*.7,o=this.vel.z/n*.3+t.z*.7,a=Math.hypot(s,o)||1;this.vel.x=s/a*i,this.vel.z=o/a*i}this.jumpedTick=!0,this.ev.jump("air")}onLand(t,e){let i=Math.max(0,-t);if(this.lastLand=i,this.crouching&&i>5){let n=this.hSpeedNow(),s=n>1?me.set(this.vel.x/n,0,this.vel.z/n):this.flatFwd(me),o=Math.min(i*K.slideLandFactor,10);this.vel.x+=s.x*o,this.vel.z+=s.z*o,this.sliding=!0,this.slideT=0,this.ev.slide("land",o)}else this.crouching&&this.hSpeedNow()>K.slideMinSpeed&&(this.sliding=!0,this.slideT=0,this.ev.slide("enter",0));this.ev.land(i)}startSlide(t){this.sliding=!0,this.slideT=0;let e=0;if(this.slideCd<=0){let i=this.hSpeedNow();e=Ht.clamp(K.slideTarget-i,K.slideBoostMin,K.slideBoostMax);let n=i>1?me.set(this.vel.x/i,0,this.vel.z/i):t.lengthSq()?me.copy(t):this.flatFwd(me);this.vel.x+=n.x*e,this.vel.z+=n.z*e,this.slideCd=K.slideBoostCd}this.ev.slide("enter",e)}tickSlide(t,e,i,n){this.slideT+=t,this.friction((this.easy?Oe.slideFriction:K.slideFriction)*(this.groundN.y>.985?1:.25),t),n&&this.steer(i,this.easy?Oe.slideSteer:K.slideSteer,t),this.hSpeedNow()<K.slideMinSpeed&&this.groundN.y>.985&&(this.sliding=!1)}startDash(t,e){if(this.dashCd>0)return;this.dashCharges--,this.dashRegen=Math.min(this.dashRegen,.2),this.dashCd=.22;let i=this.dashT>0?yn.copy(this.dashDir).multiplyScalar(this.dashExit):yn.copy(this.vel);this.dashDir.copy(t).setY(0).normalize();let n=Math.max(0,i.x*this.dashDir.x+i.z*this.dashDir.z),s=Math.hypot(i.x,i.z);this.dashExit=Math.max(n,s*.85,K.runSpeed)+K.dashGain,this.dashT=K.dashTime,this.wall&&this.endWall(),this.grapple&&this.releaseGrapple(!1),this.grounded||(this.vel.y=Math.max(this.vel.y,0)),this.grounded&&e.crouch&&(this.sliding=!0),this.ev.dash(this.dashDir)}scanWall(){if(this.nearWall=null,this.grounded)return;let t=1e9,e=K.radius+(this.easy?Oe.wallReach:.45);for(let i=0;i<8;i++){let n=this.yaw+i*Math.PI/4,s=Math.cos(n),o=-Math.sin(n),a=0,l=0,c=0,h=0,d=0,u=0;for(let f of[.55,1.3]){let g=this.col.raycast(this.pos.x,this.pos.y+Math.min(f,this.h-.2),this.pos.z,s,0,o,e,ca,Ji.WALLRUN);g&&Math.abs(g.ny)<.3&&(a++,h=g.t,d=g.nx,u=g.nz)}a===2&&h<t&&(t=h,this.nearWall={nx:d,nz:u,dist:h})}}tryWall(t,e){if(this.airTime<.05||this.crouching)return;let i=this.nearWall;if(!i)return;let n=me.set(i.nx,0,i.nz).normalize();if(this.wallCd>0&&n.dot(this.lastWallN)>.9)return;let s=this.hSpeedNow(),o=s>.1?yn.set(this.vel.x/s,0,this.vel.z/s):this.flatFwd(yn),a=-o.dot(n),l=-this.flatFwd(Pd).dot(n);if((a>.75||s<4&&l>.7)&&t.fwd>0&&l>.6){!this.climbUsed&&this.vel.y>-6&&(this.climbT=K.climbTime,this.climbUsed=!0,this.wall={n:n.clone(),dir:new M,t:0,climb:!0},this.bufferT=0,this.ev.climb());return}if(s<(this.easy?Oe.wallrunMin:K.wallrunMin)||!this.easy&&t.fwd<=0&&Math.abs(t.right)===0||this.easy&&t.fwd<0)return;let c=new M(-n.z,0,n.x);c.dot(o)<0&&c.negate(),this.wall={n:n.clone(),dir:c,t:0,entry:Math.max(s,K.wallrunSpeed),climb:!1},this.vel.y=Ht.clamp(this.vel.y,this.easy?0:-1.5,4.5),this.airJumps=K.airJumps,this.climbUsed=!1,this.bufferT=0,this.ev.wallStart(n)}tickWall(t,e,i){let n=this.wall;n.t+=t;let s=this.nearWall,o=s&&s.nx*n.n.x+s.nz*n.n.z>.8;if(n.climb){if(this.climbT-=t,!o||this.climbT<=0||e.fwd<=0){this.wall=null,this.climbT=0,this.vel.y>0&&(this.vel.y=Math.min(this.vel.y,4));return}this.vel.y=K.climbVel*(.6+.4*(this.climbT/K.climbTime)),this.vel.x=-n.n.x*1.5,this.vel.z=-n.n.z*1.5,this.tryMantle(!0);return}if(!o||n.t>(this.easy?Oe.wallrunTime:K.wallrunTime)||this.grounded){this.endWall();return}s&&n.n.set(s.nx,0,s.nz).normalize(),n.dir.set(-n.n.z,0,n.n.x),n.dir.dot(this.flatFwd(me))<0&&n.dir.negate();let a=this.vel.x*n.dir.x+this.vel.z*n.dir.z,l=Math.max(n.entry,K.wallrunSpeed)+(e.fwd>0?n.t*1.2:-n.t*3),c=a+(l-a)*Math.min(1,t*4),h=this.easy?3:1.8;this.vel.x=n.dir.x*c-n.n.x*h,this.vel.z=n.dir.z*c-n.n.z*h;let d=this.easy?Oe.wallSagStart:.35,u=this.easy?3.5:5.5,f=n.t<d?this.easy?.6:1.2:(this.easy?.6:1.2)-(n.t-d)*u;this.vel.y+=(f-this.vel.y)*Math.min(1,t*6),(e.right!==0?this.wish(e,yn).dot(n.n):0)>.6&&n.t>.15&&(this.vel.x+=n.n.x*4,this.vel.z+=n.n.z*4,this.endWall())}wallJump(t){let e=this.wall;if(e.climb)this.vel.set(e.n.x*K.wallJumpOut*1.1,K.wallJumpUp,e.n.z*K.wallJumpOut*1.1);else{let i=this.flatFwd(me),n=Math.max(this.hSpeedNow(),K.wallrunSpeed),s=this.easy?1.1:.45,o=this.easy?.5:.75,a=e.dir.x*o+e.n.x*.55+i.x*s,l=e.dir.z*o+e.n.z*.55+i.z*s,c=a*e.n.x+l*e.n.z;c<.3&&(a+=e.n.x*(.3-c),l+=e.n.z*(.3-c));let h=Math.hypot(a,l),d=n+1.2;this.vel.set(a/h*d+e.n.x*2,K.wallJumpUp,l/h*d+e.n.z*2)}this.lastWallN.copy(e.n),this.wallCd=.4,this.wall=null,this.climbT=0,this.airJumps=K.airJumps,this.jumpedTick=!0,this.steerLock=this.easy?.15:.35,this.ev.jump("wall")}endWall(){this.wall&&(this.lastWallN.copy(this.wall.n),this.wallCd=.3,this.wall=null,this.climbT=0)}tryMantle(t=!1){if(this.mantle)return!1;let e=this.flatFwd(me),i=this.col.raycast(this.pos.x,this.pos.y+.9,this.pos.z,e.x,0,e.z,K.radius+.7,ca);if(!i||Math.abs(i.ny)>.3)return!1;let n=this.col.raycast(this.pos.x,this.pos.y+2.45,this.pos.z,e.x,0,e.z,K.radius+.9,Id);if(n&&Math.abs(n.ny)<.3)return!1;let s=i.x-i.nx*.45,o=i.z-i.nz*.45,a=this.col.raycast(s,this.pos.y+2.6,o,0,-1,0,2.6,ca);if(!a||a.ny<.7)return!1;let l=a.y-this.pos.y;if(l<.4||l>2.3)return!1;let c=a.x-i.nx*0+e.x*(K.radius*.6),h=a.z+e.z*(K.radius*.6);return this.col.capsuleFree(c,a.y+.03,h,K.radius,K.crouchH)?(this.mantle={from:this.pos.clone(),to:new M(c,a.y+.03,h),t:0,dur:.14+l*.05,speed:Math.max(this.hSpeedNow(),7),dir:e.clone()},this.wall=null,this.climbT=0,this.ev.mantle(),!0):!1}tickMantle(t){let e=this.mantle;e.t+=t;let i=Math.min(1,e.t/e.dur),n=1-Math.pow(1-i,2);this.pos.x=e.from.x+(e.to.x-e.from.x)*Math.max(0,(i-.35)/.65),this.pos.z=e.from.z+(e.to.z-e.from.z)*Math.max(0,(i-.35)/.65),this.pos.y=e.from.y+(e.to.y-e.from.y)*Math.min(1,n*1.4),this.vel.set(0,0,0),i>=1&&(this.mantle=null,this.vel.set(e.dir.x*e.speed,0,e.dir.z*e.speed),this.grounded=!0,this.groundN.set(0,1,0))}fireHook(t){this.grappleCharges--,this.grappleRegen=0;let e=this.lookDir(new M),i=this.eye.clone();this.hook={pos:i.clone().addScaledVector(e,.6),dir:e,traveled:0},this.ev.hookFire()}tickHook(t,e){let i=this.hook,n=K.grappleHookSpeed*t,s=e&&e.hookEnemy?e.hookEnemy(i.pos,i.dir,n):null,o=this.col.raycast(i.pos.x,i.pos.y,i.pos.z,i.dir.x,i.dir.y,i.dir.z,n,ca,Ji.GRAPPLE);if(s&&(!o||s.t<o.t)){this.attach(s.point,s.enemy),this.hook=null;return}if(o){this.attach(new M(o.x,o.y,o.z),null,new M(o.nx,o.ny,o.nz)),this.hook=null;return}i.pos.addScaledVector(i.dir,n),i.traveled+=n,i.traveled>K.grappleRange&&(this.hook=null,this.ev.hookMiss(),this.grappleCharges=Math.min(K.grappleCharges,this.grappleCharges+1))}attach(t,e,i){this.grapple={point:t.clone(),enemy:e,t:0,normal:i};let n=me.subVectors(t,this.eye).normalize(),s=this.vel.dot(n);s<K.grappleYank&&this.vel.addScaledVector(n,K.grappleYank-Math.max(0,s)*.5),this.grounded&&(this.vel.y=Math.max(this.vel.y,5),this.grounded=!1),this.sliding=!1,this.wall&&this.endWall(),this.ev.hookAttach(t,!!e)}tickGrapple(t,e,i){let n=this.grapple;if(n.t+=t,n.enemy){if(!n.enemy.alive){this.releaseGrapple(!1);return}n.point.copy(n.enemy.chest)}let s=this.eye,o=me.subVectors(n.point,s),a=o.length();if(o.divideScalar(a||1),!(this.easy?!0:e.grappleHeld)||a<(n.enemy?3:2.4)||n.t>(this.easy?2.6:3.2)){this.releaseGrapple(a<3.2);return}let c=K.grapplePull*(n.enemy?1.35:1)*(a>8?1:.6+a/20);this.vel.addScaledVector(o,c*t),this.vel.y+=K.gravity*.35*t;let h=this.flatRight(yn);this.vel.addScaledVector(h,e.right*9*t);let d=this.vel.length();d>55&&this.vel.multiplyScalar(55/d)}releaseGrapple(t){if(!this.grapple)return;let e=this.grapple.enemy;this.grapple=null,t&&this.vel.y<4&&(this.vel.y+=3.5),t&&!e&&this.easy&&this.tryMantle(),this.ev.hookRelease(t,e)}checkPads(){if(!(this.padCd>0)){for(let t of this.map.jumpPads)if(Math.abs(this.pos.y-t.y)<.7&&(this.pos.x-t.x)**2+(this.pos.z-t.z)**2<t.r*t.r){this.vel.y=t.power,this.vel.x*=1.1,this.vel.z*=1.1,this.grounded=!1,this.airJumps=K.airJumps,this.padCd=.4,this.sliding=!1,this.ev.pad(t);return}if(this.grounded)for(let t of this.map.boostPads){let e=this.pos.x-t.x,i=this.pos.z-t.z,n=e*t.dir.x+i*t.dir.z,s=e*t.dir.z-i*t.dir.x;if(Math.abs(n)<t.len/2&&Math.abs(s)<t.w/2&&Math.abs(this.pos.y-t.y)<.6){let o=this.vel.x*t.dir.x+this.vel.z*t.dir.z,a=32;o<a&&(this.vel.x+=t.dir.x*(a-o),this.vel.z+=t.dir.z*(a-o)),this.padCd=.5,this.ev.boost(t);return}}}}};var xh=new M,Ty=new M,Ld=[],Ey={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Ay={turret:{hp:60,r:.75,h:1.9,speed:2.5,score:100,name:"\uD3EC\uD0D1"},chaser:{hp:40,r:.6,h:1.2,speed:9,score:80,name:"\uCD94\uC801\uC790"},shield:{hp:90,r:.55,h:2,speed:4.5,score:150,name:"\uBC29\uD328\uBCD1"}},Ei={};function Ry(){return Ei.black||(Ei.black=new Xt({color:1447450,roughness:.45,metalness:.2}),Ei.dark=new Xt({color:2894899,roughness:.5,metalness:.2}),Ei.red=new Xt({color:15212591,roughness:.4,emissive:5242888}),Ei.red.emissiveIntensity=qn.glow>1?4:1,Ei.hot=new Xt({color:16726586,roughness:.3,emissive:16719904,emissiveIntensity:qn.glow>1?7:1.5}),Ei.white=new Xt({color:15790320,roughness:.6}),Ei.flash=new te({color:16777215})),Ei}var li=(r,t,e=0,i=0,n=0)=>{let s=new gt(r,t);return s.position.set(e,i,n),s.castShadow=!0,s},qn=class{constructor(t,e,i){let n=Ry();this.game=t,this.col=t.arena.col,this.scene=t.scene,this.type=e,this.cfg=Ay[e],this.hp=this.maxHp=Math.round(this.cfg.hp*t.D.enemyHp),this.pos=i.clone(),this.vel=new M,this.yaw=Math.random()*6,this.alive=!0,this.grounded=!1,this.center=new M,this.t=Math.random()*10,this.cd=1.5+Math.random()*1.5,this.windup=0,this.stun=0,this.flashT=0,this.spawnT=.5;let s=this.group=new xe;if(e==="turret")s.add(li(new be(.35,.55,.7,12),n.dark,0,.35,0)),this.head=new xe,this.head.position.y=1.25,s.add(this.head),this.head.add(li(new Ot(1.1,1,1.1),n.black)),this.eye=li(new be(.22,.22,.12,16),n.red,0,0,.58),this.eye.rotation.x=Math.PI/2,this.head.add(this.eye),this.barrel=li(new Ot(.16,.16,.5),n.dark,0,-.3,.6),this.head.add(this.barrel);else if(e==="chaser"){this.body=li(new Zo(.6,0),n.black),this.body.position.y=.6,s.add(this.body),this.core=li(new Ue(.28,12,8),n.red),this.body.add(this.core);for(let l=0;l<8;l++){let c=li(new qo(.12,.45,6),n.dark),h=new M(Math.cos(l*2.4),Math.sin(l*1.7)*.8,Math.sin(l*2.4)).normalize();c.position.copy(h.clone().multiplyScalar(.62)),c.quaternion.setFromUnitVectors(new M(0,1,0),h),this.body.add(c)}}else s.add(li(new $i(.45,1,4,10),n.black,0,.95,0)),s.add(li(new Ue(.3,12,8),n.dark,0,1.85,0)),this.eye=li(new Ot(.3,.07,.05),n.red,0,1.88,.27),s.add(this.eye),this.shield=new xe,this.shield.position.set(0,1,.75),s.add(this.shield),this.shield.add(li(new Ot(1.5,1.8,.14),n.white)),this.shield.add(li(new Ot(1.52,.1,.16),n.red,0,.6,0)),this.shield.add(li(new Ot(1.52,.1,.16),n.red,0,-.6,0));let o=this.bar=new xe,a=new gt(new oi(1,.1),new te({color:0,transparent:!0,opacity:.35,depthTest:!1}));this.fill=new gt(new oi(1,.1),new te({color:15212591,depthTest:!1})),a.renderOrder=10,this.fill.renderOrder=11,o.add(a,this.fill),o.visible=!1,this.scene.add(o),s.scale.setScalar(.01),s.position.copy(this.pos),this.scene.add(s),this.updateCenter()}updateCenter(){this.type==="chaser"?this.center.set(this.pos.x,this.pos.y+.6,this.pos.z):this.type==="turret"?this.center.set(this.pos.x,this.pos.y+1.2,this.pos.z):this.center.set(this.pos.x,this.pos.y+1.1,this.pos.z)}get hitRadius(){return this.type==="chaser"?.9:this.type==="turret"?.95:.85}facing(t){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}shieldBlocks(t){if(this.type!=="shield"||this.stun>0)return!1;let e=this.facing(xh);return t.x*e.x+t.z*e.z<-.35}damage(t,e){return this.alive?(this.hp-=t,this.flashT=.1,this.bar.visible=!0,e&&(xh.subVectors(this.pos,e).setY(0).normalize(),this.vel.addScaledVector(xh,Math.min(10,t*.12))),this.hp<=0?(this.alive=!1,!0):!1):!1}update(t,e){let i=e.player;this.t+=t,this.cd-=t,this.flashT-=t,this.stun=Math.max(0,this.stun-t),this.spawnT-=t;let n=Ty.subVectors(i.pos,this.pos),s=n.y;n.y=0;let o=n.length();n.divideScalar(o||1);let l=Math.atan2(n.x,n.z)-this.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;let c=this.type==="shield"?1.6:this.type==="turret"?3:8;this.stun<=0&&this.spawnT<=0&&(this.yaw+=Math.sign(l)*Math.min(Math.abs(l),c*t));let h=0,d=0,u=this.cfg.speed,f=this.stun>0||this.spawnT>0;if(this.type==="turret"&&!f){this.windup>0?(this.windup-=t,this.windup<=0&&(e.fireOrb(this),this.cd=2+Math.random()*1.2)):this.cd<=0&&o<70&&e.canAttack(this)&&e.los(this.center,i.eye)&&(this.windup=.7*e.windMul);let y=Math.sin(this.t*.6)>0?1:-1;h=n.z*y*.6,d=-n.x*y*.6,o<8&&(h-=n.x,d-=n.z)}else this.type==="chaser"&&!f?(h=n.x,d=n.z,u=this.cfg.speed*e.speedMul,o<1.25+.4&&Math.abs(s)<1.6&&e.contact(this),s>1.5&&o<6&&this.grounded&&Math.random()<t*2&&(this.vel.y=11)):this.type==="shield"&&!f&&(this.windup>0?(this.windup-=t,u=1,this.windup<=0&&(e.shove(this),this.cd=1.6)):(h=n.x,d=n.z,o<2.6&&this.cd<=0&&e.canAttack(this)&&(this.windup=.6*e.windMul)));let g=Math.hypot(h,d);g>0&&(h/=g,d/=g);let x=this.grounded?9:1.5,p=Math.hypot(this.vel.x,this.vel.z);if(p>u+2&&this.grounded){let y=Math.exp(-5*t);this.vel.x*=y,this.vel.z*=y}else this.vel.x+=(h*u-this.vel.x)*Math.min(1,x*t),this.vel.z+=(d*u-this.vel.z)*Math.min(1,x*t);this.vel.y-=30*t;for(let y of e.foes){if(y===this||!y.alive)continue;let v=this.pos.x-y.pos.x,b=this.pos.z-y.pos.z,R=v*v+b*b,E=(this.cfg.r+y.cfg.r)**2;if(R<E&&R>1e-4){let A=Math.sqrt(R);this.vel.x+=v/A*25*t,this.vel.z+=b/A*25*t}}if(this.pos.addScaledVector(this.vel,t),this.grounded=!1,this.col.collideCapsule(this.pos,this.cfg.r,this.cfg.h,Ld))for(let y of Ld){y.y>.65&&(this.grounded=!0);let v=this.vel.x*y.x+this.vel.y*y.y+this.vel.z*y.z;v<0&&(this.vel.x-=y.x*v,this.vel.y-=y.y*v,this.vel.z-=y.z*v)}if(g>0&&this.grounded&&this.type!=="turret"){let y=this.col.raycast(this.pos.x,this.pos.y+.4,this.pos.z,h,0,d,this.cfg.r+.6,Ey);y&&Math.abs(y.ny)<.5&&(this.vel.y=9)}let m=this.game.arena.half-1;this.pos.x=Ht.clamp(this.pos.x,-m,m),this.pos.z=Ht.clamp(this.pos.z,-m,m),this.updateCenter(),this.animate(t,e,p)}animate(t,e,i){let n=Ei,s=this.group,o=Math.min(1,s.scale.x+t*4);if(s.scale.setScalar(o),s.position.copy(this.pos),this.type==="chaser"){let a=new M(this.vel.z,0,-this.vel.x),l=a.length();l>.01&&this.body.rotateOnWorldAxis(a.divideScalar(l),i*t/.6),this.core.material=this.flashT>0?n.flash:n.red,this.body.position.y=.6+(this.stun>0?Math.abs(Math.sin(this.t*20))*.1:0)}else if(s.rotation.y=this.type==="turret"?0:this.yaw,this.type==="turret"){this.head.rotation.y=this.yaw;let a=this.windup>0;this.eye.material=this.flashT>0?n.flash:a&&Math.sin(this.t*40)>0?n.hot:n.red,this.eye.scale.setScalar(a?1+(.7*e.windMul-this.windup)*.8:1)}else this.eye.material=this.flashT>0?n.flash:n.red,this.shield.position.z=this.windup>0?.75-Math.max(0,this.windup)*.6:.75,this.shield.rotation.x=this.windup>0?-.3:0,this.shield.visible=!0,s.rotation.z=this.stun>0?Math.sin(this.t*18)*.15:0;this.bar.position.set(this.pos.x,this.pos.y+this.cfg.h+.45,this.pos.z),this.bar.quaternion.copy(e.camera.quaternion),this.fill.scale.x=Math.max(.001,this.hp/this.maxHp),this.fill.position.x=-(1-this.fill.scale.x)/2}shatter(t){let e=[];return this.group.updateMatrixWorld(!0),this.group.traverse(i=>{if(!i.isMesh)return;let n=new M,s=new Xe,o=new M;i.matrixWorld.decompose(n,s,o);let a=new gt(i.geometry,i.material);a.position.copy(n),a.quaternion.copy(s),a.scale.copy(o),a.castShadow=!0,this.scene.add(a);let l=new M((Math.random()-.5)*8,3+Math.random()*6,(Math.random()-.5)*8);t&&l.addScaledVector(t,10),e.push({m:a,v:l,av:new M(Math.random()*14-7,Math.random()*14-7,Math.random()*14-7),life:2+Math.random()})}),this.dispose(),e}dispose(){this.scene.remove(this.group),this.scene.remove(this.bar)}};var ha=class{constructor(t,e=3e3){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.alpha=new Float32Array(e);let i=this.geo=new oe;i.setAttribute("position",new pe(this.pos,3).setUsage(mn)),i.setAttribute("color",new pe(this.col,3).setUsage(mn)),i.setAttribute("alpha",new pe(this.alpha,1).setUsage(mn)),i.setAttribute("size",new pe(this.size,1).setUsage(mn)),this.mat=new ye({transparent:!0,depthWrite:!1,uniforms:{scale:{value:300},boost:{value:1}},vertexShader:`attribute float alpha; attribute float size; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = max(2.0, size * scale / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; varying vec3 vC; uniform float boost; void main(){ vec2 p = gl_PointCoord - .5; if (max(abs(p.x), abs(p.y)) > 0.5) discard;
        float sat = max(vC.r, max(vC.g, vC.b)) - min(vC.r, min(vC.g, vC.b)); gl_FragColor = vec4(vC * (1.0 + (boost - 1.0) * sat), vA); }`}),this.points=new Ho(i,this.mat),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,{color:i=[.1,.1,.1],speed:n=7,dir:s=null,spread:o=1,size:a=.12,life:l=.6,gravity:c=14,drag:h=1.5}={}){for(let d=0;d<e;d++){let u=this.n<this.max?this.n++:Math.random()*this.max|0;this.pos[u*3]=t.x,this.pos[u*3+1]=t.y,this.pos[u*3+2]=t.z;let f=Math.random()*2-1,g=Math.random()*2-1,x=Math.random()*2-1,p=Math.hypot(f,g,x)||1;f/=p,g/=p,x/=p,s&&(f=s.x+f*o,g=s.y+g*o,x=s.z+x*o);let m=n*(.3+Math.random()*.9);this.vel[u*3]=f*m,this.vel[u*3+1]=g*m,this.vel[u*3+2]=x*m;let y=Array.isArray(i[0])?i[Math.random()*i.length|0]:i;this.col[u*3]=y[0],this.col[u*3+1]=y[1],this.col[u*3+2]=y[2],this.size[u]=a*(.5+Math.random()),this.life[u]=this.maxLife[u]=l*(.5+Math.random()*.8),this.grav[u]=c,this.drag[u]=h}}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){if(e--,n!==e){for(let o=0;o<3;o++)this.pos[n*3+o]=this.pos[e*3+o],this.vel[n*3+o]=this.vel[e*3+o],this.col[n*3+o]=this.col[e*3+o];this.size[n]=this.size[e],this.life[n]=this.life[e],this.maxLife[n]=this.maxLife[e],this.grav[n]=this.grav[e],this.drag[n]=this.drag[e]}n--;continue}let s=Math.exp(-this.drag[n]*t);this.vel[n*3]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s-this.grav[n]*t,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.03&&(this.pos[n*3+1]=.03,this.vel[n*3+1]*=-.3,this.vel[n*3]*=.6,this.vel[n*3+2]*=.6),this.alpha[n]=Math.min(1,this.life[n]/this.maxLife[n]*2)}this.n=e,this.geo.setDrawRange(0,e);let i=this.geo.attributes;i.position.needsUpdate=i.color.needsUpdate=i.alpha.needsUpdate=i.size.needsUpdate=!0}},ua=class{constructor(t){this.scene=t,this.list=[],this.geo=new Zi(.9,1,48)}add(t,e,i=3,n=.4,s=null){let o=new gt(this.geo,new te({color:e,transparent:!0,side:We,depthWrite:!1}));o.position.copy(t),s?o.lookAt(t.clone().add(s)):o.rotation.x=-Math.PI/2,this.scene.add(o),this.list.push({m:o,life:n,max:n,size:i})}update(t){for(let e=this.list.length-1;e>=0;e--){let i=this.list[e];i.life-=t;let n=1-i.life/i.max;i.m.scale.setScalar(Math.max(.01,i.size*(.15+(1-Math.pow(1-n,3))*.85))),i.m.material.opacity=Math.max(0,1-n),i.life<=0&&(this.scene.remove(i.m),i.m.material.dispose(),this.list.splice(e,1))}}},Vs=class r{constructor(t,e=24,i=16734751,n=.28){this.n=e,this.width=n,this.pts=[];let s=this.geo=new oe;this.p=new Float32Array(e*2*3),this.a=new Float32Array(e*2),s.setAttribute("position",new pe(this.p,3).setUsage(mn)),s.setAttribute("alpha",new pe(this.a,1).setUsage(mn));let o=[];for(let a=0;a<e-1;a++){let l=a*2;o.push(l,l+1,l+2,l+1,l+3,l+2)}s.setIndex(o),this.mat=new ye({transparent:!0,depthWrite:!1,side:We,uniforms:{color:{value:new ct(i)},glow:{value:r.glow||1}},vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 color; uniform float glow; varying float vA; void main(){ gl_FragColor = vec4(color * mix(1.0, glow, vA * vA), vA * 0.75); }"}),this.mesh=new gt(s,this.mat),this.mesh.frustumCulled=!1,t.add(this.mesh)}reset(){this.pts.length=0}update(t,e,i){i?(this.pts.unshift(t.clone()),this.pts.length>this.n&&this.pts.pop()):this.pts.length&&this.pts.pop();let n=this.pts.length;if(this.mesh.visible=n>1,n<2)return;let s=new M,o=new M,a=new M;for(let l=0;l<this.n;l++){let c=this.pts[Math.min(l,n-1)],h=this.pts[Math.min(l+1,n-1)]||c;o.subVectors(c,h),o.lengthSq()<1e-6&&o.set(1,0,0),a.subVectors(e,c),s.crossVectors(o,a).normalize().multiplyScalar(this.width*(1-l/this.n)),this.p.set([c.x+s.x,c.y+s.y,c.z+s.z],l*6),this.p.set([c.x-s.x,c.y-s.y,c.z-s.z],l*6+3);let d=l<n?1-l/Math.min(this.n,n):0;this.a[l*2]=this.a[l*2+1]=d}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}},da=class{constructor(t,e=90){this.n=e,this.arr=new Float32Array(e*6),this.pts=Array.from({length:e},()=>new M(1e5,0,0));let i=this.geo=new oe;i.setAttribute("position",new pe(this.arr,3).setUsage(mn)),this.mat=new Yi({color:8158328,transparent:!0,opacity:0,depthWrite:!1}),this.mesh=new Is(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.dir=new M,this.side=new M,this.up=new M,this.tmp=new M}update(t,e,i){if(i<.02){this.mesh.visible=!1;return}let n=e.length();if(n<1){this.mesh.visible=!1;return}this.mesh.visible=!0,this.mat.opacity=Math.min(.6,i*.6);let s=this.dir.copy(e).divideScalar(n);this.side.set(-s.z,0,s.x),this.side.lengthSq()<1e-4&&this.side.set(1,0,0),this.side.normalize(),this.up.crossVectors(this.side,s).normalize();let o=Math.min(9,n*.12);for(let a=0;a<this.n;a++){let l=this.pts[a],c=this.tmp.subVectors(l,t);if(c.dot(s)<-4||c.lengthSq()>45*45){let d=Math.random()*Math.PI*2,u=3.5+Math.random()*9;l.copy(t).addScaledVector(s,12+Math.random()*30).addScaledVector(this.side,Math.cos(d)*u).addScaledVector(this.up,Math.sin(d)*u*.7),l.y<.15&&(l.y=.15+Math.random()*.5)}this.arr[a*6]=l.x,this.arr[a*6+1]=l.y,this.arr[a*6+2]=l.z,this.arr[a*6+3]=l.x-s.x*o,this.arr[a*6+4]=l.y-s.y*o,this.arr[a*6+5]=l.z-s.z*o}this.geo.attributes.position.needsUpdate=!0}};var _n={disc:{id:"disc",name:"\uC6D0\uBC18",desc:"\uAE30\uBCF8 \xB7 \uD295\uAE38 \uB54C\uB9C8\uB2E4 +35%",speed:46,carry:.7,maxBounces:3,outTime:.95,returnSpeed:58,returnTurn:9,catchDist:1.7,radius:.35,dmg:40,returnDmg:30,bounceMul:.35,blinkSlam:45,blinkRadius:3.8,knock:5,scale:1,blades:3,trail:.25},heavy:{id:"heavy",name:"\uD574\uBA38",desc:"\uB290\uB9AC\uC9C0\uB9CC \uD06C\uACE0 \uBB35\uC9C1 \xB7 \uCDA9\uACA9\uD30C \uAC15\uD654",speed:33,carry:.6,maxBounces:1,outTime:1.15,returnSpeed:46,returnTurn:7,catchDist:2,radius:.62,dmg:58,returnDmg:38,bounceMul:.25,blinkSlam:56,blinkRadius:4.8,knock:11,scale:1.75,blades:6,trail:.5},rail:{id:"rail",name:"\uB808\uC77C",desc:"\uC544\uC8FC \uBE60\uB974\uACE0 \uBA40\uB9AC \xB7 \uBCBD\uC5D0 \uB9DE\uC73C\uBA74 \uADC0\uD658",speed:78,carry:.5,maxBounces:0,outTime:.75,returnSpeed:72,returnTurn:12,catchDist:1.7,radius:.26,dmg:52,returnDmg:22,bounceMul:0,blinkSlam:38,blinkRadius:3.2,knock:6,scale:.72,blades:2,trail:.15},boomerang:{id:"boomerang",name:"\uBD80\uBA54\uB791",desc:"\uD06C\uAC8C \uD718\uC5B4 \uB3CC\uC544\uC624\uBA70 \uB450 \uBC88 \uB54C\uB9BC",speed:40,carry:.7,maxBounces:2,outTime:.6,returnSpeed:50,returnTurn:3.2,catchDist:1.9,radius:.42,dmg:34,returnDmg:34,bounceMul:.3,blinkSlam:42,blinkRadius:3.8,knock:5,scale:1.15,blades:2,trail:.32},splitter:{id:"splitter",name:"\uBD84\uC5F4",desc:"\uBCBD\uC5D0 \uB9DE\uC73C\uBA74 \uC14B\uC73C\uB85C \uAC08\uB77C\uC9D0",speed:44,carry:.7,maxBounces:1,outTime:.9,returnSpeed:56,returnTurn:9,catchDist:1.8,radius:.38,dmg:36,returnDmg:24,bounceMul:.2,blinkSlam:40,blinkRadius:3.6,knock:5,scale:1.05,blades:4,trail:.28,split:3,shardDmg:24},saw:{id:"saw",name:"\uD1B1\uB0A0",desc:"\uBCBD\uC5D0 \uBC15\uD600 2\uCD08\uAC04 \uB3C4\uB294 \uB36B",speed:40,carry:.6,maxBounces:0,outTime:1,returnSpeed:54,returnTurn:9,catchDist:1.8,radius:.4,dmg:34,returnDmg:26,bounceMul:0,blinkSlam:44,blinkRadius:3.8,knock:4,scale:1.1,blades:8,trail:.22,stick:2,sawDmg:15,sawR:2},seeker:{id:"seeker",name:"\uCD94\uC801",desc:"\uB290\uB9AC\uC9C0\uB9CC \uC801\uC744 \uB05D\uAE4C\uC9C0 \uB530\uB77C\uAC10",speed:28,carry:.5,maxBounces:2,outTime:1.6,returnSpeed:52,returnTurn:8,catchDist:1.8,radius:.32,dmg:21,returnDmg:14,bounceMul:.15,blinkSlam:36,blinkRadius:3.4,knock:3,scale:.9,blades:3,trail:.2,seek:3},nova:{id:"nova",name:"\uCDA9\uACA9\uD0C4",desc:"\uCC98\uC74C \uB2FF\uB294 \uACF3\uC5D0\uC11C \uD3ED\uBC1C \xB7 \uB109\uBC31",speed:38,carry:.6,maxBounces:0,outTime:1,returnSpeed:52,returnTurn:9,catchDist:1.9,radius:.4,dmg:28,returnDmg:20,bounceMul:0,blinkSlam:40,blinkRadius:3.6,knock:6,scale:1.2,blades:0,trail:.35,blast:{r:5,dmg:36,knock:16}},prism:{id:"prism",name:"\uD504\uB9AC\uC998",desc:"6\uBC88\uAE4C\uC9C0 \uD295\uAE30\uBA70 \uB9E4\uBC88 \uBE68\uB77C\uC9D0",speed:40,carry:.7,maxBounces:6,outTime:1.1,returnSpeed:60,returnTurn:10,catchDist:1.7,radius:.3,dmg:24,returnDmg:18,bounceMul:.3,blinkSlam:38,blinkRadius:3.4,knock:4,scale:.85,blades:6,trail:.2,bounceSpeed:1.12}},yv=Object.keys(_n),vv=_n.disc,vn=new M,yh=new M,Cy={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0};function Mr(r,t,e=1,i=1){let n=new xe,s=Math.max(1,(Ki.glow||1)*i),o=t.id==="heavy",a=new gt(new Be(.34*e,.06*e*(o?1.5:1),12,48),new Xt({color:r,roughness:.3,metalness:.1,emissive:r,emissiveIntensity:s>1?1.2*s:.3})),l=new gt(new be(.3*e,.3*e,.05*e*(o?2:1),40),new Xt({color:1710622,roughness:.28,metalness:.75}));l.rotation.x=Math.PI/2;let c=new gt(new Be(.19*e,.012*e,6,40),new te({color:new ct(r).multiplyScalar(s>1?1.4*s:1)}));c.position.z=.03*e*(o?2:1);let h=c.clone();h.position.z*=-1;let d=new gt(new be(.1*e,.1*e,.07*e*(o?1.6:1),20),new Xt({color:r,roughness:.35,emissive:r,emissiveIntensity:s>1?.4*s:.2}));d.rotation.x=Math.PI/2;let u=new Xt({color:16185076,roughness:.25,metalness:.2}),f=t.id==="boomerang"?2.6:t.id==="rail"?1.8:t.id==="saw"?.75:t.id==="prism"?.7:1,g=x=>new te({color:new ct(x).multiplyScalar(s>1?1.4*s:1)});if(t.id==="nova"){let x=new gt(new Ue(.15*e,16,12),g(r));n.add(x)}if(t.id==="prism"){let x=new gt(new Jo(.17*e),new Xt({color:16777215,roughness:.05,metalness:.9,emissive:r,emissiveIntensity:s>1?.8:.15}));x.scale.z=.6,n.add(x)}if(t.id==="seeker")for(let x=0;x<3;x++){let p=x/3*Math.PI*2,m=new gt(new Ue(.035*e,8,6),g(16777215));m.position.set(Math.cos(p)*.24*e,Math.sin(p)*.24*e,.035*e),n.add(m)}if(t.id==="splitter")for(let x=0;x<3;x++){let p=x/3*Math.PI*2+.5,m=new gt(new Ot(.02*e,.24*e,.07*e),g(r));m.position.set(Math.cos(p)*.15*e,Math.sin(p)*.15*e,0),m.rotation.z=p,n.add(m)}for(let x=0;x<t.blades;x++){let p=new gt(new Ot(.06*e,.16*e*f,.04*e),u),m=x/t.blades*Math.PI*2,y=(.42+(f-1)*.08)*e;p.position.set(Math.cos(m)*y,Math.sin(m)*y,0),p.rotation.z=m,n.add(p)}return n.add(a,l,d,c,h),a.castShadow=l.castShadow=!0,n}var Ki=class r{constructor(t,e=null,i=16734751,n="disc"){this.game=t,this.owner=e,this.color=i,this.state="hand",this.pos=new M,this.vel=new M,this.t=0,this.bounces=0,this.hit=new Set,this.blinked=!1,this.catchCd=0,this.kills=0,this.id=r.nextId=(r.nextId||0)+1,this.leg=0,this.reflectedBy=null,this.holder=new xe,this.holder.visible=!1,t.scene.add(this.holder),this.trail=new Vs(t.scene,22,i,.25),this.setWeapon(n)}setWeapon(t){this.w=_n[t]||_n.disc,this.spinner&&this.holder.remove(this.spinner),this.spinner=this.mesh=Mr(this.color,this.w,this.w.scale),this.holder.add(this.spinner)}get body(){return this.owner?this.owner.body:this.game.player}dispose(){this.game.scene.remove(this.holder),this.game.scene.remove(this.trail.mesh)}get out(){return this.state!=="hand"}throw(t,e,i,n=1){if(this.state!=="hand"||this.catchCd>0)return!1;let s=this.w;this.state="out",this.t=0,this.bounces=0,this.hit.clear(),this.blinked=!1,this.kills=0,this.leg++,this.homing=0,this.bonus=0,this.lock=null,this.cone=0,this.range=0,this.reflectedBy=null,this.stuckT=0,this.sawT=0,this.blasted=!1,this.splitDone=!1,this.seekLock=null;let o=Math.max(0,i.dot(e))*s.carry;return this.pos.copy(t),this.vel.copy(e).multiplyScalar((s.speed+o)*n),this.holder.visible=!0,this.trail.reset(),this.trail.width=s.trail,!0}recall(){return this.state!=="out"?!1:(this.state="return",this.hit.clear(),this.leg++,this.stuckT=0,this.reflectedBy&&this.hit.add(this.reflectedBy),!0)}caught(){this.state="hand",this.holder.visible=!1,this.catchCd=.12,this.reflectedBy=null}speedMul(){return Ht.clamp(this.vel.length()/this.w.speed,1,2)}tick(t){if(this.catchCd-=t,this.state==="hand")return;let e=this.game,i=e.arena.col,n=this.w,s=n.radius;if(this.t+=t,this.state==="out"&&this.stuckT>0)this.stuckT-=t,this.sawT-=t,this.sawT<=0&&(this.sawT=.3,this.hit.clear(),e.discArea(this,this.pos,n.sawR,n.sawDmg,"saw",.4)),this.stuckT<=0&&this.recall();else if(this.state==="out"){this.homing>0&&e.discHoming(this,t),n.seek&&e.discSeek(this,t);let o=this.vel.length()*t;for(let a=0;a<5&&o>1e-4;a++){let l=this.vel.length();vn.copy(this.vel).divideScalar(l);let c=i.raycast(this.pos.x,this.pos.y,this.pos.z,vn.x,vn.y,vn.z,o+s,Cy),h=!!c&&c.t-s<o,d=c?c.x:0,u=c?c.y:0,f=c?c.z:0,g=c?c.nx:0,x=c?c.ny:0,p=c?c.nz:0,m=h?Math.max(0,c.t-s):o,y=yh.copy(this.pos).addScaledVector(vn,m),v=e.discSweep(this,this.pos,y,"out");if(v){if(o-=this.pos.distanceTo(v),this.pos.copy(v),this.state!=="out")break;continue}if(this.pos.copy(y),o-=m,!h)break;let b=new M(g,x,p);if(n.stick&&b.y<.7){this.stuckT=n.stick,this.sawT=0,this.vel.copy(b).multiplyScalar(.01),e.onDiscBounce(this,new M(d,u,f),b);break}if(n.blast&&!this.blasted){this.blasted=!0,e.discBlast(this,new M(d,u,f).addScaledVector(b,.3)),this.recall();break}let R=this.vel.dot(b);if(this.vel.addScaledVector(b,-2*R),b.y>.7&&(this.vel.y=Math.abs(this.vel.y)*.6),n.bounceSpeed&&this.vel.length()<n.speed*2.2&&this.vel.multiplyScalar(n.bounceSpeed),this.bounces++,n.split&&!this.splitDone&&(this.splitDone=!0,e.discSplit(this,new M(d,u,f).addScaledVector(b,.3))),e.onDiscBounce(this,new M(d,u,f),b),this.bounces>n.maxBounces){this.recall();break}}if(this.state==="out"&&!(this.stuckT>0)){let a=e.arena,l=a.half-s,c=0,h=0,d=0;this.pos.y>a.ceiling&&this.vel.y>0&&(this.pos.y=a.ceiling,this.vel.y=-this.vel.y,h=-1),Math.abs(this.pos.x)>l&&this.vel.x*this.pos.x>0&&(c=-Math.sign(this.pos.x),this.pos.x=Math.sign(this.pos.x)*l,this.vel.x=-this.vel.x),Math.abs(this.pos.z)>l&&this.vel.z*this.pos.z>0&&(d=-Math.sign(this.pos.z),this.pos.z=Math.sign(this.pos.z)*l,this.vel.z=-this.vel.z),(c||h||d)&&(this.bounces++,e.onDiscBounce(this,this.pos.clone(),new M(c,h,d).normalize()),this.bounces>n.maxBounces&&this.recall())}this.state==="out"&&!(this.stuckT>0)&&this.t>n.outTime+this.bounces*.12&&this.recall()}if(this.state==="return"){let o=this.body,a=vn.copy(o.eye).addScaledVector(o.vel,.04),l=yh.subVectors(a,this.pos),c=l.length();if(c<n.catchDist){e.onDiscCatch(this);return}let h=l.divideScalar(c).multiplyScalar(n.returnSpeed+o.speed);this.vel.lerp(h,Math.min(1,t*n.returnTurn));let d=yh.copy(this.pos).addScaledVector(this.vel,t);e.discSweep(this,this.pos,d,"return"),this.pos.copy(d),this.t>4&&e.onDiscCatch(this)}}blinkSpot(t){let e=vn.copy(this.vel).normalize();for(let i=0;i<=8;i++)for(let n of i?[-1,1]:[1]){let s=n*i*.4;for(let o of[0,.6,1.2]){let a=this.pos.x-e.x*s,l=this.pos.z-e.z*s,c=Math.max(0,this.pos.y-.9-e.y*s)+o;if(t.capsuleFree(a,c,l,.4,1.8))return new M(a,c,l)}}return null}render(t){if(this.state==="hand")return;this.holder.position.copy(this.pos);let e=vn.copy(this.vel).normalize();this.holder.rotation.set(-Math.PI/2+e.y*.6,0,0),this.spinner.rotation.z+=t*(this.w.id==="heavy"?16:this.stuckT>0?55:30)}};var Yn={reflect:{id:"reflect",name:"\uBC18\uC0AC\uB9C9",desc:"0.6\uCD08 \uB3D9\uC548 \uB0A0\uC544\uC624\uB294 \uC6D0\uBC18\xB7\uAD6C\uCCB4\xB7\uCDA9\uACA9\uD30C\uB97C \uB418\uBC1B\uC544\uCE68",cd:7,dur:.6},overdrive:{id:"overdrive",name:"\uC624\uBC84\uB4DC\uB77C\uC774\uBE0C",desc:"4\uCD08\uAC04 \uB354 \uBE68\uB9AC \uB2EC\uB9AC\uACE0 \uB300\uC2DC \uBB34\uD55C \xB7 \uC6D0\uBC18 +25% \uC18D\uB3C4",cd:13,dur:4},gravity:{id:"gravity",name:"\uC911\uB825\uD0C4",desc:"\uB5A8\uC5B4\uC9C4 \uACF3\uC73C\uB85C \uC801\uC744 1.4\uCD08\uAC04 \uB04C\uC5B4\uB2F9\uAE40",cd:9,dur:1.4},heal:{id:"heal",name:"\uC7AC\uC0DD",desc:"\uC989\uC2DC \uCCB4\uB825 +35, 2\uCD08\uAC04 \uCD94\uAC00 \uD68C\uBCF5",cd:14,dur:2}},vh={start:["\u314E\u3147","\uAC00\uBCF4\uC790\uACE0","\uC798 \uBD80\uD0C1~","\uC190 \uD480\uACE0 \uC634","\uC624\uB298 \uCEE8\uB514\uC158 \uC88B\uC74C","\uC0B4\uC0B4 \uD574\uC918\uC694"],kill:["\u314B\u314B","\uB098\uC774\uC2A4","\uC7A1\uC558\uB2E4","\uAE54\uB054","\uC774\uAC8C \uB418\uB124","\uC624\uCF00\uC774"],bank:["\uCFE0\uC158 \uBD24\uB0D0\u314B\u314B","\uBCBD \uB9DE\uACE0 \uB4E4\uC5B4\uAC10","\uAC01 \uB098\uC654\uC9C0"],slam:["\uC21C\uAC04\uC774\uB3D9 \uB9DB \uC5B4\uB54C","\uB4A4\uC5D0 \uC788\uC5C8\uC9C0\uB871","\uCF85"],death:["\uC544 \u314B\u314B","\uC778\uC815","\uC640 \uADF8\uAC78 \uB9DE\uD788\uB124","\uB2E4\uC74C\uC5D4 \uC548 \uBD10\uC90C","\uBC29\uC2EC\uD588\uB2E4","\uC798\uD558\uB124"],reflected:["?","\uBC18\uC0AC \uC2E4\uD654\uB0D0","\uC544 \uADF8\uAC70 \uC788\uC5C8\uC9C0"],streak:["3\uC5F0\uC18D~","\uB9C9\uC744 \uC0AC\uB78C?","\uC624\uB298 \uC880 \uB418\uB294 \uB0A0"],retreat:["\uD53C \uC5C6\uB2E4 \uBE60\uC9D0","\uC7A0\uAE50\uB9CC","\uD6C4\uD1F4!"],win:["gg","gg wp","\uC7AC\uBC0C\uC5C8\uB2E4"],lose:["gg","gg \uC798\uD558\uC2DC\uB124","\uD55C \uD310 \uB354?"]},Dd=r=>r[Math.random()*r.length|0];var br=(r,t,e)=>r.map((i,n)=>i+(t[n]-i)*e),_h=r=>1-Math.pow(1-r,3),fa=class{constructor(){this.scene=new dn,this.camera=new Ie(60,1,.01,10),this.scene.add(new Ds(16777215,13619151,1.8));let t=new Us(16777215,1.6);t.position.set(1,2,1),this.scene.add(t);let e=new Xt({color:13619146,roughness:.85}),i=new Xt({color:2236966,roughness:.6}),n=new Xt({color:16734751,roughness:.4,emissive:4198400}),s=new Xt({color:1710622,roughness:.4}),o=l=>{let c=new gt(new be(.045,.06,.44,12),e);c.rotation.x=Math.PI/2,c.position.set(0,-.02,.27),l.add(c);let h=new gt(new be(.051,.051,.03,12),n);h.rotation.x=Math.PI/2,h.position.set(0,-.02,.08),l.add(h),l.add(new gt(new Ot(.08,.09,.1),i));let d=new gt(new Ot(.022,.022,.06),i);d.position.set(.045,.03,-.03),l.add(d)};this.right=new xe,this.scene.add(this.right),o(this.right),this.left=new xe,this.scene.add(this.left),o(this.left),this.right.scale.setScalar(.6),this.left.scale.setScalar(.6),this.left.visible=!1;let a=this.disc=new xe;this.setWeapon(_n.disc,16734751),a.scale.setScalar(.7),a.rotation.x=-Math.PI/2+.22,a.position.set(-.02,.03,-.12),this.right.add(a),this.t=0,this.bob=0,this.swayX=0,this.swayY=0,this.anim=null,this.leftAnim=null}setWeapon(t,e){this.disc.clear(),this.disc.add(Mr(e,t,.5*Math.min(1.1,t.scale),.3))}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}throwAnim(){this.anim={t:0,dur:.28,k:"throw"}}catchAnim(){this.anim={t:0,dur:.22,k:"catch"}}blinkAnim(){this.leftAnim={t:0,dur:.35}}update(t,e){this.t+=t,this.swayX+=(-e.mx*5e-4-this.swayX)*Math.min(1,t*12),this.swayY+=(e.my*5e-4-this.swayY)*Math.min(1,t*12),this.swayX=Ht.clamp(this.swayX,-.06,.06),this.swayY=Ht.clamp(this.swayY,-.05,.05),e.grounded&&(this.bob+=t*(3+e.hs*.6));let i=e.grounded?Math.min(1,e.hs/11):0,n=Math.sin(this.bob)*.012*i,s=-Math.abs(Math.cos(this.bob))*.015*i,o=Ht.clamp(-e.vy*.003,-.04,.05),a=[.25,-.24,-.5,.15,-.15,.1],l=e.discOut;if(l&&(a=[.3,-.52,-.45,-.35,-.1,.2]),this.anim){let h=this.anim;h.t+=t;let d=Math.min(1,h.t/h.dur);if(h.k==="throw"){let u=[.38,-.2,-.3,.2,.6,.4],f=[0,-.18,-.75,-.25,-.5,-.2];a=d<.3?br(a,u,_h(d/.3)):d<.6?br(u,f,_h((d-.3)/.3)):br(f,a,(d-.6)/.4)}else{let u=Math.sin(d*Math.PI);a=br(a,[.24,-.22,-.52,.35,-.2,.2],u)}d>=1&&(this.anim=null)}this.disc.visible=!l,this.right.position.set(a[0]+this.swayX+n,a[1]+this.swayY+s+o,a[2]),this.right.rotation.set(a[3]+this.swayY*2,a[4]+this.swayX*2,a[5]);let c=[-.3,-.42,-.4,-.2,.2,-.1];if(this.leftAnim){let h=this.leftAnim;h.t+=t;let d=Math.min(1,h.t/h.dur),u=d<.3?_h(d/.3):1-(d-.3)/.7;c=br(c,[-.12,-.12,-.62,.05,0,-.3],u),d>=1&&(this.leftAnim=null)}this.left.visible=!!this.leftAnim,this.left.position.set(c[0]+this.swayX+n,c[1]+this.swayY+s+o,c[2]),this.left.rotation.set(c[3]+this.swayY*2,c[4]+this.swayX*2,c[5]),this.disc.rotation.z+=t*(l?0:1.5)}};var Ud=[{name:"VEGA",color:3107839},{name:"NOVA",color:1484900},{name:"KITE",color:9063935},{name:"FLUX",color:14723072},{name:"ECHO",color:16727972},{name:"RAZE",color:1223096}],Py=new M,Mn=class{constructor(t,{name:e,color:i,isBot:n,body:s=null,disc:o=null,weapon:a="disc",skill:l="reflect"}){this.game=t,this.name=e,this.color=i,this.isBot=n,this.css="#"+i.toString(16).padStart(6,"0"),this.body=s||new Hs(t.arena,t.botEvents(this)),this.body.easy=!0,this.body.noWall=!0,this.disc=o||new Ki(t,this,i,a),this.disc.owner=this,this.skill=l,this.skillCd=0,this.reflectT=0,this.overT=0,this.healT=0,this.hp=100,this.kills=0,this.deaths=0,this.alive=!0,this.respawnT=0,this.protT=0,this.invulnT=0,this.regenT=0,this.lastHitBy=null,this.lastHitT=-9,this.streak=0,this.st={throws:0,hits:0,blinks:0,slams:0,dodges:0,bank:0,ret:0},this.center=new M,this.brain=null,n&&this.buildModel()}get invuln(){return this.body.invuln||this.invulnT>0||this.protT>0}updateCenter(){let t=this.body.pos;return this.center.set(t.x,t.y+1,t.z),this.center}buildModel(){let t=this.game.Q&&this.game.Q.post?4:1.3,e=new Xt({color:1842210,roughness:.5,metalness:.35}),i=this.teamMat=new Xt({color:this.color,roughness:.35,emissive:new ct(this.color).multiplyScalar(.3)}),n=new Xt({color:16053489,roughness:.32,metalness:.05}),s=this.glowMat=new te({color:new ct(this.color).multiplyScalar(t)});this.glowK=t;let o=(x,p,m=0,y=0,v=0)=>{let b=new gt(x,p);return b.position.set(m,y,v),b.castShadow=!0,b},a=(x,p,m)=>{let y=new $i(Math.min(x,m)/2,p,4,10);return y.scale(x/Math.min(x,m),1,m/Math.min(x,m)),y},l=this.model=new xe,c=this.torso=new xe;l.add(c),c.add(o(new $i(.29,.52,4,12),e,0,.98,0)),c.add(o(a(.5,.2,.2),n,0,1.2,-.2)),c.add(o(new Ot(.06,.16,.02),s,0,1.2,-.31));for(let x of[-1,1]){let p=o(new Ue(.15,14,10),n,x*.33,1.37,0);p.scale.set(1,.75,1.1),c.add(p)}let h=o(new Be(.3,.035,8,32),s,0,.84,0);h.rotation.x=Math.PI/2,c.add(h),c.add(o(new Ot(.4,.42,.16),e,0,1.16,.27)),c.add(o(new Ot(.42,.06,.17),i,0,1.38,.27)),c.add(o(new Ot(.05,.3,.02),s,0,1.15,.355)),this.head=o(new Ue(.21,20,14),n,0,1.64,0),c.add(this.head),this.head.add(o(new Ue(.205,16,10,0,Math.PI*2,Math.PI*.55,Math.PI*.45),e,0,-.005,0));let d=o(new be(.215,.215,.07,20,1,!0,Math.PI*.62,Math.PI*.76),s,0,.02,0);this.head.add(d),this.legs=[];for(let x of[-1,1]){let p=new xe;p.position.set(x*.13,.55,0),p.add(o(new $i(.09,.36,4,8),e,0,-.27,0)),p.add(o(a(.13,.08,.1),n,0,-.24,-.07)),p.add(o(new Ot(.15,.1,.26),n,0,-.52,-.04)),l.add(p),this.legs.push(p)}this.arm=new xe,this.arm.position.set(.36,1.28,0),c.add(this.arm),this.arm.add(o(new $i(.075,.36,4,8),e,0,-.22,0));let u=this.handDisc=new xe;u.position.set(.04,-.45,-.12),u.rotation.y=Math.PI/2,this.arm.add(u),this.setHandDisc(),this.dome=new gt(new Ue(1.15,24,16),new te({color:this.color,transparent:!0,opacity:.22,depthWrite:!1})),this.dome.position.y=1,this.dome.visible=!1,l.add(this.dome);let f=this.bubbleCanvas=document.createElement("canvas");f.width=512,f.height=96,this.bubbleTex=new fn(f),this.bubbleTex.colorSpace=Ge,this.bubble=new mr(new Ps({map:this.bubbleTex,depthTest:!1,transparent:!0})),this.bubble.renderOrder=21,this.bubble.visible=!1,this.bubble.position.y=2.95,l.add(this.bubble),this.bubbleT=0;let g=this.tagCanvas=document.createElement("canvas");g.width=256,g.height=64,this.tagTex=new fn(g),this.tagTex.colorSpace=Ge,this.tag=new mr(new Ps({map:this.tagTex,depthTest:!1,transparent:!0})),this.tag.scale.set(1.6,.4,1),this.tag.renderOrder=20,l.add(this.tag),this.tag.position.y=2.35,this._tagHp=-1,this.drawTag(),this.game.scene.add(l),this.walk=0,this.lean=0,this.throwT=0}setHandDisc(){this.handDisc&&(this.handDisc.clear(),this.handDisc.add(Mr(this.color,this.disc.w,.5*Math.min(1.4,this.disc.w.scale))))}say(t,e=2.6){if(!this.bubble)return;let i=this.bubbleCanvas.getContext("2d");i.clearRect(0,0,512,96),i.font='700 34px "Noto Sans KR", sans-serif',i.textAlign="center",i.textBaseline="middle";let n=Math.min(500,i.measureText(t).width+40);i.fillStyle="rgba(22,22,26,.88)";let s=256-n/2;i.beginPath(),i.roundRect?i.roundRect(s,10,n,64,18):i.rect(s,10,n,64),i.fill(),i.beginPath(),i.moveTo(240,74),i.lineTo(256,92),i.lineTo(272,74),i.fill(),i.fillStyle="#fff",i.fillText(t,256,43),this.bubbleTex.needsUpdate=!0,this.bubble.visible=!0,this.bubbleT=e}drawTag(){let t=this.tagCanvas.getContext("2d"),e=Math.max(0,Math.round(this.hp));e!==this._tagHp&&(this._tagHp=e,t.clearRect(0,0,256,64),t.font='700 26px "Space Grotesk", "Noto Sans KR", sans-serif',t.textAlign="center",t.lineWidth=5,t.strokeStyle="rgba(255,255,255,.95)",t.strokeText(this.name,128,27),t.fillStyle=this.css,t.fillText(this.name,128,27),t.fillStyle="rgba(0,0,0,.22)",t.fillRect(48,40,160,10),t.fillStyle=e<35?"#e8202f":"#16161a",t.fillRect(48,40,160*e/100,10),this.tagTex.needsUpdate=!0)}renderModel(t,e,i){if(!this.model)return;let n=this.body,s=this.model;if(s.visible=this.alive&&!(this.protT>0&&Math.sin(i*40)>.3),!this.alive)return;s.position.set(n.prevPos.x+(n.pos.x-n.prevPos.x)*e,n.prevPos.y+(n.pos.y-n.prevPos.y)*e,n.prevPos.z+(n.pos.z-n.prevPos.z)*e),s.rotation.y=n.yaw;let o=n.hSpeed,a=n.flatFwd(Py),l=n.vel.x*a.x+n.vel.z*a.z;this.lean+=(Ht.clamp(-l*.012,-.35,.35)-this.lean)*Math.min(1,t*8),this.torso.rotation.x=this.lean,n.grounded&&(this.walk+=t*(2+o*.9));let c=n.grounded?Math.sin(this.walk)*Math.min(1,o/8)*.8:.5;this.legs[0].rotation.x=n.grounded?c:-.6,this.legs[1].rotation.x=n.grounded?-c:.3,this.head.rotation.x=n.pitch*.6,this.throwT=Math.max(0,this.throwT-t);let h=this.throwT>0?Math.sin((1-this.throwT/.25)*Math.PI):0;this.arm.rotation.x=.35+n.pitch*.5+h*1.4,this.arm.rotation.z=-.15,this.handDisc.visible=this.disc.state==="hand",this.dome.visible=this.reflectT>0,this.dome.visible&&(this.dome.scale.setScalar(.9+Math.sin(i*30)*.05),this.dome.material.opacity=.1+this.reflectT*.15),this.teamMat.emissiveIntensity=this.overT>0?2.2+Math.sin(i*20)*.6:1;let d=this.overT>0?1.6+Math.sin(i*20)*.4:1;this._gk!==d&&(this._gk=d,this.glowMat.color.set(this.color).multiplyScalar(this.glowK*d)),this.bubbleT>0&&(this.bubbleT-=t,this.bubbleT<=0&&(this.bubble.visible=!1)),this.handDisc.rotation.z+=t*2,this.drawTag();let f=.4+Math.max(4,s.position.distanceTo(this.game.camera.position))*.035;this.tag.scale.set(f*4,f,1),this.bubble.scale.set(f*4.4,f*.83,1),this.bubble.position.y=2.35+f*.9}shatter(t){let e=[];return this.model&&(this.model.updateMatrixWorld(!0),this.model.traverse(i=>{if(!i.isMesh||!i.visible)return;let n=new M,s=new Xe,o=new M;i.matrixWorld.decompose(n,s,o);let a=new gt(i.geometry,i.material);a.position.copy(n),a.quaternion.copy(s),a.scale.copy(o),a.castShadow=!0,this.game.scene.add(a);let l=new M((Math.random()-.5)*8,3+Math.random()*6,(Math.random()-.5)*8);t&&l.addScaledVector(t,9),e.push({m:a,v:l,av:new M(Math.random()*14-7,Math.random()*14-7,Math.random()*14-7),life:2+Math.random()})}),this.model.visible=!1),e}dispose(){this.model&&this.game.scene.remove(this.model),this.isBot&&this.disc.dispose()}};var ji={easy:{name:"\uC26C\uC6C0",react:.42,err:.075,aimK:45,aimZ:.55,turn:6,align:.12,lead:.5,gravity:!1,bank:0,lob:0,recall:.2,slam:.12,dodge:.03,dodgeLead:.06,bhop:.15,strafe:.55,strafeMin:.9,strafeMax:2,think:.3,pause:.6,escape:0,mobility:0,fov:.75,hear:.5,mem:2.5,tech:.1,skillUse:.3,mistake:.25},normal:{name:"\uBCF4\uD1B5",react:.27,err:.04,aimK:95,aimZ:.6,turn:10,align:.07,lead:.85,gravity:!0,bank:.25,lob:.2,recall:.5,slam:.4,dodge:.1,dodgeLead:.08,bhop:.45,strafe:.8,strafeMin:.6,strafeMax:1.5,think:.18,pause:.3,escape:.4,mobility:.3,fov:.9,hear:.75,mem:3.5,tech:.4,skillUse:.55,mistake:.12},hard:{name:"\uC5B4\uB824\uC6C0",react:.17,err:.018,aimK:170,aimZ:.65,turn:18,align:.04,lead:1,gravity:!0,bank:.8,lob:.6,recall:.85,slam:.75,dodge:.22,dodgeLead:.1,bhop:.75,strafe:1,strafeMin:.35,strafeMax:1.1,think:.1,pause:.12,escape:.8,mobility:.6,fov:1.05,hear:.9,mem:5,tech:.75,skillUse:.8,mistake:.05},max:{name:"\uCD5C\uAC15",react:.1,err:.008,aimK:320,aimZ:.7,turn:30,align:.02,lead:1,gravity:!0,bank:1,lob:1,recall:1,slam:1,dodge:.35,dodgeLead:.11,bhop:1,strafe:1,strafeMin:.22,strafeMax:.9,think:.05,pause:.02,escape:1,mobility:1,fov:1.2,hear:1,mem:7,tech:.95,skillUse:.95,mistake:.02}},bn=[{id:"rusher",name:"\uB3CC\uACA9\uD615",aggro:.9,caution:.2,flair:.6,patience:.15,chatty:1,band:[5,12],weapons:["heavy","disc","nova","saw"],skills:["overdrive","heal"]},{id:"sniper",name:"\uC800\uACA9\uD615",aggro:.35,caution:.7,flair:.3,patience:.8,chatty:.6,band:[18,32],weapons:["rail","prism"],skills:["reflect","gravity"]},{id:"trick",name:"\uACE1\uC608\uD615",aggro:.65,caution:.4,flair:1,patience:.35,chatty:.9,band:[9,18],weapons:["boomerang","disc","splitter","prism"],skills:["gravity","overdrive"]},{id:"guard",name:"\uC218\uBE44\uD615",aggro:.45,caution:.85,flair:.4,patience:.6,chatty:.5,band:[12,22],weapons:["disc","heavy","seeker","saw"],skills:["reflect","heal"]}],Iy=K.gravity,Ly=[-.12,-.06,-.02,.03,.09,.17],wr=new M,Dy=new M,Sr=new M,$n=new M,Gs=new M,Uy=new M,mi=new M,_e=new M,we=new M,Ye=new M,pa=new M,ma=new M,Mh={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Ny={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Ke=Ht.clamp,Nd=r=>{for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return r},ga=(r,t)=>Ke(r+(Math.random()-.5)*t,0,1.2),Zn=class{constructor(t,e,i="max",n=null){this.G=t,this.f=e,this.key=ji[i]?i:"max",this.S=ji[this.key];let s=n||bn[3];this.p={...s,aggro:ga(s.aggro,.2),caution:ga(s.caution,.2),flair:ga(s.flair,.2),patience:ga(s.patience,.2)},this.inp={fwd:0,right:0,jumpPressed:!1,jumpHeld:!1,crouch:!1,dashPressed:!1,grapplePressed:!1,grappleHeld:!1,autoHop:!0},this.tilt=0,this.confidence=0,this.reset()}reset(){this.target=null,this.known=new Map,this.thinkT=0,this.decideT=0,this.intent="roam",this.intentStart=0,this.flankSide=Math.random()<.5?1:-1,this.strafe=Math.random()<.5?1:-1,this.strafeT=0,this.pv=new Map,this.rolls=new Map,this.cool=.25+Math.random()*.3,this.waitT=0;let t=this.f.body;this.aimYaw=t.yaw,this.aimPitch=0,this.vYaw=0,this.vPitch=0,this.ph=Math.random()*100,this.lastWant=null,this.reactUntil=0,this.plan=null,this.lastBank=-9,this.slamHold=0,this.hopT=0,this.hopOn=!1,this.stuckT=0,this.jumpNow=!1,this.macro=null,this.techCd=1+Math.random(),this.skillPlan=null,this.travelDir=null,this.dest=new M,this.wanderT=0,this.lookAround=0,this.lastHurtT=-9}roll(t,e){let i=this.rolls.get(t);return i===void 0&&(i=Math.random()<e,this.rolls.set(t,i),this.rolls.size>80&&this.rolls.delete(this.rolls.keys().next().value)),i}get now(){return this.G.gameTime}sense(){let t=this.G,e=this.f,i=e.body,n=this.now;i.lookDir(Gs);for(let s of t.fighters){if(s===e)continue;if(!s.alive){this.known.delete(s);continue}let o=s.updateCenter();ma.subVectors(o,wr);let a=ma.length()||1;ma.divideScalar(a);let l=Math.acos(Ke(ma.dot(Gs),-1,1)),c=a<7*this.S.hear,h=(l<this.S.fov||c)&&t.los(wr,o),d=this.known.get(s);h?(d||(d={pos:new M,vel:new M,t:n,seen:!1,first:n},this.known.set(s,d)),d.seen||(d.first=n),d.pos.copy(s.body.pos),d.vel.copy(s.body.vel),d.t=n,d.seen=!0):d&&(d.seen=!1,n-d.t>this.S.mem&&this.known.delete(s))}}hear(t,e){let i=this.known.get(t);i||(i={pos:new M,vel:new M,t:0,seen:!1,first:this.now},this.known.set(t,i)),!i.seen&&(i.pos.set(e.x+(Math.random()-.5)*3,t.body.pos.y,e.z+(Math.random()-.5)*3),i.vel.set(0,0,0),i.t=this.now)}onHurt(t){if(this.lastHurtT=this.now,t&&t!==this.f){this.hear(t,t.body.pos);let e=this.target&&this.known.get(this.target);(!e||!e.seen)&&(this.target=t)}}onKill(){this.confidence=Math.min(1,this.confidence+.35)}onDeath(t){this.tilt=1,this.revenge=t,this.confidence=Math.max(0,this.confidence-.4)}seen(t){let e=this.known.get(t);return!!(e&&e.seen)}perceive(t){let e=Math.min(1,t/this.S.react);for(let i of this.G.fighters){if(i===this.f)continue;let n=this.pv.get(i);n||(n=i.body.vel.clone(),this.pv.set(i,n)),this.seen(i)?n.lerp(i.body.vel,e):n.multiplyScalar(Math.exp(-3*t))}}predict(t,e,i){let n=this.known.get(t);if(n&&!n.seen)return i.set(n.pos.x,n.pos.y+1,n.pos.z),i;let s=t.body,o=this.pv.get(t)||s.vel,a=this.S.lead;i.set(s.pos.x+o.x*e*a,s.pos.y+1,s.pos.z+o.z*e*a),s.grounded||(i.y+=(this.S.gravity?o.y*e-.5*Iy*e*e:o.y*e)*a),i.y<.8&&(i.y=.8);let l=this.G.arena.half-.6;return i.x=Ke(i.x,-l,l),i.z=Ke(i.z,-l,l),i}intercept(t,e,i){let n=this.f.body,s=this.f.disc.w,o=this.f.overT>0?1.25:1,a=e.body.pos.distanceTo(t)/s.speed;for(let l=0;l<4;l++){this.predict(e,a,i);let c=i.x-t.x,h=i.y-t.y,d=i.z-t.z,u=Math.hypot(c,h,d)||1,f=Math.max(0,(n.vel.x*c+n.vel.y*h+n.vel.z*d)/u)*s.carry;a=u/((s.speed+f)*o)}return a}tpos(t){let e=this.known.get(t);return e&&!e.seen?e.pos:t.body.pos}pickTarget(){let t=this.f,e=this.now,i=null,n=1e9;for(let[s,o]of this.known){if(!s.alive)continue;let l=o.pos.distanceTo(t.body.pos)+(o.seen?0:12+(e-o.t)*4)+s.hp*.08+(s.protT>0?30:0);s===t.lastHitBy&&e-t.lastHitT<3&&(l-=12),s===this.revenge&&this.tilt>.3&&(l-=10),s===this.target&&(l-=6),l<n&&(n=l,i=s)}return i}decide(){let t=this.f,e=this.target,i=this.now,n=this.p,s="roam";if(e){let o=this.known.get(e),a=this.tpos(e).distanceTo(t.body.pos),l=22+n.caution*28-this.tilt*10,c=e.hp<t.hp*.55&&n.aggro>.6;t.hp<l&&a<30&&!c?s="retreat":o&&o.seen&&e.hp<=45&&n.aggro+this.confidence*.3+this.tilt*.2>.45?s="hunt":o&&!o.seen?s=i-o.t<1.6&&n.flair+n.aggro>.9?"flank":"search":s="engage",Math.random()<this.S.mistake&&s==="retreat"&&(s="engage")}s!==this.intent&&(i-this.intentStart>.8||s==="retreat"||this.intent==="roam")&&(this.intent=s,this.intentStart=i,s==="flank"&&(this.flankSide=Math.random()<.5?1:-1,t.st.flanks=(t.st.flanks||0)+1),s==="retreat"&&(this.G.chat(t,"retreat",.25),t.st.retreats=(t.st.retreats||0)+1))}tick(t){let e=this.f,i=e.body,n=this.inp;if(n.fwd=0,n.right=0,n.jumpPressed=!1,n.dashPressed=!1,n.jumpHeld=!1,n.autoHop=!0,!e.alive)return n;if(wr.copy(i.eye),this.tilt=Math.max(0,this.tilt-t/12),this.confidence=Math.max(0,this.confidence-t/25),this.thinkT-=t,this.thinkT<=0){this.thinkT=this.S.think*(.7+Math.random()*.6),this.sense();let o=this.target;this.target=this.pickTarget(),this.target!==o&&this.target&&(this.reactUntil=this.now+this.S.react*(.7+Math.random()*.7))}this.target&&(!this.target.alive||!this.known.has(this.target))&&(this.target=null,this.thinkT=0),!this.target&&this.intent!=="roam"&&(this.intent="roam",this.intentStart=this.now),this.perceive(t),this.decideT-=t,this.decideT<=0&&(this.decideT=.3+Math.random()*.3,this.decide()),this.cool-=t,this.techCd-=t;let s=this.scanThreats();return this.move(t,n,s),this.combat(t),this.useSkills(t,s),n}scanThreats(){let t=this.f,e=t.body,i=e.pos.x,n=e.pos.y+.9,s=e.pos.z,o=null;for(let a of this.G.fighters){let l=a.disc;if(l.state==="hand"||l.hit.has(t)||a===t&&!l.reflectedBy)continue;let c=l.pos.x-i,h=l.pos.y-n,d=l.pos.z-s,u=l.vel.x-e.vel.x,f=l.vel.y-e.vel.y,g=l.vel.z-e.vel.z,x=u*u+f*f+g*g;if(x<1)continue;let p=-(c*u+h*f+d*g)/x;if(p<0||p>.6)continue;let m=c+u*p,y=h+f*p,v=d+g*p;Math.hypot(m,y-Ke(y,-.5,.5),v)>K.radius+l.w.radius+.45||(!o||p<o.tca)&&(o={tca:p,d:l,vx:u,vz:g,key:l.id+":"+l.leg})}return o}move(t,e,i){let n=this.G,s=this.f,o=s.body,a=this.S,l=this.p,c=this.target,h=Uy.set(0,0,0),d=!1,u=0,f=c?this.tpos(c):null;f&&(u=Math.hypot(f.x-o.pos.x,f.z-o.pos.z)),this.strafeT-=t,this.strafeT<=0&&(this.strafe=Math.random()<.8?-this.strafe:this.strafe,this.strafeT=a.strafeMin+Math.random()*(a.strafeMax-a.strafeMin));let g=f?this.intent:"roam";if(g==="engage"||g==="hunt"){let m=f.x-o.pos.x,y=f.z-o.pos.z,v=Math.hypot(m,y)||1;if(m/=v,y/=v,g==="engage"){let[b,R]=l.band,E=u>R?1:u<b?-.9:0;h.set(-y*this.strafe*a.strafe+m*E,0,m*this.strafe*a.strafe+y*E),d=u>R+10}else{let b=u>6?.45:1;h.set(m+-y*this.strafe*b,0,y+m*this.strafe*b),d=u>12}}else if(g==="flank"){let m=f.x-o.pos.x,y=f.z-o.pos.z,v=Math.hypot(m,y)||1;m/=v,y/=v,this.dest.set(f.x-y*this.flankSide*11-m*2,0,f.z+m*this.flankSide*11-y*2),h.set(this.dest.x-o.pos.x,0,this.dest.z-o.pos.z),h.length()<3&&(this.intent="search",this.intentStart=this.now),d=h.length()>10}else if(g==="search")h.set(f.x-o.pos.x,0,f.z-o.pos.z),h.length()<3&&(h.set(0,0,0),this.lookAround+=t,this.lookAround>1.5&&(this.known.delete(c),this.target=null,this.lookAround=0)),d=h.length()>14;else if(g==="retreat"){let m=null,y=1e9;for(let[v,b]of this.G.arena.cover){let R=v-f.x,E=b-f.z,A=Math.hypot(R,E)||1,P=v+R/A*3.2,k=b+E/A*3.2,_=Math.hypot(P-o.pos.x,k-o.pos.z),w=Math.hypot(P-f.x,k-f.z)<u?25:0;_+w<y&&(y=_+w,m=[P,k])}h.set(m[0]-o.pos.x,0,m[1]-o.pos.z),h.length()<2&&h.set(-(f.z-o.pos.z)*this.strafe,0,(f.x-o.pos.x)*this.strafe).normalize().multiplyScalar(.4),d=h.length()>6}else{if(this.wanderT-=t,this.wanderT<=0){this.wanderT=2+Math.random()*3;let m=this.G.arena.cover,y=m[Math.random()*m.length|0];this.dest.set(y[0]+(Math.random()-.5)*16,0,y[1]+(Math.random()-.5)*16)}h.set(this.dest.x-o.pos.x,0,this.dest.z-o.pos.z),d=h.length()>12}for(let m of n.fighters){if(m===s)continue;let y=m.disc;if(y.state!=="out")continue;let v=o.pos.x-y.pos.x,b=o.pos.z-y.pos.z,R=Math.hypot(v,b);R<6.5&&R>.01&&(h.x+=v/R*1.4,h.z+=b/R*1.4)}let x=n.arena.half-6;if(o.pos.x>x&&(h.x-=1.5),o.pos.x<-x&&(h.x+=1.5),o.pos.z>x&&(h.z-=1.5),o.pos.z<-x&&(h.z+=1.5),i){let m=-i.vz,y=i.vx,v=Math.hypot(m,y)||1;m/=v,y/=v;let b=(o.pos.x-i.d.pos.x)*m+(o.pos.z-i.d.pos.z)*y>=0?1:-1;h.set(m*b*2,0,y*b*2),i.tca<a.dodgeLead&&this.roll("dodge"+i.key,a.dodge)&&(o.dashCharges>0&&o.dashT<=0&&!(o.dashCd>0)?e.dashPressed=!0:(o.grounded||o.airJumps>0)&&(e.jumpPressed=!0),this.macro=null)}this.jumpNow=!1,this.avoid(h),this.jumpNow&&o.grounded&&(e.jumpPressed=!0),o.hSpeed<2.5&&h.lengthSq()>.1?(this.stuckT+=t,this.stuckT>.45&&(this.strafe=-this.strafe,this.strafeT=.6,e.jumpPressed=!0,this.stuckT=0)):this.stuckT=0;let p=Math.hypot(h.x,h.z);if(p>.05&&(h.x/=p,h.z/=p),this.travelDir=p>.05?(this.travelDir||new M).set(h.x,0,h.z):null,!i&&!this.macro&&this.techCd<=0&&d&&this.travelDir){let m=l.caution>.6?2:1;s.disc.state==="hand"&&u>26&&!this.anyoneClose(14)&&Math.random()<a.tech*l.flair*.6?this.macro={type:"blinktravel",t:0,thrown:!1,dir:this.travelDir.clone()}:o.grounded&&o.dashCharges>=m&&Math.random()<a.tech&&(this.macro={type:"dashhop",t:0,dir:this.travelDir.clone(),hold:.9+Math.random()*.8}),this.techCd=1+Math.random()*1.2}if(this.macro&&this.runMacro(t,e,h),Math.hypot(h.x,h.z)>.05){let m=-Math.sin(o.yaw),y=-Math.cos(o.yaw),v=Math.cos(o.yaw),b=-Math.sin(o.yaw),R=h.x*m+h.z*y,E=h.x*v+h.z*b;e.fwd=R>.38?1:R<-.38?-1:0,e.right=E>.38?1:E<-.38?-1:0}this.hopT-=t,this.hopT<=0&&(this.hopOn=Math.random()<a.bhop*(this.intent==="engage"?1:.7),this.hopT=.6+Math.random()*1.4),(this.hopOn||this.macro&&this.macro.hop)&&(e.jumpHeld=!0),e.jumpHeld&&!o.grounded&&o.vel.y<-3&&o.airJumps>0&&Math.random()<t*.9*a.bhop&&(e.jumpPressed=!0)}anyoneClose(t){for(let[e,i]of this.known)if(e.alive&&i.pos.distanceTo(this.f.body.pos)<t)return!0;return!1}runMacro(t,e,i){let n=this.macro,s=this.f.body,o=this.G,a=this.f.disc;if(n.t+=t,n.type==="dashhop")i.copy(n.dir),n.dashed||(e.dashPressed=!0,n.dashed=!0,this.f.st.dashhop=(this.f.st.dashhop||0)+1),n.t>.1&&!n.jumped&&(e.jumpPressed=!0,n.jumped=!0),n.t>.1&&(n.hop=!0,this.travelDir&&n.dir.lerp(this.travelDir,Math.min(1,t*3)).normalize()),n.t>.1+n.hold&&(this.macro=null);else if(n.type==="blinktravel")if(i.copy(n.dir),!n.thrown)n.aim=(n.aim||new M).set(n.dir.x,.06,n.dir.z).normalize(),a.state==="hand"&&a.catchCd<=0&&s.lookDir(Gs).angleTo(n.aim)<.12&&(o.throwFor(this.f,Gs.clone()),n.thrown=!0,n.tt=0),n.t>1.2&&(this.macro=null);else{if(n.tt+=t,a.state!=="out"){this.macro=null;return}n.tt>.32&&o.blinkFor(this.f)&&(this.f.st.blinktravel=(this.f.st.blinktravel||0)+1,this.macro={type:"dashhop",t:0,dir:n.dir.clone(),hold:1})}}avoid(t){let e=this.f.body,i=Math.hypot(t.x,t.z);if(i<.05)return;let n=t.x/i,s=t.z/i,o=1.6+Math.min(4,e.hSpeed*.15),a=this.blocked(n,s,o);if(a){if(a==="low"){Mh.t<2.2&&(this.jumpNow=!0);return}for(let l of[.6,1.2,1.9])for(let c of[this.strafe,-this.strafe]){let h=l*c,d=Math.cos(h),u=Math.sin(h),f=n*d-s*u,g=n*u+s*d;if(!this.blocked(f,g,o)){t.x=f*i,t.z=g*i;return}}t.x=-n*i,t.z=-s*i,this.strafe=-this.strafe}}blocked(t,e,i){let n=this.f.body,s=this.G.arena.col,o=s.raycast(n.pos.x,n.pos.y+.5,n.pos.z,t,0,e,i,Mh);return!o||Math.abs(o.ny)>.6?!1:s.raycast(n.pos.x,n.pos.y+1.75,n.pos.z,t,0,e,i+.6,Ny)?!0:"low"}aim(t,e){let i=this.f.body,n=this.S;this.now<this.reactUntil&&this.lastWant?e=this.lastWant:this.lastWant=(this.lastWant||new M).copy(e);let s=Math.atan2(-e.x,-e.z),o=Math.asin(Ke(e.y,-1,1)),a=Nd(s-this.aimYaw),l=o-this.aimPitch,c=n.aimK*(1-this.tilt*.15),h=2*n.aimZ*Math.sqrt(c);this.vYaw+=(c*a-h*this.vYaw)*t,this.vPitch+=(c*l-h*this.vPitch)*t;let d=n.turn*1.6;this.vYaw=Ke(this.vYaw,-d,d),this.vPitch=Ke(this.vPitch,-d,d),this.aimYaw=Nd(this.aimYaw+this.vYaw*t),this.aimPitch=Ke(this.aimPitch+this.vPitch*t,-1.5,1.5),this.ph+=t;let u=n.err*(1+this.tilt*.4);i.yaw=this.aimYaw+u*(Math.sin(this.ph*1.9)+.6*Math.sin(this.ph*4.3+1.3))/1.6,i.pitch=Ke(this.aimPitch+u*.6*(Math.sin(this.ph*2.3+2)+.5*Math.sin(this.ph*5.1))/1.5,-1.5,1.5)}combat(t){let e=this.G,i=this.f,n=i.body,s=this.S,o=i.disc,a=this.target,l=this.p,c=Dy.copy(wr);c.y-=.15;let h=null,d=!1,u=a?this.known.get(a):null;if(this.skillPlan)h=$n.copy(this.skillPlan.dir);else if(this.macro&&this.macro.type==="blinktravel"&&!this.macro.thrown&&this.macro.aim)h=$n.copy(this.macro.aim);else if(a&&u){if(this.intercept(c,a,Sr),h=$n.subVectors(Sr,c).normalize(),o.state==="hand"&&(u.seen||this.now-u.t<.8)){if(this.plan&&this.plan.until>this.now)h=$n.copy(this.plan.dir),d=!0;else if(this.plan=null,e.los(c,Sr))d=a.protT<=.15;else if(this.now-this.lastBank>(this.key==="max"?.3:.55)){this.lastBank=this.now;let f=e.bankBudget||(e.bankBudget={t:0,n:0});this.now-f.t>1&&(f.t=this.now,f.n=0);let g=s.bank>0&&Math.random()<s.bank&&f.n<8;g&&f.n++;let x=g?this.solveBank(c,a):null;x?(this.plan={dir:x.clone(),until:this.now+.35},h=$n.copy(x),d=!0):s.lob>0&&Math.random()<s.lob*(.5+l.flair*.5)&&(Ye.copy(Sr),Ye.y+=2.8,e.los(c,Ye)&&c.distanceTo(Ye)<40&&(this.plan={dir:Ye.sub(c).normalize().clone(),until:this.now+.35},h=$n.copy(this.plan.dir),d=!0))}if(d&&!this.plan&&this.intent!=="hunt"){let f=a.body;!(!f.grounded||f.dashCharges===0||c.distanceTo(Sr)<12||a.hp<40)&&this.waitT<l.patience*.8&&(this.waitT+=t,d=!1)}}}else{if(h=$n.set(n.vel.x,0,n.vel.z),this.travelDir&&h.copy(this.travelDir),h.lengthSq()<.5&&n.flatFwd(h),this.intent==="search"&&this.lookAround>0){let f=Math.sin(this.now*2.2)*1.2,g=Math.cos(f),x=Math.sin(f);h.set(h.x*g-h.z*x,0,h.x*x+h.z*g)}h.normalize()}if(this.aim(t,h),d&&o.state==="hand"&&o.catchCd<=0&&this.cool<=0&&this.now>=this.reactUntil){let f=n.lookDir(Gs),g=Math.random()<s.mistake*t*20;(f.angleTo(h)<s.align||g)&&(e.throwFor(i,f),this.cool=s.pause*(.5+Math.random())*(1-this.confidence*.3),this.plan=null,this.waitT=0)}o.state!=="hand"&&!(this.macro&&this.macro.type==="blinktravel")&&this.discPlay(t)}discPlay(t){let e=this.G,i=this.f,n=i.body,s=this.S,o=i.disc,a=this.target,l=o.w,c=null,h=!1;for(let x of e.fighters){if(x===i||!x.alive||x.protT>0||!this.known.has(x))continue;let p=x.updateCenter();if(!o.hit.has(x)&&!x.invuln){let m=o.pos.x-p.x,y=o.pos.y-p.y,v=o.pos.z-p.z,b=o.vel.x-x.body.vel.x,R=o.vel.y-x.body.vel.y,E=o.vel.z-x.body.vel.z,A=b*b+R*R+E*E;if(A>1){let P=-(m*b+y*R+v*E)/A;if(P>0&&P<.15){let k=y+R*P;Math.hypot(m+b*P,k-Ke(k,-.5,.5),v+E*P)<K.radius+l.radius&&(h=!0)}}}!c&&!x.invuln&&x.reflectT<=0&&o.pos.distanceTo(p)<l.blinkRadius*.8&&(c=x)}if(c&&!h&&o.t>.04){if(this.slamHold+=t,this.slamHold>=s.react*.5&&this.roll("slam"+o.id+":"+o.leg,s.slam)&&e.blinkFor(i)){this.slamHold=0,this.cool=0;return}}else this.slamHold=0;if(!a)return;if(o.state==="out"&&o.t>.08&&s.recall>0&&this.seen(a)&&this.returnHits(a)&&this.roll("recall"+o.id+":"+o.leg+":"+Math.floor(o.t*8),s.recall)){e.recallFor(i);return}let d=this.tpos(a),u=n.pos.distanceTo(d),f=o.pos.distanceTo(d),g=s.mobility*(this.intent==="hunt"?1:.6);if(o.state==="out"&&g>0&&o.t>.28&&u>24&&f<u-12&&this.roll("mob"+o.id+":"+o.leg,g)){e.blinkFor(i);return}if(s.escape>0&&(i.hp<35||this.intent==="retreat")&&o.state==="out"&&o.t>.2){let x=1e9,p=1e9;for(let m of e.fighters)m===i||!m.alive||(x=Math.min(x,m.body.pos.distanceTo(n.pos)),p=Math.min(p,m.body.pos.distanceTo(o.pos)));if(x<10&&p>14&&this.roll("esc"+o.id+":"+o.leg,s.escape)){e.blinkFor(i);return}}}useSkills(t,e){let i=this.G,n=this.f,s=n.body,o=this.S,a=this.target;if(!Yn[n.skill]||n.skillCd>0){this.skillPlan=null;return}let c=h=>this.roll(h,o.skillUse);if(n.skill==="reflect"){if(e&&e.tca<.14&&!s.invuln&&!(s.dashCharges>0&&this.rolls.get("dodge"+e.key))&&c("refl"+e.key))i.useSkill(n);else for(let h of i.fighters)if(!(h===n||h.disc.state!=="out")&&h.disc.pos.distanceTo(s.pos)<h.disc.w.blinkRadius+.5&&c("reflS"+h.disc.id+":"+h.disc.leg)){i.useSkill(n);break}}else if(n.skill==="overdrive"){let h=a?this.tpos(a).distanceTo(s.pos):0;(this.intent==="hunt"&&h>10||this.intent==="retreat"&&n.hp<40)&&c("od"+Math.floor(this.now))&&i.useSkill(n)}else if(n.skill==="heal")n.hp<45&&(this.now-this.lastHurtT>.8||this.intent==="retreat")&&c("heal"+Math.floor(this.now))&&i.useSkill(n);else if(n.skill==="gravity"){if(this.skillPlan){(s.lookDir(Gs).angleTo(this.skillPlan.dir)<.08||this.now>this.skillPlan.until)&&(i.useSkill(n),this.skillPlan=null,this.cool=Math.min(this.cool,.25));return}if(!a||!this.seen(a))return;let h=a.body.pos,d=h.distanceTo(s.pos);if(d<7||d>30||!c("grav"+Math.floor(this.now)))return;let u=d/24;this.predict(a,u,Ye),Ye.y-=1;let f=Math.max(0,.5*22*u*u-4*u)/Math.max(1,d);Ye.sub(wr).normalize(),Ye.y+=f,Ye.normalize(),this.skillPlan={dir:Ye.clone(),until:this.now+.45}}}returnHits(t){let e=this.f.body,i=this.f.disc,n=i.w,s=1/60;_e.copy(i.pos),we.copy(i.vel),pa.copy(e.eye);for(let o=0,a=0;o<70;o++,a+=s){let l=pa.x+e.vel.x*a,c=pa.y+e.vel.y*a*.5,h=pa.z+e.vel.z*a,d=l-_e.x,u=c-_e.y,f=h-_e.z,g=Math.hypot(d,u,f);if(g<n.catchDist)return!1;let x=n.returnSpeed+e.speed,p=Math.min(1,s*n.returnTurn);we.x+=(d/g*x-we.x)*p,we.y+=(u/g*x-we.y)*p,we.z+=(f/g*x-we.z)*p,_e.addScaledVector(we,s),this.predict(t,a+s,mi);let m=_e.x-mi.x,y=_e.y-mi.y,v=_e.z-mi.z;if(Math.hypot(m,Ke(y,-.5,.5)-y,v)<K.radius+n.radius+.1)return!0}return!1}solveBank(t,e){let i=this.f.body,n=this.f.disc.w;if(n.maxBounces===0)return null;let s=null,o=1e9,a=[],l=this.tpos(e),c=Math.atan2(-(l.x-t.x),-(l.z-t.z)),h=(d,u,f)=>{let g=Math.cos(u);Ye.set(-Math.sin(d)*g,Math.sin(u),-Math.cos(d)*g);let x=n.speed+Math.max(0,i.vel.dot(Ye))*n.carry,p=this.simDisc(t,Ye,x,e);p!==null?p<o&&(o=p,s=(s||new M).copy(Ye)):f&&this._miss<3.5&&(a.push({yaw:d,pitch:u,m:this._miss}),a.length>12&&(a.sort((m,y)=>m.m-y.m),a.length=6))};for(let d=0;d<72;d++){let u=c+(d%2?1:-1)*Math.ceil(d/2)*(Math.PI/36);for(let f of Ly)h(u,f,!0)}if(!s){a.sort((d,u)=>d.m-u.m);for(let d of a.slice(0,4)){for(let u=-3;u<=3;u++)for(let f=-2;f<=2;f++)h(d.yaw+u*.014,d.pitch+f*.015,!1);if(s)break}}return s}simDisc(t,e,i,n){let s=this.G.arena.col,o=this.f.disc.w,a=o.radius,l=K.radius+a;_e.copy(t),we.copy(e).multiplyScalar(i);let c=0,h=0;this._miss=1e9;for(let d=0;d<4;d++){let u=we.length(),f=we.x/u,g=we.y/u,x=we.z/u,p=u*(o.outTime+h*.12-c);if(p<=.3)return null;let m=s.raycast(_e.x,_e.y,_e.z,f,g,x,p+a,Mh),y=m?Math.max(0,m.t-a):p,v=y*.5;for(let k=0;k<2;k++)this.predict(n,c+v/u,mi),v=Ke((mi.x-_e.x)*f+(mi.y-_e.y)*g+(mi.z-_e.z)*x,0,y);this.predict(n,c+v/u,mi);let b=_e.x+f*v-mi.x,R=_e.y+g*v-mi.y,E=_e.z+x*v-mi.z,A=Math.hypot(b,Ke(R,-.5,.5)-R,E);if(A<l)return c+v/u;if(A<this._miss&&(this._miss=A),!m)return null;let P=we.x*m.nx+we.y*m.ny+we.z*m.nz;if(we.x-=2*P*m.nx,we.y-=2*P*m.ny,we.z-=2*P*m.nz,m.ny>.7&&(we.y=Math.abs(we.y)*.6),_e.set(_e.x+f*y,_e.y+g*y,_e.z+x*y),c+=y/u,h++,h>o.maxBounces)return null}return null}};var wn=class{constructor(t){this.G=t,this.ws=null,this.status="off",this.token=null,this.base="",this.inRoom=!1,this.intentional=!1,this.retries=0,this.rtt=0,this.onStatus=null,this.pinger=setInterval(()=>{this.open&&this.send({t:"ping",c:performance.now()})},2e3)}get open(){return this.ws&&this.ws.readyState===1}static defaultServer(){try{let e=localStorage.getItem("redshift_server");if(e)return e}catch{}let t=String(window.REDSHIFT_SERVER||"").trim();return t||(/^https?:$/.test(location.protocol)&&!window.REDSHIFT_APP?location.origin:"")}static save(t){try{t?localStorage.setItem("redshift_server",t):localStorage.removeItem("redshift_server")}catch{}}static async discover(){let t=String(window.REDSHIFT_DISCOVERY||"").trim();if(!t)return"";try{let e=new AbortController,i=setTimeout(()=>e.abort(),6e3),n=await fetch(t+(t.includes("?")?"&":"?")+"t="+Date.now(),{cache:"no-store",signal:e.signal});if(clearTimeout(i),!n.ok)return"";let s=(await n.text()).split(/\r?\n/).map(o=>o.trim()).find(o=>o&&!o.startsWith("#"));return s&&/^(https?|wss?):\/\/[^\s]+$/i.test(s)?s:""}catch{return""}}wsUrl(t){let e=String(t||"").trim().replace(/\/+$/,"");return/^[a-z]+:\/\//i.test(e)||(e=(/^(localhost|127\.|192\.168\.|10\.)/.test(e)?"http://":"https://")+e),e.replace(/^http/i,"ws")+"/ws"}setStatus(t,e=""){this.status=t,this.onStatus&&this.onStatus(t,e)}connect(t,e){return this.base=t,this.hello=e,this.intentional=!1,new Promise((i,n)=>{let s=!1,o=c=>{s||(s=!0,n(new Error(c)))},a;try{a=new WebSocket(this.wsUrl(t)+(this.token&&this.inRoom?"?resume="+encodeURIComponent(this.token):""))}catch{return o("\uC8FC\uC18C\uAC00 \uC774\uC0C1\uD574\uC694")}this.ws=a,this.setStatus("connecting");let l=setTimeout(()=>{o("\uC11C\uBC84\uAC00 \uC751\uB2F5\uD558\uC9C0 \uC54A\uC544\uC694");try{a.close()}catch{}},9e3);a.onopen=()=>{this.send({t:"hello",...e})},a.onmessage=c=>{let h;try{h=JSON.parse(c.data)}catch{return}if(h.t==="hi"&&(this.token=h.token,this.clientId=h.clientId,this.retries=0,clearTimeout(l),this.setStatus("online"),s||(s=!0,i(h))),h.t==="pong"){this.rtt=performance.now()-h.c;return}h.t==="joined"&&(this.inRoom=!0,this.clientId=h.clientId||this.clientId),this.G.onNet(h)},a.onerror=()=>o("\uC5F0\uACB0 \uC2E4\uD328"),a.onclose=()=>{if(clearTimeout(l),a===this.ws){if(o("\uC5F0\uACB0\uC774 \uB04A\uACBC\uC5B4\uC694"),this.intentional){this.setStatus("off");return}this.inRoom&&this.retries<6?(this.retries++,this.setStatus("reconnecting"),setTimeout(()=>this.connect(this.base,this.hello).catch(()=>{}),600*this.retries)):(this.setStatus("off","\uC5F0\uACB0\uC774 \uB04A\uACBC\uC5B4\uC694"),this.inRoom=!1,this.G.onNet({t:"dropped"}))}}})}send(t){this.open&&this.ws.send(JSON.stringify(t))}leave(){this.send({t:"leave"}),this.inRoom=!1}close(){this.intentional=!0,this.inRoom=!1;try{this.ws&&this.ws.close()}catch{}this.ws=null,this.setStatus("off")}};var ky=.08,Fy=30,$e=r=>Math.round(r*100)/100,kd=r=>Math.round(r*1e3)/1e3,Fd=()=>performance.now()/1e3,Ai=r=>new M(r[0],r[1],r[2]);function zd(r){let t=r.prototype;t.startOnline=function(e){let i=this.S;this.netMap=e.match&&e.match.map||"arena",this.start("online"),this.online=!0,this.versus=!0,this.roomCode=e.code,this.roomName=e.name,this.isHost=!!e.host,this.netBotSkill=e.botSkill||"hard",this.botSkill=this.netBotSkill,this.byId=new Map,this.sendT=0,this.menuOpen=!1;let n=this.me;n.netId=e.you,n.name=i.name||"\uB098",this.byId.set(n.netId,n);for(let o of e.players)o.id!==e.you&&this.addNetFighter(o);let s=e.players.find(o=>o.id===e.you);s&&(n.color=s.color,n.css="#"+s.color.toString(16).padStart(6,"0"),n.kills=s.kills,n.deaths=s.deaths),this.applyMatch(e.match),this.respawn(n,!0),this.banner("\uC628\uB77C\uC778",`\uBC29 ${e.code} \xB7 ${this.mapName} \xB7 ${e.players.filter(o=>!o.bot).length}\uBA85 \uC811\uC18D \xB7 ${this.match.limit}\uD0AC \uBA3C\uC800`,2.6),this.cls("board","hidden",!1),this._boardHtml="";try{this.renderer.compile(this.scene,this.camera)}catch{}},t.leaveOnline=function(){this.online&&(this.net.leave(),this.net.close(),this.online=!1)},t.applyMatch=function(e){if(e&&(this.match={limit:e.limit,timeLeft:e.timeLeft,over:e.state!=="play",online:!0},e.ranking))for(let[i,n,s]of e.ranking){let o=this.byId.get(i);o&&(o.kills=n,o.deaths=s)}},t.addNetFighter=function(e){let i=e.bot&&e.owner===this.net.clientId,n=new Mn(this,{name:e.name,color:e.color,isBot:!0,weapon:e.weapon,skill:e.skill});n.netId=e.id,n.netBot=e.bot,n.persona=e.persona,n.kills=e.kills||0,n.deaths=e.deaths||0,n.hp=e.hp??100,n.alive=e.alive!==!1,n.snaps=[],i?this.makeLocal(n):(n.remote=!0,n.body.reset(new M(0,-50,0),0),n.model.visible=!1,n.seen=!1),this.fighters.push(n),this.byId.set(e.id,n);try{this.renderer.compile(this.scene,this.camera)}catch{}return n},t.makeLocal=function(e){e.remote=!1;let i=bn.find(n=>n.id===e.persona)||bn[Math.random()*bn.length|0];e.brain=new Zn(this,e,this.netBotSkill,i),e.alive=!0,e.hp=Math.max(1,e.hp),this.respawn(e,!0)},t.onNet=function(e){let i=n=>this.byId&&this.byId.get(n);switch(e.t){case"joined":if(e.resumed&&this.online){this.applyMatch(e.match);return}this.startOnline(e),this.onJoined&&this.onJoined(e);return;case"rooms":case"hi":this.onRooms&&this.onRooms(e.rooms||[]);return;case"err":this.onNetError&&this.onNetError(e.msg);return;case"dropped":this.online&&(this.online=!1,this.onNetDropped&&this.onNetDropped());return}if(this.online)switch(e.t){case"join":{if(i(e.p.id))return;let n=this.addNetFighter(e.p);e.p.bot||(this.feedText(`${e.p.name} \uB2D8\uC774 \uB4E4\uC5B4\uC654\uC5B4\uC694`),this.audio.ui()),n.brain&&this.chat(n,"start",.4);return}case"leave":{let n=i(e.id);if(!n||n===this.me)return;n.netBot||this.feedText(`${n.name} \uB2D8\uC774 \uB098\uAC14\uC5B4\uC694`),n.dispose(),this.fighters=this.fighters.filter(s=>s!==n),this.byId.delete(e.id);return}case"host":{this.isHost=!0,this.netBotSkill=e.botSkill||this.netBotSkill;for(let n of e.bots){let s=i(n.id);s&&s.remote&&(s.persona=n.persona,this.makeLocal(s))}return}case"owners":{for(let[n,s]of e.list){let o=i(n);o&&s!==this.net.clientId&&!o.remote&&(o.remote=!0,o.brain=null,o.snaps=[])}return}case"st":{let n=i(e.id);if(!n||!n.remote)return;e.at=Fd(),n.snaps.push(e),n.snaps.length>12&&n.snaps.shift(),e.al&&!n.alive&&(n.alive=!0),n.hp=e.hp??n.hp;return}case"dmg":return this.netDamage(e);case"kill":return this.netKill(e);case"spawn":{let n=i(e.id);if(!n)return;n.alive=!0,n.hp=e.hp,n.protT=1.5,n.remote&&(n.snaps=[]);return}case"hp":for(let[n,s]of e.list){let o=i(n);o&&(o.hp=s)}return;case"clock":this.match&&(this.match.timeLeft=e.timeLeft);return;case"match":{let n=this.match&&this.match.over;if(this.applyMatch(e),e.state==="over"&&!n&&this.netMatchOver(e),e.reset){e.map&&e.map!==this.arena.mapId&&(this.netMap=e.map,this.loadMap(e.map));for(let s of e.players||[]){let o=i(s.id);o&&(o.kills=0,o.deaths=0,o.hp=100,o.alive=!0)}for(let s of this.fighters)s.remote||(this.respawn(s,!0),s.alive=!0,s.protT=2);this.deathInfo=null,this.banner("\uC0C8 \uB77C\uC6B4\uB4DC",`${this.mapName} \xB7 ${this.match.limit}\uD0AC \uBA3C\uC800`,2)}return}case"loadout":{let n=i(e.id);n&&n.remote&&(n.disc.setWeapon(e.weapon),n.setHandDisc(),n.skill=e.skill);return}case"fx":return this.netFxIn(e)}},t.netDamage=function(e){let i=this.byId.get(e.target),n=this.byId.get(e.by);if(!i)return;i.hp=e.hp,i.regenT=5,i.lastHitBy=n,i.lastHitT=this.gameTime;let s=Ai(e.dir),o=i.updateCenter().clone(),a=new ct(i.color);if(!i.remote){let l=n?n.disc.w.knock:5,c=i.body,h=e.kind==="slam"?8+l*.3:e.kind==="blast"?16:l;c.vel.x+=s.x*h,c.vel.z+=s.z*h,c.vel.y=Math.max(c.vel.y,e.kind==="slam"?5:e.kind==="blast"?7:2.5),c.grounded=!1,i.brain&&i.brain.onHurt(n,e.kind)}i===this.me?(this.dmgFx=1,this.shake(.22),this.audio.hurt(),n&&this.hurtDir(n.updateCenter())):n&&!n.remote||this.parts.emit(o,12,{color:[[.1,.1,.12],[a.r,a.g,a.b]],speed:8,dir:s,spread:.9,life:.4})},t.netKill=function(e){let i=this.byId.get(e.victim),n=this.byId.get(e.by);i&&(n&&(n.kills=e.kills,n.hp=e.hp,n.streak=(n.streak||0)+1),i.deaths=e.deaths,this.killFighter(i,n,e.kind,e.b,Ai(e.dir),!0),n&&!n.remote&&(n.body.dashCharges=Math.min(n.body.dashMax,n.body.dashCharges+1)))},t.netMatchOver=function(e){let i=(e.ranking||[]).map(([a,l,c])=>({f:this.byId.get(a),k:l,d:c})).filter(a=>a.f),n=i[0],s=i.findIndex(a=>a.f===this.me)+1;this.banner(n&&n.f===this.me?"1\uC704!":`${n?n.f.name:"?"} \uC6B0\uC2B9`,`\uB0B4 \uC21C\uC704 ${s}\uC704 \xB7 8\uCD08 \uB4A4 \uC0C8 \uB77C\uC6B4\uB4DC`,7),s===1?this.audio.checkpoint(!0):this.audio.wave();let o=this.records;o.onlineGames=(o.onlineGames||0)+1,s===1&&(o.onlineWins=(o.onlineWins||0)+1),this.saveRecords&&this.saveRecords();for(let a of this.fighters)a.brain&&this.chat(a,n&&n.f===a?"win":"lose",.5)},t.netFxIn=function(e){let i=this.byId.get(e.id);if(!i)return;let n=e.p?Ai(e.p):i.updateCenter().clone();switch(e.k){case"throw":i.throwT=.25,this.spatial(n,()=>this.audio.discThrow(.8));break;case"bounce":{let s=Ai(e.n),o=new ct(i.color);this.parts.emit(n,8,{color:[[o.r,o.g,o.b],[.15,.15,.17]],speed:7,dir:s,spread:.8,life:.35,gravity:10}),this.rings.add(n.clone().addScaledVector(s,.04),i.color,1.1+(e.b||0)*.35,.3,s),this.spatial(n,()=>this.audio.discBounce(e.b||0));break}case"blink":{let s=Ai(e.a),o=Ai(e.b),a=new ct(i.color),l=Math.min(24,Math.ceil(s.distanceTo(o)/1.5));for(let c=0;c<=l;c++){let h=new M().lerpVectors(s,o,c/l);h.y+=1,this.parts.emit(h,2,{color:[[a.r,a.g,a.b],[.12,.12,.14]],speed:1.5,life:.45,gravity:0,size:.14})}this.rings.add(new M(o.x,o.y+.06,o.z),e.s?1447450:i.color,e.s?i.disc.w.blinkRadius*1.3:2.2,.45),this.spatial(o,()=>{this.audio.blink(),e.s&&this.audio.slam()}),i.remote&&(i.snaps=[],i.body.pos.copy(o),i.body.prevPos.copy(o));break}case"skill":{e.s==="heal"&&this.parts.emit(n,20,{color:[[.25,.85,.45],[1,1,1]],speed:4,life:.6,gravity:-3}),e.s==="reflect"&&this.spatial(n,()=>this.audio.shieldClang()),e.s==="overdrive"&&this.spatial(n,()=>this.audio.boost()),this.rings.add(n,i.color,2.4,.3,null);break}case"refl":this.reflectFx(i,n,!0);break;case"nade":this.throwGrenade(i,null,Ai(e.p),Ai(e.v));break;case"blast":this.discBlast(i.disc,Ai(e.p),!0);break;case"split":for(let s of e.v||[])this.spawnShard(i,i.color,Ai(e.p),Ai(s),0,!0);break;case"say":typeof e.text=="string"&&this.sayLine(i,e.text.slice(0,40));break}},t.netFx=function(e){this.online&&this.net.send({t:"fx",...e})},t.netHit=function(e,i,n,s,o,a){if(!e.alive||e.invuln||!n)return null;i=Math.round(i),this.net.send({t:"hit",target:e.netId,by:n.netId,dmg:i,kind:s,dir:[$e(o.x),$e(o.y),$e(o.z)],b:a|0});let l=e.updateCenter().clone();if(n.st.hits++,n===this.me){this.audio.discHit(a+1),this.stats.hits++,this.dmgNumber(l,i,s==="bank"||s==="slam"||s==="reflect"),this.hitmarker(e.hp-i<=0),this.stopT=Math.max(this.stopT,.02);let c=new ct(e.color);this.parts.emit(l,14,{color:[[.1,.1,.12],[c.r,c.g,c.b]],speed:8,dir:o,spread:.9,life:.4})}return e.hp-i<=0?"kill":"hit"},t.netTick=function(e){if(this.sendT-=e,!(this.sendT>0)){this.sendT=1/Fy;for(let i of this.fighters){if(i.remote||!i.netId)continue;let n=i.body,s=i.disc,o=0;n.grounded&&(o|=1),(n.dashT>0||i.invulnT>0)&&(o|=2),i.reflectT>0&&(o|=4),i.overT>0&&(o|=8),i.protT>0&&(o|=16);let a={t:"st",id:i.netId,x:$e(n.pos.x),y:$e(n.pos.y),z:$e(n.pos.z),vx:$e(n.vel.x),vy:$e(n.vel.y),vz:$e(n.vel.z),yw:kd(n.yaw),pt:kd(n.pitch),fl:o,ds:s.state==="hand"?0:s.state==="out"?1:2,w:s.w.id};s.state!=="hand"&&(a.dp=[$e(s.pos.x),$e(s.pos.y),$e(s.pos.z)],a.dv=[$e(s.vel.x),$e(s.vel.y),$e(s.vel.z)],a.db=s.bounces),this.net.send(a)}}},t.updateRemotes=function(){let e=Fd()-ky;for(let i of this.fighters){if(!i.remote)continue;let n=i.snaps;if(!n.length)continue;let s=n[0],o=null;for(let h=n.length-1;h>=0;h--)if(n[h].at<=e){s=n[h],o=n[h+1]||null;break}let a=i.body,l=0;if(o){l=Ht.clamp((e-s.at)/Math.max(.001,o.at-s.at),0,1),a.pos.set(s.x+(o.x-s.x)*l,s.y+(o.y-s.y)*l,s.z+(o.z-s.z)*l);let h=o.yw-s.yw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;a.yaw=s.yw+h*l,a.pitch=s.pt+(o.pt-s.pt)*l}else{let h=Math.min(.15,Math.max(0,e-s.at));a.pos.set(s.x+s.vx*h,s.y+s.vy*h,s.z+s.vz*h),a.yaw=s.yw,a.pitch=s.pt}a.prevPos.copy(a.pos),a.vel.set(s.vx,s.vy,s.vz),a.speed=a.vel.length(),a.hSpeed=Math.hypot(s.vx,s.vz),a.grounded=!!(s.fl&1),a.dashT=s.fl&2?.05:0,i.reflectT=s.fl&4?.25:0,i.overT=s.fl&8?.25:0,i.protT=s.fl&16?.2:0,i.seen||(i.seen=!0,i.model&&(i.model.visible=i.alive));let c=i.disc;if(s.w&&s.w!==c.w.id&&(c.setWeapon(s.w),i.setHandDisc()),s.ds===0||!i.alive)c.state!=="hand"&&(c.state="hand",c.holder.visible=!1);else{if(c.state=s.ds===1?"out":"return",c.holder.visible=!0,c.bounces=s.db||0,o&&o.ds&&o.dp)c.pos.set(s.dp[0]+(o.dp[0]-s.dp[0])*l,s.dp[1]+(o.dp[1]-s.dp[1])*l,s.dp[2]+(o.dp[2]-s.dp[2])*l);else{let h=Math.min(.12,Math.max(0,e-s.at));c.pos.set(s.dp[0]+s.dv[0]*h,s.dp[1]+s.dv[1]*h,s.dp[2]+s.dv[2]*h)}c.vel.set(s.dv[0],s.dv[1],s.dv[2])}}}}var xa=class{constructor(){this.ctx=null,this.master=null,this.sfxVol=.8,this.musicVol=.45,this.vol=1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i),i.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=this.musicVol,this.music.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let h=0;h<n;h++)s[h]=Math.random()*2-1;let o=e.sampleRate*1.4,a=e.createBuffer(2,o,e.sampleRate);for(let h=0;h<2;h++){let d=a.getChannelData(h);for(let u=0;u<o;u++)d[u]=(Math.random()*2-1)*Math.pow(1-u/o,3)}this.reverb=e.createConvolver(),this.reverb.buffer=a,this.revGain=e.createGain(),this.revGain.gain.value=.22,this.reverb.connect(this.revGain),this.revGain.connect(this.sfx);let l=e.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.value=400,this.windFilter.Q.value=.7,this.windGain=e.createGain(),this.windGain.gain.value=0,l.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.sfx),l.start();let c=e.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0,this.wrFilter=e.createBiquadFilter(),this.wrFilter.type="highpass",this.wrFilter.frequency.value=2500,this.wrGain=e.createGain(),this.wrGain.gain.value=0,c.connect(this.wrFilter),this.wrFilter.connect(this.wrGain),this.wrGain.connect(this.sfx),c.start(),this._musicStep=0,this._musicNext=0,this.musicOn=!0}setVolumes(t,e){this.sfxVol=t,this.musicVol=e,this.ctx&&(this.sfx.gain.value=t,this.music.gain.value=e)}get t(){return this.ctx.currentTime}_noise(t,{type:e="bandpass",freq:i=1e3,q:n=1,gain:s=.5,attack:o=.002,sweepTo:a=null,rev:l=.3}={}){if(!this.ctx)return;let c=this.ctx,h=this.t;s=Math.max(2e-4,s*this.vol);let d=c.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.4;let u=c.createBiquadFilter();u.type=e,u.frequency.setValueAtTime(i,h),u.Q.value=n,a&&u.frequency.exponentialRampToValueAtTime(a,h+t);let f=c.createGain();if(f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(s,h+o),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(f),f.connect(this.sfx),l){let g=c.createGain();g.gain.value=l,f.connect(g),g.connect(this.reverb)}d.start(h,Math.random()),d.stop(h+t+.05)}_tone(t,e,{type:i="sine",gain:n=.3,attack:s=.002,slideTo:o=null,rev:a=.3,delay:l=0}={}){if(!this.ctx)return;let c=this.ctx,h=this.t+l;n=Math.max(2e-4,n*this.vol);let d=c.createOscillator();d.type=i,d.frequency.setValueAtTime(t,h),o&&d.frequency.exponentialRampToValueAtTime(o,h+e);let u=c.createGain();if(u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(n,h+s),u.gain.exponentialRampToValueAtTime(1e-4,h+e),d.connect(u),u.connect(this.sfx),a){let f=c.createGain();f.gain.value=a,u.connect(f),f.connect(this.reverb)}d.start(h),d.stop(h+e+.05)}slash(t=1){this._noise(.22,{type:"bandpass",freq:3500,sweepTo:600,q:1.2,gain:.35*t,attack:.01}),this._noise(.12,{type:"highpass",freq:6e3,gain:.12*t,rev:0})}slashHit(){this._noise(.18,{type:"lowpass",freq:1800,gain:.6,rev:.2}),this._tone(180,.15,{type:"square",gain:.12,slideTo:60})}gunshot(){this._noise(.35,{type:"lowpass",freq:5e3,sweepTo:300,gain:.8,rev:.6}),this._tone(140,.25,{type:"sine",gain:.6,slideTo:40,rev:0}),this._noise(.05,{type:"highpass",freq:3e3,gain:.4,rev:0})}enemyShot(t=10){let e=Math.max(.05,.4-t*.008);this._noise(.25,{type:"bandpass",freq:1400,sweepTo:400,gain:e,rev:.6}),this._tone(900,.12,{type:"sawtooth",gain:e*.3,slideTo:300,rev:.3})}parry(t=!0){let e=t?1:.6;[1,2.76,5.4,8.93].forEach((i,n)=>this._tone(620*i,.9/(n+1),{type:"sine",gain:.22*e/(n*.6+1),rev:.7})),this._noise(.08,{type:"highpass",freq:4e3,gain:.5*e,rev:.5}),t&&this._tone(1240,.6,{type:"triangle",gain:.1,slideTo:2480,delay:.03})}clash(){[1,2.4,4.1].forEach((t,e)=>this._tone(480*t,.5,{type:"triangle",gain:.25/(e+1),rev:.8})),this._noise(.15,{type:"bandpass",freq:2500,gain:.6})}dash(){this._noise(.3,{type:"bandpass",freq:400,sweepTo:2500,q:.8,gain:.45,attack:.02}),this._tone(90,.2,{type:"sine",gain:.3,slideTo:200,rev:0})}jump(){this._noise(.12,{type:"lowpass",freq:900,gain:.18,rev:0})}land(t){this._noise(t?.25:.1,{type:"lowpass",freq:t?500:900,gain:t?.5:.2,rev:.1}),t&&this._tone(70,.25,{gain:.4,slideTo:35,rev:0})}step(){this._noise(.06,{type:"bandpass",freq:700+Math.random()*400,gain:.12,rev:0})}slideStart(){this._noise(.5,{type:"bandpass",freq:1800,sweepTo:700,gain:.25,attack:.03})}grapple(){this._tone(1800,.15,{type:"square",gain:.08,slideTo:300}),this._noise(.2,{type:"highpass",freq:2e3,gain:.2})}grappleHit(){this._tone(300,.1,{type:"square",gain:.15,slideTo:120,rev:0})}hitmarker(t){this._tone(t?2200:1600,.06,{type:"square",gain:.08,rev:0}),t&&this._tone(3300,.1,{type:"sine",gain:.1,rev:0,delay:.02})}kill(t=1){let e=440*Math.pow(1.06,Math.min(t,12)*2);this._tone(e,.25,{type:"triangle",gain:.18}),this._tone(e*1.5,.35,{type:"triangle",gain:.14,delay:.06}),this._noise(.4,{type:"lowpass",freq:600,sweepTo:80,gain:.4})}hurt(){this._tone(220,.25,{type:"sawtooth",gain:.2,slideTo:90,rev:0}),this._noise(.15,{type:"lowpass",freq:700,gain:.4,rev:0})}reload(){this._tone(900,.04,{type:"square",gain:.1,rev:0}),this._tone(600,.05,{type:"square",gain:.1,rev:0,delay:.25}),this._tone(1300,.05,{type:"square",gain:.12,rev:0,delay:.55})}empty(){this._tone(1400,.03,{type:"square",gain:.06,rev:0})}wave(){[0,.12,.24].forEach((t,e)=>this._tone(220*Math.pow(1.5,e),.6,{type:"sawtooth",gain:.1,delay:t}))}bulletWhiz(){this._noise(.15,{type:"bandpass",freq:2500,sweepTo:900,q:3,gain:.15,rev:0})}ui(){this._tone(1e3,.05,{type:"sine",gain:.08,rev:0})}discThrow(t=1){this._noise(.25,{type:"bandpass",freq:900,sweepTo:3200,q:1.5,gain:.35*t,attack:.01}),this._tone(500,.18,{type:"triangle",gain:.08,slideTo:1400,rev:.2})}discBounce(t=1){this._tone(900+t*260,.12,{type:"square",gain:.07,rev:.3}),this._noise(.06,{type:"highpass",freq:3e3,gain:.25,rev:.2})}discCatch(){this._tone(1500,.06,{type:"triangle",gain:.12,rev:0}),this._noise(.05,{type:"lowpass",freq:1500,gain:.2,rev:0})}discHit(t=1){this._noise(.12,{type:"lowpass",freq:2500,gain:.5,rev:.15}),this._tone(240+t*60,.1,{type:"square",gain:.1,slideTo:90,rev:0})}blink(){this._tone(300,.25,{type:"sine",gain:.35,slideTo:1600,rev:.4}),this._noise(.2,{type:"bandpass",freq:4e3,sweepTo:500,gain:.3})}slam(){this._noise(.4,{type:"lowpass",freq:1200,sweepTo:80,gain:.7,rev:.4}),this._tone(70,.3,{type:"sine",gain:.5,slideTo:35,rev:0})}orbFire(t){let e=Math.max(.05,.3-t*.004);this._tone(700,.2,{type:"sine",gain:e,slideTo:250,rev:.4})}shieldClang(){[1,2.3,3.9].forEach((t,e)=>this._tone(520*t,.25,{type:"triangle",gain:.12/(e+1),rev:.5}))}shotgun(){this._noise(.5,{type:"lowpass",freq:3500,sweepTo:160,gain:1,rev:.7}),this._tone(90,.35,{type:"sine",gain:.8,slideTo:30,rev:0}),this._noise(.08,{type:"highpass",freq:2500,gain:.5,rev:0})}pump(){this._noise(.06,{type:"bandpass",freq:1500,gain:.2,rev:0}),this._noise(.06,{type:"bandpass",freq:900,gain:.25,rev:0})}wallStart(){this._noise(.25,{type:"bandpass",freq:2200,sweepTo:900,gain:.18})}climb(){this._noise(.15,{type:"bandpass",freq:600,gain:.2,rev:0})}mantle(){this._noise(.18,{type:"lowpass",freq:700,gain:.25,rev:0})}hookFire(){this._tone(2200,.18,{type:"sawtooth",gain:.06,slideTo:600}),this._noise(.12,{type:"highpass",freq:3e3,gain:.2})}hookAttach(t){this._tone(t?500:320,.12,{type:"square",gain:.14,slideTo:140,rev:.2}),this._noise(.06,{type:"bandpass",freq:1800,gain:.3,rev:0})}sniperCharge(t){let e=Math.max(.04,.22-t*.002);this._tone(1800,1.2,{type:"sine",gain:e,slideTo:3600,attack:.05,rev:.4})}sniperShot(t){let e=Math.max(.15,.7-t*.004);this._noise(.7,{type:"lowpass",freq:5e3,sweepTo:200,gain:e,rev:.9}),this._tone(220,.5,{type:"sawtooth",gain:e*.3,slideTo:50})}telegraph(t){t?this._tone(2400,.09,{type:"triangle",gain:.12,rev:.3}):(this._tone(160,.35,{type:"sawtooth",gain:.2,slideTo:90,rev:.4}),this._tone(170,.35,{type:"sawtooth",gain:.15,slideTo:95}))}block(){[1,2.1,3.6].forEach((t,e)=>this._tone(380*t,.3,{type:"triangle",gain:.14/(e+1),rev:.6})),this._noise(.08,{type:"bandpass",freq:2200,gain:.35})}broken(){this._tone(880,.5,{type:"square",gain:.08,slideTo:1760,rev:.6}),this._tone(440,.6,{type:"triangle",gain:.1,rev:.6,delay:.05})}execute(){this._noise(.8,{type:"lowpass",freq:3e3,sweepTo:60,gain:.9,rev:.9}),this._tone(60,.8,{type:"sine",gain:.8,slideTo:25,rev:0}),[1,1.5,2].forEach((t,e)=>this._tone(660*t,1,{type:"triangle",gain:.08,rev:.9,delay:.05*e}))}chargeStart(){this._tone(200,.6,{type:"sawtooth",gain:.05,slideTo:800,attack:.1,rev:.3})}iaido(){this._noise(.5,{type:"bandpass",freq:600,sweepTo:6e3,q:.7,gain:.6,attack:.01,rev:.6}),this._tone(120,.4,{type:"sine",gain:.5,slideTo:40,rev:0})}droneExplode(){this._noise(.6,{type:"lowpass",freq:2e3,sweepTo:80,gain:.7,rev:.6})}checkpoint(t){[0,.07,.14].forEach((e,i)=>this._tone(880*Math.pow(1.26,i),.25,{type:"triangle",gain:.12,delay:e})),t&&[0,.1,.2,.3].forEach((e,i)=>this._tone(660*Math.pow(1.5,i%3),.5,{type:"square",gain:.06,delay:.25+e}))}boost(){this._tone(300,.3,{type:"sawtooth",gain:.1,slideTo:1200,rev:.3})}update(t,e,i,n=0){if(!this.ctx)return;this.intensity=(this.intensity||0)+(n-(this.intensity||0))*Math.min(1,i*2);let s=Math.min(t/40,1);this.windGain.gain.setTargetAtTime(Math.max(0,s-.15)*.35,this.t,.1),this.windFilter.frequency.setTargetAtTime(300+s*1600,this.t,.1),this.wrGain.gain.setTargetAtTime(e?.06:0,this.t,.05),this._updateMusic()}_updateMusic(){if(!this.musicOn||this.musicVol<=.001)return;let t=this.ctx,e=132,i=60/e/4;for(this._musicNext<t.currentTime&&(this._musicNext=t.currentTime+.05);this._musicNext<t.currentTime+.2;)this._playStep(this._musicStep,this._musicNext),this._musicNext+=i,this._musicStep=(this._musicStep+1)%64}_playStep(t,e){let i=this.ctx,n=this.music,s=Math.floor(t/16),o=t%16,l=[36,36,39,34][s],c=d=>440*Math.pow(2,(d-69)/12),h=(d,u,f,g=.003)=>{d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(u,e+g),d.gain.exponentialRampToValueAtTime(1e-4,e+f)};if(o%4===0){let d=i.createOscillator(),u=i.createGain();d.frequency.setValueAtTime(140,e),d.frequency.exponentialRampToValueAtTime(40,e+.12),h(u,.9,.3),d.connect(u),u.connect(n),d.start(e),d.stop(e+.32)}if(o===4||o===12){let d=i.createBufferSource();d.buffer=this.noiseBuf;let u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=1800;let f=i.createGain();h(f,.35,.18),d.connect(u),u.connect(f),f.connect(n),d.start(e,Math.random()),d.stop(e+.2)}if(o%2===1){let d=i.createBufferSource();d.buffer=this.noiseBuf;let u=i.createBiquadFilter();u.type="highpass",u.frequency.value=8e3;let f=this.intensity||0,g=i.createGain();h(g,(o%4===3?.12:.06)*(.6+f*.8),.05),d.connect(u),u.connect(g),g.connect(n),d.start(e,Math.random()),d.stop(e+.06)}if(o%4!==0){let d=i.createOscillator();d.type="sawtooth",d.frequency.value=c(l+(o===14?12:0));let u=i.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(900,e),u.frequency.exponentialRampToValueAtTime(150,e+.1),u.Q.value=6;let f=i.createGain();h(f,.22,.12),d.connect(u),u.connect(f),f.connect(n),d.start(e),d.stop(e+.14)}if((this.intensity||0)>.55&&(o===0||o===6||o===10))for(let d of[-7,7]){let u=i.createOscillator();u.type="sawtooth",u.frequency.value=c(l+48+(o===10?3:0)),u.detune.value=d;let f=i.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(3200,e),f.frequency.exponentialRampToValueAtTime(600,e+.25);let g=i.createGain();h(g,.035*this.intensity,.3),u.connect(f),f.connect(g),g.connect(n);let x=i.createGain();x.gain.value=.6,g.connect(x),x.connect(this.reverb),u.start(e),u.stop(e+.32)}if(o%2===0){let d=[0,3,7,10,12,7],u=i.createOscillator();u.type="square",u.frequency.value=c(l+36+d[t/2%d.length|0]);let f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;let g=i.createGain();h(g,.03+(this.intensity||0)*.035,.18),u.connect(f),f.connect(g),g.connect(n);let x=i.createGain();x.gain.value=.5,g.connect(x),x.connect(this.reverb),u.start(e),u.stop(e+.2)}}};var ya={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zy=new Rs(-1,1,1,-1,0,1),bh=class extends oe{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}},By=new bh,Sn=class{constructor(t){this._mesh=new gt(By,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Jn=class extends ci{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gn.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Sn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Tr=class extends ci{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},va=class extends ci{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var _a=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new et);this._width=i.width,this._height=i.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jn(ya),this.copyPass.material.blending=Ii,this.clock=new ea}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Tr!==void 0&&(o instanceof Tr?i=!0:o instanceof va&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Er=class extends ci{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ct}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Bd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ws=class r extends ci{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(s,o,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new ke(s,o,{type:ai});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new ke(s,o,{type:ai});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Bd;this.highPassUniforms=gn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new et(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ya;this.copyUniforms=gn.clone(h.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Mo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ct,this.oldClearAlpha=1,this.basic=new te,this.fsQuad=new Sn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new et(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ws.BlurDirectionX=new et(1,0);Ws.BlurDirectionY=new et(0,1);var Od={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ma=class extends ci{constructor(){super();let t=Od;this.uniforms=gn.clone(t.uniforms),this.material=new Ko({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Sn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$c?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Hd={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new et(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};var Oy={uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uHurt:{value:0},uVig:{value:.28},uAspect:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},ba=class{constructor(t,e,i,n,s){this.renderer=t,this.Q=s;let o=new ke(4,4,{type:ai,samples:s.msaa||0});o.texture.name="redshift.hdr";let a=this.composer=new _a(t,o);this.world=new Er(e,i),this.hands=new Er(n.scene,n.camera),this.hands.clear=!1,this.hands.clearDepth=!0,this.bloom=new Ws(new et(256,256),s.bloom,.25,1.5),this.lens=new Jn(Oy),this.out=new Ma,a.addPass(this.world),a.addPass(this.hands),a.addPass(this.bloom),a.addPass(this.lens),a.addPass(this.out),s.msaa||(this.fxaa=new Jn(Hd),a.addPass(this.fxaa))}setSize(t,e,i){this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.lens.uniforms.uAspect.value=t/e,this.fxaa&&this.fxaa.material.uniforms.resolution.value.set(1/(t*i),1/(e*i))}render(t,{hands:e=!0,speed:i=0,hurt:n=0,vignette:s=.28}={}){this.hands.enabled=e;let o=this.lens.uniforms;o.uSpeed.value=i,o.uHurt.value=n,o.uVig.value=s,this.composer.render(t)}};var wa=class extends dn{constructor(){super();let t=new Ot;t.deleteAttribute("uv");let e=new Xt({side:Le}),i=new Xt,n=new ta(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let s=new gt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new gt(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new gt(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new gt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new gt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new gt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new gt(t,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new gt(t,Xs(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new gt(t,Xs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new gt(t,Xs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new gt(t,Xs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new gt(t,Xs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new gt(t,Xs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Xs(r){let t=new te;return t.color.setScalar(r),t}var wh=[["forward","\uC55E\uC73C\uB85C"],["back","\uB4A4\uB85C"],["left","\uC67C\uCABD"],["right","\uC624\uB978\uCABD"],["jump","\uC810\uD504 (\uACF5\uC911\uC5D0\uC11C \uD55C \uBC88 \uB354)"],["dash","\uB300\uC2DC (\uB300\uC2DC \uC911 \uBB34\uC801)"],["throw","\uC6D0\uBC18 \uB358\uC9C0\uAE30 / \uD68C\uC218"],["blink","\uC21C\uAC04\uC774\uB3D9 (\uC6D0\uBC18 \uC704\uCE58\uB85C)"],["skill","\uC2A4\uD0AC"]],Sa={forward:["KeyW"],back:["KeyS"],left:["KeyA"],right:["KeyD"],jump:["Space"],dash:["ShiftLeft"],throw:["Mouse0"],blink:["Mouse2","KeyE"],skill:["KeyQ","KeyF"]},Vd={sens:.8,fov:103,fovFx:14,shake:.5,tilt:.5,bob:.4,sfx:.8,music:.4,quality:"auto",adaptive:1,fps:0,full:1,autoHop:1,touchSens:1,touchUI:"auto",touchLayout:"auto",difficulty:"easy",botSkill:"max",aimAssist:"strong",weapon:"disc",skill:"reflect",map:"random",keyHints:1,name:"",binds:Sa},Ta={low:{pr:.85,shadows:!1,shadowSize:1024,aa:!0,post:!1,particles:800},medium:{pr:1,shadows:!0,shadowSize:2048,aa:!0,post:!0,bloom:.38,msaa:0,particles:1800},high:{pr:1.5,shadows:!0,shadowSize:4096,aa:!0,post:!0,bloom:.42,msaa:4,particles:3e3}},Sh={strong:{snap:.17,homing:3.4,cone:.62,range:48,bonus:.55},normal:{snap:.09,homing:1.7,cone:.45,range:36,bonus:.25},off:{snap:0,homing:0,cone:0,range:0,bonus:0}},Gd="redshift4_settings",Wd="redshift4_records";function Xd(){try{let r=JSON.parse(localStorage.getItem(Gd)||"{}"),t={...Vd,...r,binds:{...Sa,...r.binds||{}}};return r.gfx!==2&&(t.quality="auto",t.gfx=2),Ta[t.quality]||(t.quality=window.matchMedia&&matchMedia("(pointer: coarse)").matches||window.REDSHIFT_APP==="android"?"medium":"high"),t.name||(t.name="\uD50C\uB808\uC774\uC5B4"+Math.floor(10+Math.random()*90)),t}catch{return JSON.parse(JSON.stringify(Vd))}}function Ri(r){try{localStorage.setItem(Gd,JSON.stringify(r))}catch{}}function qd(){let r={score:0,wave:0,speed:0,combo:0,duelWin:0,duelLose:0,ffaWin:0,ffaBest:0};try{return{...r,...JSON.parse(localStorage.getItem(Wd)||"{}")}}catch{return r}}function Yd(r){try{localStorage.setItem(Wd,JSON.stringify(r))}catch{}}function Ci(r){return r?r.startsWith("Mouse")?["\uC88C\uD074\uB9AD","\uD720\uD074\uB9AD","\uC6B0\uD074\uB9AD","\uB9C8\uC6B0\uC2A44","\uB9C8\uC6B0\uC2A45"][+r.slice(5)]||r:r.replace("Key","").replace("Digit","").replace("ControlLeft","L-CTRL").replace("ControlRight","R-CTRL").replace("ShiftLeft","SHIFT").replace("ShiftRight","R-SHIFT").replace("AltLeft","L-ALT").replace("Space","SPACE").replace("ArrowUp","\u2191").replace("ArrowDown","\u2193").replace("ArrowLeft","\u2190").replace("ArrowRight","\u2192"):"\u2014"}var Ar=1/120,Ea={easy:{name:"\uC26C\uC6C0",dmg:.55,windup:1.4,count:.75,projSpeed:.75,enemyHp:.8,speedMul:.8,attackers:2,regen:20,killHeal:6,assist:.09},normal:{name:"\uBCF4\uD1B5",dmg:.85,windup:1.1,count:1,projSpeed:.9,enemyHp:1,speedMul:.92,attackers:3,regen:14,killHeal:4,assist:.06},hard:{name:"\uC5B4\uB824\uC6C0",dmg:1.15,windup:.9,count:1.25,projSpeed:1.1,enemyHp:1.15,speedMul:1.05,attackers:5,regen:9,killHeal:2,assist:.03}},$d=new M(0,0,22),qt=new M,Se=new M,je=new M,Tn=new M,Hy=new M(0,1,0),Rr={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},En={style:{setProperty(){}},classList:{toggle(){},add(){},remove(){},contains(){return!1}},textContent:"",innerHTML:"",children:[],appendChild(){},querySelectorAll(){return[]}},Cr=[{k:"throw",a:"throw",t:"\uC6D0\uBC18 \uB358\uC9C0\uAE30"},{k:"recall",a:"throw",t:"\uD55C \uBC88 \uB354 \uB20C\uB7EC \uD68C\uC218 (\uB3CC\uC544\uC624\uBA74\uC11C\uB3C4 \uB54C\uB824\uC694)"},{k:"blink",a:"blink",t:"\uC6D0\uBC18\uC774 \uB0A0\uC544\uAC00\uB294 \uB3D9\uC548 \uC21C\uAC04\uC774\uB3D9"},{k:"bank",a:null,t:"\uBCBD\uC5D0 \uD295\uACA8\uC11C \uB9DE\uD788\uAE30 (\uD295\uAE38 \uB54C\uB9C8\uB2E4 +35% \uD53C\uD574)"},{k:"slam",a:"blink",t:"\uC801 \uBC14\uB85C \uC606\uC73C\uB85C \uC21C\uAC04\uC774\uB3D9 \u2192 \uCDA9\uACA9\uD30C"},{k:"flank",a:null,t:"\uBC29\uD328\uBCD1\uC744 \uC606\xB7\uB4A4\uC5D0\uC11C \uB9DE\uD788\uAE30"},{k:"dash",a:"dash",t:"\uB300\uC2DC (\uB300\uC2DC \uC911\uC5D4 \uBB34\uC801)"},{k:"air",a:"jump",t:"\uACF5\uC911\uC5D0\uC11C \uD55C \uBC88 \uB354 \uC810\uD504"},{k:"skill",a:"skill",t:"\uC2A4\uD0AC \uC4F0\uAE30 (\uBA54\uB274\uC5D0\uC11C \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694)"}],Vy={throw:"\uB358\uC9C0\uAE30",blink:"\uC21C\uAC04\uC774\uB3D9",jump:"\uC810\uD504",dash:"\uB300\uC2DC",skill:"\uC2A4\uD0AC"};function Th(r,t,e){let i=t.x-r.x,n=t.y-r.y,s=t.z-r.z,o=i*i+n*n+s*s;if(o<1e-9)return 0;let a=((e.x-r.x)*i+(e.y-r.y)*n+(e.z-r.z)*s)/o;return a<0?0:a>1?1:a}var Aa={d:0,s:0},Pr=r=>r<0?0:r>1?1:r;function Zd(r,t,e,i,n){let s=t.x-r.x,o=t.y-r.y,a=t.z-r.z,l=i.x-e.x,c=i.y-e.y,h=i.z-e.z,d=r.x-e.x,u=r.y-e.y,f=r.z-e.z,g=s*s+o*o+a*a,x=l*l+c*c+h*h,p=l*d+c*u+h*f,m=0,y=0;if(g<1e-9&&x<1e-9)m=y=0;else if(g<1e-9)y=Pr(p/x);else{let E=s*d+o*u+a*f;if(x<1e-9)m=Pr(-E/g);else{let A=s*l+o*c+a*h,P=g*x-A*A;m=P>1e-9?Pr((A*p-E*x)/P):0,y=(A*m+p)/x,y<0?(y=0,m=Pr(-E/g)):y>1&&(y=1,m=Pr((A-E)/g))}}let v=d+s*m-l*y,b=u+o*m-c*y,R=f+a*m-h*y;return n.d=Math.sqrt(v*v+b*b+R*R),n.s=m,n}var Ra=new M,Ca=new M;function Eh(r,t,e,i){let n=r.x+(t.x-r.x)*i-e.x,s=r.y+(t.y-r.y)*i-e.y,o=r.z+(t.z-r.z)*i-e.z;return Math.sqrt(n*n+s*s+o*o)}function Gy(r){let t=new ye({side:Le,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:r.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`varying vec3 vDir; uniform vec3 sunDir;
      void main(){
        float h = vDir.y;
        vec3 horizon = vec3(0.93, 0.91, 0.87), zenith = vec3(0.52, 0.63, 0.78), ground = vec3(0.86, 0.85, 0.82);
        vec3 c = h > 0.0 ? mix(horizon, zenith, pow(smoothstep(0.0, 0.9, h), 0.7)) : mix(horizon, ground, smoothstep(0.0, -0.2, h));
        float s = max(dot(vDir, sunDir), 0.0);
        c += vec3(1.0, 0.85, 0.65) * (pow(s, 12.0) * 0.25 + pow(s, 400.0) * 2.0);
        gl_FragColor = vec4(c, 1.0);
      }`}),e=new gt(new Ue(400,32,16),t);return e.frustumCulled=!1,e.renderOrder=-1,e}var Ir=class{constructor(t,e,i){this.canvas=t,this.S=e,this.input=i,this.Q=Ta[e.quality]||Ta.high,this.state="menu",this.mode="arena",this._el={},this._txt={},this.audio=new xa;let n=this.renderer=new ko({canvas:t,antialias:this.Q.aa&&!this.Q.post,powerPreference:"high-performance",stencil:!1});this.prMax=Math.min(devicePixelRatio,this.Q.pr),this.pr=this.prMax,this.perf={t:0,n:0,good:0},n.setPixelRatio(this.pr),n.setSize(innerWidth,innerHeight),n.toneMapping=vr,n.toneMappingExposure=1.25,n.autoClear=!1,n.shadowMap.enabled=this.Q.shadows,n.shadowMap.type=Yc;let s=this.scene=new dn;s.background=new ct(15921387),s.fog=new Fo(15921387,90,300);let o=new Cs(n);this.envMap=o.fromScene(new wa,.04).texture,o.dispose(),s.environment=this.envMap,s.environmentIntensity=.35,s.add(new Ds(16054271,14078666,.5));let a=this.sun=new Us(16773600,2.5);if(a.position.set(34,62,18),s.add(this.sky=Gy(a.position)),this.Q.shadows){a.castShadow=!0,a.shadow.mapSize.set(this.Q.shadowSize,this.Q.shadowSize),a.shadow.radius=3;let l=a.shadow.camera;l.left=-62,l.right=62,l.top=62,l.bottom=-62,l.near=1,l.far=200,a.shadow.bias=-4e-4,a.shadow.normalBias=.04}s.add(a),this.camera=new Ie(e.fov,innerWidth/innerHeight,.05,600),this.camera.rotation.order="YXZ",s.add(this.camera),this.arena=new aa(s,this.Q),this.hand=new fa,this.hand.scene.environment=this.envMap,this.post=this.Q.post?new ba(n,s,this.camera,this.hand,this.Q):null,Ki.glow=Vs.glow=qn.glow=this.Q.post?4:1,this.parts=new ha(s,this.Q.particles),this.parts.mat.uniforms.boost.value=this.Q.post?3.5:1,this.rings=new ua(s),this.lines=new da(s,90),this.player=new Hs(this.arena,this.playerEvents()),this.player.easy=!0,this.player.noWall=!0,this.pctx={},this.disc=new Ki(this),this.me=new Mn(this,{name:"\uB098",color:16734751,isBot:!1,body:this.player,disc:this.disc}),this.fighters=[this.me],this.grenades=[],this.wells=[],this.chatLines=[],this.shards=[],this.nadeGeo=new Ue(.24,14,10),this.wellGeo=new Ue(1,28,18),this.versus=!1,this.match={limit:0,timeLeft:0,over:!0},this.net=new wn(this),this.online=!1,this.byId=new Map,this.menuOpen=!1,this.foes=[],this.orbs=[],this.debris=[],this.respawns=[],this.dnums=[],this.orbGeo=new Ue(.3,16,12),this.orbMat=new te({color:15212591}),this.orbHalo=new te({color:16726600,transparent:!0,opacity:.22,depthWrite:!1}),this.lasers=[];for(let l=0;l<8;l++){let c=new oe;c.setAttribute("position",new pe(new Float32Array(6),3));let h=new gr(c,new Yi({color:15212591,transparent:!0,opacity:.5}));h.frustumCulled=!1,h.visible=!1,s.add(h),this.lasers.push(h)}this.blinkGhost=new gt(new Zi(.45,.6,32),new te({color:16734751,transparent:!0,opacity:.8,side:We,depthWrite:!1})),this.blinkGhost.rotation.x=-Math.PI/2,this.blinkGhost.visible=!1,s.add(this.blinkGhost),this.D=Ea[e.difficulty]||Ea.easy,this.camState={dip:0,dipV:0,tilt:0,fov:e.fov,kick:0,trauma:0,bob:0},this.acc=0,this.last=performance.now(),this.clockT=0,this.fpsAcc=0,this.fpsN=0,this.timeScale=1,this.slowT=0,this.stopT=0,this.mouseDX=0,this.mouseDY=0,this.lastRight=0,this.records={score:0,wave:0,speed:0,combo:0},this.hinted=new Set,this.resetRun(),this.resize(),addEventListener("resize",()=>this.resize())}get hp(){return this.me?this.me.hp:100}set hp(t){this.me&&(this.me.hp=t)}get trail(){return this.disc.trail}el(t){let e=this._el[t];return e===void 0&&(e=document.getElementById(t),this._el[t]=e),e||En}txt(t,e){this._txt[t]!==e&&(this._txt[t]=e,this.el(t).textContent=e)}css(t,e,i){let n=t+"."+e;this._txt[n]!==i&&(this._txt[n]=i,this.el(t).style[e]=i)}cls(t,e,i){let n=t+"#"+e;this._txt[n]!==i&&(this._txt[n]=i,this.el(t).classList.toggle(e,i))}resize(){this.renderer.setPixelRatio(this.pr),this.renderer.setSize(innerWidth,innerHeight),this.post&&this.post.setSize(innerWidth,innerHeight,this.pr),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.hand.resize(innerWidth/innerHeight),this.parts.mat.uniforms.scale.value=innerHeight*this.renderer.getPixelRatio()*.5}resetRun(){this.hp=100,this.score=0,this.kills=0,this.wave=0,this.combo=0,this.comboT=0,this.bestCombo=0,this.maxSpeed=0,this.gameTime=0,this.regenT=0,this.waveState="break",this.breakT=3,this.queue=[],this.spawnT=0,this.chain=0,this.chainT=0,this.throwBuf=0,this.dmgFx=0,this.flashFx=0,this.hitT=0,this.bannerT=0,this.popT=0,this.hintT=0,this.dirT=0,this.stats={throws:0,hits:0,banks:0,blinks:0,slams:0},this.tut=new Set}start(t){this.mode=["practice","duel","ffa","online"].includes(t)?t:"arena",this.versus=this.mode==="duel"||this.mode==="ffa"||this.mode==="online",this.mode!=="online"&&(this.online&&this.leaveOnline(),this.online=!1),this.D=Ea[this.S.difficulty]||Ea.easy,this.clear(),this.resetRun();let e=this.mode==="practice"?"arena":this.mode==="online"?this.netMap||"arena":this.S.map;Di[e]||(e=fh[Math.random()*fh.length|0]),this.loadMap(e);let i=this.player;if(i.easy=!0,i.noWall=!0,this.mode==="practice")i.reset($d.clone(),0);else{let s=this.pickSpawn(this.me);i.reset(s,Math.atan2(s.x,s.z))}let n=this.me;n.st={throws:0,hits:0,blinks:0,slams:0,dodges:0,bank:0,ret:0},Object.assign(n,{kills:0,deaths:0,alive:!0,protT:0,invulnT:0,regenT:0,streak:0,lastHitBy:null,respawnT:0}),this.deathInfo=null,this.match={limit:0,timeLeft:0,over:!0},this.disc.caught(),this.disc.catchCd=0,this.trail.reset(),this.disc.setWeapon(this.S.weapon),this.hand.setWeapon(this.disc.w,16734751),n.skill=Yn[this.S.skill]?this.S.skill:"reflect",n.skillCd=0,n.reflectT=n.overT=n.healT=0,i.speedMul=1,this.state="play",this.acc=0,this.last=performance.now(),this.timeScale=1,this.slowT=this.stopT=0,Object.assign(this.camState,{dip:0,dipV:0,tilt:0,fov:this.S.fov,kick:0,trauma:0}),this.buildDashPips(),this.mode==="practice"?(this.setupPractice(),this.banner("\uC5F0\uC2B5\uC7A5","\uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uB97C \uB530\uB77C \uD574\uBCF4\uC138\uC694 \xB7 \uB9DE\uC544\uB3C4 \uC548 \uC8FD\uC5B4\uC694",2.6)):this.versus&&this.mode!=="online"?this.setupVersus():this.banner("\uC544\uB808\uB098",`${this.mapName} \xB7 \uC6D0\uBC18 \uD558\uB098\uB85C \uB05D\uAE4C\uC9C0 \uBC84\uD2F0\uAE30`,2.4),this.cls("deathMsg","show",!1),this.cls("board","hidden",!this.versus),this._boardT=0,this.el("feed").innerHTML="",this.el("dnums").innerHTML="",this.renderTut(),this.txt("hint",""),this.cls("hint","show",!1)}clear(){for(let t of this.foes)t.dispose();for(let t of this.orbs)this.scene.remove(t.m);for(let t of this.debris)this.scene.remove(t.m);for(let t of this.dnums)t.el.remove();this.foes=[],this.orbs=[],this.debris=[],this.respawns=[],this.dnums=[];for(let t of this.lasers)t.visible=!1;for(let t of this.grenades||[])this.scene.remove(t.m);for(let t of this.wells||[])this.scene.remove(t.m),this.scene.remove(t.ring);this.grenades=[],this.wells=[];for(let t of this.shards||[])this.scene.remove(t.m);if(this.shards=[],this.chatLines){for(let t of this.chatLines)t.el.remove();this.chatLines=[]}if(this.blinkGhost.visible=!1,this.disc&&(this.disc.caught(),this.trail.reset()),this.fighters){for(let t of this.fighters)t!==this.me&&t.dispose();this.fighters=[this.me]}this.byId&&this.byId.clear()}clearWorld(){this.clear()}buildDashPips(){let t=this.el("dashPips");if(t!==En){t.innerHTML="";for(let e=0;e<this.player.dashMax;e++)t.appendChild(document.createElement("i"));this._pipsN=-1}}setupPractice(){let t=[["turret",[0,1,0],0],["turret",[-17,0,-6],0],["turret",[17,0,-6],0],["turret",[0,0,-34],0],["shield",[-8,0,-22],0],["chaser",[10,0,10],0]];for(let[e,i]of t)this.spawnDummy(e,new M(...i))}spawnDummy(t,e){let i=this.spawnFoe(t,e);return i.dummy=!0,i.home=e.clone(),i.cd=1e9,i}tickDummy(t,e,i){t.t+=e,t.flashT-=e,t.stun=Math.max(0,t.stun-e),t.spawnT-=e,t.pos.addScaledVector(t.vel,e),t.vel.multiplyScalar(Math.exp(-6*e)),t.pos.x+=(t.home.x-t.pos.x)*Math.min(1,e*2),t.pos.z+=(t.home.z-t.pos.z)*Math.min(1,e*2),t.pos.y=t.home.y;let n=i.player,o=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z)-t.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;t.stun<=0&&(t.yaw+=Math.sign(o)*Math.min(Math.abs(o),(t.type==="shield"?2.2:4)*e)),t.updateCenter(),t.animate(e,i,0)}tickPractice(t){for(let e=this.respawns.length-1;e>=0;e--){let i=this.respawns[e];i.t-=t,i.t<=0&&(this.spawnDummy(i.type,i.pos),this.respawns.splice(e,1))}this.hp=100}train(t){this.mode!=="practice"||this.tut.has(t)||(this.tut.add(t),this.renderTut(t),this.audio.checkpoint(this.tut.size===Cr.length),this.tut.size===Cr.length&&this.banner("\uC644\uB8CC!",`\uC774\uC81C \uC2E4\uC804\uC5D0\uC11C \uC368\uBA39\uC5B4 \uBCF4\uC138\uC694 (${this.input.touch?"II":"ESC"} \u2192 \uBA54\uB274)`,3))}renderTut(t){let e=this.el("tut");if(this.mode!=="practice"){e.innerHTML="",this.cls("tut","hidden",!0);return}this.cls("tut","hidden",!1);let i=this.input.touch,n=o=>o?`<b>${i?Vy[o]:Ci(this.S.binds[o]&&this.S.binds[o][0])}</b>`:"",s=i?Cr.filter(o=>!this.tut.has(o.k)||o.k===t).slice(0,3):Cr;e.innerHTML=`<h4>\uC5F0\uC2B5 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 <span>${this.tut.size}/${Cr.length}</span></h4>`+s.map(o=>`<div class="${this.tut.has(o.k)?"done":""}${t===o.k?" pop":""}">${n(o.a)}${o.t}</div>`).join("")}playerEvents(){let t=this,e=()=>Tn.copy(t.player.pos).setY(t.player.pos.y+.05);return{jump(i){t.audio.jump(),i==="air"&&(t.train("air"),t.parts.emit(e(),10,{color:[.2,.2,.22],speed:4,life:.3,gravity:2}),t.rings.add(e().clone(),2763310,1.6,.3))},land(i){t.audio.land(i>14),i>6&&(t.camState.dipV-=Math.min(5,i*.18)),i>14&&(t.shake(Math.min(.3,i*.01)),t.rings.add(e().clone(),10132118,Math.min(4,i*.15),.35))},slide(){},dash(i){t.audio.dash(),t.camState.kick=Math.max(t.camState.kick,1),t.shake(.05),t.train("dash"),t.parts.emit(Tn.copy(t.player.pos).setY(t.player.pos.y+.9),12,{color:[.15,.15,.17],speed:6,dir:i.clone().negate(),spread:.6,life:.3,gravity:0})},wallStart(){},climb(){},mantle(){t.audio.mantle(),t.camState.dipV-=1.5},hookFire(){},hookMiss(){},hookAttach(){},hookRelease(){},pad(i){t.audio.jump(),t.audio.boost(),t.camState.kick=Math.max(t.camState.kick,1.2),t.rings.add(new M(i.x,i.y+.15,i.z),t.arena.accent.getHex(),3,.4)},boost(){t.audio.boost(),t.camState.kick=Math.max(t.camState.kick,1.5),t.shake(.06)},fell(){t.versus?t.respawn(t.me):t.player.reset(t.mode==="practice"?$d.clone():t.pickSpawn(t.me),0)}}}botEvents(t){let e=this,i=()=>{};return{jump:i,land:i,slide:i,wallStart:i,climb:i,mantle:i,hookFire:i,hookMiss:i,hookAttach:i,hookRelease:i,pad:i,boost:i,dash(){e.spatial(t.body.pos,()=>e.audio.dash())},fell(){e.respawn(t)}}}spatial(t,e){let i=t.distanceTo(this.camera.position);if(!(i>70)){this.audio.vol=Math.pow(Math.max(.06,1-i/70),1.5);try{e()}finally{this.audio.vol=1}}}frame(t){let e=Math.max(0,Math.min(.1,(t-this.last)/1e3));this.last=Math.max(this.last,t),this.fpsAcc+=e,this.fpsN++,this.fpsAcc>.5&&(this.txt("fps",Math.round(this.fpsN/this.fpsAcc)+" FPS"),this.fpsAcc=0,this.fpsN=0);let i=Math.min(.05,e);this.update(i),this.render(i)}update(t){this.clockT+=t;let e=1;this.slowT>0&&(this.slowT-=t,e=.35),this.stopT>0&&(this.stopT-=t,e=.08),this.timeScale+=(e-this.timeScale)*Math.min(1,t*(e<this.timeScale?50:10));let[i,n]=this.input.takeMouse();if(this.mouseDX=i,this.mouseDY=n,this.state==="play"){let s=this.player,o=this.S.sens*.0012;s.yaw-=i*o,s.pitch=Ht.clamp(s.pitch-n*o,-1.55,1.55),this.acc+=t*this.timeScale;let a=0;for(;this.acc>=Ar&&a<12&&(this.tick(Ar),this.acc-=Ar,a++,this.state==="play"););a===12&&(this.acc=0)}else this.state==="dead"&&this.tickDebris(t*.4);this.state!=="play"&&this.input.consumeEdges()}readInput(){let t=this.input,e={fwd:Ht.clamp((t.is("forward")?1:0)-(t.is("back")?1:0)+t.axis.y,-1,1),right:Ht.clamp((t.is("right")?1:0)-(t.is("left")?1:0)+t.axis.x,-1,1),jumpPressed:t.pressed("jump"),jumpHeld:t.is("jump"),crouch:!1,dashPressed:t.pressed("dash"),grapplePressed:!1,grappleHeld:!1,autoHop:!!this.S.autoHop,throwPressed:t.pressed("throw"),blinkPressed:t.pressed("blink"),skillPressed:t.pressed("skill")};return t.consumeEdges(),e}clampBounds(t){let e=this.arena.half-.45;Math.abs(t.pos.x)>e&&(t.pos.x=Math.sign(t.pos.x)*e,t.vel.x*Math.sign(t.pos.x)>0&&(t.vel.x=0)),Math.abs(t.pos.z)>e&&(t.pos.z=Math.sign(t.pos.z)*e,t.vel.z*Math.sign(t.pos.z)>0&&(t.vel.z=0)),t.pos.y>this.arena.ceiling&&(t.pos.y=this.arena.ceiling,t.vel.y=Math.min(t.vel.y,0))}tick(t){this.gameTime+=t;let e=this.player,i=this.disc,n=this.me,s=this.readInput();this.menuOpen&&(s.fwd=s.right=0,s.jumpPressed=s.jumpHeld=s.dashPressed=s.throwPressed=s.blinkPressed=s.skillPressed=!1),n.brain&&(s=n.brain.tick(t)),this.online&&this.updateRemotes(),n.alive&&(e.tick(t,s,this.pctx),this.clampBounds(e),this.maxSpeed=Math.max(this.maxSpeed,e.hSpeed),n.brain||(this.throwBuf-=t,s.throwPressed&&(i.state==="hand"?i.catchCd>0?this.throwBuf=.4:this.throwDisc():i.state==="out"?this.recallFor(n):this.throwBuf=.4),this.throwBuf>0&&i.state==="hand"&&i.catchCd<=0&&(this.throwBuf=0,this.throwDisc()),s.blinkPressed&&this.blink(),s.skillPressed&&this.useSkill(n)));for(let a of this.fighters){if(a===n||!a.alive||a.remote||!a.brain)continue;let l=this.match.over&&this.versus?a.brain.inp:a.brain.tick(t);a.body.tick(t,l,this.pctx),this.clampBounds(a.body)}for(let a of this.fighters)a.remote||a.disc.tick(t);this.tickSkills(t),this.tickShards(t);for(let a of this.fighters)if(a.invulnT-=t,a.protT=Math.max(0,a.protT-t),!!this.versus){if(!a.alive){!this.match.over&&!a.remote&&(a.respawnT-=t,a.respawnT<=0&&this.respawn(a));continue}this.online||(a.regenT-=t,a.regenT<=0&&a.hp<100&&(a.hp=Math.min(100,a.hp+8*t)))}if(this.versus||(this.regenT-=t,this.regenT<=0&&this.hp<100&&(this.hp=Math.min(100,this.hp+this.D.regen*t))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),this.chainT>0&&(this.chainT-=t,this.chainT<=0&&(this.chain=0)),this.tickDebris(t),this.online&&this.netTick(t),this.versus){this.tickMatch(t);return}let o=this.ctx();for(let a of this.foes)a.alive&&(a.dummy?this.tickDummy(a,t,o):a.update(t,o));this.foes=this.foes.filter(a=>a.alive),this.tickOrbs(t),this.mode==="arena"?this.tickWaves(t):this.tickPractice(t)}throwDisc(){let t=this.player,e=this.assistCfg(),i=t.lookDir(new M),n=new M().copy(t.eye);n.y-=.15;let s=this.aimAssist(n,i);if(!this.throwFor(this.me,i))return;let o=this.disc;o.homing=e.homing,o.cone=e.cone,o.range=e.range,o.bonus=e.bonus,o.lock=s}throwFor(t,e){let i=t.body,n=t.disc,s=new M().copy(i.eye);return s.y-=.15,s.addScaledVector(e,.3),n.throw(s,e,i.vel,t.overT>0?1.25:1)?(t.st.throws++,this.noise(t,s,30),this.online&&this.netFx({k:"throw",id:t.netId}),t===this.me?(this.stats.throws++,this.audio.discThrow(1),this.hand.throwAnim(),this.camState.kick=Math.max(this.camState.kick,.25),this.train("throw")):(t.throwT=.25,this.spatial(s,()=>this.audio.discThrow(.8))),!0):!1}recallFor(t){return t.disc.recall()?(t===this.me&&(this.audio.discBounce(0),this.train("recall")),!0):!1}assistCfg(){let t=Sh[this.S.aimAssist]||Sh.strong;return this.input.touch&&t.snap?(this._touchA||(this._touchA={}))&&Object.assign(this._touchA,t,{snap:t.snap*1.6,cone:t.cone*1.15}):t}assistTargets(){return this.versus?this.fighters.filter(t=>t!==this.me&&t.alive):this.foes.filter(t=>t.alive)}tInfo(t){if(t instanceof Mn){let e=t.body;return{c:t.updateCenter(),v:e.vel,air:!e.grounded}}return{c:t.center,v:t.vel,air:!1}}leadPoint(t,e,i){let{c:n,v:s,air:o}=this.tInfo(e),a=this.player,l=this.disc.w,c=t.distanceTo(n)/l.speed;for(let h=0;h<3;h++){i.copy(n).addScaledVector(s,c),o?(i.y+=-.5*K.gravity*c*c,i.y<.8&&(i.y=.8)):i.y=n.y;let d=t.distanceTo(i);Tn.subVectors(i,t).divideScalar(d||1),c=d/(l.speed+Math.max(0,a.vel.dot(Tn))*l.carry)}return i}aimAssist(t,e,i=!0){let n=this.assistCfg();if(!n.snap)return null;let s=null,o=n.snap,a=new M,l=new M;for(let c of this.assistTargets()){let{c:h}=this.tInfo(c);Se.subVectors(h,t);let d=Se.length();if(d<1.2||d>80)continue;Se.divideScalar(d),this.leadPoint(t,c,l),qt.subVectors(l,t).normalize();let u=Math.min(Math.acos(Ht.clamp(qt.dot(e),-1,1)),Math.acos(Ht.clamp(Se.dot(e),-1,1)));u>=o||(this.los(t,l)?(o=u,s=c,a.copy(qt)):this.los(t,h)&&(o=u,s=c,a.copy(Se)))}return s&&i&&e.copy(a),s}discHoming(t,e){let i=t.vel.length();if(i<1)return;let n=qt.copy(t.vel).divideScalar(i),s=f=>f&&f.alive&&!t.hit.has(f)&&!(f.protT>0),o=null;if(s(t.lock)){let{c:f}=this.tInfo(t.lock);Se.subVectors(f,t.pos);let g=Se.length();g<t.range&&Se.dot(n)>g*.15&&(o=t.lock)}if(!o){let f=1e9;for(let g of this.assistTargets()){if(!s(g))continue;let{c:x}=this.tInfo(g);Se.subVectors(x,t.pos);let p=Se.length();if(p>t.range||p<.4)continue;let m=Math.acos(Ht.clamp(Se.dot(n)/p,-1,1));m<t.cone&&m<f&&(f=m,o=g)}o&&(t.lock=o)}if(!o)return;let{c:a,v:l}=this.tInfo(o);if(!this.los(t.pos,a))return;let c=t.pos.distanceTo(a),h=c/i;je.copy(a).addScaledVector(l,h*.7).sub(t.pos).normalize();let d=Math.acos(Ht.clamp(je.dot(n),-1,1));if(d<1e-4)return;let u=Math.min(14,t.homing*(1+8/Math.max(1.5,c)));n.lerp(je,Math.min(1,u*e/d)).normalize(),t.vel.copy(n).multiplyScalar(i)}onDiscBounce(t,e,i){this.online&&t.owner&&!t.owner.remote&&this.netFx({k:"bounce",id:t.owner.netId,p:[e.x,e.y,e.z].map(s=>Math.round(s*100)/100),n:[i.x,i.y,i.z].map(s=>Math.round(s*100)/100),b:t.bounces}),t.owner===this.me?this.audio.discBounce(t.bounces):this.spatial(e,()=>this.audio.discBounce(t.bounces)),t.trail.width=.25+Math.min(4,t.bounces)*.07;let n=new ct(t.color);this.parts.emit(e,10,{color:[[n.r,n.g,n.b],[.15,.15,.17]],speed:7,dir:i,spread:.8,life:.35,gravity:10}),this.rings.add(e.clone().addScaledVector(i,.04),t.color,1.1+t.bounces*.35,.3,i)}discSeek(t,e){let i=t.vel.length();if(i<1)return;let n=qt.copy(t.vel).divideScalar(i),s=t.reflectedBy||t.owner,o=this.versus?this.fighters:this.foes,a=null,l=null,c=1e9;for(let d of o){if(!d.alive||d===s||this.versus&&d===t.owner&&!t.reflectedBy||d.protT>0||t.hit.has(d))continue;let u=d.updateCenter?d.updateCenter():d.center;Se.subVectors(u,t.pos);let f=Se.length();if(f>70||f<.3)continue;let g=Se.dot(n)/f;if(g<-.1)continue;let x=f*(1.7-g)-(d===t.seekLock?10:0);x<c&&this.los(t.pos,u)&&(c=x,a=d,l=u)}if(t.seekLock=a,!a)return;je.subVectors(l,t.pos).normalize();let h=Math.acos(Ht.clamp(je.dot(n),-1,1));h<1e-4||(n.lerp(je,Math.min(1,t.w.seek*e/h)).normalize(),t.vel.copy(n).multiplyScalar(i))}discArea(t,e,i,n,s,o=.5,a=t.hit){let l=t.reflectedBy||t.owner;if(this.versus)for(let c of this.fighters){if(c===l||!c.alive||a.has(c))continue;let h=c.updateCenter(),d=h.distanceTo(e);if(d>i+K.radius||!this.los(e,h)||(a.add(c),c.invuln))continue;let u=Se.subVectors(h,e).setY(0);u.lengthSq()<1e-4&&u.set(1,0,0),u.normalize(),this.damageFighter(c,n*(1-(1-o)*Math.min(1,d/i)),l,s,u.clone(),0)}else for(let c of this.foes){if(!c.alive||a.has(c)||c.spawnT>.25)continue;let h=c.center.distanceTo(e);if(h>i+c.hitRadius||!this.los(e,c.center))continue;a.add(c);let d=Se.subVectors(c.center,e).normalize();this.hitFoe(c,n*(1-(1-o)*Math.min(1,h/i)),d.clone(),s,0)}}discBlast(t,e,i=!1){let n=_n.nova;i||(this.online&&t.owner&&this.netFx({k:"blast",id:t.owner.netId,p:[e.x,e.y,e.z].map(a=>Math.round(a*100)/100)}),this.discArea(t,e,n.blast.r,n.blast.dmg,"blast",.45,new Set));let s=new ct(t.color);this.rings.add(e.clone(),t.color,n.blast.r*2,.45,null),this.rings.add(new M(e.x,Math.max(.06,e.y-1),e.z),t.color,n.blast.r*1.6,.5),this.parts.emit(e,46,{color:[[s.r,s.g,s.b],[1,.9,.7],[.15,.15,.17]],speed:16,life:.55,gravity:8,size:.16});let o=this.player.pos.distanceTo(e);o<18&&this.shake(.3*(1-o/18)),this.spatial(e,()=>this.audio.slam())}discSplit(t,e){let i=Math.max(t.vel.length(),40)*1.05,n=qt.copy(t.vel).normalize(),s=[];for(let o of[-.5,0,.5]){let a=n.clone().applyAxisAngle(Hy,o);a.y+=o===0?.08:0,a.normalize().multiplyScalar(i),s.push(a)}for(let o of s)this.spawnShard(t.owner,t.color,e,o,t.w.shardDmg,!1);this.online&&t.owner&&this.netFx({k:"split",id:t.owner.netId,p:[e.x,e.y,e.z].map(o=>Math.round(o*100)/100),v:s.map(o=>[o.x,o.y,o.z].map(a=>Math.round(a*10)/10))}),t.recall()}spawnShard(t,e,i,n,s,o){this.shardGeo||(this.shardGeo=new Ot(.07,.07,.7),this.shardMats=new Map);let a=this.shardMats.get(e);a||(a=new te({color:new ct(e).multiplyScalar(Ki.glow>1?5:1)}),this.shardMats.set(e,a));let l=new gt(this.shardGeo,a);l.position.copy(i),this.scene.add(l),this.shards.push({m:l,pos:i.clone(),vel:n.clone(),owner:t,dmg:s,visual:o||t&&t.remote,life:.7,hit:new Set})}tickShards(t){let e=this.arena.col;for(let i=this.shards.length-1;i>=0;i--){let n=this.shards[i];n.life-=t;let s=n.vel.length()*t,o=qt.copy(n.vel).normalize(),a=e.raycast(n.pos.x,n.pos.y,n.pos.z,o.x,o.y,o.z,s,Rr),l=Tn.copy(n.pos).addScaledVector(o,a?a.t:s);if(!n.visual)if(this.versus)for(let c of this.fighters){if(c===n.owner||!c.alive||n.hit.has(c))continue;let h=c.body;Ra.set(h.pos.x,h.pos.y+.4,h.pos.z),Ca.set(h.pos.x,h.pos.y+Math.max(.6,h.h-.4),h.pos.z),Zd(n.pos,l,Ra,Ca,Aa).d<K.radius+.25&&(n.hit.add(c),c.invuln||this.damageFighter(c,n.dmg,n.owner,"shard",o.clone(),1))}else for(let c of this.foes)!c.alive||n.hit.has(c)||Eh(n.pos,l,c.center,Th(n.pos,l,c.center))<c.hitRadius+.25&&(n.hit.add(c),this.hitFoe(c,n.dmg,o.clone(),"shard",1));if(n.pos.copy(l),a||n.life<=0){a&&this.parts.emit(n.pos,6,{color:[[1,1,1],[.15,.15,.17]],speed:5,life:.25,gravity:8}),this.scene.remove(n.m),this.shards.splice(i,1);continue}}}renderShards(){for(let t of this.shards)t.m.position.copy(t.pos),t.m.lookAt(Tn.copy(t.pos).add(t.vel))}onDiscCatch(t){t.state!=="hand"&&(t.caught(),t.owner===this.me&&(this.audio.discCatch(),this.hand.catchAnim()))}discSweep(t,e,i,n){let s=e.distanceTo(i);if(s<1e-6)return null;let o=new M().subVectors(i,e).divideScalar(s);if(this.versus)return this.sweepFighters(t,e,i,o,n);let a=[];for(let l of this.foes){if(!l.alive||t.hit.has(l)||l.spawnT>.25)continue;let c=Th(e,i,l.center);Eh(e,i,l.center,c)<l.hitRadius+t.w.radius+(t.bonus||0)&&a.push({f:l,t:c})}a.sort((l,c)=>l.t-c.t);for(let{f:l,t:c}of a){t.hit.add(l);let h=new M().lerpVectors(e,i,c);if(l.shieldBlocks(o)){if(this.audio.shieldClang(),this.parts.emit(h,12,{color:[[1,1,1],[.9,.15,.2]],speed:8,life:.3,gravity:6}),this.hint("\uBC29\uD328\uBCD1\uC740 \uC815\uBA74\uC744 \uB9C9\uC544\uC694 \u2014 \uC606\xB7\uB4A4\uB97C \uB178\uB9AC\uAC70\uB098 \uB4A4\uB85C \uC21C\uAC04\uC774\uB3D9!","shield"),this.popupWorld(h,"\uB9C9\uD798"),n==="out"){let u=l.facing(je),f=t.vel.dot(u);return f<0&&t.vel.addScaledVector(u,-2*f),t.bounces++,this.onDiscBounce(t,h.clone(),u.clone()),h.addScaledVector(o,-.05)}continue}l.type==="shield"&&this.train("flank");let d=n==="out"?t.w.dmg*(1+t.w.bounceMul*t.bounces)*(.75+.25*t.speedMul()):t.w.returnDmg*(1+.2*t.bounces);if(this.hitFoe(l,d,o,n==="out"?t.bounces>0?"bank":"direct":"return",t.bounces),t.w.blast&&n==="out"&&!t.blasted)return t.blasted=!0,this.discBlast(t,h),t.recall(),h}for(let l=this.orbs.length-1;l>=0;l--){let c=this.orbs[l];Eh(e,i,c.pos,Th(e,i,c.pos))<t.w.radius+.55&&this.killOrb(c,!0)}return null}hitFoe(t,e,i,n,s=0){e=Math.round(e);let o=new M().copy(t.center).addScaledVector(i,-1),a=t.damage(e,o);this.stats.hits++,t.windup=0,t.cd=Math.max(t.cd,.8),t.stun=Math.max(t.stun,n==="slam"?.6:.15),this.audio.discHit(s+1),this.parts.emit(t.center,14,{color:[[.1,.1,.12],[.9,.15,.2]],speed:8,dir:i,spread:.9,life:.4}),this.dmgNumber(t.center,e,n==="bank"||n==="slam"),this.hitmarker(a),this.stopT=Math.max(this.stopT,a?.05:.02),n==="bank"&&this.train("bank"),a?this.onKill(t,n,i,s):this.addScore(10)}blink(){return this.blinkFor(this.me)}blinkFor(t){let e=t.disc,i=t.body,n=t===this.me;if(e.state==="hand")return n&&(this.audio.empty(),this.hint(`\uC21C\uAC04\uC774\uB3D9\uC740 \uC6D0\uBC18\uC774 \uB0A0\uC544\uAC00\uB294 \uB3D9\uC548\uB9CC \u2014 \uBA3C\uC800 ${Ci(this.S.binds.throw[0])}\uB85C \uB358\uC9C0\uC138\uC694`,"blinkEmpty")),!1;let s=e.blinkSpot(this.arena.col);if(!s)return n&&this.audio.empty(),!1;let o=this.arena.half-1;s.x=Ht.clamp(s.x,-o,o),s.z=Ht.clamp(s.z,-o,o),s.y=Math.min(s.y,this.arena.ceiling-2);let a=i.pos.clone();i.pos.copy(s),i.prevPos.copy(s);let l=i.hSpeedNow(),c=Math.min(42,Math.max(l,16)+3),h=i.flatFwd(new M);i.vel.set(h.x*c,Math.max(i.vel.y,4),h.z*c),i.grounded=!1,i.airJumps=K.airJumps,i.dashCharges=Math.min(i.dashMax,i.dashCharges+1),t.invulnT=this.versus?0:.3,t.st.blinks++;let d=new M(s.x,s.y+.9,s.z),u=0;if(this.versus){for(let x of this.fighters)if(!(x===t||!x.alive)&&x.updateCenter().distanceTo(d)<e.w.blinkRadius+K.radius){let p=new M().subVectors(x.body.pos,s).setY(0);if(p.lengthSq()<1e-4&&p.set(1,0,0),p.normalize(),x.reflectT>0){i.vel.addScaledVector(p,-14),i.vel.y=6,t.st.reflected=(t.st.reflected||0)+1,this.reflectFx(x,d),t.brain&&this.chat(t,"reflected",.5);continue}this.damageFighter(x,e.w.blinkSlam*(1+.15*e.bounces),t,"slam",p,e.bounces)&&(u++,t.st.slams++)}}else{for(let x of this.foes)if(x.alive&&x.center.distanceTo(d)<e.w.blinkRadius+x.cfg.r){let p=new M().subVectors(x.pos,s).setY(0);p.lengthSq()<1e-4&&p.set(1,0,0),p.normalize(),u++,this.hitFoe(x,e.w.blinkSlam*(1+.15*e.bounces),p,"slam",e.bounces),x.alive&&(x.vel.addScaledVector(p,9),x.vel.y=5)}for(let x=this.orbs.length-1;x>=0;x--)this.orbs[x].pos.distanceTo(d)<e.w.blinkRadius&&this.killOrb(this.orbs[x],!0)}let f=new ct(t.color),g=Math.min(24,Math.ceil(a.distanceTo(s)/1.5));for(let x=0;x<=g;x++){let p=je.lerpVectors(a,s,x/g);p.y+=1,this.parts.emit(p,2,{color:[[f.r,f.g,f.b],[.12,.12,.14]],speed:1.5,life:.45,gravity:0,size:.14})}return this.rings.add(new M(s.x,s.y+.06,s.z),u?1447450:t.color,u?e.w.blinkRadius*1.3:2.2,.45),this.noise(t,s,38),this.online&&this.netFx({k:"blink",id:t.netId,a:[a.x,a.y,a.z].map(x=>Math.round(x*100)/100),b:[s.x,s.y,s.z].map(x=>Math.round(x*100)/100),s:u?1:0}),n?(this.audio.blink(),this.hand.blinkAnim(),this.camState.kick=Math.max(this.camState.kick,1.3),this.flashFx=Math.max(this.flashFx,.6),u&&(this.audio.slam(),this.shake(.25),this.stats.slams++,this.train("slam"),u>=2&&(this.slowT=Math.max(this.slowT,.25))),this.chain++,this.chainT=2.5,this.chain>=2&&this.popup(`\uC21C\uAC04\uC774\uB3D9 \xD7${this.chain}`),this.stats.blinks++,this.train("blink")):(this.spatial(s,()=>{this.audio.blink(),u&&this.audio.slam()}),u&&s.distanceTo(this.player.pos)<8&&this.shake(.15)),this.onDiscCatch(e),!0}los(t,e){let i=e.x-t.x,n=e.y-t.y,s=e.z-t.z,o=Math.hypot(i,n,s);if(o<.001)return!0;let a=this.arena.col.raycast(t.x,t.y,t.z,i/o,n/o,s/o,o,Rr);return!a||a.t>o-.3}ctx(){this._ctx||(this._ctx={player:this.player,foes:null,camera:this.camera,windMul:1,speedMul:1,los:(e,i)=>this.los(e,i),canAttack:e=>{let i=0;for(let n of this.foes)n!==e&&n.alive&&n.windup>0&&i++;return i<this.D.attackers},fireOrb:e=>this.fireOrb(e),contact:e=>this.foeContact(e),shove:e=>this.foeShove(e)});let t=this._ctx;return t.foes=this.foes,t.windMul=this.D.windup,t.speedMul=this.D.speedMul,t}fireOrb(t){let e=this.player,i=new M().copy(t.center).addScaledVector(t.facing(qt),.8),n=Se.copy(e.pos).setY(e.pos.y+1),s=i.distanceTo(n),o=new M().subVectors(n,i).normalize(),a=new gt(this.orbGeo,this.orbMat),l=new gt(this.orbGeo,this.orbHalo);l.scale.setScalar(1.9),a.add(l),a.position.copy(i),this.scene.add(a),this.orbs.push({m:a,halo:l,pos:i,vel:o.multiplyScalar(15*this.D.projSpeed),life:6,dmg:12*this.D.dmg,dodged:!1,t:0,from:t,reflected:!1}),this.audio.orbFire(s),this.parts.emit(i,6,{color:[.9,.15,.2],speed:3,life:.25,gravity:0})}tickOrbs(t){let e=this.player,i=this.arena.col;for(let n=this.orbs.length-1;n>=0;n--){let s=this.orbs[n];s.life-=t,s.t+=t;let o=s.vel.length(),a=o*t,l=i.raycast(s.pos.x,s.pos.y,s.pos.z,s.vel.x/o,s.vel.y/o,s.vel.z/o,a+.3,Rr);if(l&&l.t<a+.3){s.pos.set(l.x,l.y,l.z),this.killOrb(s,!1);continue}if(s.pos.addScaledVector(s.vel,t),s.m.position.copy(s.pos),s.reflected){let f=null;for(let g of this.foes)if(g.alive&&g.center.distanceTo(s.pos)<g.hitRadius+.4){f=g;break}if(f){this.hitFoe(f,35,s.vel.clone().normalize(),"reflect",0),this.killOrb(s,!1);continue}s.life<=0&&this.killOrb(s,!1);continue}if(this.me.reflectT>0&&s.pos.distanceTo(this.me.updateCenter())<1.9){let f=s.from&&s.from.alive?Se.subVectors(s.from.center,s.pos).normalize():Se.copy(s.vel).negate().normalize();s.vel.copy(f).multiplyScalar(30),s.reflected=!0,s.life=3,s.m.material=this.orbMatR||(this.orbMatR=new te({color:16734751})),this.reflectFx(this.me,s.pos);continue}let c=e.pos.y+.4,h=e.pos.y+e.h-.4,d=Ht.clamp(s.pos.y,c,h);if(Math.hypot(s.pos.x-e.pos.x,s.pos.y-d,s.pos.z-e.pos.z)<.3+K.radius)if(this.me.invuln)s.dodged||(s.dodged=!0,this.addScore(25),this.popup("\uD68C\uD53C!"));else{this.hurt(s.dmg,s.pos),this.killOrb(s,!1);continue}s.life<=0&&this.killOrb(s,!1)}}killOrb(t,e){let i=this.orbs.indexOf(t);if(!(i<0)&&(this.orbs.splice(i,1),this.scene.remove(t.m),this.parts.emit(t.pos,e?16:8,{color:[[.9,.15,.2],[1,.6,.6]],speed:e?7:4,life:.35,gravity:4}),e)){let n=this.addScore(15);this.feed("\uAD6C\uCCB4 \uACA9\uCD94",n),this.rings.add(t.pos.clone(),15212591,1.2,.25,null),this.audio.discBounce(2)}}foeContact(t){let e=this.player;if(this.me.invuln||t.cd>0)return;t.cd=1.2,this.hurt(14*this.D.dmg,t.center);let i=qt.subVectors(e.pos,t.pos).setY(0);i.lengthSq()<1e-4&&i.set(0,0,1),i.normalize(),e.vel.addScaledVector(i,8),e.vel.y=Math.max(e.vel.y,5),e.grounded=!1,t.vel.addScaledVector(i,-10),t.stun=.5}foeShove(t){let e=this.player,i=t.facing(new M),n=qt.subVectors(e.pos,t.pos),s=n.y;n.y=0;let o=n.length();this.audio.shieldClang(),this.rings.add(new M().copy(t.center).addScaledVector(i,1.1),15212591,2.4,.3,i),o<3.4&&Math.abs(s)<2&&n.dot(i)/(o||1)>.35&&!this.me.invuln&&(this.hurt(16*this.D.dmg,t.center),e.vel.addScaledVector(i,14),e.vel.y=Math.max(e.vel.y,6),e.grounded=!1)}hurt(t,e){this.dmgFx=1,this.shake(.22),this.audio.hurt(),this.regenT=3,e&&(je.copy(e).applyMatrix4(this.camera.matrixWorldInverse),this.dirAng=Math.atan2(je.x,-je.z),this.dirT=1),this.mode!=="practice"&&(this.hp-=t,this.combo=0,this.comboT=0,this.hp<=0&&this.die())}onKill(t,e,i,n){let s=this.player;this.kills++,this.combo++,this.comboT=3.2,this.bestCombo=Math.max(this.bestCombo,this.combo);let o=t.cfg.score,a=[];e==="bank"&&(o+=50*n,a.push(n>=2?`${n}\uCFE0\uC158 \uBC45\uD06C\uC0F7`:"\uBC45\uD06C\uC0F7"),this.stats.banks++),e==="return"&&a.push("\uD68C\uC218 \uD0C0\uACA9"),e==="slam"&&(o+=80,a.push("\uC21C\uAC04\uC774\uB3D9 \uCDA9\uACA9")),!s.grounded&&s.airTime>.3&&(o+=30,a.push("\uACF5\uC911")),e!=="slam"&&this.disc.out&&(this.disc.kills=(this.disc.kills||0)+1,this.disc.kills>=2&&(o+=60*(this.disc.kills-1),a.push(`${this.disc.kills}\uC5F0\uC18D \uAD00\uD1B5`)));let l=this.addScore(o);this.feed(`${t.cfg.name} \uCC98\uCE58${a.length?" \xB7 "+a.join(" \xB7 "):""}`,l),a.length&&this.popup(a[a.length-1]),this.audio.kill(Math.min(this.combo,8));let c=new M(i.x,Math.max(0,i.y),i.z).normalize();this.debris.push(...t.shatter(c)),this.parts.emit(t.center,26,{color:[[.08,.08,.1],[.9,.15,.2],[1,1,1]],speed:10,life:.6}),this.rings.add(new M(t.pos.x,t.pos.y+.06,t.pos.z),15212591,3,.4),this.shake(.12),s.dashCharges=Math.min(s.dashMax,s.dashCharges+1),this.mode==="arena"&&(this.hp=Math.min(100,this.hp+this.D.killHeal)),t.dummy&&this.respawns.push({type:t.type,pos:t.home.clone(),t:2})}buildWave(t){let e=this.D,i;if(t===1)i=["turret","chaser","turret"];else if(t===2)i=["turret","chaser","turret","chaser","turret"];else if(t===3)i=["shield","turret","chaser","turret","chaser"];else{i=[];let s=Math.round(4+t*1.2);for(let o=0;o<s;o++){let a=Math.random();i.push(a<.4?"turret":a<.72?"chaser":"shield")}}let n=Math.round(i.length*(e.count-1));if(n<0)i.splice(i.length+n,-n);else for(let s=0;s<n;s++)i.push(["turret","chaser",t>=3?"shield":"turret"][s%3]);return i.length||i.push("turret"),i}spawnFoe(t,e){let i=this.player,n=e;if(!n){let o=t==="turret"&&Math.random()<.5,a=o?this.arena.spawnHigh:this.arena.spawnGround,l=a.filter(c=>c.distanceTo(i.pos)>=18);n=(l.length?l:a)[Math.random()*(l.length||a.length)|0].clone(),o||(n.x+=(Math.random()-.5)*3,n.z+=(Math.random()-.5)*3)}let s=new qn(this,t,n);return this.foes.push(s),this.rings.add(new M(n.x,n.y+.06,n.z),15212591,2.4,.5),this.parts.emit(qt.set(n.x,n.y+1,n.z),10,{color:[.1,.1,.12],speed:4,life:.4,gravity:-2}),s}tickWaves(t){if(this.waveState==="break"){if(this.breakT-=t,this.breakT<=0){this.wave++,this.queue=this.buildWave(this.wave),this.waveState="fight",this.spawnT=0;let i=this.wave===1?"\uD3EC\uD0D1\uC758 \uBE68\uAC04 \uAD6C\uCCB4\uB97C \uD53C\uD558\uBA74\uC11C \uC6D0\uBC18\uC744 \uB358\uC838\uC694":this.wave===3?"\uBC29\uD328\uBCD1 \uB4F1\uC7A5 \u2014 \uC815\uBA74\uC740 \uB9C9\uD600\uC694. \uC606\xB7\uB4A4\uB85C \uB3CC\uAC70\uB098 \uB4A4\uB85C \uC21C\uAC04\uC774\uB3D9!":`\uC801 ${this.queue.length}`;this.banner(`WAVE ${this.wave}`,i,2.4),this.audio.wave()}return}this.spawnT-=t;let e=Math.min(14,5+this.wave);if(this.queue.length&&this.spawnT<=0&&this.foes.length<e&&(this.spawnFoe(this.queue.shift()),this.spawnT=.7),!this.queue.length&&this.foes.length===0){this.waveState="break",this.breakT=4;let i=100*this.wave,n=this.addScore(i);this.feed(`WAVE ${this.wave} \uD074\uB9AC\uC5B4`,n),this.hp=Math.min(100,this.hp+35),this.banner("\uD074\uB9AC\uC5B4!",`+${n} \xB7 \uCCB4\uB825 \uD68C\uBCF5`,2),this.audio.checkpoint(!0)}}die(){this.hp=0,this.state="dead",this.input.unlock(),this.slowT=0,this.stopT=0;let t=this.records,e=this.score>(t.score||0);t.score=Math.max(t.score||0,this.score),t.wave=Math.max(t.wave||0,this.wave),t.speed=Math.max(t.speed||0,this.maxSpeed),t.combo=Math.max(t.combo||0,this.bestCombo),this.saveRecords&&this.saveRecords();let i=[["\uC810\uC218",this.score.toLocaleString()+(e?"  \u2605 \uC2E0\uAE30\uB85D":"")],["\uB3C4\uB2EC \uC6E8\uC774\uBE0C",this.wave],["\uCC98\uCE58",this.kills],["\uCD5C\uACE0 \uCF64\uBCF4",this.bestCombo],["\uBC45\uD06C\uC0F7 \uCC98\uCE58",this.stats.banks],["\uC21C\uAC04\uC774\uB3D9 / \uCDA9\uACA9\uD30C",`${this.stats.blinks} / ${this.stats.slams}`],["\uCD5C\uACE0 \uC18D\uB3C4",Math.round(this.maxSpeed*3.6)+" KM/H"],["\uCD5C\uACE0 \uAE30\uB85D",`${t.score.toLocaleString()} \xB7 WAVE ${t.wave}`]];setTimeout(()=>this.onEnd&&this.onEnd("GAME OVER",i),900)}tickDebris(t){for(let e=this.debris.length-1;e>=0;e--){let i=this.debris[e];i.life-=t,i.v.y-=25*t,i.m.position.addScaledVector(i.v,t),i.m.rotation.x+=i.av.x*t,i.m.rotation.y+=i.av.y*t,i.m.rotation.z+=i.av.z*t,i.m.position.y<.06&&(i.m.position.y=.06,i.v.y*=-.35,i.v.x*=.7,i.v.z*=.7,i.av.multiplyScalar(.7)),i.life<.5&&i.m.scale.multiplyScalar(Math.max(0,1-t*6)),i.life<=0&&(this.scene.remove(i.m),this.debris.splice(e,1))}}autopilot(t){this.me.brain=t?new Zn(this,this.me,t):null}useSkill(t){let e=Yn[t.skill];if(!e||!t.alive)return!1;if(t.skillCd>0)return t===this.me&&this.audio.empty(),!1;t.skillCd=e.cd,t.st.skills=(t.st.skills||0)+1;let i=t.body,n=t===this.me,s=t.updateCenter().clone(),o=a=>n?a():this.spatial(s,a);return t.skill==="reflect"?(t.reflectT=e.dur,o(()=>this.audio.shieldClang()),this.rings.add(s,t.color,2.4,.3,null)):t.skill==="overdrive"?(t.overT=e.dur,i.speedMul=1.35,i.dashCharges=i.dashMax,o(()=>this.audio.boost()),this.rings.add(new M(i.pos.x,i.pos.y+.06,i.pos.z),t.color,3,.4)):t.skill==="gravity"?(this.throwGrenade(t),o(()=>this.audio.discThrow(.6))):t.skill==="heal"&&(t.hp=Math.min(100,t.hp+35),t.healT=e.dur,o(()=>this.audio.checkpoint(!1)),this.parts.emit(s,20,{color:[[.25,.85,.45],[1,1,1]],speed:4,life:.6,gravity:-3})),n&&(this.train("skill"),this.hand.blinkAnim(),t.skill==="overdrive"&&(this.camState.kick=Math.max(this.camState.kick,1))),this.noise(t,s,25),this.online&&(this.netFx({k:"skill",id:t.netId,s:t.skill}),t.skill==="heal"&&this.net.send({t:"heal",id:t.netId})),!0}tickSkills(t){for(let e of this.fighters)e.skillCd=Math.max(0,e.skillCd-t),e.reflectT>0&&(e.reflectT-=t),e.overT>0&&(e.overT-=t,e.alive&&(e.body.dashCharges=e.body.dashMax),e.overT<=0&&(e.body.speedMul=1)),e.healT>0&&(e.healT-=t,e.alive&&(e.hp=Math.min(100,e.hp+12*t)));this.tickGrenades(t),this.tickWells(t)}throwGrenade(t,e=null,i=null,n=null){let s=t.body;i||(e=e||s.lookDir(new M),i=new M().copy(s.eye),i.y-=.2,i.addScaledVector(e,.5),n=e.clone().multiplyScalar(24).add(new M(0,4,0)).addScaledVector(s.vel,.4),this.online&&this.netFx({k:"nade",id:t.netId,p:[i.x,i.y,i.z],v:[n.x,n.y,n.z]}));let o=new gt(this.nadeGeo,new Xt({color:1447450,emissive:new ct(t.color).multiplyScalar(.6)}));o.position.copy(i),o.castShadow=!0,this.scene.add(o),this.grenades.push({f:t,pos:i,vel:n,t:0,m:o})}tickGrenades(t){let e=this.arena.col;for(let i=this.grenades.length-1;i>=0;i--){let n=this.grenades[i];n.t+=t,n.vel.y-=22*t;let s=n.vel.length(),o=s*t,a=s>0?e.raycast(n.pos.x,n.pos.y,n.pos.z,n.vel.x/s,n.vel.y/s,n.vel.z/s,o+.25,Rr):null,l=!!(a&&a.t<o+.25);l?n.pos.set(a.x+a.nx*.3,a.y+a.ny*.3,a.z+a.nz*.3):n.pos.addScaledVector(n.vel,t),n.pos.y<.2&&(n.pos.y=.2,l=!0);for(let c of this.fighters)c!==n.f&&c.alive&&c.updateCenter().distanceTo(n.pos)<1.3&&(l=!0);for(let c of this.foes)c.alive&&c.center.distanceTo(n.pos)<c.hitRadius+.4&&(l=!0);n.t>1.6&&(l=!0),n.m.position.copy(n.pos),l&&(this.scene.remove(n.m),this.grenades.splice(i,1),this.makeWell(n.f,n.pos.clone()))}}makeWell(t,e){let i=Yn.gravity,n=new gt(this.wellGeo,new te({color:1447450,transparent:!0,opacity:.18,depthWrite:!1}));n.position.copy(e),this.scene.add(n);let s=new gt(new Zi(.9,1,48),new te({color:t.color,transparent:!0,opacity:.7,side:We,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(e.x,Math.max(.06,e.y-.9),e.z),s.scale.setScalar(7.5),this.scene.add(s),this.wells.push({f:t,pos:e,t:0,dur:i.dur,r:7.5,m:n,ring:s}),this.spatial(e,()=>this.audio.slam()),this.parts.emit(e,24,{color:[[.08,.08,.1],[.5,.5,.55]],speed:6,life:.5,gravity:0}),this.noise(t,e,35)}tickWells(t){for(let e=this.wells.length-1;e>=0;e--){let i=this.wells[e];i.t+=t;let n=i.t/i.dur;i.m.scale.setScalar(i.r*(.25+.15*Math.sin(i.t*18))*(1-n*.5)),i.m.material.opacity=.22*(1-n),i.ring.scale.setScalar(i.r*(1-n*.6)),i.ring.material.opacity=.7*(1-n);let s=(o,a,l,c)=>{let h=i.pos.x-a,d=i.pos.y-l,u=i.pos.z-c,f=Math.hypot(h,d,u);if(f>i.r||f<.3)return!1;let g=52*(1-f/i.r*.5)*t;return o.vel.x+=h/f*g,o.vel.z+=u/f*g,o.vel.y+=d/f*g*.5+9*t,!0};for(let o of this.fighters){if(o===i.f||!o.alive||o.reflectT>0)continue;let a=o.body;s(a,a.pos.x,a.pos.y+1,a.pos.z)&&(a.grounded=!1,o===this.me&&Math.random()<t*4&&this.shake(.05))}for(let o of this.foes)o.alive&&s(o,o.center.x,o.center.y,o.center.z);i.t>=i.dur&&(this.scene.remove(i.m),this.scene.remove(i.ring),this.wells.splice(e,1))}}noise(t,e,i){for(let n of this.fighters)n.brain&&n!==t&&n.alive&&n.body.pos.distanceTo(e)<i*n.brain.S.hear&&n.brain.hear(t,e)}chat(t,e,i=.3){if(!t.brain||!vh[e]||Math.random()>i*t.brain.p.chatty||this.gameTime-(t.lastChat||-9)<2.5)return;t.lastChat=this.gameTime;let n=Dd(vh[e]);this.sayLine(t,n),this.online&&!t.remote&&this.netFx({k:"say",id:t.netId,text:n})}sayLine(t,e){t.say(e);let i=this.el("chat");if(i===En)return;let n=document.createElement("div"),s=document.createElement("b");s.textContent=t.name,s.style.color=t.css;let o=document.createElement("span");for(o.textContent=e,n.append(s,o),i.append(n),this.chatLines.push({el:n,t:0});this.chatLines.length>4;)this.chatLines.shift().el.remove()}setupVersus(){let t=this.mode==="duel",e=ji[this.S.botSkill]?this.S.botSkill:"max";this.botSkill=e;let i=Ud.slice().sort(()=>Math.random()-.5);for(let s=0;s<(t?1:5);s++){let o=i[s],a=bn[Math.random()*bn.length|0],l=new Mn(this,{name:o.name,color:o.color,isBot:!0,weapon:a.weapons[Math.random()*a.weapons.length|0],skill:a.skills[Math.random()*a.skills.length|0]});l.brain=new Zn(this,l,e,a),this.fighters.push(l)}setTimeout(()=>{for(let s of this.fighters)s.brain&&this.versus&&this.chat(s,"start",.55)},900);for(let s of this.fighters)s.alive=!1;for(let s of this.fighters)this.respawn(s,!0);this.match={limit:t?5:15,timeLeft:t?0:240,over:!1};let n=this.fighters[1];t?this.banner("1 V 1",`${this.mapName} \xB7 ${n.name} \xB7 \uBD07 \uC2E4\uB825 ${ji[e].name} \xB7 5\uD0AC \uBA3C\uC800`,2.6):this.banner("FFA",`${this.mapName} \xB7 \uBD07 5\uBA85 \xB7 ${ji[e].name} \xB7 15\uD0AC \uBA3C\uC800 (4\uBD84)`,2.6),this._boardHtml="";try{this.renderer.compile(this.scene,this.camera)}catch{}}spawnPoints(){if(!this._spawns){let t=this.arena;this._spawns=[...t.spawnGround,...t.spawnHigh]}return this._spawns}loadMap(t){if(this.arena.mapId===t&&this.arena.map)return!1;this.arena.load(t),this._spawns=null;for(let e of this.fighters)e.disc.state!=="hand"&&!e.remote&&e.disc.caught(),e.disc.trail.reset();for(let e of this.shards||[])this.scene.remove(e.m);this.shards=[];try{this.renderer.compile(this.scene,this.camera)}catch{}return!0}get mapName(){return(Di[this.arena.mapId]||Di.arena).name}pickSpawn(t){let e=null,i=-1;for(let n of this.spawnPoints()){let s=200;for(let a of this.fighters)a!==t&&a.alive&&(s=Math.min(s,a.body.pos.distanceTo(n)));let o=s+Math.random()*8;o>i&&(i=o,e=n)}return e.clone()}respawn(t,e=!1){let i=this.pickSpawn(t),n=t.body;n.reset(i,Math.atan2(i.x,i.z)),t.hp=100,t.alive=!0,t.protT=e?.6:1.5,t.invulnT=0,t.regenT=0,t.respawnT=0,t.reflectT=t.overT=t.healT=0,n.speedMul=1,t.disc.state!=="hand"&&t.disc.caught(),t.disc.catchCd=0,t.disc.trail.reset(),t.brain&&t.brain.reset(),t===this.me&&(this.deathInfo=null,this.cls("deathMsg","show",!1),this.camState.fov=this.S.fov,this.throwBuf=0),e||this.rings.add(new M(i.x,i.y+.06,i.z),t.color,2.6,.5),this.online&&!t.remote&&t.netId&&this.net.send({t:"respawn",id:t.netId})}sweepFighters(t,e,i,n,s){let o=t.reflectedBy||t.owner;for(let a of this.fighters){if(a===o||!a.alive||t.hit.has(a)||a===t.owner&&!t.reflectedBy)continue;let l=a.body;if(Ra.set(l.pos.x,l.pos.y+.4,l.pos.z),Ca.set(l.pos.x,l.pos.y+Math.max(.6,l.h-.4),l.pos.z),Zd(e,i,Ra,Ca,Aa).d>=K.radius+t.w.radius+(t.bonus||0)+(a.reflectT>0?.6:0))continue;if(t.hit.add(a),a.reflectT>0&&a!==t.owner){let u=new M().lerpVectors(e,i,Aa.s),f=t.owner,g=Math.max(t.vel.length(),t.w.speed)*1.15,x=f.alive?Se.subVectors(f.updateCenter(),u).normalize():Se.copy(t.vel).negate().normalize();return t.vel.copy(x).multiplyScalar(g),t.state="out",t.t=Math.min(t.t,.3),t.hit.clear(),t.hit.add(a),t.reflectedBy=a,t.leg++,t.homing=0,t.bonus=a===this.me?this.assistCfg().bonus:0,a.st.reflects=(a.st.reflects||0)+1,this.reflectFx(a,u),f.brain&&this.chat(f,"reflected",.45),u.addScaledVector(x,.05)}if(a.invuln){a.st.dodges++,a===this.me?this.popup("\uD68C\uD53C!"):o===this.me&&this.popupWorld(a.updateCenter(),"\uD68C\uD53C");continue}let c=t.w,h=s==="out"?c.dmg*(1+c.bounceMul*t.bounces)*(.75+.25*t.speedMul())*(t.reflectedBy?1.2:1):c.returnDmg*(1+.2*t.bounces),d=new M().lerpVectors(e,i,Aa.s);if(this.damageFighter(a,h,o,t.reflectedBy?"reflect":s==="out"?t.bounces>0?"bank":"direct":"return",n,t.bounces),c.blast&&s==="out"&&!t.blasted)return t.blasted=!0,this.discBlast(t,d),t.recall(),d}return null}reflectFx(t,e,i=!1){this.online&&!i&&!t.remote&&this.netFx({k:"refl",id:t.netId,p:[e.x,e.y,e.z]}),this.rings.add(e.clone(),t.color,2.2,.3,null),this.parts.emit(e,16,{color:[[1,1,1],[.9,.9,.95]],speed:9,life:.3,gravity:0}),t===this.me?(this.audio.shieldClang(),this.popup("\uBC18\uC0AC!"),this.flashFx=Math.max(this.flashFx,.4)):this.spatial(e,()=>this.audio.shieldClang())}damageFighter(t,e,i,n,s,o=0){if(this.online)return this.netHit(t,e,i,n,s,o);if(!t.alive||t.invuln)return null;e=Math.round(e),t.hp-=e,t.regenT=5,t.lastHitBy=i,t.lastHitT=this.gameTime;let a=i?i.disc.w.knock:5,l=t.body,c=n==="slam"?8+a*.3:n==="blast"?16:a;l.vel.x+=s.x*c,l.vel.z+=s.z*c,l.vel.y=Math.max(l.vel.y,n==="slam"?5:n==="blast"?7:2.5),l.grounded=!1;let h=t.updateCenter().clone(),d=new ct(t.color);this.parts.emit(h,14,{color:[[.1,.1,.12],[d.r,d.g,d.b]],speed:8,dir:s,spread:.9,life:.4});let u=t.hp<=0;return i&&(i.st.hits++,n==="bank"&&i.st.bank++,n==="return"&&i.st.ret++),t.brain&&t.brain.onHurt(i,n),t===this.me&&(this.dmgFx=1,this.shake(.22),this.audio.hurt(),i&&this.hurtDir(i.updateCenter())),i===this.me?(this.audio.discHit(o+1),this.stats.hits++,this.dmgNumber(h,e,n==="bank"||n==="slam"),this.hitmarker(u),this.stopT=Math.max(this.stopT,u?.05:.02)):t!==this.me&&this.spatial(h,()=>this.audio.discHit(1)),u&&this.killFighter(t,i,n,o,s),u?"kill":"hit"}hurtDir(t){je.copy(t).applyMatrix4(this.camera.matrixWorldInverse),this.dirAng=Math.atan2(je.x,-je.z),this.dirT=1}killFighter(t,e,i,n,s,o=!1){t.alive=!1,t.hp=0,t.streak=0,o||t.deaths++,t.reflectT=t.overT=t.healT=0,t.body.speedMul=1,t.respawnT=this.mode==="duel"?2.2:2.8,t.disc.state!=="hand"&&t.disc.caught(),t.disc.trail.reset();let a=new M(s.x,Math.max(.2,s.y),s.z).normalize();t.isBot&&this.debris.push(...t.shatter(a));let l=t.updateCenter().clone(),c=new ct(t.color);this.parts.emit(l,28,{color:[[.08,.08,.1],[c.r,c.g,c.b],[1,1,1]],speed:10,life:.6}),this.rings.add(new M(t.body.pos.x,t.body.pos.y+.06,t.body.pos.z),t.color,3,.45);let h=i==="bank"?n>=2?`${n}\uCFE0\uC158 \uBC45\uD06C\uC0F7`:"\uBC45\uD06C\uC0F7":i==="return"?"\uD68C\uC218 \uD0C0\uACA9":i==="slam"?"\uC21C\uAC04\uC774\uB3D9 \uCDA9\uACA9":i==="blast"?"\uCDA9\uACA9\uD0C4":i==="saw"?"\uD1B1\uB0A0 \uB36B":i==="shard"?"\uD30C\uD3B8":"";e&&!e.body.grounded&&e.body.airTime>.3&&(h=h?h+" \xB7 \uACF5\uC911":"\uACF5\uC911");let d=!this.match.over&&!o;e&&e!==t&&d&&(e.kills++,e.streak++,e.hp=Math.min(100,e.hp+25),e.body.dashCharges=Math.min(e.body.dashMax,e.body.dashCharges+1)),this.feedKill(e,t,h),e&&e.brain&&e!==t&&(e.brain.onKill(t),this.chat(e,e.streak===3?"streak":i==="bank"?"bank":i==="slam"?"slam":"kill",t===this.me?.4:.22)),t.brain&&(t.brain.onDeath(e),this.chat(t,"death",e===this.me?.35:.15)),e===this.me?(this.popup(e.streak>=3?`${e.streak}\uC5F0\uC18D \uCC98\uCE58!`:h||"\uCC98\uCE58!"),this.audio.kill(Math.min(e.streak,8)),this.shake(.12),this.kills++,i==="bank"&&this.stats.banks++):this.spatial(l,()=>this.audio.kill(1)),t===this.me&&(this.deathInfo={by:e,pos:this.player.pos.clone(),t:0},this.throwBuf=0),d&&e&&e.kills>=this.match.limit&&this.endMatch(),o&&t===this.me&&this.audio.hurt()}feedText(t){let e=this.el("feed");if(e===En)return;let i=document.createElement("div");for(i.className="kf sys",i.textContent=t,e.prepend(i);e.children.length>6;)e.lastChild.remove();setTimeout(()=>i.classList.add("out"),3800),setTimeout(()=>i.remove(),4300)}feedKill(t,e,i){let n=this.el("feed");if(n===En)return;let s=document.createElement("div");s.className="kf";let o=l=>{let c=document.createElement("span");return c.textContent=l?l.name:"?",l&&(c.style.color=l.css),c},a=document.createElement("em");if(a.textContent="\u2192",s.append(o(t),a,o(e)),i){let l=document.createElement("small");l.textContent=i,s.append(l)}for((t===this.me||e===this.me)&&s.classList.add("mine"),n.prepend(s);n.children.length>6;)n.lastChild.remove();setTimeout(()=>s.classList.add("out"),3800),setTimeout(()=>s.remove(),4300)}ranking(){let t=this.me;return[...this.fighters].sort((e,i)=>i.kills-e.kills||e.deaths-i.deaths||(e===t?-1:i===t?1:0))}tickMatch(t){let e=this.match;this.deathInfo&&(this.deathInfo.t+=t),!e.over&&e.timeLeft>0&&(e.timeLeft-=t,e.timeLeft<=0&&(e.timeLeft=0,this.online||this.endMatch()))}endMatch(){if(this.online)return;let t=this.match;if(t.over)return;t.over=!0,this.slowT=Math.max(this.slowT,1);let e=this.me,i=this.ranking(),n=i.indexOf(e)+1,s=this.records,o,a;if(this.mode==="duel"){let c=this.fighters[1];o=e.kills>c.kills?"\uC2B9\uB9AC!":e.kills===c.kills?"\uBB34\uC2B9\uBD80":"\uD328\uBC30",a=`${e.kills} : ${c.kills}`,e.kills>c.kills?s.duelWin=(s.duelWin||0)+1:e.kills<c.kills&&(s.duelLose=(s.duelLose||0)+1)}else o=n===1?"1\uC704!":`${n}\uC704`,a=`${e.kills}\uD0AC \xB7 ${e.deaths}\uB370\uC2A4`,n===1&&(s.ffaWin=(s.ffaWin||0)+1),s.ffaBest=Math.min(s.ffaBest||99,n);s.speed=Math.max(s.speed||0,this.maxSpeed),this.saveRecords&&this.saveRecords(),this.banner(o,a,1.8),n===1?this.audio.checkpoint(!0):this.audio.wave();for(let c of this.fighters)c.brain&&this.chat(c,i[0]===c?"win":"lose",.6);let l=i.map((c,h)=>[`${h+1}. ${c.name}`,`${c.kills} \uD0AC \xB7 ${c.deaths} \uB370\uC2A4`]);l.push(["\uBD07 \uC2E4\uB825",ji[this.botSkill].name],["\uCD5C\uACE0 \uC18D\uB3C4",Math.round(this.maxSpeed*3.6)+" KM/H"]),this.result={title:o,stats:l,rank:n},setTimeout(()=>{this.state!=="play"||this.match!==t||(this.state="dead",this.input.unlock(),this.onEnd&&this.onEnd(o,l))},1700)}addScore(t){let e=1+Math.min(4,Math.max(0,this.combo-1)*.25),i=Math.round(t*e);return this.score+=i,i}shake(t){this.camState.trauma=Math.min(1,this.camState.trauma+t)}banner(t,e,i=2.2){this.el("bannerBig").textContent=t,this.el("bannerSmall").textContent=e||"";let n=this.el("banner");n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),this.bannerT=i}feed(t,e){let i=this.el("feed");if(i===En)return;let n=document.createElement("div");for(n.innerHTML=`<span></span><b>+${e}</b>`,n.firstChild.textContent=t,i.prepend(n);i.children.length>5;)i.lastChild.remove();setTimeout(()=>n.classList.add("out"),2200),setTimeout(()=>n.remove(),2700)}popup(t){let e=this.el("popup");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}popupWorld(t,e){this.dmgNumber(t,e,!1,!0)}hitmarker(t){let e=this.el("hit");e.classList.toggle("kill",!!t),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}hint(t,e,i=2800){if(e){if(this.hinted.has(e))return;this.hinted.add(e)}this.txt("hint",t),this.cls("hint","show",!0),this.hintT=i/1e3}dmgNumber(t,e,i,n){let s=this.el("dnums");if(s===En)return;let o=document.createElement("div");o.className=n?"dn plain":i?"dn big":"dn",o.textContent=e,s.appendChild(o),this.dnums.push({el:o,pos:t.clone(),t:0,vx:(Math.random()-.5)*30}),this.dnums.length>24&&this.dnums.shift().el.remove()}render(t){let e=this.player,i=this.S,n=this.camState,s=this.state==="play"||this.state==="paused"||this.state==="dead";if(this.versus&&!this.me.alive&&this.deathInfo&&this.state==="play"){let u=this.deathInfo,f=u.by,g=f&&f.alive?f.body.pos:u.pos,x=Math.min(1,u.t);qt.subVectors(u.pos,g).setY(0),qt.lengthSq()<.001&&qt.set(0,0,1),qt.normalize(),Tn.set(u.pos.x,u.pos.y+3+x*3,u.pos.z).addScaledVector(qt,3+x*4),this.camera.position.lerp(Tn,Math.min(1,t*5)),this.camera.lookAt(g.x,g.y+1,g.z),this.camera.fov=62,this.camera.updateProjectionMatrix()}else if(s){let u=this.state==="play"?Ht.clamp(this.acc/Ar,0,1):1,f=e.prevPos.x+(e.pos.x-e.prevPos.x)*u,g=e.prevPos.y+(e.pos.y-e.prevPos.y)*u+e.prevEyeH+(e.eyeH-e.prevEyeH)*u,x=e.prevPos.z+(e.pos.z-e.prevPos.z)*u;n.dipV+=(-n.dip*120-n.dipV*14)*t,n.dip+=n.dipV*t,n.dip=Ht.clamp(n.dip,-.45,.2),e.grounded&&e.hSpeed>1&&(n.bob+=t*(4+e.hSpeed*.5));let p=(e.grounded?Math.abs(Math.sin(n.bob))*.035*Math.min(1,e.hSpeed/11):0)*i.bob,m=this.state==="dead"?-.9:0;this.camera.position.set(f,g+n.dip-p+m,x);let y=-this.lastRight*.02*i.tilt*Math.min(1,e.hSpeed/12);n.tilt+=(y-n.tilt)*Math.min(1,t*8),n.trauma=Math.max(0,n.trauma-t*1.8);let v=n.trauma*n.trauma*i.shake,b=this.clockT*42;this.camera.rotation.set(e.pitch+(Math.sin(b*1.1)*.6+Math.sin(b*2.3)*.4)*.03*v,e.yaw+(Math.sin(b*.9+1)*.6+Math.sin(b*1.9)*.4)*.03*v,n.tilt+Math.sin(b*1.3+2)*.04*v+(this.state==="dead"?.3:0)),n.kick=Math.max(0,n.kick-t*2.8);let R=Ht.clamp((e.hSpeed-11)/30,0,1),E=i.fov+i.fovFx*R+n.kick*6;n.fov+=(E-n.fov)*Math.min(1,t*7);let A=Ht.degToRad(Math.min(150,n.fov));this.camera.fov=Ht.radToDeg(2*Math.atan(Math.tan(A/2)/this.camera.aspect)),this.camera.updateProjectionMatrix()}else{let u=this.clockT*.06;this.camera.position.set(Math.sin(u)*42,15+Math.sin(this.clockT*.2)*3,Math.cos(u)*42),this.camera.lookAt(0,2,0),this.camera.fov=62,this.camera.updateProjectionMatrix()}this.lastRight=(this.input.is("right")?1:0)-(this.input.is("left")?1:0),this.camera.updateMatrixWorld();let a=this.state==="paused"?0:this.state==="play"?t*this.timeScale:t*.4,l=this.state==="play"?Ht.clamp(this.acc/Ar,0,1):1;for(let u of this.fighters)u.disc.render(a),u.disc.trail.update(u.disc.pos,this.camera.position,u.disc.out&&this.state!=="menu"),u.isBot&&u.renderModel(t,l,this.clockT);this.renderShards(),this.parts.update(a),this.rings.update(a),this.arena.update(this.clockT,a);for(let u of this.orbs)u.halo.scale.setScalar(1.7+Math.sin(u.t*18)*.25);this.updateLasers(),this.updateBlinkGhost(),this.lines.update(this.camera.position,e.vel,this.state==="play"&&this.me.alive?Math.max(this.me.overT>0?.6:0,Ht.clamp((e.speed-17)/20,0,1)):0),this.hand.update(this.state==="play"?t*Math.max(this.timeScale,.4):t,{mx:this.mouseDX||0,my:this.mouseDY||0,hs:e.hSpeed,vy:e.vel.y,grounded:e.grounded,discOut:this.disc.out});let c=this.state!=="play"?.2:this.versus?.65:this.mode==="arena"?Math.min(1,.25+this.foes.length*.07+Math.min(this.combo,10)*.04):.2;this.audio.update(this.state==="play"?e.speed:0,!1,t,c),s&&this.updateHud(t);let h=this.renderer,d=(this.state==="play"||this.state==="paused")&&this.me.alive;if(this.sky.position.copy(this.camera.position),this.post){let u=this.state==="play"&&this.me.alive?Ht.clamp((e.speed-20)/26,0,1)*(this.S.fovFx>0?1:.5):0;this.post.render(t,{hands:d,speed:u,hurt:Math.min(1,this.dmgFx||0)*.6,vignette:s?.3:.18})}else h.clear(),h.render(this.scene,this.camera),d&&(h.clearDepth(),h.render(this.hand.scene,this.hand.camera));this.adaptRes(t)}adaptRes(t){if(!this.S.adaptive||this.state!=="play"||document.hidden)return;let e=this.perf;if(e.t+=t,e.n++,e.t<1)return;let i=e.t/e.n;e.t=0,e.n=0;let n=Math.min(this.prMax,.5),s=this.pr;i>1/48&&s>n?(s=Math.max(n,s*.85),e.good=0):i<1/57?++e.good>=3&&s<this.prMax&&(s=Math.min(this.prMax,s*1.1),e.good=0):e.good=0,Math.abs(s-this.pr)>.01&&(this.pr=s,this.resize())}updateLasers(){let t=0,e=this.player;if(this.state==="play"||this.state==="paused")for(let i of this.foes){if(t>=this.lasers.length)break;if(!i.alive||i.type!=="turret"||i.windup<=0||i.dummy)continue;let n=this.lasers[t++],s=n.geometry.attributes.position;s.setXYZ(0,i.center.x,i.center.y,i.center.z),s.setXYZ(1,e.pos.x,e.pos.y+1,e.pos.z),s.needsUpdate=!0;let o=1-i.windup/(.7*this.D.windup);n.material.opacity=.15+o*.6,n.visible=!0}for(;t<this.lasers.length;t++)this.lasers[t].visible=!1}updateBlinkGhost(){let t=this.disc,e=this.blinkGhost;if(!(this.state==="play"||this.state==="paused")||!t.out){e.visible=!1;return}let i=this.arena.col.raycast(t.pos.x,t.pos.y,t.pos.z,0,-1,0,40,Rr),n=i?i.y:0;e.position.set(t.pos.x,Math.max(0,n)+.05,t.pos.z),e.scale.setScalar(1+Math.sin(this.clockT*12)*.08),e.visible=!0}updateHud(t){let e=this.player,i=this.disc,n=innerWidth,s=innerHeight,o=Math.max(0,Math.round(this.hp));if(this.css("hpFill","width",o+"%"),this.txt("hpNum",String(o)),this.cls("hpBar","low",o<35),this.versus)this.updateVersusHud(t);else{this.txt("scoreTxt",this.score.toLocaleString());let x=1+Math.min(4,Math.max(0,this.combo-1)*.25);this.txt("comboTxt",this.combo>=2?`${this.combo} \uCF64\uBCF4 \xB7 \xD7${x.toFixed(2)}`:"")}this.txt("speedNum",String(Math.round(e.hSpeed*3.6)));let a=this.el("dashPips").children;if(this._pipsN!==e.dashCharges){this._pipsN=e.dashCharges;for(let x=0;x<a.length;x++)a[x].classList.toggle("on",x<e.dashCharges)}let l=i.state;this.cls("discIcon","hand",l==="hand"),this.cls("discIcon","out",l==="out"),this.cls("discIcon","ret",l==="return");let c=x=>Ci(this.S.binds[x]&&this.S.binds[x][0]),h=i.out?Math.round((1+.35*i.bounces)*100):100;this.txt("discTxt",l==="hand"?`${c("throw")} \uB358\uC9C0\uAE30`:l==="out"?`${c("throw")} \uD68C\uC218 \xB7 ${c("blink")} \uC21C\uAC04\uC774\uB3D9`:`\uB3CC\uC544\uC624\uB294 \uC911 \xB7 ${c("blink")} \uC21C\uAC04\uC774\uB3D9`),this.txt("discPow",i.out&&i.bounces>0?`\uD295\uAE40 ${i.bounces} \xB7 \uD53C\uD574 ${h}%`:""),this.cls("cross","out",i.out),this.cls("cross","hidden",!this.me.alive);let d=this.me,u=Yn[d.skill];u&&(this.txt("skillKey",Ci(this.S.binds.skill&&this.S.binds.skill[0])),this.txt("skillName",u.name),this.txt("skillCd",d.skillCd>0?d.skillCd.toFixed(1)+"s":"\uC900\uBE44"),this.css("skillFill","width",((1-d.skillCd/u.cd)*100).toFixed(1)+"%"),this.cls("skillBox","ready",d.skillCd<=0),this.cls("skillBox","active",d.reflectT>0||d.overT>0||d.healT>0)),this.cls("hud","over",d.overT>0),this.cls("hud","refl",d.reflectT>0),this.touchUI&&this.touchUI.update(this);for(let x=this.chatLines.length-1;x>=0;x--){let p=this.chatLines[x];p.t+=t,p.t>6?(p.el.remove(),this.chatLines.splice(x,1)):p.t>5&&(p.el.style.opacity=String(6-p.t))}let f=null;if(this.me.alive&&this.state==="play"&&i.state==="hand"){let x=(this._lockO||(this._lockO=new M)).copy(e.eye);x.y-=.15,f=this.aimAssist(x,e.lookDir(this._lockD||(this._lockD=new M)),!1)}else i.out&&i.lock&&i.lock.alive&&!i.hit.has(i.lock)&&(f=i.lock);f?(qt.copy(this.tInfo(f).c).project(this.camera),this.css("lock","transform",`translate(${((qt.x+1)/2*n).toFixed(1)}px,${((1-qt.y)/2*s).toFixed(1)}px)`),this.cls("lock","show",!0),this.cls("cross","lock",i.state==="hand")):(this.cls("lock","show",!1),this.cls("cross","lock",!1));let g=this.el("discMark");if(i.out&&this.state==="play"){qt.copy(i.pos).applyMatrix4(this.camera.matrixWorldInverse);let x=qt.z>0;qt.copy(i.pos).project(this.camera);let p=qt.x,m=qt.y;x&&(p=-p,m=-m);let y=x||Math.abs(p)>.94||Math.abs(m)>.9;if(y){let b=Math.max(Math.abs(p)/.94,Math.abs(m)/.9);p/=b,m/=b}this.css("discMark","transform",`translate(${((p+1)/2*n).toFixed(1)}px,${((1-m)/2*s).toFixed(1)}px)`),this.cls("discMark","edge",y),this.cls("discMark","show",!0);let v=!1;for(let b of this.assistTargets())if(this.tInfo(b).c.distanceTo(i.pos)<i.w.blinkRadius+.3&&!(b.protT>0)){v=!0;break}this.cls("discMark","cue",v),v&&this.txt("slamCue",`${Ci(this.S.binds.blink[0])}!`)}else this.cls("discMark","show",!1);this.updateThreats();for(let x=this.dnums.length-1;x>=0;x--){let p=this.dnums[x];if(p.t+=t,p.t>.9){p.el.remove(),this.dnums.splice(x,1);continue}if(qt.copy(p.pos).applyMatrix4(this.camera.matrixWorldInverse),qt.z>-.2){p.el.style.opacity=0;continue}qt.copy(p.pos).project(this.camera);let m=(qt.x+1)/2*n+p.vx*p.t,y=(1-qt.y)/2*s-40*p.t-20;p.el.style.transform=`translate(${m.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-50%) scale(${(1+Math.max(0,.15-p.t)*3).toFixed(2)})`,p.el.style.opacity=String(Math.min(1,(.9-p.t)*4))}this.dmgFx=Math.max(0,this.dmgFx-t*1.6),this.flashFx=Math.max(0,this.flashFx-t*3.5),this.dirT=Math.max(0,this.dirT-t*1.2),this.css("hurt","opacity",this.dmgFx.toFixed(2)),this.css("flash","opacity",this.flashFx.toFixed(2)),this.css("lowhp","opacity",(this.mode!=="practice"&&this.me.alive?Math.max(0,.4-this.hp/100)/.4:0).toFixed(2)),this.css("dmgDir","opacity",this.dirT.toFixed(2)),this.dirT>0&&this.css("dmgDir","transform",`rotate(${(this.dirAng||0).toFixed(3)}rad)`),this.versus||(this.mode==="arena"?(this.txt("modeTxt",this.wave?`WAVE ${this.wave}`:"WAVE \u2014"),this.txt("subTxt",this.waveState==="break"?`\uB2E4\uC74C \uC6E8\uC774\uBE0C ${Math.max(0,Math.ceil(this.breakT))}\uCD08`:`\uB0A8\uC740 \uC801 ${this.queue.length+this.foes.length}`)):(this.txt("modeTxt","\uC5F0\uC2B5\uC7A5"),this.txt("subTxt",`\uB09C\uC774\uB3C4 \uBB34\uAD00 \xB7 \uCCB4\uB825 \uBB34\uD55C \xB7 ${this.input.touch?"II":"ESC"} \uBA54\uB274`))),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.el("banner").classList.remove("show")),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&this.cls("hint","show",!1))}updateVersusHud(t){let e=this.me,i=this.match,n=ji[this.botSkill]?ji[this.botSkill].name:"";if(this.online){let o=Math.max(0,Math.ceil(i.timeLeft||0)),a=this.fighters.filter(l=>!l.netBot).length;this.txt("modeTxt",`\uC628\uB77C\uC778 \xB7 ${this.roomCode||""}`),this.txt("subTxt",`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} \xB7 ${i.limit}\uD0AC \uBA3C\uC800 \xB7 ${a}\uBA85${this.fighters.length-a?` + \uBD07 ${this.fighters.length-a}`:""} \xB7 ${Math.round(this.net.rtt)}ms${this.net.status==="reconnecting"?" \xB7 \uC7AC\uC5F0\uACB0 \uC911\u2026":""}`),this.txt("scoreTxt",`${e.kills} \uD0AC`),this.txt("comboTxt",`\uD604\uC7AC ${this.ranking().indexOf(e)+1}\uC704`)}else if(this.mode==="duel"){let o=this.fighters[1];this.txt("modeTxt","1V1"),this.txt("subTxt",`${i.limit}\uD0AC \uBA3C\uC800 \xB7 ${o?o.name:""} (${n})`),this.txt("scoreTxt",`${e.kills} : ${o?o.kills:0}`),this.txt("comboTxt",e.streak>=2?`${e.streak}\uC5F0\uC18D \uCC98\uCE58`:"")}else{let o=Math.max(0,Math.ceil(i.timeLeft));this.txt("modeTxt","FFA"),this.txt("subTxt",`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} \xB7 ${i.limit}\uD0AC \uBA3C\uC800 \xB7 \uBD07 ${n}`),this.txt("scoreTxt",`${e.kills} \uD0AC`),this.txt("comboTxt",`\uD604\uC7AC ${this.ranking().indexOf(e)+1}\uC704`)}if(this._boardT-=t,this._boardT<=0){this._boardT=.2;let o=this.ranking().map(a=>`<div class="${a===e?"me":""}${a.alive?"":" dead"}"><i style="background:${a.css}"></i><span>${a.name}</span><b>${a.kills}</b><small>${a.deaths}</small></div>`).join("");o!==this._boardHtml&&(this._boardHtml=o,this.el("board").innerHTML=o)}let s=!e.alive&&!i.over;if(this.cls("deathMsg","show",s),s){let o=this.deathInfo&&this.deathInfo.by;this.txt("deathBy",o?`${o.name}\uC5D0\uAC8C \uB2F9\uD568`:"\uC4F0\uB7EC\uC9D0"),this.css("deathBy","color",o?o.css:""),this.txt("deathT",`\uBD80\uD65C\uAE4C\uC9C0 ${Math.max(0,e.respawnT).toFixed(1)}\uCD08`)}}updateThreats(){let t=this.el("threats");if(t===En)return;if(!this._thr){this._thr=[];for(let i=0;i<6;i++){let n=document.createElement("i");t.appendChild(n),this._thr.push(n)}}let e=0;if(this.versus&&this.me.alive){let i=this.player,n=i.pos.x,s=i.pos.y+.9,o=i.pos.z;for(let a of this.fighters){if(a===this.me||e>=this._thr.length)continue;let l=a.disc;if(l.state==="hand"||l.hit.has(this.me))continue;let c=l.pos.x-n,h=l.pos.y-s,d=l.pos.z-o,u=l.vel.x-i.vel.x,f=l.vel.y-i.vel.y,g=l.vel.z-i.vel.z,x=u*u+f*f+g*g;if(x<1)continue;let p=-(c*u+h*f+d*g)/x;if(p<0||p>.7||Math.hypot(c+u*p,h+f*p,d+g*p)>2.4)continue;qt.copy(l.pos).applyMatrix4(this.camera.matrixWorldInverse);let m=this._thr[e++];m.style.transform=`rotate(${Math.atan2(qt.x,-qt.z).toFixed(3)}rad) translateY(-86px) scale(${p<.25?1.5:1})`,m.style.opacity="1",m.className=p<.25?"":"near"}}for(let i of this.foes){if(e>=this._thr.length)break;if(!i.alive||i.windup<=0||i.dummy)continue;qt.copy(i.center).applyMatrix4(this.camera.matrixWorldInverse);let n=Math.atan2(qt.x,-qt.z),s=this._thr[e++];s.style.transform=`rotate(${n.toFixed(3)}rad) translateY(-86px)`,s.style.opacity="1",s.className=i.type==="shield"?"near":""}for(;e<this._thr.length;e++)this._thr[e].style.opacity="0"}};zd(Ir);var Pa=class{constructor(t,e){this.canvas=t,this.S=e,this.down=new Set,this.edges=new Set,this.releases=new Set,this.dx=0,this.dy=0,this.locked=!1,this.touch=!1,this.axis={x:0,y:0},this.capture=null,this.onKey=null;let i=n=>"Mouse"+n;addEventListener("keydown",n=>{if(this.capture){n.preventDefault();let s=this.capture;this.capture=null,s(n.code);return}this.onKey&&this.onKey(n)||(this.locked&&n.preventDefault(),this.down.has(n.code)||this.edges.add(n.code),this.down.add(n.code))}),addEventListener("keyup",n=>{this.down.has(n.code)&&this.releases.add(n.code),this.down.delete(n.code)}),addEventListener("mousedown",n=>{if(this.capture){n.preventDefault();let o=this.capture;this.capture=null,o(i(n.button));return}if(!this.locked)return;let s=i(n.button);this.down.has(s)||this.edges.add(s),this.down.add(s)}),addEventListener("mouseup",n=>{let s=i(n.button);this.down.has(s)&&this.releases.add(s),this.down.delete(s)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{if(!this.locked)return;let s=Math.abs(n.movementX)>600?0:n.movementX,o=Math.abs(n.movementY)>600?0:n.movementY;this.dx+=s,this.dy+=o}),addEventListener("blur",()=>{this.down.clear()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||this.down.clear(),this.onLockChange&&this.onLockChange(this.locked)})}lock(){try{let t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}unlock(){document.pointerLockElement&&document.exitPointerLock()}is(t){if(this.down.has("T_"+t))return!0;let e=this.S.binds[t]||[];for(let i=0;i<e.length;i++)if(this.down.has(e[i]))return!0;return!1}pressed(t){if(this.edges.has("T_"+t))return!0;let e=this.S.binds[t]||[];for(let i=0;i<e.length;i++)if(this.edges.has(e[i]))return!0;return!1}released(t){if(this.releases.has("T_"+t))return!0;let e=this.S.binds[t]||[];for(let i=0;i<e.length;i++)if(this.releases.has(e[i]))return!0;return!1}consumeEdges(){this.edges.clear(),this.releases.clear()}takeMouse(){let t=[this.dx,this.dy];return this.dx=0,this.dy=0,t}};var Ia=class{constructor(t,e,{onPause:i}={}){this.input=t,this.S=e,this.onPause=i,this.joy=null,this.look=new Map,this.btn=new Map;let n=this.root=document.createElement("div");n.id="touch",n.className="hidden",n.innerHTML=`
      <div class="joy" id="tJoy"><div class="knob"></div></div>
      <button class="tb throw" data-a="throw"><b>\uB358\uC9C0\uAE30</b></button>
      <button class="tb blink" data-a="blink"><b>\uC21C\uAC04\uC774\uB3D9</b></button>
      <button class="tb jump" data-a="jump"><b>\uC810\uD504</b></button>
      <button class="tb dash" data-a="dash"><b>\uB300\uC2DC</b></button>
      <button class="tb skill" data-a="skill"><b>\uC2A4\uD0AC</b><i></i></button>
      <button class="tpause" id="tPause">II</button>`,document.body.appendChild(n),this.joyEl=n.querySelector("#tJoy"),this.knob=this.joyEl.querySelector(".knob"),this.skillEl=n.querySelector(".skill"),this.throwEl=n.querySelector(".throw");let s={passive:!1};n.addEventListener("touchstart",o=>this.start(o),s),n.addEventListener("touchmove",o=>this.move(o),s),n.addEventListener("touchend",o=>this.end(o),s),n.addEventListener("touchcancel",o=>this.end(o),s),n.querySelector("#tPause").addEventListener("touchend",o=>{o.preventDefault(),o.stopPropagation(),this.onPause&&this.onPause()})}show(t){this.root.classList.toggle("hidden",!t),t||this.reset()}reset(){this.joy=null,this.look.clear();for(let t of this.btn.values())this.input.down.delete("T_"+t.a);this.btn.clear(),this.input.axis.x=this.input.axis.y=0,this.joyEl.classList.remove("on")}start(t){t.preventDefault();for(let e of t.changedTouches){let i=e.target.closest&&e.target.closest(".tb");if(i){let n=i.dataset.a;this.input.down.add("T_"+n),this.input.edges.add("T_"+n),this.btn.set(e.identifier,{a:n,x:e.clientX,y:e.clientY,el:i}),i.classList.add("on");continue}e.target.id!=="tPause"&&(e.clientX<innerWidth*.42&&!this.joy?(this.joy={id:e.identifier,x:e.clientX,y:e.clientY},this.joyEl.style.left=e.clientX+"px",this.joyEl.style.top=e.clientY+"px",this.joyEl.classList.add("on"),this.knob.style.transform="translate(-50%,-50%)"):this.look.set(e.identifier,{x:e.clientX,y:e.clientY}))}}move(t){t.preventDefault();let e=2.4*(this.S.touchSens||1);for(let i of t.changedTouches){if(this.joy&&i.identifier===this.joy.id){let s=Math.min(innerWidth,innerHeight)*.12,o=i.clientX-this.joy.x,a=i.clientY-this.joy.y,l=Math.hypot(o,a);l>s&&(o*=s/l,a*=s/l),this.knob.style.transform=`translate(calc(-50% + ${o}px), calc(-50% + ${a}px))`;let c=o/s,h=-a/s;this.input.axis.x=Math.abs(c)>.22?c:0,this.input.axis.y=Math.abs(h)>.22?h:0;continue}let n=this.look.get(i.identifier)||(this.btn.get(i.identifier)?.a==="throw"?this.btn.get(i.identifier):null);n&&(this.input.dx+=(i.clientX-n.x)*e,this.input.dy+=(i.clientY-n.y)*e,n.x=i.clientX,n.y=i.clientY)}}end(t){t.preventDefault();for(let e of t.changedTouches){if(this.joy&&e.identifier===this.joy.id){this.joy=null,this.input.axis.x=this.input.axis.y=0,this.joyEl.classList.remove("on");continue}let i=this.btn.get(e.identifier);if(i){this.input.down.delete("T_"+i.a),this.input.releases.add("T_"+i.a),i.el.classList.remove("on"),this.btn.delete(e.identifier);continue}this.look.delete(e.identifier)}}update(t){let e=t.disc,i=t.me,n=e.state==="hand"?"\uB358\uC9C0\uAE30":e.state==="out"?"\uD68C\uC218":"\u2026";this._tl!==n&&(this._tl=n,this.throwEl.querySelector("b").textContent=n);let s=i.skillCd>0?Math.ceil(i.skillCd)+"":"";this._cd!==s&&(this._cd=s,this.skillEl.querySelector("i").textContent=s,this.skillEl.classList.toggle("cool",!!s))}},Jd=()=>window.REDSHIFT_APP==="android"||!!(window.matchMedia&&matchMedia("(pointer: coarse)").matches);var Wy=Object.fromEntries(Object.values(Di).map(r=>[r.id,r.name])),bt=r=>document.getElementById(r),_t=Xd(),Lh=bt("c"),he=new Pa(Lh,_t),tt;try{tt=new Ir(Lh,_t,he)}catch(r){throw bt("loading").innerHTML=`<div class="err">WebGL\uC744 \uC2DC\uC791\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694.<br><small>${String(r&&r.message||r)}</small></div>`,r}tt.records=qd();var Qi=_t.touchUI==="on"||_t.touchUI!=="off"&&Jd();he.touch=Qi;document.body.classList.toggle("touch",Qi);Qi&&(tt.touchUI=new Ia(he,_t,{onPause:()=>Lr()}));var La=window.REDSHIFT_APP||"";function Kd(r){if(La==="android"){r&&r();return}if(La==="exe"&&window.rsFullscreen){window.rsFullscreen(!0).catch(()=>{}),r&&r();return}if(document.fullscreenElement)r&&r();else{let t=document.documentElement.requestFullscreen?.();t&&t.then(r).catch(()=>{})}}function Xy(){if(La==="exe"&&window.rsFullscreen){window.rsFullscreen(!1).catch(()=>{});return}document.fullscreenElement&&document.exitFullscreen?.()}La==="exe"&&addEventListener("keydown",r=>{r.code==="F11"&&window.rsFullscreen&&(r.preventDefault(),window.rsFullscreen(null).catch(()=>{}))});function qy(){try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}tt.saveRecords=()=>Yd(tt.records);var Yy=["menu","pause","settings","controls","death","online"];function Qe(r){Yy.forEach(t=>bt(t).classList.toggle("hidden",t!==r))}var qs="menu";function Rh(r){tt.start(r),jd()}function jd(){if(document.body.classList.add("playing"),document.body.classList.toggle("show-online",!!tt.online),document.body.classList.toggle("hide-online",!tt.online),Qe(null),bt("hud").classList.remove("hidden"),bt("clickTo").classList.add("hidden"),Qi){he.locked=!0,tt.touchUI.show(!0),Kd(qy);return}_t.full&&Kd(()=>navigator.keyboard?.lock?.(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ","KeyF","Space","ShiftLeft"]).catch(()=>{})),he.lock(),setTimeout(()=>{tt.state==="play"&&!he.locked&&!he.touch&&bt("clickTo").classList.remove("hidden")},400)}function Lr(){tt.state!=="play"||tt.menuOpen||(tt.online?tt.menuOpen=!0:tt.state="paused",Qi&&tt.touchUI.show(!1),document.body.classList.toggle("show-online",!!tt.online),document.body.classList.toggle("hide-online",!tt.online),Qe("pause"))}function Qd(){tt.menuOpen=!1,Qe(null),he.touch?(tt.state==="paused"&&(tt.state="play"),tt.touchUI.show(!0)):(bt("clickTo").classList.remove("hidden"),he.lock())}function Dh(){tt.online&&tt.leaveOnline(),tt.menuOpen=!1,Qi&&tt.touchUI.show(!1),document.body.classList.remove("playing"),tt.state="menu",tt.clear(),Qe("menu"),bt("hud").classList.add("hidden"),bt("clickTo").classList.add("hidden"),he.unlock(),Xy(),nf()}tt.onEnd=(r,t)=>{tt.state="dead",Qi&&tt.touchUI.show(!1),he.unlock(),bt("endTitle").textContent=r,bt("endStats").innerHTML=t.map(([e,i])=>`<div class="stat"><span>${e}</span><b>${i}</b></div>`).join(""),bt("hud").classList.add("hidden"),Qe("death")};he.onLockChange=r=>{r?(bt("clickTo").classList.add("hidden"),(tt.state==="paused"||tt.menuOpen)&&(tt.state==="paused"&&(tt.state="play"),tt.menuOpen=!1,Qe(null))):tt.state==="play"&&!he.touch&&Lr()};he.onKey=r=>{if(r.code==="Escape"){if(tt.state==="play"&&!tt.menuOpen)return he.unlock(),Lr(),!0;if(!bt("settings").classList.contains("hidden")||!bt("controls").classList.contains("hidden")||!bt("online").classList.contains("hidden"))return Qe(qs),!0}return!1};window.REDSHIFT_BACK=()=>{let r=t=>!bt(t).classList.contains("hidden");return tt.state==="play"&&!tt.menuOpen?(Lr(),!0):r("settings")||r("controls")||r("online")?(Qe(qs),!0):r("pause")?(Qd(),!0):r("death")?(Dh(),!0):!1};window.REDSHIFT_BACKGROUND=()=>{tt.state==="play"&&!tt.menuOpen&&(he.unlock(),Lr())};document.addEventListener("visibilitychange",()=>{document.hidden&&Qi&&window.REDSHIFT_BACKGROUND()});Lh.addEventListener("mousedown",()=>{!Qi&&(tt.state==="play"||tt.state==="paused")&&!he.locked&&bt("pause").classList.contains("hidden")&&he.lock()});bt("clickTo").addEventListener("mousedown",()=>he.lock());addEventListener("beforeunload",r=>{tt.state==="play"&&(r.preventDefault(),r.returnValue="")});document.querySelectorAll("[data-act]").forEach(r=>r.addEventListener("click",()=>{tt.audio.init(),tt.audio.setVolumes(_t.sfx,_t.music),tt.audio.ui();let t=r.dataset.act;t==="arena"||t==="practice"||t==="duel"||t==="ffa"?Rh(t):t==="online"?(qs="menu",Uh(),Qe("online")):t==="settings"?(qs=tt.state==="paused"||tt.menuOpen?"pause":"menu",Zy(),Qe("settings")):t==="controls"?(qs=tt.state==="paused"||tt.menuOpen?"pause":"menu",$y(),Qe("controls")):t==="back"?Qe(qs):t==="resume"?Qd():t==="restart"?Rh(tt.mode):t==="quit"&&Dh()}));function gi(r,t=""){let e=bt("oStatus");e.textContent=r,e.className=t}function tf(r){return String(r||"").replace(/[<>&"'`\\]/g,"").trim().slice(0,12)||_t.name}async function Uh(){if(bt("oName").value=_t.name,tt.net.open){bt("oServer").value=tt.net.base,gi("\uC5F0\uACB0\uB428","ok"),tt.net.send({t:"list"});return}if(bt("oServer").value=wn.defaultServer(),!bt("oServer").value){gi("\uC11C\uBC84 \uCC3E\uB294 \uC911\u2026");let r=await wn.discover();r&&!bt("oServer").value&&(bt("oServer").value=r)}bt("oServer").value?Da():gi("\uC11C\uBC84 \uC8FC\uC18C\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694 (\uC6F9 \uBC84\uC804 \uC8FC\uC18C \uADF8\uB300\uB85C, \uC608: https://redshift-xxxx.run.app)")}async function Da(){let r=bt("oServer").value.trim();if(_t.name=tf(bt("oName").value),Ri(_t),!r)return gi("\uC11C\uBC84 \uC8FC\uC18C\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694","bad"),!1;let t={name:_t.name,weapon:_t.weapon,skill:_t.skill};if(tt.net.open&&tt.net.base===r)return tt.net.send({t:"hello",...t}),!0;tt.net.ws&&tt.net.close(),gi("\uC5F0\uACB0 \uC911\u2026");try{let e=await tt.net.connect(r,t);return gi(`\uC5F0\uACB0\uB428 \xB7 \uC5F4\uB9B0 \uBC29 ${e.rooms.length}\uAC1C`,"ok"),ef(e.rooms),!0}catch(e){return gi(`${e.message} \u2014 \uC11C\uBC84 \uC8FC\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694`,"bad"),!1}}function ef(r){let t=bt("oRooms");if(!r.length){t.innerHTML='<div class="empty">\uC544\uC9C1 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC5B4\uC694 \u2014 \uBE60\uB978 \uCC38\uAC00\uB098 \uBC29 \uB9CC\uB4E4\uAE30\uB97C \uB20C\uB7EC \uBCF4\uC138\uC694</div>';return}t.innerHTML="";for(let e of r){let i=document.createElement("div");i.className="room";let n=document.createElement("span");n.textContent=e.name;let s=document.createElement("b");s.textContent=`${e.code} \xB7 ${Wy[e.map]||""} \xB7 ${e.humans}\uBA85${e.bots?" + \uBD07 "+e.bots:""} / ${e.max}`,i.append(n,s),i.onclick=()=>Ua({t:"join",code:e.code}),t.append(i)}}async function Ua(r){tt.audio.init(),tt.audio.ui(),await Da()&&(gi("\uB4E4\uC5B4\uAC00\uB294 \uC911\u2026"),tt.net.send(r))}tt.onRooms=r=>{bt("online").classList.contains("hidden")||ef(r)};tt.onNetError=r=>gi(r,"bad");tt.onJoined=()=>jd();tt.onNetDropped=()=>{Dh(),Uh(),Qe("online"),gi("\uC11C\uBC84\uC640 \uC5F0\uACB0\uC774 \uB04A\uACBC\uC5B4\uC694","bad")};tt.net.onStatus=(r,t)=>{r==="reconnecting"&&gi("\uB2E4\uC2DC \uC5F0\uACB0\uD558\uB294 \uC911\u2026")};bt("oQuick").onclick=()=>Ua({t:"quick"});bt("oCreateBtn").onclick=()=>bt("oCreateOpts").classList.toggle("hidden");bt("oCreate").onclick=()=>Ua({t:"create",name:bt("oRoomName").value||`${tf(bt("oName").value)}\uC758 \uBC29`,bots:+bt("oBots").value,botSkill:bt("oBotSkill").value,limit:+bt("oLimit").value,priv:bt("oPriv").value==="1",map:bt("oMap").value});bt("oJoin").onclick=()=>{let r=bt("oCode").value.trim().toUpperCase();r.length===4?Ua({t:"join",code:r}):gi("\uCF54\uB4DC 4\uAE00\uC790\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694","bad")};bt("oRefresh").onclick=async()=>{await Da()&&tt.net.send({t:"list"})};bt("oServer").addEventListener("change",()=>{wn.save(bt("oServer").value.trim()),tt.net.ws&&tt.net.close(),bt("oServer").value.trim()?Da():Uh()});function Ys(){document.querySelectorAll("#difficulty button").forEach(r=>r.classList.toggle("on",r.dataset.df===_t.difficulty)),document.querySelectorAll("#botskill button").forEach(r=>r.classList.toggle("on",r.dataset.bs===_t.botSkill)),document.querySelectorAll("#weapons button").forEach(r=>r.classList.toggle("on",r.dataset.wp===_t.weapon)),document.querySelectorAll("#skills button").forEach(r=>r.classList.toggle("on",r.dataset.sk===_t.skill)),document.querySelectorAll("#maps button").forEach(r=>r.classList.toggle("on",r.dataset.mp===(_t.map||"random")))}document.querySelectorAll("#maps button").forEach(r=>r.addEventListener("click",()=>{_t.map=r.dataset.mp,Ri(_t),Ys(),tt.audio.init(),tt.audio.ui()}));document.querySelectorAll("#weapons button").forEach(r=>r.addEventListener("click",()=>{_t.weapon=r.dataset.wp,Ri(_t),Ys(),tt.audio.init(),tt.audio.ui()}));document.querySelectorAll("#skills button").forEach(r=>r.addEventListener("click",()=>{_t.skill=r.dataset.sk,Ri(_t),Ys(),tt.audio.init(),tt.audio.ui()}));document.querySelectorAll("#botskill button").forEach(r=>r.addEventListener("click",()=>{_t.botSkill=r.dataset.bs,Ri(_t),Ys(),tt.audio.init(),tt.audio.ui()}));document.querySelectorAll("#difficulty button").forEach(r=>r.addEventListener("click",()=>{_t.difficulty=r.dataset.df,Ri(_t),Ys(),tt.audio.init(),tt.audio.ui()}));Ys();function $y(){bt("ctrlGrid").innerHTML=wh.map(([r,t])=>`<div><span>${t}</span><b>${_t.binds[r].map(Ci).join(" / ")}</b></div>`).join("")+"<div><span>\uC77C\uC2DC\uC815\uC9C0</span><b>ESC</b></div>"}function Zy(){let r=(e,i,n=s=>s)=>{let s=bt("s"+e),o=bt("v"+e);s.value=_t[i],o.textContent=n(_t[i]),s.oninput=()=>{_t[i]=parseFloat(s.value),o.textContent=n(_t[i]),Ri(_t),Ih()}};r("Sens","sens",e=>{let i=2*Math.PI/(e*.0012)/800*2.54;return bt("cm360").textContent=`(800DPI \uAE30\uC900 360\xB0 = ${i.toFixed(1)}cm)`,(+e).toFixed(2)}),r("Fov","fov"),r("FovFx","fovFx"),r("Shake","shake",e=>(+e).toFixed(2)),r("Tilt","tilt",e=>(+e).toFixed(2)),r("Bob","bob",e=>(+e).toFixed(2)),r("Sfx","sfx",e=>Math.round(e*100)),r("Music","music",e=>Math.round(e*100));let t=(e,i,n=!0,s)=>{let o=bt("s"+e);o.value=String(_t[i]),o.onchange=()=>{_t[i]=n?+o.value:o.value,Ri(_t),Ih(),s&&s()}};t("AimAssist","aimAssist",!1),t("AutoHop","autoHop"),t("TouchUI","touchUI",!1,()=>{confirm("\uC870\uC791 \uBC29\uC2DD\uC744 \uBC14\uAFB8\uB824\uBA74 \uC0C8\uB85C\uACE0\uCE68\uC774 \uD544\uC694\uD574\uC694. \uC9C0\uAE08 \uD560\uAE4C\uC694?")&&(tt.state="menu",location.reload())}),r("TouchSens","touchSens",e=>(+e).toFixed(2)),t("TouchLayout","touchLayout",!1),t("KeyHints","keyHints"),t("Fps","fps"),t("Full","full"),t("Adaptive","adaptive",!0,()=>{_t.adaptive||(tt.pr=tt.prMax,tt.resize())}),t("Quality","quality",!1,()=>{confirm("\uADF8\uB798\uD53D \uD488\uC9C8\uC744 \uBC14\uAFB8\uB824\uBA74 \uC0C8\uB85C\uACE0\uCE68\uC774 \uD544\uC694\uD574\uC694. \uC9C0\uAE08 \uC0C8\uB85C\uACE0\uCE68\uD560\uAE4C\uC694?")&&(tt.state="menu",location.reload())}),Ch()}var Ah=null;function Ch(){bt("binds").innerHTML=wh.map(([r,t])=>`<div class="row k"><span>${t}</span><span><button class="key" data-a="${r}" data-i="0">${Ci(_t.binds[r][0])}</button> <button class="key" data-a="${r}" data-i="1">${Ci(_t.binds[r][1])}</button></span></div>`).join("")+'<div class="row k"><span></span><button class="key" id="resetBinds">\uAE30\uBCF8\uAC12\uC73C\uB85C</button></div>',bt("binds").querySelectorAll(".key[data-a]").forEach(r=>r.onclick=t=>{t.stopPropagation(),!Ah&&(Ah=r,r.textContent="\uD0A4 \uC785\uB825\u2026",r.classList.add("listen"),setTimeout(()=>{he.capture=e=>{let i=r.dataset.a,n=+r.dataset.i;if(Ah=null,e!=="Escape"){for(let o in _t.binds)_t.binds[o]=_t.binds[o].map(a=>a===e?void 0:a);let s=[..._t.binds[i]];s[n]=e,_t.binds[i]=s;for(let o in _t.binds)_t.binds[o]=_t.binds[o].filter(Boolean)}Ri(_t),Ch(),Ph()}},50))}),bt("resetBinds").onclick=()=>{_t.binds=JSON.parse(JSON.stringify(Sa)),Ri(_t),Ch(),Ph()}}function Ph(){let r=e=>_t.binds[e]&&_t.binds[e][0]?Ci(_t.binds[e][0]):"\u2014",t=[["throw","\uB358\uC9C0\uAE30 / \uD68C\uC218"],["blink","\uC21C\uAC04\uC774\uB3D9"],["skill","\uC2A4\uD0AC"],["dash","\uB300\uC2DC"],["jump","\uC810\uD504 \xD72"]];bt("keyHints").innerHTML=t.map(([e,i])=>`<span><b>${r(e)}</b>${i}</span>`).join(""),bt("keyHints").classList.toggle("hidden",!_t.keyHints),document.querySelectorAll("[data-key]").forEach(e=>{e.textContent=r(e.dataset.key)})}function Ih(){tt.audio.setVolumes(_t.sfx,_t.music),Ph(),bt("fps").classList.toggle("hidden",!_t.fps);let r=Math.min(screen.width||innerWidth,screen.height||innerHeight)>=600;document.body.classList.toggle("raised",_t.touchLayout==="raised"||_t.touchLayout==="auto"&&r)}Ih();function nf(){let r=tt.records,t=[];r.score&&t.push(`\uCD5C\uACE0 ${r.score.toLocaleString()}\uC810 \xB7 WAVE ${r.wave}`),(r.duelWin||r.duelLose)&&t.push(`1V1 ${r.duelWin||0}\uC2B9 ${r.duelLose||0}\uD328`),r.ffaBest&&t.push(`FFA \uCD5C\uACE0 ${r.ffaBest}\uC704${r.ffaWin?` \xB7 1\uC704 ${r.ffaWin}\uBC88`:""}`),r.combo&&t.push(`\uCD5C\uACE0 \uCF64\uBCF4 ${r.combo}`),r.speed&&t.push(`\uCD5C\uACE0 \uC18D\uB3C4 ${Math.round(r.speed*3.6)} KM/H`),bt("best").innerHTML=t.join(" &nbsp;\xB7&nbsp; ")}Qe("menu");nf();bt("loading").classList.add("hidden");function sf(r){requestAnimationFrame(sf),tt.frame(r)}requestAnimationFrame(sf);window.__game={game:tt,S:_t,input:he,start:r=>Rh(r),sim(r,t=[]){let e=tt,i=1/120;for(let n=0;n<r&&e.state==="play";n+=i)t.forEach(s=>he.down.add(s)),e.tick(i);t.forEach(n=>he.down.delete(n))},press(r){he.edges.add(r),he.down.add(r)},release(r){he.down.delete(r),he.releases.add(r)}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
