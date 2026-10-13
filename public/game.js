(()=>{var jl="169";var Gu=0,zc=1,Wu=2;var Xh=1,Ql=2,Ai=3,ji=0,Ve=1,He=2,Ji=0,qn=1,Bc=2,Oc=3,kc=4,Xu=5,pn=100,qu=101,Yu=102,$u=103,Zu=104,Ju=200,Ku=201,ju=202,Qu=203,Ao=204,Ro=205,td=206,ed=207,id=208,nd=209,sd=210,rd=211,ad=212,od=213,ld=214,Co=0,Po=1,Io=2,Kn=3,Lo=4,Do=5,Uo=6,No=7,qh=0,cd=1,hd=2,Ki=0,ud=1,dd=2,fd=3,pd=4,md=5,gd=6,tc=7;var Yh=300,jn=301,Qn=302,Fo=303,zo=304,da=306,Is=1e3,gn=1001,Bo=1002,ti=1003,xd=1004;var Zs=1005;var ci=1006,Wa=1007;var xn=1008;var Di=1009,$h=1010,Zh=1011,Ls=1012,ec=1013,yn=1014,Pi=1015,ks=1016,ic=1017,nc=1018,ts=1020,Jh=35902,Kh=1021,jh=1022,ui=1023,Qh=1024,tu=1025,Yn=1026,es=1027,eu=1028,sc=1029,iu=1030,rc=1031;var ac=1033,Rr=33776,Cr=33777,Pr=33778,Ir=33779,Oo=35840,ko=35841,Ho=35842,Vo=35843,Go=36196,Wo=37492,Xo=37496,qo=37808,Yo=37809,$o=37810,Zo=37811,Jo=37812,Ko=37813,jo=37814,Qo=37815,tl=37816,el=37817,il=37818,nl=37819,sl=37820,rl=37821,Lr=36492,al=36494,ol=36495,nu=36283,ll=36284,cl=36285,hl=36286;var Ur=2300,ul=2301,Xa=2302,Hc=2400,Vc=2401,Gc=2402;var yd=3200,_d=3201;var su=0,vd=1,Zi="",ke="srgb",en="srgb-linear",oc="display-p3",fa="display-p3-linear",Nr="linear",he="srgb",Fr="rec709",zr="p3";var An=7680;var Wc=519,Md=512,bd=513,Sd=514,ru=515,wd=516,Ed=517,Td=518,Ad=519,dl=35044,nn=35048;var Xc="300 es",Ii=2e3,Br=2001,Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=1234567,$n=Math.PI/180,Ds=180/Math.PI;function Li(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function lc(s,t){return(s%t+t)%t}function Rd(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Cd(s,t,e){return s!==t?(e-s)/(t-s):0}function As(s,t,e){return(1-e)*s+e*t}function Pd(s,t,e,i){return As(s,t,1-Math.exp(-e*i))}function Id(s,t=1){return t-Math.abs(lc(s,t*2)-t)}function Ld(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Dd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ud(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Nd(s,t){return s+Math.random()*(t-s)}function Fd(s){return s*(.5-Math.random())}function zd(s){s!==void 0&&(qc=s);let t=qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bd(s){return s*$n}function Od(s){return s*Ds}function kd(s){return(s&s-1)===0&&s!==0}function Hd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gd(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Zt={DEG2RAD:$n,RAD2DEG:Ds,generateUUID:Li,clamp:Ae,euclideanModulo:lc,mapLinear:Rd,inverseLerp:Cd,lerp:As,damp:Pd,pingpong:Id,smoothstep:Ld,smootherstep:Dd,randInt:Ud,randFloat:Nd,randFloatSpread:Fd,seededRandom:zd,degToRad:Bd,radToDeg:Od,isPowerOfTwo:kd,ceilPowerOfTwo:Hd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Gd,normalize:ie,denormalize:hi},ot=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class s{constructor(t,e,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=n[0],p=n[3],m=n[6],_=n[1],v=n[4],w=n[7],C=n[2],T=n[5],A=n[8];return r[0]=a*x+o*_+l*C,r[3]=a*p+o*v+l*T,r[6]=a*m+o*w+l*A,r[1]=c*x+h*_+d*C,r[4]=c*p+h*v+d*T,r[7]=c*m+h*w+d*A,r[2]=u*x+f*_+g*C,r[5]=u*p+f*v+g*T,r[8]=u*m+f*w+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qa=new zt;function au(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wd(){let s=Or("canvas");return s.style.display="block",s}var Yc={};function Dr(s){s in Yc||(Yc[s]=!0,console.warn(s))}function Xd(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function qd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $c=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zc=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[en]:{transfer:Nr,primaries:Fr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[ke]:{transfer:he,primaries:Fr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fa]:{transfer:Nr,primaries:zr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Zc),fromReference:s=>s.applyMatrix3($c)},[oc]:{transfer:he,primaries:zr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Zc),fromReference:s=>s.applyMatrix3($c).convertLinearToSRGB()}},$d=new Set([en,fa]),te={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!$d.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=xs[t].toReference,n=xs[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return xs[s].primaries},getTransfer:function(s){return s===Zi?Nr:xs[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(xs[t].luminanceCoefficients)}};function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ya(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Rn,fl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rn===void 0&&(Rn=Or("canvas")),Rn.width=t.width,Rn.height=t.height;let i=Rn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zn(e[i]/255)*255):e[i]=Zn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zd=0,kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push($a(n[a].image)):r.push($a(n[a]))}else r=$a(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function $a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jd=0,Ze=class s extends Qi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=gn,n=gn,r=ci,a=xn,o=ui,l=Di,c=s.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Li(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Yh;Ze.DEFAULT_ANISOTROPY=1;var ge=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,w=(f+1)/2,C=(m+1)/2,T=(h+u)/4,A=(d+x)/4,P=(g+p)/4;return v>w&&v>C?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):w>C?w<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(w),i=T/n,r=P/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=A/r,n=P/r),this.set(i,n,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends Qi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ze(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new kr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends pl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Hr=class extends Ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends Ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ze=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let p=1-o,m=l*u+c*f+h*g+d*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,m*_);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C}let w=o*_;if(l=l*p+u*w,c=c*p+f*w,h=h*p+g*w,d=d*p+x*w,p===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new S,Jc=new ze,_n=class{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Ks.subVectors(this.max,ys),Cn.subVectors(t.a,ys),Pn.subVectors(t.b,ys),In.subVectors(t.c,ys),Gi.subVectors(Pn,Cn),Wi.subVectors(In,Pn),on.subVectors(Cn,In);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-on.z,on.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,on.z,0,-on.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-on.y,on.x,0];return!Ja(e,Cn,Pn,In,Ks)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,Cn,Pn,In,Ks))?!1:(js.crossVectors(Gi,Wi),e=[js.x,js.y,js.z],Ja(e,Cn,Pn,In,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bi=[new S,new S,new S,new S,new S,new S,new S,new S],ai=new S,Js=new _n,Cn=new S,Pn=new S,In=new S,Gi=new S,Wi=new S,on=new S,ys=new S,Ks=new S,js=new S,ln=new S;function Ja(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ln.fromArray(s,r);let o=n.x*Math.abs(ln.x)+n.y*Math.abs(ln.y)+n.z*Math.abs(ln.z),l=t.dot(ln),c=e.dot(ln),h=i.dot(ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Kd=new _n,_s=new S,Ka=new S,vn=class{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Kd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);let e=_s.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(_s,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Ka)),this.expandByPoint(_s.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new S,ja=new S,Qs=new S,Xi=new S,Qa=new S,tr=new S,to=new S,Us=class{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ja.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(ja);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Qs),o=Xi.dot(this.direction),l=-Xi.dot(Qs),c=Xi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ja).addScaledVector(Qs,u),f}intersectSphere(t,e){Si.subVectors(t.center,this.origin);let i=Si.dot(this.direction),n=Si.dot(Si)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,n,r){Qa.subVectors(e,t),tr.subVectors(i,t),to.crossVectors(Qa,tr);let a=this.direction.dot(to),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,t);let l=o*this.direction.dot(tr.crossVectors(Xi,tr));if(l<0)return null;let c=o*this.direction.dot(Qa.cross(Xi));if(c<0||l+c>a)return null;let h=-o*Xi.dot(to);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class s{constructor(t,e,i,n,r,a,o,l,c,h,d,u,f,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,u,f,g,x,p)}set(t,e,i,n,r,a,o,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Ln.setFromMatrixColumn(t,0).length(),r=1/Ln.setFromMatrixColumn(t,1).length(),a=1/Ln.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,Qd)}lookAt(t,e,i){let n=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),qi.crossVectors(i,Ye),qi.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),qi.crossVectors(i,Ye)),qi.normalize(),er.crossVectors(Ye,qi),n[0]=qi.x,n[4]=er.x,n[8]=Ye.x,n[1]=qi.y,n[5]=er.y,n[9]=Ye.y,n[2]=qi.z,n[6]=er.z,n[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],_=i[3],v=i[7],w=i[11],C=i[15],T=n[0],A=n[4],P=n[8],B=n[12],y=n[1],M=n[5],L=n[9],N=n[13],O=n[2],X=n[6],z=n[10],Y=n[14],V=n[3],nt=n[7],it=n[11],lt=n[15];return r[0]=a*T+o*y+l*O+c*V,r[4]=a*A+o*M+l*X+c*nt,r[8]=a*P+o*L+l*z+c*it,r[12]=a*B+o*N+l*Y+c*lt,r[1]=h*T+d*y+u*O+f*V,r[5]=h*A+d*M+u*X+f*nt,r[9]=h*P+d*L+u*z+f*it,r[13]=h*B+d*N+u*Y+f*lt,r[2]=g*T+x*y+p*O+m*V,r[6]=g*A+x*M+p*X+m*nt,r[10]=g*P+x*L+p*z+m*it,r[14]=g*B+x*N+p*Y+m*lt,r[3]=_*T+v*y+w*O+C*V,r[7]=_*A+v*M+w*X+C*nt,r[11]=_*P+v*L+w*z+C*it,r[15]=_*B+v*N+w*Y+C*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*d-n*c*d-r*o*u+i*c*u+n*o*f-i*l*f)+x*(+e*l*f-e*c*u+r*a*u-n*a*f+n*c*h-r*l*h)+p*(+e*c*d-e*o*f-r*a*d+i*a*f+r*o*h-i*c*h)+m*(-n*o*h-e*l*d+e*o*u+n*a*d-i*a*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=d*p*c-x*u*c+x*l*f-o*p*f-d*l*m+o*u*m,v=g*u*c-h*p*c-g*l*f+a*p*f+h*l*m-a*u*m,w=h*x*c-g*d*c+g*o*f-a*x*f-h*o*m+a*d*m,C=g*d*l-h*x*l-g*o*u+a*x*u+h*o*p-a*d*p,T=e*_+i*v+n*w+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=_*A,t[1]=(x*u*r-d*p*r-x*n*f+i*p*f+d*n*m-i*u*m)*A,t[2]=(o*p*r-x*l*r+x*n*c-i*p*c-o*n*m+i*l*m)*A,t[3]=(d*l*r-o*u*r-d*n*c+i*u*c+o*n*f-i*l*f)*A,t[4]=v*A,t[5]=(h*p*r-g*u*r+g*n*f-e*p*f-h*n*m+e*u*m)*A,t[6]=(g*l*r-a*p*r-g*n*c+e*p*c+a*n*m-e*l*m)*A,t[7]=(a*u*r-h*l*r+h*n*c-e*u*c-a*n*f+e*l*f)*A,t[8]=w*A,t[9]=(g*d*r-h*x*r-g*i*f+e*x*f+h*i*m-e*d*m)*A,t[10]=(a*x*r-g*o*r+g*i*c-e*x*c-a*i*m+e*o*m)*A,t[11]=(h*o*r-a*d*r-h*i*c+e*d*c+a*i*f-e*o*f)*A,t[12]=C*A,t[13]=(h*x*n-g*d*n+g*i*u-e*x*u-h*i*p+e*d*p)*A,t[14]=(g*o*n-a*x*n-g*i*l+e*x*l+a*i*p-e*o*p)*A,t[15]=(a*d*n-h*o*n+h*i*l-e*d*l-a*i*u+e*o*u)*A,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,p=a*d,m=o*d,_=l*c,v=l*h,w=l*d,C=i.x,T=i.y,A=i.z;return n[0]=(1-(x+m))*C,n[1]=(f+w)*C,n[2]=(g-v)*C,n[3]=0,n[4]=(f-w)*T,n[5]=(1-(u+m))*T,n[6]=(p+_)*T,n[7]=0,n[8]=(g+v)*A,n[9]=(p-_)*A,n[10]=(1-(u+x))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=Ln.set(n[0],n[1],n[2]).length(),a=Ln.set(n[4],n[5],n[6]).length(),o=Ln.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],oi.copy(this);let c=1/r,h=1/a,d=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,e.setFromRotationMatrix(oi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Ii){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n),f,g;if(o===Ii)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Br)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Ii){let l=this.elements,c=1/(e-t),h=1/(i-n),d=1/(a-r),u=(e+t)*c,f=(i+n)*h,g,x;if(o===Ii)g=(a+r)*d,x=-2*d;else if(o===Br)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ln=new S,oi=new re,jd=new S(0,0,0),Qd=new S(1,1,1),qi=new S,er=new S,Ye=new S,Kc=new re,jc=new ze,ei=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tf=0,Qc=new S,Dn=new ze,wi=new re,ir=new S,vs=new S,ef=new S,nf=new ze,th=new S(1,0,0),eh=new S(0,1,0),ih=new S(0,0,1),nh={type:"added"},sf={type:"removed"},Un={type:"childadded",child:null},eo={type:"childremoved",child:null},Re=class s extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new S,e=new ei,i=new ze,n=new S(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new re},normalMatrix:{value:new zt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.premultiply(Dn),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(vs,ir,this.up):wi.lookAt(ir,vs,this.up),this.quaternion.setFromRotationMatrix(wi),n&&(wi.extractRotation(n.matrixWorld),Dn.setFromRotationMatrix(wi),this.quaternion.premultiply(Dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nh),Un.child=t,this.dispatchEvent(Un),Un.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sf),eo.child=t,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nh),Un.child=t,this.dispatchEvent(Un),Un.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Re.DEFAULT_UP=new S(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new S,Ei=new S,io=new S,Ti=new S,Nn=new S,Fn=new S,sh=new S,no=new S,so=new S,ro=new S,ao=new ge,oo=new ge,lo=new ge,Ci=class s{constructor(t=new S,e=new S,i=new S){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),li.subVectors(t,e),n.cross(li);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){li.subVectors(n,e),Ei.subVectors(i,e),io.subVectors(t,e);let a=li.dot(li),o=li.dot(Ei),l=li.dot(io),c=Ei.dot(Ei),h=Ei.dot(io),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return ao.setScalar(0),oo.setScalar(0),lo.setScalar(0),ao.fromBufferAttribute(t,e),oo.fromBufferAttribute(t,i),lo.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(ao,r.x),a.addScaledVector(oo,r.y),a.addScaledVector(lo,r.z),a}static isFrontFacing(t,e,i,n){return li.subVectors(i,e),Ei.subVectors(t,e),li.cross(Ei).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),li.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Nn.subVectors(n,i),Fn.subVectors(r,i),no.subVectors(t,i);let l=Nn.dot(no),c=Fn.dot(no);if(l<=0&&c<=0)return e.copy(i);so.subVectors(t,n);let h=Nn.dot(so),d=Fn.dot(so);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Nn,a);ro.subVectors(t,r);let f=Nn.dot(ro),g=Fn.dot(ro);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Fn,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return sh.subVectors(r,n),o=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(sh,o);let m=1/(p+x+u);return a=x*m,o=u*m,e.copy(i).addScaledVector(Nn,a).addScaledVector(Fn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function co(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=lc(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=co(a,r,t+1/3),this.g=co(a,r,t),this.b=co(a,r,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=ke){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let i=ou[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return te.fromWorkingColorSpace(De.copy(this),t),Math.round(Ae(De.r*255,0,255))*65536+Math.round(Ae(De.g*255,0,255))*256+Math.round(Ae(De.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(De.copy(this),e);let i=De.r,n=De.g,r=De.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ke){te.fromWorkingColorSpace(De.copy(this),t);let e=De.r,i=De.g,n=De.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(nr);let i=As(Yi.h,nr.h,e),n=As(Yi.s,nr.s,e),r=As(Yi.l,nr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new wt;wt.NAMES=ou;var rf=0,yi=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=qn,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=An,this.stencilZFail=An,this.stencilZPass=An,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ao&&(i.blendSrc=this.blendSrc),this.blendDst!==Ro&&(i.blendDst=this.blendDst),this.blendEquation!==pn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==An&&(i.stencilFail=this.stencilFail),this.stencilZFail!==An&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==An&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ge=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new S,sr=new ot,ue=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dl,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}};var Gr=class extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Wr=class extends ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ht=class extends ue{constructor(t,e,i){super(new Float32Array(t),e,i)}},af=0,Qe=new re,ho=new Re,zn=new S,$e=new _n,Ms=new _n,Te=new S,ae=class s extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?Wr:Gr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return ho.lookAt(t),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ht(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){let i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors($e.min,Ms.min),$e.expandByPoint(Te),Te.addVectors($e.max,Ms.max),$e.expandByPoint(Te)):($e.expandByPoint(Ms.min),$e.expandByPoint(Ms.max))}$e.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(zn.fromBufferAttribute(t,c),Te.add(zn)),n=Math.max(n,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new S,l[P]=new S;let c=new S,h=new S,d=new S,u=new ot,f=new ot,g=new ot,x=new S,p=new S;function m(P,B,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,B),d.fromBufferAttribute(i,y),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let M=1/(f.x*g.y-g.x*f.y);isFinite(M)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(M),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(M),o[P].add(x),o[B].add(x),o[y].add(x),l[P].add(p),l[B].add(p),l[y].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,B=_.length;P<B;++P){let y=_[P],M=y.start,L=y.count;for(let N=M,O=M+L;N<O;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new S,w=new S,C=new S,T=new S;function A(P){C.fromBufferAttribute(n,P),T.copy(C);let B=o[P];v.copy(B),v.sub(C.multiplyScalar(C.dot(B))).normalize(),w.crossVectors(T,B);let M=w.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,M)}for(let P=0,B=_.length;P<B;++P){let y=_[P],M=y.start,L=y.count;for(let N=M,O=M+L;N<O;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new S,r=new S,a=new S,o=new S,l=new S,c=new S,h=new S,d=new S;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new ue(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rh=new re,cn=new Us,rr=new vn,ah=new S,ar=new S,or=new S,lr=new S,uo=new S,cr=new S,oh=new S,hr=new S,Ut=class extends Re{constructor(t=new ae,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(uo.fromBufferAttribute(d,t),a?cr.addScaledVector(uo,h):cr.addScaledVector(uo.sub(e),h))}e.add(cr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(rr.containsPoint(cn.origin)===!1&&(cn.intersectSphere(rr,ah)===null||cn.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(rh.copy(r).invert(),cn.copy(t.ray).applyMatrix4(rh),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let w=_,C=v;w<C;w+=3){let T=o.getX(w),A=o.getX(w+1),P=o.getX(w+2);n=ur(this,m,t,i,c,h,d,T,A,P),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=o.getX(p),v=o.getX(p+1),w=o.getX(p+2);n=ur(this,a,t,i,c,h,d,_,v,w),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=_,C=v;w<C;w+=3){let T=w,A=w+1,P=w+2;n=ur(this,m,t,i,c,h,d,T,A,P),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=p,v=p+1,w=p+2;n=ur(this,a,t,i,c,h,d,_,v,w),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function of(s,t,e,i,n,r,a,o){let l;if(t.side===Ve?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===ji,o),l===null)return null;hr.copy(o),hr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:s}}function ur(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,ar),s.getVertexPosition(l,or),s.getVertexPosition(c,lr);let h=of(s,t,e,i,ar,or,lr,oh);if(h){let d=new S;Ci.getBarycoord(oh,ar,or,lr,d),n&&(h.uv=Ci.getInterpolatedAttribute(n,o,l,c,d,new ot)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,l,c,d,new ot)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new S,materialIndex:0};Ci.getNormal(ar,or,lr,u.normal),h.face=u,h.barycoord=d}return h}var xe=class s extends ae{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(d,2));function g(x,p,m,_,v,w,C,T,A,P,B){let y=w/A,M=C/P,L=w/2,N=C/2,O=T/2,X=A+1,z=P+1,Y=0,V=0,nt=new S;for(let it=0;it<z;it++){let lt=it*M-N;for(let Lt=0;Lt<X;Lt++){let Bt=Lt*y-L;nt[x]=Bt*_,nt[p]=lt*v,nt[m]=O,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[p]=0,nt[m]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(Lt/A),d.push(1-it/P),Y+=1}}for(let it=0;it<P;it++)for(let lt=0;lt<A;lt++){let Lt=u+lt+X*it,Bt=u+lt+X*(it+1),k=u+(lt+1)+X*(it+1),j=u+(lt+1)+X*it;l.push(Lt,Bt,j),l.push(Bt,k,j),V+=6}o.addGroup(f,V,B),f+=V,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function is(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Fe(s){let t={};for(let e=0;e<s.length;e++){let i=is(s[e]);for(let n in i)t[n]=i[n]}return t}function lf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function lu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var cf={clone:is,merge:Fe},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Xr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new S,lh=new ot,ch=new ot,Ie=class extends Xr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($n*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan($n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($n*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bn=-90,On=1,gl=class extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ie(Bn,On,t,e);n.layers=this.layers,this.add(n);let r=new Ie(Bn,On,t,e);r.layers=this.layers,this.add(r);let a=new Ie(Bn,On,t,e);a.layers=this.layers,this.add(a);let o=new Ie(Bn,On,t,e);o.layers=this.layers,this.add(o);let l=new Ie(Bn,On,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Bn,On,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},qr=class extends Ze{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:jn,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xl=class extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new qr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new xe(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:Ji});r.uniforms.tEquirect.value=e;let a=new Ut(n,r),o=e.minFilter;return e.minFilter===xn&&(e.minFilter=ci),new gl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},fo=new S,df=new S,ff=new zt,Ri=class{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=fo.subVectors(i,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(fo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ff.getNormalMatrix(t),n=this.coplanarPoint(fo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hn=new vn,dr=new S,Ns=class{constructor(t=new Ri,e=new Ri,i=new Ri,n=new Ri,r=new Ri,a=new Ri){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii){let i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],f=n[8],g=n[9],x=n[10],p=n[11],m=n[12],_=n[13],v=n[14],w=n[15];if(i[0].setComponents(l-r,u-c,p-f,w-m).normalize(),i[1].setComponents(l+r,u+c,p+f,w+m).normalize(),i[2].setComponents(l+a,u+h,p+g,w+_).normalize(),i[3].setComponents(l-a,u-h,p-g,w-_).normalize(),i[4].setComponents(l-o,u-d,p-x,w-v).normalize(),e===Ii)i[5].setComponents(l+o,u+d,p+x,w+v).normalize();else if(e===Br)i[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hn)}intersectsSprite(t){return hn.center.set(0,0,0),hn.radius=.7071067811865476,hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(hn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(dr.x=n.normal.x>0?t.max.x:t.min.x,dr.y=n.normal.y>0?t.max.y:t.min.y,dr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cu(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function pf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Ni=class s extends ae{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*u-a;for(let v=0;v<c;v++){let w=v*d-r;g.push(w,-_,0),x.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let v=_+c*m,w=_+c*(m+1),C=_+1+c*(m+1),T=_+1+c*m;f.push(v,w,T),f.push(w,C,T)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`
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
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,bm=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,zm=`#define PHONG
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
}`,Bm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,km=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:xf,alphamap_pars_fragment:yf,alphatest_fragment:_f,alphatest_pars_fragment:vf,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:Sf,batching_vertex:wf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:zf,common:Bf,cube_uv_reflection_fragment:Of,defaultnormal_vertex:kf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Vf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:op,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:Qf,fog_fragment:tp,fog_pars_fragment:ep,gradientmap_pars_fragment:ip,lightmap_pars_fragment:np,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:vp,map_fragment:Mp,map_pars_fragment:bp,map_particle_fragment:Sp,map_particle_pars_fragment:wp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Ip,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Hp,opaque_fragment:Vp,packing:Gp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:Qp,skinbase_vertex:tm,skinning_pars_vertex:em,skinning_vertex:im,skinnormal_vertex:nm,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:xm,cube_vert:ym,cube_frag:_m,depth_vert:vm,depth_frag:Mm,distanceRGBA_vert:bm,distanceRGBA_frag:Sm,equirect_vert:wm,equirect_frag:Em,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Pm,meshlambert_frag:Im,meshmatcap_vert:Lm,meshmatcap_frag:Dm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:zm,meshphysical_vert:Bm,meshphysical_frag:Om,meshtoon_vert:km,meshtoon_frag:Hm,points_vert:Vm,points_frag:Gm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:Ym},st={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},xi={basic:{uniforms:Fe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Fe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new wt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Fe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Fe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Fe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new wt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Fe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Fe([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Fe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Fe([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Fe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Fe([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Fe([st.common,st.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Fe([st.lights,st.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};xi.physical={uniforms:Fe([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var fr={r:0,b:0,g:0},un=new ei,$m=new re;function Zm(s,t,e,i,n,r,a){let o=new wt(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1,w=g(_);w===null?m(o,l):w&&w.isColor&&(m(w,1),v=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(_,v){let w=g(v);w&&(w.isCubeTexture||w.mapping===da)?(h===void 0&&(h=new Ut(new xe(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:is(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),un.copy(v.backgroundRotation),un.x*=-1,un.y*=-1,un.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(un.y*=-1,un.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(un)),h.material.toneMapped=te.getTransfer(w.colorSpace)!==he,(d!==w||u!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ut(new Ni(2,2),new Je({name:"BackgroundMaterial",uniforms:is(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(w.colorSpace)!==he,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=w,u=w.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,v){_.getRGB(fr,lu(s)),i.buffers.color.setClear(fr.r,fr.g,fr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(o,l)},render:x,addToRenderList:p}}function Jm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,a=!1;function o(y,M,L,N,O){let X=!1,z=d(N,L,M);r!==z&&(r=z,c(r.object)),X=f(y,N,L,O),X&&g(y,N,L,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,w(y,M,L,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,M,L){let N=L.wireframe===!0,O=i[y.id];O===void 0&&(O={},i[y.id]=O);let X=O[M.id];X===void 0&&(X={},O[M.id]=X);let z=X[N];return z===void 0&&(z=u(l()),X[N]=z),z}function u(y){let M=[],L=[],N=[];for(let O=0;O<e;O++)M[O]=0,L[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:L,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,M,L,N){let O=r.attributes,X=M.attributes,z=0,Y=L.getAttributes();for(let V in Y)if(Y[V].location>=0){let it=O[V],lt=X[V];if(lt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor)),it===void 0||it.attribute!==lt||lt&&it.data!==lt.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function g(y,M,L,N){let O={},X=M.attributes,z=0,Y=L.getAttributes();for(let V in Y)if(Y[V].location>=0){let it=X[V];it===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));let lt={};lt.attribute=it,it&&it.data&&(lt.data=it.data),O[V]=lt,z++}r.attributes=O,r.attributesNum=z,r.index=N}function x(){let y=r.newAttributes;for(let M=0,L=y.length;M<L;M++)y[M]=0}function p(y){m(y,0)}function m(y,M){let L=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;L[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),O[y]!==M&&(s.vertexAttribDivisor(y,M),O[y]=M)}function _(){let y=r.newAttributes,M=r.enabledAttributes;for(let L=0,N=M.length;L<N;L++)M[L]!==y[L]&&(s.disableVertexAttribArray(L),M[L]=0)}function v(y,M,L,N,O,X,z){z===!0?s.vertexAttribIPointer(y,M,L,O,X):s.vertexAttribPointer(y,M,L,N,O,X)}function w(y,M,L,N){x();let O=N.attributes,X=L.getAttributes(),z=M.defaultAttributeValues;for(let Y in X){let V=X[Y];if(V.location>=0){let nt=O[Y];if(nt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){let it=nt.normalized,lt=nt.itemSize,Lt=t.get(nt);if(Lt===void 0)continue;let Bt=Lt.buffer,k=Lt.type,j=Lt.bytesPerElement,ct=k===s.INT||k===s.UNSIGNED_INT||nt.gpuType===ec;if(nt.isInterleavedBufferAttribute){let rt=nt.data,bt=rt.stride,St=nt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot,rt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)p(V.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,Bt);for(let Ot=0;Ot<V.locationSize;Ot++)v(V.location+Ot,lt/V.locationSize,k,it,bt*j,(St+lt/V.locationSize*Ot)*j,ct)}else{if(nt.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Bt);for(let rt=0;rt<V.locationSize;rt++)v(V.location+rt,lt/V.locationSize,k,it,lt*j,lt/V.locationSize*rt*j,ct)}}else if(z!==void 0){let it=z[Y];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(V.location,it);break;case 3:s.vertexAttrib3fv(V.location,it);break;case 4:s.vertexAttrib4fv(V.location,it);break;default:s.vertexAttrib1fv(V.location,it)}}}}_()}function C(){P();for(let y in i){let M=i[y];for(let L in M){let N=M[L];for(let O in N)h(N[O].object),delete N[O];delete M[L]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;let M=i[y.id];for(let L in M){let N=M[L];for(let O in N)h(N[O].object),delete N[O];delete M[L]}delete i[y.id]}function A(y){for(let M in i){let L=i[M];if(L[y.id]===void 0)continue;let N=L[y.id];for(let O in N)h(N[O].object),delete N[O];delete L[y.id]}}function P(){B(),a=!0,r!==n&&(r=n,c(r.object))}function B(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Km(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,i,u[x])}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jm(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==ui&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let P=A===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Di&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pi&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:C,maxSamples:T}}function Qm(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Ri,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,v=_*4,w=m.clippingState||null;l.value=w,w=h(g,u,v,f);for(let C=0;C!==v;++C)w[C]=e[C];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,w=f;v!==x;++v,w+=4)a.copy(d[v]).applyMatrix4(_,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function t0(s){let t=new WeakMap;function e(a,o){return o===Fo?a.mapping=jn:o===zo&&(a.mapping=Qn),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fo||o===zo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new xl(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Yr=class extends Xr{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xn=4,hh=[.125,.215,.35,.446,.526,.582],mn=20,po=new Yr,uh=new wt,mo=null,go=0,xo=0,yo=!1,fn=(1+Math.sqrt(5))/2,kn=1/fn,dh=[new S(-fn,kn,0),new S(fn,kn,0),new S(-kn,0,fn),new S(kn,0,fn),new S(0,fn,-kn),new S(0,fn,kn),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],$r=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,xo),this._renderer.xr.enabled=yo,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jn||t.mapping===Qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:ks,format:ui,colorSpace:en,depthBuffer:!1},n=fh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=i0(r,t,e)}return n}_compileMaterial(t){let e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,i,n){let o=new Ie(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(uh),h.toneMapping=Ki,h.autoClear=!1;let f=new Ge({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new Ut(new xe,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(uh),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;pr(n,_*v,m>2?v:0,v,v),h.setRenderTarget(n),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===jn||t.mapping===Qn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,po)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dh[(n-r-1)%dh.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ut(this._lodPlanes[n],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mn-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):mn;p>mn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mn}`);let m=[],_=0;for(let A=0;A<mn;++A){let P=A/x,B=Math.exp(-P*P/2);m.push(B),A===0?_+=B:A<p&&(_+=2*B)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let w=this._sizeLods[n],C=3*w*(n>v-Xn?n-v+Xn:0),T=4*(this._cubeSize-w);pr(e,C,T,3*w,2*w),l.setRenderTarget(e),l.render(d,po)}};function e0(s){let t=[],e=[],i=[],n=s,r=s-Xn+1+hh.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Xn?l=hh[a-s+Xn-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*f),v=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,P=T>2?0:-1,B=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(B,x*g*T),v.set(u,p*g*T);let y=[T,T,T,T,T,T];w.set(y,m*g*T)}let C=new ae;C.setAttribute("position",new ue(_,x)),C.setAttribute("uv",new ue(v,p)),C.setAttribute("faceIndex",new ue(w,m)),t.push(C),n>Xn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fh(s,t,e){let i=new Ui(s,t,e);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function i0(s,t,e){let i=new Float32Array(mn),n=new S(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ph(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function mh(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function n0(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Fo||l===zo,h=l===jn||l===Qn;if(c||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new $r(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new $r(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function s0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Dr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function r0(s,t,e,i){let n={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}u.removeEventListener("dispose",a),delete n[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,w=_.length;v<w;v+=3){let C=_[v+0],T=_[v+1],A=_[v+2];u.push(C,T,T,A,A,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,w=_.length/3-1;v<w;v+=3){let C=v+0,T=v+1,A=v+2;u.push(C,T,T,A,A,C)}}else return;let p=new(au(u)?Wr:Gr)(u,1);p.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function a0(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(i,f,r,u*a),e.update(f,i,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,u*a,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function d(u,f,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,x,0,g);let m=0;for(let _=0;_<g;_++)m+=f[_];for(let _=0;_<x.length;_++)e.update(m,i,x[_])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function o0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function l0(s,t,e){let i=new WeakMap,n=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let B=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let w=o.attributes.position.count*v,C=1;w>t.maxTextureSize&&(C=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let T=new Float32Array(w*C*4*d),A=new Hr(T,w,C,d);A.type=Pi,A.needsUpdate=!0;let P=v*4;for(let y=0;y<d;y++){let M=p[y],L=m[y],N=_[y],O=w*C*4*y;for(let X=0;X<M.count;X++){let z=X*P;f===!0&&(n.fromBufferAttribute(M,X),T[O+z+0]=n.x,T[O+z+1]=n.y,T[O+z+2]=n.z,T[O+z+3]=0),g===!0&&(n.fromBufferAttribute(L,X),T[O+z+4]=n.x,T[O+z+5]=n.y,T[O+z+6]=n.z,T[O+z+7]=0),x===!0&&(n.fromBufferAttribute(N,X),T[O+z+8]=n.x,T[O+z+9]=n.y,T[O+z+10]=n.z,T[O+z+11]=N.itemSize===4?n.w:1)}}u={count:d,texture:A,size:new ot(w,C)},i.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function c0(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Zr=class extends Ze{constructor(t,e,i,n,r,a,o,l,c,h=Yn){if(h!==Yn&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yn&&(i=yn),i===void 0&&h===es&&(i=ts),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hu=new Ze,gh=new Zr(1,1),uu=new Hr,du=new ml,fu=new qr,xh=[],yh=[],_h=new Float32Array(16),vh=new Float32Array(9),Mh=new Float32Array(4);function hs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=xh[n];if(r===void 0&&(r=new Float32Array(n),xh[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function pa(s,t){let e=yh[t];e===void 0&&(e=new Int32Array(t),yh[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function h0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function u0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function f0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function p0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Mh.set(i),s.uniformMatrix2fv(this.addr,!1,Mh),we(e,i)}}function m0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;vh.set(i),s.uniformMatrix3fv(this.addr,!1,vh),we(e,i)}}function g0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;_h.set(i),s.uniformMatrix4fv(this.addr,!1,_h),we(e,i)}}function x0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function _0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function M0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function b0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function S0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function w0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function E0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(gh.compareFunction=ru,r=gh):r=hu,e.setTexture2D(t||r,n)}function T0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||du,n)}function A0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||fu,n)}function R0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||uu,n)}function C0(s){switch(s){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function P0(s,t){s.uniform1fv(this.addr,t)}function I0(s,t){let e=hs(t,this.size,2);s.uniform2fv(this.addr,e)}function L0(s,t){let e=hs(t,this.size,3);s.uniform3fv(this.addr,e)}function D0(s,t){let e=hs(t,this.size,4);s.uniform4fv(this.addr,e)}function U0(s,t){let e=hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function N0(s,t){let e=hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function F0(s,t){let e=hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function z0(s,t){s.uniform1iv(this.addr,t)}function B0(s,t){s.uniform2iv(this.addr,t)}function O0(s,t){s.uniform3iv(this.addr,t)}function k0(s,t){s.uniform4iv(this.addr,t)}function H0(s,t){s.uniform1uiv(this.addr,t)}function V0(s,t){s.uniform2uiv(this.addr,t)}function G0(s,t){s.uniform3uiv(this.addr,t)}function W0(s,t){s.uniform4uiv(this.addr,t)}function X0(s,t,e){let i=this.cache,n=t.length,r=pa(e,n);Se(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||hu,r[a])}function q0(s,t,e){let i=this.cache,n=t.length,r=pa(e,n);Se(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||du,r[a])}function Y0(s,t,e){let i=this.cache,n=t.length,r=pa(e,n);Se(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||fu,r[a])}function $0(s,t,e){let i=this.cache,n=t.length,r=pa(e,n);Se(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||uu,r[a])}function Z0(s){switch(s){case 5126:return P0;case 35664:return I0;case 35665:return L0;case 35666:return D0;case 35674:return U0;case 35675:return N0;case 35676:return F0;case 5124:case 35670:return z0;case 35667:case 35671:return B0;case 35668:case 35672:return O0;case 35669:case 35673:return k0;case 5125:return H0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return $0}}var yl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}},_l=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}},vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},_o=/(\w+)(\])?(\[|\.)?/g;function bh(s,t){s.seq.push(t),s.map[t.id]=t}function J0(s,t,e){let i=s.name,n=i.length;for(_o.lastIndex=0;;){let r=_o.exec(i),a=_o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){bh(e,c===void 0?new yl(o,s,t):new _l(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new vl(o),bh(e,d)),e=d}}}var Jn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);J0(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Sh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var K0=37297,j0=0;function Q0(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function tg(s){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s),i;switch(t===e?i="":t===zr&&e===Fr?i="LinearDisplayP3ToLinearSRGB":t===Fr&&e===zr&&(i="LinearSRGBToLinearDisplayP3"),s){case en:case fa:return[i,"LinearTransferOETF"];case ke:case oc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function wh(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Q0(s.getShaderSource(t),a)}else return n}function eg(s,t){let e=tg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ig(s,t){let e;switch(t){case ud:e="Linear";break;case dd:e="Reinhard";break;case fd:e="Cineon";break;case pd:e="ACESFilmic";break;case gd:e="AgX";break;case tc:e="Neutral";break;case md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mr=new S;function ng(){te.getLuminanceCoefficients(mr);let s=mr.x.toFixed(4),t=mr.y.toFixed(4),e=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function rg(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ag(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ts(s){return s!==""}function Eh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(s){return s.replace(og,cg)}var lg=new Map;function cg(s,t){let e=Ft[t];if(e===void 0){let i=lg.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}var hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(s){return s.replace(hg,ug)}function ug(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Rh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case jn:case Qn:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qn:t="ENVMAP_MODE_REFRACTION";break}return t}function mg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qh:t="ENVMAP_BLENDING_MULTIPLY";break;case cd:t="ENVMAP_BLENDING_MIX";break;case hd:t="ENVMAP_BLENDING_ADD";break}return t}function gg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function xg(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dg(e),c=fg(e),h=pg(e),d=mg(e),u=gg(e),f=sg(e),g=rg(r),x=n.createProgram(),p,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(p=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Ki?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Ml(a),a=Eh(a,e),a=Th(a,e),o=Ml(o),o=Eh(o,e),o=Th(o,e),a=Ah(a),o=Ah(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+p+a,w=_+m+o,C=Sh(n,n.VERTEX_SHADER,v),T=Sh(n,n.FRAGMENT_SHADER,w);n.attachShader(x,C),n.attachShader(x,T),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(M){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(x).trim(),N=n.getShaderInfoLog(C).trim(),O=n.getShaderInfoLog(T).trim(),X=!0,z=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,C,T);else{let Y=wh(n,C,"vertex"),V=wh(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+L+`
`+Y+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||O==="")&&(z=!1);z&&(M.diagnostics={runnable:X,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:O,prefix:m}})}n.deleteShader(C),n.deleteShader(T),P=new Jn(n,x),B=ag(n,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let B;this.getAttributes=function(){return B===void 0&&A(this),B};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(x,K0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var yg=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sl(t),e.set(t,i)),i}},Sl=class{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}};function _g(s,t,e,i,n,r,a){let o=new Vr,l=new bl,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,f=n.vertexTextures,g=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,L,N,O){let X=N.fog,z=O.geometry,Y=y.isMeshStandardMaterial?N.environment:null,V=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),nt=V&&V.mapping===da?V.image.height:null,it=x[y.type];y.precision!==null&&(g=n.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Lt=lt!==void 0?lt.length:0,Bt=0;z.morphAttributes.position!==void 0&&(Bt=1),z.morphAttributes.normal!==void 0&&(Bt=2),z.morphAttributes.color!==void 0&&(Bt=3);let k,j,ct,rt;if(it){let Oe=xi[it];k=Oe.vertexShader,j=Oe.fragmentShader}else k=y.vertexShader,j=y.fragmentShader,l.update(y),ct=l.getVertexShaderID(y),rt=l.getFragmentShaderID(y);let bt=s.getRenderTarget(),St=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,Vt=!!y.map,kt=!!y.matcap,I=!!V,We=!!y.aoMap,Gt=!!y.lightMap,Yt=!!y.bumpMap,At=!!y.normalMap,le=!!y.displacementMap,Pt=!!y.emissiveMap,R=!!y.metalnessMap,b=!!y.roughnessMap,H=y.anisotropy>0,Z=y.clearcoat>0,Q=y.dispersion>0,$=y.iridescence>0,_t=y.sheen>0,at=y.transmission>0,pt=H&&!!y.anisotropyMap,$t=Z&&!!y.clearcoatMap,tt=Z&&!!y.clearcoatNormalMap,mt=Z&&!!y.clearcoatRoughnessMap,Rt=$&&!!y.iridescenceMap,Ct=$&&!!y.iridescenceThicknessMap,gt=_t&&!!y.sheenColorMap,Wt=_t&&!!y.sheenRoughnessMap,Dt=!!y.specularMap,oe=!!y.specularColorMap,D=!!y.specularIntensityMap,dt=at&&!!y.transmissionMap,q=at&&!!y.thicknessMap,J=!!y.gradientMap,ht=!!y.alphaMap,ft=y.alphaTest>0,qt=!!y.alphaHash,Me=!!y.extensions,Be=Ki;y.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Be=s.toneMapping);let Kt={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:j,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:rt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:St,instancingColor:St&&O.instanceColor!==null,instancingMorph:St&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:en,alphaToCoverage:!!y.alphaToCoverage,map:Vt,matcap:kt,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:nt,aoMap:We,lightMap:Gt,bumpMap:Yt,normalMap:At,displacementMap:f&&le,emissiveMap:Pt,normalMapObjectSpace:At&&y.normalMapType===vd,normalMapTangentSpace:At&&y.normalMapType===su,metalnessMap:R,roughnessMap:b,anisotropy:H,anisotropyMap:pt,clearcoat:Z,clearcoatMap:$t,clearcoatNormalMap:tt,clearcoatRoughnessMap:mt,dispersion:Q,iridescence:$,iridescenceMap:Rt,iridescenceThicknessMap:Ct,sheen:_t,sheenColorMap:gt,sheenRoughnessMap:Wt,specularMap:Dt,specularColorMap:oe,specularIntensityMap:D,transmission:at,transmissionMap:dt,thicknessMap:q,gradientMap:J,opaque:y.transparent===!1&&y.blending===qn&&y.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:qt,combine:y.combine,mapUv:Vt&&p(y.map.channel),aoMapUv:We&&p(y.aoMap.channel),lightMapUv:Gt&&p(y.lightMap.channel),bumpMapUv:Yt&&p(y.bumpMap.channel),normalMapUv:At&&p(y.normalMap.channel),displacementMapUv:le&&p(y.displacementMap.channel),emissiveMapUv:Pt&&p(y.emissiveMap.channel),metalnessMapUv:R&&p(y.metalnessMap.channel),roughnessMapUv:b&&p(y.roughnessMap.channel),anisotropyMapUv:pt&&p(y.anisotropyMap.channel),clearcoatMapUv:$t&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:tt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&p(y.sheenRoughnessMap.channel),specularMapUv:Dt&&p(y.specularMap.channel),specularColorMapUv:oe&&p(y.specularColorMap.channel),specularIntensityMapUv:D&&p(y.specularIntensityMap.channel),transmissionMapUv:dt&&p(y.transmissionMap.channel),thicknessMapUv:q&&p(y.thicknessMap.channel),alphaMapUv:ht&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(At||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Vt||ht),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:Vt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===He,flipSided:y.side===Ve,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Me&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&y.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function _(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(v(M,y),w(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function w(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),y.push(o.mask)}function C(y){let M=x[y.type],L;if(M){let N=xi[M];L=cf.clone(N.uniforms)}else L=y.uniforms;return L}function T(y,M){let L;for(let N=0,O=h.length;N<O;N++){let X=h[N];if(X.cacheKey===M){L=X,++L.usedTimes;break}}return L===void 0&&(L=new xg(s,M,y,r),h.push(L)),L}function A(y){if(--y.usedTimes===0){let M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:B}}function vg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Mg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ch(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ph(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d,u,f,g,x,p){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},s[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=p),t++,m}function o(d,u,f,g,x,p){let m=a(d,u,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(d,u,f,g,x,p){let m=a(d,u,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Mg),i.length>1&&i.sort(u||Ch),n.length>1&&n.sort(u||Ch)}function h(){for(let d=t,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function bg(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Ph,s.set(i,[a])):n>=r.length?(a=new Ph,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Sg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new wt};break;case"SpotLight":e={position:new S,direction:new S,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new S,halfWidth:new S,halfHeight:new S};break}return s[t.id]=e,e}}}function wg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Eg=0;function Tg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ag(s){let t=new Sg,e=wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new S);let n=new S,r=new re,a=new re;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,_=0,v=0,w=0,C=0,T=0,A=0;c.sort(Tg);for(let B=0,y=c.length;B<y;B++){let M=c[B],L=M.color,N=M.intensity,O=M.distance,X=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=L.r*N,d+=L.g*N,u+=L.b*N;else if(M.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(M.sh.coefficients[z],N);A++}else if(M.isDirectionalLight){let z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let Y=M.shadow,V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=M.shadow.matrix,_++}i.directional[f]=z,f++}else if(M.isSpotLight){let z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=O,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,i.spot[x]=z;let Y=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,Y.updateMatrices(M),M.castShadow&&T++),i.spotLightMatrix[x]=Y.matrix,M.castShadow){let V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=X,w++}x++}else if(M.isRectAreaLight){let z=t.get(M);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),i.rectArea[p]=z,p++}else if(M.isPointLight){let z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){let Y=M.shadow,V=e.get(M);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=z,g++}else if(M.isHemisphereLight){let z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(N),z.groundColor.copy(M.groundColor).multiplyScalar(N),i.hemi[m]=z,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==w||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=w+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=w,P.numSpotMaps=C,P.numLightProbes=A,i.version=Eg++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let v=c[m];if(v.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),d++}else if(v.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),f++}else if(v.isRectAreaLight){let w=i.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let w=i.point[u];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){let w=i.hemi[x];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function Ih(s){let t=new Ag(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rg(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Ih(s),t.set(n,[o])):r>=a.length?(o=new Ih(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var wl=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
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
}`;function Ig(s,t,e){let i=new Ns,n=new ot,r=new ot,a=new ge,o=new wl({depthPacking:_d}),l=new El,c={},h=e.maxTextureSize,d={[ji]:Ve,[Ve]:ji,[He]:He},u=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Cg,fragmentShader:Pg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new ae;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ut(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let m=this.type;this.render=function(T,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let B=s.getRenderTarget(),y=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ji),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=m!==Ai&&this.type===Ai,O=m===Ai&&this.type!==Ai;for(let X=0,z=T.length;X<z;X++){let Y=T[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let nt=V.getFrameExtents();if(n.multiply(nt),r.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/nt.x),n.x=r.x*nt.x,V.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/nt.y),n.y=r.y*nt.y,V.mapSize.y=r.y)),V.map===null||N===!0||O===!0){let lt=this.type!==Ai?{minFilter:ti,magFilter:ti}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(n.x,n.y,lt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let it=V.getViewportCount();for(let lt=0;lt<it;lt++){let Lt=V.getViewport(lt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),L.viewport(a),V.updateMatrices(Y,lt),i=V.getFrustum(),w(A,P,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Ai&&_(V,P),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(B,y,M)};function _(T,A){let P=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ui(n.x,n.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,P,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,P,f,x,null)}function v(T,A,P,B){let y=null,M=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)y=M;else if(y=P.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=y.uuid,N=A.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let X=O[N];X===void 0&&(X=y.clone(),O[N]=X,A.addEventListener("dispose",C)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,B===Ai?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=P}return y}function w(T,A,P,B,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Ai)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let N=t.update(T),O=T.material;if(Array.isArray(O)){let X=N.groups;for(let z=0,Y=X.length;z<Y;z++){let V=X[z],nt=O[V.materialIndex];if(nt&&nt.visible){let it=v(T,nt,B,y);T.onBeforeShadow(s,T,A,P,N,it,V),s.renderBufferDirect(P,null,N,it,T,V),T.onAfterShadow(s,T,A,P,N,it,V)}}}else if(O.visible){let X=v(T,O,B,y);T.onBeforeShadow(s,T,A,P,N,X,null),s.renderBufferDirect(P,null,N,X,T,null),T.onAfterShadow(s,T,A,P,N,X,null)}}let L=T.children;for(let N=0,O=L.length;N<O;N++)w(L[N],A,P,B,y)}function C(T){T.target.removeEventListener("dispose",C);for(let P in c){let B=c[P],y=T.target.uuid;y in B&&(B[y].dispose(),delete B[y])}}}var Lg={[Co]:Po,[Io]:Uo,[Lo]:No,[Kn]:Do,[Po]:Co,[Uo]:Io,[No]:Lo,[Do]:Kn};function Dg(s){function t(){let D=!1,dt=new ge,q=null,J=new ge(0,0,0,0);return{setMask:function(ht){q!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),q=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ft,qt,Me,Be){Be===!0&&(ht*=Me,ft*=Me,qt*=Me),dt.set(ht,ft,qt,Me),J.equals(dt)===!1&&(s.clearColor(ht,ft,qt,Me),J.copy(dt))},reset:function(){D=!1,q=null,J.set(-1,0,0,0)}}}function e(){let D=!1,dt=!1,q=null,J=null,ht=null;return{setReversed:function(ft){dt=ft},setTest:function(ft){ft?ct(s.DEPTH_TEST):rt(s.DEPTH_TEST)},setMask:function(ft){q!==ft&&!D&&(s.depthMask(ft),q=ft)},setFunc:function(ft){if(dt&&(ft=Lg[ft]),J!==ft){switch(ft){case Co:s.depthFunc(s.NEVER);break;case Po:s.depthFunc(s.ALWAYS);break;case Io:s.depthFunc(s.LESS);break;case Kn:s.depthFunc(s.LEQUAL);break;case Lo:s.depthFunc(s.EQUAL);break;case Do:s.depthFunc(s.GEQUAL);break;case Uo:s.depthFunc(s.GREATER);break;case No:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ft}},setLocked:function(ft){D=ft},setClear:function(ft){ht!==ft&&(s.clearDepth(ft),ht=ft)},reset:function(){D=!1,q=null,J=null,ht=null}}}function i(){let D=!1,dt=null,q=null,J=null,ht=null,ft=null,qt=null,Me=null,Be=null;return{setTest:function(Kt){D||(Kt?ct(s.STENCIL_TEST):rt(s.STENCIL_TEST))},setMask:function(Kt){dt!==Kt&&!D&&(s.stencilMask(Kt),dt=Kt)},setFunc:function(Kt,Oe,Mi){(q!==Kt||J!==Oe||ht!==Mi)&&(s.stencilFunc(Kt,Oe,Mi),q=Kt,J=Oe,ht=Mi)},setOp:function(Kt,Oe,Mi){(ft!==Kt||qt!==Oe||Me!==Mi)&&(s.stencilOp(Kt,Oe,Mi),ft=Kt,qt=Oe,Me=Mi)},setLocked:function(Kt){D=Kt},setClear:function(Kt){Be!==Kt&&(s.clearStencil(Kt),Be=Kt)},reset:function(){D=!1,dt=null,q=null,J=null,ht=null,ft=null,qt=null,Me=null,Be=null}}}let n=new t,r=new e,a=new i,o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,_=null,v=null,w=null,C=null,T=new wt(0,0,0),A=0,P=!1,B=null,y=null,M=null,L=null,N=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,z=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=z>=2);let V=null,nt={},it=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),Lt=new ge().fromArray(it),Bt=new ge().fromArray(lt);function k(D,dt,q,J){let ht=new Uint8Array(4),ft=s.createTexture();s.bindTexture(D,ft),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<q;qt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(dt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ft}let j={};j[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),r.setFunc(Kn),Gt(!1),Yt(zc),ct(s.CULL_FACE),I(Ji);function ct(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function rt(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function bt(D,dt){return h[D]!==dt?(s.bindFramebuffer(D,dt),h[D]=dt,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=dt),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function St(D,dt){let q=u,J=!1;if(D){q=d.get(dt),q===void 0&&(q=[],d.set(dt,q));let ht=D.textures;if(q.length!==ht.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,qt=ht.length;ft<qt;ft++)q[ft]=s.COLOR_ATTACHMENT0+ft;q.length=ht.length,J=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,J=!0);J&&s.drawBuffers(q)}function Ot(D){return f!==D?(s.useProgram(D),f=D,!0):!1}let Vt={[pn]:s.FUNC_ADD,[qu]:s.FUNC_SUBTRACT,[Yu]:s.FUNC_REVERSE_SUBTRACT};Vt[$u]=s.MIN,Vt[Zu]=s.MAX;let kt={[Ju]:s.ZERO,[Ku]:s.ONE,[ju]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[sd]:s.SRC_ALPHA_SATURATE,[id]:s.DST_COLOR,[td]:s.DST_ALPHA,[Qu]:s.ONE_MINUS_SRC_COLOR,[Ro]:s.ONE_MINUS_SRC_ALPHA,[nd]:s.ONE_MINUS_DST_COLOR,[ed]:s.ONE_MINUS_DST_ALPHA,[rd]:s.CONSTANT_COLOR,[ad]:s.ONE_MINUS_CONSTANT_COLOR,[od]:s.CONSTANT_ALPHA,[ld]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,dt,q,J,ht,ft,qt,Me,Be,Kt){if(D===Ji){g===!0&&(rt(s.BLEND),g=!1);return}if(g===!1&&(ct(s.BLEND),g=!0),D!==Xu){if(D!==x||Kt!==P){if((p!==pn||v!==pn)&&(s.blendEquation(s.FUNC_ADD),p=pn,v=pn),Kt)switch(D){case qn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bc:s.blendFunc(s.ONE,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,_=null,w=null,C=null,T.set(0,0,0),A=0,x=D,P=Kt}return}ht=ht||dt,ft=ft||q,qt=qt||J,(dt!==p||ht!==v)&&(s.blendEquationSeparate(Vt[dt],Vt[ht]),p=dt,v=ht),(q!==m||J!==_||ft!==w||qt!==C)&&(s.blendFuncSeparate(kt[q],kt[J],kt[ft],kt[qt]),m=q,_=J,w=ft,C=qt),(Me.equals(T)===!1||Be!==A)&&(s.blendColor(Me.r,Me.g,Me.b,Be),T.copy(Me),A=Be),x=D,P=!1}function We(D,dt){D.side===He?rt(s.CULL_FACE):ct(s.CULL_FACE);let q=D.side===Ve;dt&&(q=!q),Gt(q),D.blending===qn&&D.transparent===!1?I(Ji):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),n.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){B!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),B=D)}function Yt(D){D!==Gu?(ct(s.CULL_FACE),D!==y&&(D===zc?s.cullFace(s.BACK):D===Wu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):rt(s.CULL_FACE),y=D}function At(D){D!==M&&(X&&s.lineWidth(D),M=D)}function le(D,dt,q){D?(ct(s.POLYGON_OFFSET_FILL),(L!==dt||N!==q)&&(s.polygonOffset(dt,q),L=dt,N=q)):rt(s.POLYGON_OFFSET_FILL)}function Pt(D){D?ct(s.SCISSOR_TEST):rt(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+O-1),V!==D&&(s.activeTexture(D),V=D)}function b(D,dt,q){q===void 0&&(V===null?q=s.TEXTURE0+O-1:q=V);let J=nt[q];J===void 0&&(J={type:void 0,texture:void 0},nt[q]=J),(J.type!==D||J.texture!==dt)&&(V!==q&&(s.activeTexture(q),V=q),s.bindTexture(D,dt||j[D]),J.type=D,J.texture=dt)}function H(){let D=nt[V];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){Lt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Lt.copy(D))}function gt(D){Bt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Bt.copy(D))}function Wt(D,dt){let q=l.get(dt);q===void 0&&(q=new WeakMap,l.set(dt,q));let J=q.get(D);J===void 0&&(J=s.getUniformBlockIndex(dt,D.name),q.set(D,J))}function Dt(D,dt){let J=l.get(dt).get(D);o.get(dt)!==J&&(s.uniformBlockBinding(dt,J,D.__bindingPointIndex),o.set(dt,J))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},V=null,nt={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,_=null,v=null,w=null,C=null,T=new wt(0,0,0),A=0,P=!1,B=null,y=null,M=null,L=null,N=null,Lt.set(0,0,s.canvas.width,s.canvas.height),Bt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}return{buffers:{color:n,depth:r,stencil:a},enable:ct,disable:rt,bindFramebuffer:bt,drawBuffers:St,useProgram:Ot,setBlending:I,setMaterial:We,setFlipSided:Gt,setCullFace:Yt,setLineWidth:At,setPolygonOffset:le,setScissorTest:Pt,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:Dt,texStorage2D:$t,texStorage3D:tt,texSubImage2D:$,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Ct,viewport:gt,reset:oe}}function Lh(s,t,e,i){let n=Ug(i);switch(e){case Kh:return s*t;case Qh:return s*t;case tu:return s*t*2;case eu:return s*t/n.components*n.byteLength;case sc:return s*t/n.components*n.byteLength;case iu:return s*t*2/n.components*n.byteLength;case rc:return s*t*2/n.components*n.byteLength;case jh:return s*t*3/n.components*n.byteLength;case ui:return s*t*4/n.components*n.byteLength;case ac:return s*t*4/n.components*n.byteLength;case Rr:case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ko:case Vo:return Math.max(s,16)*Math.max(t,8)/4;case Oo:case Ho:return Math.max(s,8)*Math.max(t,8)/2;case Go:case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case tl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case el:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case rl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Lr:case al:case ol:return Math.ceil(s/4)*Math.ceil(t/4)*16;case nu:case ll:return Math.ceil(s/4)*Math.ceil(t/4)*8;case cl:case hl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ug(s){switch(s){case Di:case $h:return{byteLength:1,components:1};case Ls:case Zh:case ks:return{byteLength:2,components:1};case ic:case nc:return{byteLength:2,components:4};case yn:case ec:case Pi:return{byteLength:4,components:1};case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ng(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):Or("canvas")}function x(R,b,H){let Z=1,Q=Pt(R);if((Q.width>H||Q.height>H)&&(Z=H/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Z*Q.width),_t=Math.floor(Z*Q.height);d===void 0&&(d=g($,_t));let at=b?g($,_t):d;return at.width=$,at.height=_t,at.getContext("2d").drawImage(R,0,0,$,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+_t+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==ti&&R.minFilter!==ci}function m(R){s.generateMipmap(R)}function _(R,b,H,Z,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=b;if(b===s.RED&&(H===s.FLOAT&&($=s.R32F),H===s.HALF_FLOAT&&($=s.R16F),H===s.UNSIGNED_BYTE&&($=s.R8)),b===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.R8UI),H===s.UNSIGNED_SHORT&&($=s.R16UI),H===s.UNSIGNED_INT&&($=s.R32UI),H===s.BYTE&&($=s.R8I),H===s.SHORT&&($=s.R16I),H===s.INT&&($=s.R32I)),b===s.RG&&(H===s.FLOAT&&($=s.RG32F),H===s.HALF_FLOAT&&($=s.RG16F),H===s.UNSIGNED_BYTE&&($=s.RG8)),b===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RG8UI),H===s.UNSIGNED_SHORT&&($=s.RG16UI),H===s.UNSIGNED_INT&&($=s.RG32UI),H===s.BYTE&&($=s.RG8I),H===s.SHORT&&($=s.RG16I),H===s.INT&&($=s.RG32I)),b===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RGB8UI),H===s.UNSIGNED_SHORT&&($=s.RGB16UI),H===s.UNSIGNED_INT&&($=s.RGB32UI),H===s.BYTE&&($=s.RGB8I),H===s.SHORT&&($=s.RGB16I),H===s.INT&&($=s.RGB32I)),b===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RGBA8UI),H===s.UNSIGNED_SHORT&&($=s.RGBA16UI),H===s.UNSIGNED_INT&&($=s.RGBA32UI),H===s.BYTE&&($=s.RGBA8I),H===s.SHORT&&($=s.RGBA16I),H===s.INT&&($=s.RGBA32I)),b===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),b===s.RGBA){let _t=Q?Nr:te.getTransfer(Z);H===s.FLOAT&&($=s.RGBA32F),H===s.HALF_FLOAT&&($=s.RGBA16F),H===s.UNSIGNED_BYTE&&($=_t===he?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(R,b){let H;return R?b===null||b===yn||b===ts?H=s.DEPTH24_STENCIL8:b===Pi?H=s.DEPTH32F_STENCIL8:b===Ls&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yn||b===ts?H=s.DEPTH_COMPONENT24:b===Pi?H=s.DEPTH_COMPONENT32F:b===Ls&&(H=s.DEPTH_COMPONENT16),H}function w(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ti&&R.minFilter!==ci?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=R.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&h.delete(b)}function T(R){let b=R.target;b.removeEventListener("dispose",T),B(b)}function A(R){let b=i.get(R);if(b.__webglInit===void 0)return;let H=R.source,Z=u.get(H);if(Z){let Q=Z[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(R),Object.keys(Z).length===0&&u.delete(H)}i.remove(R)}function P(R){let b=i.get(R);s.deleteTexture(b.__webglTexture);let H=R.source,Z=u.get(H);delete Z[b.__cacheKey],a.memory.textures--}function B(R){let b=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let Q=0;Q<b.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[Z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=R.textures;for(let Z=0,Q=H.length;Z<Q;Z++){let $=i.get(H[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(H[Z])}i.remove(R)}let y=0;function M(){y=0}function L(){let R=y;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),y+=1,R}function N(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function O(R,b){let H=i.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(H,R,b);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+b)}function X(R,b){let H=i.get(R);if(R.version>0&&H.__version!==R.version){Bt(H,R,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+b)}function z(R,b){let H=i.get(R);if(R.version>0&&H.__version!==R.version){Bt(H,R,b);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+b)}function Y(R,b){let H=i.get(R);if(R.version>0&&H.__version!==R.version){k(H,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+b)}let V={[Is]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[Bo]:s.MIRRORED_REPEAT},nt={[ti]:s.NEAREST,[xd]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[Wa]:s.LINEAR_MIPMAP_NEAREST,[xn]:s.LINEAR_MIPMAP_LINEAR},it={[Md]:s.NEVER,[Ad]:s.ALWAYS,[bd]:s.LESS,[ru]:s.LEQUAL,[Sd]:s.EQUAL,[Td]:s.GEQUAL,[wd]:s.GREATER,[Ed]:s.NOTEQUAL};function lt(R,b){if(b.type===Pi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ci||b.magFilter===Wa||b.magFilter===Zs||b.magFilter===xn||b.minFilter===ci||b.minFilter===Wa||b.minFilter===Zs||b.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,V[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,V[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,V[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,nt[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ti||b.minFilter!==Zs&&b.minFilter!==xn||b.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Lt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));let Z=b.source,Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));let $=N(b);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[$].usedTimes++;let _t=Q[R.__cacheKey];_t!==void 0&&(Q[R.__cacheKey].usedTimes--,_t.usedTimes===0&&P(b)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return H}function Bt(R,b,H){let Z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=s.TEXTURE_3D);let Q=Lt(R,b),$=b.source;e.bindTexture(Z,R.__webglTexture,s.TEXTURE0+H);let _t=i.get($);if($.version!==_t.__version||Q===!0){e.activeTexture(s.TEXTURE0+H);let at=te.getPrimaries(te.workingColorSpace),pt=b.colorSpace===Zi?null:te.getPrimaries(b.colorSpace),$t=b.colorSpace===Zi||at===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let tt=x(b.image,!1,n.maxTextureSize);tt=le(b,tt);let mt=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type),Ct=_(b.internalFormat,mt,Rt,b.colorSpace,b.isVideoTexture);lt(Z,b);let gt,Wt=b.mipmaps,Dt=b.isVideoTexture!==!0,oe=_t.__version===void 0||Q===!0,D=$.dataReady,dt=w(b,tt);if(b.isDepthTexture)Ct=v(b.format===es,b.type),oe&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,mt,Rt,null));else if(b.isDataTexture)if(Wt.length>0){Dt&&oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ct,Wt[0].width,Wt[0].height);for(let q=0,J=Wt.length;q<J;q++)gt=Wt[q],Dt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,q,Ct,gt.width,gt.height,0,mt,Rt,gt.data);b.generateMipmaps=!1}else Dt?(oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ct,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Rt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,mt,Rt,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Dt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ct,Wt[0].width,Wt[0].height,tt.depth);for(let q=0,J=Wt.length;q<J;q++)if(gt=Wt[q],b.format!==ui)if(mt!==null)if(Dt){if(D)if(b.layerUpdates.size>0){let ht=Lh(gt.width,gt.height,b.format,b.type);for(let ft of b.layerUpdates){let qt=gt.data.subarray(ft*ht/gt.data.BYTES_PER_ELEMENT,(ft+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ft,gt.width,gt.height,1,mt,qt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ct,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,tt.depth,mt,Rt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ct,gt.width,gt.height,tt.depth,0,mt,Rt,gt.data)}else{Dt&&oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ct,Wt[0].width,Wt[0].height);for(let q=0,J=Wt.length;q<J;q++)gt=Wt[q],b.format!==ui?mt!==null?Dt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,q,Ct,gt.width,gt.height,0,mt,Rt,gt.data)}else if(b.isDataArrayTexture)if(Dt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ct,tt.width,tt.height,tt.depth),D)if(b.layerUpdates.size>0){let q=Lh(tt.width,tt.height,b.format,b.type);for(let J of b.layerUpdates){let ht=tt.data.subarray(J*q/tt.data.BYTES_PER_ELEMENT,(J+1)*q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,mt,Rt,ht)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Rt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,mt,Rt,tt.data);else if(b.isData3DTexture)Dt?(oe&&e.texStorage3D(s.TEXTURE_3D,dt,Ct,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Rt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,mt,Rt,tt.data);else if(b.isFramebufferTexture){if(oe)if(Dt)e.texStorage2D(s.TEXTURE_2D,dt,Ct,tt.width,tt.height);else{let q=tt.width,J=tt.height;for(let ht=0;ht<dt;ht++)e.texImage2D(s.TEXTURE_2D,ht,Ct,q,J,0,mt,Rt,null),q>>=1,J>>=1}}else if(Wt.length>0){if(Dt&&oe){let q=Pt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ct,q.width,q.height)}for(let q=0,J=Wt.length;q<J;q++)gt=Wt[q],Dt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,mt,Rt,gt):e.texImage2D(s.TEXTURE_2D,q,Ct,mt,Rt,gt);b.generateMipmaps=!1}else if(Dt){if(oe){let q=Pt(tt);e.texStorage2D(s.TEXTURE_2D,dt,Ct,q.width,q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Rt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,mt,Rt,tt);p(b)&&m(Z),_t.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function k(R,b,H){if(b.image.length!==6)return;let Z=Lt(R,b),Q=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let $=i.get(Q);if(Q.version!==$.__version||Z===!0){e.activeTexture(s.TEXTURE0+H);let _t=te.getPrimaries(te.workingColorSpace),at=b.colorSpace===Zi?null:te.getPrimaries(b.colorSpace),pt=b.colorSpace===Zi||_t===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let $t=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!$t&&!tt?mt[J]=x(b.image[J],!0,n.maxCubemapSize):mt[J]=tt?b.image[J].image:b.image[J],mt[J]=le(b,mt[J]);let Rt=mt[0],Ct=r.convert(b.format,b.colorSpace),gt=r.convert(b.type),Wt=_(b.internalFormat,Ct,gt,b.colorSpace),Dt=b.isVideoTexture!==!0,oe=$.__version===void 0||Z===!0,D=Q.dataReady,dt=w(b,Rt);lt(s.TEXTURE_CUBE_MAP,b);let q;if($t){Dt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Wt,Rt.width,Rt.height);for(let J=0;J<6;J++){q=mt[J].mipmaps;for(let ht=0;ht<q.length;ht++){let ft=q[ht];b.format!==ui?Ct!==null?Dt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,ft.width,ft.height,Ct,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,ft.width,ft.height,Ct,gt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Wt,ft.width,ft.height,0,Ct,gt,ft.data)}}}else{if(q=b.mipmaps,Dt&&oe){q.length>0&&dt++;let J=Pt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){Dt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Ct,gt,mt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,mt[J].width,mt[J].height,0,Ct,gt,mt[J].data);for(let ht=0;ht<q.length;ht++){let qt=q[ht].image[J].image;Dt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,qt.width,qt.height,Ct,gt,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Wt,qt.width,qt.height,0,Ct,gt,qt.data)}}else{Dt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,gt,mt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Ct,gt,mt[J]);for(let ht=0;ht<q.length;ht++){let ft=q[ht];Dt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Ct,gt,ft.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Wt,Ct,gt,ft.image[J])}}}p(b)&&m(s.TEXTURE_CUBE_MAP),$.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function j(R,b,H,Z,Q,$){let _t=r.convert(H.format,H.colorSpace),at=r.convert(H.type),pt=_(H.internalFormat,_t,at,H.colorSpace);if(!i.get(b).__hasExternalTextures){let tt=Math.max(1,b.width>>$),mt=Math.max(1,b.height>>$);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,pt,tt,mt,b.depth,0,_t,at,null):e.texImage2D(Q,$,pt,tt,mt,0,_t,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Yt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,i.get(H).__webglTexture,0,Gt(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,i.get(H).__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(R,b,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let Z=b.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,$=v(b.stencilBuffer,Q),_t=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Gt(b);Yt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,$,b.width,b.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,$,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,$,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,R)}else{let Z=b.textures;for(let Q=0;Q<Z.length;Q++){let $=Z[Q],_t=r.convert($.format,$.colorSpace),at=r.convert($.type),pt=_($.internalFormat,_t,at,$.colorSpace),$t=Gt(b);H&&Yt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,pt,b.width,b.height):Yt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,pt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);let Z=i.get(b.depthTexture).__webglTexture,Q=Gt(b);if(b.depthTexture.format===Yn)Yt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(b.depthTexture.format===es)Yt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function bt(R){let b=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");rt(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=s.createRenderbuffer(),ct(b.__webglDepthbuffer[Z],R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ct(b.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(R,b,H){let Z=i.get(R);b!==void 0&&j(Z.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&bt(R)}function Ot(R){let b=R.texture,H=i.get(R),Z=i.get(b);R.addEventListener("dispose",T);let Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=b.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let pt=0;pt<b.mipmaps.length;pt++)H.__webglFramebuffer[at][pt]=s.createFramebuffer()}else H.__webglFramebuffer[at]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)H.__webglFramebuffer[at]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(_t)for(let at=0,pt=Q.length;at<pt;at++){let $t=i.get(Q[at]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Yt(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){let pt=Q[at];H.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[at]);let $t=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),mt=_(pt.internalFormat,$t,tt,pt.colorSpace,R.isXRRenderTarget===!0),Rt=Gt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,mt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,H.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),lt(s.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)j(H.__webglFramebuffer[at][pt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else j(H.__webglFramebuffer[at],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(b)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,pt=Q.length;at<pt;at++){let $t=Q[at],tt=i.get($t);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),lt(s.TEXTURE_2D,$t),j(H.__webglFramebuffer,R,$t,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),p($t)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),lt(at,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)j(H.__webglFramebuffer[pt],R,b,s.COLOR_ATTACHMENT0,at,pt);else j(H.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,at,0);p(b)&&m(at),e.unbindTexture()}R.depthBuffer&&bt(R)}function Vt(R){let b=R.textures;for(let H=0,Z=b.length;H<Z;H++){let Q=b[H];if(p(Q)){let $=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_t=i.get(Q).__webglTexture;e.bindTexture($,_t),m($),e.unbindTexture()}}}let kt=[],I=[];function We(R){if(R.samples>0){if(Yt(R)===!1){let b=R.textures,H=R.width,Z=R.height,Q=s.COLOR_BUFFER_BIT,$=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=i.get(R),at=b.length>1;if(at)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let $t=i.get(b[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,H,Z,0,0,H,Z,Q,s.NEAREST),l===!0&&(kt.length=0,I.length=0,kt.push(s.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(kt.push($),I.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let $t=i.get(b[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Gt(R){return Math.min(n.maxSamples,R.samples)}function Yt(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function le(R,b){let H=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==en&&H!==Zi&&(te.getTransfer(H)===he?(Z!==ui||Q!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function Pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=M,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=St,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Yt}function Fg(s,t){function e(i,n=Zi){let r,a=te.getTransfer(n);if(i===Di)return s.UNSIGNED_BYTE;if(i===ic)return s.UNSIGNED_SHORT_4_4_4_4;if(i===nc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return s.BYTE;if(i===Zh)return s.SHORT;if(i===Ls)return s.UNSIGNED_SHORT;if(i===ec)return s.INT;if(i===yn)return s.UNSIGNED_INT;if(i===Pi)return s.FLOAT;if(i===ks)return s.HALF_FLOAT;if(i===Kh)return s.ALPHA;if(i===jh)return s.RGB;if(i===ui)return s.RGBA;if(i===Qh)return s.LUMINANCE;if(i===tu)return s.LUMINANCE_ALPHA;if(i===Yn)return s.DEPTH_COMPONENT;if(i===es)return s.DEPTH_STENCIL;if(i===eu)return s.RED;if(i===sc)return s.RED_INTEGER;if(i===iu)return s.RG;if(i===rc)return s.RG_INTEGER;if(i===ac)return s.RGBA_INTEGER;if(i===Rr||i===Cr||i===Pr||i===Ir)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oo||i===ko||i===Ho||i===Vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go||i===Wo||i===Xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Go||i===Wo)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qo||i===Yo||i===$o||i===Zo||i===Jo||i===Ko||i===jo||i===Qo||i===tl||i===el||i===il||i===nl||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$o)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ko)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===el)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===il)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lr||i===al||i===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Lr)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nu||i===ll||i===cl||i===hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Tl=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pe=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new Ze,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Je({vertexShader:Bg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends Qi{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=new Al,p=e.getContextAttributes(),m=null,_=null,v=[],w=[],C=new ot,T=null,A=new Ie;A.layers.enable(1),A.viewport=new ge;let P=new Ie;P.layers.enable(2),P.viewport=new ge;let B=[A,P],y=new Tl;y.layers.enable(1),y.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=v[k];return j===void 0&&(j=new Rs,v[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=v[k];return j===void 0&&(j=new Rs,v[k]=j),j.getGripSpace()},this.getHand=function(k){let j=v[k];return j===void 0&&(j=new Rs,v[k]=j),j.getHandSpace()};function N(k){let j=w.indexOf(k.inputSource);if(j===-1)return;let ct=v[j];ct!==void 0&&(ct.update(k.inputSource,k.frame,c||a),ct.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",X);for(let k=0;k<v.length;k++){let j=w[k];j!==null&&(w[k]=null,v[k].disconnect(j))}M=null,L=null,x.reset(),t.setRenderTarget(m),f=null,u=null,d=null,n=null,_=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",O),n.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),n.renderState.layers===void 0){let j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,j),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ui(f.framebufferWidth,f.framebufferHeight,{format:ui,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,ct=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=p.stencil?es:Yn,ct=p.stencil?ts:yn);let bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(bt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Ui(u.textureWidth,u.textureHeight,{format:ui,type:Di,depthTexture:new Zr(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Bt.setContext(n),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(k){for(let j=0;j<k.removed.length;j++){let ct=k.removed[j],rt=w.indexOf(ct);rt>=0&&(w[rt]=null,v[rt].disconnect(ct))}for(let j=0;j<k.added.length;j++){let ct=k.added[j],rt=w.indexOf(ct);if(rt===-1){for(let St=0;St<v.length;St++)if(St>=w.length){w.push(ct),rt=St;break}else if(w[St]===null){w[St]=ct,rt=St;break}if(rt===-1)break}let bt=v[rt];bt&&bt.connect(ct)}}let z=new S,Y=new S;function V(k,j,ct){z.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(ct.matrixWorld);let rt=z.distanceTo(Y),bt=j.projectionMatrix.elements,St=ct.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),Vt=bt[14]/(bt[10]+1),kt=(bt[9]+1)/bt[5],I=(bt[9]-1)/bt[5],We=(bt[8]-1)/bt[0],Gt=(St[8]+1)/St[0],Yt=Ot*We,At=Ot*Gt,le=rt/(-We+Gt),Pt=le*-We;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Pt),k.translateZ(le),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),bt[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let R=Ot+le,b=Vt+le,H=Yt-Pt,Z=At+(rt-Pt),Q=kt*Vt/b*R,$=I*Vt/b*R;k.projectionMatrix.makePerspective(H,Z,Q,$,R,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function nt(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;let j=k.near,ct=k.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),y.near=P.near=A.near=j,y.far=P.far=A.far=ct,(M!==y.near||L!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,L=y.far);let rt=k.parent,bt=y.cameras;nt(y,rt);for(let St=0;St<bt.length;St++)nt(bt[St],rt);bt.length===2?V(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),it(k,y,rt)};function it(k,j,ct){ct===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(ct.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ds*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let lt=null;function Lt(k,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let rt=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let St=0;St<ct.length;St++){let Ot=ct[St],Vt=null;if(f!==null)Vt=f.getViewport(Ot);else{let I=d.getViewSubImage(u,Ot);Vt=I.viewport,St===0&&(t.setRenderTargetTextures(_,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(_))}let kt=B[St];kt===void 0&&(kt=new Ie,kt.layers.enable(St),kt.viewport=new ge,B[St]=kt),kt.matrix.fromArray(Ot.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ot.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),St===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(kt)}let bt=n.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let St=d.getDepthInformation(ct[0]);St&&St.isValid&&St.texture&&x.init(t,St,n.renderState)}}for(let ct=0;ct<v.length;ct++){let rt=w[ct],bt=v[ct];rt!==null&&bt!==void 0&&bt.update(rt,j,c||a)}lt&&lt(k,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let Bt=new cu;Bt.setAnimationLoop(Lt),this.setAnimationLoop=function(k){lt=k},this.dispose=function(){}}},dn=new ei,kg=new re;function Hg(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,lu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ve&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ve&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),v=_.envMap,w=_.envMapRotation;v&&(p.envMap.value=v,dn.copy(w),dn.x*=-1,dn.y*=-1,dn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(dn.y*=-1,dn.z*=-1),p.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(dn)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Vg(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let w=v.program;i.uniformBlockBinding(_,w)}function c(_,v){let w=n[_.id];w===void 0&&(g(_),w=h(_),n[_.id]=w,_.addEventListener("dispose",p));let C=v.program;i.updateUBOMapping(_,C);let T=t.render.frame;r[_.id]!==T&&(u(_),r[_.id]=T)}function h(_){let v=d();_.__bindingPointIndex=v;let w=s.createBuffer(),C=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let v=n[_.id],w=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,A=w.length;T<A;T++){let P=Array.isArray(w[T])?w[T]:[w[T]];for(let B=0,y=P.length;B<y;B++){let M=P[B];if(f(M,T,B,C)===!0){let L=M.__offset,N=Array.isArray(M.value)?M.value:[M.value],O=0;for(let X=0;X<N.length;X++){let z=N[X],Y=x(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,L+O,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,v,w,C){let T=_.value,A=v+"_"+w;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(_){let v=_.uniforms,w=0,C=16;for(let A=0,P=v.length;A<P;A++){let B=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,M=B.length;y<M;y++){let L=B[y],N=Array.isArray(L.value)?L.value:[L.value];for(let O=0,X=N.length;O<X;O++){let z=N[O],Y=x(z),V=w%C,nt=V%Y.boundary,it=V+nt;w+=nt,it!==0&&C-it<Y.storage&&(w+=C-it),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=Y.storage}}}let T=w%C;return T>0&&(w+=C-T),_.__size=w,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){let v=_.target;v.removeEventListener("dispose",p);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function m(){for(let _ in n)s.deleteBuffer(n[_]);a=[],n={},r={}}return{bind:l,update:c,dispose:m}}var Jr=class{constructor(t={}){let{canvas:e=Wd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Ki,this.toneMappingExposure=1;let v=this,w=!1,C=0,T=0,A=null,P=-1,B=null,y=new ge,M=new ge,L=null,N=new wt(0),O=0,X=e.width,z=e.height,Y=1,V=null,nt=null,it=new ge(0,0,X,z),lt=new ge(0,0,X,z),Lt=!1,Bt=new Ns,k=!1,j=!1,ct=new re,rt=new re,bt=new S,St=new ge,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function kt(){return A===null?Y:1}let I=i;function We(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){let U="webgl2";if(I=We(U,E),I===null)throw We(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Gt,Yt,At,le,Pt,R,b,H,Z,Q,$,_t,at,pt,$t,tt,mt,Rt,Ct,gt,Wt,Dt,oe,D;function dt(){Gt=new s0(I),Gt.init(),Dt=new Fg(I,Gt),Yt=new jm(I,Gt,t,Dt),At=new Dg(I),Yt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),le=new o0(I),Pt=new vg,R=new Ng(I,Gt,At,Pt,Yt,Dt,le),b=new t0(v),H=new n0(v),Z=new pf(I),oe=new Jm(I,Z),Q=new r0(I,Z,le,oe),$=new c0(I,Q,Z,le),Ct=new l0(I,Yt,R),tt=new Qm(Pt),_t=new _g(v,b,H,Gt,Yt,oe,tt),at=new Hg(v,Pt),pt=new bg,$t=new Rg(Gt),Rt=new Zm(v,b,H,At,$,u,l),mt=new Ig(v,$,Yt),D=new Vg(I,le,Yt,At),gt=new Km(I,Gt,le),Wt=new a0(I,Gt,le),le.programs=_t.programs,v.capabilities=Yt,v.extensions=Gt,v.properties=Pt,v.renderLists=pt,v.shadowMap=mt,v.state=At,v.info=le}dt();let q=new Rl(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=Gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(X,z,!1))},this.getSize=function(E){return E.set(X,z)},this.setSize=function(E,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,z=U,e.width=Math.floor(E*Y),e.height=Math.floor(U*Y),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(X*Y,z*Y).floor()},this.setDrawingBufferSize=function(E,U,G){X=E,z=U,Y=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,U,G,W){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,U,G,W),At.viewport(y.copy(it).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,U,G,W){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,U,G,W),At.scissor(M.copy(lt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(E){At.setScissorTest(Lt=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(E=!0,U=!0,G=!0){let W=0;if(E){let F=!1;if(A!==null){let et=A.texture.format;F=et===ac||et===rc||et===sc}if(F){let et=A.texture.type,ut=et===Di||et===yn||et===Ls||et===ts||et===ic||et===nc,xt=Rt.getClearColor(),yt=Rt.getClearAlpha(),Et=xt.r,Tt=xt.g,vt=xt.b;ut?(f[0]=Et,f[1]=Tt,f[2]=vt,f[3]=yt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Et,g[1]=Tt,g[2]=vt,g[3]=yt,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),$t.dispose(),Pt.dispose(),b.dispose(),H.dispose(),$.dispose(),oe.dispose(),D.dispose(),_t.dispose(),q.dispose(),q.removeEventListener("sessionstart",Cc),q.removeEventListener("sessionend",Pc),an.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=le.autoReset,U=mt.enabled,G=mt.autoUpdate,W=mt.needsUpdate,F=mt.type;dt(),le.autoReset=E,mt.enabled=U,mt.autoUpdate=G,mt.needsUpdate=W,mt.type=F}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qt(E){let U=E.target;U.removeEventListener("dispose",qt),Me(U)}function Me(E){Be(E),Pt.remove(E)}function Be(E){let U=Pt.get(E).programs;U!==void 0&&(U.forEach(function(G){_t.releaseProgram(G)}),E.isShaderMaterial&&_t.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,W,F,et){U===null&&(U=Ot);let ut=F.isMesh&&F.matrixWorld.determinant()<0,xt=Ou(E,U,G,W,F);At.setMaterial(W,ut);let yt=G.index,Et=1;if(W.wireframe===!0){if(yt=Q.getWireframeAttribute(G),yt===void 0)return;Et=2}let Tt=G.drawRange,vt=G.attributes.position,ee=Tt.start*Et,ce=(Tt.start+Tt.count)*Et;et!==null&&(ee=Math.max(ee,et.start*Et),ce=Math.min(ce,(et.start+et.count)*Et)),yt!==null?(ee=Math.max(ee,0),ce=Math.min(ce,yt.count)):vt!=null&&(ee=Math.max(ee,0),ce=Math.min(ce,vt.count));let me=ce-ee;if(me<0||me===1/0)return;oe.setup(F,W,xt,G,yt);let Xe,jt=gt;if(yt!==null&&(Xe=Z.get(yt),jt=Wt,jt.setIndex(Xe)),F.isMesh)W.wireframe===!0?(At.setLineWidth(W.wireframeLinewidth*kt()),jt.setMode(I.LINES)):jt.setMode(I.TRIANGLES);else if(F.isLine){let Mt=W.linewidth;Mt===void 0&&(Mt=1),At.setLineWidth(Mt*kt()),F.isLineSegments?jt.setMode(I.LINES):F.isLineLoop?jt.setMode(I.LINE_LOOP):jt.setMode(I.LINE_STRIP)}else F.isPoints?jt.setMode(I.POINTS):F.isSprite&&jt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Mt=F._multiDrawStarts,Pe=F._multiDrawCounts,Qt=F._multiDrawCount,ri=yt?Z.get(yt).bytesPerElement:1,Tn=Pt.get(W).currentProgram.getUniforms();for(let qe=0;qe<Qt;qe++)Tn.setValue(I,"_gl_DrawID",qe),jt.render(Mt[qe]/ri,Pe[qe])}else if(F.isInstancedMesh)jt.renderInstances(ee,me,F.count);else if(G.isInstancedBufferGeometry){let Mt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pe=Math.min(G.instanceCount,Mt);jt.renderInstances(ee,me,Pe)}else jt.render(ee,me)};function Kt(E,U,G){E.transparent===!0&&E.side===He&&E.forceSinglePass===!1?(E.side=Ve,E.needsUpdate=!0,$s(E,U,G),E.side=ji,E.needsUpdate=!0,$s(E,U,G),E.side=He):$s(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),p=$t.get(G),p.init(U),_.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==G&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let W=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let et=F.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){let xt=et[ut];Kt(xt,G,F),W.add(xt)}else Kt(et,G,F),W.add(et)}),_.pop(),p=null,W},this.compileAsync=function(E,U,G=null){let W=this.compile(E,U,G);return new Promise(F=>{function et(){if(W.forEach(function(ut){Pt.get(ut).currentProgram.isReady()&&W.delete(ut)}),W.size===0){F(E);return}setTimeout(et,10)}Gt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Oe=null;function Mi(E){Oe&&Oe(E)}function Cc(){an.stop()}function Pc(){an.start()}let an=new cu;an.setAnimationLoop(Mi),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(E){Oe=E,q.setAnimationLoop(E),E===null?an.stop():an.start()},q.addEventListener("sessionstart",Cc),q.addEventListener("sessionend",Pc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,A),p=$t.get(E,_.length),p.init(U),_.push(p),rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(rt),j=this.localClippingEnabled,k=tt.init(this.clippingPlanes,j),x=pt.get(E,m.length),x.init(),m.push(x),q.enabled===!0&&q.isPresenting===!0){let et=v.xr.getDepthSensingMesh();et!==null&&ka(et,U,-1/0,v.sortObjects)}ka(E,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(V,nt),Vt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Vt&&Rt.addToRenderList(x,E),this.info.render.frame++,k===!0&&tt.beginShadows();let G=p.state.shadowsArray;mt.render(G,E,U),k===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=x.opaque,F=x.transmissive;if(p.setupLights(),U.isArrayCamera){let et=U.cameras;if(F.length>0)for(let ut=0,xt=et.length;ut<xt;ut++){let yt=et[ut];Lc(W,F,E,yt)}Vt&&Rt.render(E);for(let ut=0,xt=et.length;ut<xt;ut++){let yt=et[ut];Ic(x,E,yt,yt.viewport)}}else F.length>0&&Lc(W,F,E,U),Vt&&Rt.render(E),Ic(x,E,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,U),oe.resetDefaultState(),P=-1,B=null,_.pop(),_.length>0?(p=_[_.length-1],k===!0&&tt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function ka(E,U,G,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Bt.intersectsSprite(E)){W&&St.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);let ut=$.update(E),xt=E.material;xt.visible&&x.push(E,ut,xt,G,St.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Bt.intersectsObject(E))){let ut=$.update(E),xt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),St.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),St.copy(ut.boundingSphere.center)),St.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(xt)){let yt=ut.groups;for(let Et=0,Tt=yt.length;Et<Tt;Et++){let vt=yt[Et],ee=xt[vt.materialIndex];ee&&ee.visible&&x.push(E,ut,ee,G,St.z,vt)}}else xt.visible&&x.push(E,ut,xt,G,St.z,null)}}let et=E.children;for(let ut=0,xt=et.length;ut<xt;ut++)ka(et[ut],U,G,W)}function Ic(E,U,G,W){let F=E.opaque,et=E.transmissive,ut=E.transparent;p.setupLightsView(G),k===!0&&tt.setGlobalState(v.clippingPlanes,G),W&&At.viewport(y.copy(W)),F.length>0&&Ys(F,U,G),et.length>0&&Ys(et,U,G),ut.length>0&&Ys(ut,U,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Lc(E,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ui(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ks:Di,minFilter:xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let et=p.state.transmissionRenderTarget[W.id],ut=W.viewport||y;et.setSize(ut.z,ut.w);let xt=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(N),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Rt.render(G);let yt=v.toneMapping;v.toneMapping=Ki;let Et=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),k===!0&&tt.setGlobalState(v.clippingPlanes,W),Ys(E,G,W),R.updateMultisampleRenderTarget(et),R.updateRenderTargetMipmap(et),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let vt=0,ee=U.length;vt<ee;vt++){let ce=U[vt],me=ce.object,Xe=ce.geometry,jt=ce.material,Mt=ce.group;if(jt.side===He&&me.layers.test(W.layers)){let Pe=jt.side;jt.side=Ve,jt.needsUpdate=!0,Dc(me,G,W,Xe,jt,Mt),jt.side=Pe,jt.needsUpdate=!0,Tt=!0}}Tt===!0&&(R.updateMultisampleRenderTarget(et),R.updateRenderTargetMipmap(et))}v.setRenderTarget(xt),v.setClearColor(N,O),Et!==void 0&&(W.viewport=Et),v.toneMapping=yt}function Ys(E,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,et=E.length;F<et;F++){let ut=E[F],xt=ut.object,yt=ut.geometry,Et=W===null?ut.material:W,Tt=ut.group;xt.layers.test(G.layers)&&Dc(xt,U,G,yt,Et,Tt)}}function Dc(E,U,G,W,F,et){E.onBeforeRender(v,U,G,W,F,et),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,U,G,W,E,et),F.transparent===!0&&F.side===He&&F.forceSinglePass===!1?(F.side=Ve,F.needsUpdate=!0,v.renderBufferDirect(G,U,W,F,E,et),F.side=ji,F.needsUpdate=!0,v.renderBufferDirect(G,U,W,F,E,et),F.side=He):v.renderBufferDirect(G,U,W,F,E,et),E.onAfterRender(v,U,G,W,F,et)}function $s(E,U,G){U.isScene!==!0&&(U=Ot);let W=Pt.get(E),F=p.state.lights,et=p.state.shadowsArray,ut=F.state.version,xt=_t.getParameters(E,F.state,et,U,G),yt=_t.getProgramCacheKey(xt),Et=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?H:b).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",qt),Et=new Map,W.programs=Et);let Tt=Et.get(yt);if(Tt!==void 0){if(W.currentProgram===Tt&&W.lightsStateVersion===ut)return Nc(E,xt),Tt}else xt.uniforms=_t.getUniforms(E),E.onBeforeCompile(xt,v),Tt=_t.acquireProgram(xt,yt),Et.set(yt,Tt),W.uniforms=xt.uniforms;let vt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(vt.clippingPlanes=tt.uniform),Nc(E,xt),W.needsLights=Hu(E),W.lightsStateVersion=ut,W.needsLights&&(vt.ambientLightColor.value=F.state.ambient,vt.lightProbe.value=F.state.probe,vt.directionalLights.value=F.state.directional,vt.directionalLightShadows.value=F.state.directionalShadow,vt.spotLights.value=F.state.spot,vt.spotLightShadows.value=F.state.spotShadow,vt.rectAreaLights.value=F.state.rectArea,vt.ltc_1.value=F.state.rectAreaLTC1,vt.ltc_2.value=F.state.rectAreaLTC2,vt.pointLights.value=F.state.point,vt.pointLightShadows.value=F.state.pointShadow,vt.hemisphereLights.value=F.state.hemi,vt.directionalShadowMap.value=F.state.directionalShadowMap,vt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,vt.spotShadowMap.value=F.state.spotShadowMap,vt.spotLightMatrix.value=F.state.spotLightMatrix,vt.spotLightMap.value=F.state.spotLightMap,vt.pointShadowMap.value=F.state.pointShadowMap,vt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Tt,W.uniformsList=null,Tt}function Uc(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Jn.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Nc(E,U){let G=Pt.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ou(E,U,G,W,F){U.isScene!==!0&&(U=Ot),R.resetTextureUnits();let et=U.fog,ut=W.isMeshStandardMaterial?U.environment:null,xt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:en,yt=(W.isMeshStandardMaterial?H:b).get(W.envMap||ut),Et=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Tt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),vt=!!G.morphAttributes.position,ee=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color,me=Ki;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=v.toneMapping);let Xe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=Xe!==void 0?Xe.length:0,Mt=Pt.get(W),Pe=p.state.lights;if(k===!0&&(j===!0||E!==B)){let je=E===B&&W.id===P;tt.setState(W,E,je)}let Qt=!1;W.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Pe.state.version||Mt.outputColorSpace!==xt||F.isBatchedMesh&&Mt.batching===!1||!F.isBatchedMesh&&Mt.batching===!0||F.isBatchedMesh&&Mt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Mt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Mt.instancing===!1||!F.isInstancedMesh&&Mt.instancing===!0||F.isSkinnedMesh&&Mt.skinning===!1||!F.isSkinnedMesh&&Mt.skinning===!0||F.isInstancedMesh&&Mt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Mt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Mt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Mt.instancingMorph===!1&&F.morphTexture!==null||Mt.envMap!==yt||W.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==tt.numPlanes||Mt.numIntersection!==tt.numIntersection)||Mt.vertexAlphas!==Et||Mt.vertexTangents!==Tt||Mt.morphTargets!==vt||Mt.morphNormals!==ee||Mt.morphColors!==ce||Mt.toneMapping!==me||Mt.morphTargetsCount!==jt)&&(Qt=!0):(Qt=!0,Mt.__version=W.version);let ri=Mt.currentProgram;Qt===!0&&(ri=$s(W,U,F));let Tn=!1,qe=!1,Ha=!1,_e=ri.getUniforms(),Vi=Mt.uniforms;if(At.useProgram(ri.program)&&(Tn=!0,qe=!0,Ha=!0),W.id!==P&&(P=W.id,qe=!0),Tn||B!==E){Yt.reverseDepthBuffer?(ct.copy(E.projectionMatrix),qd(ct),Yd(ct),_e.setValue(I,"projectionMatrix",ct)):_e.setValue(I,"projectionMatrix",E.projectionMatrix),_e.setValue(I,"viewMatrix",E.matrixWorldInverse);let je=_e.map.cameraPosition;je!==void 0&&je.setValue(I,bt.setFromMatrixPosition(E.matrixWorld)),Yt.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,qe=!0,Ha=!0)}if(F.isSkinnedMesh){_e.setOptional(I,F,"bindMatrix"),_e.setOptional(I,F,"bindMatrixInverse");let je=F.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),_e.setValue(I,"boneTexture",je.boneTexture,R))}F.isBatchedMesh&&(_e.setOptional(I,F,"batchingTexture"),_e.setValue(I,"batchingTexture",F._matricesTexture,R),_e.setOptional(I,F,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",F._indirectTexture,R),_e.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",F._colorsTexture,R));let Va=G.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0)&&Ct.update(F,G,ri),(qe||Mt.receiveShadow!==F.receiveShadow)&&(Mt.receiveShadow=F.receiveShadow,_e.setValue(I,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Vi.envMap.value=yt,Vi.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Vi.envMapIntensity.value=U.environmentIntensity),qe&&(_e.setValue(I,"toneMappingExposure",v.toneMappingExposure),Mt.needsLights&&ku(Vi,Ha),et&&W.fog===!0&&at.refreshFogUniforms(Vi,et),at.refreshMaterialUniforms(Vi,W,Y,z,p.state.transmissionRenderTarget[E.id]),Jn.upload(I,Uc(Mt),Vi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Jn.upload(I,Uc(Mt),Vi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(I,"center",F.center),_e.setValue(I,"modelViewMatrix",F.modelViewMatrix),_e.setValue(I,"normalMatrix",F.normalMatrix),_e.setValue(I,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let je=W.uniformsGroups;for(let Ga=0,Vu=je.length;Ga<Vu;Ga++){let Fc=je[Ga];D.update(Fc,ri),D.bind(Fc,ri)}}return ri}function ku(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Hu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,G){Pt.get(E.texture).__webglTexture=U,Pt.get(E.depthTexture).__webglTexture=G;let W=Pt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let G=Pt.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){A=E,C=U,T=G;let W=!0,F=null,et=!1,ut=!1;if(E){let yt=Pt.get(E);if(yt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(yt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(yt.__hasExternalTextures)R.rebindTextures(E,Pt.get(E.texture).__webglTexture,Pt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let vt=E.depthTexture;if(yt.__boundDepthTexture!==vt){if(vt!==null&&Pt.has(vt)&&(E.width!==vt.image.width||E.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ut=!0);let Tt=Pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?F=Tt[U][G]:F=Tt[U],et=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=Pt.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?F=Tt[G]:F=Tt,y.copy(E.viewport),M.copy(E.scissor),L=E.scissorTest}else y.copy(it).multiplyScalar(Y).floor(),M.copy(lt).multiplyScalar(Y).floor(),L=Lt;if(At.bindFramebuffer(I.FRAMEBUFFER,F)&&W&&At.drawBuffers(E,F),At.viewport(y),At.scissor(M),At.setScissorTest(L),et){let yt=Pt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,G)}else if(ut){let yt=Pt.get(E.texture),Et=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,G||0,Et)}P=-1},this.readRenderTargetPixels=function(E,U,G,W,F,et,ut){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){At.bindFramebuffer(I.FRAMEBUFFER,xt);try{let yt=E.texture,Et=yt.format,Tt=yt.type;if(!Yt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&G>=0&&G<=E.height-F&&I.readPixels(U,G,W,F,Dt.convert(Et),Dt.convert(Tt),et)}finally{let yt=A!==null?Pt.get(A).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,W,F,et,ut){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){let yt=E.texture,Et=yt.format,Tt=yt.type;if(!Yt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-W&&G>=0&&G<=E.height-F){At.bindFramebuffer(I.FRAMEBUFFER,xt);let vt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,vt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(U,G,W,F,Dt.convert(Et),Dt.convert(Tt),0);let ee=A!==null?Pt.get(A).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,ee);let ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Xd(I,ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,vt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(vt),I.deleteSync(ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,G=0){E.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let W=Math.pow(2,-G),F=Math.floor(E.image.width*W),et=Math.floor(E.image.height*W),ut=U!==null?U.x:0,xt=U!==null?U.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ut,xt,F,et),At.unbindTexture()},this.copyTextureToTexture=function(E,U,G=null,W=null,F=0){E.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let et,ut,xt,yt,Et,Tt;G!==null?(et=G.max.x-G.min.x,ut=G.max.y-G.min.y,xt=G.min.x,yt=G.min.y):(et=E.image.width,ut=E.image.height,xt=0,yt=0),W!==null?(Et=W.x,Tt=W.y):(Et=0,Tt=0);let vt=Dt.convert(U.format),ee=Dt.convert(U.type);R.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let ce=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xe=I.getParameter(I.UNPACK_SKIP_PIXELS),jt=I.getParameter(I.UNPACK_SKIP_ROWS),Mt=I.getParameter(I.UNPACK_SKIP_IMAGES),Pe=E.isCompressedTexture?E.mipmaps[F]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,yt),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Et,Tt,et,ut,vt,ee,Pe.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Et,Tt,Pe.width,Pe.height,vt,Pe.data):I.texSubImage2D(I.TEXTURE_2D,F,Et,Tt,et,ut,vt,ee,Pe),I.pixelStorei(I.UNPACK_ROW_LENGTH,ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mt),F===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G=null,W=null,F=0){E.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0);let et,ut,xt,yt,Et,Tt,vt,ee,ce,me=E.isCompressedTexture?E.mipmaps[F]:E.image;G!==null?(et=G.max.x-G.min.x,ut=G.max.y-G.min.y,xt=G.max.z-G.min.z,yt=G.min.x,Et=G.min.y,Tt=G.min.z):(et=me.width,ut=me.height,xt=me.depth,yt=0,Et=0,Tt=0),W!==null?(vt=W.x,ee=W.y,ce=W.z):(vt=0,ee=0,ce=0);let Xe=Dt.convert(U.format),jt=Dt.convert(U.type),Mt;if(U.isData3DTexture)R.setTexture3D(U,0),Mt=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Mt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Pe=I.getParameter(I.UNPACK_ROW_LENGTH),Qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ri=I.getParameter(I.UNPACK_SKIP_PIXELS),Tn=I.getParameter(I.UNPACK_SKIP_ROWS),qe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Tt),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Mt,F,vt,ee,ce,et,ut,xt,Xe,jt,me.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,F,vt,ee,ce,et,ut,xt,Xe,me.data):I.texSubImage3D(Mt,F,vt,ee,ce,et,ut,xt,Xe,jt,me),I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ri),I.pixelStorei(I.UNPACK_SKIP_ROWS,Tn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qe),F===0&&U.generateMipmaps&&I.generateMipmap(Mt),At.unbindTexture()},this.initRenderTarget=function(E){Pt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),At.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,At.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===oc?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===fa?"display-p3":"srgb"}};var Kr=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ns=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},jr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ne=new S,Fs=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),n=ie(n,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zs=class extends yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hn,bs=new S,Vn=new S,Gn=new S,Wn=new ot,Ss=new ot,pu=new re,gr=new S,ws=new S,xr=new S,Dh=new ot,vo=new ot,Uh=new ot,Qr=class extends Re{constructor(t=new zs){if(super(),this.isSprite=!0,this.type="Sprite",Hn===void 0){Hn=new ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jr(e,5);Hn.setIndex([0,1,2,0,2,3]),Hn.setAttribute("position",new Fs(i,3,0,!1)),Hn.setAttribute("uv",new Fs(i,2,3,!1))}this.geometry=Hn,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vn.setFromMatrixScale(this.matrixWorld),pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vn.multiplyScalar(-Gn.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;yr(gr.set(-.5,-.5,0),Gn,a,Vn,n,r),yr(ws.set(.5,-.5,0),Gn,a,Vn,n,r),yr(xr.set(.5,.5,0),Gn,a,Vn,n,r),Dh.set(0,0),vo.set(1,0),Uh.set(1,1);let o=t.ray.intersectTriangle(gr,ws,xr,!1,bs);if(o===null&&(yr(ws.set(-.5,.5,0),Gn,a,Vn,n,r),vo.set(0,1),o=t.ray.intersectTriangle(gr,xr,ws,!1,bs),o===null))return;let l=t.ray.origin.distanceTo(bs);l<t.near||l>t.far||e.push({distance:l,point:bs.clone(),uv:Ci.getInterpolation(bs,gr,ws,xr,Dh,vo,Uh,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function yr(s,t,e,i,n,r){Wn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Ss.x=r*Wn.x-n*Wn.y,Ss.y=n*Wn.x+r*Wn.y):Ss.copy(Wn),s.copy(t),s.x+=Ss.x,s.y+=Ss.y,s.applyMatrix4(pu)}var Fi=class extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ta=new S,ea=new S,Nh=new re,Es=new Us,_r=new vn,Mo=new S,Fh=new S,Bs=class extends Re{constructor(t=new ae,e=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)ta.fromBufferAttribute(e,n-1),ea.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ta.distanceTo(ea);t.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(n),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;Nh.copy(n).invert(),Es.copy(t.ray).applyMatrix4(Nh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),_=h.getX(x+1),v=vr(this,t,Es,l,m,_);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=vr(this,t,Es,l,x,p);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=vr(this,t,Es,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=vr(this,t,Es,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vr(s,t,e,i,n,r){let a=s.geometry.attributes.position;if(ta.fromBufferAttribute(a,n),ea.fromBufferAttribute(a,r),e.distanceSqToSegment(ta,ea,Mo,Fh)>i)return;Mo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Mo);if(!(l<t.near||l>t.far))return{distance:l,point:Fh.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var zh=new S,Bh=new S,ss=class extends Bs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)zh.fromBufferAttribute(e,n),Bh.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+zh.distanceTo(Bh);t.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Cl=class extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Oh=new re,Pl=new Us,Mr=new vn,br=new S,ia=class extends Re{constructor(t=new ae,e=new Cl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(n),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;Oh.copy(n).invert(),Pl.copy(t.ray).applyMatrix4(Oh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,x=f;g<x;g++){let p=c.getX(g);br.fromBufferAttribute(d,p),kh(br,p,l,n,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)br.fromBufferAttribute(d,g),kh(br,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kh(s,t,e,i,n,r,a){let o=Pl.distanceSqToPoint(s);if(o<e){let l=new S;Pl.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var rs=class extends Ze{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],u=i[n+1]-h,f=(a-h)/u;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new ot:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new S,n=[],r=[],a=[],o=new S,l=new re;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new S)}r[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ae(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Ae(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Os=class extends ii{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Il=class extends Os{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,n(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var Sr=new S,bo=new hc,So=new hc,wo=new hc,Ll=class extends ii{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new S){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Sr.subVectors(n[0],n[1]).add(n[0]),c=Sr);let d=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Sr.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),bo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,p),So.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,p),wo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),So.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),wo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(bo.calc(l),So.calc(l),wo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new S().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hh(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Gg(s,t){let e=1-s;return e*e*t}function Wg(s,t){return 2*(1-s)*s*t}function Xg(s,t){return s*s*t}function Cs(s,t,e,i){return Gg(s,t)+Wg(s,e)+Xg(s,i)}function qg(s,t){let e=1-s;return e*e*e*t}function Yg(s,t){let e=1-s;return 3*e*e*s*t}function $g(s,t){return 3*(1-s)*s*s*t}function Zg(s,t){return s*s*s*t}function Ps(s,t,e,i,n){return qg(s,t)+Yg(s,e)+$g(s,i)+Zg(s,n)}var na=class extends ii{constructor(t=new ot,e=new ot,i=new ot,n=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ot){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ps(t,n.x,r.x,a.x,o.x),Ps(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dl=class extends ii{constructor(t=new S,e=new S,i=new S,n=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new S){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ps(t,n.x,r.x,a.x,o.x),Ps(t,n.y,r.y,a.y,o.y),Ps(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends ii{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends ii{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends ii{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Cs(t,n.x,r.x,a.x),Cs(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends ii{constructor(t=new S,e=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new S){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Cs(t,n.x,r.x,a.x),Cs(t,n.y,r.y,a.y),Cs(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Hh(o,l.x,c.x,h.x,d.x),Hh(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ot().fromArray(n))}return this}},Vh=Object.freeze({__proto__:null,ArcCurve:Il,CatmullRomCurve3:Ll,CubicBezierCurve:na,CubicBezierCurve3:Dl,EllipseCurve:Os,LineCurve:sa,LineCurve3:Ul,QuadraticBezierCurve:ra,QuadraticBezierCurve3:Nl,SplineCurve:aa}),Fl=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Vh[n.type]().fromJSON(n))}return this}},zl=class extends Fl{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new sa(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new ra(this.currentPoint.clone(),new ot(t,e),new ot(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new na(this.currentPoint.clone(),new ot(t,e),new ot(i,n),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new aa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new Os(t,e,i,n,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bl=class s extends ae{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ae(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new S,u=new ot,f=new S,g=new S,x=new S,p=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){let v=i+_*h*n,w=Math.sin(v),C=Math.cos(v);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*w,d.y=t[T].y,d.z=t[T].x*C,a.push(d.x,d.y,d.z),u.x=_/e,u.y=T/(t.length-1),o.push(u.x,u.y);let A=l[3*T+0]*w,P=l[3*T+1],B=l[3*T+0]*C;c.push(A,P,B)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let w=v+_*t.length,C=w,T=w+t.length,A=w+t.length+1,P=w+1;r.push(C,T,P),r.push(A,P,T)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("uv",new Ht(o,2)),this.setAttribute("normal",new Ht(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},tn=class s extends Bl{constructor(t=1,e=1,i=4,n=8){let r=new zl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var Ce=class s extends ae{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],p=i/2,m=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(f,2));function _(){let w=new S,C=new S,T=0,A=(e-t)/i;for(let P=0;P<=r;P++){let B=[],y=P/r,M=y*(e-t)+t;for(let L=0;L<=n;L++){let N=L/n,O=N*l+o,X=Math.sin(O),z=Math.cos(O);C.x=M*X,C.y=-y*i+p,C.z=M*z,d.push(C.x,C.y,C.z),w.set(X,A,z).normalize(),u.push(w.x,w.y,w.z),f.push(N,1-y),B.push(g++)}x.push(B)}for(let P=0;P<n;P++)for(let B=0;B<r;B++){let y=x[B][P],M=x[B+1][P],L=x[B+1][P+1],N=x[B][P+1];t>0&&(h.push(y,M,N),T+=3),e>0&&(h.push(M,L,N),T+=3)}c.addGroup(m,T,0),m+=T}function v(w){let C=g,T=new ot,A=new S,P=0,B=w===!0?t:e,y=w===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,p*y,0),u.push(0,y,0),f.push(.5,.5),g++;let M=g;for(let L=0;L<=n;L++){let O=L/n*l+o,X=Math.cos(O),z=Math.sin(O);A.x=B*z,A.y=p*y,A.z=B*X,d.push(A.x,A.y,A.z),u.push(0,y,0),T.x=X*.5+.5,T.y=z*.5*y+.5,f.push(T.x,T.y),g++}for(let L=0;L<n;L++){let N=C+L,O=M+L;w===!0?h.push(O,O+1,N):h.push(O+1,O,N),P+=3}c.addGroup(m,P,w===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oa=class s extends Ce{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ol=class s extends ae{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new S,w=new S,C=new S;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],w),f(e[T+2],C),l(v,w,C,_)}function l(_,v,w,C){let T=C+1,A=[];for(let P=0;P<=T;P++){A[P]=[];let B=_.clone().lerp(w,P/T),y=v.clone().lerp(w,P/T),M=T-P;for(let L=0;L<=M;L++)L===0&&P===T?A[P][L]=B:A[P][L]=B.clone().lerp(y,L/M)}for(let P=0;P<T;P++)for(let B=0;B<2*(T-P)-1;B++){let y=Math.floor(B/2);B%2===0?(u(A[P][y+1]),u(A[P+1][y]),u(A[P][y])):(u(A[P][y+1]),u(A[P+1][y+1]),u(A[P+1][y]))}}function c(_){let v=new S;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(_),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function h(){let _=new S;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let w=p(_)/2/Math.PI+.5,C=m(_)/Math.PI+.5;a.push(w,1-C)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let v=a[_+0],w=a[_+2],C=a[_+4],T=Math.max(v,w,C),A=Math.min(v,w,C);T>.9&&A<.1&&(v<.2&&(a[_+0]+=1),w<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,v){let w=_*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function g(){let _=new S,v=new S,w=new S,C=new S,T=new ot,A=new ot,P=new ot;for(let B=0,y=0;B<r.length;B+=9,y+=6){_.set(r[B+0],r[B+1],r[B+2]),v.set(r[B+3],r[B+4],r[B+5]),w.set(r[B+6],r[B+7],r[B+8]),T.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),C.copy(_).add(v).add(w).divideScalar(3);let M=p(C);x(T,y+0,_,M),x(A,y+2,v,M),x(P,y+4,w,M)}}function x(_,v,w,C){C<0&&_.x===1&&(a[v]=_.x-1),w.x===0&&w.z===0&&(a[v]=C/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var wr=new S,Er=new S,Eo=new S,Tr=new Ci,la=class extends ae{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),r=Math.cos($n*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:p,c:m}=Tr;if(x.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Tr.getNormal(Eo),d[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,d[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,d[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let v=(_+1)%3,w=d[_],C=d[v],T=Tr[h[_]],A=Tr[h[v]],P=`${w}_${C}`,B=`${C}_${w}`;B in u&&u[B]?(Eo.dot(u[B].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),u[B]=null):P in u||(u[P]={index0:c[_],index1:c[v],normal:Eo.clone()})}}for(let g in u)if(u[g]){let{index0:x,index1:p}=u[g];wr.fromBufferAttribute(o,x),Er.fromBufferAttribute(o,p),f.push(wr.x,wr.y,wr.z),f.push(Er.x,Er.y,Er.z)}this.setAttribute("position",new Ht(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ca=class s extends Ol{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var as=class s extends ae{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/n,f=new S,g=new ot;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let m=r+p/i*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<n;x++){let p=x*(i+1);for(let m=0;m<i;m++){let _=m+p,v=_,w=_+i+1,C=_+i+2,T=_+1;o.push(v,w,T),o.push(w,C,T)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var zi=class s extends ae{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new S,u=new S,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let _=[],v=m/i,w=0;m===0&&a===0?w=.5/e:m===i&&l===Math.PI&&(w=-.5/e);for(let C=0;C<=e;C++){let T=C/e;d.x=-t*Math.cos(n+T*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(n+T*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(T+w,1-v),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let v=h[m][_+1],w=h[m][_],C=h[m+1][_],T=h[m+1][_+1];(m!==0||a>0)&&f.push(v,w,T),(m!==i-1||l<Math.PI)&&f.push(w,C,T)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bi=class s extends ae{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new S,d=new S,u=new S;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let x=g/n*r,p=f/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let x=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,m=(n+1)*(f-1)+g,_=(n+1)*f+g;a.push(x,p,_),a.push(p,m,_)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ne=class extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ar(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Jg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var os=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kl=class extends os{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=t,o=2*e-i;break;case Gc:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:a=t,l=2*i-e;break;case Gc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-f)*p+(1.5+f)*x+.5*g,w=f*p-f*x;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+_*a[c+C]+v*a[l+C]+w*a[d+C];return r}},Hl=class extends os{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Vl=class extends os{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},di=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case ul:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Jg(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=ul;var Mn=class extends di{constructor(t,e,i){super(t,e,i)}};Mn.prototype.ValueTypeName="bool";Mn.prototype.ValueBufferType=Array;Mn.prototype.DefaultInterpolation=Ur;Mn.prototype.InterpolantFactoryMethodLinear=void 0;Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends di{};Gl.prototype.ValueTypeName="color";var Wl=class extends di{};Wl.prototype.ValueTypeName="number";var Xl=class extends os{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)ze.slerpFlat(r,0,a,c-o,a,c,l);return r}},ha=class extends di{InterpolantFactoryMethodLinear(t){return new Xl(this.times,this.values,this.getValueSize(),t)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var bn=class extends di{constructor(t,e,i){super(t,e,i)}};bn.prototype.ValueTypeName="string";bn.prototype.ValueBufferType=Array;bn.prototype.DefaultInterpolation=Ur;bn.prototype.InterpolantFactoryMethodLinear=void 0;bn.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends di{};ql.prototype.ValueTypeName="vector";var Yl=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Kg=new Yl,$l=class{constructor(t){this.manager=t!==void 0?t:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var ua=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ls=class extends ua{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},To=new re,Gh=new S,Wh=new S,Zl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gh),Wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wh),e.updateMatrixWorld(),To.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(To)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Jl=class extends Zl{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Jl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var uc="\\[\\]\\.:\\/",jg=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",Qg="[^"+uc.replace("\\.","")+"]",tx=/((?:WC+[\/:])*)/.source.replace("WC",dc),ex=/(WCOD+)?/.source.replace("WCOD",Qg),ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),sx=new RegExp("^"+tx+ex+ix+nx+"$"),rx=["material","materials","bones","map"],Kl=class{constructor(t,e,i){let n=i||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},fe=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(t){let e=sx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);rx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Kl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ix=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);function fc(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ae,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=mu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let g=mu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function mu(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ue(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var Oi={WALLRUN:1,GRAPPLE:2,NOWALL:4},Hs=1e-7,ga=class{constructor(t=220,e=4){this.half=t,this.cell=e,this.n=Math.ceil(t*2/e),this.cells=new Array(this.n*this.n),this.tris=[],this.nrm=[],this.box=[],this.flags=[],this.count=0,this.stamp=0,this.marks=null,this.groundY=0,this._c={px:0,py:0,pz:0,qx:0,qy:0,qz:0,d2:0}}addGeometry(t,e,i=Oi.WALLRUN|Oi.GRAPPLE){let n=t.index?t.toNonIndexed():t,r=n.attributes.position,a=new S,o=[],l=[];for(let c=0;c<r.count;c++)a.fromBufferAttribute(r,c),e&&a.applyMatrix4(e),l.push(a.x,a.y,a.z),l.length===9&&(this.addTri(l,i),l.length=0);n!==t&&n.dispose()}addTri(t,e){let[i,n,r,a,o,l,c,h,d]=t,u=a-i,f=o-n,g=l-r,x=c-i,p=h-n,m=d-r,_=f*m-g*p,v=g*x-u*m,w=u*p-f*x,C=Math.hypot(_,v,w);if(C<1e-9)return;_/=C,v/=C,w/=C;let T=this.count++;this.tris.push(i,n,r,a,o,l,c,h,d),this.nrm.push(_,v,w);let A=Math.min(i,a,c),P=Math.min(n,o,h),B=Math.min(r,l,d),y=Math.max(i,a,c),M=Math.max(n,o,h),L=Math.max(r,l,d);this.box.push(A,P,B,y,M,L),this.flags.push(e);let N=this.cell,O=this.half,X=this.n,z=Math.max(0,Math.floor((A+O)/N)),Y=Math.min(X-1,Math.floor((y+O)/N)),V=Math.max(0,Math.floor((B+O)/N)),nt=Math.min(X-1,Math.floor((L+O)/N));for(let it=z;it<=Y;it++)for(let lt=V;lt<=nt;lt++){let Lt=it*X+lt;(this.cells[Lt]||(this.cells[Lt]=[])).push(T)}}build(){this.T=new Float32Array(this.tris),this.N=new Float32Array(this.nrm),this.B=new Float32Array(this.box),this.F=new Uint8Array(this.flags),this.marks=new Uint32Array(this.count),this.tris=this.nrm=this.box=this.flags=null;for(let t=0;t<this.cells.length;t++)this.cells[t]&&(this.cells[t]=Int32Array.from(this.cells[t]))}_gather(t,e,i,n,r,a,o){let l=this.cell,c=this.half,h=this.n,d=Math.max(0,Math.floor((t+c)/l)),u=Math.min(h-1,Math.floor((n+c)/l)),f=Math.max(0,Math.floor((i+c)/l)),g=Math.min(h-1,Math.floor((a+c)/l)),x=++this.stamp,p=this.marks,m=this.B;o.length=0;for(let _=d;_<=u;_++)for(let v=f;v<=g;v++){let w=this.cells[_*h+v];if(w)for(let C=0;C<w.length;C++){let T=w[C];if(p[T]===x)continue;p[T]=x;let A=T*6;m[A]>n||m[A+3]<t||m[A+1]>r||m[A+4]<e||m[A+2]>a||m[A+5]<i||o.push(T)}}return o}_segTri(t,e,i,n,r,a,o){let l=this.T,c=o*9,h=l[c],d=l[c+1],u=l[c+2],f=l[c+3],g=l[c+4],x=l[c+5],p=l[c+6],m=l[c+7],_=l[c+8],v=this._c,w=n-t,C=r-e,T=a-i,A=f-h,P=g-d,B=x-u,y=p-h,M=m-d,L=_-u,N=C*L-T*M,O=T*y-w*L,X=w*M-C*y,z=A*N+P*O+B*X;if(Math.abs(z)>Hs){let k=1/z,j=t-h,ct=e-d,rt=i-u,bt=(j*N+ct*O+rt*X)*k;if(bt>=0&&bt<=1){let St=ct*B-rt*P,Ot=rt*A-j*B,Vt=j*P-ct*A,kt=(w*St+C*Ot+T*Vt)*k;if(kt>=0&&bt+kt<=1){let I=(y*St+M*Ot+L*Vt)*k;if(I>=0&&I<=1)return v.px=v.qx=t+w*I,v.py=v.qy=e+C*I,v.pz=v.qz=i+T*I,v.d2=0}}}let Y=1/0,V,nt,it,lt,Lt,Bt;for(let k=0;k<2;k++){let j=k?n:t,ct=k?r:e,rt=k?a:i;lx(j,ct,rt,h,d,u,f,g,x,p,m,_,Sn);let bt=(j-Sn[0])**2+(ct-Sn[1])**2+(rt-Sn[2])**2;bt<Y&&(Y=bt,V=j,nt=ct,it=rt,lt=Sn[0],Lt=Sn[1],Bt=Sn[2])}for(let k=0;k<3;k++){let Vt=cx(t,e,i,n,r,a,k===0?h:k===1?f:p,k===0?d:k===1?g:m,k===0?u:k===1?x:_,k===0?f:k===1?p:h,k===0?g:k===1?m:d,k===0?x:k===1?_:u,wn);Vt<Y&&(Y=Vt,V=wn[0],nt=wn[1],it=wn[2],lt=wn[3],Lt=wn[4],Bt=wn[5])}return v.px=V,v.py=nt,v.pz=it,v.qx=lt,v.qy=Lt,v.qz=Bt,v.d2=Y}collideCapsule(t,e,i,n,r=4){n.length=0;let a=gu;for(let o=0;o<r;o++){let l=t.x,c=t.y+e,h=t.z,d=t.y+i-e,u=0,f=0,g=0,x=0;t.y<this.groundY&&(u=this.groundY-t.y,f=0,g=1,x=0),this._gather(l-e,t.y-.01,h-e,l+e,t.y+i+.01,h+e,a);for(let _=0;_<a.length;_++){let v=a[_],w=this._segTri(l,c,h,l,d,h,v);if(w>=e*e)continue;let C=this._c,T,A,P,B,y=this.N,M=v*3;if(w<1e-10){let L=y[M],N=y[M+1],O=y[M+2],X=this.T,z=v*9,Y=(c+d)/2;(l-X[z])*L+(Y-X[z+1])*N+(h-X[z+2])*O<0&&(L=-L,N=-N,O=-O);let nt=(l-X[z])*L+(c-X[z+1])*N+(h-X[z+2])*O,it=(l-X[z])*L+(d-X[z+1])*N+(h-X[z+2])*O;T=e-Math.min(nt,it),A=L,P=N,B=O}else{let L=Math.sqrt(w);T=e-L,A=(C.px-C.qx)/L,P=(C.py-C.qy)/L,B=(C.pz-C.qz)/L;let N=A*y[M]+P*y[M+1]+B*y[M+2];Math.abs(N)>.999&&(A=y[M],P=y[M+1],B=y[M+2],T=e-N*L)}T>u&&(u=T,f=A,g=P,x=B)}if(u<=0)break;let p=u+1e-4;t.x+=f*p,t.y+=g*p,t.z+=x*p;let m=(n.length<ma.length||ma.push({x:0,y:0,z:0,depth:0}),ma[n.length]);m.x=f,m.y=g,m.z=x,m.depth=u,n.push(m)}return n.length>0}capsuleFree(t,e,i,n,r){if(e<this.groundY-.001)return!1;let a=this._gather(t-n,e,i-n,t+n,e+r,i+n,gu);for(let o=0;o<a.length;o++)if(this._segTri(t,e+n,i,t,e+r-n,i,a[o])<n*n-1e-6)return!1;return!0}raycast(t,e,i,n,r,a,o,l=ax,c=0){let h=o,d=-1;if(r<-1e-6&&e>this.groundY){let L=(this.groundY-e)/r;L<h&&(h=L,d=-2)}let u=this.cell,f=this.half,g=this.n,x=Math.floor((t+f)/u),p=Math.floor((i+f)/u),m=n>0?1:-1,_=a>0?1:-1,v=Math.abs(n)>1e-9?u/Math.abs(n):1/0,w=Math.abs(a)>1e-9?u/Math.abs(a):1/0,C=Math.abs(n)>1e-9?((n>0?x+1:x)*u-f-t)/n:1/0,T=Math.abs(a)>1e-9?((a>0?p+1:p)*u-f-i)/a:1/0,A=++this.stamp,P=this.marks,B=this.T,y=this.F,M=0;for(let L=0;L<400;L++){if(x>=0&&p>=0&&x<g&&p<g){let O=this.cells[x*g+p];if(O)for(let X=0;X<O.length;X++){let z=O[X];if(P[z]===A||(P[z]=A,c&&!(y[z]&c)))continue;let Y=z*9,V=ox(t,e,i,n,r,a,B[Y],B[Y+1],B[Y+2],B[Y+3],B[Y+4],B[Y+5],B[Y+6],B[Y+7],B[Y+8]);V>0&&V<h&&(h=V,d=z)}}let N=Math.min(C,T);if(h<=N||N>o||(M=N,C<T?(x+=m,C+=v):(p+=_,T+=w),x<0&&m<0||p<0&&_<0||x>=g&&m>0||p>=g&&_>0))break}if(d===-1)return null;if(l.t=h,l.x=t+n*h,l.y=e+r*h,l.z=i+a*h,d===-2)l.nx=0,l.ny=1,l.nz=0,l.flags=Oi.GRAPPLE,l.tri=-1;else{let L=this.N,N=d*3,O=L[N],X=L[N+1],z=L[N+2];O*n+X*r+z*a>0&&(O=-O,X=-X,z=-z),l.nx=O,l.ny=X,l.nz=z,l.flags=y[d],l.tri=d}return l}},gu=[],ma=[],Sn=[0,0,0],wn=[0,0,0,0,0,0],ax={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0};function ox(s,t,e,i,n,r,a,o,l,c,h,d,u,f,g){let x=c-a,p=h-o,m=d-l,_=u-a,v=f-o,w=g-l,C=n*w-r*v,T=r*_-i*w,A=i*v-n*_,P=x*C+p*T+m*A;if(Math.abs(P)<1e-9)return-1;let B=1/P,y=s-a,M=t-o,L=e-l,N=(y*C+M*T+L*A)*B;if(N<0||N>1)return-1;let O=M*m-L*p,X=L*x-y*m,z=y*p-M*x,Y=(i*O+n*X+r*z)*B;return Y<0||N+Y>1?-1:(_*O+v*X+w*z)*B}function lx(s,t,e,i,n,r,a,o,l,c,h,d,u){let f=a-i,g=o-n,x=l-r,p=c-i,m=h-n,_=d-r,v=s-i,w=t-n,C=e-r,T=f*v+g*w+x*C,A=p*v+m*w+_*C;if(T<=0&&A<=0){u[0]=i,u[1]=n,u[2]=r;return}let P=s-a,B=t-o,y=e-l,M=f*P+g*B+x*y,L=p*P+m*B+_*y;if(M>=0&&L<=M){u[0]=a,u[1]=o,u[2]=l;return}let N=T*L-M*A;if(N<=0&&T>=0&&M<=0){let k=T/(T-M);u[0]=i+f*k,u[1]=n+g*k,u[2]=r+x*k;return}let O=s-c,X=t-h,z=e-d,Y=f*O+g*X+x*z,V=p*O+m*X+_*z;if(V>=0&&Y<=V){u[0]=c,u[1]=h,u[2]=d;return}let nt=Y*A-T*V;if(nt<=0&&A>=0&&V<=0){let k=A/(A-V);u[0]=i+p*k,u[1]=n+m*k,u[2]=r+_*k;return}let it=M*V-Y*L;if(it<=0&&L-M>=0&&Y-V>=0){let k=(L-M)/(L-M+(Y-V));u[0]=a+(c-a)*k,u[1]=o+(h-o)*k,u[2]=l+(d-l)*k;return}let lt=1/(it+nt+N),Lt=nt*lt,Bt=N*lt;u[0]=i+f*Lt+p*Bt,u[1]=n+g*Lt+m*Bt,u[2]=r+x*Lt+_*Bt}function cx(s,t,e,i,n,r,a,o,l,c,h,d,u){let f=i-s,g=n-t,x=r-e,p=c-a,m=h-o,_=d-l,v=s-a,w=t-o,C=e-l,T=f*f+g*g+x*x,A=p*p+m*m+_*_,P=p*v+m*w+_*C,B,y;if(T<=Hs&&A<=Hs)B=y=0;else if(T<=Hs)B=0,y=Math.min(1,Math.max(0,P/A));else{let M=f*v+g*w+x*C;if(A<=Hs)y=0,B=Math.min(1,Math.max(0,-M/T));else{let L=f*p+g*m+x*_,N=T*A-L*L;B=N!==0?Math.min(1,Math.max(0,(L*P-M*A)/N)):0,y=(L*B+P)/A,y<0?(y=0,B=Math.min(1,Math.max(0,-M/T))):y>1&&(y=1,B=Math.min(1,Math.max(0,(L-M)/T)))}}return u[0]=s+f*B,u[1]=t+g*B,u[2]=e+x*B,u[3]=a+p*y,u[4]=o+m*y,u[5]=l+_*y,(u[0]-u[3])**2+(u[1]-u[4])**2+(u[2]-u[5])**2}function xu(s,t,e,i=4,n=4){let r=new xe(s,t,e),a=r.attributes.uv,o=r.attributes.position,l=r.attributes.normal;for(let c=0;c<a.count;c++){let h=Math.abs(l.getX(c)),d=Math.abs(l.getY(c)),u=o.getX(c)+s/2,f=o.getY(c)+t/2,g=o.getZ(c)+e/2,x,p;d>.5?(x=u,p=g):h>.5?(x=g,p=f):(x=u,p=f),a.setXY(c,x/i,p/n)}return r}function yu(s,t,e,i=4,n=4,r="all"){let a=s/2,o={a:new S(-a,0,0),b:new S(a,0,0),c:new S(a,0,t),d:new S(-a,0,t),e:new S(a,e,t),f:new S(-a,e,t)},l=[],c=[],h=[],d=Math.hypot(t,e),u="top",f=(v,w,C,T,A,P,B)=>{if(r!=="all"&&r!==u)return;let y=v,M=w,L=C,N=T,O=A,X=P;new S().subVectors(M,y).cross(new S().subVectors(L,y)).dot(B)<0&&([M,L]=[L,M],[O,X]=[X,O]);let Y=new S().subVectors(M,y).cross(new S().subVectors(L,y)).normalize();l.push(y.x,y.y,y.z,M.x,M.y,M.z,L.x,L.y,L.z),c.push(...N,...O,...X);for(let V=0;V<3;V++)h.push(Y.x,Y.y,Y.z)},g=s/i,x=new S(0,t,-e);f(o.a,o.b,o.e,[0,0],[g,0],[g,d/n],x),f(o.a,o.e,o.f,[0,0],[g,d/n],[0,d/n],x),u="sides";let p=new S(0,-1,0);f(o.a,o.b,o.c,[0,0],[g,0],[g,t/n],p),f(o.a,o.c,o.d,[0,0],[g,t/n],[0,t/n],p);let m=new S(0,0,1);f(o.d,o.c,o.e,[0,0],[g,0],[g,e/n],m),f(o.d,o.e,o.f,[0,0],[g,e/n],[0,e/n],m),f(o.b,o.c,o.e,[0,0],[t/i,0],[t/i,e/n],new S(1,0,0)),f(o.a,o.d,o.f,[0,0],[t/i,0],[t/i,e/n],new S(-1,0,0));let _=new ae;return _.setAttribute("position",new Ht(l,3)),_.setAttribute("normal",new Ht(h,3)),_.setAttribute("uv",new Ht(c,2)),_}var us=new re,xa=new ze,ya=new ei,_u=new S,vu=new S(1,1,1);function hx(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.fillStyle="#f4f4f2",e.fillRect(0,0,512,512),e.strokeStyle="#e2e2df",e.lineWidth=2;for(let n=0;n<=512;n+=512/8)e.beginPath(),e.moveTo(n,0),e.lineTo(n,512),e.stroke(),e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();e.strokeStyle="#cfcfcb",e.lineWidth=4,e.strokeRect(0,0,512,512);let i=new rs(t);return i.wrapS=i.wrapT=Is,i.colorSpace=ke,i.anisotropy=16,i}var _a=class{constructor(t,e){this.scene=t,this.Q=e,this.col=new ga(90,4),this.batches=new Map,this.edges=[],this.half=50,this.spawnGround=[],this.spawnHigh=[],this.jumpPads=[],this.boostPads=[],this.animated=[];let i=hx();this.M={floor:new ne({map:i,roughness:.92,metalness:0}),wall:new ne({color:16448250,roughness:.95}),block:new ne({color:16777215,roughness:.9}),top:new ne({color:15527146,roughness:.9}),ramp:new ne({color:15132387,roughness:.85}),accent:new ne({color:16734751,roughness:.6})},this.edgeMat=new Fi({color:11842736}),this.build(),this.finalize()}add(t,e,i,{collide:n=!0,edges:r=!0}={}){let a=t.index?t.toNonIndexed():t;e&&a.applyMatrix4(e);for(let o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);this.batches.has(i)||this.batches.set(i,[]),this.batches.get(i).push(a),n&&this.col.addGeometry(a,null,Oi.WALLRUN|Oi.GRAPPLE),r&&this.edges.push(new la(a,30))}box(t,e,i,n,r,a,o="block",l=0,c={}){ya.set(0,l,0),xa.setFromEuler(ya),us.compose(_u.set(t,e+r/2,i),xa,vu),this.add(xu(n,r,a,8,8),us,o,c)}ramp(t,e,i,n,r,a,o=0){ya.set(0,i,0),xa.setFromEuler(ya),us.compose(_u.set(t,o,e),xa,vu),this.add(yu(n,r,a,8,8),us,"ramp")}build(){let t=this.half,e=new Ni(t*2+40,t*2+40);e.rotateX(-Math.PI/2);{let a=e.attributes.uv,o=e.attributes.position;for(let l=0;l<a.count;l++)a.setXY(l,o.getX(l)/8,-o.getZ(l)/8)}this.add(e,null,"floor",{collide:!1,edges:!1});let i=12,n=2;this.box(0,0,-t-n/2,t*2+n*2,i,n,"wall"),this.box(0,0,t+n/2,t*2+n*2,i,n,"wall"),this.box(-t-n/2,0,0,n,i,t*2,"wall"),this.box(t+n/2,0,0,n,i,t*2,"wall"),this.ceiling=i+14;let r=new Ce(7,7,1,40);us.makeTranslation(0,.5,0),this.add(r,us,"top");for(let a=0;a<4;a++){let o=a*Math.PI/2;this.ramp(Math.sin(o)*11,Math.cos(o)*11,o+Math.PI,4,4.2,1)}for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.box(a*17,0,o*17,3,9,3,"block");for(let a=0;a<4;a++){let o=a*Math.PI/2+Math.PI/4;this.box(Math.cos(o)*28,0,Math.sin(o)*28,7,1.4,1,"block",-o+Math.PI/2)}for(let[a,o,l]of[[0,-30,0],[0,30,0],[-30,0,Math.PI/2],[30,0,Math.PI/2]])this.box(a,0,o,10,2.6,1,"block",l);for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let l=a*40,c=o*40;this.box(l,0,c,14,3.5,14,"top"),this.ramp(l-a*0,c-o*7-o*10,o>0?0:Math.PI,5,10,3.5),this.spawnHigh.push(new S(l+a*2,3.5,c+o*2))}for(let a=0;a<12;a++){let o=a/12*Math.PI*2+.13,l=36+a%2*6,c=new S(Math.cos(o)*l,0,Math.sin(o)*l);Math.abs(Math.abs(c.x)-40)<9&&Math.abs(Math.abs(c.z)-40)<9||this.spawnGround.push(c)}for(let a of[[0,0,-42],[0,0,42],[-42,0,0],[42,0,0],[-22,0,-40],[22,0,40]])this.spawnGround.push(new S(...a))}finalize(){for(let[i,n]of this.batches){let r=fc(n,!1),a=new Ut(r,this.M[i]);a.castShadow=i!=="floor",a.receiveShadow=!0,this.scene.add(a)}let t=fc(this.edges,!1),e=new ss(t,this.edgeMat);this.scene.add(e),this.col.build()}update(t,e){for(let i of this.animated)i(t,e)}};var K={gravity:30,runSpeed:11.5,crouchSpeed:5,groundAccel:14,friction:8,stopSpeed:5,airAccel:12,airCap:1,airControl:3.5,airSteer:1.7,jumpVel:10.2,airJumpVel:9.6,airJumps:1,coyote:.11,jumpBuffer:.13,slideTarget:16.5,slideBoostMin:3.5,slideBoostMax:9,slideBoostCd:1.25,slideFriction:.42,slideMinSpeed:4.5,slideSteer:2.2,slideLandFactor:.38,dashCharges:2,dashRecharge:1.6,dashBurst:27,dashTime:.13,dashGain:5,wallrunMin:6,wallrunTime:1.75,wallrunSpeed:14,wallJumpOut:8.5,wallJumpUp:9.5,climbTime:.45,climbVel:7.5,grappleRange:75,grappleHookSpeed:200,grapplePull:40,grappleYank:7,grappleCharges:2,grappleRecharge:2.4,maxSpeed:80,standH:1.8,crouchH:1.05,radius:.4},Ue={coyote:.16,jumpBuffer:.2,momentumDecay:2.6,groundTurn:7,airTurn:4.2,airBrake:9,airAccel:9,dashCharges:3,dashRecharge:1.15,wallReach:.85,wallrunTime:2.6,wallSagStart:1.1,wallrunMin:3,slideFriction:.32,slideSteer:3.2,grappleTap:!0},ux=new S(0,1,0),de=new S,sn=new S,Mu=new S,va=[],pc=new S,Ma={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},bu={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},ds=class{constructor(t,e){this.map=t,this.col=t.col,this.ev=e,this.pos=new S,this.prevPos=new S,this.vel=new S,this.yaw=0,this.pitch=0,this.reset(new S(0,0,30),Math.PI)}reset(t,e){this.pos.copy(t),this.prevPos.copy(t),this.vel.set(0,0,0),this.yaw=e,this.pitch=0,this.h=K.standH,this.eyeH=K.standH-.14,this.prevEyeH=this.eyeH,this.grounded=!1,this.groundN=new S(0,1,0),this.groundTime=0,this.airTime=0,this.coyoteT=0,this.bufferT=0,this.airJumps=K.airJumps,this.state="air",this.crouching=!1,this.sliding=!1,this.slideCd=0,this.slideT=0,this.dashCharges=this.easy===!1?K.dashCharges:Ue.dashCharges,this.dashRegen=0,this.dashT=0,this.dashDir=new S,this.dashExit=0,this.wall=null,this.wallCd=0,this.lastWallN=new S,this.wallContact=null,this.climbT=0,this.climbUsed=!1,this.mantle=null,this.hook=null,this.grapple=null,this.grappleCharges=K.grappleCharges,this.grappleRegen=0,this.stagger=0,this.burstT=0,this.burstDir=new S,this.burstSpeed=0,this.burstExit=0,this.speed=0,this.hSpeed=0,this.jumpedTick=!1,this.lastLand=0,this.padCd=0,this.alive=!0,this.easy=this.easy??!0}get dashMax(){return this.easy?Ue.dashCharges:K.dashCharges}get eye(){return Mu.set(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}lookDir(t){return t.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}flatFwd(t){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}flatRight(t){return t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}wish(t,e){let i=this.flatFwd(de),n=this.flatRight(sn);e.set(i.x*t.fwd+n.x*t.right,0,i.z*t.fwd+n.z*t.right);let r=e.length();return r>0&&e.divideScalar(r),e}accelerate(t,e,i,n,r=1/0){let a=this.vel.x*t.x+this.vel.z*t.z,o=Math.min(e,r)-a;if(o<=0)return;let l=Math.min(i*n*e,o);this.vel.x+=t.x*l,this.vel.z+=t.z*l}friction(t,e){let i=this.grounded,n=i?this.vel.length():Math.hypot(this.vel.x,this.vel.z);if(n<.05){this.vel.x=this.vel.z=0,i&&(this.vel.y=0);return}let r=Math.max(n,K.stopSpeed)*t*e,a=Math.max(0,n-r)/n;this.vel.x*=a,this.vel.z*=a,i&&(this.vel.y*=a)}steer(t,e,i){let n=Math.hypot(this.vel.x,this.vel.z);if(n<.5)return;let r=this.vel.x/n,a=this.vel.z/n,o=r*t.z-a*t.x,l=r*t.x+a*t.z,c=Math.atan2(o,l),h=Math.sign(c)*Math.min(Math.abs(c),e*i),d=Math.cos(h),u=Math.sin(h);this.vel.x=(r*d-a*u)*n,this.vel.z=(r*u+a*d)*n}tick(t,e,i){this.prevPos.copy(this.pos),this.prevEyeH=this.eyeH;let n=this.wish(e,new S),r=n.lengthSq()>0;this.jumpedTick=!1,this.coyoteT-=t,this.bufferT-=t,this.dashCd=(this.dashCd||0)-t,this.steerLock=(this.steerLock||0)-t,this.slideCd-=t,this.wallCd-=t,this.padCd-=t,this.stagger=Math.max(0,this.stagger-t);let a=this.easy;e.jumpPressed&&(this.bufferT=a?Ue.jumpBuffer:K.jumpBuffer);let o=a?Ue.dashRecharge:K.dashRecharge;this.dashCharges<this.dashMax?(this.dashRegen+=t,this.dashRegen>=o&&(this.dashCharges++,this.dashRegen=0)):this.dashRegen=0,this.grappleCharges<K.grappleCharges&&!this.grapple&&!this.hook&&(this.grappleRegen+=t,this.grappleRegen>=K.grappleRecharge&&(this.grappleCharges++,this.grappleRegen=0));let l=this.stagger>0;if(this.mantle){this.tickMantle(t);return}let c=e.crouch&&!l;c&&!this.crouching&&(this.crouching=!0,this.grounded&&this.hSpeedNow()>K.slideMinSpeed-1&&this.startSlide(n),this.wall&&this.endWall()),!c&&this.crouching&&this.canStand()&&(this.crouching=!1,this.sliding=!1);let h=this.crouching?K.crouchH:K.standH;h<this.h?this.h=h:h>this.h&&(this.h=Math.min(h,this.h+t*9));let d=this.h-(this.crouching?.2:.14);if(this.eyeH+=(d-this.eyeH)*Math.min(1,t*16),e.dashPressed&&this.dashCharges>0&&!l&&this.startDash(r?n:this.flatFwd(new S),e),this.dashT>0&&(this.dashT-=t,this.vel.x=this.dashDir.x*Math.max(K.dashBurst,this.dashExit+6),this.vel.z=this.dashDir.z*Math.max(K.dashBurst,this.dashExit+6),this.grounded||(this.vel.y=Math.max(this.vel.y,0)*.5),this.dashT<=0&&(this.vel.x=this.dashDir.x*this.dashExit,this.vel.z=this.dashDir.z*this.dashExit)),this.burstT>0&&(this.burstT-=t,this.vel.copy(this.burstDir).multiplyScalar(this.burstSpeed),this.burstT<=0&&this.vel.copy(this.burstDir).multiplyScalar(this.burstExit)),e.grapplePressed&&a&&(this.grapple||this.hook)&&(this.grapple?this.releaseGrapple(!1):this.hook=null,e.grapplePressed=!1),e.grapplePressed&&!this.hook&&!this.grapple&&this.grappleCharges>0&&!l&&this.fireHook(i),this.hook&&this.tickHook(t,i),this.grapple&&this.tickGrapple(t,e,i),this.noWall||(this.scanWall(),this.wall?this.tickWall(t,e,n):!this.grounded&&!this.grapple&&this.dashT<=0&&this.tryWall(e,n)),this.bufferT>0&&!l&&(this.wall?(this.wallJump(e),this.bufferT=0):this.grounded||this.coyoteT>0?(this.groundJump(),this.bufferT=0):e.jumpPressed&&this.grapple?(this.releaseGrapple(!0),this.vel.y=Math.max(this.vel.y,0)+5,this.bufferT=0,this.ev.jump("grapple")):e.jumpPressed&&this.airJumps>0&&(this.airJump(n,r),this.bufferT=0)),e.jumpHeld&&e.autoHop&&this.grounded&&!this.jumpedTick&&!l&&this.groundTime>0&&this.groundJump(),!(this.wall||this.dashT>0||this.burstT>0)){if(this.grounded)if(this.sliding)this.tickSlide(t,e,n,r);else if(a&&r&&!l&&!this.crouching&&this.hSpeedNow()>K.runSpeed+.5){let x=this.hSpeedNow();this.steer(n,Ue.groundTurn*(1-Math.min(.55,x/70)),t);let p=Math.max(K.runSpeed,x-Ue.momentumDecay*t)/x;this.vel.x*=p,this.vel.z*=p}else{this.jumpedTick||this.friction(K.friction,t);let x=this.crouching?K.crouchSpeed:K.runSpeed;if(r&&!l){let p=this.groundN;de.copy(n).addScaledVector(p,-n.dot(p)).normalize();let m=this.vel.dot(de),_=x-m;_>0&&this.vel.addScaledVector(de,Math.min(K.groundAccel*t*x,_))}}else if(a){if(r&&!l){let x=this.hSpeedNow();if((x>.5?(this.vel.x*n.x+this.vel.z*n.z)/x:1)<-.4&&x>2){let m=Math.max(0,x-Ue.airBrake*t)/x;this.vel.x*=m,this.vel.z*=m}else!this.grapple&&this.steerLock<=0&&this.steer(n,Ue.airTurn*(1-Math.min(.5,x/80)),t);this.hSpeedNow()<K.runSpeed&&this.accelerate(n,K.runSpeed,Ue.airAccel,t),this.accelerate(n,K.runSpeed,K.airAccel,t,K.airCap)}}else if(r&&!l){this.accelerate(n,K.runSpeed,K.airAccel,t,K.airCap);let x=this.hSpeedNow();if(x<K.runSpeed*.95&&this.accelerate(n,K.runSpeed,K.airControl,t),e.fwd>0&&e.right===0&&!this.grapple&&this.steerLock<=0){let p=K.airSteer*(1.2-Math.min(.7,x/60));this.steer(this.flatFwd(sn),p,t)}}}if(this.grounded){if(this.sliding){let x=this.groundN;de.set(0,-K.gravity,0),de.addScaledVector(x,-de.dot(x)),this.vel.addScaledVector(de,t)}}else{let x=K.gravity;this.wall||this.climbT>0?x=0:this.dashT>0?x*=.1:this.burstT>0?x=0:this.crouching&&this.vel.y<0&&(x*=1.55),this.vel.y-=x*t}let u=this.vel.length();u>K.maxSpeed&&this.vel.multiplyScalar(1-Math.min(1,(u-K.maxSpeed)/u*t*6));let f=this.grounded;pc.copy(this.vel);let g=pc.y;this.integrate(t),f&&this.wallContact&&!this.jumpedTick&&this.stepUp(pc),f&&!this.grounded&&!this.jumpedTick&&this.dashT<=0&&this.vel.y<3&&!this.grapple&&this.snap(),!this.mantle&&!this.wall&&e.fwd>0&&this.wallContact&&this.vel.y<6&&!l&&this.tryMantle(),this.checkPads(),this.grounded?(f||this.onLand(g,n),this.groundTime+=t,this.airTime=0,this.coyoteT=a?Ue.coyote:K.coyote,this.airJumps=K.airJumps,this.climbUsed=!1,this.wall&&this.endWall()):(this.groundTime=0,this.airTime+=t),this.sliding&&!this.grounded&&this.airTime>.15&&(this.sliding=!1),this.hSpeed=this.hSpeedNow(),this.speed=this.vel.length(),this.state=this.mantle?"mantle":this.wall?"wall":this.grapple?"grapple":this.dashT>0?"dash":this.sliding?"slide":this.grounded?"ground":"air",this.pos.y<-30&&this.ev.fell&&this.ev.fell()}hSpeedNow(){return Math.hypot(this.vel.x,this.vel.z)}get invuln(){return this.dashT>0||this.burstT>0}burst(t,e,i,n){this.burstDir=t.clone().normalize(),this.burstSpeed=e,this.burstT=i,this.burstExit=n,this.wall&&this.endWall(),this.grapple&&this.releaseGrapple(!1),this.sliding=!1,this.grounded&&this.burstDir.y<.05&&(this.burstDir.y=Math.max(this.burstDir.y,.02))}integrate(t){let e=this.vel.length(),i=Math.min(10,Math.max(1,Math.ceil(e*t/.22))),n=t/i;this.grounded=!1,this.wallContact=null;for(let r=0;r<i;r++)if(this.pos.addScaledVector(this.vel,n),this.col.collideCapsule(this.pos,K.radius,this.h,va))for(let a of va){a.y>.68?(this.grounded=!0,this.groundN.set(a.x,a.y,a.z)):a.y<-.6?this.vel.y>0&&(this.vel.y=0):Math.abs(a.y)<.35&&(this.wallContact={x:a.x,y:a.y,z:a.z});let o=this.vel.x*a.x+this.vel.y*a.y+this.vel.z*a.z;o<0&&(this.vel.x-=a.x*o,this.vel.y-=a.y*o,this.vel.z-=a.z*o)}if(this.grounded&&!this.sliding){let r=this.vel.dot(this.groundN);r<0&&this.vel.addScaledVector(this.groundN,-r)}}snap(){if(de.copy(this.pos),de.y-=.45,this.col.collideCapsule(de,K.radius,this.h,va)){let e=null;for(let r of va)r.y>.68&&(!e||r.y<e.y)&&(e=r);if(!e)return;let i=Math.hypot(de.x-this.pos.x,de.y-(this.pos.y-.45),de.z-this.pos.z),n=this.pos.y-.45+i/Math.max(.68,e.y);if(n<=this.pos.y+.05){this.pos.y=Math.min(this.pos.y,n+.001),this.grounded=!0,this.groundN.set(e.x,e.y,e.z);let r=this.vel.dot(this.groundN);r>0&&this.vel.addScaledVector(this.groundN,-r)}}}stepUp(t){let e=Math.hypot(t.x,t.z);if(e<1)return;let i=t.x/e,n=t.z/e,r=this.pos.x+i*(K.radius+.12),a=this.pos.z+n*(K.radius+.12),o=this.col.raycast(r,this.pos.y+.5,a,0,-1,0,.5,bu);if(!o||o.ny<.7)return;let l=o.y-this.pos.y;l<.03||l>.46||this.col.capsuleFree(this.pos.x+i*.08,o.y+.02,this.pos.z+n*.08,K.radius,this.h)&&(this.pos.set(this.pos.x+i*.08,o.y+.02,this.pos.z+n*.08),this.vel.x=t.x,this.vel.z=t.z,this.vel.y<0&&(this.vel.y=0),this.grounded=!0)}canStand(){return this.col.capsuleFree(this.pos.x,this.pos.y+.02,this.pos.z,K.radius-.02,K.standH)}groundJump(){let t=this.grounded?this.groundN:ux;if(this.vel.y=Math.max(this.vel.y,0)+K.jumpVel,t.y<.97&&(this.vel.x+=t.x*2,this.vel.z+=t.z*2),this.sliding){let e=this.hSpeedNow();if(e>1){let i=(e+.6)/e;this.vel.x*=i,this.vel.z*=i}this.ev.jump("slide")}else this.ev.jump("ground");this.sliding=!1,this.grounded=!1,this.coyoteT=0,this.jumpedTick=!0}airJump(t,e){if(this.airJumps--,this.vel.y=Math.max(this.vel.y*.25,0)+K.airJumpVel,e){let i=Math.max(this.hSpeedNow(),K.runSpeed*.85),n=this.hSpeedNow()||1,r=this.vel.x/n*.3+t.x*.7,a=this.vel.z/n*.3+t.z*.7,o=Math.hypot(r,a)||1;this.vel.x=r/o*i,this.vel.z=a/o*i}this.jumpedTick=!0,this.ev.jump("air")}onLand(t,e){let i=Math.max(0,-t);if(this.lastLand=i,this.crouching&&i>5){let n=this.hSpeedNow(),r=n>1?de.set(this.vel.x/n,0,this.vel.z/n):this.flatFwd(de),a=Math.min(i*K.slideLandFactor,10);this.vel.x+=r.x*a,this.vel.z+=r.z*a,this.sliding=!0,this.slideT=0,this.ev.slide("land",a)}else this.crouching&&this.hSpeedNow()>K.slideMinSpeed&&(this.sliding=!0,this.slideT=0,this.ev.slide("enter",0));this.ev.land(i)}startSlide(t){this.sliding=!0,this.slideT=0;let e=0;if(this.slideCd<=0){let i=this.hSpeedNow();e=Zt.clamp(K.slideTarget-i,K.slideBoostMin,K.slideBoostMax);let n=i>1?de.set(this.vel.x/i,0,this.vel.z/i):t.lengthSq()?de.copy(t):this.flatFwd(de);this.vel.x+=n.x*e,this.vel.z+=n.z*e,this.slideCd=K.slideBoostCd}this.ev.slide("enter",e)}tickSlide(t,e,i,n){this.slideT+=t,this.friction((this.easy?Ue.slideFriction:K.slideFriction)*(this.groundN.y>.985?1:.25),t),n&&this.steer(i,this.easy?Ue.slideSteer:K.slideSteer,t),this.hSpeedNow()<K.slideMinSpeed&&this.groundN.y>.985&&(this.sliding=!1)}startDash(t,e){if(this.dashCd>0)return;this.dashCharges--,this.dashRegen=Math.min(this.dashRegen,.2),this.dashCd=.22;let i=this.dashT>0?sn.copy(this.dashDir).multiplyScalar(this.dashExit):sn.copy(this.vel);this.dashDir.copy(t).setY(0).normalize();let n=Math.max(0,i.x*this.dashDir.x+i.z*this.dashDir.z),r=Math.hypot(i.x,i.z);this.dashExit=Math.max(n,r*.85,K.runSpeed)+K.dashGain,this.dashT=K.dashTime,this.wall&&this.endWall(),this.grapple&&this.releaseGrapple(!1),this.grounded||(this.vel.y=Math.max(this.vel.y,0)),this.grounded&&e.crouch&&(this.sliding=!0),this.ev.dash(this.dashDir)}scanWall(){if(this.nearWall=null,this.grounded)return;let t=1e9,e=K.radius+(this.easy?Ue.wallReach:.45);for(let i=0;i<8;i++){let n=this.yaw+i*Math.PI/4,r=Math.cos(n),a=-Math.sin(n),o=0,l=0,c=0,h=0,d=0,u=0;for(let f of[.55,1.3]){let g=this.col.raycast(this.pos.x,this.pos.y+Math.min(f,this.h-.2),this.pos.z,r,0,a,e,Ma,Oi.WALLRUN);g&&Math.abs(g.ny)<.3&&(o++,h=g.t,d=g.nx,u=g.nz)}o===2&&h<t&&(t=h,this.nearWall={nx:d,nz:u,dist:h})}}tryWall(t,e){if(this.airTime<.05||this.crouching)return;let i=this.nearWall;if(!i)return;let n=de.set(i.nx,0,i.nz).normalize();if(this.wallCd>0&&n.dot(this.lastWallN)>.9)return;let r=this.hSpeedNow(),a=r>.1?sn.set(this.vel.x/r,0,this.vel.z/r):this.flatFwd(sn),o=-a.dot(n),l=-this.flatFwd(Mu).dot(n);if((o>.75||r<4&&l>.7)&&t.fwd>0&&l>.6){!this.climbUsed&&this.vel.y>-6&&(this.climbT=K.climbTime,this.climbUsed=!0,this.wall={n:n.clone(),dir:new S,t:0,climb:!0},this.bufferT=0,this.ev.climb());return}if(r<(this.easy?Ue.wallrunMin:K.wallrunMin)||!this.easy&&t.fwd<=0&&Math.abs(t.right)===0||this.easy&&t.fwd<0)return;let c=new S(-n.z,0,n.x);c.dot(a)<0&&c.negate(),this.wall={n:n.clone(),dir:c,t:0,entry:Math.max(r,K.wallrunSpeed),climb:!1},this.vel.y=Zt.clamp(this.vel.y,this.easy?0:-1.5,4.5),this.airJumps=K.airJumps,this.climbUsed=!1,this.bufferT=0,this.ev.wallStart(n)}tickWall(t,e,i){let n=this.wall;n.t+=t;let r=this.nearWall,a=r&&r.nx*n.n.x+r.nz*n.n.z>.8;if(n.climb){if(this.climbT-=t,!a||this.climbT<=0||e.fwd<=0){this.wall=null,this.climbT=0,this.vel.y>0&&(this.vel.y=Math.min(this.vel.y,4));return}this.vel.y=K.climbVel*(.6+.4*(this.climbT/K.climbTime)),this.vel.x=-n.n.x*1.5,this.vel.z=-n.n.z*1.5,this.tryMantle(!0);return}if(!a||n.t>(this.easy?Ue.wallrunTime:K.wallrunTime)||this.grounded){this.endWall();return}r&&n.n.set(r.nx,0,r.nz).normalize(),n.dir.set(-n.n.z,0,n.n.x),n.dir.dot(this.flatFwd(de))<0&&n.dir.negate();let o=this.vel.x*n.dir.x+this.vel.z*n.dir.z,l=Math.max(n.entry,K.wallrunSpeed)+(e.fwd>0?n.t*1.2:-n.t*3),c=o+(l-o)*Math.min(1,t*4),h=this.easy?3:1.8;this.vel.x=n.dir.x*c-n.n.x*h,this.vel.z=n.dir.z*c-n.n.z*h;let d=this.easy?Ue.wallSagStart:.35,u=this.easy?3.5:5.5,f=n.t<d?this.easy?.6:1.2:(this.easy?.6:1.2)-(n.t-d)*u;this.vel.y+=(f-this.vel.y)*Math.min(1,t*6),(e.right!==0?this.wish(e,sn).dot(n.n):0)>.6&&n.t>.15&&(this.vel.x+=n.n.x*4,this.vel.z+=n.n.z*4,this.endWall())}wallJump(t){let e=this.wall;if(e.climb)this.vel.set(e.n.x*K.wallJumpOut*1.1,K.wallJumpUp,e.n.z*K.wallJumpOut*1.1);else{let i=this.flatFwd(de),n=Math.max(this.hSpeedNow(),K.wallrunSpeed),r=this.easy?1.1:.45,a=this.easy?.5:.75,o=e.dir.x*a+e.n.x*.55+i.x*r,l=e.dir.z*a+e.n.z*.55+i.z*r,c=o*e.n.x+l*e.n.z;c<.3&&(o+=e.n.x*(.3-c),l+=e.n.z*(.3-c));let h=Math.hypot(o,l),d=n+1.2;this.vel.set(o/h*d+e.n.x*2,K.wallJumpUp,l/h*d+e.n.z*2)}this.lastWallN.copy(e.n),this.wallCd=.4,this.wall=null,this.climbT=0,this.airJumps=K.airJumps,this.jumpedTick=!0,this.steerLock=this.easy?.15:.35,this.ev.jump("wall")}endWall(){this.wall&&(this.lastWallN.copy(this.wall.n),this.wallCd=.3,this.wall=null,this.climbT=0)}tryMantle(t=!1){if(this.mantle)return!1;let e=this.flatFwd(de),i=this.col.raycast(this.pos.x,this.pos.y+.9,this.pos.z,e.x,0,e.z,K.radius+.7,Ma);if(!i||Math.abs(i.ny)>.3)return!1;let n=this.col.raycast(this.pos.x,this.pos.y+2.45,this.pos.z,e.x,0,e.z,K.radius+.9,bu);if(n&&Math.abs(n.ny)<.3)return!1;let r=i.x-i.nx*.45,a=i.z-i.nz*.45,o=this.col.raycast(r,this.pos.y+2.6,a,0,-1,0,2.6,Ma);if(!o||o.ny<.7)return!1;let l=o.y-this.pos.y;if(l<.4||l>2.3)return!1;let c=o.x-i.nx*0+e.x*(K.radius*.6),h=o.z+e.z*(K.radius*.6);return this.col.capsuleFree(c,o.y+.03,h,K.radius,K.crouchH)?(this.mantle={from:this.pos.clone(),to:new S(c,o.y+.03,h),t:0,dur:.14+l*.05,speed:Math.max(this.hSpeedNow(),7),dir:e.clone()},this.wall=null,this.climbT=0,this.ev.mantle(),!0):!1}tickMantle(t){let e=this.mantle;e.t+=t;let i=Math.min(1,e.t/e.dur),n=1-Math.pow(1-i,2);this.pos.x=e.from.x+(e.to.x-e.from.x)*Math.max(0,(i-.35)/.65),this.pos.z=e.from.z+(e.to.z-e.from.z)*Math.max(0,(i-.35)/.65),this.pos.y=e.from.y+(e.to.y-e.from.y)*Math.min(1,n*1.4),this.vel.set(0,0,0),i>=1&&(this.mantle=null,this.vel.set(e.dir.x*e.speed,0,e.dir.z*e.speed),this.grounded=!0,this.groundN.set(0,1,0))}fireHook(t){this.grappleCharges--,this.grappleRegen=0;let e=this.lookDir(new S),i=this.eye.clone();this.hook={pos:i.clone().addScaledVector(e,.6),dir:e,traveled:0},this.ev.hookFire()}tickHook(t,e){let i=this.hook,n=K.grappleHookSpeed*t,r=e&&e.hookEnemy?e.hookEnemy(i.pos,i.dir,n):null,a=this.col.raycast(i.pos.x,i.pos.y,i.pos.z,i.dir.x,i.dir.y,i.dir.z,n,Ma,Oi.GRAPPLE);if(r&&(!a||r.t<a.t)){this.attach(r.point,r.enemy),this.hook=null;return}if(a){this.attach(new S(a.x,a.y,a.z),null,new S(a.nx,a.ny,a.nz)),this.hook=null;return}i.pos.addScaledVector(i.dir,n),i.traveled+=n,i.traveled>K.grappleRange&&(this.hook=null,this.ev.hookMiss(),this.grappleCharges=Math.min(K.grappleCharges,this.grappleCharges+1))}attach(t,e,i){this.grapple={point:t.clone(),enemy:e,t:0,normal:i};let n=de.subVectors(t,this.eye).normalize(),r=this.vel.dot(n);r<K.grappleYank&&this.vel.addScaledVector(n,K.grappleYank-Math.max(0,r)*.5),this.grounded&&(this.vel.y=Math.max(this.vel.y,5),this.grounded=!1),this.sliding=!1,this.wall&&this.endWall(),this.ev.hookAttach(t,!!e)}tickGrapple(t,e,i){let n=this.grapple;if(n.t+=t,n.enemy){if(!n.enemy.alive){this.releaseGrapple(!1);return}n.point.copy(n.enemy.chest)}let r=this.eye,a=de.subVectors(n.point,r),o=a.length();if(a.divideScalar(o||1),!(this.easy?!0:e.grappleHeld)||o<(n.enemy?3:2.4)||n.t>(this.easy?2.6:3.2)){this.releaseGrapple(o<3.2);return}let c=K.grapplePull*(n.enemy?1.35:1)*(o>8?1:.6+o/20);this.vel.addScaledVector(a,c*t),this.vel.y+=K.gravity*.35*t;let h=this.flatRight(sn);this.vel.addScaledVector(h,e.right*9*t);let d=this.vel.length();d>55&&this.vel.multiplyScalar(55/d)}releaseGrapple(t){if(!this.grapple)return;let e=this.grapple.enemy;this.grapple=null,t&&this.vel.y<4&&(this.vel.y+=3.5),t&&!e&&this.easy&&this.tryMantle(),this.ev.hookRelease(t,e)}checkPads(){if(!(this.padCd>0)){for(let t of this.map.jumpPads)if(Math.abs(this.pos.y-t.y)<.7&&(this.pos.x-t.x)**2+(this.pos.z-t.z)**2<t.r*t.r){this.vel.y=t.power,this.vel.x*=1.1,this.vel.z*=1.1,this.grounded=!1,this.airJumps=K.airJumps,this.padCd=.4,this.sliding=!1,this.ev.pad(t);return}if(this.grounded)for(let t of this.map.boostPads){let e=this.pos.x-t.x,i=this.pos.z-t.z,n=e*t.dir.x+i*t.dir.z,r=e*t.dir.z-i*t.dir.x;if(Math.abs(n)<t.len/2&&Math.abs(r)<t.w/2&&Math.abs(this.pos.y-t.y)<.6){let a=this.vel.x*t.dir.x+this.vel.z*t.dir.z,o=32;a<o&&(this.vel.x+=t.dir.x*(o-a),this.vel.z+=t.dir.z*(o-a)),this.padCd=.5,this.ev.boost(t);return}}}}};var mc=new S,dx=new S,Su=[],fx={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},px={turret:{hp:60,r:.75,h:1.9,speed:2.5,score:100,name:"\uD3EC\uD0D1"},chaser:{hp:40,r:.6,h:1.2,speed:9,score:80,name:"\uCD94\uC801\uC790"},shield:{hp:90,r:.55,h:2,speed:4.5,score:150,name:"\uBC29\uD328\uBCD1"}},_i={};function mx(){return _i.black||(_i.black=new ne({color:1447450,roughness:.45,metalness:.2}),_i.dark=new ne({color:2894899,roughness:.5,metalness:.2}),_i.red=new ne({color:15212591,roughness:.4,emissive:5242888}),_i.hot=new ne({color:16726586,roughness:.3,emissive:16719904,emissiveIntensity:1.5}),_i.white=new ne({color:15790320,roughness:.6}),_i.flash=new Ge({color:16777215})),_i}var Ke=(s,t,e=0,i=0,n=0)=>{let r=new Ut(s,t);return r.position.set(e,i,n),r.castShadow=!0,r},ba=class{constructor(t,e,i){let n=mx();this.game=t,this.col=t.arena.col,this.scene=t.scene,this.type=e,this.cfg=px[e],this.hp=this.maxHp=Math.round(this.cfg.hp*t.D.enemyHp),this.pos=i.clone(),this.vel=new S,this.yaw=Math.random()*6,this.alive=!0,this.grounded=!1,this.center=new S,this.t=Math.random()*10,this.cd=1.5+Math.random()*1.5,this.windup=0,this.stun=0,this.flashT=0,this.spawnT=.5;let r=this.group=new pe;if(e==="turret")r.add(Ke(new Ce(.35,.55,.7,12),n.dark,0,.35,0)),this.head=new pe,this.head.position.y=1.25,r.add(this.head),this.head.add(Ke(new xe(1.1,1,1.1),n.black)),this.eye=Ke(new Ce(.22,.22,.12,16),n.red,0,0,.58),this.eye.rotation.x=Math.PI/2,this.head.add(this.eye),this.barrel=Ke(new xe(.16,.16,.5),n.dark,0,-.3,.6),this.head.add(this.barrel);else if(e==="chaser"){this.body=Ke(new ca(.6,0),n.black),this.body.position.y=.6,r.add(this.body),this.core=Ke(new zi(.28,12,8),n.red),this.body.add(this.core);for(let l=0;l<8;l++){let c=Ke(new oa(.12,.45,6),n.dark),h=new S(Math.cos(l*2.4),Math.sin(l*1.7)*.8,Math.sin(l*2.4)).normalize();c.position.copy(h.clone().multiplyScalar(.62)),c.quaternion.setFromUnitVectors(new S(0,1,0),h),this.body.add(c)}}else r.add(Ke(new tn(.45,1,4,10),n.black,0,.95,0)),r.add(Ke(new zi(.3,12,8),n.dark,0,1.85,0)),this.eye=Ke(new xe(.3,.07,.05),n.red,0,1.88,.27),r.add(this.eye),this.shield=new pe,this.shield.position.set(0,1,.75),r.add(this.shield),this.shield.add(Ke(new xe(1.5,1.8,.14),n.white)),this.shield.add(Ke(new xe(1.52,.1,.16),n.red,0,.6,0)),this.shield.add(Ke(new xe(1.52,.1,.16),n.red,0,-.6,0));let a=this.bar=new pe,o=new Ut(new Ni(1,.1),new Ge({color:0,transparent:!0,opacity:.35,depthTest:!1}));this.fill=new Ut(new Ni(1,.1),new Ge({color:15212591,depthTest:!1})),o.renderOrder=10,this.fill.renderOrder=11,a.add(o,this.fill),a.visible=!1,this.scene.add(a),r.scale.setScalar(.01),r.position.copy(this.pos),this.scene.add(r),this.updateCenter()}updateCenter(){this.type==="chaser"?this.center.set(this.pos.x,this.pos.y+.6,this.pos.z):this.type==="turret"?this.center.set(this.pos.x,this.pos.y+1.2,this.pos.z):this.center.set(this.pos.x,this.pos.y+1.1,this.pos.z)}get hitRadius(){return this.type==="chaser"?.9:this.type==="turret"?.95:.85}facing(t){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}shieldBlocks(t){if(this.type!=="shield"||this.stun>0)return!1;let e=this.facing(mc);return t.x*e.x+t.z*e.z<-.35}damage(t,e){return this.alive?(this.hp-=t,this.flashT=.1,this.bar.visible=!0,e&&(mc.subVectors(this.pos,e).setY(0).normalize(),this.vel.addScaledVector(mc,Math.min(10,t*.12))),this.hp<=0?(this.alive=!1,!0):!1):!1}update(t,e){let i=e.player;this.t+=t,this.cd-=t,this.flashT-=t,this.stun=Math.max(0,this.stun-t),this.spawnT-=t;let n=dx.subVectors(i.pos,this.pos),r=n.y;n.y=0;let a=n.length();n.divideScalar(a||1);let l=Math.atan2(n.x,n.z)-this.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;let c=this.type==="shield"?1.6:this.type==="turret"?3:8;this.stun<=0&&this.spawnT<=0&&(this.yaw+=Math.sign(l)*Math.min(Math.abs(l),c*t));let h=0,d=0,u=this.cfg.speed,f=this.stun>0||this.spawnT>0;if(this.type==="turret"&&!f){this.windup>0?(this.windup-=t,this.windup<=0&&(e.fireOrb(this),this.cd=2+Math.random()*1.2)):this.cd<=0&&a<70&&e.canAttack(this)&&e.los(this.center,i.eye)&&(this.windup=.7*e.windMul);let _=Math.sin(this.t*.6)>0?1:-1;h=n.z*_*.6,d=-n.x*_*.6,a<8&&(h-=n.x,d-=n.z)}else this.type==="chaser"&&!f?(h=n.x,d=n.z,u=this.cfg.speed*e.speedMul,a<1.25+.4&&Math.abs(r)<1.6&&e.contact(this),r>1.5&&a<6&&this.grounded&&Math.random()<t*2&&(this.vel.y=11)):this.type==="shield"&&!f&&(this.windup>0?(this.windup-=t,u=1,this.windup<=0&&(e.shove(this),this.cd=1.6)):(h=n.x,d=n.z,a<2.6&&this.cd<=0&&e.canAttack(this)&&(this.windup=.6*e.windMul)));let g=Math.hypot(h,d);g>0&&(h/=g,d/=g);let x=this.grounded?9:1.5,p=Math.hypot(this.vel.x,this.vel.z);if(p>u+2&&this.grounded){let _=Math.exp(-5*t);this.vel.x*=_,this.vel.z*=_}else this.vel.x+=(h*u-this.vel.x)*Math.min(1,x*t),this.vel.z+=(d*u-this.vel.z)*Math.min(1,x*t);this.vel.y-=30*t;for(let _ of e.foes){if(_===this||!_.alive)continue;let v=this.pos.x-_.pos.x,w=this.pos.z-_.pos.z,C=v*v+w*w,T=(this.cfg.r+_.cfg.r)**2;if(C<T&&C>1e-4){let A=Math.sqrt(C);this.vel.x+=v/A*25*t,this.vel.z+=w/A*25*t}}if(this.pos.addScaledVector(this.vel,t),this.grounded=!1,this.col.collideCapsule(this.pos,this.cfg.r,this.cfg.h,Su))for(let _ of Su){_.y>.65&&(this.grounded=!0);let v=this.vel.x*_.x+this.vel.y*_.y+this.vel.z*_.z;v<0&&(this.vel.x-=_.x*v,this.vel.y-=_.y*v,this.vel.z-=_.z*v)}if(g>0&&this.grounded&&this.type!=="turret"){let _=this.col.raycast(this.pos.x,this.pos.y+.4,this.pos.z,h,0,d,this.cfg.r+.6,fx);_&&Math.abs(_.ny)<.5&&(this.vel.y=9)}let m=this.game.arena.half-1;this.pos.x=Zt.clamp(this.pos.x,-m,m),this.pos.z=Zt.clamp(this.pos.z,-m,m),this.updateCenter(),this.animate(t,e,p)}animate(t,e,i){let n=_i,r=this.group,a=Math.min(1,r.scale.x+t*4);if(r.scale.setScalar(a),r.position.copy(this.pos),this.type==="chaser"){let o=new S(this.vel.z,0,-this.vel.x),l=o.length();l>.01&&this.body.rotateOnWorldAxis(o.divideScalar(l),i*t/.6),this.core.material=this.flashT>0?n.flash:n.red,this.body.position.y=.6+(this.stun>0?Math.abs(Math.sin(this.t*20))*.1:0)}else if(r.rotation.y=this.type==="turret"?0:this.yaw,this.type==="turret"){this.head.rotation.y=this.yaw;let o=this.windup>0;this.eye.material=this.flashT>0?n.flash:o&&Math.sin(this.t*40)>0?n.hot:n.red,this.eye.scale.setScalar(o?1+(.7*e.windMul-this.windup)*.8:1)}else this.eye.material=this.flashT>0?n.flash:n.red,this.shield.position.z=this.windup>0?.75-Math.max(0,this.windup)*.6:.75,this.shield.rotation.x=this.windup>0?-.3:0,this.shield.visible=!0,r.rotation.z=this.stun>0?Math.sin(this.t*18)*.15:0;this.bar.position.set(this.pos.x,this.pos.y+this.cfg.h+.45,this.pos.z),this.bar.quaternion.copy(e.camera.quaternion),this.fill.scale.x=Math.max(.001,this.hp/this.maxHp),this.fill.position.x=-(1-this.fill.scale.x)/2}shatter(t){let e=[];return this.group.updateMatrixWorld(!0),this.group.traverse(i=>{if(!i.isMesh)return;let n=new S,r=new ze,a=new S;i.matrixWorld.decompose(n,r,a);let o=new Ut(i.geometry,i.material);o.position.copy(n),o.quaternion.copy(r),o.scale.copy(a),o.castShadow=!0,this.scene.add(o);let l=new S((Math.random()-.5)*8,3+Math.random()*6,(Math.random()-.5)*8);t&&l.addScaledVector(t,10),e.push({m:o,v:l,av:new S(Math.random()*14-7,Math.random()*14-7,Math.random()*14-7),life:2+Math.random()})}),this.dispose(),e}dispose(){this.scene.remove(this.group),this.scene.remove(this.bar)}};var Sa=class{constructor(t,e=3e3){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.alpha=new Float32Array(e);let i=this.geo=new ae;i.setAttribute("position",new ue(this.pos,3).setUsage(nn)),i.setAttribute("color",new ue(this.col,3).setUsage(nn)),i.setAttribute("alpha",new ue(this.alpha,1).setUsage(nn)),i.setAttribute("size",new ue(this.size,1).setUsage(nn)),this.mat=new Je({transparent:!0,depthWrite:!1,uniforms:{scale:{value:300}},vertexShader:`attribute float alpha; attribute float size; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = max(2.0, size * scale / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 p = gl_PointCoord - .5; if (max(abs(p.x), abs(p.y)) > 0.5) discard; gl_FragColor = vec4(vC, vA); }"}),this.points=new ia(i,this.mat),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,{color:i=[.1,.1,.1],speed:n=7,dir:r=null,spread:a=1,size:o=.12,life:l=.6,gravity:c=14,drag:h=1.5}={}){for(let d=0;d<e;d++){let u=this.n<this.max?this.n++:Math.random()*this.max|0;this.pos[u*3]=t.x,this.pos[u*3+1]=t.y,this.pos[u*3+2]=t.z;let f=Math.random()*2-1,g=Math.random()*2-1,x=Math.random()*2-1,p=Math.hypot(f,g,x)||1;f/=p,g/=p,x/=p,r&&(f=r.x+f*a,g=r.y+g*a,x=r.z+x*a);let m=n*(.3+Math.random()*.9);this.vel[u*3]=f*m,this.vel[u*3+1]=g*m,this.vel[u*3+2]=x*m;let _=Array.isArray(i[0])?i[Math.random()*i.length|0]:i;this.col[u*3]=_[0],this.col[u*3+1]=_[1],this.col[u*3+2]=_[2],this.size[u]=o*(.5+Math.random()),this.life[u]=this.maxLife[u]=l*(.5+Math.random()*.8),this.grav[u]=c,this.drag[u]=h}}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){if(e--,n!==e){for(let a=0;a<3;a++)this.pos[n*3+a]=this.pos[e*3+a],this.vel[n*3+a]=this.vel[e*3+a],this.col[n*3+a]=this.col[e*3+a];this.size[n]=this.size[e],this.life[n]=this.life[e],this.maxLife[n]=this.maxLife[e],this.grav[n]=this.grav[e],this.drag[n]=this.drag[e]}n--;continue}let r=Math.exp(-this.drag[n]*t);this.vel[n*3]*=r,this.vel[n*3+1]=this.vel[n*3+1]*r-this.grav[n]*t,this.vel[n*3+2]*=r,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.03&&(this.pos[n*3+1]=.03,this.vel[n*3+1]*=-.3,this.vel[n*3]*=.6,this.vel[n*3+2]*=.6),this.alpha[n]=Math.min(1,this.life[n]/this.maxLife[n]*2)}this.n=e,this.geo.setDrawRange(0,e);let i=this.geo.attributes;i.position.needsUpdate=i.color.needsUpdate=i.alpha.needsUpdate=i.size.needsUpdate=!0}},wa=class{constructor(t){this.scene=t,this.list=[],this.geo=new as(.9,1,48)}add(t,e,i=3,n=.4,r=null){let a=new Ut(this.geo,new Ge({color:e,transparent:!0,side:He,depthWrite:!1}));a.position.copy(t),r?a.lookAt(t.clone().add(r)):a.rotation.x=-Math.PI/2,this.scene.add(a),this.list.push({m:a,life:n,max:n,size:i})}update(t){for(let e=this.list.length-1;e>=0;e--){let i=this.list[e];i.life-=t;let n=1-i.life/i.max;i.m.scale.setScalar(Math.max(.01,i.size*(.15+(1-Math.pow(1-n,3))*.85))),i.m.material.opacity=Math.max(0,1-n),i.life<=0&&(this.scene.remove(i.m),i.m.material.dispose(),this.list.splice(e,1))}}},Ea=class{constructor(t,e=24,i=16734751,n=.28){this.n=e,this.width=n,this.pts=[];let r=this.geo=new ae;this.p=new Float32Array(e*2*3),this.a=new Float32Array(e*2),r.setAttribute("position",new ue(this.p,3).setUsage(nn)),r.setAttribute("alpha",new ue(this.a,1).setUsage(nn));let a=[];for(let o=0;o<e-1;o++){let l=o*2;a.push(l,l+1,l+2,l+1,l+3,l+2)}r.setIndex(a),this.mat=new Je({transparent:!0,depthWrite:!1,side:He,uniforms:{color:{value:new wt(i)}},vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color, vA * 0.75); }"}),this.mesh=new Ut(r,this.mat),this.mesh.frustumCulled=!1,t.add(this.mesh)}reset(){this.pts.length=0}update(t,e,i){i?(this.pts.unshift(t.clone()),this.pts.length>this.n&&this.pts.pop()):this.pts.length&&this.pts.pop();let n=this.pts.length;if(this.mesh.visible=n>1,n<2)return;let r=new S,a=new S,o=new S;for(let l=0;l<this.n;l++){let c=this.pts[Math.min(l,n-1)],h=this.pts[Math.min(l+1,n-1)]||c;a.subVectors(c,h),a.lengthSq()<1e-6&&a.set(1,0,0),o.subVectors(e,c),r.crossVectors(a,o).normalize().multiplyScalar(this.width*(1-l/this.n)),this.p.set([c.x+r.x,c.y+r.y,c.z+r.z],l*6),this.p.set([c.x-r.x,c.y-r.y,c.z-r.z],l*6+3);let d=l<n?1-l/Math.min(this.n,n):0;this.a[l*2]=this.a[l*2+1]=d}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}},Ta=class{constructor(t,e=90){this.n=e,this.arr=new Float32Array(e*6),this.pts=Array.from({length:e},()=>new S(1e5,0,0));let i=this.geo=new ae;i.setAttribute("position",new ue(this.arr,3).setUsage(nn)),this.mat=new Fi({color:8158328,transparent:!0,opacity:0,depthWrite:!1}),this.mesh=new ss(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.dir=new S,this.side=new S,this.up=new S,this.tmp=new S}update(t,e,i){if(i<.02){this.mesh.visible=!1;return}let n=e.length();if(n<1){this.mesh.visible=!1;return}this.mesh.visible=!0,this.mat.opacity=Math.min(.6,i*.6);let r=this.dir.copy(e).divideScalar(n);this.side.set(-r.z,0,r.x),this.side.lengthSq()<1e-4&&this.side.set(1,0,0),this.side.normalize(),this.up.crossVectors(this.side,r).normalize();let a=Math.min(9,n*.12);for(let o=0;o<this.n;o++){let l=this.pts[o],c=this.tmp.subVectors(l,t);if(c.dot(r)<-4||c.lengthSq()>45*45){let d=Math.random()*Math.PI*2,u=3.5+Math.random()*9;l.copy(t).addScaledVector(r,12+Math.random()*30).addScaledVector(this.side,Math.cos(d)*u).addScaledVector(this.up,Math.sin(d)*u*.7),l.y<.15&&(l.y=.15+Math.random()*.5)}this.arr[o*6]=l.x,this.arr[o*6+1]=l.y,this.arr[o*6+2]=l.z,this.arr[o*6+3]=l.x-r.x*a,this.arr[o*6+4]=l.y-r.y*a,this.arr[o*6+5]=l.z-r.z*a}this.geo.attributes.position.needsUpdate=!0}};var It={speed:46,carry:.7,maxBounces:3,outTime:.95,returnSpeed:58,catchDist:1.7,radius:.35,dmg:40,returnDmg:30,blinkSlam:45,blinkRadius:3.8},rn=new S,gc=new S,gx={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},fs=class s{constructor(t,e=null,i=16734751){this.game=t,this.owner=e,this.color=i,this.state="hand",this.pos=new S,this.vel=new S,this.t=0,this.bounces=0,this.hit=new Set,this.blinked=!1,this.catchCd=0,this.kills=0,this.id=s.nextId=(s.nextId||0)+1,this.leg=0;let n=this.mesh=new pe,r=new Ut(new Bi(.34,.06,10,40),new ne({color:i,roughness:.35,emissive:new wt(i).multiplyScalar(.25)})),a=new Ut(new Ce(.3,.3,.05,32),new ne({color:1710622,roughness:.4}));a.rotation.x=Math.PI/2;let o=new Ut(new Ce(.1,.1,.07,16),new ne({color:i}));o.rotation.x=Math.PI/2;for(let l=0;l<3;l++){let c=new Ut(new xe(.06,.16,.04),new ne({color:16777215})),h=l/3*Math.PI*2;c.position.set(Math.cos(h)*.42,Math.sin(h)*.42,0),c.rotation.z=h,n.add(c)}n.add(r,a,o),r.castShadow=a.castShadow=!0,this.spinner=n,this.holder=new pe,this.holder.add(n),this.holder.visible=!1,t.scene.add(this.holder),this.trail=new Ea(t.scene,22,i,.25)}get body(){return this.owner?this.owner.body:this.game.player}dispose(){this.game.scene.remove(this.holder),this.game.scene.remove(this.trail.mesh)}get out(){return this.state!=="hand"}throw(t,e,i){if(this.state!=="hand"||this.catchCd>0)return!1;this.state="out",this.t=0,this.bounces=0,this.hit.clear(),this.blinked=!1,this.kills=0,this.leg++,this.homing=0,this.bonus=0,this.lock=null,this.cone=0,this.range=0;let n=Math.max(0,i.dot(e))*It.carry;return this.pos.copy(t),this.vel.copy(e).multiplyScalar(It.speed+n),this.holder.visible=!0,this.trail.reset(),this.trail.width=.25,!0}recall(){return this.state!=="out"?!1:(this.state="return",this.hit.clear(),this.leg++,!0)}caught(){this.state="hand",this.holder.visible=!1,this.catchCd=.12}speedMul(){return Zt.clamp(this.vel.length()/It.speed,1,2)}tick(t){if(this.catchCd-=t,this.state==="hand")return;let e=this.game,i=e.arena.col;if(this.t+=t,this.state==="out"){this.homing>0&&e.discHoming(this,t);let n=this.vel.length()*t;for(let r=0;r<5&&n>1e-4;r++){let a=this.vel.length();rn.copy(this.vel).divideScalar(a);let o=i.raycast(this.pos.x,this.pos.y,this.pos.z,rn.x,rn.y,rn.z,n+It.radius,gx),l=!!o&&o.t-It.radius<n,c=o?o.x:0,h=o?o.y:0,d=o?o.z:0,u=o?o.nx:0,f=o?o.ny:0,g=o?o.nz:0,x=l?Math.max(0,o.t-It.radius):n,p=gc.copy(this.pos).addScaledVector(rn,x),m=e.discSweep(this,this.pos,p,"out");if(m){n-=this.pos.distanceTo(m),this.pos.copy(m);continue}if(this.pos.copy(p),n-=x,!l)break;let _=new S(u,f,g),v=this.vel.dot(_);if(this.vel.addScaledVector(_,-2*v),_.y>.7&&(this.vel.y=Math.abs(this.vel.y)*.6),this.bounces++,e.onDiscBounce(this,new S(c,h,d),_),this.bounces>It.maxBounces){this.recall();break}}if(this.state==="out"){let r=e.arena,a=r.half-It.radius,o=0,l=0,c=0;this.pos.y>r.ceiling&&this.vel.y>0&&(this.pos.y=r.ceiling,this.vel.y=-this.vel.y,l=-1),Math.abs(this.pos.x)>a&&this.vel.x*this.pos.x>0&&(o=-Math.sign(this.pos.x),this.pos.x=Math.sign(this.pos.x)*a,this.vel.x=-this.vel.x),Math.abs(this.pos.z)>a&&this.vel.z*this.pos.z>0&&(c=-Math.sign(this.pos.z),this.pos.z=Math.sign(this.pos.z)*a,this.vel.z=-this.vel.z),(o||l||c)&&(this.bounces++,e.onDiscBounce(this,this.pos.clone(),new S(o,l,c).normalize()),this.bounces>It.maxBounces&&this.recall())}this.state==="out"&&this.t>It.outTime+this.bounces*.12&&this.recall()}if(this.state==="return"){let n=this.body,r=rn.copy(n.eye).addScaledVector(n.vel,.04),a=gc.subVectors(r,this.pos),o=a.length();if(o<It.catchDist){e.onDiscCatch(this);return}let l=a.divideScalar(o).multiplyScalar(It.returnSpeed+n.speed);this.vel.lerp(l,Math.min(1,t*9));let c=gc.copy(this.pos).addScaledVector(this.vel,t);e.discSweep(this,this.pos,c,"return"),this.pos.copy(c),this.t>4&&e.onDiscCatch(this)}}blinkSpot(t){let e=rn.copy(this.vel).normalize();for(let i=0;i<=8;i++)for(let n of i?[-1,1]:[1]){let r=n*i*.4;for(let a of[0,.6,1.2]){let o=this.pos.x-e.x*r,l=this.pos.z-e.z*r,c=Math.max(0,this.pos.y-.9-e.y*r)+a;if(t.capsuleFree(o,c,l,.4,1.8))return new S(o,c,l)}}return null}render(t){if(this.state==="hand")return;this.holder.position.copy(this.pos);let e=rn.copy(this.vel).normalize();this.holder.rotation.set(-Math.PI/2+e.y*.6,0,0),this.spinner.rotation.z+=t*30}};var Vs=(s,t,e)=>s.map((i,n)=>i+(t[n]-i)*e),xc=s=>1-Math.pow(1-s,3),Aa=class{constructor(){this.scene=new ns,this.camera=new Ie(60,1,.01,10),this.scene.add(new ls(16777215,13619151,1.8));let t=new cs(16777215,1.6);t.position.set(1,2,1),this.scene.add(t);let e=new ne({color:13619146,roughness:.85}),i=new ne({color:2236966,roughness:.6}),n=new ne({color:16734751,roughness:.4,emissive:4198400}),r=new ne({color:1710622,roughness:.4}),a=d=>{let u=new Ut(new Ce(.045,.06,.44,12),e);u.rotation.x=Math.PI/2,u.position.set(0,-.02,.27),d.add(u);let f=new Ut(new Ce(.051,.051,.03,12),n);f.rotation.x=Math.PI/2,f.position.set(0,-.02,.08),d.add(f),d.add(new Ut(new xe(.08,.09,.1),i));let g=new Ut(new xe(.022,.022,.06),i);g.position.set(.045,.03,-.03),d.add(g)};this.right=new pe,this.scene.add(this.right),a(this.right),this.left=new pe,this.scene.add(this.left),a(this.left),this.right.scale.setScalar(.6),this.left.scale.setScalar(.6),this.left.visible=!1;let o=this.disc=new pe,l=new Ut(new Bi(.17,.03,8,32),n),c=new Ut(new Ce(.15,.15,.025,28),r);c.rotation.x=Math.PI/2;let h=new Ut(new Ce(.05,.05,.035,14),n);h.rotation.x=Math.PI/2,o.add(l,c,h),o.scale.setScalar(.7),o.rotation.x=-Math.PI/2+.22,o.position.set(-.02,.03,-.12),this.right.add(o),this.t=0,this.bob=0,this.swayX=0,this.swayY=0,this.anim=null,this.leftAnim=null}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}throwAnim(){this.anim={t:0,dur:.28,k:"throw"}}catchAnim(){this.anim={t:0,dur:.22,k:"catch"}}blinkAnim(){this.leftAnim={t:0,dur:.35}}update(t,e){this.t+=t,this.swayX+=(-e.mx*5e-4-this.swayX)*Math.min(1,t*12),this.swayY+=(e.my*5e-4-this.swayY)*Math.min(1,t*12),this.swayX=Zt.clamp(this.swayX,-.06,.06),this.swayY=Zt.clamp(this.swayY,-.05,.05),e.grounded&&(this.bob+=t*(3+e.hs*.6));let i=e.grounded?Math.min(1,e.hs/11):0,n=Math.sin(this.bob)*.012*i,r=-Math.abs(Math.cos(this.bob))*.015*i,a=Zt.clamp(-e.vy*.003,-.04,.05),o=[.25,-.24,-.5,.15,-.15,.1],l=e.discOut;if(l&&(o=[.3,-.52,-.45,-.35,-.1,.2]),this.anim){let h=this.anim;h.t+=t;let d=Math.min(1,h.t/h.dur);if(h.k==="throw"){let u=[.38,-.2,-.3,.2,.6,.4],f=[0,-.18,-.75,-.25,-.5,-.2];o=d<.3?Vs(o,u,xc(d/.3)):d<.6?Vs(u,f,xc((d-.3)/.3)):Vs(f,o,(d-.6)/.4)}else{let u=Math.sin(d*Math.PI);o=Vs(o,[.24,-.22,-.52,.35,-.2,.2],u)}d>=1&&(this.anim=null)}this.disc.visible=!l,this.right.position.set(o[0]+this.swayX+n,o[1]+this.swayY+r+a,o[2]),this.right.rotation.set(o[3]+this.swayY*2,o[4]+this.swayX*2,o[5]);let c=[-.3,-.42,-.4,-.2,.2,-.1];if(this.leftAnim){let h=this.leftAnim;h.t+=t;let d=Math.min(1,h.t/h.dur),u=d<.3?xc(d/.3):1-(d-.3)/.7;c=Vs(c,[-.12,-.12,-.62,.05,0,-.3],u),d>=1&&(this.leftAnim=null)}this.left.visible=!!this.leftAnim,this.left.position.set(c[0]+this.swayX+n,c[1]+this.swayY+r+a,c[2]),this.left.rotation.set(c[3]+this.swayY*2,c[4]+this.swayX*2,c[5]),this.disc.rotation.z+=t*(l?0:1.5)}};var wu=[{name:"VEGA",color:3107839},{name:"NOVA",color:1484900},{name:"KITE",color:9063935},{name:"FLUX",color:14723072},{name:"ECHO",color:16727972},{name:"RAZE",color:1223096}],xx=new S,ps=class{constructor(t,{name:e,color:i,isBot:n,body:r=null,disc:a=null}){this.game=t,this.name=e,this.color=i,this.isBot=n,this.css="#"+i.toString(16).padStart(6,"0"),this.body=r||new ds(t.arena,t.botEvents(this)),this.body.easy=!0,this.body.noWall=!0,this.disc=a||new fs(t,this,i),this.disc.owner=this,this.hp=100,this.kills=0,this.deaths=0,this.alive=!0,this.respawnT=0,this.protT=0,this.invulnT=0,this.regenT=0,this.lastHitBy=null,this.lastHitT=-9,this.streak=0,this.st={throws:0,hits:0,blinks:0,slams:0,dodges:0,bank:0,ret:0},this.center=new S,this.brain=null,n&&this.buildModel()}get invuln(){return this.body.invuln||this.invulnT>0||this.protT>0}updateCenter(){let t=this.body.pos;return this.center.set(t.x,t.y+1,t.z),this.center}buildModel(){let t=new ne({color:1973796,roughness:.55,metalness:.1}),e=this.teamMat=new ne({color:this.color,roughness:.4,emissive:new wt(this.color).multiplyScalar(.3)}),i=new ne({color:15921904,roughness:.6}),n=(d,u,f=0,g=0,x=0)=>{let p=new Ut(d,u);return p.position.set(f,g,x),p.castShadow=!0,p},r=this.model=new pe,a=this.torso=new pe;r.add(a),a.add(n(new tn(.31,.55,4,12),t,0,.98,0));let o=n(new Bi(.32,.05,8,24),e,0,.92,0);o.rotation.x=Math.PI/2,a.add(o),a.add(n(new xe(.42,.22,.08),i,0,1.2,.27)),this.head=n(new zi(.21,16,12),t,0,1.64,0),a.add(this.head),this.head.add(n(new xe(.32,.08,.1),e,0,.02,-.17)),this.legs=[];for(let d of[-1,1]){let u=new pe;u.position.set(d*.13,.55,0),u.add(n(new tn(.09,.36,4,8),t,0,-.27,0)),r.add(u),this.legs.push(u)}this.arm=new pe,this.arm.position.set(.36,1.28,0),a.add(this.arm),this.arm.add(n(new tn(.075,.36,4,8),t,0,-.22,0));let l=this.handDisc=new pe;l.position.set(.04,-.45,-.12),l.add(n(new Bi(.17,.035,8,24),e));let c=n(new Ce(.15,.15,.03,20),t);c.rotation.x=Math.PI/2,l.add(c),l.rotation.y=Math.PI/2,this.arm.add(l);let h=this.tagCanvas=document.createElement("canvas");h.width=256,h.height=64,this.tagTex=new rs(h),this.tagTex.colorSpace=ke,this.tag=new Qr(new zs({map:this.tagTex,depthTest:!1,transparent:!0})),this.tag.scale.set(1.6,.4,1),this.tag.renderOrder=20,r.add(this.tag),this.tag.position.y=2.35,this._tagHp=-1,this.drawTag(),this.game.scene.add(r),this.walk=0,this.lean=0,this.throwT=0}drawTag(){let t=this.tagCanvas.getContext("2d"),e=Math.max(0,Math.round(this.hp));e!==this._tagHp&&(this._tagHp=e,t.clearRect(0,0,256,64),t.font='700 26px "Space Grotesk", "Noto Sans KR", sans-serif',t.textAlign="center",t.lineWidth=5,t.strokeStyle="rgba(255,255,255,.95)",t.strokeText(this.name,128,27),t.fillStyle=this.css,t.fillText(this.name,128,27),t.fillStyle="rgba(0,0,0,.22)",t.fillRect(48,40,160,10),t.fillStyle=e<35?"#e8202f":"#16161a",t.fillRect(48,40,160*e/100,10),this.tagTex.needsUpdate=!0)}renderModel(t,e,i){if(!this.model)return;let n=this.body,r=this.model;if(r.visible=this.alive&&!(this.protT>0&&Math.sin(i*40)>.3),!this.alive)return;r.position.set(n.prevPos.x+(n.pos.x-n.prevPos.x)*e,n.prevPos.y+(n.pos.y-n.prevPos.y)*e,n.prevPos.z+(n.pos.z-n.prevPos.z)*e),r.rotation.y=n.yaw;let a=n.hSpeed,o=n.flatFwd(xx),l=n.vel.x*o.x+n.vel.z*o.z;this.lean+=(Zt.clamp(-l*.012,-.35,.35)-this.lean)*Math.min(1,t*8),this.torso.rotation.x=this.lean,n.grounded&&(this.walk+=t*(2+a*.9));let c=n.grounded?Math.sin(this.walk)*Math.min(1,a/8)*.8:.5;this.legs[0].rotation.x=n.grounded?c:-.6,this.legs[1].rotation.x=n.grounded?-c:.3,this.head.rotation.x=n.pitch*.6,this.throwT=Math.max(0,this.throwT-t);let h=this.throwT>0?Math.sin((1-this.throwT/.25)*Math.PI):0;this.arm.rotation.x=.35+n.pitch*.5+h*1.4,this.arm.rotation.z=-.15,this.handDisc.visible=this.disc.state==="hand",this.handDisc.rotation.z+=t*2,this.drawTag();let u=.4+Math.max(4,r.position.distanceTo(this.game.camera.position))*.035;this.tag.scale.set(u*4,u,1)}shatter(t){let e=[];return this.model&&(this.model.updateMatrixWorld(!0),this.model.traverse(i=>{if(!i.isMesh||!i.visible)return;let n=new S,r=new ze,a=new S;i.matrixWorld.decompose(n,r,a);let o=new Ut(i.geometry,i.material);o.position.copy(n),o.quaternion.copy(r),o.scale.copy(a),o.castShadow=!0,this.game.scene.add(o);let l=new S((Math.random()-.5)*8,3+Math.random()*6,(Math.random()-.5)*8);t&&l.addScaledVector(t,9),e.push({m:o,v:l,av:new S(Math.random()*14-7,Math.random()*14-7,Math.random()*14-7),life:2+Math.random()})}),this.model.visible=!1),e}dispose(){this.model&&this.game.scene.remove(this.model),this.isBot&&this.disc.dispose()}};var Hi={easy:{name:"\uC26C\uC6C0",react:.42,err:.075,turn:5,align:.12,lead:.5,gravity:!1,bank:0,lob:0,recall:.2,slam:.12,dodge:.03,dodgeLead:.06,bhop:.15,strafe:.55,strafeMin:.9,strafeMax:2,think:.3,pause:.6,escape:0,mobility:0},normal:{name:"\uBCF4\uD1B5",react:.26,err:.04,turn:8,align:.07,lead:.85,gravity:!0,bank:.25,lob:.2,recall:.5,slam:.4,dodge:.1,dodgeLead:.08,bhop:.45,strafe:.8,strafeMin:.6,strafeMax:1.5,think:.18,pause:.3,escape:.4,mobility:.3},hard:{name:"\uC5B4\uB824\uC6C0",react:.15,err:.018,turn:14,align:.04,lead:1,gravity:!0,bank:.8,lob:.6,recall:.85,slam:.75,dodge:.22,dodgeLead:.1,bhop:.75,strafe:1,strafeMin:.35,strafeMax:1.1,think:.1,pause:.12,escape:.8,mobility:.6},max:{name:"\uCD5C\uAC15",react:.06,err:.006,turn:30,align:.02,lead:1,gravity:!0,bank:1,lob:1,recall:1,slam:1,dodge:.35,dodgeLead:.11,bhop:1,strafe:1,strafeMin:.22,strafeMax:.9,think:.05,pause:.02,escape:1,mobility:1}},yx=K.gravity,Ra=K.radius+It.radius,_x=[-.12,-.06,-.02,.03,.09,.17],Ca=new S,vx=new S,Pa=new S,Gs=new S,Mx=new S,bx=new S,ni=new S,ye=new S,ve=new S,ki=new S,Ia=new S,yc={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Sx={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},pi=Zt.clamp,Ws=class{constructor(t,e,i="max"){this.G=t,this.f=e,this.key=Hi[i]?i:"max",this.S=Hi[this.key],this.inp={fwd:0,right:0,jumpPressed:!1,jumpHeld:!1,crouch:!1,dashPressed:!1,grapplePressed:!1,grappleHeld:!1,autoHop:!0},this.reset()}reset(){this.target=null,this.thinkT=0,this.hasLos=!1,this.strafe=Math.random()<.5?1:-1,this.strafeT=0,this.pv=new Map,this.rolls=new Map,this.cool=.25+Math.random()*.3,this.aimYaw=this.f.body.yaw,this.aimPitch=0,this.ph=Math.random()*100,this.plan=null,this.lastBank=-9,this.slamHold=0,this.hopT=0,this.hopOn=!1,this.stuckT=0,this.jumpNow=!1,this.wanderT=0,this.wander=new S}roll(t,e){let i=this.rolls.get(t);return i===void 0&&(i=Math.random()<e,this.rolls.set(t,i),this.rolls.size>80&&this.rolls.delete(this.rolls.keys().next().value)),i}perceive(t){let e=Math.min(1,t/this.S.react);for(let i of this.G.fighters){if(i===this.f)continue;let n=this.pv.get(i);n||(n=i.body.vel.clone(),this.pv.set(i,n)),n.lerp(i.body.vel,e)}}predict(t,e,i){let n=t.body,r=this.pv.get(t)||n.vel,a=this.S.lead;i.set(n.pos.x+r.x*e*a,n.pos.y+1,n.pos.z+r.z*e*a),n.grounded||(i.y+=(this.S.gravity?r.y*e-.5*yx*e*e:r.y*e)*a),i.y<.8&&(i.y=.8);let o=this.G.arena.half-.6;return i.x=pi(i.x,-o,o),i.z=pi(i.z,-o,o),i}intercept(t,e,i){let n=this.f.body,r=e.body.pos.distanceTo(t)/It.speed;for(let a=0;a<4;a++){this.predict(e,r,i);let o=i.x-t.x,l=i.y-t.y,c=i.z-t.z,h=Math.hypot(o,l,c)||1,d=Math.max(0,(n.vel.x*o+n.vel.y*l+n.vel.z*c)/h)*It.carry;r=h/(It.speed+d)}return r}pickTarget(t){let e=this.G,i=this.f,n=null,r=1e9;for(let a of e.fighters){if(a===i||!a.alive)continue;let o=a.body.pos.distanceTo(i.body.pos),l=e.los(t,a.updateCenter()),c=o+(l?0:14)+a.hp*.08+(a.protT>0?30:0);a===i.lastHitBy&&e.gameTime-i.lastHitT<3&&(c-=12),a===this.target&&(c-=6),c<r&&(r=c,n=a)}return n}tick(t){let e=this.f,i=e.body,n=this.inp;if(n.fwd=0,n.right=0,n.jumpPressed=!1,n.dashPressed=!1,n.jumpHeld=!1,n.autoHop=!0,!e.alive)return n;this.perceive(t),Ca.copy(i.eye),this.thinkT-=t,this.target&&!this.target.alive&&(this.target=null,this.thinkT=0),this.thinkT<=0&&(this.thinkT=this.S.think*(.7+Math.random()*.6),this.target=this.pickTarget(Ca),this.hasLos=this.target?this.G.los(Ca,this.target.updateCenter()):!1),this.cool-=t;let r=this.scanThreats();return this.move(t,n,r),this.combat(t),n}scanThreats(){let t=this.f,e=t.body,i=e.pos.x,n=e.pos.y+.9,r=e.pos.z,a=null;for(let o of this.G.fighters){if(o===t)continue;let l=o.disc;if(l.state==="hand"||l.hit.has(t))continue;let c=l.pos.x-i,h=l.pos.y-n,d=l.pos.z-r,u=l.vel.x-e.vel.x,f=l.vel.y-e.vel.y,g=l.vel.z-e.vel.z,x=u*u+f*f+g*g;if(x<1)continue;let p=-(c*u+h*f+d*g)/x;if(p<0||p>.6)continue;let m=c+u*p,_=h+f*p,v=d+g*p,w=pi(_,-.5,.5);Math.hypot(m,_-w,v)>Ra+.45||(!a||p<a.tca)&&(a={tca:p,d:l,vx:u,vz:g,key:l.id+":"+l.leg})}return a}move(t,e,i){let n=this.G,r=this.f,a=r.body,o=this.S,l=this.target,c=bx.set(0,0,0),h=0;if(l){let f=l.body.pos,g=f.x-a.pos.x,x=f.z-a.pos.z;h=Math.hypot(g,x)||1,g/=h,x/=h,this.strafeT-=t,this.strafeT<=0&&(this.strafe=Math.random()<.8?-this.strafe:this.strafe,this.strafeT=o.strafeMin+Math.random()*(o.strafeMax-o.strafeMin));let p=r.hp<40,m=p?13:8,_=p?26:19,v=0;this.hasLos?h>_?v=1:h<m&&(v=-.9):v=.9,c.set(-x*this.strafe*o.strafe+g*v,0,g*this.strafe*o.strafe+x*v)}else this.wanderT-=t,this.wanderT<=0&&(this.wanderT=2+Math.random()*2,this.wander.set((Math.random()-.5)*50,0,(Math.random()-.5)*50)),c.set(this.wander.x-a.pos.x,0,this.wander.z-a.pos.z);for(let f of n.fighters){if(f===r)continue;let g=f.disc;if(g.state!=="out")continue;let x=a.pos.x-g.pos.x,p=a.pos.z-g.pos.z,m=Math.hypot(x,p);m<6.5&&m>.01&&(c.x+=x/m*1.4,c.z+=p/m*1.4)}let d=n.arena.half-6;if(a.pos.x>d&&(c.x-=1.5),a.pos.x<-d&&(c.x+=1.5),a.pos.z>d&&(c.z-=1.5),a.pos.z<-d&&(c.z+=1.5),i){let f=-i.vz,g=i.vx,x=Math.hypot(f,g)||1;f/=x,g/=x;let p=(a.pos.x-i.d.pos.x)*f+(a.pos.z-i.d.pos.z)*g>=0?1:-1;c.set(f*p*2,0,g*p*2),i.tca<o.dodgeLead&&this.roll("dodge"+i.key,o.dodge)&&(a.dashCharges>0&&a.dashT<=0&&!(a.dashCd>0)?e.dashPressed=!0:(a.grounded||a.airJumps>0)&&(e.jumpPressed=!0))}this.jumpNow=!1,this.avoid(c),this.jumpNow&&a.grounded&&(e.jumpPressed=!0),a.hSpeed<2.5&&c.lengthSq()>.1?(this.stuckT+=t,this.stuckT>.45&&(this.strafe=-this.strafe,this.strafeT=.6,e.jumpPressed=!0,this.stuckT=0)):this.stuckT=0;let u=Math.hypot(c.x,c.z);if(u>.05){c.x/=u,c.z/=u;let f=-Math.sin(a.yaw),g=-Math.cos(a.yaw),x=Math.cos(a.yaw),p=-Math.sin(a.yaw),m=c.x*f+c.z*g,_=c.x*x+c.z*p;e.fwd=m>.38?1:m<-.38?-1:0,e.right=_>.38?1:_<-.38?-1:0}this.hopT-=t,this.hopT<=0&&(this.hopOn=Math.random()<o.bhop,this.hopT=.6+Math.random()*1.4),e.jumpHeld=this.hopOn,this.hopOn&&!a.grounded&&a.vel.y<-3&&a.airJumps>0&&Math.random()<t*.9*o.bhop&&(e.jumpPressed=!0),l&&!i&&o.mobility>0&&h>26&&a.dashCharges>=a.dashMax&&Math.random()<t*o.mobility&&(e.dashPressed=!0)}avoid(t){let e=this.f.body,i=Math.hypot(t.x,t.z);if(i<.05)return;let n=t.x/i,r=t.z/i,a=1.6+Math.min(4,e.hSpeed*.15),o=this.blocked(n,r,a);if(o){if(o==="low"){yc.t<2.2&&(this.jumpNow=!0);return}for(let l of[.6,1.2,1.9])for(let c of[this.strafe,-this.strafe]){let h=l*c,d=Math.cos(h),u=Math.sin(h),f=n*d-r*u,g=n*u+r*d;if(!this.blocked(f,g,a)){t.x=f*i,t.z=g*i;return}}t.x=-n*i,t.z=-r*i,this.strafe=-this.strafe}}blocked(t,e,i){let n=this.f.body,r=this.G.arena.col,a=r.raycast(n.pos.x,n.pos.y+.5,n.pos.z,t,0,e,i,yc);return!a||Math.abs(a.ny)>.6?!1:r.raycast(n.pos.x,n.pos.y+1.75,n.pos.z,t,0,e,i+.6,Sx)?!0:"low"}aim(t,e){let i=this.f.body,n=this.S,r=Math.atan2(-e.x,-e.z),a=Math.asin(pi(e.y,-1,1)),o=r-this.aimYaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;let l=n.turn*t;this.aimYaw+=pi(o,-l,l),this.aimPitch+=pi(a-this.aimPitch,-l,l),this.ph+=t;let c=n.err;i.yaw=this.aimYaw+c*(Math.sin(this.ph*1.9)+.6*Math.sin(this.ph*4.3+1.3))/1.6,i.pitch=pi(this.aimPitch+c*.6*(Math.sin(this.ph*2.3+2)+.5*Math.sin(this.ph*5.1))/1.5,-1.5,1.5)}combat(t){let e=this.G,i=this.f,n=i.body,r=this.S,a=i.disc,o=this.target,l=vx.copy(Ca);l.y-=.15;let c,h=!1;if(o){if(this.intercept(l,o,Pa),c=Gs.subVectors(Pa,l).normalize(),a.state==="hand"){if(this.plan&&this.plan.until>e.gameTime)c=Gs.copy(this.plan.dir),h=!0;else if(this.plan=null,e.los(l,Pa))h=o.protT<=.15;else if(e.gameTime-this.lastBank>(this.key==="max"?.3:.55)){this.lastBank=e.gameTime;let d=e.bankBudget||(e.bankBudget={t:0,n:0});e.gameTime-d.t>1&&(d.t=e.gameTime,d.n=0);let u=r.bank>0&&Math.random()<r.bank&&d.n<8;u&&d.n++;let f=u?this.solveBank(l,o):null;f?(this.plan={dir:f.clone(),until:e.gameTime+.35},c=Gs.copy(f),h=!0):r.lob>0&&Math.random()<r.lob&&(ki.copy(Pa),ki.y+=2.8,e.los(l,ki)&&l.distanceTo(ki)<40&&(this.plan={dir:ki.sub(l).normalize().clone(),until:e.gameTime+.35},c=Gs.copy(this.plan.dir),h=!0))}}}else c=Gs.set(n.vel.x,0,n.vel.z),c.lengthSq()<.5&&n.flatFwd(c),c.normalize();if(this.aim(t,c),h&&a.state==="hand"&&a.catchCd<=0&&this.cool<=0){let d=n.lookDir(Mx);d.angleTo(c)<r.align&&(e.throwFor(i,d),this.cool=r.pause*(.5+Math.random()),this.plan=null)}a.state!=="hand"&&this.discPlay(t)}discPlay(t){let e=this.G,i=this.f,n=i.body,r=this.S,a=i.disc,o=this.target,l=null,c=!1;for(let u of e.fighters){if(u===i||!u.alive||u.protT>0)continue;let f=u.updateCenter();if(!a.hit.has(u)&&!u.invuln){let g=a.pos.x-f.x,x=a.pos.y-f.y,p=a.pos.z-f.z,m=a.vel.x-u.body.vel.x,_=a.vel.y-u.body.vel.y,v=a.vel.z-u.body.vel.z,w=m*m+_*_+v*v;if(w>1){let C=-(g*m+x*_+p*v)/w;if(C>0&&C<.15){let T=x+_*C;Math.hypot(g+m*C,T-pi(T,-.5,.5),p+v*C)<Ra&&(c=!0)}}}!l&&!u.invuln&&a.pos.distanceTo(f)<It.blinkRadius*.8&&(l=u)}if(l&&!c&&a.t>.04){if(this.slamHold+=t,this.slamHold>=r.react*.5&&this.roll("slam"+a.id+":"+a.leg,r.slam)&&e.blinkFor(i)){this.slamHold=0,this.cool=0;return}}else this.slamHold=0;if(!o)return;if(a.state==="out"&&a.t>.08&&r.recall>0&&this.returnHits(o)&&this.roll("recall"+a.id+":"+a.leg+":"+Math.floor(a.t*8),r.recall)){e.recallFor(i);return}let h=n.pos.distanceTo(o.body.pos),d=a.pos.distanceTo(o.body.pos);if(a.state==="out"&&r.mobility>0&&a.t>.28&&h>26&&d<h-12&&this.roll("mob"+a.id+":"+a.leg,r.mobility*.7)){e.blinkFor(i);return}if(r.escape>0&&i.hp<35&&a.state==="out"&&a.t>.2){let u=1e9,f=1e9;for(let g of e.fighters)g===i||!g.alive||(u=Math.min(u,g.body.pos.distanceTo(n.pos)),f=Math.min(f,g.body.pos.distanceTo(a.pos)));if(u<9&&f>14&&this.roll("esc"+a.id+":"+a.leg,r.escape)){e.blinkFor(i);return}}}returnHits(t){let e=this.f.body,i=this.f.disc,n=1/60;ye.copy(i.pos),ve.copy(i.vel),Ia.copy(e.eye);for(let r=0,a=0;r<70;r++,a+=n){let o=Ia.x+e.vel.x*a,l=Ia.y+e.vel.y*a*.5,c=Ia.z+e.vel.z*a,h=o-ye.x,d=l-ye.y,u=c-ye.z,f=Math.hypot(h,d,u);if(f<It.catchDist)return!1;let g=It.returnSpeed+e.speed,x=Math.min(1,n*9);ve.x+=(h/f*g-ve.x)*x,ve.y+=(d/f*g-ve.y)*x,ve.z+=(u/f*g-ve.z)*x,ye.addScaledVector(ve,n),this.predict(t,a+n,ni);let p=ye.x-ni.x,m=ye.y-ni.y,_=ye.z-ni.z;if(Math.hypot(p,pi(m,-.5,.5)-m,_)<Ra+.1)return!0}return!1}solveBank(t,e){let i=this.f.body,n=null,r=1e9,a=[],o=Math.atan2(-(e.body.pos.x-t.x),-(e.body.pos.z-t.z)),l=(c,h,d)=>{let u=Math.cos(h);ki.set(-Math.sin(c)*u,Math.sin(h),-Math.cos(c)*u);let f=It.speed+Math.max(0,i.vel.dot(ki))*It.carry,g=this.simDisc(t,ki,f,e);g!==null?g<r&&(r=g,n=(n||new S).copy(ki)):d&&this._miss<3.5&&(a.push({yaw:c,pitch:h,m:this._miss}),a.length>12&&(a.sort((x,p)=>x.m-p.m),a.length=6))};for(let c=0;c<72;c++){let h=o+(c%2?1:-1)*Math.ceil(c/2)*(Math.PI/36);for(let d of _x)l(h,d,!0)}if(!n){a.sort((c,h)=>c.m-h.m);for(let c of a.slice(0,4)){for(let h=-3;h<=3;h++)for(let d=-2;d<=2;d++)l(c.yaw+h*.014,c.pitch+d*.015,!1);if(n)break}}return n}simDisc(t,e,i,n){let r=this.G.arena.col;ye.copy(t),ve.copy(e).multiplyScalar(i);let a=0,o=0;this._miss=1e9;for(let l=0;l<4;l++){let c=ve.length(),h=ve.x/c,d=ve.y/c,u=ve.z/c,f=c*(It.outTime+o*.12-a);if(f<=.3)return null;let g=r.raycast(ye.x,ye.y,ye.z,h,d,u,f+It.radius,yc),x=g?Math.max(0,g.t-It.radius):f,p=x*.5;for(let T=0;T<2;T++)this.predict(n,a+p/c,ni),p=pi((ni.x-ye.x)*h+(ni.y-ye.y)*d+(ni.z-ye.z)*u,0,x);this.predict(n,a+p/c,ni);let m=ye.x+h*p-ni.x,_=ye.y+d*p-ni.y,v=ye.z+u*p-ni.z,w=Math.hypot(m,pi(_,-.5,.5)-_,v);if(w<Ra)return a+p/c;if(w<this._miss&&(this._miss=w),!g)return null;let C=ve.x*g.nx+ve.y*g.ny+ve.z*g.nz;if(ve.x-=2*C*g.nx,ve.y-=2*C*g.ny,ve.z-=2*C*g.nz,g.ny>.7&&(ve.y=Math.abs(ve.y)*.6),ye.set(ye.x+h*x,ye.y+d*x,ye.z+u*x),a+=x/c,o++,o>3)return null}return null}};var La=class{constructor(){this.ctx=null,this.master=null,this.sfxVol=.8,this.musicVol=.45,this.vol=1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i),i.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=this.musicVol,this.music.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let h=0;h<n;h++)r[h]=Math.random()*2-1;let a=e.sampleRate*1.4,o=e.createBuffer(2,a,e.sampleRate);for(let h=0;h<2;h++){let d=o.getChannelData(h);for(let u=0;u<a;u++)d[u]=(Math.random()*2-1)*Math.pow(1-u/a,3)}this.reverb=e.createConvolver(),this.reverb.buffer=o,this.revGain=e.createGain(),this.revGain.gain.value=.22,this.reverb.connect(this.revGain),this.revGain.connect(this.sfx);let l=e.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.value=400,this.windFilter.Q.value=.7,this.windGain=e.createGain(),this.windGain.gain.value=0,l.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.sfx),l.start();let c=e.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0,this.wrFilter=e.createBiquadFilter(),this.wrFilter.type="highpass",this.wrFilter.frequency.value=2500,this.wrGain=e.createGain(),this.wrGain.gain.value=0,c.connect(this.wrFilter),this.wrFilter.connect(this.wrGain),this.wrGain.connect(this.sfx),c.start(),this._musicStep=0,this._musicNext=0,this.musicOn=!0}setVolumes(t,e){this.sfxVol=t,this.musicVol=e,this.ctx&&(this.sfx.gain.value=t,this.music.gain.value=e)}get t(){return this.ctx.currentTime}_noise(t,{type:e="bandpass",freq:i=1e3,q:n=1,gain:r=.5,attack:a=.002,sweepTo:o=null,rev:l=.3}={}){if(!this.ctx)return;let c=this.ctx,h=this.t;r=Math.max(2e-4,r*this.vol);let d=c.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.4;let u=c.createBiquadFilter();u.type=e,u.frequency.setValueAtTime(i,h),u.Q.value=n,o&&u.frequency.exponentialRampToValueAtTime(o,h+t);let f=c.createGain();if(f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(r,h+a),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(f),f.connect(this.sfx),l){let g=c.createGain();g.gain.value=l,f.connect(g),g.connect(this.reverb)}d.start(h,Math.random()),d.stop(h+t+.05)}_tone(t,e,{type:i="sine",gain:n=.3,attack:r=.002,slideTo:a=null,rev:o=.3,delay:l=0}={}){if(!this.ctx)return;let c=this.ctx,h=this.t+l;n=Math.max(2e-4,n*this.vol);let d=c.createOscillator();d.type=i,d.frequency.setValueAtTime(t,h),a&&d.frequency.exponentialRampToValueAtTime(a,h+e);let u=c.createGain();if(u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(n,h+r),u.gain.exponentialRampToValueAtTime(1e-4,h+e),d.connect(u),u.connect(this.sfx),o){let f=c.createGain();f.gain.value=o,u.connect(f),f.connect(this.reverb)}d.start(h),d.stop(h+e+.05)}slash(t=1){this._noise(.22,{type:"bandpass",freq:3500,sweepTo:600,q:1.2,gain:.35*t,attack:.01}),this._noise(.12,{type:"highpass",freq:6e3,gain:.12*t,rev:0})}slashHit(){this._noise(.18,{type:"lowpass",freq:1800,gain:.6,rev:.2}),this._tone(180,.15,{type:"square",gain:.12,slideTo:60})}gunshot(){this._noise(.35,{type:"lowpass",freq:5e3,sweepTo:300,gain:.8,rev:.6}),this._tone(140,.25,{type:"sine",gain:.6,slideTo:40,rev:0}),this._noise(.05,{type:"highpass",freq:3e3,gain:.4,rev:0})}enemyShot(t=10){let e=Math.max(.05,.4-t*.008);this._noise(.25,{type:"bandpass",freq:1400,sweepTo:400,gain:e,rev:.6}),this._tone(900,.12,{type:"sawtooth",gain:e*.3,slideTo:300,rev:.3})}parry(t=!0){let e=t?1:.6;[1,2.76,5.4,8.93].forEach((i,n)=>this._tone(620*i,.9/(n+1),{type:"sine",gain:.22*e/(n*.6+1),rev:.7})),this._noise(.08,{type:"highpass",freq:4e3,gain:.5*e,rev:.5}),t&&this._tone(1240,.6,{type:"triangle",gain:.1,slideTo:2480,delay:.03})}clash(){[1,2.4,4.1].forEach((t,e)=>this._tone(480*t,.5,{type:"triangle",gain:.25/(e+1),rev:.8})),this._noise(.15,{type:"bandpass",freq:2500,gain:.6})}dash(){this._noise(.3,{type:"bandpass",freq:400,sweepTo:2500,q:.8,gain:.45,attack:.02}),this._tone(90,.2,{type:"sine",gain:.3,slideTo:200,rev:0})}jump(){this._noise(.12,{type:"lowpass",freq:900,gain:.18,rev:0})}land(t){this._noise(t?.25:.1,{type:"lowpass",freq:t?500:900,gain:t?.5:.2,rev:.1}),t&&this._tone(70,.25,{gain:.4,slideTo:35,rev:0})}step(){this._noise(.06,{type:"bandpass",freq:700+Math.random()*400,gain:.12,rev:0})}slideStart(){this._noise(.5,{type:"bandpass",freq:1800,sweepTo:700,gain:.25,attack:.03})}grapple(){this._tone(1800,.15,{type:"square",gain:.08,slideTo:300}),this._noise(.2,{type:"highpass",freq:2e3,gain:.2})}grappleHit(){this._tone(300,.1,{type:"square",gain:.15,slideTo:120,rev:0})}hitmarker(t){this._tone(t?2200:1600,.06,{type:"square",gain:.08,rev:0}),t&&this._tone(3300,.1,{type:"sine",gain:.1,rev:0,delay:.02})}kill(t=1){let e=440*Math.pow(1.06,Math.min(t,12)*2);this._tone(e,.25,{type:"triangle",gain:.18}),this._tone(e*1.5,.35,{type:"triangle",gain:.14,delay:.06}),this._noise(.4,{type:"lowpass",freq:600,sweepTo:80,gain:.4})}hurt(){this._tone(220,.25,{type:"sawtooth",gain:.2,slideTo:90,rev:0}),this._noise(.15,{type:"lowpass",freq:700,gain:.4,rev:0})}reload(){this._tone(900,.04,{type:"square",gain:.1,rev:0}),this._tone(600,.05,{type:"square",gain:.1,rev:0,delay:.25}),this._tone(1300,.05,{type:"square",gain:.12,rev:0,delay:.55})}empty(){this._tone(1400,.03,{type:"square",gain:.06,rev:0})}wave(){[0,.12,.24].forEach((t,e)=>this._tone(220*Math.pow(1.5,e),.6,{type:"sawtooth",gain:.1,delay:t}))}bulletWhiz(){this._noise(.15,{type:"bandpass",freq:2500,sweepTo:900,q:3,gain:.15,rev:0})}ui(){this._tone(1e3,.05,{type:"sine",gain:.08,rev:0})}discThrow(t=1){this._noise(.25,{type:"bandpass",freq:900,sweepTo:3200,q:1.5,gain:.35*t,attack:.01}),this._tone(500,.18,{type:"triangle",gain:.08,slideTo:1400,rev:.2})}discBounce(t=1){this._tone(900+t*260,.12,{type:"square",gain:.07,rev:.3}),this._noise(.06,{type:"highpass",freq:3e3,gain:.25,rev:.2})}discCatch(){this._tone(1500,.06,{type:"triangle",gain:.12,rev:0}),this._noise(.05,{type:"lowpass",freq:1500,gain:.2,rev:0})}discHit(t=1){this._noise(.12,{type:"lowpass",freq:2500,gain:.5,rev:.15}),this._tone(240+t*60,.1,{type:"square",gain:.1,slideTo:90,rev:0})}blink(){this._tone(300,.25,{type:"sine",gain:.35,slideTo:1600,rev:.4}),this._noise(.2,{type:"bandpass",freq:4e3,sweepTo:500,gain:.3})}slam(){this._noise(.4,{type:"lowpass",freq:1200,sweepTo:80,gain:.7,rev:.4}),this._tone(70,.3,{type:"sine",gain:.5,slideTo:35,rev:0})}orbFire(t){let e=Math.max(.05,.3-t*.004);this._tone(700,.2,{type:"sine",gain:e,slideTo:250,rev:.4})}shieldClang(){[1,2.3,3.9].forEach((t,e)=>this._tone(520*t,.25,{type:"triangle",gain:.12/(e+1),rev:.5}))}shotgun(){this._noise(.5,{type:"lowpass",freq:3500,sweepTo:160,gain:1,rev:.7}),this._tone(90,.35,{type:"sine",gain:.8,slideTo:30,rev:0}),this._noise(.08,{type:"highpass",freq:2500,gain:.5,rev:0})}pump(){this._noise(.06,{type:"bandpass",freq:1500,gain:.2,rev:0}),this._noise(.06,{type:"bandpass",freq:900,gain:.25,rev:0})}wallStart(){this._noise(.25,{type:"bandpass",freq:2200,sweepTo:900,gain:.18})}climb(){this._noise(.15,{type:"bandpass",freq:600,gain:.2,rev:0})}mantle(){this._noise(.18,{type:"lowpass",freq:700,gain:.25,rev:0})}hookFire(){this._tone(2200,.18,{type:"sawtooth",gain:.06,slideTo:600}),this._noise(.12,{type:"highpass",freq:3e3,gain:.2})}hookAttach(t){this._tone(t?500:320,.12,{type:"square",gain:.14,slideTo:140,rev:.2}),this._noise(.06,{type:"bandpass",freq:1800,gain:.3,rev:0})}sniperCharge(t){let e=Math.max(.04,.22-t*.002);this._tone(1800,1.2,{type:"sine",gain:e,slideTo:3600,attack:.05,rev:.4})}sniperShot(t){let e=Math.max(.15,.7-t*.004);this._noise(.7,{type:"lowpass",freq:5e3,sweepTo:200,gain:e,rev:.9}),this._tone(220,.5,{type:"sawtooth",gain:e*.3,slideTo:50})}telegraph(t){t?this._tone(2400,.09,{type:"triangle",gain:.12,rev:.3}):(this._tone(160,.35,{type:"sawtooth",gain:.2,slideTo:90,rev:.4}),this._tone(170,.35,{type:"sawtooth",gain:.15,slideTo:95}))}block(){[1,2.1,3.6].forEach((t,e)=>this._tone(380*t,.3,{type:"triangle",gain:.14/(e+1),rev:.6})),this._noise(.08,{type:"bandpass",freq:2200,gain:.35})}broken(){this._tone(880,.5,{type:"square",gain:.08,slideTo:1760,rev:.6}),this._tone(440,.6,{type:"triangle",gain:.1,rev:.6,delay:.05})}execute(){this._noise(.8,{type:"lowpass",freq:3e3,sweepTo:60,gain:.9,rev:.9}),this._tone(60,.8,{type:"sine",gain:.8,slideTo:25,rev:0}),[1,1.5,2].forEach((t,e)=>this._tone(660*t,1,{type:"triangle",gain:.08,rev:.9,delay:.05*e}))}chargeStart(){this._tone(200,.6,{type:"sawtooth",gain:.05,slideTo:800,attack:.1,rev:.3})}iaido(){this._noise(.5,{type:"bandpass",freq:600,sweepTo:6e3,q:.7,gain:.6,attack:.01,rev:.6}),this._tone(120,.4,{type:"sine",gain:.5,slideTo:40,rev:0})}droneExplode(){this._noise(.6,{type:"lowpass",freq:2e3,sweepTo:80,gain:.7,rev:.6})}checkpoint(t){[0,.07,.14].forEach((e,i)=>this._tone(880*Math.pow(1.26,i),.25,{type:"triangle",gain:.12,delay:e})),t&&[0,.1,.2,.3].forEach((e,i)=>this._tone(660*Math.pow(1.5,i%3),.5,{type:"square",gain:.06,delay:.25+e}))}boost(){this._tone(300,.3,{type:"sawtooth",gain:.1,slideTo:1200,rev:.3})}update(t,e,i,n=0){if(!this.ctx)return;this.intensity=(this.intensity||0)+(n-(this.intensity||0))*Math.min(1,i*2);let r=Math.min(t/40,1);this.windGain.gain.setTargetAtTime(Math.max(0,r-.15)*.35,this.t,.1),this.windFilter.frequency.setTargetAtTime(300+r*1600,this.t,.1),this.wrGain.gain.setTargetAtTime(e?.06:0,this.t,.05),this._updateMusic()}_updateMusic(){if(!this.musicOn||this.musicVol<=.001)return;let t=this.ctx,e=132,i=60/e/4;for(this._musicNext<t.currentTime&&(this._musicNext=t.currentTime+.05);this._musicNext<t.currentTime+.2;)this._playStep(this._musicStep,this._musicNext),this._musicNext+=i,this._musicStep=(this._musicStep+1)%64}_playStep(t,e){let i=this.ctx,n=this.music,r=Math.floor(t/16),a=t%16,l=[36,36,39,34][r],c=d=>440*Math.pow(2,(d-69)/12),h=(d,u,f,g=.003)=>{d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(u,e+g),d.gain.exponentialRampToValueAtTime(1e-4,e+f)};if(a%4===0){let d=i.createOscillator(),u=i.createGain();d.frequency.setValueAtTime(140,e),d.frequency.exponentialRampToValueAtTime(40,e+.12),h(u,.9,.3),d.connect(u),u.connect(n),d.start(e),d.stop(e+.32)}if(a===4||a===12){let d=i.createBufferSource();d.buffer=this.noiseBuf;let u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=1800;let f=i.createGain();h(f,.35,.18),d.connect(u),u.connect(f),f.connect(n),d.start(e,Math.random()),d.stop(e+.2)}if(a%2===1){let d=i.createBufferSource();d.buffer=this.noiseBuf;let u=i.createBiquadFilter();u.type="highpass",u.frequency.value=8e3;let f=this.intensity||0,g=i.createGain();h(g,(a%4===3?.12:.06)*(.6+f*.8),.05),d.connect(u),u.connect(g),g.connect(n),d.start(e,Math.random()),d.stop(e+.06)}if(a%4!==0){let d=i.createOscillator();d.type="sawtooth",d.frequency.value=c(l+(a===14?12:0));let u=i.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(900,e),u.frequency.exponentialRampToValueAtTime(150,e+.1),u.Q.value=6;let f=i.createGain();h(f,.22,.12),d.connect(u),u.connect(f),f.connect(n),d.start(e),d.stop(e+.14)}if((this.intensity||0)>.55&&(a===0||a===6||a===10))for(let d of[-7,7]){let u=i.createOscillator();u.type="sawtooth",u.frequency.value=c(l+48+(a===10?3:0)),u.detune.value=d;let f=i.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(3200,e),f.frequency.exponentialRampToValueAtTime(600,e+.25);let g=i.createGain();h(g,.035*this.intensity,.3),u.connect(f),f.connect(g),g.connect(n);let x=i.createGain();x.gain.value=.6,g.connect(x),x.connect(this.reverb),u.start(e),u.stop(e+.32)}if(a%2===0){let d=[0,3,7,10,12,7],u=i.createOscillator();u.type="square",u.frequency.value=c(l+36+d[t/2%d.length|0]);let f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;let g=i.createGain();h(g,.03+(this.intensity||0)*.035,.18),u.connect(f),f.connect(g),g.connect(n);let x=i.createGain();x.gain.value=.5,g.connect(x),x.connect(this.reverb),u.start(e),u.stop(e+.2)}}};var _c=[["forward","\uC55E\uC73C\uB85C"],["back","\uB4A4\uB85C"],["left","\uC67C\uCABD"],["right","\uC624\uB978\uCABD"],["jump","\uC810\uD504 (\uACF5\uC911\uC5D0\uC11C \uD55C \uBC88 \uB354)"],["dash","\uB300\uC2DC (\uB300\uC2DC \uC911 \uBB34\uC801)"],["throw","\uC6D0\uBC18 \uB358\uC9C0\uAE30 / \uD68C\uC218"],["blink","\uC21C\uAC04\uC774\uB3D9 (\uC6D0\uBC18 \uC704\uCE58\uB85C)"]],Da={forward:["KeyW"],back:["KeyS"],left:["KeyA"],right:["KeyD"],jump:["Space"],dash:["ShiftLeft"],throw:["Mouse0"],blink:["Mouse2","KeyE"]},Eu={sens:.8,fov:103,fovFx:14,shake:.5,tilt:.5,bob:.4,sfx:.8,music:.4,quality:"high",fps:0,full:1,autoHop:1,difficulty:"easy",botSkill:"max",aimAssist:"strong",keyHints:1,binds:Da},Ua={low:{pr:.75,shadows:!1,shadowSize:1024,aa:!1,particles:800},medium:{pr:1,shadows:!0,shadowSize:1024,aa:!0,particles:1800},high:{pr:1.5,shadows:!0,shadowSize:2048,aa:!0,particles:3e3}},vc={strong:{snap:.17,homing:3.4,cone:.62,range:48,bonus:.55},normal:{snap:.09,homing:1.7,cone:.45,range:36,bonus:.25},off:{snap:0,homing:0,cone:0,range:0,bonus:0}},Tu="redshift4_settings",Au="redshift4_records";function Ru(){try{let s=JSON.parse(localStorage.getItem(Tu)||"{}"),t={...Eu,...s,binds:{...Da,...s.binds||{}}};return Ua[t.quality]||(t.quality="high"),t}catch{return JSON.parse(JSON.stringify(Eu))}}function En(s){try{localStorage.setItem(Tu,JSON.stringify(s))}catch{}}function Cu(){let s={score:0,wave:0,speed:0,combo:0,duelWin:0,duelLose:0,ffaWin:0,ffaBest:0};try{return{...s,...JSON.parse(localStorage.getItem(Au)||"{}")}}catch{return s}}function Pu(s){try{localStorage.setItem(Au,JSON.stringify(s))}catch{}}function vi(s){return s?s.startsWith("Mouse")?["\uC88C\uD074\uB9AD","\uD720\uD074\uB9AD","\uC6B0\uD074\uB9AD","\uB9C8\uC6B0\uC2A44","\uB9C8\uC6B0\uC2A45"][+s.slice(5)]||s:s.replace("Key","").replace("Digit","").replace("ControlLeft","L-CTRL").replace("ControlRight","R-CTRL").replace("ShiftLeft","SHIFT").replace("ShiftRight","R-SHIFT").replace("AltLeft","L-ALT").replace("Space","SPACE").replace("ArrowUp","\u2191").replace("ArrowDown","\u2193").replace("ArrowLeft","\u2190").replace("ArrowRight","\u2192"):"\u2014"}var Xs=1/120,Na={easy:{name:"\uC26C\uC6C0",dmg:.55,windup:1.4,count:.75,projSpeed:.75,enemyHp:.8,speedMul:.8,attackers:2,regen:20,killHeal:6,assist:.09},normal:{name:"\uBCF4\uD1B5",dmg:.85,windup:1.1,count:1,projSpeed:.9,enemyHp:1,speedMul:.92,attackers:3,regen:14,killHeal:4,assist:.06},hard:{name:"\uC5B4\uB824\uC6C0",dmg:1.15,windup:.9,count:1.25,projSpeed:1.1,enemyHp:1.15,speedMul:1.05,attackers:5,regen:9,killHeal:2,assist:.03}},Iu=new S(0,0,22),Jt=new S,si=new S,mi=new S,ms=new S,Mc={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},gs={style:{setProperty(){}},classList:{toggle(){},add(){},remove(){},contains(){return!1}},textContent:"",innerHTML:"",children:[],appendChild(){},querySelectorAll(){return[]}},Fa=[{k:"throw",a:"throw",t:"\uC6D0\uBC18 \uB358\uC9C0\uAE30"},{k:"recall",a:"throw",t:"\uD55C \uBC88 \uB354 \uB20C\uB7EC \uD68C\uC218 (\uB3CC\uC544\uC624\uBA74\uC11C\uB3C4 \uB54C\uB824\uC694)"},{k:"blink",a:"blink",t:"\uC6D0\uBC18\uC774 \uB0A0\uC544\uAC00\uB294 \uB3D9\uC548 \uC21C\uAC04\uC774\uB3D9"},{k:"bank",a:null,t:"\uBCBD\uC5D0 \uD295\uACA8\uC11C \uB9DE\uD788\uAE30 (\uD295\uAE38 \uB54C\uB9C8\uB2E4 +35% \uD53C\uD574)"},{k:"slam",a:"blink",t:"\uC801 \uBC14\uB85C \uC606\uC73C\uB85C \uC21C\uAC04\uC774\uB3D9 \u2192 \uCDA9\uACA9\uD30C"},{k:"flank",a:null,t:"\uBC29\uD328\uBCD1\uC744 \uC606\xB7\uB4A4\uC5D0\uC11C \uB9DE\uD788\uAE30"},{k:"dash",a:"dash",t:"\uB300\uC2DC (\uB300\uC2DC \uC911\uC5D4 \uBB34\uC801)"},{k:"air",a:"jump",t:"\uACF5\uC911\uC5D0\uC11C \uD55C \uBC88 \uB354 \uC810\uD504"}];function Lu(s,t,e){let i=t.x-s.x,n=t.y-s.y,r=t.z-s.z,a=i*i+n*n+r*r;if(a<1e-9)return 0;let o=((e.x-s.x)*i+(e.y-s.y)*n+(e.z-s.z)*r)/a;return o<0?0:o>1?1:o}var wx={d:0,s:0},qs=s=>s<0?0:s>1?1:s;function Ex(s,t,e,i,n){let r=t.x-s.x,a=t.y-s.y,o=t.z-s.z,l=i.x-e.x,c=i.y-e.y,h=i.z-e.z,d=s.x-e.x,u=s.y-e.y,f=s.z-e.z,g=r*r+a*a+o*o,x=l*l+c*c+h*h,p=l*d+c*u+h*f,m=0,_=0;if(g<1e-9&&x<1e-9)m=_=0;else if(g<1e-9)_=qs(p/x);else{let T=r*d+a*u+o*f;if(x<1e-9)m=qs(-T/g);else{let A=r*l+a*c+o*h,P=g*x-A*A;m=P>1e-9?qs((A*p-T*x)/P):0,_=(A*m+p)/x,_<0?(_=0,m=qs(-T/g)):_>1&&(_=1,m=qs((A-T)/g))}}let v=d+r*m-l*_,w=u+a*m-c*_,C=f+o*m-h*_;return n.d=Math.sqrt(v*v+w*w+C*C),n.s=m,n}var Du=new S,Uu=new S;function Nu(s,t,e,i){let n=s.x+(t.x-s.x)*i-e.x,r=s.y+(t.y-s.y)*i-e.y,a=s.z+(t.z-s.z)*i-e.z;return Math.sqrt(n*n+r*r+a*a)}var za=class{constructor(t,e,i){this.canvas=t,this.S=e,this.input=i,this.Q=Ua[e.quality]||Ua.high,this.state="menu",this.mode="arena",this._el={},this._txt={},this.audio=new La;let n=this.renderer=new Jr({canvas:t,antialias:this.Q.aa,powerPreference:"high-performance",stencil:!1});n.setPixelRatio(Math.min(devicePixelRatio,this.Q.pr)),n.setSize(innerWidth,innerHeight),n.toneMapping=tc,n.toneMappingExposure=1,n.autoClear=!1,n.shadowMap.enabled=this.Q.shadows,n.shadowMap.type=Ql;let r=this.scene=new ns;r.background=new wt(15987697),r.fog=new Kr(15987697,70,170),r.add(new ls(16777215,14211284,1.5));let a=this.sun=new cs(16777215,2);if(a.position.set(30,60,20),this.Q.shadows){a.castShadow=!0,a.shadow.mapSize.set(this.Q.shadowSize,this.Q.shadowSize);let o=a.shadow.camera;o.left=-62,o.right=62,o.top=62,o.bottom=-62,o.near=1,o.far=200,a.shadow.bias=-4e-4,a.shadow.normalBias=.04}r.add(a),this.camera=new Ie(e.fov,innerWidth/innerHeight,.05,600),this.camera.rotation.order="YXZ",r.add(this.camera),this.arena=new _a(r,this.Q),this.hand=new Aa,this.parts=new Sa(r,this.Q.particles),this.rings=new wa(r),this.lines=new Ta(r,90),this.player=new ds(this.arena,this.playerEvents()),this.player.easy=!0,this.player.noWall=!0,this.pctx={},this.disc=new fs(this),this.me=new ps(this,{name:"\uB098",color:16734751,isBot:!1,body:this.player,disc:this.disc}),this.fighters=[this.me],this.versus=!1,this.match={limit:0,timeLeft:0,over:!0},this.foes=[],this.orbs=[],this.debris=[],this.respawns=[],this.dnums=[],this.orbGeo=new zi(.3,16,12),this.orbMat=new Ge({color:15212591}),this.orbHalo=new Ge({color:16726600,transparent:!0,opacity:.22,depthWrite:!1}),this.lasers=[];for(let o=0;o<8;o++){let l=new ae;l.setAttribute("position",new ue(new Float32Array(6),3));let c=new Bs(l,new Fi({color:15212591,transparent:!0,opacity:.5}));c.frustumCulled=!1,c.visible=!1,r.add(c),this.lasers.push(c)}this.blinkGhost=new Ut(new as(.45,.6,32),new Ge({color:16734751,transparent:!0,opacity:.8,side:He,depthWrite:!1})),this.blinkGhost.rotation.x=-Math.PI/2,this.blinkGhost.visible=!1,r.add(this.blinkGhost),this.D=Na[e.difficulty]||Na.easy,this.camState={dip:0,dipV:0,tilt:0,fov:e.fov,kick:0,trauma:0,bob:0},this.acc=0,this.last=performance.now(),this.clockT=0,this.fpsAcc=0,this.fpsN=0,this.timeScale=1,this.slowT=0,this.stopT=0,this.mouseDX=0,this.mouseDY=0,this.lastRight=0,this.records={score:0,wave:0,speed:0,combo:0},this.hinted=new Set,this.resetRun(),this.resize(),addEventListener("resize",()=>this.resize())}get hp(){return this.me?this.me.hp:100}set hp(t){this.me&&(this.me.hp=t)}get trail(){return this.disc.trail}el(t){let e=this._el[t];return e===void 0&&(e=document.getElementById(t),this._el[t]=e),e||gs}txt(t,e){this._txt[t]!==e&&(this._txt[t]=e,this.el(t).textContent=e)}css(t,e,i){let n=t+"."+e;this._txt[n]!==i&&(this._txt[n]=i,this.el(t).style[e]=i)}cls(t,e,i){let n=t+"#"+e;this._txt[n]!==i&&(this._txt[n]=i,this.el(t).classList.toggle(e,i))}resize(){this.renderer.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.hand.resize(innerWidth/innerHeight),this.parts.mat.uniforms.scale.value=innerHeight*this.renderer.getPixelRatio()*.5}resetRun(){this.hp=100,this.score=0,this.kills=0,this.wave=0,this.combo=0,this.comboT=0,this.bestCombo=0,this.maxSpeed=0,this.gameTime=0,this.regenT=0,this.waveState="break",this.breakT=3,this.queue=[],this.spawnT=0,this.chain=0,this.chainT=0,this.throwBuf=0,this.dmgFx=0,this.flashFx=0,this.hitT=0,this.bannerT=0,this.popT=0,this.hintT=0,this.dirT=0,this.stats={throws:0,hits:0,banks:0,blinks:0,slams:0},this.tut=new Set}start(t){this.mode=["practice","duel","ffa"].includes(t)?t:"arena",this.versus=this.mode==="duel"||this.mode==="ffa",this.D=Na[this.S.difficulty]||Na.easy,this.clear(),this.resetRun();let e=this.player;e.easy=!0,e.noWall=!0,e.reset(Iu.clone(),0);let i=this.me;i.st={throws:0,hits:0,blinks:0,slams:0,dodges:0,bank:0,ret:0},Object.assign(i,{kills:0,deaths:0,alive:!0,protT:0,invulnT:0,regenT:0,streak:0,lastHitBy:null,respawnT:0}),this.deathInfo=null,this.match={limit:0,timeLeft:0,over:!0},this.disc.caught(),this.disc.catchCd=0,this.trail.reset(),this.state="play",this.acc=0,this.last=performance.now(),this.timeScale=1,this.slowT=this.stopT=0,Object.assign(this.camState,{dip:0,dipV:0,tilt:0,fov:this.S.fov,kick:0,trauma:0}),this.buildDashPips(),this.mode==="practice"?(this.setupPractice(),this.banner("\uC5F0\uC2B5\uC7A5","\uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uB97C \uB530\uB77C \uD574\uBCF4\uC138\uC694 \xB7 \uB9DE\uC544\uB3C4 \uC548 \uC8FD\uC5B4\uC694",2.6)):this.versus?this.setupVersus():this.banner("\uC544\uB808\uB098","\uC6D0\uBC18 \uD558\uB098\uB85C \uB05D\uAE4C\uC9C0 \uBC84\uD2F0\uAE30",2.4),this.cls("deathMsg","show",!1),this.cls("board","hidden",!this.versus),this._boardT=0,this.el("feed").innerHTML="",this.el("dnums").innerHTML="",this.renderTut(),this.txt("hint",""),this.cls("hint","show",!1)}clear(){for(let t of this.foes)t.dispose();for(let t of this.orbs)this.scene.remove(t.m);for(let t of this.debris)this.scene.remove(t.m);for(let t of this.dnums)t.el.remove();this.foes=[],this.orbs=[],this.debris=[],this.respawns=[],this.dnums=[];for(let t of this.lasers)t.visible=!1;if(this.blinkGhost.visible=!1,this.disc&&(this.disc.caught(),this.trail.reset()),this.fighters){for(let t of this.fighters)t!==this.me&&t.dispose();this.fighters=[this.me]}}clearWorld(){this.clear()}buildDashPips(){let t=this.el("dashPips");if(t!==gs){t.innerHTML="";for(let e=0;e<this.player.dashMax;e++)t.appendChild(document.createElement("i"));this._pipsN=-1}}setupPractice(){let t=[["turret",[0,1,0],0],["turret",[-17,0,-6],0],["turret",[17,0,-6],0],["turret",[0,0,-34],0],["shield",[-8,0,-22],0],["chaser",[10,0,10],0]];for(let[e,i]of t)this.spawnDummy(e,new S(...i))}spawnDummy(t,e){let i=this.spawnFoe(t,e);return i.dummy=!0,i.home=e.clone(),i.cd=1e9,i}tickDummy(t,e,i){t.t+=e,t.flashT-=e,t.stun=Math.max(0,t.stun-e),t.spawnT-=e,t.pos.addScaledVector(t.vel,e),t.vel.multiplyScalar(Math.exp(-6*e)),t.pos.x+=(t.home.x-t.pos.x)*Math.min(1,e*2),t.pos.z+=(t.home.z-t.pos.z)*Math.min(1,e*2),t.pos.y=t.home.y;let n=i.player,a=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z)-t.yaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;t.stun<=0&&(t.yaw+=Math.sign(a)*Math.min(Math.abs(a),(t.type==="shield"?2.2:4)*e)),t.updateCenter(),t.animate(e,i,0)}tickPractice(t){for(let e=this.respawns.length-1;e>=0;e--){let i=this.respawns[e];i.t-=t,i.t<=0&&(this.spawnDummy(i.type,i.pos),this.respawns.splice(e,1))}this.hp=100}train(t){this.mode!=="practice"||this.tut.has(t)||(this.tut.add(t),this.renderTut(t),this.audio.checkpoint(this.tut.size===Fa.length),this.tut.size===Fa.length&&this.banner("\uC644\uB8CC!","\uC774\uC81C \uC544\uB808\uB098\uC5D0\uC11C \uC368\uBA39\uC5B4 \uBCF4\uC138\uC694 (ESC \u2192 \uBA54\uB274)",3))}renderTut(t){let e=this.el("tut");if(this.mode!=="practice"){e.innerHTML="",this.cls("tut","hidden",!0);return}this.cls("tut","hidden",!1);let i=n=>n?`<b>${vi(this.S.binds[n]&&this.S.binds[n][0])}</b>`:"";e.innerHTML=`<h4>\uC5F0\uC2B5 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 <span>${this.tut.size}/${Fa.length}</span></h4>`+Fa.map(n=>`<div class="${this.tut.has(n.k)?"done":""}${t===n.k?" pop":""}">${i(n.a)}${n.t}</div>`).join("")}playerEvents(){let t=this,e=()=>ms.copy(t.player.pos).setY(t.player.pos.y+.05);return{jump(i){t.audio.jump(),i==="air"&&(t.train("air"),t.parts.emit(e(),10,{color:[.2,.2,.22],speed:4,life:.3,gravity:2}),t.rings.add(e().clone(),2763310,1.6,.3))},land(i){t.audio.land(i>14),i>6&&(t.camState.dipV-=Math.min(5,i*.18)),i>14&&(t.shake(Math.min(.3,i*.01)),t.rings.add(e().clone(),10132118,Math.min(4,i*.15),.35))},slide(){},dash(i){t.audio.dash(),t.camState.kick=Math.max(t.camState.kick,1),t.shake(.05),t.train("dash"),t.parts.emit(ms.copy(t.player.pos).setY(t.player.pos.y+.9),12,{color:[.15,.15,.17],speed:6,dir:i.clone().negate(),spread:.6,life:.3,gravity:0})},wallStart(){},climb(){},mantle(){t.audio.mantle(),t.camState.dipV-=1.5},hookFire(){},hookMiss(){},hookAttach(){},hookRelease(){},pad(){},boost(){},fell(){t.versus?t.respawn(t.me):t.player.reset(Iu.clone(),0)}}}botEvents(t){let e=this,i=()=>{};return{jump:i,land:i,slide:i,wallStart:i,climb:i,mantle:i,hookFire:i,hookMiss:i,hookAttach:i,hookRelease:i,pad:i,boost:i,dash(){e.spatial(t.body.pos,()=>e.audio.dash())},fell(){e.respawn(t)}}}spatial(t,e){let i=t.distanceTo(this.camera.position);if(!(i>70)){this.audio.vol=Math.pow(Math.max(.06,1-i/70),1.5);try{e()}finally{this.audio.vol=1}}}frame(t){let e=Math.max(0,Math.min(.1,(t-this.last)/1e3));this.last=Math.max(this.last,t),this.fpsAcc+=e,this.fpsN++,this.fpsAcc>.5&&(this.txt("fps",Math.round(this.fpsN/this.fpsAcc)+" FPS"),this.fpsAcc=0,this.fpsN=0);let i=Math.min(.05,e);this.update(i),this.render(i)}update(t){this.clockT+=t;let e=1;this.slowT>0&&(this.slowT-=t,e=.35),this.stopT>0&&(this.stopT-=t,e=.08),this.timeScale+=(e-this.timeScale)*Math.min(1,t*(e<this.timeScale?50:10));let[i,n]=this.input.takeMouse();if(this.mouseDX=i,this.mouseDY=n,this.state==="play"){let r=this.player,a=this.S.sens*.0012;r.yaw-=i*a,r.pitch=Zt.clamp(r.pitch-n*a,-1.55,1.55),this.acc+=t*this.timeScale;let o=0;for(;this.acc>=Xs&&o<12&&(this.tick(Xs),this.acc-=Xs,o++,this.state==="play"););o===12&&(this.acc=0)}else this.state==="dead"&&this.tickDebris(t*.4);this.state!=="play"&&this.input.consumeEdges()}readInput(){let t=this.input,e={fwd:(t.is("forward")?1:0)-(t.is("back")?1:0),right:(t.is("right")?1:0)-(t.is("left")?1:0),jumpPressed:t.pressed("jump"),jumpHeld:t.is("jump"),crouch:!1,dashPressed:t.pressed("dash"),grapplePressed:!1,grappleHeld:!1,autoHop:!!this.S.autoHop,throwPressed:t.pressed("throw"),blinkPressed:t.pressed("blink")};return t.consumeEdges(),e}clampBounds(t){let e=this.arena.half-.45;Math.abs(t.pos.x)>e&&(t.pos.x=Math.sign(t.pos.x)*e,t.vel.x*Math.sign(t.pos.x)>0&&(t.vel.x=0)),Math.abs(t.pos.z)>e&&(t.pos.z=Math.sign(t.pos.z)*e,t.vel.z*Math.sign(t.pos.z)>0&&(t.vel.z=0)),t.pos.y>this.arena.ceiling&&(t.pos.y=this.arena.ceiling,t.vel.y=Math.min(t.vel.y,0))}tick(t){this.gameTime+=t;let e=this.player,i=this.disc,n=this.me,r=this.readInput();n.brain&&(r=n.brain.tick(t)),n.alive&&(e.tick(t,r,this.pctx),this.clampBounds(e),this.maxSpeed=Math.max(this.maxSpeed,e.hSpeed),n.brain||(this.throwBuf-=t,r.throwPressed&&(i.state==="hand"?i.catchCd>0?this.throwBuf=.4:this.throwDisc():i.state==="out"?this.recallFor(n):this.throwBuf=.4),this.throwBuf>0&&i.state==="hand"&&i.catchCd<=0&&(this.throwBuf=0,this.throwDisc()),r.blinkPressed&&this.blink()));for(let o of this.fighters){if(o===n||!o.alive)continue;let l=this.match.over&&this.versus?o.brain.inp:o.brain.tick(t);o.body.tick(t,l,this.pctx),this.clampBounds(o.body)}for(let o of this.fighters)o.disc.tick(t);for(let o of this.fighters)if(o.invulnT-=t,o.protT=Math.max(0,o.protT-t),!!this.versus){if(!o.alive){this.match.over||(o.respawnT-=t,o.respawnT<=0&&this.respawn(o));continue}o.regenT-=t,o.regenT<=0&&o.hp<100&&(o.hp=Math.min(100,o.hp+12*t))}if(this.versus||(this.regenT-=t,this.regenT<=0&&this.hp<100&&(this.hp=Math.min(100,this.hp+this.D.regen*t))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),this.chainT>0&&(this.chainT-=t,this.chainT<=0&&(this.chain=0)),this.tickDebris(t),this.versus){this.tickMatch(t);return}let a=this.ctx();for(let o of this.foes)o.alive&&(o.dummy?this.tickDummy(o,t,a):o.update(t,a));this.foes=this.foes.filter(o=>o.alive),this.tickOrbs(t),this.mode==="arena"?this.tickWaves(t):this.tickPractice(t)}throwDisc(){let t=this.player,e=this.assistCfg(),i=t.lookDir(new S),n=new S().copy(t.eye);n.y-=.15;let r=this.aimAssist(n,i);if(!this.throwFor(this.me,i))return;let a=this.disc;a.homing=e.homing,a.cone=e.cone,a.range=e.range,a.bonus=e.bonus,a.lock=r}throwFor(t,e){let i=t.body,n=t.disc,r=new S().copy(i.eye);return r.y-=.15,r.addScaledVector(e,.3),n.throw(r,e,i.vel)?(t.st.throws++,t===this.me?(this.stats.throws++,this.audio.discThrow(1),this.hand.throwAnim(),this.camState.kick=Math.max(this.camState.kick,.25),this.train("throw")):(t.throwT=.25,this.spatial(r,()=>this.audio.discThrow(.8))),!0):!1}recallFor(t){return t.disc.recall()?(t===this.me&&(this.audio.discBounce(0),this.train("recall")),!0):!1}assistCfg(){return vc[this.S.aimAssist]||vc.strong}assistTargets(){return this.versus?this.fighters.filter(t=>t!==this.me&&t.alive):this.foes.filter(t=>t.alive)}tInfo(t){if(t instanceof ps){let e=t.body;return{c:t.updateCenter(),v:e.vel,air:!e.grounded}}return{c:t.center,v:t.vel,air:!1}}leadPoint(t,e,i){let{c:n,v:r,air:a}=this.tInfo(e),o=this.player,l=t.distanceTo(n)/It.speed;for(let c=0;c<3;c++){i.copy(n).addScaledVector(r,l),a?(i.y+=-.5*K.gravity*l*l,i.y<.8&&(i.y=.8)):i.y=n.y;let h=t.distanceTo(i);ms.subVectors(i,t).divideScalar(h||1),l=h/(It.speed+Math.max(0,o.vel.dot(ms))*It.carry)}return i}aimAssist(t,e,i=!0){let n=this.assistCfg();if(!n.snap)return null;let r=null,a=n.snap,o=new S,l=new S;for(let c of this.assistTargets()){let{c:h}=this.tInfo(c);si.subVectors(h,t);let d=si.length();if(d<1.2||d>80)continue;si.divideScalar(d),this.leadPoint(t,c,l),Jt.subVectors(l,t).normalize();let u=Math.min(Math.acos(Zt.clamp(Jt.dot(e),-1,1)),Math.acos(Zt.clamp(si.dot(e),-1,1)));u>=a||(this.los(t,l)?(a=u,r=c,o.copy(Jt)):this.los(t,h)&&(a=u,r=c,o.copy(si)))}return r&&i&&e.copy(o),r}discHoming(t,e){let i=t.vel.length();if(i<1)return;let n=Jt.copy(t.vel).divideScalar(i),r=f=>f&&f.alive&&!t.hit.has(f)&&!(f.protT>0),a=null;if(r(t.lock)){let{c:f}=this.tInfo(t.lock);si.subVectors(f,t.pos);let g=si.length();g<t.range&&si.dot(n)>g*.15&&(a=t.lock)}if(!a){let f=1e9;for(let g of this.assistTargets()){if(!r(g))continue;let{c:x}=this.tInfo(g);si.subVectors(x,t.pos);let p=si.length();if(p>t.range||p<.4)continue;let m=Math.acos(Zt.clamp(si.dot(n)/p,-1,1));m<t.cone&&m<f&&(f=m,a=g)}a&&(t.lock=a)}if(!a)return;let{c:o,v:l}=this.tInfo(a);if(!this.los(t.pos,o))return;let c=t.pos.distanceTo(o),h=c/i;mi.copy(o).addScaledVector(l,h*.7).sub(t.pos).normalize();let d=Math.acos(Zt.clamp(mi.dot(n),-1,1));if(d<1e-4)return;let u=Math.min(14,t.homing*(1+8/Math.max(1.5,c)));n.lerp(mi,Math.min(1,u*e/d)).normalize(),t.vel.copy(n).multiplyScalar(i)}onDiscBounce(t,e,i){t.owner===this.me?this.audio.discBounce(t.bounces):this.spatial(e,()=>this.audio.discBounce(t.bounces)),t.trail.width=.25+Math.min(4,t.bounces)*.07;let n=new wt(t.color);this.parts.emit(e,10,{color:[[n.r,n.g,n.b],[.15,.15,.17]],speed:7,dir:i,spread:.8,life:.35,gravity:10}),this.rings.add(e.clone().addScaledVector(i,.04),t.color,1.1+t.bounces*.35,.3,i)}onDiscCatch(t){t.state!=="hand"&&(t.caught(),t.owner===this.me&&(this.audio.discCatch(),this.hand.catchAnim()))}discSweep(t,e,i,n){let r=e.distanceTo(i);if(r<1e-6)return null;let a=new S().subVectors(i,e).divideScalar(r);if(this.versus)return this.sweepFighters(t,e,i,a,n),null;let o=[];for(let l of this.foes){if(!l.alive||t.hit.has(l)||l.spawnT>.25)continue;let c=Lu(e,i,l.center);Nu(e,i,l.center,c)<l.hitRadius+It.radius+(t.bonus||0)&&o.push({f:l,t:c})}o.sort((l,c)=>l.t-c.t);for(let{f:l,t:c}of o){t.hit.add(l);let h=new S().lerpVectors(e,i,c);if(l.shieldBlocks(a)){if(this.audio.shieldClang(),this.parts.emit(h,12,{color:[[1,1,1],[.9,.15,.2]],speed:8,life:.3,gravity:6}),this.hint("\uBC29\uD328\uBCD1\uC740 \uC815\uBA74\uC744 \uB9C9\uC544\uC694 \u2014 \uC606\xB7\uB4A4\uB97C \uB178\uB9AC\uAC70\uB098 \uB4A4\uB85C \uC21C\uAC04\uC774\uB3D9!","shield"),this.popupWorld(h,"\uB9C9\uD798"),n==="out"){let u=l.facing(mi),f=t.vel.dot(u);return f<0&&t.vel.addScaledVector(u,-2*f),t.bounces++,this.onDiscBounce(t,h.clone(),u.clone()),h.addScaledVector(a,-.05)}continue}l.type==="shield"&&this.train("flank");let d=n==="out"?It.dmg*(1+.35*t.bounces)*(.75+.25*t.speedMul()):It.returnDmg*(1+.2*t.bounces);this.hitFoe(l,d,a,n==="out"?t.bounces>0?"bank":"direct":"return",t.bounces)}for(let l=this.orbs.length-1;l>=0;l--){let c=this.orbs[l];Nu(e,i,c.pos,Lu(e,i,c.pos))<It.radius+.55&&this.killOrb(c,!0)}return null}hitFoe(t,e,i,n,r=0){e=Math.round(e);let a=new S().copy(t.center).addScaledVector(i,-1),o=t.damage(e,a);this.stats.hits++,t.windup=0,t.cd=Math.max(t.cd,.8),t.stun=Math.max(t.stun,n==="slam"?.6:.15),this.audio.discHit(r+1),this.parts.emit(t.center,14,{color:[[.1,.1,.12],[.9,.15,.2]],speed:8,dir:i,spread:.9,life:.4}),this.dmgNumber(t.center,e,n==="bank"||n==="slam"),this.hitmarker(o),this.stopT=Math.max(this.stopT,o?.05:.02),n==="bank"&&this.train("bank"),o?this.onKill(t,n,i,r):this.addScore(10)}blink(){return this.blinkFor(this.me)}blinkFor(t){let e=t.disc,i=t.body,n=t===this.me;if(e.state==="hand")return n&&(this.audio.empty(),this.hint(`\uC21C\uAC04\uC774\uB3D9\uC740 \uC6D0\uBC18\uC774 \uB0A0\uC544\uAC00\uB294 \uB3D9\uC548\uB9CC \u2014 \uBA3C\uC800 ${vi(this.S.binds.throw[0])}\uB85C \uB358\uC9C0\uC138\uC694`,"blinkEmpty")),!1;let r=e.blinkSpot(this.arena.col);if(!r)return n&&this.audio.empty(),!1;let a=this.arena.half-1;r.x=Zt.clamp(r.x,-a,a),r.z=Zt.clamp(r.z,-a,a),r.y=Math.min(r.y,this.arena.ceiling-2);let o=i.pos.clone();i.pos.copy(r),i.prevPos.copy(r);let l=i.hSpeedNow(),c=Math.min(42,Math.max(l,16)+3),h=i.flatFwd(new S);i.vel.set(h.x*c,Math.max(i.vel.y,4),h.z*c),i.grounded=!1,i.airJumps=K.airJumps,i.dashCharges=Math.min(i.dashMax,i.dashCharges+1),t.invulnT=this.versus?0:.3,t.st.blinks++;let d=new S(r.x,r.y+.9,r.z),u=0;if(this.versus){for(let x of this.fighters)if(!(x===t||!x.alive)&&x.updateCenter().distanceTo(d)<It.blinkRadius+K.radius){let p=new S().subVectors(x.body.pos,r).setY(0);p.lengthSq()<1e-4&&p.set(1,0,0),p.normalize(),this.damageFighter(x,It.blinkSlam*(1+.15*e.bounces),t,"slam",p,e.bounces)&&(u++,t.st.slams++)}}else{for(let x of this.foes)if(x.alive&&x.center.distanceTo(d)<It.blinkRadius+x.cfg.r){let p=new S().subVectors(x.pos,r).setY(0);p.lengthSq()<1e-4&&p.set(1,0,0),p.normalize(),u++,this.hitFoe(x,It.blinkSlam*(1+.15*e.bounces),p,"slam",e.bounces),x.alive&&(x.vel.addScaledVector(p,9),x.vel.y=5)}for(let x=this.orbs.length-1;x>=0;x--)this.orbs[x].pos.distanceTo(d)<It.blinkRadius&&this.killOrb(this.orbs[x],!0)}let f=new wt(t.color),g=Math.min(24,Math.ceil(o.distanceTo(r)/1.5));for(let x=0;x<=g;x++){let p=mi.lerpVectors(o,r,x/g);p.y+=1,this.parts.emit(p,2,{color:[[f.r,f.g,f.b],[.12,.12,.14]],speed:1.5,life:.45,gravity:0,size:.14})}return this.rings.add(new S(r.x,r.y+.06,r.z),u?1447450:t.color,u?It.blinkRadius*1.3:2.2,.45),n?(this.audio.blink(),this.hand.blinkAnim(),this.camState.kick=Math.max(this.camState.kick,1.3),this.flashFx=Math.max(this.flashFx,.6),u&&(this.audio.slam(),this.shake(.25),this.stats.slams++,this.train("slam"),u>=2&&(this.slowT=Math.max(this.slowT,.25))),this.chain++,this.chainT=2.5,this.chain>=2&&this.popup(`\uC21C\uAC04\uC774\uB3D9 \xD7${this.chain}`),this.stats.blinks++,this.train("blink")):(this.spatial(r,()=>{this.audio.blink(),u&&this.audio.slam()}),u&&r.distanceTo(this.player.pos)<8&&this.shake(.15)),this.onDiscCatch(e),!0}los(t,e){let i=e.x-t.x,n=e.y-t.y,r=e.z-t.z,a=Math.hypot(i,n,r);if(a<.001)return!0;let o=this.arena.col.raycast(t.x,t.y,t.z,i/a,n/a,r/a,a,Mc);return!o||o.t>a-.3}ctx(){this._ctx||(this._ctx={player:this.player,foes:null,camera:this.camera,windMul:1,speedMul:1,los:(e,i)=>this.los(e,i),canAttack:e=>{let i=0;for(let n of this.foes)n!==e&&n.alive&&n.windup>0&&i++;return i<this.D.attackers},fireOrb:e=>this.fireOrb(e),contact:e=>this.foeContact(e),shove:e=>this.foeShove(e)});let t=this._ctx;return t.foes=this.foes,t.windMul=this.D.windup,t.speedMul=this.D.speedMul,t}fireOrb(t){let e=this.player,i=new S().copy(t.center).addScaledVector(t.facing(Jt),.8),n=si.copy(e.pos).setY(e.pos.y+1),r=i.distanceTo(n),a=new S().subVectors(n,i).normalize(),o=new Ut(this.orbGeo,this.orbMat),l=new Ut(this.orbGeo,this.orbHalo);l.scale.setScalar(1.9),o.add(l),o.position.copy(i),this.scene.add(o),this.orbs.push({m:o,halo:l,pos:i,vel:a.multiplyScalar(15*this.D.projSpeed),life:6,dmg:12*this.D.dmg,dodged:!1,t:0}),this.audio.orbFire(r),this.parts.emit(i,6,{color:[.9,.15,.2],speed:3,life:.25,gravity:0})}tickOrbs(t){let e=this.player,i=this.arena.col;for(let n=this.orbs.length-1;n>=0;n--){let r=this.orbs[n];r.life-=t,r.t+=t;let a=r.vel.length(),o=a*t,l=i.raycast(r.pos.x,r.pos.y,r.pos.z,r.vel.x/a,r.vel.y/a,r.vel.z/a,o+.3,Mc);if(l&&l.t<o+.3){r.pos.set(l.x,l.y,l.z),this.killOrb(r,!1);continue}r.pos.addScaledVector(r.vel,t),r.m.position.copy(r.pos);let c=e.pos.y+.4,h=e.pos.y+e.h-.4,d=Zt.clamp(r.pos.y,c,h);if(Math.hypot(r.pos.x-e.pos.x,r.pos.y-d,r.pos.z-e.pos.z)<.3+K.radius)if(this.me.invuln)r.dodged||(r.dodged=!0,this.addScore(25),this.popup("\uD68C\uD53C!"));else{this.hurt(r.dmg,r.pos),this.killOrb(r,!1);continue}r.life<=0&&this.killOrb(r,!1)}}killOrb(t,e){let i=this.orbs.indexOf(t);if(!(i<0)&&(this.orbs.splice(i,1),this.scene.remove(t.m),this.parts.emit(t.pos,e?16:8,{color:[[.9,.15,.2],[1,.6,.6]],speed:e?7:4,life:.35,gravity:4}),e)){let n=this.addScore(15);this.feed("\uAD6C\uCCB4 \uACA9\uCD94",n),this.rings.add(t.pos.clone(),15212591,1.2,.25,null),this.audio.discBounce(2)}}foeContact(t){let e=this.player;if(this.me.invuln||t.cd>0)return;t.cd=1.2,this.hurt(14*this.D.dmg,t.center);let i=Jt.subVectors(e.pos,t.pos).setY(0);i.lengthSq()<1e-4&&i.set(0,0,1),i.normalize(),e.vel.addScaledVector(i,8),e.vel.y=Math.max(e.vel.y,5),e.grounded=!1,t.vel.addScaledVector(i,-10),t.stun=.5}foeShove(t){let e=this.player,i=t.facing(new S),n=Jt.subVectors(e.pos,t.pos),r=n.y;n.y=0;let a=n.length();this.audio.shieldClang(),this.rings.add(new S().copy(t.center).addScaledVector(i,1.1),15212591,2.4,.3,i),a<3.4&&Math.abs(r)<2&&n.dot(i)/(a||1)>.35&&!this.me.invuln&&(this.hurt(16*this.D.dmg,t.center),e.vel.addScaledVector(i,14),e.vel.y=Math.max(e.vel.y,6),e.grounded=!1)}hurt(t,e){this.dmgFx=1,this.shake(.22),this.audio.hurt(),this.regenT=3,e&&(mi.copy(e).applyMatrix4(this.camera.matrixWorldInverse),this.dirAng=Math.atan2(mi.x,-mi.z),this.dirT=1),this.mode!=="practice"&&(this.hp-=t,this.combo=0,this.comboT=0,this.hp<=0&&this.die())}onKill(t,e,i,n){let r=this.player;this.kills++,this.combo++,this.comboT=3.2,this.bestCombo=Math.max(this.bestCombo,this.combo);let a=t.cfg.score,o=[];e==="bank"&&(a+=50*n,o.push(n>=2?`${n}\uCFE0\uC158 \uBC45\uD06C\uC0F7`:"\uBC45\uD06C\uC0F7"),this.stats.banks++),e==="return"&&o.push("\uD68C\uC218 \uD0C0\uACA9"),e==="slam"&&(a+=80,o.push("\uC21C\uAC04\uC774\uB3D9 \uCDA9\uACA9")),!r.grounded&&r.airTime>.3&&(a+=30,o.push("\uACF5\uC911")),e!=="slam"&&this.disc.out&&(this.disc.kills=(this.disc.kills||0)+1,this.disc.kills>=2&&(a+=60*(this.disc.kills-1),o.push(`${this.disc.kills}\uC5F0\uC18D \uAD00\uD1B5`)));let l=this.addScore(a);this.feed(`${t.cfg.name} \uCC98\uCE58${o.length?" \xB7 "+o.join(" \xB7 "):""}`,l),o.length&&this.popup(o[o.length-1]),this.audio.kill(Math.min(this.combo,8));let c=new S(i.x,Math.max(0,i.y),i.z).normalize();this.debris.push(...t.shatter(c)),this.parts.emit(t.center,26,{color:[[.08,.08,.1],[.9,.15,.2],[1,1,1]],speed:10,life:.6}),this.rings.add(new S(t.pos.x,t.pos.y+.06,t.pos.z),15212591,3,.4),this.shake(.12),r.dashCharges=Math.min(r.dashMax,r.dashCharges+1),this.mode==="arena"&&(this.hp=Math.min(100,this.hp+this.D.killHeal)),t.dummy&&this.respawns.push({type:t.type,pos:t.home.clone(),t:2})}buildWave(t){let e=this.D,i;if(t===1)i=["turret","chaser","turret"];else if(t===2)i=["turret","chaser","turret","chaser","turret"];else if(t===3)i=["shield","turret","chaser","turret","chaser"];else{i=[];let r=Math.round(4+t*1.2);for(let a=0;a<r;a++){let o=Math.random();i.push(o<.4?"turret":o<.72?"chaser":"shield")}}let n=Math.round(i.length*(e.count-1));if(n<0)i.splice(i.length+n,-n);else for(let r=0;r<n;r++)i.push(["turret","chaser",t>=3?"shield":"turret"][r%3]);return i.length||i.push("turret"),i}spawnFoe(t,e){let i=this.player,n=e;if(!n){let a=t==="turret"&&Math.random()<.5,o=a?this.arena.spawnHigh:this.arena.spawnGround,l=o.filter(c=>c.distanceTo(i.pos)>=18);n=(l.length?l:o)[Math.random()*(l.length||o.length)|0].clone(),a||(n.x+=(Math.random()-.5)*3,n.z+=(Math.random()-.5)*3)}let r=new ba(this,t,n);return this.foes.push(r),this.rings.add(new S(n.x,n.y+.06,n.z),15212591,2.4,.5),this.parts.emit(Jt.set(n.x,n.y+1,n.z),10,{color:[.1,.1,.12],speed:4,life:.4,gravity:-2}),r}tickWaves(t){if(this.waveState==="break"){if(this.breakT-=t,this.breakT<=0){this.wave++,this.queue=this.buildWave(this.wave),this.waveState="fight",this.spawnT=0;let i=this.wave===1?"\uD3EC\uD0D1\uC758 \uBE68\uAC04 \uAD6C\uCCB4\uB97C \uD53C\uD558\uBA74\uC11C \uC6D0\uBC18\uC744 \uB358\uC838\uC694":this.wave===3?"\uBC29\uD328\uBCD1 \uB4F1\uC7A5 \u2014 \uC815\uBA74\uC740 \uB9C9\uD600\uC694. \uC606\xB7\uB4A4\uB85C \uB3CC\uAC70\uB098 \uB4A4\uB85C \uC21C\uAC04\uC774\uB3D9!":`\uC801 ${this.queue.length}`;this.banner(`WAVE ${this.wave}`,i,2.4),this.audio.wave()}return}this.spawnT-=t;let e=Math.min(14,5+this.wave);if(this.queue.length&&this.spawnT<=0&&this.foes.length<e&&(this.spawnFoe(this.queue.shift()),this.spawnT=.7),!this.queue.length&&this.foes.length===0){this.waveState="break",this.breakT=4;let i=100*this.wave,n=this.addScore(i);this.feed(`WAVE ${this.wave} \uD074\uB9AC\uC5B4`,n),this.hp=Math.min(100,this.hp+35),this.banner("\uD074\uB9AC\uC5B4!",`+${n} \xB7 \uCCB4\uB825 \uD68C\uBCF5`,2),this.audio.checkpoint(!0)}}die(){this.hp=0,this.state="dead",this.input.unlock(),this.slowT=0,this.stopT=0;let t=this.records,e=this.score>(t.score||0);t.score=Math.max(t.score||0,this.score),t.wave=Math.max(t.wave||0,this.wave),t.speed=Math.max(t.speed||0,this.maxSpeed),t.combo=Math.max(t.combo||0,this.bestCombo),this.saveRecords&&this.saveRecords();let i=[["\uC810\uC218",this.score.toLocaleString()+(e?"  \u2605 \uC2E0\uAE30\uB85D":"")],["\uB3C4\uB2EC \uC6E8\uC774\uBE0C",this.wave],["\uCC98\uCE58",this.kills],["\uCD5C\uACE0 \uCF64\uBCF4",this.bestCombo],["\uBC45\uD06C\uC0F7 \uCC98\uCE58",this.stats.banks],["\uC21C\uAC04\uC774\uB3D9 / \uCDA9\uACA9\uD30C",`${this.stats.blinks} / ${this.stats.slams}`],["\uCD5C\uACE0 \uC18D\uB3C4",Math.round(this.maxSpeed*3.6)+" KM/H"],["\uCD5C\uACE0 \uAE30\uB85D",`${t.score.toLocaleString()} \xB7 WAVE ${t.wave}`]];setTimeout(()=>this.onEnd&&this.onEnd("GAME OVER",i),900)}tickDebris(t){for(let e=this.debris.length-1;e>=0;e--){let i=this.debris[e];i.life-=t,i.v.y-=25*t,i.m.position.addScaledVector(i.v,t),i.m.rotation.x+=i.av.x*t,i.m.rotation.y+=i.av.y*t,i.m.rotation.z+=i.av.z*t,i.m.position.y<.06&&(i.m.position.y=.06,i.v.y*=-.35,i.v.x*=.7,i.v.z*=.7,i.av.multiplyScalar(.7)),i.life<.5&&i.m.scale.multiplyScalar(Math.max(0,1-t*6)),i.life<=0&&(this.scene.remove(i.m),this.debris.splice(e,1))}}autopilot(t){this.me.brain=t?new Ws(this,this.me,t):null}setupVersus(){let t=this.mode==="duel",e=Hi[this.S.botSkill]?this.S.botSkill:"max";this.botSkill=e;let i=wu.slice().sort(()=>Math.random()-.5);for(let r=0;r<(t?1:5);r++){let a=i[r],o=new ps(this,{name:a.name,color:a.color,isBot:!0});o.brain=new Ws(this,o,e),this.fighters.push(o)}for(let r of this.fighters)r.alive=!1;for(let r of this.fighters)this.respawn(r,!0);this.match={limit:t?5:15,timeLeft:t?0:240,over:!1};let n=this.fighters[1];t?this.banner("1 V 1",`${n.name} \xB7 \uBD07 \uC2E4\uB825 ${Hi[e].name} \xB7 5\uD0AC \uBA3C\uC800`,2.6):this.banner("FFA",`\uBD07 5\uBA85 \xB7 ${Hi[e].name} \xB7 15\uD0AC \uBA3C\uC800 (4\uBD84)`,2.6),this._boardHtml="";try{this.renderer.compile(this.scene,this.camera)}catch{}}spawnPoints(){if(!this._spawns){let t=this.arena,e=[...t.spawnGround,...t.spawnHigh];for(let[i,n]of[[-24,8],[24,-8],[8,24],[-8,-24],[0,15],[0,-15],[15,0],[-15,0]])e.push(new S(i,0,n));this._spawns=e.filter(i=>t.col.capsuleFree(i.x,i.y+.05,i.z,.42,1.8))}return this._spawns}pickSpawn(t){let e=null,i=-1;for(let n of this.spawnPoints()){let r=200;for(let o of this.fighters)o!==t&&o.alive&&(r=Math.min(r,o.body.pos.distanceTo(n)));let a=r+Math.random()*8;a>i&&(i=a,e=n)}return e.clone()}respawn(t,e=!1){let i=this.pickSpawn(t);t.body.reset(i,Math.atan2(i.x,i.z)),t.hp=100,t.alive=!0,t.protT=e?.6:1.5,t.invulnT=0,t.regenT=0,t.respawnT=0,t.disc.state!=="hand"&&t.disc.caught(),t.disc.catchCd=0,t.disc.trail.reset(),t.brain&&t.brain.reset(),t===this.me&&(this.deathInfo=null,this.cls("deathMsg","show",!1),this.camState.fov=this.S.fov,this.throwBuf=0),e||this.rings.add(new S(i.x,i.y+.06,i.z),t.color,2.6,.5)}sweepFighters(t,e,i,n,r){for(let a of this.fighters){if(a===t.owner||!a.alive||t.hit.has(a))continue;let o=a.body;if(Du.set(o.pos.x,o.pos.y+.4,o.pos.z),Uu.set(o.pos.x,o.pos.y+Math.max(.6,o.h-.4),o.pos.z),Ex(e,i,Du,Uu,wx).d>=K.radius+It.radius+(t.bonus||0))continue;if(t.hit.add(a),a.invuln){a.st.dodges++,a===this.me?this.popup("\uD68C\uD53C!"):t.owner===this.me&&this.popupWorld(a.updateCenter(),"\uD68C\uD53C");continue}let l=r==="out"?It.dmg*(1+.35*t.bounces)*(.75+.25*t.speedMul()):It.returnDmg*(1+.2*t.bounces);this.damageFighter(a,l,t.owner,r==="out"?t.bounces>0?"bank":"direct":"return",n,t.bounces)}}damageFighter(t,e,i,n,r,a=0){if(!t.alive||t.invuln)return null;e=Math.round(e),t.hp-=e,t.regenT=4,t.lastHitBy=i,t.lastHitT=this.gameTime;let o=t.body,l=n==="slam"?9:5;o.vel.x+=r.x*l,o.vel.z+=r.z*l,o.vel.y=Math.max(o.vel.y,n==="slam"?5:2.5),o.grounded=!1;let c=t.updateCenter().clone(),h=new wt(t.color);this.parts.emit(c,14,{color:[[.1,.1,.12],[h.r,h.g,h.b]],speed:8,dir:r,spread:.9,life:.4});let d=t.hp<=0;return i&&(i.st.hits++,n==="bank"&&i.st.bank++,n==="return"&&i.st.ret++),t===this.me&&(this.dmgFx=1,this.shake(.22),this.audio.hurt(),i&&this.hurtDir(i.updateCenter())),i===this.me?(this.audio.discHit(a+1),this.stats.hits++,this.dmgNumber(c,e,n==="bank"||n==="slam"),this.hitmarker(d),this.stopT=Math.max(this.stopT,d?.05:.02)):t!==this.me&&this.spatial(c,()=>this.audio.discHit(1)),d&&this.killFighter(t,i,n,a,r),d?"kill":"hit"}hurtDir(t){mi.copy(t).applyMatrix4(this.camera.matrixWorldInverse),this.dirAng=Math.atan2(mi.x,-mi.z),this.dirT=1}killFighter(t,e,i,n,r){t.alive=!1,t.hp=0,t.deaths++,t.streak=0,t.respawnT=this.mode==="duel"?2.2:2.8,t.disc.state!=="hand"&&t.disc.caught(),t.disc.trail.reset();let a=new S(r.x,Math.max(.2,r.y),r.z).normalize();t.isBot&&this.debris.push(...t.shatter(a));let o=t.updateCenter().clone(),l=new wt(t.color);this.parts.emit(o,28,{color:[[.08,.08,.1],[l.r,l.g,l.b],[1,1,1]],speed:10,life:.6}),this.rings.add(new S(t.body.pos.x,t.body.pos.y+.06,t.body.pos.z),t.color,3,.45);let c=i==="bank"?n>=2?`${n}\uCFE0\uC158 \uBC45\uD06C\uC0F7`:"\uBC45\uD06C\uC0F7":i==="return"?"\uD68C\uC218 \uD0C0\uACA9":i==="slam"?"\uC21C\uAC04\uC774\uB3D9 \uCDA9\uACA9":"";e&&!e.body.grounded&&e.body.airTime>.3&&(c=c?c+" \xB7 \uACF5\uC911":"\uACF5\uC911");let h=!this.match.over;e&&e!==t&&h&&(e.kills++,e.streak++,e.hp=Math.min(100,e.hp+25),e.body.dashCharges=Math.min(e.body.dashMax,e.body.dashCharges+1)),this.feedKill(e,t,c),e===this.me?(this.popup(e.streak>=3?`${e.streak}\uC5F0\uC18D \uCC98\uCE58!`:c||"\uCC98\uCE58!"),this.audio.kill(Math.min(e.streak,8)),this.shake(.12),this.kills++,i==="bank"&&this.stats.banks++):this.spatial(o,()=>this.audio.kill(1)),t===this.me&&(this.deathInfo={by:e,pos:this.player.pos.clone(),t:0},this.throwBuf=0),h&&e&&e.kills>=this.match.limit&&this.endMatch()}feedKill(t,e,i){let n=this.el("feed");if(n===gs)return;let r=document.createElement("div");r.className="kf";let a=l=>{let c=document.createElement("span");return c.textContent=l?l.name:"?",l&&(c.style.color=l.css),c},o=document.createElement("em");if(o.textContent="\u2192",r.append(a(t),o,a(e)),i){let l=document.createElement("small");l.textContent=i,r.append(l)}for((t===this.me||e===this.me)&&r.classList.add("mine"),n.prepend(r);n.children.length>6;)n.lastChild.remove();setTimeout(()=>r.classList.add("out"),3800),setTimeout(()=>r.remove(),4300)}ranking(){let t=this.me;return[...this.fighters].sort((e,i)=>i.kills-e.kills||e.deaths-i.deaths||(e===t?-1:i===t?1:0))}tickMatch(t){let e=this.match;this.deathInfo&&(this.deathInfo.t+=t),!e.over&&e.timeLeft>0&&(e.timeLeft-=t,e.timeLeft<=0&&(e.timeLeft=0,this.endMatch()))}endMatch(){let t=this.match;if(t.over)return;t.over=!0,this.slowT=Math.max(this.slowT,1);let e=this.me,i=this.ranking(),n=i.indexOf(e)+1,r=this.records,a,o;if(this.mode==="duel"){let c=this.fighters[1];a=e.kills>c.kills?"\uC2B9\uB9AC!":e.kills===c.kills?"\uBB34\uC2B9\uBD80":"\uD328\uBC30",o=`${e.kills} : ${c.kills}`,e.kills>c.kills?r.duelWin=(r.duelWin||0)+1:e.kills<c.kills&&(r.duelLose=(r.duelLose||0)+1)}else a=n===1?"1\uC704!":`${n}\uC704`,o=`${e.kills}\uD0AC \xB7 ${e.deaths}\uB370\uC2A4`,n===1&&(r.ffaWin=(r.ffaWin||0)+1),r.ffaBest=Math.min(r.ffaBest||99,n);r.speed=Math.max(r.speed||0,this.maxSpeed),this.saveRecords&&this.saveRecords(),this.banner(a,o,1.8),n===1?this.audio.checkpoint(!0):this.audio.wave();let l=i.map((c,h)=>[`${h+1}. ${c.name}`,`${c.kills} \uD0AC \xB7 ${c.deaths} \uB370\uC2A4`]);l.push(["\uBD07 \uC2E4\uB825",Hi[this.botSkill].name],["\uCD5C\uACE0 \uC18D\uB3C4",Math.round(this.maxSpeed*3.6)+" KM/H"]),this.result={title:a,stats:l,rank:n},setTimeout(()=>{this.state!=="play"||this.match!==t||(this.state="dead",this.input.unlock(),this.onEnd&&this.onEnd(a,l))},1700)}addScore(t){let e=1+Math.min(4,Math.max(0,this.combo-1)*.25),i=Math.round(t*e);return this.score+=i,i}shake(t){this.camState.trauma=Math.min(1,this.camState.trauma+t)}banner(t,e,i=2.2){this.el("bannerBig").textContent=t,this.el("bannerSmall").textContent=e||"";let n=this.el("banner");n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),this.bannerT=i}feed(t,e){let i=this.el("feed");if(i===gs)return;let n=document.createElement("div");for(n.innerHTML=`<span></span><b>+${e}</b>`,n.firstChild.textContent=t,i.prepend(n);i.children.length>5;)i.lastChild.remove();setTimeout(()=>n.classList.add("out"),2200),setTimeout(()=>n.remove(),2700)}popup(t){let e=this.el("popup");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}popupWorld(t,e){this.dmgNumber(t,e,!1,!0)}hitmarker(t){let e=this.el("hit");e.classList.toggle("kill",!!t),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}hint(t,e,i=2800){if(e){if(this.hinted.has(e))return;this.hinted.add(e)}this.txt("hint",t),this.cls("hint","show",!0),this.hintT=i/1e3}dmgNumber(t,e,i,n){let r=this.el("dnums");if(r===gs)return;let a=document.createElement("div");a.className=n?"dn plain":i?"dn big":"dn",a.textContent=e,r.appendChild(a),this.dnums.push({el:a,pos:t.clone(),t:0,vx:(Math.random()-.5)*30}),this.dnums.length>24&&this.dnums.shift().el.remove()}render(t){let e=this.player,i=this.S,n=this.camState,r=this.state==="play"||this.state==="paused"||this.state==="dead";if(this.versus&&!this.me.alive&&this.deathInfo&&this.state==="play"){let d=this.deathInfo,u=d.by,f=u&&u.alive?u.body.pos:d.pos,g=Math.min(1,d.t);Jt.subVectors(d.pos,f).setY(0),Jt.lengthSq()<.001&&Jt.set(0,0,1),Jt.normalize(),ms.set(d.pos.x,d.pos.y+3+g*3,d.pos.z).addScaledVector(Jt,3+g*4),this.camera.position.lerp(ms,Math.min(1,t*5)),this.camera.lookAt(f.x,f.y+1,f.z),this.camera.fov=62,this.camera.updateProjectionMatrix()}else if(r){let d=this.state==="play"?Zt.clamp(this.acc/Xs,0,1):1,u=e.prevPos.x+(e.pos.x-e.prevPos.x)*d,f=e.prevPos.y+(e.pos.y-e.prevPos.y)*d+e.prevEyeH+(e.eyeH-e.prevEyeH)*d,g=e.prevPos.z+(e.pos.z-e.prevPos.z)*d;n.dipV+=(-n.dip*120-n.dipV*14)*t,n.dip+=n.dipV*t,n.dip=Zt.clamp(n.dip,-.45,.2),e.grounded&&e.hSpeed>1&&(n.bob+=t*(4+e.hSpeed*.5));let x=(e.grounded?Math.abs(Math.sin(n.bob))*.035*Math.min(1,e.hSpeed/11):0)*i.bob,p=this.state==="dead"?-.9:0;this.camera.position.set(u,f+n.dip-x+p,g);let m=-this.lastRight*.02*i.tilt*Math.min(1,e.hSpeed/12);n.tilt+=(m-n.tilt)*Math.min(1,t*8),n.trauma=Math.max(0,n.trauma-t*1.8);let _=n.trauma*n.trauma*i.shake,v=this.clockT*42;this.camera.rotation.set(e.pitch+(Math.sin(v*1.1)*.6+Math.sin(v*2.3)*.4)*.03*_,e.yaw+(Math.sin(v*.9+1)*.6+Math.sin(v*1.9)*.4)*.03*_,n.tilt+Math.sin(v*1.3+2)*.04*_+(this.state==="dead"?.3:0)),n.kick=Math.max(0,n.kick-t*2.8);let w=Zt.clamp((e.hSpeed-11)/30,0,1),C=i.fov+i.fovFx*w+n.kick*6;n.fov+=(C-n.fov)*Math.min(1,t*7);let T=Zt.degToRad(Math.min(150,n.fov));this.camera.fov=Zt.radToDeg(2*Math.atan(Math.tan(T/2)/this.camera.aspect)),this.camera.updateProjectionMatrix()}else{let d=this.clockT*.06;this.camera.position.set(Math.sin(d)*58,24+Math.sin(this.clockT*.2)*3,Math.cos(d)*58),this.camera.lookAt(0,2,0),this.camera.fov=62,this.camera.updateProjectionMatrix()}this.lastRight=(this.input.is("right")?1:0)-(this.input.is("left")?1:0),this.camera.updateMatrixWorld();let o=this.state==="paused"?0:this.state==="play"?t*this.timeScale:t*.4,l=this.state==="play"?Zt.clamp(this.acc/Xs,0,1):1;for(let d of this.fighters)d.disc.render(o),d.disc.trail.update(d.disc.pos,this.camera.position,d.disc.out&&this.state!=="menu"),d.isBot&&d.renderModel(t,l,this.clockT);this.parts.update(o),this.rings.update(o),this.arena.update(this.clockT,o);for(let d of this.orbs)d.halo.scale.setScalar(1.7+Math.sin(d.t*18)*.25);this.updateLasers(),this.updateBlinkGhost(),this.lines.update(this.camera.position,e.vel,this.state==="play"&&this.me.alive?Zt.clamp((e.speed-17)/20,0,1):0),this.hand.update(this.state==="play"?t*Math.max(this.timeScale,.4):t,{mx:this.mouseDX||0,my:this.mouseDY||0,hs:e.hSpeed,vy:e.vel.y,grounded:e.grounded,discOut:this.disc.out});let c=this.state!=="play"?.2:this.versus?.65:this.mode==="arena"?Math.min(1,.25+this.foes.length*.07+Math.min(this.combo,10)*.04):.2;this.audio.update(this.state==="play"?e.speed:0,!1,t,c),r&&this.updateHud(t);let h=this.renderer;h.clear(),h.render(this.scene,this.camera),(this.state==="play"||this.state==="paused")&&this.me.alive&&(h.clearDepth(),h.render(this.hand.scene,this.hand.camera))}updateLasers(){let t=0,e=this.player;if(this.state==="play"||this.state==="paused")for(let i of this.foes){if(t>=this.lasers.length)break;if(!i.alive||i.type!=="turret"||i.windup<=0||i.dummy)continue;let n=this.lasers[t++],r=n.geometry.attributes.position;r.setXYZ(0,i.center.x,i.center.y,i.center.z),r.setXYZ(1,e.pos.x,e.pos.y+1,e.pos.z),r.needsUpdate=!0;let a=1-i.windup/(.7*this.D.windup);n.material.opacity=.15+a*.6,n.visible=!0}for(;t<this.lasers.length;t++)this.lasers[t].visible=!1}updateBlinkGhost(){let t=this.disc,e=this.blinkGhost;if(!(this.state==="play"||this.state==="paused")||!t.out){e.visible=!1;return}let i=this.arena.col.raycast(t.pos.x,t.pos.y,t.pos.z,0,-1,0,40,Mc),n=i?i.y:0;e.position.set(t.pos.x,Math.max(0,n)+.05,t.pos.z),e.scale.setScalar(1+Math.sin(this.clockT*12)*.08),e.visible=!0}updateHud(t){let e=this.player,i=this.disc,n=innerWidth,r=innerHeight,a=Math.max(0,Math.round(this.hp));if(this.css("hpFill","width",a+"%"),this.txt("hpNum",String(a)),this.cls("hpBar","low",a<35),this.versus)this.updateVersusHud(t);else{this.txt("scoreTxt",this.score.toLocaleString());let f=1+Math.min(4,Math.max(0,this.combo-1)*.25);this.txt("comboTxt",this.combo>=2?`${this.combo} \uCF64\uBCF4 \xB7 \xD7${f.toFixed(2)}`:"")}this.txt("speedNum",String(Math.round(e.hSpeed*3.6)));let o=this.el("dashPips").children;if(this._pipsN!==e.dashCharges){this._pipsN=e.dashCharges;for(let f=0;f<o.length;f++)o[f].classList.toggle("on",f<e.dashCharges)}let l=i.state;this.cls("discIcon","hand",l==="hand"),this.cls("discIcon","out",l==="out"),this.cls("discIcon","ret",l==="return");let c=f=>vi(this.S.binds[f]&&this.S.binds[f][0]),h=i.out?Math.round((1+.35*i.bounces)*100):100;this.txt("discTxt",l==="hand"?`${c("throw")} \uB358\uC9C0\uAE30`:l==="out"?`${c("throw")} \uD68C\uC218 \xB7 ${c("blink")} \uC21C\uAC04\uC774\uB3D9`:`\uB3CC\uC544\uC624\uB294 \uC911 \xB7 ${c("blink")} \uC21C\uAC04\uC774\uB3D9`),this.txt("discPow",i.out&&i.bounces>0?`\uD295\uAE40 ${i.bounces} \xB7 \uD53C\uD574 ${h}%`:""),this.cls("cross","out",i.out),this.cls("cross","hidden",!this.me.alive);let d=null;if(this.me.alive&&this.state==="play"&&i.state==="hand"){let f=(this._lockO||(this._lockO=new S)).copy(e.eye);f.y-=.15,d=this.aimAssist(f,e.lookDir(this._lockD||(this._lockD=new S)),!1)}else i.out&&i.lock&&i.lock.alive&&!i.hit.has(i.lock)&&(d=i.lock);d?(Jt.copy(this.tInfo(d).c).project(this.camera),this.css("lock","transform",`translate(${((Jt.x+1)/2*n).toFixed(1)}px,${((1-Jt.y)/2*r).toFixed(1)}px)`),this.cls("lock","show",!0),this.cls("cross","lock",i.state==="hand")):(this.cls("lock","show",!1),this.cls("cross","lock",!1));let u=this.el("discMark");if(i.out&&this.state==="play"){Jt.copy(i.pos).applyMatrix4(this.camera.matrixWorldInverse);let f=Jt.z>0;Jt.copy(i.pos).project(this.camera);let g=Jt.x,x=Jt.y;f&&(g=-g,x=-x);let p=f||Math.abs(g)>.94||Math.abs(x)>.9;if(p){let _=Math.max(Math.abs(g)/.94,Math.abs(x)/.9);g/=_,x/=_}this.css("discMark","transform",`translate(${((g+1)/2*n).toFixed(1)}px,${((1-x)/2*r).toFixed(1)}px)`),this.cls("discMark","edge",p),this.cls("discMark","show",!0);let m=!1;for(let _ of this.assistTargets())if(this.tInfo(_).c.distanceTo(i.pos)<It.blinkRadius+.3&&!(_.protT>0)){m=!0;break}this.cls("discMark","cue",m),m&&this.txt("slamCue",`${vi(this.S.binds.blink[0])}!`)}else this.cls("discMark","show",!1);this.updateThreats();for(let f=this.dnums.length-1;f>=0;f--){let g=this.dnums[f];if(g.t+=t,g.t>.9){g.el.remove(),this.dnums.splice(f,1);continue}if(Jt.copy(g.pos).applyMatrix4(this.camera.matrixWorldInverse),Jt.z>-.2){g.el.style.opacity=0;continue}Jt.copy(g.pos).project(this.camera);let x=(Jt.x+1)/2*n+g.vx*g.t,p=(1-Jt.y)/2*r-40*g.t-20;g.el.style.transform=`translate(${x.toFixed(1)}px,${p.toFixed(1)}px) translate(-50%,-50%) scale(${(1+Math.max(0,.15-g.t)*3).toFixed(2)})`,g.el.style.opacity=String(Math.min(1,(.9-g.t)*4))}this.dmgFx=Math.max(0,this.dmgFx-t*1.6),this.flashFx=Math.max(0,this.flashFx-t*3.5),this.dirT=Math.max(0,this.dirT-t*1.2),this.css("hurt","opacity",this.dmgFx.toFixed(2)),this.css("flash","opacity",this.flashFx.toFixed(2)),this.css("lowhp","opacity",(this.mode!=="practice"&&this.me.alive?Math.max(0,.4-this.hp/100)/.4:0).toFixed(2)),this.css("dmgDir","opacity",this.dirT.toFixed(2)),this.dirT>0&&this.css("dmgDir","transform",`rotate(${(this.dirAng||0).toFixed(3)}rad)`),this.versus||(this.mode==="arena"?(this.txt("modeTxt",this.wave?`WAVE ${this.wave}`:"WAVE \u2014"),this.txt("subTxt",this.waveState==="break"?`\uB2E4\uC74C \uC6E8\uC774\uBE0C ${Math.max(0,Math.ceil(this.breakT))}\uCD08`:`\uB0A8\uC740 \uC801 ${this.queue.length+this.foes.length}`)):(this.txt("modeTxt","\uC5F0\uC2B5\uC7A5"),this.txt("subTxt","\uB09C\uC774\uB3C4 \uBB34\uAD00 \xB7 \uCCB4\uB825 \uBB34\uD55C \xB7 ESC \uBA54\uB274"))),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.el("banner").classList.remove("show")),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&this.cls("hint","show",!1))}updateVersusHud(t){let e=this.me,i=this.match,n=Hi[this.botSkill]?Hi[this.botSkill].name:"";if(this.mode==="duel"){let a=this.fighters[1];this.txt("modeTxt","1V1"),this.txt("subTxt",`${i.limit}\uD0AC \uBA3C\uC800 \xB7 ${a?a.name:""} (${n})`),this.txt("scoreTxt",`${e.kills} : ${a?a.kills:0}`),this.txt("comboTxt",e.streak>=2?`${e.streak}\uC5F0\uC18D \uCC98\uCE58`:"")}else{let a=Math.max(0,Math.ceil(i.timeLeft));this.txt("modeTxt","FFA"),this.txt("subTxt",`${Math.floor(a/60)}:${String(a%60).padStart(2,"0")} \xB7 ${i.limit}\uD0AC \uBA3C\uC800 \xB7 \uBD07 ${n}`),this.txt("scoreTxt",`${e.kills} \uD0AC`),this.txt("comboTxt",`\uD604\uC7AC ${this.ranking().indexOf(e)+1}\uC704`)}if(this._boardT-=t,this._boardT<=0){this._boardT=.2;let a=this.ranking().map(o=>`<div class="${o===e?"me":""}${o.alive?"":" dead"}"><i style="background:${o.css}"></i><span>${o.name}</span><b>${o.kills}</b><small>${o.deaths}</small></div>`).join("");a!==this._boardHtml&&(this._boardHtml=a,this.el("board").innerHTML=a)}let r=!e.alive&&!i.over;if(this.cls("deathMsg","show",r),r){let a=this.deathInfo&&this.deathInfo.by;this.txt("deathBy",a?`${a.name}\uC5D0\uAC8C \uB2F9\uD568`:"\uC4F0\uB7EC\uC9D0"),this.css("deathBy","color",a?a.css:""),this.txt("deathT",`\uBD80\uD65C\uAE4C\uC9C0 ${Math.max(0,e.respawnT).toFixed(1)}\uCD08`)}}updateThreats(){let t=this.el("threats");if(t===gs)return;if(!this._thr){this._thr=[];for(let i=0;i<6;i++){let n=document.createElement("i");t.appendChild(n),this._thr.push(n)}}let e=0;if(this.versus&&this.me.alive){let i=this.player,n=i.pos.x,r=i.pos.y+.9,a=i.pos.z;for(let o of this.fighters){if(o===this.me||e>=this._thr.length)continue;let l=o.disc;if(l.state==="hand"||l.hit.has(this.me))continue;let c=l.pos.x-n,h=l.pos.y-r,d=l.pos.z-a,u=l.vel.x-i.vel.x,f=l.vel.y-i.vel.y,g=l.vel.z-i.vel.z,x=u*u+f*f+g*g;if(x<1)continue;let p=-(c*u+h*f+d*g)/x;if(p<0||p>.7||Math.hypot(c+u*p,h+f*p,d+g*p)>2.4)continue;Jt.copy(l.pos).applyMatrix4(this.camera.matrixWorldInverse);let m=this._thr[e++];m.style.transform=`rotate(${Math.atan2(Jt.x,-Jt.z).toFixed(3)}rad) translateY(-86px) scale(${p<.25?1.5:1})`,m.style.opacity="1",m.className=p<.25?"":"near"}}for(let i of this.foes){if(e>=this._thr.length)break;if(!i.alive||i.windup<=0||i.dummy)continue;Jt.copy(i.center).applyMatrix4(this.camera.matrixWorldInverse);let n=Math.atan2(Jt.x,-Jt.z),r=this._thr[e++];r.style.transform=`rotate(${n.toFixed(3)}rad) translateY(-86px)`,r.style.opacity="1",r.className=i.type==="shield"?"near":""}for(;e<this._thr.length;e++)this._thr[e].style.opacity="0"}};var Ba=class{constructor(t,e){this.canvas=t,this.S=e,this.down=new Set,this.edges=new Set,this.releases=new Set,this.dx=0,this.dy=0,this.locked=!1,this.capture=null,this.onKey=null;let i=n=>"Mouse"+n;addEventListener("keydown",n=>{if(this.capture){n.preventDefault();let r=this.capture;this.capture=null,r(n.code);return}this.onKey&&this.onKey(n)||(this.locked&&n.preventDefault(),this.down.has(n.code)||this.edges.add(n.code),this.down.add(n.code))}),addEventListener("keyup",n=>{this.down.has(n.code)&&this.releases.add(n.code),this.down.delete(n.code)}),addEventListener("mousedown",n=>{if(this.capture){n.preventDefault();let a=this.capture;this.capture=null,a(i(n.button));return}if(!this.locked)return;let r=i(n.button);this.down.has(r)||this.edges.add(r),this.down.add(r)}),addEventListener("mouseup",n=>{let r=i(n.button);this.down.has(r)&&this.releases.add(r),this.down.delete(r)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{if(!this.locked)return;let r=Math.abs(n.movementX)>600?0:n.movementX,a=Math.abs(n.movementY)>600?0:n.movementY;this.dx+=r,this.dy+=a}),addEventListener("blur",()=>{this.down.clear()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||this.down.clear(),this.onLockChange&&this.onLockChange(this.locked)})}lock(){try{let t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}unlock(){document.pointerLockElement&&document.exitPointerLock()}is(t){let e=this.S.binds[t];for(let i=0;i<e.length;i++)if(this.down.has(e[i]))return!0;return!1}pressed(t){let e=this.S.binds[t];for(let i=0;i<e.length;i++)if(this.edges.has(e[i]))return!0;return!1}released(t){let e=this.S.binds[t];for(let i=0;i<e.length;i++)if(this.releases.has(e[i]))return!0;return!1}consumeEdges(){this.edges.clear(),this.releases.clear()}takeMouse(){let t=[this.dx,this.dy];return this.dx=0,this.dy=0,t}};var se=s=>document.getElementById(s),Nt=Ru(),Ac=se("c"),Ee=new Ba(Ac,Nt),Xt;try{Xt=new za(Ac,Nt,Ee)}catch(s){throw se("loading").innerHTML=`<div class="err">WebGL\uC744 \uC2DC\uC791\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694.<br><small>${String(s&&s.message||s)}</small></div>`,s}Xt.records=Cu();Xt.saveRecords=()=>Pu(Xt.records);var Tx=["menu","pause","settings","controls","death"];function gi(s){Tx.forEach(t=>se(t).classList.toggle("hidden",t!==s))}var Oa="menu";function Sc(s){if(Xt.start(s),gi(null),se("hud").classList.remove("hidden"),se("clickTo").classList.add("hidden"),Nt.full&&!document.fullscreenElement){let t=document.documentElement.requestFullscreen?.();t&&t.then(()=>navigator.keyboard?.lock?.(["KeyW","KeyA","KeyS","KeyD","KeyE","Space","ShiftLeft"]).catch(()=>{})).catch(()=>{})}Ee.lock()}function Fu(){Xt.state==="play"&&(Xt.state="paused",gi("pause"))}function Ax(){gi(null),se("clickTo").classList.remove("hidden"),Ee.lock()}function Rx(){Xt.state="menu",Xt.clear(),gi("menu"),se("hud").classList.add("hidden"),se("clickTo").classList.add("hidden"),Ee.unlock(),document.fullscreenElement&&document.exitFullscreen?.(),zu()}Xt.onEnd=(s,t)=>{Xt.state="dead",Ee.unlock(),se("endTitle").textContent=s,se("endStats").innerHTML=t.map(([e,i])=>`<div class="stat"><span>${e}</span><b>${i}</b></div>`).join(""),se("hud").classList.add("hidden"),gi("death")};Ee.onLockChange=s=>{s?(se("clickTo").classList.add("hidden"),Xt.state==="paused"&&(Xt.state="play",gi(null))):Xt.state==="play"&&Fu()};Ee.onKey=s=>{if(s.code==="Escape"){if(Xt.state==="play")return Ee.unlock(),Fu(),!0;if(!se("settings").classList.contains("hidden")||!se("controls").classList.contains("hidden"))return gi(Oa),!0}return!1};Ac.addEventListener("mousedown",()=>{(Xt.state==="play"||Xt.state==="paused")&&!Ee.locked&&se("pause").classList.contains("hidden")&&Ee.lock()});se("clickTo").addEventListener("mousedown",()=>Ee.lock());addEventListener("beforeunload",s=>{Xt.state==="play"&&(s.preventDefault(),s.returnValue="")});document.querySelectorAll("[data-act]").forEach(s=>s.addEventListener("click",()=>{Xt.audio.init(),Xt.audio.setVolumes(Nt.sfx,Nt.music),Xt.audio.ui();let t=s.dataset.act;t==="arena"||t==="practice"||t==="duel"||t==="ffa"?Sc(t):t==="settings"?(Oa=Xt.state==="paused"?"pause":"menu",Px(),gi("settings")):t==="controls"?(Oa=Xt.state==="paused"?"pause":"menu",Cx(),gi("controls")):t==="back"?gi(Oa):t==="resume"?Ax():t==="restart"?Sc(Xt.mode):t==="quit"&&Rx()}));function Rc(){document.querySelectorAll("#difficulty button").forEach(s=>s.classList.toggle("on",s.dataset.df===Nt.difficulty)),document.querySelectorAll("#botskill button").forEach(s=>s.classList.toggle("on",s.dataset.bs===Nt.botSkill))}document.querySelectorAll("#botskill button").forEach(s=>s.addEventListener("click",()=>{Nt.botSkill=s.dataset.bs,En(Nt),Rc(),Xt.audio.init(),Xt.audio.ui()}));document.querySelectorAll("#difficulty button").forEach(s=>s.addEventListener("click",()=>{Nt.difficulty=s.dataset.df,En(Nt),Rc(),Xt.audio.init(),Xt.audio.ui()}));Rc();function Cx(){se("ctrlGrid").innerHTML=_c.map(([s,t])=>`<div><span>${t}</span><b>${Nt.binds[s].map(vi).join(" / ")}</b></div>`).join("")+"<div><span>\uC77C\uC2DC\uC815\uC9C0</span><b>ESC</b></div>"}function Px(){let s=(e,i,n=r=>r)=>{let r=se("s"+e),a=se("v"+e);r.value=Nt[i],a.textContent=n(Nt[i]),r.oninput=()=>{Nt[i]=parseFloat(r.value),a.textContent=n(Nt[i]),En(Nt),Tc()}};s("Sens","sens",e=>{let i=2*Math.PI/(e*.0012)/800*2.54;return se("cm360").textContent=`(800DPI \uAE30\uC900 360\xB0 = ${i.toFixed(1)}cm)`,(+e).toFixed(2)}),s("Fov","fov"),s("FovFx","fovFx"),s("Shake","shake",e=>(+e).toFixed(2)),s("Tilt","tilt",e=>(+e).toFixed(2)),s("Bob","bob",e=>(+e).toFixed(2)),s("Sfx","sfx",e=>Math.round(e*100)),s("Music","music",e=>Math.round(e*100));let t=(e,i,n=!0,r)=>{let a=se("s"+e);a.value=String(Nt[i]),a.onchange=()=>{Nt[i]=n?+a.value:a.value,En(Nt),Tc(),r&&r()}};t("AimAssist","aimAssist",!1),t("AutoHop","autoHop"),t("KeyHints","keyHints"),t("Fps","fps"),t("Full","full"),t("Quality","quality",!1,()=>{confirm("\uADF8\uB798\uD53D \uD488\uC9C8\uC744 \uBC14\uAFB8\uB824\uBA74 \uC0C8\uB85C\uACE0\uCE68\uC774 \uD544\uC694\uD574\uC694. \uC9C0\uAE08 \uC0C8\uB85C\uACE0\uCE68\uD560\uAE4C\uC694?")&&(Xt.state="menu",location.reload())}),wc()}var bc=null;function wc(){se("binds").innerHTML=_c.map(([s,t])=>`<div class="row k"><span>${t}</span><span><button class="key" data-a="${s}" data-i="0">${vi(Nt.binds[s][0])}</button> <button class="key" data-a="${s}" data-i="1">${vi(Nt.binds[s][1])}</button></span></div>`).join("")+'<div class="row k"><span></span><button class="key" id="resetBinds">\uAE30\uBCF8\uAC12\uC73C\uB85C</button></div>',se("binds").querySelectorAll(".key[data-a]").forEach(s=>s.onclick=t=>{t.stopPropagation(),!bc&&(bc=s,s.textContent="\uD0A4 \uC785\uB825\u2026",s.classList.add("listen"),setTimeout(()=>{Ee.capture=e=>{let i=s.dataset.a,n=+s.dataset.i;if(bc=null,e!=="Escape"){for(let a in Nt.binds)Nt.binds[a]=Nt.binds[a].map(o=>o===e?void 0:o);let r=[...Nt.binds[i]];r[n]=e,Nt.binds[i]=r;for(let a in Nt.binds)Nt.binds[a]=Nt.binds[a].filter(Boolean)}En(Nt),wc(),Ec()}},50))}),se("resetBinds").onclick=()=>{Nt.binds=JSON.parse(JSON.stringify(Da)),En(Nt),wc(),Ec()}}function Ec(){let s=e=>Nt.binds[e]&&Nt.binds[e][0]?vi(Nt.binds[e][0]):"\u2014",t=[["throw","\uB358\uC9C0\uAE30 / \uD68C\uC218"],["blink","\uC21C\uAC04\uC774\uB3D9"],["dash","\uB300\uC2DC"],["jump","\uC810\uD504 \xD72"]];se("keyHints").innerHTML=t.map(([e,i])=>`<span><b>${s(e)}</b>${i}</span>`).join(""),se("keyHints").classList.toggle("hidden",!Nt.keyHints),document.querySelectorAll("[data-key]").forEach(e=>{e.textContent=s(e.dataset.key)})}function Tc(){Xt.audio.setVolumes(Nt.sfx,Nt.music),Ec(),se("fps").classList.toggle("hidden",!Nt.fps)}Tc();function zu(){let s=Xt.records,t=[];s.score&&t.push(`\uCD5C\uACE0 ${s.score.toLocaleString()}\uC810 \xB7 WAVE ${s.wave}`),(s.duelWin||s.duelLose)&&t.push(`1V1 ${s.duelWin||0}\uC2B9 ${s.duelLose||0}\uD328`),s.ffaBest&&t.push(`FFA \uCD5C\uACE0 ${s.ffaBest}\uC704${s.ffaWin?` \xB7 1\uC704 ${s.ffaWin}\uBC88`:""}`),s.combo&&t.push(`\uCD5C\uACE0 \uCF64\uBCF4 ${s.combo}`),s.speed&&t.push(`\uCD5C\uACE0 \uC18D\uB3C4 ${Math.round(s.speed*3.6)} KM/H`),se("best").innerHTML=t.join(" &nbsp;\xB7&nbsp; ")}gi("menu");zu();se("loading").classList.add("hidden");function Bu(s){requestAnimationFrame(Bu),Xt.frame(s)}requestAnimationFrame(Bu);window.__game={game:Xt,S:Nt,input:Ee,start:s=>Sc(s),sim(s,t=[]){let e=Xt,i=1/120;for(let n=0;n<s&&e.state==="play";n+=i)t.forEach(r=>Ee.down.add(r)),e.tick(i);t.forEach(n=>Ee.down.delete(n))},press(s){Ee.edges.add(s),Ee.down.add(s)},release(s){Ee.down.delete(s),Ee.releases.add(s)}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
