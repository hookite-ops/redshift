(()=>{var Rd=Object.defineProperty;var Cd=(s,t,e)=>t in s?Rd(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var uh=(s,t,e)=>Cd(s,typeof t!="symbol"?t+"":t,e);var Ec="169";var Pd=0,dh=1,Id=2;var bu=1,Sc=2,zi=3,sn=0,Ge=1,Pe=2,Ri=0,is=1,ge=2,fh=3,ph=4,Ld=5,Mn=100,Ud=101,Dd=102,Nd=103,Fd=104,Bd=200,zd=201,Od=202,Hd=203,tl=204,el=205,kd=206,Vd=207,Gd=208,Wd=209,Xd=210,qd=211,Yd=212,$d=213,Zd=214,il=0,nl=1,sl=2,as=3,rl=4,al=5,ol=6,ll=7,wu=0,Kd=1,Jd=2,nn=0,bc=1,wc=2,Tc=3,lr=4,Qd=5,Ac=6,Rc=7;var Tu=300,os=301,ls=302,cl=303,hl=304,Ia=306,Tn=1e3,bn=1001,ul=1002,ti=1003,jd=1004;var gr=1005;var vi=1006,vo=1007;var wn=1008;var ki=1009,Au=1010,Ru=1011,qs=1012,Cc=1013,An=1014,Ai=1015,ii=1016,Pc=1017,Ic=1018,cs=1020,Cu=35902,Pu=1021,Iu=1022,_i=1023,Lu=1024,Uu=1025,ns=1026,hs=1027,Lc=1028,Uc=1029,Du=1030,Dc=1031;var Nc=1033,qr=33776,Yr=33777,$r=33778,Zr=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,xl=37492,yl=37496,vl=37808,_l=37809,Ml=37810,El=37811,Sl=37812,bl=37813,wl=37814,Tl=37815,Al=37816,Rl=37817,Cl=37818,Pl=37819,Il=37820,Ll=37821,Kr=36492,Ul=36494,Dl=36495,Nu=36283,Nl=36284,Fl=36285,Bl=36286;var Qr=2300,zl=2301,_o=2302,mh=2400,gh=2401,xh=2402;var tf=3200,ef=3201;var Fu=0,nf=1,en="",Ze="srgb",on="srgb-linear",Fc="display-p3",La="display-p3-linear",jr="linear",me="srgb",ta="rec709",ea="p3";var zn=7680;var yh=519,sf=512,rf=513,af=514,Bu=515,of=516,lf=517,cf=518,hf=519,vh=35044,li=35048;var _h="300 es",Hi=2e3,ia=2001,rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,Hs=Math.PI/180,Ys=180/Math.PI;function Un(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Be(s,t,e){return Math.max(t,Math.min(e,s))}function Bc(s,t){return(s%t+t)%t}function uf(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function df(s,t,e){return s!==t?(e-s)/(t-s):0}function ks(s,t,e){return(1-e)*s+e*t}function ff(s,t,e,i){return ks(s,t,1-Math.exp(-e*i))}function pf(s,t=1){return t-Math.abs(Bc(s,t*2)-t)}function mf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function gf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function xf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function yf(s,t){return s+Math.random()*(t-s)}function vf(s){return s*(.5-Math.random())}function _f(s){s!==void 0&&(Mh=s);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mf(s){return s*Hs}function Ef(s){return s*Ys}function Sf(s){return(s&s-1)===0&&s!==0}function bf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tf(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+i)/2),c=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*c,l*d,l*u,o*h);break;case"YZY":s.set(l*u,o*c,l*d,o*h);break;case"ZXZ":s.set(l*d,l*u,o*c,o*h);break;case"XZX":s.set(o*c,l*g,l*f,o*h);break;case"YXY":s.set(l*f,o*c,l*g,o*h);break;case"ZYZ":s.set(l*g,l*f,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function jn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Te={DEG2RAD:Hs,RAD2DEG:Ys,generateUUID:Un,clamp:Be,euclideanModulo:Bc,mapLinear:uf,inverseLerp:df,lerp:ks,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:xf,randFloat:yf,randFloatSpread:vf,seededRandom:_f,degToRad:Mf,radToDeg:Ef,isPowerOfTwo:Sf,ceilPowerOfTwo:bf,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Tf,normalize:Ye,denormalize:jn},tt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class s{constructor(t,e,i,n,r,a,o,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,h)}set(t,e,i,n,r,a,o,l,h){let c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=n[0],p=n[3],m=n[6],v=n[1],y=n[4],M=n[7],I=n[2],E=n[5],w=n[8];return r[0]=a*x+o*v+l*I,r[3]=a*p+o*y+l*E,r[6]=a*m+o*M+l*w,r[1]=h*x+c*v+d*I,r[4]=h*p+c*y+d*E,r[7]=h*m+c*M+d*w,r[2]=u*x+f*v+g*I,r[5]=u*p+f*y+g*E,r[8]=u*m+f*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-i*r*c+i*o*l+n*r*h-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*a-o*h,u=o*l-c*r,f=h*r-a*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(n*h-c*i)*x,t[2]=(o*i-n*a)*x,t[3]=u*x,t[4]=(c*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*l-h*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-n*h,n*l,-n*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mo=new qt;function zu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Af(){let s=na("canvas");return s.style.display="block",s}var Eh={};function Jr(s){s in Eh||(Eh[s]=!0,console.warn(s))}function Rf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Cf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Sh=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bh=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ps={[on]:{transfer:jr,primaries:ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ze]:{transfer:me,primaries:ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[La]:{transfer:jr,primaries:ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(bh),fromReference:s=>s.applyMatrix3(Sh)},[Fc]:{transfer:me,primaries:ea,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(bh),fromReference:s=>s.applyMatrix3(Sh).convertLinearToSRGB()}},If=new Set([on,La]),te={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!If.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=Ps[t].toReference,n=Ps[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ps[s].primaries},getTransfer:function(s){return s===en?jr:Ps[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Ps[t].luminanceCoefficients)}};function ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var On,Ol=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{On===void 0&&(On=na("canvas")),On.width=t.width,On.height=t.height;let i=On.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=On}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=na("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=ss(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ss(e[i]/255)*255):e[i]=ss(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lf=0,sa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(So(n[a].image)):r.push(So(n[a]))}else r=So(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function So(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uf=0,ei=class s extends rn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=bn,n=bn,r=vi,a=wn,o=_i,l=ki,h=s.DEFAULT_ANISOTROPY,c=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Un(),this.name="",this.source=new sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tn:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tn:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Tu;ei.DEFAULT_ANISOTROPY=1;var ce=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(h+1)/2,M=(f+1)/2,I=(m+1)/2,E=(c+u)/4,w=(d+x)/4,C=(g+p)/4;return y>M&&y>I?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=E/i,r=w/i):M>I?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=E/n,r=C/n):I<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(I),i=w/r,n=C/r),this.set(i,n,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-c)*(u-c));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-x)/v,this.z=(u-c)/v,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends rn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ei(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends Hl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ra=class extends ei{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends ei{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||h!==f||c!==g){let p=1-o,m=l*u+h*f+c*g+d*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let I=Math.sqrt(y),E=Math.atan2(I,m*v);p=Math.sin(p*E)/I,o=Math.sin(o*E)/I}let M=o*v;if(l=l*p+u*M,h=h*p+f*M,c=c*p+g*M,d=d*p+x*M,p===1-o){let I=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=I,h*=I,c*=I,d*=I}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+c*d+l*f-h*u,t[e+1]=l*g+c*u+h*d-o*f,t[e+2]=h*g+c*f+o*u-l*d,t[e+3]=c*g-o*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),d=o(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+h)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-h)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+a*o+n*h-r*l,this._y=n*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),d=Math.sin((1-e)*c)/h,u=Math.sin(e*c)/h;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*n-o*i),c=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*h+a*d-o*c,this.y=i+l*c+o*h-r*d,this.z=n+l*d+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bo=new b,wh=new Ie,Vi=class{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),yr.subVectors(this.max,Is),Hn.subVectors(t.a,Is),kn.subVectors(t.b,Is),Vn.subVectors(t.c,Is),Zi.subVectors(kn,Hn),Ki.subVectors(Vn,kn),pn.subVectors(Hn,Vn);let e=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-pn.z,pn.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,pn.z,0,-pn.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-pn.y,pn.x,0];return!wo(e,Hn,kn,Vn,yr)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,Hn,kn,Vn,yr))?!1:(vr.crossVectors(Zi,Ki),e=[vr.x,vr.y,vr.z],wo(e,Hn,kn,Vn,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ui=[new b,new b,new b,new b,new b,new b,new b,new b],gi=new b,xr=new Vi,Hn=new b,kn=new b,Vn=new b,Zi=new b,Ki=new b,pn=new b,Is=new b,yr=new b,vr=new b,mn=new b;function wo(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){mn.fromArray(s,r);let o=n.x*Math.abs(mn.x)+n.y*Math.abs(mn.y)+n.z*Math.abs(mn.z),l=t.dot(mn),h=e.dot(mn),c=i.dot(mn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Df=new Vi,Ls=new b,To=new b,Gi=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Df.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ls,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(To)),this.expandByPoint(Ls.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new b,Ao=new b,_r=new b,Ji=new b,Ro=new b,Mr=new b,Co=new b,$s=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ao.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(Ao);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_r),o=Ji.dot(this.direction),l=-Ji.dot(_r),h=Ji.lengthSq(),c=Math.abs(1-a*a),d,u,f,g;if(c>0)if(d=a*l-o,u=a*o-l,g=r*c,d>=0)if(u>=-g)if(u<=g){let x=1/c;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ao).addScaledVector(_r,u),f}intersectSphere(t,e){Di.subVectors(t.center,this.origin);let i=Di.dot(this.direction),n=Di.dot(Di)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,n=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,n=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,i,n,r){Ro.subVectors(e,t),Mr.subVectors(i,t),Co.crossVectors(Ro,Mr);let a=this.direction.dot(Co),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,t);let l=o*this.direction.dot(Mr.crossVectors(Ji,Mr));if(l<0)return null;let h=o*this.direction.dot(Ro.cross(Ji));if(h<0||l+h>a)return null;let c=-o*Ji.dot(Co);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class s{constructor(t,e,i,n,r,a,o,l,h,c,d,u,f,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,h,c,d,u,f,g,x,p)}set(t,e,i,n,r,a,o,l,h,c,d,u,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Gn.setFromMatrixColumn(t,0).length(),r=1/Gn.setFromMatrixColumn(t,1).length(),a=1/Gn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*c,f=a*d,g=o*c,x=o*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+g*h,e[5]=u-x*h,e[9]=-o*l,e[2]=x-u*h,e[6]=g+f*h,e[10]=a*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,g=h*c,x=h*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*c,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,g=h*c,x=h*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*c,e[9]=x-u*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*c,f=a*d,g=o*c,x=o*d;e[0]=l*c,e[4]=g*h-f,e[8]=u*h+x,e[1]=l*d,e[5]=x*h+u,e[9]=f*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*h,g=o*l,x=o*h;e[0]=l*c,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*h,g=o*l,x=o*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+x,e[5]=a*c,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*c,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Ff)}lookAt(t,e,i){let n=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Qi.crossVectors(i,ai),Qi.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Qi.crossVectors(i,ai)),Qi.normalize(),Er.crossVectors(ai,Qi),n[0]=Qi.x,n[4]=Er.x,n[8]=ai.x,n[1]=Qi.y,n[5]=Er.y,n[9]=ai.y,n[2]=Qi.z,n[6]=Er.z,n[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],v=i[3],y=i[7],M=i[11],I=i[15],E=n[0],w=n[4],C=n[8],U=n[12],_=n[1],S=n[5],L=n[9],D=n[13],F=n[2],G=n[6],N=n[10],q=n[14],H=n[3],rt=n[7],lt=n[11],ut=n[15];return r[0]=a*E+o*_+l*F+h*H,r[4]=a*w+o*S+l*G+h*rt,r[8]=a*C+o*L+l*N+h*lt,r[12]=a*U+o*D+l*q+h*ut,r[1]=c*E+d*_+u*F+f*H,r[5]=c*w+d*S+u*G+f*rt,r[9]=c*C+d*L+u*N+f*lt,r[13]=c*U+d*D+u*q+f*ut,r[2]=g*E+x*_+p*F+m*H,r[6]=g*w+x*S+p*G+m*rt,r[10]=g*C+x*L+p*N+m*lt,r[14]=g*U+x*D+p*q+m*ut,r[3]=v*E+y*_+M*F+I*H,r[7]=v*w+y*S+M*G+I*rt,r[11]=v*C+y*L+M*N+I*lt,r[15]=v*U+y*D+M*q+I*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*d-n*h*d-r*o*u+i*h*u+n*o*f-i*l*f)+x*(+e*l*f-e*h*u+r*a*u-n*a*f+n*h*c-r*l*c)+p*(+e*h*d-e*o*f-r*a*d+i*a*f+r*o*c-i*h*c)+m*(-n*o*c-e*l*d+e*o*u+n*a*d-i*a*u+i*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],v=d*p*h-x*u*h+x*l*f-o*p*f-d*l*m+o*u*m,y=g*u*h-c*p*h-g*l*f+a*p*f+c*l*m-a*u*m,M=c*x*h-g*d*h+g*o*f-a*x*f-c*o*m+a*d*m,I=g*d*l-c*x*l-g*o*u+a*x*u+c*o*p-a*d*p,E=e*v+i*y+n*M+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=v*w,t[1]=(x*u*r-d*p*r-x*n*f+i*p*f+d*n*m-i*u*m)*w,t[2]=(o*p*r-x*l*r+x*n*h-i*p*h-o*n*m+i*l*m)*w,t[3]=(d*l*r-o*u*r-d*n*h+i*u*h+o*n*f-i*l*f)*w,t[4]=y*w,t[5]=(c*p*r-g*u*r+g*n*f-e*p*f-c*n*m+e*u*m)*w,t[6]=(g*l*r-a*p*r-g*n*h+e*p*h+a*n*m-e*l*m)*w,t[7]=(a*u*r-c*l*r+c*n*h-e*u*h-a*n*f+e*l*f)*w,t[8]=M*w,t[9]=(g*d*r-c*x*r-g*i*f+e*x*f+c*i*m-e*d*m)*w,t[10]=(a*x*r-g*o*r+g*i*h-e*x*h-a*i*m+e*o*m)*w,t[11]=(c*o*r-a*d*r-c*i*h+e*d*h+a*i*f-e*o*f)*w,t[12]=I*w,t[13]=(c*x*n-g*d*n+g*i*u-e*x*u-c*i*p+e*d*p)*w,t[14]=(g*o*n-a*x*n-g*i*l+e*x*l+a*i*p-e*o*p)*w,t[15]=(a*d*n-c*o*n+c*i*l-e*d*l-a*i*u+e*o*u)*w,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,d=o+o,u=r*h,f=r*c,g=r*d,x=a*c,p=a*d,m=o*d,v=l*h,y=l*c,M=l*d,I=i.x,E=i.y,w=i.z;return n[0]=(1-(x+m))*I,n[1]=(f+M)*I,n[2]=(g-y)*I,n[3]=0,n[4]=(f-M)*E,n[5]=(1-(u+m))*E,n[6]=(p+v)*E,n[7]=0,n[8]=(g+y)*w,n[9]=(p-v)*w,n[10]=(1-(u+x))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=Gn.set(n[0],n[1],n[2]).length(),a=Gn.set(n[4],n[5],n[6]).length(),o=Gn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],xi.copy(this);let h=1/r,c=1/a,d=1/o;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=c,xi.elements[5]*=c,xi.elements[6]*=c,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,e.setFromRotationMatrix(xi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Hi){let l=this.elements,h=2*r/(e-t),c=2*r/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n),f,g;if(o===Hi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ia)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Hi){let l=this.elements,h=1/(e-t),c=1/(i-n),d=1/(a-r),u=(e+t)*h,f=(i+n)*c,g,x;if(o===Hi)g=(a+r)*d,x=-2*d;else if(o===ia)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Gn=new b,xi=new jt,Nf=new b(0,0,0),Ff=new b(1,1,1),Qi=new b,Er=new b,ai=new b,Th=new jt,Ah=new Ie,We=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};We.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bf=0,Rh=new b,Wn=new Ie,Ni=new jt,Sr=new b,Us=new b,zf=new b,Of=new Ie,Ch=new b(1,0,0),Ph=new b(0,1,0),Ih=new b(0,0,1),Lh={type:"added"},Hf={type:"removed"},Xn={type:"childadded",child:null},Po={type:"childremoved",child:null},le=class s extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new b,e=new We,i=new Ie,n=new b(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new jt},normalMatrix:{value:new qt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.premultiply(Wn),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Sr.copy(t):Sr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Us,Sr,this.up):Ni.lookAt(Sr,Us,this.up),this.quaternion.setFromRotationMatrix(Ni),n&&(Ni.extractRotation(n.matrixWorld),Wn.setFromRotationMatrix(Ni),this.quaternion.premultiply(Wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),Xn.child=t,this.dispatchEvent(Xn),Xn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),Xn.child=t,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};le.DEFAULT_UP=new b(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new b,Fi=new b,Io=new b,Bi=new b,qn=new b,Yn=new b,Uh=new b,Lo=new b,Uo=new b,Do=new b,No=new ce,Fo=new ce,Bo=new ce,En=class s{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),yi.subVectors(t,e),n.cross(yi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){yi.subVectors(n,e),Fi.subVectors(i,e),Io.subVectors(t,e);let a=yi.dot(yi),o=yi.dot(Fi),l=yi.dot(Io),h=Fi.dot(Fi),c=Fi.dot(Io),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return No.setScalar(0),Fo.setScalar(0),Bo.setScalar(0),No.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,i),Bo.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(No,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(t,e,i,n){return yi.subVectors(i,e),Fi.subVectors(t,e),yi.cross(Fi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),yi.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;qn.subVectors(n,i),Yn.subVectors(r,i),Lo.subVectors(t,i);let l=qn.dot(Lo),h=Yn.dot(Lo);if(l<=0&&h<=0)return e.copy(i);Uo.subVectors(t,n);let c=qn.dot(Uo),d=Yn.dot(Uo);if(c>=0&&d<=c)return e.copy(n);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(qn,a);Do.subVectors(t,r);let f=qn.dot(Do),g=Yn.dot(Do);if(g>=0&&f<=g)return e.copy(r);let x=f*h-l*g;if(x<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(Yn,o);let p=c*g-f*d;if(p<=0&&d-c>=0&&f-g>=0)return Uh.subVectors(r,n),o=(d-c)/(d-c+(f-g)),e.copy(n).addScaledVector(Uh,o);let m=1/(p+x+u);return a=x*m,o=u*m,e.copy(i).addScaledVector(qn,a).addScaledVector(Yn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},br={h:0,s:0,l:0};function zo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var et=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Bc(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=zo(a,r,t+1/3),this.g=zo(a,r,t),this.b=zo(a,r,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let i=Ou[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return te.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Be(Ve.r*255,0,255))*65536+Math.round(Be(Ve.g*255,0,255))*256+Math.round(Be(Ve.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ve.copy(this),e);let i=Ve.r,n=Ve.g,r=Ve.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ze){te.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,i=Ve.g,n=Ve.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(br);let i=ks(ji.h,br.h,e),n=ks(ji.s,br.s,e),r=ks(ji.l,br.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new et;et.NAMES=Ou;var kf=0,Wi=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=is,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==Mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Dt=class extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new b,wr=new tt,he=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=vh,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vh&&(t.usage=this.usage),t}};var oa=class extends he{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var la=class extends he{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Nt=class extends he{constructor(t,e,i){super(new Float32Array(t),e,i)}},Vf=0,di=new jt,Oo=new le,$n=new b,oi=new Vi,Ds=new Vi,Fe=new b,Kt=class s extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zu(t)?la:oa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,i){return di.makeTranslation(t,e,i),this.applyMatrix4(di),this}scale(t,e,i){return di.makeScale(t,e,i),this.applyMatrix4(di),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){let i=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(oi.min,Ds.min),oi.expandByPoint(Fe),Fe.addVectors(oi.max,Ds.max),oi.expandByPoint(Fe)):(oi.expandByPoint(Ds.min),oi.expandByPoint(Ds.max))}oi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Fe.fromBufferAttribute(o,h),l&&($n.fromBufferAttribute(t,h),Fe.add($n)),n=Math.max(n,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new b,l[C]=new b;let h=new b,c=new b,d=new b,u=new tt,f=new tt,g=new tt,x=new b,p=new b;function m(C,U,_){h.fromBufferAttribute(i,C),c.fromBufferAttribute(i,U),d.fromBufferAttribute(i,_),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,_),c.sub(h),d.sub(h),f.sub(u),g.sub(u);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(S),o[C].add(x),o[U].add(x),o[_].add(x),l[C].add(p),l[U].add(p),l[_].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,U=v.length;C<U;++C){let _=v[C],S=_.start,L=_.count;for(let D=S,F=S+L;D<F;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new b,M=new b,I=new b,E=new b;function w(C){I.fromBufferAttribute(n,C),E.copy(I);let U=o[C];y.copy(U),y.sub(I.multiplyScalar(I.dot(U))).normalize(),M.crossVectors(E,U);let S=M.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,S)}for(let C=0,U=v.length;C<U;++C){let _=v[C],S=_.start,L=_.count;for(let D=S,F=S+L;D<F;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new b,r=new b,a=new b,o=new b,l=new b,h=new b,c=new b,d=new b;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),c.subVectors(a,r),d.subVectors(n,r),c.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,p),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,r),d.subVectors(n,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*c;for(let m=0;m<c;m++)u[g++]=h[f++]}return new he(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],h=t(l,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,c=a.length;h<c;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dh=new jt,gn=new $s,Tr=new Gi,Nh=new b,Ar=new b,Rr=new b,Cr=new b,Ho=new b,Pr=new b,Fh=new b,Ir=new b,ct=class extends le{constructor(t=new Kt,e=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],d=r[l];c!==0&&(Ho.fromBufferAttribute(d,t),a?Pr.addScaledVector(Ho,c):Pr.addScaledVector(Ho.sub(e),c))}e.add(Pr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(r),gn.copy(t.ray).recast(t.near),!(Tr.containsPoint(gn.origin)===!1&&(gn.intersectSphere(Tr,Nh)===null||gn.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),gn.copy(t.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,I=y;M<I;M+=3){let E=o.getX(M),w=o.getX(M+1),C=o.getX(M+2);n=Lr(this,m,t,i,h,c,d,E,w,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);n=Lr(this,a,t,i,h,c,d,v,y,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,I=y;M<I;M+=3){let E=M,w=M+1,C=M+2;n=Lr(this,m,t,i,h,c,d,E,w,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,y=p+1,M=p+2;n=Lr(this,a,t,i,h,c,d,v,y,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function Gf(s,t,e,i,n,r,a,o){let l;if(t.side===Ge?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===sn,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Ir);return h<e.near||h>e.far?null:{distance:h,point:Ir.clone(),object:s}}function Lr(s,t,e,i,n,r,a,o,l,h){s.getVertexPosition(o,Ar),s.getVertexPosition(l,Rr),s.getVertexPosition(h,Cr);let c=Gf(s,t,e,i,Ar,Rr,Cr,Fh);if(c){let d=new b;En.getBarycoord(Fh,Ar,Rr,Cr,d),n&&(c.uv=En.getInterpolatedAttribute(n,o,l,h,d,new tt)),r&&(c.uv1=En.getInterpolatedAttribute(r,o,l,h,d,new tt)),a&&(c.normal=En.getInterpolatedAttribute(a,o,l,h,d,new b),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new b,materialIndex:0};En.getNormal(Ar,Rr,Cr,u.normal),c.face=u,c.barycoord=d}return c}var ee=class s extends Kt{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(d,2));function g(x,p,m,v,y,M,I,E,w,C,U){let _=M/w,S=I/C,L=M/2,D=I/2,F=E/2,G=w+1,N=C+1,q=0,H=0,rt=new b;for(let lt=0;lt<N;lt++){let ut=lt*S-D;for(let Ft=0;Ft<G;Ft++){let Wt=Ft*_-L;rt[x]=Wt*v,rt[p]=ut*y,rt[m]=F,h.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[m]=E>0?1:-1,c.push(rt.x,rt.y,rt.z),d.push(Ft/w),d.push(1-lt/C),q+=1}}for(let lt=0;lt<C;lt++)for(let ut=0;ut<w;ut++){let Ft=u+ut+G*lt,Wt=u+ut+G*(lt+1),V=u+(ut+1)+G*(lt+1),j=u+(ut+1)+G*lt;l.push(Ft,Wt,j),l.push(Wt,V,j),H+=6}o.addGroup(f,H,U),f+=H,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let i=us(s[e]);for(let n in i)t[n]=i[n]}return t}function Wf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var ln={clone:us,merge:$e},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ue=class extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ca=class extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=new b,Bh=new tt,zh=new tt,ze=class extends ca{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tn.x,tn.y).multiplyScalar(-t/tn.z),tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tn.x,tn.y).multiplyScalar(-t/tn.z)}getViewSize(t,e){return this.getViewBounds(t,Bh,zh),e.subVectors(zh,Bh)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zn=-90,Kn=1,Zs=class extends le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ze(Zn,Kn,t,e);n.layers=this.layers,this.add(n);let r=new ze(Zn,Kn,t,e);r.layers=this.layers,this.add(r);let a=new ze(Zn,Kn,t,e);a.layers=this.layers,this.add(a);let o=new ze(Zn,Kn,t,e);o.layers=this.layers,this.add(o);let l=new ze(Zn,Kn,t,e);l.layers=this.layers,this.add(l);let h=new ze(Zn,Kn,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ha=class extends ei{constructor(t,e,i,n,r,a,o,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,i,n,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ks=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ha(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ee(5,5,5),r=new ue({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Ri});r.uniforms.tEquirect.value=e;let a=new ct(n,r),o=e.minFilter;return e.minFilter===wn&&(e.minFilter=vi),new Zs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},ko=new b,Yf=new b,$f=new qt,Oi=class{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=ko.subVectors(i,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ko),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||$f.getNormalMatrix(t),n=this.coplanarPoint(ko).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xn=new Gi,Ur=new b,Js=class{constructor(t=new Oi,e=new Oi,i=new Oi,n=new Oi,r=new Oi,a=new Oi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hi){let i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],d=n[6],u=n[7],f=n[8],g=n[9],x=n[10],p=n[11],m=n[12],v=n[13],y=n[14],M=n[15];if(i[0].setComponents(l-r,u-h,p-f,M-m).normalize(),i[1].setComponents(l+r,u+h,p+f,M+m).normalize(),i[2].setComponents(l+a,u+c,p+g,M+v).normalize(),i[3].setComponents(l-a,u-c,p-g,M-v).normalize(),i[4].setComponents(l-o,u-d,p-x,M-y).normalize(),e===Hi)i[5].setComponents(l+o,u+d,p+x,M+y).normalize();else if(e===ia)i[5].setComponents(o,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(t){return xn.center.set(0,0,0),xn.radius=.7071067811865476,xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Ur.x=n.normal.x>0?t.max.x:t.min.x,Ur.y=n.normal.y>0?t.max.y:t.min.y,Ur.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ku(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zf(s){let t=new WeakMap;function e(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,h){let c=l.array,d=l.updateRanges;if(s.bindBuffer(h,o),d.length===0)s.bufferSubData(h,0,c);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];s.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:n,remove:r,update:a}}var Xe=class s extends Kt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,d=t/o,u=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<c;m++){let v=m*u-a;for(let y=0;y<h;y++){let M=y*d-r;g.push(M,-v,0),x.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let y=v+h*m,M=v+h*(m+1),I=v+1+h*(m+1),E=v+1+h*m;f.push(y,M,E),f.push(M,I,E)}this.setIndex(f),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`
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
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,$p=`struct PhysicalMaterial {
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
}`,Zp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,i0=`#if DEPTH_PACKING == 3200
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
}`,n0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
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
}`,f0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,x0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,v0=`#define STANDARD
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
}`,_0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,E0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Kf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:jf,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:ip,aomap_pars_fragment:np,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:xp,color_vertex:yp,common:vp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Sp,emissivemap_fragment:bp,emissivemap_pars_fragment:wp,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Vp,envmap_vertex:Lp,fog_vertex:Up,fog_pars_vertex:Dp,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:zp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:Hp,lights_pars_begin:kp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:$p,lights_fragment_begin:Zp,lights_fragment_maps:Kp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:im,map_pars_fragment:nm,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:xm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Em,opaque_fragment:Sm,packing:bm,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Lm,shadowmap_vertex:Um,shadowmask_pars_fragment:Dm,skinbase_vertex:Nm,skinning_pars_vertex:Fm,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:Om,specularmap_pars_fragment:Hm,tonemapping_fragment:km,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:$m,background_vert:Zm,background_frag:Km,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:jm,cube_frag:t0,depth_vert:e0,depth_frag:i0,distanceRGBA_vert:n0,distanceRGBA_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:x0,meshphong_frag:y0,meshphysical_vert:v0,meshphysical_frag:_0,meshtoon_vert:M0,meshtoon_frag:E0,points_vert:S0,points_frag:b0,shadow_vert:w0,shadow_frag:T0,sprite_vert:A0,sprite_frag:R0},mt={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Ti={basic:{uniforms:$e([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:$e([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new et(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:$e([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:$e([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:$e([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new et(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:$e([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:$e([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:$e([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:$e([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:$e([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:$e([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:$e([mt.common,mt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:$e([mt.lights,mt.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ti.physical={uniforms:$e([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Dr={r:0,b:0,g:0},yn=new We,C0=new jt;function P0(s,t,e,i,n,r,a){let o=new et(0),l=r===!0?0:1,h,c,d=null,u=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,M=g(v);M===null?m(o,l):M&&M.isColor&&(m(M,1),y=!0);let I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===Ia)?(c===void 0&&(c=new ct(new ee(1,1,1),new ue({name:"BackgroundCubeMaterial",uniforms:us(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),yn.copy(y.backgroundRotation),yn.x*=-1,yn.y*=-1,yn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(yn)),c.material.toneMapped=te.getTransfer(M.colorSpace)!==me,(d!==M||u!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ct(new Xe(2,2),new ue({name:"BackgroundMaterial",uniforms:us(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=te.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function m(v,y){v.getRGB(Dr,Hu(s)),i.buffers.color.setClear(Dr.r,Dr.g,Dr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:x,addToRenderList:p}}function I0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,a=!1;function o(_,S,L,D,F){let G=!1,N=d(D,L,S);r!==N&&(r=N,h(r.object)),G=f(_,D,L,F),G&&g(_,D,L,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(_,S,L,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function h(_){return s.bindVertexArray(_)}function c(_){return s.deleteVertexArray(_)}function d(_,S,L){let D=L.wireframe===!0,F=i[_.id];F===void 0&&(F={},i[_.id]=F);let G=F[S.id];G===void 0&&(G={},F[S.id]=G);let N=G[D];return N===void 0&&(N=u(l()),G[D]=N),N}function u(_){let S=[],L=[],D=[];for(let F=0;F<e;F++)S[F]=0,L[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:L,attributeDivisors:D,object:_,attributes:{},index:null}}function f(_,S,L,D){let F=r.attributes,G=S.attributes,N=0,q=L.getAttributes();for(let H in q)if(q[H].location>=0){let lt=F[H],ut=G[H];if(ut===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor)),lt===void 0||lt.attribute!==ut||ut&&lt.data!==ut.data)return!0;N++}return r.attributesNum!==N||r.index!==D}function g(_,S,L,D){let F={},G=S.attributes,N=0,q=L.getAttributes();for(let H in q)if(q[H].location>=0){let lt=G[H];lt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor));let ut={};ut.attribute=lt,lt&&lt.data&&(ut.data=lt.data),F[H]=ut,N++}r.attributes=F,r.attributesNum=N,r.index=D}function x(){let _=r.newAttributes;for(let S=0,L=_.length;S<L;S++)_[S]=0}function p(_){m(_,0)}function m(_,S){let L=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;L[_]=1,D[_]===0&&(s.enableVertexAttribArray(_),D[_]=1),F[_]!==S&&(s.vertexAttribDivisor(_,S),F[_]=S)}function v(){let _=r.newAttributes,S=r.enabledAttributes;for(let L=0,D=S.length;L<D;L++)S[L]!==_[L]&&(s.disableVertexAttribArray(L),S[L]=0)}function y(_,S,L,D,F,G,N){N===!0?s.vertexAttribIPointer(_,S,L,F,G):s.vertexAttribPointer(_,S,L,D,F,G)}function M(_,S,L,D){x();let F=D.attributes,G=L.getAttributes(),N=S.defaultAttributeValues;for(let q in G){let H=G[q];if(H.location>=0){let rt=F[q];if(rt===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){let lt=rt.normalized,ut=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;let Wt=Ft.buffer,V=Ft.type,j=Ft.bytesPerElement,gt=V===s.INT||V===s.UNSIGNED_INT||rt.gpuType===Cc;if(rt.isInterleavedBufferAttribute){let ot=rt.data,Pt=ot.stride,Ut=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)m(H.location+Bt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)p(H.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let Bt=0;Bt<H.locationSize;Bt++)y(H.location+Bt,ut/H.locationSize,V,lt,Pt*j,(Ut+ut/H.locationSize*Bt)*j,gt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot,rt.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<H.locationSize;ot++)p(H.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let ot=0;ot<H.locationSize;ot++)y(H.location+ot,ut/H.locationSize,V,lt,ut*j,ut/H.locationSize*ot*j,gt)}}else if(N!==void 0){let lt=N[q];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(H.location,lt);break;case 3:s.vertexAttrib3fv(H.location,lt);break;case 4:s.vertexAttrib4fv(H.location,lt);break;default:s.vertexAttrib1fv(H.location,lt)}}}}v()}function I(){C();for(let _ in i){let S=i[_];for(let L in S){let D=S[L];for(let F in D)c(D[F].object),delete D[F];delete S[L]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;let S=i[_.id];for(let L in S){let D=S[L];for(let F in D)c(D[F].object),delete D[F];delete S[L]}delete i[_.id]}function w(_){for(let S in i){let L=i[S];if(L[_.id]===void 0)continue;let D=L[_.id];for(let F in D)c(D[F].object),delete D[F];delete L[_.id]}}function C(){U(),a=!0,r!==n&&(r=n,h(r.object))}function U(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function L0(s,t,e){let i;function n(h){i=h}function r(h,c){s.drawArrays(i,h,c),e.update(c,i,1)}function a(h,c,d){d!==0&&(s.drawArraysInstanced(i,h,c,d),e.update(c,i,d))}function o(h,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];e.update(f,i,1)}function l(h,c,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)a(h[g],c[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=c[x];for(let x=0;x<u.length;x++)e.update(g,i,u[x])}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function U0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){return!(w!==_i&&i.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let C=w===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ki&&i.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ai&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:I,maxSamples:E}}function D0(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Oi,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!n||g===null||g.length===0||r&&!p)r?c(null):h();else{let v=r?0:i,y=v*4,M=m.clippingState||null;l.value=M,M=c(g,u,y,f);for(let I=0;I!==y;++I)M[I]=e[I];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=f;y!==x;++y,M+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function N0(s){let t=new WeakMap;function e(a,o){return o===cl?a.mapping=os:o===hl&&(a.mapping=ls),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===cl||o===hl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new Ks(l.height);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",n),e(h.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ds=class extends ca{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,Oh=[.125,.215,.35,.446,.526,.582],Sn=20,Vo=new ds,Hh=new et,Go=null,Wo=0,Xo=0,qo=!1,_n=(1+Math.sqrt(5))/2,Jn=1/_n,kh=[new b(-_n,Jn,0),new b(_n,Jn,0),new b(-Jn,0,_n),new b(Jn,0,_n),new b(0,_n,-Jn),new b(0,_n,Jn),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Go,Wo,Xo),this._renderer.xr.enabled=qo,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:ii,format:_i,colorSpace:on,depthBuffer:!1},n=Vh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(r)),this._blurMaterial=B0(r,t,e)}return n}_compileMaterial(t){let e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Vo)}_sceneToCubeUV(t,e,i,n){let o=new ze(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(Hh),c.toneMapping=nn,c.autoClear=!1;let f=new Dt({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new ct(new ee,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Hh),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));let y=this._cubeSize;Nr(n,v*y,m>2?y:0,y,y),c.setRenderTarget(n),x&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===os||t.mapping===ls;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Nr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Vo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kh[(n-r-1)%kh.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,d=new ct(this._lodPlanes[n],h),u=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Sn-1),x=r/g,p=isFinite(r)?1+Math.floor(c*x):Sn;p>Sn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Sn}`);let m=[],v=0;for(let w=0;w<Sn;++w){let C=w/x,U=Math.exp(-C*C/2);m.push(U),w===0?v+=U:w<p&&(v+=2*U)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;let M=this._sizeLods[n],I=3*M*(n>y-ts?n-y+ts:0),E=4*(this._cubeSize-M);Nr(e,I,E,3*M,2*M),l.setRenderTarget(e),l.render(d,Vo)}};function F0(s){let t=[],e=[],i=[],n=s,r=s-ts+1+Oh.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-ts?l=Oh[a-s+ts-1]:a===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),y=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let E=0;E<f;E++){let w=E%3*2/3-1,C=E>2?0:-1,U=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(U,x*g*E),y.set(u,p*g*E);let _=[E,E,E,E,E,E];M.set(_,m*g*E)}let I=new Kt;I.setAttribute("position",new he(v,x)),I.setAttribute("uv",new he(y,p)),I.setAttribute("faceIndex",new he(M,m)),t.push(I),n>ts&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vh(s,t,e){let i=new He(s,t,e);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function B0(s,t,e){let i=new Float32Array(Sn),n=new b(0,1,0);return new ue({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Gh(){return new ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Wh(){return new ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function z0(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===cl||l===hl,c=l===os||l===ls;if(h||c){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new fs(s)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return h&&f&&f.height>0||c&&f&&n(f)?(e===null&&(e=new fs(s)),d=h?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function n(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function O0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Jr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function H0(s,t,e,i){let n={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}u.removeEventListener("dispose",a),delete n[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function h(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,M=v.length;y<M;y+=3){let I=v[y+0],E=v[y+1],w=v[y+2];u.push(I,E,E,w,w,I)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,M=v.length/3-1;y<M;y+=3){let I=y+0,E=y+1,w=y+2;u.push(I,E,E,w,w,I)}}else return;let p=new(zu(u)?la:oa)(u,1);p.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function c(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function k0(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(i,f,r,u*a),e.update(f,i,1)}function h(u,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,u*a,g),e.update(f,i,g))}function c(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function d(u,f,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)h(u[m]/a,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,x,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v];for(let v=0;v<x.length;v++)e.update(m,i,x[v])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function V0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function G0(s,t,e){let i=new WeakMap,n=new ce;function r(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=i.get(o);if(u===void 0||u.count!==d){let U=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=o.attributes.position.count*y,I=1;M>t.maxTextureSize&&(I=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*I*4*d),w=new ra(E,M,I,d);w.type=Ai,w.needsUpdate=!0;let C=y*4;for(let _=0;_<d;_++){let S=p[_],L=m[_],D=v[_],F=M*I*4*_;for(let G=0;G<S.count;G++){let N=G*C;f===!0&&(n.fromBufferAttribute(S,G),E[F+N+0]=n.x,E[F+N+1]=n.y,E[F+N+2]=n.z,E[F+N+3]=0),g===!0&&(n.fromBufferAttribute(L,G),E[F+N+4]=n.x,E[F+N+5]=n.y,E[F+N+6]=n.z,E[F+N+7]=0),x===!0&&(n.fromBufferAttribute(D,G),E[F+N+8]=n.x,E[F+N+9]=n.y,E[F+N+10]=n.z,E[F+N+11]=D.itemSize===4?n.w:1)}}u={count:d,texture:w,size:new tt(M,I)},i.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function W0(s,t,e,i){let n=new WeakMap;function r(l){let h=i.render.frame,c=l.geometry,d=t.get(l,c);if(n.get(d)!==h&&(t.update(d),n.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;n.get(u)!==h&&(u.update(),n.set(u,h))}return d}function a(){n=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var ua=class extends ei{constructor(t,e,i,n,r,a,o,l,h,c=ns){if(c!==ns&&c!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ns&&(i=An),i===void 0&&c===hs&&(i=cs),super(null,n,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vu=new ei,Xh=new ua(1,1),Gu=new ra,Wu=new kl,Xu=new ha,qh=[],Yh=[],$h=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);function _s(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=qh[n];if(r===void 0&&(r=new Float32Array(n),qh[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Le(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ua(s,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function X0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function $0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function Z0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,i))return;Kh.set(i),s.uniformMatrix2fv(this.addr,!1,Kh),Ue(e,i)}}function K0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,i))return;Zh.set(i),s.uniformMatrix3fv(this.addr,!1,Zh),Ue(e,i)}}function J0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,i))return;$h.set(i),s.uniformMatrix4fv(this.addr,!1,$h),Ue(e,i)}}function Q0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function ig(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function ag(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Xh.compareFunction=Bu,r=Xh):r=Vu,e.setTexture2D(t||r,n)}function og(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Wu,n)}function lg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Xu,n)}function cg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Gu,n)}function hg(s){switch(s){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return $0;case 35674:return Z0;case 35675:return K0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return j0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ig;case 36294:return ng;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(s,t){s.uniform1fv(this.addr,t)}function dg(s,t){let e=_s(t,this.size,2);s.uniform2fv(this.addr,e)}function fg(s,t){let e=_s(t,this.size,3);s.uniform3fv(this.addr,e)}function pg(s,t){let e=_s(t,this.size,4);s.uniform4fv(this.addr,e)}function mg(s,t){let e=_s(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function gg(s,t){let e=_s(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function xg(s,t){let e=_s(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yg(s,t){s.uniform1iv(this.addr,t)}function vg(s,t){s.uniform2iv(this.addr,t)}function _g(s,t){s.uniform3iv(this.addr,t)}function Mg(s,t){s.uniform4iv(this.addr,t)}function Eg(s,t){s.uniform1uiv(this.addr,t)}function Sg(s,t){s.uniform2uiv(this.addr,t)}function bg(s,t){s.uniform3uiv(this.addr,t)}function wg(s,t){s.uniform4uiv(this.addr,t)}function Tg(s,t,e){let i=this.cache,n=t.length,r=Ua(e,n);Le(i,r)||(s.uniform1iv(this.addr,r),Ue(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Vu,r[a])}function Ag(s,t,e){let i=this.cache,n=t.length,r=Ua(e,n);Le(i,r)||(s.uniform1iv(this.addr,r),Ue(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Wu,r[a])}function Rg(s,t,e){let i=this.cache,n=t.length,r=Ua(e,n);Le(i,r)||(s.uniform1iv(this.addr,r),Ue(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Xu,r[a])}function Cg(s,t,e){let i=this.cache,n=t.length,r=Ua(e,n);Le(i,r)||(s.uniform1iv(this.addr,r),Ue(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Gu,r[a])}function Pg(s){switch(s){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return vg;case 35668:case 35672:return _g;case 35669:case 35673:return Mg;case 5125:return Eg;case 36294:return Sg;case 36295:return bg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}var Vl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}},Gl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}},Wl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},Yo=/(\w+)(\])?(\[|\.)?/g;function Jh(s,t){s.seq.push(t),s.map[t.id]=t}function Ig(s,t,e){let i=s.name,n=i.length;for(Yo.lastIndex=0;;){let r=Yo.exec(i),a=Yo.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===n){Jh(e,h===void 0?new Vl(o,s,t):new Gl(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Wl(o),Jh(e,d)),e=d}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);Ig(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Qh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Lg=37297,Ug=0;function Dg(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Ng(s){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s),i;switch(t===e?i="":t===ea&&e===ta?i="LinearDisplayP3ToLinearSRGB":t===ta&&e===ea&&(i="LinearSRGBToLinearDisplayP3"),s){case on:case La:return[i,"LinearTransferOETF"];case Ze:case Fc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function jh(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Dg(s.getShaderSource(t),a)}else return n}function Fg(s,t){let e=Ng(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Bg(s,t){let e;switch(t){case bc:e="Linear";break;case wc:e="Reinhard";break;case Tc:e="Cineon";break;case lr:e="ACESFilmic";break;case Ac:e="AgX";break;case Rc:e="Neutral";break;case Qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fr=new b;function zg(){te.getLuminanceCoefficients(Fr);let s=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Hg(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kg(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Os(s){return s!==""}function tu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(s){return s.replace(Vg,Wg)}var Gg=new Map;function Wg(s,t){let e=Xt[t];if(e===void 0){let i=Gg.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}var Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(s){return s.replace(Xg,qg)}function qg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function nu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Yg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function $g(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case os:case ls:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function Kg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wu:t="ENVMAP_BLENDING_MULTIPLY";break;case Kd:t="ENVMAP_BLENDING_MIX";break;case Jd:t="ENVMAP_BLENDING_ADD";break}return t}function Jg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Qg(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Yg(e),h=$g(e),c=Zg(e),d=Kg(e),u=Jg(e),f=Og(e),g=Hg(r),x=n.createProgram(),p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`)):(p=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),m=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==nn?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=Xl(a),a=tu(a,e),a=eu(a,e),o=Xl(o),o=tu(o,e),o=eu(o,e),a=iu(a),o=iu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+p+a,M=v+m+o,I=Qh(n,n.VERTEX_SHADER,y),E=Qh(n,n.FRAGMENT_SHADER,M);n.attachShader(x,I),n.attachShader(x,E),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function w(S){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(x).trim(),D=n.getShaderInfoLog(I).trim(),F=n.getShaderInfoLog(E).trim(),G=!0,N=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,I,E);else{let q=jh(n,I,"vertex"),H=jh(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+L+`
`+q+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||F==="")&&(N=!1);N&&(S.diagnostics={runnable:G,programLog:L,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:m}})}n.deleteShader(I),n.deleteShader(E),C=new rs(n,x),U=kg(n,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let U;this.getAttributes=function(){return U===void 0&&w(this),U};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(x,Lg)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=E,this}var jg=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Yl(t),e.set(t,i)),i}},Yl=class{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}};function tx(s,t,e,i,n,r,a){let o=new aa,l=new ql,h=new Set,c=[],d=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,f=n.vertexTextures,g=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return h.add(_),_===0?"uv":`uv${_}`}function m(_,S,L,D,F){let G=D.fog,N=F.geometry,q=_.isMeshStandardMaterial?D.environment:null,H=(_.isMeshStandardMaterial?e:t).get(_.envMap||q),rt=H&&H.mapping===Ia?H.image.height:null,lt=x[_.type];_.precision!==null&&(g=n.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ut=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ft=ut!==void 0?ut.length:0,Wt=0;N.morphAttributes.position!==void 0&&(Wt=1),N.morphAttributes.normal!==void 0&&(Wt=2),N.morphAttributes.color!==void 0&&(Wt=3);let V,j,gt,ot;if(lt){let je=Ti[lt];V=je.vertexShader,j=je.fragmentShader}else V=_.vertexShader,j=_.fragmentShader,l.update(_),gt=l.getVertexShaderID(_),ot=l.getFragmentShaderID(_);let Pt=s.getRenderTarget(),Ut=F.isInstancedMesh===!0,Bt=F.isBatchedMesh===!0,Vt=!!_.map,K=!!_.matcap,P=!!H,dt=!!_.aoMap,ht=!!_.lightMap,nt=!!_.bumpMap,ft=!!_.normalMap,It=!!_.displacementMap,vt=!!_.emissiveMap,R=!!_.metalnessMap,T=!!_.roughnessMap,k=_.anisotropy>0,$=_.clearcoat>0,J=_.dispersion>0,Z=_.iridescence>0,Tt=_.sheen>0,pt=_.transmission>0,Et=k&&!!_.anisotropyMap,$t=$&&!!_.clearcoatMap,st=$&&!!_.clearcoatNormalMap,St=$&&!!_.clearcoatRoughnessMap,Ht=Z&&!!_.iridescenceMap,kt=Z&&!!_.iridescenceThicknessMap,bt=Tt&&!!_.sheenColorMap,Zt=Tt&&!!_.sheenRoughnessMap,Gt=!!_.specularMap,ye=!!_.specularColorMap,B=!!_.specularIntensityMap,_t=pt&&!!_.transmissionMap,Y=pt&&!!_.thicknessMap,Q=!!_.gradientMap,xt=!!_.alphaMap,Mt=_.alphaTest>0,Qt=!!_.alphaHash,Re=!!_.extensions,Qe=nn;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Qe=s.toneMapping);let ne={shaderID:lt,shaderType:_.type,shaderName:_.name,vertexShader:V,fragmentShader:j,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Pt===null?s.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:on,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:K,envMap:P,envMapMode:P&&H.mapping,envMapCubeUVHeight:rt,aoMap:dt,lightMap:ht,bumpMap:nt,normalMap:ft,displacementMap:f&&It,emissiveMap:vt,normalMapObjectSpace:ft&&_.normalMapType===nf,normalMapTangentSpace:ft&&_.normalMapType===Fu,metalnessMap:R,roughnessMap:T,anisotropy:k,anisotropyMap:Et,clearcoat:$,clearcoatMap:$t,clearcoatNormalMap:st,clearcoatRoughnessMap:St,dispersion:J,iridescence:Z,iridescenceMap:Ht,iridescenceThicknessMap:kt,sheen:Tt,sheenColorMap:bt,sheenRoughnessMap:Zt,specularMap:Gt,specularColorMap:ye,specularIntensityMap:B,transmission:pt,transmissionMap:_t,thicknessMap:Y,gradientMap:Q,opaque:_.transparent===!1&&_.blending===is&&_.alphaToCoverage===!1,alphaMap:xt,alphaTest:Mt,alphaHash:Qt,combine:_.combine,mapUv:Vt&&p(_.map.channel),aoMapUv:dt&&p(_.aoMap.channel),lightMapUv:ht&&p(_.lightMap.channel),bumpMapUv:nt&&p(_.bumpMap.channel),normalMapUv:ft&&p(_.normalMap.channel),displacementMapUv:It&&p(_.displacementMap.channel),emissiveMapUv:vt&&p(_.emissiveMap.channel),metalnessMapUv:R&&p(_.metalnessMap.channel),roughnessMapUv:T&&p(_.roughnessMap.channel),anisotropyMapUv:Et&&p(_.anisotropyMap.channel),clearcoatMapUv:$t&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&p(_.sheenRoughnessMap.channel),specularMapUv:Gt&&p(_.specularMap.channel),specularColorMapUv:ye&&p(_.specularColorMap.channel),specularIntensityMapUv:B&&p(_.specularIntensityMap.channel),transmissionMapUv:_t&&p(_.transmissionMap.channel),thicknessMapUv:Y&&p(_.thicknessMap.channel),alphaMapUv:xt&&p(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ft||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Vt||xt),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pe,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Re&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&_.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ne.vertexUv1s=h.has(1),ne.vertexUv2s=h.has(2),ne.vertexUv3s=h.has(3),h.clear(),ne}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(y(S,_),M(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function I(_){let S=x[_.type],L;if(S){let D=Ti[S];L=ln.clone(D.uniforms)}else L=_.uniforms;return L}function E(_,S){let L;for(let D=0,F=c.length;D<F;D++){let G=c[D];if(G.cacheKey===S){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Qg(s,S,_,r),c.push(L)),L}function w(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),_.destroy()}}function C(_){l.remove(_)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:I,acquireProgram:E,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:U}}function ex(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function ix(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function su(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ru(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d,u,f,g,x,p){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},s[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=p),t++,m}function o(d,u,f,g,x,p){let m=a(d,u,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(d,u,f,g,x,p){let m=a(d,u,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function h(d,u){e.length>1&&e.sort(d||ix),i.length>1&&i.sort(u||su),n.length>1&&n.sort(u||su)}function c(){for(let d=t,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:c,sort:h}}function nx(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new ru,s.set(i,[a])):n>=r.length?(a=new ru,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function sx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new et};break;case"SpotLight":e={position:new b,direction:new b,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new et,groundColor:new et};break;case"RectAreaLight":e={color:new et,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function rx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ax=0;function ox(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lx(s){let t=new sx,e=rx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new b);let n=new b,r=new jt,a=new jt;function o(h){let c=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,y=0,M=0,I=0,E=0,w=0;h.sort(ox);for(let U=0,_=h.length;U<_;U++){let S=h[U],L=S.color,D=S.intensity,F=S.distance,G=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=L.r*D,d+=L.g*D,u+=L.b*D;else if(S.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(S.sh.coefficients[N],D);w++}else if(S.isDirectionalLight){let N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let q=S.shadow,H=e.get(S);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=S.shadow.matrix,v++}i.directional[f]=N,f++}else if(S.isSpotLight){let N=t.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(L).multiplyScalar(D),N.distance=F,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,i.spot[x]=N;let q=S.shadow;if(S.map&&(i.spotLightMap[I]=S.map,I++,q.updateMatrices(S),S.castShadow&&E++),i.spotLightMatrix[x]=q.matrix,S.castShadow){let H=e.get(S);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=G,M++}x++}else if(S.isRectAreaLight){let N=t.get(S);N.color.copy(L).multiplyScalar(D),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=N,p++}else if(S.isPointLight){let N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){let q=S.shadow,H=e.get(S);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=S.shadow.matrix,y++}i.point[g]=N,g++}else if(S.isHemisphereLight){let N=t.get(S);N.skyColor.copy(S.color).multiplyScalar(D),N.groundColor.copy(S.groundColor).multiplyScalar(D),i.hemi[m]=N,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==M||C.numSpotMaps!==I||C.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+I-E,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=x,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=M,C.numSpotMaps=I,C.numLightProbes=w,i.version=ax++)}function l(h,c){let d=0,u=0,f=0,g=0,x=0,p=c.matrixWorldInverse;for(let m=0,v=h.length;m<v;m++){let y=h[m];if(y.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),d++}else if(y.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function au(s){let t=new lx(s),e=[],i=[];function n(c){h.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function a(c){i.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cx(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new au(s),t.set(n,[o])):r>=a.length?(o=new au(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var $l=class extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function dx(s,t,e){let i=new Js,n=new tt,r=new tt,a=new ce,o=new $l({depthPacking:ef}),l=new Zl,h={},c=e.maxTextureSize,d={[sn]:Ge,[Ge]:sn,[Pe]:Pe},u=new ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ct(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let m=this.type;this.render=function(E,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let U=s.getRenderTarget(),_=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ri),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=m!==zi&&this.type===zi,F=m===zi&&this.type!==zi;for(let G=0,N=E.length;G<N;G++){let q=E[G],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let rt=H.getFrameExtents();if(n.multiply(rt),r.copy(H.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/rt.x),n.x=r.x*rt.x,H.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/rt.y),n.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||D===!0||F===!0){let ut=this.type!==zi?{minFilter:ti,magFilter:ti}:{};H.map!==null&&H.map.dispose(),H.map=new He(n.x,n.y,ut),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let lt=H.getViewportCount();for(let ut=0;ut<lt;ut++){let Ft=H.getViewport(ut);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),L.viewport(a),H.updateMatrices(q,ut),i=H.getFrustum(),M(w,C,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===zi&&v(H,C),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(U,_,S)};function v(E,w){let C=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new He(n.x,n.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,C,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,C,f,x,null)}function y(E,w,C,U){let _=null,S=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)_=S;else if(_=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let L=_.uuid,D=w.uuid,F=h[L];F===void 0&&(F={},h[L]=F);let G=F[D];G===void 0&&(G=_.clone(),F[D]=G,w.addEventListener("dispose",I)),_=G}if(_.visible=w.visible,_.wireframe=w.wireframe,U===zi?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:d[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let L=s.properties.get(_);L.light=C}return _}function M(E,w,C,U,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===zi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let D=t.update(E),F=E.material;if(Array.isArray(F)){let G=D.groups;for(let N=0,q=G.length;N<q;N++){let H=G[N],rt=F[H.materialIndex];if(rt&&rt.visible){let lt=y(E,rt,U,_);E.onBeforeShadow(s,E,w,C,D,lt,H),s.renderBufferDirect(C,null,D,lt,E,H),E.onAfterShadow(s,E,w,C,D,lt,H)}}}else if(F.visible){let G=y(E,F,U,_);E.onBeforeShadow(s,E,w,C,D,G,null),s.renderBufferDirect(C,null,D,G,E,null),E.onAfterShadow(s,E,w,C,D,G,null)}}let L=E.children;for(let D=0,F=L.length;D<F;D++)M(L[D],w,C,U,_)}function I(E){E.target.removeEventListener("dispose",I);for(let C in h){let U=h[C],_=E.target.uuid;_ in U&&(U[_].dispose(),delete U[_])}}}var fx={[il]:nl,[sl]:ol,[rl]:ll,[as]:al,[nl]:il,[ol]:sl,[ll]:rl,[al]:as};function px(s){function t(){let B=!1,_t=new ce,Y=null,Q=new ce(0,0,0,0);return{setMask:function(xt){Y!==xt&&!B&&(s.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){B=xt},setClear:function(xt,Mt,Qt,Re,Qe){Qe===!0&&(xt*=Re,Mt*=Re,Qt*=Re),_t.set(xt,Mt,Qt,Re),Q.equals(_t)===!1&&(s.clearColor(xt,Mt,Qt,Re),Q.copy(_t))},reset:function(){B=!1,Y=null,Q.set(-1,0,0,0)}}}function e(){let B=!1,_t=!1,Y=null,Q=null,xt=null;return{setReversed:function(Mt){_t=Mt},setTest:function(Mt){Mt?gt(s.DEPTH_TEST):ot(s.DEPTH_TEST)},setMask:function(Mt){Y!==Mt&&!B&&(s.depthMask(Mt),Y=Mt)},setFunc:function(Mt){if(_t&&(Mt=fx[Mt]),Q!==Mt){switch(Mt){case il:s.depthFunc(s.NEVER);break;case nl:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case al:s.depthFunc(s.GEQUAL);break;case ol:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){xt!==Mt&&(s.clearDepth(Mt),xt=Mt)},reset:function(){B=!1,Y=null,Q=null,xt=null}}}function i(){let B=!1,_t=null,Y=null,Q=null,xt=null,Mt=null,Qt=null,Re=null,Qe=null;return{setTest:function(ne){B||(ne?gt(s.STENCIL_TEST):ot(s.STENCIL_TEST))},setMask:function(ne){_t!==ne&&!B&&(s.stencilMask(ne),_t=ne)},setFunc:function(ne,je,Li){(Y!==ne||Q!==je||xt!==Li)&&(s.stencilFunc(ne,je,Li),Y=ne,Q=je,xt=Li)},setOp:function(ne,je,Li){(Mt!==ne||Qt!==je||Re!==Li)&&(s.stencilOp(ne,je,Li),Mt=ne,Qt=je,Re=Li)},setLocked:function(ne){B=ne},setClear:function(ne){Qe!==ne&&(s.clearStencil(ne),Qe=ne)},reset:function(){B=!1,_t=null,Y=null,Q=null,xt=null,Mt=null,Qt=null,Re=null,Qe=null}}}let n=new t,r=new e,a=new i,o=new WeakMap,l=new WeakMap,h={},c={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,v=null,y=null,M=null,I=null,E=new et(0,0,0),w=0,C=!1,U=null,_=null,S=null,L=null,D=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,N=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=N>=1):q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=N>=2);let H=null,rt={},lt=s.getParameter(s.SCISSOR_BOX),ut=s.getParameter(s.VIEWPORT),Ft=new ce().fromArray(lt),Wt=new ce().fromArray(ut);function V(B,_t,Y,Q){let xt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(B,Mt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<Y;Qt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(_t+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return Mt}let j={};j[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),gt(s.DEPTH_TEST),r.setFunc(as),ht(!1),nt(dh),gt(s.CULL_FACE),P(Ri);function gt(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function ot(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Pt(B,_t){return c[B]!==_t?(s.bindFramebuffer(B,_t),c[B]=_t,B===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=_t),B===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function Ut(B,_t){let Y=u,Q=!1;if(B){Y=d.get(_t),Y===void 0&&(Y=[],d.set(_t,Y));let xt=B.textures;if(Y.length!==xt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Qt=xt.length;Mt<Qt;Mt++)Y[Mt]=s.COLOR_ATTACHMENT0+Mt;Y.length=xt.length,Q=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Y)}function Bt(B){return f!==B?(s.useProgram(B),f=B,!0):!1}let Vt={[Mn]:s.FUNC_ADD,[Ud]:s.FUNC_SUBTRACT,[Dd]:s.FUNC_REVERSE_SUBTRACT};Vt[Nd]=s.MIN,Vt[Fd]=s.MAX;let K={[Bd]:s.ZERO,[zd]:s.ONE,[Od]:s.SRC_COLOR,[tl]:s.SRC_ALPHA,[Xd]:s.SRC_ALPHA_SATURATE,[Gd]:s.DST_COLOR,[kd]:s.DST_ALPHA,[Hd]:s.ONE_MINUS_SRC_COLOR,[el]:s.ONE_MINUS_SRC_ALPHA,[Wd]:s.ONE_MINUS_DST_COLOR,[Vd]:s.ONE_MINUS_DST_ALPHA,[qd]:s.CONSTANT_COLOR,[Yd]:s.ONE_MINUS_CONSTANT_COLOR,[$d]:s.CONSTANT_ALPHA,[Zd]:s.ONE_MINUS_CONSTANT_ALPHA};function P(B,_t,Y,Q,xt,Mt,Qt,Re,Qe,ne){if(B===Ri){g===!0&&(ot(s.BLEND),g=!1);return}if(g===!1&&(gt(s.BLEND),g=!0),B!==Ld){if(B!==x||ne!==C){if((p!==Mn||y!==Mn)&&(s.blendEquation(s.FUNC_ADD),p=Mn,y=Mn),ne)switch(B){case is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ge:s.blendFunc(s.ONE,s.ONE);break;case fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ph:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ge:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ph:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,v=null,M=null,I=null,E.set(0,0,0),w=0,x=B,C=ne}return}xt=xt||_t,Mt=Mt||Y,Qt=Qt||Q,(_t!==p||xt!==y)&&(s.blendEquationSeparate(Vt[_t],Vt[xt]),p=_t,y=xt),(Y!==m||Q!==v||Mt!==M||Qt!==I)&&(s.blendFuncSeparate(K[Y],K[Q],K[Mt],K[Qt]),m=Y,v=Q,M=Mt,I=Qt),(Re.equals(E)===!1||Qe!==w)&&(s.blendColor(Re.r,Re.g,Re.b,Qe),E.copy(Re),w=Qe),x=B,C=!1}function dt(B,_t){B.side===Pe?ot(s.CULL_FACE):gt(s.CULL_FACE);let Y=B.side===Ge;_t&&(Y=!Y),ht(Y),B.blending===is&&B.transparent===!1?P(Ri):P(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),n.setMask(B.colorWrite);let Q=B.stencilWrite;a.setTest(Q),Q&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),It(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(B){U!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),U=B)}function nt(B){B!==Pd?(gt(s.CULL_FACE),B!==_&&(B===dh?s.cullFace(s.BACK):B===Id?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ot(s.CULL_FACE),_=B}function ft(B){B!==S&&(G&&s.lineWidth(B),S=B)}function It(B,_t,Y){B?(gt(s.POLYGON_OFFSET_FILL),(L!==_t||D!==Y)&&(s.polygonOffset(_t,Y),L=_t,D=Y)):ot(s.POLYGON_OFFSET_FILL)}function vt(B){B?gt(s.SCISSOR_TEST):ot(s.SCISSOR_TEST)}function R(B){B===void 0&&(B=s.TEXTURE0+F-1),H!==B&&(s.activeTexture(B),H=B)}function T(B,_t,Y){Y===void 0&&(H===null?Y=s.TEXTURE0+F-1:Y=H);let Q=rt[Y];Q===void 0&&(Q={type:void 0,texture:void 0},rt[Y]=Q),(Q.type!==B||Q.texture!==_t)&&(H!==Y&&(s.activeTexture(Y),H=Y),s.bindTexture(B,_t||j[B]),Q.type=B,Q.texture=_t)}function k(){let B=rt[H];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(B){Ft.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Ft.copy(B))}function bt(B){Wt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Wt.copy(B))}function Zt(B,_t){let Y=l.get(_t);Y===void 0&&(Y=new WeakMap,l.set(_t,Y));let Q=Y.get(B);Q===void 0&&(Q=s.getUniformBlockIndex(_t,B.name),Y.set(B,Q))}function Gt(B,_t){let Q=l.get(_t).get(B);o.get(_t)!==Q&&(s.uniformBlockBinding(_t,Q,B.__bindingPointIndex),o.set(_t,Q))}function ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},H=null,rt={},c={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,v=null,y=null,M=null,I=null,E=new et(0,0,0),w=0,C=!1,U=null,_=null,S=null,L=null,D=null,Ft.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}return{buffers:{color:n,depth:r,stencil:a},enable:gt,disable:ot,bindFramebuffer:Pt,drawBuffers:Ut,useProgram:Bt,setBlending:P,setMaterial:dt,setFlipSided:ht,setCullFace:nt,setLineWidth:ft,setPolygonOffset:It,setScissorTest:vt,activeTexture:R,bindTexture:T,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:St,texImage3D:Ht,updateUBOMapping:Zt,uniformBlockBinding:Gt,texStorage2D:$t,texStorage3D:st,texSubImage2D:Z,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Et,scissor:kt,viewport:bt,reset:ye}}function ou(s,t,e,i){let n=mx(i);switch(e){case Pu:return s*t;case Lu:return s*t;case Uu:return s*t*2;case Lc:return s*t/n.components*n.byteLength;case Uc:return s*t/n.components*n.byteLength;case Du:return s*t*2/n.components*n.byteLength;case Dc:return s*t*2/n.components*n.byteLength;case Iu:return s*t*3/n.components*n.byteLength;case _i:return s*t*4/n.components*n.byteLength;case Nc:return s*t*4/n.components*n.byteLength;case qr:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $r:case Zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:case ml:return Math.max(s,16)*Math.max(t,8)/4;case dl:case pl:return Math.max(s,8)*Math.max(t,8)/2;case gl:case xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Kr:case Ul:case Dl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Nu:case Nl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fl:case Bl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mx(s){switch(s){case ki:case Au:return{byteLength:1,components:1};case qs:case Ru:case ii:return{byteLength:2,components:1};case Pc:case Ic:return{byteLength:2,components:4};case An:case Cc:case Ai:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function gx(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new tt,c=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return f?new OffscreenCanvas(R,T):na("canvas")}function x(R,T,k){let $=1,J=vt(R);if((J.width>k||J.height>k)&&($=k/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor($*J.width),Tt=Math.floor($*J.height);d===void 0&&(d=g(Z,Tt));let pt=T?g(Z,Tt):d;return pt.width=Z,pt.height=Tt,pt.getContext("2d").drawImage(R,0,0,Z,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+Tt+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==ti&&R.minFilter!==vi}function m(R){s.generateMipmap(R)}function v(R,T,k,$,J=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=T;if(T===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),T===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),T===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),T===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),T===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),T===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),T===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),T===s.RGBA){let Tt=J?jr:te.getTransfer($);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=Tt===me?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(R,T){let k;return R?T===null||T===An||T===cs?k=s.DEPTH24_STENCIL8:T===Ai?k=s.DEPTH32F_STENCIL8:T===qs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===An||T===cs?k=s.DEPTH_COMPONENT24:T===Ai?k=s.DEPTH_COMPONENT32F:T===qs&&(k=s.DEPTH_COMPONENT16),k}function M(R,T){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ti&&R.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function I(R){let T=R.target;T.removeEventListener("dispose",I),w(T),T.isVideoTexture&&c.delete(T)}function E(R){let T=R.target;T.removeEventListener("dispose",E),U(T)}function w(R){let T=i.get(R);if(T.__webglInit===void 0)return;let k=R.source,$=u.get(k);if($){let J=$[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(R),Object.keys($).length===0&&u.delete(k)}i.remove(R)}function C(R){let T=i.get(R);s.deleteTexture(T.__webglTexture);let k=R.source,$=u.get(k);delete $[T.__cacheKey],a.memory.textures--}function U(R){let T=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let J=0;J<T.__webglFramebuffer[$].length;J++)s.deleteFramebuffer(T.__webglFramebuffer[$][J]);else s.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)s.deleteFramebuffer(T.__webglFramebuffer[$]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let k=R.textures;for(let $=0,J=k.length;$<J;$++){let Z=i.get(k[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(R)}let _=0;function S(){_=0}function L(){let R=_;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),_+=1,R}function D(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function F(R,T){let k=i.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(k,R,T);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+T)}function G(R,T){let k=i.get(R);if(R.version>0&&k.__version!==R.version){Wt(k,R,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+T)}function N(R,T){let k=i.get(R);if(R.version>0&&k.__version!==R.version){Wt(k,R,T);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+T)}function q(R,T){let k=i.get(R);if(R.version>0&&k.__version!==R.version){V(k,R,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+T)}let H={[Tn]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[ul]:s.MIRRORED_REPEAT},rt={[ti]:s.NEAREST,[jd]:s.NEAREST_MIPMAP_NEAREST,[gr]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[vo]:s.LINEAR_MIPMAP_NEAREST,[wn]:s.LINEAR_MIPMAP_LINEAR},lt={[sf]:s.NEVER,[hf]:s.ALWAYS,[rf]:s.LESS,[Bu]:s.LEQUAL,[af]:s.EQUAL,[cf]:s.GEQUAL,[of]:s.GREATER,[lf]:s.NOTEQUAL};function ut(R,T){if(T.type===Ai&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===vo||T.magFilter===gr||T.magFilter===wn||T.minFilter===vi||T.minFilter===vo||T.minFilter===gr||T.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,H[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,H[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,H[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,rt[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,rt[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,lt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ti||T.minFilter!==gr&&T.minFilter!==wn||T.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ft(R,T){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",I));let $=T.source,J=u.get($);J===void 0&&(J={},u.set($,J));let Z=D(T);if(Z!==R.__cacheKey){J[Z]===void 0&&(J[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[Z].usedTimes++;let Tt=J[R.__cacheKey];Tt!==void 0&&(J[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&C(T)),R.__cacheKey=Z,R.__webglTexture=J[Z].texture}return k}function Wt(R,T,k){let $=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=s.TEXTURE_3D);let J=Ft(R,T),Z=T.source;e.bindTexture($,R.__webglTexture,s.TEXTURE0+k);let Tt=i.get(Z);if(Z.version!==Tt.__version||J===!0){e.activeTexture(s.TEXTURE0+k);let pt=te.getPrimaries(te.workingColorSpace),Et=T.colorSpace===en?null:te.getPrimaries(T.colorSpace),$t=T.colorSpace===en||pt===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let st=x(T.image,!1,n.maxTextureSize);st=It(T,st);let St=r.convert(T.format,T.colorSpace),Ht=r.convert(T.type),kt=v(T.internalFormat,St,Ht,T.colorSpace,T.isVideoTexture);ut($,T);let bt,Zt=T.mipmaps,Gt=T.isVideoTexture!==!0,ye=Tt.__version===void 0||J===!0,B=Z.dataReady,_t=M(T,st);if(T.isDepthTexture)kt=y(T.format===hs,T.type),ye&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,kt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,kt,st.width,st.height,0,St,Ht,null));else if(T.isDataTexture)if(Zt.length>0){Gt&&ye&&e.texStorage2D(s.TEXTURE_2D,_t,kt,Zt[0].width,Zt[0].height);for(let Y=0,Q=Zt.length;Y<Q;Y++)bt=Zt[Y],Gt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,bt.width,bt.height,St,Ht,bt.data):e.texImage2D(s.TEXTURE_2D,Y,kt,bt.width,bt.height,0,St,Ht,bt.data);T.generateMipmaps=!1}else Gt?(ye&&e.texStorage2D(s.TEXTURE_2D,_t,kt,st.width,st.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,St,Ht,st.data)):e.texImage2D(s.TEXTURE_2D,0,kt,st.width,st.height,0,St,Ht,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Gt&&ye&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,kt,Zt[0].width,Zt[0].height,st.depth);for(let Y=0,Q=Zt.length;Y<Q;Y++)if(bt=Zt[Y],T.format!==_i)if(St!==null)if(Gt){if(B)if(T.layerUpdates.size>0){let xt=ou(bt.width,bt.height,T.format,T.type);for(let Mt of T.layerUpdates){let Qt=bt.data.subarray(Mt*xt/bt.data.BYTES_PER_ELEMENT,(Mt+1)*xt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,Mt,bt.width,bt.height,1,St,Qt,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,st.depth,St,bt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,kt,bt.width,bt.height,st.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,st.depth,St,Ht,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,kt,bt.width,bt.height,st.depth,0,St,Ht,bt.data)}else{Gt&&ye&&e.texStorage2D(s.TEXTURE_2D,_t,kt,Zt[0].width,Zt[0].height);for(let Y=0,Q=Zt.length;Y<Q;Y++)bt=Zt[Y],T.format!==_i?St!==null?Gt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,kt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,bt.width,bt.height,St,Ht,bt.data):e.texImage2D(s.TEXTURE_2D,Y,kt,bt.width,bt.height,0,St,Ht,bt.data)}else if(T.isDataArrayTexture)if(Gt){if(ye&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,kt,st.width,st.height,st.depth),B)if(T.layerUpdates.size>0){let Y=ou(st.width,st.height,T.format,T.type);for(let Q of T.layerUpdates){let xt=st.data.subarray(Q*Y/st.data.BYTES_PER_ELEMENT,(Q+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,St,Ht,xt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,St,Ht,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,st.width,st.height,st.depth,0,St,Ht,st.data);else if(T.isData3DTexture)Gt?(ye&&e.texStorage3D(s.TEXTURE_3D,_t,kt,st.width,st.height,st.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,St,Ht,st.data)):e.texImage3D(s.TEXTURE_3D,0,kt,st.width,st.height,st.depth,0,St,Ht,st.data);else if(T.isFramebufferTexture){if(ye)if(Gt)e.texStorage2D(s.TEXTURE_2D,_t,kt,st.width,st.height);else{let Y=st.width,Q=st.height;for(let xt=0;xt<_t;xt++)e.texImage2D(s.TEXTURE_2D,xt,kt,Y,Q,0,St,Ht,null),Y>>=1,Q>>=1}}else if(Zt.length>0){if(Gt&&ye){let Y=vt(Zt[0]);e.texStorage2D(s.TEXTURE_2D,_t,kt,Y.width,Y.height)}for(let Y=0,Q=Zt.length;Y<Q;Y++)bt=Zt[Y],Gt?B&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,St,Ht,bt):e.texImage2D(s.TEXTURE_2D,Y,kt,St,Ht,bt);T.generateMipmaps=!1}else if(Gt){if(ye){let Y=vt(st);e.texStorage2D(s.TEXTURE_2D,_t,kt,Y.width,Y.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Ht,st)}else e.texImage2D(s.TEXTURE_2D,0,kt,St,Ht,st);p(T)&&m($),Tt.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function V(R,T,k){if(T.image.length!==6)return;let $=Ft(R,T),J=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let Z=i.get(J);if(J.version!==Z.__version||$===!0){e.activeTexture(s.TEXTURE0+k);let Tt=te.getPrimaries(te.workingColorSpace),pt=T.colorSpace===en?null:te.getPrimaries(T.colorSpace),Et=T.colorSpace===en||Tt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let $t=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!$t&&!st?St[Q]=x(T.image[Q],!0,n.maxCubemapSize):St[Q]=st?T.image[Q].image:T.image[Q],St[Q]=It(T,St[Q]);let Ht=St[0],kt=r.convert(T.format,T.colorSpace),bt=r.convert(T.type),Zt=v(T.internalFormat,kt,bt,T.colorSpace),Gt=T.isVideoTexture!==!0,ye=Z.__version===void 0||$===!0,B=J.dataReady,_t=M(T,Ht);ut(s.TEXTURE_CUBE_MAP,T);let Y;if($t){Gt&&ye&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Zt,Ht.width,Ht.height);for(let Q=0;Q<6;Q++){Y=St[Q].mipmaps;for(let xt=0;xt<Y.length;xt++){let Mt=Y[xt];T.format!==_i?kt!==null?Gt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,Mt.width,Mt.height,kt,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,Zt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,Mt.width,Mt.height,kt,bt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,Zt,Mt.width,Mt.height,0,kt,bt,Mt.data)}}}else{if(Y=T.mipmaps,Gt&&ye){Y.length>0&&_t++;let Q=vt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Gt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,kt,bt,St[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,St[Q].width,St[Q].height,0,kt,bt,St[Q].data);for(let xt=0;xt<Y.length;xt++){let Qt=Y[xt].image[Q].image;Gt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Qt.width,Qt.height,kt,bt,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,Zt,Qt.width,Qt.height,0,kt,bt,Qt.data)}}else{Gt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,kt,bt,St[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,kt,bt,St[Q]);for(let xt=0;xt<Y.length;xt++){let Mt=Y[xt];Gt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,kt,bt,Mt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,Zt,kt,bt,Mt.image[Q])}}}p(T)&&m(s.TEXTURE_CUBE_MAP),Z.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function j(R,T,k,$,J,Z){let Tt=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),Et=v(k.internalFormat,Tt,pt,k.colorSpace);if(!i.get(T).__hasExternalTextures){let st=Math.max(1,T.width>>Z),St=Math.max(1,T.height>>Z);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,Et,st,St,T.depth,0,Tt,pt,null):e.texImage2D(J,Z,Et,st,St,0,Tt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),nt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,i.get(k).__webglTexture,0,ht(T)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,J,i.get(k).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(R,T,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){let $=T.depthTexture,J=$&&$.isDepthTexture?$.type:null,Z=y(T.stencilBuffer,J),Tt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=ht(T);nt(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Z,T.width,T.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Z,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Z,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,R)}else{let $=T.textures;for(let J=0;J<$.length;J++){let Z=$[J],Tt=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),Et=v(Z.internalFormat,Tt,pt,Z.colorSpace),$t=ht(T);k&&nt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Et,T.width,T.height):nt(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Et,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Et,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);let $=i.get(T.depthTexture).__webglTexture,J=ht(T);if(T.depthTexture.format===ns)nt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(T.depthTexture.format===hs)nt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pt(R){let T=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){let J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=$}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ot(T.__webglFramebuffer,R)}else if(k){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=s.createRenderbuffer(),gt(T.__webglDepthbuffer[$],R,!1);else{let J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),gt(T.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,T,k){let $=i.get(R);T!==void 0&&j($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Pt(R)}function Bt(R){let T=R.texture,k=i.get(R),$=i.get(T);R.addEventListener("dispose",E);let J=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=T.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let Et=0;Et<T.mipmaps.length;Et++)k.__webglFramebuffer[pt][Et]=s.createFramebuffer()}else k.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)k.__webglFramebuffer[pt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let pt=0,Et=J.length;pt<Et;pt++){let $t=i.get(J[pt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&nt(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<J.length;pt++){let Et=J[pt];k.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);let $t=r.convert(Et.format,Et.colorSpace),st=r.convert(Et.type),St=v(Et.internalFormat,$t,st,Et.colorSpace,R.isXRRenderTarget===!0),Ht=ht(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,St,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ut(s.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)j(k.__webglFramebuffer[pt][Et],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et);else j(k.__webglFramebuffer[pt],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(T)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,Et=J.length;pt<Et;pt++){let $t=J[pt],st=i.get($t);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),ut(s.TEXTURE_2D,$t),j(k.__webglFramebuffer,R,$t,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),p($t)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,$.__webglTexture),ut(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)j(k.__webglFramebuffer[Et],R,T,s.COLOR_ATTACHMENT0,pt,Et);else j(k.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,pt,0);p(T)&&m(pt),e.unbindTexture()}R.depthBuffer&&Pt(R)}function Vt(R){let T=R.textures;for(let k=0,$=T.length;k<$;k++){let J=T[k];if(p(J)){let Z=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Tt=i.get(J).__webglTexture;e.bindTexture(Z,Tt),m(Z),e.unbindTexture()}}}let K=[],P=[];function dt(R){if(R.samples>0){if(nt(R)===!1){let T=R.textures,k=R.width,$=R.height,J=s.COLOR_BUFFER_BIT,Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=i.get(R),pt=T.length>1;if(pt)for(let Et=0;Et<T.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Et=0;Et<T.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);let $t=i.get(T[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,J,s.NEAREST),l===!0&&(K.length=0,P.length=0,K.push(s.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.resolveDepthBuffer===!1&&(K.push(Z),P.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Et=0;Et<T.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);let $t=i.get(T[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ht(R){return Math.min(n.maxSamples,R.samples)}function nt(R){let T=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ft(R){let T=a.render.frame;c.get(R)!==T&&(c.set(R,T),R.update())}function It(R,T){let k=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==on&&k!==en&&(te.getTransfer(k)===me?($!==_i||J!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=L,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=G,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=Ut,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=nt}function xx(s,t){function e(i,n=en){let r,a=te.getTransfer(n);if(i===ki)return s.UNSIGNED_BYTE;if(i===Pc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ic)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Au)return s.BYTE;if(i===Ru)return s.SHORT;if(i===qs)return s.UNSIGNED_SHORT;if(i===Cc)return s.INT;if(i===An)return s.UNSIGNED_INT;if(i===Ai)return s.FLOAT;if(i===ii)return s.HALF_FLOAT;if(i===Pu)return s.ALPHA;if(i===Iu)return s.RGB;if(i===_i)return s.RGBA;if(i===Lu)return s.LUMINANCE;if(i===Uu)return s.LUMINANCE_ALPHA;if(i===ns)return s.DEPTH_COMPONENT;if(i===hs)return s.DEPTH_STENCIL;if(i===Lc)return s.RED;if(i===Uc)return s.RED_INTEGER;if(i===Du)return s.RG;if(i===Dc)return s.RG_INTEGER;if(i===Nc)return s.RGBA_INTEGER;if(i===qr||i===Yr||i===$r||i===Zr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===fl||i===pl||i===ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===xl||i===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===xl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vl||i===_l||i===Ml||i===El||i===Sl||i===bl||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kr||i===Ul||i===Dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kr)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nu||i===Nl||i===Fl||i===Bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Kl=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}},yx={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(h,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ei,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ue({vertexShader:vx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Xe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends rn{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null,x=new Jl,p=e.getContextAttributes(),m=null,v=null,y=[],M=[],I=new tt,E=null,w=new ze;w.layers.enable(1),w.viewport=new ce;let C=new ze;C.layers.enable(2),C.viewport=new ce;let U=[w,C],_=new Kl;_.layers.enable(1),_.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=y[V];return j===void 0&&(j=new Vs,y[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=y[V];return j===void 0&&(j=new Vs,y[V]=j),j.getGripSpace()},this.getHand=function(V){let j=y[V];return j===void 0&&(j=new Vs,y[V]=j),j.getHandSpace()};function D(V){let j=M.indexOf(V.inputSource);if(j===-1)return;let gt=y[j];gt!==void 0&&(gt.update(V.inputSource,V.frame,h||a),gt.dispatchEvent({type:V.type,data:V.inputSource}))}function F(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",G);for(let V=0;V<y.length;V++){let j=M[V];j!==null&&(M[V]=null,y[V].disconnect(j))}S=null,L=null,x.reset(),t.setRenderTarget(m),f=null,u=null,d=null,n=null,v=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",F),n.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),n.renderState.layers===void 0){let j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,j),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new He(f.framebufferWidth,f.framebufferHeight,{format:_i,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,gt=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=p.stencil?hs:ns,gt=p.stencil?cs:An);let Pt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(Pt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new He(u.textureWidth,u.textureHeight,{format:_i,type:ki,depthTexture:new ua(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),Wt.setContext(n),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(V){for(let j=0;j<V.removed.length;j++){let gt=V.removed[j],ot=M.indexOf(gt);ot>=0&&(M[ot]=null,y[ot].disconnect(gt))}for(let j=0;j<V.added.length;j++){let gt=V.added[j],ot=M.indexOf(gt);if(ot===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=M.length){M.push(gt),ot=Ut;break}else if(M[Ut]===null){M[Ut]=gt,ot=Ut;break}if(ot===-1)break}let Pt=y[ot];Pt&&Pt.connect(gt)}}let N=new b,q=new b;function H(V,j,gt){N.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(gt.matrixWorld);let ot=N.distanceTo(q),Pt=j.projectionMatrix.elements,Ut=gt.projectionMatrix.elements,Bt=Pt[14]/(Pt[10]-1),Vt=Pt[14]/(Pt[10]+1),K=(Pt[9]+1)/Pt[5],P=(Pt[9]-1)/Pt[5],dt=(Pt[8]-1)/Pt[0],ht=(Ut[8]+1)/Ut[0],nt=Bt*dt,ft=Bt*ht,It=ot/(-dt+ht),vt=It*-dt;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(vt),V.translateZ(It),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Pt[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let R=Bt+It,T=Vt+It,k=nt-vt,$=ft+(ot-vt),J=K*Vt/T*R,Z=P*Vt/T*R;V.projectionMatrix.makePerspective(k,$,J,Z,R,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function rt(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;let j=V.near,gt=V.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),_.near=C.near=w.near=j,_.far=C.far=w.far=gt,(S!==_.near||L!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,L=_.far);let ot=V.parent,Pt=_.cameras;rt(_,ot);for(let Ut=0;Ut<Pt.length;Ut++)rt(Pt[Ut],ot);Pt.length===2?H(_,w,C):_.projectionMatrix.copy(w.projectionMatrix),lt(V,_,ot)};function lt(V,j,gt){gt===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(gt.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ys*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ut=null;function Ft(V,j){if(c=j.getViewerPose(h||a),g=j,c!==null){let gt=c.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ot=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let Ut=0;Ut<gt.length;Ut++){let Bt=gt[Ut],Vt=null;if(f!==null)Vt=f.getViewport(Bt);else{let P=d.getViewSubImage(u,Bt);Vt=P.viewport,Ut===0&&(t.setRenderTargetTextures(v,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(v))}let K=U[Ut];K===void 0&&(K=new ze,K.layers.enable(Ut),K.viewport=new ce,U[Ut]=K),K.matrix.fromArray(Bt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Bt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Ut===0&&(_.matrix.copy(K.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(K)}let Pt=n.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let Ut=d.getDepthInformation(gt[0]);Ut&&Ut.isValid&&Ut.texture&&x.init(t,Ut,n.renderState)}}for(let gt=0;gt<y.length;gt++){let ot=M[gt],Pt=y[gt];ot!==null&&Pt!==void 0&&Pt.update(ot,j,h||a)}ut&&ut(V,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let Wt=new ku;Wt.setAnimationLoop(Ft),this.setAnimationLoop=function(V){ut=V},this.dispose=function(){}}},vn=new We,Mx=new jt;function Ex(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Hu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,v,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,y):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),y=v.envMap,M=v.envMapRotation;y&&(p.envMap.value=y,vn.copy(M),vn.x*=-1,vn.y*=-1,vn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vn.y*=-1,vn.z*=-1),p.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(vn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sx(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let M=y.program;i.uniformBlockBinding(v,M)}function h(v,y){let M=n[v.id];M===void 0&&(g(v),M=c(v),n[v.id]=M,v.addEventListener("dispose",p));let I=y.program;i.updateUBOMapping(v,I);let E=t.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function c(v){let y=d();v.__bindingPointIndex=y;let M=s.createBuffer(),I=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,I,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let y=n[v.id],M=v.uniforms,I=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,w=M.length;E<w;E++){let C=Array.isArray(M[E])?M[E]:[M[E]];for(let U=0,_=C.length;U<_;U++){let S=C[U];if(f(S,E,U,I)===!0){let L=S.__offset,D=Array.isArray(S.value)?S.value:[S.value],F=0;for(let G=0;G<D.length;G++){let N=D[G],q=x(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,L+F,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,F),F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,M,I){let E=v.value,w=y+"_"+M;if(I[w]===void 0)return typeof E=="number"||typeof E=="boolean"?I[w]=E:I[w]=E.clone(),!0;{let C=I[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return I[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){let y=v.uniforms,M=0,I=16;for(let w=0,C=y.length;w<C;w++){let U=Array.isArray(y[w])?y[w]:[y[w]];for(let _=0,S=U.length;_<S;_++){let L=U[_],D=Array.isArray(L.value)?L.value:[L.value];for(let F=0,G=D.length;F<G;F++){let N=D[F],q=x(N),H=M%I,rt=H%q.boundary,lt=H+rt;M+=rt,lt!==0&&I-lt<q.storage&&(M+=I-lt),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=q.storage}}}let E=M%I;return E>0&&(M+=I-E),v.__size=M,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){let y=v.target;y.removeEventListener("dispose",p);let M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function m(){for(let v in n)s.deleteBuffer(n[v]);a=[],n={},r={}}return{bind:l,update:h,dispose:m}}var da=class{constructor(t={}){let{canvas:e=Af(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=nn,this.toneMappingExposure=1;let y=this,M=!1,I=0,E=0,w=null,C=-1,U=null,_=new ce,S=new ce,L=null,D=new et(0),F=0,G=e.width,N=e.height,q=1,H=null,rt=null,lt=new ce(0,0,G,N),ut=new ce(0,0,G,N),Ft=!1,Wt=new Js,V=!1,j=!1,gt=new jt,ot=new jt,Pt=new b,Ut=new ce,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function K(){return w===null?q:1}let P=i;function dt(A,z){return e.getContext(A,z)}try{let A={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),P===null){let z="webgl2";if(P=dt(z,A),P===null)throw dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,nt,ft,It,vt,R,T,k,$,J,Z,Tt,pt,Et,$t,st,St,Ht,kt,bt,Zt,Gt,ye,B;function _t(){ht=new O0(P),ht.init(),Gt=new xx(P,ht),nt=new U0(P,ht,t,Gt),ft=new px(P),nt.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),It=new V0(P),vt=new ex,R=new gx(P,ht,ft,vt,nt,Gt,It),T=new N0(y),k=new z0(y),$=new Zf(P),ye=new I0(P,$),J=new H0(P,$,It,ye),Z=new W0(P,J,$,It),kt=new G0(P,nt,R),st=new D0(vt),Tt=new tx(y,T,k,ht,nt,ye,st),pt=new Ex(y,vt),Et=new nx,$t=new cx(ht),Ht=new P0(y,T,k,ft,Z,u,l),St=new dx(y,Z,nt),B=new Sx(P,It,nt,ft),bt=new L0(P,ht,It),Zt=new k0(P,ht,It),It.programs=Tt.programs,y.capabilities=nt,y.extensions=ht,y.properties=vt,y.renderLists=Et,y.shadowMap=St,y.state=ft,y.info=It}_t();let Y=new Ql(y,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(G,N,!1))},this.getSize=function(A){return A.set(G,N)},this.setSize=function(A,z,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,N=z,e.width=Math.floor(A*q),e.height=Math.floor(z*q),W===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(G*q,N*q).floor()},this.setDrawingBufferSize=function(A,z,W){G=A,N=z,q=W,e.width=Math.floor(A*W),e.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy(lt)},this.setViewport=function(A,z,W,X){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,z,W,X),ft.viewport(_.copy(lt).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,z,W,X){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,z,W,X),ft.scissor(S.copy(ut).multiplyScalar(q).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(A){ft.setScissorTest(Ft=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,z=!0,W=!0){let X=0;if(A){let O=!1;if(w!==null){let at=w.texture.format;O=at===Nc||at===Dc||at===Uc}if(O){let at=w.texture.type,yt=at===ki||at===An||at===qs||at===cs||at===Pc||at===Ic,wt=Ht.getClearColor(),At=Ht.getClearAlpha(),zt=wt.r,Ot=wt.g,Ct=wt.b;yt?(f[0]=zt,f[1]=Ot,f[2]=Ct,f[3]=At,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=zt,g[1]=Ot,g[2]=Ct,g[3]=At,P.clearBufferiv(P.COLOR,0,g))}else X|=P.COLOR_BUFFER_BIT}z&&(X|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Et.dispose(),$t.dispose(),vt.dispose(),T.dispose(),k.dispose(),Z.dispose(),ye.dispose(),B.dispose(),Tt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",nh),Y.removeEventListener("sessionend",sh),fn.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=It.autoReset,z=St.enabled,W=St.autoUpdate,X=St.needsUpdate,O=St.type;_t(),It.autoReset=A,St.enabled=z,St.autoUpdate=W,St.needsUpdate=X,St.type=O}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qt(A){let z=A.target;z.removeEventListener("dispose",Qt),Re(z)}function Re(A){Qe(A),vt.remove(A)}function Qe(A){let z=vt.get(A).programs;z!==void 0&&(z.forEach(function(W){Tt.releaseProgram(W)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,X,O,at){z===null&&(z=Bt);let yt=O.isMesh&&O.matrixWorld.determinant()<0,wt=bd(A,z,W,X,O);ft.setMaterial(X,yt);let At=W.index,zt=1;if(X.wireframe===!0){if(At=J.getWireframeAttribute(W),At===void 0)return;zt=2}let Ot=W.drawRange,Ct=W.attributes.position,oe=Ot.start*zt,ve=(Ot.start+Ot.count)*zt;at!==null&&(oe=Math.max(oe,at.start*zt),ve=Math.min(ve,(at.start+at.count)*zt)),At!==null?(oe=Math.max(oe,0),ve=Math.min(ve,At.count)):Ct!=null&&(oe=Math.max(oe,0),ve=Math.min(ve,Ct.count));let we=ve-oe;if(we<0||we===1/0)return;ye.setup(O,X,wt,W,At);let si,se=bt;if(At!==null&&(si=$.get(At),se=Zt,se.setIndex(si)),O.isMesh)X.wireframe===!0?(ft.setLineWidth(X.wireframeLinewidth*K()),se.setMode(P.LINES)):se.setMode(P.TRIANGLES);else if(O.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),ft.setLineWidth(Lt*K()),O.isLineSegments?se.setMode(P.LINES):O.isLineLoop?se.setMode(P.LINE_LOOP):se.setMode(P.LINE_STRIP)}else O.isPoints?se.setMode(P.POINTS):O.isSprite&&se.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)se.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Lt=O._multiDrawStarts,Oe=O._multiDrawCounts,re=O._multiDrawCount,mi=At?$.get(At).bytesPerElement:1,Bn=vt.get(X).currentProgram.getUniforms();for(let ri=0;ri<re;ri++)Bn.setValue(P,"_gl_DrawID",ri),se.render(Lt[ri]/mi,Oe[ri])}else if(O.isInstancedMesh)se.renderInstances(oe,we,O.count);else if(W.isInstancedBufferGeometry){let Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Oe=Math.min(W.instanceCount,Lt);se.renderInstances(oe,we,Oe)}else se.render(oe,we)};function ne(A,z,W){A.transparent===!0&&A.side===Pe&&A.forceSinglePass===!1?(A.side=Ge,A.needsUpdate=!0,mr(A,z,W),A.side=sn,A.needsUpdate=!0,mr(A,z,W),A.side=Pe):mr(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),p=$t.get(W),p.init(z),v.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==W&&A.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let X=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let at=O.material;if(at)if(Array.isArray(at))for(let yt=0;yt<at.length;yt++){let wt=at[yt];ne(wt,W,O),X.add(wt)}else ne(at,W,O),X.add(at)}),v.pop(),p=null,X},this.compileAsync=function(A,z,W=null){let X=this.compile(A,z,W);return new Promise(O=>{function at(){if(X.forEach(function(yt){vt.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){O(A);return}setTimeout(at,10)}ht.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let je=null;function Li(A){je&&je(A)}function nh(){fn.stop()}function sh(){fn.start()}let fn=new ku;fn.setAnimationLoop(Li),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(A){je=A,Y.setAnimationLoop(A),A===null?fn.stop():fn.start()},Y.addEventListener("sessionstart",nh),Y.addEventListener("sessionend",sh),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,w),p=$t.get(A,v.length),p.init(z),v.push(p),ot.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Wt.setFromProjectionMatrix(ot),j=this.localClippingEnabled,V=st.init(this.clippingPlanes,j),x=Et.get(A,m.length),x.init(),m.push(x),Y.enabled===!0&&Y.isPresenting===!0){let at=y.xr.getDepthSensingMesh();at!==null&&mo(at,z,-1/0,y.sortObjects)}mo(A,z,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(H,rt),Vt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Vt&&Ht.addToRenderList(x,A),this.info.render.frame++,V===!0&&st.beginShadows();let W=p.state.shadowsArray;St.render(W,A,z),V===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=x.opaque,O=x.transmissive;if(p.setupLights(),z.isArrayCamera){let at=z.cameras;if(O.length>0)for(let yt=0,wt=at.length;yt<wt;yt++){let At=at[yt];ah(X,O,A,At)}Vt&&Ht.render(A);for(let yt=0,wt=at.length;yt<wt;yt++){let At=at[yt];rh(x,A,At,At.viewport)}}else O.length>0&&ah(X,O,A,z),Vt&&Ht.render(A),rh(x,A,z);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(y,A,z),ye.resetDefaultState(),C=-1,U=null,v.pop(),v.length>0?(p=v[v.length-1],V===!0&&st.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function mo(A,z,W,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Wt.intersectsSprite(A)){X&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);let yt=Z.update(A),wt=A.material;wt.visible&&x.push(A,yt,wt,W,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Wt.intersectsObject(A))){let yt=Z.update(A),wt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ut.copy(yt.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(wt)){let At=yt.groups;for(let zt=0,Ot=At.length;zt<Ot;zt++){let Ct=At[zt],oe=wt[Ct.materialIndex];oe&&oe.visible&&x.push(A,yt,oe,W,Ut.z,Ct)}}else wt.visible&&x.push(A,yt,wt,W,Ut.z,null)}}let at=A.children;for(let yt=0,wt=at.length;yt<wt;yt++)mo(at[yt],z,W,X)}function rh(A,z,W,X){let O=A.opaque,at=A.transmissive,yt=A.transparent;p.setupLightsView(W),V===!0&&st.setGlobalState(y.clippingPlanes,W),X&&ft.viewport(_.copy(X)),O.length>0&&pr(O,z,W),at.length>0&&pr(at,z,W),yt.length>0&&pr(yt,z,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ah(A,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new He(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?ii:ki,minFilter:wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let at=p.state.transmissionRenderTarget[X.id],yt=X.viewport||_;at.setSize(yt.z,yt.w);let wt=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(D),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&Ht.render(W);let At=y.toneMapping;y.toneMapping=nn;let zt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),V===!0&&st.setGlobalState(y.clippingPlanes,X),pr(A,W,X),R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Ct=0,oe=z.length;Ct<oe;Ct++){let ve=z[Ct],we=ve.object,si=ve.geometry,se=ve.material,Lt=ve.group;if(se.side===Pe&&we.layers.test(X.layers)){let Oe=se.side;se.side=Ge,se.needsUpdate=!0,oh(we,W,X,si,se,Lt),se.side=Oe,se.needsUpdate=!0,Ot=!0}}Ot===!0&&(R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at))}y.setRenderTarget(wt),y.setClearColor(D,F),zt!==void 0&&(X.viewport=zt),y.toneMapping=At}function pr(A,z,W){let X=z.isScene===!0?z.overrideMaterial:null;for(let O=0,at=A.length;O<at;O++){let yt=A[O],wt=yt.object,At=yt.geometry,zt=X===null?yt.material:X,Ot=yt.group;wt.layers.test(W.layers)&&oh(wt,z,W,At,zt,Ot)}}function oh(A,z,W,X,O,at){A.onBeforeRender(y,z,W,X,O,at),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(y,z,W,X,A,at),O.transparent===!0&&O.side===Pe&&O.forceSinglePass===!1?(O.side=Ge,O.needsUpdate=!0,y.renderBufferDirect(W,z,X,O,A,at),O.side=sn,O.needsUpdate=!0,y.renderBufferDirect(W,z,X,O,A,at),O.side=Pe):y.renderBufferDirect(W,z,X,O,A,at),A.onAfterRender(y,z,W,X,O,at)}function mr(A,z,W){z.isScene!==!0&&(z=Bt);let X=vt.get(A),O=p.state.lights,at=p.state.shadowsArray,yt=O.state.version,wt=Tt.getParameters(A,O.state,at,z,W),At=Tt.getProgramCacheKey(wt),zt=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?k:T).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",Qt),zt=new Map,X.programs=zt);let Ot=zt.get(At);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===yt)return ch(A,wt),Ot}else wt.uniforms=Tt.getUniforms(A),A.onBeforeCompile(wt,y),Ot=Tt.acquireProgram(wt,At),zt.set(At,Ot),X.uniforms=wt.uniforms;let Ct=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=st.uniform),ch(A,wt),X.needsLights=Td(A),X.lightsStateVersion=yt,X.needsLights&&(Ct.ambientLightColor.value=O.state.ambient,Ct.lightProbe.value=O.state.probe,Ct.directionalLights.value=O.state.directional,Ct.directionalLightShadows.value=O.state.directionalShadow,Ct.spotLights.value=O.state.spot,Ct.spotLightShadows.value=O.state.spotShadow,Ct.rectAreaLights.value=O.state.rectArea,Ct.ltc_1.value=O.state.rectAreaLTC1,Ct.ltc_2.value=O.state.rectAreaLTC2,Ct.pointLights.value=O.state.point,Ct.pointLightShadows.value=O.state.pointShadow,Ct.hemisphereLights.value=O.state.hemi,Ct.directionalShadowMap.value=O.state.directionalShadowMap,Ct.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ct.spotShadowMap.value=O.state.spotShadowMap,Ct.spotLightMatrix.value=O.state.spotLightMatrix,Ct.spotLightMap.value=O.state.spotLightMap,Ct.pointShadowMap.value=O.state.pointShadowMap,Ct.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function lh(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=rs.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ch(A,z){let W=vt.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function bd(A,z,W,X,O){z.isScene!==!0&&(z=Bt),R.resetTextureUnits();let at=z.fog,yt=X.isMeshStandardMaterial?z.environment:null,wt=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:on,At=(X.isMeshStandardMaterial?k:T).get(X.envMap||yt),zt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ct=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,ve=!!W.morphAttributes.color,we=nn;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(we=y.toneMapping);let si=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=si!==void 0?si.length:0,Lt=vt.get(X),Oe=p.state.lights;if(V===!0&&(j===!0||A!==U)){let ui=A===U&&X.id===C;st.setState(X,A,ui)}let re=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Oe.state.version||Lt.outputColorSpace!==wt||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==At||X.fog===!0&&Lt.fog!==at||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==zt||Lt.vertexTangents!==Ot||Lt.morphTargets!==Ct||Lt.morphNormals!==oe||Lt.morphColors!==ve||Lt.toneMapping!==we||Lt.morphTargetsCount!==se)&&(re=!0):(re=!0,Lt.__version=X.version);let mi=Lt.currentProgram;re===!0&&(mi=mr(X,z,O));let Bn=!1,ri=!1,go=!1,Ae=mi.getUniforms(),$i=Lt.uniforms;if(ft.useProgram(mi.program)&&(Bn=!0,ri=!0,go=!0),X.id!==C&&(C=X.id,ri=!0),Bn||U!==A){nt.reverseDepthBuffer?(gt.copy(A.projectionMatrix),Cf(gt),Pf(gt),Ae.setValue(P,"projectionMatrix",gt)):Ae.setValue(P,"projectionMatrix",A.projectionMatrix),Ae.setValue(P,"viewMatrix",A.matrixWorldInverse);let ui=Ae.map.cameraPosition;ui!==void 0&&ui.setValue(P,Pt.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&Ae.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ae.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,ri=!0,go=!0)}if(O.isSkinnedMesh){Ae.setOptional(P,O,"bindMatrix"),Ae.setOptional(P,O,"bindMatrixInverse");let ui=O.skeleton;ui&&(ui.boneTexture===null&&ui.computeBoneTexture(),Ae.setValue(P,"boneTexture",ui.boneTexture,R))}O.isBatchedMesh&&(Ae.setOptional(P,O,"batchingTexture"),Ae.setValue(P,"batchingTexture",O._matricesTexture,R),Ae.setOptional(P,O,"batchingIdTexture"),Ae.setValue(P,"batchingIdTexture",O._indirectTexture,R),Ae.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Ae.setValue(P,"batchingColorTexture",O._colorsTexture,R));let xo=W.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0)&&kt.update(O,W,mi),(ri||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,Ae.setValue(P,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($i.envMap.value=At,$i.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&($i.envMapIntensity.value=z.environmentIntensity),ri&&(Ae.setValue(P,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&wd($i,go),at&&X.fog===!0&&pt.refreshFogUniforms($i,at),pt.refreshMaterialUniforms($i,X,q,N,p.state.transmissionRenderTarget[A.id]),rs.upload(P,lh(Lt),$i,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(rs.upload(P,lh(Lt),$i,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ae.setValue(P,"center",O.center),Ae.setValue(P,"modelViewMatrix",O.modelViewMatrix),Ae.setValue(P,"normalMatrix",O.normalMatrix),Ae.setValue(P,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let ui=X.uniformsGroups;for(let yo=0,Ad=ui.length;yo<Ad;yo++){let hh=ui[yo];B.update(hh,mi),B.bind(hh,mi)}}return mi}function wd(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Td(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,W){vt.get(A.texture).__webglTexture=z,vt.get(A.depthTexture).__webglTexture=W;let X=vt.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){let W=vt.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,W=0){w=A,I=z,E=W;let X=!0,O=null,at=!1,yt=!1;if(A){let At=vt.get(A);if(At.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(At.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(At.__hasExternalTextures)R.rebindTextures(A,vt.get(A.texture).__webglTexture,vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ct=A.depthTexture;if(At.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}let zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(yt=!0);let Ot=vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[z])?O=Ot[z][W]:O=Ot[z],at=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?O=vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?O=Ot[W]:O=Ot,_.copy(A.viewport),S.copy(A.scissor),L=A.scissorTest}else _.copy(lt).multiplyScalar(q).floor(),S.copy(ut).multiplyScalar(q).floor(),L=Ft;if(ft.bindFramebuffer(P.FRAMEBUFFER,O)&&X&&ft.drawBuffers(A,O),ft.viewport(_),ft.scissor(S),ft.setScissorTest(L),at){let At=vt.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,At.__webglTexture,W)}else if(yt){let At=vt.get(A.texture),zt=z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,W||0,zt)}C=-1},this.readRenderTargetPixels=function(A,z,W,X,O,at,yt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){ft.bindFramebuffer(P.FRAMEBUFFER,wt);try{let At=A.texture,zt=At.format,Ot=At.type;if(!nt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&W>=0&&W<=A.height-O&&P.readPixels(z,W,X,O,Gt.convert(zt),Gt.convert(Ot),at)}finally{let At=w!==null?vt.get(w).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(A,z,W,X,O,at,yt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){let At=A.texture,zt=At.format,Ot=At.type;if(!nt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-X&&W>=0&&W<=A.height-O){ft.bindFramebuffer(P.FRAMEBUFFER,wt);let Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),P.readPixels(z,W,X,O,Gt.convert(zt),Gt.convert(Ot),0);let oe=w!==null?vt.get(w).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,oe);let ve=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Rf(P,ve,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(Ct),P.deleteSync(ve),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,W=0){A.isTexture!==!0&&(Jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);let X=Math.pow(2,-W),O=Math.floor(A.image.width*X),at=Math.floor(A.image.height*X),yt=z!==null?z.x:0,wt=z!==null?z.y:0;R.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,yt,wt,O,at),ft.unbindTexture()},this.copyTextureToTexture=function(A,z,W=null,X=null,O=0){A.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],z=arguments[2],O=arguments[3]||0,W=null);let at,yt,wt,At,zt,Ot;W!==null?(at=W.max.x-W.min.x,yt=W.max.y-W.min.y,wt=W.min.x,At=W.min.y):(at=A.image.width,yt=A.image.height,wt=0,At=0),X!==null?(zt=X.x,Ot=X.y):(zt=0,Ot=0);let Ct=Gt.convert(z.format),oe=Gt.convert(z.type);R.setTexture2D(z,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);let ve=P.getParameter(P.UNPACK_ROW_LENGTH),we=P.getParameter(P.UNPACK_IMAGE_HEIGHT),si=P.getParameter(P.UNPACK_SKIP_PIXELS),se=P.getParameter(P.UNPACK_SKIP_ROWS),Lt=P.getParameter(P.UNPACK_SKIP_IMAGES),Oe=A.isCompressedTexture?A.mipmaps[O]:A.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Oe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Oe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,zt,Ot,at,yt,Ct,oe,Oe.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,zt,Ot,Oe.width,Oe.height,Ct,Oe.data):P.texSubImage2D(P.TEXTURE_2D,O,zt,Ot,at,yt,Ct,oe,Oe),P.pixelStorei(P.UNPACK_ROW_LENGTH,ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,we),P.pixelStorei(P.UNPACK_SKIP_PIXELS,si),P.pixelStorei(P.UNPACK_SKIP_ROWS,se),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt),O===0&&z.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(A,z,W=null,X=null,O=0){A.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],z=arguments[3],O=arguments[4]||0);let at,yt,wt,At,zt,Ot,Ct,oe,ve,we=A.isCompressedTexture?A.mipmaps[O]:A.image;W!==null?(at=W.max.x-W.min.x,yt=W.max.y-W.min.y,wt=W.max.z-W.min.z,At=W.min.x,zt=W.min.y,Ot=W.min.z):(at=we.width,yt=we.height,wt=we.depth,At=0,zt=0,Ot=0),X!==null?(Ct=X.x,oe=X.y,ve=X.z):(Ct=0,oe=0,ve=0);let si=Gt.convert(z.format),se=Gt.convert(z.type),Lt;if(z.isData3DTexture)R.setTexture3D(z,0),Lt=P.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)R.setTexture2DArray(z,0),Lt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);let Oe=P.getParameter(P.UNPACK_ROW_LENGTH),re=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mi=P.getParameter(P.UNPACK_SKIP_PIXELS),Bn=P.getParameter(P.UNPACK_SKIP_ROWS),ri=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,we.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,we.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,At),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ot),A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Lt,O,Ct,oe,ve,at,yt,wt,si,se,we.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,O,Ct,oe,ve,at,yt,wt,si,we.data):P.texSubImage3D(Lt,O,Ct,oe,ve,at,yt,wt,si,se,we),P.pixelStorei(P.UNPACK_ROW_LENGTH,Oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Bn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ri),O===0&&z.generateMipmaps&&P.generateMipmap(Lt),ft.unbindTexture()},this.initRenderTarget=function(A){vt.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),ft.unbindTexture()},this.resetState=function(){I=0,E=0,w=null,ft.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Fc?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===La?"display-p3":"srgb"}},fa=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ps=class extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var jl=class extends ei{constructor(t=null,e=1,i=1,n,r,a,o,l,h=ti,c=ti,d,u){super(null,a,o,l,h,c,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends he{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qn=new jt,lu=new jt,Br=[],cu=new Vi,bx=new jt,Ns=new ct,Fs=new Gi,an=class extends ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,bx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qn),cu.copy(t.boundingBox).applyMatrix4(Qn),this.boundingBox.union(cu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qn),Fs.copy(t.boundingSphere).applyMatrix4(Qn),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(i),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Qn),lu.multiplyMatrices(i,Qn),Ns.matrixWorld=lu,Ns.raycast(t,Br);for(let a=0,o=Br.length;a<o;a++){let l=Br[a];l.instanceId=r,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new jl(new Float32Array(n*this.count),n,this.count,Lc,Ai));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<i.length;h++)a+=i[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Xi=class extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pa=new b,ma=new b,hu=new jt,Bs=new $s,zr=new Gi,$o=new b,uu=new b,js=class extends le{constructor(t=new Kt,e=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)pa.fromBufferAttribute(e,n-1),ma.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=pa.distanceTo(ma);t.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(n),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;hu.copy(n).invert(),Bs.copy(t.ray).applyMatrix4(hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=h){let m=c.getX(x),v=c.getX(x+1),y=Or(this,t,Bs,l,m,v);y&&e.push(y)}if(this.isLineLoop){let x=c.getX(g-1),p=c.getX(f),m=Or(this,t,Bs,l,x,p);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=h){let m=Or(this,t,Bs,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=Or(this,t,Bs,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Or(s,t,e,i,n,r){let a=s.geometry.attributes.position;if(pa.fromBufferAttribute(a,n),ma.fromBufferAttribute(a,r),e.distanceSqToSegment(pa,ma,$o,uu)>i)return;$o.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo($o);if(!(l<t.near||l>t.far))return{distance:l,point:uu.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var du=new b,fu=new b,ms=class extends js{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)du.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+du.distanceTo(fu);t.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tc=class extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pu=new jt,ec=new $s,Hr=new Gi,kr=new b,ga=class extends le{constructor(t=new Kt,e=new tc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(n),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;pu.copy(n).invert(),ec.copy(t.ray).applyMatrix4(pu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,x=f;g<x;g++){let p=h.getX(g);kr.fromBufferAttribute(d,p),mu(kr,p,l,n,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)kr.fromBufferAttribute(d,g),mu(kr,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mu(s,t,e,i,n,r,a){let o=ec.distanceSqToPoint(s);if(o<e){let l=new b;ec.closestPointToPoint(s,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Rn=class extends ei{constructor(t,e,i,n,r,a,o,l,h){super(t,e,i,n,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),h=i[n]-a,h<0)o=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let c=i[n],u=i[n+1]-c,f=(a-c)/u;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new tt:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new b,n=[],r=[],a=[],o=new b,l=new jt;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new b)}r[0]=new b,a[0]=new b;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Be(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},tr=class extends fi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new tt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ic=class extends tr{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){n(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,d){let u=(a-r)/h-(o-r)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,f*=c,n(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var Vr=new b,Zo=new Oc,Ko=new Oc,Jo=new Oc,er=class extends fi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new b){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=n[(o-1)%r]:(Vr.subVectors(n[0],n[1]).add(n[0]),h=Vr);let d=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r?c=n[(o+2)%r]:(Vr.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(c),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Zo.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,g,x,p),Ko.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,g,x,p),Jo.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,g,x,p)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),Ko.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),Jo.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(Zo.calc(l),Ko.calc(l),Jo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new b().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gu(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function wx(s,t){let e=1-s;return e*e*t}function Tx(s,t){return 2*(1-s)*s*t}function Ax(s,t){return s*s*t}function Gs(s,t,e,i){return wx(s,t)+Tx(s,e)+Ax(s,i)}function Rx(s,t){let e=1-s;return e*e*e*t}function Cx(s,t){let e=1-s;return 3*e*e*s*t}function Px(s,t){return 3*(1-s)*s*s*t}function Ix(s,t){return s*s*s*t}function Ws(s,t,e,i,n){return Rx(s,t)+Cx(s,e)+Px(s,i)+Ix(s,n)}var xa=class extends fi{constructor(t=new tt,e=new tt,i=new tt,n=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new tt){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ws(t,n.x,r.x,a.x,o.x),Ws(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nc=class extends fi{constructor(t=new b,e=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new b){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ws(t,n.x,r.x,a.x,o.x),Ws(t,n.y,r.y,a.y,o.y),Ws(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ya=class extends fi{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends fi{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends fi{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Gs(t,n.x,r.x,a.x),Gs(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends fi{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Gs(t,n.x,r.x,a.x),Gs(t,n.y,r.y,a.y),Gs(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(gu(o,l.x,h.x,c.x,d.x),gu(o,l.y,h.y,c.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new tt().fromArray(n))}return this}},Ea=Object.freeze({__proto__:null,ArcCurve:ic,CatmullRomCurve3:er,CubicBezierCurve:xa,CubicBezierCurve3:nc,EllipseCurve:tr,LineCurve:ya,LineCurve3:sc,QuadraticBezierCurve:va,QuadraticBezierCurve3:_a,SplineCurve:Ma}),rc=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ea[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Ea[n.type]().fromJSON(n))}return this}},ir=class extends rc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ya(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new va(this.currentPoint.clone(),new tt(t,e),new tt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new xa(this.currentPoint.clone(),new tt(t,e),new tt(i,n),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ma(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let h=new tr(t,e,i,n,r,a,o,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ac=class s extends Kt{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Be(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],h=[],c=1/e,d=new b,u=new tt,f=new b,g=new b,x=new b,p=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=e;v++){let y=i+v*c*n,M=Math.sin(y),I=Math.cos(y);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*M,d.y=t[E].y,d.z=t[E].x*I,a.push(d.x,d.y,d.z),u.x=v/e,u.y=E/(t.length-1),o.push(u.x,u.y);let w=l[3*E+0]*M,C=l[3*E+1],U=l[3*E+0]*I;h.push(w,C,U)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let M=y+v*t.length,I=M,E=M+t.length,w=M+t.length+1,C=M+1;r.push(I,E,C),r.push(w,C,E)}this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("uv",new Nt(o,2)),this.setAttribute("normal",new Nt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Sa=class s extends ac{constructor(t=1,e=1,i=4,n=8){let r=new ir;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},gs=class s extends Kt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new b,c=new tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*n;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/t+1)/2,c.y=(a[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(o,3)),this.setAttribute("uv",new Nt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_e=class s extends Kt{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),r=Math.floor(r);let c=[],d=[],u=[],f=[],g=0,x=[],p=i/2,m=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function v(){let M=new b,I=new b,E=0,w=(e-t)/i;for(let C=0;C<=r;C++){let U=[],_=C/r,S=_*(e-t)+t;for(let L=0;L<=n;L++){let D=L/n,F=D*l+o,G=Math.sin(F),N=Math.cos(F);I.x=S*G,I.y=-_*i+p,I.z=S*N,d.push(I.x,I.y,I.z),M.set(G,w,N).normalize(),u.push(M.x,M.y,M.z),f.push(D,1-_),U.push(g++)}x.push(U)}for(let C=0;C<n;C++)for(let U=0;U<r;U++){let _=x[U][C],S=x[U+1][C],L=x[U+1][C+1],D=x[U][C+1];t>0&&(c.push(_,S,D),E+=3),e>0&&(c.push(S,L,D),E+=3)}h.addGroup(m,E,0),m+=E}function y(M){let I=g,E=new tt,w=new b,C=0,U=M===!0?t:e,_=M===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,p*_,0),u.push(0,_,0),f.push(.5,.5),g++;let S=g;for(let L=0;L<=n;L++){let F=L/n*l+o,G=Math.cos(F),N=Math.sin(F);w.x=U*N,w.y=p*_,w.z=U*G,d.push(w.x,w.y,w.z),u.push(0,_,0),E.x=G*.5+.5,E.y=N*.5*_+.5,f.push(E.x,E.y),g++}for(let L=0;L<n;L++){let D=I+L,F=S+L;M===!0?c.push(F,F+1,D):c.push(F+1,F,D),C+=3}h.addGroup(m,C,M===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var oc=class s extends Kt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),h(i),c(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new b,M=new b,I=new b;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],M),f(e[E+2],I),l(y,M,I,v)}function l(v,y,M,I){let E=I+1,w=[];for(let C=0;C<=E;C++){w[C]=[];let U=v.clone().lerp(M,C/E),_=y.clone().lerp(M,C/E),S=E-C;for(let L=0;L<=S;L++)L===0&&C===E?w[C][L]=U:w[C][L]=U.clone().lerp(_,L/S)}for(let C=0;C<E;C++)for(let U=0;U<2*(E-C)-1;U++){let _=Math.floor(U/2);U%2===0?(u(w[C][_+1]),u(w[C+1][_]),u(w[C][_])):(u(w[C][_+1]),u(w[C+1][_+1]),u(w[C+1][_]))}}function h(v){let y=new b;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function c(){let v=new b;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let M=p(v)/2/Math.PI+.5,I=m(v)/Math.PI+.5;a.push(M,1-I)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let y=a[v+0],M=a[v+2],I=a[v+4],E=Math.max(y,M,I),w=Math.min(y,M,I);E>.9&&w<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),I<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,y){let M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){let v=new b,y=new b,M=new b,I=new b,E=new tt,w=new tt,C=new tt;for(let U=0,_=0;U<r.length;U+=9,_+=6){v.set(r[U+0],r[U+1],r[U+2]),y.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),E.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),I.copy(v).add(y).add(M).divideScalar(3);let S=p(I);x(E,_+0,v,S),x(w,_+2,y,S),x(C,_+4,M,S)}}function x(v,y,M,I){I<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=I/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var nr=class extends ir{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new ir().fromJSON(n))}return this}},Lx={triangulate:function(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=qu(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,d,u,f;if(i&&(r=Bx(s,t,r,e)),s.length>80*e){o=h=s[0],l=c=s[1];for(let g=e;g<n;g+=e)d=s[g],u=s[g+1],d<o&&(o=d),u<l&&(l=u),d>h&&(h=d),u>c&&(c=u);f=Math.max(h-o,c-l),f=f!==0?32767/f:0}return sr(r,a,e,o,l,f,0),a}};function qu(s,t,e,i,n){let r,a;if(n===$x(s,t,e,i)>0)for(r=t;r<e;r+=i)a=xu(r,s[r],s[r+1],a);else for(r=e-i;r>=t;r-=i)a=xu(r,s[r],s[r+1],a);return a&&Da(a,a.next)&&(ar(a),a=a.next),a}function Cn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Da(e,e.next)||be(e.prev,e,e.next)===0)){if(ar(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function sr(s,t,e,i,n,r,a){if(!s)return;!a&&r&&Vx(s,i,n,r);let o=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?Dx(s,i,n,r):Ux(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),ar(s),s=h.next,o=h.next;continue}if(s=h,s===o){a?a===1?(s=Nx(Cn(s),t,e),sr(s,t,e,i,n,r,2)):a===2&&Fx(s,t,e,i,n,r):sr(Cn(s),t,e,i,n,r,1);break}}}function Ux(s){let t=s.prev,e=s,i=s.next;if(be(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,h=i.y,c=n<r?n<a?n:a:r<a?r:a,d=o<l?o<h?o:h:l<h?l:h,u=n>r?n>a?n:a:r>a?r:a,f=o>l?o>h?o:h:l>h?l:h,g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=f&&es(n,o,r,l,a,h,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dx(s,t,e,i){let n=s.prev,r=s,a=s.next;if(be(n,r,a)>=0)return!1;let o=n.x,l=r.x,h=a.x,c=n.y,d=r.y,u=a.y,f=o<l?o<h?o:h:l<h?l:h,g=c<d?c<u?c:u:d<u?d:u,x=o>l?o>h?o:h:l>h?l:h,p=c>d?c>u?c:u:d>u?d:u,m=lc(f,g,t,e,i),v=lc(x,p,t,e,i),y=s.prevZ,M=s.nextZ;for(;y&&y.z>=m&&M&&M.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==n&&y!==a&&es(o,c,l,d,h,u,y.x,y.y)&&be(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==a&&es(o,c,l,d,h,u,M.x,M.y)&&be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==n&&y!==a&&es(o,c,l,d,h,u,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==a&&es(o,c,l,d,h,u,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nx(s,t,e){let i=s;do{let n=i.prev,r=i.next.next;!Da(n,r)&&Yu(n,i,i.next,r)&&rr(n,r)&&rr(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ar(i),ar(i.next),i=s=r),i=i.next}while(i!==s);return Cn(i)}function Fx(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xx(a,o)){let l=$u(a,o);a=Cn(a,a.next),l=Cn(l,l.next),sr(a,t,e,i,n,r,0),sr(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Bx(s,t,e,i){let n=[],r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,h=qu(s,o,l,i,!1),h===h.next&&(h.steiner=!0),n.push(Wx(h));for(n.sort(zx),r=0;r<n.length;r++)e=Ox(n[r],e);return e}function zx(s,t){return s.x-t.x}function Ox(s,t){let e=Hx(s,t);if(!e)return t;let i=$u(e,s);return Cn(i,i.next),Cn(e,e.next)}function Hx(s,t){let e=t,i=-1/0,n,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,n=e.x<e.next.x?e:e.next,u===r))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,l=n.x,h=n.y,c=1/0,d;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&es(a<h?r:i,a,l,h,a<h?i:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),rr(e,s)&&(d<c||d===c&&(e.x>n.x||e.x===n.x&&kx(n,e)))&&(n=e,c=d)),e=e.next;while(e!==o);return n}function kx(s,t){return be(s.prev,s,t.prev)<0&&be(t.next,s,s.next)<0}function Vx(s,t,e,i){let n=s;do n.z===0&&(n.z=lc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Gx(n)}function Gx(s){let t,e,i,n,r,a,o,l,h=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,h*=2}while(a>1);return s}function lc(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Wx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function es(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Xx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!qx(s,t)&&(rr(s,t)&&rr(t,s)&&Yx(s,t)&&(be(s.prev,s,t.prev)||be(s,t.prev,t))||Da(s,t)&&be(s.prev,s,s.next)>0&&be(t.prev,t,t.next)>0)}function be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Da(s,t){return s.x===t.x&&s.y===t.y}function Yu(s,t,e,i){let n=Wr(be(s,t,e)),r=Wr(be(s,t,i)),a=Wr(be(e,i,s)),o=Wr(be(e,i,t));return!!(n!==r&&a!==o||n===0&&Gr(s,e,t)||r===0&&Gr(s,i,t)||a===0&&Gr(e,s,i)||o===0&&Gr(e,t,i))}function Gr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Wr(s){return s>0?1:s<0?-1:0}function qx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Yu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function rr(s,t){return be(s.prev,s,s.next)<0?be(s,t,s.next)>=0&&be(s,s.prev,t)>=0:be(s,t,s.prev)<0||be(s,s.next,t)<0}function Yx(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function $u(s,t){let e=new cc(s.i,s.x,s.y),i=new cc(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function xu(s,t,e,i){let n=new cc(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $x(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Xs=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];yu(t),vu(i,t);let a=t.length;e.forEach(yu);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,vu(i,e[l]);let o=Lx.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function yu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function vu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ba=class s extends Kt{constructor(t=new nr([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];a(h)}this.setAttribute("position",new Nt(n,3)),this.setAttribute("uv",new Nt(r,2)),this.computeVertexNormals();function a(o){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Zx,y,M=!1,I,E,w,C;m&&(y=m.getSpacedPoints(c),M=!0,u=!1,I=m.computeFrenetFrames(c,!1),E=new b,w=new b,C=new b),u||(p=0,f=0,g=0,x=0);let U=o.extractPoints(h),_=U.shape,S=U.holes;if(!Xs.isClockWise(_)){_=_.reverse();for(let K=0,P=S.length;K<P;K++){let dt=S[K];Xs.isClockWise(dt)&&(S[K]=dt.reverse())}}let D=Xs.triangulateShape(_,S),F=_;for(let K=0,P=S.length;K<P;K++){let dt=S[K];_=_.concat(dt)}function G(K,P,dt){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(P,dt)}let N=_.length,q=D.length;function H(K,P,dt){let ht,nt,ft,It=K.x-P.x,vt=K.y-P.y,R=dt.x-K.x,T=dt.y-K.y,k=It*It+vt*vt,$=It*T-vt*R;if(Math.abs($)>Number.EPSILON){let J=Math.sqrt(k),Z=Math.sqrt(R*R+T*T),Tt=P.x-vt/J,pt=P.y+It/J,Et=dt.x-T/Z,$t=dt.y+R/Z,st=((Et-Tt)*T-($t-pt)*R)/(It*T-vt*R);ht=Tt+It*st-K.x,nt=pt+vt*st-K.y;let St=ht*ht+nt*nt;if(St<=2)return new tt(ht,nt);ft=Math.sqrt(St/2)}else{let J=!1;It>Number.EPSILON?R>Number.EPSILON&&(J=!0):It<-Number.EPSILON?R<-Number.EPSILON&&(J=!0):Math.sign(vt)===Math.sign(T)&&(J=!0),J?(ht=-vt,nt=It,ft=Math.sqrt(k)):(ht=It,nt=vt,ft=Math.sqrt(k/2))}return new tt(ht/ft,nt/ft)}let rt=[];for(let K=0,P=F.length,dt=P-1,ht=K+1;K<P;K++,dt++,ht++)dt===P&&(dt=0),ht===P&&(ht=0),rt[K]=H(F[K],F[dt],F[ht]);let lt=[],ut,Ft=rt.concat();for(let K=0,P=S.length;K<P;K++){let dt=S[K];ut=[];for(let ht=0,nt=dt.length,ft=nt-1,It=ht+1;ht<nt;ht++,ft++,It++)ft===nt&&(ft=0),It===nt&&(It=0),ut[ht]=H(dt[ht],dt[ft],dt[It]);lt.push(ut),Ft=Ft.concat(ut)}for(let K=0;K<p;K++){let P=K/p,dt=f*Math.cos(P*Math.PI/2),ht=g*Math.sin(P*Math.PI/2)+x;for(let nt=0,ft=F.length;nt<ft;nt++){let It=G(F[nt],rt[nt],ht);ot(It.x,It.y,-dt)}for(let nt=0,ft=S.length;nt<ft;nt++){let It=S[nt];ut=lt[nt];for(let vt=0,R=It.length;vt<R;vt++){let T=G(It[vt],ut[vt],ht);ot(T.x,T.y,-dt)}}}let Wt=g+x;for(let K=0;K<N;K++){let P=u?G(_[K],Ft[K],Wt):_[K];M?(w.copy(I.normals[0]).multiplyScalar(P.x),E.copy(I.binormals[0]).multiplyScalar(P.y),C.copy(y[0]).add(w).add(E),ot(C.x,C.y,C.z)):ot(P.x,P.y,0)}for(let K=1;K<=c;K++)for(let P=0;P<N;P++){let dt=u?G(_[P],Ft[P],Wt):_[P];M?(w.copy(I.normals[K]).multiplyScalar(dt.x),E.copy(I.binormals[K]).multiplyScalar(dt.y),C.copy(y[K]).add(w).add(E),ot(C.x,C.y,C.z)):ot(dt.x,dt.y,d/c*K)}for(let K=p-1;K>=0;K--){let P=K/p,dt=f*Math.cos(P*Math.PI/2),ht=g*Math.sin(P*Math.PI/2)+x;for(let nt=0,ft=F.length;nt<ft;nt++){let It=G(F[nt],rt[nt],ht);ot(It.x,It.y,d+dt)}for(let nt=0,ft=S.length;nt<ft;nt++){let It=S[nt];ut=lt[nt];for(let vt=0,R=It.length;vt<R;vt++){let T=G(It[vt],ut[vt],ht);M?ot(T.x,T.y+y[c-1].y,y[c-1].x+dt):ot(T.x,T.y,d+dt)}}}V(),j();function V(){let K=n.length/3;if(u){let P=0,dt=N*P;for(let ht=0;ht<q;ht++){let nt=D[ht];Pt(nt[2]+dt,nt[1]+dt,nt[0]+dt)}P=c+p*2,dt=N*P;for(let ht=0;ht<q;ht++){let nt=D[ht];Pt(nt[0]+dt,nt[1]+dt,nt[2]+dt)}}else{for(let P=0;P<q;P++){let dt=D[P];Pt(dt[2],dt[1],dt[0])}for(let P=0;P<q;P++){let dt=D[P];Pt(dt[0]+N*c,dt[1]+N*c,dt[2]+N*c)}}i.addGroup(K,n.length/3-K,0)}function j(){let K=n.length/3,P=0;gt(F,P),P+=F.length;for(let dt=0,ht=S.length;dt<ht;dt++){let nt=S[dt];gt(nt,P),P+=nt.length}i.addGroup(K,n.length/3-K,1)}function gt(K,P){let dt=K.length;for(;--dt>=0;){let ht=dt,nt=dt-1;nt<0&&(nt=K.length-1);for(let ft=0,It=c+p*2;ft<It;ft++){let vt=N*ft,R=N*(ft+1),T=P+ht+vt,k=P+nt+vt,$=P+nt+R,J=P+ht+R;Ut(T,k,$,J)}}}function ot(K,P,dt){l.push(K),l.push(P),l.push(dt)}function Pt(K,P,dt){Bt(K),Bt(P),Bt(dt);let ht=n.length/3,nt=v.generateTopUV(i,n,ht-3,ht-2,ht-1);Vt(nt[0]),Vt(nt[1]),Vt(nt[2])}function Ut(K,P,dt,ht){Bt(K),Bt(P),Bt(ht),Bt(P),Bt(dt),Bt(ht);let nt=n.length/3,ft=v.generateSideWallUV(i,n,nt-6,nt-3,nt-2,nt-1);Vt(ft[0]),Vt(ft[1]),Vt(ft[3]),Vt(ft[1]),Vt(ft[2]),Vt(ft[3])}function Bt(K){n.push(l[K*3+0]),n.push(l[K*3+1]),n.push(l[K*3+2])}function Vt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Kx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Ea[n.type]().fromJSON(n)),new s(i,t.options)}},Zx={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],h=t[n*3],c=t[n*3+1];return[new tt(r,a),new tt(o,l),new tt(h,c)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],h=t[i*3],c=t[i*3+1],d=t[i*3+2],u=t[n*3],f=t[n*3+1],g=t[n*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-c)<Math.abs(a-h)?[new tt(a,1-l),new tt(h,1-d),new tt(u,1-g),new tt(x,1-m)]:[new tt(o,1-l),new tt(c,1-d),new tt(f,1-g),new tt(p,1-m)]}};function Kx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var wa=class s extends oc{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Pn=class s extends Kt{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],h=[],c=[],d=t,u=(e-t)/n,f=new b,g=new tt;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let m=r+p/i*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,c.push(g.x,g.y)}d+=u}for(let x=0;x<n;x++){let p=x*(i+1);for(let m=0;m<i;m++){let v=m+p,y=v,M=v+i+1,I=v+i+2,E=v+1;o.push(y,M,E),o.push(M,I,E)}}this.setIndex(o),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ci=class s extends Kt{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],d=new b,u=new b,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let v=[],y=m/i,M=0;m===0&&a===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){let E=I/e;d.x=-t*Math.cos(n+E*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(n+E*r)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(E+M,1-y),v.push(h++)}c.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let y=c[m][v+1],M=c[m][v],I=c[m+1][v],E=c[m+1][v+1];(m!==0||a>0)&&f.push(y,M,E),(m!==i-1||l<Math.PI)&&f.push(M,I,E)}this.setIndex(f),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qe=class s extends Kt{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new b,d=new b,u=new b;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let x=g/n*r,p=f/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),u.subVectors(d,c).normalize(),l.push(u.x,u.y,u.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let x=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,m=(n+1)*(f-1)+g,v=(n+1)*f+g;a.push(x,p,v),a.push(p,m,v)}this.setIndex(a),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ta=class s extends Kt{constructor(t=new _a(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,h=new tt,c=new b,d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function x(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),v(),m()}function p(y){c=t.getPointAt(y/e,c);let M=a.normals[y],I=a.binormals[y];for(let E=0;E<=n;E++){let w=E/n*Math.PI*2,C=Math.sin(w),U=-Math.cos(w);l.x=U*M.x+C*I.x,l.y=U*M.y+C*I.y,l.z=U*M.z+C*I.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=e;y++)for(let M=1;M<=n;M++){let I=(n+1)*(y-1)+(M-1),E=(n+1)*y+(M-1),w=(n+1)*y+M,C=(n+1)*(y-1)+M;g.push(I,E,C),g.push(E,w,C)}}function v(){for(let y=0;y<=e;y++)for(let M=0;M<=n;M++)h.x=y/e,h.y=M/n,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Ea[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Aa=class extends ue{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},de=class extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Xr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Jx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var xs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends xs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case gh:r=t,o=2*e-i;break;case xh:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:a=t,l=2*i-e;break;case xh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,y=(-1-f)*p+(1.5+f)*x+.5*g,M=f*p-f*x;for(let I=0;I!==o;++I)r[I]=m*a[c+I]+v*a[h+I]+y*a[l+I]+M*a[d+I];return r}},uc=class extends xs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(i-e)/(n-e),d=1-c;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[l+u]*c;return r}},dc=class extends xs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Mi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xr(e,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Xr(t.times,Array),values:Xr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case zl:e=this.InterpolantFactoryMethodLinear;break;case _o:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return zl;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Jx(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===_o,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(n)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=zl;var In=class extends Mi{constructor(t,e,i){super(t,e,i)}};In.prototype.ValueTypeName="bool";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=Qr;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Mi{};fc.prototype.ValueTypeName="color";var pc=class extends Mi{};pc.prototype.ValueTypeName="number";var mc=class extends xs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),h=t*o;for(let c=h+o;h!==c;h+=4)Ie.slerpFlat(r,0,a,h-o,a,h,l);return r}},Ra=class extends Mi{InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Ln=class extends Mi{constructor(t,e,i){super(t,e,i)}};Ln.prototype.ValueTypeName="string";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=Qr;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends Mi{};gc.prototype.ValueTypeName="vector";var xc=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){o++,r===!1&&n.onStart!==void 0&&n.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],g=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},Qx=new xc,yc=class{constructor(t){this.manager=t!==void 0?t:Qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ys=class extends or{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Qo=new jt,_u=new b,Mu=new b,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;_u.setFromMatrixPosition(t.matrixWorld),e.position.copy(_u),Mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mu),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Eu=new jt,zs=new b,jo=new b,vc=class extends Ca{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),i.position.copy(zs),jo.copy(i.position),jo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(jo),i.updateMatrixWorld(),n.makeTranslation(-zs.x,-zs.y,-zs.z),Eu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu)}},vs=class extends or{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new vc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},_c=class extends Ca{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pi=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new _c}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Pa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Su(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Su();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Su(){return performance.now()}var Hc="\\[\\]\\.:\\/",jx=new RegExp("["+Hc+"]","g"),kc="[^"+Hc+"]",ty="[^"+Hc.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",kc),iy=/(WCOD+)?/.source.replace("WCOD",ty),ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),ry=new RegExp("^"+ey+iy+ny+sy+"$"),ay=["material","materials","bones","map"],Mc=class{constructor(t,e,i){let n=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jx,"")}static parseTrackName(t){let e=ry.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);ay.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[n];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Mc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ty=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);var Na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},oy=new ds(-1,1,1,-1,0,1),Vc=class extends Kt{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}},ly=new Vc,cn=class{constructor(t){this._mesh=new ct(ly,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,oy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ms=class extends ci{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ue?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ln.clone(t.uniforms),this.material=new ue({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new cn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var cr=class extends ci{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Fa=class extends ci{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ba=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new tt);this._width=i.width,this._height=i.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(Na),this.copyPass.material.blending=Ri,this.clock=new Pa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}cr!==void 0&&(a instanceof cr?i=!0:a instanceof Fa&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hr=class extends ci{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Zu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Es=class s extends ci{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,a,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new He(r,a,{type:ii});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new He(r,a,{type:ii});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Zu;this.highPassUniforms=ln.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ue({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=Na;this.copyUniforms=ln.clone(c.uniforms),this.blendMaterial=new ue({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:ge,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new et,this.oldClearAlpha=1,this.basic=new Dt,this.fsQuad=new cn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ue({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ue({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Es.BlurDirectionX=new tt(1,0);Es.BlurDirectionY=new tt(0,1);var Ku={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var za=class extends ci{constructor(){super();let t=Ku;this.uniforms=ln.clone(t.uniforms),this.material=new Aa({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new cn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Qu(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Kt,h=0;for(let c=0;c<s.length;++c){let d=s[c],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+c);c+=s[u].attributes.position.count}l.setIndex(d)}for(let c in r){let d=Ju(r[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in a){let d=a[c][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[c].length;++x)f.push(a[c][x][u]);let g=Ju(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Ju(s){let t,e,i,n=-1,r=0;for(let h=0;h<s.length;++h){let c=s[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=c.gpuType),n!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}let a=new t(r),o=new he(a,e,i),l=0;for(let h=0;h<s.length;++h){let c=s[h];if(c.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=c.count;u<f;u++)for(let g=0;g<e;g++){let x=c.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(c.array,l);l+=c.count*e}return n!==void 0&&(o.gpuType=n),o}var fe={WALLRUN:1,GRAPPLE:2,NOWALL:4},ur=1e-7,Ha=class{constructor(t=220,e=4){this.half=t,this.cell=e,this.n=Math.ceil(t*2/e),this.cells=new Array(this.n*this.n),this.tris=[],this.nrm=[],this.box=[],this.flags=[],this.count=0,this.stamp=0,this.marks=null,this.groundY=0,this._c={px:0,py:0,pz:0,qx:0,qy:0,qz:0,d2:0}}addGeometry(t,e,i=fe.WALLRUN|fe.GRAPPLE){let n=t.index?t.toNonIndexed():t,r=n.attributes.position,a=new b,o=[],l=[];for(let h=0;h<r.count;h++)a.fromBufferAttribute(r,h),e&&a.applyMatrix4(e),l.push(a.x,a.y,a.z),l.length===9&&(this.addTri(l,i),l.length=0);n!==t&&n.dispose()}addTri(t,e){let[i,n,r,a,o,l,h,c,d]=t,u=a-i,f=o-n,g=l-r,x=h-i,p=c-n,m=d-r,v=f*m-g*p,y=g*x-u*m,M=u*p-f*x,I=Math.hypot(v,y,M);if(I<1e-9)return;v/=I,y/=I,M/=I;let E=this.count++;this.tris.push(i,n,r,a,o,l,h,c,d),this.nrm.push(v,y,M);let w=Math.min(i,a,h),C=Math.min(n,o,c),U=Math.min(r,l,d),_=Math.max(i,a,h),S=Math.max(n,o,c),L=Math.max(r,l,d);this.box.push(w,C,U,_,S,L),this.flags.push(e);let D=this.cell,F=this.half,G=this.n,N=Math.max(0,Math.floor((w+F)/D)),q=Math.min(G-1,Math.floor((_+F)/D)),H=Math.max(0,Math.floor((U+F)/D)),rt=Math.min(G-1,Math.floor((L+F)/D));for(let lt=N;lt<=q;lt++)for(let ut=H;ut<=rt;ut++){let Ft=lt*G+ut;(this.cells[Ft]||(this.cells[Ft]=[])).push(E)}}build(){this.T=new Float32Array(this.tris),this.N=new Float32Array(this.nrm),this.B=new Float32Array(this.box),this.F=new Uint8Array(this.flags),this.marks=new Uint32Array(this.count),this.tris=this.nrm=this.box=this.flags=null;for(let t=0;t<this.cells.length;t++)this.cells[t]&&(this.cells[t]=Int32Array.from(this.cells[t]))}_gather(t,e,i,n,r,a,o){let l=this.cell,h=this.half,c=this.n,d=Math.max(0,Math.floor((t+h)/l)),u=Math.min(c-1,Math.floor((n+h)/l)),f=Math.max(0,Math.floor((i+h)/l)),g=Math.min(c-1,Math.floor((a+h)/l)),x=++this.stamp,p=this.marks,m=this.B;o.length=0;for(let v=d;v<=u;v++)for(let y=f;y<=g;y++){let M=this.cells[v*c+y];if(M)for(let I=0;I<M.length;I++){let E=M[I];if(p[E]===x)continue;p[E]=x;let w=E*6;m[w]>n||m[w+3]<t||m[w+1]>r||m[w+4]<e||m[w+2]>a||m[w+5]<i||o.push(E)}}return o}_segTri(t,e,i,n,r,a,o){let l=this.T,h=o*9,c=l[h],d=l[h+1],u=l[h+2],f=l[h+3],g=l[h+4],x=l[h+5],p=l[h+6],m=l[h+7],v=l[h+8],y=this._c,M=n-t,I=r-e,E=a-i,w=f-c,C=g-d,U=x-u,_=p-c,S=m-d,L=v-u,D=I*L-E*S,F=E*_-M*L,G=M*S-I*_,N=w*D+C*F+U*G;if(Math.abs(N)>ur){let V=1/N,j=t-c,gt=e-d,ot=i-u,Pt=(j*D+gt*F+ot*G)*V;if(Pt>=0&&Pt<=1){let Ut=gt*U-ot*C,Bt=ot*w-j*U,Vt=j*C-gt*w,K=(M*Ut+I*Bt+E*Vt)*V;if(K>=0&&Pt+K<=1){let P=(_*Ut+S*Bt+L*Vt)*V;if(P>=0&&P<=1)return y.px=y.qx=t+M*P,y.py=y.qy=e+I*P,y.pz=y.qz=i+E*P,y.d2=0}}}let q=1/0,H,rt,lt,ut,Ft,Wt;for(let V=0;V<2;V++){let j=V?n:t,gt=V?r:e,ot=V?a:i;uy(j,gt,ot,c,d,u,f,g,x,p,m,v,Dn);let Pt=(j-Dn[0])**2+(gt-Dn[1])**2+(ot-Dn[2])**2;Pt<q&&(q=Pt,H=j,rt=gt,lt=ot,ut=Dn[0],Ft=Dn[1],Wt=Dn[2])}for(let V=0;V<3;V++){let Vt=dy(t,e,i,n,r,a,V===0?c:V===1?f:p,V===0?d:V===1?g:m,V===0?u:V===1?x:v,V===0?f:V===1?p:c,V===0?g:V===1?m:d,V===0?x:V===1?v:u,Nn);Vt<q&&(q=Vt,H=Nn[0],rt=Nn[1],lt=Nn[2],ut=Nn[3],Ft=Nn[4],Wt=Nn[5])}return y.px=H,y.py=rt,y.pz=lt,y.qx=ut,y.qy=Ft,y.qz=Wt,y.d2=q}collideCapsule(t,e,i,n,r=4){n.length=0;let a=ju;for(let o=0;o<r;o++){let l=t.x,h=t.y+e,c=t.z,d=t.y+i-e,u=0,f=0,g=0,x=0;t.y<this.groundY&&(u=this.groundY-t.y,f=0,g=1,x=0),this._gather(l-e,t.y-.01,c-e,l+e,t.y+i+.01,c+e,a);for(let v=0;v<a.length;v++){let y=a[v],M=this._segTri(l,h,c,l,d,c,y);if(M>=e*e)continue;let I=this._c,E,w,C,U,_=this.N,S=y*3;if(M<1e-10){let L=_[S],D=_[S+1],F=_[S+2],G=this.T,N=y*9,q=(h+d)/2;(l-G[N])*L+(q-G[N+1])*D+(c-G[N+2])*F<0&&(L=-L,D=-D,F=-F);let rt=(l-G[N])*L+(h-G[N+1])*D+(c-G[N+2])*F,lt=(l-G[N])*L+(d-G[N+1])*D+(c-G[N+2])*F;E=e-Math.min(rt,lt),w=L,C=D,U=F}else{let L=Math.sqrt(M);E=e-L,w=(I.px-I.qx)/L,C=(I.py-I.qy)/L,U=(I.pz-I.qz)/L;let D=w*_[S]+C*_[S+1]+U*_[S+2];Math.abs(D)>.999&&(w=_[S],C=_[S+1],U=_[S+2],E=e-D*L)}E>u&&(u=E,f=w,g=C,x=U)}if(u<=0)break;let p=u+1e-4;t.x+=f*p,t.y+=g*p,t.z+=x*p;let m=(n.length<Oa.length||Oa.push({x:0,y:0,z:0,depth:0}),Oa[n.length]);m.x=f,m.y=g,m.z=x,m.depth=u,n.push(m)}return n.length>0}capsuleFree(t,e,i,n,r){if(e<this.groundY-.001)return!1;let a=this._gather(t-n,e,i-n,t+n,e+r,i+n,ju);for(let o=0;o<a.length;o++)if(this._segTri(t,e+n,i,t,e+r-n,i,a[o])<n*n-1e-6)return!1;return!0}raycast(t,e,i,n,r,a,o,l=cy,h=0){let c=o,d=-1;if(r<-1e-6&&e>this.groundY){let L=(this.groundY-e)/r;L<c&&(c=L,d=-2)}let u=this.cell,f=this.half,g=this.n,x=Math.floor((t+f)/u),p=Math.floor((i+f)/u),m=n>0?1:-1,v=a>0?1:-1,y=Math.abs(n)>1e-9?u/Math.abs(n):1/0,M=Math.abs(a)>1e-9?u/Math.abs(a):1/0,I=Math.abs(n)>1e-9?((n>0?x+1:x)*u-f-t)/n:1/0,E=Math.abs(a)>1e-9?((a>0?p+1:p)*u-f-i)/a:1/0,w=++this.stamp,C=this.marks,U=this.T,_=this.F,S=0;for(let L=0;L<400;L++){if(x>=0&&p>=0&&x<g&&p<g){let F=this.cells[x*g+p];if(F)for(let G=0;G<F.length;G++){let N=F[G];if(C[N]===w||(C[N]=w,h&&!(_[N]&h)))continue;let q=N*9,H=hy(t,e,i,n,r,a,U[q],U[q+1],U[q+2],U[q+3],U[q+4],U[q+5],U[q+6],U[q+7],U[q+8]);H>0&&H<c&&(c=H,d=N)}}let D=Math.min(I,E);if(c<=D||D>o||(S=D,I<E?(x+=m,I+=y):(p+=v,E+=M),x<0&&m<0||p<0&&v<0||x>=g&&m>0||p>=g&&v>0))break}if(d===-1)return null;if(l.t=c,l.x=t+n*c,l.y=e+r*c,l.z=i+a*c,d===-2)l.nx=0,l.ny=1,l.nz=0,l.flags=fe.GRAPPLE,l.tri=-1;else{let L=this.N,D=d*3,F=L[D],G=L[D+1],N=L[D+2];F*n+G*r+N*a>0&&(F=-F,G=-G,N=-N),l.nx=F,l.ny=G,l.nz=N,l.flags=_[d],l.tri=d}return l}},ju=[],Oa=[],Dn=[0,0,0],Nn=[0,0,0,0,0,0],cy={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0};function hy(s,t,e,i,n,r,a,o,l,h,c,d,u,f,g){let x=h-a,p=c-o,m=d-l,v=u-a,y=f-o,M=g-l,I=n*M-r*y,E=r*v-i*M,w=i*y-n*v,C=x*I+p*E+m*w;if(Math.abs(C)<1e-9)return-1;let U=1/C,_=s-a,S=t-o,L=e-l,D=(_*I+S*E+L*w)*U;if(D<0||D>1)return-1;let F=S*m-L*p,G=L*x-_*m,N=_*p-S*x,q=(i*F+n*G+r*N)*U;return q<0||D+q>1?-1:(v*F+y*G+M*N)*U}function uy(s,t,e,i,n,r,a,o,l,h,c,d,u){let f=a-i,g=o-n,x=l-r,p=h-i,m=c-n,v=d-r,y=s-i,M=t-n,I=e-r,E=f*y+g*M+x*I,w=p*y+m*M+v*I;if(E<=0&&w<=0){u[0]=i,u[1]=n,u[2]=r;return}let C=s-a,U=t-o,_=e-l,S=f*C+g*U+x*_,L=p*C+m*U+v*_;if(S>=0&&L<=S){u[0]=a,u[1]=o,u[2]=l;return}let D=E*L-S*w;if(D<=0&&E>=0&&S<=0){let V=E/(E-S);u[0]=i+f*V,u[1]=n+g*V,u[2]=r+x*V;return}let F=s-h,G=t-c,N=e-d,q=f*F+g*G+x*N,H=p*F+m*G+v*N;if(H>=0&&q<=H){u[0]=h,u[1]=c,u[2]=d;return}let rt=q*w-E*H;if(rt<=0&&w>=0&&H<=0){let V=w/(w-H);u[0]=i+p*V,u[1]=n+m*V,u[2]=r+v*V;return}let lt=S*H-q*L;if(lt<=0&&L-S>=0&&q-H>=0){let V=(L-S)/(L-S+(q-H));u[0]=a+(h-a)*V,u[1]=o+(c-o)*V,u[2]=l+(d-l)*V;return}let ut=1/(lt+rt+D),Ft=rt*ut,Wt=D*ut;u[0]=i+f*Ft+p*Wt,u[1]=n+g*Ft+m*Wt,u[2]=r+x*Ft+v*Wt}function dy(s,t,e,i,n,r,a,o,l,h,c,d,u){let f=i-s,g=n-t,x=r-e,p=h-a,m=c-o,v=d-l,y=s-a,M=t-o,I=e-l,E=f*f+g*g+x*x,w=p*p+m*m+v*v,C=p*y+m*M+v*I,U,_;if(E<=ur&&w<=ur)U=_=0;else if(E<=ur)U=0,_=Math.min(1,Math.max(0,C/w));else{let S=f*y+g*M+x*I;if(w<=ur)_=0,U=Math.min(1,Math.max(0,-S/E));else{let L=f*p+g*m+x*v,D=E*w-L*L;U=D!==0?Math.min(1,Math.max(0,(L*C-S*w)/D)):0,_=(L*U+C)/w,_<0?(_=0,U=Math.min(1,Math.max(0,-S/E))):_>1&&(_=1,U=Math.min(1,Math.max(0,(L-S)/E)))}}return u[0]=s+f*U,u[1]=t+g*U,u[2]=e+x*U,u[3]=a+p*_,u[4]=o+m*_,u[5]=l+v*_,(u[0]-u[3])**2+(u[1]-u[4])**2+(u[2]-u[5])**2}function td(s,t,e,i=4,n=4){let r=new ee(s,t,e),a=r.attributes.uv,o=r.attributes.position,l=r.attributes.normal;for(let h=0;h<a.count;h++){let c=Math.abs(l.getX(h)),d=Math.abs(l.getY(h)),u=o.getX(h)+s/2,f=o.getY(h)+t/2,g=o.getZ(h)+e/2,x,p;d>.5?(x=u,p=g):c>.5?(x=g,p=f):(x=u,p=f),a.setXY(h,x/i,p/n)}return r}function ka(s,t,e,{closed:i=!1,us:n=4,vs:r=4,caps:a=!0}={}){let o=[],l=[],h=[],c=s.length,d=s.map(p=>{let m=p.p.clone().addScaledVector(p.r,-t/2),v=p.p.clone().addScaledVector(p.r,t/2);return{TL:m,TR:v,BL:m.clone().addScaledVector(p.u,-e),BR:v.clone().addScaledVector(p.u,-e)}}),u=[0];for(let p=1;p<c;p++)u.push(u[p-1]+s[p].p.distanceTo(s[p-1].p));i&&u.push(u[c-1]+s[0].p.distanceTo(s[c-1].p));let f=(p,m,v,y,M,I,E,w,C)=>{let U=new b().subVectors(m,p).cross(new b().subVectors(v,p)),_=[[p,m,v,M,I,E],[p,v,y,M,E,w]];U.dot(C)<0&&(_=[[p,v,m,M,E,I],[p,y,v,M,w,E]]);let S=C.clone().normalize();for(let[L,D,F,G,N,q]of _){o.push(L.x,L.y,L.z,D.x,D.y,D.z,F.x,F.y,F.z),l.push(G[0],G[1],N[0],N[1],q[0],q[1]);let H=new b().subVectors(D,L).cross(new b().subVectors(F,L)).normalize();for(let rt=0;rt<3;rt++)h.push(H.x,H.y,H.z)}},g=i?c:c-1;for(let p=0;p<g;p++){let m=(p+1)%c,v=d[p],y=d[m],M=s[p],I=s[m],E=u[p]/r,w=u[p+1]/r,C=M.u.clone().add(I.u),U=M.r.clone().add(I.r);f(v.TL,v.TR,y.TR,y.TL,[0,E],[t/n,E],[t/n,w],[0,w],C),f(v.BL,y.BL,y.BR,v.BR,[0,E],[0,w],[t/n,w],[t/n,E],C.clone().negate()),f(v.TL,y.TL,y.BL,v.BL,[E*r/n,0],[w*r/n,0],[w*r/n,e/n],[E*r/n,e/n],U.clone().negate()),f(v.TR,v.BR,y.BR,y.TR,[E*r/n,0],[E*r/n,e/n],[w*r/n,e/n],[w*r/n,0],U)}if(!i&&a){let p=d[0],m=s[0],v=new b().subVectors(s[0].p,s[1].p);f(p.TL,p.BL,p.BR,p.TR,[0,0],[0,e/n],[t/n,e/n],[t/n,0],v);let y=d[c-1],M=new b().subVectors(s[c-1].p,s[c-2].p);f(y.TL,y.TR,y.BR,y.BL,[0,0],[t/n,0],[t/n,e/n],[0,e/n],M)}let x=new Kt;return x.setAttribute("position",new Nt(o,3)),x.setAttribute("normal",new Nt(h,3)),x.setAttribute("uv",new Nt(l,2)),x}function Gc(s,t,e,i=4,n=4,r="all"){let a=s/2,o={a:new b(-a,0,0),b:new b(a,0,0),c:new b(a,0,t),d:new b(-a,0,t),e:new b(a,e,t),f:new b(-a,e,t)},l=[],h=[],c=[],d=Math.hypot(t,e),u="top",f=(y,M,I,E,w,C,U)=>{if(r!=="all"&&r!==u)return;let _=y,S=M,L=I,D=E,F=w,G=C;new b().subVectors(S,_).cross(new b().subVectors(L,_)).dot(U)<0&&([S,L]=[L,S],[F,G]=[G,F]);let q=new b().subVectors(S,_).cross(new b().subVectors(L,_)).normalize();l.push(_.x,_.y,_.z,S.x,S.y,S.z,L.x,L.y,L.z),h.push(...D,...F,...G);for(let H=0;H<3;H++)c.push(q.x,q.y,q.z)},g=s/i,x=new b(0,t,-e);f(o.a,o.b,o.e,[0,0],[g,0],[g,d/n],x),f(o.a,o.e,o.f,[0,0],[g,d/n],[0,d/n],x),u="sides";let p=new b(0,-1,0);f(o.a,o.b,o.c,[0,0],[g,0],[g,t/n],p),f(o.a,o.c,o.d,[0,0],[g,t/n],[0,t/n],p);let m=new b(0,0,1);f(o.d,o.c,o.e,[0,0],[g,0],[g,e/n],m),f(o.d,o.e,o.f,[0,0],[g,e/n],[0,e/n],m),f(o.b,o.c,o.e,[0,0],[t/i,0],[t/i,e/n],new b(1,0,0)),f(o.a,o.d,o.f,[0,0],[t/i,0],[t/i,e/n],new b(-1,0,0));let v=new Kt;return v.setAttribute("position",new Nt(l,3)),v.setAttribute("normal",new Nt(c,3)),v.setAttribute("uv",new Nt(h,2)),v}function ed(s,t,e,i,n,r,a=null,o=0,l=0){let h=[],c=new b(0,1,0);for(let d=0;d<=r;d++){let u=d/r,f=t+(e-t)*u,g=new b(o+Math.cos(f)*s,i+(n-i)*u,l+Math.sin(f)*s),x=Math.sign(e-t)||1,p=new b(-Math.sin(f)*x*s*Math.abs(e-t),n-i,Math.cos(f)*x*s*Math.abs(e-t)).normalize(),m=new b(Math.cos(f),0,Math.sin(f)),v=new b().crossVectors(p,m).normalize();if(v.y<0&&v.negate(),m=new b().crossVectors(v,p).normalize(),m.dot(new b(Math.cos(f),0,Math.sin(f)))<0&&m.negate(),a){let y=a(f,u),M=new Ie().setFromAxisAngle(p,0),I=Math.cos(y),E=Math.sin(y),w=m.clone().multiplyScalar(I).addScaledVector(v,E),C=v.clone().multiplyScalar(I).addScaledVector(m,-E);m=w,v=C}h.push({p:g,r:m,u:v,T:p})}return h}function id(s,t,e,i,n,r=null,a=!1){let o=[],l=a?i:i+1;for(let h=0;h<l;h++){let c=h/i,d=t+(e-t)*c;o.push({a:d,t:c,p:new b(Math.cos(d)*s,n(d,c),Math.sin(d)*s)})}return o.map((h,c)=>{let d=o[a?(c-1+l)%l:Math.max(0,c-1)].p,f=o[a?(c+1)%l:Math.min(l-1,c+1)].p.clone().sub(d).normalize(),g=new b(Math.cos(h.a),0,Math.sin(h.a)),x=new b().crossVectors(f,g).normalize();x.y<0&&x.negate();let p=new b().crossVectors(x,f).normalize();if(p.dot(g)<0&&p.negate(),r){let m=r(h.a,h.t),v=Math.cos(m),y=Math.sin(m),M=p.clone().multiplyScalar(v).addScaledVector(x,y),I=x.clone().multiplyScalar(v).addScaledVector(p,-y);p=M,x=I}return{p:h.p,r:p,u:x,T:f}})}function qi(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Si(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function bi(s,{repeat:t=!0,srgb:e=!0,aniso:i=8}={}){let n=new Rn(s);return t&&(n.wrapS=n.wrapT=Tn),e&&(n.colorSpace=Ze),n.anisotropy=i,n}function Ss(s,t=0){let[n,r]=Si(512,1024),[a,o]=Si(512,1024),l=qi(s),h=["#16161d","#1a1418","#12161c","#1c1a1a"][t%4];r.fillStyle=h,r.fillRect(0,0,512,1024),o.fillStyle="#000",o.fillRect(0,0,512,1024);for(let p=0;p<1500;p++)r.fillStyle=`rgba(255,255,255,${l()*.025})`,r.fillRect(l()*512,l()*1024,2+l()*30,1+l()*6);let c=t===2?6:8,d=t===2?14:20,u=512/c,f=1024/d,g=[["#ffcf9a","#ffd8b0","#ff3048","#9ae6ff","#ffe6c8"],["#8fd8ff","#c8f0ff","#ff3a6a","#ffffff","#6aa8ff"],["#ff9ad0","#ffd0f0","#30e0ff","#ffcf9a","#ff3048"],["#ffe0a0","#fff0d0","#ff5040","#80ffd0","#ffd090"]][t%4],x=[.28,.2,.34,.24][t%4];for(let p=0;p<d;p++){let m=l()<.15?.6:l()<.2?-.2:0;for(let v=0;v<c;v++){let y=v*u+u*.14,M=p*f+f*.2,I=u*.72,E=f*.58,w=r.createLinearGradient(y,M,y,M+E);if(w.addColorStop(0,"#2a3044"),w.addColorStop(1,"#0c0e16"),r.fillStyle=w,r.fillRect(y,M,I,E),l()<x+m){let C=g[l()*(l()<.8?2:g.length)|0],U=.5+l()*.5;if(o.globalAlpha=U,o.fillStyle=C,o.fillRect(y,M,I,E),l()<.4){o.globalAlpha=.55,o.fillStyle="#000";for(let _=0;_<E;_+=4)o.fillRect(y,M+_,I,2)}l()<.15&&(o.globalAlpha=.8,o.fillStyle="#000",o.fillRect(y+I*l()*.6,M+E*.35,I*.25,E*.65)),o.globalAlpha=1,r.fillStyle=C,r.globalAlpha=.35*U,r.fillRect(y,M,I,E),r.globalAlpha=1}}r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(0,p*f,512,f*.12),r.fillStyle="rgba(255,255,255,0.05)",r.fillRect(0,p*f+f*.12,512,2)}r.fillStyle="rgba(0,0,0,0.5)";for(let p=0;p<=c;p++)r.fillRect(p*u-3,0,6,1024);return{map:bi(n),emissive:bi(a)}}function nd(){let[t,e]=Si(1024,1024),[i,n]=Si(1024,1024),r=qi(99);e.fillStyle="#17171d",e.fillRect(0,0,1024,1024);for(let a=0;a<4e4;a++){let o=20+r()*40|0;e.fillStyle=`rgba(${o},${o},${o+6},${.25+r()*.4})`,e.fillRect(r()*1024,r()*1024,1+r()*2,1+r()*2)}e.strokeStyle="rgba(0,0,0,0.6)",e.lineWidth=4;for(let a=0;a<=1024;a+=128)e.beginPath(),e.moveTo(a,0),e.lineTo(a,1024),e.stroke(),e.beginPath(),e.moveTo(0,a),e.lineTo(1024,a),e.stroke();e.strokeStyle="rgba(120,125,150,0.08)",e.lineWidth=1;for(let a=2;a<=1024;a+=128)e.beginPath(),e.moveTo(a,0),e.lineTo(a,1024),e.stroke(),e.beginPath(),e.moveTo(0,a),e.lineTo(1024,a),e.stroke();n.fillStyle="rgb(150,150,150)",n.fillRect(0,0,1024,1024);for(let a=0;a<26;a++){let o=r()*1024,l=r()*1024,h=30+r()*110,c=n.createRadialGradient(o,l,0,o,l,h);c.addColorStop(0,"rgb(20,20,20)"),c.addColorStop(.7,"rgb(40,40,40)"),c.addColorStop(1,"rgba(150,150,150,0)"),n.fillStyle=c,n.beginPath(),n.ellipse(o,l,h,h*(.5+r()*.5),r()*3,0,Math.PI*2),n.fill();let d=e.createRadialGradient(o,l,0,o,l,h);d.addColorStop(0,"rgba(0,0,0,0.45)"),d.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=d,e.beginPath(),e.ellipse(o,l,h,h*.7,r()*3,0,Math.PI*2),e.fill()}for(let a=0;a<2e4;a++){let o=110+r()*90|0;n.fillStyle=`rgb(${o},${o},${o})`,n.fillRect(r()*1024,r()*1024,2,2)}return{map:bi(t,{aniso:16}),rough:bi(i,{srgb:!1,aniso:16})}}function Wc(s=3,t="#ff2a48"){let[i,n]=Si(512,512),r=qi(s);n.fillStyle="#1d1e26",n.fillRect(0,0,512,512);for(let a=0;a<3e3;a++)n.fillStyle=`rgba(255,255,255,${r()*.03})`,n.fillRect(r()*512,r()*512,2,2);n.strokeStyle="#0c0c10",n.lineWidth=6,n.strokeRect(3,3,506,506),n.strokeStyle="#2c2e3a",n.lineWidth=2,n.strokeRect(10,10,492,492),n.strokeStyle="#121218",n.lineWidth=3,n.beginPath(),n.moveTo(512/2,10),n.lineTo(512/2,502),n.moveTo(10,512/2),n.lineTo(502,512/2),n.stroke(),n.fillStyle="#3a3c48";for(let[a,o]of[[24,24],[488,24],[24,488],[488,488]])n.beginPath(),n.arc(a,o,6,0,7),n.fill();n.save(),n.beginPath(),n.rect(0,478,512,24),n.clip();for(let a=-40;a<552;a+=40)n.fillStyle=t,n.beginPath(),n.moveTo(a,478),n.lineTo(a+20,478),n.lineTo(a+44,502),n.lineTo(a+24,502),n.fill();return n.restore(),bi(i)}function Xc(s=5){let[e,i]=Si(512,512),n=qi(s);i.fillStyle="#25252c",i.fillRect(0,0,512,512);for(let r=0;r<9e3;r++){let a=n()*255|0;i.fillStyle=`rgba(${a},${a},${a},${n()*.05})`,i.fillRect(n()*512,n()*512,1+n()*4,1+n()*4)}for(let r=0;r<30;r++)i.fillStyle=`rgba(0,0,0,${.05+n()*.1})`,i.fillRect(n()*512,0,1+n()*3,512);return i.strokeStyle="rgba(0,0,0,0.4)",i.lineWidth=3,i.strokeRect(0,0,512,512),bi(e)}function sd(){let[e,i]=Si(256,256);i.fillStyle="#1a1c24",i.fillRect(0,0,256,256);for(let n=0;n<2e3;n++)i.fillStyle=`rgba(255,255,255,${Math.random()*.03})`,i.fillRect(Math.random()*256,Math.random()*256,2,2);return i.strokeStyle="rgba(48,224,255,0.9)",i.lineWidth=10,i.lineCap="square",i.beginPath(),i.moveTo(60,170),i.lineTo(128,100),i.lineTo(196,170),i.stroke(),i.fillStyle="rgba(48,224,255,0.6)",i.fillRect(0,0,8,256),i.fillRect(248,0,8,256),bi(e)}function rd(){let[e,i]=Si(256,256);return i.fillStyle="#000",i.fillRect(0,0,256,256),i.strokeStyle="#30e0ff",i.lineWidth=10,i.lineCap="square",i.beginPath(),i.moveTo(60,170),i.lineTo(128,100),i.lineTo(196,170),i.stroke(),i.fillStyle="#30e0ff",i.fillRect(0,0,6,256),i.fillRect(250,0,6,256),bi(e)}function Va(s,t,{w:e=1024,h:i=256,font:n='900 150px "Orbitron","Noto Sans KR",sans-serif',frame:r=!0}={}){let[a,o]=Si(e,i);return o.clearRect(0,0,e,i),o.textAlign="center",o.textBaseline="middle",o.font=n,o.shadowColor=t,o.shadowBlur=40,o.fillStyle=t,o.fillText(s,e/2,i/2+6),o.shadowBlur=0,o.fillStyle="#ffffff",o.globalAlpha=.7,o.fillText(s,e/2,i/2+6),o.globalAlpha=1,r&&(o.strokeStyle=t,o.lineWidth=8,o.shadowBlur=30,o.strokeRect(14,14,e-28,i-28)),bi(a,{repeat:!1})}function ad(){let[s,t]=Si(1024,64),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"#f6f6ff"),e.addColorStop(.42,"#b0b2c0"),e.addColorStop(.5,"#ffffff"),e.addColorStop(1,"#4a4c58"),t.fillStyle=e,t.fillRect(0,0,1024,64),t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=3,t.beginPath();for(let i=0;i<=1024;i+=6)t.lineTo(i,22+Math.sin(i*.05)*5+Math.sin(i*.17)*3);t.stroke();for(let i=0;i<400;i++)t.fillStyle=`rgba(255,255,255,${Math.random()*.15})`,t.fillRect(Math.random()*1024,Math.random()*64,6,1);return bi(s,{repeat:!1})}function od(){let[s,t]=Si(64,256);t.fillStyle="#0c0c10",t.fillRect(0,0,64,256),t.strokeStyle="#8a0c1c",t.lineWidth=8;for(let e=-64;e<320;e+=32)t.beginPath(),t.moveTo(0,e),t.lineTo(64,e+32),t.stroke(),t.beginPath(),t.moveTo(64,e),t.lineTo(0,e+32),t.stroke();t.fillStyle="rgba(255,255,255,0.08)";for(let e=0;e<256;e+=32)t.fillRect(28,e+12,8,8);return bi(s)}var hi={RED:16720448,CYAN:3203327,PINK:16728256,AMBER:16752672,WHITE:16773352,VIOLET:10113279},Ke=new jt,hn=new Ie,bs=new We,Ga=new b(1,1,1),qc=new b,Wa=class{constructor(t,e){this.scene=t,this.Q=e,this.col=new Ha(240,4),this.batches=new Map,this.animated=[],this.jumpPads=[],this.boostPads=[],this.spawnGround=[],this.spawnHigh=[],this.spawnAir=[],this.checkpoints=[],this.half=125,this.R=qi(20261012),this.makeMaterials(),this.build(),this.finalize()}makeMaterials(){let t=this.M={},e=this.Q;[0,1,2,3].map(h=>Ss(100+h*17,h)).forEach((h,c)=>{t["fac"+c]=new de({map:h.map,emissiveMap:h.emissive,emissive:16777215,emissiveIntensity:1.25,roughness:.35,metalness:.55})});let n=nd();n.map.repeat.set(1/16,1/16),n.rough.repeat.set(1/16,1/16),t.ground=new de({map:n.map,roughnessMap:n.rough,roughness:1,metalness:.15,color:11579584,envMapIntensity:1.4}),this.groundTex=n,t.concrete=new de({map:Xc(5),roughness:.82,metalness:.1,color:11053240}),t.panel=new de({map:Wc(3,"#ff2a48"),roughness:.45,metalness:.65}),t.panelC=new de({map:Wc(7,"#30e0ff"),roughness:.45,metalness:.65}),t.metal=new de({color:2763572,roughness:.28,metalness:.92}),t.dark=new de({color:1118486,roughness:.6,metalness:.5}),t.red=new de({color:6949912,roughness:.38,metalness:.7,emissive:1703939}),t.glass=new de({color:658972,roughness:.04,metalness:1,emissive:263694,envMapIntensity:2});let r=sd(),a=rd();t.ramp=new de({map:r,emissiveMap:a,emissive:16777215,emissiveIntensity:1.6,roughness:.4,metalness:.6}),t.road=new de({map:Xc(11),color:5921392,roughness:.3,metalness:.6,envMapIntensity:1.5}),["#7a1820","#14445a","#5a4a14","#2a2a36","#6a2a50"].forEach((h,c)=>{t["cont"+c]=new de({map:fy(h,c),roughness:.55,metalness:.5})});let l=(h,c=2.2)=>new Dt({color:new et(h).multiplyScalar(c),toneMapped:!0});t.nRed=l(hi.RED),t.nCyan=l(hi.CYAN),t.nPink=l(hi.PINK),t.nAmber=l(hi.AMBER),t.nWhite=l(hi.WHITE,1.6),t.nViolet=l(hi.VIOLET),t.pad=new de({color:532528,emissive:hi.CYAN,emissiveIntensity:3}),t.boost=new de({color:3147784,emissive:hi.AMBER,emissiveIntensity:2.5}),this.neonKeys=["nRed","nCyan","nPink","nAmber","nViolet"]}add(t,e,i,{collide:n=!0,flags:r=fe.WALLRUN|fe.GRAPPLE,shadow:a=!0}={}){let o=t.index?t.toNonIndexed():t;e&&o.applyMatrix4(e);for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);return this.batches.has(i)||this.batches.set(i,{geos:[],shadow:a}),this.batches.get(i).geos.push(o),n&&this.col.addGeometry(o,null,r),o}box(t,e,i,n,r,a,o,{rx:l=0,ry:h=0,rz:c=0,us:d=4,vs:u=4,...f}={}){return bs.set(l,h,c,"YXZ"),hn.setFromEuler(bs),Ke.compose(qc.set(t,e,i),hn,Ga),this.add(td(n,r,a,d,u),Ke,o,f)}bbox(t,e,i,n,r,a,o,l={}){return this.box(t,e+r/2,i,n,r,a,o,l)}neon(t,e,i,n,r,a,o,l={}){return this.box(t,e,i,n,r,a,o,{collide:!1,shadow:!1,...l})}wedgeAt(t,e,i,n,r,a,o="ramp",l=0){bs.set(0,i,0,"YXZ"),hn.setFromEuler(bs),Ke.compose(qc.set(t,l,e),hn,Ga),this.add(Gc(n,r,a,4,4,"top"),Ke,o,{flags:fe.GRAPPLE}),this.add(Gc(n,r,a,4,4,"sides"),Ke,"concrete",{flags:fe.GRAPPLE});let h=new b(Math.sin(i),0,Math.cos(i)),c=new b(h.z,0,-h.x);for(let d of[-1,1]){let u=new b(t,l,e).addScaledVector(c,d*(n/2-.05)),f=u.clone().addScaledVector(h,r);f.y+=a,this.strip(u.add(new b(0,.03,0)),f.add(new b(0,.03,0)),.08,"nCyan")}}strip(t,e,i,n){let r=new b().subVectors(e,t),a=r.length(),o=t.clone().add(e).multiplyScalar(.5);hn.setFromUnitVectors(new b(0,0,1),r.normalize()),Ke.compose(o,hn,Ga),this.add(new ee(i,i,a),Ke,n,{collide:!1,shadow:!1})}building(t,e,i,n,r,a=0,o={}){let l=this.R,h="fac"+a%4;this.bbox(t,0,e,i,r,n,h,{us:16,vs:32}),this.bbox(t,r,e,i+.4,.5,n+.4,"concrete",{us:4,vs:4});let c=o.neon||this.neonKeys[l()*this.neonKeys.length|0],d=r+.55;if(this.neon(t,d,e-n/2-.2,i+.4,.12,.12,c),this.neon(t,d,e+n/2+.2,i+.4,.12,.12,c),this.neon(t-i/2-.2,d,e,.12,.12,n+.4,c),this.neon(t+i/2+.2,d,e,.12,.12,n+.4,c),l()<.45)for(let[u,f]of[[-1,-1],[1,1]])this.neon(t+u*(i/2+.06),r/2,e+f*(n/2+.06),.1,r,.1,c);if(!o.cleanRoof){let u=1+(l()*3|0);for(let f=0;f<u;f++){let g=1.5+l()*2.5,x=1.5+l()*2.5,p=.8+l()*1.4,m=t+(l()-.5)*(i-g-2),v=e+(l()-.5)*(n-x-2);this.bbox(m,r+.5,v,g,p,x,l()<.5?"metal":"panel",{flags:fe.GRAPPLE})}if(l()<.5){let f=t+(l()-.5)*i*.6,g=e+(l()-.5)*n*.6,x=6+l()*10;this.bbox(f,r+.5,g,.25,x,.25,"metal",{collide:!1});let p=this.neon(f,r+.5+x,g,.5,.5,.5,"nRed")}}o.sign&&this.sign(o.sign,t,e,i,n,r,o.signColor||"#ff2a48",o.signFace??l()*4|0),i>8&&n>8&&this.spawnHigh.push(new b(t,r+.55,e))}sign(t,e,i,n,r,a,o,l){let h=Va(t,o,{w:1024,h:256}),c=Math.min((l%2===0?n:r)*.85,18),d=c/4,u=new ct(new Xe(c,d),new Dt({map:h,transparent:!0,depthWrite:!1,blending:ge,toneMapped:!1,color:new et(1.6,1.6,1.6)})),f=a*(.55+this.R()*.3),g=.3;l===0?u.position.set(e,f,i+r/2+g):l===1?(u.position.set(e+n/2+g,f,i),u.rotation.y=Math.PI/2):l===2?(u.position.set(e,f,i-r/2-g),u.rotation.y=Math.PI):(u.position.set(e-n/2-g,f,i),u.rotation.y=-Math.PI/2),this.scene.add(u);let x=this.R()*10;this.animated.push(p=>{let m=Math.sin(p*.9+x)>.96&&Math.sin(p*60)>0?.2:1;u.material.opacity=m})}container(t,e,i,n=0,r=null){let a="cont"+(r??this.R()*5|0);this.box(t,e+1.3,i,2.6,2.6,6.2,a,{ry:n,us:6.2,vs:2.6})}quarterPipe(t,e,i,n,r,a="road",o=14){let l=[],h=new b(Math.sin(i),0,Math.cos(i)),c=new b(h.z,0,-h.x),d=new b(t,0,e);for(let p=0;p<=o;p++){let m=p/o*Math.PI/2*.97,v=-n+n*Math.sin(m),y=n-n*Math.cos(m),M=d.clone().addScaledVector(h,v);M.y=y+.001;let I=h.clone().multiplyScalar(Math.cos(m)).add(new b(0,Math.sin(m),0)).normalize(),E=new b().crossVectors(c,I).normalize(),w=c.clone();l.push({p:M,r:E.y<0?w.clone().negate():w,u:E.y<0?E.negate():E})}for(let p of l){let m=d.clone().addScaledVector(h,-n).setY(n).sub(p.p);p.u.dot(m)<0&&p.u.negate()}let u=ka(l,r,.4,{us:4,vs:4});this.add(u,null,a,{flags:fe.GRAPPLE});let f=d.clone().addScaledVector(h,.7);this.box(f.x,n/2,f.z,r,n,1,"concrete",{ry:i,flags:fe.GRAPPLE|fe.WALLRUN});let g=d.clone();g.y=n,this.strip(g.clone().addScaledVector(c,-r/2),g.clone().addScaledVector(c,r/2),.14,"nAmber");let x=d.clone().addScaledVector(h,-n*.15);this.box(x.x,n*.25,x.z,r-.02,n*.5,n*.3,"dark",{ry:i,collide:!1})}pad(t,e,i=0,n=30){let r=new _e(1.7,1.9,.3,32);Ke.makeTranslation(t,i+.15,e),this.add(r,Ke,"pad",{collide:!1,shadow:!1});let a=new ct(new _e(1.6,1.6,9,32,1,!0),new Dt({color:hi.CYAN,transparent:!0,opacity:.1,side:Pe,depthWrite:!1,blending:ge}));a.position.set(t,i+4.5,e),this.scene.add(a);let o=new ct(new qe(1.7,.06,6,40),new Dt({color:new et(hi.CYAN).multiplyScalar(3)}));o.rotation.x=Math.PI/2,o.position.set(t,i+.4,e),this.scene.add(o),this.animated.push(l=>{let h=(l*.8+t*.01)%1;o.position.y=i+.4+h*6,o.material.opacity=1-h,o.material.transparent=!0,o.scale.setScalar(1-h*.3),a.material.opacity=.07+.04*Math.sin(l*5+t)}),this.jumpPads.push({x:t,y:i,z:e,r:1.9,power:n})}boost(t,e,i,n=0,r=6){bs.set(0,i,0,"YXZ"),hn.setFromEuler(bs),Ke.compose(qc.set(t,n+.03,e),hn,Ga);let a=new Xe(3,r);a.rotateX(-Math.PI/2),this.add(a,Ke,"boost",{collide:!1,shadow:!1});let o=new b(Math.sin(i),0,Math.cos(i)),l=[];for(let h=0;h<3;h++){let c=new ct(new Pn(.6,.85,3,1,-Math.PI/6,Math.PI*2/3*1),new Dt({color:new et(hi.AMBER).multiplyScalar(3),transparent:!0,depthWrite:!1}));c.rotation.set(-Math.PI/2,0,-i+Math.PI/2),c.position.set(t,n+.06,e),this.scene.add(c),l.push(c)}this.animated.push(h=>l.forEach((c,d)=>{let u=(h*1.5+d/3)%1;c.position.set(t+o.x*(u-.5)*r,n+.06,e+o.z*(u-.5)*r),c.material.opacity=Math.sin(u*Math.PI)})),this.boostPads.push({x:t,y:n,z:e,dir:o,len:r,w:3})}pillar(t,e,i,n="concrete",r=1.4){this.bbox(t,0,e,r,i,r,n,{flags:fe.GRAPPLE})}laneBlock(t,e){for(let i=0;i<4;i++){let n=(i+1)*Math.PI/2,r=n+Math.PI/2,a=Math.cos(n)*34+Math.cos(r)*17,o=Math.sin(n)*34+Math.sin(r)*17;if(Math.hypot(t-a,e-o)<14)return!0}return Math.hypot(t+26,e-34)<10}build(){let t=this.R,e=this.half,i=new Xe(900,900);i.rotateX(-Math.PI/2);let n=i.attributes.uv,r=i.attributes.position;for(let E=0;E<n.count;E++)n.setXY(E,r.getX(E),-r.getZ(E));this.add(i,null,"ground",{collide:!1});let a=46,o=25;for(let E=0;E<4;E++)for(let w=-e;w<e;w+=o){let C=a+(t()-.5)*16,U=E+(w/o|0)&3,_=w+o/2;E===0&&this.building(_,-e-6,o,12,C,U,{cleanRoof:!0}),E===1&&this.building(_,e+6,o,12,C,U,{cleanRoof:!0}),E===2&&this.building(-e-6,_,12,o,C,U,{cleanRoof:!0}),E===3&&this.building(e+6,_,12,o,C,U,{cleanRoof:!0})}for(let[E,w]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.building(E*(e+6),w*(e+6),12,12,52,1,{cleanRoof:!0});this.signs(),this.bbox(0,0,0,10,62,10,"glass",{us:4,vs:4});for(let[E,w]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.neon(E*5.06,31,w*5.06,.16,62,.16,"nRed");for(let E=6;E<62;E+=8)this.neon(0,E,5.06,10.1,.08,.08,"nCyan"),this.neon(0,E,-5.06,10.1,.08,.08,"nCyan"),this.neon(5.06,E,0,.08,.08,10.1,"nCyan"),this.neon(-5.06,E,0,.08,.08,10.1,"nCyan");let l=24,h=new _e(11.3,11.3,1,48);Ke.makeTranslation(0,l-.5,0),this.add(h,Ke,"panelC");let c=new qe(11.35,.1,6,96);c.rotateX(Math.PI/2),Ke.makeTranslation(0,l+.02,0),this.add(c,Ke,"nRed",{collide:!1,shadow:!1});let d=ed(13.6,Math.PI*.5,Math.PI*.5+Math.PI*3,.02,l,120,(E,w)=>-.22*Math.min(1,w*12,(1-w)*12));this.add(ka(d,5,.6,{us:5,vs:4}),null,"ramp",{flags:fe.GRAPPLE});for(let E=0;E<d.length-1;E+=1){let w=d[E],C=d[E+1];this.strip(w.p.clone().addScaledVector(w.r,2.48).addScaledVector(w.u,.03),C.p.clone().addScaledVector(C.r,2.48).addScaledVector(C.u,.03),.07,"nCyan"),E%10===5&&w.p.y>3&&this.bbox(w.p.x,0,w.p.z,.8,w.p.y-.6,.8,"metal",{flags:fe.GRAPPLE})}this.pad(7.5,0,l,34),this.pad(-7.5,0,l,34);let u=55,f=7.2,g=E=>.02+f*Math.pow(Math.sin(2*E),2),x=E=>-.26*Math.pow(Math.sin(2*E),2),p=id(u,0,Math.PI*2,192,g,x,!0);this.add(ka(p,9,.8,{closed:!0,us:9,vs:6}),null,"road",{flags:fe.GRAPPLE}),this.ringH=g,this.ringR=u;for(let E=0;E<p.length;E++){let w=p[E],C=p[(E+1)%p.length];for(let U of[-1,1])this.strip(w.p.clone().addScaledVector(w.r,U*4.45).addScaledVector(w.u,.05),C.p.clone().addScaledVector(C.r,U*4.45).addScaledVector(C.u,.05),.1,U>0?"nRed":"nAmber");if(E%8===4&&w.p.y>2.2){let U=w.p;this.bbox(U.x,0,U.z,1.4,U.y-.85,1.4,"concrete",{flags:fe.GRAPPLE})}}for(let E=0;E<4;E++){let w=E*Math.PI/2,C=new b(-Math.sin(w),0,Math.cos(w));this.boost(Math.cos(w)*u,Math.sin(w)*u,Math.atan2(C.x,C.z),.06)}for(let E=0;E<4;E++){let w=E*Math.PI/2+Math.PI/4;this.pad(Math.cos(w)*24,Math.sin(w)*24);let C=w+Math.PI/4,U=Math.cos(C)*34,_=Math.sin(C)*34,S=C+Math.PI/2;for(let F of[-1,1]){let G=Math.cos(C)*F*4.2,N=Math.sin(C)*F*4.2;this.box(U+G,5,_+N,1.2,10,22,E%2?"panel":"panelC",{ry:-S+Math.PI/2,us:4,vs:4}),this.box(U+G,10.05,_+N,1.25,.1,22.05,E%2?"nRed":"nCyan",{ry:-S+Math.PI/2,collide:!1,shadow:!1})}let L=Math.cos(C)*34+Math.cos(S)*17,D=Math.sin(C)*34+Math.sin(S)*17;this.wedgeAt(L,D,Math.atan2(-Math.cos(S),-Math.sin(S)),5,7,2.4);for(let F=0;F<3;F++){let G=w+(t()-.5)*.9,N=28+t()*16,q=Math.cos(G)*N,H=Math.sin(G)*N;Math.abs(N-34)<6||this.laneBlock(q,H)||this.bbox(q,0,H,2+t()*3,1.2+t()*1.8,2+t()*3,t()<.5?"panel":"red",{ry:t()*3,flags:fe.GRAPPLE})}this.spawnGround.push(new b(Math.cos(w)*40,0,Math.sin(w)*40)),this.spawnGround.push(new b(Math.cos(C)*22,0,Math.sin(C)*22))}this.districtNorthAlleys(),this.districtSouthSkate(),this.districtEastPort(),this.districtWestMarket(),this.districtCorners();let m=new ue({transparent:!0,depthWrite:!1,blending:ge,side:Pe,uniforms:{color:{value:new et(1.6,.12,.25)},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec2 vUv; uniform vec3 color; uniform float time; void main(){ float a = (1.0 - vUv.y) * (0.6 + 0.4*sin(vUv.y*40.0 - time*6.0)); a *= smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x); gl_FragColor = vec4(color, a * 0.5); }"}),v=new ct(new _e(1.2,2.6,400,24,1,!0),m);v.position.y=262,this.scene.add(v);let y=[];for(let E=0;E<4;E++){let w=m.clone();w.uniforms.color.value=new et(E%2?.25:.9,E%2?.8:.15,E%2?1.1:.3);let C=new ct(new _e(.4,9,260,20,1,!0),w);C.geometry.translate(0,130,0);let U=new ae;U.position.set((E<2?-1:1)*132,52,(E%2?-1:1)*132),U.add(C),this.scene.add(U),y.push({piv:U,ph:E*1.7})}this.animated.push(E=>{m.uniforms.time.value=E,y.forEach(w=>{w.piv.rotation.set(.5+Math.sin(E*.21+w.ph)*.25,E*.13+w.ph,Math.sin(E*.17+w.ph)*.3),w.piv.children[0].material.uniforms.time.value=E})});{let E=document.createElement("canvas");E.width=E.height=1024;let w=E.getContext("2d");w.translate(512,512),w.strokeStyle="rgba(255,42,72,0.85)",w.lineWidth=14,w.beginPath(),w.arc(0,0,480,0,Math.PI*2),w.stroke(),w.lineWidth=4,w.beginPath(),w.arc(0,0,440,0,Math.PI*2),w.stroke(),w.font="900 64px Orbitron, sans-serif",w.fillStyle="rgba(255,42,72,0.8)",w.textAlign="center";let C="REDSHIFT \xB7 VELOCITY IS THE BLADE \xB7 \u8D64\u7DDA \xB7 ";for(let S=0;S<C.length;S++)w.save(),w.rotate(S/C.length*Math.PI*2),w.fillText(C[S],0,-365),w.restore();for(let S=0;S<24;S++)w.save(),w.rotate(S/24*Math.PI*2),w.fillStyle="rgba(48,224,255,0.6)",w.fillRect(-6,-300,12,40),w.restore();let U=new Rn(E);U.colorSpace=Ze,U.anisotropy=8;let _=new ct(new Xe(40,40),new Dt({map:U,transparent:!0,depthWrite:!1,blending:ge,color:new et(1.3,1.3,1.3),polygonOffset:!0,polygonOffsetFactor:-2}));_.rotation.x=-Math.PI/2,_.position.y=.03,this.scene.add(_)}let M=new ct(new qe(9,.18,10,128),new Dt({color:new et(hi.RED).multiplyScalar(3)}));M.position.y=66,this.scene.add(M);let I=new ct(new qe(12,.1,8,128),new Dt({color:new et(hi.CYAN).multiplyScalar(3)}));I.position.y=70,this.scene.add(I),this.animated.push(E=>{M.rotation.set(Math.PI/2+Math.sin(E*.4)*.15,0,E*.3),I.rotation.set(Math.PI/2.4,E*.2,-E*.5)}),this.course()}districtNorthAlleys(){let t=this.R,e=-76,i=[[-94,9],[-110,9]];for(let n=-66;n<=66;n+=33)Math.abs(n)<20||(this.building(n,-88,24,10,18+t()*14,(n/33|0)&3,{sign:t()<.4?["\u8D64\u7DDA","\u591C\u5E02","KATANA","\uB124\uC628"][t()*4|0]:null,signColor:["#ff2a48","#30e0ff","#ff40c0"][t()*3|0],signFace:0}),this.building(n+4,-106,24,8,26+t()*18,(n/33|0)+1&3),this.spawnGround.push(new b(n+16,0,-97)));for(let n of[-1,1])this.bbox(n*4.6,0,-96,1.6,16,40,"fac"+(n>0?1:2),{us:16,vs:32}),this.neon(n*4.6-n*.82,16,-96,.1,.1,40,n>0?"nCyan":"nRed"),this.neon(n*4.6-n*.82,8,-96,.1,.1,40,"nPink");for(let n=-66;n<=66;n+=66)n!==0&&(this.bbox(n,17.5,-97,3,.5,9,"red"),this.neon(n-1.5,18.05,-97,.08,.08,9,"nRed"),this.neon(n+1.5,18.05,-97,.08,.08,9,"nRed"));this.wedgeAt(0,-62,Math.PI,6,8,2.2),this.wedgeAt(-50,-64,Math.PI,6,18,9,"ramp"),this.bbox(-50,0,-88,7,9,10,"panel",{us:4,vs:4})}districtSouthSkate(){this.quarterPipe(-34,108,0,7,22,"road"),this.quarterPipe(-34,84,Math.PI,7,22,"road"),this.bbox(-34,0,96,22,.05,10,"road",{collide:!1}),this.quarterPipe(26,114,0,9,26,"road"),this.quarterPipe(66,114,0,6,18,"road"),this.wedgeAt(20,92,0,6,8,2.8),this.wedgeAt(48,92,Math.PI,6,8,2.8),this.bbox(34,0,92,12,2.8,8,"panel",{flags:fe.GRAPPLE}),this.wedgeAt(34,102,Math.PI,12,6,2.8),this.wedgeAt(34,82,0,12,6,2.8),this.bbox(-4,0,96,.3,1.1,18,"metal",{flags:fe.GRAPPLE}),this.neon(-4,1.15,96,.12,.08,18,"nAmber"),this.bbox(-70,0,100,1,26,1,"metal"),this.bbox(-58,0,100,1,26,1,"metal"),this.bbox(-64,22,100,14,6,.6,"dark"),this.billboard(-64,25,99.6,13.5,5.4,"REDSHIFT","#ff2a48",Math.PI),this.building(74,92,10,12,10,2,{sign:"SKATE",signColor:"#ffa020",signFace:3}),this.spawnGround.push(new b(10,0,100),new b(-60,0,80),new b(60,0,80))}districtEastPort(){let t=this.R;for(let n=0;n<22;n++){let r=74+n%4*11+(t()-.5)*2,a=-50+Math.floor(n/4)*18+(t()-.5)*3;if(Math.hypot(r,a)<66||Math.abs(r-104)<8&&Math.abs(a-8)<8)continue;let o=1+(t()*3|0),l=t()<.5?0:Math.PI/2;for(let h=0;h<o;h++)this.container(r+(t()-.5)*.4,h*2.6,a+(t()-.5)*.4,l+(t()-.5)*.05);o>=2&&this.spawnHigh.push(new b(r,o*2.6,a))}let e=104,i=8;for(let[n,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.bbox(e+n*3,0,i+r*3,.8,34,.8,"red");this.bbox(e,34,i,7,2,7,"red"),this.box(e-20,37,i,50,1.6,2.4,"red",{flags:fe.GRAPPLE|fe.WALLRUN}),this.neon(e-20,37.85,i,50,.1,.1,"nAmber"),this.bbox(e-5,34,i,4,7,4,"panel"),this.spawnHigh.push(new b(e,36,i)),this.wedgeAt(75.6,-60,Math.PI/2,6,10,2.6),this.container(88.6,0,-60,Math.PI/2,1),this.container(97,0,-60,Math.PI/2,3),this.container(97,2.6,-60,Math.PI/2,0),this.spawnGround.push(new b(80,0,-20),new b(96,0,40),new b(86,0,60))}districtWestMarket(){let t=this.R;[[-80,-40,12,14,5],[-98,-40,14,14,8],[-82,-12,12,12,6.5],[-100,-14,12,16,11],[-80,16,12,12,4],[-98,18,14,14,7.5],[-82,44,12,14,9],[-102,46,12,14,13]].forEach(([i,n,r,a,o],l)=>{this.building(i,n,r,a,o,l&3,{cleanRoof:l%2===0,sign:l%3===0?["\u30E9\u30FC\u30E1\u30F3","\uC5F4\uD608","OPEN 24H"][l%3===0?l/3%3:0]:null,signColor:"#ffa020",signFace:1}),this.box(i+r/2+1.2,3.2,n,2.4,.15,a*.8,"red",{rz:-.25,flags:fe.GRAPPLE}),this.neon(i+r/2+2.35,2.92,n,.08,.08,a*.8,"nAmber")}),this.wedgeAt(-80,-57,0,6,10,5.5),this.bbox(-89,7,-40,6,.4,3,"metal"),this.wedgeAt(-82,7,Math.PI,6,13,7),this.bbox(-88,6.2,18,4,.4,3,"metal"),this.bbox(-91,10,45,8,.4,3,"metal"),this.spawnGround.push(new b(-74,0,0),new b(-74,0,30),new b(-90,0,-26))}districtCorners(){let t=this.R;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([i,n],r)=>{let a=i*98,o=n*98,l=42+r*6;this.building(a,o,18,18,l,r,{sign:["REDSHIFT","VELOCITY","\u8D64\u7DDA","NO LIMIT"][r],signColor:["#ff2a48","#30e0ff","#ff40c0","#ffa020"][r],signFace:i>0?3:1});let h=a-i*15,c=o;this.building(h,c,6,18,l*.6,r+1&3,{cleanRoof:!0}),this.building(a,o-n*16,14,8,l*.35,r+2&3),this.spawnHigh.push(new b(a,l+.55,o)),this.spawnGround.push(new b(a-i*22,0,o-n*22))})}billboard(t,e,i,n,r,a,o,l){let h=Va(a,o,{w:1024,h:384,font:'900 190px "Orbitron",sans-serif'}),c=new ct(new Xe(n,r),new Dt({map:h,toneMapped:!1,color:new et(1.5,1.5,1.5)}));c.position.set(t,e,i),c.rotation.y=l,this.scene.add(c)}signs(){let t=this.half,e=[[0,30,-t+.3,0,"REDSHIFT","#ff2a48"],[0,30,t-.3,Math.PI,"VELOCITY","#30e0ff"],[-t+.3,30,0,Math.PI/2,"\u8D64\u7DDA","#ff40c0"],[t-.3,30,0,-Math.PI/2,"NO LIMIT","#ffa020"]];for(let[i,n,r,a,o,l]of e){let h=Va(o,l,{w:1024,h:256}),c=new ct(new Xe(36,9),new Dt({map:h,transparent:!0,depthWrite:!1,blending:ge,toneMapped:!1,color:new et(1.8,1.8,1.8)}));c.position.set(i,n,r),c.rotation.y=a,this.scene.add(c);let d=i+r;this.animated.push(u=>{c.material.opacity=.85+.15*Math.sin(u*3+d)})}}course(){this.trialStart={pos:new b(-26,.05,34),yaw:-Math.PI/2};let t=[[0,4,34],[0,2.2,55],[-38.9,9.4,38.9],[-55,2.2,0],[-38.9,9.4,-38.9],[0,3.5,-70],[0,7,-96],[-12,3.5,-119],[-33,4,-97.5],[-66,20,-97],[-98,47.5,-98],[-80,7.5,-40],[-82,9,-12],[-64,30,100],[-34,4,96],[26,10,110],[34,6,92],[90,40,8],[90,6,-32],[13.6,13.5,0],[0,26.5,-8]];this.checkpoints=t.map(([e,i,n])=>new b(e,i,n))}finalize(){let t=this.Q;for(let[e,i]of this.batches){let n=Qu(i.geos,!1);i.geos.forEach(a=>a.dispose());let r=new ct(n,this.M[e]);r.castShadow=i.shadow&&t.shadows&&e!=="ground",r.receiveShadow=!this.neonKeys.includes(e)&&!e.startsWith("n"),r.matrixAutoUpdate=!1,r.updateMatrix(),this.scene.add(r)}this.batches.clear(),this.col.build()}update(t,e){for(let i of this.animated)i(t,e)}};function fy(s,t){let e=document.createElement("canvas");e.width=512,e.height=256;let i=e.getContext("2d");i.fillStyle=s,i.fillRect(0,0,512,256);for(let r=0;r<512;r+=16)i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(r,0,6,256),i.fillStyle="rgba(255,255,255,0.06)",i.fillRect(r+7,0,2,256);i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=10,i.strokeRect(5,5,502,246),i.fillStyle="rgba(255,255,255,0.75)",i.font="700 34px monospace",i.fillText(["RDSH","NEON","AKSN","VELO","KTNA"][t%5]+" "+(1e3+t*137)%9999,30,60);for(let r=0;r<300;r++)i.fillStyle=`rgba(60,30,10,${Math.random()*.25})`,i.fillRect(Math.random()*512,Math.random()*256,3+Math.random()*12,2+Math.random()*6);let n=new Rn(e);return n.colorSpace=Ze,n.wrapS=n.wrapT=Tn,n.anisotropy=8,n}var Xa=class{constructor(t,e){this.scene=t,this.Q=e,this.updaters=[],this.sky(),this.lights(),this.skyline(),this.traffic(),e.rain&&this.rain()}sky(){let t=new ue({side:Ge,depthWrite:!1,fog:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position = p.xyww; }",fragmentShader:`
        varying vec3 vP; uniform float time;
        float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
        float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        float n2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
          return mix(mix(h2(i),h2(i+vec2(1,0)),f.x), mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*n2(p); p*=2.03; a*=.5; } return s; }
        void main(){
          vec3 d = normalize(vP);
          float y = d.y;
          vec3 top = vec3(0.012,0.008,0.03);
          vec3 mid = vec3(0.09,0.012,0.06);
          vec3 hor = vec3(0.42,0.04,0.11);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.2, y));
          c = mix(c, top, smoothstep(0.18, 0.75, y));
          // city glow at horizon
          c += vec3(0.5,0.06,0.12) * exp(-max(y,0.)*14.) * 0.6;
          // moon
          vec3 md = normalize(vec3(-0.35, 0.42, -0.84));
          float mdot = dot(d, md);
          float moon = smoothstep(0.9988, 0.9991, mdot);
          vec2 mp = (d - md*mdot).xy * 80.;
          float crater = fbm(mp*0.6 + 3.);
          c = mix(c, vec3(1.0,0.86,0.86) * (0.7 + 0.5*crater), moon);
          c += vec3(0.9,0.35,0.45) * pow(max(mdot,0.), 400.) * 0.7;
          c += vec3(0.5,0.12,0.2) * pow(max(mdot,0.), 30.) * 0.15;
          // clouds (two layers drifting), lit from below by the city
          if (y > 0.0) {
            vec2 uv = d.xz / (y + 0.12);
            float cl = fbm(uv * 0.9 + vec2(time*0.006, time*0.002));
            float cl2 = fbm(uv * 2.2 - vec2(time*0.01, 0.));
            float cov = smoothstep(0.48, 0.85, cl*0.7 + cl2*0.35);
            vec3 cc = mix(vec3(0.35,0.05,0.12), vec3(0.06,0.02,0.07), smoothstep(0.,0.5,y));
            c = mix(c, cc, cov * smoothstep(0.0, 0.08, y) * (1.0 - moon));
            // stars where clear
            vec3 sp = floor(d * 360.0);
            float st = step(0.9965, h(sp)) * smoothstep(0.12, 0.45, y) * (1.0 - cov);
            c += vec3(st) * (0.4 + 0.6*sin(time*2.0 + h(sp)*40.0));
          }
          gl_FragColor = vec4(c, 1.0);
        }`});this.skyMesh=new ct(new Ci(1200,64,32),t),this.skyMesh.frustumCulled=!1,this.scene.add(this.skyMesh),this.scene.fog=new fa(1836818,.0042),this.scene.background=new et(328202)}lights(){let t=this.scene,e=this.Q;t.add(new ys(8022712,2755092,.6));let i=new Pi(13154559,1.15);if(i.position.set(-60,110,-140),i.castShadow=e.shadows,e.shadows){i.shadow.mapSize.set(e.shadowSize,e.shadowSize);let a=i.shadow.camera;a.left=-80,a.right=80,a.top=80,a.bottom=-80,a.near=20,a.far=400,i.shadow.bias=-3e-4,i.shadow.normalBias=.05}t.add(i),t.add(i.target),this.moon=i;let n=new Pi(16724048,.55);n.position.set(80,30,120),t.add(n);let r=new Pi(3197183,.3);if(r.position.set(-100,20,60),t.add(r),e.lights){let a=[[0,4,0,16720448,40,80],[0,26,0,3203327,30,50],[55,9,0,16752672,26,40],[-55,9,0,16752672,26,40],[0,9,55,16720448,26,40],[0,9,-55,16720448,26,40],[-34,6,96,16728256,30,60],[90,8,-10,16752672,30,50],[-86,6,0,16752672,30,50],[0,8,-96,3203327,30,60]];for(let[o,l,h,c,d,u]of a){let f=new vs(c,u,d,1.6);f.position.set(o,l,h),t.add(f)}}}skyline(){let t=qi(4242),i=[Ss(901,0),Ss(902,1),Ss(903,2)].map(p=>new Dt({map:p.emissive,color:12299007,fog:!0})),n=new Dt({color:657424}),r=160,a=new ee(1,1,1),o=i.map(p=>new an(a,[n,n,p,n,p,p].map((m,v)=>v===2?n:p),r)),l=[0,0,0],h=new jt,c=new Ie,d=new b,u=new b;for(let p=0;p<r*3;p++){let m=t()*Math.PI*2,v=180+t()*420,y=14+t()*34,M=50+t()*220*(v>350?1.3:1),I=p%3;l[I]>=r||(c.setFromEuler(new We(0,t()*Math.PI,0)),u.set(Math.cos(m)*v,M/2,Math.sin(m)*v),d.set(y,M,y*(.6+t()*.8)),h.compose(u,c,d),o[I].setMatrixAt(l[I]++,h))}o.forEach((p,m)=>{p.count=l[m],p.frustumCulled=!1,this.scene.add(p)});let f=new Ci(1.4,8,6),g=new Dt({color:new et(16719936).multiplyScalar(4)}),x=new an(f,g,40);for(let p=0;p<40;p++){let m=t()*Math.PI*2,v=220+t()*300;h.makeTranslation(Math.cos(m)*v,120+t()*180,Math.sin(m)*v),x.setMatrixAt(p,h)}this.scene.add(x),this.updaters.push(p=>{x.visible=Math.sin(p*2.4)>-.2})}traffic(){let t=this.Q.traffic,e=new ee(2.2,.7,4.4),i=new an(e,new Dt({color:1380892}),t),n=new ee(2,.25,.2),r=new an(n,new Dt({color:new et(16715824).multiplyScalar(5)}),t),a=new an(n,new Dt({color:new et(16773328).multiplyScalar(4)}),t),o=qi(77),l=[];for(let g=0;g<t;g++){let x=g%6;l.push({r:150+x*22+o()*6,y:55+x*9+o()*4,a:o()*Math.PI*2,s:(x%2?1:-1)*(.05+o()*.05)})}[i,r,a].forEach(g=>{g.frustumCulled=!1,this.scene.add(g)});let h=new jt,c=new Ie,d=new b,u=new b(1,1,1),f=new b;this.updaters.push((g,x)=>{for(let p=0;p<t;p++){let m=l[p];m.a+=m.s*x,d.set(Math.cos(m.a)*m.r,m.y+Math.sin(g+p)*.5,Math.sin(m.a)*m.r);let v=-m.a+(m.s>0?0:Math.PI);c.setFromAxisAngle(le.DEFAULT_UP,v),h.compose(d,c,u),i.setMatrixAt(p,h),f.set(0,0,-2.25).applyQuaternion(c).add(d),h.compose(f,c,u),r.setMatrixAt(p,h),f.set(0,0,2.25).applyQuaternion(c).add(d),h.compose(f,c,u),a.setMatrixAt(p,h)}i.instanceMatrix.needsUpdate=r.instanceMatrix.needsUpdate=a.instanceMatrix.needsUpdate=!0})}rain(){let t=this.Q.rainCount,e=new Float32Array(t*6);this.rainData=new Float32Array(t*4);for(let a=0;a<t;a++)this.rainData[a*4]=(Math.random()-.5)*80,this.rainData[a*4+1]=Math.random()*40,this.rainData[a*4+2]=(Math.random()-.5)*80,this.rainData[a*4+3]=28+Math.random()*10;let i=new Kt;i.setAttribute("position",new he(e,3).setUsage(li));let n=new Xi({color:10135768,transparent:!0,opacity:.32,blending:ge,depthWrite:!1}),r=new ms(i,n);r.frustumCulled=!1,this.scene.add(r),this.rainLines=r,this.rainCenter=new b}update(t,e,i,n){this.skyMesh.material.uniforms.time.value=t,this.skyMesh.position.copy(i);for(let r of this.updaters)r(t,e);if(this.moon.position.set(i.x-60,110,i.z-140),this.moon.target.position.set(i.x,0,i.z),this.rainLines){let r=this.Q.rainCount,a=this.rainData,o=this.rainLines.geometry.attributes.position.array,l=2.5-(n?n.x*.25:0),h=1-(n?n.z*.25:0);for(let c=0;c<r;c++){let d=a[c*4],u=a[c*4+1],f=a[c*4+2],g=a[c*4+3];u-=g*e,d+=2.5*e,f+=1*e;let x=d-i.x,p=f-i.z;(u<0||x>40||x<-40||p>40||p<-40)&&(d=i.x+(Math.random()-.5)*80,f=i.z+(Math.random()-.5)*80,u=i.y+10+Math.random()*30),a[c*4]=d,a[c*4+1]=u,a[c*4+2]=f;let m=.06;o[c*6]=d,o[c*6+1]=u,o[c*6+2]=f,o[c*6+3]=d-(2.5-l)*m*0+l*m,o[c*6+4]=u+g*m,o[c*6+5]=f+h*m}this.rainLines.geometry.attributes.position.needsUpdate=!0}}};var it={gravity:30,runSpeed:11.5,crouchSpeed:5,groundAccel:14,friction:8,stopSpeed:5,airAccel:12,airCap:1,airControl:3.5,airSteer:1.7,jumpVel:10.2,airJumpVel:9.6,airJumps:1,coyote:.11,jumpBuffer:.13,slideTarget:16.5,slideBoostMin:3.5,slideBoostMax:9,slideBoostCd:1.25,slideFriction:.42,slideMinSpeed:4.5,slideSteer:2.2,slideLandFactor:.38,dashCharges:2,dashRecharge:1.6,dashBurst:27,dashTime:.13,dashGain:5,wallrunMin:6,wallrunTime:1.75,wallrunSpeed:14,wallJumpOut:8.5,wallJumpUp:9.5,climbTime:.45,climbVel:7.5,grappleRange:75,grappleHookSpeed:200,grapplePull:40,grappleYank:7,grappleCharges:2,grappleRecharge:2.4,maxSpeed:80,standH:1.8,crouchH:1.05,radius:.4},py=new b(0,1,0),Me=new b,ws=new b,ld=new b,qa=[],Yc=new b,Ya={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},cd={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},$a=class{constructor(t,e){this.map=t,this.col=t.col,this.ev=e,this.pos=new b,this.prevPos=new b,this.vel=new b,this.yaw=0,this.pitch=0,this.reset(new b(0,0,30),Math.PI)}reset(t,e){this.pos.copy(t),this.prevPos.copy(t),this.vel.set(0,0,0),this.yaw=e,this.pitch=0,this.h=it.standH,this.eyeH=it.standH-.14,this.prevEyeH=this.eyeH,this.grounded=!1,this.groundN=new b(0,1,0),this.groundTime=0,this.airTime=0,this.coyoteT=0,this.bufferT=0,this.airJumps=it.airJumps,this.state="air",this.crouching=!1,this.sliding=!1,this.slideCd=0,this.slideT=0,this.dashCharges=it.dashCharges,this.dashRegen=0,this.dashT=0,this.dashDir=new b,this.dashExit=0,this.wall=null,this.wallCd=0,this.lastWallN=new b,this.wallContact=null,this.climbT=0,this.climbUsed=!1,this.mantle=null,this.hook=null,this.grapple=null,this.grappleCharges=it.grappleCharges,this.grappleRegen=0,this.stagger=0,this.burstT=0,this.burstDir=new b,this.burstSpeed=0,this.burstExit=0,this.speed=0,this.hSpeed=0,this.jumpedTick=!1,this.lastLand=0,this.padCd=0,this.alive=!0}get eye(){return ld.set(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}lookDir(t){return t.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}flatFwd(t){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}flatRight(t){return t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}wish(t,e){let i=this.flatFwd(Me),n=this.flatRight(ws);e.set(i.x*t.fwd+n.x*t.right,0,i.z*t.fwd+n.z*t.right);let r=e.length();return r>0&&e.divideScalar(r),e}accelerate(t,e,i,n,r=1/0){let a=this.vel.x*t.x+this.vel.z*t.z,o=Math.min(e,r)-a;if(o<=0)return;let l=Math.min(i*n*e,o);this.vel.x+=t.x*l,this.vel.z+=t.z*l}friction(t,e){let i=this.grounded,n=i?this.vel.length():Math.hypot(this.vel.x,this.vel.z);if(n<.05){this.vel.x=this.vel.z=0,i&&(this.vel.y=0);return}let r=Math.max(n,it.stopSpeed)*t*e,a=Math.max(0,n-r)/n;this.vel.x*=a,this.vel.z*=a,i&&(this.vel.y*=a)}steer(t,e,i){let n=Math.hypot(this.vel.x,this.vel.z);if(n<.5)return;let r=this.vel.x/n,a=this.vel.z/n,o=r*t.z-a*t.x,l=r*t.x+a*t.z,h=Math.atan2(o,l),c=Math.sign(h)*Math.min(Math.abs(h),e*i),d=Math.cos(c),u=Math.sin(c);this.vel.x=(r*d-a*u)*n,this.vel.z=(r*u+a*d)*n}tick(t,e,i){this.prevPos.copy(this.pos),this.prevEyeH=this.eyeH;let n=this.wish(e,new b),r=n.lengthSq()>0;this.jumpedTick=!1,this.coyoteT-=t,this.bufferT-=t,this.steerLock=(this.steerLock||0)-t,this.slideCd-=t,this.wallCd-=t,this.padCd-=t,this.stagger=Math.max(0,this.stagger-t),e.jumpPressed&&(this.bufferT=it.jumpBuffer),this.dashCharges<it.dashCharges?(this.dashRegen+=t,this.dashRegen>=it.dashRecharge&&(this.dashCharges++,this.dashRegen=0)):this.dashRegen=0,this.grappleCharges<it.grappleCharges&&!this.grapple&&!this.hook&&(this.grappleRegen+=t,this.grappleRegen>=it.grappleRecharge&&(this.grappleCharges++,this.grappleRegen=0));let a=this.stagger>0;if(this.mantle){this.tickMantle(t);return}let o=e.crouch&&!a;o&&!this.crouching&&(this.crouching=!0,this.grounded&&this.hSpeedNow()>it.slideMinSpeed-1&&this.startSlide(n),this.wall&&this.endWall()),!o&&this.crouching&&this.canStand()&&(this.crouching=!1,this.sliding=!1);let l=this.crouching?it.crouchH:it.standH;l<this.h?this.h=l:l>this.h&&(this.h=Math.min(l,this.h+t*9));let h=this.h-(this.crouching?.2:.14);if(this.eyeH+=(h-this.eyeH)*Math.min(1,t*16),e.dashPressed&&this.dashCharges>0&&!a&&this.startDash(r?n:this.flatFwd(new b),e),this.dashT>0&&(this.dashT-=t,this.vel.x=this.dashDir.x*Math.max(it.dashBurst,this.dashExit+6),this.vel.z=this.dashDir.z*Math.max(it.dashBurst,this.dashExit+6),this.grounded||(this.vel.y=Math.max(this.vel.y,0)*.5),this.dashT<=0&&(this.vel.x=this.dashDir.x*this.dashExit,this.vel.z=this.dashDir.z*this.dashExit)),this.burstT>0&&(this.burstT-=t,this.vel.copy(this.burstDir).multiplyScalar(this.burstSpeed),this.burstT<=0&&this.vel.copy(this.burstDir).multiplyScalar(this.burstExit)),e.grapplePressed&&!this.hook&&!this.grapple&&this.grappleCharges>0&&!a&&this.fireHook(i),this.hook&&this.tickHook(t,i),this.grapple&&this.tickGrapple(t,e,i),this.scanWall(),this.wall?this.tickWall(t,e,n):!this.grounded&&!this.grapple&&this.dashT<=0&&this.tryWall(e,n),this.bufferT>0&&!a&&(this.wall?(this.wallJump(e),this.bufferT=0):this.grounded||this.coyoteT>0?(this.groundJump(),this.bufferT=0):e.jumpPressed&&this.grapple?(this.releaseGrapple(!0),this.vel.y=Math.max(this.vel.y,0)+5,this.bufferT=0,this.ev.jump("grapple")):e.jumpPressed&&this.airJumps>0&&(this.airJump(n,r),this.bufferT=0)),e.jumpHeld&&e.autoHop&&this.grounded&&!this.jumpedTick&&!a&&this.groundTime>0&&this.groundJump(),!(this.wall||this.dashT>0||this.burstT>0)){if(this.grounded)if(this.sliding)this.tickSlide(t,e,n,r);else{this.jumpedTick||this.friction(it.friction,t);let f=this.crouching?it.crouchSpeed:it.runSpeed;if(r&&!a){let g=this.groundN;Me.copy(n).addScaledVector(g,-n.dot(g)).normalize();let x=this.vel.dot(Me),p=f-x;p>0&&this.vel.addScaledVector(Me,Math.min(it.groundAccel*t*f,p))}}else if(r&&!a){this.accelerate(n,it.runSpeed,it.airAccel,t,it.airCap);let f=this.hSpeedNow();if(f<it.runSpeed*.95&&this.accelerate(n,it.runSpeed,it.airControl,t),e.fwd>0&&e.right===0&&!this.grapple&&this.steerLock<=0){let g=it.airSteer*(1.2-Math.min(.7,f/60));this.steer(this.flatFwd(ws),g,t)}}}if(this.grounded){if(this.sliding){let f=this.groundN;Me.set(0,-it.gravity,0),Me.addScaledVector(f,-Me.dot(f)),this.vel.addScaledVector(Me,t)}}else{let f=it.gravity;this.wall||this.climbT>0?f=0:this.dashT>0?f*=.1:this.burstT>0?f=0:this.crouching&&this.vel.y<0&&(f*=1.55),this.vel.y-=f*t}let c=this.vel.length();c>it.maxSpeed&&this.vel.multiplyScalar(1-Math.min(1,(c-it.maxSpeed)/c*t*6));let d=this.grounded;Yc.copy(this.vel);let u=Yc.y;this.integrate(t),d&&this.wallContact&&!this.jumpedTick&&this.stepUp(Yc),d&&!this.grounded&&!this.jumpedTick&&this.dashT<=0&&this.vel.y<3&&!this.grapple&&this.snap(),!this.mantle&&!this.wall&&e.fwd>0&&this.wallContact&&this.vel.y<6&&!a&&this.tryMantle(),this.checkPads(),this.grounded?(d||this.onLand(u,n),this.groundTime+=t,this.airTime=0,this.coyoteT=it.coyote,this.airJumps=it.airJumps,this.climbUsed=!1,this.wall&&this.endWall()):(this.groundTime=0,this.airTime+=t),this.sliding&&!this.grounded&&this.airTime>.15&&(this.sliding=!1),this.hSpeed=this.hSpeedNow(),this.speed=this.vel.length(),this.state=this.mantle?"mantle":this.wall?"wall":this.grapple?"grapple":this.dashT>0?"dash":this.sliding?"slide":this.grounded?"ground":"air",this.pos.y<-30&&this.ev.fell&&this.ev.fell()}hSpeedNow(){return Math.hypot(this.vel.x,this.vel.z)}get invuln(){return this.dashT>0||this.burstT>0}burst(t,e,i,n){this.burstDir=t.clone().normalize(),this.burstSpeed=e,this.burstT=i,this.burstExit=n,this.wall&&this.endWall(),this.grapple&&this.releaseGrapple(!1),this.sliding=!1,this.grounded&&this.burstDir.y<.05&&(this.burstDir.y=Math.max(this.burstDir.y,.02))}integrate(t){let e=this.vel.length(),i=Math.min(10,Math.max(1,Math.ceil(e*t/.22))),n=t/i;this.grounded=!1,this.wallContact=null;for(let r=0;r<i;r++)if(this.pos.addScaledVector(this.vel,n),this.col.collideCapsule(this.pos,it.radius,this.h,qa))for(let a of qa){a.y>.68?(this.grounded=!0,this.groundN.set(a.x,a.y,a.z)):a.y<-.6?this.vel.y>0&&(this.vel.y=0):Math.abs(a.y)<.35&&(this.wallContact={x:a.x,y:a.y,z:a.z});let o=this.vel.x*a.x+this.vel.y*a.y+this.vel.z*a.z;o<0&&(this.vel.x-=a.x*o,this.vel.y-=a.y*o,this.vel.z-=a.z*o)}if(this.grounded&&!this.sliding){let r=this.vel.dot(this.groundN);r<0&&this.vel.addScaledVector(this.groundN,-r)}}snap(){if(Me.copy(this.pos),Me.y-=.45,this.col.collideCapsule(Me,it.radius,this.h,qa)){let e=null;for(let r of qa)r.y>.68&&(!e||r.y<e.y)&&(e=r);if(!e)return;let i=Math.hypot(Me.x-this.pos.x,Me.y-(this.pos.y-.45),Me.z-this.pos.z),n=this.pos.y-.45+i/Math.max(.68,e.y);if(n<=this.pos.y+.05){this.pos.y=Math.min(this.pos.y,n+.001),this.grounded=!0,this.groundN.set(e.x,e.y,e.z);let r=this.vel.dot(this.groundN);r>0&&this.vel.addScaledVector(this.groundN,-r)}}}stepUp(t){let e=Math.hypot(t.x,t.z);if(e<1)return;let i=t.x/e,n=t.z/e,r=this.pos.x+i*(it.radius+.12),a=this.pos.z+n*(it.radius+.12),o=this.col.raycast(r,this.pos.y+.5,a,0,-1,0,.5,cd);if(!o||o.ny<.7)return;let l=o.y-this.pos.y;l<.03||l>.46||this.col.capsuleFree(this.pos.x+i*.08,o.y+.02,this.pos.z+n*.08,it.radius,this.h)&&(this.pos.set(this.pos.x+i*.08,o.y+.02,this.pos.z+n*.08),this.vel.x=t.x,this.vel.z=t.z,this.vel.y<0&&(this.vel.y=0),this.grounded=!0)}canStand(){return this.col.capsuleFree(this.pos.x,this.pos.y+.02,this.pos.z,it.radius-.02,it.standH)}groundJump(){let t=this.grounded?this.groundN:py;if(this.vel.y=Math.max(this.vel.y,0)+it.jumpVel,t.y<.97&&(this.vel.x+=t.x*2,this.vel.z+=t.z*2),this.sliding){let e=this.hSpeedNow();if(e>1){let i=(e+.6)/e;this.vel.x*=i,this.vel.z*=i}this.ev.jump("slide")}else this.ev.jump("ground");this.sliding=!1,this.grounded=!1,this.coyoteT=0,this.jumpedTick=!0}airJump(t,e){if(this.airJumps--,this.vel.y=Math.max(this.vel.y*.25,0)+it.airJumpVel,e){let i=Math.max(this.hSpeedNow(),it.runSpeed*.85),n=this.hSpeedNow()||1,r=this.vel.x/n*.3+t.x*.7,a=this.vel.z/n*.3+t.z*.7,o=Math.hypot(r,a)||1;this.vel.x=r/o*i,this.vel.z=a/o*i}this.jumpedTick=!0,this.ev.jump("air")}onLand(t,e){let i=Math.max(0,-t);if(this.lastLand=i,this.crouching&&i>5){let n=this.hSpeedNow(),r=n>1?Me.set(this.vel.x/n,0,this.vel.z/n):this.flatFwd(Me),a=Math.min(i*it.slideLandFactor,10);this.vel.x+=r.x*a,this.vel.z+=r.z*a,this.sliding=!0,this.slideT=0,this.ev.slide("land",a)}else this.crouching&&this.hSpeedNow()>it.slideMinSpeed&&(this.sliding=!0,this.slideT=0,this.ev.slide("enter",0));this.ev.land(i)}startSlide(t){this.sliding=!0,this.slideT=0;let e=0;if(this.slideCd<=0){let i=this.hSpeedNow();e=Te.clamp(it.slideTarget-i,it.slideBoostMin,it.slideBoostMax);let n=i>1?Me.set(this.vel.x/i,0,this.vel.z/i):t.lengthSq()?Me.copy(t):this.flatFwd(Me);this.vel.x+=n.x*e,this.vel.z+=n.z*e,this.slideCd=it.slideBoostCd}this.ev.slide("enter",e)}tickSlide(t,e,i,n){this.slideT+=t,this.friction(it.slideFriction*(this.groundN.y>.985?1:.25),t),n&&this.steer(i,it.slideSteer,t),this.hSpeedNow()<it.slideMinSpeed&&this.groundN.y>.985&&(this.sliding=!1)}startDash(t,e){this.dashCharges--,this.dashRegen=Math.min(this.dashRegen,.2),this.dashDir.copy(t).setY(0).normalize();let i=Math.max(0,this.vel.x*this.dashDir.x+this.vel.z*this.dashDir.z);this.dashExit=Math.max(i,this.hSpeedNow()*.85,it.runSpeed)+it.dashGain,this.dashT=it.dashTime,this.wall&&this.endWall(),this.grapple&&this.releaseGrapple(!1),this.grounded||(this.vel.y=Math.max(this.vel.y,0)),this.grounded&&e.crouch&&(this.sliding=!0),this.ev.dash(this.dashDir)}scanWall(){if(this.nearWall=null,this.grounded)return;let t=1e9,e=it.radius+.45;for(let i=0;i<8;i++){let n=this.yaw+i*Math.PI/4,r=Math.cos(n),a=-Math.sin(n),o=0,l=0,h=0,c=0,d=0,u=0;for(let f of[.55,1.3]){let g=this.col.raycast(this.pos.x,this.pos.y+Math.min(f,this.h-.2),this.pos.z,r,0,a,e,Ya,fe.WALLRUN);g&&Math.abs(g.ny)<.3&&(o++,c=g.t,d=g.nx,u=g.nz)}o===2&&c<t&&(t=c,this.nearWall={nx:d,nz:u,dist:c})}}tryWall(t,e){if(this.airTime<.05||this.crouching)return;let i=this.nearWall;if(!i)return;let n=Me.set(i.nx,0,i.nz).normalize();if(this.wallCd>0&&n.dot(this.lastWallN)>.9)return;let r=this.hSpeedNow(),a=r>.1?ws.set(this.vel.x/r,0,this.vel.z/r):this.flatFwd(ws),o=-a.dot(n),l=-this.flatFwd(ld).dot(n);if((o>.75||r<4&&l>.7)&&t.fwd>0&&l>.6){!this.climbUsed&&this.vel.y>-6&&(this.climbT=it.climbTime,this.climbUsed=!0,this.wall={n:n.clone(),dir:new b,t:0,climb:!0},this.bufferT=0,this.ev.climb());return}if(r<it.wallrunMin||t.fwd<=0&&Math.abs(t.right)===0)return;let h=new b(-n.z,0,n.x);h.dot(a)<0&&h.negate(),this.wall={n:n.clone(),dir:h,t:0,entry:Math.max(r,it.wallrunSpeed),climb:!1},this.vel.y=Te.clamp(this.vel.y,-1.5,4.5),this.airJumps=it.airJumps,this.climbUsed=!1,this.bufferT=0,this.ev.wallStart(n)}tickWall(t,e,i){let n=this.wall;n.t+=t;let r=this.nearWall,a=r&&r.nx*n.n.x+r.nz*n.n.z>.8;if(n.climb){if(this.climbT-=t,!a||this.climbT<=0||e.fwd<=0){this.wall=null,this.climbT=0,this.vel.y>0&&(this.vel.y=Math.min(this.vel.y,4));return}this.vel.y=it.climbVel*(.6+.4*(this.climbT/it.climbTime)),this.vel.x=-n.n.x*1.5,this.vel.z=-n.n.z*1.5,this.tryMantle(!0);return}if(!a||n.t>it.wallrunTime||this.grounded){this.endWall();return}r&&n.n.set(r.nx,0,r.nz).normalize(),n.dir.set(-n.n.z,0,n.n.x),n.dir.dot(this.flatFwd(Me))<0&&n.dir.negate();let o=this.vel.x*n.dir.x+this.vel.z*n.dir.z,l=Math.max(n.entry,it.wallrunSpeed)+(e.fwd>0?n.t*1.2:-n.t*3),h=o+(l-o)*Math.min(1,t*4);this.vel.x=n.dir.x*h-n.n.x*1.8,this.vel.z=n.dir.z*h-n.n.z*1.8;let c=n.t<.35?1.2:1.2-(n.t-.35)*5.5;this.vel.y+=(c-this.vel.y)*Math.min(1,t*6),(e.right!==0?this.wish(e,ws).dot(n.n):0)>.6&&n.t>.15&&(this.vel.x+=n.n.x*4,this.vel.z+=n.n.z*4,this.endWall())}wallJump(t){let e=this.wall;if(e.climb)this.vel.set(e.n.x*it.wallJumpOut*1.1,it.wallJumpUp,e.n.z*it.wallJumpOut*1.1);else{let i=this.flatFwd(Me),n=Math.max(this.hSpeedNow(),it.wallrunSpeed),r=e.dir.x*.75+e.n.x*.55+i.x*.45,a=e.dir.z*.75+e.n.z*.55+i.z*.45,o=r*e.n.x+a*e.n.z;o<.3&&(r+=e.n.x*(.3-o),a+=e.n.z*(.3-o));let l=Math.hypot(r,a),h=n+1.2;this.vel.set(r/l*h+e.n.x*2,it.wallJumpUp,a/l*h+e.n.z*2)}this.lastWallN.copy(e.n),this.wallCd=.4,this.wall=null,this.climbT=0,this.airJumps=it.airJumps,this.jumpedTick=!0,this.steerLock=.35,this.ev.jump("wall")}endWall(){this.wall&&(this.lastWallN.copy(this.wall.n),this.wallCd=.3,this.wall=null,this.climbT=0)}tryMantle(t=!1){if(this.mantle)return!1;let e=this.flatFwd(Me),i=this.col.raycast(this.pos.x,this.pos.y+.9,this.pos.z,e.x,0,e.z,it.radius+.7,Ya);if(!i||Math.abs(i.ny)>.3)return!1;let n=this.col.raycast(this.pos.x,this.pos.y+2.45,this.pos.z,e.x,0,e.z,it.radius+.9,cd);if(n&&Math.abs(n.ny)<.3)return!1;let r=i.x-i.nx*.45,a=i.z-i.nz*.45,o=this.col.raycast(r,this.pos.y+2.6,a,0,-1,0,2.6,Ya);if(!o||o.ny<.7)return!1;let l=o.y-this.pos.y;if(l<.4||l>2.3)return!1;let h=o.x-i.nx*0+e.x*(it.radius*.6),c=o.z+e.z*(it.radius*.6);return this.col.capsuleFree(h,o.y+.03,c,it.radius,it.crouchH)?(this.mantle={from:this.pos.clone(),to:new b(h,o.y+.03,c),t:0,dur:.14+l*.05,speed:Math.max(this.hSpeedNow(),7),dir:e.clone()},this.wall=null,this.climbT=0,this.ev.mantle(),!0):!1}tickMantle(t){let e=this.mantle;e.t+=t;let i=Math.min(1,e.t/e.dur),n=1-Math.pow(1-i,2);this.pos.x=e.from.x+(e.to.x-e.from.x)*Math.max(0,(i-.35)/.65),this.pos.z=e.from.z+(e.to.z-e.from.z)*Math.max(0,(i-.35)/.65),this.pos.y=e.from.y+(e.to.y-e.from.y)*Math.min(1,n*1.4),this.vel.set(0,0,0),i>=1&&(this.mantle=null,this.vel.set(e.dir.x*e.speed,0,e.dir.z*e.speed),this.grounded=!0,this.groundN.set(0,1,0))}fireHook(t){this.grappleCharges--,this.grappleRegen=0;let e=this.lookDir(new b),i=this.eye.clone();this.hook={pos:i.clone().addScaledVector(e,.6),dir:e,traveled:0},this.ev.hookFire()}tickHook(t,e){let i=this.hook,n=it.grappleHookSpeed*t,r=e&&e.hookEnemy?e.hookEnemy(i.pos,i.dir,n):null,a=this.col.raycast(i.pos.x,i.pos.y,i.pos.z,i.dir.x,i.dir.y,i.dir.z,n,Ya,fe.GRAPPLE);if(r&&(!a||r.t<a.t)){this.attach(r.point,r.enemy),this.hook=null;return}if(a){this.attach(new b(a.x,a.y,a.z),null,new b(a.nx,a.ny,a.nz)),this.hook=null;return}i.pos.addScaledVector(i.dir,n),i.traveled+=n,i.traveled>it.grappleRange&&(this.hook=null,this.ev.hookMiss(),this.grappleCharges=Math.min(it.grappleCharges,this.grappleCharges+1))}attach(t,e,i){this.grapple={point:t.clone(),enemy:e,t:0,normal:i};let n=Me.subVectors(t,this.eye).normalize(),r=this.vel.dot(n);r<it.grappleYank&&this.vel.addScaledVector(n,it.grappleYank-Math.max(0,r)*.5),this.grounded&&(this.vel.y=Math.max(this.vel.y,5),this.grounded=!1),this.sliding=!1,this.wall&&this.endWall(),this.ev.hookAttach(t,!!e)}tickGrapple(t,e,i){let n=this.grapple;if(n.t+=t,n.enemy){if(!n.enemy.alive){this.releaseGrapple(!1);return}n.point.copy(n.enemy.chest)}let r=this.eye,a=Me.subVectors(n.point,r),o=a.length();if(a.divideScalar(o||1),!e.grappleHeld||o<(n.enemy?3:2.4)||n.t>3.2){this.releaseGrapple(o<3.2);return}let l=it.grapplePull*(n.enemy?1.35:1)*(o>8?1:.6+o/20);this.vel.addScaledVector(a,l*t),this.vel.y+=it.gravity*.35*t;let h=this.flatRight(ws);this.vel.addScaledVector(h,e.right*9*t);let c=this.vel.length();c>55&&this.vel.multiplyScalar(55/c)}releaseGrapple(t){if(!this.grapple)return;let e=this.grapple.enemy;this.grapple=null,t&&this.vel.y<4&&(this.vel.y+=3.5),this.ev.hookRelease(t,e)}checkPads(){if(!(this.padCd>0)){for(let t of this.map.jumpPads)if(Math.abs(this.pos.y-t.y)<.7&&(this.pos.x-t.x)**2+(this.pos.z-t.z)**2<t.r*t.r){this.vel.y=t.power,this.vel.x*=1.1,this.vel.z*=1.1,this.grounded=!1,this.airJumps=it.airJumps,this.padCd=.4,this.sliding=!1,this.ev.pad(t);return}if(this.grounded)for(let t of this.map.boostPads){let e=this.pos.x-t.x,i=this.pos.z-t.z,n=e*t.dir.x+i*t.dir.z,r=e*t.dir.z-i*t.dir.x;if(Math.abs(n)<t.len/2&&Math.abs(r)<t.w/2&&Math.abs(this.pos.y-t.y)<.6){let a=this.vel.x*t.dir.x+this.vel.z*t.dir.z,o=32;a<o&&(this.vel.x+=t.dir.x*(o-a),this.vel.z+=t.dir.z*(o-a)),this.padCd=.5,this.ev.boost(t);return}}}}};var dr=new b;function pi(s,t,e,i,n,r){let a=2*Math.PI*n/4,o=Math.max(r-2*n,0),l=Math.PI/4;dr.copy(t),dr[i]=0,dr.normalize();let h=.5*a/(a+o),c=1-dr.angleTo(s)/l;return Math.sign(dr[e])===1?c*h:o/(a+o)+h+h*(1-c)}var Za=class extends ee{constructor(t=1,e=1,i=1,n=2,r=.1){if(n=n*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,n,n,n),n===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new b,l=new b,h=new b(t,e,i).divideScalar(2).subScalar(r),c=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=c.length/6,g=new b,x=.5/n;for(let p=0,m=0;p<c.length;p+=3,m+=2)switch(o.fromArray(c,p),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),c[p+0]=h.x*Math.sign(o.x)+l.x*r,c[p+1]=h.y*Math.sign(o.y)+l.y*r,c[p+2]=h.z*Math.sign(o.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/f)){case 0:g.set(1,0,0),u[m+0]=pi(g,l,"z","y",r,i),u[m+1]=1-pi(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),u[m+0]=1-pi(g,l,"z","y",r,i),u[m+1]=1-pi(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),u[m+0]=1-pi(g,l,"x","z",r,t),u[m+1]=pi(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),u[m+0]=1-pi(g,l,"x","z",r,t),u[m+1]=1-pi(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),u[m+0]=1-pi(g,l,"x","y",r,t),u[m+1]=1-pi(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),u[m+0]=pi(g,l,"x","y",r,t),u[m+1]=1-pi(g,l,"y","x",r,e);break}}};var Je=new b,my=new b,Ka=new b,Ja=[],hd={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Ts={gunner:{hp:80,inst:80,speed:8,accent:16717880,r:.4,h:1.9,score:150,name:"GUNNER"},blade:{hp:110,inst:100,speed:12.5,accent:2152703,r:.4,h:1.9,score:180,name:"BLADE"},brute:{hp:320,inst:220,speed:8.5,accent:16752672,r:.62,h:2.5,score:450,name:"BRUTE"},sniper:{hp:60,inst:60,speed:7,accent:11555071,r:.4,h:1.9,score:220,name:"SNIPER"},drone:{hp:45,inst:40,speed:14,accent:16724040,r:.6,h:1.2,score:120,name:"DRONE"}},De={},ud={};function gy(){if(De.body)return De;De.body=new de({color:1381917,roughness:.35,metalness:.85}),De.armor=new de({color:3882314,roughness:.25,metalness:.95}),De.cloth=new de({color:789520,roughness:.9,metalness:0}),De.blade=new de({color:15263988,roughness:.12,metalness:1}),De.gun=new de({color:1052950,roughness:.4,metalness:.8}),De.flash=new Dt({color:new et(5,5,5)}),De.yellow=new Dt({color:new et(4,3.2,.6)}),De.redHot=new Dt({color:new et(5,.3,.4)});for(let s in Ts)De["acc_"+s]=new Dt({color:new et(Ts[s].accent).multiplyScalar(3.2)}),De["body_"+s]=$c(De.body.clone(),Ts[s].accent,2.2,1.1),De["armor_"+s]=$c(De.armor.clone(),Ts[s].accent,2.6,.8),De["cloth_"+s]=$c(De.cloth.clone(),Ts[s].accent,2,.9);return De}function $c(s,t,e,i){let n=new et(t);return s.onBeforeCompile=r=>{r.uniforms.rimColor={value:n},r.uniforms.rimPower={value:e},r.uniforms.rimStrength={value:i},r.fragmentShader=`uniform vec3 rimColor; uniform float rimPower; uniform float rimStrength;
`+r.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  { vec3 vd = normalize(vViewPosition); float fr = pow(1.0 - clamp(abs(dot(normal, vd)), 0.0, 1.0), rimPower); totalEmissiveRadiance += rimColor * fr * rimStrength; }`)},s.customProgramCacheKey=()=>"rim"+t+e+i,s}function pe(s,t,e,i=.04){let n=`${s}|${t}|${e}|${i}`;return ud[n]||(ud[n]=new Za(s,t,e,2,Math.min(i,s/2-.001,t/2-.001,e/2-.001)))}function Jt(s,t,e=0,i=0,n=0){let r=new ct(s,t);return r.position.set(e,i,n),r.castShadow=!0,r}var As=class{constructor(t,e,i){let n=gy();this.game=t,this.col=t.map.col,this.scene=t.scene,this.type=e,this.cfg=Ts[e],this.hp=this.maxHp=this.cfg.hp,this.inst=0,this.instMax=this.cfg.inst,this.alive=!0,this.spawnT=.6,this.pos=i.clone(),this.vel=new b,this.yaw=Math.random()*6,this.grounded=!1,this.chest=new b,this.head=new b,this.muzzle=new b,this.state="idle",this.stateT=0,this.atkCd=1.2+Math.random()*1.2,this.dashCd=2+Math.random()*2,this.strafe=Math.random()<.5?-1:1,this.strafeT=0,this.stagger=0,this.broken=0,this.flashT=0,this.guardT=0,this.anim=Math.random()*10,this.losT=0,this.los=!1,this.hoverY=8+Math.random()*5,this.orbit=Math.random()*6.28,this.lastHitBy=null,this.instDecayHold=0,this.windup=0,this.chain=0,this.build(n),this.updateAnchors()}build(t){let e=this.type,i=t["acc_"+e],n=this.group=new ae;if(e==="drone"){let o=Jt(new Ci(.42,20,14),t.armor_drone);n.add(o);let l=Jt(new Ci(.16,12,8),i,0,0,.36);n.add(l),this.eye=l;let h=Jt(new qe(.62,.06,8,32),t.body_drone);h.rotation.x=Math.PI/2,n.add(h);let c=Jt(new qe(.62,.02,6,32),i);c.rotation.x=Math.PI/2,c.position.y=.05,n.add(c),this.rotors=[];for(let d=0;d<4;d++){let u=d*Math.PI/2+Math.PI/4,f=Jt(pe(.1,.06,.5,.02),t.body,Math.cos(u)*.6,.05,Math.sin(u)*.6);f.rotation.y=-u,n.add(f);let g=Jt(new _e(.28,.28,.02,16),new Dt({color:4210768,transparent:!0,opacity:.35}),Math.cos(u)*.85,.12,Math.sin(u)*.85);n.add(g),this.rotors.push(g)}this.gunTip=new le,this.gunTip.position.set(0,-.1,.5),n.add(this.gunTip),this.parts={core:o}}else{let o=e==="brute"?1.32:1,l=e==="sniper"?t["cloth_"+e]:t["body_"+e],h=t["armor_"+e],c=t["cloth_"+e],d=[];for(let m of[-1,1]){let v=new ae;v.position.set(m*.15,.95,0),v.add(Jt(pe(.2,.48,.22),l,0,-.24,0));let y=new ae;y.position.y=-.48,v.add(y),y.add(Jt(pe(.19,.48,.21),h,0,-.24,0)),y.add(Jt(pe(.05,.3,.05,.01),i,m*.06,-.22,.11)),y.add(Jt(pe(.2,.08,.3),t["body_"+e],0,-.48,.05)),n.add(v),d.push({hip:v,knee:y})}this.legs=d;let u=this.torso=new ae;u.position.y=.95,n.add(u),u.add(Jt(pe(.38,.2,.24),l,0,.08,0)),u.add(Jt(pe(.32,.22,.2),t["body_"+e],0,.26,0)),u.add(Jt(pe(.52,.34,.3),h,0,.5,0)),u.add(Jt(pe(.16,.12,.04,.02),i,0,.52,.16)),u.add(Jt(pe(.04,.38,.03,.01),i,0,.45,-.16));for(let m of[-1,1])u.add(Jt(pe(.22,.14,.34),h,m*.34,.68,0));if(e==="blade"||e==="sniper"){let m=Jt(pe(.3,.04,.5,.01),c,0,.72,-.3);m.rotation.x=-.4,u.add(m),this.scarf=m}let f=this.headG=new ae;f.position.y=.78,u.add(f),f.add(Jt(pe(.12,.1,.12),t["body_"+e],0,0,0)),f.add(Jt(pe(.27,.29,.29,.07),l,0,.16,0));let g=Jt(pe(.28,.06,.05,.02),i,0,.18,.13);if(f.add(g),this.visor=g,e==="blade"&&f.add(Jt(pe(.04,.14,.3,.01),i,0,.36,0)),e==="brute"&&f.add(Jt(pe(.36,.08,.32),h,0,.32,0)),e==="sniper"){let m=Jt(pe(.33,.33,.34,.1),c,0,.19,-.02);f.add(m)}let x=[];for(let m of[-1,1]){let v=new ae;v.position.set(m*.36,.64,0),u.add(v),v.add(Jt(pe(.15,.36,.16),l,0,-.18,0));let y=new ae;y.position.y=-.36,v.add(y),y.add(Jt(pe(.14,.34,.15),h,0,-.17,0)),y.add(Jt(pe(.12,.1,.13),t["body_"+e],0,-.38,0)),x.push({sh:v,el:y})}this.arms=x;let p=new ae;if(p.position.set(0,-.4,.02),x[1].el.add(p),this.hand=p,e==="gunner"||e==="sniper"){let m=e==="sniper"?1.3:.75,v=new ae;v.add(Jt(pe(.09,.14,m,.02),t.gun,0,0,m/2-.15)),v.add(Jt(pe(.05,.05,.4,.01),h,0,.02,m-.05));let y=Jt(pe(.025,.025,m*.7,.008),i,.055,.03,m/2-.1);v.add(y),e==="sniper"&&(v.add(Jt(new _e(.04,.04,.3,10),h,0,.11,.3)).rotation.x=Math.PI/2),this.gunTip=new le,this.gunTip.position.set(0,.02,m+.15),v.add(this.gunTip),v.rotation.x=Math.PI/2,p.add(v),this.weapon=v,this.weaponGlow=y}else{let m=e==="brute"?1.6:1.1,v=new ae;v.add(Jt(pe(.05,.3,.05,.015),t.gun,0,0,0)),v.add(Jt(pe(.16,.04,.05,.01),i,0,.16,0));let y=Jt(pe(e==="brute"?.14:.03,m,e==="brute"?.03:.07,.01),t.blade,0,.18+m/2,0);v.add(y);let M=Jt(pe(.012,m,.012,.004),i,0,.18+m/2,e==="brute"?.02:.04);v.add(M),v.rotation.x=Math.PI/2,p.add(v),this.weapon=v,this.weaponGlow=M,this.swordTip=new le,this.swordTip.position.y=.18+m,v.add(this.swordTip)}n.scale.setScalar(o),this.S=o}n.position.copy(this.pos),this.scene.add(n);let r=this.bars=new ae,a=(o,l,h,c,d=1)=>{let u=new ct(new Xe(o,l),new Dt({color:h,transparent:!0,opacity:d,depthTest:!1,toneMapped:!1}));return u.position.y=c,u.renderOrder=20,r.add(u),u};a(1.04,.13,0,0,.55),this.hpBar=a(1,.07,new et(this.cfg.accent).multiplyScalar(1.4),.02),this.instBar=a(1,.035,16764992,-.045),this.brokenIcon=a(.32,.32,new et(4,3,.5),.36),this.brokenIcon.rotation.z=Math.PI/4,this.brokenIcon.visible=!1,r.visible=!1,this.scene.add(r),this.scaleIn=0}updateAnchors(){let t=this.S||1;if(this.type==="drone"){this.chest.copy(this.pos),this.head.copy(this.pos);return}this.chest.set(this.pos.x,this.pos.y+1.4*t,this.pos.z),this.head.set(this.pos.x,this.pos.y+1.92*t,this.pos.z)}rayHit(t,e,i,n,r,a,o){let l=this.S||1,h=null,c=(d,u,f,g,x)=>{let p=t-d,m=e-u,v=i-f,y=p*n+m*r+v*a,M=p*p+m*m+v*v-g*g,I=y*y-M;if(I<0)return;let E=-y-Math.sqrt(I);E>=0&&E<o&&(!h||E<h.t)&&(h={t:E,head:x})};if(this.type==="drone")return c(this.pos.x,this.pos.y,this.pos.z,.75,!1),h;c(this.head.x,this.head.y,this.head.z,.24*l,!0);for(let[d,u]of[[1.38,.38],[1,.32],[.6,.28],[.22,.26]])c(this.pos.x,this.pos.y+d*l,this.pos.z,u*l,!1);return h}facingDot(t){return Je.set(t.x-this.pos.x,0,t.z-this.pos.z).normalize(),Math.sin(this.yaw)*Je.x+Math.cos(this.yaw)*Je.z}damage(t,e={}){return this.alive?(this.hp-=t,this.flashT=.1,this.bars.visible=!0,e.inst&&this.addInst(e.inst),e.from&&this.type!=="brute"&&(Je.subVectors(this.pos,e.from).setY(0).normalize(),this.vel.addScaledVector(Je,Math.min(9,t*.07))),e.stagger&&(this.stagger=Math.max(this.stagger,e.stagger)),this.hp<=0?(this.alive=!1,!0):!1):!1}addInst(t){this.broken>0||(this.inst=Math.min(this.instMax,this.inst+t),this.instDecayHold=2,this.bars.visible=!0,this.inst>=this.instMax&&(this.broken=this.type==="brute"?3.2:2.6,this.state="broken",this.windup=0,this.guardT=0,this.game.onEnemyBroken(this)))}cancelAttack(){this.windup=0,this.state="recover",this.stateT=.5,this.atkCd=1}update(t,e){let i=e.player;this.anim+=t,this.flashT-=t,this.stagger=Math.max(0,this.stagger-t),this.atkCd-=t,this.dashCd-=t,this.strafeT-=t,this.losT-=t,this.guardT-=t,this.spawnT-=t,this.broken>0?(this.broken-=t,this.broken<=0&&(this.inst=this.instMax*.35,this.state="idle")):(this.instDecayHold-=t)<=0&&(this.inst=Math.max(0,this.inst-this.instMax*.12*t));let n=my.subVectors(i.pos,this.pos),r=n.y;n.y=0;let a=n.length(),o=n.clone().divideScalar(a||1);if(this.losT<=0&&(this.losT=.15+Math.random()*.1,this.los=e.los(this.type==="drone"?this.pos:this.chest,i.eye)),this.broken<=0&&this.stagger<=0){let f=Math.atan2(o.x,o.z)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;let g=this.state==="windup"?this.type==="brute"?1.5:5:9;this.yaw+=f*Math.min(1,t*g)}let l=0,h=0,c=this.cfg.speed;if(!(this.broken>0||this.stagger>0||this.spawnT>0)){let f=this["ai_"+this.type].call(this,t,e,i,a,o,r);f&&(l=f.x,h=f.z,c=f.s??c)}this.type==="drone"?this.flyMove(t,e,i,a,o):this.groundMove(t,l,h,c,e),this.updateAnchors(),this.animate(t,e)}ai_gunner(t,e,i,n,r){this.strafeT<=0&&(this.strafe*=-1,this.strafeT=1+Math.random()*1.8);let a=Je.set(r.z,0,-r.x).multiplyScalar(this.strafe),o=!this.los||n>34?1:n<14?-1:0,l={x:r.x*o+a.x*.75,z:r.z*o+a.z*.75};return this.state==="windup"?(this.windup-=t,l.s=2.5,this.windup<=0&&(this.state="burst",this.shots=3,this.shotT=0)):this.state==="burst"?(l.s=2.5,this.shotT-=t,this.shotT<=0&&(this.shotT=.12,this.shots--,e.enemyShoot(this,{speed:48,dmg:8,spread:.035}),this.shots<=0&&(this.state="idle",this.atkCd=1.5+Math.random()*1.5))):this.atkCd<=0&&this.los&&n<60&&(this.state="windup",this.windup=.55,this.parryable=!0),l}ai_blade(t,e,i,n,r,a){let o={x:r.x,z:r.z};if(this.state==="windup")return this.windup-=t,o.s=2,this.windup<=0&&(e.enemyStrike(this,{dmg:18,reach:3.1,inst:22}),this.state="recover",this.stateT=.32,this.chain=(this.chain||0)+1),o;if(this.state==="recover")return this.stateT-=t,o.s=3,this.stateT<=0&&(this.chain<2&&Math.random()<.4&&n<3.5?(this.state="windup",this.windup=.32,this.parryable=!0,e.telegraph(this,!0)):(this.state="idle",this.atkCd=.9+Math.random()*.8,this.chain=0)),o;if(this.guardT>0)return this.state="guard",o.s=3,o.x=r.x*.3+r.z*this.strafe*.7,o.z=r.z*.3-r.x*this.strafe*.7,o;if(this.state==="guard"&&(this.state="idle"),n<7&&Math.random()<t*.6&&this.atkCd>.2&&(this.guardT=1+Math.random()*.8),n<6){let l=Je.set(r.z,0,-r.x).multiplyScalar(this.strafe*.6);o.x+=l.x,o.z+=l.z}return n<3.2&&this.atkCd<=0&&Math.abs(a)<2.4&&(this.state="windup",this.windup=.48,this.parryable=!0,this.chain=0,e.telegraph(this,!0)),n>7&&n<22&&this.dashCd<=0&&this.grounded&&this.los&&(this.vel.x=r.x*26,this.vel.z=r.z*26,this.vel.y=4+Math.max(0,a)*1.1,this.dashCd=2.4+Math.random()*2,e.enemyDash(this)),a>2.5&&n<12&&this.grounded&&Math.random()<t*1.5&&(this.vel.y=12+Math.min(a,8)*.9,this.vel.x+=r.x*6,this.vel.z+=r.z*6),o}ai_brute(t,e,i,n,r,a){let o={x:r.x,z:r.z};return this.state==="windup"?(this.windup-=t,o.s=this.unblockable?1.5:1,this.windup<=0&&(e.enemyStrike(this,this.unblockable?{dmg:38,reach:4.4,inst:0,unblockable:!0,arc:0}:{dmg:26,reach:3.9,inst:40}),this.state="recover",this.stateT=.6),o):this.state==="recover"?(this.stateT-=t,o.s=1,this.stateT<=0&&(this.state="idle",this.atkCd=1.2+Math.random()),o):(n<4.2&&this.atkCd<=0&&Math.abs(a)<3&&(this.unblockable=Math.random()<.35,this.state="windup",this.windup=this.unblockable?.8:.6,this.parryable=!this.unblockable,e.telegraph(this,!this.unblockable)),n>8&&n<16&&this.dashCd<=0&&this.grounded&&this.los&&(this.vel.x=r.x*20,this.vel.z=r.z*20,this.vel.y=7,this.dashCd=4+Math.random()*2,e.enemyDash(this)),o)}ai_sniper(t,e,i,n,r){let a={x:0,z:0,s:0};return this.state==="aim"?(this.windup-=t,this.aimPoint=this.aimPoint||i.eye.clone(),this.windup>.25&&this.aimPoint.lerp(Je.copy(i.eye).setY(i.eye.y-.3),Math.min(1,t*5)),this.windup<=0&&(e.enemyShoot(this,{speed:130,dmg:30,spread:0,at:this.aimPoint,sniper:!0}),this.state="idle",this.atkCd=2.6+Math.random()*1.5,this.aimPoint=null,this.shotsHere=(this.shotsHere||0)+1,this.shotsHere>=2&&(this.shotsHere=0,e.relocate(this)))):this.atkCd<=0&&this.los&&n<140&&(this.state="aim",this.windup=1.4,this.parryable=!0,this.aimPoint=i.eye.clone()),a}ai_drone(t,e,i,n,r){return this.state==="windup"?(this.windup-=t,this.windup<=0&&(this.state="burst",this.shots=3,this.shotT=0)):this.state==="burst"?(this.shotT-=t,this.shotT<=0&&(this.shotT=.16,this.shots--,e.enemyShoot(this,{speed:34,dmg:6,spread:.05,small:!0}),this.shots<=0&&(this.state="idle",this.atkCd=1.6+Math.random()*1.4))):this.atkCd<=0&&this.los&&n<45&&(this.state="windup",this.windup=.45,this.parryable=!0),null}groundMove(t,e,i,n,r){let a=Math.hypot(e,i);if(a>0&&(e/=a,i/=a),a>0&&this.grounded){let u=this.col.raycast(this.pos.x,this.pos.y+.5,this.pos.z,e,0,i,1.6,hd);if(u&&Math.abs(u.ny)<.5)if(!this.col.raycast(this.pos.x,this.pos.y+2.4,this.pos.z,e,0,i,1.8,hd))this.vel.y=10.5;else{let g=this.strafe,x=e*.3+-i*g,p=i*.3+e*g;e=x,i=p}}let o=this.grounded?10:1.5;if(Math.hypot(this.vel.x,this.vel.z)>n+2&&this.grounded){let u=Math.exp(-5*t);this.vel.x*=u,this.vel.z*=u}else this.vel.x+=(e*n-this.vel.x)*Math.min(1,o*t),this.vel.z+=(i*n-this.vel.z)*Math.min(1,o*t);this.vel.y-=30*t;for(let u of r.enemies){if(u===this||!u.alive||u.type==="drone")continue;let f=this.pos.x-u.pos.x,g=this.pos.z-u.pos.z,x=f*f+g*g;if(x<1.6&&x>1e-4){let p=Math.sqrt(x);this.vel.x+=f/p*30*t,this.vel.z+=g/p*30*t}}this.pos.addScaledVector(this.vel,t),this.grounded=!1;let h=this.cfg.r,c=this.cfg.h*(this.S||1);if(this.col.collideCapsule(this.pos,h,c,Ja))for(let u of Ja){u.y>.65&&(this.grounded=!0);let f=this.vel.x*u.x+this.vel.y*u.y+this.vel.z*u.z;f<0&&(this.vel.x-=u.x*f,this.vel.y-=u.y*f,this.vel.z-=u.z*f)}for(let u of this.game.map.jumpPads)Math.abs(this.pos.y-u.y)<.7&&(this.pos.x-u.x)**2+(this.pos.z-u.z)**2<u.r*u.r&&(this.vel.y=u.power);let d=this.game.map.half-2;this.pos.x=Te.clamp(this.pos.x,-d,d),this.pos.z=Te.clamp(this.pos.z,-d,d),this.pos.y<-10&&(this.pos.set(0,1,40),this.vel.set(0,0,0))}flyMove(t,e,i,n,r){if(this.broken>0)this.vel.y-=9*t;else{this.orbit+=t*.6*this.strafe;let o=14+Math.sin(this.anim*.3)*4,l=i.pos.x+Math.cos(this.orbit)*o,h=i.pos.z+Math.sin(this.orbit)*o,c=Math.max(i.pos.y+this.hoverY*.6,4)+Math.sin(this.anim*1.3)*1.2;Je.set(l-this.pos.x,c-this.pos.y,h-this.pos.z);let d=Je.length();d>.01&&Je.multiplyScalar(Math.min(this.cfg.speed,d*1.5)/d),this.vel.lerp(Je,Math.min(1,t*2.2))}if(this.pos.addScaledVector(this.vel,t),this.col.collideCapsule(Ka.set(this.pos.x,this.pos.y-.5,this.pos.z),.55,1,Ja)){this.pos.set(Ka.x,Ka.y+.5,Ka.z);for(let o of Ja){let l=this.vel.x*o.x+this.vel.y*o.y+this.vel.z*o.z;l<0&&(this.vel.x-=o.x*l*1.5,this.vel.y-=o.y*l*1.5,this.vel.z-=o.z*l*1.5)}}let a=this.game.map.half-2;this.pos.x=Te.clamp(this.pos.x,-a,a),this.pos.z=Te.clamp(this.pos.z,-a,a)}animate(t,e){let i=this.group;this.scaleIn=Math.min(1,this.scaleIn+t*3);let n=(this.S||1)*(.2+.8*xy(this.scaleIn));i.scale.setScalar(n),i.position.copy(this.pos),i.rotation.y=this.yaw;let r=De,a=this.state==="windup"||this.state==="aim",o=Math.sin(this.anim*38)>0;if(this.type==="drone")this.rotors.forEach((h,c)=>h.rotation.y+=t*40),i.rotation.z=Te.clamp(-this.vel.x*.03,-.4,.4),i.rotation.x=Te.clamp(this.vel.z*.03,-.4,.4),Je.subVectors(e.player.eye,this.pos),i.rotation.y=Math.atan2(Je.x,Je.z),this.eye.material=a&&o?r.yellow:r.acc_drone,this.broken>0&&(i.rotation.z+=this.anim*6);else{let h=Math.hypot(this.vel.x,this.vel.z),c=Math.min(1,h/10),d=this.anim*(5+h*.55),[u,f]=this.legs;this.grounded?(u.hip.rotation.x=Math.sin(d)*.9*c,f.hip.rotation.x=-Math.sin(d)*.9*c,u.knee.rotation.x=Math.max(0,-Math.cos(d))*1.1*c,f.knee.rotation.x=Math.max(0,Math.cos(d))*1.1*c):(u.hip.rotation.x=-.7,f.hip.rotation.x=.4,u.knee.rotation.x=1,f.knee.rotation.x=.3),this.torso.rotation.x=c*.22,this.torso.position.y=.95+Math.abs(Math.sin(d))*.05*c,this.torso.rotation.y*=.85;let[g,x]=this.arms,p=this.type;if(p==="gunner"||p==="sniper"){let m=a||this.state==="burst";x.sh.rotation.set(m?-1.45:-.5+Math.sin(d)*.15*c,0,0),x.el.rotation.x=m?-.1:-.6,g.sh.rotation.set(m?-1.3:-Math.sin(d)*.6*c,0,m?.6:0),g.el.rotation.x=m?-.6:-.3,this.weaponGlow&&(this.weaponGlow.material=a&&o?r.yellow:r["acc_"+p]),p==="sniper"&&this.state==="aim"&&(this.torso.rotation.x=.1,u.hip.rotation.x=-.5,u.knee.rotation.x=1.2,f.knee.rotation.x=.4)}else{if(this.state==="windup"){let m=1-Math.max(0,this.windup)/.6;x.sh.rotation.set(-2.5-m*.3,0,-.5),x.el.rotation.x=-.5,this.torso.rotation.y=.7,g.sh.rotation.set(-.8,0,.4),this.weaponGlow.material=this.parryable?o?r.yellow:r["acc_"+p]:o?r.redHot:r["acc_"+p]}else this.state==="recover"?(x.sh.rotation.set(-.4,0,1),x.el.rotation.x=-.2,this.torso.rotation.y=-.6,this.weaponGlow.material=r["acc_"+p]):this.state==="guard"?(x.sh.rotation.set(-1.4,0,.9),x.el.rotation.x=-1.2,g.sh.rotation.set(-1.2,0,-.5),g.el.rotation.x=-1.4,this.weapon.rotation.set(Math.PI/2,0,1.4)):(x.sh.rotation.set(-.7+Math.sin(d)*.3*c,0,.25),x.el.rotation.x=-.6,g.sh.rotation.set(-Math.sin(d)*.8*c,0,0),g.el.rotation.x=-.4,this.weapon.rotation.set(Math.PI/2,0,0),this.weaponGlow.material=r["acc_"+p]);this.state!=="guard"&&(this.weapon.rotation.z=0)}this.broken>0?(this.torso.rotation.x=.7+Math.sin(this.anim*3)*.05,this.headG.rotation.x=.5,x.sh.rotation.set(.2,0,.3),g.sh.rotation.set(.2,0,-.3),u.knee.rotation.x=1.2,f.knee.rotation.x=.6,u.hip.rotation.x=-.6):this.stagger>0?(this.torso.rotation.x=-.45,this.headG.rotation.x=-.35):this.headG.rotation.x=0,this.scarf&&(this.scarf.rotation.x=-.4-Math.min(.9,h*.05)+Math.sin(this.anim*9)*.08),this.visor.material=this.flashT>0?r.flash:r["acc_"+p]}let l=e.camera;this.bars.position.set(this.pos.x,this.type==="drone"?this.pos.y+1:this.head.y+.55,this.pos.z),this.bars.quaternion.copy(l.quaternion),this.hpBar.scale.x=Math.max(.001,this.hp/this.maxHp),this.hpBar.position.x=-(1-this.hpBar.scale.x)/2,this.instBar.scale.x=Math.max(.001,this.inst/this.instMax),this.instBar.position.x=-(1-this.instBar.scale.x)/2,this.instBar.material.color.setRGB(1,this.inst/this.instMax>.75?.45:.8,.2),this.brokenIcon.visible=this.broken>0,this.broken>0&&(this.bars.visible=!0,this.brokenIcon.scale.setScalar(1+Math.sin(this.anim*10)*.15))}shatter(t,e){let i=[];return this.group.updateMatrixWorld(!0),this.group.traverse(n=>{if(!n.isMesh)return;let r=new b,a=new Ie,o=new b;n.matrixWorld.decompose(r,a,o);let l=new ct(n.geometry,n.material);l.position.copy(r),l.quaternion.copy(a),l.scale.copy(o),l.castShadow=!0,this.scene.add(l);let h=new b((Math.random()-.5)*7,3+Math.random()*7,(Math.random()-.5)*7);t&&h.addScaledVector(t,e?8:13),e&&r.y>this.pos.y+1.1&&(h.y+=4),i.push({m:l,v:h,av:new b(Math.random()*16-8,Math.random()*16-8,Math.random()*16-8),life:2.4+Math.random()*1.2})}),this.dispose(),i}dispose(){this.scene.remove(this.group),this.scene.remove(this.bars)}};function xy(s){return 1-Math.pow(1-s,3)}var Ii={out:s=>1-Math.pow(1-s,3),inOut:s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,back:s=>1+2.9*Math.pow(s-1,3)+1.9*Math.pow(s-1,2)},un=(s,t={})=>new de({color:s,roughness:.45,metalness:.6,...t}),fr=(s,t,e,i)=>(s.position.set(t,e,i),s),ni=(s,t,e)=>s.map((i,n)=>i+(t[n]-i)*e),Qa=class{constructor(t="revolver"){this.scene=new ps,this.camera=new ze(60,1,.01,20),this.scene.add(new ys(9470144,2099216,.75)),this.scene.environmentIntensity=.45;let e=new Pi(16770276,1.5);e.position.set(1,2,1.2),this.scene.add(e),this.rim=new Pi(16719936,1.6),this.rim.position.set(-1.2,.4,-1.5),this.scene.add(this.rim);let i=new Pi(3199231,.8);i.position.set(2,-.6,-1),this.scene.add(i),this.root=new ae,this.scene.add(this.root);let n=this.M={sleeve:un(1315867,{roughness:.85,metalness:.05}),sleeve2:un(1907234,{roughness:.7,metalness:.1}),glove:un(789519,{roughness:.55,metalness:.35}),plate:un(3158332,{roughness:.25,metalness:.95}),metal:un(2763571,{roughness:.22,metalness:.95}),dark:un(921106,{roughness:.5,metalness:.7}),gold:new de({color:11567152,metalness:1,roughness:.3}),accent:new Dt({color:new et(16717880).multiplyScalar(1.3)}),cyan:new Dt({color:new et(3203327).multiplyScalar(1.3)}),grip:un(3803664,{roughness:.55,metalness:.2}),wood:un(2757648,{roughness:.6,metalness:.1})};this.buildSword(),this.buildLeft(t),this.buildTrail(),this.t=0,this.swayX=0,this.swayY=0,this.bob=0,this.sprint=0,this.slideB=0,this.anim={sword:null,left:null},this.combo=0,this.recoil=0,this.charge=0,this.edgeFlash=0,this.cylA=0,this.cylT=0,this.wallL=0,this.wallR=0}arm(t,e){let i=this.M,n=new ct(new _e(.043,.058,.44,12),i.sleeve);n.rotation.x=Math.PI/2,n.position.set(0,-.02,.27),t.add(n);let r=new ct(new _e(.05,.056,.16,12,1,!1,0,Math.PI*1.1),i.plate);r.rotation.set(Math.PI/2,0,e?-.4:Math.PI+.4),r.position.set(0,0,.16),t.add(r);let a=new ct(new qe(.05,.007,6,20),i.accent);a.position.set(0,-.02,.07),t.add(a);let o=new ct(new ee(.075,.085,.095),i.glove);o.position.set(0,0,0),t.add(o);for(let h=0;h<4;h++){let c=new ct(new ee(.018,.022,.05),i.glove);c.position.set((e?1:-1)*.04,.03-h*.022,-.02),c.rotation.y=e?.3:-.3,t.add(c)}let l=new ct(new ee(.02,.02,.055),i.glove);l.position.set((e?-1:1)*.035,.04,-.03),t.add(l)}buildSword(){let t=this.M;this.swordPivot=new ae,this.root.add(this.swordPivot);let e=this.swordHand=new ae;this.swordPivot.add(e),this.arm(e,!1);let i=this.blade=new ae;e.add(i);let n=new de({map:od(),roughness:.85}),r=new ct(new _e(.021,.024,.3,12),n);i.add(r);let a=new ct(new _e(.026,.022,.035,12),t.metal);a.position.y=-.16,i.add(a);let o=new ct(new _e(.062,.062,.016,8),t.dark);o.position.y=.16,i.add(o);let l=new ct(new qe(.06,.005,6,32),t.accent);l.rotation.x=Math.PI/2,l.position.y=.16,i.add(l);let h=new ct(new ee(.03,.045,.018),t.gold);h.position.y=.188,i.add(h);let c=.98,d=p=>.04*Math.pow(p/c,2),u=new nr;u.moveTo(-.014,0);for(let p=0;p<=24;p++){let m=p/24*c*.93;u.lineTo(-.014+d(m),m)}u.lineTo(d(c)+.002,c);for(let p=24;p>=0;p--){let m=p/24*c*.93;u.lineTo(.016+d(m)-(p===24?.008:0),m)}let f=new ba(u,{depth:.005,bevelEnabled:!0,bevelThickness:.0025,bevelSize:.0022,bevelSegments:2});f.translate(0,0,-.0025);{let p=f.attributes.position,m=f.attributes.uv;for(let v=0;v<p.count;v++)m.setXY(v,p.getY(v)/c,(p.getX(v)-d(p.getY(v))+.016)/.032)}this.bladeMat=new de({map:ad(),metalness:1,roughness:.14,envMapIntensity:1.4});let g=new ct(f,this.bladeMat);g.position.y=.2,i.add(g);let x=[];for(let p=0;p<=32;p++){let m=p/32*c;x.push(new b(.017+d(m)-(m>c*.93?(m-c*.93)/(c*.07)*.016:0),m+.2,0))}this.edgeMat=new Dt({color:new et(1.4,.15,.2)}),i.add(new ct(new Ta(new er(x),32,.0026,4,!1),this.edgeMat)),this.tip=new le,this.tip.position.set(.03,.2+c,0),i.add(this.tip),this.mid=new le,this.mid.position.set(.01,.3,0),i.add(this.mid),i.rotation.set(-1.25,0,-.2)}buildLeft(t){let e=this.M;this.leftPivot=new ae,this.root.add(this.leftPivot);let i=this.leftHand=new ae;this.leftPivot.add(i),this.arm(i,!0);let n=new ae;n.position.set(0,.06,.12),i.add(n),n.add(new ct(new ee(.07,.04,.16),e.plate));let r=new ct(new _e(.022,.022,.1,12),e.dark);r.rotation.x=Math.PI/2,r.position.set(0,.035,-.02),n.add(r),this.gauntletGlow=new ct(new qe(.02,.003,6,16),new Dt({color:new et(.6,2.6,3)})),this.gauntletGlow.position.set(0,.035,-.075),n.add(this.gauntletGlow),this.hookTip=new le,this.hookTip.position.set(0,.035,-.09),n.add(this.hookTip),this.setLoadout(t)}setLoadout(t){let e=this.M;this.gun&&this.leftHand.remove(this.gun);let i=this.gun=new ae;if(this.leftHand.add(i),this.loadout=t,t==="shotgun"){let r=new ct(new ee(.04,.12,.05),e.wood);r.position.set(0,-.04,0),r.rotation.x=.35,i.add(r),i.add(fr(new ct(new ee(.055,.06,.16),e.metal),0,.04,-.06));for(let l of[-1,1]){let h=new ct(new _e(.017,.017,.34,12),e.dark);h.rotation.x=Math.PI/2,h.position.set(l*.018,.05,-.3),i.add(h)}let a=new ct(new ee(.07,.04,.12),e.wood);a.position.set(0,.02,-.22),i.add(a);let o=new ct(new ee(.004,.004,.3),e.accent);o.position.set(0,.072,-.28),i.add(o),this.muzzle=new le,this.muzzle.position.set(0,.05,-.48),i.add(this.muzzle),this.cyl=null,this.hammer=null}else{let r=new ct(new ee(.04,.12,.05),e.grip);r.position.set(0,-.04,0),r.rotation.x=.25,i.add(r),i.add(fr(new ct(new ee(.038,.06,.13),e.metal),0,.04,-.06)),this.cyl=new ae,this.cyl.position.set(0,.04,-.07),i.add(this.cyl);let a=new ct(new _e(.035,.035,.07,6),e.dark);a.rotation.x=Math.PI/2,this.cyl.add(a);for(let l=0;l<6;l++){let h=l/6*Math.PI*2,c=new ct(new ee(.006,.006,.072),e.accent);c.position.set(Math.cos(h)*.033,Math.sin(h)*.033,0),this.cyl.add(c)}let o=new ct(new _e(.014,.016,.24,12),e.metal);o.rotation.x=Math.PI/2,o.position.set(0,.055,-.22),i.add(o),i.add(fr(new ct(new ee(.012,.018,.24),e.dark),0,.075,-.22)),i.add(fr(new ct(new ee(.004,.004,.22),e.accent),0,.086,-.22)),this.hammer=new ct(new ee(.012,.03,.02),e.metal),this.hammer.position.set(0,.075,0),i.add(this.hammer),i.add(fr(new ct(new ee(.004,.012,.008),new Dt({color:3211152})),0,.09,-.33)),this.muzzle=new le,this.muzzle.position.set(0,.055,-.36),i.add(this.muzzle)}let n=new Dt({color:new et(2.2,1.3,.6),transparent:!0,opacity:0,blending:ge,depthWrite:!1});this.flash=new ct(new Xe(.24,.24),n),this.flash.position.copy(this.muzzle.position).add(new b(0,0,-.04)),i.add(this.flash),this.flash2=new ct(new Xe(.1,.45),n),this.flash2.rotation.y=Math.PI/2,this.flash2.position.copy(this.flash.position).add(new b(0,0,-.12)),i.add(this.flash2),this.flashLight||(this.flashLight=new vs(16752736,0,3),this.scene.add(this.flashLight))}buildTrail(){let t=this.trailN=18;this.trailPts=[];let e=new Kt;this.trailPos=new Float32Array(t*2*3),this.trailA=new Float32Array(t*2),e.setAttribute("position",new he(this.trailPos,3).setUsage(li)),e.setAttribute("a",new he(this.trailA,1).setUsage(li));let i=[];for(let n=0;n<t-1;n++){let r=n*2,a=r+1,o=r+2,l=r+3;i.push(r,a,o,a,l,o)}e.setIndex(i),this.trailMat=new ue({transparent:!0,depthWrite:!1,blending:ge,side:Pe,uniforms:{color:{value:new et(1.6,.15,.22)},strength:{value:0}},vertexShader:"attribute float a; varying float vA; void main(){ vA = a; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 color; uniform float strength; varying float vA; void main(){ float a = vA * strength; gl_FragColor = vec4(color * (0.6 + vA), a); }"}),this.trail=new ct(e,this.trailMat),this.trail.frustumCulled=!1,this.scene.add(this.trail),this.trailOn=0}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}slash(t){let e=[{from:[.55,.12,-.32,-.15,.9,-1.5],mid:[.02,-.04,-.72,-.45,.05,-1.4],to:[-.52,-.32,-.45,-.7,-.95,-1.2],dur:.27},{from:[-.45,.1,-.38,-.25,-.95,1.35],mid:[.05,-.06,-.74,-.5,0,1.5],to:[.55,-.38,-.45,-.6,.95,1.45],dur:.27},{from:[.45,-.42,-.35,-1.2,.5,-.6],mid:[.05,.02,-.75,-.2,0,-.4],to:[-.4,.4,-.45,.6,-.6,-.3],dur:.3},{from:[.18,.48,-.25,1,0,.1],mid:[.05,.02,-.82,-.6,0,0],to:[-.02,-.55,-.5,-1.45,0,0],dur:.36},{from:[.62,-.1,-.1,-.3,1.3,-1.55],mid:[0,-.08,-.85,-.4,0,-1.5],to:[-.7,-.15,-.3,-.5,-1.3,-1.4],dur:.32}];this.anim.sword={type:"slash",t:0,...e[t]},this.trailOn=1}chargePose(t){this.charge=t}parry(){this.anim.sword={type:"parry",t:0,dur:.4}}parryHit(){this.anim.sword={type:"parryHit",t:0,dur:.32},this.edgeFlash=.5}clash(){this.anim.sword={type:"clash",t:0,dur:.3},this.edgeFlash=.6}blocked(){this.anim.sword={type:"clash",t:0,dur:.22}}shoot(t=1){this.recoil=t,this.flash.material.opacity=1,this.flashLight.intensity=12,this.flash.rotation.z=Math.random()*Math.PI,this.cylT+=Math.PI/3}reload(t){this.anim.left={type:"reload",t:0,dur:t}}hookFire(){this.anim.left={type:"hook",t:0,dur:.28}}inspect(){this.anim.sword||(this.anim.sword={type:"inspect",t:0,dur:1.4})}toWorld(t,e,i){return t.getWorldPosition(i),i.applyQuaternion(e.quaternion).add(e.position),i}update(t,e){t=Math.max(0,t||0),this.t+=t,this.swayX+=(-e.mouseDX*45e-5-this.swayX)*Math.min(1,t*12),this.swayY+=(e.mouseDY*45e-5-this.swayY)*Math.min(1,t*12),this.swayX=Te.clamp(this.swayX,-.07,.07),this.swayY=Te.clamp(this.swayY,-.06,.06);let i=e.grounded&&!e.sliding;i&&(this.bob+=t*(3+e.hSpeed*.62));let n=i?Math.min(1,e.hSpeed/11)*e.bobScale:0,r=Math.sin(this.bob)*.013*n,a=-Math.abs(Math.cos(this.bob))*.017*n,o=Math.sin(this.t*1.6)*.004;this.sprint+=((e.hSpeed>17?1:0)-this.sprint)*Math.min(1,t*4),this.slideB+=((e.sliding?1:0)-this.slideB)*Math.min(1,t*8),this.wallL+=((e.wallSide<0?1:0)-this.wallL)*Math.min(1,t*10),this.wallR+=((e.wallSide>0?1:0)-this.wallR)*Math.min(1,t*10);let l=Te.clamp(-e.vy*.0035,-.05,.07),h=e.landDip*.35,c=[.29,-.29+o,-.5,.08,0,.05];if(c=ni(c,[.33,-.36,-.42,-.25,.25,-.35],this.sprint*.8),c=ni(c,[.36,-.4,-.4,-.5,.4,-.8],this.slideB),c=ni(c,[.42,-.24,-.5,0,0,-.55],this.wallR),this.charge>0){let v=Ii.out(Math.min(1,this.charge));c=ni(c,[.48,-.36,-.18,-.35,1.25,-1.55],v),c[0]+=(Math.random()-.5)*.004*v,c[1]+=(Math.random()-.5)*.004*v}let d=this.anim.sword;if(d){d.t+=t;let v=Math.min(1,d.t/d.dur);if(d.type==="slash"){if(v<.12)c=ni(c,d.from,Ii.out(v/.12));else if(v<.5){let y=(v-.12)/.38;c=y<.5?ni(d.from,d.mid,Ii.inOut(y*2)):ni(d.mid,d.to,Ii.out((y-.5)*2))}else c=ni(d.to,c,Ii.inOut((v-.5)/.5));v>.5&&(this.trailOn=Math.max(0,1-(v-.5)*4))}else if(d.type==="parry"||d.type==="parryHit"||d.type==="clash"){let y=d.type==="clash"?[.12,-.02,-.38,.25,.1,1.2]:[.06,-.06,-.44,.05,0,1.45],M=v<.18?Ii.back(v/.18):v>.7?1-Ii.inOut((v-.7)/.3):1;if(c=ni(c,y,M),d.type!=="parry"){let I=Math.sin(v*Math.PI)*(d.type==="clash"?.12:.07);c[2]+=I,c[3]+=I*2.5,c[1]+=I*.5}}else if(d.type==="inspect"){let y=Math.sin(v*Math.PI);c=ni(c,[.1,-.12,-.42,.2,-.6,1.2],y),this.blade.rotation.y=v*Math.PI*4*(v<.5,1)}v>=1&&(this.anim.sword=null,this.blade.rotation.y=0)}this.swordPivot.position.set(c[0]+this.swayX+r,c[1]+this.swayY+a+l-h,c[2]),this.swordPivot.rotation.set(c[3]+this.swayY*2,c[4]+this.swayX*2,c[5]),this.recoil=Math.max(0,this.recoil-t*(this.loadout==="shotgun"?3.5:6));let u=Ii.out(Math.min(1,this.recoil)),f=[-.24,-.22+o,-.46,.04+u*(this.loadout==="shotgun"?.7:.5),.1,.05];f[2]+=u*.09,f=ni(f,[-.28,-.32,-.4,-.3,.2,.2],this.sprint*.8),f=ni(f,[-.3,-.36,-.38,-.45,.3,.4],this.slideB),f=ni(f,[-.62,-.02,-.42,.2,.9,1.4],this.wallL);let g=this.anim.left;if(g){g.t+=t;let v=Math.min(1,g.t/g.dur);if(g.type==="reload"){let y=Math.sin(v*Math.PI);f[5]+=y*(this.loadout==="shotgun"?.4:1.2),f[1]-=y*.1,f[3]+=y*(this.loadout==="shotgun"?-.6:.4),this.cyl&&(this.cylT=this.cylA+(v<.9?.6:0))}else if(g.type==="hook"){let y=v<.25?Ii.out(v/.25):1-Ii.inOut((v-.25)/.75);f=ni(f,[-.16,-.12,-.62,.1,0,-.3],y)}v>=1&&(this.anim.left=null)}this.leftPivot.position.set(f[0]+this.swayX*.9+r*.8,f[1]+this.swayY+a+l-h,f[2]),this.leftPivot.rotation.set(f[3]+this.swayY*2,f[4]+this.swayX*2,f[5]),this.cyl&&(this.cylA+=(this.cylT-this.cylA)*Math.min(1,t*20),this.cyl.rotation.z=this.cylA),this.hammer&&(this.hammer.rotation.x=-u*.8),this.gauntletGlow.material.color.setRGB(.3,1.3,1.5).multiplyScalar(e.grappleReady?1:.2),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*20),this.flash.scale.setScalar(.6+this.flash.material.opacity*.7),this.muzzle.getWorldPosition(this.flashLight.position),this.flashLight.intensity=Math.max(0,this.flashLight.intensity-t*150),this.edgeFlash=Math.max(0,this.edgeFlash-t);let x=e.momentum,p=this.charge,m=.9+x*1.3+this.edgeFlash*3+p*1.6;this.edgeMat.color.setRGB(1.3*m,(.12+this.edgeFlash*.9+p*.5)*m,(.18+this.edgeFlash*.9+p*.6)*m),this.rim.intensity=1.6+x*1.2+this.edgeFlash*3,this.updateTrail(t,e)}updateTrail(t,e){let i=new b,n=new b;this.tip.getWorldPosition(i),this.mid.getWorldPosition(n),this.trailPts.unshift({tip:i,mid:n}),this.trailPts.length>this.trailN&&this.trailPts.pop();let r=this.trailPts.length;for(let a=0;a<this.trailN;a++){let o=this.trailPts[Math.min(a,r-1)];this.trailPos.set([o.tip.x,o.tip.y,o.tip.z],a*6),this.trailPos.set([o.mid.x,o.mid.y,o.mid.z],a*6+3);let l=Math.pow(1-a/(this.trailN-1),1.6);this.trailA[a*2]=l,this.trailA[a*2+1]=l*.15}this.trail.geometry.attributes.position.needsUpdate=!0,this.trail.geometry.attributes.a.needsUpdate=!0,this.trailOn=Math.max(0,this.trailOn-t*1.5),this.trailMat.uniforms.strength.value=this.trailOn*(.8+e.momentum*.8),this.trailMat.uniforms.color.value.setRGB(1.4+e.momentum*1.2,.12+this.charge*.9,.2+this.charge*1)}};var ja=class{constructor(t,e=4e3){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e),this.alpha=new Float32Array(e);let i=this.geo=new Kt;i.setAttribute("position",new he(this.pos,3).setUsage(li)),i.setAttribute("color",new he(this.col,3).setUsage(li)),i.setAttribute("alpha",new he(this.alpha,1).setUsage(li)),i.setAttribute("size",new he(this.size,1).setUsage(li)),this.mat=new ue({transparent:!0,depthWrite:!1,blending:ge,uniforms:{scale:{value:300}},vertexShader:`attribute float alpha; attribute float size; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = max(1.5, size * scale / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 p = gl_PointCoord - .5; float d = length(p); float a = smoothstep(.5, .0, d); a *= a; gl_FragColor = vec4(vC * (0.9 + 1.4*a), a * vA); }"}),this.points=new ga(i,this.mat),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,{color:i=[1,.2,.25],speed:n=8,spread:r=1,dir:a=null,size:o=.15,life:l=.6,drag:h=2,gravity:c=12,jitter:d=0}={}){for(let u=0;u<e;u++){let f=this.n<this.max?this.n++:Math.random()*this.max|0;this.pos[f*3]=t.x+(Math.random()-.5)*d,this.pos[f*3+1]=t.y+(Math.random()-.5)*d,this.pos[f*3+2]=t.z+(Math.random()-.5)*d;let g=Math.random()*2-1,x=Math.random()*2-1,p=Math.random()*2-1,m=Math.hypot(g,x,p)||1;g/=m,x/=m,p/=m,a&&(g=a.x+g*r,x=a.y+x*r,p=a.z+p*r);let v=n*(.3+Math.random()*.9);this.vel[f*3]=g*v,this.vel[f*3+1]=x*v,this.vel[f*3+2]=p*v,this.col[f*3]=i[0],this.col[f*3+1]=i[1],this.col[f*3+2]=i[2],this.size[f]=o*(.5+Math.random()),this.life[f]=this.maxLife[f]=l*(.5+Math.random()*.8),this.drag[f]=h,this.grav[f]=c}}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){if(e--,n!==e){for(let a=0;a<3;a++)this.pos[n*3+a]=this.pos[e*3+a],this.vel[n*3+a]=this.vel[e*3+a],this.col[n*3+a]=this.col[e*3+a];this.size[n]=this.size[e],this.life[n]=this.life[e],this.maxLife[n]=this.maxLife[e],this.drag[n]=this.drag[e],this.grav[n]=this.grav[e]}n--;continue}let r=Math.exp(-this.drag[n]*t);this.vel[n*3]*=r,this.vel[n*3+1]=this.vel[n*3+1]*r-this.grav[n]*t,this.vel[n*3+2]*=r,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.02&&(this.pos[n*3+1]=.02,this.vel[n*3+1]*=-.4),this.alpha[n]=this.life[n]/this.maxLife[n]}this.n=e,this.geo.setDrawRange(0,e);let i=this.geo.attributes;i.position.needsUpdate=i.color.needsUpdate=i.alpha.needsUpdate=i.size.needsUpdate=!0}},to=class{constructor(t){this.scene=t,this.list=[],this.geo=new _e(1,.35,1,6,1,!0),this.geo.translate(0,.5,0),this.geo.rotateX(Math.PI/2)}add(t,e,i=16765088,n=.1,r=.035,a=3){let o=t.distanceTo(e),l=new ct(this.geo,new Dt({color:new et(i).multiplyScalar(a),transparent:!0,blending:ge,depthWrite:!1}));l.position.copy(t),l.lookAt(e),l.scale.set(r,r,o),this.scene.add(l),this.list.push({m:l,life:n,max:n,w:r})}update(t){for(let e=this.list.length-1;e>=0;e--){let i=this.list[e];i.life-=t;let n=Math.max(0,i.life/i.max);i.m.material.opacity=n,i.m.scale.x=i.m.scale.y=i.w*n,i.life<=0&&(this.scene.remove(i.m),i.m.material.dispose(),this.list.splice(e,1))}}},eo=class{constructor(t){this.scene=t,this.list=[],this.ringGeo=new Pn(.86,1,64),this.flashGeo=new Ci(1,16,12),this.diskGeo=new gs(1,32)}ring(t,e,i,n=3,r=.35,a=3){let o=new ct(this.ringGeo,new Dt({color:new et(i).multiplyScalar(a),transparent:!0,side:Pe,blending:ge,depthWrite:!1}));o.position.copy(t),e?o.lookAt(t.clone().add(e)):o.rotation.x=-Math.PI/2,this.scene.add(o),this.list.push({m:o,life:r,max:r,size:n,kind:"ring"})}flash(t,e,i=1,n=.12,r=3){let a=new ct(this.flashGeo,new Dt({color:new et(e).multiplyScalar(r),transparent:!0,blending:ge,depthWrite:!1}));a.position.copy(t),this.scene.add(a),this.list.push({m:a,life:n,max:n,size:i,kind:"flash"})}scorch(t,e,i,n=.4,r=4){let a=new ct(this.diskGeo,new Dt({color:new et(i).multiplyScalar(2),transparent:!0,blending:ge,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));a.position.copy(t).addScaledVector(e,.02),a.lookAt(t.clone().add(e)),a.scale.setScalar(n),this.scene.add(a),this.list.push({m:a,life:r,max:r,size:n,kind:"scorch"})}update(t){for(let e=this.list.length-1;e>=0;e--){let i=this.list[e];i.life-=t;let n=1-i.life/i.max;i.kind==="ring"?(i.m.scale.setScalar(Math.max(.001,i.size*(.15+yy(n)*.85))),i.m.material.opacity=Math.max(0,1-n)):i.kind==="flash"?(i.m.scale.setScalar(Math.max(.001,i.size*(1-n*.6))),i.m.material.opacity=Math.max(0,1-n)):i.m.material.opacity=Math.max(0,1-n)*.8,i.life<=0&&(this.scene.remove(i.m),i.m.material.dispose(),this.list.splice(e,1))}}},yy=s=>1-Math.pow(1-s,3),io=class{constructor(t){this.scene=t,this.list=[]}mat(t){return new ue({transparent:!0,depthWrite:!1,blending:ge,side:Pe,uniforms:{t:{value:0},color:{value:new et(t)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vUv; uniform float t; uniform vec3 color;
        void main(){ float head = 1.0 - t*1.5; float tail = smoothstep(head - 0.8, head, vUv.x) * step(vUv.x, head + 0.03);
          float edge = smoothstep(0.0, 0.75, vUv.y) * smoothstep(1.0, 0.86, vUv.y);
          float a = tail * edge * (1.0 - t);
          vec3 c = mix(color, vec3(1.0), smoothstep(0.82, 1.0, vUv.y) * 0.85);
          gl_FragColor = vec4(c * 2.6, a); }`})}add(t,e,i=16722504,n=2.6,r=.2,a=!1,o=0,l=1.1){let h=new Pn(n*.32,n,48,1,-Math.PI*l/2,Math.PI*l),c=h.attributes.position,d=h.attributes.uv;for(let f=0;f<c.count;f++){let g=c.getX(f),x=c.getY(f),p=(Math.atan2(x,g)+Math.PI*l/2)/(Math.PI*l);a&&(p=1-p),d.setXY(f,p,(Math.hypot(g,x)-n*.32)/(n*.68))}let u=new ct(h,this.mat(i));u.position.copy(t),u.quaternion.copy(e),u.rotateX(-Math.PI/2),u.rotateZ(Math.PI/2),u.rotateX(o),this.scene.add(u),this.list.push({m:u,life:r,max:r})}update(t){for(let e=this.list.length-1;e>=0;e--){let i=this.list[e];i.life-=t,i.m.material.uniforms.t.value=1-i.life/i.max,i.life<=0&&(this.scene.remove(i.m),i.m.geometry.dispose(),i.m.material.dispose(),this.list.splice(e,1))}}},no=class{constructor(t,e=120){this.n=e;let i=new Kt;this.p=new Float32Array(e*6),this.data=[],i.setAttribute("position",new he(this.p,3).setUsage(li)),this.mat=new Xi({color:new et(1.6,1.4,1.6),transparent:!0,opacity:0,blending:ge,depthWrite:!1}),this.lines=new ms(i,this.mat),this.lines.frustumCulled=!1,t.add(this.lines);for(let n=0;n<e;n++)this.data.push(new b,0);this.items=Array.from({length:e},()=>({p:new b,life:0}))}update(t,e,i,n){let r=i.length();if(this.mat.opacity=Math.min(.35,n*.4),n<=.01)return;let a=i.clone().divideScalar(r||1);for(let o=0;o<this.n;o++){let l=this.items[o];if(l.life-=t,l.life<=0){let c=Math.random()*Math.PI*2,d=1.4+Math.random()*3.5,u=new b().crossVectors(a,Math.abs(a.y)>.9?new b(1,0,0):new b(0,1,0)).normalize(),f=new b().crossVectors(u,a);l.p.copy(e).addScaledVector(a,6+Math.random()*10).addScaledVector(u,Math.cos(c)*d).addScaledVector(f,Math.sin(c)*d),l.life=.2+Math.random()*.25}let h=Math.min(3,r*.05);this.p.set([l.p.x,l.p.y,l.p.z,l.p.x-a.x*h,l.p.y-a.y*h,l.p.z-a.z*h],o*6)}this.lines.geometry.attributes.position.needsUpdate=!0}},dd={uniforms:{tDiffuse:{value:null},speed:{value:0},time:{value:0},damage:{value:0},flash:{value:0},slowmo:{value:0},aspect:{value:1},lowhp:{value:0},grain:{value:.035},blurAmt:{value:1},invert:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float speed, time, damage, flash, slowmo, aspect, lowhp, grain, blurAmt, invert;
    varying vec2 vUv;
    float hash(float n){ return fract(sin(n)*43758.5453); }
    float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec2 c = vUv - 0.5;
      float r = length(c * vec2(aspect, 1.0));
      float s = clamp(speed, 0.0, 1.0);
      float blur = s * 0.04 * blurAmt * smoothstep(0.12, 0.75, r) + flash * 0.01;
      vec3 col = vec3(0.0);
      float ca = (0.0015 + s * 0.006 + flash * 0.012 + damage * 0.006) * r;
      for (int i = 0; i < 10; i++) {
        float k = float(i) / 9.0;
        vec2 uv = vUv - c * blur * k;
        col.r += texture2D(tDiffuse, uv + c * ca).r;
        col.g += texture2D(tDiffuse, uv).g;
        col.b += texture2D(tDiffuse, uv - c * ca).b;
      }
      col /= 10.0;
      // speed lines
      float ang = atan(c.y, c.x);
      float id = floor(ang * 70.0);
      float lt = fract(hash(id) * 10.0 + time * (1.5 + hash(id + 3.0) * 3.0));
      float line = smoothstep(0.03, 0.0, abs(fract(ang * 70.0) - 0.5) - 0.42);
      float reach = smoothstep(0.34 + lt * 0.28, 0.95, r) * step(0.6, hash(id + floor(time * 10.0)));
      col += vec3(1.0, 0.9, 0.95) * line * reach * smoothstep(0.5, 1.0, s) * 0.28;
      // grading: lift shadows toward violet, keep highlights warm
      col = mix(col, col * vec3(1.04, 0.96, 1.08), 0.5);
      // slowmo / low hp desaturation
      float g = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(g) * vec3(0.85, 1.0, 1.2), slowmo * 0.55);
      col = mix(col, vec3(g) * vec3(1.2, 0.85, 0.85), lowhp * 0.5);
      // vignette + damage
      float vig = smoothstep(0.38, 1.0, r);
      col *= 1.0 - vig * 0.5;
      col += vec3(0.8, 0.0, 0.06) * vig * damage;
      col += vec3(0.9, 0.95, 1.0) * flash * 0.3 * (1.0 - r);
      col = mix(col, vec3(1.0) - col * 0.85, invert);
      // film grain
      col += (h2(vUv * 1000.0 + time) - 0.5) * grain;
      gl_FragColor = vec4(col, 1.0);
    }`};var so=class{constructor(){this.ctx=null,this.master=null,this.sfxVol=.8,this.musicVol=.45}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i),i.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=this.musicVol,this.music.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let c=0;c<n;c++)r[c]=Math.random()*2-1;let a=e.sampleRate*1.4,o=e.createBuffer(2,a,e.sampleRate);for(let c=0;c<2;c++){let d=o.getChannelData(c);for(let u=0;u<a;u++)d[u]=(Math.random()*2-1)*Math.pow(1-u/a,3)}this.reverb=e.createConvolver(),this.reverb.buffer=o,this.revGain=e.createGain(),this.revGain.gain.value=.22,this.reverb.connect(this.revGain),this.revGain.connect(this.sfx);let l=e.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.value=400,this.windFilter.Q.value=.7,this.windGain=e.createGain(),this.windGain.gain.value=0,l.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.sfx),l.start();let h=e.createBufferSource();h.buffer=this.noiseBuf,h.loop=!0,this.wrFilter=e.createBiquadFilter(),this.wrFilter.type="highpass",this.wrFilter.frequency.value=2500,this.wrGain=e.createGain(),this.wrGain.gain.value=0,h.connect(this.wrFilter),this.wrFilter.connect(this.wrGain),this.wrGain.connect(this.sfx),h.start(),this._musicStep=0,this._musicNext=0,this.musicOn=!0}setVolumes(t,e){this.sfxVol=t,this.musicVol=e,this.ctx&&(this.sfx.gain.value=t,this.music.gain.value=e)}get t(){return this.ctx.currentTime}_noise(t,{type:e="bandpass",freq:i=1e3,q:n=1,gain:r=.5,attack:a=.002,sweepTo:o=null,rev:l=.3}={}){if(!this.ctx)return;let h=this.ctx,c=this.t,d=h.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.4;let u=h.createBiquadFilter();u.type=e,u.frequency.setValueAtTime(i,c),u.Q.value=n,o&&u.frequency.exponentialRampToValueAtTime(o,c+t);let f=h.createGain();if(f.gain.setValueAtTime(1e-4,c),f.gain.exponentialRampToValueAtTime(r,c+a),f.gain.exponentialRampToValueAtTime(1e-4,c+t),d.connect(u),u.connect(f),f.connect(this.sfx),l){let g=h.createGain();g.gain.value=l,f.connect(g),g.connect(this.reverb)}d.start(c,Math.random()),d.stop(c+t+.05)}_tone(t,e,{type:i="sine",gain:n=.3,attack:r=.002,slideTo:a=null,rev:o=.3,delay:l=0}={}){if(!this.ctx)return;let h=this.ctx,c=this.t+l,d=h.createOscillator();d.type=i,d.frequency.setValueAtTime(t,c),a&&d.frequency.exponentialRampToValueAtTime(a,c+e);let u=h.createGain();if(u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(n,c+r),u.gain.exponentialRampToValueAtTime(1e-4,c+e),d.connect(u),u.connect(this.sfx),o){let f=h.createGain();f.gain.value=o,u.connect(f),f.connect(this.reverb)}d.start(c),d.stop(c+e+.05)}slash(t=1){this._noise(.22,{type:"bandpass",freq:3500,sweepTo:600,q:1.2,gain:.35*t,attack:.01}),this._noise(.12,{type:"highpass",freq:6e3,gain:.12*t,rev:0})}slashHit(){this._noise(.18,{type:"lowpass",freq:1800,gain:.6,rev:.2}),this._tone(180,.15,{type:"square",gain:.12,slideTo:60})}gunshot(){this._noise(.35,{type:"lowpass",freq:5e3,sweepTo:300,gain:.8,rev:.6}),this._tone(140,.25,{type:"sine",gain:.6,slideTo:40,rev:0}),this._noise(.05,{type:"highpass",freq:3e3,gain:.4,rev:0})}enemyShot(t=10){let e=Math.max(.05,.4-t*.008);this._noise(.25,{type:"bandpass",freq:1400,sweepTo:400,gain:e,rev:.6}),this._tone(900,.12,{type:"sawtooth",gain:e*.3,slideTo:300,rev:.3})}parry(t=!0){let e=t?1:.6;[1,2.76,5.4,8.93].forEach((i,n)=>this._tone(620*i,.9/(n+1),{type:"sine",gain:.22*e/(n*.6+1),rev:.7})),this._noise(.08,{type:"highpass",freq:4e3,gain:.5*e,rev:.5}),t&&this._tone(1240,.6,{type:"triangle",gain:.1,slideTo:2480,delay:.03})}clash(){[1,2.4,4.1].forEach((t,e)=>this._tone(480*t,.5,{type:"triangle",gain:.25/(e+1),rev:.8})),this._noise(.15,{type:"bandpass",freq:2500,gain:.6})}dash(){this._noise(.3,{type:"bandpass",freq:400,sweepTo:2500,q:.8,gain:.45,attack:.02}),this._tone(90,.2,{type:"sine",gain:.3,slideTo:200,rev:0})}jump(){this._noise(.12,{type:"lowpass",freq:900,gain:.18,rev:0})}land(t){this._noise(t?.25:.1,{type:"lowpass",freq:t?500:900,gain:t?.5:.2,rev:.1}),t&&this._tone(70,.25,{gain:.4,slideTo:35,rev:0})}step(){this._noise(.06,{type:"bandpass",freq:700+Math.random()*400,gain:.12,rev:0})}slideStart(){this._noise(.5,{type:"bandpass",freq:1800,sweepTo:700,gain:.25,attack:.03})}grapple(){this._tone(1800,.15,{type:"square",gain:.08,slideTo:300}),this._noise(.2,{type:"highpass",freq:2e3,gain:.2})}grappleHit(){this._tone(300,.1,{type:"square",gain:.15,slideTo:120,rev:0})}hitmarker(t){this._tone(t?2200:1600,.06,{type:"square",gain:.08,rev:0}),t&&this._tone(3300,.1,{type:"sine",gain:.1,rev:0,delay:.02})}kill(t=1){let e=440*Math.pow(1.06,Math.min(t,12)*2);this._tone(e,.25,{type:"triangle",gain:.18}),this._tone(e*1.5,.35,{type:"triangle",gain:.14,delay:.06}),this._noise(.4,{type:"lowpass",freq:600,sweepTo:80,gain:.4})}hurt(){this._tone(220,.25,{type:"sawtooth",gain:.2,slideTo:90,rev:0}),this._noise(.15,{type:"lowpass",freq:700,gain:.4,rev:0})}reload(){this._tone(900,.04,{type:"square",gain:.1,rev:0}),this._tone(600,.05,{type:"square",gain:.1,rev:0,delay:.25}),this._tone(1300,.05,{type:"square",gain:.12,rev:0,delay:.55})}empty(){this._tone(1400,.03,{type:"square",gain:.06,rev:0})}wave(){[0,.12,.24].forEach((t,e)=>this._tone(220*Math.pow(1.5,e),.6,{type:"sawtooth",gain:.1,delay:t}))}bulletWhiz(){this._noise(.15,{type:"bandpass",freq:2500,sweepTo:900,q:3,gain:.15,rev:0})}ui(){this._tone(1e3,.05,{type:"sine",gain:.08,rev:0})}shotgun(){this._noise(.5,{type:"lowpass",freq:3500,sweepTo:160,gain:1,rev:.7}),this._tone(90,.35,{type:"sine",gain:.8,slideTo:30,rev:0}),this._noise(.08,{type:"highpass",freq:2500,gain:.5,rev:0})}pump(){this._noise(.06,{type:"bandpass",freq:1500,gain:.2,rev:0}),this._noise(.06,{type:"bandpass",freq:900,gain:.25,rev:0})}wallStart(){this._noise(.25,{type:"bandpass",freq:2200,sweepTo:900,gain:.18})}climb(){this._noise(.15,{type:"bandpass",freq:600,gain:.2,rev:0})}mantle(){this._noise(.18,{type:"lowpass",freq:700,gain:.25,rev:0})}hookFire(){this._tone(2200,.18,{type:"sawtooth",gain:.06,slideTo:600}),this._noise(.12,{type:"highpass",freq:3e3,gain:.2})}hookAttach(t){this._tone(t?500:320,.12,{type:"square",gain:.14,slideTo:140,rev:.2}),this._noise(.06,{type:"bandpass",freq:1800,gain:.3,rev:0})}sniperCharge(t){let e=Math.max(.04,.22-t*.002);this._tone(1800,1.2,{type:"sine",gain:e,slideTo:3600,attack:.05,rev:.4})}sniperShot(t){let e=Math.max(.15,.7-t*.004);this._noise(.7,{type:"lowpass",freq:5e3,sweepTo:200,gain:e,rev:.9}),this._tone(220,.5,{type:"sawtooth",gain:e*.3,slideTo:50})}telegraph(t){t?this._tone(2400,.09,{type:"triangle",gain:.12,rev:.3}):(this._tone(160,.35,{type:"sawtooth",gain:.2,slideTo:90,rev:.4}),this._tone(170,.35,{type:"sawtooth",gain:.15,slideTo:95}))}block(){[1,2.1,3.6].forEach((t,e)=>this._tone(380*t,.3,{type:"triangle",gain:.14/(e+1),rev:.6})),this._noise(.08,{type:"bandpass",freq:2200,gain:.35})}broken(){this._tone(880,.5,{type:"square",gain:.08,slideTo:1760,rev:.6}),this._tone(440,.6,{type:"triangle",gain:.1,rev:.6,delay:.05})}execute(){this._noise(.8,{type:"lowpass",freq:3e3,sweepTo:60,gain:.9,rev:.9}),this._tone(60,.8,{type:"sine",gain:.8,slideTo:25,rev:0}),[1,1.5,2].forEach((t,e)=>this._tone(660*t,1,{type:"triangle",gain:.08,rev:.9,delay:.05*e}))}chargeStart(){this._tone(200,.6,{type:"sawtooth",gain:.05,slideTo:800,attack:.1,rev:.3})}iaido(){this._noise(.5,{type:"bandpass",freq:600,sweepTo:6e3,q:.7,gain:.6,attack:.01,rev:.6}),this._tone(120,.4,{type:"sine",gain:.5,slideTo:40,rev:0})}droneExplode(){this._noise(.6,{type:"lowpass",freq:2e3,sweepTo:80,gain:.7,rev:.6})}checkpoint(t){[0,.07,.14].forEach((e,i)=>this._tone(880*Math.pow(1.26,i),.25,{type:"triangle",gain:.12,delay:e})),t&&[0,.1,.2,.3].forEach((e,i)=>this._tone(660*Math.pow(1.5,i%3),.5,{type:"square",gain:.06,delay:.25+e}))}boost(){this._tone(300,.3,{type:"sawtooth",gain:.1,slideTo:1200,rev:.3})}update(t,e,i,n=0){if(!this.ctx)return;this.intensity=(this.intensity||0)+(n-(this.intensity||0))*Math.min(1,i*2);let r=Math.min(t/40,1);this.windGain.gain.setTargetAtTime(Math.max(0,r-.15)*.35,this.t,.1),this.windFilter.frequency.setTargetAtTime(300+r*1600,this.t,.1),this.wrGain.gain.setTargetAtTime(e?.06:0,this.t,.05),this._updateMusic()}_updateMusic(){if(!this.musicOn||this.musicVol<=.001)return;let t=this.ctx,e=132,i=60/e/4;for(this._musicNext<t.currentTime&&(this._musicNext=t.currentTime+.05);this._musicNext<t.currentTime+.2;)this._playStep(this._musicStep,this._musicNext),this._musicNext+=i,this._musicStep=(this._musicStep+1)%64}_playStep(t,e){let i=this.ctx,n=this.music,r=Math.floor(t/16),a=t%16,l=[36,36,39,34][r],h=d=>440*Math.pow(2,(d-69)/12),c=(d,u,f,g=.003)=>{d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(u,e+g),d.gain.exponentialRampToValueAtTime(1e-4,e+f)};if(a%4===0){let d=i.createOscillator(),u=i.createGain();d.frequency.setValueAtTime(140,e),d.frequency.exponentialRampToValueAtTime(40,e+.12),c(u,.9,.3),d.connect(u),u.connect(n),d.start(e),d.stop(e+.32)}if(a===4||a===12){let d=i.createBufferSource();d.buffer=this.noiseBuf;let u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=1800;let f=i.createGain();c(f,.35,.18),d.connect(u),u.connect(f),f.connect(n),d.start(e,Math.random()),d.stop(e+.2)}if(a%2===1){let d=i.createBufferSource();d.buffer=this.noiseBuf;let u=i.createBiquadFilter();u.type="highpass",u.frequency.value=8e3;let f=this.intensity||0,g=i.createGain();c(g,(a%4===3?.12:.06)*(.6+f*.8),.05),d.connect(u),u.connect(g),g.connect(n),d.start(e,Math.random()),d.stop(e+.06)}if(a%4!==0){let d=i.createOscillator();d.type="sawtooth",d.frequency.value=h(l+(a===14?12:0));let u=i.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(900,e),u.frequency.exponentialRampToValueAtTime(150,e+.1),u.Q.value=6;let f=i.createGain();c(f,.22,.12),d.connect(u),u.connect(f),f.connect(n),d.start(e),d.stop(e+.14)}if((this.intensity||0)>.55&&(a===0||a===6||a===10))for(let d of[-7,7]){let u=i.createOscillator();u.type="sawtooth",u.frequency.value=h(l+48+(a===10?3:0)),u.detune.value=d;let f=i.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(3200,e),f.frequency.exponentialRampToValueAtTime(600,e+.25);let g=i.createGain();c(g,.035*this.intensity,.3),u.connect(f),f.connect(g),g.connect(n);let x=i.createGain();x.gain.value=.6,g.connect(x),x.connect(this.reverb),u.start(e),u.stop(e+.32)}if(a%2===0){let d=[0,3,7,10,12,7],u=i.createOscillator();u.type="square",u.frequency.value=h(l+36+d[t/2%d.length|0]);let f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;let g=i.createGain();c(g,.03+(this.intensity||0)*.035,.18),u.connect(f),f.connect(g),g.connect(n);let x=i.createGain();x.gain.value=.5,g.connect(x),x.connect(this.reverb),u.start(e),u.stop(e+.2)}}};var Se=s=>document.getElementById(s),Yi=[{r:"D",n:"DULL",at:0},{r:"C",n:"CUTTING",at:20},{r:"B",n:"BRUTAL",at:42},{r:"A",n:"APEX",at:64},{r:"S",n:"SAVAGE",at:86},{r:"SS",n:"SUPERSONIC",at:108},{r:"R",n:"REDLINE",at:132}],ro=class{constructor(){this.cache={},this.dnums=[],this.threatEls=[],this.v=new b}text(t,e){this.cache[t]!==e&&(this.cache[t]=e,Se(t).textContent=e)}html(t,e){this.cache["h"+t]!==e&&(this.cache["h"+t]=e,Se(t).innerHTML=e)}style(t,e,i){let n=t+e;this.cache[n]!==i&&(this.cache[n]=i,Se(t).style[e]=i)}show(t,e){let i="vis"+t;this.cache[i]!==e&&(this.cache[i]=e,Se(t).classList.toggle("hidden",!e))}buildPips(t,e,i){let n=Se(t);n.innerHTML="";for(let r=0;r<e;r++){let a=document.createElement("div");a.className="pip",a.innerHTML=`<i style="background:${i};box-shadow:0 0 8px ${i}"></i>`,n.appendChild(a)}}setPips(t,e,i){let n=Se(t);for(let r=0;r<n.children.length;r++){let a=r<e?1:r===e?i:0,o=t+r+":"+Math.round(a*40);if(this.cache[t+r]===o)continue;this.cache[t+r]=o;let l=n.children[r].firstChild.style;l.transform=`scaleX(${a})`,l.opacity=a>=1?1:.35}}setRounds(t,e,i){let n=t+"/"+e+i;this.cache.rounds!==n&&(this.cache.rounds=n,Se("rounds").innerHTML=Array.from({length:e},(r,a)=>`<div class="rd${i?" sh":""}${a>=t?" off":""}"></div>`).join(""),Se("ammoNum").innerHTML=`${t}<small> / ${e}</small>`)}banner(t,e){let i=Se("banner");Se("bannerBig").textContent=t,Se("bannerSmall").textContent=e||"",i.classList.remove("bannerAnim"),i.offsetWidth,i.classList.add("bannerAnim")}feed(t,e){let i=document.createElement("div");i.className="feedItem",i.innerHTML=t+(e?`<b>+${e}</b>`:"");let n=Se("feed");for(n.prepend(i),setTimeout(()=>i.remove(),2300);n.children.length>6;)n.lastChild.remove()}popup(t,e){let i=Se("popup");i.textContent=t,i.style.color=e,i.animate([{opacity:0,transform:"translateX(-50%) scale(1.7)"},{opacity:1,transform:"translateX(-50%) scale(1)",offset:.14},{opacity:1,offset:.7},{opacity:0,transform:"translateX(-50%) translateY(-12px)"}],{duration:950,easing:"ease-out"})}hint(t,e=2500){let i=Se("hint");i.textContent=t,i.style.opacity=1,clearTimeout(this._hintT),this._hintT=setTimeout(()=>i.style.opacity=0,e)}hitmarker(t){let e=Se("hit");e.classList.toggle("head",!!t),e.animate([{opacity:1,transform:"rotate(45deg) scale(1.35)"},{opacity:0,transform:"rotate(45deg) scale(1)"}],{duration:230})}parryRing(t="#30e0ff"){let e=Se("parryRing");e.style.borderColor=t,e.animate([{opacity:1,transform:"scale(.55)"},{opacity:0,transform:"scale(1.9)"}],{duration:380,easing:"ease-out"})}damageNumber(t,e,i=""){let n=document.createElement("div");n.className="dnum "+i,n.textContent=typeof e=="number"?Math.round(e):e,Se("dnums").appendChild(n),this.dnums.push({el:n,pos:t.clone(),life:.9,vy:2.2+Math.random(),vx:(Math.random()-.5)*1.6})}damageDir(t){let e=document.createElement("div");e.className="dmgdir";let i=160;e.style.left=Math.sin(-t)*i+"px",e.style.top=-Math.cos(t)*i+"px",e.style.transform=`rotate(${-t}rad)`,Se("threats").appendChild(e),e.animate([{opacity:1},{opacity:0}],{duration:950}).onfinish=()=>e.remove()}stagger(t){Se("staggerTxt").style.opacity=t?1:0}update(t,e){let i=e.player,n=Math.round(i.hSpeed*3.6);this.text("speedNum",n),this.style("speedFill","width",Math.min(100,i.speed/50*100).toFixed(1)+"%");let r=e.momentum();this.text("momentum",r>.04?`MOMENTUM \xD7${(1+r*1.5).toFixed(1)}`:""),this.setPips("dashPips",i.dashCharges,i.dashRegen/1.6),this.setPips("hookPips",i.grappleCharges,i.grapple||i.hook?0:i.grappleRegen/2.4),this.setPips("iaiPips",e.iaidoCd<=0?1:0,1-e.iaidoCd/2.6),e.hpGhost+=(e.hp-e.hpGhost)*Math.min(1,t*3),e.hpGhost<e.hp&&(e.hpGhost=e.hp),this.style("hpFill","transform",`scaleX(${(e.hp/100).toFixed(3)})`),this.style("hpGhost","transform",`scaleX(${(e.hpGhost/100).toFixed(3)})`),this.text("hpNum",Math.ceil(e.hp)),this.style("instFill","transform",`scaleX(${(e.pInst/100).toFixed(3)})`);let a=Math.max(0,.45-e.hp/100)/.45;this.style("lowhp","boxShadow",`inset 0 0 ${Math.round(140+a*140)}px rgba(255,0,30,${(a*.7).toFixed(2)})`);let o=e.weapon;this.text("ammoLbl",o.name),this.setRounds(e.ammo,o.mag,o.id==="shotgun"),this.text("reloadTxt",e.reloadT>0?"RELOADING":e.ammo===0?"R \u2014 \uC7AC\uC7A5\uC804":"");let l=e.rankIdx();this.text("rank",Yi[l].r),this.text("rankName",Yi[l].n);let h=Yi[l+1];this.style("rankFill","width",(h?(e.style-Yi[l].at)/(h.at-Yi[l].at)*100:100).toFixed(0)+"%"),this.text("mult","\xD7"+e.styleMult().toFixed(2)),this.style("rank","color",l>=6?"#ff2a48":l>=4?"#ffc23a":"#fff"),this.cache.ri!==void 0&&l>this.cache.ri&&Se("rank").animate([{transform:"scale(1.5)"},{transform:"scale(1)"}],{duration:260}),this.cache.ri=l,this.text("scoreTxt",e.mode==="trial"?dn(e.trialTime):e.score.toLocaleString()),this.style("chargeRing","opacity",e.charge>0?1:0),this.style("chargeRing","--p",""),Se("chargeRing").style.setProperty("--p",(Math.min(1,e.charge)*100).toFixed(0)+"%"),Se("chargeRing").style.background=`conic-gradient(${e.charge>=1?"#fff":"#ffc23a"} ${(Math.min(1,e.charge)*100).toFixed(0)}%, transparent 0)`;let c=1+Math.min(1.2,i.speed/40)*.6+e.recoilUI*1.5;Math.abs((this.cache.spread||0)-c)>.02&&(this.cache.spread=c,["t1","t2","t3","t4"].forEach((g,x)=>{let p=document.querySelector("#cross ."+g),m=(c-1)*8;p.style.transform=x===0?`translateY(${-m}px)`:x===1?`translateY(${m}px)`:x===2?`translateX(${-m}px)`:`translateX(${m}px)`}));let d=e.enemies.filter(g=>g.alive&&(g.state==="windup"||g.state==="aim")&&g.pos.distanceTo(i.pos)<(g.type==="sniper"?200:40));for(;this.threatEls.length<d.length;){let g=document.createElement("div");g.className="threat",Se("threats").appendChild(g),this.threatEls.push(g)}let u=Math.atan2(-Math.sin(i.yaw),-Math.cos(i.yaw));this.threatEls.forEach((g,x)=>{let p=d[x];if(!p){g.style.display="none";return}g.style.display="block";let m=this.v.subVectors(p.pos,i.pos),v=Math.atan2(m.x,m.z)-u,y=70+Math.min(50,m.length()*1.5);g.style.left=Math.sin(-v)*y-12+"px",g.style.top=-Math.cos(v)*y-10+"px",g.style.transform=`rotate(${-v}rad)`;let M=p.parryable===!1?"#ff3048":p.type==="sniper"?"#b066ff":"#ffc23a";g.style.borderBottomColor=M,g.style.color=M});let f=e.camera;for(let g=this.dnums.length-1;g>=0;g--){let x=this.dnums[g];x.life-=t,x.pos.y+=x.vy*t,x.pos.x+=x.vx*t;let p=this.v.copy(x.pos).project(f);if(x.life<=0||p.z>1){x.el.remove(),this.dnums.splice(g,1);continue}x.el.style.left=((p.x+1)/2*innerWidth).toFixed(0)+"px",x.el.style.top=((1-p.y)/2*innerHeight).toFixed(0)+"px",x.el.style.opacity=Math.min(1,x.life*3).toFixed(2)}if(e.mode==="trial"&&e.cpTarget){this.show("cpArrow",!0),this.show("cpInfo",!0);let g=this.v.subVectors(e.cpTarget,i.pos),x=Math.atan2(g.x,g.z)-u;Se("cpArrow").firstChild.style.transform=`rotate(${-x}rad)`,this.text("cpInfo",`CHECKPOINT ${e.cpIndex+1} / ${e.map.checkpoints.length}   \xB7   ${Math.round(g.length())} m`)}else this.show("cpArrow",!1),this.show("cpInfo",!1)}};function dn(s){let t=Math.floor(s/60),e=s-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}var Zc=[["forward","\uC55E\uC73C\uB85C"],["back","\uB4A4\uB85C"],["left","\uC67C\uCABD"],["right","\uC624\uB978\uCABD"],["jump","\uC810\uD504 / \uBCBD\uC810\uD504"],["crouch","\uC2AC\uB77C\uC774\uB4DC / \uC6C5\uD06C\uB9AC\uAE30"],["dash","\uB300\uC2DC"],["slash","\uBCA0\uAE30 (\uAFB9 = \uBC1C\uB3C4\uC220)"],["shoot","\uC0AC\uACA9"],["parry","\uD328\uB9C1"],["grapple","\uADF8\uB798\uD50C (\uB204\uB974\uACE0 \uC788\uAE30)"],["reload","\uC7AC\uC7A5\uC804"],["inspect","\uCE7C \uB3CC\uB9AC\uAE30"],["restart","\uD0C0\uC784\uC5B4\uD0DD \uC7AC\uC2DC\uC791"]],ao={forward:["KeyW"],back:["KeyS"],left:["KeyA"],right:["KeyD"],jump:["Space"],crouch:["KeyC","ControlLeft"],dash:["ShiftLeft"],slash:["Mouse0"],shoot:["Mouse2"],parry:["KeyF","Mouse3"],grapple:["KeyE","KeyQ"],reload:["KeyR"],inspect:["KeyV"],restart:["KeyT"]},fd={sens:1,fov:100,fovFx:18,shake:1,tilt:1,bob:1,blur:1,sfx:.8,music:.4,crouchToggle:0,quality:"high",fps:0,full:1,autoHop:1,loadout:"revolver",crosshair:"#ffffff",binds:ao},Kc={low:{pr:.8,shadows:!1,shadowSize:1024,bloom:!0,msaa:0,particles:300,lights:!1,rain:!1,rainCount:0,traffic:30,envRes:128},medium:{pr:1,shadows:!0,shadowSize:1024,bloom:!0,msaa:0,particles:800,lights:!0,rain:!0,rainCount:1500,traffic:60,envRes:256},high:{pr:1.25,shadows:!0,shadowSize:2048,bloom:!0,msaa:4,particles:1500,lights:!0,rain:!0,rainCount:3e3,traffic:90,envRes:256},ultra:{pr:2,shadows:!0,shadowSize:4096,bloom:!0,msaa:4,particles:2500,lights:!0,rain:!0,rainCount:5e3,traffic:140,envRes:512}},pd="redshift2_settings";function md(){try{let s=JSON.parse(localStorage.getItem(pd)||"{}");return{...fd,...s,binds:{...ao,...s.binds||{}}}}catch{return JSON.parse(JSON.stringify(fd))}}function Rs(s){try{localStorage.setItem(pd,JSON.stringify(s))}catch{}}function gd(){try{return{score:0,wave:0,speed:0,trial:0,...JSON.parse(localStorage.getItem("redshift2_records")||"{}")}}catch{return{score:0,wave:0,speed:0,trial:0}}}function xd(s){try{localStorage.setItem("redshift2_records",JSON.stringify(s))}catch{}}function oo(s){return s?s.startsWith("Mouse")?["\uC88C\uD074\uB9AD","\uD720\uD074\uB9AD","\uC6B0\uD074\uB9AD","\uB9C8\uC6B0\uC2A44","\uB9C8\uC6B0\uC2A45"][+s.slice(5)]||s:s.replace("Key","").replace("Digit","").replace("ControlLeft","L-CTRL").replace("ControlRight","R-CTRL").replace("ShiftLeft","L-SHIFT").replace("ShiftRight","R-SHIFT").replace("AltLeft","L-ALT").replace("Space","SPACE").replace("ArrowUp","\u2191").replace("ArrowDown","\u2193").replace("ArrowLeft","\u2190").replace("ArrowRight","\u2192"):"\u2014"}var yd={revolver:{id:"revolver",name:"REVOLVER",mag:6,rate:.23,reload:1,dmg:34,head:2.5,pellets:1,spread:.002,airSpread:.005,kickAir:2.5,kickGround:0,inst:9},shotgun:{id:"shotgun",name:"SCATTER",mag:2,rate:.3,reload:.95,dmg:12,head:1.5,pellets:10,spread:.07,airSpread:.07,kickAir:15,kickGround:5,inst:5}},lo=1/120,vd=.18,Jc=.34,Rt=new b,Cs=new b,vy=new b,co={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Fn=class Fn{constructor(t,e,i){this.canvas=t,this.S=e,this.input=i,this.Q=Kc[e.quality]||Kc.high,this.state="menu",this.mode="arena",this.hud=new ro,this.audio=new so,this.initRenderer(),this.scene=new ps,this.camera=new ze(e.fov,innerWidth/innerHeight,.05,2e3),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.atmo=new Xa(this.scene,this.Q),this.map=new Wa(this.scene,this.Q),this.captureEnvironment(),this.vm=new Qa(e.loadout),this.vm.scene.environment=this.scene.environment,this.fx={sparks:new ja(this.scene,5e3),tracers:new to(this.scene),bursts:new eo(this.scene),arcs:new io(this.scene),streaks:new no(this.scene,90)},this.initComposer(),this.player=new $a(this.map,this.playerEvents()),this.enemies=[],this.projectiles=[],this.debris=[],this.initHookVisual(),this.trialRings=[],this.resize(),addEventListener("resize",()=>this.resize()),this.acc=0,this.last=performance.now(),this.clockT=0,this.fpsAcc=0,this.fpsN=0,this.camState={dip:0,dipV:0,tilt:0,fov:e.fov,kick:0,trauma:0,bob:0},this.timeScale=1,this.slowmoT=0,this.hitstop=0,this.lastRight=0,this.mouseDX=0,this.mouseDY=0,this.records={score:0,wave:0,speed:0,trial:0},this.resetRun(),this.hud.buildPips("dashPips",it.dashCharges,"#30e0ff"),this.hud.buildPips("hookPips",it.grappleCharges,"#7dfcff"),this.hud.buildPips("iaiPips",1,"#ffc23a")}initRenderer(){let t=this.renderer=new da({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(Math.min(devicePixelRatio,this.Q.pr)),t.setSize(innerWidth,innerHeight),t.toneMapping=lr,t.toneMappingExposure=1.08,t.shadowMap.enabled=this.Q.shadows,t.shadowMap.type=Sc}initComposer(){let t=new He(innerWidth,innerHeight,{type:ii,samples:this.Q.msaa}),e=this.composer=new Ba(this.renderer,t);e.setPixelRatio(this.renderer.getPixelRatio()),e.addPass(new hr(this.scene,this.camera));let i=new hr(this.vm.scene,this.vm.camera);i.clear=!1,i.clearDepth=!0,e.addPass(i),this.bloom=new Es(new tt(innerWidth,innerHeight),.65,.32,.9),e.addPass(this.bloom),this.post=new Ms(dd),e.addPass(this.post),e.addPass(new za)}captureEnvironment(){let t=this.Q.envRes,e=new Ks(t,{type:ii}),i=new Zs(1,1500,e);i.position.set(0,10,30),this.scene.add(i);let n=this.scene.fog;this.scene.fog=null,this.atmo.skyMesh.position.copy(i.position),i.update(this.renderer,this.scene),this.scene.fog=n;let r=new fs(this.renderer);this.scene.environment=r.fromCubemap(e.texture).texture,this.scene.environmentIntensity=.85,this.scene.remove(i),e.dispose(),r.dispose()}resize(){this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.vm.resize(innerWidth/innerHeight),this.post.uniforms.aspect.value=innerWidth/innerHeight,this.fx.sparks.mat.uniforms.scale.value=innerHeight*this.renderer.getPixelRatio()*.32}initHookVisual(){this.ropeN=24,this.ropeGeo=new Kt,this.ropeGeo.setAttribute("position",new he(new Float32Array(24*3),3).setUsage(li)),this.rope=new js(this.ropeGeo,new Xi({color:new et(.6,2.4,3)})),this.rope.frustumCulled=!1,this.rope.visible=!1,this.scene.add(this.rope),this.hookHead=new ct(new wa(.16),new Dt({color:new et(1.2,3,3.5)})),this.hookHead.visible=!1,this.scene.add(this.hookHead),this.laserGeo=new _e(.02,.02,1,6,1,!0),this.laserGeo.translate(0,.5,0),this.laserGeo.rotateX(Math.PI/2)}resetRun(){this.hp=100,this.hpGhost=100,this.regenT=0,this.pInst=0,this.pInstHold=0,this.weapon=yd[this.S.loadout]||yd.revolver,this.ammo=this.weapon.mag,this.reloadT=0,this.shootCd=0,this.slashCd=0,this.combo=0,this.comboT=0,this.pendingSlash=null,this.charge=0,this.chargeHold=0,this.iaidoCd=0,this.iaidoActive=null,this.parryT=-1,this.parryCd=0,this.hookSlashT=0,this.lastHookEnemy=null,this.score=0,this.kills=0,this.maxSpeed=0,this.bestRank=0,this.style=0,this.styleHold=0,this.execs=0,this.parries=0,this.wave=0,this.waveState="break",this.waveT=3,this.toSpawn=[],this.trialTime=0,this.cpIndex=0,this.cpTarget=null,this.trialRunning=!1,this.splits=[],this.recoilUI=0,this.damageFx=0,this.flashFx=0,this.invertFx=0,this.gameTime=0,this.training={done:new Set}}momentum(){return Te.clamp((this.player.speed-11.5)/32,0,1)}rankIdx(){let t=0;for(let e=0;e<Yi.length;e++)this.style>=Yi[e].at&&(t=e);return t}styleMult(){return 1+this.rankIdx()*.35}addStyle(t){this.style=Math.min(150,this.style+t),this.styleHold=1.5}addScore(t,e){let i=Math.round(t*this.styleMult());return this.score+=i,e&&this.hud.feed(e,i),i}lookDir(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}shake(t){this.camState.trauma=Math.min(1,this.camState.trauma+t)}slowmo(t){this.slowmoT=Math.max(this.slowmoT,t)}start(t){this.mode=t,this.audio.init(),this.audio.setVolumes(this.S.sfx,this.S.music),this.clearWorld(),this.resetRun(),this.slowmoT=0,this.hitstop=0,this.timeScale=1,this.crouchLatched=!1,Object.assign(this.camState,{dip:0,dipV:0,tilt:0,kick:0,trauma:0}),this.vm.setLoadout(this.S.loadout),this.vm.anim.sword=null,this.vm.anim.left=null,this.vm.charge=0;let e=this.player;t==="trial"?(e.reset(this.map.trialStart.pos,this.map.trialStart.yaw),this.setupTrial()):t==="training"?(e.reset(new b(0,.05,40),Math.PI),this.setupTraining()):e.reset(new b(0,.05,40),Math.PI),this.hud.show("objective",t==="training"),document.getElementById("style").style.visibility=t==="arena"?"visible":"hidden",document.getElementById("modeTxt").textContent=t==="arena"?"GET READY":t==="trial"?"TIME ATTACK":"TRAINING",document.getElementById("subTxt").textContent=t==="trial"?`T \uD0A4\uB85C \uC7AC\uC2DC\uC791 \xB7 \uCD5C\uACE0 ${this.records&&this.records.trial?dn(this.records.trial):"-"}`:t==="training"?"\uAE30\uC220\uC744 \uD558\uB098\uC529 \uD574\uBCF4\uC138\uC694 \xB7 \uD53C\uD574 \uC5C6\uC74C":"",t==="arena"?(this.hud.banner("REDSHIFT","\uBA48\uCD94\uC9C0 \uB9C8\uB77C. \uBCA0\uC5B4\uB77C."),setTimeout(()=>this.state==="play"&&this.hud.hint("Shift \uB300\uC2DC \xB7 C \uC2AC\uB77C\uC774\uB4DC \xB7 E \uADF8\uB798\uD50C \xB7 F \uD328\uB9C1 \xB7 \uC88C\uD074\uB9AD \uAFB9 = \uBC1C\uB3C4\uC220",5500),2600)):t==="trial"?this.hud.banner("TIME ATTACK","\uCCB4\uD06C\uD3EC\uC778\uD2B8\uB97C \uC21C\uC11C\uB300\uB85C \uD1B5\uACFC"):this.hud.banner("TRAINING","\uC67C\uCABD \uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uB97C \uCC44\uC6CC\uBCF4\uC138\uC694"),this.state="play",this.acc=0}clearWorld(){this.enemies.forEach(t=>t.dispose()),this.enemies=[],this.projectiles.forEach(t=>{this.scene.remove(t.mesh)}),this.projectiles=[],this.debris.forEach(t=>this.scene.remove(t.m)),this.debris=[],this.trialRings.forEach(t=>this.scene.remove(t)),this.trialRings=[],this.laser&&(this.scene.remove(this.laser),this.laser=null)}setupTrial(){this.cpIndex=0,this.trialTime=0,this.trialRunning=!1,this.splits=[];let t=new qe(3.2,.16,10,64),e=this.map.checkpoints;e.forEach((i,n)=>{let r=new ct(t,new Dt({color:new et(.4,2.6,3.2),transparent:!0,opacity:.9,depthWrite:!1,blending:ge})),a=new ct(new gs(3.1,48),new Dt({color:new et(.1,.6,.8),transparent:!0,opacity:.18,side:Pe,depthWrite:!1,blending:ge}));r.add(a),r.position.copy(i);let o=e[n+1]||e[n-1];r.lookAt(n+1<e.length?o:i.clone().add(i.clone().sub(o))),this.scene.add(r),this.trialRings.push(r)}),this.updateTrialRings()}updateTrialRings(){this.trialRings.forEach((t,e)=>{t.visible=e>=this.cpIndex&&e<=this.cpIndex+1;let i=e===this.cpIndex;t.material.color.setRGB(i?.4:.15,i?2.8:.8,i?3.4:1),t.children[0].material.opacity=i?.2:.05,e===this.map.checkpoints.length-1&&t.material.color.setRGB(i?3.2:1.2,i?2.4:.9,.4)}),this.cpTarget=this.map.checkpoints[this.cpIndex]||null}setupTraining(){let t=[[-8,0,20],[8,0,20],[0,0,8]];for(let[e,i,n]of t){let r=new As(this,"blade",new b(e,i,n));r.dummy=!0,r.spawnT=.2,this.enemies.push(r)}this.renderObjectives()}renderObjectives(){let t=this.training.done,e=Fn.TRAINING.map(([i,n])=>`<div class="it${t.has(i)?" done":""}"><i></i>${n}</div>`).join("");document.getElementById("objective").innerHTML=`<h4>TECHNIQUES ${t.size}/${Fn.TRAINING.length}</h4>${e}`}train(t){if(this.mode!=="training"||this.training.done.has(t))return;this.training.done.add(t),this.renderObjectives(),this.audio.checkpoint(this.training.done.size===Fn.TRAINING.length);let e=Fn.TRAINING.find(i=>i[0]===t)[1];this.hud.popup("\u2713 "+e.split(" (")[0],"#7dfcff")}playerEvents(){let t=this,e=0,i=0;return{jump(n){t.audio.jump();let r=t.player;n==="air"&&(t.fx.sparks.emit(Rt.copy(r.pos).setY(r.pos.y+.1),14,{color:[.3,.9,1],speed:5,life:.35,gravity:2}),t.fx.bursts.ring(Rt.copy(r.pos).setY(r.pos.y+.05),null,3203327,2,.3)),n==="wall"&&(t.addStyle(2),t.shake(.05),t.train("walljump")),n==="slide"&&t.train("slidejump"),(n==="ground"||n==="slide")&&(t.gameTime-i<.08&&r.hSpeed>11?(e++,e>=3&&r.hSpeed*3.6>40&&t.train("bhop")):e=0)},land(n){i=t.gameTime,t.audio.land(n>14),n>6&&(t.camState.dipV-=Math.min(5,n*.18)),n>14&&(t.shake(Math.min(.35,n*.012)),t.fx.sparks.emit(Rt.copy(t.player.pos).setY(t.player.pos.y+.1),18,{color:[1,.55,.45],speed:7,life:.4}),t.fx.bursts.ring(Rt.copy(t.player.pos).setY(t.player.pos.y+.05),null,16736336,Math.min(5,n*.18),.35))},slide(n,r){t.audio.slideStart(),t.train("slide"),n==="land"&&r>3&&(t.train("slideland"),t.addStyle(3),t.camState.kick=Math.max(t.camState.kick,.4)),r>0&&t.addStyle(1)},dash(n){t.audio.dash(),t.camState.kick=1,t.shake(.08),t.addStyle(1.5),t.train("dash"),t.fx.sparks.emit(Rt.copy(t.player.pos).setY(t.player.pos.y+1),16,{color:[.3,.9,1],speed:6,dir:n.clone().negate(),spread:.6,life:.3,gravity:0})},wallStart(n){t.audio.wallStart(),t.addStyle(2),t.train("wall")},climb(){t.audio.climb(),t.train("climb")},mantle(){t.audio.mantle(),t.train("mantle"),t.camState.dipV-=1.5},hookFire(){t.audio.hookFire(),t.vm.hookFire()},hookMiss(){t.audio.empty()},hookAttach(n,r){t.audio.hookAttach(r),t.addStyle(2),t.train("hook"),t.fx.sparks.emit(n,12,{color:[.4,.95,1],speed:5,life:.3}),t.fx.bursts.ring(n,null,3203327,1.2,.3)},hookRelease(n,r){r&&n&&(t.hookSlashT=.7,t.lastHookEnemy=r,t.hud.hint("\uC9C0\uAE08 \uBCA0\uAE30! \u2014 \uADF8\uB798\uD50C \uC5F0\uACC4 \uBCF4\uB108\uC2A4",900))},pad(){t.audio.dash(),t.camState.kick=.8,t.shake(.06)},boost(){t.audio.boost(),t.camState.kick=.7},fell(){t.player.reset(new b(0,1,40),Math.PI)}}}frame(t){let e=Math.max(0,Math.min(.1,(t-this.last)/1e3));this.last=Math.max(this.last,t),this.fpsAcc+=e,this.fpsN++,this.fpsAcc>.5&&(document.getElementById("fps").textContent=Math.round(this.fpsN/this.fpsAcc)+" FPS",this.fpsAcc=0,this.fpsN=0),this.update(Math.min(.05,e)),this.render(Math.min(.05,e))}update(t){this.clockT+=t;let e=1;this.slowmoT>0&&(this.slowmoT-=t,e=.3),this.hitstop>0&&(this.hitstop-=t,e=.05),this.timeScale+=(e-this.timeScale)*Math.min(1,t*(e<this.timeScale?40:7));let i=this.state==="play",[n,r]=this.input.takeMouse();if(this.mouseDX=n,this.mouseDY=r,i){let a=this.S.sens*.0012;this.player.yaw-=n*a,this.player.pitch-=r*a,this.player.pitch=Te.clamp(this.player.pitch,-1.56,1.56),this.acc+=t*this.timeScale;let o=0;for(;this.acc>=lo&&o<12;)this.tick(lo),this.acc-=lo,o++;o===12&&(this.acc=0)}else this.state==="dead"&&this.tickWorldOnly(t*.3);i||this.input.consumeEdges()}readInput(){let t=this.input,e={fwd:(t.is("forward")?1:0)-(t.is("back")?1:0),right:(t.is("right")?1:0)-(t.is("left")?1:0),jumpPressed:t.pressed("jump"),jumpHeld:t.is("jump"),crouch:t.is("crouch"),crouchPressed:t.pressed("crouch"),dashPressed:t.pressed("dash"),grapplePressed:t.pressed("grapple"),grappleHeld:t.is("grapple"),autoHop:!!this.S.autoHop,slashPressed:t.pressed("slash"),slashHeld:t.is("slash"),slashReleased:t.released("slash"),shootPressed:t.pressed("shoot"),shootHeld:t.is("shoot"),parryPressed:t.pressed("parry"),reloadPressed:t.pressed("reload"),inspectPressed:t.pressed("inspect"),restartPressed:t.pressed("restart")};return t.consumeEdges(),e}tick(t){this.gameTime+=t;let e=this.player,i=this.readInput(),n=e.stagger>0;if(i.restartPressed&&this.mode==="trial"){this.restartTrial();return}this.S.crouchToggle&&(i.crouchPressed&&(this.crouchLatched=!this.crouchLatched),i.jumpPressed&&this.crouchLatched&&e.sliding&&(this.crouchLatched=!1),i.crouch=this.crouchLatched),e.tick(t,i,this.playerCtx||(this.playerCtx={hookEnemy:(l,h,c)=>this.hookEnemy(l,h,c)}));let r=this.map.half+11;if(Math.abs(e.pos.x)>r&&(e.pos.x=Math.sign(e.pos.x)*r,e.vel.x*Math.sign(e.pos.x)>0&&(e.vel.x=0)),Math.abs(e.pos.z)>r&&(e.pos.z=Math.sign(e.pos.z)*r,e.vel.z*Math.sign(e.pos.z)>0&&(e.vel.z=0)),this.maxSpeed=Math.max(this.maxSpeed,e.hSpeed),e.sliding&&e.groundN.y<.985&&e.hSpeed*3.6>60&&this.train("ramp"),e.hSpeed*3.6>90&&this.train("speed"),this.slashCd-=t,this.shootCd-=t,this.parryCd-=t,this.comboT-=t,this.iaidoCd-=t,this.hookSlashT-=t,this.parryT>=0&&(this.parryT+=t,this.parryT>Jc&&(this.parryT=-1)),n?(this.charge=0,this.chargeHold=0):(i.slashPressed&&this.slashCd<=0&&!this.iaidoActive&&this.doSlash(),i.slashHeld&&this.slashCd<=.05&&this.iaidoCd<=0&&!this.iaidoActive&&(this.chargeHold+=t,this.chargeHold>.22&&(this.charge===0&&this.audio.chargeStart(),this.charge=Math.min(1,this.charge+t*2.4))),i.slashHeld||(this.charge>=.5&&this.iaido(),this.charge=0,this.chargeHold=0),i.shootPressed&&this.shootCd<=0&&this.shoot(),i.parryPressed&&this.tryParry(),i.reloadPressed&&this.startReload(),i.inspectPressed&&this.vm.inspect()),this.vm.chargePose(this.charge),this.pendingSlash){let l=this.pendingSlash;l.t-=t,l.t<=0&&(this.resolveSlash(l),l.checks--,l.t=.05,l.checks<=0&&(this.pendingSlash=null))}this.iaidoActive&&this.tickIaido(t),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0&&(this.ammo=this.weapon.mag,this.weapon.id==="shotgun"&&this.audio.pump())),this.recoilUI=Math.max(0,this.recoilUI-t*4),this.regenT-=t,this.regenT<=0&&this.hp<100&&(this.hp=Math.min(100,this.hp+16*t)),(this.pInstHold-=t)<=0&&(this.pInst=Math.max(0,this.pInst-22*t)),this.mode==="training"&&(this.hp=100);let a=this.enemyCtx();for(let l of this.enemies)l.alive&&(l.dummy?this.tickDummy(l,t,a):l.update(t,a));for(let l of this.enemies)!l.alive&&!l.removed&&(l.removed=!0);this.enemies=this.enemies.filter(l=>l.alive),this.tickProjectiles(t),this.tickDebris(t),this.mode==="arena"&&this.tickWaves(t),this.mode==="trial"&&this.tickTrial(t),this.mode==="training"&&this.tickTraining(t),this.styleHold-=t;let o=e.hSpeed>18;e.hSpeed>25&&(this.style=Math.min(150,this.style+t*2.5)),this.styleHold<=0&&(this.style=Math.max(0,this.style-t*(o?2:7))),this.bestRank=Math.max(this.bestRank,this.rankIdx())}tickWorldOnly(t){this.tickDebris(t)}doSlash(){let t=this.momentum();this.comboT<=0&&(this.combo=0);let i=[0,1,2][this.combo%3],n=this.findBrokenTarget(4.5+t*2);n&&(i=3),this.vm.slash(i),this.audio.slash(1+t*.5),this.slashCd=i===2?.32:.27,this.combo++,this.comboT=.7;let r=this.lookDir(new b),a=n,o=.93;if(!a)for(let d of this.enemies){if(!d.alive)continue;Rt.subVectors(d.chest,this.player.eye);let u=Rt.length();if(u>8.5||u<1.8)continue;let f=Rt.normalize().dot(r);f>o&&(o=f,a=d)}a&&(Rt.subVectors(a.chest,this.player.eye).normalize(),this.player.vel.addScaledVector(Rt,10),this.player.vel.y>7&&(this.player.vel.y=7));let l=this.camera.quaternion.clone(),h=this.player.eye.clone().addScaledVector(r,.9).add(Cs.set(0,-.2,0)),c=[.2,-.2,.9,Math.PI/2,0][i];this.fx.arcs.add(h,l,i===3?16764992:16722504,(i===3?3.2:2.7)+t*.8,.2,i===0||i===2,c),this.pendingSlash={t:.045,checks:3,m:t,kind:i,hit:new Set,dmg:i===2?56:42}}findBrokenTarget(t){let e=this.lookDir(vy),i=null,n=t;for(let r of this.enemies){if(!r.alive||r.broken<=0)continue;Rt.subVectors(r.chest,this.player.eye);let a=Rt.length();a<n&&Rt.normalize().dot(e)>.5&&(n=a,i=r)}return i}resolveSlash(t){let e=this.player,i=this.lookDir(new b),n=e.eye.clone(),r=3.4+t.m*1.8,a=!1,o=!1;for(let l of this.enemies){if(!l.alive||t.hit.has(l))continue;let h=1e9,c=null;for(let g of[l.chest,l.head,Cs.set(l.pos.x,l.pos.y+.6,l.pos.z)]){let x=g.distanceTo(n);x<h&&(h=x,c=g.clone())}if(h>r+(l.type==="brute"?.6:0)||(Rt.subVectors(c,n).normalize(),Rt.dot(i)<(h<1.7?-.25:.42)))continue;if(t.hit.add(l),l.broken>0){this.execute(l,i),a=!0;continue}if(l.state==="windup"&&l.windup<.16&&l.parryable&&(l.type==="blade"||l.type==="brute")){this.clash(l,c,t.m),a=!0;continue}if(l.state==="guard"&&l.facingDot(e.pos)>.3){if(t.m<.5){this.blocked(l,c,t.m),o=!0;continue}l.guardT=0,l.state="idle",l.stagger=.6,l.addInst(45),this.hud.feed("GUARD BREAK"),this.addStyle(6)}let d=t.dmg*(1+t.m*1.5),u=[];this.hookSlashT>0&&this.lastHookEnemy===l&&(d*=1.5,u.push("HOOK SLASH"),this.hookSlashT=0),l.stagger>0&&(d*=1.3);let f=l.damage(d,{from:e.pos,inst:16*(1+t.m)});a=!0,this.hud.damageNumber(l.chest,d,t.m>.6?"big":""),this.fx.sparks.emit(c,24,{color:[1,.12,.2],speed:10,dir:i,spread:1,life:.5,size:.14}),this.fx.sparks.emit(c,8,{color:[1,.85,.6],speed:15,dir:i,spread:.6,life:.2,size:.07}),this.fx.bursts.flash(c,16719936,.25,.08),u.length&&this.hud.feed(u.join(" \xB7 ")),f?this.onKill(l,"slash",i):(this.addStyle(3),this.addScore(10))}for(let l of this.projectiles)l.owner!=="enemy"||l.dead||l.pos.distanceTo(n)<3.8&&Rt.subVectors(l.pos,n).normalize().dot(i)>.25&&this.reflect(l,!1);a&&(this.audio.slashHit(),this.hud.hitmarker(!1),this.hitstop=Math.max(this.hitstop,.045+t.m*.03),this.shake(.16)),o&&!a&&this.vm.blocked()}execute(t,e){this.execs++,this.audio.execute(),this.slowmo(.45),this.hitstop=.09,this.flashFx=1,this.shake(.4),this.fx.sparks.emit(t.chest,70,{color:[1,.8,.3],speed:16,life:.7,size:.16}),this.fx.bursts.ring(t.chest,e.clone().negate(),16761402,4,.45),this.hud.popup("EXECUTE","#ffc23a"),this.hud.damageNumber(t.chest,"EXECUTE","big"),t.hp=0,t.alive=!1,this.hp=Math.min(100,this.hp+25),this.player.dashCharges=it.dashCharges,this.train("execute"),this.onKill(t,"execute",e)}clash(t,e,i){t.cancelAttack(),t.addInst(34*(1+i*1.5)),this.addPInst(16*(1-i*.6)),this.audio.clash(),this.vm.clash(),this.slowmo(.18),this.shake(.3),this.flashFx=.5,this.fx.sparks.emit(e,50,{color:[1,.85,.25],speed:14,life:.5,size:.12}),this.fx.bursts.flash(e,16764992,.4,.1),this.fx.bursts.ring(e,this.lookDir(Rt).negate(),16764992,1.6,.3),this.hud.popup("CLASH","#ffc23a"),this.addStyle(10),this.addScore(60),Rt.subVectors(t.pos,this.player.pos).setY(0).normalize(),t.vel.addScaledVector(Rt,7+i*8),this.player.vel.addScaledVector(Rt,-4*(1-i))}blocked(t,e,i){t.addInst(26*(1+i)),this.addPInst(8),this.audio.block(),this.fx.sparks.emit(e,26,{color:[1,.85,.3],speed:10,life:.35,size:.1}),this.hud.hint("\uB9C9\uD614\uB2E4! \uBE60\uB974\uAC8C \uB4E4\uC5B4\uAC00\uAC70\uB098 \uC606/\uB4A4\uC5D0\uC11C, \uD639\uC740 \uBC1C\uB3C4\uC220\uB85C \uAC00\uB4DC\uB97C \uAE68\uB77C",1600),this.shake(.1)}iaido(){let t=this.player,e=this.lookDir(new b);e.y=Te.clamp(e.y,-.45,.45),e.normalize();let i=t.pos.clone(),n=Math.max(t.speed,14)+4;t.burst(e,58,.16,n),this.iaidoActive={t:.16,from:i,hit:new Set,dir:e.clone(),m:this.momentum()},this.iaidoCd=2.6,this.vm.slash(4),this.audio.iaido(),this.camState.kick=1.6,this.shake(.2),this.flashFx=.4;let r=this.camera.quaternion.clone();this.fx.arcs.add(t.eye.clone().addScaledVector(e,2.5),r,16777215,4.2,.25,!1,0,1.4),this.train("iaido")}tickIaido(t){let e=this.iaidoActive;e.t-=t;let i=this.player;for(let n of this.enemies){if(!n.alive||e.hit.has(n))continue;if(ho(e.from,i.pos,n.pos.clone().setY(n.pos.y+1))<2.4+(n.type==="brute"?.5:0)){if(e.hit.add(n),n.broken>0){this.execute(n,e.dir);continue}n.state==="guard"&&(n.guardT=0,n.state="idle",this.hud.feed("GUARD BREAK"));let a=120*(1+e.m*1.2),o=n.damage(a,{from:i.pos,inst:70,stagger:.6});this.hud.damageNumber(n.chest,a,"big"),this.fx.sparks.emit(n.chest,40,{color:[1,1,1],speed:14,dir:e.dir,spread:1.2,life:.5,size:.12}),this.fx.sparks.emit(n.chest,30,{color:[1,.1,.2],speed:10,life:.6,size:.14}),this.hitstop=.06,this.shake(.25),o?this.onKill(n,"iaido",e.dir):this.addStyle(6)}}for(let n of this.projectiles)n.owner==="enemy"&&!n.dead&&ho(e.from,i.pos,n.pos)<2.2&&this.destroyProjectile(n,!0);e.from.copy(i.pos),e.t<=0&&(this.iaidoActive=null)}tryParry(){this.parryCd>0||(this.parryT=0,this.parryCd=.45,this.vm.parry(),this.audio._noise(.1,{type:"highpass",freq:3e3,gain:.15,rev:0}))}parrySuccess(t,e){this.vm.parryHit(),this.audio.parry(!0),this.slowmo(.42),this.flashFx=1,this.shake(.22),this.parryCd=0,this.parries++,this.player.dashCharges=Math.min(it.dashCharges,this.player.dashCharges+1),this.fx.sparks.emit(e,34,{color:[1,.85,.5],speed:14,life:.45,size:.1}),this.fx.sparks.emit(e,20,{color:[.2,.8,1],speed:9,life:.55,size:.12}),this.fx.bursts.ring(e,this.lookDir(Rt).negate(),4245759,1.2,.3),this.fx.bursts.flash(e,11197951,.25,.08),this.hud.parryRing(),this.hud.popup(t==="melee"?"PARRY":"REFLECT","#7dfcff"),this.addStyle(14),this.addScore(120,t==="melee"?"PERFECT PARRY":"REFLECT"),this.train("parry")}addPInst(t){this.pInst=Math.min(100,this.pInst+t),this.pInstHold=1.4,this.pInst>=100&&(this.pInst=0,this.player.stagger=.75,this.hud.stagger(!0),setTimeout(()=>this.hud.stagger(!1),750),this.audio.broken(),this.shake(.3))}shoot(){let t=this.weapon;if(this.reloadT>0)return;if(this.ammo<=0){this.audio.empty(),this.startReload();return}this.ammo--,this.shootCd=t.rate,this.vm.shoot(t.id==="shotgun"?1.6:1),t.id==="shotgun"?this.audio.shotgun():this.audio.gunshot(),this.shake(t.id==="shotgun"?.22:.09),this.recoilUI=1;let e=this.player,i=this.camera.position.clone(),n=this.lookDir(new b),r=this.vm.toWorld(this.vm.muzzle,this.camera,new b),a=e.grounded?t.kickGround:t.kickAir;a>0&&(e.vel.addScaledVector(n,-a),!e.grounded&&n.y<-.5&&(e.vel.y=Math.max(e.vel.y,0)+a*.55*-n.y),e.grounded&&n.y<-.6&&(e.vel.y=a*1.2,e.grounded=!1));let o=e.grounded?t.spread:t.airSpread,l=new Map,h=!1;for(let c=0;c<t.pellets;c++){let d=n.clone();o>0&&(d.x+=(Math.random()-.5)*o*2,d.y+=(Math.random()-.5)*o*2,d.z+=(Math.random()-.5)*o*2,d.normalize());let u=300,f=null,g=!1,x=this.map.col.raycast(i.x,i.y,i.z,d.x,d.y,d.z,300,co),p=x?new b(x.nx,x.ny,x.nz):null;x&&(u=x.t);for(let v of this.enemies){if(!v.alive)continue;let y=v.rayHit(i.x,i.y,i.z,d.x,d.y,d.z,u);y&&(u=y.t,f=v,g=y.head)}for(let v of this.projectiles){if(v.owner!=="enemy"||v.dead)continue;Rt.subVectors(v.pos,i);let y=Rt.dot(d);if(y>0&&y<u&&Rt.addScaledVector(d,-y).length()<.55){u=y,f=null,this.destroyProjectile(v,!0),this.addStyle(5),this.hud.feed("BULLET CUT");break}}let m=i.clone().addScaledVector(d,u);if(c<4&&this.fx.tracers.add(r,m,16760960,t.id==="shotgun"?.07:.09,t.id==="shotgun"?.02:.035),f){let v=l.get(f)||{dmg:0,head:!1,pt:m},y=t.dmg*(g?t.head:1)*(f.broken>0?2:1);f.state==="guard"&&f.facingDot(e.pos)>.3&&(y*=.15,this.fx.sparks.emit(m,6,{color:[1,.85,.3],speed:6,life:.25})),v.dmg+=y,v.head=v.head||g,h=h||g,l.set(f,v),this.fx.sparks.emit(m,g?12:6,{color:g?[1,.9,.3]:[1,.2,.3],speed:8,dir:d.clone().negate(),spread:1,life:.35,size:.1})}else x&&(this.fx.sparks.emit(m,5,{color:[1,.7,.4],speed:6,dir:p,spread:.8,life:.3,size:.08}),c<3&&this.fx.bursts.scorch(m,p,16736304,.18,3))}for(let[c,d]of l){let u=c.damage(d.dmg,{from:e.pos,inst:t.inst*(t.pellets>1?Math.min(4,t.pellets*.5):1)});this.hud.damageNumber(d.pt,d.dmg,d.head?"head":""),u?this.onKill(c,d.head?"headshot":"gun",n):this.addStyle(d.head?5:2)}l.size&&(this.hud.hitmarker(h),this.audio.hitmarker(h)),this.ammo===0&&setTimeout(()=>{this.ammo===0&&this.reloadT<=0&&this.startReload()},250)}startReload(){this.reloadT>0||this.ammo===this.weapon.mag||(this.reloadT=this.weapon.reload,this.vm.reload(this.weapon.reload),this.weapon.id==="shotgun"?this.audio.pump():this.audio.reload())}spawnProjectile(t,e,i,n,r){let a=this._projGeo||(this._projGeo=(()=>{let h=new Sa(.08,1,4,8);return h.rotateX(Math.PI/2),h})()),o=this._projMats||(this._projMats={enemy:new Dt({color:new et(4,.4,.6)}),sniper:new Dt({color:new et(3,.8,5)}),small:new Dt({color:new et(4,.8,.4)}),player:new Dt({color:new et(.8,3.5,4)})}),l=new ct(a,o[r]||o.enemy);r==="sniper"&&l.scale.set(1.3,1.3,2.5),r==="small"&&l.scale.set(.8,.8,.5),l.position.copy(t),this.scene.add(l),this.projectiles.push({pos:t.clone(),vel:e,mesh:l,owner:"enemy",dmg:n,life:4,shooter:i,whizzed:!1,kind:r})}destroyProjectile(t,e){t.dead=!0,this.scene.remove(t.mesh),e&&this.fx.sparks.emit(t.pos,10,{color:t.owner==="enemy"?[1,.2,.3]:[.4,.9,1],speed:6,life:.3,size:.08})}reflect(t,e){t.owner="player";let i=null,n=-1e9,r=this.lookDir(Cs);for(let o of this.enemies){if(!o.alive)continue;Rt.subVectors(o.chest,t.pos);let l=Rt.length();Rt.normalize();let h=Rt.dot(r)*2-l*.01+(o===t.shooter?.8:0);h>n&&(n=h,i=o)}let a=80;i?t.vel.subVectors(i.chest,t.pos).normalize().multiplyScalar(a):t.vel.copy(r).multiplyScalar(a),t.target=i,t.dmg=e?150:70,t.life=3,t.mesh.material=this._projMats.player,e?this.parrySuccess("bullet",t.pos.clone()):(this.audio.parry(!1),this.fx.sparks.emit(t.pos,18,{color:[1,.9,.6],speed:9,life:.35,size:.08}),this.addStyle(6),this.hud.feed("DEFLECT"))}tickProjectiles(t){let e=this.player,i=e.eye.clone(),n=new b(e.pos.x,e.pos.y+e.h*.55,e.pos.z);for(let r of this.projectiles){if(r.dead)continue;if(r.life-=t,r.owner==="player"&&r.target&&r.target.alive){let d=Rt.subVectors(r.target.chest,r.pos).normalize().multiplyScalar(r.vel.length());r.vel.lerp(d,Math.min(1,t*10))}let a=r.pos.clone(),o=r.vel.length()*t,l=r.vel.clone().normalize(),h=this.map.col.raycast(a.x,a.y,a.z,l.x,l.y,l.z,o,co),c=h?new b(h.x,h.y,h.z):a.clone().addScaledVector(l,o);if(r.owner==="enemy"){if(this.parryT>=0&&this.parryT<Jc&&a.distanceTo(i)<5&&Rt.subVectors(a,i).normalize().dot(this.lookDir(Cs))>-.2){this.reflect(r,this.parryT<vd);continue}if(ho(a,c,n)<.42+e.h*.12&&!e.invuln){this.hurt(r.dmg,r.shooter?r.shooter.pos:a,6),this.destroyProjectile(r,!0);continue}!r.whizzed&&ho(a,c,i)<2.2&&(r.whizzed=!0,this.audio.bulletWhiz())}else{let d=null,u=o;for(let f of this.enemies){if(!f.alive)continue;let g=f.rayHit(a.x,a.y,a.z,l.x,l.y,l.z,u);g&&(u=g.t,d=f)}if(d){let f=d.damage(r.dmg,{from:a,inst:60,stagger:.8});this.hud.damageNumber(d.chest,r.dmg,"big"),this.hud.hitmarker(!0),this.fx.sparks.emit(d.chest,30,{color:[.4,.9,1],speed:10,life:.5,size:.12}),f&&this.onKill(d,"reflect",l),this.destroyProjectile(r,!0);continue}}if(h||r.life<=0){h&&this.fx.bursts.scorch(c,new b(h.nx,h.ny,h.nz),r.kind==="sniper"?11555071:16724032,.25,2.5),this.destroyProjectile(r,!!h);continue}r.pos.copy(c),r.mesh.position.copy(c),r.mesh.lookAt(Rt.copy(c).add(r.vel))}this.projectiles=this.projectiles.filter(r=>!r.dead)}hurt(t,e,i=0){if(this.state!=="play"||this.mode==="training"){this.mode==="training"&&(this.damageFx=Math.min(1,this.damageFx+.3),this.hud.damageDir(this.dirAngle(e)));return}this.hp-=t,this.regenT=4.5,this.damageFx=Math.min(1,this.damageFx+.55),this.shake(.22),this.audio.hurt(),this.style=Math.max(0,this.style-12),i&&this.addPInst(i),this.hud.damageDir(this.dirAngle(e)),this.hp<=0&&(this.hp=0,this.die())}dirAngle(t){let e=this.player;return Rt.subVectors(t,e.pos),Math.atan2(Rt.x,Rt.z)-Math.atan2(-Math.sin(e.yaw),-Math.cos(e.yaw))}onKill(t,e,i){this.kills++;let n=this.player,r=[],a=t.cfg.score;e==="headshot"&&(r.push("HEADSHOT"),a+=80),e==="reflect"&&(r.push("RETURN TO SENDER"),a+=150),e==="execute"&&(r.push("EXECUTION"),a+=200),e==="iaido"&&(r.push("IAIDO"),a+=120),e==="slash"&&this.momentum()>.5&&(r.push("VELOCITY KILL"),a+=120),n.wall?(r.push("WALLRUN"),a+=100):n.grounded||(r.push("AIRBORNE"),a+=60),n.sliding&&(r.push("SLIDE"),a+=60),n.grapple&&(r.push("HOOKED"),a+=80),this.mode==="arena"&&this.addScore(a,`${t.cfg.name} KILL`+(r.length?" \xB7 "+r.join(" \xB7 "):"")),this.addStyle(16+r.length*6),this.audio.kill(this.rankIdx()+1),this.shake(.18);let o=t.shatter(i?i.clone().setY(0).normalize():null,e==="slash"||e==="execute"||e==="iaido");this.debris.push(...o);let l=t.chest.clone();this.fx.sparks.emit(l,55,{color:[1,.08,.16],speed:12,life:.8,size:.16}),this.fx.sparks.emit(l,18,{color:[1,.7,.4],speed:18,life:.35,size:.08}),this.fx.bursts.ring(l,null,t.cfg.accent,3,.4),this.fx.bursts.flash(l,16719936,.45,.1),t.type==="drone"&&this.droneExplode(t),this.hp=Math.min(100,this.hp+(e==="slash"||e==="iaido"?10:5)),this.mode==="arena"&&this.enemies.filter(h=>h.alive).length===0&&this.toSpawn.length===0&&(this.slowmo(1),this.hud.popup("WAVE CLEAR","#ffc23a"))}droneExplode(t){this.audio.droneExplode(),this.fx.sparks.emit(t.pos,50,{color:[1,.5,.2],speed:14,life:.6,size:.18}),this.fx.bursts.flash(t.pos,16736288,1.6,.18);for(let e of this.enemies)e!==t&&e.alive&&e.pos.distanceTo(t.pos)<5&&e.damage(60,{from:t.pos,inst:40})&&this.onKill(e,"gun",null)}onEnemyBroken(t){this.audio.broken(),this.fx.sparks.emit(t.chest,30,{color:[1,.8,.2],speed:8,life:.6,size:.12}),this.hud.popup("POSTURE BROKEN","#ffc23a"),this.hud.hint("\uC9C0\uAE08 \uBCA0\uBA74 \uCC98\uD615!",1500),this.addStyle(8)}enemyCtx(){if(this._ectx)return this._ectx.player=this.player,this._ectx.enemies=this.enemies,this._ectx;let t=this;return this._ectx={player:this.player,enemies:this.enemies,camera:this.camera,los(i,n){Rt.subVectors(n,i);let r=Rt.length();return Rt.divideScalar(r),!t.map.col.raycast(i.x,i.y,i.z,Rt.x,Rt.y,Rt.z,r-.3,co)},telegraph(i,n){t.audio.telegraph(n),t.once(n?"yellow":"red",n?"\uB178\uB780 \uAE5C\uBE61\uC784 = \uD328\uB9C1 \uD0C0\uC774\uBC0D (F)":"\uBE68\uAC04 \uACF5\uACA9\uC740 \uD328\uB9C1 \uBD88\uAC00 \u2014 \uB300\uC2DC(Shift)\uB85C \uD53C\uD558\uAE30")},enemyDash(i){t.fx.sparks.emit(i.chest,12,{color:[.3,.9,1],speed:5,life:.3,gravity:0,size:.1}),t.audio._noise(.2,{type:"bandpass",freq:600,sweepTo:1800,gain:.12})},relocate(i){let n=t.map.spawnHigh.filter(r=>r.distanceTo(t.player.pos)>40);n.length&&(t.fx.sparks.emit(i.chest,30,{color:[.7,.3,1],speed:6,life:.5,gravity:-4}),i.pos.copy(n[Math.random()*n.length|0]),i.vel.set(0,0,0),t.fx.sparks.emit(Rt.copy(i.pos).setY(i.pos.y+1),30,{color:[.7,.3,1],speed:6,life:.5,gravity:-4}))},enemyShoot(i,n){let r=new b;i.gunTip?i.gunTip.getWorldPosition(r):r.copy(i.chest);let a=t.player,o=n.at?n.at.clone():a.eye.clone().setY(a.eye.y-.35),l=r.distanceTo(o);n.at||o.addScaledVector(a.vel,l/n.speed*.5);let h=o.sub(r).normalize(),c=(n.spread||0)+Math.min(.03,a.speed*.001);c>0&&(h.x+=(Math.random()-.5)*c,h.y+=(Math.random()-.5)*c,h.z+=(Math.random()-.5)*c,h.normalize()),t.spawnProjectile(r,h.multiplyScalar(n.speed),i,n.dmg*t.waveDmg(),n.sniper?"sniper":n.small?"small":"enemy"),n.sniper?t.audio.sniperShot(l):t.audio.enemyShot(l),t.fx.bursts.flash(r,n.sniper?11555071:16724048,n.sniper?.6:.3,.06)},enemyStrike(i,n){let r=t.player,a=Rt.subVectors(r.pos,i.pos),o=Math.abs(a.y);a.y=0;let l=a.length(),h=new Ie().setFromEuler(new We(0,i.yaw+Math.PI,0,"YXZ"));if(t.fx.arcs.add(i.chest.clone().addScaledVector(a.clone().normalize(),.7),h,n.unblockable?16719904:i.cfg.accent,n.reach*.75,.2,Math.random()<.5,.15),t.audio.slash(n.unblockable?1.2:.7),l>n.reach+.4||o>2.4||i.facingDot(r.pos)<.15)return;if(r.invuln){t.hud.popup("DODGE","#7dfcff"),t.addStyle(6);return}let c=n.dmg*t.waveDmg(),d=i.chest.clone().lerp(r.eye,.5);!n.unblockable&&t.parryT>=0&&t.parryT<vd?(i.stagger=.9,i.addInst(n.inst*2.5+20),i.cancelAttack(),t.audio.clash(),t.parrySuccess("melee",d)):!n.unblockable&&t.parryT>=0&&t.parryT<Jc?(t.audio.block(),t.hud.popup("BLOCK","#ffffff"),t.hurt(c*.25,i.pos,n.inst*.6),i.addInst(n.inst*.6),t.fx.sparks.emit(d,20,{color:[1,.9,.6],speed:8,life:.3,size:.1})):(n.unblockable&&t.parryT>=0&&t.hud.popup("UNBLOCKABLE","#ff3048"),t.hurt(c,i.pos,n.inst*.4),r.vel.addScaledVector(a.normalize(),n.unblockable?14:7),r.vel.y+=3)}}}once(t,e){this._seen=this._seen||new Set,!this._seen.has(t)&&(this._seen.add(t),this.hud.hint(e,3200))}waveDmg(){return this.mode==="arena"?Math.min(1.35,.8+this.wave*.05):1}tickDummy(t,e,i){t.anim+=e,t.flashT-=e,t.stagger=Math.max(0,t.stagger-e),t.atkCd-=e,t.broken>0?(t.broken-=e,t.broken<=0&&(t.inst=0,t.state="idle")):(t.instDecayHold-=e)<=0&&(t.inst=Math.max(0,t.inst-t.instMax*.1*e)),t.hp=Math.min(t.maxHp,t.hp+e*20);let n=this.player,r=Rt.subVectors(n.pos,t.pos),a=Math.hypot(r.x,r.z),l=Math.atan2(r.x,r.z)-t.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;t.broken<=0&&(t.yaw+=l*Math.min(1,e*5)),t.state==="windup"?(t.windup-=e,t.windup<=0&&(i.enemyStrike(t,{dmg:0,reach:3.1,inst:0}),t.state="recover",t.stateT=.4)):t.state==="recover"?(t.stateT-=e,t.stateT<=0&&(t.state="idle",t.atkCd=1.6)):t.broken<=0&&a<3.2&&t.atkCd<=0&&(t.state="windup",t.windup=.7,t.parryable=!0,this.audio.telegraph(!0)),t.vel.set(0,0,0),t.updateAnchors(),t.animate(e,i)}hookEnemy(t,e,i){let n=null;for(let r of this.enemies){if(!r.alive)continue;let a=r.rayHit(t.x,t.y,t.z,e.x,e.y,e.z,i);if(a&&(!n||a.t<n.t)&&(n={t:a.t,point:r.chest.clone(),enemy:r}),!n){Rt.subVectors(r.chest,t);let o=Rt.dot(e);o>0&&o<i&&Rt.addScaledVector(e,-o).length()<1.4&&(n={t:o,point:r.chest.clone(),enemy:r})}}return n}buildWave(t){let e={1:["blade","blade","gunner"],2:["blade","gunner","blade","gunner"],3:["blade","blade","gunner","drone","drone"],4:["blade","gunner","gunner","sniper","drone","blade"],5:["brute","blade","blade","gunner","drone","sniper"]};if(e[t])return e[t];let i=Math.round(5+t*1.5),n=[];for(let r=0;r<i;r++){let a=Math.random();n.push(a<.34?"blade":a<.58?"gunner":a<.74?"drone":a<.86?"sniper":"brute")}return t%5===0&&n.push("brute","brute"),n}spawnEnemy(t){let e=this.player,i=t==="sniper"?this.map.spawnHigh:this.map.spawnGround;i=i.filter(a=>a.distanceTo(e.pos)>(t==="sniper"?35:26)&&a.distanceTo(e.pos)<110),i.length||(i=this.map.spawnGround);let n=i[Math.random()*i.length|0].clone();t!=="sniper"&&(n.x+=(Math.random()-.5)*4,n.z+=(Math.random()-.5)*4),t==="drone"&&(n.y=12+Math.random()*6);let r=new As(this,t,n);this.enemies.push(r),this.fx.sparks.emit(Rt.copy(n).setY(n.y+1),40,{color:[1,.15,.3],speed:6,life:.7,gravity:-6,size:.12}),this.fx.bursts.ring(Rt.copy(n).setY(n.y+.05),null,r.cfg.accent,3,.6)}tickWaves(t){if(this.waveState==="break"){if(this.waveT-=t,document.getElementById("subTxt").textContent=this.wave===0?"":`\uB2E4\uC74C \uC6E8\uC774\uBE0C\uAE4C\uC9C0 ${Math.ceil(this.waveT)}`,this.waveT<=0){this.wave++,this.toSpawn=this.buildWave(this.wave),this.waveState="fight",this.spawnT=0;let e=this.wave===3?"\uB4DC\uB860 \uC811\uADFC":this.wave===4?"\uC800\uACA9\uC218 \uC8FC\uC758 \u2014 \uBCF4\uB77C\uC0C9 \uB808\uC774\uC800":this.wave%5===0?"\uBE0C\uB8E8\uD2B8 \u2014 \uBE68\uAC04 \uACF5\uACA9\uC740 \uB300\uC2DC\uB85C \uD68C\uD53C":`${this.toSpawn.length}\uBA85 \uC811\uADFC \uC911`;this.hud.banner("WAVE "+this.wave,e),this.audio.wave(),document.getElementById("modeTxt").textContent="WAVE "+this.wave}}else{this.spawnT-=t;let e=this.enemies.length;this.toSpawn.length&&this.spawnT<=0&&e<6+Math.min(5,this.wave)&&(this.spawnEnemy(this.toSpawn.shift()),this.spawnT=.6),!this.toSpawn.length&&e===0&&(this.waveState="break",this.waveT=5,this.hp=Math.min(100,this.hp+40),this.addScore(300+this.wave*120,`WAVE ${this.wave} CLEAR`)),document.getElementById("subTxt").textContent=`\uB0A8\uC740 \uC801 ${e+this.toSpawn.length}`}}tickTrial(t){let e=this.player;!this.trialRunning&&(e.hSpeed>1||!e.grounded)&&(this.trialRunning=!0),this.trialRunning&&this.cpIndex<this.map.checkpoints.length&&(this.trialTime+=t);let i=this.map.checkpoints[this.cpIndex];if(!i)return;if(Rt.set(e.pos.x,e.pos.y+1,e.pos.z).distanceTo(i)<3.8){this.splits.push(this.trialTime);let r=this.trialRings[this.cpIndex];this.fx.bursts.ring(i.clone(),r?new b(0,0,1).applyQuaternion(r.quaternion):null,3203327,4,.5),this.fx.sparks.emit(i,30,{color:[.3,.9,1],speed:8,life:.5,size:.12}),this.cpIndex++;let a=this.cpIndex>=this.map.checkpoints.length;this.audio.checkpoint(a),a?this.finishTrial():this.hud.popup(`${this.cpIndex} / ${this.map.checkpoints.length}   ${dn(this.trialTime)}`,"#7dfcff"),this.updateTrialRings()}}restartTrial(){this.player.reset(this.map.trialStart.pos,this.map.trialStart.yaw),this.cpIndex=0,this.trialTime=0,this.trialRunning=!1,this.splits=[],this.updateTrialRings(),this.hud.popup("RESTART","#7dfcff")}finishTrial(){let t=this.trialTime,e=this.records,i=!e.trial||t<e.trial;i&&(e.trial=t,this.saveRecords&&this.saveRecords()),this.hud.banner(dn(t),i?"\uC2E0\uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${dn(e.trial)}`),this.trialRunning=!1,setTimeout(()=>{this.mode==="trial"&&this.state==="play"&&this.showEnd("FINISH",[["\uAE30\uB85D",dn(t)],["\uCD5C\uACE0 \uAE30\uB85D",dn(e.trial)],["\uCD5C\uACE0 \uC18D\uB3C4",Math.round(this.maxSpeed*3.6)+" KM/H"],["\uCCB4\uD06C\uD3EC\uC778\uD2B8",`${this.map.checkpoints.length} / ${this.map.checkpoints.length}`]])},2200)}tickTraining(t){if(this.enemies.length<3&&!this._respawnT&&(this._respawnT=2.5),this._respawnT&&(this._respawnT-=t,this._respawnT<=0)){this._respawnT=0;let e=[[-8,0,20],[8,0,20],[0,0,8]];for(let[i,n,r]of e)if(!this.enemies.some(a=>Math.hypot(a.pos.x-i,a.pos.z-r)<1)){let a=new As(this,"blade",new b(i,n,r));a.dummy=!0,this.enemies.push(a)}}}die(){this.state="dead",this.input.unlock();let t=this.records;this.score>t.score&&(t.score=this.score),t.wave=Math.max(t.wave,this.wave),t.speed=Math.max(t.speed,this.maxSpeed),this.saveRecords&&this.saveRecords(),setTimeout(()=>this.showEnd("FLATLINED",[["\uC810\uC218",this.score.toLocaleString()],["\uB3C4\uB2EC \uC6E8\uC774\uBE0C",this.wave],["\uCC98\uCE58",this.kills],["\uCC98\uD615 / \uD328\uB9C1",`${this.execs} / ${this.parries}`],["\uCD5C\uACE0 \uC18D\uB3C4",Math.round(this.maxSpeed*3.6)+" KM/H"],["\uCD5C\uACE0 \uB7AD\uD06C",Yi[this.bestRank].r],["\uCD5C\uACE0 \uC810\uC218",t.score.toLocaleString()],["\uCD5C\uACE0 \uC6E8\uC774\uBE0C",t.wave]]),1e3)}showEnd(t,e){this.onEnd&&this.onEnd(t,e)}tickDebris(t){for(let e=this.debris.length-1;e>=0;e--){let i=this.debris[e];i.life-=t,i.v.y-=25*t,i.m.position.addScaledVector(i.v,t),i.m.rotation.x+=i.av.x*t,i.m.rotation.y+=i.av.y*t,i.m.rotation.z+=i.av.z*t,i.m.position.y<.06&&(i.m.position.y=.06,i.v.y*=-.35,i.v.x*=.7,i.v.z*=.7,i.av.multiplyScalar(.7)),i.life<.5&&i.m.scale.multiplyScalar(Math.max(0,1-t*6)),i.life<=0&&(this.scene.remove(i.m),this.debris.splice(e,1))}}render(t){let e=this.player,i=this.S,n=this.camState,r=this.state==="play"?Te.clamp(this.acc/lo,0,1):1,a=this.state==="play"||this.state==="paused",o=Te.clamp((e.speed-11)/35,0,1);if(a||this.state==="dead"){let d=e.prevPos.x+(e.pos.x-e.prevPos.x)*r,u=e.prevPos.y+(e.pos.y-e.prevPos.y)*r+e.prevEyeH+(e.eyeH-e.prevEyeH)*r,f=e.prevPos.z+(e.pos.z-e.prevPos.z)*r;n.dipV+=(-n.dip*120-n.dipV*14)*t,n.dip+=n.dipV*t,n.dip=Te.clamp(n.dip,-.45,.2),e.grounded&&!e.sliding&&e.hSpeed>1&&(n.bob+=t*(4+e.hSpeed*.5));let g=(e.grounded&&!e.sliding?Math.abs(Math.sin(n.bob))*.035*Math.min(1,e.hSpeed/11):0)*i.bob;this.camera.position.set(d,u+n.dip-g,f);let x=0;e.wall&&!e.wall.climb&&(x=-e.wall.n.dot(e.flatRight(Rt))*.21*i.tilt),x+=-this.lastRight*.018*i.tilt,e.sliding&&(x+=.06*i.tilt),e.grapple&&(x+=-this.lastRight*.04*i.tilt),n.tilt+=(x-n.tilt)*Math.min(1,t*9),n.trauma=Math.max(0,n.trauma-t*1.7);let p=n.trauma*n.trauma*i.shake,m=this.clockT*42;this.camera.rotation.set(e.pitch+(Math.sin(m*1.1)*.6+Math.sin(m*2.3)*.4)*.03*p,e.yaw+(Math.sin(m*.9+1)*.6+Math.sin(m*1.9)*.4)*.03*p,n.tilt+Math.sin(m*1.3+2)*.04*p),n.kick=Math.max(0,n.kick-t*2.6);let v=i.fov+i.fovFx*o+n.kick*7-(this.slowmoT>0?7:0)-this.charge*6;n.fov+=(v-n.fov)*Math.min(1,t*7),this.camera.fov=n.fov,this.camera.updateProjectionMatrix()}if(this.state==="menu"){let d=this.clockT*.05;this.camera.position.set(Math.sin(d)*62,30+Math.sin(this.clockT*.17)*6,Math.cos(d)*62),this.camera.lookAt(0,20,0),this.camera.fov=70,this.camera.updateProjectionMatrix()}this.lastRight=(this.input.is("right")?1:0)-(this.input.is("left")?1:0),this.updateRope(t),this.updateSniperLasers(),this.vm.root.visible=a;let l=e.wall&&!e.wall.climb?-Math.sign(e.wall.n.dot(e.flatRight(Rt))):0;this.vm.update(t*(this.state==="play"?Math.max(this.timeScale,.4):1),{hSpeed:e.hSpeed,vy:e.vel.y,grounded:e.grounded,sliding:e.sliding,landDip:-Math.min(0,n.dip)*2,mouseDX:this.mouseDX||0,mouseDY:this.mouseDY||0,wallSide:l,momentum:this.momentum(),grappleReady:e.grappleCharges>0,bobScale:i.bob});let h=this.state==="paused"?0:this.state==="play"?t*this.timeScale:t*.3;this.map.update(this.clockT,h),this.atmo.update(this.clockT,h,this.camera.position,a?e.vel:null);for(let d of["sparks","tracers","bursts","arcs"])this.fx[d].update(h);this.fx.streaks.update(t,this.camera.position,e.vel,a?Te.clamp((e.speed-18)/25,0,1):0),this.audio.update(this.state==="play"?e.speed:0,this.state==="play"&&!!e.wall,t,this.mode==="arena"?this.rankIdx()/6:Math.min(1,e.speed/40)),this.damageFx=Math.max(0,this.damageFx-t*1.4),this.flashFx=Math.max(0,this.flashFx-t*3);let c=this.post.uniforms;c.speed.value+=((a?o:0)-c.speed.value)*Math.min(1,t*5),c.time.value=this.clockT,c.damage.value=this.damageFx,c.lowhp.value=a&&this.mode==="arena"?Math.max(0,.4-this.hp/100)/.4:0,c.flash.value=this.flashFx,c.blurAmt.value=i.blur,c.slowmo.value+=((this.slowmoT>0?1:0)-c.slowmo.value)*Math.min(1,t*8),a&&(this.updateCrosshair(),this.hud.update(t,this)),this.composer.render()}updateCrosshair(){let t=this.player,e=this.camera.position,i=this.lookDir(Cs),n=!1;for(let o of this.enemies){if(!o.alive)continue;Rt.subVectors(o.chest,e);let l=Rt.length();if((l<3.8+this.momentum()*1.8||l<8.5&&Rt.normalize().dot(i)>.93)&&(Rt.subVectors(o.chest,e).normalize(),Rt.dot(i)>.6)){n=!0;break}}let r=!1;if(t.grappleCharges>0&&!t.grapple&&!t.hook&&(r=!!this.map.col.raycast(e.x,e.y,e.z,i.x,i.y,i.z,it.grappleRange,co,fe.GRAPPLE),!r)){for(let l of this.enemies)if(l.alive&&l.rayHit(e.x,e.y,e.z,i.x,i.y,i.z,it.grappleRange)){r=!0;break}}let a=document.getElementById("cross");this._xl!==n&&(this._xl=n,a.classList.toggle("lunge",n)),this._xg!==r&&(this._xg=r,a.classList.toggle("grap",r))}updateRope(t){let e=this.player,i=e.grapple?e.grapple.point:e.hook?e.hook.pos:null;if(!i||this.state==="menu"){this.rope.visible=!1,this.hookHead.visible=!1;return}let n=this.vm.toWorld(this.vm.hookTip,this.camera,Rt),r=this.ropeGeo.attributes.position,a=this.ropeN,o=e.grapple?Math.max(0,.6-e.grapple.t)*.8:.3,l=n.distanceTo(i),h=Cs.subVectors(i,n).cross(new b(0,1,0)).normalize();for(let c=0;c<a;c++){let d=c/(a-1),u=Math.sin(d*Math.PI)*Math.sin(d*14-this.clockT*30)*o*Math.min(1,l/10);r.setXYZ(c,n.x+(i.x-n.x)*d+h.x*u,n.y+(i.y-n.y)*d+u*.5-Math.sin(d*Math.PI)*(e.hook,0),n.z+(i.z-n.z)*d+h.z*u)}r.needsUpdate=!0,this.rope.visible=!0,this.hookHead.visible=!0,this.hookHead.position.copy(i),this.hookHead.rotation.y+=t*10}updateSniperLasers(){this._lasers||(this._lasers=new Map);let t=new Set;for(let e of this.enemies){if(e.type!=="sniper"||!e.alive||e.state!=="aim"||!e.aimPoint)continue;t.add(e);let i=this._lasers.get(e);i||(this.once("sniper","\uBCF4\uB77C\uC0C9 \uB808\uC774\uC800 = \uC800\uACA9 \u2014 \uAE5C\uBE61\uC77C \uB54C F\uB85C \uBC18\uC0AC\uD558\uAC70\uB098 \uC5C4\uD3D0"),i=new ct(this.laserGeo,new Dt({color:new et(3,.6,5),transparent:!0,opacity:.5,blending:ge,depthWrite:!1})),this.scene.add(i),this._lasers.set(e,i),this.audio.sniperCharge(e.pos.distanceTo(this.player.pos)));let n=new b;e.gunTip.getWorldPosition(n);let r=n.distanceTo(e.aimPoint);i.position.copy(n),i.lookAt(e.aimPoint);let a=1+(1.4-e.windup)*1.5;i.scale.set(a,a,r),i.material.opacity=e.windup<.25?Math.sin(this.clockT*60)>0?1:.3:.35}for(let[e,i]of this._lasers)t.has(e)||(this.scene.remove(i),this._lasers.delete(e))}};uh(Fn,"TRAINING",[["slide","\uC2AC\uB77C\uC774\uB4DC (\uB2EC\uB9AC\uB2E4 C)"],["slidejump","\uC2AC\uB77C\uC774\uB4DC \uC810\uD504"],["bhop","\uBC84\uB2C8\uD569 3\uC5F0\uC18D (40km/h\u2191)"],["wall","\uBCBD\uD0C0\uAE30"],["walljump","\uBCBD\uC810\uD504"],["climb","\uBCBD \uC624\uB974\uAE30 (\uBCBD \uBCF4\uACE0 W+\uC810\uD504)"],["mantle","\uB09C\uAC04 \uB118\uAE30"],["dash","\uB300\uC2DC"],["hook","\uADF8\uB798\uD50C"],["slideland","\uB099\uD558 \uC2AC\uB77C\uC774\uB4DC \uCC29\uC9C0"],["ramp","\uACBD\uC0AC\uB85C \uC2AC\uB77C\uC774\uB4DC 60km/h"],["speed","90km/h \uB3CC\uD30C"],["parry","\uD328\uB9C1 (\uB178\uB780 \uAE5C\uBE61\uC784)"],["iaido","\uBC1C\uB3C4\uC220 (\uBCA0\uAE30 \uAFB9\u2192\uB5BC\uAE30)"],["execute","\uCC98\uD615 (\uC790\uC138 \uBD95\uAD34 \uD6C4 \uBCA0\uAE30)"]]);var uo=Fn;function ho(s,t,e){let i=t.x-s.x,n=t.y-s.y,r=t.z-s.z,a=i*i+n*n+r*r,o=a>0?((e.x-s.x)*i+(e.y-s.y)*n+(e.z-s.z)*r)/a:0;o=Math.max(0,Math.min(1,o));let l=s.x+i*o-e.x,h=s.y+n*o-e.y,c=s.z+r*o-e.z;return Math.sqrt(l*l+h*h+c*c)}var fo=class{constructor(t,e){this.canvas=t,this.S=e,this.down=new Set,this.edges=new Set,this.releases=new Set,this.dx=0,this.dy=0,this.locked=!1,this.capture=null,this.onKey=null;let i=n=>"Mouse"+n;addEventListener("keydown",n=>{if(this.capture){n.preventDefault();let r=this.capture;this.capture=null,r(n.code);return}this.onKey&&this.onKey(n)||(this.locked&&n.preventDefault(),this.down.has(n.code)||this.edges.add(n.code),this.down.add(n.code))}),addEventListener("keyup",n=>{this.down.has(n.code)&&this.releases.add(n.code),this.down.delete(n.code)}),addEventListener("mousedown",n=>{if(this.capture){n.preventDefault();let a=this.capture;this.capture=null,a(i(n.button));return}if(!this.locked)return;let r=i(n.button);this.down.has(r)||this.edges.add(r),this.down.add(r)}),addEventListener("mouseup",n=>{let r=i(n.button);this.down.has(r)&&this.releases.add(r),this.down.delete(r)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{if(!this.locked)return;let r=Math.abs(n.movementX)>600?0:n.movementX,a=Math.abs(n.movementY)>600?0:n.movementY;this.dx+=r,this.dy+=a}),addEventListener("blur",()=>{this.down.clear()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||this.down.clear(),this.onLockChange&&this.onLockChange(this.locked)})}lock(){try{let t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}unlock(){document.pointerLockElement&&document.exitPointerLock()}is(t){let e=this.S.binds[t];for(let i=0;i<e.length;i++)if(this.down.has(e[i]))return!0;return!1}pressed(t){let e=this.S.binds[t];for(let i=0;i<e.length;i++)if(this.edges.has(e[i]))return!0;return!1}released(t){let e=this.S.binds[t];for(let i=0;i<e.length;i++)if(this.releases.has(e[i]))return!0;return!1}consumeEdges(){this.edges.clear(),this.releases.clear()}takeMouse(){let t=[this.dx,this.dy];return this.dx=0,this.dy=0,t}};var xe=s=>document.getElementById(s),Yt=md(),ih=xe("c"),Ne=new fo(ih,Yt),ie;try{ie=new uo(ih,Yt,Ne)}catch(s){throw xe("loading").innerHTML=`<div style="font-family:'Noto Sans KR';letter-spacing:1px;color:#fff;text-align:center;line-height:1.8">WebGL\uC744 \uC2DC\uC791\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694.<br><span style="color:#999;font-size:13px">${String(s&&s.message||s)}</span></div>`,s}ie.records=gd();ie.saveRecords=()=>xd(ie.records);var _y=["menu","pause","settings","controls","death"];function wi(s){_y.forEach(t=>xe(t).classList.toggle("hidden",t!==s))}var po="menu";function jc(s){if(ie.start(s),wi(null),xe("hud").classList.remove("hidden"),xe("clickTo").classList.add("hidden"),Yt.full&&!document.fullscreenElement){let t=document.documentElement.requestFullscreen?.();t&&t.then(()=>navigator.keyboard?.lock?.(["KeyW","KeyA","KeyS","KeyD","KeyC","KeyQ","KeyE","KeyF","KeyR","KeyT","KeyV","Space","ShiftLeft","ControlLeft"]).catch(()=>{})).catch(()=>{})}Ne.lock()}function _d(){ie.state==="play"&&(ie.state="paused",wi("pause"))}function My(){wi(null),xe("clickTo").classList.remove("hidden"),Ne.lock()}function Ey(){ie.state="menu",ie.clearWorld(),wi("menu"),xe("hud").classList.add("hidden"),xe("clickTo").classList.add("hidden"),Ne.unlock(),document.fullscreenElement&&document.exitFullscreen?.(),Ed()}ie.onEnd=(s,t)=>{ie.state="dead",Ne.unlock(),xe("endTitle").textContent=s,xe("endStats").innerHTML=t.map(([e,i])=>`<div class="stat"><span>${e}</span><b>${i}</b></div>`).join(""),xe("hud").classList.add("hidden"),wi("death")};Ne.onLockChange=s=>{s?(xe("clickTo").classList.add("hidden"),ie.state==="paused"&&(ie.state="play",wi(null))):ie.state==="play"&&_d()};Ne.onKey=s=>{if(s.code==="Escape"){if(ie.state==="play")return Ne.unlock(),_d(),!0;if(!xe("settings").classList.contains("hidden")||!xe("controls").classList.contains("hidden"))return wi(po),!0}return!1};ih.addEventListener("mousedown",()=>{(ie.state==="play"||ie.state==="paused")&&!Ne.locked&&xe("pause").classList.contains("hidden")&&Ne.lock()});xe("clickTo").addEventListener("mousedown",()=>Ne.lock());addEventListener("beforeunload",s=>{ie.state==="play"&&(s.preventDefault(),s.returnValue="")});document.querySelectorAll("[data-act]").forEach(s=>s.addEventListener("click",()=>{ie.audio.init(),ie.audio.setVolumes(Yt.sfx,Yt.music),ie.audio.ui();let t=s.dataset.act;t==="arena"||t==="trial"||t==="training"?jc(t):t==="settings"?(po=ie.state==="paused"?"pause":"menu",by(),wi("settings")):t==="controls"?(po=ie.state==="paused"?"pause":"menu",Sy(),wi("controls")):t==="back"?wi(po):t==="resume"?My():t==="restart"?jc(ie.mode):t==="quit"&&Ey()}));function Md(){document.querySelectorAll("#loadout button").forEach(s=>s.classList.toggle("on",s.dataset.lo===Yt.loadout))}document.querySelectorAll("#loadout button").forEach(s=>s.addEventListener("click",()=>{Yt.loadout=s.dataset.lo,Rs(Yt),Md(),ie.audio.init(),ie.audio.ui()}));Md();function Sy(){xe("ctrlGrid").innerHTML=Zc.map(([s,t])=>`<div><span>${t}</span><b>${Yt.binds[s].map(oo).join(" / ")}</b></div>`).join("")+"<div><span>\uC77C\uC2DC\uC815\uC9C0</span><b>ESC</b></div>"}function by(){let s=(e,i,n=r=>r)=>{let r=xe("s"+e),a=xe("v"+e);r.value=Yt[i],a.textContent=n(Yt[i]),r.oninput=()=>{Yt[i]=parseFloat(r.value),a.textContent=n(Yt[i]),Rs(Yt),eh()}};s("Sens","sens",e=>{let i=2*Math.PI/(e*.0012)/800*2.54;return xe("cm360").textContent=`(800DPI \uAE30\uC900 360\xB0 = ${i.toFixed(1)}cm)`,(+e).toFixed(2)}),s("Fov","fov"),s("FovFx","fovFx"),s("Shake","shake",e=>(+e).toFixed(2)),s("Tilt","tilt",e=>(+e).toFixed(2)),s("Bob","bob",e=>(+e).toFixed(2)),s("Blur","blur",e=>(+e).toFixed(2)),s("Sfx","sfx",e=>Math.round(e*100)),s("Music","music",e=>Math.round(e*100));let t=(e,i,n=!0,r)=>{let a=xe("s"+e);a.value=String(Yt[i]),a.onchange=()=>{Yt[i]=n?+a.value:a.value,Rs(Yt),eh(),r&&r()}};t("AutoHop","autoHop"),t("CrouchToggle","crouchToggle"),t("Fps","fps"),t("Full","full"),t("Cross","crosshair",!1),t("Quality","quality",!1,()=>{confirm("\uADF8\uB798\uD53D \uD488\uC9C8\uC744 \uBC14\uAFB8\uB824\uBA74 \uC0C8\uB85C\uACE0\uCE68\uC774 \uD544\uC694\uD574\uC694. \uC9C0\uAE08 \uC0C8\uB85C\uACE0\uCE68\uD560\uAE4C\uC694?")&&(ie.state="menu",location.reload())}),th()}var Qc=null;function th(){xe("binds").innerHTML=Zc.map(([s,t])=>`<div class="row k"><span>${t}</span><span><button class="key" data-a="${s}" data-i="0">${oo(Yt.binds[s][0])}</button> <button class="key" data-a="${s}" data-i="1">${oo(Yt.binds[s][1])}</button></span></div>`).join("")+'<div class="row k"><span></span><button class="key" id="resetBinds">\uAE30\uBCF8\uAC12\uC73C\uB85C</button></div>',xe("binds").querySelectorAll(".key[data-a]").forEach(s=>s.onclick=t=>{t.stopPropagation(),!Qc&&(Qc=s,s.textContent="\uD0A4 \uC785\uB825\u2026",s.classList.add("listen"),setTimeout(()=>{Ne.capture=e=>{let i=s.dataset.a,n=+s.dataset.i;if(Qc=null,e!=="Escape"){for(let a in Yt.binds)Yt.binds[a]=Yt.binds[a].map(o=>o===e?void 0:o);let r=[...Yt.binds[i]];r[n]=e,Yt.binds[i]=r;for(let a in Yt.binds)Yt.binds[a]=Yt.binds[a].filter(Boolean)}Rs(Yt),th()}},50))}),xe("resetBinds").onclick=()=>{Yt.binds=JSON.parse(JSON.stringify(ao)),Rs(Yt),th()}}function eh(){ie.audio.setVolumes(Yt.sfx,Yt.music),xe("fps").classList.toggle("hidden",!Yt.fps),document.documentElement.style.setProperty("--xc",Yt.crosshair)}eh();function Ed(){let s=ie.records,t=[];s.score&&t.push(`\uC544\uB808\uB098 \uCD5C\uACE0 ${s.score.toLocaleString()}\uC810 \xB7 WAVE ${s.wave}`),s.trial&&t.push(`\uD0C0\uC784 \uC5B4\uD0DD ${Math.floor(s.trial/60)}:${(s.trial%60).toFixed(2).padStart(5,"0")}`),s.speed&&t.push(`\uCD5C\uACE0 \uC18D\uB3C4 ${Math.round(s.speed*3.6)} KM/H`),xe("best").innerHTML=t.join("<br>")}wi("menu");Ed();xe("loading").classList.add("hidden");function Sd(s){requestAnimationFrame(Sd),ie.frame(s)}requestAnimationFrame(Sd);window.__game={game:ie,S:Yt,input:Ne,start:s=>jc(s),sim(s,t=[]){let e=ie,i=1/120;for(let n=0;n<s;n+=i)t.forEach(r=>Ne.down.add(r)),e.tick(i);t.forEach(n=>Ne.down.delete(n))},press(s){Ne.edges.add(s),Ne.down.add(s)},release(s){Ne.down.delete(s),Ne.releases.add(s)}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
