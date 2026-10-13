(()=>{var mc="169";var vd=0,ih=1,_d=2;var hu=1,gc=2,Ii=3,tn=0,We=1,Fe=2,ji=0,ns=1,nh=2,sh=3,rh=4,Md=5,Mn=100,bd=101,Sd=102,wd=103,Ed=104,Td=200,Ad=201,Rd=202,Cd=203,Wo=204,Xo=205,Pd=206,Id=207,Ld=208,Dd=209,Ud=210,Nd=211,kd=212,zd=213,Fd=214,qo=0,Yo=1,$o=2,ls=3,Zo=4,Jo=5,Ko=6,jo=7,uu=0,Bd=1,Od=2,Qi=0,Hd=1,Vd=2,Gd=3,Wd=4,Xd=5,qd=6,yc=7;var du=300,cs=301,hs=302,Qo=303,tl=304,Ra=306,Vs=1e3,Sn=1001,el=1002,si=1003,Yd=1004;var dr=1005;var mi=1006,oo=1007;var wn=1008;var zi=1009,fu=1010,pu=1011,Gs=1012,xc=1013,En=1014,Ui=1015,Ks=1016,vc=1017,_c=1018,us=1020,mu=35902,gu=1021,yu=1022,yi=1023,xu=1024,vu=1025,ss=1026,ds=1027,_u=1028,Mc=1029,Mu=1030,bc=1031;var Sc=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,il=35840,nl=35841,sl=35842,rl=35843,al=36196,ol=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,yl=37816,xl=37817,vl=37818,_l=37819,Ml=37820,bl=37821,Zr=36492,Sl=36494,wl=36495,bu=36283,El=36284,Tl=36285,Al=36286;var Kr=2300,Rl=2301,lo=2302,ah=2400,oh=2401,lh=2402;var $d=3200,Zd=3201;var Su=0,Jd=1,Ki="",ze="srgb",sn="srgb-linear",wc="display-p3",Ca="display-p3-linear",jr="linear",he="srgb",Qr="rec709",ta="p3";var Fn=7680;var ch=519,Kd=512,jd=513,Qd=514,wu=515,tf=516,ef=517,nf=518,sf=519,Cl=35044,rn=35048;var hh="300 es",Ni=2e3,ea=2001,en=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=1234567,rs=Math.PI/180,Ws=180/Math.PI;function ki(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[r&255]+Ie[r>>8&255]+Ie[r>>16&255]+Ie[r>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Ae(r,t,e){return Math.max(t,Math.min(e,r))}function Ec(r,t){return(r%t+t)%t}function rf(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function af(r,t,e){return r!==t?(e-r)/(t-r):0}function Fs(r,t,e){return(1-e)*r+e*t}function of(r,t,e,i){return Fs(r,t,1-Math.exp(-e*i))}function lf(r,t=1){return t-Math.abs(Ec(r,t*2)-t)}function cf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function hf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function uf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function df(r,t){return r+Math.random()*(t-r)}function ff(r){return r*(.5-Math.random())}function pf(r){r!==void 0&&(uh=r);let t=uh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mf(r){return r*rs}function gf(r){return r*Ws}function yf(r){return(r&r-1)===0&&r!==0}function xf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _f(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Vt={DEG2RAD:rs,RAD2DEG:Ws,generateUUID:ki,clamp:Ae,euclideanModulo:Ec,mapLinear:rf,inverseLerp:af,lerp:Fs,damp:of,pingpong:lf,smoothstep:cf,smootherstep:hf,randInt:uf,randFloat:df,randFloatSpread:ff,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:yf,ceilPowerOfTwo:xf,floorPowerOfTwo:vf,setQuaternionFromProperEuler:_f,normalize:ne,denormalize:gi},lt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class r{constructor(t,e,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=n[0],p=n[3],m=n[6],x=n[1],_=n[4],M=n[7],C=n[2],T=n[5],A=n[8];return s[0]=a*y+o*x+l*C,s[3]=a*p+o*_+l*T,s[6]=a*m+o*M+l*A,s[1]=c*y+h*x+u*C,s[4]=c*p+h*_+u*T,s[7]=c*m+h*M+u*A,s[2]=d*y+f*x+g*C,s[5]=d*p+f*_+g*T,s[8]=d*m+f*M+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=d*y,t[4]=(h*e-n*l)*y,t[5]=(n*s-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},co=new Ft;function Eu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mf(){let r=ia("canvas");return r.style.display="block",r}var dh={};function Jr(r){r in dh||(dh[r]=!0,console.warn(r))}function bf(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Sf(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wf(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var fh=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ph=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[sn]:{transfer:jr,primaries:Qr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ze]:{transfer:he,primaries:Qr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ca]:{transfer:jr,primaries:ta,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(ph),fromReference:r=>r.applyMatrix3(fh)},[wc]:{transfer:he,primaries:ta,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(ph),fromReference:r=>r.applyMatrix3(fh).convertLinearToSRGB()}},Ef=new Set([sn,Ca]),ee={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ef.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=Rs[t].toReference,n=Rs[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Rs[r].primaries},getTransfer:function(r){return r===Ki?jr:Rs[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(Rs[t].luminanceCoefficients)}};function as(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Bn,Pl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=ia("canvas")),Bn.width=t.width,Bn.height=t.height;let i=Bn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ia("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=as(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(as(e[i]/255)*255):e[i]=as(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tf=0,na=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(uo(n[a].image)):s.push(uo(n[a]))}else s=uo(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function uo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Pl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Af=0,Qe=class r extends en{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Sn,n=Sn,s=mi,a=wn,o=yi,l=zi,c=r.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ki(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=du;Qe.DEFAULT_ANISOTROPY=1;var ge=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,M=(f+1)/2,C=(m+1)/2,T=(h+d)/4,A=(u+y)/4,P=(g+p)/4;return _>M&&_>C?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=T/i,s=A/i):M>C?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=T/n,s=P/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=A/s,n=P/s),this.set(i,n,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Il=class extends en{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Qe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fi=class extends Il{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sa=class extends Qe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=si,this.minFilter=si,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ll=class extends Qe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=si,this.minFilter=si,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Be=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],y=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let p=1-o,m=l*d+c*f+h*g+u*y,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,m*x);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C}let M=o*x;if(l=l*p+d*M,c=c*p+f*M,h=h*p+g*M,u=u*p+y*M,p===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fo=new b,mh=new Be,Tn=class{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,di):di.fromBufferAttribute(s,a),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),pr.subVectors(this.max,Cs),On.subVectors(t.a,Cs),Hn.subVectors(t.b,Cs),Vn.subVectors(t.c,Cs),Xi.subVectors(Hn,On),qi.subVectors(Vn,Hn),pn.subVectors(On,Vn);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-pn.z,pn.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,pn.z,0,-pn.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-pn.y,pn.x,0];return!po(e,On,Hn,Vn,pr)||(e=[1,0,0,0,1,0,0,0,1],!po(e,On,Hn,Vn,pr))?!1:(mr.crossVectors(Xi,qi),e=[mr.x,mr.y,mr.z],po(e,On,Hn,Vn,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ti=[new b,new b,new b,new b,new b,new b,new b,new b],di=new b,fr=new Tn,On=new b,Hn=new b,Vn=new b,Xi=new b,qi=new b,pn=new b,Cs=new b,pr=new b,mr=new b,mn=new b;function po(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){mn.fromArray(r,s);let o=n.x*Math.abs(mn.x)+n.y*Math.abs(mn.y)+n.z*Math.abs(mn.z),l=t.dot(mn),c=e.dot(mn),h=i.dot(mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Rf=new Tn,Ps=new b,mo=new b,An=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Rf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);let e=Ps.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ps,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(mo)),this.expandByPoint(Ps.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new b,go=new b,gr=new b,Yi=new b,yo=new b,yr=new b,xo=new b,Xs=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){go.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),Yi.copy(this.origin).sub(go);let s=t.distanceTo(e)*.5,a=-this.direction.dot(gr),o=Yi.dot(this.direction),l=-Yi.dot(gr),c=Yi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(go).addScaledVector(gr,d),f}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);let i=Ai.dot(this.direction),n=Ai.dot(Ai)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,n,s){yo.subVectors(e,t),yr.subVectors(i,t),xo.crossVectors(yo,yr);let a=this.direction.dot(xo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,t);let l=o*this.direction.dot(yr.crossVectors(Yi,yr));if(l<0)return null;let c=o*this.direction.dot(yo.cross(Yi));if(c<0||l+c>a)return null;let h=-o*Yi.dot(xo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class r{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,g,y,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,g,y,p)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Gn.setFromMatrixColumn(t,0).length(),s=1/Gn.setFromMatrixColumn(t,1).length(),a=1/Gn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Pf)}lookAt(t,e,i){let n=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),$i.crossVectors(i,Ke),$i.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),$i.crossVectors(i,Ke)),$i.normalize(),xr.crossVectors(Ke,$i),n[0]=$i.x,n[4]=xr.x,n[8]=Ke.x,n[1]=$i.y,n[5]=xr.y,n[9]=Ke.y,n[2]=$i.z,n[6]=xr.z,n[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],x=i[3],_=i[7],M=i[11],C=i[15],T=n[0],A=n[4],P=n[8],k=n[12],v=n[1],S=n[5],L=n[9],N=n[13],B=n[2],X=n[6],F=n[10],Y=n[14],V=n[3],st=n[7],nt=n[11],ct=n[15];return s[0]=a*T+o*v+l*B+c*V,s[4]=a*A+o*S+l*X+c*st,s[8]=a*P+o*L+l*F+c*nt,s[12]=a*k+o*N+l*Y+c*ct,s[1]=h*T+u*v+d*B+f*V,s[5]=h*A+u*S+d*X+f*st,s[9]=h*P+u*L+d*F+f*nt,s[13]=h*k+u*N+d*Y+f*ct,s[2]=g*T+y*v+p*B+m*V,s[6]=g*A+y*S+p*X+m*st,s[10]=g*P+y*L+p*F+m*nt,s[14]=g*k+y*N+p*Y+m*ct,s[3]=x*T+_*v+M*B+C*V,s[7]=x*A+_*S+M*X+C*st,s[11]=x*P+_*L+M*F+C*nt,s[15]=x*k+_*N+M*Y+C*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+y*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+p*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+m*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],x=u*p*c-y*d*c+y*l*f-o*p*f-u*l*m+o*d*m,_=g*d*c-h*p*c-g*l*f+a*p*f+h*l*m-a*d*m,M=h*y*c-g*u*c+g*o*f-a*y*f-h*o*m+a*u*m,C=g*u*l-h*y*l-g*o*d+a*y*d+h*o*p-a*u*p,T=e*x+i*_+n*M+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=x*A,t[1]=(y*d*s-u*p*s-y*n*f+i*p*f+u*n*m-i*d*m)*A,t[2]=(o*p*s-y*l*s+y*n*c-i*p*c-o*n*m+i*l*m)*A,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*A,t[4]=_*A,t[5]=(h*p*s-g*d*s+g*n*f-e*p*f-h*n*m+e*d*m)*A,t[6]=(g*l*s-a*p*s-g*n*c+e*p*c+a*n*m-e*l*m)*A,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*A,t[8]=M*A,t[9]=(g*u*s-h*y*s-g*i*f+e*y*f+h*i*m-e*u*m)*A,t[10]=(a*y*s-g*o*s+g*i*c-e*y*c-a*i*m+e*o*m)*A,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*A,t[12]=C*A,t[13]=(h*y*n-g*u*n+g*i*d-e*y*d-h*i*p+e*u*p)*A,t[14]=(g*o*n-a*y*n-g*i*l+e*y*l+a*i*p-e*o*p)*A,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*A,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,y=a*h,p=a*u,m=o*u,x=l*c,_=l*h,M=l*u,C=i.x,T=i.y,A=i.z;return n[0]=(1-(y+m))*C,n[1]=(f+M)*C,n[2]=(g-_)*C,n[3]=0,n[4]=(f-M)*T,n[5]=(1-(d+m))*T,n[6]=(p+x)*T,n[7]=0,n[8]=(g+_)*A,n[9]=(p-x)*A,n[10]=(1-(d+y))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=Gn.set(n[0],n[1],n[2]).length(),a=Gn.set(n[4],n[5],n[6]).length(),o=Gn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],fi.copy(this);let c=1/s,h=1/a,u=1/o;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=u,fi.elements[9]*=u,fi.elements[10]*=u,e.setFromRotationMatrix(fi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Ni){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(o===Ni)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ea)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Ni){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h,g,y;if(o===Ni)g=(a+s)*u,y=-2*u;else if(o===ea)g=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Gn=new b,fi=new se,Cf=new b(0,0,0),Pf=new b(1,1,1),$i=new b,xr=new b,Ke=new b,gh=new se,yh=new Be,ri=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},If=0,xh=new b,Wn=new Be,Ri=new se,vr=new b,Is=new b,Lf=new b,Df=new Be,vh=new b(1,0,0),_h=new b(0,1,0),Mh=new b(0,0,1),bh={type:"added"},Uf={type:"removed"},Xn={type:"childadded",child:null},vo={type:"childremoved",child:null},Re=class r extends en{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new b,e=new ri,i=new Be,n=new b(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new se},normalMatrix:{value:new Ft}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.premultiply(Wn),this}rotateX(t){return this.rotateOnAxis(vh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(Mh,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(Mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vr.copy(t):vr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Is,vr,this.up):Ri.lookAt(vr,Is,this.up),this.quaternion.setFromRotationMatrix(Ri),n&&(Ri.extractRotation(n.matrixWorld),Wn.setFromRotationMatrix(Ri),this.quaternion.premultiply(Wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),Xn.child=t,this.dispatchEvent(Xn),Xn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf),vo.child=t,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),Xn.child=t,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Re.DEFAULT_UP=new b(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new b,Ci=new b,_o=new b,Pi=new b,qn=new b,Yn=new b,Sh=new b,Mo=new b,bo=new b,So=new b,wo=new ge,Eo=new ge,To=new ge,Di=class r{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),pi.subVectors(t,e),n.cross(pi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){pi.subVectors(n,e),Ci.subVectors(i,e),_o.subVectors(t,e);let a=pi.dot(pi),o=pi.dot(Ci),l=pi.dot(_o),c=Ci.dot(Ci),h=Ci.dot(_o),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return wo.setScalar(0),Eo.setScalar(0),To.setScalar(0),wo.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,i),To.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(wo,s.x),a.addScaledVector(Eo,s.y),a.addScaledVector(To,s.z),a}static isFrontFacing(t,e,i,n){return pi.subVectors(i,e),Ci.subVectors(t,e),pi.cross(Ci).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),pi.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;qn.subVectors(n,i),Yn.subVectors(s,i),Mo.subVectors(t,i);let l=qn.dot(Mo),c=Yn.dot(Mo);if(l<=0&&c<=0)return e.copy(i);bo.subVectors(t,n);let h=qn.dot(bo),u=Yn.dot(bo);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(qn,a);So.subVectors(t,s);let f=qn.dot(So),g=Yn.dot(So);if(g>=0&&f<=g)return e.copy(s);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Yn,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Sh.subVectors(s,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(Sh,o);let m=1/(p+y+d);return a=y*m,o=d*m,e.copy(i).addScaledVector(qn,a).addScaledVector(Yn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Ao(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ee.workingColorSpace){if(t=Ec(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ao(a,s,t+1/3),this.g=Ao(a,s,t),this.b=Ao(a,s,t-1/3)}return ee.toWorkingColorSpace(this,n),this}setStyle(t,e=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let i=Tu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ee.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ae(Le.r*255,0,255))*65536+Math.round(Ae(Le.g*255,0,255))*256+Math.round(Ae(Le.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Le.copy(this),e);let i=Le.r,n=Le.g,s=Le.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=ze){ee.fromWorkingColorSpace(Le.copy(this),t);let e=Le.r,i=Le.g,n=Le.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(_r);let i=Fs(Zi.h,_r.h,e),n=Fs(Zi.s,_r.s,e),s=Fs(Zi.l,_r.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new wt;wt.NAMES=Tu;var Nf=0,bi=class extends en{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=ns,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==Mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Se=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new b,Mr=new lt,ue=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cl,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cl&&(t.usage=this.usage),t}};var aa=class extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var oa=class extends ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Gt=class extends ue{constructor(t,e,i){super(new Float32Array(t),e,i)}},kf=0,ni=new se,Ro=new Re,$n=new b,je=new Tn,Ls=new Tn,Te=new b,re=class r extends en{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?oa:aa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];je.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){let i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(je.min,Ls.min),je.expandByPoint(Te),Te.addVectors(je.max,Ls.max),je.expandByPoint(Te)):(je.expandByPoint(Ls.min),je.expandByPoint(Ls.max))}je.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&($n.fromBufferAttribute(t,c),Te.add($n)),n=Math.max(n,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new b,l[P]=new b;let c=new b,h=new b,u=new b,d=new lt,f=new lt,g=new lt,y=new b,p=new b;function m(P,k,v){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,k),u.fromBufferAttribute(i,v),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,k),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[P].add(y),o[k].add(y),o[v].add(y),l[P].add(p),l[k].add(p),l[v].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,k=x.length;P<k;++P){let v=x[P],S=v.start,L=v.count;for(let N=S,B=S+L;N<B;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new b,M=new b,C=new b,T=new b;function A(P){C.fromBufferAttribute(n,P),T.copy(C);let k=o[P];_.copy(k),_.sub(C.multiplyScalar(C.dot(k))).normalize(),M.crossVectors(T,k);let S=M.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,S)}for(let P=0,k=x.length;P<k;++P){let v=x[P],S=v.start,L=v.count;for(let N=S,B=S+L;N<B;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new b,s=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wh=new se,gn=new Xs,br=new An,Eh=new b,Sr=new b,wr=new b,Er=new b,Co=new b,Tr=new b,Th=new b,Ar=new b,kt=class extends Re{constructor(t=new re,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Tr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Co.fromBufferAttribute(u,t),a?Tr.addScaledVector(Co,h):Tr.addScaledVector(Co.sub(e),h))}e.add(Tr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(s),gn.copy(t.ray).recast(t.near),!(br.containsPoint(gn.origin)===!1&&(gn.intersectSphere(br,Eh)===null||gn.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(wh.copy(s).invert(),gn.copy(t.ray).applyMatrix4(wh),!(i.boundingBox!==null&&gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){let T=o.getX(M),A=o.getX(M+1),P=o.getX(M+2);n=Rr(this,m,t,i,c,h,u,T,A,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let x=o.getX(p),_=o.getX(p+1),M=o.getX(p+2);n=Rr(this,a,t,i,c,h,u,x,_,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){let T=M,A=M+1,P=M+2;n=Rr(this,m,t,i,c,h,u,T,A,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let x=p,_=p+1,M=p+2;n=Rr(this,a,t,i,c,h,u,x,_,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function zf(r,t,e,i,n,s,a,o){let l;if(t.side===We?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===tn,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:r}}function Rr(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Sr),r.getVertexPosition(l,wr),r.getVertexPosition(c,Er);let h=zf(r,t,e,i,Sr,wr,Er,Th);if(h){let u=new b;Di.getBarycoord(Th,Sr,wr,Er,u),n&&(h.uv=Di.getInterpolatedAttribute(n,o,l,c,u,new lt)),s&&(h.uv1=Di.getInterpolatedAttribute(s,o,l,c,u,new lt)),a&&(h.normal=Di.getInterpolatedAttribute(a,o,l,c,u,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new b,materialIndex:0};Di.getNormal(Sr,wr,Er,d.normal),h.face=d,h.barycoord=u}return h}var ye=class r extends re{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(y,p,m,x,_,M,C,T,A,P,k){let v=M/A,S=C/P,L=M/2,N=C/2,B=T/2,X=A+1,F=P+1,Y=0,V=0,st=new b;for(let nt=0;nt<F;nt++){let ct=nt*S-N;for(let Ut=0;Ut<X;Ut++){let Bt=Ut*v-L;st[y]=Bt*x,st[p]=ct*_,st[m]=B,c.push(st.x,st.y,st.z),st[y]=0,st[p]=0,st[m]=T>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ut/A),u.push(1-nt/P),Y+=1}}for(let nt=0;nt<P;nt++)for(let ct=0;ct<A;ct++){let Ut=d+ct+X*nt,Bt=d+ct+X*(nt+1),O=d+(ct+1)+X*(nt+1),j=d+(ct+1)+X*nt;l.push(Ut,Bt,j),l.push(Bt,O,j),V+=6}o.addGroup(f,V,k),f+=V,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fs(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ke(r){let t={};for(let e=0;e<r.length;e++){let i=fs(r[e]);for(let n in i)t[n]=i[n]}return t}function Ff(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Au(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Bf={clone:fs,merge:ke},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},la=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new b,Ah=new lt,Rh=new lt,Pe=class extends la{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,Ah,Rh),e.subVectors(Rh,Ah)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zn=-90,Jn=1,Dl=class extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Pe(Zn,Jn,t,e);n.layers=this.layers,this.add(n);let s=new Pe(Zn,Jn,t,e);s.layers=this.layers,this.add(s);let a=new Pe(Zn,Jn,t,e);a.layers=this.layers,this.add(a);let o=new Pe(Zn,Jn,t,e);o.layers=this.layers,this.add(o);let l=new Pe(Zn,Jn,t,e);l.layers=this.layers,this.add(l);let c=new Pe(Zn,Jn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ca=class extends Qe{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ul=class extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ca(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ye(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:ji});s.uniforms.tEquirect.value=e;let a=new kt(n,s),o=e.minFilter;return e.minFilter===wn&&(e.minFilter=mi),new Dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Po=new b,Vf=new b,Gf=new Ft,Li=class{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Po.subVectors(i,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Po),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Gf.getNormalMatrix(t),n=this.coplanarPoint(Po).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yn=new An,Cr=new b,qs=class{constructor(t=new Li,e=new Li,i=new Li,n=new Li,s=new Li,a=new Li){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],y=n[10],p=n[11],m=n[12],x=n[13],_=n[14],M=n[15];if(i[0].setComponents(l-s,d-c,p-f,M-m).normalize(),i[1].setComponents(l+s,d+c,p+f,M+m).normalize(),i[2].setComponents(l+a,d+h,p+g,M+x).normalize(),i[3].setComponents(l-a,d-h,p-g,M-x).normalize(),i[4].setComponents(l-o,d-u,p-y,M-_).normalize(),e===Ni)i[5].setComponents(l+o,d+u,p+y,M+_).normalize();else if(e===ea)i[5].setComponents(o,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Cr.x=n.normal.x>0?t.max.x:t.min.x,Cr.y=n.normal.y>0?t.max.y:t.min.y,Cr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ru(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Wf(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];r.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Bi=class r extends re{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let x=m*d-a;for(let _=0;_<c;_++){let M=_*u-s;g.push(M,-x,0),y.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let _=x+c*m,M=x+c*(m+1),C=x+1+c*(m+1),T=x+1+c*m;f.push(_,M,T),f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
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
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`
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
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Gp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,jm=`#define DISTANCE
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
}`,Qm=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,n0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,c0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,f0=`#define PHONG
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
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,g0=`#define TOON
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
}`,y0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,M0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:$f,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:Kf,aomap_pars_fragment:jf,batching_pars_vertex:Qf,batching_vertex:tp,begin_vertex:ep,beginnormal_vertex:ip,bsdfs:np,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:yp,displacementmap_vertex:xp,emissivemap_fragment:vp,emissivemap_pars_fragment:_p,colorspace_fragment:Mp,colorspace_pars_fragment:bp,envmap_fragment:Sp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ep,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:zp,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Pp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Np,lights_pars_begin:kp,lights_toon_fragment:Fp,lights_toon_pars_fragment:Bp,lights_phong_fragment:Op,lights_phong_pars_fragment:Hp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:Kp,map_pars_fragment:jp,map_particle_fragment:Qp,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:im,morphinstance_vertex:nm,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:ym,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:_m,project_vertex:Mm,dithering_fragment:bm,dithering_pars_fragment:Sm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Am,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Pm,skinning_pars_vertex:Im,skinning_vertex:Lm,skinnormal_vertex:Dm,specularmap_fragment:Um,specularmap_pars_fragment:Nm,tonemapping_fragment:km,tonemapping_pars_fragment:zm,transmission_fragment:Fm,transmission_pars_fragment:Bm,uv_pars_fragment:Om,uv_pars_vertex:Hm,uv_vertex:Vm,worldpos_vertex:Gm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:$m,cube_frag:Zm,depth_vert:Jm,depth_frag:Km,distanceRGBA_vert:jm,distanceRGBA_frag:Qm,equirect_vert:t0,equirect_frag:e0,linedashed_vert:i0,linedashed_frag:n0,meshbasic_vert:s0,meshbasic_frag:r0,meshlambert_vert:a0,meshlambert_frag:o0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:h0,meshnormal_frag:u0,meshphong_vert:d0,meshphong_frag:f0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:y0,points_vert:x0,points_frag:v0,shadow_vert:_0,shadow_frag:M0,sprite_vert:b0,sprite_frag:S0},rt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Mi={basic:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new wt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ke([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ke([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new wt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ke([rt.points,rt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ke([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ke([rt.common,rt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ke([rt.sprite,rt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ke([rt.common,rt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ke([rt.lights,rt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Mi.physical={uniforms:ke([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Pr={r:0,b:0,g:0},xn=new ri,w0=new se;function E0(r,t,e,i,n,s,a){let o=new wt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function y(x){let _=!1,M=g(x);M===null?m(o,l):M&&M.isColor&&(m(M,1),_=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,_){let M=g(_);M&&(M.isCubeTexture||M.mapping===Ra)?(h===void 0&&(h=new kt(new ye(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:fs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),xn.copy(_.backgroundRotation),xn.x*=-1,xn.y*=-1,xn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(xn)),h.material.toneMapped=ee.getTransfer(M.colorSpace)!==he,(u!==M||d!==M.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new kt(new Bi(2,2),new ti({name:"BackgroundMaterial",uniforms:fs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ee.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(Pr,Au(r)),i.buffers.color.setClear(Pr.r,Pr.g,Pr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:y,addToRenderList:p}}function T0(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(v,S,L,N,B){let X=!1,F=u(N,L,S);s!==F&&(s=F,c(s.object)),X=f(v,N,L,B),X&&g(v,N,L,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(v,S,L,N),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,S,L){let N=L.wireframe===!0,B=i[v.id];B===void 0&&(B={},i[v.id]=B);let X=B[S.id];X===void 0&&(X={},B[S.id]=X);let F=X[N];return F===void 0&&(F=d(l()),X[N]=F),F}function d(v){let S=[],L=[],N=[];for(let B=0;B<e;B++)S[B]=0,L[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:L,attributeDivisors:N,object:v,attributes:{},index:null}}function f(v,S,L,N){let B=s.attributes,X=S.attributes,F=0,Y=L.getAttributes();for(let V in Y)if(Y[V].location>=0){let nt=B[V],ct=X[V];if(ct===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),nt===void 0||nt.attribute!==ct||ct&&nt.data!==ct.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function g(v,S,L,N){let B={},X=S.attributes,F=0,Y=L.getAttributes();for(let V in Y)if(Y[V].location>=0){let nt=X[V];nt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor));let ct={};ct.attribute=nt,nt&&nt.data&&(ct.data=nt.data),B[V]=ct,F++}s.attributes=B,s.attributesNum=F,s.index=N}function y(){let v=s.newAttributes;for(let S=0,L=v.length;S<L;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){let L=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;L[v]=1,N[v]===0&&(r.enableVertexAttribArray(v),N[v]=1),B[v]!==S&&(r.vertexAttribDivisor(v,S),B[v]=S)}function x(){let v=s.newAttributes,S=s.enabledAttributes;for(let L=0,N=S.length;L<N;L++)S[L]!==v[L]&&(r.disableVertexAttribArray(L),S[L]=0)}function _(v,S,L,N,B,X,F){F===!0?r.vertexAttribIPointer(v,S,L,B,X):r.vertexAttribPointer(v,S,L,N,B,X)}function M(v,S,L,N){y();let B=N.attributes,X=L.getAttributes(),F=S.defaultAttributeValues;for(let Y in X){let V=X[Y];if(V.location>=0){let st=B[Y];if(st===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){let nt=st.normalized,ct=st.itemSize,Ut=t.get(st);if(Ut===void 0)continue;let Bt=Ut.buffer,O=Ut.type,j=Ut.bytesPerElement,ht=O===r.INT||O===r.UNSIGNED_INT||st.gpuType===xc;if(st.isInterleavedBufferAttribute){let at=st.data,Tt=at.stride,At=st.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot,at.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)p(V.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Ot=0;Ot<V.locationSize;Ot++)_(V.location+Ot,ct/V.locationSize,O,nt,Tt*j,(At+ct/V.locationSize*Ot)*j,ht)}else{if(st.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,st.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let at=0;at<V.locationSize;at++)_(V.location+at,ct/V.locationSize,O,nt,ct*j,ct/V.locationSize*at*j,ht)}}else if(F!==void 0){let nt=F[Y];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(V.location,nt);break;case 3:r.vertexAttrib3fv(V.location,nt);break;case 4:r.vertexAttrib4fv(V.location,nt);break;default:r.vertexAttrib1fv(V.location,nt)}}}}x()}function C(){P();for(let v in i){let S=i[v];for(let L in S){let N=S[L];for(let B in N)h(N[B].object),delete N[B];delete S[L]}delete i[v]}}function T(v){if(i[v.id]===void 0)return;let S=i[v.id];for(let L in S){let N=S[L];for(let B in N)h(N[B].object),delete N[B];delete S[L]}delete i[v.id]}function A(v){for(let S in i){let L=i[S];if(L[v.id]===void 0)continue;let N=L[v.id];for(let B in N)h(N[B].object),delete N[B];delete L[v.id]}}function P(){k(),a=!0,s!==n&&(s=n,c(s.object))}function k(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function A0(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<d.length;y++)e.update(g,i,d[y])}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R0(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==yi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let P=A===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ui&&!P)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function C0(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Li,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!n||g===null||g.length===0||s&&!p)s?h(null):c();else{let x=s?0:i,_=x*4,M=m.clippingState||null;l.value=M,M=h(g,d,_,f);for(let C=0;C!==_;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=f;_!==y;++_,M+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function P0(r){let t=new WeakMap;function e(a,o){return o===Qo?a.mapping=cs:o===tl&&(a.mapping=hs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Qo||o===tl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ul(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var ha=class extends la{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,Ch=[.125,.215,.35,.446,.526,.582],bn=20,Io=new ha,Ph=new wt,Lo=null,Do=0,Uo=0,No=!1,_n=(1+Math.sqrt(5))/2,Kn=1/_n,Ih=[new b(-_n,Kn,0),new b(_n,Kn,0),new b(-Kn,0,_n),new b(Kn,0,_n),new b(0,_n,-Kn),new b(0,_n,Kn),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Do,Uo),this._renderer.xr.enabled=No,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Ks,format:yi,colorSpace:sn,depthBuffer:!1},n=Lh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(s)),this._blurMaterial=L0(s,t,e)}return n}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,i,n){let o=new Pe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ph),h.toneMapping=Qi,h.autoClear=!1;let f=new Se({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new kt(new ye,f),y=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,y=!0):(f.color.copy(Ph),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;Ir(n,x*_,m>2?_:0,_,_),h.setRenderTarget(n),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===cs||t.mapping===hs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Io)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ih[(n-s-1)%Ih.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*bn-1),y=s/g,p=isFinite(s)?1+Math.floor(h*y):bn;p>bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bn}`);let m=[],x=0;for(let A=0;A<bn;++A){let P=A/y,k=Math.exp(-P*P/2);m.push(k),A===0?x+=k:A<p&&(x+=2*k)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let M=this._sizeLods[n],C=3*M*(n>_-is?n-_+is:0),T=4*(this._cubeSize-M);Ir(e,C,T,3*M,2*M),l.setRenderTarget(e),l.render(u,Io)}};function I0(r){let t=[],e=[],i=[],n=r,s=r-is+1+Ch.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>r-is?l=Ch[a-r+is-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,p=2,m=1,x=new Float32Array(y*g*f),_=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,P=T>2?0:-1,k=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(k,y*g*T),_.set(d,p*g*T);let v=[T,T,T,T,T,T];M.set(v,m*g*T)}let C=new re;C.setAttribute("position",new ue(x,y)),C.setAttribute("uv",new ue(_,p)),C.setAttribute("faceIndex",new ue(M,m)),t.push(C),n>is&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Lh(r,t,e){let i=new Fi(r,t,e);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ir(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function L0(r,t,e){let i=new Float32Array(bn),n=new b(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Dh(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Uh(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function D0(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Qo||l===tl,h=l===cs||l===hs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ua(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new ua(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function U0(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Jr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function N0(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let _=0,M=x.length;_<M;_+=3){let C=x[_+0],T=x[_+1],A=x[_+2];d.push(C,T,T,A,A,C)}}else if(g!==void 0){let x=g.array;y=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){let C=_+0,T=_+1,A=_+2;d.push(C,T,T,A,A,C)}}else return;let p=new(Eu(d)?oa:aa)(d,1);p.version=y;let m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function k0(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),e.update(f,i,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,d*a,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function u(d,f,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,y,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];for(let x=0;x<y.length;x++)e.update(m,i,y[x])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function z0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function F0(r,t,e){let i=new WeakMap,n=new ge;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let k=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let M=o.attributes.position.count*_,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*C*4*u),A=new sa(T,M,C,u);A.type=Ui,A.needsUpdate=!0;let P=_*4;for(let v=0;v<u;v++){let S=p[v],L=m[v],N=x[v],B=M*C*4*v;for(let X=0;X<S.count;X++){let F=X*P;f===!0&&(n.fromBufferAttribute(S,X),T[B+F+0]=n.x,T[B+F+1]=n.y,T[B+F+2]=n.z,T[B+F+3]=0),g===!0&&(n.fromBufferAttribute(L,X),T[B+F+4]=n.x,T[B+F+5]=n.y,T[B+F+6]=n.z,T[B+F+7]=0),y===!0&&(n.fromBufferAttribute(N,X),T[B+F+8]=n.x,T[B+F+9]=n.y,T[B+F+10]=n.z,T[B+F+11]=N.itemSize===4?n.w:1)}}d={count:u,texture:A,size:new lt(M,C)},i.set(o,d),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function B0(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var da=class extends Qe{constructor(t,e,i,n,s,a,o,l,c,h=ss){if(h!==ss&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ss&&(i=En),i===void 0&&h===ds&&(i=us),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:si,this.minFilter=l!==void 0?l:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cu=new Qe,Nh=new da(1,1),Pu=new sa,Iu=new Ll,Lu=new ca,kh=[],zh=[],Fh=new Float32Array(16),Bh=new Float32Array(9),Oh=new Float32Array(4);function Ms(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=kh[n];if(s===void 0&&(s=new Float32Array(n),kh[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function we(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ee(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Pa(r,t){let e=zh[t];e===void 0&&(e=new Int32Array(t),zh[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function O0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function H0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2fv(this.addr,t),Ee(e,t)}}function V0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;r.uniform3fv(this.addr,t),Ee(e,t)}}function G0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4fv(this.addr,t),Ee(e,t)}}function W0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Oh.set(i),r.uniformMatrix2fv(this.addr,!1,Oh),Ee(e,i)}}function X0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Bh.set(i),r.uniformMatrix3fv(this.addr,!1,Bh),Ee(e,i)}}function q0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;Fh.set(i),r.uniformMatrix4fv(this.addr,!1,Fh),Ee(e,i)}}function Y0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function $0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2iv(this.addr,t),Ee(e,t)}}function Z0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3iv(this.addr,t),Ee(e,t)}}function J0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4iv(this.addr,t),Ee(e,t)}}function K0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function j0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2uiv(this.addr,t),Ee(e,t)}}function Q0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3uiv(this.addr,t),Ee(e,t)}}function tg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4uiv(this.addr,t),Ee(e,t)}}function eg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Nh.compareFunction=wu,s=Nh):s=Cu,e.setTexture2D(t||s,n)}function ig(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Iu,n)}function ng(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Lu,n)}function sg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Pu,n)}function rg(r){switch(r){case 5126:return O0;case 35664:return H0;case 35665:return V0;case 35666:return G0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return K0;case 36294:return j0;case 36295:return Q0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return sg}}function ag(r,t){r.uniform1fv(this.addr,t)}function og(r,t){let e=Ms(t,this.size,2);r.uniform2fv(this.addr,e)}function lg(r,t){let e=Ms(t,this.size,3);r.uniform3fv(this.addr,e)}function cg(r,t){let e=Ms(t,this.size,4);r.uniform4fv(this.addr,e)}function hg(r,t){let e=Ms(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ug(r,t){let e=Ms(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function dg(r,t){let e=Ms(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function fg(r,t){r.uniform1iv(this.addr,t)}function pg(r,t){r.uniform2iv(this.addr,t)}function mg(r,t){r.uniform3iv(this.addr,t)}function gg(r,t){r.uniform4iv(this.addr,t)}function yg(r,t){r.uniform1uiv(this.addr,t)}function xg(r,t){r.uniform2uiv(this.addr,t)}function vg(r,t){r.uniform3uiv(this.addr,t)}function _g(r,t){r.uniform4uiv(this.addr,t)}function Mg(r,t,e){let i=this.cache,n=t.length,s=Pa(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Cu,s[a])}function bg(r,t,e){let i=this.cache,n=t.length,s=Pa(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Iu,s[a])}function Sg(r,t,e){let i=this.cache,n=t.length,s=Pa(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Lu,s[a])}function wg(r,t,e){let i=this.cache,n=t.length,s=Pa(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Pu,s[a])}function Eg(r){switch(r){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return yg;case 36294:return xg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return wg}}var Nl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}},kl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}},zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},ko=/(\w+)(\])?(\[|\.)?/g;function Hh(r,t){r.seq.push(t),r.map[t.id]=t}function Tg(r,t,e){let i=r.name,n=i.length;for(ko.lastIndex=0;;){let s=ko.exec(i),a=ko.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Hh(e,c===void 0?new Nl(o,r,t):new kl(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new zl(o),Hh(e,u)),e=u}}}var os=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Tg(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Vh(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Ag=37297,Rg=0;function Cg(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Pg(r){let t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(r),i;switch(t===e?i="":t===ta&&e===Qr?i="LinearDisplayP3ToLinearSRGB":t===Qr&&e===ta&&(i="LinearSRGBToLinearDisplayP3"),r){case sn:case Ca:return[i,"LinearTransferOETF"];case ze:case wc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Gh(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Cg(r.getShaderSource(t),a)}else return n}function Ig(r,t){let e=Pg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lg(r,t){let e;switch(t){case Hd:e="Linear";break;case Vd:e="Reinhard";break;case Gd:e="Cineon";break;case Wd:e="ACESFilmic";break;case qd:e="AgX";break;case yc:e="Neutral";break;case Xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lr=new b;function Dg(){ee.getLuminanceCoefficients(Lr);let r=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Ng(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kg(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function zs(r){return r!==""}function Wh(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(r){return r.replace(zg,Bg)}var Fg=new Map;function Bg(r,t){let e=zt[t];if(e===void 0){let i=Fg.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fl(e)}var Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(r){return r.replace(Og,Hg)}function Hg(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Yh(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Vg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===gc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Xg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case Bd:t="ENVMAP_BLENDING_MIX";break;case Od:t="ENVMAP_BLENDING_ADD";break}return t}function qg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Yg(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Vg(e),c=Gg(e),h=Wg(e),u=Xg(e),d=qg(e),f=Ug(e),g=Ng(s),y=n.createProgram(),p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`)):(p=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),m=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?zt.tonemapping_pars_fragment:"",e.toneMapping!==Qi?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Ig("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),a=Fl(a),a=Wh(a,e),a=Xh(a,e),o=Fl(o),o=Wh(o,e),o=Xh(o,e),a=qh(a),o=qh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+p+a,M=x+m+o,C=Vh(n,n.VERTEX_SHADER,_),T=Vh(n,n.FRAGMENT_SHADER,M);n.attachShader(y,C),n.attachShader(y,T),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function A(S){if(r.debug.checkShaderErrors){let L=n.getProgramInfoLog(y).trim(),N=n.getShaderInfoLog(C).trim(),B=n.getShaderInfoLog(T).trim(),X=!0,F=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,y,C,T);else{let Y=Gh(n,C,"vertex"),V=Gh(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+L+`
`+Y+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||B==="")&&(F=!1);F&&(S.diagnostics={runnable:X,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:B,prefix:m}})}n.deleteShader(C),n.deleteShader(T),P=new os(n,y),k=kg(n,y)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let k;this.getAttributes=function(){return k===void 0&&A(this),k};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(y,Ag)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var $g=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ol(t),e.set(t,i)),i}},Ol=class{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}};function Zg(r,t,e,i,n,s,a){let o=new ra,l=new Bl,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.reverseDepthBuffer,f=n.vertexTextures,g=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,L,N,B){let X=N.fog,F=B.geometry,Y=v.isMeshStandardMaterial?N.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||Y),st=V&&V.mapping===Ra?V.image.height:null,nt=y[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ct=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ut=ct!==void 0?ct.length:0,Bt=0;F.morphAttributes.position!==void 0&&(Bt=1),F.morphAttributes.normal!==void 0&&(Bt=2),F.morphAttributes.color!==void 0&&(Bt=3);let O,j,ht,at;if(nt){let Ge=Mi[nt];O=Ge.vertexShader,j=Ge.fragmentShader}else O=v.vertexShader,j=v.fragmentShader,l.update(v),ht=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);let Tt=r.getRenderTarget(),At=B.isInstancedMesh===!0,Ot=B.isBatchedMesh===!0,Wt=!!v.map,Ht=!!v.matcap,I=!!V,$e=!!v.aoMap,Xt=!!v.lightMap,$t=!!v.bumpMap,Pt=!!v.normalMap,le=!!v.displacementMap,Dt=!!v.emissiveMap,R=!!v.metalnessMap,w=!!v.roughnessMap,H=v.anisotropy>0,Z=v.clearcoat>0,Q=v.dispersion>0,$=v.iridescence>0,bt=v.sheen>0,ot=v.transmission>0,mt=H&&!!v.anisotropyMap,Zt=Z&&!!v.clearcoatMap,et=Z&&!!v.clearcoatNormalMap,gt=Z&&!!v.clearcoatRoughnessMap,It=$&&!!v.iridescenceMap,Lt=$&&!!v.iridescenceThicknessMap,yt=bt&&!!v.sheenColorMap,qt=bt&&!!v.sheenRoughnessMap,Nt=!!v.specularMap,oe=!!v.specularColorMap,D=!!v.specularIntensityMap,ft=ot&&!!v.transmissionMap,q=ot&&!!v.thicknessMap,J=!!v.gradientMap,ut=!!v.alphaMap,pt=v.alphaTest>0,Yt=!!v.alphaHash,Me=!!v.extensions,Ve=Qi;v.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ve=r.toneMapping);let Kt={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:O,fragmentShader:j,defines:v.defines,customVertexShaderID:ht,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:sn,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:Ht,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:st,aoMap:$e,lightMap:Xt,bumpMap:$t,normalMap:Pt,displacementMap:f&&le,emissiveMap:Dt,normalMapObjectSpace:Pt&&v.normalMapType===Jd,normalMapTangentSpace:Pt&&v.normalMapType===Su,metalnessMap:R,roughnessMap:w,anisotropy:H,anisotropyMap:mt,clearcoat:Z,clearcoatMap:Zt,clearcoatNormalMap:et,clearcoatRoughnessMap:gt,dispersion:Q,iridescence:$,iridescenceMap:It,iridescenceThicknessMap:Lt,sheen:bt,sheenColorMap:yt,sheenRoughnessMap:qt,specularMap:Nt,specularColorMap:oe,specularIntensityMap:D,transmission:ot,transmissionMap:ft,thicknessMap:q,gradientMap:J,opaque:v.transparent===!1&&v.blending===ns&&v.alphaToCoverage===!1,alphaMap:ut,alphaTest:pt,alphaHash:Yt,combine:v.combine,mapUv:Wt&&p(v.map.channel),aoMapUv:$e&&p(v.aoMap.channel),lightMapUv:Xt&&p(v.lightMap.channel),bumpMapUv:$t&&p(v.bumpMap.channel),normalMapUv:Pt&&p(v.normalMap.channel),displacementMapUv:le&&p(v.displacementMap.channel),emissiveMapUv:Dt&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:mt&&p(v.anisotropyMap.channel),clearcoatMapUv:Zt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:qt&&p(v.sheenRoughnessMap.channel),specularMapUv:Nt&&p(v.specularMap.channel),specularColorMapUv:oe&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:ft&&p(v.transmissionMap.channel),thicknessMapUv:q&&p(v.thicknessMap.channel),alphaMapUv:ut&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pt||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Wt||ut),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fe,flipSided:v.side===We,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(S,v),M(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){let S=y[v.type],L;if(S){let N=Mi[S];L=Bf.clone(N.uniforms)}else L=v.uniforms;return L}function T(v,S){let L;for(let N=0,B=h.length;N<B;N++){let X=h[N];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Yg(r,S,v,s),h.push(L)),L}function A(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:k}}function Jg(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Kg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function $h(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Zh(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,y,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=p),t++,m}function o(u,d,f,g,y,p){let m=a(u,d,f,g,y,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,g,y,p){let m=a(u,d,f,g,y,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Kg),i.length>1&&i.sort(d||$h),n.length>1&&n.sort(d||$h)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function jg(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new Zh,r.set(i,[a])):n>=s.length?(a=new Zh,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Qg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new wt};break;case"SpotLight":e={position:new b,direction:new b,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new b,halfWidth:new b,halfHeight:new b};break}return r[t.id]=e,e}}}function ty(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var ey=0;function iy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ny(r){let t=new Qg,e=ty(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let n=new b,s=new se,a=new se;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,x=0,_=0,M=0,C=0,T=0,A=0;c.sort(iy);for(let k=0,v=c.length;k<v;k++){let S=c[k],L=S.color,N=S.intensity,B=S.distance,X=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=L.r*N,u+=L.g*N,d+=L.b*N;else if(S.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(S.sh.coefficients[F],N);A++}else if(S.isDirectionalLight){let F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let Y=S.shadow,V=e.get(S);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=S.shadow.matrix,x++}i.directional[f]=F,f++}else if(S.isSpotLight){let F=t.get(S);F.position.setFromMatrixPosition(S.matrixWorld),F.color.copy(L).multiplyScalar(N),F.distance=B,F.coneCos=Math.cos(S.angle),F.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),F.decay=S.decay,i.spot[y]=F;let Y=S.shadow;if(S.map&&(i.spotLightMap[C]=S.map,C++,Y.updateMatrices(S),S.castShadow&&T++),i.spotLightMatrix[y]=Y.matrix,S.castShadow){let V=e.get(S);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=X,M++}y++}else if(S.isRectAreaLight){let F=t.get(S);F.color.copy(L).multiplyScalar(N),F.halfWidth.set(S.width*.5,0,0),F.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=F,p++}else if(S.isPointLight){let F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),F.distance=S.distance,F.decay=S.decay,S.castShadow){let Y=S.shadow,V=e.get(S);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=S.shadow.matrix,_++}i.point[g]=F,g++}else if(S.isHemisphereLight){let F=t.get(S);F.skyColor.copy(S.color).multiplyScalar(N),F.groundColor.copy(S.groundColor).multiplyScalar(N),i.hemi[m]=F,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==_||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=y,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=_,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=A,i.version=ey++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let _=c[m];if(_.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),u++}else if(_.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(_.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:i}}function Jh(r){let t=new ny(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function sy(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new Jh(r),t.set(n,[o])):s>=a.length?(o=new Jh(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Hl=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vl=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
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
}`;function oy(r,t,e){let i=new qs,n=new lt,s=new lt,a=new ge,o=new Hl({depthPacking:Zd}),l=new Vl,c={},h=e.maxTextureSize,u={[tn]:We,[We]:tn,[Fe]:Fe},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:ry,fragmentShader:ay}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new re;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new kt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let m=this.type;this.render=function(T,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let k=r.getRenderTarget(),v=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),L=r.state;L.setBlending(ji),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=m!==Ii&&this.type===Ii,B=m===Ii&&this.type!==Ii;for(let X=0,F=T.length;X<F;X++){let Y=T[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let st=V.getFrameExtents();if(n.multiply(st),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/st.x),n.x=s.x*st.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/st.y),n.y=s.y*st.y,V.mapSize.y=s.y)),V.map===null||N===!0||B===!0){let ct=this.type!==Ii?{minFilter:si,magFilter:si}:{};V.map!==null&&V.map.dispose(),V.map=new Fi(n.x,n.y,ct),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let nt=V.getViewportCount();for(let ct=0;ct<nt;ct++){let Ut=V.getViewport(ct);a.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),L.viewport(a),V.updateMatrices(Y,ct),i=V.getFrustum(),M(A,P,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Ii&&x(V,P),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(k,v,S)};function x(T,A){let P=t.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fi(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,P,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,P,f,y,null)}function _(T,A,P,k){let v=null,S=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)v=S;else if(v=P.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=v.uuid,N=A.uuid,B=c[L];B===void 0&&(B={},c[L]=B);let X=B[N];X===void 0&&(X=v.clone(),B[N]=X,A.addEventListener("dispose",C)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,k===Ii?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let L=r.properties.get(v);L.light=P}return v}function M(T,A,P,k,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Ii)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let N=t.update(T),B=T.material;if(Array.isArray(B)){let X=N.groups;for(let F=0,Y=X.length;F<Y;F++){let V=X[F],st=B[V.materialIndex];if(st&&st.visible){let nt=_(T,st,k,v);T.onBeforeShadow(r,T,A,P,N,nt,V),r.renderBufferDirect(P,null,N,nt,T,V),T.onAfterShadow(r,T,A,P,N,nt,V)}}}else if(B.visible){let X=_(T,B,k,v);T.onBeforeShadow(r,T,A,P,N,X,null),r.renderBufferDirect(P,null,N,X,T,null),T.onAfterShadow(r,T,A,P,N,X,null)}}let L=T.children;for(let N=0,B=L.length;N<B;N++)M(L[N],A,P,k,v)}function C(T){T.target.removeEventListener("dispose",C);for(let P in c){let k=c[P],v=T.target.uuid;v in k&&(k[v].dispose(),delete k[v])}}}var ly={[qo]:Yo,[$o]:Ko,[Zo]:jo,[ls]:Jo,[Yo]:qo,[Ko]:$o,[jo]:Zo,[Jo]:ls};function cy(r){function t(){let D=!1,ft=new ge,q=null,J=new ge(0,0,0,0);return{setMask:function(ut){q!==ut&&!D&&(r.colorMask(ut,ut,ut,ut),q=ut)},setLocked:function(ut){D=ut},setClear:function(ut,pt,Yt,Me,Ve){Ve===!0&&(ut*=Me,pt*=Me,Yt*=Me),ft.set(ut,pt,Yt,Me),J.equals(ft)===!1&&(r.clearColor(ut,pt,Yt,Me),J.copy(ft))},reset:function(){D=!1,q=null,J.set(-1,0,0,0)}}}function e(){let D=!1,ft=!1,q=null,J=null,ut=null;return{setReversed:function(pt){ft=pt},setTest:function(pt){pt?ht(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(pt){q!==pt&&!D&&(r.depthMask(pt),q=pt)},setFunc:function(pt){if(ft&&(pt=ly[pt]),J!==pt){switch(pt){case qo:r.depthFunc(r.NEVER);break;case Yo:r.depthFunc(r.ALWAYS);break;case $o:r.depthFunc(r.LESS);break;case ls:r.depthFunc(r.LEQUAL);break;case Zo:r.depthFunc(r.EQUAL);break;case Jo:r.depthFunc(r.GEQUAL);break;case Ko:r.depthFunc(r.GREATER);break;case jo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=pt}},setLocked:function(pt){D=pt},setClear:function(pt){ut!==pt&&(r.clearDepth(pt),ut=pt)},reset:function(){D=!1,q=null,J=null,ut=null}}}function i(){let D=!1,ft=null,q=null,J=null,ut=null,pt=null,Yt=null,Me=null,Ve=null;return{setTest:function(Kt){D||(Kt?ht(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(Kt){ft!==Kt&&!D&&(r.stencilMask(Kt),ft=Kt)},setFunc:function(Kt,Ge,Ei){(q!==Kt||J!==Ge||ut!==Ei)&&(r.stencilFunc(Kt,Ge,Ei),q=Kt,J=Ge,ut=Ei)},setOp:function(Kt,Ge,Ei){(pt!==Kt||Yt!==Ge||Me!==Ei)&&(r.stencilOp(Kt,Ge,Ei),pt=Kt,Yt=Ge,Me=Ei)},setLocked:function(Kt){D=Kt},setClear:function(Kt){Ve!==Kt&&(r.clearStencil(Kt),Ve=Kt)},reset:function(){D=!1,ft=null,q=null,J=null,ut=null,pt=null,Yt=null,Me=null,Ve=null}}}let n=new t,s=new e,a=new i,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,p=null,m=null,x=null,_=null,M=null,C=null,T=new wt(0,0,0),A=0,P=!1,k=null,v=null,S=null,L=null,N=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,F=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=F>=1):Y.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=F>=2);let V=null,st={},nt=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),Ut=new ge().fromArray(nt),Bt=new ge().fromArray(ct);function O(D,ft,q,J){let ut=new Uint8Array(4),pt=r.createTexture();r.bindTexture(D,pt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<q;Yt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(ft+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return pt}let j={};j[r.TEXTURE_2D]=O(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=O(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=O(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=O(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ht(r.DEPTH_TEST),s.setFunc(ls),Xt(!1),$t(ih),ht(r.CULL_FACE),I(ji);function ht(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function at(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function Tt(D,ft){return h[D]!==ft?(r.bindFramebuffer(D,ft),h[D]=ft,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ft),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function At(D,ft){let q=d,J=!1;if(D){q=u.get(ft),q===void 0&&(q=[],u.set(ft,q));let ut=D.textures;if(q.length!==ut.length||q[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Yt=ut.length;pt<Yt;pt++)q[pt]=r.COLOR_ATTACHMENT0+pt;q.length=ut.length,J=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,J=!0);J&&r.drawBuffers(q)}function Ot(D){return f!==D?(r.useProgram(D),f=D,!0):!1}let Wt={[Mn]:r.FUNC_ADD,[bd]:r.FUNC_SUBTRACT,[Sd]:r.FUNC_REVERSE_SUBTRACT};Wt[wd]=r.MIN,Wt[Ed]=r.MAX;let Ht={[Td]:r.ZERO,[Ad]:r.ONE,[Rd]:r.SRC_COLOR,[Wo]:r.SRC_ALPHA,[Ud]:r.SRC_ALPHA_SATURATE,[Ld]:r.DST_COLOR,[Pd]:r.DST_ALPHA,[Cd]:r.ONE_MINUS_SRC_COLOR,[Xo]:r.ONE_MINUS_SRC_ALPHA,[Dd]:r.ONE_MINUS_DST_COLOR,[Id]:r.ONE_MINUS_DST_ALPHA,[Nd]:r.CONSTANT_COLOR,[kd]:r.ONE_MINUS_CONSTANT_COLOR,[zd]:r.CONSTANT_ALPHA,[Fd]:r.ONE_MINUS_CONSTANT_ALPHA};function I(D,ft,q,J,ut,pt,Yt,Me,Ve,Kt){if(D===ji){g===!0&&(at(r.BLEND),g=!1);return}if(g===!1&&(ht(r.BLEND),g=!0),D!==Md){if(D!==y||Kt!==P){if((p!==Mn||_!==Mn)&&(r.blendEquation(r.FUNC_ADD),p=Mn,_=Mn),Kt)switch(D){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nh:r.blendFunc(r.ONE,r.ONE);break;case sh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,x=null,M=null,C=null,T.set(0,0,0),A=0,y=D,P=Kt}return}ut=ut||ft,pt=pt||q,Yt=Yt||J,(ft!==p||ut!==_)&&(r.blendEquationSeparate(Wt[ft],Wt[ut]),p=ft,_=ut),(q!==m||J!==x||pt!==M||Yt!==C)&&(r.blendFuncSeparate(Ht[q],Ht[J],Ht[pt],Ht[Yt]),m=q,x=J,M=pt,C=Yt),(Me.equals(T)===!1||Ve!==A)&&(r.blendColor(Me.r,Me.g,Me.b,Ve),T.copy(Me),A=Ve),y=D,P=!1}function $e(D,ft){D.side===Fe?at(r.CULL_FACE):ht(r.CULL_FACE);let q=D.side===We;ft&&(q=!q),Xt(q),D.blending===ns&&D.transparent===!1?I(ji):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),n.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){k!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),k=D)}function $t(D){D!==vd?(ht(r.CULL_FACE),D!==v&&(D===ih?r.cullFace(r.BACK):D===_d?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),v=D}function Pt(D){D!==S&&(X&&r.lineWidth(D),S=D)}function le(D,ft,q){D?(ht(r.POLYGON_OFFSET_FILL),(L!==ft||N!==q)&&(r.polygonOffset(ft,q),L=ft,N=q)):at(r.POLYGON_OFFSET_FILL)}function Dt(D){D?ht(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function R(D){D===void 0&&(D=r.TEXTURE0+B-1),V!==D&&(r.activeTexture(D),V=D)}function w(D,ft,q){q===void 0&&(V===null?q=r.TEXTURE0+B-1:q=V);let J=st[q];J===void 0&&(J={type:void 0,texture:void 0},st[q]=J),(J.type!==D||J.texture!==ft)&&(V!==q&&(r.activeTexture(q),V=q),r.bindTexture(D,ft||j[D]),J.type=D,J.texture=ft)}function H(){let D=st[V];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){Ut.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ut.copy(D))}function yt(D){Bt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Bt.copy(D))}function qt(D,ft){let q=l.get(ft);q===void 0&&(q=new WeakMap,l.set(ft,q));let J=q.get(D);J===void 0&&(J=r.getUniformBlockIndex(ft,D.name),q.set(D,J))}function Nt(D,ft){let J=l.get(ft).get(D);o.get(ft)!==J&&(r.uniformBlockBinding(ft,J,D.__bindingPointIndex),o.set(ft,J))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,st={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,p=null,m=null,x=null,_=null,M=null,C=null,T=new wt(0,0,0),A=0,P=!1,k=null,v=null,S=null,L=null,N=null,Ut.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}return{buffers:{color:n,depth:s,stencil:a},enable:ht,disable:at,bindFramebuffer:Tt,drawBuffers:At,useProgram:Ot,setBlending:I,setMaterial:$e,setFlipSided:Xt,setCullFace:$t,setLineWidth:Pt,setPolygonOffset:le,setScissorTest:Dt,activeTexture:R,bindTexture:w,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:gt,texImage3D:It,updateUBOMapping:qt,uniformBlockBinding:Nt,texStorage2D:Zt,texStorage3D:et,texSubImage2D:$,texSubImage3D:bt,compressedTexSubImage2D:ot,compressedTexSubImage3D:mt,scissor:Lt,viewport:yt,reset:oe}}function Kh(r,t,e,i){let n=hy(i);switch(e){case gu:return r*t;case xu:return r*t;case vu:return r*t*2;case _u:return r*t/n.components*n.byteLength;case Mc:return r*t/n.components*n.byteLength;case Mu:return r*t*2/n.components*n.byteLength;case bc:return r*t*2/n.components*n.byteLength;case yu:return r*t*3/n.components*n.byteLength;case yi:return r*t*4/n.components*n.byteLength;case Sc:return r*t*4/n.components*n.byteLength;case Xr:case qr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nl:case rl:return Math.max(r,16)*Math.max(t,8)/4;case il:case sl:return Math.max(r,8)*Math.max(t,8)/2;case al:case ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ml:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case bl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Zr:case Sl:case wl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case bu:case El:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Tl:case Al:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hy(r){switch(r){case zi:case fu:return{byteLength:1,components:1};case Gs:case pu:case Ks:return{byteLength:2,components:1};case vc:case _c:return{byteLength:2,components:4};case En:case xc:case Ui:return{byteLength:4,components:1};case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function uy(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):ia("canvas")}function y(R,w,H){let Z=1,Q=Dt(R);if((Q.width>H||Q.height>H)&&(Z=H/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Z*Q.width),bt=Math.floor(Z*Q.height);u===void 0&&(u=g($,bt));let ot=w?g($,bt):u;return ot.width=$,ot.height=bt,ot.getContext("2d").drawImage(R,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+bt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==si&&R.minFilter!==mi}function m(R){r.generateMipmap(R)}function x(R,w,H,Z,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=w;if(w===r.RED&&(H===r.FLOAT&&($=r.R32F),H===r.HALF_FLOAT&&($=r.R16F),H===r.UNSIGNED_BYTE&&($=r.R8)),w===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.R8UI),H===r.UNSIGNED_SHORT&&($=r.R16UI),H===r.UNSIGNED_INT&&($=r.R32UI),H===r.BYTE&&($=r.R8I),H===r.SHORT&&($=r.R16I),H===r.INT&&($=r.R32I)),w===r.RG&&(H===r.FLOAT&&($=r.RG32F),H===r.HALF_FLOAT&&($=r.RG16F),H===r.UNSIGNED_BYTE&&($=r.RG8)),w===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RG8UI),H===r.UNSIGNED_SHORT&&($=r.RG16UI),H===r.UNSIGNED_INT&&($=r.RG32UI),H===r.BYTE&&($=r.RG8I),H===r.SHORT&&($=r.RG16I),H===r.INT&&($=r.RG32I)),w===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGB8UI),H===r.UNSIGNED_SHORT&&($=r.RGB16UI),H===r.UNSIGNED_INT&&($=r.RGB32UI),H===r.BYTE&&($=r.RGB8I),H===r.SHORT&&($=r.RGB16I),H===r.INT&&($=r.RGB32I)),w===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGBA8UI),H===r.UNSIGNED_SHORT&&($=r.RGBA16UI),H===r.UNSIGNED_INT&&($=r.RGBA32UI),H===r.BYTE&&($=r.RGBA8I),H===r.SHORT&&($=r.RGBA16I),H===r.INT&&($=r.RGBA32I)),w===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),w===r.RGBA){let bt=Q?jr:ee.getTransfer(Z);H===r.FLOAT&&($=r.RGBA32F),H===r.HALF_FLOAT&&($=r.RGBA16F),H===r.UNSIGNED_BYTE&&($=bt===he?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(R,w){let H;return R?w===null||w===En||w===us?H=r.DEPTH24_STENCIL8:w===Ui?H=r.DEPTH32F_STENCIL8:w===Gs&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===En||w===us?H=r.DEPTH_COMPONENT24:w===Ui?H=r.DEPTH_COMPONENT32F:w===Gs&&(H=r.DEPTH_COMPONENT16),H}function M(R,w){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==si&&R.minFilter!==mi?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){let w=R.target;w.removeEventListener("dispose",C),A(w),w.isVideoTexture&&h.delete(w)}function T(R){let w=R.target;w.removeEventListener("dispose",T),k(w)}function A(R){let w=i.get(R);if(w.__webglInit===void 0)return;let H=R.source,Z=d.get(H);if(Z){let Q=Z[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(R),Object.keys(Z).length===0&&d.delete(H)}i.remove(R)}function P(R){let w=i.get(R);r.deleteTexture(w.__webglTexture);let H=R.source,Z=d.get(H);delete Z[w.__cacheKey],a.memory.textures--}function k(R){let w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let Q=0;Q<w.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(w.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)r.deleteFramebuffer(w.__webglFramebuffer[Z]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=R.textures;for(let Z=0,Q=H.length;Z<Q;Z++){let $=i.get(H[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(H[Z])}i.remove(R)}let v=0;function S(){v=0}function L(){let R=v;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),v+=1,R}function N(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function B(R,w){let H=i.get(R);if(R.isVideoTexture&&Pt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(H,R,w);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+w)}function X(R,w){let H=i.get(R);if(R.version>0&&H.__version!==R.version){Bt(H,R,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+w)}function F(R,w){let H=i.get(R);if(R.version>0&&H.__version!==R.version){Bt(H,R,w);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+w)}function Y(R,w){let H=i.get(R);if(R.version>0&&H.__version!==R.version){O(H,R,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+w)}let V={[Vs]:r.REPEAT,[Sn]:r.CLAMP_TO_EDGE,[el]:r.MIRRORED_REPEAT},st={[si]:r.NEAREST,[Yd]:r.NEAREST_MIPMAP_NEAREST,[dr]:r.NEAREST_MIPMAP_LINEAR,[mi]:r.LINEAR,[oo]:r.LINEAR_MIPMAP_NEAREST,[wn]:r.LINEAR_MIPMAP_LINEAR},nt={[Kd]:r.NEVER,[sf]:r.ALWAYS,[jd]:r.LESS,[wu]:r.LEQUAL,[Qd]:r.EQUAL,[nf]:r.GEQUAL,[tf]:r.GREATER,[ef]:r.NOTEQUAL};function ct(R,w){if(w.type===Ui&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===mi||w.magFilter===oo||w.magFilter===dr||w.magFilter===wn||w.minFilter===mi||w.minFilter===oo||w.minFilter===dr||w.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,st[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,st[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,nt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===si||w.minFilter!==dr&&w.minFilter!==wn||w.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ut(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));let Z=w.source,Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));let $=N(w);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[$].usedTimes++;let bt=Q[R.__cacheKey];bt!==void 0&&(Q[R.__cacheKey].usedTimes--,bt.usedTimes===0&&P(w)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return H}function Bt(R,w,H){let Z=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=r.TEXTURE_3D);let Q=Ut(R,w),$=w.source;e.bindTexture(Z,R.__webglTexture,r.TEXTURE0+H);let bt=i.get($);if($.version!==bt.__version||Q===!0){e.activeTexture(r.TEXTURE0+H);let ot=ee.getPrimaries(ee.workingColorSpace),mt=w.colorSpace===Ki?null:ee.getPrimaries(w.colorSpace),Zt=w.colorSpace===Ki||ot===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let et=y(w.image,!1,n.maxTextureSize);et=le(w,et);let gt=s.convert(w.format,w.colorSpace),It=s.convert(w.type),Lt=x(w.internalFormat,gt,It,w.colorSpace,w.isVideoTexture);ct(Z,w);let yt,qt=w.mipmaps,Nt=w.isVideoTexture!==!0,oe=bt.__version===void 0||Q===!0,D=$.dataReady,ft=M(w,et);if(w.isDepthTexture)Lt=_(w.format===ds,w.type),oe&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Lt,et.width,et.height,0,gt,It,null));else if(w.isDataTexture)if(qt.length>0){Nt&&oe&&e.texStorage2D(r.TEXTURE_2D,ft,Lt,qt[0].width,qt[0].height);for(let q=0,J=qt.length;q<J;q++)yt=qt[q],Nt?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,yt.width,yt.height,gt,It,yt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,yt.width,yt.height,0,gt,It,yt.data);w.generateMipmaps=!1}else Nt?(oe&&e.texStorage2D(r.TEXTURE_2D,ft,Lt,et.width,et.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,gt,It,et.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,et.width,et.height,0,gt,It,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Nt&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Lt,qt[0].width,qt[0].height,et.depth);for(let q=0,J=qt.length;q<J;q++)if(yt=qt[q],w.format!==yi)if(gt!==null)if(Nt){if(D)if(w.layerUpdates.size>0){let ut=Kh(yt.width,yt.height,w.format,w.type);for(let pt of w.layerUpdates){let Yt=yt.data.subarray(pt*ut/yt.data.BYTES_PER_ELEMENT,(pt+1)*ut/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,pt,yt.width,yt.height,1,gt,Yt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,et.depth,gt,yt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Lt,yt.width,yt.height,et.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,et.depth,gt,It,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Lt,yt.width,yt.height,et.depth,0,gt,It,yt.data)}else{Nt&&oe&&e.texStorage2D(r.TEXTURE_2D,ft,Lt,qt[0].width,qt[0].height);for(let q=0,J=qt.length;q<J;q++)yt=qt[q],w.format!==yi?gt!==null?Nt?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,yt.width,yt.height,gt,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,yt.width,yt.height,gt,It,yt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,yt.width,yt.height,0,gt,It,yt.data)}else if(w.isDataArrayTexture)if(Nt){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Lt,et.width,et.height,et.depth),D)if(w.layerUpdates.size>0){let q=Kh(et.width,et.height,w.format,w.type);for(let J of w.layerUpdates){let ut=et.data.subarray(J*q/et.data.BYTES_PER_ELEMENT,(J+1)*q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,gt,It,ut)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,It,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,gt,It,et.data);else if(w.isData3DTexture)Nt?(oe&&e.texStorage3D(r.TEXTURE_3D,ft,Lt,et.width,et.height,et.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,It,et.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,gt,It,et.data);else if(w.isFramebufferTexture){if(oe)if(Nt)e.texStorage2D(r.TEXTURE_2D,ft,Lt,et.width,et.height);else{let q=et.width,J=et.height;for(let ut=0;ut<ft;ut++)e.texImage2D(r.TEXTURE_2D,ut,Lt,q,J,0,gt,It,null),q>>=1,J>>=1}}else if(qt.length>0){if(Nt&&oe){let q=Dt(qt[0]);e.texStorage2D(r.TEXTURE_2D,ft,Lt,q.width,q.height)}for(let q=0,J=qt.length;q<J;q++)yt=qt[q],Nt?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,gt,It,yt):e.texImage2D(r.TEXTURE_2D,q,Lt,gt,It,yt);w.generateMipmaps=!1}else if(Nt){if(oe){let q=Dt(et);e.texStorage2D(r.TEXTURE_2D,ft,Lt,q.width,q.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,It,et)}else e.texImage2D(r.TEXTURE_2D,0,Lt,gt,It,et);p(w)&&m(Z),bt.__version=$.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function O(R,w,H){if(w.image.length!==6)return;let Z=Ut(R,w),Q=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+H);let $=i.get(Q);if(Q.version!==$.__version||Z===!0){e.activeTexture(r.TEXTURE0+H);let bt=ee.getPrimaries(ee.workingColorSpace),ot=w.colorSpace===Ki?null:ee.getPrimaries(w.colorSpace),mt=w.colorSpace===Ki||bt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Zt=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!Zt&&!et?gt[J]=y(w.image[J],!0,n.maxCubemapSize):gt[J]=et?w.image[J].image:w.image[J],gt[J]=le(w,gt[J]);let It=gt[0],Lt=s.convert(w.format,w.colorSpace),yt=s.convert(w.type),qt=x(w.internalFormat,Lt,yt,w.colorSpace),Nt=w.isVideoTexture!==!0,oe=$.__version===void 0||Z===!0,D=Q.dataReady,ft=M(w,It);ct(r.TEXTURE_CUBE_MAP,w);let q;if(Zt){Nt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,qt,It.width,It.height);for(let J=0;J<6;J++){q=gt[J].mipmaps;for(let ut=0;ut<q.length;ut++){let pt=q[ut];w.format!==yi?Lt!==null?Nt?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,pt.width,pt.height,Lt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,qt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,pt.width,pt.height,Lt,yt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,qt,pt.width,pt.height,0,Lt,yt,pt.data)}}}else{if(q=w.mipmaps,Nt&&oe){q.length>0&&ft++;let J=Dt(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,qt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Nt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Lt,yt,gt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,gt[J].width,gt[J].height,0,Lt,yt,gt[J].data);for(let ut=0;ut<q.length;ut++){let Yt=q[ut].image[J].image;Nt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Yt.width,Yt.height,Lt,yt,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,qt,Yt.width,Yt.height,0,Lt,yt,Yt.data)}}else{Nt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,yt,gt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,Lt,yt,gt[J]);for(let ut=0;ut<q.length;ut++){let pt=q[ut];Nt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Lt,yt,pt.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,qt,Lt,yt,pt.image[J])}}}p(w)&&m(r.TEXTURE_CUBE_MAP),$.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function j(R,w,H,Z,Q,$){let bt=s.convert(H.format,H.colorSpace),ot=s.convert(H.type),mt=x(H.internalFormat,bt,ot,H.colorSpace);if(!i.get(w).__hasExternalTextures){let et=Math.max(1,w.width>>$),gt=Math.max(1,w.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,mt,et,gt,w.depth,0,bt,ot,null):e.texImage2D(Q,$,mt,et,gt,0,bt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),$t(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,i.get(H).__webglTexture,0,Xt(w)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,i.get(H).__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(R,w,H){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){let Z=w.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,$=_(w.stencilBuffer,Q),bt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=Xt(w);$t(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,$,w.width,w.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,$,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,$,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,R)}else{let Z=w.textures;for(let Q=0;Q<Z.length;Q++){let $=Z[Q],bt=s.convert($.format,$.colorSpace),ot=s.convert($.type),mt=x($.internalFormat,bt,ot,$.colorSpace),Zt=Xt(w);H&&$t(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,mt,w.width,w.height):$t(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,mt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,mt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);let Z=i.get(w.depthTexture).__webglTexture,Q=Xt(w);if(w.depthTexture.format===ss)$t(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(w.depthTexture.format===ds)$t(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Tt(R){let w=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=Z}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");at(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=r.createRenderbuffer(),ht(w.__webglDepthbuffer[Z],R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ht(w.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function At(R,w,H){let Z=i.get(R);w!==void 0&&j(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Tt(R)}function Ot(R){let w=R.texture,H=i.get(R),Z=i.get(w);R.addEventListener("dispose",T);let Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=w.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ot]=[];for(let mt=0;mt<w.mipmaps.length;mt++)H.__webglFramebuffer[ot][mt]=r.createFramebuffer()}else H.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ot=0;ot<w.mipmaps.length;ot++)H.__webglFramebuffer[ot]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(bt)for(let ot=0,mt=Q.length;ot<mt;ot++){let Zt=i.get(Q[ot]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&$t(R)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){let mt=Q[ot];H.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ot]);let Zt=s.convert(mt.format,mt.colorSpace),et=s.convert(mt.type),gt=x(mt.internalFormat,Zt,et,mt.colorSpace,R.isXRRenderTarget===!0),It=Xt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,gt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,H.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ct(r.TEXTURE_CUBE_MAP,w);for(let ot=0;ot<6;ot++)if(w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)j(H.__webglFramebuffer[ot][mt],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,mt);else j(H.__webglFramebuffer[ot],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(w)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ot=0,mt=Q.length;ot<mt;ot++){let Zt=Q[ot],et=i.get(Zt);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),ct(r.TEXTURE_2D,Zt),j(H.__webglFramebuffer,R,Zt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),p(Zt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),ct(ot,w),w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)j(H.__webglFramebuffer[mt],R,w,r.COLOR_ATTACHMENT0,ot,mt);else j(H.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,ot,0);p(w)&&m(ot),e.unbindTexture()}R.depthBuffer&&Tt(R)}function Wt(R){let w=R.textures;for(let H=0,Z=w.length;H<Z;H++){let Q=w[H];if(p(Q)){let $=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,bt=i.get(Q).__webglTexture;e.bindTexture($,bt),m($),e.unbindTexture()}}}let Ht=[],I=[];function $e(R){if(R.samples>0){if($t(R)===!1){let w=R.textures,H=R.width,Z=R.height,Q=r.COLOR_BUFFER_BIT,$=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=i.get(R),ot=w.length>1;if(ot)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);let Zt=i.get(w[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Zt,0)}r.blitFramebuffer(0,0,H,Z,0,0,H,Z,Q,r.NEAREST),l===!0&&(Ht.length=0,I.length=0,Ht.push(r.COLOR_ATTACHMENT0+mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ht.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);let Zt=i.get(w[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Xt(R){return Math.min(n.maxSamples,R.samples)}function $t(R){let w=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pt(R){let w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function le(R,w){let H=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==sn&&H!==Ki&&(ee.getTransfer(H)===he?(Z!==yi||Q!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=S,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=F,this.setTextureCube=Y,this.rebindTextures=At,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=$t}function dy(r,t){function e(i,n=Ki){let s,a=ee.getTransfer(n);if(i===zi)return r.UNSIGNED_BYTE;if(i===vc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return r.UNSIGNED_SHORT_5_5_5_1;if(i===mu)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===fu)return r.BYTE;if(i===pu)return r.SHORT;if(i===Gs)return r.UNSIGNED_SHORT;if(i===xc)return r.INT;if(i===En)return r.UNSIGNED_INT;if(i===Ui)return r.FLOAT;if(i===Ks)return r.HALF_FLOAT;if(i===gu)return r.ALPHA;if(i===yu)return r.RGB;if(i===yi)return r.RGBA;if(i===xu)return r.LUMINANCE;if(i===vu)return r.LUMINANCE_ALPHA;if(i===ss)return r.DEPTH_COMPONENT;if(i===ds)return r.DEPTH_STENCIL;if(i===_u)return r.RED;if(i===Mc)return r.RED_INTEGER;if(i===Mu)return r.RG;if(i===bc)return r.RG_INTEGER;if(i===Sc)return r.RGBA_INTEGER;if(i===Xr||i===qr||i===Yr||i===$r)if(a===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===nl||i===sl||i===rl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ol||i===ll)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===al||i===ol)return a===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ll)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===yl||i===xl||i===vl||i===_l||i===Ml||i===bl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ul)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ml)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bl)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zr||i===Sl||i===wl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Zr)return a===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bu||i===El||i===Tl||i===Al)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===El)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Gl=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pe=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},fy={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,my=`
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

}`,Wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new Qe,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ti({vertexShader:py,fragmentShader:my,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xl=class extends en{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=new Wl,p=e.getContextAttributes(),m=null,x=null,_=[],M=[],C=new lt,T=null,A=new Pe;A.layers.enable(1),A.viewport=new ge;let P=new Pe;P.layers.enable(2),P.viewport=new ge;let k=[A,P],v=new Gl;v.layers.enable(1),v.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let j=_[O];return j===void 0&&(j=new Bs,_[O]=j),j.getTargetRaySpace()},this.getControllerGrip=function(O){let j=_[O];return j===void 0&&(j=new Bs,_[O]=j),j.getGripSpace()},this.getHand=function(O){let j=_[O];return j===void 0&&(j=new Bs,_[O]=j),j.getHandSpace()};function N(O){let j=M.indexOf(O.inputSource);if(j===-1)return;let ht=_[j];ht!==void 0&&(ht.update(O.inputSource,O.frame,c||a),ht.dispatchEvent({type:O.type,data:O.inputSource}))}function B(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",X);for(let O=0;O<_.length;O++){let j=M[O];j!==null&&(M[O]=null,_[O].disconnect(j))}S=null,L=null,y.reset(),t.setRenderTarget(m),f=null,d=null,u=null,n=null,x=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(O){if(n=O,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",B),n.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),n.renderState.layers===void 0){let j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,j),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Fi(f.framebufferWidth,f.framebufferHeight,{format:yi,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,ht=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=p.stencil?ds:ss,ht=p.stencil?us:En);let Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Tt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Fi(d.textureWidth,d.textureHeight,{format:yi,type:zi,depthTexture:new da(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Bt.setContext(n),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(O){for(let j=0;j<O.removed.length;j++){let ht=O.removed[j],at=M.indexOf(ht);at>=0&&(M[at]=null,_[at].disconnect(ht))}for(let j=0;j<O.added.length;j++){let ht=O.added[j],at=M.indexOf(ht);if(at===-1){for(let At=0;At<_.length;At++)if(At>=M.length){M.push(ht),at=At;break}else if(M[At]===null){M[At]=ht,at=At;break}if(at===-1)break}let Tt=_[at];Tt&&Tt.connect(ht)}}let F=new b,Y=new b;function V(O,j,ht){F.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(ht.matrixWorld);let at=F.distanceTo(Y),Tt=j.projectionMatrix.elements,At=ht.projectionMatrix.elements,Ot=Tt[14]/(Tt[10]-1),Wt=Tt[14]/(Tt[10]+1),Ht=(Tt[9]+1)/Tt[5],I=(Tt[9]-1)/Tt[5],$e=(Tt[8]-1)/Tt[0],Xt=(At[8]+1)/At[0],$t=Ot*$e,Pt=Ot*Xt,le=at/(-$e+Xt),Dt=le*-$e;if(j.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Dt),O.translateZ(le),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),Tt[10]===-1)O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let R=Ot+le,w=Wt+le,H=$t-Dt,Z=Pt+(at-Dt),Q=Ht*Wt/w*R,$=I*Wt/w*R;O.projectionMatrix.makePerspective(H,Z,Q,$,R,w),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function st(O,j){j===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(j.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(n===null)return;let j=O.near,ht=O.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(ht=y.depthFar)),v.near=P.near=A.near=j,v.far=P.far=A.far=ht,(S!==v.near||L!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,L=v.far);let at=O.parent,Tt=v.cameras;st(v,at);for(let At=0;At<Tt.length;At++)st(Tt[At],at);Tt.length===2?V(v,A,P):v.projectionMatrix.copy(A.projectionMatrix),nt(O,v,at)};function nt(O,j,ht){ht===null?O.matrix.copy(j.matrixWorld):(O.matrix.copy(ht.matrixWorld),O.matrix.invert(),O.matrix.multiply(j.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ws*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let ct=null;function Ut(O,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let at=!1;ht.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let At=0;At<ht.length;At++){let Ot=ht[At],Wt=null;if(f!==null)Wt=f.getViewport(Ot);else{let I=u.getViewSubImage(d,Ot);Wt=I.viewport,At===0&&(t.setRenderTargetTextures(x,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(x))}let Ht=k[At];Ht===void 0&&(Ht=new Pe,Ht.layers.enable(At),Ht.viewport=new ge,k[At]=Ht),Ht.matrix.fromArray(Ot.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ot.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),At===0&&(v.matrix.copy(Ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Ht)}let Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let At=u.getDepthInformation(ht[0]);At&&At.isValid&&At.texture&&y.init(t,At,n.renderState)}}for(let ht=0;ht<_.length;ht++){let at=M[ht],Tt=_[ht];at!==null&&Tt!==void 0&&Tt.update(at,j,c||a)}ct&&ct(O,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let Bt=new Ru;Bt.setAnimationLoop(Ut),this.setAnimationLoop=function(O){ct=O},this.dispose=function(){}}},vn=new ri,gy=new se;function yy(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Au(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,x,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),y(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===We&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===We&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,M=x.envMapRotation;_&&(p.envMap.value=_,vn.copy(M),vn.x*=-1,vn.y*=-1,vn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vn.y*=-1,vn.z*=-1),p.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(vn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function xy(r,t,e,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let M=_.program;i.uniformBlockBinding(x,M)}function c(x,_){let M=n[x.id];M===void 0&&(g(x),M=h(x),n[x.id]=M,x.addEventListener("dispose",p));let C=_.program;i.updateUBOMapping(x,C);let T=t.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function h(x){let _=u();x.__bindingPointIndex=_;let M=r.createBuffer(),C=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=n[x.id],M=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,A=M.length;T<A;T++){let P=Array.isArray(M[T])?M[T]:[M[T]];for(let k=0,v=P.length;k<v;k++){let S=P[k];if(f(S,T,k,C)===!0){let L=S.__offset,N=Array.isArray(S.value)?S.value:[S.value],B=0;for(let X=0;X<N.length;X++){let F=N[X],Y=y(F);typeof F=="number"||typeof F=="boolean"?(S.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,L+B,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=0,S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=0,S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=0):(F.toArray(S.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,_,M,C){let T=x.value,A=_+"_"+M;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(x){let _=x.uniforms,M=0,C=16;for(let A=0,P=_.length;A<P;A++){let k=Array.isArray(_[A])?_[A]:[_[A]];for(let v=0,S=k.length;v<S;v++){let L=k[v],N=Array.isArray(L.value)?L.value:[L.value];for(let B=0,X=N.length;B<X;B++){let F=N[B],Y=y(F),V=M%C,st=V%Y.boundary,nt=V+st;M+=st,nt!==0&&C-nt<Y.storage&&(M+=C-nt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=Y.storage}}}let T=M%C;return T>0&&(M+=C-T),x.__size=M,x.__cache={},this}function y(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){let _=x.target;_.removeEventListener("dispose",p);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function m(){for(let x in n)r.deleteBuffer(n[x]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}var fa=class{constructor(t={}){let{canvas:e=Mf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Qi,this.toneMappingExposure=1;let _=this,M=!1,C=0,T=0,A=null,P=-1,k=null,v=new ge,S=new ge,L=null,N=new wt(0),B=0,X=e.width,F=e.height,Y=1,V=null,st=null,nt=new ge(0,0,X,F),ct=new ge(0,0,X,F),Ut=!1,Bt=new qs,O=!1,j=!1,ht=new se,at=new se,Tt=new b,At=new ge,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Ht(){return A===null?Y:1}let I=i;function $e(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",pt,!1),I===null){let U="webgl2";if(I=$e(U,E),I===null)throw $e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xt,$t,Pt,le,Dt,R,w,H,Z,Q,$,bt,ot,mt,Zt,et,gt,It,Lt,yt,qt,Nt,oe,D;function ft(){Xt=new U0(I),Xt.init(),Nt=new dy(I,Xt),$t=new R0(I,Xt,t,Nt),Pt=new cy(I),$t.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),le=new z0(I),Dt=new Jg,R=new uy(I,Xt,Pt,Dt,$t,Nt,le),w=new P0(_),H=new D0(_),Z=new Wf(I),oe=new T0(I,Z),Q=new N0(I,Z,le,oe),$=new B0(I,Q,Z,le),Lt=new F0(I,$t,R),et=new C0(Dt),bt=new Zg(_,w,H,Xt,$t,oe,et),ot=new yy(_,Dt),mt=new jg,Zt=new sy(Xt),It=new E0(_,w,H,Pt,$,d,l),gt=new oy(_,$,$t),D=new xy(I,le,$t,Pt),yt=new A0(I,Xt,le),qt=new k0(I,Xt,le),le.programs=bt.programs,_.capabilities=$t,_.extensions=Xt,_.properties=Dt,_.renderLists=mt,_.shadowMap=gt,_.state=Pt,_.info=le}ft();let q=new Xl(_,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=Xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(X,F,!1))},this.getSize=function(E){return E.set(X,F)},this.setSize=function(E,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,F=U,e.width=Math.floor(E*Y),e.height=Math.floor(U*Y),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(X*Y,F*Y).floor()},this.setDrawingBufferSize=function(E,U,G){X=E,F=U,Y=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(nt)},this.setViewport=function(E,U,G,W){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,U,G,W),Pt.viewport(v.copy(nt).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,U,G,W){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,U,G,W),Pt.scissor(S.copy(ct).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(E){Pt.setScissorTest(Ut=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(E=!0,U=!0,G=!0){let W=0;if(E){let z=!1;if(A!==null){let it=A.texture.format;z=it===Sc||it===bc||it===Mc}if(z){let it=A.texture.type,dt=it===zi||it===En||it===Gs||it===us||it===vc||it===_c,xt=It.getClearColor(),_t=It.getClearAlpha(),Rt=xt.r,Ct=xt.g,St=xt.b;dt?(f[0]=Rt,f[1]=Ct,f[2]=St,f[3]=_t,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Rt,g[1]=Ct,g[2]=St,g[3]=_t,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),mt.dispose(),Zt.dispose(),Dt.dispose(),w.dispose(),H.dispose(),$.dispose(),oe.dispose(),D.dispose(),bt.dispose(),q.dispose(),q.removeEventListener("sessionstart",$c),q.removeEventListener("sessionend",Zc),fn.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=le.autoReset,U=gt.enabled,G=gt.autoUpdate,W=gt.needsUpdate,z=gt.type;ft(),le.autoReset=E,gt.enabled=U,gt.autoUpdate=G,gt.needsUpdate=W,gt.type=z}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){let U=E.target;U.removeEventListener("dispose",Yt),Me(U)}function Me(E){Ve(E),Dt.remove(E)}function Ve(E){let U=Dt.get(E).programs;U!==void 0&&(U.forEach(function(G){bt.releaseProgram(G)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,W,z,it){U===null&&(U=Ot);let dt=z.isMesh&&z.matrixWorld.determinant()<0,xt=md(E,U,G,W,z);Pt.setMaterial(W,dt);let _t=G.index,Rt=1;if(W.wireframe===!0){if(_t=Q.getWireframeAttribute(G),_t===void 0)return;Rt=2}let Ct=G.drawRange,St=G.attributes.position,ie=Ct.start*Rt,ce=(Ct.start+Ct.count)*Rt;it!==null&&(ie=Math.max(ie,it.start*Rt),ce=Math.min(ce,(it.start+it.count)*Rt)),_t!==null?(ie=Math.max(ie,0),ce=Math.min(ce,_t.count)):St!=null&&(ie=Math.max(ie,0),ce=Math.min(ce,St.count));let me=ce-ie;if(me<0||me===1/0)return;oe.setup(z,W,xt,G,_t);let Ze,Qt=yt;if(_t!==null&&(Ze=Z.get(_t),Qt=qt,Qt.setIndex(Ze)),z.isMesh)W.wireframe===!0?(Pt.setLineWidth(W.wireframeLinewidth*Ht()),Qt.setMode(I.LINES)):Qt.setMode(I.TRIANGLES);else if(z.isLine){let Et=W.linewidth;Et===void 0&&(Et=1),Pt.setLineWidth(Et*Ht()),z.isLineSegments?Qt.setMode(I.LINES):z.isLineLoop?Qt.setMode(I.LINE_LOOP):Qt.setMode(I.LINE_STRIP)}else z.isPoints?Qt.setMode(I.POINTS):z.isSprite&&Qt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Et=z._multiDrawStarts,Ce=z._multiDrawCounts,te=z._multiDrawCount,ui=_t?Z.get(_t).bytesPerElement:1,zn=Dt.get(W).currentProgram.getUniforms();for(let Je=0;Je<te;Je++)zn.setValue(I,"_gl_DrawID",Je),Qt.render(Et[Je]/ui,Ce[Je])}else if(z.isInstancedMesh)Qt.renderInstances(ie,me,z.count);else if(G.isInstancedBufferGeometry){let Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ce=Math.min(G.instanceCount,Et);Qt.renderInstances(ie,me,Ce)}else Qt.render(ie,me)};function Kt(E,U,G){E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,ur(E,U,G),E.side=tn,E.needsUpdate=!0,ur(E,U,G),E.side=Fe):ur(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),p=Zt.get(G),p.init(U),x.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let it=z.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){let xt=it[dt];Kt(xt,G,z),W.add(xt)}else Kt(it,G,z),W.add(it)}),x.pop(),p=null,W},this.compileAsync=function(E,U,G=null){let W=this.compile(E,U,G);return new Promise(z=>{function it(){if(W.forEach(function(dt){Dt.get(dt).currentProgram.isReady()&&W.delete(dt)}),W.size===0){z(E);return}setTimeout(it,10)}Xt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ge=null;function Ei(E){Ge&&Ge(E)}function $c(){fn.stop()}function Zc(){fn.start()}let fn=new Ru;fn.setAnimationLoop(Ei),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(E){Ge=E,q.setAnimationLoop(E),E===null?fn.stop():fn.start()},q.addEventListener("sessionstart",$c),q.addEventListener("sessionend",Zc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,A),p=Zt.get(E,x.length),p.init(U),x.push(p),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(at),j=this.localClippingEnabled,O=et.init(this.clippingPlanes,j),y=mt.get(E,m.length),y.init(),m.push(y),q.enabled===!0&&q.isPresenting===!0){let it=_.xr.getDepthSensingMesh();it!==null&&no(it,U,-1/0,_.sortObjects)}no(E,U,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(V,st),Wt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Wt&&It.addToRenderList(y,E),this.info.render.frame++,O===!0&&et.beginShadows();let G=p.state.shadowsArray;gt.render(G,E,U),O===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=y.opaque,z=y.transmissive;if(p.setupLights(),U.isArrayCamera){let it=U.cameras;if(z.length>0)for(let dt=0,xt=it.length;dt<xt;dt++){let _t=it[dt];Kc(W,z,E,_t)}Wt&&It.render(E);for(let dt=0,xt=it.length;dt<xt;dt++){let _t=it[dt];Jc(y,E,_t,_t.viewport)}}else z.length>0&&Kc(W,z,E,U),Wt&&It.render(E),Jc(y,E,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(_,E,U),oe.resetDefaultState(),P=-1,k=null,x.pop(),x.length>0?(p=x[x.length-1],O===!0&&et.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function no(E,U,G,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Bt.intersectsSprite(E)){W&&At.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);let dt=$.update(E),xt=E.material;xt.visible&&y.push(E,dt,xt,G,At.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Bt.intersectsObject(E))){let dt=$.update(E),xt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),At.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),At.copy(dt.boundingSphere.center)),At.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(xt)){let _t=dt.groups;for(let Rt=0,Ct=_t.length;Rt<Ct;Rt++){let St=_t[Rt],ie=xt[St.materialIndex];ie&&ie.visible&&y.push(E,dt,ie,G,At.z,St)}}else xt.visible&&y.push(E,dt,xt,G,At.z,null)}}let it=E.children;for(let dt=0,xt=it.length;dt<xt;dt++)no(it[dt],U,G,W)}function Jc(E,U,G,W){let z=E.opaque,it=E.transmissive,dt=E.transparent;p.setupLightsView(G),O===!0&&et.setGlobalState(_.clippingPlanes,G),W&&Pt.viewport(v.copy(W)),z.length>0&&hr(z,U,G),it.length>0&&hr(it,U,G),dt.length>0&&hr(dt,U,G),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Kc(E,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Fi(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Ks:zi,minFilter:wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let it=p.state.transmissionRenderTarget[W.id],dt=W.viewport||v;it.setSize(dt.z,dt.w);let xt=_.getRenderTarget();_.setRenderTarget(it),_.getClearColor(N),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&It.render(G);let _t=_.toneMapping;_.toneMapping=Qi;let Rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),O===!0&&et.setGlobalState(_.clippingPlanes,W),hr(E,G,W),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let St=0,ie=U.length;St<ie;St++){let ce=U[St],me=ce.object,Ze=ce.geometry,Qt=ce.material,Et=ce.group;if(Qt.side===Fe&&me.layers.test(W.layers)){let Ce=Qt.side;Qt.side=We,Qt.needsUpdate=!0,jc(me,G,W,Ze,Qt,Et),Qt.side=Ce,Qt.needsUpdate=!0,Ct=!0}}Ct===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}_.setRenderTarget(xt),_.setClearColor(N,B),Rt!==void 0&&(W.viewport=Rt),_.toneMapping=_t}function hr(E,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let z=0,it=E.length;z<it;z++){let dt=E[z],xt=dt.object,_t=dt.geometry,Rt=W===null?dt.material:W,Ct=dt.group;xt.layers.test(G.layers)&&jc(xt,U,G,_t,Rt,Ct)}}function jc(E,U,G,W,z,it){E.onBeforeRender(_,U,G,W,z,it),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,U,G,W,E,it),z.transparent===!0&&z.side===Fe&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,_.renderBufferDirect(G,U,W,z,E,it),z.side=tn,z.needsUpdate=!0,_.renderBufferDirect(G,U,W,z,E,it),z.side=Fe):_.renderBufferDirect(G,U,W,z,E,it),E.onAfterRender(_,U,G,W,z,it)}function ur(E,U,G){U.isScene!==!0&&(U=Ot);let W=Dt.get(E),z=p.state.lights,it=p.state.shadowsArray,dt=z.state.version,xt=bt.getParameters(E,z.state,it,U,G),_t=bt.getProgramCacheKey(xt),Rt=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?H:w).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",Yt),Rt=new Map,W.programs=Rt);let Ct=Rt.get(_t);if(Ct!==void 0){if(W.currentProgram===Ct&&W.lightsStateVersion===dt)return th(E,xt),Ct}else xt.uniforms=bt.getUniforms(E),E.onBeforeCompile(xt,_),Ct=bt.acquireProgram(xt,_t),Rt.set(_t,Ct),W.uniforms=xt.uniforms;let St=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=et.uniform),th(E,xt),W.needsLights=yd(E),W.lightsStateVersion=dt,W.needsLights&&(St.ambientLightColor.value=z.state.ambient,St.lightProbe.value=z.state.probe,St.directionalLights.value=z.state.directional,St.directionalLightShadows.value=z.state.directionalShadow,St.spotLights.value=z.state.spot,St.spotLightShadows.value=z.state.spotShadow,St.rectAreaLights.value=z.state.rectArea,St.ltc_1.value=z.state.rectAreaLTC1,St.ltc_2.value=z.state.rectAreaLTC2,St.pointLights.value=z.state.point,St.pointLightShadows.value=z.state.pointShadow,St.hemisphereLights.value=z.state.hemi,St.directionalShadowMap.value=z.state.directionalShadowMap,St.directionalShadowMatrix.value=z.state.directionalShadowMatrix,St.spotShadowMap.value=z.state.spotShadowMap,St.spotLightMatrix.value=z.state.spotLightMatrix,St.spotLightMap.value=z.state.spotLightMap,St.pointShadowMap.value=z.state.pointShadowMap,St.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ct,W.uniformsList=null,Ct}function Qc(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=os.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function th(E,U){let G=Dt.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function md(E,U,G,W,z){U.isScene!==!0&&(U=Ot),R.resetTextureUnits();let it=U.fog,dt=W.isMeshStandardMaterial?U.environment:null,xt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:sn,_t=(W.isMeshStandardMaterial?H:w).get(W.envMap||dt),Rt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ct=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color,me=Qi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=_.toneMapping);let Ze=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=Ze!==void 0?Ze.length:0,Et=Dt.get(W),Ce=p.state.lights;if(O===!0&&(j===!0||E!==k)){let ii=E===k&&W.id===P;et.setState(W,E,ii)}let te=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ce.state.version||Et.outputColorSpace!==xt||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==_t||W.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Rt||Et.vertexTangents!==Ct||Et.morphTargets!==St||Et.morphNormals!==ie||Et.morphColors!==ce||Et.toneMapping!==me||Et.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Et.__version=W.version);let ui=Et.currentProgram;te===!0&&(ui=ur(W,U,z));let zn=!1,Je=!1,so=!1,ve=ui.getUniforms(),Wi=Et.uniforms;if(Pt.useProgram(ui.program)&&(zn=!0,Je=!0,so=!0),W.id!==P&&(P=W.id,Je=!0),zn||k!==E){$t.reverseDepthBuffer?(ht.copy(E.projectionMatrix),Sf(ht),wf(ht),ve.setValue(I,"projectionMatrix",ht)):ve.setValue(I,"projectionMatrix",E.projectionMatrix),ve.setValue(I,"viewMatrix",E.matrixWorldInverse);let ii=ve.map.cameraPosition;ii!==void 0&&ii.setValue(I,Tt.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,Je=!0,so=!0)}if(z.isSkinnedMesh){ve.setOptional(I,z,"bindMatrix"),ve.setOptional(I,z,"bindMatrixInverse");let ii=z.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),ve.setValue(I,"boneTexture",ii.boneTexture,R))}z.isBatchedMesh&&(ve.setOptional(I,z,"batchingTexture"),ve.setValue(I,"batchingTexture",z._matricesTexture,R),ve.setOptional(I,z,"batchingIdTexture"),ve.setValue(I,"batchingIdTexture",z._indirectTexture,R),ve.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",z._colorsTexture,R));let ro=G.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0)&&Lt.update(z,G,ui),(Je||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,ve.setValue(I,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wi.envMap.value=_t,Wi.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Wi.envMapIntensity.value=U.environmentIntensity),Je&&(ve.setValue(I,"toneMappingExposure",_.toneMappingExposure),Et.needsLights&&gd(Wi,so),it&&W.fog===!0&&ot.refreshFogUniforms(Wi,it),ot.refreshMaterialUniforms(Wi,W,Y,F,p.state.transmissionRenderTarget[E.id]),os.upload(I,Qc(Et),Wi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(os.upload(I,Qc(Et),Wi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(I,"center",z.center),ve.setValue(I,"modelViewMatrix",z.modelViewMatrix),ve.setValue(I,"normalMatrix",z.normalMatrix),ve.setValue(I,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ii=W.uniformsGroups;for(let ao=0,xd=ii.length;ao<xd;ao++){let eh=ii[ao];D.update(eh,ui),D.bind(eh,ui)}}return ui}function gd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function yd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,G){Dt.get(E.texture).__webglTexture=U,Dt.get(E.depthTexture).__webglTexture=G;let W=Dt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let G=Dt.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){A=E,C=U,T=G;let W=!0,z=null,it=!1,dt=!1;if(E){let _t=Dt.get(E);if(_t.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(_t.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(_t.__hasExternalTextures)R.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let St=E.depthTexture;if(_t.__boundDepthTexture!==St){if(St!==null&&Dt.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(dt=!0);let Ct=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?z=Ct[U][G]:z=Ct[U],it=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?z=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ct)?z=Ct[G]:z=Ct,v.copy(E.viewport),S.copy(E.scissor),L=E.scissorTest}else v.copy(nt).multiplyScalar(Y).floor(),S.copy(ct).multiplyScalar(Y).floor(),L=Ut;if(Pt.bindFramebuffer(I.FRAMEBUFFER,z)&&W&&Pt.drawBuffers(E,z),Pt.viewport(v),Pt.scissor(S),Pt.setScissorTest(L),it){let _t=Dt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,G)}else if(dt){let _t=Dt.get(E.texture),Rt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,Rt)}P=-1},this.readRenderTargetPixels=function(E,U,G,W,z,it,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){Pt.bindFramebuffer(I.FRAMEBUFFER,xt);try{let _t=E.texture,Rt=_t.format,Ct=_t.type;if(!$t.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&G>=0&&G<=E.height-z&&I.readPixels(U,G,W,z,Nt.convert(Rt),Nt.convert(Ct),it)}finally{let _t=A!==null?Dt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,W,z,it,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){let _t=E.texture,Rt=_t.format,Ct=_t.type;if(!$t.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-W&&G>=0&&G<=E.height-z){Pt.bindFramebuffer(I.FRAMEBUFFER,xt);let St=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.bufferData(I.PIXEL_PACK_BUFFER,it.byteLength,I.STREAM_READ),I.readPixels(U,G,W,z,Nt.convert(Rt),Nt.convert(Ct),0);let ie=A!==null?Dt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,ie);let ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await bf(I,ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,it),I.deleteBuffer(St),I.deleteSync(ce),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,G=0){E.isTexture!==!0&&(Jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let W=Math.pow(2,-G),z=Math.floor(E.image.width*W),it=Math.floor(E.image.height*W),dt=U!==null?U.x:0,xt=U!==null?U.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,dt,xt,z,it),Pt.unbindTexture()},this.copyTextureToTexture=function(E,U,G=null,W=null,z=0){E.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],U=arguments[2],z=arguments[3]||0,G=null);let it,dt,xt,_t,Rt,Ct;G!==null?(it=G.max.x-G.min.x,dt=G.max.y-G.min.y,xt=G.min.x,_t=G.min.y):(it=E.image.width,dt=E.image.height,xt=0,_t=0),W!==null?(Rt=W.x,Ct=W.y):(Rt=0,Ct=0);let St=Nt.convert(U.format),ie=Nt.convert(U.type);R.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let ce=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ze=I.getParameter(I.UNPACK_SKIP_PIXELS),Qt=I.getParameter(I.UNPACK_SKIP_ROWS),Et=I.getParameter(I.UNPACK_SKIP_IMAGES),Ce=E.isCompressedTexture?E.mipmaps[z]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,_t),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,Rt,Ct,it,dt,St,ie,Ce.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,Rt,Ct,Ce.width,Ce.height,St,Ce.data):I.texSubImage2D(I.TEXTURE_2D,z,Rt,Ct,it,dt,St,ie,Ce),I.pixelStorei(I.UNPACK_ROW_LENGTH,ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Et),z===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G=null,W=null,z=0){E.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],U=arguments[3],z=arguments[4]||0);let it,dt,xt,_t,Rt,Ct,St,ie,ce,me=E.isCompressedTexture?E.mipmaps[z]:E.image;G!==null?(it=G.max.x-G.min.x,dt=G.max.y-G.min.y,xt=G.max.z-G.min.z,_t=G.min.x,Rt=G.min.y,Ct=G.min.z):(it=me.width,dt=me.height,xt=me.depth,_t=0,Rt=0,Ct=0),W!==null?(St=W.x,ie=W.y,ce=W.z):(St=0,ie=0,ce=0);let Ze=Nt.convert(U.format),Qt=Nt.convert(U.type),Et;if(U.isData3DTexture)R.setTexture3D(U,0),Et=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Et=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Ce=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ui=I.getParameter(I.UNPACK_SKIP_PIXELS),zn=I.getParameter(I.UNPACK_SKIP_ROWS),Je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ct),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Et,z,St,ie,ce,it,dt,xt,Ze,Qt,me.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,z,St,ie,ce,it,dt,xt,Ze,me.data):I.texSubImage3D(Et,z,St,ie,ce,it,dt,xt,Ze,Qt,me),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ui),I.pixelStorei(I.UNPACK_SKIP_ROWS,zn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je),z===0&&U.generateMipmaps&&I.generateMipmap(Et),Pt.unbindTexture()},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,Pt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===wc?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Ca?"display-p3":"srgb"}};var pa=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ps=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ma=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cl,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ne=new b,Ys=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ms=class extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jn,Ds=new b,Qn=new b,ts=new b,es=new lt,Us=new lt,Du=new se,Dr=new b,Ns=new b,Ur=new b,jh=new lt,zo=new lt,Qh=new lt,$s=class extends Re{constructor(t=new ms){if(super(),this.isSprite=!0,this.type="Sprite",jn===void 0){jn=new re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ma(e,5);jn.setIndex([0,1,2,0,2,3]),jn.setAttribute("position",new Ys(i,3,0,!1)),jn.setAttribute("uv",new Ys(i,2,3,!1))}this.geometry=jn,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qn.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qn.multiplyScalar(-ts.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Nr(Dr.set(-.5,-.5,0),ts,a,Qn,n,s),Nr(Ns.set(.5,-.5,0),ts,a,Qn,n,s),Nr(Ur.set(.5,.5,0),ts,a,Qn,n,s),jh.set(0,0),zo.set(1,0),Qh.set(1,1);let o=t.ray.intersectTriangle(Dr,Ns,Ur,!1,Ds);if(o===null&&(Nr(Ns.set(-.5,.5,0),ts,a,Qn,n,s),zo.set(0,1),o=t.ray.intersectTriangle(Dr,Ur,Ns,!1,Ds),o===null))return;let l=t.ray.origin.distanceTo(Ds);l<t.near||l>t.far||e.push({distance:l,point:Ds.clone(),uv:Di.getInterpolation(Ds,Dr,Ns,Ur,jh,zo,Qh,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Nr(r,t,e,i,n,s){es.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(Us.x=s*es.x-n*es.y,Us.y=n*es.x+s*es.y):Us.copy(es),r.copy(t),r.x+=Us.x,r.y+=Us.y,r.applyMatrix4(Du)}var Oi=class extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ga=new b,ya=new b,tu=new se,ks=new Xs,kr=new An,Fo=new b,eu=new b,Zs=class extends Re{constructor(t=new re,e=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)ga.fromBufferAttribute(e,n-1),ya.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ga.distanceTo(ya);t.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(n),kr.radius+=s,t.ray.intersectsSphere(kr)===!1)return;tu.copy(n).invert(),ks.copy(t.ray).applyMatrix4(tu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){let m=h.getX(y),x=h.getX(y+1),_=zr(this,t,ks,l,m,x);_&&e.push(_)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(f),m=zr(this,t,ks,l,y,p);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){let m=zr(this,t,ks,l,y,y+1);m&&e.push(m)}if(this.isLineLoop){let y=zr(this,t,ks,l,g-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function zr(r,t,e,i,n,s){let a=r.geometry.attributes.position;if(ga.fromBufferAttribute(a,n),ya.fromBufferAttribute(a,s),e.distanceSqToSegment(ga,ya,Fo,eu)>i)return;Fo.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Fo);if(!(l<t.near||l>t.far))return{distance:l,point:eu.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}var iu=new b,nu=new b,gs=class extends Zs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)iu.fromBufferAttribute(e,n),nu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+iu.distanceTo(nu);t.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ql=class extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},su=new se,Yl=new Xs,Fr=new An,Br=new b,xa=class extends Re{constructor(t=new re,e=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(n),Fr.radius+=s,t.ray.intersectsSphere(Fr)===!1)return;su.copy(n).invert(),Yl.copy(t.ray).applyMatrix4(su);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let p=c.getX(g);Br.fromBufferAttribute(u,p),ru(Br,p,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)Br.fromBufferAttribute(u,g),ru(Br,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ru(r,t,e,i,n,s,a){let o=Yl.distanceSqToPoint(r);if(o<e){let l=new b;Yl.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Rn=class extends Qe{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new lt:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new b,n=[],s=[],a=[],o=new b,l=new se;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new b)}s[0]=new b,a[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ae(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Ae(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Js=class extends ai{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$l=class extends Js{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var Or=new b,Bo=new Ac,Oo=new Ac,Ho=new Ac,Zl=class extends ai{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new b){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(Or.subVectors(n[0],n[1]).add(n[0]),c=Or);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(Or.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Bo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,p),Oo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,p),Ho.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Oo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ho.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Bo.calc(l),Oo.calc(l),Ho.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new b().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function au(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function vy(r,t){let e=1-r;return e*e*t}function _y(r,t){return 2*(1-r)*r*t}function My(r,t){return r*r*t}function Os(r,t,e,i){return vy(r,t)+_y(r,e)+My(r,i)}function by(r,t){let e=1-r;return e*e*e*t}function Sy(r,t){let e=1-r;return 3*e*e*r*t}function wy(r,t){return 3*(1-r)*r*r*t}function Ey(r,t){return r*r*r*t}function Hs(r,t,e,i,n){return by(r,t)+Sy(r,e)+wy(r,i)+Ey(r,n)}var va=class extends ai{constructor(t=new lt,e=new lt,i=new lt,n=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new lt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Hs(t,n.x,s.x,a.x,o.x),Hs(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jl=class extends ai{constructor(t=new b,e=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new b){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Hs(t,n.x,s.x,a.x,o.x),Hs(t,n.y,s.y,a.y,o.y),Hs(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_a=class extends ai{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kl=class extends ai{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends ai{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Os(t,n.x,s.x,a.x),Os(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jl=class extends ai{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Os(t,n.x,s.x,a.x),Os(t,n.y,s.y,a.y),Os(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(au(o,l.x,c.x,h.x,u.x),au(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new lt().fromArray(n))}return this}},ou=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:Zl,CubicBezierCurve:va,CubicBezierCurve3:Jl,EllipseCurve:Js,LineCurve:_a,LineCurve3:Kl,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:jl,SplineCurve:ba}),Ql=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ou[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new ou[n.type]().fromJSON(n))}return this}},tc=class extends Ql{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new _a(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Ma(this.currentPoint.clone(),new lt(t,e),new lt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new va(this.currentPoint.clone(),new lt(t,e),new lt(i,n),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ba(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new Js(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ec=class r extends re{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ae(n,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/e,u=new b,d=new lt,f=new b,g=new b,y=new b,p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let x=0;x<=e;x++){let _=i+x*h*n,M=Math.sin(_),C=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*C,a.push(u.x,u.y,u.z),d.x=x/e,d.y=T/(t.length-1),o.push(d.x,d.y);let A=l[3*T+0]*M,P=l[3*T+1],k=l[3*T+0]*C;c.push(A,P,k)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let M=_+x*t.length,C=M,T=M+t.length,A=M+t.length+1,P=M+1;s.push(C,T,P),s.push(A,P,T)}this.setIndex(s),this.setAttribute("position",new Gt(a,3)),this.setAttribute("uv",new Gt(o,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},nn=class r extends ec{constructor(t=1,e=1,i=4,n=8){let s=new tc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}};var Xe=class r extends re{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,y=[],p=i/2,m=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function x(){let M=new b,C=new b,T=0,A=(e-t)/i;for(let P=0;P<=s;P++){let k=[],v=P/s,S=v*(e-t)+t;for(let L=0;L<=n;L++){let N=L/n,B=N*l+o,X=Math.sin(B),F=Math.cos(B);C.x=S*X,C.y=-v*i+p,C.z=S*F,u.push(C.x,C.y,C.z),M.set(X,A,F).normalize(),d.push(M.x,M.y,M.z),f.push(N,1-v),k.push(g++)}y.push(k)}for(let P=0;P<n;P++)for(let k=0;k<s;k++){let v=y[k][P],S=y[k+1][P],L=y[k+1][P+1],N=y[k][P+1];t>0&&(h.push(v,S,N),T+=3),e>0&&(h.push(S,L,N),T+=3)}c.addGroup(m,T,0),m+=T}function _(M){let C=g,T=new lt,A=new b,P=0,k=M===!0?t:e,v=M===!0?1:-1;for(let L=1;L<=n;L++)u.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),g++;let S=g;for(let L=0;L<=n;L++){let B=L/n*l+o,X=Math.cos(B),F=Math.sin(B);A.x=k*F,A.y=p*v,A.z=k*X,u.push(A.x,A.y,A.z),d.push(0,v,0),T.x=X*.5+.5,T.y=F*.5*v+.5,f.push(T.x,T.y),g++}for(let L=0;L<n;L++){let N=C+L,B=S+L;M===!0?h.push(B,B+1,N):h.push(B+1,B,N),P+=3}c.addGroup(m,P,M===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sa=class r extends Xe{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ic=class r extends re{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(s.slice(),3)),this.setAttribute("uv",new Gt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let _=new b,M=new b,C=new b;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],M),f(e[T+2],C),l(_,M,C,x)}function l(x,_,M,C){let T=C+1,A=[];for(let P=0;P<=T;P++){A[P]=[];let k=x.clone().lerp(M,P/T),v=_.clone().lerp(M,P/T),S=T-P;for(let L=0;L<=S;L++)L===0&&P===T?A[P][L]=k:A[P][L]=k.clone().lerp(v,L/S)}for(let P=0;P<T;P++)for(let k=0;k<2*(T-P)-1;k++){let v=Math.floor(k/2);k%2===0?(d(A[P][v+1]),d(A[P+1][v]),d(A[P][v])):(d(A[P][v+1]),d(A[P+1][v+1]),d(A[P+1][v]))}}function c(x){let _=new b;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(x),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function h(){let x=new b;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];let M=p(x)/2/Math.PI+.5,C=m(x)/Math.PI+.5;a.push(M,1-C)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let _=a[x+0],M=a[x+2],C=a[x+4],T=Math.max(_,M,C),A=Math.min(_,M,C);T>.9&&A<.1&&(_<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,_){let M=x*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let x=new b,_=new b,M=new b,C=new b,T=new lt,A=new lt,P=new lt;for(let k=0,v=0;k<s.length;k+=9,v+=6){x.set(s[k+0],s[k+1],s[k+2]),_.set(s[k+3],s[k+4],s[k+5]),M.set(s[k+6],s[k+7],s[k+8]),T.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),C.copy(x).add(_).add(M).divideScalar(3);let S=p(C);y(T,v+0,x,S),y(A,v+2,_,S),y(P,v+4,M,S)}}function y(x,_,M,C){C<0&&x.x===1&&(a[_]=x.x-1),M.x===0&&M.z===0&&(a[_]=C/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Hr=new b,Vr=new b,Vo=new b,Gr=new Di,wa=class extends re{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),s=Math.cos(rs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:p,c:m}=Gr;if(y.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Gr.getNormal(Vo),u[0]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,u[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,u[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let _=(x+1)%3,M=u[x],C=u[_],T=Gr[h[x]],A=Gr[h[_]],P=`${M}_${C}`,k=`${C}_${M}`;k in d&&d[k]?(Vo.dot(d[k].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[k]=null):P in d||(d[P]={index0:c[x],index1:c[_],normal:Vo.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:p}=d[g];Hr.fromBufferAttribute(o,y),Vr.fromBufferAttribute(o,p),f.push(Hr.x,Hr.y,Hr.z),f.push(Vr.x,Vr.y,Vr.z)}this.setAttribute("position",new Gt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Ea=class r extends ic{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Cn=class r extends re{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new b,g=new lt;for(let y=0;y<=n;y++){for(let p=0;p<=i;p++){let m=s+p/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<n;y++){let p=y*(i+1);for(let m=0;m<i;m++){let x=m+p,_=x,M=x+i+1,C=x+i+2,T=x+1;o.push(_,M,T),o.push(M,C,T)}}this.setIndex(o),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var oi=class r extends re{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new b,d=new b,f=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let x=[],_=m/i,M=0;m===0&&a===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(n+T*s)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(n+T*s)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(T+M,1-_),x.push(c++)}h.push(x)}for(let m=0;m<i;m++)for(let x=0;x<e;x++){let _=h[m][x+1],M=h[m][x],C=h[m+1][x],T=h[m+1][x+1];(m!==0||a>0)&&f.push(_,M,T),(m!==i-1||l<Math.PI)&&f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ys=class r extends re{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let y=g/n*s,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let y=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,m=(n+1)*(f-1)+g,x=(n+1)*f+g;a.push(y,p,x),a.push(p,m,x)}this.setIndex(a),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var jt=class extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Wr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ty(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var xs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends xs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case oh:s=t,o=2*e-i;break;case lh:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:a=t,l=2*i-e;break;case lh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),y=g*g,p=y*g,m=-d*p+2*d*y-d*g,x=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*y+.5*g,M=f*p-f*y;for(let C=0;C!==o;++C)s[C]=m*a[h+C]+x*a[c+C]+_*a[l+C]+M*a[u+C];return s}},sc=class extends xs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},rc=class extends xs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},xi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Rl:e=this.InterpolantFactoryMethodLinear;break;case lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Rl;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Ty(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===lo,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Rl;var Pn=class extends xi{constructor(t,e,i){super(t,e,i)}};Pn.prototype.ValueTypeName="bool";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=Kr;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends xi{};ac.prototype.ValueTypeName="color";var oc=class extends xi{};oc.prototype.ValueTypeName="number";var lc=class extends xs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Be.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ta=class extends xi{InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};Ta.prototype.ValueTypeName="quaternion";Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends xi{constructor(t,e,i){super(t,e,i)}};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=Kr;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends xi{};cc.prototype.ValueTypeName="vector";var hc=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ay=new hc,uc=class{constructor(t){this.manager=t!==void 0?t:Ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Aa=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vs=class extends Aa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Go=new se,lu=new b,cu=new b,dc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var fc=class extends dc{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends Aa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new fc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Rc="\\[\\]\\.:\\/",Ry=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",Cy="[^"+Rc.replace("\\.","")+"]",Py=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Iy=/(WCOD+)?/.source.replace("WCOD",Cy),Ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Uy=new RegExp("^"+Py+Iy+Ly+Dy+"$"),Ny=["material","materials","bones","map"],pc=class{constructor(t,e,i){let n=i||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},fe=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ry,"")}static parseTrackName(t){let e=Uy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Ny.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=pc;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);function Pc(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new re,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Uu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let g=Uu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Uu(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new ue(a,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);o.setComponent(d+u,g,y)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var Hi={WALLRUN:1,GRAPPLE:2,NOWALL:4},js=1e-7,La=class{constructor(t=220,e=4){this.half=t,this.cell=e,this.n=Math.ceil(t*2/e),this.cells=new Array(this.n*this.n),this.tris=[],this.nrm=[],this.box=[],this.flags=[],this.count=0,this.stamp=0,this.marks=null,this.groundY=0,this._c={px:0,py:0,pz:0,qx:0,qy:0,qz:0,d2:0}}addGeometry(t,e,i=Hi.WALLRUN|Hi.GRAPPLE){let n=t.index?t.toNonIndexed():t,s=n.attributes.position,a=new b,o=[],l=[];for(let c=0;c<s.count;c++)a.fromBufferAttribute(s,c),e&&a.applyMatrix4(e),l.push(a.x,a.y,a.z),l.length===9&&(this.addTri(l,i),l.length=0);n!==t&&n.dispose()}addTri(t,e){let[i,n,s,a,o,l,c,h,u]=t,d=a-i,f=o-n,g=l-s,y=c-i,p=h-n,m=u-s,x=f*m-g*p,_=g*y-d*m,M=d*p-f*y,C=Math.hypot(x,_,M);if(C<1e-9)return;x/=C,_/=C,M/=C;let T=this.count++;this.tris.push(i,n,s,a,o,l,c,h,u),this.nrm.push(x,_,M);let A=Math.min(i,a,c),P=Math.min(n,o,h),k=Math.min(s,l,u),v=Math.max(i,a,c),S=Math.max(n,o,h),L=Math.max(s,l,u);this.box.push(A,P,k,v,S,L),this.flags.push(e);let N=this.cell,B=this.half,X=this.n,F=Math.max(0,Math.floor((A+B)/N)),Y=Math.min(X-1,Math.floor((v+B)/N)),V=Math.max(0,Math.floor((k+B)/N)),st=Math.min(X-1,Math.floor((L+B)/N));for(let nt=F;nt<=Y;nt++)for(let ct=V;ct<=st;ct++){let Ut=nt*X+ct;(this.cells[Ut]||(this.cells[Ut]=[])).push(T)}}build(){this.T=new Float32Array(this.tris),this.N=new Float32Array(this.nrm),this.B=new Float32Array(this.box),this.F=new Uint8Array(this.flags),this.marks=new Uint32Array(this.count),this.tris=this.nrm=this.box=this.flags=null;for(let t=0;t<this.cells.length;t++)this.cells[t]&&(this.cells[t]=Int32Array.from(this.cells[t]))}_gather(t,e,i,n,s,a,o){let l=this.cell,c=this.half,h=this.n,u=Math.max(0,Math.floor((t+c)/l)),d=Math.min(h-1,Math.floor((n+c)/l)),f=Math.max(0,Math.floor((i+c)/l)),g=Math.min(h-1,Math.floor((a+c)/l)),y=++this.stamp,p=this.marks,m=this.B;o.length=0;for(let x=u;x<=d;x++)for(let _=f;_<=g;_++){let M=this.cells[x*h+_];if(M)for(let C=0;C<M.length;C++){let T=M[C];if(p[T]===y)continue;p[T]=y;let A=T*6;m[A]>n||m[A+3]<t||m[A+1]>s||m[A+4]<e||m[A+2]>a||m[A+5]<i||o.push(T)}}return o}_segTri(t,e,i,n,s,a,o){let l=this.T,c=o*9,h=l[c],u=l[c+1],d=l[c+2],f=l[c+3],g=l[c+4],y=l[c+5],p=l[c+6],m=l[c+7],x=l[c+8],_=this._c,M=n-t,C=s-e,T=a-i,A=f-h,P=g-u,k=y-d,v=p-h,S=m-u,L=x-d,N=C*L-T*S,B=T*v-M*L,X=M*S-C*v,F=A*N+P*B+k*X;if(Math.abs(F)>js){let O=1/F,j=t-h,ht=e-u,at=i-d,Tt=(j*N+ht*B+at*X)*O;if(Tt>=0&&Tt<=1){let At=ht*k-at*P,Ot=at*A-j*k,Wt=j*P-ht*A,Ht=(M*At+C*Ot+T*Wt)*O;if(Ht>=0&&Tt+Ht<=1){let I=(v*At+S*Ot+L*Wt)*O;if(I>=0&&I<=1)return _.px=_.qx=t+M*I,_.py=_.qy=e+C*I,_.pz=_.qz=i+T*I,_.d2=0}}}let Y=1/0,V,st,nt,ct,Ut,Bt;for(let O=0;O<2;O++){let j=O?n:t,ht=O?s:e,at=O?a:i;Fy(j,ht,at,h,u,d,f,g,y,p,m,x,Ln);let Tt=(j-Ln[0])**2+(ht-Ln[1])**2+(at-Ln[2])**2;Tt<Y&&(Y=Tt,V=j,st=ht,nt=at,ct=Ln[0],Ut=Ln[1],Bt=Ln[2])}for(let O=0;O<3;O++){let Wt=By(t,e,i,n,s,a,O===0?h:O===1?f:p,O===0?u:O===1?g:m,O===0?d:O===1?y:x,O===0?f:O===1?p:h,O===0?g:O===1?m:u,O===0?y:O===1?x:d,Dn);Wt<Y&&(Y=Wt,V=Dn[0],st=Dn[1],nt=Dn[2],ct=Dn[3],Ut=Dn[4],Bt=Dn[5])}return _.px=V,_.py=st,_.pz=nt,_.qx=ct,_.qy=Ut,_.qz=Bt,_.d2=Y}collideCapsule(t,e,i,n,s=4){n.length=0;let a=Nu;for(let o=0;o<s;o++){let l=t.x,c=t.y+e,h=t.z,u=t.y+i-e,d=0,f=0,g=0,y=0;t.y<this.groundY&&(d=this.groundY-t.y,f=0,g=1,y=0),this._gather(l-e,t.y-.01,h-e,l+e,t.y+i+.01,h+e,a);for(let x=0;x<a.length;x++){let _=a[x],M=this._segTri(l,c,h,l,u,h,_);if(M>=e*e)continue;let C=this._c,T,A,P,k,v=this.N,S=_*3;if(M<1e-10){let L=v[S],N=v[S+1],B=v[S+2],X=this.T,F=_*9,Y=(c+u)/2;(l-X[F])*L+(Y-X[F+1])*N+(h-X[F+2])*B<0&&(L=-L,N=-N,B=-B);let st=(l-X[F])*L+(c-X[F+1])*N+(h-X[F+2])*B,nt=(l-X[F])*L+(u-X[F+1])*N+(h-X[F+2])*B;T=e-Math.min(st,nt),A=L,P=N,k=B}else{let L=Math.sqrt(M);T=e-L,A=(C.px-C.qx)/L,P=(C.py-C.qy)/L,k=(C.pz-C.qz)/L;let N=A*v[S]+P*v[S+1]+k*v[S+2];Math.abs(N)>.999&&(A=v[S],P=v[S+1],k=v[S+2],T=e-N*L)}T>d&&(d=T,f=A,g=P,y=k)}if(d<=0)break;let p=d+1e-4;t.x+=f*p,t.y+=g*p,t.z+=y*p;let m=(n.length<Ia.length||Ia.push({x:0,y:0,z:0,depth:0}),Ia[n.length]);m.x=f,m.y=g,m.z=y,m.depth=d,n.push(m)}return n.length>0}capsuleFree(t,e,i,n,s){if(e<this.groundY-.001)return!1;let a=this._gather(t-n,e,i-n,t+n,e+s,i+n,Nu);for(let o=0;o<a.length;o++)if(this._segTri(t,e+n,i,t,e+s-n,i,a[o])<n*n-1e-6)return!1;return!0}raycast(t,e,i,n,s,a,o,l=ky,c=0){let h=o,u=-1;if(s<-1e-6&&e>this.groundY){let L=(this.groundY-e)/s;L<h&&(h=L,u=-2)}let d=this.cell,f=this.half,g=this.n,y=Math.floor((t+f)/d),p=Math.floor((i+f)/d),m=n>0?1:-1,x=a>0?1:-1,_=Math.abs(n)>1e-9?d/Math.abs(n):1/0,M=Math.abs(a)>1e-9?d/Math.abs(a):1/0,C=Math.abs(n)>1e-9?((n>0?y+1:y)*d-f-t)/n:1/0,T=Math.abs(a)>1e-9?((a>0?p+1:p)*d-f-i)/a:1/0,A=++this.stamp,P=this.marks,k=this.T,v=this.F,S=0;for(let L=0;L<400;L++){if(y>=0&&p>=0&&y<g&&p<g){let B=this.cells[y*g+p];if(B)for(let X=0;X<B.length;X++){let F=B[X];if(P[F]===A||(P[F]=A,c&&!(v[F]&c)))continue;let Y=F*9,V=zy(t,e,i,n,s,a,k[Y],k[Y+1],k[Y+2],k[Y+3],k[Y+4],k[Y+5],k[Y+6],k[Y+7],k[Y+8]);V>0&&V<h&&(h=V,u=F)}}let N=Math.min(C,T);if(h<=N||N>o||(S=N,C<T?(y+=m,C+=_):(p+=x,T+=M),y<0&&m<0||p<0&&x<0||y>=g&&m>0||p>=g&&x>0))break}if(u===-1)return null;if(l.t=h,l.x=t+n*h,l.y=e+s*h,l.z=i+a*h,u===-2)l.nx=0,l.ny=1,l.nz=0,l.flags=Hi.GRAPPLE,l.tri=-1;else{let L=this.N,N=u*3,B=L[N],X=L[N+1],F=L[N+2];B*n+X*s+F*a>0&&(B=-B,X=-X,F=-F),l.nx=B,l.ny=X,l.nz=F,l.flags=v[u],l.tri=u}return l}},Nu=[],Ia=[],Ln=[0,0,0],Dn=[0,0,0,0,0,0],ky={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0};function zy(r,t,e,i,n,s,a,o,l,c,h,u,d,f,g){let y=c-a,p=h-o,m=u-l,x=d-a,_=f-o,M=g-l,C=n*M-s*_,T=s*x-i*M,A=i*_-n*x,P=y*C+p*T+m*A;if(Math.abs(P)<1e-9)return-1;let k=1/P,v=r-a,S=t-o,L=e-l,N=(v*C+S*T+L*A)*k;if(N<0||N>1)return-1;let B=S*m-L*p,X=L*y-v*m,F=v*p-S*y,Y=(i*B+n*X+s*F)*k;return Y<0||N+Y>1?-1:(x*B+_*X+M*F)*k}function Fy(r,t,e,i,n,s,a,o,l,c,h,u,d){let f=a-i,g=o-n,y=l-s,p=c-i,m=h-n,x=u-s,_=r-i,M=t-n,C=e-s,T=f*_+g*M+y*C,A=p*_+m*M+x*C;if(T<=0&&A<=0){d[0]=i,d[1]=n,d[2]=s;return}let P=r-a,k=t-o,v=e-l,S=f*P+g*k+y*v,L=p*P+m*k+x*v;if(S>=0&&L<=S){d[0]=a,d[1]=o,d[2]=l;return}let N=T*L-S*A;if(N<=0&&T>=0&&S<=0){let O=T/(T-S);d[0]=i+f*O,d[1]=n+g*O,d[2]=s+y*O;return}let B=r-c,X=t-h,F=e-u,Y=f*B+g*X+y*F,V=p*B+m*X+x*F;if(V>=0&&Y<=V){d[0]=c,d[1]=h,d[2]=u;return}let st=Y*A-T*V;if(st<=0&&A>=0&&V<=0){let O=A/(A-V);d[0]=i+p*O,d[1]=n+m*O,d[2]=s+x*O;return}let nt=S*V-Y*L;if(nt<=0&&L-S>=0&&Y-V>=0){let O=(L-S)/(L-S+(Y-V));d[0]=a+(c-a)*O,d[1]=o+(h-o)*O,d[2]=l+(u-l)*O;return}let ct=1/(nt+st+N),Ut=st*ct,Bt=N*ct;d[0]=i+f*Ut+p*Bt,d[1]=n+g*Ut+m*Bt,d[2]=s+y*Ut+x*Bt}function By(r,t,e,i,n,s,a,o,l,c,h,u,d){let f=i-r,g=n-t,y=s-e,p=c-a,m=h-o,x=u-l,_=r-a,M=t-o,C=e-l,T=f*f+g*g+y*y,A=p*p+m*m+x*x,P=p*_+m*M+x*C,k,v;if(T<=js&&A<=js)k=v=0;else if(T<=js)k=0,v=Math.min(1,Math.max(0,P/A));else{let S=f*_+g*M+y*C;if(A<=js)v=0,k=Math.min(1,Math.max(0,-S/T));else{let L=f*p+g*m+y*x,N=T*A-L*L;k=N!==0?Math.min(1,Math.max(0,(L*P-S*A)/N)):0,v=(L*k+P)/A,v<0?(v=0,k=Math.min(1,Math.max(0,-S/T))):v>1&&(v=1,k=Math.min(1,Math.max(0,(L-S)/T)))}}return d[0]=r+f*k,d[1]=t+g*k,d[2]=e+y*k,d[3]=a+p*v,d[4]=o+m*v,d[5]=l+x*v,(d[0]-d[3])**2+(d[1]-d[4])**2+(d[2]-d[5])**2}function ku(r,t,e,i=4,n=4){let s=new ye(r,t,e),a=s.attributes.uv,o=s.attributes.position,l=s.attributes.normal;for(let c=0;c<a.count;c++){let h=Math.abs(l.getX(c)),u=Math.abs(l.getY(c)),d=o.getX(c)+r/2,f=o.getY(c)+t/2,g=o.getZ(c)+e/2,y,p;u>.5?(y=d,p=g):h>.5?(y=g,p=f):(y=d,p=f),a.setXY(c,y/i,p/n)}return s}function zu(r,t,e,i=4,n=4,s="all"){let a=r/2,o={a:new b(-a,0,0),b:new b(a,0,0),c:new b(a,0,t),d:new b(-a,0,t),e:new b(a,e,t),f:new b(-a,e,t)},l=[],c=[],h=[],u=Math.hypot(t,e),d="top",f=(_,M,C,T,A,P,k)=>{if(s!=="all"&&s!==d)return;let v=_,S=M,L=C,N=T,B=A,X=P;new b().subVectors(S,v).cross(new b().subVectors(L,v)).dot(k)<0&&([S,L]=[L,S],[B,X]=[X,B]);let Y=new b().subVectors(S,v).cross(new b().subVectors(L,v)).normalize();l.push(v.x,v.y,v.z,S.x,S.y,S.z,L.x,L.y,L.z),c.push(...N,...B,...X);for(let V=0;V<3;V++)h.push(Y.x,Y.y,Y.z)},g=r/i,y=new b(0,t,-e);f(o.a,o.b,o.e,[0,0],[g,0],[g,u/n],y),f(o.a,o.e,o.f,[0,0],[g,u/n],[0,u/n],y),d="sides";let p=new b(0,-1,0);f(o.a,o.b,o.c,[0,0],[g,0],[g,t/n],p),f(o.a,o.c,o.d,[0,0],[g,t/n],[0,t/n],p);let m=new b(0,0,1);f(o.d,o.c,o.e,[0,0],[g,0],[g,e/n],m),f(o.d,o.e,o.f,[0,0],[g,e/n],[0,e/n],m),f(o.b,o.c,o.e,[0,0],[t/i,0],[t/i,e/n],new b(1,0,0)),f(o.a,o.d,o.f,[0,0],[t/i,0],[t/i,e/n],new b(-1,0,0));let x=new re;return x.setAttribute("position",new Gt(l,3)),x.setAttribute("normal",new Gt(h,3)),x.setAttribute("uv",new Gt(c,2)),x}var bs=new se,Da=new Be,Ua=new ri,Fu=new b,Bu=new b(1,1,1);function Oy(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.fillStyle="#f4f4f2",e.fillRect(0,0,512,512),e.strokeStyle="#e2e2df",e.lineWidth=2;for(let n=0;n<=512;n+=512/8)e.beginPath(),e.moveTo(n,0),e.lineTo(n,512),e.stroke(),e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();e.strokeStyle="#cfcfcb",e.lineWidth=4,e.strokeRect(0,0,512,512);let i=new Rn(t);return i.wrapS=i.wrapT=Vs,i.colorSpace=ze,i.anisotropy=16,i}var Na=class{constructor(t,e){this.scene=t,this.Q=e,this.col=new La(90,4),this.batches=new Map,this.edges=[],this.half=50,this.spawnGround=[],this.spawnHigh=[],this.jumpPads=[],this.boostPads=[],this.animated=[];let i=Oy();this.M={floor:new jt({map:i,roughness:.92,metalness:0}),wall:new jt({color:16448250,roughness:.95}),block:new jt({color:16777215,roughness:.9}),top:new jt({color:15527146,roughness:.9}),ramp:new jt({color:15132387,roughness:.85}),accent:new jt({color:16734751,roughness:.6})},this.edgeMat=new Oi({color:11842736}),this.build(),this.finalize()}add(t,e,i,{collide:n=!0,edges:s=!0}={}){let a=t.index?t.toNonIndexed():t;e&&a.applyMatrix4(e);for(let o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);this.batches.has(i)||this.batches.set(i,[]),this.batches.get(i).push(a),n&&this.col.addGeometry(a,null,Hi.WALLRUN|Hi.GRAPPLE),s&&this.edges.push(new wa(a,30))}box(t,e,i,n,s,a,o="block",l=0,c={}){Ua.set(0,l,0),Da.setFromEuler(Ua),bs.compose(Fu.set(t,e+s/2,i),Da,Bu),this.add(ku(n,s,a,8,8),bs,o,c)}ramp(t,e,i,n,s,a,o=0){Ua.set(0,i,0),Da.setFromEuler(Ua),bs.compose(Fu.set(t,o,e),Da,Bu),this.add(zu(n,s,a,8,8),bs,"ramp")}build(){let t=this.half,e=new Bi(t*2+40,t*2+40);e.rotateX(-Math.PI/2);{let a=e.attributes.uv,o=e.attributes.position;for(let l=0;l<a.count;l++)a.setXY(l,o.getX(l)/8,-o.getZ(l)/8)}this.add(e,null,"floor",{collide:!1,edges:!1});let i=12,n=2;this.box(0,0,-t-n/2,t*2+n*2,i,n,"wall"),this.box(0,0,t+n/2,t*2+n*2,i,n,"wall"),this.box(-t-n/2,0,0,n,i,t*2,"wall"),this.box(t+n/2,0,0,n,i,t*2,"wall"),this.ceiling=i+14;let s=new Xe(7,7,1,40);bs.makeTranslation(0,.5,0),this.add(s,bs,"top");for(let a=0;a<4;a++){let o=a*Math.PI/2;this.ramp(Math.sin(o)*11,Math.cos(o)*11,o+Math.PI,4,4.2,1)}for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.box(a*17,0,o*17,3,9,3,"block");for(let a=0;a<4;a++){let o=a*Math.PI/2+Math.PI/4;this.box(Math.cos(o)*28,0,Math.sin(o)*28,7,1.4,1,"block",-o+Math.PI/2)}for(let[a,o,l]of[[0,-30,0],[0,30,0],[-30,0,Math.PI/2],[30,0,Math.PI/2]])this.box(a,0,o,10,2.6,1,"block",l);for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let l=a*40,c=o*40;this.box(l,0,c,14,3.5,14,"top"),this.ramp(l-a*0,c-o*7-o*10,o>0?0:Math.PI,5,10,3.5),this.spawnHigh.push(new b(l+a*2,3.5,c+o*2))}for(let a=0;a<12;a++){let o=a/12*Math.PI*2+.13,l=36+a%2*6,c=new b(Math.cos(o)*l,0,Math.sin(o)*l);Math.abs(Math.abs(c.x)-40)<9&&Math.abs(Math.abs(c.z)-40)<9||this.spawnGround.push(c)}for(let a of[[0,0,-42],[0,0,42],[-42,0,0],[42,0,0],[-22,0,-40],[22,0,40]])this.spawnGround.push(new b(...a))}finalize(){for(let[i,n]of this.batches){let s=Pc(n,!1),a=new kt(s,this.M[i]);a.castShadow=i!=="floor",a.receiveShadow=!0,this.scene.add(a)}let t=Pc(this.edges,!1),e=new gs(t,this.edgeMat);this.scene.add(e),this.col.build()}update(t,e){for(let i of this.animated)i(t,e)}};var K={gravity:30,runSpeed:11.5,crouchSpeed:5,groundAccel:14,friction:8,stopSpeed:5,airAccel:12,airCap:1,airControl:3.5,airSteer:1.7,jumpVel:10.2,airJumpVel:9.6,airJumps:1,coyote:.11,jumpBuffer:.13,slideTarget:16.5,slideBoostMin:3.5,slideBoostMax:9,slideBoostCd:1.25,slideFriction:.42,slideMinSpeed:4.5,slideSteer:2.2,slideLandFactor:.38,dashCharges:2,dashRecharge:1.6,dashBurst:27,dashTime:.13,dashGain:5,wallrunMin:6,wallrunTime:1.75,wallrunSpeed:14,wallJumpOut:8.5,wallJumpUp:9.5,climbTime:.45,climbVel:7.5,grappleRange:75,grappleHookSpeed:200,grapplePull:40,grappleYank:7,grappleCharges:2,grappleRecharge:2.4,maxSpeed:80,standH:1.8,crouchH:1.05,radius:.4},De={coyote:.16,jumpBuffer:.2,momentumDecay:2.6,groundTurn:7,airTurn:4.2,airBrake:9,airAccel:9,dashCharges:3,dashRecharge:1.15,wallReach:.85,wallrunTime:2.6,wallSagStart:1.1,wallrunMin:3,slideFriction:.32,slideSteer:3.2,grappleTap:!0},Hy=new b(0,1,0),de=new b,an=new b,Ou=new b,ka=[],Ic=new b,za={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Hu={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Ss=class{constructor(t,e){this.map=t,this.col=t.col,this.ev=e,this.pos=new b,this.prevPos=new b,this.vel=new b,this.yaw=0,this.pitch=0,this.reset(new b(0,0,30),Math.PI)}reset(t,e){this.pos.copy(t),this.prevPos.copy(t),this.vel.set(0,0,0),this.yaw=e,this.pitch=0,this.h=K.standH,this.eyeH=K.standH-.14,this.prevEyeH=this.eyeH,this.grounded=!1,this.groundN=new b(0,1,0),this.groundTime=0,this.airTime=0,this.coyoteT=0,this.bufferT=0,this.airJumps=K.airJumps,this.state="air",this.crouching=!1,this.sliding=!1,this.slideCd=0,this.slideT=0,this.dashCharges=this.easy===!1?K.dashCharges:De.dashCharges,this.dashRegen=0,this.dashT=0,this.dashDir=new b,this.dashExit=0,this.wall=null,this.wallCd=0,this.lastWallN=new b,this.wallContact=null,this.climbT=0,this.climbUsed=!1,this.mantle=null,this.hook=null,this.grapple=null,this.grappleCharges=K.grappleCharges,this.grappleRegen=0,this.stagger=0,this.burstT=0,this.burstDir=new b,this.burstSpeed=0,this.burstExit=0,this.speed=0,this.hSpeed=0,this.jumpedTick=!1,this.lastLand=0,this.padCd=0,this.alive=!0,this.easy=this.easy??!0}get dashMax(){return this.easy?De.dashCharges:K.dashCharges}get eye(){return Ou.set(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}lookDir(t){return t.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}flatFwd(t){return t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}flatRight(t){return t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}wish(t,e){let i=this.flatFwd(de),n=this.flatRight(an);e.set(i.x*t.fwd+n.x*t.right,0,i.z*t.fwd+n.z*t.right);let s=e.length();return s>0&&e.divideScalar(s),e}accelerate(t,e,i,n,s=1/0){let a=this.vel.x*t.x+this.vel.z*t.z,o=Math.min(e,s)-a;if(o<=0)return;let l=Math.min(i*n*e,o);this.vel.x+=t.x*l,this.vel.z+=t.z*l}friction(t,e){let i=this.grounded,n=i?this.vel.length():Math.hypot(this.vel.x,this.vel.z);if(n<.05){this.vel.x=this.vel.z=0,i&&(this.vel.y=0);return}let s=Math.max(n,K.stopSpeed)*t*e,a=Math.max(0,n-s)/n;this.vel.x*=a,this.vel.z*=a,i&&(this.vel.y*=a)}steer(t,e,i){let n=Math.hypot(this.vel.x,this.vel.z);if(n<.5)return;let s=this.vel.x/n,a=this.vel.z/n,o=s*t.z-a*t.x,l=s*t.x+a*t.z,c=Math.atan2(o,l),h=Math.sign(c)*Math.min(Math.abs(c),e*i),u=Math.cos(h),d=Math.sin(h);this.vel.x=(s*u-a*d)*n,this.vel.z=(s*d+a*u)*n}tick(t,e,i){this.prevPos.copy(this.pos),this.prevEyeH=this.eyeH;let n=this.wish(e,new b),s=n.lengthSq()>0;this.jumpedTick=!1,this.coyoteT-=t,this.bufferT-=t,this.dashCd=(this.dashCd||0)-t,this.steerLock=(this.steerLock||0)-t,this.slideCd-=t,this.wallCd-=t,this.padCd-=t,this.stagger=Math.max(0,this.stagger-t);let a=this.easy;e.jumpPressed&&(this.bufferT=a?De.jumpBuffer:K.jumpBuffer);let o=a?De.dashRecharge:K.dashRecharge;this.dashCharges<this.dashMax?(this.dashRegen+=t,this.dashRegen>=o&&(this.dashCharges++,this.dashRegen=0)):this.dashRegen=0,this.grappleCharges<K.grappleCharges&&!this.grapple&&!this.hook&&(this.grappleRegen+=t,this.grappleRegen>=K.grappleRecharge&&(this.grappleCharges++,this.grappleRegen=0));let l=this.stagger>0;if(this.mantle){this.tickMantle(t);return}let c=e.crouch&&!l;c&&!this.crouching&&(this.crouching=!0,this.grounded&&this.hSpeedNow()>K.slideMinSpeed-1&&this.startSlide(n),this.wall&&this.endWall()),!c&&this.crouching&&this.canStand()&&(this.crouching=!1,this.sliding=!1);let h=this.crouching?K.crouchH:K.standH;h<this.h?this.h=h:h>this.h&&(this.h=Math.min(h,this.h+t*9));let u=this.h-(this.crouching?.2:.14);this.eyeH+=(u-this.eyeH)*Math.min(1,t*16),e.dashPressed&&this.dashCharges>0&&!l&&this.startDash(s?n:this.flatFwd(new b),e),this.dashT>0&&(this.dashT-=t,this.vel.x=this.dashDir.x*Math.max(K.dashBurst,this.dashExit+6),this.vel.z=this.dashDir.z*Math.max(K.dashBurst,this.dashExit+6),this.grounded||(this.vel.y=Math.max(this.vel.y,0)*.5),this.dashT<=0&&(this.vel.x=this.dashDir.x*this.dashExit,this.vel.z=this.dashDir.z*this.dashExit)),this.burstT>0&&(this.burstT-=t,this.vel.copy(this.burstDir).multiplyScalar(this.burstSpeed),this.burstT<=0&&this.vel.copy(this.burstDir).multiplyScalar(this.burstExit)),e.grapplePressed&&a&&(this.grapple||this.hook)&&(this.grapple?this.releaseGrapple(!1):this.hook=null,e.grapplePressed=!1),e.grapplePressed&&!this.hook&&!this.grapple&&this.grappleCharges>0&&!l&&this.fireHook(i),this.hook&&this.tickHook(t,i),this.grapple&&this.tickGrapple(t,e,i),this.noWall||(this.scanWall(),this.wall?this.tickWall(t,e,n):!this.grounded&&!this.grapple&&this.dashT<=0&&this.tryWall(e,n)),this.bufferT>0&&!l&&(this.wall?(this.wallJump(e),this.bufferT=0):this.grounded||this.coyoteT>0?(this.groundJump(),this.bufferT=0):e.jumpPressed&&this.grapple?(this.releaseGrapple(!0),this.vel.y=Math.max(this.vel.y,0)+5,this.bufferT=0,this.ev.jump("grapple")):e.jumpPressed&&this.airJumps>0&&(this.airJump(n,s),this.bufferT=0)),e.jumpHeld&&e.autoHop&&this.grounded&&!this.jumpedTick&&!l&&this.groundTime>0&&this.groundJump();let d=K.runSpeed*(this.speedMul||1);if(!(this.wall||this.dashT>0||this.burstT>0)){if(this.grounded)if(this.sliding)this.tickSlide(t,e,n,s);else if(a&&s&&!l&&!this.crouching&&this.hSpeedNow()>d+.5){let p=this.hSpeedNow();this.steer(n,De.groundTurn*(1-Math.min(.55,p/70)),t);let m=Math.max(d,p-De.momentumDecay*t)/p;this.vel.x*=m,this.vel.z*=m}else{this.jumpedTick||this.friction(K.friction,t);let p=this.crouching?K.crouchSpeed:d;if(s&&!l){let m=this.groundN;de.copy(n).addScaledVector(m,-n.dot(m)).normalize();let x=this.vel.dot(de),_=p-x;_>0&&this.vel.addScaledVector(de,Math.min(K.groundAccel*t*p,_))}}else if(a){if(s&&!l){let p=this.hSpeedNow();if((p>.5?(this.vel.x*n.x+this.vel.z*n.z)/p:1)<-.4&&p>2){let x=Math.max(0,p-De.airBrake*t)/p;this.vel.x*=x,this.vel.z*=x}else!this.grapple&&this.steerLock<=0&&this.steer(n,De.airTurn*(1-Math.min(.5,p/80)),t);this.hSpeedNow()<d&&this.accelerate(n,d,De.airAccel,t),this.accelerate(n,K.runSpeed,K.airAccel,t,K.airCap)}}else if(s&&!l){this.accelerate(n,K.runSpeed,K.airAccel,t,K.airCap);let p=this.hSpeedNow();if(p<K.runSpeed*.95&&this.accelerate(n,K.runSpeed,K.airControl,t),e.fwd>0&&e.right===0&&!this.grapple&&this.steerLock<=0){let m=K.airSteer*(1.2-Math.min(.7,p/60));this.steer(this.flatFwd(an),m,t)}}}if(this.grounded){if(this.sliding){let p=this.groundN;de.set(0,-K.gravity,0),de.addScaledVector(p,-de.dot(p)),this.vel.addScaledVector(de,t)}}else{let p=K.gravity;this.wall||this.climbT>0?p=0:this.dashT>0?p*=.1:this.burstT>0?p=0:this.crouching&&this.vel.y<0&&(p*=1.55),this.vel.y-=p*t}let f=this.vel.length();f>K.maxSpeed&&this.vel.multiplyScalar(1-Math.min(1,(f-K.maxSpeed)/f*t*6));let g=this.grounded;Ic.copy(this.vel);let y=Ic.y;this.integrate(t),g&&this.wallContact&&!this.jumpedTick&&this.stepUp(Ic),g&&!this.grounded&&!this.jumpedTick&&this.dashT<=0&&this.vel.y<3&&!this.grapple&&this.snap(),!this.mantle&&!this.wall&&e.fwd>0&&this.wallContact&&this.vel.y<6&&!l&&this.tryMantle(),this.checkPads(),this.grounded?(g||this.onLand(y,n),this.groundTime+=t,this.airTime=0,this.coyoteT=a?De.coyote:K.coyote,this.airJumps=K.airJumps,this.climbUsed=!1,this.wall&&this.endWall()):(this.groundTime=0,this.airTime+=t),this.sliding&&!this.grounded&&this.airTime>.15&&(this.sliding=!1),this.hSpeed=this.hSpeedNow(),this.speed=this.vel.length(),this.state=this.mantle?"mantle":this.wall?"wall":this.grapple?"grapple":this.dashT>0?"dash":this.sliding?"slide":this.grounded?"ground":"air",this.pos.y<-30&&this.ev.fell&&this.ev.fell()}hSpeedNow(){return Math.hypot(this.vel.x,this.vel.z)}get invuln(){return this.dashT>0||this.burstT>0}burst(t,e,i,n){this.burstDir=t.clone().normalize(),this.burstSpeed=e,this.burstT=i,this.burstExit=n,this.wall&&this.endWall(),this.grapple&&this.releaseGrapple(!1),this.sliding=!1,this.grounded&&this.burstDir.y<.05&&(this.burstDir.y=Math.max(this.burstDir.y,.02))}integrate(t){let e=this.vel.length(),i=Math.min(10,Math.max(1,Math.ceil(e*t/.22))),n=t/i;this.grounded=!1,this.wallContact=null;for(let s=0;s<i;s++)if(this.pos.addScaledVector(this.vel,n),this.col.collideCapsule(this.pos,K.radius,this.h,ka))for(let a of ka){a.y>.68?(this.grounded=!0,this.groundN.set(a.x,a.y,a.z)):a.y<-.6?this.vel.y>0&&(this.vel.y=0):Math.abs(a.y)<.35&&(this.wallContact={x:a.x,y:a.y,z:a.z});let o=this.vel.x*a.x+this.vel.y*a.y+this.vel.z*a.z;o<0&&(this.vel.x-=a.x*o,this.vel.y-=a.y*o,this.vel.z-=a.z*o)}if(this.grounded&&!this.sliding){let s=this.vel.dot(this.groundN);s<0&&this.vel.addScaledVector(this.groundN,-s)}}snap(){if(de.copy(this.pos),de.y-=.45,this.col.collideCapsule(de,K.radius,this.h,ka)){let e=null;for(let s of ka)s.y>.68&&(!e||s.y<e.y)&&(e=s);if(!e)return;let i=Math.hypot(de.x-this.pos.x,de.y-(this.pos.y-.45),de.z-this.pos.z),n=this.pos.y-.45+i/Math.max(.68,e.y);if(n<=this.pos.y+.05){this.pos.y=Math.min(this.pos.y,n+.001),this.grounded=!0,this.groundN.set(e.x,e.y,e.z);let s=this.vel.dot(this.groundN);s>0&&this.vel.addScaledVector(this.groundN,-s)}}}stepUp(t){let e=Math.hypot(t.x,t.z);if(e<1)return;let i=t.x/e,n=t.z/e,s=this.pos.x+i*(K.radius+.12),a=this.pos.z+n*(K.radius+.12),o=this.col.raycast(s,this.pos.y+.5,a,0,-1,0,.5,Hu);if(!o||o.ny<.7)return;let l=o.y-this.pos.y;l<.03||l>.46||this.col.capsuleFree(this.pos.x+i*.08,o.y+.02,this.pos.z+n*.08,K.radius,this.h)&&(this.pos.set(this.pos.x+i*.08,o.y+.02,this.pos.z+n*.08),this.vel.x=t.x,this.vel.z=t.z,this.vel.y<0&&(this.vel.y=0),this.grounded=!0)}canStand(){return this.col.capsuleFree(this.pos.x,this.pos.y+.02,this.pos.z,K.radius-.02,K.standH)}groundJump(){let t=this.grounded?this.groundN:Hy;if(this.vel.y=Math.max(this.vel.y,0)+K.jumpVel,t.y<.97&&(this.vel.x+=t.x*2,this.vel.z+=t.z*2),this.sliding){let e=this.hSpeedNow();if(e>1){let i=(e+.6)/e;this.vel.x*=i,this.vel.z*=i}this.ev.jump("slide")}else this.ev.jump("ground");this.sliding=!1,this.grounded=!1,this.coyoteT=0,this.jumpedTick=!0}airJump(t,e){if(this.airJumps--,this.vel.y=Math.max(this.vel.y*.25,0)+K.airJumpVel,e){let i=Math.max(this.hSpeedNow(),K.runSpeed*.85),n=this.hSpeedNow()||1,s=this.vel.x/n*.3+t.x*.7,a=this.vel.z/n*.3+t.z*.7,o=Math.hypot(s,a)||1;this.vel.x=s/o*i,this.vel.z=a/o*i}this.jumpedTick=!0,this.ev.jump("air")}onLand(t,e){let i=Math.max(0,-t);if(this.lastLand=i,this.crouching&&i>5){let n=this.hSpeedNow(),s=n>1?de.set(this.vel.x/n,0,this.vel.z/n):this.flatFwd(de),a=Math.min(i*K.slideLandFactor,10);this.vel.x+=s.x*a,this.vel.z+=s.z*a,this.sliding=!0,this.slideT=0,this.ev.slide("land",a)}else this.crouching&&this.hSpeedNow()>K.slideMinSpeed&&(this.sliding=!0,this.slideT=0,this.ev.slide("enter",0));this.ev.land(i)}startSlide(t){this.sliding=!0,this.slideT=0;let e=0;if(this.slideCd<=0){let i=this.hSpeedNow();e=Vt.clamp(K.slideTarget-i,K.slideBoostMin,K.slideBoostMax);let n=i>1?de.set(this.vel.x/i,0,this.vel.z/i):t.lengthSq()?de.copy(t):this.flatFwd(de);this.vel.x+=n.x*e,this.vel.z+=n.z*e,this.slideCd=K.slideBoostCd}this.ev.slide("enter",e)}tickSlide(t,e,i,n){this.slideT+=t,this.friction((this.easy?De.slideFriction:K.slideFriction)*(this.groundN.y>.985?1:.25),t),n&&this.steer(i,this.easy?De.slideSteer:K.slideSteer,t),this.hSpeedNow()<K.slideMinSpeed&&this.groundN.y>.985&&(this.sliding=!1)}startDash(t,e){if(this.dashCd>0)return;this.dashCharges--,this.dashRegen=Math.min(this.dashRegen,.2),this.dashCd=.22;let i=this.dashT>0?an.copy(this.dashDir).multiplyScalar(this.dashExit):an.copy(this.vel);this.dashDir.copy(t).setY(0).normalize();let n=Math.max(0,i.x*this.dashDir.x+i.z*this.dashDir.z),s=Math.hypot(i.x,i.z);this.dashExit=Math.max(n,s*.85,K.runSpeed)+K.dashGain,this.dashT=K.dashTime,this.wall&&this.endWall(),this.grapple&&this.releaseGrapple(!1),this.grounded||(this.vel.y=Math.max(this.vel.y,0)),this.grounded&&e.crouch&&(this.sliding=!0),this.ev.dash(this.dashDir)}scanWall(){if(this.nearWall=null,this.grounded)return;let t=1e9,e=K.radius+(this.easy?De.wallReach:.45);for(let i=0;i<8;i++){let n=this.yaw+i*Math.PI/4,s=Math.cos(n),a=-Math.sin(n),o=0,l=0,c=0,h=0,u=0,d=0;for(let f of[.55,1.3]){let g=this.col.raycast(this.pos.x,this.pos.y+Math.min(f,this.h-.2),this.pos.z,s,0,a,e,za,Hi.WALLRUN);g&&Math.abs(g.ny)<.3&&(o++,h=g.t,u=g.nx,d=g.nz)}o===2&&h<t&&(t=h,this.nearWall={nx:u,nz:d,dist:h})}}tryWall(t,e){if(this.airTime<.05||this.crouching)return;let i=this.nearWall;if(!i)return;let n=de.set(i.nx,0,i.nz).normalize();if(this.wallCd>0&&n.dot(this.lastWallN)>.9)return;let s=this.hSpeedNow(),a=s>.1?an.set(this.vel.x/s,0,this.vel.z/s):this.flatFwd(an),o=-a.dot(n),l=-this.flatFwd(Ou).dot(n);if((o>.75||s<4&&l>.7)&&t.fwd>0&&l>.6){!this.climbUsed&&this.vel.y>-6&&(this.climbT=K.climbTime,this.climbUsed=!0,this.wall={n:n.clone(),dir:new b,t:0,climb:!0},this.bufferT=0,this.ev.climb());return}if(s<(this.easy?De.wallrunMin:K.wallrunMin)||!this.easy&&t.fwd<=0&&Math.abs(t.right)===0||this.easy&&t.fwd<0)return;let c=new b(-n.z,0,n.x);c.dot(a)<0&&c.negate(),this.wall={n:n.clone(),dir:c,t:0,entry:Math.max(s,K.wallrunSpeed),climb:!1},this.vel.y=Vt.clamp(this.vel.y,this.easy?0:-1.5,4.5),this.airJumps=K.airJumps,this.climbUsed=!1,this.bufferT=0,this.ev.wallStart(n)}tickWall(t,e,i){let n=this.wall;n.t+=t;let s=this.nearWall,a=s&&s.nx*n.n.x+s.nz*n.n.z>.8;if(n.climb){if(this.climbT-=t,!a||this.climbT<=0||e.fwd<=0){this.wall=null,this.climbT=0,this.vel.y>0&&(this.vel.y=Math.min(this.vel.y,4));return}this.vel.y=K.climbVel*(.6+.4*(this.climbT/K.climbTime)),this.vel.x=-n.n.x*1.5,this.vel.z=-n.n.z*1.5,this.tryMantle(!0);return}if(!a||n.t>(this.easy?De.wallrunTime:K.wallrunTime)||this.grounded){this.endWall();return}s&&n.n.set(s.nx,0,s.nz).normalize(),n.dir.set(-n.n.z,0,n.n.x),n.dir.dot(this.flatFwd(de))<0&&n.dir.negate();let o=this.vel.x*n.dir.x+this.vel.z*n.dir.z,l=Math.max(n.entry,K.wallrunSpeed)+(e.fwd>0?n.t*1.2:-n.t*3),c=o+(l-o)*Math.min(1,t*4),h=this.easy?3:1.8;this.vel.x=n.dir.x*c-n.n.x*h,this.vel.z=n.dir.z*c-n.n.z*h;let u=this.easy?De.wallSagStart:.35,d=this.easy?3.5:5.5,f=n.t<u?this.easy?.6:1.2:(this.easy?.6:1.2)-(n.t-u)*d;this.vel.y+=(f-this.vel.y)*Math.min(1,t*6),(e.right!==0?this.wish(e,an).dot(n.n):0)>.6&&n.t>.15&&(this.vel.x+=n.n.x*4,this.vel.z+=n.n.z*4,this.endWall())}wallJump(t){let e=this.wall;if(e.climb)this.vel.set(e.n.x*K.wallJumpOut*1.1,K.wallJumpUp,e.n.z*K.wallJumpOut*1.1);else{let i=this.flatFwd(de),n=Math.max(this.hSpeedNow(),K.wallrunSpeed),s=this.easy?1.1:.45,a=this.easy?.5:.75,o=e.dir.x*a+e.n.x*.55+i.x*s,l=e.dir.z*a+e.n.z*.55+i.z*s,c=o*e.n.x+l*e.n.z;c<.3&&(o+=e.n.x*(.3-c),l+=e.n.z*(.3-c));let h=Math.hypot(o,l),u=n+1.2;this.vel.set(o/h*u+e.n.x*2,K.wallJumpUp,l/h*u+e.n.z*2)}this.lastWallN.copy(e.n),this.wallCd=.4,this.wall=null,this.climbT=0,this.airJumps=K.airJumps,this.jumpedTick=!0,this.steerLock=this.easy?.15:.35,this.ev.jump("wall")}endWall(){this.wall&&(this.lastWallN.copy(this.wall.n),this.wallCd=.3,this.wall=null,this.climbT=0)}tryMantle(t=!1){if(this.mantle)return!1;let e=this.flatFwd(de),i=this.col.raycast(this.pos.x,this.pos.y+.9,this.pos.z,e.x,0,e.z,K.radius+.7,za);if(!i||Math.abs(i.ny)>.3)return!1;let n=this.col.raycast(this.pos.x,this.pos.y+2.45,this.pos.z,e.x,0,e.z,K.radius+.9,Hu);if(n&&Math.abs(n.ny)<.3)return!1;let s=i.x-i.nx*.45,a=i.z-i.nz*.45,o=this.col.raycast(s,this.pos.y+2.6,a,0,-1,0,2.6,za);if(!o||o.ny<.7)return!1;let l=o.y-this.pos.y;if(l<.4||l>2.3)return!1;let c=o.x-i.nx*0+e.x*(K.radius*.6),h=o.z+e.z*(K.radius*.6);return this.col.capsuleFree(c,o.y+.03,h,K.radius,K.crouchH)?(this.mantle={from:this.pos.clone(),to:new b(c,o.y+.03,h),t:0,dur:.14+l*.05,speed:Math.max(this.hSpeedNow(),7),dir:e.clone()},this.wall=null,this.climbT=0,this.ev.mantle(),!0):!1}tickMantle(t){let e=this.mantle;e.t+=t;let i=Math.min(1,e.t/e.dur),n=1-Math.pow(1-i,2);this.pos.x=e.from.x+(e.to.x-e.from.x)*Math.max(0,(i-.35)/.65),this.pos.z=e.from.z+(e.to.z-e.from.z)*Math.max(0,(i-.35)/.65),this.pos.y=e.from.y+(e.to.y-e.from.y)*Math.min(1,n*1.4),this.vel.set(0,0,0),i>=1&&(this.mantle=null,this.vel.set(e.dir.x*e.speed,0,e.dir.z*e.speed),this.grounded=!0,this.groundN.set(0,1,0))}fireHook(t){this.grappleCharges--,this.grappleRegen=0;let e=this.lookDir(new b),i=this.eye.clone();this.hook={pos:i.clone().addScaledVector(e,.6),dir:e,traveled:0},this.ev.hookFire()}tickHook(t,e){let i=this.hook,n=K.grappleHookSpeed*t,s=e&&e.hookEnemy?e.hookEnemy(i.pos,i.dir,n):null,a=this.col.raycast(i.pos.x,i.pos.y,i.pos.z,i.dir.x,i.dir.y,i.dir.z,n,za,Hi.GRAPPLE);if(s&&(!a||s.t<a.t)){this.attach(s.point,s.enemy),this.hook=null;return}if(a){this.attach(new b(a.x,a.y,a.z),null,new b(a.nx,a.ny,a.nz)),this.hook=null;return}i.pos.addScaledVector(i.dir,n),i.traveled+=n,i.traveled>K.grappleRange&&(this.hook=null,this.ev.hookMiss(),this.grappleCharges=Math.min(K.grappleCharges,this.grappleCharges+1))}attach(t,e,i){this.grapple={point:t.clone(),enemy:e,t:0,normal:i};let n=de.subVectors(t,this.eye).normalize(),s=this.vel.dot(n);s<K.grappleYank&&this.vel.addScaledVector(n,K.grappleYank-Math.max(0,s)*.5),this.grounded&&(this.vel.y=Math.max(this.vel.y,5),this.grounded=!1),this.sliding=!1,this.wall&&this.endWall(),this.ev.hookAttach(t,!!e)}tickGrapple(t,e,i){let n=this.grapple;if(n.t+=t,n.enemy){if(!n.enemy.alive){this.releaseGrapple(!1);return}n.point.copy(n.enemy.chest)}let s=this.eye,a=de.subVectors(n.point,s),o=a.length();if(a.divideScalar(o||1),!(this.easy?!0:e.grappleHeld)||o<(n.enemy?3:2.4)||n.t>(this.easy?2.6:3.2)){this.releaseGrapple(o<3.2);return}let c=K.grapplePull*(n.enemy?1.35:1)*(o>8?1:.6+o/20);this.vel.addScaledVector(a,c*t),this.vel.y+=K.gravity*.35*t;let h=this.flatRight(an);this.vel.addScaledVector(h,e.right*9*t);let u=this.vel.length();u>55&&this.vel.multiplyScalar(55/u)}releaseGrapple(t){if(!this.grapple)return;let e=this.grapple.enemy;this.grapple=null,t&&this.vel.y<4&&(this.vel.y+=3.5),t&&!e&&this.easy&&this.tryMantle(),this.ev.hookRelease(t,e)}checkPads(){if(!(this.padCd>0)){for(let t of this.map.jumpPads)if(Math.abs(this.pos.y-t.y)<.7&&(this.pos.x-t.x)**2+(this.pos.z-t.z)**2<t.r*t.r){this.vel.y=t.power,this.vel.x*=1.1,this.vel.z*=1.1,this.grounded=!1,this.airJumps=K.airJumps,this.padCd=.4,this.sliding=!1,this.ev.pad(t);return}if(this.grounded)for(let t of this.map.boostPads){let e=this.pos.x-t.x,i=this.pos.z-t.z,n=e*t.dir.x+i*t.dir.z,s=e*t.dir.z-i*t.dir.x;if(Math.abs(n)<t.len/2&&Math.abs(s)<t.w/2&&Math.abs(this.pos.y-t.y)<.6){let a=this.vel.x*t.dir.x+this.vel.z*t.dir.z,o=32;a<o&&(this.vel.x+=t.dir.x*(o-a),this.vel.z+=t.dir.z*(o-a)),this.padCd=.5,this.ev.boost(t);return}}}}};var Lc=new b,Vy=new b,Vu=[],Gy={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},Wy={turret:{hp:60,r:.75,h:1.9,speed:2.5,score:100,name:"\uD3EC\uD0D1"},chaser:{hp:40,r:.6,h:1.2,speed:9,score:80,name:"\uCD94\uC801\uC790"},shield:{hp:90,r:.55,h:2,speed:4.5,score:150,name:"\uBC29\uD328\uBCD1"}},Si={};function Xy(){return Si.black||(Si.black=new jt({color:1447450,roughness:.45,metalness:.2}),Si.dark=new jt({color:2894899,roughness:.5,metalness:.2}),Si.red=new jt({color:15212591,roughness:.4,emissive:5242888}),Si.hot=new jt({color:16726586,roughness:.3,emissive:16719904,emissiveIntensity:1.5}),Si.white=new jt({color:15790320,roughness:.6}),Si.flash=new Se({color:16777215})),Si}var ei=(r,t,e=0,i=0,n=0)=>{let s=new kt(r,t);return s.position.set(e,i,n),s.castShadow=!0,s},Fa=class{constructor(t,e,i){let n=Xy();this.game=t,this.col=t.arena.col,this.scene=t.scene,this.type=e,this.cfg=Wy[e],this.hp=this.maxHp=Math.round(this.cfg.hp*t.D.enemyHp),this.pos=i.clone(),this.vel=new b,this.yaw=Math.random()*6,this.alive=!0,this.grounded=!1,this.center=new b,this.t=Math.random()*10,this.cd=1.5+Math.random()*1.5,this.windup=0,this.stun=0,this.flashT=0,this.spawnT=.5;let s=this.group=new pe;if(e==="turret")s.add(ei(new Xe(.35,.55,.7,12),n.dark,0,.35,0)),this.head=new pe,this.head.position.y=1.25,s.add(this.head),this.head.add(ei(new ye(1.1,1,1.1),n.black)),this.eye=ei(new Xe(.22,.22,.12,16),n.red,0,0,.58),this.eye.rotation.x=Math.PI/2,this.head.add(this.eye),this.barrel=ei(new ye(.16,.16,.5),n.dark,0,-.3,.6),this.head.add(this.barrel);else if(e==="chaser"){this.body=ei(new Ea(.6,0),n.black),this.body.position.y=.6,s.add(this.body),this.core=ei(new oi(.28,12,8),n.red),this.body.add(this.core);for(let l=0;l<8;l++){let c=ei(new Sa(.12,.45,6),n.dark),h=new b(Math.cos(l*2.4),Math.sin(l*1.7)*.8,Math.sin(l*2.4)).normalize();c.position.copy(h.clone().multiplyScalar(.62)),c.quaternion.setFromUnitVectors(new b(0,1,0),h),this.body.add(c)}}else s.add(ei(new nn(.45,1,4,10),n.black,0,.95,0)),s.add(ei(new oi(.3,12,8),n.dark,0,1.85,0)),this.eye=ei(new ye(.3,.07,.05),n.red,0,1.88,.27),s.add(this.eye),this.shield=new pe,this.shield.position.set(0,1,.75),s.add(this.shield),this.shield.add(ei(new ye(1.5,1.8,.14),n.white)),this.shield.add(ei(new ye(1.52,.1,.16),n.red,0,.6,0)),this.shield.add(ei(new ye(1.52,.1,.16),n.red,0,-.6,0));let a=this.bar=new pe,o=new kt(new Bi(1,.1),new Se({color:0,transparent:!0,opacity:.35,depthTest:!1}));this.fill=new kt(new Bi(1,.1),new Se({color:15212591,depthTest:!1})),o.renderOrder=10,this.fill.renderOrder=11,a.add(o,this.fill),a.visible=!1,this.scene.add(a),s.scale.setScalar(.01),s.position.copy(this.pos),this.scene.add(s),this.updateCenter()}updateCenter(){this.type==="chaser"?this.center.set(this.pos.x,this.pos.y+.6,this.pos.z):this.type==="turret"?this.center.set(this.pos.x,this.pos.y+1.2,this.pos.z):this.center.set(this.pos.x,this.pos.y+1.1,this.pos.z)}get hitRadius(){return this.type==="chaser"?.9:this.type==="turret"?.95:.85}facing(t){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}shieldBlocks(t){if(this.type!=="shield"||this.stun>0)return!1;let e=this.facing(Lc);return t.x*e.x+t.z*e.z<-.35}damage(t,e){return this.alive?(this.hp-=t,this.flashT=.1,this.bar.visible=!0,e&&(Lc.subVectors(this.pos,e).setY(0).normalize(),this.vel.addScaledVector(Lc,Math.min(10,t*.12))),this.hp<=0?(this.alive=!1,!0):!1):!1}update(t,e){let i=e.player;this.t+=t,this.cd-=t,this.flashT-=t,this.stun=Math.max(0,this.stun-t),this.spawnT-=t;let n=Vy.subVectors(i.pos,this.pos),s=n.y;n.y=0;let a=n.length();n.divideScalar(a||1);let l=Math.atan2(n.x,n.z)-this.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;let c=this.type==="shield"?1.6:this.type==="turret"?3:8;this.stun<=0&&this.spawnT<=0&&(this.yaw+=Math.sign(l)*Math.min(Math.abs(l),c*t));let h=0,u=0,d=this.cfg.speed,f=this.stun>0||this.spawnT>0;if(this.type==="turret"&&!f){this.windup>0?(this.windup-=t,this.windup<=0&&(e.fireOrb(this),this.cd=2+Math.random()*1.2)):this.cd<=0&&a<70&&e.canAttack(this)&&e.los(this.center,i.eye)&&(this.windup=.7*e.windMul);let x=Math.sin(this.t*.6)>0?1:-1;h=n.z*x*.6,u=-n.x*x*.6,a<8&&(h-=n.x,u-=n.z)}else this.type==="chaser"&&!f?(h=n.x,u=n.z,d=this.cfg.speed*e.speedMul,a<1.25+.4&&Math.abs(s)<1.6&&e.contact(this),s>1.5&&a<6&&this.grounded&&Math.random()<t*2&&(this.vel.y=11)):this.type==="shield"&&!f&&(this.windup>0?(this.windup-=t,d=1,this.windup<=0&&(e.shove(this),this.cd=1.6)):(h=n.x,u=n.z,a<2.6&&this.cd<=0&&e.canAttack(this)&&(this.windup=.6*e.windMul)));let g=Math.hypot(h,u);g>0&&(h/=g,u/=g);let y=this.grounded?9:1.5,p=Math.hypot(this.vel.x,this.vel.z);if(p>d+2&&this.grounded){let x=Math.exp(-5*t);this.vel.x*=x,this.vel.z*=x}else this.vel.x+=(h*d-this.vel.x)*Math.min(1,y*t),this.vel.z+=(u*d-this.vel.z)*Math.min(1,y*t);this.vel.y-=30*t;for(let x of e.foes){if(x===this||!x.alive)continue;let _=this.pos.x-x.pos.x,M=this.pos.z-x.pos.z,C=_*_+M*M,T=(this.cfg.r+x.cfg.r)**2;if(C<T&&C>1e-4){let A=Math.sqrt(C);this.vel.x+=_/A*25*t,this.vel.z+=M/A*25*t}}if(this.pos.addScaledVector(this.vel,t),this.grounded=!1,this.col.collideCapsule(this.pos,this.cfg.r,this.cfg.h,Vu))for(let x of Vu){x.y>.65&&(this.grounded=!0);let _=this.vel.x*x.x+this.vel.y*x.y+this.vel.z*x.z;_<0&&(this.vel.x-=x.x*_,this.vel.y-=x.y*_,this.vel.z-=x.z*_)}if(g>0&&this.grounded&&this.type!=="turret"){let x=this.col.raycast(this.pos.x,this.pos.y+.4,this.pos.z,h,0,u,this.cfg.r+.6,Gy);x&&Math.abs(x.ny)<.5&&(this.vel.y=9)}let m=this.game.arena.half-1;this.pos.x=Vt.clamp(this.pos.x,-m,m),this.pos.z=Vt.clamp(this.pos.z,-m,m),this.updateCenter(),this.animate(t,e,p)}animate(t,e,i){let n=Si,s=this.group,a=Math.min(1,s.scale.x+t*4);if(s.scale.setScalar(a),s.position.copy(this.pos),this.type==="chaser"){let o=new b(this.vel.z,0,-this.vel.x),l=o.length();l>.01&&this.body.rotateOnWorldAxis(o.divideScalar(l),i*t/.6),this.core.material=this.flashT>0?n.flash:n.red,this.body.position.y=.6+(this.stun>0?Math.abs(Math.sin(this.t*20))*.1:0)}else if(s.rotation.y=this.type==="turret"?0:this.yaw,this.type==="turret"){this.head.rotation.y=this.yaw;let o=this.windup>0;this.eye.material=this.flashT>0?n.flash:o&&Math.sin(this.t*40)>0?n.hot:n.red,this.eye.scale.setScalar(o?1+(.7*e.windMul-this.windup)*.8:1)}else this.eye.material=this.flashT>0?n.flash:n.red,this.shield.position.z=this.windup>0?.75-Math.max(0,this.windup)*.6:.75,this.shield.rotation.x=this.windup>0?-.3:0,this.shield.visible=!0,s.rotation.z=this.stun>0?Math.sin(this.t*18)*.15:0;this.bar.position.set(this.pos.x,this.pos.y+this.cfg.h+.45,this.pos.z),this.bar.quaternion.copy(e.camera.quaternion),this.fill.scale.x=Math.max(.001,this.hp/this.maxHp),this.fill.position.x=-(1-this.fill.scale.x)/2}shatter(t){let e=[];return this.group.updateMatrixWorld(!0),this.group.traverse(i=>{if(!i.isMesh)return;let n=new b,s=new Be,a=new b;i.matrixWorld.decompose(n,s,a);let o=new kt(i.geometry,i.material);o.position.copy(n),o.quaternion.copy(s),o.scale.copy(a),o.castShadow=!0,this.scene.add(o);let l=new b((Math.random()-.5)*8,3+Math.random()*6,(Math.random()-.5)*8);t&&l.addScaledVector(t,10),e.push({m:o,v:l,av:new b(Math.random()*14-7,Math.random()*14-7,Math.random()*14-7),life:2+Math.random()})}),this.dispose(),e}dispose(){this.scene.remove(this.group),this.scene.remove(this.bar)}};var Ba=class{constructor(t,e=3e3){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.alpha=new Float32Array(e);let i=this.geo=new re;i.setAttribute("position",new ue(this.pos,3).setUsage(rn)),i.setAttribute("color",new ue(this.col,3).setUsage(rn)),i.setAttribute("alpha",new ue(this.alpha,1).setUsage(rn)),i.setAttribute("size",new ue(this.size,1).setUsage(rn)),this.mat=new ti({transparent:!0,depthWrite:!1,uniforms:{scale:{value:300}},vertexShader:`attribute float alpha; attribute float size; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = max(2.0, size * scale / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 p = gl_PointCoord - .5; if (max(abs(p.x), abs(p.y)) > 0.5) discard; gl_FragColor = vec4(vC, vA); }"}),this.points=new xa(i,this.mat),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,{color:i=[.1,.1,.1],speed:n=7,dir:s=null,spread:a=1,size:o=.12,life:l=.6,gravity:c=14,drag:h=1.5}={}){for(let u=0;u<e;u++){let d=this.n<this.max?this.n++:Math.random()*this.max|0;this.pos[d*3]=t.x,this.pos[d*3+1]=t.y,this.pos[d*3+2]=t.z;let f=Math.random()*2-1,g=Math.random()*2-1,y=Math.random()*2-1,p=Math.hypot(f,g,y)||1;f/=p,g/=p,y/=p,s&&(f=s.x+f*a,g=s.y+g*a,y=s.z+y*a);let m=n*(.3+Math.random()*.9);this.vel[d*3]=f*m,this.vel[d*3+1]=g*m,this.vel[d*3+2]=y*m;let x=Array.isArray(i[0])?i[Math.random()*i.length|0]:i;this.col[d*3]=x[0],this.col[d*3+1]=x[1],this.col[d*3+2]=x[2],this.size[d]=o*(.5+Math.random()),this.life[d]=this.maxLife[d]=l*(.5+Math.random()*.8),this.grav[d]=c,this.drag[d]=h}}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){if(e--,n!==e){for(let a=0;a<3;a++)this.pos[n*3+a]=this.pos[e*3+a],this.vel[n*3+a]=this.vel[e*3+a],this.col[n*3+a]=this.col[e*3+a];this.size[n]=this.size[e],this.life[n]=this.life[e],this.maxLife[n]=this.maxLife[e],this.grav[n]=this.grav[e],this.drag[n]=this.drag[e]}n--;continue}let s=Math.exp(-this.drag[n]*t);this.vel[n*3]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s-this.grav[n]*t,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.03&&(this.pos[n*3+1]=.03,this.vel[n*3+1]*=-.3,this.vel[n*3]*=.6,this.vel[n*3+2]*=.6),this.alpha[n]=Math.min(1,this.life[n]/this.maxLife[n]*2)}this.n=e,this.geo.setDrawRange(0,e);let i=this.geo.attributes;i.position.needsUpdate=i.color.needsUpdate=i.alpha.needsUpdate=i.size.needsUpdate=!0}},Oa=class{constructor(t){this.scene=t,this.list=[],this.geo=new Cn(.9,1,48)}add(t,e,i=3,n=.4,s=null){let a=new kt(this.geo,new Se({color:e,transparent:!0,side:Fe,depthWrite:!1}));a.position.copy(t),s?a.lookAt(t.clone().add(s)):a.rotation.x=-Math.PI/2,this.scene.add(a),this.list.push({m:a,life:n,max:n,size:i})}update(t){for(let e=this.list.length-1;e>=0;e--){let i=this.list[e];i.life-=t;let n=1-i.life/i.max;i.m.scale.setScalar(Math.max(.01,i.size*(.15+(1-Math.pow(1-n,3))*.85))),i.m.material.opacity=Math.max(0,1-n),i.life<=0&&(this.scene.remove(i.m),i.m.material.dispose(),this.list.splice(e,1))}}},Ha=class{constructor(t,e=24,i=16734751,n=.28){this.n=e,this.width=n,this.pts=[];let s=this.geo=new re;this.p=new Float32Array(e*2*3),this.a=new Float32Array(e*2),s.setAttribute("position",new ue(this.p,3).setUsage(rn)),s.setAttribute("alpha",new ue(this.a,1).setUsage(rn));let a=[];for(let o=0;o<e-1;o++){let l=o*2;a.push(l,l+1,l+2,l+1,l+3,l+2)}s.setIndex(a),this.mat=new ti({transparent:!0,depthWrite:!1,side:Fe,uniforms:{color:{value:new wt(i)}},vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color, vA * 0.75); }"}),this.mesh=new kt(s,this.mat),this.mesh.frustumCulled=!1,t.add(this.mesh)}reset(){this.pts.length=0}update(t,e,i){i?(this.pts.unshift(t.clone()),this.pts.length>this.n&&this.pts.pop()):this.pts.length&&this.pts.pop();let n=this.pts.length;if(this.mesh.visible=n>1,n<2)return;let s=new b,a=new b,o=new b;for(let l=0;l<this.n;l++){let c=this.pts[Math.min(l,n-1)],h=this.pts[Math.min(l+1,n-1)]||c;a.subVectors(c,h),a.lengthSq()<1e-6&&a.set(1,0,0),o.subVectors(e,c),s.crossVectors(a,o).normalize().multiplyScalar(this.width*(1-l/this.n)),this.p.set([c.x+s.x,c.y+s.y,c.z+s.z],l*6),this.p.set([c.x-s.x,c.y-s.y,c.z-s.z],l*6+3);let u=l<n?1-l/Math.min(this.n,n):0;this.a[l*2]=this.a[l*2+1]=u}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}},Va=class{constructor(t,e=90){this.n=e,this.arr=new Float32Array(e*6),this.pts=Array.from({length:e},()=>new b(1e5,0,0));let i=this.geo=new re;i.setAttribute("position",new ue(this.arr,3).setUsage(rn)),this.mat=new Oi({color:8158328,transparent:!0,opacity:0,depthWrite:!1}),this.mesh=new gs(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.dir=new b,this.side=new b,this.up=new b,this.tmp=new b}update(t,e,i){if(i<.02){this.mesh.visible=!1;return}let n=e.length();if(n<1){this.mesh.visible=!1;return}this.mesh.visible=!0,this.mat.opacity=Math.min(.6,i*.6);let s=this.dir.copy(e).divideScalar(n);this.side.set(-s.z,0,s.x),this.side.lengthSq()<1e-4&&this.side.set(1,0,0),this.side.normalize(),this.up.crossVectors(this.side,s).normalize();let a=Math.min(9,n*.12);for(let o=0;o<this.n;o++){let l=this.pts[o],c=this.tmp.subVectors(l,t);if(c.dot(s)<-4||c.lengthSq()>45*45){let u=Math.random()*Math.PI*2,d=3.5+Math.random()*9;l.copy(t).addScaledVector(s,12+Math.random()*30).addScaledVector(this.side,Math.cos(u)*d).addScaledVector(this.up,Math.sin(u)*d*.7),l.y<.15&&(l.y=.15+Math.random()*.5)}this.arr[o*6]=l.x,this.arr[o*6+1]=l.y,this.arr[o*6+2]=l.z,this.arr[o*6+3]=l.x-s.x*a,this.arr[o*6+4]=l.y-s.y*a,this.arr[o*6+5]=l.z-s.z*a}this.geo.attributes.position.needsUpdate=!0}};var Qs={disc:{id:"disc",name:"\uC6D0\uBC18",desc:"\uAE30\uBCF8 \xB7 \uD295\uAE38 \uB54C\uB9C8\uB2E4 +35%",speed:46,carry:.7,maxBounces:3,outTime:.95,returnSpeed:58,returnTurn:9,catchDist:1.7,radius:.35,dmg:40,returnDmg:30,bounceMul:.35,blinkSlam:45,blinkRadius:3.8,knock:5,scale:1,blades:3,trail:.25},heavy:{id:"heavy",name:"\uD574\uBA38",desc:"\uB290\uB9AC\uC9C0\uB9CC \uD06C\uACE0 \uBB35\uC9C1 \xB7 \uCDA9\uACA9\uD30C \uAC15\uD654",speed:33,carry:.6,maxBounces:1,outTime:1.15,returnSpeed:46,returnTurn:7,catchDist:2,radius:.62,dmg:58,returnDmg:38,bounceMul:.25,blinkSlam:56,blinkRadius:4.8,knock:11,scale:1.75,blades:6,trail:.5},rail:{id:"rail",name:"\uB808\uC77C",desc:"\uC544\uC8FC \uBE60\uB974\uACE0 \uBA40\uB9AC \xB7 \uBCBD\uC5D0 \uB9DE\uC73C\uBA74 \uADC0\uD658",speed:78,carry:.5,maxBounces:0,outTime:.75,returnSpeed:72,returnTurn:12,catchDist:1.7,radius:.26,dmg:52,returnDmg:22,bounceMul:0,blinkSlam:38,blinkRadius:3.2,knock:6,scale:.72,blades:2,trail:.15},boomerang:{id:"boomerang",name:"\uBD80\uBA54\uB791",desc:"\uD06C\uAC8C \uD718\uC5B4 \uB3CC\uC544\uC624\uBA70 \uB450 \uBC88 \uB54C\uB9BC",speed:40,carry:.7,maxBounces:2,outTime:.6,returnSpeed:50,returnTurn:3.2,catchDist:1.9,radius:.42,dmg:34,returnDmg:34,bounceMul:.3,blinkSlam:42,blinkRadius:3.8,knock:5,scale:1.15,blades:2,trail:.32}},Tx=Qs.disc,on=new b,Dc=new b,qy={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0};function tr(r,t,e=1){let i=new pe,n=new kt(new ys(.34*e,.06*e*(t.id==="heavy"?1.5:1),10,40),new jt({color:r,roughness:.35,emissive:new wt(r).multiplyScalar(.25)})),s=new kt(new Xe(.3*e,.3*e,.05*e*(t.id==="heavy"?2:1),32),new jt({color:1710622,roughness:.4}));s.rotation.x=Math.PI/2;let a=new kt(new Xe(.1*e,.1*e,.07*e,16),new jt({color:r}));a.rotation.x=Math.PI/2;let o=new jt({color:16777215}),l=t.id==="boomerang"?2.6:t.id==="rail"?1.8:1;for(let c=0;c<t.blades;c++){let h=new kt(new ye(.06*e,.16*e*l,.04*e),o),u=c/t.blades*Math.PI*2,d=(.42+(l-1)*.08)*e;h.position.set(Math.cos(u)*d,Math.sin(u)*d,0),h.rotation.z=u,i.add(h)}return i.add(n,s,a),n.castShadow=s.castShadow=!0,i}var ws=class r{constructor(t,e=null,i=16734751,n="disc"){this.game=t,this.owner=e,this.color=i,this.state="hand",this.pos=new b,this.vel=new b,this.t=0,this.bounces=0,this.hit=new Set,this.blinked=!1,this.catchCd=0,this.kills=0,this.id=r.nextId=(r.nextId||0)+1,this.leg=0,this.reflectedBy=null,this.holder=new pe,this.holder.visible=!1,t.scene.add(this.holder),this.trail=new Ha(t.scene,22,i,.25),this.setWeapon(n)}setWeapon(t){this.w=Qs[t]||Qs.disc,this.spinner&&this.holder.remove(this.spinner),this.spinner=this.mesh=tr(this.color,this.w,this.w.scale),this.holder.add(this.spinner)}get body(){return this.owner?this.owner.body:this.game.player}dispose(){this.game.scene.remove(this.holder),this.game.scene.remove(this.trail.mesh)}get out(){return this.state!=="hand"}throw(t,e,i,n=1){if(this.state!=="hand"||this.catchCd>0)return!1;let s=this.w;this.state="out",this.t=0,this.bounces=0,this.hit.clear(),this.blinked=!1,this.kills=0,this.leg++,this.homing=0,this.bonus=0,this.lock=null,this.cone=0,this.range=0,this.reflectedBy=null;let a=Math.max(0,i.dot(e))*s.carry;return this.pos.copy(t),this.vel.copy(e).multiplyScalar((s.speed+a)*n),this.holder.visible=!0,this.trail.reset(),this.trail.width=s.trail,!0}recall(){return this.state!=="out"?!1:(this.state="return",this.hit.clear(),this.leg++,this.reflectedBy&&this.hit.add(this.reflectedBy),!0)}caught(){this.state="hand",this.holder.visible=!1,this.catchCd=.12,this.reflectedBy=null}speedMul(){return Vt.clamp(this.vel.length()/this.w.speed,1,2)}tick(t){if(this.catchCd-=t,this.state==="hand")return;let e=this.game,i=e.arena.col,n=this.w,s=n.radius;if(this.t+=t,this.state==="out"){this.homing>0&&e.discHoming(this,t);let a=this.vel.length()*t;for(let o=0;o<5&&a>1e-4;o++){let l=this.vel.length();on.copy(this.vel).divideScalar(l);let c=i.raycast(this.pos.x,this.pos.y,this.pos.z,on.x,on.y,on.z,a+s,qy),h=!!c&&c.t-s<a,u=c?c.x:0,d=c?c.y:0,f=c?c.z:0,g=c?c.nx:0,y=c?c.ny:0,p=c?c.nz:0,m=h?Math.max(0,c.t-s):a,x=Dc.copy(this.pos).addScaledVector(on,m),_=e.discSweep(this,this.pos,x,"out");if(_){a-=this.pos.distanceTo(_),this.pos.copy(_);continue}if(this.pos.copy(x),a-=m,!h)break;let M=new b(g,y,p),C=this.vel.dot(M);if(this.vel.addScaledVector(M,-2*C),M.y>.7&&(this.vel.y=Math.abs(this.vel.y)*.6),this.bounces++,e.onDiscBounce(this,new b(u,d,f),M),this.bounces>n.maxBounces){this.recall();break}}if(this.state==="out"){let o=e.arena,l=o.half-s,c=0,h=0,u=0;this.pos.y>o.ceiling&&this.vel.y>0&&(this.pos.y=o.ceiling,this.vel.y=-this.vel.y,h=-1),Math.abs(this.pos.x)>l&&this.vel.x*this.pos.x>0&&(c=-Math.sign(this.pos.x),this.pos.x=Math.sign(this.pos.x)*l,this.vel.x=-this.vel.x),Math.abs(this.pos.z)>l&&this.vel.z*this.pos.z>0&&(u=-Math.sign(this.pos.z),this.pos.z=Math.sign(this.pos.z)*l,this.vel.z=-this.vel.z),(c||h||u)&&(this.bounces++,e.onDiscBounce(this,this.pos.clone(),new b(c,h,u).normalize()),this.bounces>n.maxBounces&&this.recall())}this.state==="out"&&this.t>n.outTime+this.bounces*.12&&this.recall()}if(this.state==="return"){let a=this.body,o=on.copy(a.eye).addScaledVector(a.vel,.04),l=Dc.subVectors(o,this.pos),c=l.length();if(c<n.catchDist){e.onDiscCatch(this);return}let h=l.divideScalar(c).multiplyScalar(n.returnSpeed+a.speed);this.vel.lerp(h,Math.min(1,t*n.returnTurn));let u=Dc.copy(this.pos).addScaledVector(this.vel,t);e.discSweep(this,this.pos,u,"return"),this.pos.copy(u),this.t>4&&e.onDiscCatch(this)}}blinkSpot(t){let e=on.copy(this.vel).normalize();for(let i=0;i<=8;i++)for(let n of i?[-1,1]:[1]){let s=n*i*.4;for(let a of[0,.6,1.2]){let o=this.pos.x-e.x*s,l=this.pos.z-e.z*s,c=Math.max(0,this.pos.y-.9-e.y*s)+a;if(t.capsuleFree(o,c,l,.4,1.8))return new b(o,c,l)}}return null}render(t){if(this.state==="hand")return;this.holder.position.copy(this.pos);let e=on.copy(this.vel).normalize();this.holder.rotation.set(-Math.PI/2+e.y*.6,0,0),this.spinner.rotation.z+=t*(this.w.id==="heavy"?16:30)}};var Un={reflect:{id:"reflect",name:"\uBC18\uC0AC\uB9C9",desc:"0.6\uCD08 \uB3D9\uC548 \uB0A0\uC544\uC624\uB294 \uC6D0\uBC18\xB7\uAD6C\uCCB4\xB7\uCDA9\uACA9\uD30C\uB97C \uB418\uBC1B\uC544\uCE68",cd:7,dur:.6},overdrive:{id:"overdrive",name:"\uC624\uBC84\uB4DC\uB77C\uC774\uBE0C",desc:"4\uCD08\uAC04 \uB354 \uBE68\uB9AC \uB2EC\uB9AC\uACE0 \uB300\uC2DC \uBB34\uD55C \xB7 \uC6D0\uBC18 +25% \uC18D\uB3C4",cd:13,dur:4},gravity:{id:"gravity",name:"\uC911\uB825\uD0C4",desc:"\uB5A8\uC5B4\uC9C4 \uACF3\uC73C\uB85C \uC801\uC744 1.4\uCD08\uAC04 \uB04C\uC5B4\uB2F9\uAE40",cd:9,dur:1.4},heal:{id:"heal",name:"\uC7AC\uC0DD",desc:"\uC989\uC2DC \uCCB4\uB825 +35, 2\uCD08\uAC04 \uCD94\uAC00 \uD68C\uBCF5",cd:14,dur:2}},Uc={start:["\u314E\u3147","\uAC00\uBCF4\uC790\uACE0","\uC798 \uBD80\uD0C1~","\uC190 \uD480\uACE0 \uC634","\uC624\uB298 \uCEE8\uB514\uC158 \uC88B\uC74C","\uC0B4\uC0B4 \uD574\uC918\uC694"],kill:["\u314B\u314B","\uB098\uC774\uC2A4","\uC7A1\uC558\uB2E4","\uAE54\uB054","\uC774\uAC8C \uB418\uB124","\uC624\uCF00\uC774"],bank:["\uCFE0\uC158 \uBD24\uB0D0\u314B\u314B","\uBCBD \uB9DE\uACE0 \uB4E4\uC5B4\uAC10","\uAC01 \uB098\uC654\uC9C0"],slam:["\uC21C\uAC04\uC774\uB3D9 \uB9DB \uC5B4\uB54C","\uB4A4\uC5D0 \uC788\uC5C8\uC9C0\uB871","\uCF85"],death:["\uC544 \u314B\u314B","\uC778\uC815","\uC640 \uADF8\uAC78 \uB9DE\uD788\uB124","\uB2E4\uC74C\uC5D4 \uC548 \uBD10\uC90C","\uBC29\uC2EC\uD588\uB2E4","\uC798\uD558\uB124"],reflected:["?","\uBC18\uC0AC \uC2E4\uD654\uB0D0","\uC544 \uADF8\uAC70 \uC788\uC5C8\uC9C0"],streak:["3\uC5F0\uC18D~","\uB9C9\uC744 \uC0AC\uB78C?","\uC624\uB298 \uC880 \uB418\uB294 \uB0A0"],retreat:["\uD53C \uC5C6\uB2E4 \uBE60\uC9D0","\uC7A0\uAE50\uB9CC","\uD6C4\uD1F4!"],win:["gg","gg wp","\uC7AC\uBC0C\uC5C8\uB2E4"],lose:["gg","gg \uC798\uD558\uC2DC\uB124","\uD55C \uD310 \uB354?"]},Gu=r=>r[Math.random()*r.length|0];var er=(r,t,e)=>r.map((i,n)=>i+(t[n]-i)*e),Nc=r=>1-Math.pow(1-r,3),Ga=class{constructor(){this.scene=new ps,this.camera=new Pe(60,1,.01,10),this.scene.add(new vs(16777215,13619151,1.8));let t=new _s(16777215,1.6);t.position.set(1,2,1),this.scene.add(t);let e=new jt({color:13619146,roughness:.85}),i=new jt({color:2236966,roughness:.6}),n=new jt({color:16734751,roughness:.4,emissive:4198400}),s=new jt({color:1710622,roughness:.4}),a=l=>{let c=new kt(new Xe(.045,.06,.44,12),e);c.rotation.x=Math.PI/2,c.position.set(0,-.02,.27),l.add(c);let h=new kt(new Xe(.051,.051,.03,12),n);h.rotation.x=Math.PI/2,h.position.set(0,-.02,.08),l.add(h),l.add(new kt(new ye(.08,.09,.1),i));let u=new kt(new ye(.022,.022,.06),i);u.position.set(.045,.03,-.03),l.add(u)};this.right=new pe,this.scene.add(this.right),a(this.right),this.left=new pe,this.scene.add(this.left),a(this.left),this.right.scale.setScalar(.6),this.left.scale.setScalar(.6),this.left.visible=!1;let o=this.disc=new pe;this.setWeapon(Qs.disc,16734751),o.scale.setScalar(.7),o.rotation.x=-Math.PI/2+.22,o.position.set(-.02,.03,-.12),this.right.add(o),this.t=0,this.bob=0,this.swayX=0,this.swayY=0,this.anim=null,this.leftAnim=null}setWeapon(t,e){this.disc.clear(),this.disc.add(tr(e,t,.5*Math.min(1.1,t.scale)))}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}throwAnim(){this.anim={t:0,dur:.28,k:"throw"}}catchAnim(){this.anim={t:0,dur:.22,k:"catch"}}blinkAnim(){this.leftAnim={t:0,dur:.35}}update(t,e){this.t+=t,this.swayX+=(-e.mx*5e-4-this.swayX)*Math.min(1,t*12),this.swayY+=(e.my*5e-4-this.swayY)*Math.min(1,t*12),this.swayX=Vt.clamp(this.swayX,-.06,.06),this.swayY=Vt.clamp(this.swayY,-.05,.05),e.grounded&&(this.bob+=t*(3+e.hs*.6));let i=e.grounded?Math.min(1,e.hs/11):0,n=Math.sin(this.bob)*.012*i,s=-Math.abs(Math.cos(this.bob))*.015*i,a=Vt.clamp(-e.vy*.003,-.04,.05),o=[.25,-.24,-.5,.15,-.15,.1],l=e.discOut;if(l&&(o=[.3,-.52,-.45,-.35,-.1,.2]),this.anim){let h=this.anim;h.t+=t;let u=Math.min(1,h.t/h.dur);if(h.k==="throw"){let d=[.38,-.2,-.3,.2,.6,.4],f=[0,-.18,-.75,-.25,-.5,-.2];o=u<.3?er(o,d,Nc(u/.3)):u<.6?er(d,f,Nc((u-.3)/.3)):er(f,o,(u-.6)/.4)}else{let d=Math.sin(u*Math.PI);o=er(o,[.24,-.22,-.52,.35,-.2,.2],d)}u>=1&&(this.anim=null)}this.disc.visible=!l,this.right.position.set(o[0]+this.swayX+n,o[1]+this.swayY+s+a,o[2]),this.right.rotation.set(o[3]+this.swayY*2,o[4]+this.swayX*2,o[5]);let c=[-.3,-.42,-.4,-.2,.2,-.1];if(this.leftAnim){let h=this.leftAnim;h.t+=t;let u=Math.min(1,h.t/h.dur),d=u<.3?Nc(u/.3):1-(u-.3)/.7;c=er(c,[-.12,-.12,-.62,.05,0,-.3],d),u>=1&&(this.leftAnim=null)}this.left.visible=!!this.leftAnim,this.left.position.set(c[0]+this.swayX+n,c[1]+this.swayY+s+a,c[2]),this.left.rotation.set(c[3]+this.swayY*2,c[4]+this.swayX*2,c[5]),this.disc.rotation.z+=t*(l?0:1.5)}};var Wu=[{name:"VEGA",color:3107839},{name:"NOVA",color:1484900},{name:"KITE",color:9063935},{name:"FLUX",color:14723072},{name:"ECHO",color:16727972},{name:"RAZE",color:1223096}],Yy=new b,ln=class{constructor(t,{name:e,color:i,isBot:n,body:s=null,disc:a=null,weapon:o="disc",skill:l="reflect"}){this.game=t,this.name=e,this.color=i,this.isBot=n,this.css="#"+i.toString(16).padStart(6,"0"),this.body=s||new Ss(t.arena,t.botEvents(this)),this.body.easy=!0,this.body.noWall=!0,this.disc=a||new ws(t,this,i,o),this.disc.owner=this,this.skill=l,this.skillCd=0,this.reflectT=0,this.overT=0,this.healT=0,this.hp=100,this.kills=0,this.deaths=0,this.alive=!0,this.respawnT=0,this.protT=0,this.invulnT=0,this.regenT=0,this.lastHitBy=null,this.lastHitT=-9,this.streak=0,this.st={throws:0,hits:0,blinks:0,slams:0,dodges:0,bank:0,ret:0},this.center=new b,this.brain=null,n&&this.buildModel()}get invuln(){return this.body.invuln||this.invulnT>0||this.protT>0}updateCenter(){let t=this.body.pos;return this.center.set(t.x,t.y+1,t.z),this.center}buildModel(){let t=new jt({color:1973796,roughness:.55,metalness:.1}),e=this.teamMat=new jt({color:this.color,roughness:.4,emissive:new wt(this.color).multiplyScalar(.3)}),i=new jt({color:15921904,roughness:.6}),n=(u,d,f=0,g=0,y=0)=>{let p=new kt(u,d);return p.position.set(f,g,y),p.castShadow=!0,p},s=this.model=new pe,a=this.torso=new pe;s.add(a),a.add(n(new nn(.31,.55,4,12),t,0,.98,0));let o=n(new ys(.32,.05,8,24),e,0,.92,0);o.rotation.x=Math.PI/2,a.add(o),a.add(n(new ye(.42,.22,.08),i,0,1.2,.27)),this.head=n(new oi(.21,16,12),t,0,1.64,0),a.add(this.head),this.head.add(n(new ye(.32,.08,.1),e,0,.02,-.17)),this.legs=[];for(let u of[-1,1]){let d=new pe;d.position.set(u*.13,.55,0),d.add(n(new nn(.09,.36,4,8),t,0,-.27,0)),s.add(d),this.legs.push(d)}this.arm=new pe,this.arm.position.set(.36,1.28,0),a.add(this.arm),this.arm.add(n(new nn(.075,.36,4,8),t,0,-.22,0));let l=this.handDisc=new pe;l.position.set(.04,-.45,-.12),l.rotation.y=Math.PI/2,this.arm.add(l),this.setHandDisc(),this.dome=new kt(new oi(1.15,24,16),new Se({color:this.color,transparent:!0,opacity:.22,depthWrite:!1})),this.dome.position.y=1,this.dome.visible=!1,s.add(this.dome);let c=this.bubbleCanvas=document.createElement("canvas");c.width=512,c.height=96,this.bubbleTex=new Rn(c),this.bubbleTex.colorSpace=ze,this.bubble=new $s(new ms({map:this.bubbleTex,depthTest:!1,transparent:!0})),this.bubble.renderOrder=21,this.bubble.visible=!1,this.bubble.position.y=2.95,s.add(this.bubble),this.bubbleT=0;let h=this.tagCanvas=document.createElement("canvas");h.width=256,h.height=64,this.tagTex=new Rn(h),this.tagTex.colorSpace=ze,this.tag=new $s(new ms({map:this.tagTex,depthTest:!1,transparent:!0})),this.tag.scale.set(1.6,.4,1),this.tag.renderOrder=20,s.add(this.tag),this.tag.position.y=2.35,this._tagHp=-1,this.drawTag(),this.game.scene.add(s),this.walk=0,this.lean=0,this.throwT=0}setHandDisc(){this.handDisc&&(this.handDisc.clear(),this.handDisc.add(tr(this.color,this.disc.w,.5*Math.min(1.4,this.disc.w.scale))))}say(t,e=2.6){if(!this.bubble)return;let i=this.bubbleCanvas.getContext("2d");i.clearRect(0,0,512,96),i.font='700 34px "Noto Sans KR", sans-serif',i.textAlign="center",i.textBaseline="middle";let n=Math.min(500,i.measureText(t).width+40);i.fillStyle="rgba(22,22,26,.88)";let s=256-n/2;i.beginPath(),i.roundRect?i.roundRect(s,10,n,64,18):i.rect(s,10,n,64),i.fill(),i.beginPath(),i.moveTo(240,74),i.lineTo(256,92),i.lineTo(272,74),i.fill(),i.fillStyle="#fff",i.fillText(t,256,43),this.bubbleTex.needsUpdate=!0,this.bubble.visible=!0,this.bubbleT=e}drawTag(){let t=this.tagCanvas.getContext("2d"),e=Math.max(0,Math.round(this.hp));e!==this._tagHp&&(this._tagHp=e,t.clearRect(0,0,256,64),t.font='700 26px "Space Grotesk", "Noto Sans KR", sans-serif',t.textAlign="center",t.lineWidth=5,t.strokeStyle="rgba(255,255,255,.95)",t.strokeText(this.name,128,27),t.fillStyle=this.css,t.fillText(this.name,128,27),t.fillStyle="rgba(0,0,0,.22)",t.fillRect(48,40,160,10),t.fillStyle=e<35?"#e8202f":"#16161a",t.fillRect(48,40,160*e/100,10),this.tagTex.needsUpdate=!0)}renderModel(t,e,i){if(!this.model)return;let n=this.body,s=this.model;if(s.visible=this.alive&&!(this.protT>0&&Math.sin(i*40)>.3),!this.alive)return;s.position.set(n.prevPos.x+(n.pos.x-n.prevPos.x)*e,n.prevPos.y+(n.pos.y-n.prevPos.y)*e,n.prevPos.z+(n.pos.z-n.prevPos.z)*e),s.rotation.y=n.yaw;let a=n.hSpeed,o=n.flatFwd(Yy),l=n.vel.x*o.x+n.vel.z*o.z;this.lean+=(Vt.clamp(-l*.012,-.35,.35)-this.lean)*Math.min(1,t*8),this.torso.rotation.x=this.lean,n.grounded&&(this.walk+=t*(2+a*.9));let c=n.grounded?Math.sin(this.walk)*Math.min(1,a/8)*.8:.5;this.legs[0].rotation.x=n.grounded?c:-.6,this.legs[1].rotation.x=n.grounded?-c:.3,this.head.rotation.x=n.pitch*.6,this.throwT=Math.max(0,this.throwT-t);let h=this.throwT>0?Math.sin((1-this.throwT/.25)*Math.PI):0;this.arm.rotation.x=.35+n.pitch*.5+h*1.4,this.arm.rotation.z=-.15,this.handDisc.visible=this.disc.state==="hand",this.dome.visible=this.reflectT>0,this.dome.visible&&(this.dome.scale.setScalar(.9+Math.sin(i*30)*.05),this.dome.material.opacity=.1+this.reflectT*.15),this.teamMat.emissiveIntensity=this.overT>0?2.2+Math.sin(i*20)*.6:1,this.bubbleT>0&&(this.bubbleT-=t,this.bubbleT<=0&&(this.bubble.visible=!1)),this.handDisc.rotation.z+=t*2,this.drawTag();let d=.4+Math.max(4,s.position.distanceTo(this.game.camera.position))*.035;this.tag.scale.set(d*4,d,1),this.bubble.scale.set(d*4.4,d*.83,1),this.bubble.position.y=2.35+d*.9}shatter(t){let e=[];return this.model&&(this.model.updateMatrixWorld(!0),this.model.traverse(i=>{if(!i.isMesh||!i.visible)return;let n=new b,s=new Be,a=new b;i.matrixWorld.decompose(n,s,a);let o=new kt(i.geometry,i.material);o.position.copy(n),o.quaternion.copy(s),o.scale.copy(a),o.castShadow=!0,this.game.scene.add(o);let l=new b((Math.random()-.5)*8,3+Math.random()*6,(Math.random()-.5)*8);t&&l.addScaledVector(t,9),e.push({m:o,v:l,av:new b(Math.random()*14-7,Math.random()*14-7,Math.random()*14-7),life:2+Math.random()})}),this.model.visible=!1),e}dispose(){this.model&&this.game.scene.remove(this.model),this.isBot&&this.disc.dispose()}};var Vi={easy:{name:"\uC26C\uC6C0",react:.42,err:.075,aimK:45,aimZ:.55,turn:6,align:.12,lead:.5,gravity:!1,bank:0,lob:0,recall:.2,slam:.12,dodge:.03,dodgeLead:.06,bhop:.15,strafe:.55,strafeMin:.9,strafeMax:2,think:.3,pause:.6,escape:0,mobility:0,fov:.75,hear:.5,mem:2.5,tech:.1,skillUse:.3,mistake:.25},normal:{name:"\uBCF4\uD1B5",react:.27,err:.04,aimK:95,aimZ:.6,turn:10,align:.07,lead:.85,gravity:!0,bank:.25,lob:.2,recall:.5,slam:.4,dodge:.1,dodgeLead:.08,bhop:.45,strafe:.8,strafeMin:.6,strafeMax:1.5,think:.18,pause:.3,escape:.4,mobility:.3,fov:.9,hear:.75,mem:3.5,tech:.4,skillUse:.55,mistake:.12},hard:{name:"\uC5B4\uB824\uC6C0",react:.17,err:.018,aimK:170,aimZ:.65,turn:18,align:.04,lead:1,gravity:!0,bank:.8,lob:.6,recall:.85,slam:.75,dodge:.22,dodgeLead:.1,bhop:.75,strafe:1,strafeMin:.35,strafeMax:1.1,think:.1,pause:.12,escape:.8,mobility:.6,fov:1.05,hear:.9,mem:5,tech:.75,skillUse:.8,mistake:.05},max:{name:"\uCD5C\uAC15",react:.1,err:.008,aimK:320,aimZ:.7,turn:30,align:.02,lead:1,gravity:!0,bank:1,lob:1,recall:1,slam:1,dodge:.35,dodgeLead:.11,bhop:1,strafe:1,strafeMin:.22,strafeMax:.9,think:.05,pause:.02,escape:1,mobility:1,fov:1.2,hear:1,mem:7,tech:.95,skillUse:.95,mistake:.02}},cn=[{id:"rusher",name:"\uB3CC\uACA9\uD615",aggro:.9,caution:.2,flair:.6,patience:.15,chatty:1,band:[5,12],weapons:["heavy","disc"],skills:["overdrive","heal"]},{id:"sniper",name:"\uC800\uACA9\uD615",aggro:.35,caution:.7,flair:.3,patience:.8,chatty:.6,band:[18,32],weapons:["rail"],skills:["reflect","gravity"]},{id:"trick",name:"\uACE1\uC608\uD615",aggro:.65,caution:.4,flair:1,patience:.35,chatty:.9,band:[9,18],weapons:["boomerang","disc"],skills:["gravity","overdrive"]},{id:"guard",name:"\uC218\uBE44\uD615",aggro:.45,caution:.85,flair:.4,patience:.6,chatty:.5,band:[12,22],weapons:["disc","heavy"],skills:["reflect","heal"]}],$y=K.gravity,Zy=[-.12,-.06,-.02,.03,.09,.17],kc=[[-17,-17],[17,-17],[-17,17],[17,17],[0,-30],[0,30],[-30,0],[30,0],[0,0]],ir=new b,Jy=new b,nr=new b,Nn=new b,Es=new b,Ky=new b,ci=new b,xe=new b,_e=new b,Oe=new b,Wa=new b,Xa=new b,zc={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},jy={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},qe=Vt.clamp,Xu=r=>{for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return r},qa=(r,t)=>qe(r+(Math.random()-.5)*t,0,1.2),kn=class{constructor(t,e,i="max",n=null){this.G=t,this.f=e,this.key=Vi[i]?i:"max",this.S=Vi[this.key];let s=n||cn[3];this.p={...s,aggro:qa(s.aggro,.2),caution:qa(s.caution,.2),flair:qa(s.flair,.2),patience:qa(s.patience,.2)},this.inp={fwd:0,right:0,jumpPressed:!1,jumpHeld:!1,crouch:!1,dashPressed:!1,grapplePressed:!1,grappleHeld:!1,autoHop:!0},this.tilt=0,this.confidence=0,this.reset()}reset(){this.target=null,this.known=new Map,this.thinkT=0,this.decideT=0,this.intent="roam",this.intentStart=0,this.flankSide=Math.random()<.5?1:-1,this.strafe=Math.random()<.5?1:-1,this.strafeT=0,this.pv=new Map,this.rolls=new Map,this.cool=.25+Math.random()*.3,this.waitT=0;let t=this.f.body;this.aimYaw=t.yaw,this.aimPitch=0,this.vYaw=0,this.vPitch=0,this.ph=Math.random()*100,this.lastWant=null,this.reactUntil=0,this.plan=null,this.lastBank=-9,this.slamHold=0,this.hopT=0,this.hopOn=!1,this.stuckT=0,this.jumpNow=!1,this.macro=null,this.techCd=1+Math.random(),this.skillPlan=null,this.travelDir=null,this.dest=new b,this.wanderT=0,this.lookAround=0,this.lastHurtT=-9}roll(t,e){let i=this.rolls.get(t);return i===void 0&&(i=Math.random()<e,this.rolls.set(t,i),this.rolls.size>80&&this.rolls.delete(this.rolls.keys().next().value)),i}get now(){return this.G.gameTime}sense(){let t=this.G,e=this.f,i=e.body,n=this.now;i.lookDir(Es);for(let s of t.fighters){if(s===e)continue;if(!s.alive){this.known.delete(s);continue}let a=s.updateCenter();Xa.subVectors(a,ir);let o=Xa.length()||1;Xa.divideScalar(o);let l=Math.acos(qe(Xa.dot(Es),-1,1)),c=o<7*this.S.hear,h=(l<this.S.fov||c)&&t.los(ir,a),u=this.known.get(s);h?(u||(u={pos:new b,vel:new b,t:n,seen:!1,first:n},this.known.set(s,u)),u.seen||(u.first=n),u.pos.copy(s.body.pos),u.vel.copy(s.body.vel),u.t=n,u.seen=!0):u&&(u.seen=!1,n-u.t>this.S.mem&&this.known.delete(s))}}hear(t,e){let i=this.known.get(t);i||(i={pos:new b,vel:new b,t:0,seen:!1,first:this.now},this.known.set(t,i)),!i.seen&&(i.pos.set(e.x+(Math.random()-.5)*3,t.body.pos.y,e.z+(Math.random()-.5)*3),i.vel.set(0,0,0),i.t=this.now)}onHurt(t){if(this.lastHurtT=this.now,t&&t!==this.f){this.hear(t,t.body.pos);let e=this.target&&this.known.get(this.target);(!e||!e.seen)&&(this.target=t)}}onKill(){this.confidence=Math.min(1,this.confidence+.35)}onDeath(t){this.tilt=1,this.revenge=t,this.confidence=Math.max(0,this.confidence-.4)}seen(t){let e=this.known.get(t);return!!(e&&e.seen)}perceive(t){let e=Math.min(1,t/this.S.react);for(let i of this.G.fighters){if(i===this.f)continue;let n=this.pv.get(i);n||(n=i.body.vel.clone(),this.pv.set(i,n)),this.seen(i)?n.lerp(i.body.vel,e):n.multiplyScalar(Math.exp(-3*t))}}predict(t,e,i){let n=this.known.get(t);if(n&&!n.seen)return i.set(n.pos.x,n.pos.y+1,n.pos.z),i;let s=t.body,a=this.pv.get(t)||s.vel,o=this.S.lead;i.set(s.pos.x+a.x*e*o,s.pos.y+1,s.pos.z+a.z*e*o),s.grounded||(i.y+=(this.S.gravity?a.y*e-.5*$y*e*e:a.y*e)*o),i.y<.8&&(i.y=.8);let l=this.G.arena.half-.6;return i.x=qe(i.x,-l,l),i.z=qe(i.z,-l,l),i}intercept(t,e,i){let n=this.f.body,s=this.f.disc.w,a=this.f.overT>0?1.25:1,o=e.body.pos.distanceTo(t)/s.speed;for(let l=0;l<4;l++){this.predict(e,o,i);let c=i.x-t.x,h=i.y-t.y,u=i.z-t.z,d=Math.hypot(c,h,u)||1,f=Math.max(0,(n.vel.x*c+n.vel.y*h+n.vel.z*u)/d)*s.carry;o=d/((s.speed+f)*a)}return o}tpos(t){let e=this.known.get(t);return e&&!e.seen?e.pos:t.body.pos}pickTarget(){let t=this.f,e=this.now,i=null,n=1e9;for(let[s,a]of this.known){if(!s.alive)continue;let l=a.pos.distanceTo(t.body.pos)+(a.seen?0:12+(e-a.t)*4)+s.hp*.08+(s.protT>0?30:0);s===t.lastHitBy&&e-t.lastHitT<3&&(l-=12),s===this.revenge&&this.tilt>.3&&(l-=10),s===this.target&&(l-=6),l<n&&(n=l,i=s)}return i}decide(){let t=this.f,e=this.target,i=this.now,n=this.p,s="roam";if(e){let a=this.known.get(e),o=this.tpos(e).distanceTo(t.body.pos),l=22+n.caution*28-this.tilt*10,c=e.hp<t.hp*.55&&n.aggro>.6;t.hp<l&&o<30&&!c?s="retreat":a&&a.seen&&e.hp<=45&&n.aggro+this.confidence*.3+this.tilt*.2>.45?s="hunt":a&&!a.seen?s=i-a.t<1.6&&n.flair+n.aggro>.9?"flank":"search":s="engage",Math.random()<this.S.mistake&&s==="retreat"&&(s="engage")}s!==this.intent&&(i-this.intentStart>.8||s==="retreat"||this.intent==="roam")&&(this.intent=s,this.intentStart=i,s==="flank"&&(this.flankSide=Math.random()<.5?1:-1,t.st.flanks=(t.st.flanks||0)+1),s==="retreat"&&(this.G.chat(t,"retreat",.25),t.st.retreats=(t.st.retreats||0)+1))}tick(t){let e=this.f,i=e.body,n=this.inp;if(n.fwd=0,n.right=0,n.jumpPressed=!1,n.dashPressed=!1,n.jumpHeld=!1,n.autoHop=!0,!e.alive)return n;if(ir.copy(i.eye),this.tilt=Math.max(0,this.tilt-t/12),this.confidence=Math.max(0,this.confidence-t/25),this.thinkT-=t,this.thinkT<=0){this.thinkT=this.S.think*(.7+Math.random()*.6),this.sense();let a=this.target;this.target=this.pickTarget(),this.target!==a&&this.target&&(this.reactUntil=this.now+this.S.react*(.7+Math.random()*.7))}this.target&&(!this.target.alive||!this.known.has(this.target))&&(this.target=null,this.thinkT=0),!this.target&&this.intent!=="roam"&&(this.intent="roam",this.intentStart=this.now),this.perceive(t),this.decideT-=t,this.decideT<=0&&(this.decideT=.3+Math.random()*.3,this.decide()),this.cool-=t,this.techCd-=t;let s=this.scanThreats();return this.move(t,n,s),this.combat(t),this.useSkills(t,s),n}scanThreats(){let t=this.f,e=t.body,i=e.pos.x,n=e.pos.y+.9,s=e.pos.z,a=null;for(let o of this.G.fighters){let l=o.disc;if(l.state==="hand"||l.hit.has(t)||o===t&&!l.reflectedBy)continue;let c=l.pos.x-i,h=l.pos.y-n,u=l.pos.z-s,d=l.vel.x-e.vel.x,f=l.vel.y-e.vel.y,g=l.vel.z-e.vel.z,y=d*d+f*f+g*g;if(y<1)continue;let p=-(c*d+h*f+u*g)/y;if(p<0||p>.6)continue;let m=c+d*p,x=h+f*p,_=u+g*p;Math.hypot(m,x-qe(x,-.5,.5),_)>K.radius+l.w.radius+.45||(!a||p<a.tca)&&(a={tca:p,d:l,vx:d,vz:g,key:l.id+":"+l.leg})}return a}move(t,e,i){let n=this.G,s=this.f,a=s.body,o=this.S,l=this.p,c=this.target,h=Ky.set(0,0,0),u=!1,d=0,f=c?this.tpos(c):null;f&&(d=Math.hypot(f.x-a.pos.x,f.z-a.pos.z)),this.strafeT-=t,this.strafeT<=0&&(this.strafe=Math.random()<.8?-this.strafe:this.strafe,this.strafeT=o.strafeMin+Math.random()*(o.strafeMax-o.strafeMin));let g=f?this.intent:"roam";if(g==="engage"||g==="hunt"){let m=f.x-a.pos.x,x=f.z-a.pos.z,_=Math.hypot(m,x)||1;if(m/=_,x/=_,g==="engage"){let[M,C]=l.band,T=d>C?1:d<M?-.9:0;h.set(-x*this.strafe*o.strafe+m*T,0,m*this.strafe*o.strafe+x*T),u=d>C+10}else{let M=d>6?.45:1;h.set(m+-x*this.strafe*M,0,x+m*this.strafe*M),u=d>12}}else if(g==="flank"){let m=f.x-a.pos.x,x=f.z-a.pos.z,_=Math.hypot(m,x)||1;m/=_,x/=_,this.dest.set(f.x-x*this.flankSide*11-m*2,0,f.z+m*this.flankSide*11-x*2),h.set(this.dest.x-a.pos.x,0,this.dest.z-a.pos.z),h.length()<3&&(this.intent="search",this.intentStart=this.now),u=h.length()>10}else if(g==="search")h.set(f.x-a.pos.x,0,f.z-a.pos.z),h.length()<3&&(h.set(0,0,0),this.lookAround+=t,this.lookAround>1.5&&(this.known.delete(c),this.target=null,this.lookAround=0)),u=h.length()>14;else if(g==="retreat"){let m=null,x=1e9;for(let[_,M]of kc){let C=_-f.x,T=M-f.z,A=Math.hypot(C,T)||1,P=_+C/A*3.2,k=M+T/A*3.2,v=Math.hypot(P-a.pos.x,k-a.pos.z),S=Math.hypot(P-f.x,k-f.z)<d?25:0;v+S<x&&(x=v+S,m=[P,k])}h.set(m[0]-a.pos.x,0,m[1]-a.pos.z),h.length()<2&&h.set(-(f.z-a.pos.z)*this.strafe,0,(f.x-a.pos.x)*this.strafe).normalize().multiplyScalar(.4),u=h.length()>6}else{if(this.wanderT-=t,this.wanderT<=0){this.wanderT=2+Math.random()*3;let m=kc[Math.random()*kc.length|0];this.dest.set(m[0]+(Math.random()-.5)*16,0,m[1]+(Math.random()-.5)*16)}h.set(this.dest.x-a.pos.x,0,this.dest.z-a.pos.z),u=h.length()>12}for(let m of n.fighters){if(m===s)continue;let x=m.disc;if(x.state!=="out")continue;let _=a.pos.x-x.pos.x,M=a.pos.z-x.pos.z,C=Math.hypot(_,M);C<6.5&&C>.01&&(h.x+=_/C*1.4,h.z+=M/C*1.4)}let y=n.arena.half-6;if(a.pos.x>y&&(h.x-=1.5),a.pos.x<-y&&(h.x+=1.5),a.pos.z>y&&(h.z-=1.5),a.pos.z<-y&&(h.z+=1.5),i){let m=-i.vz,x=i.vx,_=Math.hypot(m,x)||1;m/=_,x/=_;let M=(a.pos.x-i.d.pos.x)*m+(a.pos.z-i.d.pos.z)*x>=0?1:-1;h.set(m*M*2,0,x*M*2),i.tca<o.dodgeLead&&this.roll("dodge"+i.key,o.dodge)&&(a.dashCharges>0&&a.dashT<=0&&!(a.dashCd>0)?e.dashPressed=!0:(a.grounded||a.airJumps>0)&&(e.jumpPressed=!0),this.macro=null)}this.jumpNow=!1,this.avoid(h),this.jumpNow&&a.grounded&&(e.jumpPressed=!0),a.hSpeed<2.5&&h.lengthSq()>.1?(this.stuckT+=t,this.stuckT>.45&&(this.strafe=-this.strafe,this.strafeT=.6,e.jumpPressed=!0,this.stuckT=0)):this.stuckT=0;let p=Math.hypot(h.x,h.z);if(p>.05&&(h.x/=p,h.z/=p),this.travelDir=p>.05?(this.travelDir||new b).set(h.x,0,h.z):null,!i&&!this.macro&&this.techCd<=0&&u&&this.travelDir){let m=l.caution>.6?2:1;s.disc.state==="hand"&&d>26&&!this.anyoneClose(14)&&Math.random()<o.tech*l.flair*.6?this.macro={type:"blinktravel",t:0,thrown:!1,dir:this.travelDir.clone()}:a.grounded&&a.dashCharges>=m&&Math.random()<o.tech&&(this.macro={type:"dashhop",t:0,dir:this.travelDir.clone(),hold:.9+Math.random()*.8}),this.techCd=1+Math.random()*1.2}if(this.macro&&this.runMacro(t,e,h),Math.hypot(h.x,h.z)>.05){let m=-Math.sin(a.yaw),x=-Math.cos(a.yaw),_=Math.cos(a.yaw),M=-Math.sin(a.yaw),C=h.x*m+h.z*x,T=h.x*_+h.z*M;e.fwd=C>.38?1:C<-.38?-1:0,e.right=T>.38?1:T<-.38?-1:0}this.hopT-=t,this.hopT<=0&&(this.hopOn=Math.random()<o.bhop*(this.intent==="engage"?1:.7),this.hopT=.6+Math.random()*1.4),(this.hopOn||this.macro&&this.macro.hop)&&(e.jumpHeld=!0),e.jumpHeld&&!a.grounded&&a.vel.y<-3&&a.airJumps>0&&Math.random()<t*.9*o.bhop&&(e.jumpPressed=!0)}anyoneClose(t){for(let[e,i]of this.known)if(e.alive&&i.pos.distanceTo(this.f.body.pos)<t)return!0;return!1}runMacro(t,e,i){let n=this.macro,s=this.f.body,a=this.G,o=this.f.disc;if(n.t+=t,n.type==="dashhop")i.copy(n.dir),n.dashed||(e.dashPressed=!0,n.dashed=!0,this.f.st.dashhop=(this.f.st.dashhop||0)+1),n.t>.1&&!n.jumped&&(e.jumpPressed=!0,n.jumped=!0),n.t>.1&&(n.hop=!0,this.travelDir&&n.dir.lerp(this.travelDir,Math.min(1,t*3)).normalize()),n.t>.1+n.hold&&(this.macro=null);else if(n.type==="blinktravel")if(i.copy(n.dir),!n.thrown)n.aim=(n.aim||new b).set(n.dir.x,.06,n.dir.z).normalize(),o.state==="hand"&&o.catchCd<=0&&s.lookDir(Es).angleTo(n.aim)<.12&&(a.throwFor(this.f,Es.clone()),n.thrown=!0,n.tt=0),n.t>1.2&&(this.macro=null);else{if(n.tt+=t,o.state!=="out"){this.macro=null;return}n.tt>.32&&a.blinkFor(this.f)&&(this.f.st.blinktravel=(this.f.st.blinktravel||0)+1,this.macro={type:"dashhop",t:0,dir:n.dir.clone(),hold:1})}}avoid(t){let e=this.f.body,i=Math.hypot(t.x,t.z);if(i<.05)return;let n=t.x/i,s=t.z/i,a=1.6+Math.min(4,e.hSpeed*.15),o=this.blocked(n,s,a);if(o){if(o==="low"){zc.t<2.2&&(this.jumpNow=!0);return}for(let l of[.6,1.2,1.9])for(let c of[this.strafe,-this.strafe]){let h=l*c,u=Math.cos(h),d=Math.sin(h),f=n*u-s*d,g=n*d+s*u;if(!this.blocked(f,g,a)){t.x=f*i,t.z=g*i;return}}t.x=-n*i,t.z=-s*i,this.strafe=-this.strafe}}blocked(t,e,i){let n=this.f.body,s=this.G.arena.col,a=s.raycast(n.pos.x,n.pos.y+.5,n.pos.z,t,0,e,i,zc);return!a||Math.abs(a.ny)>.6?!1:s.raycast(n.pos.x,n.pos.y+1.75,n.pos.z,t,0,e,i+.6,jy)?!0:"low"}aim(t,e){let i=this.f.body,n=this.S;this.now<this.reactUntil&&this.lastWant?e=this.lastWant:this.lastWant=(this.lastWant||new b).copy(e);let s=Math.atan2(-e.x,-e.z),a=Math.asin(qe(e.y,-1,1)),o=Xu(s-this.aimYaw),l=a-this.aimPitch,c=n.aimK*(1-this.tilt*.15),h=2*n.aimZ*Math.sqrt(c);this.vYaw+=(c*o-h*this.vYaw)*t,this.vPitch+=(c*l-h*this.vPitch)*t;let u=n.turn*1.6;this.vYaw=qe(this.vYaw,-u,u),this.vPitch=qe(this.vPitch,-u,u),this.aimYaw=Xu(this.aimYaw+this.vYaw*t),this.aimPitch=qe(this.aimPitch+this.vPitch*t,-1.5,1.5),this.ph+=t;let d=n.err*(1+this.tilt*.4);i.yaw=this.aimYaw+d*(Math.sin(this.ph*1.9)+.6*Math.sin(this.ph*4.3+1.3))/1.6,i.pitch=qe(this.aimPitch+d*.6*(Math.sin(this.ph*2.3+2)+.5*Math.sin(this.ph*5.1))/1.5,-1.5,1.5)}combat(t){let e=this.G,i=this.f,n=i.body,s=this.S,a=i.disc,o=this.target,l=this.p,c=Jy.copy(ir);c.y-=.15;let h=null,u=!1,d=o?this.known.get(o):null;if(this.skillPlan)h=Nn.copy(this.skillPlan.dir);else if(this.macro&&this.macro.type==="blinktravel"&&!this.macro.thrown&&this.macro.aim)h=Nn.copy(this.macro.aim);else if(o&&d){if(this.intercept(c,o,nr),h=Nn.subVectors(nr,c).normalize(),a.state==="hand"&&(d.seen||this.now-d.t<.8)){if(this.plan&&this.plan.until>this.now)h=Nn.copy(this.plan.dir),u=!0;else if(this.plan=null,e.los(c,nr))u=o.protT<=.15;else if(this.now-this.lastBank>(this.key==="max"?.3:.55)){this.lastBank=this.now;let f=e.bankBudget||(e.bankBudget={t:0,n:0});this.now-f.t>1&&(f.t=this.now,f.n=0);let g=s.bank>0&&Math.random()<s.bank&&f.n<8;g&&f.n++;let y=g?this.solveBank(c,o):null;y?(this.plan={dir:y.clone(),until:this.now+.35},h=Nn.copy(y),u=!0):s.lob>0&&Math.random()<s.lob*(.5+l.flair*.5)&&(Oe.copy(nr),Oe.y+=2.8,e.los(c,Oe)&&c.distanceTo(Oe)<40&&(this.plan={dir:Oe.sub(c).normalize().clone(),until:this.now+.35},h=Nn.copy(this.plan.dir),u=!0))}if(u&&!this.plan&&this.intent!=="hunt"){let f=o.body;!(!f.grounded||f.dashCharges===0||c.distanceTo(nr)<12||o.hp<40)&&this.waitT<l.patience*.8&&(this.waitT+=t,u=!1)}}}else{if(h=Nn.set(n.vel.x,0,n.vel.z),this.travelDir&&h.copy(this.travelDir),h.lengthSq()<.5&&n.flatFwd(h),this.intent==="search"&&this.lookAround>0){let f=Math.sin(this.now*2.2)*1.2,g=Math.cos(f),y=Math.sin(f);h.set(h.x*g-h.z*y,0,h.x*y+h.z*g)}h.normalize()}if(this.aim(t,h),u&&a.state==="hand"&&a.catchCd<=0&&this.cool<=0&&this.now>=this.reactUntil){let f=n.lookDir(Es),g=Math.random()<s.mistake*t*20;(f.angleTo(h)<s.align||g)&&(e.throwFor(i,f),this.cool=s.pause*(.5+Math.random())*(1-this.confidence*.3),this.plan=null,this.waitT=0)}a.state!=="hand"&&!(this.macro&&this.macro.type==="blinktravel")&&this.discPlay(t)}discPlay(t){let e=this.G,i=this.f,n=i.body,s=this.S,a=i.disc,o=this.target,l=a.w,c=null,h=!1;for(let y of e.fighters){if(y===i||!y.alive||y.protT>0||!this.known.has(y))continue;let p=y.updateCenter();if(!a.hit.has(y)&&!y.invuln){let m=a.pos.x-p.x,x=a.pos.y-p.y,_=a.pos.z-p.z,M=a.vel.x-y.body.vel.x,C=a.vel.y-y.body.vel.y,T=a.vel.z-y.body.vel.z,A=M*M+C*C+T*T;if(A>1){let P=-(m*M+x*C+_*T)/A;if(P>0&&P<.15){let k=x+C*P;Math.hypot(m+M*P,k-qe(k,-.5,.5),_+T*P)<K.radius+l.radius&&(h=!0)}}}!c&&!y.invuln&&y.reflectT<=0&&a.pos.distanceTo(p)<l.blinkRadius*.8&&(c=y)}if(c&&!h&&a.t>.04){if(this.slamHold+=t,this.slamHold>=s.react*.5&&this.roll("slam"+a.id+":"+a.leg,s.slam)&&e.blinkFor(i)){this.slamHold=0,this.cool=0;return}}else this.slamHold=0;if(!o)return;if(a.state==="out"&&a.t>.08&&s.recall>0&&this.seen(o)&&this.returnHits(o)&&this.roll("recall"+a.id+":"+a.leg+":"+Math.floor(a.t*8),s.recall)){e.recallFor(i);return}let u=this.tpos(o),d=n.pos.distanceTo(u),f=a.pos.distanceTo(u),g=s.mobility*(this.intent==="hunt"?1:.6);if(a.state==="out"&&g>0&&a.t>.28&&d>24&&f<d-12&&this.roll("mob"+a.id+":"+a.leg,g)){e.blinkFor(i);return}if(s.escape>0&&(i.hp<35||this.intent==="retreat")&&a.state==="out"&&a.t>.2){let y=1e9,p=1e9;for(let m of e.fighters)m===i||!m.alive||(y=Math.min(y,m.body.pos.distanceTo(n.pos)),p=Math.min(p,m.body.pos.distanceTo(a.pos)));if(y<10&&p>14&&this.roll("esc"+a.id+":"+a.leg,s.escape)){e.blinkFor(i);return}}}useSkills(t,e){let i=this.G,n=this.f,s=n.body,a=this.S,o=this.target;if(!Un[n.skill]||n.skillCd>0){this.skillPlan=null;return}let c=h=>this.roll(h,a.skillUse);if(n.skill==="reflect"){if(e&&e.tca<.14&&!s.invuln&&!(s.dashCharges>0&&this.rolls.get("dodge"+e.key))&&c("refl"+e.key))i.useSkill(n);else for(let h of i.fighters)if(!(h===n||h.disc.state!=="out")&&h.disc.pos.distanceTo(s.pos)<h.disc.w.blinkRadius+.5&&c("reflS"+h.disc.id+":"+h.disc.leg)){i.useSkill(n);break}}else if(n.skill==="overdrive"){let h=o?this.tpos(o).distanceTo(s.pos):0;(this.intent==="hunt"&&h>10||this.intent==="retreat"&&n.hp<40)&&c("od"+Math.floor(this.now))&&i.useSkill(n)}else if(n.skill==="heal")n.hp<45&&(this.now-this.lastHurtT>.8||this.intent==="retreat")&&c("heal"+Math.floor(this.now))&&i.useSkill(n);else if(n.skill==="gravity"){if(this.skillPlan){(s.lookDir(Es).angleTo(this.skillPlan.dir)<.08||this.now>this.skillPlan.until)&&(i.useSkill(n),this.skillPlan=null,this.cool=Math.min(this.cool,.25));return}if(!o||!this.seen(o))return;let h=o.body.pos,u=h.distanceTo(s.pos);if(u<7||u>30||!c("grav"+Math.floor(this.now)))return;let d=u/24;this.predict(o,d,Oe),Oe.y-=1;let f=Math.max(0,.5*22*d*d-4*d)/Math.max(1,u);Oe.sub(ir).normalize(),Oe.y+=f,Oe.normalize(),this.skillPlan={dir:Oe.clone(),until:this.now+.45}}}returnHits(t){let e=this.f.body,i=this.f.disc,n=i.w,s=1/60;xe.copy(i.pos),_e.copy(i.vel),Wa.copy(e.eye);for(let a=0,o=0;a<70;a++,o+=s){let l=Wa.x+e.vel.x*o,c=Wa.y+e.vel.y*o*.5,h=Wa.z+e.vel.z*o,u=l-xe.x,d=c-xe.y,f=h-xe.z,g=Math.hypot(u,d,f);if(g<n.catchDist)return!1;let y=n.returnSpeed+e.speed,p=Math.min(1,s*n.returnTurn);_e.x+=(u/g*y-_e.x)*p,_e.y+=(d/g*y-_e.y)*p,_e.z+=(f/g*y-_e.z)*p,xe.addScaledVector(_e,s),this.predict(t,o+s,ci);let m=xe.x-ci.x,x=xe.y-ci.y,_=xe.z-ci.z;if(Math.hypot(m,qe(x,-.5,.5)-x,_)<K.radius+n.radius+.1)return!0}return!1}solveBank(t,e){let i=this.f.body,n=this.f.disc.w;if(n.maxBounces===0)return null;let s=null,a=1e9,o=[],l=this.tpos(e),c=Math.atan2(-(l.x-t.x),-(l.z-t.z)),h=(u,d,f)=>{let g=Math.cos(d);Oe.set(-Math.sin(u)*g,Math.sin(d),-Math.cos(u)*g);let y=n.speed+Math.max(0,i.vel.dot(Oe))*n.carry,p=this.simDisc(t,Oe,y,e);p!==null?p<a&&(a=p,s=(s||new b).copy(Oe)):f&&this._miss<3.5&&(o.push({yaw:u,pitch:d,m:this._miss}),o.length>12&&(o.sort((m,x)=>m.m-x.m),o.length=6))};for(let u=0;u<72;u++){let d=c+(u%2?1:-1)*Math.ceil(u/2)*(Math.PI/36);for(let f of Zy)h(d,f,!0)}if(!s){o.sort((u,d)=>u.m-d.m);for(let u of o.slice(0,4)){for(let d=-3;d<=3;d++)for(let f=-2;f<=2;f++)h(u.yaw+d*.014,u.pitch+f*.015,!1);if(s)break}}return s}simDisc(t,e,i,n){let s=this.G.arena.col,a=this.f.disc.w,o=a.radius,l=K.radius+o;xe.copy(t),_e.copy(e).multiplyScalar(i);let c=0,h=0;this._miss=1e9;for(let u=0;u<4;u++){let d=_e.length(),f=_e.x/d,g=_e.y/d,y=_e.z/d,p=d*(a.outTime+h*.12-c);if(p<=.3)return null;let m=s.raycast(xe.x,xe.y,xe.z,f,g,y,p+o,zc),x=m?Math.max(0,m.t-o):p,_=x*.5;for(let k=0;k<2;k++)this.predict(n,c+_/d,ci),_=qe((ci.x-xe.x)*f+(ci.y-xe.y)*g+(ci.z-xe.z)*y,0,x);this.predict(n,c+_/d,ci);let M=xe.x+f*_-ci.x,C=xe.y+g*_-ci.y,T=xe.z+y*_-ci.z,A=Math.hypot(M,qe(C,-.5,.5)-C,T);if(A<l)return c+_/d;if(A<this._miss&&(this._miss=A),!m)return null;let P=_e.x*m.nx+_e.y*m.ny+_e.z*m.nz;if(_e.x-=2*P*m.nx,_e.y-=2*P*m.ny,_e.z-=2*P*m.nz,m.ny>.7&&(_e.y=Math.abs(_e.y)*.6),xe.set(xe.x+f*x,xe.y+g*x,xe.z+y*x),c+=x/d,h++,h>a.maxBounces)return null}return null}};var hn=class{constructor(t){this.G=t,this.ws=null,this.status="off",this.token=null,this.base="",this.inRoom=!1,this.intentional=!1,this.retries=0,this.rtt=0,this.onStatus=null,this.pinger=setInterval(()=>{this.open&&this.send({t:"ping",c:performance.now()})},2e3)}get open(){return this.ws&&this.ws.readyState===1}static defaultServer(){try{let e=localStorage.getItem("redshift_server");if(e)return e}catch{}let t=String(window.REDSHIFT_SERVER||"").trim();return t||(/^https?:$/.test(location.protocol)&&!window.REDSHIFT_APP?location.origin:"")}static save(t){try{t?localStorage.setItem("redshift_server",t):localStorage.removeItem("redshift_server")}catch{}}static async discover(){let t=String(window.REDSHIFT_DISCOVERY||"").trim();if(!t)return"";try{let e=new AbortController,i=setTimeout(()=>e.abort(),6e3),n=await fetch(t+(t.includes("?")?"&":"?")+"t="+Date.now(),{cache:"no-store",signal:e.signal});if(clearTimeout(i),!n.ok)return"";let s=(await n.text()).split(/\r?\n/).map(a=>a.trim()).find(a=>a&&!a.startsWith("#"));return s&&/^(https?|wss?):\/\/[^\s]+$/i.test(s)?s:""}catch{return""}}wsUrl(t){let e=String(t||"").trim().replace(/\/+$/,"");return/^[a-z]+:\/\//i.test(e)||(e=(/^(localhost|127\.|192\.168\.|10\.)/.test(e)?"http://":"https://")+e),e.replace(/^http/i,"ws")+"/ws"}setStatus(t,e=""){this.status=t,this.onStatus&&this.onStatus(t,e)}connect(t,e){return this.base=t,this.hello=e,this.intentional=!1,new Promise((i,n)=>{let s=!1,a=c=>{s||(s=!0,n(new Error(c)))},o;try{o=new WebSocket(this.wsUrl(t)+(this.token&&this.inRoom?"?resume="+encodeURIComponent(this.token):""))}catch{return a("\uC8FC\uC18C\uAC00 \uC774\uC0C1\uD574\uC694")}this.ws=o,this.setStatus("connecting");let l=setTimeout(()=>{a("\uC11C\uBC84\uAC00 \uC751\uB2F5\uD558\uC9C0 \uC54A\uC544\uC694");try{o.close()}catch{}},9e3);o.onopen=()=>{this.send({t:"hello",...e})},o.onmessage=c=>{let h;try{h=JSON.parse(c.data)}catch{return}if(h.t==="hi"&&(this.token=h.token,this.clientId=h.clientId,this.retries=0,clearTimeout(l),this.setStatus("online"),s||(s=!0,i(h))),h.t==="pong"){this.rtt=performance.now()-h.c;return}h.t==="joined"&&(this.inRoom=!0,this.clientId=h.clientId||this.clientId),this.G.onNet(h)},o.onerror=()=>a("\uC5F0\uACB0 \uC2E4\uD328"),o.onclose=()=>{if(clearTimeout(l),o===this.ws){if(a("\uC5F0\uACB0\uC774 \uB04A\uACBC\uC5B4\uC694"),this.intentional){this.setStatus("off");return}this.inRoom&&this.retries<6?(this.retries++,this.setStatus("reconnecting"),setTimeout(()=>this.connect(this.base,this.hello).catch(()=>{}),600*this.retries)):(this.setStatus("off","\uC5F0\uACB0\uC774 \uB04A\uACBC\uC5B4\uC694"),this.inRoom=!1,this.G.onNet({t:"dropped"}))}}})}send(t){this.open&&this.ws.send(JSON.stringify(t))}leave(){this.send({t:"leave"}),this.inRoom=!1}close(){this.intentional=!0,this.inRoom=!1;try{this.ws&&this.ws.close()}catch{}this.ws=null,this.setStatus("off")}};var Qy=.08,tx=30,He=r=>Math.round(r*100)/100,qu=r=>Math.round(r*1e3)/1e3,Yu=()=>performance.now()/1e3,un=r=>new b(r[0],r[1],r[2]);function $u(r){let t=r.prototype;t.startOnline=function(e){let i=this.S;this.start("online"),this.online=!0,this.versus=!0,this.roomCode=e.code,this.roomName=e.name,this.isHost=!!e.host,this.netBotSkill=e.botSkill||"hard",this.botSkill=this.netBotSkill,this.byId=new Map,this.sendT=0,this.menuOpen=!1;let n=this.me;n.netId=e.you,n.name=i.name||"\uB098",this.byId.set(n.netId,n);for(let a of e.players)a.id!==e.you&&this.addNetFighter(a);let s=e.players.find(a=>a.id===e.you);s&&(n.color=s.color,n.css="#"+s.color.toString(16).padStart(6,"0"),n.kills=s.kills,n.deaths=s.deaths),this.applyMatch(e.match),this.respawn(n,!0),this.banner("\uC628\uB77C\uC778",`\uBC29 ${e.code} \xB7 ${e.players.filter(a=>!a.bot).length}\uBA85 \uC811\uC18D \xB7 ${this.match.limit}\uD0AC \uBA3C\uC800`,2.6),this.cls("board","hidden",!1),this._boardHtml="";try{this.renderer.compile(this.scene,this.camera)}catch{}},t.leaveOnline=function(){this.online&&(this.net.leave(),this.net.close(),this.online=!1)},t.applyMatch=function(e){if(e&&(this.match={limit:e.limit,timeLeft:e.timeLeft,over:e.state!=="play",online:!0},e.ranking))for(let[i,n,s]of e.ranking){let a=this.byId.get(i);a&&(a.kills=n,a.deaths=s)}},t.addNetFighter=function(e){let i=e.bot&&e.owner===this.net.clientId,n=new ln(this,{name:e.name,color:e.color,isBot:!0,weapon:e.weapon,skill:e.skill});n.netId=e.id,n.netBot=e.bot,n.persona=e.persona,n.kills=e.kills||0,n.deaths=e.deaths||0,n.hp=e.hp??100,n.alive=e.alive!==!1,n.snaps=[],i?this.makeLocal(n):(n.remote=!0,n.body.reset(new b(0,-50,0),0),n.model.visible=!1,n.seen=!1),this.fighters.push(n),this.byId.set(e.id,n);try{this.renderer.compile(this.scene,this.camera)}catch{}return n},t.makeLocal=function(e){e.remote=!1;let i=cn.find(n=>n.id===e.persona)||cn[Math.random()*cn.length|0];e.brain=new kn(this,e,this.netBotSkill,i),e.alive=!0,e.hp=Math.max(1,e.hp),this.respawn(e,!0)},t.onNet=function(e){let i=n=>this.byId&&this.byId.get(n);switch(e.t){case"joined":if(e.resumed&&this.online){this.applyMatch(e.match);return}this.startOnline(e),this.onJoined&&this.onJoined(e);return;case"rooms":case"hi":this.onRooms&&this.onRooms(e.rooms||[]);return;case"err":this.onNetError&&this.onNetError(e.msg);return;case"dropped":this.online&&(this.online=!1,this.onNetDropped&&this.onNetDropped());return}if(this.online)switch(e.t){case"join":{if(i(e.p.id))return;let n=this.addNetFighter(e.p);e.p.bot||(this.feedText(`${e.p.name} \uB2D8\uC774 \uB4E4\uC5B4\uC654\uC5B4\uC694`),this.audio.ui()),n.brain&&this.chat(n,"start",.4);return}case"leave":{let n=i(e.id);if(!n||n===this.me)return;n.netBot||this.feedText(`${n.name} \uB2D8\uC774 \uB098\uAC14\uC5B4\uC694`),n.dispose(),this.fighters=this.fighters.filter(s=>s!==n),this.byId.delete(e.id);return}case"host":{this.isHost=!0,this.netBotSkill=e.botSkill||this.netBotSkill;for(let n of e.bots){let s=i(n.id);s&&s.remote&&(s.persona=n.persona,this.makeLocal(s))}return}case"owners":{for(let[n,s]of e.list){let a=i(n);a&&s!==this.net.clientId&&!a.remote&&(a.remote=!0,a.brain=null,a.snaps=[])}return}case"st":{let n=i(e.id);if(!n||!n.remote)return;e.at=Yu(),n.snaps.push(e),n.snaps.length>12&&n.snaps.shift(),e.al&&!n.alive&&(n.alive=!0),n.hp=e.hp??n.hp;return}case"dmg":return this.netDamage(e);case"kill":return this.netKill(e);case"spawn":{let n=i(e.id);if(!n)return;n.alive=!0,n.hp=e.hp,n.protT=1.5,n.remote&&(n.snaps=[]);return}case"hp":for(let[n,s]of e.list){let a=i(n);a&&(a.hp=s)}return;case"clock":this.match&&(this.match.timeLeft=e.timeLeft);return;case"match":{let n=this.match&&this.match.over;if(this.applyMatch(e),e.state==="over"&&!n&&this.netMatchOver(e),e.reset){for(let s of e.players||[]){let a=i(s.id);a&&(a.kills=0,a.deaths=0,a.hp=100,a.alive=!0)}for(let s of this.fighters)s.remote||(this.respawn(s,!0),s.alive=!0,s.protT=2);this.deathInfo=null,this.banner("\uC0C8 \uB77C\uC6B4\uB4DC",`${this.match.limit}\uD0AC \uBA3C\uC800`,2)}return}case"loadout":{let n=i(e.id);n&&n.remote&&(n.disc.setWeapon(e.weapon),n.setHandDisc(),n.skill=e.skill);return}case"fx":return this.netFxIn(e)}},t.netDamage=function(e){let i=this.byId.get(e.target),n=this.byId.get(e.by);if(!i)return;i.hp=e.hp,i.regenT=5,i.lastHitBy=n,i.lastHitT=this.gameTime;let s=un(e.dir),a=i.updateCenter().clone(),o=new wt(i.color);if(!i.remote){let l=n?n.disc.w.knock:5,c=i.body,h=e.kind==="slam"?8+l*.3:l;c.vel.x+=s.x*h,c.vel.z+=s.z*h,c.vel.y=Math.max(c.vel.y,e.kind==="slam"?5:2.5),c.grounded=!1,i.brain&&i.brain.onHurt(n,e.kind)}i===this.me?(this.dmgFx=1,this.shake(.22),this.audio.hurt(),n&&this.hurtDir(n.updateCenter())):n&&!n.remote||this.parts.emit(a,12,{color:[[.1,.1,.12],[o.r,o.g,o.b]],speed:8,dir:s,spread:.9,life:.4})},t.netKill=function(e){let i=this.byId.get(e.victim),n=this.byId.get(e.by);i&&(n&&(n.kills=e.kills,n.hp=e.hp,n.streak=(n.streak||0)+1),i.deaths=e.deaths,this.killFighter(i,n,e.kind,e.b,un(e.dir),!0),n&&!n.remote&&(n.body.dashCharges=Math.min(n.body.dashMax,n.body.dashCharges+1)))},t.netMatchOver=function(e){let i=(e.ranking||[]).map(([o,l,c])=>({f:this.byId.get(o),k:l,d:c})).filter(o=>o.f),n=i[0],s=i.findIndex(o=>o.f===this.me)+1;this.banner(n&&n.f===this.me?"1\uC704!":`${n?n.f.name:"?"} \uC6B0\uC2B9`,`\uB0B4 \uC21C\uC704 ${s}\uC704 \xB7 8\uCD08 \uB4A4 \uC0C8 \uB77C\uC6B4\uB4DC`,7),s===1?this.audio.checkpoint(!0):this.audio.wave();let a=this.records;a.onlineGames=(a.onlineGames||0)+1,s===1&&(a.onlineWins=(a.onlineWins||0)+1),this.saveRecords&&this.saveRecords();for(let o of this.fighters)o.brain&&this.chat(o,n&&n.f===o?"win":"lose",.5)},t.netFxIn=function(e){let i=this.byId.get(e.id);if(!i)return;let n=e.p?un(e.p):i.updateCenter().clone();switch(e.k){case"throw":i.throwT=.25,this.spatial(n,()=>this.audio.discThrow(.8));break;case"bounce":{let s=un(e.n),a=new wt(i.color);this.parts.emit(n,8,{color:[[a.r,a.g,a.b],[.15,.15,.17]],speed:7,dir:s,spread:.8,life:.35,gravity:10}),this.rings.add(n.clone().addScaledVector(s,.04),i.color,1.1+(e.b||0)*.35,.3,s),this.spatial(n,()=>this.audio.discBounce(e.b||0));break}case"blink":{let s=un(e.a),a=un(e.b),o=new wt(i.color),l=Math.min(24,Math.ceil(s.distanceTo(a)/1.5));for(let c=0;c<=l;c++){let h=new b().lerpVectors(s,a,c/l);h.y+=1,this.parts.emit(h,2,{color:[[o.r,o.g,o.b],[.12,.12,.14]],speed:1.5,life:.45,gravity:0,size:.14})}this.rings.add(new b(a.x,a.y+.06,a.z),e.s?1447450:i.color,e.s?i.disc.w.blinkRadius*1.3:2.2,.45),this.spatial(a,()=>{this.audio.blink(),e.s&&this.audio.slam()}),i.remote&&(i.snaps=[],i.body.pos.copy(a),i.body.prevPos.copy(a));break}case"skill":{e.s==="heal"&&this.parts.emit(n,20,{color:[[.25,.85,.45],[1,1,1]],speed:4,life:.6,gravity:-3}),e.s==="reflect"&&this.spatial(n,()=>this.audio.shieldClang()),e.s==="overdrive"&&this.spatial(n,()=>this.audio.boost()),this.rings.add(n,i.color,2.4,.3,null);break}case"refl":this.reflectFx(i,n,!0);break;case"nade":this.throwGrenade(i,null,un(e.p),un(e.v));break;case"say":typeof e.text=="string"&&this.sayLine(i,e.text.slice(0,40));break}},t.netFx=function(e){this.online&&this.net.send({t:"fx",...e})},t.netHit=function(e,i,n,s,a,o){if(!e.alive||e.invuln||!n)return null;i=Math.round(i),this.net.send({t:"hit",target:e.netId,by:n.netId,dmg:i,kind:s,dir:[He(a.x),He(a.y),He(a.z)],b:o|0});let l=e.updateCenter().clone();if(n.st.hits++,n===this.me){this.audio.discHit(o+1),this.stats.hits++,this.dmgNumber(l,i,s==="bank"||s==="slam"||s==="reflect"),this.hitmarker(e.hp-i<=0),this.stopT=Math.max(this.stopT,.02);let c=new wt(e.color);this.parts.emit(l,14,{color:[[.1,.1,.12],[c.r,c.g,c.b]],speed:8,dir:a,spread:.9,life:.4})}return e.hp-i<=0?"kill":"hit"},t.netTick=function(e){if(this.sendT-=e,!(this.sendT>0)){this.sendT=1/tx;for(let i of this.fighters){if(i.remote||!i.netId)continue;let n=i.body,s=i.disc,a=0;n.grounded&&(a|=1),(n.dashT>0||i.invulnT>0)&&(a|=2),i.reflectT>0&&(a|=4),i.overT>0&&(a|=8),i.protT>0&&(a|=16);let o={t:"st",id:i.netId,x:He(n.pos.x),y:He(n.pos.y),z:He(n.pos.z),vx:He(n.vel.x),vy:He(n.vel.y),vz:He(n.vel.z),yw:qu(n.yaw),pt:qu(n.pitch),fl:a,ds:s.state==="hand"?0:s.state==="out"?1:2,w:s.w.id};s.state!=="hand"&&(o.dp=[He(s.pos.x),He(s.pos.y),He(s.pos.z)],o.dv=[He(s.vel.x),He(s.vel.y),He(s.vel.z)],o.db=s.bounces),this.net.send(o)}}},t.updateRemotes=function(){let e=Yu()-Qy;for(let i of this.fighters){if(!i.remote)continue;let n=i.snaps;if(!n.length)continue;let s=n[0],a=null;for(let h=n.length-1;h>=0;h--)if(n[h].at<=e){s=n[h],a=n[h+1]||null;break}let o=i.body,l=0;if(a){l=Vt.clamp((e-s.at)/Math.max(.001,a.at-s.at),0,1),o.pos.set(s.x+(a.x-s.x)*l,s.y+(a.y-s.y)*l,s.z+(a.z-s.z)*l);let h=a.yw-s.yw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;o.yaw=s.yw+h*l,o.pitch=s.pt+(a.pt-s.pt)*l}else{let h=Math.min(.15,Math.max(0,e-s.at));o.pos.set(s.x+s.vx*h,s.y+s.vy*h,s.z+s.vz*h),o.yaw=s.yw,o.pitch=s.pt}o.prevPos.copy(o.pos),o.vel.set(s.vx,s.vy,s.vz),o.speed=o.vel.length(),o.hSpeed=Math.hypot(s.vx,s.vz),o.grounded=!!(s.fl&1),o.dashT=s.fl&2?.05:0,i.reflectT=s.fl&4?.25:0,i.overT=s.fl&8?.25:0,i.protT=s.fl&16?.2:0,i.seen||(i.seen=!0,i.model&&(i.model.visible=i.alive));let c=i.disc;if(s.w&&s.w!==c.w.id&&(c.setWeapon(s.w),i.setHandDisc()),s.ds===0||!i.alive)c.state!=="hand"&&(c.state="hand",c.holder.visible=!1);else{if(c.state=s.ds===1?"out":"return",c.holder.visible=!0,c.bounces=s.db||0,a&&a.ds&&a.dp)c.pos.set(s.dp[0]+(a.dp[0]-s.dp[0])*l,s.dp[1]+(a.dp[1]-s.dp[1])*l,s.dp[2]+(a.dp[2]-s.dp[2])*l);else{let h=Math.min(.12,Math.max(0,e-s.at));c.pos.set(s.dp[0]+s.dv[0]*h,s.dp[1]+s.dv[1]*h,s.dp[2]+s.dv[2]*h)}c.vel.set(s.dv[0],s.dv[1],s.dv[2])}}}}var Ya=class{constructor(){this.ctx=null,this.master=null,this.sfxVol=.8,this.musicVol=.45,this.vol=1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i),i.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=this.musicVol,this.music.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let h=0;h<n;h++)s[h]=Math.random()*2-1;let a=e.sampleRate*1.4,o=e.createBuffer(2,a,e.sampleRate);for(let h=0;h<2;h++){let u=o.getChannelData(h);for(let d=0;d<a;d++)u[d]=(Math.random()*2-1)*Math.pow(1-d/a,3)}this.reverb=e.createConvolver(),this.reverb.buffer=o,this.revGain=e.createGain(),this.revGain.gain.value=.22,this.reverb.connect(this.revGain),this.revGain.connect(this.sfx);let l=e.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.value=400,this.windFilter.Q.value=.7,this.windGain=e.createGain(),this.windGain.gain.value=0,l.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.sfx),l.start();let c=e.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0,this.wrFilter=e.createBiquadFilter(),this.wrFilter.type="highpass",this.wrFilter.frequency.value=2500,this.wrGain=e.createGain(),this.wrGain.gain.value=0,c.connect(this.wrFilter),this.wrFilter.connect(this.wrGain),this.wrGain.connect(this.sfx),c.start(),this._musicStep=0,this._musicNext=0,this.musicOn=!0}setVolumes(t,e){this.sfxVol=t,this.musicVol=e,this.ctx&&(this.sfx.gain.value=t,this.music.gain.value=e)}get t(){return this.ctx.currentTime}_noise(t,{type:e="bandpass",freq:i=1e3,q:n=1,gain:s=.5,attack:a=.002,sweepTo:o=null,rev:l=.3}={}){if(!this.ctx)return;let c=this.ctx,h=this.t;s=Math.max(2e-4,s*this.vol);let u=c.createBufferSource();u.buffer=this.noiseBuf,u.playbackRate.value=.8+Math.random()*.4;let d=c.createBiquadFilter();d.type=e,d.frequency.setValueAtTime(i,h),d.Q.value=n,o&&d.frequency.exponentialRampToValueAtTime(o,h+t);let f=c.createGain();if(f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(s,h+a),f.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(d),d.connect(f),f.connect(this.sfx),l){let g=c.createGain();g.gain.value=l,f.connect(g),g.connect(this.reverb)}u.start(h,Math.random()),u.stop(h+t+.05)}_tone(t,e,{type:i="sine",gain:n=.3,attack:s=.002,slideTo:a=null,rev:o=.3,delay:l=0}={}){if(!this.ctx)return;let c=this.ctx,h=this.t+l;n=Math.max(2e-4,n*this.vol);let u=c.createOscillator();u.type=i,u.frequency.setValueAtTime(t,h),a&&u.frequency.exponentialRampToValueAtTime(a,h+e);let d=c.createGain();if(d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(n,h+s),d.gain.exponentialRampToValueAtTime(1e-4,h+e),u.connect(d),d.connect(this.sfx),o){let f=c.createGain();f.gain.value=o,d.connect(f),f.connect(this.reverb)}u.start(h),u.stop(h+e+.05)}slash(t=1){this._noise(.22,{type:"bandpass",freq:3500,sweepTo:600,q:1.2,gain:.35*t,attack:.01}),this._noise(.12,{type:"highpass",freq:6e3,gain:.12*t,rev:0})}slashHit(){this._noise(.18,{type:"lowpass",freq:1800,gain:.6,rev:.2}),this._tone(180,.15,{type:"square",gain:.12,slideTo:60})}gunshot(){this._noise(.35,{type:"lowpass",freq:5e3,sweepTo:300,gain:.8,rev:.6}),this._tone(140,.25,{type:"sine",gain:.6,slideTo:40,rev:0}),this._noise(.05,{type:"highpass",freq:3e3,gain:.4,rev:0})}enemyShot(t=10){let e=Math.max(.05,.4-t*.008);this._noise(.25,{type:"bandpass",freq:1400,sweepTo:400,gain:e,rev:.6}),this._tone(900,.12,{type:"sawtooth",gain:e*.3,slideTo:300,rev:.3})}parry(t=!0){let e=t?1:.6;[1,2.76,5.4,8.93].forEach((i,n)=>this._tone(620*i,.9/(n+1),{type:"sine",gain:.22*e/(n*.6+1),rev:.7})),this._noise(.08,{type:"highpass",freq:4e3,gain:.5*e,rev:.5}),t&&this._tone(1240,.6,{type:"triangle",gain:.1,slideTo:2480,delay:.03})}clash(){[1,2.4,4.1].forEach((t,e)=>this._tone(480*t,.5,{type:"triangle",gain:.25/(e+1),rev:.8})),this._noise(.15,{type:"bandpass",freq:2500,gain:.6})}dash(){this._noise(.3,{type:"bandpass",freq:400,sweepTo:2500,q:.8,gain:.45,attack:.02}),this._tone(90,.2,{type:"sine",gain:.3,slideTo:200,rev:0})}jump(){this._noise(.12,{type:"lowpass",freq:900,gain:.18,rev:0})}land(t){this._noise(t?.25:.1,{type:"lowpass",freq:t?500:900,gain:t?.5:.2,rev:.1}),t&&this._tone(70,.25,{gain:.4,slideTo:35,rev:0})}step(){this._noise(.06,{type:"bandpass",freq:700+Math.random()*400,gain:.12,rev:0})}slideStart(){this._noise(.5,{type:"bandpass",freq:1800,sweepTo:700,gain:.25,attack:.03})}grapple(){this._tone(1800,.15,{type:"square",gain:.08,slideTo:300}),this._noise(.2,{type:"highpass",freq:2e3,gain:.2})}grappleHit(){this._tone(300,.1,{type:"square",gain:.15,slideTo:120,rev:0})}hitmarker(t){this._tone(t?2200:1600,.06,{type:"square",gain:.08,rev:0}),t&&this._tone(3300,.1,{type:"sine",gain:.1,rev:0,delay:.02})}kill(t=1){let e=440*Math.pow(1.06,Math.min(t,12)*2);this._tone(e,.25,{type:"triangle",gain:.18}),this._tone(e*1.5,.35,{type:"triangle",gain:.14,delay:.06}),this._noise(.4,{type:"lowpass",freq:600,sweepTo:80,gain:.4})}hurt(){this._tone(220,.25,{type:"sawtooth",gain:.2,slideTo:90,rev:0}),this._noise(.15,{type:"lowpass",freq:700,gain:.4,rev:0})}reload(){this._tone(900,.04,{type:"square",gain:.1,rev:0}),this._tone(600,.05,{type:"square",gain:.1,rev:0,delay:.25}),this._tone(1300,.05,{type:"square",gain:.12,rev:0,delay:.55})}empty(){this._tone(1400,.03,{type:"square",gain:.06,rev:0})}wave(){[0,.12,.24].forEach((t,e)=>this._tone(220*Math.pow(1.5,e),.6,{type:"sawtooth",gain:.1,delay:t}))}bulletWhiz(){this._noise(.15,{type:"bandpass",freq:2500,sweepTo:900,q:3,gain:.15,rev:0})}ui(){this._tone(1e3,.05,{type:"sine",gain:.08,rev:0})}discThrow(t=1){this._noise(.25,{type:"bandpass",freq:900,sweepTo:3200,q:1.5,gain:.35*t,attack:.01}),this._tone(500,.18,{type:"triangle",gain:.08,slideTo:1400,rev:.2})}discBounce(t=1){this._tone(900+t*260,.12,{type:"square",gain:.07,rev:.3}),this._noise(.06,{type:"highpass",freq:3e3,gain:.25,rev:.2})}discCatch(){this._tone(1500,.06,{type:"triangle",gain:.12,rev:0}),this._noise(.05,{type:"lowpass",freq:1500,gain:.2,rev:0})}discHit(t=1){this._noise(.12,{type:"lowpass",freq:2500,gain:.5,rev:.15}),this._tone(240+t*60,.1,{type:"square",gain:.1,slideTo:90,rev:0})}blink(){this._tone(300,.25,{type:"sine",gain:.35,slideTo:1600,rev:.4}),this._noise(.2,{type:"bandpass",freq:4e3,sweepTo:500,gain:.3})}slam(){this._noise(.4,{type:"lowpass",freq:1200,sweepTo:80,gain:.7,rev:.4}),this._tone(70,.3,{type:"sine",gain:.5,slideTo:35,rev:0})}orbFire(t){let e=Math.max(.05,.3-t*.004);this._tone(700,.2,{type:"sine",gain:e,slideTo:250,rev:.4})}shieldClang(){[1,2.3,3.9].forEach((t,e)=>this._tone(520*t,.25,{type:"triangle",gain:.12/(e+1),rev:.5}))}shotgun(){this._noise(.5,{type:"lowpass",freq:3500,sweepTo:160,gain:1,rev:.7}),this._tone(90,.35,{type:"sine",gain:.8,slideTo:30,rev:0}),this._noise(.08,{type:"highpass",freq:2500,gain:.5,rev:0})}pump(){this._noise(.06,{type:"bandpass",freq:1500,gain:.2,rev:0}),this._noise(.06,{type:"bandpass",freq:900,gain:.25,rev:0})}wallStart(){this._noise(.25,{type:"bandpass",freq:2200,sweepTo:900,gain:.18})}climb(){this._noise(.15,{type:"bandpass",freq:600,gain:.2,rev:0})}mantle(){this._noise(.18,{type:"lowpass",freq:700,gain:.25,rev:0})}hookFire(){this._tone(2200,.18,{type:"sawtooth",gain:.06,slideTo:600}),this._noise(.12,{type:"highpass",freq:3e3,gain:.2})}hookAttach(t){this._tone(t?500:320,.12,{type:"square",gain:.14,slideTo:140,rev:.2}),this._noise(.06,{type:"bandpass",freq:1800,gain:.3,rev:0})}sniperCharge(t){let e=Math.max(.04,.22-t*.002);this._tone(1800,1.2,{type:"sine",gain:e,slideTo:3600,attack:.05,rev:.4})}sniperShot(t){let e=Math.max(.15,.7-t*.004);this._noise(.7,{type:"lowpass",freq:5e3,sweepTo:200,gain:e,rev:.9}),this._tone(220,.5,{type:"sawtooth",gain:e*.3,slideTo:50})}telegraph(t){t?this._tone(2400,.09,{type:"triangle",gain:.12,rev:.3}):(this._tone(160,.35,{type:"sawtooth",gain:.2,slideTo:90,rev:.4}),this._tone(170,.35,{type:"sawtooth",gain:.15,slideTo:95}))}block(){[1,2.1,3.6].forEach((t,e)=>this._tone(380*t,.3,{type:"triangle",gain:.14/(e+1),rev:.6})),this._noise(.08,{type:"bandpass",freq:2200,gain:.35})}broken(){this._tone(880,.5,{type:"square",gain:.08,slideTo:1760,rev:.6}),this._tone(440,.6,{type:"triangle",gain:.1,rev:.6,delay:.05})}execute(){this._noise(.8,{type:"lowpass",freq:3e3,sweepTo:60,gain:.9,rev:.9}),this._tone(60,.8,{type:"sine",gain:.8,slideTo:25,rev:0}),[1,1.5,2].forEach((t,e)=>this._tone(660*t,1,{type:"triangle",gain:.08,rev:.9,delay:.05*e}))}chargeStart(){this._tone(200,.6,{type:"sawtooth",gain:.05,slideTo:800,attack:.1,rev:.3})}iaido(){this._noise(.5,{type:"bandpass",freq:600,sweepTo:6e3,q:.7,gain:.6,attack:.01,rev:.6}),this._tone(120,.4,{type:"sine",gain:.5,slideTo:40,rev:0})}droneExplode(){this._noise(.6,{type:"lowpass",freq:2e3,sweepTo:80,gain:.7,rev:.6})}checkpoint(t){[0,.07,.14].forEach((e,i)=>this._tone(880*Math.pow(1.26,i),.25,{type:"triangle",gain:.12,delay:e})),t&&[0,.1,.2,.3].forEach((e,i)=>this._tone(660*Math.pow(1.5,i%3),.5,{type:"square",gain:.06,delay:.25+e}))}boost(){this._tone(300,.3,{type:"sawtooth",gain:.1,slideTo:1200,rev:.3})}update(t,e,i,n=0){if(!this.ctx)return;this.intensity=(this.intensity||0)+(n-(this.intensity||0))*Math.min(1,i*2);let s=Math.min(t/40,1);this.windGain.gain.setTargetAtTime(Math.max(0,s-.15)*.35,this.t,.1),this.windFilter.frequency.setTargetAtTime(300+s*1600,this.t,.1),this.wrGain.gain.setTargetAtTime(e?.06:0,this.t,.05),this._updateMusic()}_updateMusic(){if(!this.musicOn||this.musicVol<=.001)return;let t=this.ctx,e=132,i=60/e/4;for(this._musicNext<t.currentTime&&(this._musicNext=t.currentTime+.05);this._musicNext<t.currentTime+.2;)this._playStep(this._musicStep,this._musicNext),this._musicNext+=i,this._musicStep=(this._musicStep+1)%64}_playStep(t,e){let i=this.ctx,n=this.music,s=Math.floor(t/16),a=t%16,l=[36,36,39,34][s],c=u=>440*Math.pow(2,(u-69)/12),h=(u,d,f,g=.003)=>{u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(d,e+g),u.gain.exponentialRampToValueAtTime(1e-4,e+f)};if(a%4===0){let u=i.createOscillator(),d=i.createGain();u.frequency.setValueAtTime(140,e),u.frequency.exponentialRampToValueAtTime(40,e+.12),h(d,.9,.3),u.connect(d),d.connect(n),u.start(e),u.stop(e+.32)}if(a===4||a===12){let u=i.createBufferSource();u.buffer=this.noiseBuf;let d=i.createBiquadFilter();d.type="bandpass",d.frequency.value=1800;let f=i.createGain();h(f,.35,.18),u.connect(d),d.connect(f),f.connect(n),u.start(e,Math.random()),u.stop(e+.2)}if(a%2===1){let u=i.createBufferSource();u.buffer=this.noiseBuf;let d=i.createBiquadFilter();d.type="highpass",d.frequency.value=8e3;let f=this.intensity||0,g=i.createGain();h(g,(a%4===3?.12:.06)*(.6+f*.8),.05),u.connect(d),d.connect(g),g.connect(n),u.start(e,Math.random()),u.stop(e+.06)}if(a%4!==0){let u=i.createOscillator();u.type="sawtooth",u.frequency.value=c(l+(a===14?12:0));let d=i.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(900,e),d.frequency.exponentialRampToValueAtTime(150,e+.1),d.Q.value=6;let f=i.createGain();h(f,.22,.12),u.connect(d),d.connect(f),f.connect(n),u.start(e),u.stop(e+.14)}if((this.intensity||0)>.55&&(a===0||a===6||a===10))for(let u of[-7,7]){let d=i.createOscillator();d.type="sawtooth",d.frequency.value=c(l+48+(a===10?3:0)),d.detune.value=u;let f=i.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(3200,e),f.frequency.exponentialRampToValueAtTime(600,e+.25);let g=i.createGain();h(g,.035*this.intensity,.3),d.connect(f),f.connect(g),g.connect(n);let y=i.createGain();y.gain.value=.6,g.connect(y),y.connect(this.reverb),d.start(e),d.stop(e+.32)}if(a%2===0){let u=[0,3,7,10,12,7],d=i.createOscillator();d.type="square",d.frequency.value=c(l+36+u[t/2%u.length|0]);let f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;let g=i.createGain();h(g,.03+(this.intensity||0)*.035,.18),d.connect(f),f.connect(g),g.connect(n);let y=i.createGain();y.gain.value=.5,g.connect(y),y.connect(this.reverb),d.start(e),d.stop(e+.2)}}};var Fc=[["forward","\uC55E\uC73C\uB85C"],["back","\uB4A4\uB85C"],["left","\uC67C\uCABD"],["right","\uC624\uB978\uCABD"],["jump","\uC810\uD504 (\uACF5\uC911\uC5D0\uC11C \uD55C \uBC88 \uB354)"],["dash","\uB300\uC2DC (\uB300\uC2DC \uC911 \uBB34\uC801)"],["throw","\uC6D0\uBC18 \uB358\uC9C0\uAE30 / \uD68C\uC218"],["blink","\uC21C\uAC04\uC774\uB3D9 (\uC6D0\uBC18 \uC704\uCE58\uB85C)"],["skill","\uC2A4\uD0AC"]],$a={forward:["KeyW"],back:["KeyS"],left:["KeyA"],right:["KeyD"],jump:["Space"],dash:["ShiftLeft"],throw:["Mouse0"],blink:["Mouse2","KeyE"],skill:["KeyQ","KeyF"]},Zu={sens:.8,fov:103,fovFx:14,shake:.5,tilt:.5,bob:.4,sfx:.8,music:.4,quality:"auto",fps:0,full:1,autoHop:1,touchSens:1,touchUI:"auto",touchLayout:"auto",difficulty:"easy",botSkill:"max",aimAssist:"strong",weapon:"disc",skill:"reflect",keyHints:1,name:"",binds:$a},Za={low:{pr:.75,shadows:!1,shadowSize:1024,aa:!1,particles:800},medium:{pr:1,shadows:!0,shadowSize:1024,aa:!0,particles:1800},high:{pr:1.5,shadows:!0,shadowSize:2048,aa:!0,particles:3e3}},Bc={strong:{snap:.17,homing:3.4,cone:.62,range:48,bonus:.55},normal:{snap:.09,homing:1.7,cone:.45,range:36,bonus:.25},off:{snap:0,homing:0,cone:0,range:0,bonus:0}},Ju="redshift4_settings",Ku="redshift4_records";function ju(){try{let r=JSON.parse(localStorage.getItem(Ju)||"{}"),t={...Zu,...r,binds:{...$a,...r.binds||{}}};return Za[t.quality]||(t.quality=window.matchMedia&&matchMedia("(pointer: coarse)").matches||window.REDSHIFT_APP==="android"?"low":"high"),t.name||(t.name="\uD50C\uB808\uC774\uC5B4"+Math.floor(10+Math.random()*90)),t}catch{return JSON.parse(JSON.stringify(Zu))}}function wi(r){try{localStorage.setItem(Ju,JSON.stringify(r))}catch{}}function Qu(){let r={score:0,wave:0,speed:0,combo:0,duelWin:0,duelLose:0,ffaWin:0,ffaBest:0};try{return{...r,...JSON.parse(localStorage.getItem(Ku)||"{}")}}catch{return r}}function td(r){try{localStorage.setItem(Ku,JSON.stringify(r))}catch{}}function vi(r){return r?r.startsWith("Mouse")?["\uC88C\uD074\uB9AD","\uD720\uD074\uB9AD","\uC6B0\uD074\uB9AD","\uB9C8\uC6B0\uC2A44","\uB9C8\uC6B0\uC2A45"][+r.slice(5)]||r:r.replace("Key","").replace("Digit","").replace("ControlLeft","L-CTRL").replace("ControlRight","R-CTRL").replace("ShiftLeft","SHIFT").replace("ShiftRight","R-SHIFT").replace("AltLeft","L-ALT").replace("Space","SPACE").replace("ArrowUp","\u2191").replace("ArrowDown","\u2193").replace("ArrowLeft","\u2190").replace("ArrowRight","\u2192"):"\u2014"}var sr=1/120,Ja={easy:{name:"\uC26C\uC6C0",dmg:.55,windup:1.4,count:.75,projSpeed:.75,enemyHp:.8,speedMul:.8,attackers:2,regen:20,killHeal:6,assist:.09},normal:{name:"\uBCF4\uD1B5",dmg:.85,windup:1.1,count:1,projSpeed:.9,enemyHp:1,speedMul:.92,attackers:3,regen:14,killHeal:4,assist:.06},hard:{name:"\uC5B4\uB824\uC6C0",dmg:1.15,windup:.9,count:1.25,projSpeed:1.1,enemyHp:1.15,speedMul:1.05,attackers:5,regen:9,killHeal:2,assist:.03}},ed=new b(0,0,22),Jt=new b,Ue=new b,_i=new b,Ts=new b,Ka={t:0,x:0,y:0,z:0,nx:0,ny:0,nz:0,flags:0,tri:0},dn={style:{setProperty(){}},classList:{toggle(){},add(){},remove(){},contains(){return!1}},textContent:"",innerHTML:"",children:[],appendChild(){},querySelectorAll(){return[]}},rr=[{k:"throw",a:"throw",t:"\uC6D0\uBC18 \uB358\uC9C0\uAE30"},{k:"recall",a:"throw",t:"\uD55C \uBC88 \uB354 \uB20C\uB7EC \uD68C\uC218 (\uB3CC\uC544\uC624\uBA74\uC11C\uB3C4 \uB54C\uB824\uC694)"},{k:"blink",a:"blink",t:"\uC6D0\uBC18\uC774 \uB0A0\uC544\uAC00\uB294 \uB3D9\uC548 \uC21C\uAC04\uC774\uB3D9"},{k:"bank",a:null,t:"\uBCBD\uC5D0 \uD295\uACA8\uC11C \uB9DE\uD788\uAE30 (\uD295\uAE38 \uB54C\uB9C8\uB2E4 +35% \uD53C\uD574)"},{k:"slam",a:"blink",t:"\uC801 \uBC14\uB85C \uC606\uC73C\uB85C \uC21C\uAC04\uC774\uB3D9 \u2192 \uCDA9\uACA9\uD30C"},{k:"flank",a:null,t:"\uBC29\uD328\uBCD1\uC744 \uC606\xB7\uB4A4\uC5D0\uC11C \uB9DE\uD788\uAE30"},{k:"dash",a:"dash",t:"\uB300\uC2DC (\uB300\uC2DC \uC911\uC5D4 \uBB34\uC801)"},{k:"air",a:"jump",t:"\uACF5\uC911\uC5D0\uC11C \uD55C \uBC88 \uB354 \uC810\uD504"},{k:"skill",a:"skill",t:"\uC2A4\uD0AC \uC4F0\uAE30 (\uBA54\uB274\uC5D0\uC11C \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694)"}],ex={throw:"\uB358\uC9C0\uAE30",blink:"\uC21C\uAC04\uC774\uB3D9",jump:"\uC810\uD504",dash:"\uB300\uC2DC",skill:"\uC2A4\uD0AC"};function id(r,t,e){let i=t.x-r.x,n=t.y-r.y,s=t.z-r.z,a=i*i+n*n+s*s;if(a<1e-9)return 0;let o=((e.x-r.x)*i+(e.y-r.y)*n+(e.z-r.z)*s)/a;return o<0?0:o>1?1:o}var nd={d:0,s:0},ar=r=>r<0?0:r>1?1:r;function ix(r,t,e,i,n){let s=t.x-r.x,a=t.y-r.y,o=t.z-r.z,l=i.x-e.x,c=i.y-e.y,h=i.z-e.z,u=r.x-e.x,d=r.y-e.y,f=r.z-e.z,g=s*s+a*a+o*o,y=l*l+c*c+h*h,p=l*u+c*d+h*f,m=0,x=0;if(g<1e-9&&y<1e-9)m=x=0;else if(g<1e-9)x=ar(p/y);else{let T=s*u+a*d+o*f;if(y<1e-9)m=ar(-T/g);else{let A=s*l+a*c+o*h,P=g*y-A*A;m=P>1e-9?ar((A*p-T*y)/P):0,x=(A*m+p)/y,x<0?(x=0,m=ar(-T/g)):x>1&&(x=1,m=ar((A-T)/g))}}let _=u+s*m-l*x,M=d+a*m-c*x,C=f+o*m-h*x;return n.d=Math.sqrt(_*_+M*M+C*C),n.s=m,n}var sd=new b,rd=new b;function ad(r,t,e,i){let n=r.x+(t.x-r.x)*i-e.x,s=r.y+(t.y-r.y)*i-e.y,a=r.z+(t.z-r.z)*i-e.z;return Math.sqrt(n*n+s*s+a*a)}var or=class{constructor(t,e,i){this.canvas=t,this.S=e,this.input=i,this.Q=Za[e.quality]||Za.high,this.state="menu",this.mode="arena",this._el={},this._txt={},this.audio=new Ya;let n=this.renderer=new fa({canvas:t,antialias:this.Q.aa,powerPreference:"high-performance",stencil:!1});n.setPixelRatio(Math.min(devicePixelRatio,this.Q.pr)),n.setSize(innerWidth,innerHeight),n.toneMapping=yc,n.toneMappingExposure=1,n.autoClear=!1,n.shadowMap.enabled=this.Q.shadows,n.shadowMap.type=gc;let s=this.scene=new ps;s.background=new wt(15987697),s.fog=new pa(15987697,70,170),s.add(new vs(16777215,14211284,1.5));let a=this.sun=new _s(16777215,2);if(a.position.set(30,60,20),this.Q.shadows){a.castShadow=!0,a.shadow.mapSize.set(this.Q.shadowSize,this.Q.shadowSize);let o=a.shadow.camera;o.left=-62,o.right=62,o.top=62,o.bottom=-62,o.near=1,o.far=200,a.shadow.bias=-4e-4,a.shadow.normalBias=.04}s.add(a),this.camera=new Pe(e.fov,innerWidth/innerHeight,.05,600),this.camera.rotation.order="YXZ",s.add(this.camera),this.arena=new Na(s,this.Q),this.hand=new Ga,this.parts=new Ba(s,this.Q.particles),this.rings=new Oa(s),this.lines=new Va(s,90),this.player=new Ss(this.arena,this.playerEvents()),this.player.easy=!0,this.player.noWall=!0,this.pctx={},this.disc=new ws(this),this.me=new ln(this,{name:"\uB098",color:16734751,isBot:!1,body:this.player,disc:this.disc}),this.fighters=[this.me],this.grenades=[],this.wells=[],this.chatLines=[],this.nadeGeo=new oi(.24,14,10),this.wellGeo=new oi(1,28,18),this.versus=!1,this.match={limit:0,timeLeft:0,over:!0},this.net=new hn(this),this.online=!1,this.byId=new Map,this.menuOpen=!1,this.foes=[],this.orbs=[],this.debris=[],this.respawns=[],this.dnums=[],this.orbGeo=new oi(.3,16,12),this.orbMat=new Se({color:15212591}),this.orbHalo=new Se({color:16726600,transparent:!0,opacity:.22,depthWrite:!1}),this.lasers=[];for(let o=0;o<8;o++){let l=new re;l.setAttribute("position",new ue(new Float32Array(6),3));let c=new Zs(l,new Oi({color:15212591,transparent:!0,opacity:.5}));c.frustumCulled=!1,c.visible=!1,s.add(c),this.lasers.push(c)}this.blinkGhost=new kt(new Cn(.45,.6,32),new Se({color:16734751,transparent:!0,opacity:.8,side:Fe,depthWrite:!1})),this.blinkGhost.rotation.x=-Math.PI/2,this.blinkGhost.visible=!1,s.add(this.blinkGhost),this.D=Ja[e.difficulty]||Ja.easy,this.camState={dip:0,dipV:0,tilt:0,fov:e.fov,kick:0,trauma:0,bob:0},this.acc=0,this.last=performance.now(),this.clockT=0,this.fpsAcc=0,this.fpsN=0,this.timeScale=1,this.slowT=0,this.stopT=0,this.mouseDX=0,this.mouseDY=0,this.lastRight=0,this.records={score:0,wave:0,speed:0,combo:0},this.hinted=new Set,this.resetRun(),this.resize(),addEventListener("resize",()=>this.resize())}get hp(){return this.me?this.me.hp:100}set hp(t){this.me&&(this.me.hp=t)}get trail(){return this.disc.trail}el(t){let e=this._el[t];return e===void 0&&(e=document.getElementById(t),this._el[t]=e),e||dn}txt(t,e){this._txt[t]!==e&&(this._txt[t]=e,this.el(t).textContent=e)}css(t,e,i){let n=t+"."+e;this._txt[n]!==i&&(this._txt[n]=i,this.el(t).style[e]=i)}cls(t,e,i){let n=t+"#"+e;this._txt[n]!==i&&(this._txt[n]=i,this.el(t).classList.toggle(e,i))}resize(){this.renderer.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.hand.resize(innerWidth/innerHeight),this.parts.mat.uniforms.scale.value=innerHeight*this.renderer.getPixelRatio()*.5}resetRun(){this.hp=100,this.score=0,this.kills=0,this.wave=0,this.combo=0,this.comboT=0,this.bestCombo=0,this.maxSpeed=0,this.gameTime=0,this.regenT=0,this.waveState="break",this.breakT=3,this.queue=[],this.spawnT=0,this.chain=0,this.chainT=0,this.throwBuf=0,this.dmgFx=0,this.flashFx=0,this.hitT=0,this.bannerT=0,this.popT=0,this.hintT=0,this.dirT=0,this.stats={throws:0,hits:0,banks:0,blinks:0,slams:0},this.tut=new Set}start(t){this.mode=["practice","duel","ffa","online"].includes(t)?t:"arena",this.versus=this.mode==="duel"||this.mode==="ffa"||this.mode==="online",this.mode!=="online"&&(this.online&&this.leaveOnline(),this.online=!1),this.D=Ja[this.S.difficulty]||Ja.easy,this.clear(),this.resetRun();let e=this.player;e.easy=!0,e.noWall=!0,e.reset(ed.clone(),0);let i=this.me;i.st={throws:0,hits:0,blinks:0,slams:0,dodges:0,bank:0,ret:0},Object.assign(i,{kills:0,deaths:0,alive:!0,protT:0,invulnT:0,regenT:0,streak:0,lastHitBy:null,respawnT:0}),this.deathInfo=null,this.match={limit:0,timeLeft:0,over:!0},this.disc.caught(),this.disc.catchCd=0,this.trail.reset(),this.disc.setWeapon(this.S.weapon),this.hand.setWeapon(this.disc.w,16734751),i.skill=Un[this.S.skill]?this.S.skill:"reflect",i.skillCd=0,i.reflectT=i.overT=i.healT=0,e.speedMul=1,this.state="play",this.acc=0,this.last=performance.now(),this.timeScale=1,this.slowT=this.stopT=0,Object.assign(this.camState,{dip:0,dipV:0,tilt:0,fov:this.S.fov,kick:0,trauma:0}),this.buildDashPips(),this.mode==="practice"?(this.setupPractice(),this.banner("\uC5F0\uC2B5\uC7A5","\uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uB97C \uB530\uB77C \uD574\uBCF4\uC138\uC694 \xB7 \uB9DE\uC544\uB3C4 \uC548 \uC8FD\uC5B4\uC694",2.6)):this.versus&&this.mode!=="online"?this.setupVersus():this.banner("\uC544\uB808\uB098","\uC6D0\uBC18 \uD558\uB098\uB85C \uB05D\uAE4C\uC9C0 \uBC84\uD2F0\uAE30",2.4),this.cls("deathMsg","show",!1),this.cls("board","hidden",!this.versus),this._boardT=0,this.el("feed").innerHTML="",this.el("dnums").innerHTML="",this.renderTut(),this.txt("hint",""),this.cls("hint","show",!1)}clear(){for(let t of this.foes)t.dispose();for(let t of this.orbs)this.scene.remove(t.m);for(let t of this.debris)this.scene.remove(t.m);for(let t of this.dnums)t.el.remove();this.foes=[],this.orbs=[],this.debris=[],this.respawns=[],this.dnums=[];for(let t of this.lasers)t.visible=!1;for(let t of this.grenades||[])this.scene.remove(t.m);for(let t of this.wells||[])this.scene.remove(t.m),this.scene.remove(t.ring);if(this.grenades=[],this.wells=[],this.chatLines){for(let t of this.chatLines)t.el.remove();this.chatLines=[]}if(this.blinkGhost.visible=!1,this.disc&&(this.disc.caught(),this.trail.reset()),this.fighters){for(let t of this.fighters)t!==this.me&&t.dispose();this.fighters=[this.me]}this.byId&&this.byId.clear()}clearWorld(){this.clear()}buildDashPips(){let t=this.el("dashPips");if(t!==dn){t.innerHTML="";for(let e=0;e<this.player.dashMax;e++)t.appendChild(document.createElement("i"));this._pipsN=-1}}setupPractice(){let t=[["turret",[0,1,0],0],["turret",[-17,0,-6],0],["turret",[17,0,-6],0],["turret",[0,0,-34],0],["shield",[-8,0,-22],0],["chaser",[10,0,10],0]];for(let[e,i]of t)this.spawnDummy(e,new b(...i))}spawnDummy(t,e){let i=this.spawnFoe(t,e);return i.dummy=!0,i.home=e.clone(),i.cd=1e9,i}tickDummy(t,e,i){t.t+=e,t.flashT-=e,t.stun=Math.max(0,t.stun-e),t.spawnT-=e,t.pos.addScaledVector(t.vel,e),t.vel.multiplyScalar(Math.exp(-6*e)),t.pos.x+=(t.home.x-t.pos.x)*Math.min(1,e*2),t.pos.z+=(t.home.z-t.pos.z)*Math.min(1,e*2),t.pos.y=t.home.y;let n=i.player,a=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z)-t.yaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;t.stun<=0&&(t.yaw+=Math.sign(a)*Math.min(Math.abs(a),(t.type==="shield"?2.2:4)*e)),t.updateCenter(),t.animate(e,i,0)}tickPractice(t){for(let e=this.respawns.length-1;e>=0;e--){let i=this.respawns[e];i.t-=t,i.t<=0&&(this.spawnDummy(i.type,i.pos),this.respawns.splice(e,1))}this.hp=100}train(t){this.mode!=="practice"||this.tut.has(t)||(this.tut.add(t),this.renderTut(t),this.audio.checkpoint(this.tut.size===rr.length),this.tut.size===rr.length&&this.banner("\uC644\uB8CC!",`\uC774\uC81C \uC2E4\uC804\uC5D0\uC11C \uC368\uBA39\uC5B4 \uBCF4\uC138\uC694 (${this.input.touch?"II":"ESC"} \u2192 \uBA54\uB274)`,3))}renderTut(t){let e=this.el("tut");if(this.mode!=="practice"){e.innerHTML="",this.cls("tut","hidden",!0);return}this.cls("tut","hidden",!1);let i=this.input.touch,n=a=>a?`<b>${i?ex[a]:vi(this.S.binds[a]&&this.S.binds[a][0])}</b>`:"",s=i?rr.filter(a=>!this.tut.has(a.k)||a.k===t).slice(0,3):rr;e.innerHTML=`<h4>\uC5F0\uC2B5 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 <span>${this.tut.size}/${rr.length}</span></h4>`+s.map(a=>`<div class="${this.tut.has(a.k)?"done":""}${t===a.k?" pop":""}">${n(a.a)}${a.t}</div>`).join("")}playerEvents(){let t=this,e=()=>Ts.copy(t.player.pos).setY(t.player.pos.y+.05);return{jump(i){t.audio.jump(),i==="air"&&(t.train("air"),t.parts.emit(e(),10,{color:[.2,.2,.22],speed:4,life:.3,gravity:2}),t.rings.add(e().clone(),2763310,1.6,.3))},land(i){t.audio.land(i>14),i>6&&(t.camState.dipV-=Math.min(5,i*.18)),i>14&&(t.shake(Math.min(.3,i*.01)),t.rings.add(e().clone(),10132118,Math.min(4,i*.15),.35))},slide(){},dash(i){t.audio.dash(),t.camState.kick=Math.max(t.camState.kick,1),t.shake(.05),t.train("dash"),t.parts.emit(Ts.copy(t.player.pos).setY(t.player.pos.y+.9),12,{color:[.15,.15,.17],speed:6,dir:i.clone().negate(),spread:.6,life:.3,gravity:0})},wallStart(){},climb(){},mantle(){t.audio.mantle(),t.camState.dipV-=1.5},hookFire(){},hookMiss(){},hookAttach(){},hookRelease(){},pad(){},boost(){},fell(){t.versus?t.respawn(t.me):t.player.reset(ed.clone(),0)}}}botEvents(t){let e=this,i=()=>{};return{jump:i,land:i,slide:i,wallStart:i,climb:i,mantle:i,hookFire:i,hookMiss:i,hookAttach:i,hookRelease:i,pad:i,boost:i,dash(){e.spatial(t.body.pos,()=>e.audio.dash())},fell(){e.respawn(t)}}}spatial(t,e){let i=t.distanceTo(this.camera.position);if(!(i>70)){this.audio.vol=Math.pow(Math.max(.06,1-i/70),1.5);try{e()}finally{this.audio.vol=1}}}frame(t){let e=Math.max(0,Math.min(.1,(t-this.last)/1e3));this.last=Math.max(this.last,t),this.fpsAcc+=e,this.fpsN++,this.fpsAcc>.5&&(this.txt("fps",Math.round(this.fpsN/this.fpsAcc)+" FPS"),this.fpsAcc=0,this.fpsN=0);let i=Math.min(.05,e);this.update(i),this.render(i)}update(t){this.clockT+=t;let e=1;this.slowT>0&&(this.slowT-=t,e=.35),this.stopT>0&&(this.stopT-=t,e=.08),this.timeScale+=(e-this.timeScale)*Math.min(1,t*(e<this.timeScale?50:10));let[i,n]=this.input.takeMouse();if(this.mouseDX=i,this.mouseDY=n,this.state==="play"){let s=this.player,a=this.S.sens*.0012;s.yaw-=i*a,s.pitch=Vt.clamp(s.pitch-n*a,-1.55,1.55),this.acc+=t*this.timeScale;let o=0;for(;this.acc>=sr&&o<12&&(this.tick(sr),this.acc-=sr,o++,this.state==="play"););o===12&&(this.acc=0)}else this.state==="dead"&&this.tickDebris(t*.4);this.state!=="play"&&this.input.consumeEdges()}readInput(){let t=this.input,e={fwd:Vt.clamp((t.is("forward")?1:0)-(t.is("back")?1:0)+t.axis.y,-1,1),right:Vt.clamp((t.is("right")?1:0)-(t.is("left")?1:0)+t.axis.x,-1,1),jumpPressed:t.pressed("jump"),jumpHeld:t.is("jump"),crouch:!1,dashPressed:t.pressed("dash"),grapplePressed:!1,grappleHeld:!1,autoHop:!!this.S.autoHop,throwPressed:t.pressed("throw"),blinkPressed:t.pressed("blink"),skillPressed:t.pressed("skill")};return t.consumeEdges(),e}clampBounds(t){let e=this.arena.half-.45;Math.abs(t.pos.x)>e&&(t.pos.x=Math.sign(t.pos.x)*e,t.vel.x*Math.sign(t.pos.x)>0&&(t.vel.x=0)),Math.abs(t.pos.z)>e&&(t.pos.z=Math.sign(t.pos.z)*e,t.vel.z*Math.sign(t.pos.z)>0&&(t.vel.z=0)),t.pos.y>this.arena.ceiling&&(t.pos.y=this.arena.ceiling,t.vel.y=Math.min(t.vel.y,0))}tick(t){this.gameTime+=t;let e=this.player,i=this.disc,n=this.me,s=this.readInput();this.menuOpen&&(s.fwd=s.right=0,s.jumpPressed=s.jumpHeld=s.dashPressed=s.throwPressed=s.blinkPressed=s.skillPressed=!1),n.brain&&(s=n.brain.tick(t)),this.online&&this.updateRemotes(),n.alive&&(e.tick(t,s,this.pctx),this.clampBounds(e),this.maxSpeed=Math.max(this.maxSpeed,e.hSpeed),n.brain||(this.throwBuf-=t,s.throwPressed&&(i.state==="hand"?i.catchCd>0?this.throwBuf=.4:this.throwDisc():i.state==="out"?this.recallFor(n):this.throwBuf=.4),this.throwBuf>0&&i.state==="hand"&&i.catchCd<=0&&(this.throwBuf=0,this.throwDisc()),s.blinkPressed&&this.blink(),s.skillPressed&&this.useSkill(n)));for(let o of this.fighters){if(o===n||!o.alive||o.remote||!o.brain)continue;let l=this.match.over&&this.versus?o.brain.inp:o.brain.tick(t);o.body.tick(t,l,this.pctx),this.clampBounds(o.body)}for(let o of this.fighters)o.remote||o.disc.tick(t);this.tickSkills(t);for(let o of this.fighters)if(o.invulnT-=t,o.protT=Math.max(0,o.protT-t),!!this.versus){if(!o.alive){!this.match.over&&!o.remote&&(o.respawnT-=t,o.respawnT<=0&&this.respawn(o));continue}this.online||(o.regenT-=t,o.regenT<=0&&o.hp<100&&(o.hp=Math.min(100,o.hp+8*t)))}if(this.versus||(this.regenT-=t,this.regenT<=0&&this.hp<100&&(this.hp=Math.min(100,this.hp+this.D.regen*t))),this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0)),this.chainT>0&&(this.chainT-=t,this.chainT<=0&&(this.chain=0)),this.tickDebris(t),this.online&&this.netTick(t),this.versus){this.tickMatch(t);return}let a=this.ctx();for(let o of this.foes)o.alive&&(o.dummy?this.tickDummy(o,t,a):o.update(t,a));this.foes=this.foes.filter(o=>o.alive),this.tickOrbs(t),this.mode==="arena"?this.tickWaves(t):this.tickPractice(t)}throwDisc(){let t=this.player,e=this.assistCfg(),i=t.lookDir(new b),n=new b().copy(t.eye);n.y-=.15;let s=this.aimAssist(n,i);if(!this.throwFor(this.me,i))return;let a=this.disc;a.homing=e.homing,a.cone=e.cone,a.range=e.range,a.bonus=e.bonus,a.lock=s}throwFor(t,e){let i=t.body,n=t.disc,s=new b().copy(i.eye);return s.y-=.15,s.addScaledVector(e,.3),n.throw(s,e,i.vel,t.overT>0?1.25:1)?(t.st.throws++,this.noise(t,s,30),this.online&&this.netFx({k:"throw",id:t.netId}),t===this.me?(this.stats.throws++,this.audio.discThrow(1),this.hand.throwAnim(),this.camState.kick=Math.max(this.camState.kick,.25),this.train("throw")):(t.throwT=.25,this.spatial(s,()=>this.audio.discThrow(.8))),!0):!1}recallFor(t){return t.disc.recall()?(t===this.me&&(this.audio.discBounce(0),this.train("recall")),!0):!1}assistCfg(){let t=Bc[this.S.aimAssist]||Bc.strong;return this.input.touch&&t.snap?(this._touchA||(this._touchA={}))&&Object.assign(this._touchA,t,{snap:t.snap*1.6,cone:t.cone*1.15}):t}assistTargets(){return this.versus?this.fighters.filter(t=>t!==this.me&&t.alive):this.foes.filter(t=>t.alive)}tInfo(t){if(t instanceof ln){let e=t.body;return{c:t.updateCenter(),v:e.vel,air:!e.grounded}}return{c:t.center,v:t.vel,air:!1}}leadPoint(t,e,i){let{c:n,v:s,air:a}=this.tInfo(e),o=this.player,l=this.disc.w,c=t.distanceTo(n)/l.speed;for(let h=0;h<3;h++){i.copy(n).addScaledVector(s,c),a?(i.y+=-.5*K.gravity*c*c,i.y<.8&&(i.y=.8)):i.y=n.y;let u=t.distanceTo(i);Ts.subVectors(i,t).divideScalar(u||1),c=u/(l.speed+Math.max(0,o.vel.dot(Ts))*l.carry)}return i}aimAssist(t,e,i=!0){let n=this.assistCfg();if(!n.snap)return null;let s=null,a=n.snap,o=new b,l=new b;for(let c of this.assistTargets()){let{c:h}=this.tInfo(c);Ue.subVectors(h,t);let u=Ue.length();if(u<1.2||u>80)continue;Ue.divideScalar(u),this.leadPoint(t,c,l),Jt.subVectors(l,t).normalize();let d=Math.min(Math.acos(Vt.clamp(Jt.dot(e),-1,1)),Math.acos(Vt.clamp(Ue.dot(e),-1,1)));d>=a||(this.los(t,l)?(a=d,s=c,o.copy(Jt)):this.los(t,h)&&(a=d,s=c,o.copy(Ue)))}return s&&i&&e.copy(o),s}discHoming(t,e){let i=t.vel.length();if(i<1)return;let n=Jt.copy(t.vel).divideScalar(i),s=f=>f&&f.alive&&!t.hit.has(f)&&!(f.protT>0),a=null;if(s(t.lock)){let{c:f}=this.tInfo(t.lock);Ue.subVectors(f,t.pos);let g=Ue.length();g<t.range&&Ue.dot(n)>g*.15&&(a=t.lock)}if(!a){let f=1e9;for(let g of this.assistTargets()){if(!s(g))continue;let{c:y}=this.tInfo(g);Ue.subVectors(y,t.pos);let p=Ue.length();if(p>t.range||p<.4)continue;let m=Math.acos(Vt.clamp(Ue.dot(n)/p,-1,1));m<t.cone&&m<f&&(f=m,a=g)}a&&(t.lock=a)}if(!a)return;let{c:o,v:l}=this.tInfo(a);if(!this.los(t.pos,o))return;let c=t.pos.distanceTo(o),h=c/i;_i.copy(o).addScaledVector(l,h*.7).sub(t.pos).normalize();let u=Math.acos(Vt.clamp(_i.dot(n),-1,1));if(u<1e-4)return;let d=Math.min(14,t.homing*(1+8/Math.max(1.5,c)));n.lerp(_i,Math.min(1,d*e/u)).normalize(),t.vel.copy(n).multiplyScalar(i)}onDiscBounce(t,e,i){this.online&&t.owner&&!t.owner.remote&&this.netFx({k:"bounce",id:t.owner.netId,p:[e.x,e.y,e.z].map(s=>Math.round(s*100)/100),n:[i.x,i.y,i.z].map(s=>Math.round(s*100)/100),b:t.bounces}),t.owner===this.me?this.audio.discBounce(t.bounces):this.spatial(e,()=>this.audio.discBounce(t.bounces)),t.trail.width=.25+Math.min(4,t.bounces)*.07;let n=new wt(t.color);this.parts.emit(e,10,{color:[[n.r,n.g,n.b],[.15,.15,.17]],speed:7,dir:i,spread:.8,life:.35,gravity:10}),this.rings.add(e.clone().addScaledVector(i,.04),t.color,1.1+t.bounces*.35,.3,i)}onDiscCatch(t){t.state!=="hand"&&(t.caught(),t.owner===this.me&&(this.audio.discCatch(),this.hand.catchAnim()))}discSweep(t,e,i,n){let s=e.distanceTo(i);if(s<1e-6)return null;let a=new b().subVectors(i,e).divideScalar(s);if(this.versus)return this.sweepFighters(t,e,i,a,n);let o=[];for(let l of this.foes){if(!l.alive||t.hit.has(l)||l.spawnT>.25)continue;let c=id(e,i,l.center);ad(e,i,l.center,c)<l.hitRadius+t.w.radius+(t.bonus||0)&&o.push({f:l,t:c})}o.sort((l,c)=>l.t-c.t);for(let{f:l,t:c}of o){t.hit.add(l);let h=new b().lerpVectors(e,i,c);if(l.shieldBlocks(a)){if(this.audio.shieldClang(),this.parts.emit(h,12,{color:[[1,1,1],[.9,.15,.2]],speed:8,life:.3,gravity:6}),this.hint("\uBC29\uD328\uBCD1\uC740 \uC815\uBA74\uC744 \uB9C9\uC544\uC694 \u2014 \uC606\xB7\uB4A4\uB97C \uB178\uB9AC\uAC70\uB098 \uB4A4\uB85C \uC21C\uAC04\uC774\uB3D9!","shield"),this.popupWorld(h,"\uB9C9\uD798"),n==="out"){let d=l.facing(_i),f=t.vel.dot(d);return f<0&&t.vel.addScaledVector(d,-2*f),t.bounces++,this.onDiscBounce(t,h.clone(),d.clone()),h.addScaledVector(a,-.05)}continue}l.type==="shield"&&this.train("flank");let u=n==="out"?t.w.dmg*(1+t.w.bounceMul*t.bounces)*(.75+.25*t.speedMul()):t.w.returnDmg*(1+.2*t.bounces);this.hitFoe(l,u,a,n==="out"?t.bounces>0?"bank":"direct":"return",t.bounces)}for(let l=this.orbs.length-1;l>=0;l--){let c=this.orbs[l];ad(e,i,c.pos,id(e,i,c.pos))<t.w.radius+.55&&this.killOrb(c,!0)}return null}hitFoe(t,e,i,n,s=0){e=Math.round(e);let a=new b().copy(t.center).addScaledVector(i,-1),o=t.damage(e,a);this.stats.hits++,t.windup=0,t.cd=Math.max(t.cd,.8),t.stun=Math.max(t.stun,n==="slam"?.6:.15),this.audio.discHit(s+1),this.parts.emit(t.center,14,{color:[[.1,.1,.12],[.9,.15,.2]],speed:8,dir:i,spread:.9,life:.4}),this.dmgNumber(t.center,e,n==="bank"||n==="slam"),this.hitmarker(o),this.stopT=Math.max(this.stopT,o?.05:.02),n==="bank"&&this.train("bank"),o?this.onKill(t,n,i,s):this.addScore(10)}blink(){return this.blinkFor(this.me)}blinkFor(t){let e=t.disc,i=t.body,n=t===this.me;if(e.state==="hand")return n&&(this.audio.empty(),this.hint(`\uC21C\uAC04\uC774\uB3D9\uC740 \uC6D0\uBC18\uC774 \uB0A0\uC544\uAC00\uB294 \uB3D9\uC548\uB9CC \u2014 \uBA3C\uC800 ${vi(this.S.binds.throw[0])}\uB85C \uB358\uC9C0\uC138\uC694`,"blinkEmpty")),!1;let s=e.blinkSpot(this.arena.col);if(!s)return n&&this.audio.empty(),!1;let a=this.arena.half-1;s.x=Vt.clamp(s.x,-a,a),s.z=Vt.clamp(s.z,-a,a),s.y=Math.min(s.y,this.arena.ceiling-2);let o=i.pos.clone();i.pos.copy(s),i.prevPos.copy(s);let l=i.hSpeedNow(),c=Math.min(42,Math.max(l,16)+3),h=i.flatFwd(new b);i.vel.set(h.x*c,Math.max(i.vel.y,4),h.z*c),i.grounded=!1,i.airJumps=K.airJumps,i.dashCharges=Math.min(i.dashMax,i.dashCharges+1),t.invulnT=this.versus?0:.3,t.st.blinks++;let u=new b(s.x,s.y+.9,s.z),d=0;if(this.versus){for(let y of this.fighters)if(!(y===t||!y.alive)&&y.updateCenter().distanceTo(u)<e.w.blinkRadius+K.radius){let p=new b().subVectors(y.body.pos,s).setY(0);if(p.lengthSq()<1e-4&&p.set(1,0,0),p.normalize(),y.reflectT>0){i.vel.addScaledVector(p,-14),i.vel.y=6,t.st.reflected=(t.st.reflected||0)+1,this.reflectFx(y,u),t.brain&&this.chat(t,"reflected",.5);continue}this.damageFighter(y,e.w.blinkSlam*(1+.15*e.bounces),t,"slam",p,e.bounces)&&(d++,t.st.slams++)}}else{for(let y of this.foes)if(y.alive&&y.center.distanceTo(u)<e.w.blinkRadius+y.cfg.r){let p=new b().subVectors(y.pos,s).setY(0);p.lengthSq()<1e-4&&p.set(1,0,0),p.normalize(),d++,this.hitFoe(y,e.w.blinkSlam*(1+.15*e.bounces),p,"slam",e.bounces),y.alive&&(y.vel.addScaledVector(p,9),y.vel.y=5)}for(let y=this.orbs.length-1;y>=0;y--)this.orbs[y].pos.distanceTo(u)<e.w.blinkRadius&&this.killOrb(this.orbs[y],!0)}let f=new wt(t.color),g=Math.min(24,Math.ceil(o.distanceTo(s)/1.5));for(let y=0;y<=g;y++){let p=_i.lerpVectors(o,s,y/g);p.y+=1,this.parts.emit(p,2,{color:[[f.r,f.g,f.b],[.12,.12,.14]],speed:1.5,life:.45,gravity:0,size:.14})}return this.rings.add(new b(s.x,s.y+.06,s.z),d?1447450:t.color,d?e.w.blinkRadius*1.3:2.2,.45),this.noise(t,s,38),this.online&&this.netFx({k:"blink",id:t.netId,a:[o.x,o.y,o.z].map(y=>Math.round(y*100)/100),b:[s.x,s.y,s.z].map(y=>Math.round(y*100)/100),s:d?1:0}),n?(this.audio.blink(),this.hand.blinkAnim(),this.camState.kick=Math.max(this.camState.kick,1.3),this.flashFx=Math.max(this.flashFx,.6),d&&(this.audio.slam(),this.shake(.25),this.stats.slams++,this.train("slam"),d>=2&&(this.slowT=Math.max(this.slowT,.25))),this.chain++,this.chainT=2.5,this.chain>=2&&this.popup(`\uC21C\uAC04\uC774\uB3D9 \xD7${this.chain}`),this.stats.blinks++,this.train("blink")):(this.spatial(s,()=>{this.audio.blink(),d&&this.audio.slam()}),d&&s.distanceTo(this.player.pos)<8&&this.shake(.15)),this.onDiscCatch(e),!0}los(t,e){let i=e.x-t.x,n=e.y-t.y,s=e.z-t.z,a=Math.hypot(i,n,s);if(a<.001)return!0;let o=this.arena.col.raycast(t.x,t.y,t.z,i/a,n/a,s/a,a,Ka);return!o||o.t>a-.3}ctx(){this._ctx||(this._ctx={player:this.player,foes:null,camera:this.camera,windMul:1,speedMul:1,los:(e,i)=>this.los(e,i),canAttack:e=>{let i=0;for(let n of this.foes)n!==e&&n.alive&&n.windup>0&&i++;return i<this.D.attackers},fireOrb:e=>this.fireOrb(e),contact:e=>this.foeContact(e),shove:e=>this.foeShove(e)});let t=this._ctx;return t.foes=this.foes,t.windMul=this.D.windup,t.speedMul=this.D.speedMul,t}fireOrb(t){let e=this.player,i=new b().copy(t.center).addScaledVector(t.facing(Jt),.8),n=Ue.copy(e.pos).setY(e.pos.y+1),s=i.distanceTo(n),a=new b().subVectors(n,i).normalize(),o=new kt(this.orbGeo,this.orbMat),l=new kt(this.orbGeo,this.orbHalo);l.scale.setScalar(1.9),o.add(l),o.position.copy(i),this.scene.add(o),this.orbs.push({m:o,halo:l,pos:i,vel:a.multiplyScalar(15*this.D.projSpeed),life:6,dmg:12*this.D.dmg,dodged:!1,t:0,from:t,reflected:!1}),this.audio.orbFire(s),this.parts.emit(i,6,{color:[.9,.15,.2],speed:3,life:.25,gravity:0})}tickOrbs(t){let e=this.player,i=this.arena.col;for(let n=this.orbs.length-1;n>=0;n--){let s=this.orbs[n];s.life-=t,s.t+=t;let a=s.vel.length(),o=a*t,l=i.raycast(s.pos.x,s.pos.y,s.pos.z,s.vel.x/a,s.vel.y/a,s.vel.z/a,o+.3,Ka);if(l&&l.t<o+.3){s.pos.set(l.x,l.y,l.z),this.killOrb(s,!1);continue}if(s.pos.addScaledVector(s.vel,t),s.m.position.copy(s.pos),s.reflected){let f=null;for(let g of this.foes)if(g.alive&&g.center.distanceTo(s.pos)<g.hitRadius+.4){f=g;break}if(f){this.hitFoe(f,35,s.vel.clone().normalize(),"reflect",0),this.killOrb(s,!1);continue}s.life<=0&&this.killOrb(s,!1);continue}if(this.me.reflectT>0&&s.pos.distanceTo(this.me.updateCenter())<1.9){let f=s.from&&s.from.alive?Ue.subVectors(s.from.center,s.pos).normalize():Ue.copy(s.vel).negate().normalize();s.vel.copy(f).multiplyScalar(30),s.reflected=!0,s.life=3,s.m.material=this.orbMatR||(this.orbMatR=new Se({color:16734751})),this.reflectFx(this.me,s.pos);continue}let c=e.pos.y+.4,h=e.pos.y+e.h-.4,u=Vt.clamp(s.pos.y,c,h);if(Math.hypot(s.pos.x-e.pos.x,s.pos.y-u,s.pos.z-e.pos.z)<.3+K.radius)if(this.me.invuln)s.dodged||(s.dodged=!0,this.addScore(25),this.popup("\uD68C\uD53C!"));else{this.hurt(s.dmg,s.pos),this.killOrb(s,!1);continue}s.life<=0&&this.killOrb(s,!1)}}killOrb(t,e){let i=this.orbs.indexOf(t);if(!(i<0)&&(this.orbs.splice(i,1),this.scene.remove(t.m),this.parts.emit(t.pos,e?16:8,{color:[[.9,.15,.2],[1,.6,.6]],speed:e?7:4,life:.35,gravity:4}),e)){let n=this.addScore(15);this.feed("\uAD6C\uCCB4 \uACA9\uCD94",n),this.rings.add(t.pos.clone(),15212591,1.2,.25,null),this.audio.discBounce(2)}}foeContact(t){let e=this.player;if(this.me.invuln||t.cd>0)return;t.cd=1.2,this.hurt(14*this.D.dmg,t.center);let i=Jt.subVectors(e.pos,t.pos).setY(0);i.lengthSq()<1e-4&&i.set(0,0,1),i.normalize(),e.vel.addScaledVector(i,8),e.vel.y=Math.max(e.vel.y,5),e.grounded=!1,t.vel.addScaledVector(i,-10),t.stun=.5}foeShove(t){let e=this.player,i=t.facing(new b),n=Jt.subVectors(e.pos,t.pos),s=n.y;n.y=0;let a=n.length();this.audio.shieldClang(),this.rings.add(new b().copy(t.center).addScaledVector(i,1.1),15212591,2.4,.3,i),a<3.4&&Math.abs(s)<2&&n.dot(i)/(a||1)>.35&&!this.me.invuln&&(this.hurt(16*this.D.dmg,t.center),e.vel.addScaledVector(i,14),e.vel.y=Math.max(e.vel.y,6),e.grounded=!1)}hurt(t,e){this.dmgFx=1,this.shake(.22),this.audio.hurt(),this.regenT=3,e&&(_i.copy(e).applyMatrix4(this.camera.matrixWorldInverse),this.dirAng=Math.atan2(_i.x,-_i.z),this.dirT=1),this.mode!=="practice"&&(this.hp-=t,this.combo=0,this.comboT=0,this.hp<=0&&this.die())}onKill(t,e,i,n){let s=this.player;this.kills++,this.combo++,this.comboT=3.2,this.bestCombo=Math.max(this.bestCombo,this.combo);let a=t.cfg.score,o=[];e==="bank"&&(a+=50*n,o.push(n>=2?`${n}\uCFE0\uC158 \uBC45\uD06C\uC0F7`:"\uBC45\uD06C\uC0F7"),this.stats.banks++),e==="return"&&o.push("\uD68C\uC218 \uD0C0\uACA9"),e==="slam"&&(a+=80,o.push("\uC21C\uAC04\uC774\uB3D9 \uCDA9\uACA9")),!s.grounded&&s.airTime>.3&&(a+=30,o.push("\uACF5\uC911")),e!=="slam"&&this.disc.out&&(this.disc.kills=(this.disc.kills||0)+1,this.disc.kills>=2&&(a+=60*(this.disc.kills-1),o.push(`${this.disc.kills}\uC5F0\uC18D \uAD00\uD1B5`)));let l=this.addScore(a);this.feed(`${t.cfg.name} \uCC98\uCE58${o.length?" \xB7 "+o.join(" \xB7 "):""}`,l),o.length&&this.popup(o[o.length-1]),this.audio.kill(Math.min(this.combo,8));let c=new b(i.x,Math.max(0,i.y),i.z).normalize();this.debris.push(...t.shatter(c)),this.parts.emit(t.center,26,{color:[[.08,.08,.1],[.9,.15,.2],[1,1,1]],speed:10,life:.6}),this.rings.add(new b(t.pos.x,t.pos.y+.06,t.pos.z),15212591,3,.4),this.shake(.12),s.dashCharges=Math.min(s.dashMax,s.dashCharges+1),this.mode==="arena"&&(this.hp=Math.min(100,this.hp+this.D.killHeal)),t.dummy&&this.respawns.push({type:t.type,pos:t.home.clone(),t:2})}buildWave(t){let e=this.D,i;if(t===1)i=["turret","chaser","turret"];else if(t===2)i=["turret","chaser","turret","chaser","turret"];else if(t===3)i=["shield","turret","chaser","turret","chaser"];else{i=[];let s=Math.round(4+t*1.2);for(let a=0;a<s;a++){let o=Math.random();i.push(o<.4?"turret":o<.72?"chaser":"shield")}}let n=Math.round(i.length*(e.count-1));if(n<0)i.splice(i.length+n,-n);else for(let s=0;s<n;s++)i.push(["turret","chaser",t>=3?"shield":"turret"][s%3]);return i.length||i.push("turret"),i}spawnFoe(t,e){let i=this.player,n=e;if(!n){let a=t==="turret"&&Math.random()<.5,o=a?this.arena.spawnHigh:this.arena.spawnGround,l=o.filter(c=>c.distanceTo(i.pos)>=18);n=(l.length?l:o)[Math.random()*(l.length||o.length)|0].clone(),a||(n.x+=(Math.random()-.5)*3,n.z+=(Math.random()-.5)*3)}let s=new Fa(this,t,n);return this.foes.push(s),this.rings.add(new b(n.x,n.y+.06,n.z),15212591,2.4,.5),this.parts.emit(Jt.set(n.x,n.y+1,n.z),10,{color:[.1,.1,.12],speed:4,life:.4,gravity:-2}),s}tickWaves(t){if(this.waveState==="break"){if(this.breakT-=t,this.breakT<=0){this.wave++,this.queue=this.buildWave(this.wave),this.waveState="fight",this.spawnT=0;let i=this.wave===1?"\uD3EC\uD0D1\uC758 \uBE68\uAC04 \uAD6C\uCCB4\uB97C \uD53C\uD558\uBA74\uC11C \uC6D0\uBC18\uC744 \uB358\uC838\uC694":this.wave===3?"\uBC29\uD328\uBCD1 \uB4F1\uC7A5 \u2014 \uC815\uBA74\uC740 \uB9C9\uD600\uC694. \uC606\xB7\uB4A4\uB85C \uB3CC\uAC70\uB098 \uB4A4\uB85C \uC21C\uAC04\uC774\uB3D9!":`\uC801 ${this.queue.length}`;this.banner(`WAVE ${this.wave}`,i,2.4),this.audio.wave()}return}this.spawnT-=t;let e=Math.min(14,5+this.wave);if(this.queue.length&&this.spawnT<=0&&this.foes.length<e&&(this.spawnFoe(this.queue.shift()),this.spawnT=.7),!this.queue.length&&this.foes.length===0){this.waveState="break",this.breakT=4;let i=100*this.wave,n=this.addScore(i);this.feed(`WAVE ${this.wave} \uD074\uB9AC\uC5B4`,n),this.hp=Math.min(100,this.hp+35),this.banner("\uD074\uB9AC\uC5B4!",`+${n} \xB7 \uCCB4\uB825 \uD68C\uBCF5`,2),this.audio.checkpoint(!0)}}die(){this.hp=0,this.state="dead",this.input.unlock(),this.slowT=0,this.stopT=0;let t=this.records,e=this.score>(t.score||0);t.score=Math.max(t.score||0,this.score),t.wave=Math.max(t.wave||0,this.wave),t.speed=Math.max(t.speed||0,this.maxSpeed),t.combo=Math.max(t.combo||0,this.bestCombo),this.saveRecords&&this.saveRecords();let i=[["\uC810\uC218",this.score.toLocaleString()+(e?"  \u2605 \uC2E0\uAE30\uB85D":"")],["\uB3C4\uB2EC \uC6E8\uC774\uBE0C",this.wave],["\uCC98\uCE58",this.kills],["\uCD5C\uACE0 \uCF64\uBCF4",this.bestCombo],["\uBC45\uD06C\uC0F7 \uCC98\uCE58",this.stats.banks],["\uC21C\uAC04\uC774\uB3D9 / \uCDA9\uACA9\uD30C",`${this.stats.blinks} / ${this.stats.slams}`],["\uCD5C\uACE0 \uC18D\uB3C4",Math.round(this.maxSpeed*3.6)+" KM/H"],["\uCD5C\uACE0 \uAE30\uB85D",`${t.score.toLocaleString()} \xB7 WAVE ${t.wave}`]];setTimeout(()=>this.onEnd&&this.onEnd("GAME OVER",i),900)}tickDebris(t){for(let e=this.debris.length-1;e>=0;e--){let i=this.debris[e];i.life-=t,i.v.y-=25*t,i.m.position.addScaledVector(i.v,t),i.m.rotation.x+=i.av.x*t,i.m.rotation.y+=i.av.y*t,i.m.rotation.z+=i.av.z*t,i.m.position.y<.06&&(i.m.position.y=.06,i.v.y*=-.35,i.v.x*=.7,i.v.z*=.7,i.av.multiplyScalar(.7)),i.life<.5&&i.m.scale.multiplyScalar(Math.max(0,1-t*6)),i.life<=0&&(this.scene.remove(i.m),this.debris.splice(e,1))}}autopilot(t){this.me.brain=t?new kn(this,this.me,t):null}useSkill(t){let e=Un[t.skill];if(!e||!t.alive)return!1;if(t.skillCd>0)return t===this.me&&this.audio.empty(),!1;t.skillCd=e.cd,t.st.skills=(t.st.skills||0)+1;let i=t.body,n=t===this.me,s=t.updateCenter().clone(),a=o=>n?o():this.spatial(s,o);return t.skill==="reflect"?(t.reflectT=e.dur,a(()=>this.audio.shieldClang()),this.rings.add(s,t.color,2.4,.3,null)):t.skill==="overdrive"?(t.overT=e.dur,i.speedMul=1.35,i.dashCharges=i.dashMax,a(()=>this.audio.boost()),this.rings.add(new b(i.pos.x,i.pos.y+.06,i.pos.z),t.color,3,.4)):t.skill==="gravity"?(this.throwGrenade(t),a(()=>this.audio.discThrow(.6))):t.skill==="heal"&&(t.hp=Math.min(100,t.hp+35),t.healT=e.dur,a(()=>this.audio.checkpoint(!1)),this.parts.emit(s,20,{color:[[.25,.85,.45],[1,1,1]],speed:4,life:.6,gravity:-3})),n&&(this.train("skill"),this.hand.blinkAnim(),t.skill==="overdrive"&&(this.camState.kick=Math.max(this.camState.kick,1))),this.noise(t,s,25),this.online&&(this.netFx({k:"skill",id:t.netId,s:t.skill}),t.skill==="heal"&&this.net.send({t:"heal",id:t.netId})),!0}tickSkills(t){for(let e of this.fighters)e.skillCd=Math.max(0,e.skillCd-t),e.reflectT>0&&(e.reflectT-=t),e.overT>0&&(e.overT-=t,e.alive&&(e.body.dashCharges=e.body.dashMax),e.overT<=0&&(e.body.speedMul=1)),e.healT>0&&(e.healT-=t,e.alive&&(e.hp=Math.min(100,e.hp+12*t)));this.tickGrenades(t),this.tickWells(t)}throwGrenade(t,e=null,i=null,n=null){let s=t.body;i||(e=e||s.lookDir(new b),i=new b().copy(s.eye),i.y-=.2,i.addScaledVector(e,.5),n=e.clone().multiplyScalar(24).add(new b(0,4,0)).addScaledVector(s.vel,.4),this.online&&this.netFx({k:"nade",id:t.netId,p:[i.x,i.y,i.z],v:[n.x,n.y,n.z]}));let a=new kt(this.nadeGeo,new jt({color:1447450,emissive:new wt(t.color).multiplyScalar(.6)}));a.position.copy(i),a.castShadow=!0,this.scene.add(a),this.grenades.push({f:t,pos:i,vel:n,t:0,m:a})}tickGrenades(t){let e=this.arena.col;for(let i=this.grenades.length-1;i>=0;i--){let n=this.grenades[i];n.t+=t,n.vel.y-=22*t;let s=n.vel.length(),a=s*t,o=s>0?e.raycast(n.pos.x,n.pos.y,n.pos.z,n.vel.x/s,n.vel.y/s,n.vel.z/s,a+.25,Ka):null,l=!!(o&&o.t<a+.25);l?n.pos.set(o.x+o.nx*.3,o.y+o.ny*.3,o.z+o.nz*.3):n.pos.addScaledVector(n.vel,t),n.pos.y<.2&&(n.pos.y=.2,l=!0);for(let c of this.fighters)c!==n.f&&c.alive&&c.updateCenter().distanceTo(n.pos)<1.3&&(l=!0);for(let c of this.foes)c.alive&&c.center.distanceTo(n.pos)<c.hitRadius+.4&&(l=!0);n.t>1.6&&(l=!0),n.m.position.copy(n.pos),l&&(this.scene.remove(n.m),this.grenades.splice(i,1),this.makeWell(n.f,n.pos.clone()))}}makeWell(t,e){let i=Un.gravity,n=new kt(this.wellGeo,new Se({color:1447450,transparent:!0,opacity:.18,depthWrite:!1}));n.position.copy(e),this.scene.add(n);let s=new kt(new Cn(.9,1,48),new Se({color:t.color,transparent:!0,opacity:.7,side:Fe,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(e.x,Math.max(.06,e.y-.9),e.z),s.scale.setScalar(7.5),this.scene.add(s),this.wells.push({f:t,pos:e,t:0,dur:i.dur,r:7.5,m:n,ring:s}),this.spatial(e,()=>this.audio.slam()),this.parts.emit(e,24,{color:[[.08,.08,.1],[.5,.5,.55]],speed:6,life:.5,gravity:0}),this.noise(t,e,35)}tickWells(t){for(let e=this.wells.length-1;e>=0;e--){let i=this.wells[e];i.t+=t;let n=i.t/i.dur;i.m.scale.setScalar(i.r*(.25+.15*Math.sin(i.t*18))*(1-n*.5)),i.m.material.opacity=.22*(1-n),i.ring.scale.setScalar(i.r*(1-n*.6)),i.ring.material.opacity=.7*(1-n);let s=(a,o,l,c)=>{let h=i.pos.x-o,u=i.pos.y-l,d=i.pos.z-c,f=Math.hypot(h,u,d);if(f>i.r||f<.3)return!1;let g=52*(1-f/i.r*.5)*t;return a.vel.x+=h/f*g,a.vel.z+=d/f*g,a.vel.y+=u/f*g*.5+9*t,!0};for(let a of this.fighters){if(a===i.f||!a.alive||a.reflectT>0)continue;let o=a.body;s(o,o.pos.x,o.pos.y+1,o.pos.z)&&(o.grounded=!1,a===this.me&&Math.random()<t*4&&this.shake(.05))}for(let a of this.foes)a.alive&&s(a,a.center.x,a.center.y,a.center.z);i.t>=i.dur&&(this.scene.remove(i.m),this.scene.remove(i.ring),this.wells.splice(e,1))}}noise(t,e,i){for(let n of this.fighters)n.brain&&n!==t&&n.alive&&n.body.pos.distanceTo(e)<i*n.brain.S.hear&&n.brain.hear(t,e)}chat(t,e,i=.3){if(!t.brain||!Uc[e]||Math.random()>i*t.brain.p.chatty||this.gameTime-(t.lastChat||-9)<2.5)return;t.lastChat=this.gameTime;let n=Gu(Uc[e]);this.sayLine(t,n),this.online&&!t.remote&&this.netFx({k:"say",id:t.netId,text:n})}sayLine(t,e){t.say(e);let i=this.el("chat");if(i===dn)return;let n=document.createElement("div"),s=document.createElement("b");s.textContent=t.name,s.style.color=t.css;let a=document.createElement("span");for(a.textContent=e,n.append(s,a),i.append(n),this.chatLines.push({el:n,t:0});this.chatLines.length>4;)this.chatLines.shift().el.remove()}setupVersus(){let t=this.mode==="duel",e=Vi[this.S.botSkill]?this.S.botSkill:"max";this.botSkill=e;let i=Wu.slice().sort(()=>Math.random()-.5);for(let s=0;s<(t?1:5);s++){let a=i[s],o=cn[Math.random()*cn.length|0],l=new ln(this,{name:a.name,color:a.color,isBot:!0,weapon:o.weapons[Math.random()*o.weapons.length|0],skill:o.skills[Math.random()*o.skills.length|0]});l.brain=new kn(this,l,e,o),this.fighters.push(l)}setTimeout(()=>{for(let s of this.fighters)s.brain&&this.versus&&this.chat(s,"start",.55)},900);for(let s of this.fighters)s.alive=!1;for(let s of this.fighters)this.respawn(s,!0);this.match={limit:t?5:15,timeLeft:t?0:240,over:!1};let n=this.fighters[1];t?this.banner("1 V 1",`${n.name} \xB7 \uBD07 \uC2E4\uB825 ${Vi[e].name} \xB7 5\uD0AC \uBA3C\uC800`,2.6):this.banner("FFA",`\uBD07 5\uBA85 \xB7 ${Vi[e].name} \xB7 15\uD0AC \uBA3C\uC800 (4\uBD84)`,2.6),this._boardHtml="";try{this.renderer.compile(this.scene,this.camera)}catch{}}spawnPoints(){if(!this._spawns){let t=this.arena,e=[...t.spawnGround,...t.spawnHigh];for(let[i,n]of[[-24,8],[24,-8],[8,24],[-8,-24],[0,15],[0,-15],[15,0],[-15,0]])e.push(new b(i,0,n));this._spawns=e.filter(i=>t.col.capsuleFree(i.x,i.y+.05,i.z,.42,1.8))}return this._spawns}pickSpawn(t){let e=null,i=-1;for(let n of this.spawnPoints()){let s=200;for(let o of this.fighters)o!==t&&o.alive&&(s=Math.min(s,o.body.pos.distanceTo(n)));let a=s+Math.random()*8;a>i&&(i=a,e=n)}return e.clone()}respawn(t,e=!1){let i=this.pickSpawn(t),n=t.body;n.reset(i,Math.atan2(i.x,i.z)),t.hp=100,t.alive=!0,t.protT=e?.6:1.5,t.invulnT=0,t.regenT=0,t.respawnT=0,t.reflectT=t.overT=t.healT=0,n.speedMul=1,t.disc.state!=="hand"&&t.disc.caught(),t.disc.catchCd=0,t.disc.trail.reset(),t.brain&&t.brain.reset(),t===this.me&&(this.deathInfo=null,this.cls("deathMsg","show",!1),this.camState.fov=this.S.fov,this.throwBuf=0),e||this.rings.add(new b(i.x,i.y+.06,i.z),t.color,2.6,.5),this.online&&!t.remote&&t.netId&&this.net.send({t:"respawn",id:t.netId})}sweepFighters(t,e,i,n,s){let a=t.reflectedBy||t.owner;for(let o of this.fighters){if(o===a||!o.alive||t.hit.has(o)||o===t.owner&&!t.reflectedBy)continue;let l=o.body;if(sd.set(l.pos.x,l.pos.y+.4,l.pos.z),rd.set(l.pos.x,l.pos.y+Math.max(.6,l.h-.4),l.pos.z),ix(e,i,sd,rd,nd).d>=K.radius+t.w.radius+(t.bonus||0)+(o.reflectT>0?.6:0))continue;if(t.hit.add(o),o.reflectT>0&&o!==t.owner){let u=new b().lerpVectors(e,i,nd.s),d=t.owner,f=Math.max(t.vel.length(),t.w.speed)*1.15,g=d.alive?Ue.subVectors(d.updateCenter(),u).normalize():Ue.copy(t.vel).negate().normalize();return t.vel.copy(g).multiplyScalar(f),t.state="out",t.t=Math.min(t.t,.3),t.hit.clear(),t.hit.add(o),t.reflectedBy=o,t.leg++,t.homing=0,t.bonus=o===this.me?this.assistCfg().bonus:0,o.st.reflects=(o.st.reflects||0)+1,this.reflectFx(o,u),d.brain&&this.chat(d,"reflected",.45),u.addScaledVector(g,.05)}if(o.invuln){o.st.dodges++,o===this.me?this.popup("\uD68C\uD53C!"):a===this.me&&this.popupWorld(o.updateCenter(),"\uD68C\uD53C");continue}let c=t.w,h=s==="out"?c.dmg*(1+c.bounceMul*t.bounces)*(.75+.25*t.speedMul())*(t.reflectedBy?1.2:1):c.returnDmg*(1+.2*t.bounces);this.damageFighter(o,h,a,t.reflectedBy?"reflect":s==="out"?t.bounces>0?"bank":"direct":"return",n,t.bounces)}return null}reflectFx(t,e,i=!1){this.online&&!i&&!t.remote&&this.netFx({k:"refl",id:t.netId,p:[e.x,e.y,e.z]}),this.rings.add(e.clone(),t.color,2.2,.3,null),this.parts.emit(e,16,{color:[[1,1,1],[.9,.9,.95]],speed:9,life:.3,gravity:0}),t===this.me?(this.audio.shieldClang(),this.popup("\uBC18\uC0AC!"),this.flashFx=Math.max(this.flashFx,.4)):this.spatial(e,()=>this.audio.shieldClang())}damageFighter(t,e,i,n,s,a=0){if(this.online)return this.netHit(t,e,i,n,s,a);if(!t.alive||t.invuln)return null;e=Math.round(e),t.hp-=e,t.regenT=5,t.lastHitBy=i,t.lastHitT=this.gameTime;let o=i?i.disc.w.knock:5,l=t.body,c=n==="slam"?8+o*.3:o;l.vel.x+=s.x*c,l.vel.z+=s.z*c,l.vel.y=Math.max(l.vel.y,n==="slam"?5:2.5),l.grounded=!1;let h=t.updateCenter().clone(),u=new wt(t.color);this.parts.emit(h,14,{color:[[.1,.1,.12],[u.r,u.g,u.b]],speed:8,dir:s,spread:.9,life:.4});let d=t.hp<=0;return i&&(i.st.hits++,n==="bank"&&i.st.bank++,n==="return"&&i.st.ret++),t.brain&&t.brain.onHurt(i,n),t===this.me&&(this.dmgFx=1,this.shake(.22),this.audio.hurt(),i&&this.hurtDir(i.updateCenter())),i===this.me?(this.audio.discHit(a+1),this.stats.hits++,this.dmgNumber(h,e,n==="bank"||n==="slam"),this.hitmarker(d),this.stopT=Math.max(this.stopT,d?.05:.02)):t!==this.me&&this.spatial(h,()=>this.audio.discHit(1)),d&&this.killFighter(t,i,n,a,s),d?"kill":"hit"}hurtDir(t){_i.copy(t).applyMatrix4(this.camera.matrixWorldInverse),this.dirAng=Math.atan2(_i.x,-_i.z),this.dirT=1}killFighter(t,e,i,n,s,a=!1){t.alive=!1,t.hp=0,t.streak=0,a||t.deaths++,t.reflectT=t.overT=t.healT=0,t.body.speedMul=1,t.respawnT=this.mode==="duel"?2.2:2.8,t.disc.state!=="hand"&&t.disc.caught(),t.disc.trail.reset();let o=new b(s.x,Math.max(.2,s.y),s.z).normalize();t.isBot&&this.debris.push(...t.shatter(o));let l=t.updateCenter().clone(),c=new wt(t.color);this.parts.emit(l,28,{color:[[.08,.08,.1],[c.r,c.g,c.b],[1,1,1]],speed:10,life:.6}),this.rings.add(new b(t.body.pos.x,t.body.pos.y+.06,t.body.pos.z),t.color,3,.45);let h=i==="bank"?n>=2?`${n}\uCFE0\uC158 \uBC45\uD06C\uC0F7`:"\uBC45\uD06C\uC0F7":i==="return"?"\uD68C\uC218 \uD0C0\uACA9":i==="slam"?"\uC21C\uAC04\uC774\uB3D9 \uCDA9\uACA9":"";e&&!e.body.grounded&&e.body.airTime>.3&&(h=h?h+" \xB7 \uACF5\uC911":"\uACF5\uC911");let u=!this.match.over&&!a;e&&e!==t&&u&&(e.kills++,e.streak++,e.hp=Math.min(100,e.hp+25),e.body.dashCharges=Math.min(e.body.dashMax,e.body.dashCharges+1)),this.feedKill(e,t,h),e&&e.brain&&e!==t&&(e.brain.onKill(t),this.chat(e,e.streak===3?"streak":i==="bank"?"bank":i==="slam"?"slam":"kill",t===this.me?.4:.22)),t.brain&&(t.brain.onDeath(e),this.chat(t,"death",e===this.me?.35:.15)),e===this.me?(this.popup(e.streak>=3?`${e.streak}\uC5F0\uC18D \uCC98\uCE58!`:h||"\uCC98\uCE58!"),this.audio.kill(Math.min(e.streak,8)),this.shake(.12),this.kills++,i==="bank"&&this.stats.banks++):this.spatial(l,()=>this.audio.kill(1)),t===this.me&&(this.deathInfo={by:e,pos:this.player.pos.clone(),t:0},this.throwBuf=0),u&&e&&e.kills>=this.match.limit&&this.endMatch(),a&&t===this.me&&this.audio.hurt()}feedText(t){let e=this.el("feed");if(e===dn)return;let i=document.createElement("div");for(i.className="kf sys",i.textContent=t,e.prepend(i);e.children.length>6;)e.lastChild.remove();setTimeout(()=>i.classList.add("out"),3800),setTimeout(()=>i.remove(),4300)}feedKill(t,e,i){let n=this.el("feed");if(n===dn)return;let s=document.createElement("div");s.className="kf";let a=l=>{let c=document.createElement("span");return c.textContent=l?l.name:"?",l&&(c.style.color=l.css),c},o=document.createElement("em");if(o.textContent="\u2192",s.append(a(t),o,a(e)),i){let l=document.createElement("small");l.textContent=i,s.append(l)}for((t===this.me||e===this.me)&&s.classList.add("mine"),n.prepend(s);n.children.length>6;)n.lastChild.remove();setTimeout(()=>s.classList.add("out"),3800),setTimeout(()=>s.remove(),4300)}ranking(){let t=this.me;return[...this.fighters].sort((e,i)=>i.kills-e.kills||e.deaths-i.deaths||(e===t?-1:i===t?1:0))}tickMatch(t){let e=this.match;this.deathInfo&&(this.deathInfo.t+=t),!e.over&&e.timeLeft>0&&(e.timeLeft-=t,e.timeLeft<=0&&(e.timeLeft=0,this.online||this.endMatch()))}endMatch(){if(this.online)return;let t=this.match;if(t.over)return;t.over=!0,this.slowT=Math.max(this.slowT,1);let e=this.me,i=this.ranking(),n=i.indexOf(e)+1,s=this.records,a,o;if(this.mode==="duel"){let c=this.fighters[1];a=e.kills>c.kills?"\uC2B9\uB9AC!":e.kills===c.kills?"\uBB34\uC2B9\uBD80":"\uD328\uBC30",o=`${e.kills} : ${c.kills}`,e.kills>c.kills?s.duelWin=(s.duelWin||0)+1:e.kills<c.kills&&(s.duelLose=(s.duelLose||0)+1)}else a=n===1?"1\uC704!":`${n}\uC704`,o=`${e.kills}\uD0AC \xB7 ${e.deaths}\uB370\uC2A4`,n===1&&(s.ffaWin=(s.ffaWin||0)+1),s.ffaBest=Math.min(s.ffaBest||99,n);s.speed=Math.max(s.speed||0,this.maxSpeed),this.saveRecords&&this.saveRecords(),this.banner(a,o,1.8),n===1?this.audio.checkpoint(!0):this.audio.wave();for(let c of this.fighters)c.brain&&this.chat(c,i[0]===c?"win":"lose",.6);let l=i.map((c,h)=>[`${h+1}. ${c.name}`,`${c.kills} \uD0AC \xB7 ${c.deaths} \uB370\uC2A4`]);l.push(["\uBD07 \uC2E4\uB825",Vi[this.botSkill].name],["\uCD5C\uACE0 \uC18D\uB3C4",Math.round(this.maxSpeed*3.6)+" KM/H"]),this.result={title:a,stats:l,rank:n},setTimeout(()=>{this.state!=="play"||this.match!==t||(this.state="dead",this.input.unlock(),this.onEnd&&this.onEnd(a,l))},1700)}addScore(t){let e=1+Math.min(4,Math.max(0,this.combo-1)*.25),i=Math.round(t*e);return this.score+=i,i}shake(t){this.camState.trauma=Math.min(1,this.camState.trauma+t)}banner(t,e,i=2.2){this.el("bannerBig").textContent=t,this.el("bannerSmall").textContent=e||"";let n=this.el("banner");n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),this.bannerT=i}feed(t,e){let i=this.el("feed");if(i===dn)return;let n=document.createElement("div");for(n.innerHTML=`<span></span><b>+${e}</b>`,n.firstChild.textContent=t,i.prepend(n);i.children.length>5;)i.lastChild.remove();setTimeout(()=>n.classList.add("out"),2200),setTimeout(()=>n.remove(),2700)}popup(t){let e=this.el("popup");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}popupWorld(t,e){this.dmgNumber(t,e,!1,!0)}hitmarker(t){let e=this.el("hit");e.classList.toggle("kill",!!t),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}hint(t,e,i=2800){if(e){if(this.hinted.has(e))return;this.hinted.add(e)}this.txt("hint",t),this.cls("hint","show",!0),this.hintT=i/1e3}dmgNumber(t,e,i,n){let s=this.el("dnums");if(s===dn)return;let a=document.createElement("div");a.className=n?"dn plain":i?"dn big":"dn",a.textContent=e,s.appendChild(a),this.dnums.push({el:a,pos:t.clone(),t:0,vx:(Math.random()-.5)*30}),this.dnums.length>24&&this.dnums.shift().el.remove()}render(t){let e=this.player,i=this.S,n=this.camState,s=this.state==="play"||this.state==="paused"||this.state==="dead";if(this.versus&&!this.me.alive&&this.deathInfo&&this.state==="play"){let u=this.deathInfo,d=u.by,f=d&&d.alive?d.body.pos:u.pos,g=Math.min(1,u.t);Jt.subVectors(u.pos,f).setY(0),Jt.lengthSq()<.001&&Jt.set(0,0,1),Jt.normalize(),Ts.set(u.pos.x,u.pos.y+3+g*3,u.pos.z).addScaledVector(Jt,3+g*4),this.camera.position.lerp(Ts,Math.min(1,t*5)),this.camera.lookAt(f.x,f.y+1,f.z),this.camera.fov=62,this.camera.updateProjectionMatrix()}else if(s){let u=this.state==="play"?Vt.clamp(this.acc/sr,0,1):1,d=e.prevPos.x+(e.pos.x-e.prevPos.x)*u,f=e.prevPos.y+(e.pos.y-e.prevPos.y)*u+e.prevEyeH+(e.eyeH-e.prevEyeH)*u,g=e.prevPos.z+(e.pos.z-e.prevPos.z)*u;n.dipV+=(-n.dip*120-n.dipV*14)*t,n.dip+=n.dipV*t,n.dip=Vt.clamp(n.dip,-.45,.2),e.grounded&&e.hSpeed>1&&(n.bob+=t*(4+e.hSpeed*.5));let y=(e.grounded?Math.abs(Math.sin(n.bob))*.035*Math.min(1,e.hSpeed/11):0)*i.bob,p=this.state==="dead"?-.9:0;this.camera.position.set(d,f+n.dip-y+p,g);let m=-this.lastRight*.02*i.tilt*Math.min(1,e.hSpeed/12);n.tilt+=(m-n.tilt)*Math.min(1,t*8),n.trauma=Math.max(0,n.trauma-t*1.8);let x=n.trauma*n.trauma*i.shake,_=this.clockT*42;this.camera.rotation.set(e.pitch+(Math.sin(_*1.1)*.6+Math.sin(_*2.3)*.4)*.03*x,e.yaw+(Math.sin(_*.9+1)*.6+Math.sin(_*1.9)*.4)*.03*x,n.tilt+Math.sin(_*1.3+2)*.04*x+(this.state==="dead"?.3:0)),n.kick=Math.max(0,n.kick-t*2.8);let M=Vt.clamp((e.hSpeed-11)/30,0,1),C=i.fov+i.fovFx*M+n.kick*6;n.fov+=(C-n.fov)*Math.min(1,t*7);let T=Vt.degToRad(Math.min(150,n.fov));this.camera.fov=Vt.radToDeg(2*Math.atan(Math.tan(T/2)/this.camera.aspect)),this.camera.updateProjectionMatrix()}else{let u=this.clockT*.06;this.camera.position.set(Math.sin(u)*58,24+Math.sin(this.clockT*.2)*3,Math.cos(u)*58),this.camera.lookAt(0,2,0),this.camera.fov=62,this.camera.updateProjectionMatrix()}this.lastRight=(this.input.is("right")?1:0)-(this.input.is("left")?1:0),this.camera.updateMatrixWorld();let o=this.state==="paused"?0:this.state==="play"?t*this.timeScale:t*.4,l=this.state==="play"?Vt.clamp(this.acc/sr,0,1):1;for(let u of this.fighters)u.disc.render(o),u.disc.trail.update(u.disc.pos,this.camera.position,u.disc.out&&this.state!=="menu"),u.isBot&&u.renderModel(t,l,this.clockT);this.parts.update(o),this.rings.update(o),this.arena.update(this.clockT,o);for(let u of this.orbs)u.halo.scale.setScalar(1.7+Math.sin(u.t*18)*.25);this.updateLasers(),this.updateBlinkGhost(),this.lines.update(this.camera.position,e.vel,this.state==="play"&&this.me.alive?Math.max(this.me.overT>0?.6:0,Vt.clamp((e.speed-17)/20,0,1)):0),this.hand.update(this.state==="play"?t*Math.max(this.timeScale,.4):t,{mx:this.mouseDX||0,my:this.mouseDY||0,hs:e.hSpeed,vy:e.vel.y,grounded:e.grounded,discOut:this.disc.out});let c=this.state!=="play"?.2:this.versus?.65:this.mode==="arena"?Math.min(1,.25+this.foes.length*.07+Math.min(this.combo,10)*.04):.2;this.audio.update(this.state==="play"?e.speed:0,!1,t,c),s&&this.updateHud(t);let h=this.renderer;h.clear(),h.render(this.scene,this.camera),(this.state==="play"||this.state==="paused")&&this.me.alive&&(h.clearDepth(),h.render(this.hand.scene,this.hand.camera))}updateLasers(){let t=0,e=this.player;if(this.state==="play"||this.state==="paused")for(let i of this.foes){if(t>=this.lasers.length)break;if(!i.alive||i.type!=="turret"||i.windup<=0||i.dummy)continue;let n=this.lasers[t++],s=n.geometry.attributes.position;s.setXYZ(0,i.center.x,i.center.y,i.center.z),s.setXYZ(1,e.pos.x,e.pos.y+1,e.pos.z),s.needsUpdate=!0;let a=1-i.windup/(.7*this.D.windup);n.material.opacity=.15+a*.6,n.visible=!0}for(;t<this.lasers.length;t++)this.lasers[t].visible=!1}updateBlinkGhost(){let t=this.disc,e=this.blinkGhost;if(!(this.state==="play"||this.state==="paused")||!t.out){e.visible=!1;return}let i=this.arena.col.raycast(t.pos.x,t.pos.y,t.pos.z,0,-1,0,40,Ka),n=i?i.y:0;e.position.set(t.pos.x,Math.max(0,n)+.05,t.pos.z),e.scale.setScalar(1+Math.sin(this.clockT*12)*.08),e.visible=!0}updateHud(t){let e=this.player,i=this.disc,n=innerWidth,s=innerHeight,a=Math.max(0,Math.round(this.hp));if(this.css("hpFill","width",a+"%"),this.txt("hpNum",String(a)),this.cls("hpBar","low",a<35),this.versus)this.updateVersusHud(t);else{this.txt("scoreTxt",this.score.toLocaleString());let y=1+Math.min(4,Math.max(0,this.combo-1)*.25);this.txt("comboTxt",this.combo>=2?`${this.combo} \uCF64\uBCF4 \xB7 \xD7${y.toFixed(2)}`:"")}this.txt("speedNum",String(Math.round(e.hSpeed*3.6)));let o=this.el("dashPips").children;if(this._pipsN!==e.dashCharges){this._pipsN=e.dashCharges;for(let y=0;y<o.length;y++)o[y].classList.toggle("on",y<e.dashCharges)}let l=i.state;this.cls("discIcon","hand",l==="hand"),this.cls("discIcon","out",l==="out"),this.cls("discIcon","ret",l==="return");let c=y=>vi(this.S.binds[y]&&this.S.binds[y][0]),h=i.out?Math.round((1+.35*i.bounces)*100):100;this.txt("discTxt",l==="hand"?`${c("throw")} \uB358\uC9C0\uAE30`:l==="out"?`${c("throw")} \uD68C\uC218 \xB7 ${c("blink")} \uC21C\uAC04\uC774\uB3D9`:`\uB3CC\uC544\uC624\uB294 \uC911 \xB7 ${c("blink")} \uC21C\uAC04\uC774\uB3D9`),this.txt("discPow",i.out&&i.bounces>0?`\uD295\uAE40 ${i.bounces} \xB7 \uD53C\uD574 ${h}%`:""),this.cls("cross","out",i.out),this.cls("cross","hidden",!this.me.alive);let u=this.me,d=Un[u.skill];d&&(this.txt("skillKey",vi(this.S.binds.skill&&this.S.binds.skill[0])),this.txt("skillName",d.name),this.txt("skillCd",u.skillCd>0?u.skillCd.toFixed(1)+"s":"\uC900\uBE44"),this.css("skillFill","width",((1-u.skillCd/d.cd)*100).toFixed(1)+"%"),this.cls("skillBox","ready",u.skillCd<=0),this.cls("skillBox","active",u.reflectT>0||u.overT>0||u.healT>0)),this.cls("hud","over",u.overT>0),this.cls("hud","refl",u.reflectT>0),this.touchUI&&this.touchUI.update(this);for(let y=this.chatLines.length-1;y>=0;y--){let p=this.chatLines[y];p.t+=t,p.t>6?(p.el.remove(),this.chatLines.splice(y,1)):p.t>5&&(p.el.style.opacity=String(6-p.t))}let f=null;if(this.me.alive&&this.state==="play"&&i.state==="hand"){let y=(this._lockO||(this._lockO=new b)).copy(e.eye);y.y-=.15,f=this.aimAssist(y,e.lookDir(this._lockD||(this._lockD=new b)),!1)}else i.out&&i.lock&&i.lock.alive&&!i.hit.has(i.lock)&&(f=i.lock);f?(Jt.copy(this.tInfo(f).c).project(this.camera),this.css("lock","transform",`translate(${((Jt.x+1)/2*n).toFixed(1)}px,${((1-Jt.y)/2*s).toFixed(1)}px)`),this.cls("lock","show",!0),this.cls("cross","lock",i.state==="hand")):(this.cls("lock","show",!1),this.cls("cross","lock",!1));let g=this.el("discMark");if(i.out&&this.state==="play"){Jt.copy(i.pos).applyMatrix4(this.camera.matrixWorldInverse);let y=Jt.z>0;Jt.copy(i.pos).project(this.camera);let p=Jt.x,m=Jt.y;y&&(p=-p,m=-m);let x=y||Math.abs(p)>.94||Math.abs(m)>.9;if(x){let M=Math.max(Math.abs(p)/.94,Math.abs(m)/.9);p/=M,m/=M}this.css("discMark","transform",`translate(${((p+1)/2*n).toFixed(1)}px,${((1-m)/2*s).toFixed(1)}px)`),this.cls("discMark","edge",x),this.cls("discMark","show",!0);let _=!1;for(let M of this.assistTargets())if(this.tInfo(M).c.distanceTo(i.pos)<i.w.blinkRadius+.3&&!(M.protT>0)){_=!0;break}this.cls("discMark","cue",_),_&&this.txt("slamCue",`${vi(this.S.binds.blink[0])}!`)}else this.cls("discMark","show",!1);this.updateThreats();for(let y=this.dnums.length-1;y>=0;y--){let p=this.dnums[y];if(p.t+=t,p.t>.9){p.el.remove(),this.dnums.splice(y,1);continue}if(Jt.copy(p.pos).applyMatrix4(this.camera.matrixWorldInverse),Jt.z>-.2){p.el.style.opacity=0;continue}Jt.copy(p.pos).project(this.camera);let m=(Jt.x+1)/2*n+p.vx*p.t,x=(1-Jt.y)/2*s-40*p.t-20;p.el.style.transform=`translate(${m.toFixed(1)}px,${x.toFixed(1)}px) translate(-50%,-50%) scale(${(1+Math.max(0,.15-p.t)*3).toFixed(2)})`,p.el.style.opacity=String(Math.min(1,(.9-p.t)*4))}this.dmgFx=Math.max(0,this.dmgFx-t*1.6),this.flashFx=Math.max(0,this.flashFx-t*3.5),this.dirT=Math.max(0,this.dirT-t*1.2),this.css("hurt","opacity",this.dmgFx.toFixed(2)),this.css("flash","opacity",this.flashFx.toFixed(2)),this.css("lowhp","opacity",(this.mode!=="practice"&&this.me.alive?Math.max(0,.4-this.hp/100)/.4:0).toFixed(2)),this.css("dmgDir","opacity",this.dirT.toFixed(2)),this.dirT>0&&this.css("dmgDir","transform",`rotate(${(this.dirAng||0).toFixed(3)}rad)`),this.versus||(this.mode==="arena"?(this.txt("modeTxt",this.wave?`WAVE ${this.wave}`:"WAVE \u2014"),this.txt("subTxt",this.waveState==="break"?`\uB2E4\uC74C \uC6E8\uC774\uBE0C ${Math.max(0,Math.ceil(this.breakT))}\uCD08`:`\uB0A8\uC740 \uC801 ${this.queue.length+this.foes.length}`)):(this.txt("modeTxt","\uC5F0\uC2B5\uC7A5"),this.txt("subTxt",`\uB09C\uC774\uB3C4 \uBB34\uAD00 \xB7 \uCCB4\uB825 \uBB34\uD55C \xB7 ${this.input.touch?"II":"ESC"} \uBA54\uB274`))),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.el("banner").classList.remove("show")),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&this.cls("hint","show",!1))}updateVersusHud(t){let e=this.me,i=this.match,n=Vi[this.botSkill]?Vi[this.botSkill].name:"";if(this.online){let a=Math.max(0,Math.ceil(i.timeLeft||0)),o=this.fighters.filter(l=>!l.netBot).length;this.txt("modeTxt",`\uC628\uB77C\uC778 \xB7 ${this.roomCode||""}`),this.txt("subTxt",`${Math.floor(a/60)}:${String(a%60).padStart(2,"0")} \xB7 ${i.limit}\uD0AC \uBA3C\uC800 \xB7 ${o}\uBA85${this.fighters.length-o?` + \uBD07 ${this.fighters.length-o}`:""} \xB7 ${Math.round(this.net.rtt)}ms${this.net.status==="reconnecting"?" \xB7 \uC7AC\uC5F0\uACB0 \uC911\u2026":""}`),this.txt("scoreTxt",`${e.kills} \uD0AC`),this.txt("comboTxt",`\uD604\uC7AC ${this.ranking().indexOf(e)+1}\uC704`)}else if(this.mode==="duel"){let a=this.fighters[1];this.txt("modeTxt","1V1"),this.txt("subTxt",`${i.limit}\uD0AC \uBA3C\uC800 \xB7 ${a?a.name:""} (${n})`),this.txt("scoreTxt",`${e.kills} : ${a?a.kills:0}`),this.txt("comboTxt",e.streak>=2?`${e.streak}\uC5F0\uC18D \uCC98\uCE58`:"")}else{let a=Math.max(0,Math.ceil(i.timeLeft));this.txt("modeTxt","FFA"),this.txt("subTxt",`${Math.floor(a/60)}:${String(a%60).padStart(2,"0")} \xB7 ${i.limit}\uD0AC \uBA3C\uC800 \xB7 \uBD07 ${n}`),this.txt("scoreTxt",`${e.kills} \uD0AC`),this.txt("comboTxt",`\uD604\uC7AC ${this.ranking().indexOf(e)+1}\uC704`)}if(this._boardT-=t,this._boardT<=0){this._boardT=.2;let a=this.ranking().map(o=>`<div class="${o===e?"me":""}${o.alive?"":" dead"}"><i style="background:${o.css}"></i><span>${o.name}</span><b>${o.kills}</b><small>${o.deaths}</small></div>`).join("");a!==this._boardHtml&&(this._boardHtml=a,this.el("board").innerHTML=a)}let s=!e.alive&&!i.over;if(this.cls("deathMsg","show",s),s){let a=this.deathInfo&&this.deathInfo.by;this.txt("deathBy",a?`${a.name}\uC5D0\uAC8C \uB2F9\uD568`:"\uC4F0\uB7EC\uC9D0"),this.css("deathBy","color",a?a.css:""),this.txt("deathT",`\uBD80\uD65C\uAE4C\uC9C0 ${Math.max(0,e.respawnT).toFixed(1)}\uCD08`)}}updateThreats(){let t=this.el("threats");if(t===dn)return;if(!this._thr){this._thr=[];for(let i=0;i<6;i++){let n=document.createElement("i");t.appendChild(n),this._thr.push(n)}}let e=0;if(this.versus&&this.me.alive){let i=this.player,n=i.pos.x,s=i.pos.y+.9,a=i.pos.z;for(let o of this.fighters){if(o===this.me||e>=this._thr.length)continue;let l=o.disc;if(l.state==="hand"||l.hit.has(this.me))continue;let c=l.pos.x-n,h=l.pos.y-s,u=l.pos.z-a,d=l.vel.x-i.vel.x,f=l.vel.y-i.vel.y,g=l.vel.z-i.vel.z,y=d*d+f*f+g*g;if(y<1)continue;let p=-(c*d+h*f+u*g)/y;if(p<0||p>.7||Math.hypot(c+d*p,h+f*p,u+g*p)>2.4)continue;Jt.copy(l.pos).applyMatrix4(this.camera.matrixWorldInverse);let m=this._thr[e++];m.style.transform=`rotate(${Math.atan2(Jt.x,-Jt.z).toFixed(3)}rad) translateY(-86px) scale(${p<.25?1.5:1})`,m.style.opacity="1",m.className=p<.25?"":"near"}}for(let i of this.foes){if(e>=this._thr.length)break;if(!i.alive||i.windup<=0||i.dummy)continue;Jt.copy(i.center).applyMatrix4(this.camera.matrixWorldInverse);let n=Math.atan2(Jt.x,-Jt.z),s=this._thr[e++];s.style.transform=`rotate(${n.toFixed(3)}rad) translateY(-86px)`,s.style.opacity="1",s.className=i.type==="shield"?"near":""}for(;e<this._thr.length;e++)this._thr[e].style.opacity="0"}};$u(or);var ja=class{constructor(t,e){this.canvas=t,this.S=e,this.down=new Set,this.edges=new Set,this.releases=new Set,this.dx=0,this.dy=0,this.locked=!1,this.touch=!1,this.axis={x:0,y:0},this.capture=null,this.onKey=null;let i=n=>"Mouse"+n;addEventListener("keydown",n=>{if(this.capture){n.preventDefault();let s=this.capture;this.capture=null,s(n.code);return}this.onKey&&this.onKey(n)||(this.locked&&n.preventDefault(),this.down.has(n.code)||this.edges.add(n.code),this.down.add(n.code))}),addEventListener("keyup",n=>{this.down.has(n.code)&&this.releases.add(n.code),this.down.delete(n.code)}),addEventListener("mousedown",n=>{if(this.capture){n.preventDefault();let a=this.capture;this.capture=null,a(i(n.button));return}if(!this.locked)return;let s=i(n.button);this.down.has(s)||this.edges.add(s),this.down.add(s)}),addEventListener("mouseup",n=>{let s=i(n.button);this.down.has(s)&&this.releases.add(s),this.down.delete(s)}),addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{if(!this.locked)return;let s=Math.abs(n.movementX)>600?0:n.movementX,a=Math.abs(n.movementY)>600?0:n.movementY;this.dx+=s,this.dy+=a}),addEventListener("blur",()=>{this.down.clear()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||this.down.clear(),this.onLockChange&&this.onLockChange(this.locked)})}lock(){try{let t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}unlock(){document.pointerLockElement&&document.exitPointerLock()}is(t){if(this.down.has("T_"+t))return!0;let e=this.S.binds[t]||[];for(let i=0;i<e.length;i++)if(this.down.has(e[i]))return!0;return!1}pressed(t){if(this.edges.has("T_"+t))return!0;let e=this.S.binds[t]||[];for(let i=0;i<e.length;i++)if(this.edges.has(e[i]))return!0;return!1}released(t){if(this.releases.has("T_"+t))return!0;let e=this.S.binds[t]||[];for(let i=0;i<e.length;i++)if(this.releases.has(e[i]))return!0;return!1}consumeEdges(){this.edges.clear(),this.releases.clear()}takeMouse(){let t=[this.dx,this.dy];return this.dx=0,this.dy=0,t}};var Qa=class{constructor(t,e,{onPause:i}={}){this.input=t,this.S=e,this.onPause=i,this.joy=null,this.look=new Map,this.btn=new Map;let n=this.root=document.createElement("div");n.id="touch",n.className="hidden",n.innerHTML=`
      <div class="joy" id="tJoy"><div class="knob"></div></div>
      <button class="tb throw" data-a="throw"><b>\uB358\uC9C0\uAE30</b></button>
      <button class="tb blink" data-a="blink"><b>\uC21C\uAC04\uC774\uB3D9</b></button>
      <button class="tb jump" data-a="jump"><b>\uC810\uD504</b></button>
      <button class="tb dash" data-a="dash"><b>\uB300\uC2DC</b></button>
      <button class="tb skill" data-a="skill"><b>\uC2A4\uD0AC</b><i></i></button>
      <button class="tpause" id="tPause">II</button>`,document.body.appendChild(n),this.joyEl=n.querySelector("#tJoy"),this.knob=this.joyEl.querySelector(".knob"),this.skillEl=n.querySelector(".skill"),this.throwEl=n.querySelector(".throw");let s={passive:!1};n.addEventListener("touchstart",a=>this.start(a),s),n.addEventListener("touchmove",a=>this.move(a),s),n.addEventListener("touchend",a=>this.end(a),s),n.addEventListener("touchcancel",a=>this.end(a),s),n.querySelector("#tPause").addEventListener("touchend",a=>{a.preventDefault(),a.stopPropagation(),this.onPause&&this.onPause()})}show(t){this.root.classList.toggle("hidden",!t),t||this.reset()}reset(){this.joy=null,this.look.clear();for(let t of this.btn.values())this.input.down.delete("T_"+t.a);this.btn.clear(),this.input.axis.x=this.input.axis.y=0,this.joyEl.classList.remove("on")}start(t){t.preventDefault();for(let e of t.changedTouches){let i=e.target.closest&&e.target.closest(".tb");if(i){let n=i.dataset.a;this.input.down.add("T_"+n),this.input.edges.add("T_"+n),this.btn.set(e.identifier,{a:n,x:e.clientX,y:e.clientY,el:i}),i.classList.add("on");continue}e.target.id!=="tPause"&&(e.clientX<innerWidth*.42&&!this.joy?(this.joy={id:e.identifier,x:e.clientX,y:e.clientY},this.joyEl.style.left=e.clientX+"px",this.joyEl.style.top=e.clientY+"px",this.joyEl.classList.add("on"),this.knob.style.transform="translate(-50%,-50%)"):this.look.set(e.identifier,{x:e.clientX,y:e.clientY}))}}move(t){t.preventDefault();let e=2.4*(this.S.touchSens||1);for(let i of t.changedTouches){if(this.joy&&i.identifier===this.joy.id){let s=Math.min(innerWidth,innerHeight)*.12,a=i.clientX-this.joy.x,o=i.clientY-this.joy.y,l=Math.hypot(a,o);l>s&&(a*=s/l,o*=s/l),this.knob.style.transform=`translate(calc(-50% + ${a}px), calc(-50% + ${o}px))`;let c=a/s,h=-o/s;this.input.axis.x=Math.abs(c)>.22?c:0,this.input.axis.y=Math.abs(h)>.22?h:0;continue}let n=this.look.get(i.identifier)||(this.btn.get(i.identifier)?.a==="throw"?this.btn.get(i.identifier):null);n&&(this.input.dx+=(i.clientX-n.x)*e,this.input.dy+=(i.clientY-n.y)*e,n.x=i.clientX,n.y=i.clientY)}}end(t){t.preventDefault();for(let e of t.changedTouches){if(this.joy&&e.identifier===this.joy.id){this.joy=null,this.input.axis.x=this.input.axis.y=0,this.joyEl.classList.remove("on");continue}let i=this.btn.get(e.identifier);if(i){this.input.down.delete("T_"+i.a),this.input.releases.add("T_"+i.a),i.el.classList.remove("on"),this.btn.delete(e.identifier);continue}this.look.delete(e.identifier)}}update(t){let e=t.disc,i=t.me,n=e.state==="hand"?"\uB358\uC9C0\uAE30":e.state==="out"?"\uD68C\uC218":"\u2026";this._tl!==n&&(this._tl=n,this.throwEl.querySelector("b").textContent=n);let s=i.skillCd>0?Math.ceil(i.skillCd)+"":"";this._cd!==s&&(this._cd=s,this.skillEl.querySelector("i").textContent=s,this.skillEl.classList.toggle("cool",!!s))}},od=()=>window.REDSHIFT_APP==="android"||!!(window.matchMedia&&matchMedia("(pointer: coarse)").matches);var vt=r=>document.getElementById(r),Mt=ju(),Xc=vt("c"),ae=new ja(Xc,Mt),tt;try{tt=new or(Xc,Mt,ae)}catch(r){throw vt("loading").innerHTML=`<div class="err">WebGL\uC744 \uC2DC\uC791\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694.<br><small>${String(r&&r.message||r)}</small></div>`,r}tt.records=Qu();var Gi=Mt.touchUI==="on"||Mt.touchUI!=="off"&&od();ae.touch=Gi;document.body.classList.toggle("touch",Gi);Gi&&(tt.touchUI=new Qa(ae,Mt,{onPause:()=>lr()}));var to=window.REDSHIFT_APP||"";function ld(r){if(to==="android"){r&&r();return}if(to==="exe"&&window.rsFullscreen){window.rsFullscreen(!0).catch(()=>{}),r&&r();return}if(document.fullscreenElement)r&&r();else{let t=document.documentElement.requestFullscreen?.();t&&t.then(r).catch(()=>{})}}function nx(){if(to==="exe"&&window.rsFullscreen){window.rsFullscreen(!1).catch(()=>{});return}document.fullscreenElement&&document.exitFullscreen?.()}to==="exe"&&addEventListener("keydown",r=>{r.code==="F11"&&window.rsFullscreen&&(r.preventDefault(),window.rsFullscreen(null).catch(()=>{}))});function sx(){try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}tt.saveRecords=()=>td(tt.records);var rx=["menu","pause","settings","controls","death","online"];function Ye(r){rx.forEach(t=>vt(t).classList.toggle("hidden",t!==r))}var As="menu";function Hc(r){tt.start(r),cd()}function cd(){if(document.body.classList.add("playing"),document.body.classList.toggle("show-online",!!tt.online),document.body.classList.toggle("hide-online",!tt.online),Ye(null),vt("hud").classList.remove("hidden"),vt("clickTo").classList.add("hidden"),Gi){ae.locked=!0,tt.touchUI.show(!0),ld(sx);return}Mt.full&&ld(()=>navigator.keyboard?.lock?.(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ","KeyF","Space","ShiftLeft"]).catch(()=>{})),ae.lock(),setTimeout(()=>{tt.state==="play"&&!ae.locked&&!ae.touch&&vt("clickTo").classList.remove("hidden")},400)}function lr(){tt.state!=="play"||tt.menuOpen||(tt.online?tt.menuOpen=!0:tt.state="paused",Gi&&tt.touchUI.show(!1),document.body.classList.toggle("show-online",!!tt.online),document.body.classList.toggle("hide-online",!tt.online),Ye("pause"))}function hd(){tt.menuOpen=!1,Ye(null),ae.touch?(tt.state==="paused"&&(tt.state="play"),tt.touchUI.show(!0)):(vt("clickTo").classList.remove("hidden"),ae.lock())}function qc(){tt.online&&tt.leaveOnline(),tt.menuOpen=!1,Gi&&tt.touchUI.show(!1),document.body.classList.remove("playing"),tt.state="menu",tt.clear(),Ye("menu"),vt("hud").classList.add("hidden"),vt("clickTo").classList.add("hidden"),ae.unlock(),nx(),fd()}tt.onEnd=(r,t)=>{tt.state="dead",Gi&&tt.touchUI.show(!1),ae.unlock(),vt("endTitle").textContent=r,vt("endStats").innerHTML=t.map(([e,i])=>`<div class="stat"><span>${e}</span><b>${i}</b></div>`).join(""),vt("hud").classList.add("hidden"),Ye("death")};ae.onLockChange=r=>{r?(vt("clickTo").classList.add("hidden"),(tt.state==="paused"||tt.menuOpen)&&(tt.state==="paused"&&(tt.state="play"),tt.menuOpen=!1,Ye(null))):tt.state==="play"&&!ae.touch&&lr()};ae.onKey=r=>{if(r.code==="Escape"){if(tt.state==="play"&&!tt.menuOpen)return ae.unlock(),lr(),!0;if(!vt("settings").classList.contains("hidden")||!vt("controls").classList.contains("hidden")||!vt("online").classList.contains("hidden"))return Ye(As),!0}return!1};window.REDSHIFT_BACK=()=>{let r=t=>!vt(t).classList.contains("hidden");return tt.state==="play"&&!tt.menuOpen?(lr(),!0):r("settings")||r("controls")||r("online")?(Ye(As),!0):r("pause")?(hd(),!0):r("death")?(qc(),!0):!1};window.REDSHIFT_BACKGROUND=()=>{tt.state==="play"&&!tt.menuOpen&&(ae.unlock(),lr())};document.addEventListener("visibilitychange",()=>{document.hidden&&Gi&&window.REDSHIFT_BACKGROUND()});Xc.addEventListener("mousedown",()=>{!Gi&&(tt.state==="play"||tt.state==="paused")&&!ae.locked&&vt("pause").classList.contains("hidden")&&ae.lock()});vt("clickTo").addEventListener("mousedown",()=>ae.lock());addEventListener("beforeunload",r=>{tt.state==="play"&&(r.preventDefault(),r.returnValue="")});document.querySelectorAll("[data-act]").forEach(r=>r.addEventListener("click",()=>{tt.audio.init(),tt.audio.setVolumes(Mt.sfx,Mt.music),tt.audio.ui();let t=r.dataset.act;t==="arena"||t==="practice"||t==="duel"||t==="ffa"?Hc(t):t==="online"?(As="menu",Yc(),Ye("online")):t==="settings"?(As=tt.state==="paused"||tt.menuOpen?"pause":"menu",ox(),Ye("settings")):t==="controls"?(As=tt.state==="paused"||tt.menuOpen?"pause":"menu",ax(),Ye("controls")):t==="back"?Ye(As):t==="resume"?hd():t==="restart"?Hc(tt.mode):t==="quit"&&qc()}));function hi(r,t=""){let e=vt("oStatus");e.textContent=r,e.className=t}function ud(r){return String(r||"").replace(/[<>&"'`\\]/g,"").trim().slice(0,12)||Mt.name}async function Yc(){if(vt("oName").value=Mt.name,tt.net.open){vt("oServer").value=tt.net.base,hi("\uC5F0\uACB0\uB428","ok"),tt.net.send({t:"list"});return}if(vt("oServer").value=hn.defaultServer(),!vt("oServer").value){hi("\uC11C\uBC84 \uCC3E\uB294 \uC911\u2026");let r=await hn.discover();r&&!vt("oServer").value&&(vt("oServer").value=r)}vt("oServer").value?eo():hi("\uC11C\uBC84 \uC8FC\uC18C\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694 (\uC6F9 \uBC84\uC804 \uC8FC\uC18C \uADF8\uB300\uB85C, \uC608: https://redshift-xxxx.run.app)")}async function eo(){let r=vt("oServer").value.trim();if(Mt.name=ud(vt("oName").value),wi(Mt),!r)return hi("\uC11C\uBC84 \uC8FC\uC18C\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694","bad"),!1;let t={name:Mt.name,weapon:Mt.weapon,skill:Mt.skill};if(tt.net.open&&tt.net.base===r)return tt.net.send({t:"hello",...t}),!0;tt.net.ws&&tt.net.close(),hi("\uC5F0\uACB0 \uC911\u2026");try{let e=await tt.net.connect(r,t);return hi(`\uC5F0\uACB0\uB428 \xB7 \uC5F4\uB9B0 \uBC29 ${e.rooms.length}\uAC1C`,"ok"),dd(e.rooms),!0}catch(e){return hi(`${e.message} \u2014 \uC11C\uBC84 \uC8FC\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694`,"bad"),!1}}function dd(r){let t=vt("oRooms");if(!r.length){t.innerHTML='<div class="empty">\uC544\uC9C1 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC5B4\uC694 \u2014 \uBE60\uB978 \uCC38\uAC00\uB098 \uBC29 \uB9CC\uB4E4\uAE30\uB97C \uB20C\uB7EC \uBCF4\uC138\uC694</div>';return}t.innerHTML="";for(let e of r){let i=document.createElement("div");i.className="room";let n=document.createElement("span");n.textContent=e.name;let s=document.createElement("b");s.textContent=`${e.code} \xB7 ${e.humans}\uBA85${e.bots?" + \uBD07 "+e.bots:""} / ${e.max}`,i.append(n,s),i.onclick=()=>io({t:"join",code:e.code}),t.append(i)}}async function io(r){tt.audio.init(),tt.audio.ui(),await eo()&&(hi("\uB4E4\uC5B4\uAC00\uB294 \uC911\u2026"),tt.net.send(r))}tt.onRooms=r=>{vt("online").classList.contains("hidden")||dd(r)};tt.onNetError=r=>hi(r,"bad");tt.onJoined=()=>cd();tt.onNetDropped=()=>{qc(),Yc(),Ye("online"),hi("\uC11C\uBC84\uC640 \uC5F0\uACB0\uC774 \uB04A\uACBC\uC5B4\uC694","bad")};tt.net.onStatus=(r,t)=>{r==="reconnecting"&&hi("\uB2E4\uC2DC \uC5F0\uACB0\uD558\uB294 \uC911\u2026")};vt("oQuick").onclick=()=>io({t:"quick"});vt("oCreateBtn").onclick=()=>vt("oCreateOpts").classList.toggle("hidden");vt("oCreate").onclick=()=>io({t:"create",name:vt("oRoomName").value||`${ud(vt("oName").value)}\uC758 \uBC29`,bots:+vt("oBots").value,botSkill:vt("oBotSkill").value,limit:+vt("oLimit").value,priv:vt("oPriv").value==="1"});vt("oJoin").onclick=()=>{let r=vt("oCode").value.trim().toUpperCase();r.length===4?io({t:"join",code:r}):hi("\uCF54\uB4DC 4\uAE00\uC790\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694","bad")};vt("oRefresh").onclick=async()=>{await eo()&&tt.net.send({t:"list"})};vt("oServer").addEventListener("change",()=>{hn.save(vt("oServer").value.trim()),tt.net.ws&&tt.net.close(),vt("oServer").value.trim()?eo():Yc()});function cr(){document.querySelectorAll("#difficulty button").forEach(r=>r.classList.toggle("on",r.dataset.df===Mt.difficulty)),document.querySelectorAll("#botskill button").forEach(r=>r.classList.toggle("on",r.dataset.bs===Mt.botSkill)),document.querySelectorAll("#weapons button").forEach(r=>r.classList.toggle("on",r.dataset.wp===Mt.weapon)),document.querySelectorAll("#skills button").forEach(r=>r.classList.toggle("on",r.dataset.sk===Mt.skill))}document.querySelectorAll("#weapons button").forEach(r=>r.addEventListener("click",()=>{Mt.weapon=r.dataset.wp,wi(Mt),cr(),tt.audio.init(),tt.audio.ui()}));document.querySelectorAll("#skills button").forEach(r=>r.addEventListener("click",()=>{Mt.skill=r.dataset.sk,wi(Mt),cr(),tt.audio.init(),tt.audio.ui()}));document.querySelectorAll("#botskill button").forEach(r=>r.addEventListener("click",()=>{Mt.botSkill=r.dataset.bs,wi(Mt),cr(),tt.audio.init(),tt.audio.ui()}));document.querySelectorAll("#difficulty button").forEach(r=>r.addEventListener("click",()=>{Mt.difficulty=r.dataset.df,wi(Mt),cr(),tt.audio.init(),tt.audio.ui()}));cr();function ax(){vt("ctrlGrid").innerHTML=Fc.map(([r,t])=>`<div><span>${t}</span><b>${Mt.binds[r].map(vi).join(" / ")}</b></div>`).join("")+"<div><span>\uC77C\uC2DC\uC815\uC9C0</span><b>ESC</b></div>"}function ox(){let r=(e,i,n=s=>s)=>{let s=vt("s"+e),a=vt("v"+e);s.value=Mt[i],a.textContent=n(Mt[i]),s.oninput=()=>{Mt[i]=parseFloat(s.value),a.textContent=n(Mt[i]),wi(Mt),Wc()}};r("Sens","sens",e=>{let i=2*Math.PI/(e*.0012)/800*2.54;return vt("cm360").textContent=`(800DPI \uAE30\uC900 360\xB0 = ${i.toFixed(1)}cm)`,(+e).toFixed(2)}),r("Fov","fov"),r("FovFx","fovFx"),r("Shake","shake",e=>(+e).toFixed(2)),r("Tilt","tilt",e=>(+e).toFixed(2)),r("Bob","bob",e=>(+e).toFixed(2)),r("Sfx","sfx",e=>Math.round(e*100)),r("Music","music",e=>Math.round(e*100));let t=(e,i,n=!0,s)=>{let a=vt("s"+e);a.value=String(Mt[i]),a.onchange=()=>{Mt[i]=n?+a.value:a.value,wi(Mt),Wc(),s&&s()}};t("AimAssist","aimAssist",!1),t("AutoHop","autoHop"),t("TouchUI","touchUI",!1,()=>{confirm("\uC870\uC791 \uBC29\uC2DD\uC744 \uBC14\uAFB8\uB824\uBA74 \uC0C8\uB85C\uACE0\uCE68\uC774 \uD544\uC694\uD574\uC694. \uC9C0\uAE08 \uD560\uAE4C\uC694?")&&(tt.state="menu",location.reload())}),r("TouchSens","touchSens",e=>(+e).toFixed(2)),t("TouchLayout","touchLayout",!1),t("KeyHints","keyHints"),t("Fps","fps"),t("Full","full"),t("Quality","quality",!1,()=>{confirm("\uADF8\uB798\uD53D \uD488\uC9C8\uC744 \uBC14\uAFB8\uB824\uBA74 \uC0C8\uB85C\uACE0\uCE68\uC774 \uD544\uC694\uD574\uC694. \uC9C0\uAE08 \uC0C8\uB85C\uACE0\uCE68\uD560\uAE4C\uC694?")&&(tt.state="menu",location.reload())}),Vc()}var Oc=null;function Vc(){vt("binds").innerHTML=Fc.map(([r,t])=>`<div class="row k"><span>${t}</span><span><button class="key" data-a="${r}" data-i="0">${vi(Mt.binds[r][0])}</button> <button class="key" data-a="${r}" data-i="1">${vi(Mt.binds[r][1])}</button></span></div>`).join("")+'<div class="row k"><span></span><button class="key" id="resetBinds">\uAE30\uBCF8\uAC12\uC73C\uB85C</button></div>',vt("binds").querySelectorAll(".key[data-a]").forEach(r=>r.onclick=t=>{t.stopPropagation(),!Oc&&(Oc=r,r.textContent="\uD0A4 \uC785\uB825\u2026",r.classList.add("listen"),setTimeout(()=>{ae.capture=e=>{let i=r.dataset.a,n=+r.dataset.i;if(Oc=null,e!=="Escape"){for(let a in Mt.binds)Mt.binds[a]=Mt.binds[a].map(o=>o===e?void 0:o);let s=[...Mt.binds[i]];s[n]=e,Mt.binds[i]=s;for(let a in Mt.binds)Mt.binds[a]=Mt.binds[a].filter(Boolean)}wi(Mt),Vc(),Gc()}},50))}),vt("resetBinds").onclick=()=>{Mt.binds=JSON.parse(JSON.stringify($a)),wi(Mt),Vc(),Gc()}}function Gc(){let r=e=>Mt.binds[e]&&Mt.binds[e][0]?vi(Mt.binds[e][0]):"\u2014",t=[["throw","\uB358\uC9C0\uAE30 / \uD68C\uC218"],["blink","\uC21C\uAC04\uC774\uB3D9"],["skill","\uC2A4\uD0AC"],["dash","\uB300\uC2DC"],["jump","\uC810\uD504 \xD72"]];vt("keyHints").innerHTML=t.map(([e,i])=>`<span><b>${r(e)}</b>${i}</span>`).join(""),vt("keyHints").classList.toggle("hidden",!Mt.keyHints),document.querySelectorAll("[data-key]").forEach(e=>{e.textContent=r(e.dataset.key)})}function Wc(){tt.audio.setVolumes(Mt.sfx,Mt.music),Gc(),vt("fps").classList.toggle("hidden",!Mt.fps);let r=Math.min(screen.width||innerWidth,screen.height||innerHeight)>=600;document.body.classList.toggle("raised",Mt.touchLayout==="raised"||Mt.touchLayout==="auto"&&r)}Wc();function fd(){let r=tt.records,t=[];r.score&&t.push(`\uCD5C\uACE0 ${r.score.toLocaleString()}\uC810 \xB7 WAVE ${r.wave}`),(r.duelWin||r.duelLose)&&t.push(`1V1 ${r.duelWin||0}\uC2B9 ${r.duelLose||0}\uD328`),r.ffaBest&&t.push(`FFA \uCD5C\uACE0 ${r.ffaBest}\uC704${r.ffaWin?` \xB7 1\uC704 ${r.ffaWin}\uBC88`:""}`),r.combo&&t.push(`\uCD5C\uACE0 \uCF64\uBCF4 ${r.combo}`),r.speed&&t.push(`\uCD5C\uACE0 \uC18D\uB3C4 ${Math.round(r.speed*3.6)} KM/H`),vt("best").innerHTML=t.join(" &nbsp;\xB7&nbsp; ")}Ye("menu");fd();vt("loading").classList.add("hidden");function pd(r){requestAnimationFrame(pd),tt.frame(r)}requestAnimationFrame(pd);window.__game={game:tt,S:Mt,input:ae,start:r=>Hc(r),sim(r,t=[]){let e=tt,i=1/120;for(let n=0;n<r&&e.state==="play";n+=i)t.forEach(s=>ae.down.add(s)),e.tick(i);t.forEach(n=>ae.down.delete(n))},press(r){ae.edges.add(r),ae.down.add(r)},release(r){ae.down.delete(r),ae.releases.add(r)}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
