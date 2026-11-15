(()=>{var Ih=0,wl=1,Lh=2;var Rc=1,Uh=2,Tn=3,Yn=0,Fe=1,tn=2,dn=0,Xn=1,fi=2,El=3,Tl=4,Dh=5,li=100,Nh=101,Fh=102,Oh=103,Bh=104,zh=200,Vh=201,Hh=202,Gh=203,Eo=204,To=205,Wh=206,kh=207,Xh=208,qh=209,Yh=210,Zh=211,Jh=212,$h=213,Kh=214,Ao=0,Co=1,Ro=2,Wi=3,Po=4,Io=5,Lo=6,Uo=7,Pc=0,Qh=1,jh=2,qn=0,Wa=1,ka=2,Xa=3,qa=4,tu=5,Ya=6,Za=7;var Ic=300,ki=301,Xi=302,Do=303,No=304,Rr=306,Fo=1e3,hi=1001,Oo=1002,sn=1003,eu=1004;var Ts=1005;var fn=1006,Jr=1007;var ui=1008;var rn=1009,Lc=1010,Uc=1011,fs=1012,Ja=1013,di=1014,An=1015,Ge=1016,$a=1017,Ka=1018,qi=1020,Dc=35902,Nc=1021,Fc=1022,nn=1023,Oc=1024,Bc=1025,zi=1026,Yi=1027,zc=1028,Qa=1029,Vc=1030,ja=1031;var tl=1033,tr=33776,er=33777,nr=33778,ir=33779,Bo=35840,zo=35841,Vo=35842,Ho=35843,Go=36196,Wo=37492,ko=37496,Xo=37808,qo=37809,Yo=37810,Zo=37811,Jo=37812,$o=37813,Ko=37814,Qo=37815,jo=37816,ta=37817,ea=37818,na=37819,ia=37820,sa=37821,sr=36492,ra=36494,oa=36495,Hc=36283,aa=36284,la=36285,ca=36286;var rr=2300,ha=2301,$r=2302,Al=2400,Cl=2401,Rl=2402;var nu=3200,iu=3201;var su=0,ru=1,Gn="",Ne="srgb",ji="srgb-linear",Pr="linear",$t="srgb";var bi=7680;var Pl=519,ou=512,au=513,lu=514,Gc=515,cu=516,hu=517,uu=518,fu=519,ua=35044;var Il="300 es",Cn=2e3,or=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=1234567,Vi=Math.PI/180,ds=180/Math.PI;function Rn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function el(n,t){return(n%t+t)%t}function du(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function pu(n,t,e){return n!==t?(e-n)/(t-n):0}function hs(n,t,e){return(1-e)*n+e*t}function mu(n,t,e,i){return hs(n,t,1-Math.exp(-e*i))}function gu(n,t=1){return t-Math.abs(el(n,t*2)-t)}function _u(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function xu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function vu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function yu(n,t){return n+Math.random()*(t-n)}function Mu(n){return n*(.5-Math.random())}function Su(n){n!==void 0&&(Ll=n);let t=Ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bu(n){return n*Vi}function wu(n){return n*ds}function Eu(n){return(n&n-1)===0&&n!==0}function Tu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Au(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cu(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),m=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Wc={DEG2RAD:Vi,RAD2DEG:ds,generateUUID:Rn,clamp:Ce,euclideanModulo:el,mapLinear:du,inverseLerp:pu,lerp:hs,damp:mu,pingpong:gu,smoothstep:_u,smootherstep:xu,randInt:vu,randFloat:yu,randFloatSpread:Mu,seededRandom:Su,degToRad:bu,radToDeg:wu,isPowerOfTwo:Eu,ceilPowerOfTwo:Tu,floorPowerOfTwo:Au,setQuaternionFromProperEuler:Cu,normalize:jt,denormalize:en},At=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],S=s[0],p=s[3],d=s[6],v=s[1],b=s[4],g=s[7],R=s[2],w=s[5],C=s[8];return r[0]=o*S+a*v+l*R,r[3]=o*p+a*b+l*w,r[6]=o*d+a*g+l*C,r[1]=c*S+u*v+h*R,r[4]=c*p+u*b+h*w,r[7]=c*d+u*g+h*C,r[2]=f*S+m*v+_*R,r[5]=f*p+m*b+_*w,r[8]=f*d+m*g+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,_=e*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=h*S,t[1]=(s*c-u*i)*S,t[2]=(a*i-s*o)*S,t[3]=f*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=m*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kr=new Ft;function kc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ru(){let n=ar("canvas");return n.style.display="block",n}var Ul={};function ls(n){n in Ul||(Ul[n]=!0,console.warn(n))}function Pu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Iu(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lu(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(n.r=Pn(n.r),n.g=Pn(n.g),n.b=Pn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(n.r=Hi(n.r),n.g=Hi(n.g),n.b=Hi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gn?Pr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Dl=[.64,.33,.3,.6,.15,.06],Nl=[.2126,.7152,.0722],Fl=[.3127,.329],Ol=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[ji]:{primaries:Dl,whitePoint:Fl,transfer:Pr,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:Nl,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Dl,whitePoint:Fl,transfer:$t,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:Nl,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});var wi,fa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=ar("canvas")),wi.width=t.width,wi.height=t.height;let i=wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ar("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pn(e[i]/255)*255):e[i]=Pn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uu=0,lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qr(s[o].image)):r.push(Qr(s[o]))}else r=Qr(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Qr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Du=0,He=class n extends Zn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=hi,s=hi,r=fn,o=ui,a=nn,l=rn,c=n.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Rn(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fo:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fo:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Ic;He.DEFAULT_ANISOTROPY=1;var te=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,g=(m+1)/2,R=(d+1)/2,w=(u+f)/4,C=(h+S)/4,x=(_+p)/4;return b>g&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=C/i):g>R?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=w/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=x/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-_)*(p-_)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-S)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},da=class extends Zn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new He(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Me=class extends da{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},cr=class extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],m=r[o+1],_=r[o+2],S=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=S;return}if(h!==S||l!==f||c!==m||u!==_){let p=1-a,d=l*f+c*m+u*_+h*S,v=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let R=Math.sqrt(b),w=Math.atan2(R,d*v);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}let g=a*v;if(l=l*p+f*g,c=c*p+m*g,u=u*p+_*g,h=h*p+S*g,p===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+u*h+l*m-c*f,t[e+1]=l*_+u*f+c*h-a*m,t[e+2]=c*_+u*m+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jr=new N,zl=new Jn,Ye=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Cs.subVectors(this.max,ss),Ei.subVectors(t.a,ss),Ti.subVectors(t.b,ss),Ai.subVectors(t.c,ss),Fn.subVectors(Ti,Ei),On.subVectors(Ai,Ti),ei.subVectors(Ei,Ai);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-ei.z,ei.y,Fn.z,0,-Fn.x,On.z,0,-On.x,ei.z,0,-ei.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!to(e,Ei,Ti,Ai,Cs)||(e=[1,0,0,0,1,0,0,0,1],!to(e,Ei,Ti,Ai,Cs))?!1:(Rs.crossVectors(Fn,On),e=[Rs.x,Rs.y,Rs.z],to(e,Ei,Ti,Ai,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mn=[new N,new N,new N,new N,new N,new N,new N,new N],$e=new N,As=new Ye,Ei=new N,Ti=new N,Ai=new N,Fn=new N,On=new N,ei=new N,ss=new N,Cs=new N,Rs=new N,ni=new N;function to(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ni.fromArray(n,r);let a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),u=i.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Nu=new Ye,rs=new N,eo=new N,In=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Nu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(rs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(eo)),this.expandByPoint(rs.copy(t.center).sub(eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new N,no=new N,Ps=new N,Bn=new N,io=new N,Is=new N,so=new N,ma=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){no.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(no);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),a=Bn.dot(this.direction),l=-Bn.dot(Ps),c=Bn.lengthSq(),u=Math.abs(1-o*o),h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){let S=1/u;h*=S,f*=S,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(no).addScaledVector(Ps,f),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let i=Sn.dot(this.direction),s=Sn.dot(Sn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,i,s,r){io.subVectors(e,t),Is.subVectors(i,t),so.crossVectors(io,Is);let o=this.direction.dot(so),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);let l=a*this.direction.dot(Is.crossVectors(Bn,Is));if(l<0)return null;let c=a*this.direction.dot(io.cross(Bn));if(c<0||l+c>o)return null;let u=-a*Bn.dot(so);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class n{constructor(t,e,i,s,r,o,a,l,c,u,h,f,m,_,S,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,m,_,S,p)}set(t,e,i,s,r,o,a,l,c,u,h,f,m,_,S,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,m=o*h,_=a*u,S=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,m=l*h,_=c*u,S=c*h;e[0]=f+S*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-_,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,m=l*h,_=c*u,S=c*h;e[0]=f-S*a,e[4]=-o*h,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*u,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,m=o*h,_=a*u,S=a*h;e[0]=l*u,e[4]=_*c-m,e[8]=f*c+S,e[1]=l*h,e[5]=S*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,_=a*l,S=a*c;e[0]=l*u,e[4]=S-f*h,e[8]=_*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+_,e[10]=f-S*h}else if(t.order==="XZY"){let f=o*l,m=o*c,_=a*l,S=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+S,e[5]=o*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=a*u,e[10]=S*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fu,t,Ou)}lookAt(t,e,i){let s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),zn.crossVectors(i,Be),zn.lengthSq()===0&&(Math.abs(i.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),zn.crossVectors(i,Be)),zn.normalize(),Ls.crossVectors(Be,zn),s[0]=zn.x,s[4]=Ls.x,s[8]=Be.x,s[1]=zn.y,s[5]=Ls.y,s[9]=Be.y,s[2]=zn.z,s[6]=Ls.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],S=i[6],p=i[10],d=i[14],v=i[3],b=i[7],g=i[11],R=i[15],w=s[0],C=s[4],x=s[8],y=s[12],M=s[1],A=s[5],D=s[9],V=s[13],B=s[2],Z=s[6],F=s[10],q=s[14],W=s[3],et=s[7],rt=s[11],ut=s[15];return r[0]=o*w+a*M+l*B+c*W,r[4]=o*C+a*A+l*Z+c*et,r[8]=o*x+a*D+l*F+c*rt,r[12]=o*y+a*V+l*q+c*ut,r[1]=u*w+h*M+f*B+m*W,r[5]=u*C+h*A+f*Z+m*et,r[9]=u*x+h*D+f*F+m*rt,r[13]=u*y+h*V+f*q+m*ut,r[2]=_*w+S*M+p*B+d*W,r[6]=_*C+S*A+p*Z+d*et,r[10]=_*x+S*D+p*F+d*rt,r[14]=_*y+S*V+p*q+d*ut,r[3]=v*w+b*M+g*B+R*W,r[7]=v*C+b*A+g*Z+R*et,r[11]=v*x+b*D+g*F+R*rt,r[15]=v*y+b*V+g*q+R*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],_=t[3],S=t[7],p=t[11],d=t[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+S*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],_=t[12],S=t[13],p=t[14],d=t[15],v=h*p*c-S*f*c+S*l*m-a*p*m-h*l*d+a*f*d,b=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,g=u*S*c-_*h*c+_*a*m-o*S*m-u*a*d+o*h*d,R=_*h*l-u*S*l-_*a*f+o*S*f+u*a*p-o*h*p,w=e*v+i*b+s*g+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=v*C,t[1]=(S*f*r-h*p*r-S*s*m+i*p*m+h*s*d-i*f*d)*C,t[2]=(a*p*r-S*l*r+S*s*c-i*p*c-a*s*d+i*l*d)*C,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*C,t[4]=b*C,t[5]=(u*p*r-_*f*r+_*s*m-e*p*m-u*s*d+e*f*d)*C,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*d-e*l*d)*C,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*m+e*l*m)*C,t[8]=g*C,t[9]=(_*h*r-u*S*r-_*i*m+e*S*m+u*i*d-e*h*d)*C,t[10]=(o*S*r-_*a*r+_*i*c-e*S*c-o*i*d+e*a*d)*C,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*C,t[12]=R*C,t[13]=(u*S*s-_*h*s+_*i*f-e*S*f-u*i*p+e*h*p)*C,t[14]=(_*a*s-o*S*s-_*i*l+e*S*l+o*i*p-e*a*p)*C,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,_=r*h,S=o*u,p=o*h,d=a*h,v=l*c,b=l*u,g=l*h,R=i.x,w=i.y,C=i.z;return s[0]=(1-(S+d))*R,s[1]=(m+g)*R,s[2]=(_-b)*R,s[3]=0,s[4]=(m-g)*w,s[5]=(1-(f+d))*w,s[6]=(p+v)*w,s[7]=0,s[8]=(_+b)*C,s[9]=(p-v)*C,s[10]=(1-(f+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ci.set(s[0],s[1],s[2]).length(),o=Ci.set(s[4],s[5],s[6]).length(),a=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);let c=1/r,u=1/o,h=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=h,Ke.elements[9]*=h,Ke.elements[10]*=h,e.setFromRotationMatrix(Ke),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Cn){let l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s),m,_;if(a===Cn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===or)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Cn){let l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,m=(i+s)*u,_,S;if(a===Cn)_=(o+r)*h,S=-2*h;else if(a===or)_=r*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ci=new N,Ke=new ae,Fu=new N(0,0,0),Ou=new N(1,1,1),zn=new N,Ls=new N,Be=new N,Vl=new ae,Hl=new Jn,Ln=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bu=0,Gl=new N,Ri=new Jn,bn=new ae,Us=new N,os=new N,zu=new N,Vu=new Jn,Wl=new N(1,0,0),kl=new N(0,1,0),Xl=new N(0,0,1),ql={type:"added"},Hu={type:"removed"},Pi={type:"childadded",child:null},ro={type:"childremoved",child:null},on=class n extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new Ln,i=new Jn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ft}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Us.copy(t):Us.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(os,Us,this.up):bn.lookAt(Us,os,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ql),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hu),ro.child=t,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ql),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};on.DEFAULT_UP=new N(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new N,wn=new N,oo=new N,En=new N,Ii=new N,Li=new N,Yl=new N,ao=new N,lo=new N,co=new N,ho=new te,uo=new te,fo=new te,Wn=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qe.subVectors(s,e),wn.subVectors(i,e),oo.subVectors(t,e);let o=Qe.dot(Qe),a=Qe.dot(wn),l=Qe.dot(oo),c=wn.dot(wn),u=wn.dot(oo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(t,e),uo.fromBufferAttribute(t,i),fo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ho,r.x),o.addScaledVector(uo,r.y),o.addScaledVector(fo,r.z),o}static isFrontFacing(t,e,i,s){return Qe.subVectors(i,e),wn.subVectors(t,e),Qe.cross(wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Qe.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ii.subVectors(s,i),Li.subVectors(r,i),ao.subVectors(t,i);let l=Ii.dot(ao),c=Li.dot(ao);if(l<=0&&c<=0)return e.copy(i);lo.subVectors(t,s);let u=Ii.dot(lo),h=Li.dot(lo);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ii,o);co.subVectors(t,r);let m=Ii.dot(co),_=Li.dot(co);if(_>=0&&m<=_)return e.copy(r);let S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Li,a);let p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return Yl.subVectors(r,s),a=(h-u)/(h-u+(m-_)),e.copy(s).addScaledVector(Yl,a);let d=1/(p+S+f);return o=S*d,a=f*d,e.copy(i).addScaledVector(Ii,o).addScaledVector(Li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function po(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Wt.workingColorSpace){if(t=el(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=po(o,r,t+1/3),this.g=po(o,r,t),this.b=po(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let i=Xc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Wt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ce(Ae.r*255,0,255))*65536+Math.round(Ce(Ae.g*255,0,255))*256+Math.round(Ce(Ae.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ae.copy(this),e);let i=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Ne){Wt.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,i=Ae.g,s=Ae.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Ds);let i=hs(Vn.h,Ds.h,e),s=hs(Vn.s,Ds.s,e),r=hs(Vn.l,Ds.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new Ot;Ot.NAMES=Xc;var Gu=0,Zi=class extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Rn(),this.name="",this.blending=Xn,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ji=class extends Zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new N,Ns=new At,Ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ua,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=en(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ua&&(t.usage=this.usage),t}};var ur=class extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var fr=class extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},Wu=0,qe=new ae,mo=new on,Ui=new N,ze=new Ye,as=new Ye,ve=new N,Re=class n extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?fr:ur)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,i){return qe.makeTranslation(t,e,i),this.applyMatrix4(qe),this}scale(t,e,i){return qe.makeScale(t,e,i),this.applyMatrix4(qe),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(ze.min,as.min),ze.expandByPoint(ve),ve.addVectors(ze.max,as.max),ze.expandByPoint(ve)):(ze.expandByPoint(as.min),ze.expandByPoint(as.max))}ze.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ve.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),ve.add(Ui)),s=Math.max(s,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new N,l[x]=new N;let c=new N,u=new N,h=new N,f=new At,m=new At,_=new At,S=new N,p=new N;function d(x,y,M){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,x),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),m.sub(f),_.sub(f);let A=1/(m.x*_.y-_.x*m.y);isFinite(A)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(A),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(A),a[x].add(S),a[y].add(S),a[M].add(S),l[x].add(p),l[y].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,y=v.length;x<y;++x){let M=v[x],A=M.start,D=M.count;for(let V=A,B=A+D;V<B;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let b=new N,g=new N,R=new N,w=new N;function C(x){R.fromBufferAttribute(s,x),w.copy(R);let y=a[x];b.copy(y),b.sub(R.multiplyScalar(R.dot(y))).normalize(),g.crossVectors(w,y);let A=g.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,A)}for(let x=0,y=v.length;x<y;++x){let M=v[x],A=M.start,D=M.count;for(let V=A,B=A+D;V<B;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),S=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),m=0,_=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Ve(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zl=new ae,ii=new ma,Fs=new In,Jl=new N,Os=new N,Bs=new N,zs=new N,go=new N,Vs=new N,$l=new N,Hs=new N,ye=class extends on{constructor(t=new Re,e=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(go.fromBufferAttribute(h,t),o?Vs.addScaledVector(go,u):Vs.addScaledVector(go.sub(e),u))}e.add(Vs)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Fs.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Fs,Jl)===null||ii.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(Zl.copy(r).invert(),ii.copy(t.ray).applyMatrix4(Zl),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=f.length;_<S;_++){let p=f[_],d=o[p.materialIndex],v=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let g=v,R=b;g<R;g+=3){let w=a.getX(g),C=a.getX(g+1),x=a.getX(g+2);s=Gs(this,d,t,i,c,u,h,w,C,x),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=_,d=S;p<d;p+=3){let v=a.getX(p),b=a.getX(p+1),g=a.getX(p+2);s=Gs(this,o,t,i,c,u,h,v,b,g),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=f.length;_<S;_++){let p=f[_],d=o[p.materialIndex],v=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let g=v,R=b;g<R;g+=3){let w=g,C=g+1,x=g+2;s=Gs(this,d,t,i,c,u,h,w,C,x),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,d=S;p<d;p+=3){let v=p,b=p+1,g=p+2;s=Gs(this,o,t,i,c,u,h,v,b,g),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function ku(n,t,e,i,s,r,o,a){let l;if(t.side===Fe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Yn,a),l===null)return null;Hs.copy(a),Hs.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:n}}function Gs(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Os),n.getVertexPosition(l,Bs),n.getVertexPosition(c,zs);let u=ku(n,t,e,i,Os,Bs,zs,$l);if(u){let h=new N;Wn.getBarycoord($l,Os,Bs,zs,h),s&&(u.uv=Wn.getInterpolatedAttribute(s,a,l,c,h,new At)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,a,l,c,h,new At)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};Wn.getNormal(Os,Bs,zs,f.normal),u.face=f,u.barycoord=h}return u}var ps=class n extends Re{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,m=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function _(S,p,d,v,b,g,R,w,C,x,y){let M=g/C,A=R/x,D=g/2,V=R/2,B=w/2,Z=C+1,F=x+1,q=0,W=0,et=new N;for(let rt=0;rt<F;rt++){let ut=rt*A-V;for(let xt=0;xt<Z;xt++){let Rt=xt*M-D;et[S]=Rt*v,et[p]=ut*b,et[d]=B,c.push(et.x,et.y,et.z),et[S]=0,et[p]=0,et[d]=w>0?1:-1,u.push(et.x,et.y,et.z),h.push(xt/C),h.push(1-rt/x),q+=1}}for(let rt=0;rt<x;rt++)for(let ut=0;ut<C;ut++){let xt=f+ut+Z*rt,Rt=f+ut+Z*(rt+1),J=f+(ut+1)+Z*(rt+1),L=f+(ut+1)+Z*rt;l.push(xt,Rt,L),l.push(Rt,J,L),W+=6}a.addGroup(m,W,y),m+=W,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ie(n){let t={};for(let e=0;e<n.length;e++){let i=$i(n[e]);for(let s in i)t[s]=i[s]}return t}function Xu(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var ln={clone:$i,merge:Ie},qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,le=class extends Zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Xu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},dr=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new N,Kl=new At,Ql=new At,Le=class extends dr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,Ql),e.subVectors(Ql,Kl)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vi*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Di=-90,Ni=1,ga=class extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(Di,Ni,t,e);s.layers=this.layers,this.add(s);let r=new Le(Di,Ni,t,e);r.layers=this.layers,this.add(r);let o=new Le(Di,Ni,t,e);o.layers=this.layers,this.add(o);let a=new Le(Di,Ni,t,e);a.layers=this.layers,this.add(a);let l=new Le(Di,Ni,t,e);l.layers=this.layers,this.add(l);let c=new Le(Di,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},pr=class extends He{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_a=class extends Me{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ps(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:dn});r.uniforms.tEquirect.value=e;let o=new ye(s,r),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=fn),new ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},_o=new N,Zu=new N,Ju=new Ft,je=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=_o.subVectors(i,e).cross(Zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(_o),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ju.getNormalMatrix(t),s=this.coplanarPoint(_o).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new In,Ws=new N,mr=class{constructor(t=new je,e=new je,i=new je,s=new je,r=new je,o=new je){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Cn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],S=s[10],p=s[11],d=s[12],v=s[13],b=s[14],g=s[15];if(i[0].setComponents(l-r,f-c,p-m,g-d).normalize(),i[1].setComponents(l+r,f+c,p+m,g+d).normalize(),i[2].setComponents(l+o,f+u,p+_,g+v).normalize(),i[3].setComponents(l-o,f-u,p-_,g-v).normalize(),i[4].setComponents(l-a,f-h,p-S,g-b).normalize(),e===Cn)i[5].setComponents(l+a,f+h,p+S,g+b).normalize();else if(e===or)i[5].setComponents(a,h,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ws.x=s.normal.x>0?t.max.x:t.min.x,Ws.y=s.normal.y>0?t.max.y:t.min.y,Ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yc(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $u(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){let _=h[f],S=h[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,h[f]=S)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){let S=h[m];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ki=class n extends Re{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,m=[],_=[],S=[],p=[];for(let d=0;d<u;d++){let v=d*f-o;for(let b=0;b<c;b++){let g=b*h-r;_.push(g,-v,0),S.push(0,0,1),p.push(b/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){let b=v+c*d,g=v+c*(d+1),R=v+1+c*(d+1),w=v+1+c*d;m.push(b,g,w),m.push(g,R,w)}this.setIndex(m),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(S,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qu=`#ifdef USE_ALPHAHASH
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
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
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
#endif`,$f=`struct PhysicalMaterial {
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
}`,Kf=`
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yd=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fd=`float getShadowMask() {
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
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,rp=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,_p=`#define NORMAL
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
}`,xp=`#define NORMAL
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
}`,vp=`#define PHONG
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
}`,yp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,Sp=`#define STANDARD
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
}`,bp=`#define TOON
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
}`,wp=`#define TOON
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
}`,Ep=`uniform float size;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Cp=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Ku,alphahash_pars_fragment:Qu,alphamap_fragment:ju,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:of,batching_vertex:af,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:ff,clipping_planes_fragment:df,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:xf,color_pars_vertex:vf,color_vertex:yf,common:Mf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:bf,displacementmap_pars_vertex:wf,displacementmap_vertex:Ef,emissivemap_fragment:Tf,emissivemap_pars_fragment:Af,colorspace_fragment:Cf,colorspace_pars_fragment:Rf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:kf,envmap_vertex:Df,fog_vertex:Nf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:Zf,lights_physical_fragment:Jf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:Qf,lights_fragment_end:jf,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:od,map_particle_pars_fragment:ad,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphinstance_vertex:hd,morphcolor_vertex:ud,morphnormal_vertex:fd,morphtarget_pars_vertex:dd,morphtarget_vertex:pd,normal_fragment_begin:md,normal_fragment_maps:gd,normal_pars_fragment:_d,normal_pars_vertex:xd,normal_vertex:vd,normalmap_pars_fragment:yd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:bd,iridescence_pars_fragment:wd,opaque_fragment:Ed,packing:Td,premultiplied_alpha_fragment:Ad,project_vertex:Cd,dithering_fragment:Rd,dithering_pars_fragment:Pd,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Dd,shadowmap_vertex:Nd,shadowmask_pars_fragment:Fd,skinbase_vertex:Od,skinning_pars_vertex:Bd,skinning_vertex:zd,skinnormal_vertex:Vd,specularmap_fragment:Hd,specularmap_pars_fragment:Gd,tonemapping_fragment:Wd,tonemapping_pars_fragment:kd,transmission_fragment:Xd,transmission_pars_fragment:qd,uv_pars_fragment:Yd,uv_pars_vertex:Zd,uv_vertex:Jd,worldpos_vertex:$d,background_vert:Kd,background_frag:Qd,backgroundCube_vert:jd,backgroundCube_frag:tp,cube_vert:ep,cube_frag:np,depth_vert:ip,depth_frag:sp,distanceRGBA_vert:rp,distanceRGBA_frag:op,equirect_vert:ap,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:fp,meshlambert_vert:dp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:_p,meshnormal_frag:xp,meshphong_vert:vp,meshphong_frag:yp,meshphysical_vert:Mp,meshphysical_frag:Sp,meshtoon_vert:bp,meshtoon_frag:wp,points_vert:Ep,points_frag:Tp,shadow_vert:Ap,shadow_frag:Cp,sprite_vert:Rp,sprite_frag:Pp},st={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ue={basic:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ie([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ie([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ie([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ie([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ie([st.points,st.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ie([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ie([st.common,st.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ie([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ie([st.sprite,st.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ie([st.common,st.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ie([st.lights,st.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Ue.physical={uniforms:Ie([Ue.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var ks={r:0,b:0,g:0},ri=new Ln,Ip=new ae;function Lp(n,t,e,i,s,r,o){let a=new Ot(0),l=r===!0?0:1,c,u,h=null,f=0,m=null;function _(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b)),b}function S(v){let b=!1,g=_(v);g===null?d(a,l):g&&g.isColor&&(d(g,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(v,b){let g=_(b);g&&(g.isCubeTexture||g.mapping===Rr)?(u===void 0&&(u=new ye(new ps(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:$i(Ue.backgroundCube.uniforms),vertexShader:Ue.backgroundCube.vertexShader,fragmentShader:Ue.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ri.copy(b.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(ri)),u.material.toneMapped=Wt.getTransfer(g.colorSpace)!==$t,(h!==g||f!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,m=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ye(new Ki(2,2),new le({name:"BackgroundMaterial",uniforms:$i(Ue.background.uniforms),vertexShader:Ue.background.vertexShader,fragmentShader:Ue.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(g.colorSpace)!==$t,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,m=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,b){v.getRGB(ks,qc(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:S,addToRenderList:p}}function Up(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(M,A,D,V,B){let Z=!1,F=h(V,D,A);r!==F&&(r=F,c(r.object)),Z=m(M,V,D,B),Z&&_(M,V,D,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,g(M,A,D,V),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,A,D){let V=D.wireframe===!0,B=i[M.id];B===void 0&&(B={},i[M.id]=B);let Z=B[A.id];Z===void 0&&(Z={},B[A.id]=Z);let F=Z[V];return F===void 0&&(F=f(l()),Z[V]=F),F}function f(M){let A=[],D=[],V=[];for(let B=0;B<e;B++)A[B]=0,D[B]=0,V[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:V,object:M,attributes:{},index:null}}function m(M,A,D,V){let B=r.attributes,Z=A.attributes,F=0,q=D.getAttributes();for(let W in q)if(q[W].location>=0){let rt=B[W],ut=Z[W];if(ut===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),rt===void 0||rt.attribute!==ut||ut&&rt.data!==ut.data)return!0;F++}return r.attributesNum!==F||r.index!==V}function _(M,A,D,V){let B={},Z=A.attributes,F=0,q=D.getAttributes();for(let W in q)if(q[W].location>=0){let rt=Z[W];rt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));let ut={};ut.attribute=rt,rt&&rt.data&&(ut.data=rt.data),B[W]=ut,F++}r.attributes=B,r.attributesNum=F,r.index=V}function S(){let M=r.newAttributes;for(let A=0,D=M.length;A<D;A++)M[A]=0}function p(M){d(M,0)}function d(M,A){let D=r.newAttributes,V=r.enabledAttributes,B=r.attributeDivisors;D[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),B[M]!==A&&(n.vertexAttribDivisor(M,A),B[M]=A)}function v(){let M=r.newAttributes,A=r.enabledAttributes;for(let D=0,V=A.length;D<V;D++)A[D]!==M[D]&&(n.disableVertexAttribArray(D),A[D]=0)}function b(M,A,D,V,B,Z,F){F===!0?n.vertexAttribIPointer(M,A,D,B,Z):n.vertexAttribPointer(M,A,D,V,B,Z)}function g(M,A,D,V){S();let B=V.attributes,Z=D.getAttributes(),F=A.defaultAttributeValues;for(let q in Z){let W=Z[q];if(W.location>=0){let et=B[q];if(et===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){let rt=et.normalized,ut=et.itemSize,xt=t.get(et);if(xt===void 0)continue;let Rt=xt.buffer,J=xt.type,L=xt.bytesPerElement,K=J===n.INT||J===n.UNSIGNED_INT||et.gpuType===Ja;if(et.isInterleavedBufferAttribute){let H=et.data,dt=H.stride,lt=et.offset;if(H.isInstancedInterleavedBuffer){for(let Et=0;Et<W.locationSize;Et++)d(W.location+Et,H.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Et=0;Et<W.locationSize;Et++)p(W.location+Et);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let Et=0;Et<W.locationSize;Et++)b(W.location+Et,ut/W.locationSize,J,rt,dt*L,(lt+ut/W.locationSize*Et)*L,K)}else{if(et.isInstancedBufferAttribute){for(let H=0;H<W.locationSize;H++)d(W.location+H,et.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let H=0;H<W.locationSize;H++)p(W.location+H);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let H=0;H<W.locationSize;H++)b(W.location+H,ut/W.locationSize,J,rt,ut*L,ut/W.locationSize*H*L,K)}}else if(F!==void 0){let rt=F[q];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(W.location,rt);break;case 3:n.vertexAttrib3fv(W.location,rt);break;case 4:n.vertexAttrib4fv(W.location,rt);break;default:n.vertexAttrib1fv(W.location,rt)}}}}v()}function R(){x();for(let M in i){let A=i[M];for(let D in A){let V=A[D];for(let B in V)u(V[B].object),delete V[B];delete A[D]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let A=i[M.id];for(let D in A){let V=A[D];for(let B in V)u(V[B].object),delete V[B];delete A[D]}delete i[M.id]}function C(M){for(let A in i){let D=i[A];if(D[M.id]===void 0)continue;let V=D[M.id];for(let B in V)u(V[B].object),delete V[B];delete D[M.id]}}function x(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:x,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function Dp(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];e.update(m,i,1)}function l(c,u,h,f){if(h===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=u[S]*f[S];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Np(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===Ge&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==rn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==An&&!x)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:g,vertexTextures:R,maxSamples:w}}function Fp(n){let t=this,e=null,i=0,s=!1,r=!1,o=new je,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){let _=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{let v=r?0:i,b=v*4,g=d.clippingState||null;l.value=g,g=u(_,f,b,m);for(let R=0;R!==b;++R)g[R]=e[R];d.clippingState=g,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,_){let S=h!==null?h.length:0,p=null;if(S!==0){if(p=l.value,_!==!0||p===null){let d=m+S*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,g=m;b!==S;++b,g+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(p,g),p[g+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}function Op(n){let t=new WeakMap;function e(o,a){return a===Do?o.mapping=ki:a===No&&(o.mapping=Xi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Do||a===No)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _a(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ms=class extends dr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oi=4,jl=[.125,.215,.35,.446,.526,.582],ci=20,xo=new ms,tc=new Ot,vo=null,yo=0,Mo=0,So=!1,ai=(1+Math.sqrt(5))/2,Fi=1/ai,ec=[new N(-ai,Fi,0),new N(ai,Fi,0),new N(-Fi,0,ai),new N(Fi,0,ai),new N(0,ai,-Fi),new N(0,ai,Fi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],gr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vo,yo,Mo),this._renderer.xr.enabled=So,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ge,format:nn,colorSpace:ji,depthBuffer:!1},s=nc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=zp(r,t,e)}return s}_compileMaterial(t){let e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,i,s){let a=new Le(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(tc),u.toneMapping=qn,u.autoClear=!1;let m=new Ji({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),_=new ye(new ps,m),S=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,S=!0):(m.color.copy(tc),S=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let b=this._cubeSize;Xs(s,v*b,d>2?b:0,b,b),u.setRenderTarget(s),S&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ki||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Xs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,xo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ec[(s-r-1)%ec.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ye(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ci-1),S=r/_,p=isFinite(r)?1+Math.floor(u*S):ci;p>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);let d=[],v=0;for(let C=0;C<ci;++C){let x=C/S,y=Math.exp(-x*x/2);d.push(y),C===0?v+=y:C<p&&(v+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;let g=this._sizeLods[s],R=3*g*(s>b-Oi?s-b+Oi:0),w=4*(this._cubeSize-g);Xs(e,R,w,3*g,2*g),l.setRenderTarget(e),l.render(h,xo)}};function Bp(n){let t=[],e=[],i=[],s=n,r=n-Oi+1+jl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Oi?l=jl[o-n+Oi-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,S=3,p=2,d=1,v=new Float32Array(S*_*m),b=new Float32Array(p*_*m),g=new Float32Array(d*_*m);for(let w=0;w<m;w++){let C=w%3*2/3-1,x=w>2?0:-1,y=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(y,S*_*w),b.set(f,p*_*w);let M=[w,w,w,w,w,w];g.set(M,d*_*w)}let R=new Re;R.setAttribute("position",new Ve(v,S)),R.setAttribute("uv",new Ve(b,p)),R.setAttribute("faceIndex",new Ve(g,d)),t.push(R),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function nc(n,t,e){let i=new Me(n,t,e);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function zp(n,t,e){let i=new Float32Array(ci),s=new N(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ic(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function sc(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function Vp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Do||l===No,u=l===ki||l===Xi;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new gr(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new gr(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Hp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ls("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Gp(n,t,e,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let S=f.morphAttributes[_];for(let p=0,d=S.length;p<d;p++)t.remove(S[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let _ in f)t.update(f[_],n.ARRAY_BUFFER);let m=h.morphAttributes;for(let _ in m){let S=m[_];for(let p=0,d=S.length;p<d;p++)t.update(S[p],n.ARRAY_BUFFER)}}function c(h){let f=[],m=h.index,_=h.attributes.position,S=0;if(m!==null){let v=m.array;S=m.version;for(let b=0,g=v.length;b<g;b+=3){let R=v[b+0],w=v[b+1],C=v[b+2];f.push(R,w,w,C,C,R)}}else if(_!==void 0){let v=_.array;S=_.version;for(let b=0,g=v.length/3-1;b<g;b+=3){let R=b+0,w=b+1,C=b+2;f.push(R,w,w,C,C,R)}}else return;let p=new(kc(f)?fr:ur)(f,1);p.version=S;let d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){let f=r.get(h);if(f){let m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Wp(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),e.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,f*o,_),e.update(m,i,_))}function u(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];e.update(p,i,1)}function h(f,m,_,S){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],S[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,S,0,_);let d=0;for(let v=0;v<_;v++)d+=m[v]*S[v];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Xp(n,t,e){let i=new WeakMap,s=new te;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let y=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;m===!0&&(b=1),_===!0&&(b=2),S===!0&&(b=3);let g=a.attributes.position.count*b,R=1;g>t.maxTextureSize&&(R=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let w=new Float32Array(g*R*4*h),C=new cr(w,g,R,h);C.type=An,C.needsUpdate=!0;let x=b*4;for(let M=0;M<h;M++){let A=p[M],D=d[M],V=v[M],B=g*R*4*M;for(let Z=0;Z<A.count;Z++){let F=Z*x;m===!0&&(s.fromBufferAttribute(A,Z),w[B+F+0]=s.x,w[B+F+1]=s.y,w[B+F+2]=s.z,w[B+F+3]=0),_===!0&&(s.fromBufferAttribute(D,Z),w[B+F+4]=s.x,w[B+F+5]=s.y,w[B+F+6]=s.z,w[B+F+7]=0),S===!0&&(s.fromBufferAttribute(V,Z),w[B+F+8]=s.x,w[B+F+9]=s.y,w[B+F+10]=s.z,w[B+F+11]=V.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new At(g,R)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function qp(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var _r=class extends He{constructor(t,e,i,s,r,o,a,l,c,u=zi){if(u!==zi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zi&&(i=di),i===void 0&&u===Yi&&(i=qi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zc=new He,rc=new _r(1,1),Jc=new cr,$c=new pa,Kc=new pr,oc=[],ac=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function ts(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=oc[s];if(r===void 0&&(r=new Float32Array(s),oc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ir(n,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Yp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Zp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function Jp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function $p(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function Kp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;hc.set(i),n.uniformMatrix2fv(this.addr,!1,hc),ge(e,i)}}function Qp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;cc.set(i),n.uniformMatrix3fv(this.addr,!1,cc),ge(e,i)}}function jp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;lc.set(i),n.uniformMatrix4fv(this.addr,!1,lc),ge(e,i)}}function tm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function em(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function nm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function im(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function sm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function lm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rc.compareFunction=Gc,r=rc):r=Zc,e.setTexture2D(t||r,s)}function cm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||$c,s)}function hm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Kc,s)}function um(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Jc,s)}function fm(n){switch(n){case 5126:return Yp;case 35664:return Zp;case 35665:return Jp;case 35666:return $p;case 35674:return Kp;case 35675:return Qp;case 35676:return jp;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return om;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}function dm(n,t){n.uniform1fv(this.addr,t)}function pm(n,t){let e=ts(t,this.size,2);n.uniform2fv(this.addr,e)}function mm(n,t){let e=ts(t,this.size,3);n.uniform3fv(this.addr,e)}function gm(n,t){let e=ts(t,this.size,4);n.uniform4fv(this.addr,e)}function _m(n,t){let e=ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function xm(n,t){let e=ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function vm(n,t){let e=ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ym(n,t){n.uniform1iv(this.addr,t)}function Mm(n,t){n.uniform2iv(this.addr,t)}function Sm(n,t){n.uniform3iv(this.addr,t)}function bm(n,t){n.uniform4iv(this.addr,t)}function wm(n,t){n.uniform1uiv(this.addr,t)}function Em(n,t){n.uniform2uiv(this.addr,t)}function Tm(n,t){n.uniform3uiv(this.addr,t)}function Am(n,t){n.uniform4uiv(this.addr,t)}function Cm(n,t,e){let i=this.cache,s=t.length,r=Ir(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zc,r[o])}function Rm(n,t,e){let i=this.cache,s=t.length,r=Ir(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$c,r[o])}function Pm(n,t,e){let i=this.cache,s=t.length,r=Ir(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kc,r[o])}function Im(n,t,e){let i=this.cache,s=t.length,r=Ir(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jc,r[o])}function Lm(n){switch(n){case 5126:return dm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return bm;case 5125:return wm;case 36294:return Em;case 36295:return Tm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Im}}var xa=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fm(e.type)}},va=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}},ya=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},bo=/(\w+)(\])?(\[|\.)?/g;function uc(n,t){n.seq.push(t),n.map[t.id]=t}function Um(n,t,e){let i=n.name,s=i.length;for(bo.lastIndex=0;;){let r=bo.exec(i),o=bo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uc(e,c===void 0?new xa(a,n,t):new va(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new ya(a),uc(e,h)),e=h}}}var Gi=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Um(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function fc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Dm=37297,Nm=0;function Fm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var dc=new Ft;function Om(n){Wt._getMatrix(dc,Wt.workingColorSpace,n);let t=`mat3( ${dc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case Pr:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fm(n.getShaderSource(t),o)}else return s}function Bm(n,t){let e=Om(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zm(n,t){let e;switch(t){case Wa:e="Linear";break;case ka:e="Reinhard";break;case Xa:e="Cineon";break;case qa:e="ACESFilmic";break;case Ya:e="AgX";break;case Za:e="Neutral";break;case tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qs=new N;function Vm(){Wt.getLuminanceCoefficients(qs);let n=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Gm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Wm(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function cs(n){return n!==""}function mc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(n){return n.replace(km,qm)}var Xm=new Map;function qm(n,t){let e=Vt[t];if(e===void 0){let i=Xm.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}var Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(n){return n.replace(Ym,Zm)}function Zm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function $m(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ki:case Xi:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Km(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Xi&&(t="ENVMAP_MODE_REFRACTION"),t}function Qm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Qh:t="ENVMAP_BLENDING_MIX";break;case jh:t="ENVMAP_BLENDING_ADD";break}return t}function jm(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function tg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jm(e),c=$m(e),u=Km(e),h=Qm(e),f=jm(e),m=Hm(e),_=Gm(r),S=s.createProgram(),p,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(cs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(cs).join(`
`),d.length>0&&(d+=`
`)):(p=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),d=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==qn?zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Bm("linearToOutputTexel",e.outputColorSpace),Vm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=Ma(o),o=mc(o,e),o=gc(o,e),a=Ma(a),a=mc(a,e),a=gc(a,e),o=_c(o),a=_c(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=v+p+o,g=v+d+a,R=fc(s,s.VERTEX_SHADER,b),w=fc(s,s.FRAGMENT_SHADER,g);s.attachShader(S,R),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(A){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(S).trim(),V=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(w).trim(),Z=!0,F=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,R,w);else{let q=pc(s,R,"vertex"),W=pc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+q+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(V===""||B==="")&&(F=!1);F&&(A.diagnostics={runnable:Z,programLog:D,vertexShader:{log:V,prefix:p},fragmentShader:{log:B,prefix:d}})}s.deleteShader(R),s.deleteShader(w),x=new Gi(s,S),y=Wm(s,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(S,Dm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nm++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=w,this}var eg=0,Sa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ba(t),e.set(t,i)),i}},ba=class{constructor(t){this.id=eg++,this.code=t,this.usedTimes=0}};function ng(n,t,e,i,s,r,o){let a=new hr,l=new Sa,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,A,D,V){let B=D.fog,Z=V.geometry,F=y.isMeshStandardMaterial?D.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),W=q&&q.mapping===Rr?q.image.height:null,et=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ut=rt!==void 0?rt.length:0,xt=0;Z.morphAttributes.position!==void 0&&(xt=1),Z.morphAttributes.normal!==void 0&&(xt=2),Z.morphAttributes.color!==void 0&&(xt=3);let Rt,J,L,K;if(et){let Qt=Ue[et];Rt=Qt.vertexShader,J=Qt.fragmentShader}else Rt=y.vertexShader,J=y.fragmentShader,l.update(y),L=l.getVertexShaderID(y),K=l.getFragmentShaderID(y);let H=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),lt=V.isInstancedMesh===!0,Et=V.isBatchedMesh===!0,Ht=!!y.map,Tt=!!y.matcap,Kt=!!q,I=!!y.aoMap,Yt=!!y.lightMap,It=!!y.bumpMap,Bt=!!y.normalMap,St=!!y.displacementMap,Ut=!!y.emissiveMap,pt=!!y.metalnessMap,P=!!y.roughnessMap,E=y.anisotropy>0,G=y.clearcoat>0,Q=y.dispersion>0,tt=y.iridescence>0,$=y.sheen>0,bt=y.transmission>0,at=E&&!!y.anisotropyMap,mt=G&&!!y.clearcoatMap,Xt=G&&!!y.clearcoatNormalMap,nt=G&&!!y.clearcoatRoughnessMap,gt=tt&&!!y.iridescenceMap,Ct=tt&&!!y.iridescenceThicknessMap,Pt=$&&!!y.sheenColorMap,_t=$&&!!y.sheenRoughnessMap,kt=!!y.specularMap,zt=!!y.specularColorMap,ee=!!y.specularIntensityMap,U=bt&&!!y.transmissionMap,ot=bt&&!!y.thicknessMap,Y=!!y.gradientMap,j=!!y.alphaMap,ft=y.alphaTest>0,ct=!!y.alphaHash,Dt=!!y.extensions,de=qn;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(de=n.toneMapping);let Ee={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:Rt,fragmentShader:J,defines:y.defines,customVertexShaderID:L,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Et,batchingColor:Et&&V._colorsTexture!==null,instancing:lt,instancingColor:lt&&V.instanceColor!==null,instancingMorph:lt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ji,alphaToCoverage:!!y.alphaToCoverage,map:Ht,matcap:Tt,envMap:Kt,envMapMode:Kt&&q.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:Yt,bumpMap:It,normalMap:Bt,displacementMap:f&&St,emissiveMap:Ut,normalMapObjectSpace:Bt&&y.normalMapType===ru,normalMapTangentSpace:Bt&&y.normalMapType===su,metalnessMap:pt,roughnessMap:P,anisotropy:E,anisotropyMap:at,clearcoat:G,clearcoatMap:mt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:nt,dispersion:Q,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:Pt,sheenRoughnessMap:_t,specularMap:kt,specularColorMap:zt,specularIntensityMap:ee,transmission:bt,transmissionMap:U,thicknessMap:ot,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Xn&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ft,alphaHash:ct,combine:y.combine,mapUv:Ht&&S(y.map.channel),aoMapUv:I&&S(y.aoMap.channel),lightMapUv:Yt&&S(y.lightMap.channel),bumpMapUv:It&&S(y.bumpMap.channel),normalMapUv:Bt&&S(y.normalMap.channel),displacementMapUv:St&&S(y.displacementMap.channel),emissiveMapUv:Ut&&S(y.emissiveMap.channel),metalnessMapUv:pt&&S(y.metalnessMap.channel),roughnessMapUv:P&&S(y.roughnessMap.channel),anisotropyMapUv:at&&S(y.anisotropyMap.channel),clearcoatMapUv:mt&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&S(y.sheenRoughnessMap.channel),specularMapUv:kt&&S(y.specularMap.channel),specularColorMapUv:zt&&S(y.specularColorMap.channel),specularIntensityMapUv:ee&&S(y.specularIntensityMap.channel),transmissionMapUv:U&&S(y.transmissionMap.channel),thicknessMapUv:ot&&S(y.thicknessMap.channel),alphaMapUv:j&&S(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Bt||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(Ht||j),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:dt,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:Ht&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===$t,decodeVideoTextureEmissive:Ut&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===$t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===Fe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||Et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function d(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)M.push(A),M.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(v(M,y),b(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function g(y){let M=_[y.type],A;if(M){let D=Ue[M];A=ln.clone(D.uniforms)}else A=y.uniforms;return A}function R(y,M){let A;for(let D=0,V=u.length;D<V;D++){let B=u[D];if(B.cacheKey===M){A=B,++A.usedTimes;break}}return A===void 0&&(A=new tg(n,M,y,r),u.push(A)),A}function w(y){if(--y.usedTimes===0){let M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function x(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:g,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:x}}function ig(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function sg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,m,_,S,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:S,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=S,d.group=p),t++,d}function a(h,f,m,_,S,p){let d=o(h,f,m,_,S,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,f,m,_,S,p){let d=o(h,f,m,_,S,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||sg),i.length>1&&i.sort(f||vc),s.length>1&&s.sort(f||vc)}function u(){for(let h=t,f=n.length;h<f;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function rg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new yc,n.set(i,[o])):s>=r.length?(o=new yc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function og(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ot};break;case"SpotLight":e={position:new N,direction:new N,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function ag(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var lg=0;function cg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function hg(n){let t=new og,e=ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new ae,o=new ae;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,_=0,S=0,p=0,d=0,v=0,b=0,g=0,R=0,w=0,C=0;c.sort(cg);for(let y=0,M=c.length;y<M;y++){let A=c[y],D=A.color,V=A.intensity,B=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=D.r*V,h+=D.g*V,f+=D.b*V;else if(A.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],V);C++}else if(A.isDirectionalLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let q=A.shadow,W=e.get(A);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=A.shadow.matrix,v++}i.directional[m]=F,m++}else if(A.isSpotLight){let F=t.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(D).multiplyScalar(V),F.distance=B,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,i.spot[S]=F;let q=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,q.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[S]=q.matrix,A.castShadow){let W=e.get(A);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,i.spotShadow[S]=W,i.spotShadowMap[S]=Z,g++}S++}else if(A.isRectAreaLight){let F=t.get(A);F.color.copy(D).multiplyScalar(V),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=F,p++}else if(A.isPointLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){let q=A.shadow,W=e.get(A);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=A.shadow.matrix,b++}i.point[_]=F,_++}else if(A.isHemisphereLight){let F=t.get(A);F.skyColor.copy(A.color).multiplyScalar(V),F.groundColor.copy(A.groundColor).multiplyScalar(V),i.hemi[d]=F,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let x=i.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==p||x.hemiLength!==d||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==g||x.numSpotMaps!==R||x.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=g+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,x.directionalLength=m,x.pointLength=_,x.spotLength=S,x.rectAreaLength=p,x.hemiLength=d,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=g,x.numSpotMaps=R,x.numLightProbes=C,i.version=lg++)}function l(c,u){let h=0,f=0,m=0,_=0,S=0,p=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){let b=c[d];if(b.isDirectionalLight){let g=i.directional[h];g.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),h++}else if(b.isSpotLight){let g=i.spot[m];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let g=i.rectArea[_];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),g.halfWidth.set(b.width*.5,0,0),g.halfHeight.set(0,b.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let g=i.point[f];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let g=i.hemi[S];g.direction.setFromMatrixPosition(b.matrixWorld),g.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:i}}function Mc(n){let t=new hg(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ug(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Mc(n),t.set(s,[a])):r>=o.length?(a=new Mc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var wa=class extends Zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ea=class extends Zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`;function pg(n,t,e){let i=new mr,s=new At,r=new At,o=new te,a=new wa({depthPacking:iu}),l=new Ea,c={},u=e.maxTextureSize,h={[Yn]:Fe,[Fe]:Yn,[tn]:tn},f=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:fg,fragmentShader:dg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Re;_.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ye(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let d=this.type;this.render=function(w,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let y=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(dn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=d!==Tn&&this.type===Tn,B=d===Tn&&this.type!==Tn;for(let Z=0,F=w.length;Z<F;Z++){let q=w[Z],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let et=W.getFrameExtents();if(s.multiply(et),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,W.mapSize.y=r.y)),W.map===null||V===!0||B===!0){let ut=this.type!==Tn?{minFilter:sn,magFilter:sn}:{};W.map!==null&&W.map.dispose(),W.map=new Me(s.x,s.y,ut),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let rt=W.getViewportCount();for(let ut=0;ut<rt;ut++){let xt=W.getViewport(ut);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),D.viewport(o),W.updateMatrices(q,ut),i=W.getFrustum(),g(C,x,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Tn&&v(W,x),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(y,M,A)};function v(w,C){let x=t.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Me(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,x,f,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,x,m,S,null)}function b(w,C,x,y){let M=null,A=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)M=A;else if(M=x.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let D=M.uuid,V=C.uuid,B=c[D];B===void 0&&(B={},c[D]=B);let Z=B[V];Z===void 0&&(Z=M.clone(),B[V]=Z,C.addEventListener("dispose",R)),M=Z}if(M.visible=C.visible,M.wireframe=C.wireframe,y===Tn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,x.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=n.properties.get(M);D.light=x}return M}function g(w,C,x,y,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Tn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let V=t.update(w),B=w.material;if(Array.isArray(B)){let Z=V.groups;for(let F=0,q=Z.length;F<q;F++){let W=Z[F],et=B[W.materialIndex];if(et&&et.visible){let rt=b(w,et,y,M);w.onBeforeShadow(n,w,C,x,V,rt,W),n.renderBufferDirect(x,null,V,rt,w,W),w.onAfterShadow(n,w,C,x,V,rt,W)}}}else if(B.visible){let Z=b(w,B,y,M);w.onBeforeShadow(n,w,C,x,V,Z,null),n.renderBufferDirect(x,null,V,Z,w,null),w.onAfterShadow(n,w,C,x,V,Z,null)}}let D=w.children;for(let V=0,B=D.length;V<B;V++)g(D[V],C,x,y,M)}function R(w){w.target.removeEventListener("dispose",R);for(let x in c){let y=c[x],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var mg={[Ao]:Co,[Ro]:Lo,[Po]:Uo,[Wi]:Io,[Co]:Ao,[Lo]:Ro,[Uo]:Po,[Io]:Wi};function gg(n,t){function e(){let U=!1,ot=new te,Y=null,j=new te(0,0,0,0);return{setMask:function(ft){Y!==ft&&!U&&(n.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){U=ft},setClear:function(ft,ct,Dt,de,Ee){Ee===!0&&(ft*=de,ct*=de,Dt*=de),ot.set(ft,ct,Dt,de),j.equals(ot)===!1&&(n.clearColor(ft,ct,Dt,de),j.copy(ot))},reset:function(){U=!1,Y=null,j.set(-1,0,0,0)}}}function i(){let U=!1,ot=!1,Y=null,j=null,ft=null;return{setReversed:function(ct){if(ot!==ct){let Dt=t.get("EXT_clip_control");ot?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let de=ft;ft=null,this.setClear(de)}ot=ct},getReversed:function(){return ot},setTest:function(ct){ct?H(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(ct){Y!==ct&&!U&&(n.depthMask(ct),Y=ct)},setFunc:function(ct){if(ot&&(ct=mg[ct]),j!==ct){switch(ct){case Ao:n.depthFunc(n.NEVER);break;case Co:n.depthFunc(n.ALWAYS);break;case Ro:n.depthFunc(n.LESS);break;case Wi:n.depthFunc(n.LEQUAL);break;case Po:n.depthFunc(n.EQUAL);break;case Io:n.depthFunc(n.GEQUAL);break;case Lo:n.depthFunc(n.GREATER);break;case Uo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ct}},setLocked:function(ct){U=ct},setClear:function(ct){ft!==ct&&(ot&&(ct=1-ct),n.clearDepth(ct),ft=ct)},reset:function(){U=!1,Y=null,j=null,ft=null,ot=!1}}}function s(){let U=!1,ot=null,Y=null,j=null,ft=null,ct=null,Dt=null,de=null,Ee=null;return{setTest:function(Qt){U||(Qt?H(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(Qt){ot!==Qt&&!U&&(n.stencilMask(Qt),ot=Qt)},setFunc:function(Qt,Ze,vn){(Y!==Qt||j!==Ze||ft!==vn)&&(n.stencilFunc(Qt,Ze,vn),Y=Qt,j=Ze,ft=vn)},setOp:function(Qt,Ze,vn){(ct!==Qt||Dt!==Ze||de!==vn)&&(n.stencilOp(Qt,Ze,vn),ct=Qt,Dt=Ze,de=vn)},setLocked:function(Qt){U=Qt},setClear:function(Qt){Ee!==Qt&&(n.clearStencil(Qt),Ee=Qt)},reset:function(){U=!1,ot=null,Y=null,j=null,ft=null,ct=null,Dt=null,de=null,Ee=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,m=[],_=null,S=!1,p=null,d=null,v=null,b=null,g=null,R=null,w=null,C=new Ot(0,0,0),x=0,y=!1,M=null,A=null,D=null,V=null,B=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,q=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=q>=2);let et=null,rt={},ut=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),Rt=new te().fromArray(ut),J=new te().fromArray(xt);function L(U,ot,Y,j){let ft=new Uint8Array(4),ct=n.createTexture();n.bindTexture(U,ct),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<Y;Dt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ot,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ot+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ct}let K={};K[n.TEXTURE_2D]=L(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=L(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=L(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=L(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(n.DEPTH_TEST),o.setFunc(Wi),It(!1),Bt(wl),H(n.CULL_FACE),I(dn);function H(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function dt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function lt(U,ot){return h[U]!==ot?(n.bindFramebuffer(U,ot),h[U]=ot,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ot),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ot),!0):!1}function Et(U,ot){let Y=m,j=!1;if(U){Y=f.get(ot),Y===void 0&&(Y=[],f.set(ot,Y));let ft=U.textures;if(Y.length!==ft.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Dt=ft.length;ct<Dt;ct++)Y[ct]=n.COLOR_ATTACHMENT0+ct;Y.length=ft.length,j=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,j=!0);j&&n.drawBuffers(Y)}function Ht(U){return _!==U?(n.useProgram(U),_=U,!0):!1}let Tt={[li]:n.FUNC_ADD,[Nh]:n.FUNC_SUBTRACT,[Fh]:n.FUNC_REVERSE_SUBTRACT};Tt[Oh]=n.MIN,Tt[Bh]=n.MAX;let Kt={[zh]:n.ZERO,[Vh]:n.ONE,[Hh]:n.SRC_COLOR,[Eo]:n.SRC_ALPHA,[Yh]:n.SRC_ALPHA_SATURATE,[Xh]:n.DST_COLOR,[Wh]:n.DST_ALPHA,[Gh]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[qh]:n.ONE_MINUS_DST_COLOR,[kh]:n.ONE_MINUS_DST_ALPHA,[Zh]:n.CONSTANT_COLOR,[Jh]:n.ONE_MINUS_CONSTANT_COLOR,[$h]:n.CONSTANT_ALPHA,[Kh]:n.ONE_MINUS_CONSTANT_ALPHA};function I(U,ot,Y,j,ft,ct,Dt,de,Ee,Qt){if(U===dn){S===!0&&(dt(n.BLEND),S=!1);return}if(S===!1&&(H(n.BLEND),S=!0),U!==Dh){if(U!==p||Qt!==y){if((d!==li||g!==li)&&(n.blendEquation(n.FUNC_ADD),d=li,g=li),Qt)switch(U){case Xn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fi:n.blendFunc(n.ONE,n.ONE);break;case El:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Xn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case El:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,b=null,R=null,w=null,C.set(0,0,0),x=0,p=U,y=Qt}return}ft=ft||ot,ct=ct||Y,Dt=Dt||j,(ot!==d||ft!==g)&&(n.blendEquationSeparate(Tt[ot],Tt[ft]),d=ot,g=ft),(Y!==v||j!==b||ct!==R||Dt!==w)&&(n.blendFuncSeparate(Kt[Y],Kt[j],Kt[ct],Kt[Dt]),v=Y,b=j,R=ct,w=Dt),(de.equals(C)===!1||Ee!==x)&&(n.blendColor(de.r,de.g,de.b,Ee),C.copy(de),x=Ee),p=U,y=!1}function Yt(U,ot){U.side===tn?dt(n.CULL_FACE):H(n.CULL_FACE);let Y=U.side===Fe;ot&&(Y=!Y),It(Y),U.blending===Xn&&U.transparent===!1?I(dn):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function Bt(U){U!==Ih?(H(n.CULL_FACE),U!==A&&(U===wl?n.cullFace(n.BACK):U===Lh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),A=U}function St(U){U!==D&&(F&&n.lineWidth(U),D=U)}function Ut(U,ot,Y){U?(H(n.POLYGON_OFFSET_FILL),(V!==ot||B!==Y)&&(n.polygonOffset(ot,Y),V=ot,B=Y)):dt(n.POLYGON_OFFSET_FILL)}function pt(U){U?H(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function P(U){U===void 0&&(U=n.TEXTURE0+Z-1),et!==U&&(n.activeTexture(U),et=U)}function E(U,ot,Y){Y===void 0&&(et===null?Y=n.TEXTURE0+Z-1:Y=et);let j=rt[Y];j===void 0&&(j={type:void 0,texture:void 0},rt[Y]=j),(j.type!==U||j.texture!==ot)&&(et!==Y&&(n.activeTexture(Y),et=Y),n.bindTexture(U,ot||K[U]),j.type=U,j.texture=ot)}function G(){let U=rt[et];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(U){Rt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Rt.copy(U))}function _t(U){J.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),J.copy(U))}function kt(U,ot){let Y=c.get(ot);Y===void 0&&(Y=new WeakMap,c.set(ot,Y));let j=Y.get(U);j===void 0&&(j=n.getUniformBlockIndex(ot,U.name),Y.set(U,j))}function zt(U,ot){let j=c.get(ot).get(U);l.get(ot)!==j&&(n.uniformBlockBinding(ot,j,U.__bindingPointIndex),l.set(ot,j))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},et=null,rt={},h={},f=new WeakMap,m=[],_=null,S=!1,p=null,d=null,v=null,b=null,g=null,R=null,w=null,C=new Ot(0,0,0),x=0,y=!1,M=null,A=null,D=null,V=null,B=null,Rt.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:dt,bindFramebuffer:lt,drawBuffers:Et,useProgram:Ht,setBlending:I,setMaterial:Yt,setFlipSided:It,setCullFace:Bt,setLineWidth:St,setPolygonOffset:Ut,setScissorTest:pt,activeTexture:P,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Ct,updateUBOMapping:kt,uniformBlockBinding:zt,texStorage2D:Xt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:bt,compressedTexSubImage2D:at,compressedTexSubImage3D:mt,scissor:Pt,viewport:_t,reset:ee}}function Sc(n,t,e,i){let s=_g(i);switch(e){case Nc:return n*t;case Oc:return n*t;case Bc:return n*t*2;case zc:return n*t/s.components*s.byteLength;case Qa:return n*t/s.components*s.byteLength;case Vc:return n*t*2/s.components*s.byteLength;case ja:return n*t*2/s.components*s.byteLength;case Fc:return n*t*3/s.components*s.byteLength;case nn:return n*t*4/s.components*s.byteLength;case tl:return n*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zo:case Ho:return Math.max(n,16)*Math.max(t,8)/4;case Bo:case Vo:return Math.max(n,8)*Math.max(t,8)/2;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ea:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case na:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ia:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sr:case ra:case oa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Hc:case aa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case la:case ca:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(n){switch(n){case rn:case Lc:return{byteLength:1,components:1};case fs:case Uc:case Ge:return{byteLength:2,components:1};case $a:case Ka:return{byteLength:2,components:4};case di:case Ja:case An:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,E){return m?new OffscreenCanvas(P,E):ar("canvas")}function S(P,E,G){let Q=1,tt=pt(P);if((tt.width>G||tt.height>G)&&(Q=G/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let $=Math.floor(Q*tt.width),bt=Math.floor(Q*tt.height);h===void 0&&(h=_($,bt));let at=E?_($,bt):h;return at.width=$,at.height=bt,at.getContext("2d").drawImage(P,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+bt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function p(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(P,E,G,Q,tt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=E;if(E===n.RED&&(G===n.FLOAT&&($=n.R32F),G===n.HALF_FLOAT&&($=n.R16F),G===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.R8UI),G===n.UNSIGNED_SHORT&&($=n.R16UI),G===n.UNSIGNED_INT&&($=n.R32UI),G===n.BYTE&&($=n.R8I),G===n.SHORT&&($=n.R16I),G===n.INT&&($=n.R32I)),E===n.RG&&(G===n.FLOAT&&($=n.RG32F),G===n.HALF_FLOAT&&($=n.RG16F),G===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RG8UI),G===n.UNSIGNED_SHORT&&($=n.RG16UI),G===n.UNSIGNED_INT&&($=n.RG32UI),G===n.BYTE&&($=n.RG8I),G===n.SHORT&&($=n.RG16I),G===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGB8UI),G===n.UNSIGNED_SHORT&&($=n.RGB16UI),G===n.UNSIGNED_INT&&($=n.RGB32UI),G===n.BYTE&&($=n.RGB8I),G===n.SHORT&&($=n.RGB16I),G===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGBA8UI),G===n.UNSIGNED_SHORT&&($=n.RGBA16UI),G===n.UNSIGNED_INT&&($=n.RGBA32UI),G===n.BYTE&&($=n.RGBA8I),G===n.SHORT&&($=n.RGBA16I),G===n.INT&&($=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),E===n.RGBA){let bt=tt?Pr:Wt.getTransfer(Q);G===n.FLOAT&&($=n.RGBA32F),G===n.HALF_FLOAT&&($=n.RGBA16F),G===n.UNSIGNED_BYTE&&($=bt===$t?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function g(P,E){let G;return P?E===null||E===di||E===qi?G=n.DEPTH24_STENCIL8:E===An?G=n.DEPTH32F_STENCIL8:E===fs&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===di||E===qi?G=n.DEPTH_COMPONENT24:E===An?G=n.DEPTH_COMPONENT32F:E===fs&&(G=n.DEPTH_COMPONENT16),G}function R(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){let E=P.target;E.removeEventListener("dispose",w),x(E),E.isVideoTexture&&u.delete(E)}function C(P){let E=P.target;E.removeEventListener("dispose",C),M(E)}function x(P){let E=i.get(P);if(E.__webglInit===void 0)return;let G=P.source,Q=f.get(G);if(Q){let tt=Q[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(P),Object.keys(Q).length===0&&f.delete(G)}i.remove(P)}function y(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let G=P.source,Q=f.get(G);delete Q[E.__cacheKey],o.memory.textures--}function M(P){let E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let tt=0;tt<E.__webglFramebuffer[Q].length;tt++)n.deleteFramebuffer(E.__webglFramebuffer[Q][tt]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=P.textures;for(let Q=0,tt=G.length;Q<tt;Q++){let $=i.get(G[Q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(P)}let A=0;function D(){A=0}function V(){let P=A;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function B(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Z(P,E){let G=i.get(P);if(P.isVideoTexture&&St(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,P,E);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function F(P,E){let G=i.get(P);if(P.version>0&&G.__version!==P.version){J(G,P,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function q(P,E){let G=i.get(P);if(P.version>0&&G.__version!==P.version){J(G,P,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function W(P,E){let G=i.get(P);if(P.version>0&&G.__version!==P.version){L(G,P,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let et={[Fo]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[Oo]:n.MIRRORED_REPEAT},rt={[sn]:n.NEAREST,[eu]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Jr]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},ut={[ou]:n.NEVER,[fu]:n.ALWAYS,[au]:n.LESS,[Gc]:n.LEQUAL,[lu]:n.EQUAL,[uu]:n.GEQUAL,[cu]:n.GREATER,[hu]:n.NOTEQUAL};function xt(P,E){if(E.type===An&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===Jr||E.magFilter===Ts||E.magFilter===ui||E.minFilter===fn||E.minFilter===Jr||E.minFilter===Ts||E.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,et[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,et[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,et[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,rt[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,rt[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ut[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==Ts&&E.minFilter!==ui||E.type===An&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));let Q=E.source,tt=f.get(Q);tt===void 0&&(tt={},f.set(Q,tt));let $=B(E);if($!==P.__cacheKey){tt[$]===void 0&&(tt[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[$].usedTimes++;let bt=tt[P.__cacheKey];bt!==void 0&&(tt[P.__cacheKey].usedTimes--,bt.usedTimes===0&&y(E)),P.__cacheKey=$,P.__webglTexture=tt[$].texture}return G}function J(P,E,G){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);let tt=Rt(P,E),$=E.source;e.bindTexture(Q,P.__webglTexture,n.TEXTURE0+G);let bt=i.get($);if($.version!==bt.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);let at=Wt.getPrimaries(Wt.workingColorSpace),mt=E.colorSpace===Gn?null:Wt.getPrimaries(E.colorSpace),Xt=E.colorSpace===Gn||at===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let nt=S(E.image,!1,s.maxTextureSize);nt=Ut(E,nt);let gt=r.convert(E.format,E.colorSpace),Ct=r.convert(E.type),Pt=b(E.internalFormat,gt,Ct,E.colorSpace,E.isVideoTexture);xt(Q,E);let _t,kt=E.mipmaps,zt=E.isVideoTexture!==!0,ee=bt.__version===void 0||tt===!0,U=$.dataReady,ot=R(E,nt);if(E.isDepthTexture)Pt=g(E.format===Yi,E.type),ee&&(zt?e.texStorage2D(n.TEXTURE_2D,1,Pt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Pt,nt.width,nt.height,0,gt,Ct,null));else if(E.isDataTexture)if(kt.length>0){zt&&ee&&e.texStorage2D(n.TEXTURE_2D,ot,Pt,kt[0].width,kt[0].height);for(let Y=0,j=kt.length;Y<j;Y++)_t=kt[Y],zt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(n.TEXTURE_2D,Y,Pt,_t.width,_t.height,0,gt,Ct,_t.data);E.generateMipmaps=!1}else zt?(ee&&e.texStorage2D(n.TEXTURE_2D,ot,Pt,nt.width,nt.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,Ct,nt.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,nt.width,nt.height,0,gt,Ct,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Pt,kt[0].width,kt[0].height,nt.depth);for(let Y=0,j=kt.length;Y<j;Y++)if(_t=kt[Y],E.format!==nn)if(gt!==null)if(zt){if(U)if(E.layerUpdates.size>0){let ft=Sc(_t.width,_t.height,E.format,E.type);for(let ct of E.layerUpdates){let Dt=_t.data.subarray(ct*ft/_t.data.BYTES_PER_ELEMENT,(ct+1)*ft/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ct,_t.width,_t.height,1,gt,Dt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Pt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,nt.depth,gt,Ct,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Pt,_t.width,_t.height,nt.depth,0,gt,Ct,_t.data)}else{zt&&ee&&e.texStorage2D(n.TEXTURE_2D,ot,Pt,kt[0].width,kt[0].height);for(let Y=0,j=kt.length;Y<j;Y++)_t=kt[Y],E.format!==nn?gt!==null?zt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(n.TEXTURE_2D,Y,Pt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(E.isDataArrayTexture)if(zt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Pt,nt.width,nt.height,nt.depth),U)if(E.layerUpdates.size>0){let Y=Sc(nt.width,nt.height,E.format,E.type);for(let j of E.layerUpdates){let ft=nt.data.subarray(j*Y/nt.data.BYTES_PER_ELEMENT,(j+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,gt,Ct,ft)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(E.isData3DTexture)zt?(ee&&e.texStorage3D(n.TEXTURE_3D,ot,Pt,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(E.isFramebufferTexture){if(ee)if(zt)e.texStorage2D(n.TEXTURE_2D,ot,Pt,nt.width,nt.height);else{let Y=nt.width,j=nt.height;for(let ft=0;ft<ot;ft++)e.texImage2D(n.TEXTURE_2D,ft,Pt,Y,j,0,gt,Ct,null),Y>>=1,j>>=1}}else if(kt.length>0){if(zt&&ee){let Y=pt(kt[0]);e.texStorage2D(n.TEXTURE_2D,ot,Pt,Y.width,Y.height)}for(let Y=0,j=kt.length;Y<j;Y++)_t=kt[Y],zt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,gt,Ct,_t):e.texImage2D(n.TEXTURE_2D,Y,Pt,gt,Ct,_t);E.generateMipmaps=!1}else if(zt){if(ee){let Y=pt(nt);e.texStorage2D(n.TEXTURE_2D,ot,Pt,Y.width,Y.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Ct,nt)}else e.texImage2D(n.TEXTURE_2D,0,Pt,gt,Ct,nt);p(E)&&d(Q),bt.__version=$.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function L(P,E,G){if(E.image.length!==6)return;let Q=Rt(P,E),tt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);let $=i.get(tt);if(tt.version!==$.__version||Q===!0){e.activeTexture(n.TEXTURE0+G);let bt=Wt.getPrimaries(Wt.workingColorSpace),at=E.colorSpace===Gn?null:Wt.getPrimaries(E.colorSpace),mt=E.colorSpace===Gn||bt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let j=0;j<6;j++)!Xt&&!nt?gt[j]=S(E.image[j],!0,s.maxCubemapSize):gt[j]=nt?E.image[j].image:E.image[j],gt[j]=Ut(E,gt[j]);let Ct=gt[0],Pt=r.convert(E.format,E.colorSpace),_t=r.convert(E.type),kt=b(E.internalFormat,Pt,_t,E.colorSpace),zt=E.isVideoTexture!==!0,ee=$.__version===void 0||Q===!0,U=tt.dataReady,ot=R(E,Ct);xt(n.TEXTURE_CUBE_MAP,E);let Y;if(Xt){zt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,kt,Ct.width,Ct.height);for(let j=0;j<6;j++){Y=gt[j].mipmaps;for(let ft=0;ft<Y.length;ft++){let ct=Y[ft];E.format!==nn?Pt!==null?zt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,ct.width,ct.height,Pt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,kt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,ct.width,ct.height,Pt,_t,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,kt,ct.width,ct.height,0,Pt,_t,ct.data)}}}else{if(Y=E.mipmaps,zt&&ee){Y.length>0&&ot++;let j=pt(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,kt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,gt[j].width,gt[j].height,Pt,_t,gt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,gt[j].width,gt[j].height,0,Pt,_t,gt[j].data);for(let ft=0;ft<Y.length;ft++){let Dt=Y[ft].image[j].image;zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,Dt.width,Dt.height,Pt,_t,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,kt,Dt.width,Dt.height,0,Pt,_t,Dt.data)}}else{zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,_t,gt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,Pt,_t,gt[j]);for(let ft=0;ft<Y.length;ft++){let ct=Y[ft];zt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,Pt,_t,ct.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,kt,Pt,_t,ct.image[j])}}}p(E)&&d(n.TEXTURE_CUBE_MAP),$.__version=tt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function K(P,E,G,Q,tt,$){let bt=r.convert(G.format,G.colorSpace),at=r.convert(G.type),mt=b(G.internalFormat,bt,at,G.colorSpace),Xt=i.get(E),nt=i.get(G);if(nt.__renderTarget=E,!Xt.__hasExternalTextures){let gt=Math.max(1,E.width>>$),Ct=Math.max(1,E.height>>$);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,mt,gt,Ct,E.depth,0,bt,at,null):e.texImage2D(tt,$,mt,gt,Ct,0,bt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Bt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,tt,nt.__webglTexture,0,It(E)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,tt,nt.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function H(P,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){let Q=E.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,$=g(E.stencilBuffer,tt),bt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=It(E);Bt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,$,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,P)}else{let Q=E.textures;for(let tt=0;tt<Q.length;tt++){let $=Q[tt],bt=r.convert($.format,$.colorSpace),at=r.convert($.type),mt=b($.internalFormat,bt,at,$.colorSpace),Xt=It(E);G&&Bt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,mt,E.width,E.height):Bt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt,mt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,mt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);let tt=Q.__webglTexture,$=It(E);if(E.depthTexture.format===zi)Bt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(E.depthTexture.format===Yi)Bt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function lt(P){let E=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let Q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){let tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",tt)};Q.addEventListener("dispose",tt),E.__depthDisposeCallback=tt}E.__boundDepthTexture=Q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");dt(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=n.createRenderbuffer(),H(E.__webglDepthbuffer[Q],P,!1);else{let tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),H(E.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(P,E,G){let Q=i.get(P);E!==void 0&&K(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&lt(P)}function Ht(P){let E=P.texture,G=i.get(P),Q=i.get(E);P.addEventListener("dispose",C);let tt=P.textures,$=P.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let mt=0;mt<E.mipmaps.length;mt++)G.__webglFramebuffer[at][mt]=n.createFramebuffer()}else G.__webglFramebuffer[at]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)G.__webglFramebuffer[at]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(bt)for(let at=0,mt=tt.length;at<mt;at++){let Xt=i.get(tt[at]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Bt(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){let mt=tt[at];G.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[at]);let Xt=r.convert(mt.format,mt.colorSpace),nt=r.convert(mt.type),gt=b(mt.internalFormat,Xt,nt,mt.colorSpace,P.isXRRenderTarget===!0),Ct=It(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,gt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,G.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),H(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),xt(n.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)K(G.__webglFramebuffer[at][mt],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,mt);else K(G.__webglFramebuffer[at],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(E)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let at=0,mt=tt.length;at<mt;at++){let Xt=tt[at],nt=i.get(Xt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),xt(n.TEXTURE_2D,Xt),K(G.__webglFramebuffer,P,Xt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),p(Xt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),xt(at,E),E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)K(G.__webglFramebuffer[mt],P,E,n.COLOR_ATTACHMENT0,at,mt);else K(G.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,at,0);p(E)&&d(at),e.unbindTexture()}P.depthBuffer&&lt(P)}function Tt(P){let E=P.textures;for(let G=0,Q=E.length;G<Q;G++){let tt=E[G];if(p(tt)){let $=v(P),bt=i.get(tt).__webglTexture;e.bindTexture($,bt),d($),e.unbindTexture()}}}let Kt=[],I=[];function Yt(P){if(P.samples>0){if(Bt(P)===!1){let E=P.textures,G=P.width,Q=P.height,tt=n.COLOR_BUFFER_BIT,$=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(P),at=E.length>1;if(at)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);let Xt=i.get(E[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,tt,n.NEAREST),l===!0&&(Kt.length=0,I.length=0,Kt.push(n.COLOR_ATTACHMENT0+mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Kt.push($),I.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);let Xt=i.get(E[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function It(P){return Math.min(s.maxSamples,P.samples)}function Bt(P){let E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function St(P){let E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Ut(P,E){let G=P.colorSpace,Q=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==ji&&G!==Gn&&(Wt.getTransfer(G)===$t?(Q!==nn||tt!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Et,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Bt}function vg(n,t){function e(i,s=Gn){let r,o=Wt.getTransfer(s);if(i===rn)return n.UNSIGNED_BYTE;if(i===$a)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lc)return n.BYTE;if(i===Uc)return n.SHORT;if(i===fs)return n.UNSIGNED_SHORT;if(i===Ja)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===Ge)return n.HALF_FLOAT;if(i===Nc)return n.ALPHA;if(i===Fc)return n.RGB;if(i===nn)return n.RGBA;if(i===Oc)return n.LUMINANCE;if(i===Bc)return n.LUMINANCE_ALPHA;if(i===zi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Qa)return n.RED_INTEGER;if(i===Vc)return n.RG;if(i===ja)return n.RG_INTEGER;if(i===tl)return n.RGBA_INTEGER;if(i===tr||i===er||i===nr||i===ir)if(o===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bo||i===zo||i===Vo||i===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go||i===Wo||i===ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Go||i===Wo)return o===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ko)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===$o||i===Ko||i===Qo||i===jo||i===ta||i===ea||i===na||i===ia||i===sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$o)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ko)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ta)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ea)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===na)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ia)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sr||i===ra||i===oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sr)return o===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hc||i===aa||i===la||i===ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===sr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ta=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},kn=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,i),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new kn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
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

}`,Aa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new le({vertexShader:Mg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ca=class extends Zn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null,S=new Aa,p=e.getContextAttributes(),d=null,v=null,b=[],g=[],R=new At,w=null,C=new Le;C.viewport=new te;let x=new Le;x.viewport=new te;let y=[C,x],M=new Ta,A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let L=b[J];return L===void 0&&(L=new us,b[J]=L),L.getTargetRaySpace()},this.getControllerGrip=function(J){let L=b[J];return L===void 0&&(L=new us,b[J]=L),L.getGripSpace()},this.getHand=function(J){let L=b[J];return L===void 0&&(L=new us,b[J]=L),L.getHandSpace()};function V(J){let L=g.indexOf(J.inputSource);if(L===-1)return;let K=b[L];K!==void 0&&(K.update(J.inputSource,J.frame,c||o),K.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<b.length;J++){let L=g[J];L!==null&&(g[J]=null,b[J].disconnect(L))}A=null,D=null,S.reset(),t.setRenderTarget(d),m=null,f=null,h=null,s=null,v=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let L={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Me(m.framebufferWidth,m.framebufferHeight,{format:nn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let L=null,K=null,H=null;p.depth&&(H=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=p.stencil?Yi:zi,K=p.stencil?qi:di);let dt={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Me(f.textureWidth,f.textureHeight,{format:nn,type:rn,depthTexture:new _r(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Z(J){for(let L=0;L<J.removed.length;L++){let K=J.removed[L],H=g.indexOf(K);H>=0&&(g[H]=null,b[H].disconnect(K))}for(let L=0;L<J.added.length;L++){let K=J.added[L],H=g.indexOf(K);if(H===-1){for(let lt=0;lt<b.length;lt++)if(lt>=g.length){g.push(K),H=lt;break}else if(g[lt]===null){g[lt]=K,H=lt;break}if(H===-1)break}let dt=b[H];dt&&dt.connect(K)}}let F=new N,q=new N;function W(J,L,K){F.setFromMatrixPosition(L.matrixWorld),q.setFromMatrixPosition(K.matrixWorld);let H=F.distanceTo(q),dt=L.projectionMatrix.elements,lt=K.projectionMatrix.elements,Et=dt[14]/(dt[10]-1),Ht=dt[14]/(dt[10]+1),Tt=(dt[9]+1)/dt[5],Kt=(dt[9]-1)/dt[5],I=(dt[8]-1)/dt[0],Yt=(lt[8]+1)/lt[0],It=Et*I,Bt=Et*Yt,St=H/(-I+Yt),Ut=St*-I;if(L.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(St),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),dt[10]===-1)J.projectionMatrix.copy(L.projectionMatrix),J.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let pt=Et+St,P=Ht+St,E=It-Ut,G=Bt+(H-Ut),Q=Tt*Ht/P*pt,tt=Kt*Ht/P*pt;J.projectionMatrix.makePerspective(E,G,Q,tt,pt,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function et(J,L){L===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(L.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let L=J.near,K=J.far;S.texture!==null&&(S.depthNear>0&&(L=S.depthNear),S.depthFar>0&&(K=S.depthFar)),M.near=x.near=C.near=L,M.far=x.far=C.far=K,(A!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,D=M.far),C.layers.mask=J.layers.mask|2,x.layers.mask=J.layers.mask|4,M.layers.mask=C.layers.mask|x.layers.mask;let H=J.parent,dt=M.cameras;et(M,H);for(let lt=0;lt<dt.length;lt++)et(dt[lt],H);dt.length===2?W(M,C,x):M.projectionMatrix.copy(C.projectionMatrix),rt(J,M,H)};function rt(J,L,K){K===null?J.matrix.copy(L.matrixWorld):(J.matrix.copy(K.matrixWorld),J.matrix.invert(),J.matrix.multiply(L.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(L.projectionMatrix),J.projectionMatrixInverse.copy(L.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ds*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let ut=null;function xt(J,L){if(u=L.getViewerPose(c||o),_=L,u!==null){let K=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let H=!1;K.length!==M.cameras.length&&(M.cameras.length=0,H=!0);for(let lt=0;lt<K.length;lt++){let Et=K[lt],Ht=null;if(m!==null)Ht=m.getViewport(Et);else{let Kt=h.getViewSubImage(f,Et);Ht=Kt.viewport,lt===0&&(t.setRenderTargetTextures(v,Kt.colorTexture,f.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(v))}let Tt=y[lt];Tt===void 0&&(Tt=new Le,Tt.layers.enable(lt),Tt.viewport=new te,y[lt]=Tt),Tt.matrix.fromArray(Et.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Et.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),lt===0&&(M.matrix.copy(Tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),H===!0&&M.cameras.push(Tt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")){let lt=h.getDepthInformation(K[0]);lt&&lt.isValid&&lt.texture&&S.init(t,lt,s.renderState)}}for(let K=0;K<b.length;K++){let H=g[K],dt=b[K];H!==null&&dt!==void 0&&dt.update(H,L,c||o)}ut&&ut(J,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),_=null}let Rt=new Yc;Rt.setAnimationLoop(xt),this.setAnimationLoop=function(J){ut=J},this.dispose=function(){}}},oi=new Ln,bg=new ae;function wg(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,qc(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,v,b,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,g)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Fe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Fe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v=t.get(d),b=v.envMap,g=v.envMapRotation;b&&(p.envMap.value=b,oi.copy(g),oi.x*=-1,oi.y*=-1,oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),p.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(oi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=b*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Fe&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){let v=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Eg(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let g=b.program;i.uniformBlockBinding(v,g)}function c(v,b){let g=s[v.id];g===void 0&&(_(v),g=u(v),s[v.id]=g,v.addEventListener("dispose",p));let R=b.program;i.updateUBOMapping(v,R);let w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function u(v){let b=h();v.__bindingPointIndex=b;let g=n.createBuffer(),R=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,g),g}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=s[v.id],g=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,C=g.length;w<C;w++){let x=Array.isArray(g[w])?g[w]:[g[w]];for(let y=0,M=x.length;y<M;y++){let A=x[y];if(m(A,w,y,R)===!0){let D=A.__offset,V=Array.isArray(A.value)?A.value:[A.value],B=0;for(let Z=0;Z<V.length;Z++){let F=V[Z],q=S(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,D+B,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,b,g,R){let w=v.value,C=b+"_"+g;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{let x=R[C];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return R[C]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function _(v){let b=v.uniforms,g=0,R=16;for(let C=0,x=b.length;C<x;C++){let y=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,A=y.length;M<A;M++){let D=y[M],V=Array.isArray(D.value)?D.value:[D.value];for(let B=0,Z=V.length;B<Z;B++){let F=V[B],q=S(F),W=g%R,et=W%q.boundary,rt=W+et;g+=et,rt!==0&&R-rt<q.storage&&(g+=R-rt),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=q.storage}}}let w=g%R;return w>0&&(g+=R-w),v.__size=g,v.__cache={},this}function S(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){let b=v.target;b.removeEventListener("dispose",p);let g=o.indexOf(b.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var xr=class{constructor(t={}){let{canvas:e=Ru(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let _=new Uint32Array(4),S=new Int32Array(4),p=null,d=null,v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=qn,this.toneMappingExposure=1;let g=this,R=!1,w=0,C=0,x=null,y=-1,M=null,A=new te,D=new te,V=null,B=new Ot(0),Z=0,F=e.width,q=e.height,W=1,et=null,rt=null,ut=new te(0,0,F,q),xt=new te(0,0,F,q),Rt=!1,J=new mr,L=!1,K=!1,H=new ae,dt=new ae,lt=new N,Et=new te,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Kt(){return x===null?W:1}let I=i;function Yt(T,O){return e.getContext(T,O)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){let O="webgl2";if(I=Yt(O,T),I===null)throw Yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let It,Bt,St,Ut,pt,P,E,G,Q,tt,$,bt,at,mt,Xt,nt,gt,Ct,Pt,_t,kt,zt,ee,U;function ot(){It=new Hp(I),It.init(),zt=new vg(I,It),Bt=new Np(I,It,t,zt),St=new gg(I,It),Bt.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),Ut=new kp(I),pt=new ig,P=new xg(I,It,St,pt,Bt,zt,Ut),E=new Op(g),G=new Vp(g),Q=new $u(I),ee=new Up(I,Q),tt=new Gp(I,Q,Ut,ee),$=new qp(I,tt,Q,Ut),Pt=new Xp(I,Bt,P),nt=new Fp(pt),bt=new ng(g,E,G,It,Bt,ee,nt),at=new wg(g,pt),mt=new rg,Xt=new ug(It),Ct=new Lp(g,E,G,St,$,m,l),gt=new pg(g,$,Bt),U=new Eg(I,Ut,Bt,St),_t=new Dp(I,It,Ut),kt=new Wp(I,It,Ut),Ut.programs=bt.programs,g.capabilities=Bt,g.extensions=It,g.properties=pt,g.renderLists=mt,g.shadowMap=gt,g.state=St,g.info=Ut}ot();let Y=new Ca(g,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=It.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=It.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(F,q,!1))},this.getSize=function(T){return T.set(F,q)},this.setSize=function(T,O,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,q=O,e.width=Math.floor(T*W),e.height=Math.floor(O*W),k===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(F*W,q*W).floor()},this.setDrawingBufferSize=function(T,O,k){F=T,q=O,W=k,e.width=Math.floor(T*k),e.height=Math.floor(O*k),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(ut)},this.setViewport=function(T,O,k,X){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,O,k,X),St.viewport(A.copy(ut).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(xt)},this.setScissor=function(T,O,k,X){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,O,k,X),St.scissor(D.copy(xt).multiplyScalar(W).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(T){St.setScissorTest(Rt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(T=!0,O=!0,k=!0){let X=0;if(T){let z=!1;if(x!==null){let it=x.texture.format;z=it===tl||it===ja||it===Qa}if(z){let it=x.texture.type,ht=it===rn||it===di||it===fs||it===qi||it===$a||it===Ka,vt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Lt=vt.r,Nt=vt.g,Mt=vt.b;ht?(_[0]=Lt,_[1]=Nt,_[2]=Mt,_[3]=yt,I.clearBufferuiv(I.COLOR,0,_)):(S[0]=Lt,S[1]=Nt,S[2]=Mt,S[3]=yt,I.clearBufferiv(I.COLOR,0,S))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),k&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),mt.dispose(),Xt.dispose(),pt.dispose(),E.dispose(),G.dispose(),$.dispose(),ee.dispose(),U.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",gl),Y.removeEventListener("sessionend",_l),ti.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=Ut.autoReset,O=gt.enabled,k=gt.autoUpdate,X=gt.needsUpdate,z=gt.type;ot(),Ut.autoReset=T,gt.enabled=O,gt.autoUpdate=k,gt.needsUpdate=X,gt.type=z}function ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dt(T){let O=T.target;O.removeEventListener("dispose",Dt),de(O)}function de(T){Ee(T),pt.remove(T)}function Ee(T){let O=pt.get(T).programs;O!==void 0&&(O.forEach(function(k){bt.releaseProgram(k)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,k,X,z,it){O===null&&(O=Ht);let ht=z.isMesh&&z.matrixWorld.determinant()<0,vt=Ch(T,O,k,X,z);St.setMaterial(X,ht);let yt=k.index,Lt=1;if(X.wireframe===!0){if(yt=tt.getWireframeAttribute(k),yt===void 0)return;Lt=2}let Nt=k.drawRange,Mt=k.attributes.position,qt=Nt.start*Lt,ne=(Nt.start+Nt.count)*Lt;it!==null&&(qt=Math.max(qt,it.start*Lt),ne=Math.min(ne,(it.start+it.count)*Lt)),yt!==null?(qt=Math.max(qt,0),ne=Math.min(ne,yt.count)):Mt!=null&&(qt=Math.max(qt,0),ne=Math.min(ne,Mt.count));let ie=ne-qt;if(ie<0||ie===1/0)return;ee.setup(z,X,vt,k,yt);let De,Zt=_t;if(yt!==null&&(De=Q.get(yt),Zt=kt,Zt.setIndex(De)),z.isMesh)X.wireframe===!0?(St.setLineWidth(X.wireframeLinewidth*Kt()),Zt.setMode(I.LINES)):Zt.setMode(I.TRIANGLES);else if(z.isLine){let wt=X.linewidth;wt===void 0&&(wt=1),St.setLineWidth(wt*Kt()),z.isLineSegments?Zt.setMode(I.LINES):z.isLineLoop?Zt.setMode(I.LINE_LOOP):Zt.setMode(I.LINE_STRIP)}else z.isPoints?Zt.setMode(I.POINTS):z.isSprite&&Zt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Zt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Zt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let wt=z._multiDrawStarts,yn=z._multiDrawCounts,Jt=z._multiDrawCount,Je=yt?Q.get(yt).bytesPerElement:1,Si=pt.get(X).currentProgram.getUniforms();for(let Oe=0;Oe<Jt;Oe++)Si.setValue(I,"_gl_DrawID",Oe),Zt.render(wt[Oe]/Je,yn[Oe])}else if(z.isInstancedMesh)Zt.renderInstances(qt,ie,z.count);else if(k.isInstancedBufferGeometry){let wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,yn=Math.min(k.instanceCount,wt);Zt.renderInstances(qt,ie,yn)}else Zt.render(qt,ie)};function Qt(T,O,k){T.transparent===!0&&T.side===tn&&T.forceSinglePass===!1?(T.side=Fe,T.needsUpdate=!0,Es(T,O,k),T.side=Yn,T.needsUpdate=!0,Es(T,O,k),T.side=tn):Es(T,O,k)}this.compile=function(T,O,k=null){k===null&&(k=T),d=Xt.get(k),d.init(O),b.push(d),k.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),T!==k&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let X=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let it=z.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){let vt=it[ht];Qt(vt,k,z),X.add(vt)}else Qt(it,k,z),X.add(it)}),b.pop(),d=null,X},this.compileAsync=function(T,O,k=null){let X=this.compile(T,O,k);return new Promise(z=>{function it(){if(X.forEach(function(ht){pt.get(ht).currentProgram.isReady()&&X.delete(ht)}),X.size===0){z(T);return}setTimeout(it,10)}It.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ze=null;function vn(T){Ze&&Ze(T)}function gl(){ti.stop()}function _l(){ti.start()}let ti=new Yc;ti.setAnimationLoop(vn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(T){Ze=T,Y.setAnimationLoop(T),T===null?ti.stop():ti.start()},Y.addEventListener("sessionstart",gl),Y.addEventListener("sessionend",_l),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,O,x),d=Xt.get(T,b.length),d.init(O),b.push(d),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(dt),K=this.localClippingEnabled,L=nt.init(this.clippingPlanes,K),p=mt.get(T,v.length),p.init(),v.push(p),Y.enabled===!0&&Y.isPresenting===!0){let it=g.xr.getDepthSensingMesh();it!==null&&Zr(it,O,-1/0,g.sortObjects)}Zr(T,O,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(et,rt),Tt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Tt&&Ct.addToRenderList(p,T),this.info.render.frame++,L===!0&&nt.beginShadows();let k=d.state.shadowsArray;gt.render(k,T,O),L===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=p.opaque,z=p.transmissive;if(d.setupLights(),O.isArrayCamera){let it=O.cameras;if(z.length>0)for(let ht=0,vt=it.length;ht<vt;ht++){let yt=it[ht];vl(X,z,T,yt)}Tt&&Ct.render(T);for(let ht=0,vt=it.length;ht<vt;ht++){let yt=it[ht];xl(p,T,yt,yt.viewport)}}else z.length>0&&vl(X,z,T,O),Tt&&Ct.render(T),xl(p,T,O);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(g,T,O),ee.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],L===!0&&nt.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Zr(T,O,k,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){X&&Et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);let ht=$.update(T),vt=T.material;vt.visible&&p.push(T,ht,vt,k,Et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){let ht=$.update(T),vt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Et.copy(T.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Et.copy(ht.boundingSphere.center)),Et.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(vt)){let yt=ht.groups;for(let Lt=0,Nt=yt.length;Lt<Nt;Lt++){let Mt=yt[Lt],qt=vt[Mt.materialIndex];qt&&qt.visible&&p.push(T,ht,qt,k,Et.z,Mt)}}else vt.visible&&p.push(T,ht,vt,k,Et.z,null)}}let it=T.children;for(let ht=0,vt=it.length;ht<vt;ht++)Zr(it[ht],O,k,X)}function xl(T,O,k,X){let z=T.opaque,it=T.transmissive,ht=T.transparent;d.setupLightsView(k),L===!0&&nt.setGlobalState(g.clippingPlanes,k),X&&St.viewport(A.copy(X)),z.length>0&&ws(z,O,k),it.length>0&&ws(it,O,k),ht.length>0&&ws(ht,O,k),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function vl(T,O,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Me(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Ge:rn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let it=d.state.transmissionRenderTarget[X.id],ht=X.viewport||A;it.setSize(ht.z,ht.w);let vt=g.getRenderTarget();g.setRenderTarget(it),g.getClearColor(B),Z=g.getClearAlpha(),Z<1&&g.setClearColor(16777215,.5),g.clear(),Tt&&Ct.render(k);let yt=g.toneMapping;g.toneMapping=qn;let Lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),L===!0&&nt.setGlobalState(g.clippingPlanes,X),ws(T,k,X),P.updateMultisampleRenderTarget(it),P.updateRenderTargetMipmap(it),It.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,qt=O.length;Mt<qt;Mt++){let ne=O[Mt],ie=ne.object,De=ne.geometry,Zt=ne.material,wt=ne.group;if(Zt.side===tn&&ie.layers.test(X.layers)){let yn=Zt.side;Zt.side=Fe,Zt.needsUpdate=!0,yl(ie,k,X,De,Zt,wt),Zt.side=yn,Zt.needsUpdate=!0,Nt=!0}}Nt===!0&&(P.updateMultisampleRenderTarget(it),P.updateRenderTargetMipmap(it))}g.setRenderTarget(vt),g.setClearColor(B,Z),Lt!==void 0&&(X.viewport=Lt),g.toneMapping=yt}function ws(T,O,k){let X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,it=T.length;z<it;z++){let ht=T[z],vt=ht.object,yt=ht.geometry,Lt=X===null?ht.material:X,Nt=ht.group;vt.layers.test(k.layers)&&yl(vt,O,k,yt,Lt,Nt)}}function yl(T,O,k,X,z,it){T.onBeforeRender(g,O,k,X,z,it),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(g,O,k,X,T,it),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=Fe,z.needsUpdate=!0,g.renderBufferDirect(k,O,X,z,T,it),z.side=Yn,z.needsUpdate=!0,g.renderBufferDirect(k,O,X,z,T,it),z.side=tn):g.renderBufferDirect(k,O,X,z,T,it),T.onAfterRender(g,O,k,X,z,it)}function Es(T,O,k){O.isScene!==!0&&(O=Ht);let X=pt.get(T),z=d.state.lights,it=d.state.shadowsArray,ht=z.state.version,vt=bt.getParameters(T,z.state,it,O,k),yt=bt.getProgramCacheKey(vt),Lt=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Lt===void 0&&(T.addEventListener("dispose",Dt),Lt=new Map,X.programs=Lt);let Nt=Lt.get(yt);if(Nt!==void 0){if(X.currentProgram===Nt&&X.lightsStateVersion===ht)return Sl(T,vt),Nt}else vt.uniforms=bt.getUniforms(T),T.onBeforeCompile(vt,g),Nt=bt.acquireProgram(vt,yt),Lt.set(yt,Nt),X.uniforms=vt.uniforms;let Mt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),Sl(T,vt),X.needsLights=Ph(T),X.lightsStateVersion=ht,X.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.directionalShadowMap.value=z.state.directionalShadowMap,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotShadowMap.value=z.state.spotShadowMap,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMap.value=z.state.pointShadowMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Nt,X.uniformsList=null,Nt}function Ml(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Gi.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Sl(T,O){let k=pt.get(T);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Ch(T,O,k,X,z){O.isScene!==!0&&(O=Ht),P.resetTextureUnits();let it=O.fog,ht=X.isMeshStandardMaterial?O.environment:null,vt=x===null?g.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:ji,yt=(X.isMeshStandardMaterial?G:E).get(X.envMap||ht),Lt=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Mt=!!k.morphAttributes.position,qt=!!k.morphAttributes.normal,ne=!!k.morphAttributes.color,ie=qn;X.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ie=g.toneMapping);let De=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Zt=De!==void 0?De.length:0,wt=pt.get(X),yn=d.state.lights;if(L===!0&&(K===!0||T!==M)){let Xe=T===M&&X.id===y;nt.setState(X,T,Xe)}let Jt=!1;X.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==yn.state.version||wt.outputColorSpace!==vt||z.isBatchedMesh&&wt.batching===!1||!z.isBatchedMesh&&wt.batching===!0||z.isBatchedMesh&&wt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&wt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&wt.instancing===!1||!z.isInstancedMesh&&wt.instancing===!0||z.isSkinnedMesh&&wt.skinning===!1||!z.isSkinnedMesh&&wt.skinning===!0||z.isInstancedMesh&&wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&wt.instancingMorph===!1&&z.morphTexture!==null||wt.envMap!==yt||X.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==nt.numPlanes||wt.numIntersection!==nt.numIntersection)||wt.vertexAlphas!==Lt||wt.vertexTangents!==Nt||wt.morphTargets!==Mt||wt.morphNormals!==qt||wt.morphColors!==ne||wt.toneMapping!==ie||wt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,wt.__version=X.version);let Je=wt.currentProgram;Jt===!0&&(Je=Es(X,O,z));let Si=!1,Oe=!1,ns=!1,se=Je.getUniforms(),un=wt.uniforms;if(St.useProgram(Je.program)&&(Si=!0,Oe=!0,ns=!0),X.id!==y&&(y=X.id,Oe=!0),Si||M!==T){St.buffers.depth.getReversed()?(H.copy(T.projectionMatrix),Iu(H),Lu(H),se.setValue(I,"projectionMatrix",H)):se.setValue(I,"projectionMatrix",T.projectionMatrix),se.setValue(I,"viewMatrix",T.matrixWorldInverse);let Dn=se.map.cameraPosition;Dn!==void 0&&Dn.setValue(I,lt.setFromMatrixPosition(T.matrixWorld)),Bt.logarithmicDepthBuffer&&se.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&se.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Oe=!0,ns=!0)}if(z.isSkinnedMesh){se.setOptional(I,z,"bindMatrix"),se.setOptional(I,z,"bindMatrixInverse");let Xe=z.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),se.setValue(I,"boneTexture",Xe.boneTexture,P))}z.isBatchedMesh&&(se.setOptional(I,z,"batchingTexture"),se.setValue(I,"batchingTexture",z._matricesTexture,P),se.setOptional(I,z,"batchingIdTexture"),se.setValue(I,"batchingIdTexture",z._indirectTexture,P),se.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&se.setValue(I,"batchingColorTexture",z._colorsTexture,P));let is=k.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&Pt.update(z,k,Je),(Oe||wt.receiveShadow!==z.receiveShadow)&&(wt.receiveShadow=z.receiveShadow,se.setValue(I,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(un.envMap.value=yt,un.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(un.envMapIntensity.value=O.environmentIntensity),Oe&&(se.setValue(I,"toneMappingExposure",g.toneMappingExposure),wt.needsLights&&Rh(un,ns),it&&X.fog===!0&&at.refreshFogUniforms(un,it),at.refreshMaterialUniforms(un,X,W,q,d.state.transmissionRenderTarget[T.id]),Gi.upload(I,Ml(wt),un,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Gi.upload(I,Ml(wt),un,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&se.setValue(I,"center",z.center),se.setValue(I,"modelViewMatrix",z.modelViewMatrix),se.setValue(I,"normalMatrix",z.normalMatrix),se.setValue(I,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Xe=X.uniformsGroups;for(let Dn=0,Nn=Xe.length;Dn<Nn;Dn++){let bl=Xe[Dn];U.update(bl,Je),U.bind(bl,Je)}}return Je}function Rh(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ph(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,O,k){pt.get(T.texture).__webglTexture=O,pt.get(T.depthTexture).__webglTexture=k;let X=pt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=k===void 0,X.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){let k=pt.get(T);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,k=0){x=T,w=O,C=k;let X=!0,z=null,it=!1,ht=!1;if(T){let yt=pt.get(T);if(yt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(yt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(yt.__hasExternalTextures)P.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Mt=T.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&pt.has(Mt)&&(T.width!==Mt.image.width||T.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}let Lt=T.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);let Nt=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?z=Nt[O][k]:z=Nt[O],it=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?z=pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?z=Nt[k]:z=Nt,A.copy(T.viewport),D.copy(T.scissor),V=T.scissorTest}else A.copy(ut).multiplyScalar(W).floor(),D.copy(xt).multiplyScalar(W).floor(),V=Rt;if(St.bindFramebuffer(I.FRAMEBUFFER,z)&&X&&St.drawBuffers(T,z),St.viewport(A),St.scissor(D),St.setScissorTest(V),it){let yt=pt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,k)}else if(ht){let yt=pt.get(T.texture),Lt=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,k||0,Lt)}y=-1},this.readRenderTargetPixels=function(T,O,k,X,z,it,ht){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){St.bindFramebuffer(I.FRAMEBUFFER,vt);try{let yt=T.texture,Lt=yt.format,Nt=yt.type;if(!Bt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&k>=0&&k<=T.height-z&&I.readPixels(O,k,X,z,zt.convert(Lt),zt.convert(Nt),it)}finally{let yt=x!==null?pt.get(x).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(T,O,k,X,z,it,ht){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){let yt=T.texture,Lt=yt.format,Nt=yt.type;if(!Bt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-X&&k>=0&&k<=T.height-z){St.bindFramebuffer(I.FRAMEBUFFER,vt);let Mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.bufferData(I.PIXEL_PACK_BUFFER,it.byteLength,I.STREAM_READ),I.readPixels(O,k,X,z,zt.convert(Lt),zt.convert(Nt),0);let qt=x!==null?pt.get(x).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,qt);let ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Pu(I,ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,it),I.deleteBuffer(Mt),I.deleteSync(ne),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,k=0){T.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);let X=Math.pow(2,-k),z=Math.floor(T.image.width*X),it=Math.floor(T.image.height*X),ht=O!==null?O.x:0,vt=O!==null?O.y:0;P.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,ht,vt,z,it),St.unbindTexture()},this.copyTextureToTexture=function(T,O,k=null,X=null,z=0){T.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],O=arguments[2],z=arguments[3]||0,k=null);let it,ht,vt,yt,Lt,Nt,Mt,qt,ne,ie=T.isCompressedTexture?T.mipmaps[z]:T.image;k!==null?(it=k.max.x-k.min.x,ht=k.max.y-k.min.y,vt=k.isBox3?k.max.z-k.min.z:1,yt=k.min.x,Lt=k.min.y,Nt=k.isBox3?k.min.z:0):(it=ie.width,ht=ie.height,vt=ie.depth||1,yt=0,Lt=0,Nt=0),X!==null?(Mt=X.x,qt=X.y,ne=X.z):(Mt=0,qt=0,ne=0);let De=zt.convert(O.format),Zt=zt.convert(O.type),wt;O.isData3DTexture?(P.setTexture3D(O,0),wt=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),wt=I.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let yn=I.getParameter(I.UNPACK_ROW_LENGTH),Jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Je=I.getParameter(I.UNPACK_SKIP_PIXELS),Si=I.getParameter(I.UNPACK_SKIP_ROWS),Oe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt);let ns=T.isDataArrayTexture||T.isData3DTexture,se=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let un=pt.get(T),is=pt.get(O),Xe=pt.get(un.__renderTarget),Dn=pt.get(is.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,Xe.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Nn=0;Nn<vt;Nn++)ns&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.get(T).__webglTexture,z,Nt+Nn),T.isDepthTexture?(se&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.get(O).__webglTexture,z,ne+Nn),I.blitFramebuffer(yt,Lt,it,ht,Mt,qt,it,ht,I.DEPTH_BUFFER_BIT,I.NEAREST)):se?I.copyTexSubImage3D(wt,z,Mt,qt,ne+Nn,yt,Lt,it,ht):I.copyTexSubImage2D(wt,z,Mt,qt,ne+Nn,yt,Lt,it,ht);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else se?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(wt,z,Mt,qt,ne,it,ht,vt,De,Zt,ie.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,z,Mt,qt,ne,it,ht,vt,De,ie.data):I.texSubImage3D(wt,z,Mt,qt,ne,it,ht,vt,De,Zt,ie):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,Mt,qt,it,ht,De,Zt,ie.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,Mt,qt,ie.width,ie.height,De,ie.data):I.texSubImage2D(I.TEXTURE_2D,z,Mt,qt,it,ht,De,Zt,ie);I.pixelStorei(I.UNPACK_ROW_LENGTH,yn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Si),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oe),z===0&&O.generateMipmaps&&I.generateMipmap(wt),St.unbindTexture()},this.copyTextureToTexture3D=function(T,O,k=null,X=null,z=0){return T.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,X=arguments[1]||null,T=arguments[2],O=arguments[3],z=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,k,X,z)},this.initRenderTarget=function(T){pt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){w=0,C=0,x=null,St.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var vr=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ra=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pe=new N,pn=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=en(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=jt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var yr=class extends He{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pa=class n extends Re{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new N,g=new N,R=new N;for(let w=0;w<e.length;w+=3)m(e[w+0],b),m(e[w+1],g),m(e[w+2],R),l(b,g,R,v)}function l(v,b,g,R){let w=R+1,C=[];for(let x=0;x<=w;x++){C[x]=[];let y=v.clone().lerp(g,x/w),M=b.clone().lerp(g,x/w),A=w-x;for(let D=0;D<=A;D++)D===0&&x===w?C[x][D]=y:C[x][D]=y.clone().lerp(M,D/A)}for(let x=0;x<w;x++)for(let y=0;y<2*(w-x)-1;y++){let M=Math.floor(y/2);y%2===0?(f(C[x][M+1]),f(C[x+1][M]),f(C[x][M])):(f(C[x][M+1]),f(C[x+1][M+1]),f(C[x+1][M]))}}function c(v){let b=new N;for(let g=0;g<r.length;g+=3)b.x=r[g+0],b.y=r[g+1],b.z=r[g+2],b.normalize().multiplyScalar(v),r[g+0]=b.x,r[g+1]=b.y,r[g+2]=b.z}function u(){let v=new N;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let g=p(v)/2/Math.PI+.5,R=d(v)/Math.PI+.5;o.push(g,1-R)}_(),h()}function h(){for(let v=0;v<o.length;v+=6){let b=o[v+0],g=o[v+2],R=o[v+4],w=Math.max(b,g,R),C=Math.min(b,g,R);w>.9&&C<.1&&(b<.2&&(o[v+0]+=1),g<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function m(v,b){let g=v*3;b.x=t[g+0],b.y=t[g+1],b.z=t[g+2]}function _(){let v=new N,b=new N,g=new N,R=new N,w=new At,C=new At,x=new At;for(let y=0,M=0;y<r.length;y+=9,M+=6){v.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),g.set(r[y+6],r[y+7],r[y+8]),w.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),x.set(o[M+4],o[M+5]),R.copy(v).add(b).add(g).divideScalar(3);let A=p(R);S(w,M+0,v,A),S(C,M+2,b,A),S(x,M+4,g,A)}}function S(v,b,g,R){R<0&&v.x===1&&(o[b]=v.x-1),g.x===0&&g.z===0&&(o[b]=R/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Ys=new N,Zs=new N,wo=new N,Js=new Wn,Mr=class extends Re{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Vi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:S,b:p,c:d}=Js;if(S.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Js.getNormal(wo),h[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){let b=(v+1)%3,g=h[v],R=h[b],w=Js[u[v]],C=Js[u[b]],x=`${g}_${R}`,y=`${R}_${g}`;y in f&&f[y]?(wo.dot(f[y].normal)<=r&&(m.push(w.x,w.y,w.z),m.push(C.x,C.y,C.z)),f[y]=null):x in f||(f[x]={index0:c[v],index1:c[b],normal:wo.clone()})}}for(let _ in f)if(f[_]){let{index0:S,index1:p}=f[_];Ys.fromBufferAttribute(a,S),Zs.fromBufferAttribute(a,p),m.push(Ys.x,Ys.y,Ys.z),m.push(Zs.x,Zs.y,Zs.z)}this.setAttribute("position",new ue(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Tg={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Qc(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,m;if(i&&(r=Ig(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let _=e;_<s;_+=e)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return gs(r,o,e,a,l,m,0),o}};function Qc(n,t,e,i,s){let r,o;if(s===Gg(n,t,e,i)>0)for(r=t;r<e;r+=i)o=bc(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=bc(r,n[r],n[r+1],o);return o&&Lr(o,o.next)&&(xs(o),o=o.next),o}function pi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Lr(e,e.next)||he(e.prev,e,e.next)===0)){if(xs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function gs(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Fg(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Cg(n,i,s,r):Ag(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),xs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Rg(pi(n),t,e),gs(n,t,e,i,s,r,2)):o===2&&Pg(n,t,e,i,s,r):gs(pi(n),t,e,i,s,r,1);break}}}function Ag(n){let t=n.prev,e=n,i=n.next;if(he(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,_=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=m&&Bi(s,a,r,l,o,c,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Cg(n,t,e,i){let s=n.prev,r=n,o=n.next;if(he(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,S=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,d=Ia(m,_,t,e,i),v=Ia(S,p,t,e,i),b=n.prevZ,g=n.nextZ;for(;b&&b.z>=d&&g&&g.z<=v;){if(b.x>=m&&b.x<=S&&b.y>=_&&b.y<=p&&b!==s&&b!==o&&Bi(a,u,l,h,c,f,b.x,b.y)&&he(b.prev,b,b.next)>=0||(b=b.prevZ,g.x>=m&&g.x<=S&&g.y>=_&&g.y<=p&&g!==s&&g!==o&&Bi(a,u,l,h,c,f,g.x,g.y)&&he(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;b&&b.z>=d;){if(b.x>=m&&b.x<=S&&b.y>=_&&b.y<=p&&b!==s&&b!==o&&Bi(a,u,l,h,c,f,b.x,b.y)&&he(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;g&&g.z<=v;){if(g.x>=m&&g.x<=S&&g.y>=_&&g.y<=p&&g!==s&&g!==o&&Bi(a,u,l,h,c,f,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Rg(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Lr(s,r)&&jc(s,i,i.next,r)&&_s(s,r)&&_s(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),xs(i),xs(i.next),i=n=r),i=i.next}while(i!==n);return pi(i)}function Pg(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zg(o,a)){let l=th(o,a);o=pi(o,o.next),l=pi(l,l.next),gs(o,t,e,i,s,r,0),gs(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ig(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Qc(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Bg(c));for(s.sort(Lg),r=0;r<s.length;r++)e=Ug(s[r],e);return e}function Lg(n,t){return n.x-t.x}function Ug(n,t){let e=Dg(n,t);if(!e)return t;let i=th(e,n);return pi(i,i.next),pi(e,e.next)}function Dg(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Bi(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),_s(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Ng(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Ng(n,t){return he(n.prev,n,t.prev)<0&&he(t.next,n,n.next)<0}function Fg(n,t,e,i){let s=n;do s.z===0&&(s.z=Ia(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Og(s)}function Og(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Ia(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Bg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bi(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function zg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Vg(n,t)&&(_s(n,t)&&_s(t,n)&&Hg(n,t)&&(he(n.prev,n,t.prev)||he(n,t.prev,t))||Lr(n,t)&&he(n.prev,n,n.next)>0&&he(t.prev,t,t.next)>0)}function he(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Lr(n,t){return n.x===t.x&&n.y===t.y}function jc(n,t,e,i){let s=Ks(he(n,t,e)),r=Ks(he(n,t,i)),o=Ks(he(e,i,n)),a=Ks(he(e,i,t));return!!(s!==r&&o!==a||s===0&&$s(n,e,t)||r===0&&$s(n,i,t)||o===0&&$s(e,n,i)||a===0&&$s(e,t,i))}function $s(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ks(n){return n>0?1:n<0?-1:0}function Vg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&jc(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _s(n,t){return he(n.prev,n,n.next)<0?he(n,t,n.next)>=0&&he(n,n.prev,t)>=0:he(n,t,n.prev)<0||he(n,n.next,t)<0}function Hg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function th(n,t){let e=new La(n.i,n.x,n.y),i=new La(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function bc(n,t,e,i){let s=new La(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function La(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var vs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];wc(t),Ec(i,t);let o=t.length;e.forEach(wc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ec(i,e[l]);let a=Tg.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wc(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ec(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Sr=class n extends Pa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var br=class extends Re{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new N,r=new N;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,m=h.count;for(let _=f,S=f+m;_<S;_+=3)for(let p=0;p<3;p++){let d=a.getX(_+p),v=a.getX(_+(p+1)%3);s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,v),Tc(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Tc(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ue(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Tc(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}var wr=class extends le{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};function Qs(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Wg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Qi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ua=class extends Qi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cl:r=t,a=2*e-i;break;case Rl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cl:o=t,l=2*i-e;break;case Rl:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-e)/(s-e),S=_*_,p=S*_,d=-f*p+2*f*S-f*_,v=(1+f)*p+(-1.5-2*f)*S+(-.5+f)*_+1,b=(-1-m)*p+(1.5+m)*S+.5*_,g=m*p-m*S;for(let R=0;R!==a;++R)r[R]=d*o[u+R]+v*o[c+R]+b*o[l+R]+g*o[h+R];return r}},Da=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Na=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ua(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return $r}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Wg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$r,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*i,f=h-i,m=h+i;for(let _=0;_!==i;++_){let S=e[h+_];if(S!==e[f+_]||S!==e[m+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let m=0;m!==i;++m)e[f+m]=e[h+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=ha;var mi=class extends an{constructor(t,e,i){super(t,e,i)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=rr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends an{};Fa.prototype.ValueTypeName="color";var Oa=class extends an{};Oa.prototype.ValueTypeName="number";var Ba=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Jn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Er=class extends an{InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends an{constructor(t,e,i){super(t,e,i)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=rr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends an{};za.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}},kg=new Va,Ha=class{constructor(t){this.manager=t!==void 0?t:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends Re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ar=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ac(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ac();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ac(){return performance.now()}var il="\\[\\]\\.:\\/",Xg=new RegExp("["+il+"]","g"),sl="[^"+il+"]",qg="[^"+il.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",sl),Zg=/(WCOD+)?/.source.replace("WCOD",qg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),$g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),Kg=new RegExp("^"+Yg+Zg+Jg+$g+"$"),Qg=["material","materials","bones","map"],Ga=class{constructor(t,e,i){let s=i||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},oe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(t){let e=Kg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Ga;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f0=new Float32Array(1);var _i=class extends Ra{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Cc=new N,js=new N,Cr=class{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Cc.subVectors(t,this.start),js.subVectors(this.end,this.start);let i=js.dot(js),r=js.dot(Cc)/i;return e&&(r=Ce(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var nh=new Ye,Ur=new N,cn=class extends Tr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ue(t,3)),this.setAttribute("uv",new ue(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new _i(e,6,1);return this.setAttribute("instanceStart",new pn(i,3,0)),this.setAttribute("instanceEnd",new pn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new _i(e,6,1);return this.setAttribute("instanceColorStart",new pn(i,3,0)),this.setAttribute("instanceColorEnd",new pn(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new br(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),nh.setFromBufferAttribute(e),this.boundingBox.union(nh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ur.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ur)),Ur.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ur));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};st.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new At(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ue.line={uniforms:ln.merge([st.common,st.fog,st.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var $n=class extends le{static get type(){return"LineMaterial"}constructor(t){super({uniforms:ln.clone(Ue.line.uniforms),vertexShader:Ue.line.vertexShader,fragmentShader:Ue.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var rl=new te,ih=new N,sh=new N,Se=new te,be=new te,mn=new te,ol=new N,al=new ae,we=new Cr,rh=new N,Dr=new Ye,Nr=new In,gn=new te,_n,xi;function oh(n,t,e){return gn.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),gn.multiplyScalar(1/gn.w),gn.x=xi/e.width,gn.y=xi/e.height,gn.applyMatrix4(n.projectionMatrixInverse),gn.multiplyScalar(1/gn.w),Math.abs(Math.max(gn.x,gn.y))}function jg(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){we.start.fromBufferAttribute(s,a),we.end.fromBufferAttribute(r,a),we.applyMatrix4(e);let c=new N,u=new N;_n.distanceSqToSegment(we.start,we.end,u,c),u.distanceTo(c)<xi*.5&&t.push({point:u,pointOnLine:c,distance:_n.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function t0(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-t.near;_n.at(1,mn),mn.w=1,mn.applyMatrix4(t.matrixWorldInverse),mn.applyMatrix4(i),mn.multiplyScalar(1/mn.w),mn.x*=r.x/2,mn.y*=r.y/2,mn.z=0,ol.copy(mn),al.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,m=u;f<m;f++){if(Se.fromBufferAttribute(l,f),be.fromBufferAttribute(c,f),Se.w=1,be.w=1,Se.applyMatrix4(al),be.applyMatrix4(al),Se.z>h&&be.z>h)continue;if(Se.z>h){let b=Se.z-be.z,g=(Se.z-h)/b;Se.lerp(be,g)}else if(be.z>h){let b=be.z-Se.z,g=(be.z-h)/b;be.lerp(Se,g)}Se.applyMatrix4(i),be.applyMatrix4(i),Se.multiplyScalar(1/Se.w),be.multiplyScalar(1/be.w),Se.x*=r.x/2,Se.y*=r.y/2,be.x*=r.x/2,be.y*=r.y/2,we.start.copy(Se),we.start.z=0,we.end.copy(be),we.end.z=0;let S=we.closestPointToPointParameter(ol,!0);we.at(S,rh);let p=Wc.lerp(Se.z,be.z,S),d=p>=-1&&p<=1,v=ol.distanceTo(rh)<xi*.5;if(d&&v){we.start.fromBufferAttribute(l,f),we.end.fromBufferAttribute(c,f),we.start.applyMatrix4(o),we.end.applyMatrix4(o);let b=new N,g=new N;_n.distanceSqToSegment(we.start,we.end,g,b),e.push({point:g,pointOnLine:b,distance:_n.origin.distanceTo(g),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var vi=class extends ye{constructor(t=new cn,e=new $n({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)ih.fromBufferAttribute(e,o),sh.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+ih.distanceTo(sh);let r=new _i(s,2,1);return t.setAttribute("instanceDistanceStart",new pn(r,1,0)),t.setAttribute("instanceDistanceEnd",new pn(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;_n=t.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;xi=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Nr.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=xi*.5;else{let h=Math.max(s.near,Nr.distanceToPoint(_n.origin));c=oh(s,h,l.resolution)}if(Nr.radius+=c,_n.intersectsSphere(Nr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Dr.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=xi*.5;else{let h=Math.max(s.near,Dr.distanceToPoint(_n.origin));u=oh(s,h,l.resolution)}Dr.expandByScalar(u),_n.intersectsBox(Dr)!==!1&&(i?jg(this,e):t0(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(rl),this.material.uniforms.resolution.value.set(rl.z,rl.w))}};var Fr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var We=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},e0=new ms(-1,1,1,-1,0,1),ll=class extends Re{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}},n0=new ll,Kn=class{constructor(t){this._mesh=new ye(n0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Or=class extends We{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ln.clone(t.uniforms),this.material=new le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Kn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ys=class extends We{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Br=class extends We{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var zr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ge}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Or(Fr),this.copyPass.material.blending=dn,this.clock=new Ar}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ys!==void 0&&(o instanceof ys?i=!0:o instanceof Br&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vr=class extends We{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var ah={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var es=class n extends We{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new Ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Me(r,o,{type:Ge}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Me(r,o,{type:Ge});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new Me(r,o,{type:Ge});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=ah;this.highPassUniforms=ln.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Fr;this.copyUniforms=ln.clone(u.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ot,this.oldClearAlpha=1,this.basic=new Ji,this.fsQuad=new Kn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};es.BlurDirectionX=new At(1,0);es.BlurDirectionY=new At(0,1);var lh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Hr=class extends We{constructor(){super();let t=lh;this.uniforms=ln.clone(t.uniforms),this.material=new wr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Za&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Wr=["wall","roof","glass","detail","site"],ch=new ae,re=new N,cl={},Gr=class{constructor(){this.tris={},this.lum={},this.segs={};for(let t of Wr)this.tris[t]=[],this.lum[t]=[],this.segs[t]=[];this.M=new ae,this.stack=[],this.b={x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y1:0},this.peak=[0,0,0]}at(t,e,i,s,r){return this.stack.push(this.M.clone()),this.M.multiply(ch.makeTranslation(t,e,i)),s&&this.M.multiply(ch.makeRotationY(s)),r(this),this.M=this.stack.pop(),this}_p(t){return re.set(t[0],t[1],t[2]).applyMatrix4(this.M),re}_track(t){if(t==="wall"||t==="roof"){let e=this.b;re.x<e.x0&&(e.x0=re.x),re.x>e.x1&&(e.x1=re.x),re.z<e.z0&&(e.z0=re.z),re.z>e.z1&&(e.z1=re.z),re.y>e.y1&&(e.y1=re.y),t==="roof"&&re.y>this.peak[1]&&(this.peak=[re.x,re.y,re.z])}}tri(t,e,i,s,r=0){let o=this.tris[t];for(let a of[e,i,s])this._p(a),this._track(t),o.push(re.x,re.y,re.z);this.lum[t].push(r,r,r)}quad(t,e,i,s,r,o=0){this.tri(t,e,i,s,o),this.tri(t,e,s,r,o)}line(t,e,i){let s=this.segs[t];this._p(e),s.push(re.x,re.y,re.z),this._p(i),s.push(re.x,re.y,re.z)}loop(t,e){for(let i=0;i<e.length;i++)this.line(t,e[i],e[(i+1)%e.length])}path(t,e){for(let i=0;i<e.length-1;i++)this.line(t,e[i],e[i+1])}prism(t,e,i,s,r={}){let o=e.length,a=r.lum??0,l=r.top!==!1||r.bottom?vs.triangulateShape(e.map(c=>new At(c[0],c[1])),[]):[];if(r.top!==!1)for(let[c,u,h]of l)this.tri(t,[e[c][0],s,e[c][1]],[e[u][0],s,e[u][1]],[e[h][0],s,e[h][1]],a);if(r.bottom??i>.05)for(let[c,u,h]of l)this.tri(t,[e[c][0],i,e[c][1]],[e[u][0],i,e[u][1]],[e[h][0],i,e[h][1]],a);for(let c=0;c<o;c++){let u=e[c],h=e[(c+1)%o];this.quad(t,[u[0],i,u[1]],[h[0],i,h[1]],[h[0],s,h[1]],[u[0],s,u[1]],a),r.noEdges||(this.line(t,[u[0],s,u[1]],[h[0],s,h[1]]),r.base!==!1&&this.line(t,[u[0],i,u[1]],[h[0],i,h[1]]),r.smooth||this.line(t,[u[0],i,u[1]],[u[0],s,u[1]]))}return this}box(t,e,i,s,r,o,a,l){return this.prism(t,[[e,s],[r,s],[r,a],[e,a]],i,o,l)}cyl(t,e,i,s,r,o,a=14,l={}){let c=[];for(let u=0;u<a;u++){let h=u/a*Math.PI*2;c.push([e+Math.cos(h)*s,i+Math.sin(h)*s])}return this.prism(t,c,r,o,{smooth:!0,...l})}extrude(t,e,i,s,r,o={}){let a=(h,f,m)=>i==="x"?[m,f,h]:[h,f,m],l=e.length,c=o.lum??0,u=vs.triangulateShape(e.map(h=>new At(h[0],h[1])),[]);for(let h of[s,r])for(let[f,m,_]of u)this.tri(t,a(e[f][0],e[f][1],h),a(e[m][0],e[m][1],h),a(e[_][0],e[_][1],h),c);for(let h=0;h<l;h++){let f=e[h],m=e[(h+1)%l];this.quad(t,a(f[0],f[1],s),a(m[0],m[1],s),a(m[0],m[1],r),a(f[0],f[1],r),c),this.line(t,a(f[0],f[1],s),a(m[0],m[1],s)),this.line(t,a(f[0],f[1],r),a(m[0],m[1],r)),!o.smooth&&!(o.skip&&o.skip.includes(h))&&this.line(t,a(f[0],f[1],s),a(f[0],f[1],r))}return this}cone(t,e,i,s,r,o,a=8,l=!1){let c=[];for(let u=0;u<a;u++){let h=u/a*Math.PI*2;c.push([e+Math.cos(h)*s,r,i+Math.sin(h)*s])}for(let u=0;u<a;u++){let h=c[u],f=c[(u+1)%a];l||this.tri(t,h,f,[e,o,i]),this.line(t,h,f),u%2===0&&this.line(t,h,[e,o,i])}return this}ico(t,e,i,s,r,o=1,a=1,l=!1){let c=cl[o]??(cl[o]=(()=>{let h=new Sr(1,o);return{p:h.attributes.position.array,e:new Mr(h,1).attributes.position.array}})()),u=h=>[e+c.p[h]*r,i+c.p[h+1]*r*a,s+c.p[h+2]*r];if(!l)for(let h=0;h<c.p.length;h+=9)this.tri(t,u(h),u(h+3),u(h+6));for(let h=0;h<c.e.length;h+=6)this.line(t,[e+c.e[h]*r,i+c.e[h+1]*r*a,s+c.e[h+2]*r],[e+c.e[h+3]*r,i+c.e[h+4]*r*a,s+c.e[h+5]*r]);return this}gable(t,e,i,s,r,o={}){let{axis:a="x",pitch:l=.5,over:c=.45,rake:u=.35,t:h=.2,ends:f=!0,role:m="roof"}=o,[_,S,p,d]=a==="x"?[e,s,t,i]:[t,i,e,s],v=(_+S)/2,b=((S-_)/2+c)*l;if(this.extrude(m,[[_-c,r],[S+c,r],[S+c,r+h],[v,r+h+b],[_-c,r+h]],a,p-u,d+u),f){let g=(S-_)/2*l+c*l,R=(w,C,x)=>a==="x"?[x,C,w]:[w,C,x];for(let w of[p,d])this.tri(m==="roof"?"wall":m,R(_,r,w),R(S,r,w),R(v,r+g,w))}return r+h+b}hip(t,e,i,s,r,o={}){let{pitch:a=.5,over:l=.45,t:c=.2}=o;t-=l,i+=l,e-=l,s+=l;let u=i-t,h=s-e,f=u>=h,m=Math.min(u,h)/2,_=m*a,S=r+c,p=S+_,d=[[t,r,e],[i,r,e],[i,r,s],[t,r,s]],v=d.map(R=>[R[0],S,R[2]]),b=f?[t+m,p,(e+s)/2]:[(t+i)/2,p,e+m],g=f?[i-m,p,(e+s)/2]:[(t+i)/2,p,s-m];for(let R=0;R<4;R++){let w=(R+1)%4;this.quad("roof",d[R],d[w],v[w],v[R]),this.line("roof",d[R],d[w]),this.line("roof",v[R],v[w]),this.line("roof",d[R],v[R])}return this.quad("roof",d[0],d[1],d[2],d[3]),f?(this.quad("roof",v[0],v[1],g,b),this.quad("roof",v[2],v[3],b,g),this.tri("roof",v[1],v[2],g),this.tri("roof",v[3],v[0],b),this.line("roof",v[0],b),this.line("roof",v[3],b),this.line("roof",v[1],g),this.line("roof",v[2],g)):(this.quad("roof",v[1],v[2],g,b),this.quad("roof",v[3],v[0],b,g),this.tri("roof",v[0],v[1],b),this.tri("roof",v[2],v[3],g),this.line("roof",v[0],b),this.line("roof",v[1],b),this.line("roof",v[2],g),this.line("roof",v[3],g)),m*2<Math.max(u,h)-.01&&this.line("roof",b,g),p}shed(t,e,i,s,r,o,a={}){let l=a.t??.16;return this.extrude("roof",[[e,r+o],[s,r],[s,r+l],[e,r+o+l]],"x",t,i)}flat(t,e,i,s,r,o={}){let{parapet:a=.9,wt:l=.3,role:c="wall"}=o,u=r+a;this.box(c,t,r,s-l,i,u,s,{base:!1}),this.box(c,t,r,e,i,u,e+l,{base:!1}),this.box(c,t,r,e+l,t+l,u,s-l,{base:!1}),this.box(c,i-l,r,e+l,i,u,s-l,{base:!1});let h=[[t+l,r+.03,e+l],[i-l,r+.03,e+l],[i-l,r+.03,s-l],[t+l,r+.03,s-l]];return this.quad("roof",...h),this.loop("roof",h),r}slab(t,e,i,s,r,o=.35,a="roof"){return this.box(a,t,r,e,i,r+o,s,{bottom:!0})}win(t,e,i,s,r={}){let o=r.proud??.06,a=r.lum??.5;this.box("glass",t,e,0,i,s,o,{lum:a,bottom:!1,base:!0});let l=r.mx??0,c=r.my??0;for(let u=1;u<=l;u++){let h=t+(i-t)*u/(l+1);this.line("glass",[h,e,o],[h,s,o])}for(let u=1;u<=c;u++){let h=e+(s-e)*u/(c+1);this.line("glass",[t,h,o],[i,h,o])}return this}pane(t,e,i,s,r=.5,o=.05){let a=[[t,e,o],[i,e,o],[i,s,o],[t,s,o]];return this.quad("glass",...a,r),this.loop("glass",a),this}door(t,e,i,s={}){let r=s.y0??0;if(this.box("detail",t,r,0,e,i,.07,{bottom:!1}),s.lite&&this.win(t+.18,i-.75,e-.18,i-.2,{proud:.1,lum:.7}),s.panels)for(let o=1;o<=s.panels;o++){let a=r+(i-r)*o/(s.panels+1);this.line("detail",[t,a,.07],[e,a,.07])}return this}sides(t,e,i,s,r){return r.front&&this.at(t,0,s,0,()=>r.front(i-t)),r.right&&this.at(i,0,s,Math.PI/2,()=>r.right(s-e)),r.back&&this.at(i,0,e,Math.PI,()=>r.back(i-t)),r.left&&this.at(t,0,e,-Math.PI/2,()=>r.left(s-e)),this}};var hl=(n,t,e,i=10)=>Array.from({length:i},(s,r)=>[n+Math.cos(r/i*6.2832)*e,t+Math.sin(r/i*6.2832)*e]),i0=[{lower:[[-2.25,.32],[-2.28,.62],[-2.08,.82],[-1.2,.9],[1.15,.93],[1.95,.8],[2.26,.66],[2.24,.32]],cabin:[[-1.25,.9],[-.78,1.38],[.6,1.42],[1.3,.93]],wheels:[-1.42,1.38]},{lower:[[-2.3,.36],[-2.34,.75],[-2.1,.98],[-1.2,1.05],[2.2,1.05],[2.32,.8],[2.3,.36]],cabin:[[-1.25,1.05],[-.85,1.68],[1.95,1.7],[2.2,1.05]],wheels:[-1.45,1.45]},{lower:[[-2.7,.4],[-2.74,.8],[-2.5,1.02],[-1.5,1.08],[2.75,1.08],[2.78,.4]],cabin:[[-1.55,1.08],[-1.15,1.75],[.25,1.77],[.4,1.08]],wheels:[-1.75,1.75]}];function ce(n,t,e,i=0,s=0,r=!0){let o=i0[s%3];n.at(t,0,e,i,()=>{if(n.extrude("site",o.lower,"z",-.9,.9),n.extrude("detail",o.cabin,"z",-.78,.78),s%3===2&&n.box("site",.5,1.08,-.86,2.7,1.5,.86,{top:!1}),r)for(let a of o.wheels)for(let l of[-1,1])n.extrude("site",hl(a,.34,.34),"z",l*.92,l*.66,{smooth:!0})})}function kr(n,t,e,i=0,s=!0){n.at(t,0,e,i,()=>{n.box("site",-6.85,1.2,-1.3,6.85,4.1,1.3,{bottom:!0});for(let r of[4.9,6.1])for(let o of[-1,1])n.extrude("site",hl(r,.52,.52),"z",o*1.28,o*.8,{smooth:!0});if(n.line("site",[-4,0,-.9],[-4,1.2,-.9]),n.line("site",[-4,0,.9],[-4,1.2,.9]),s){n.extrude("site",[[-10.9,.55],[-10.9,2],[-10.5,3],[-8.6,3.1],[-8.6,1.35],[-6.4,1.35],[-6.4,.55]],"z",-1.25,1.25),n.extrude("detail",[[-10.86,2.05],[-10.5,2.95],[-9.5,2.98],[-9.5,2.05]],"z",-1.27,1.27);for(let r of[-10,-7.6,-6.6])for(let o of[-1,1])n.extrude("site",hl(r,.52,.52),"z",o*1.27,o*.85,{smooth:!0})}})}function Gt(n,t,e,i=5.6,s=1.9,r=!1){if(r){n.line("site",[t,0,e],[t,i*.22,e]),n.cone("site",t,e,s*.8,i*.18,i*.66,8,!0),n.cone("site",t,e,s*.58,i*.46,i,8,!0);return}n.line("site",[t,0,e],[t,i-s*1.6,e]),n.ico("site",t,i-s*.78,e,s,1,.9,!0)}var yi=(n,t,e,i=.55)=>n.ico("site",t,i*.62,e,i,0,.8);function _e(n,t,e){n.cyl("site",t,e,.2,0,1.42,6),n.ico("site",t,1.62,e,.17,0)}function xn(n,t,e,i=8,s=0,r=!1){n.at(t,0,e,s,()=>{n.cyl("site",0,0,.1,0,i,6,{base:!1}),n.box("site",.1,i-.18,-.22,1.5,i,.22,{bottom:!0}),r&&n.box("site",-1.5,i-.18,-.22,-.1,i,.22,{bottom:!0})})}function Ms(n,t,e,i,s,r,o=0,a=3){n.at(t,0,e,o,()=>{for(let l of[-1,1])n.box("detail",l*s*.32-.14,0,-.14,l*s*.32+.14,i-r,.14);n.box("detail",-s/2,i-r,-.2,s/2,i,.2,{bottom:!0});for(let l=1;l<=a;l++){let c=i-r+r*l/(a+1);for(let u of[-1,1])n.line("glass",[-s/2+.2,c,u*.21],[s/2-.2,c,u*.21])}})}function ul(n,t,e,i=9){n.line("site",[t,0,e],[t,i,e]),n.quad("site",[t,i-1.2,e],[t+1.9,i-1.1,e+.2],[t+1.9,i-.1,e+.2],[t,i,e]),n.path("site",[[t,i-1.2,e],[t+1.9,i-1.1,e+.2],[t+1.9,i-.1,e+.2],[t,i,e]])}function hn(n,t,e,i,s=2.6,r=1.7,o=1.3){n.box("detail",t-s/2+.12,i,e-r/2+.12,t+s/2-.12,i+.28,e+r/2-.12),n.box("detail",t-s/2,i+.28,e-r/2,t+s/2,i+o,e+r/2),n.cyl("detail",t-s*.2,e,Math.min(s,r)*.28,i+o,i+o+.1,10);for(let a=1;a<=3;a++)n.line("detail",[t+s/2+.01,i+.28+(o-.28)*a/4,e-r/2+.15],[t+s/2+.01,i+.28+(o-.28)*a/4,e+r/2-.15])}function Mi(n,t,e,i,s=.32){n.cyl("detail",t,e,s,i,i+.55,8),n.cyl("detail",t,e,s*1.5,i+.55,i+.72,8)}var fl=(n,t,e,i,s=1.3,r=2.5)=>n.box("glass",t-s/2,i,e-r/2,t+s/2,i+.28,e+r/2,{lum:.45});function hh(n,t,e,i,s,r){for(let o=0;o<=i;o++)n.line("site",[t+o*s,.02,e],[t+o*s,.02,e+r])}function Qn(n,t,e=1.5,i=2.4){for(let s=0;s<t.length-1;s++){let[r,o]=t[s],[a,l]=t[s+1],c=Math.hypot(a-r,l-o),u=Math.max(1,Math.round(c/i));n.line("site",[r,e,o],[a,e,l]),n.line("site",[r,.2,o],[a,.2,l]);for(let h=0;h<=u;h++){let f=h/u;n.line("site",[r+(a-r)*f,0,o+(l-o)*f],[r+(a-r)*f,e+.1,o+(l-o)*f])}}}var fe=(n,t,e,i,s,r,o=.02)=>n.loop(t,[[e,o,i],[s,o,i],[s,o,r],[e,o,r]]),ke=(n,t)=>{let e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)};var xe=2.75;function Ss(n,t,e,i,s,r,o){n.box("detail",t,r,e,i,o,s),n.box("detail",t-.1,o,e-.1,i+.1,o+.16,s+.1,{bottom:!0})}function jn(n,t,e){n.box("detail",t-.28,e-.3,0,t+.28,e+.3,.05,{bottom:!1}),n.line("detail",[t-.28,e,.05],[t+.28,e,.05])}function qr(n,t,e,i){for(let s of[0,1.4,2.3])n.line("site",[t,.02,i+s],[e,.02,i+s])}function Xr(n,t,e,i=2.15){n.box("detail",t,0,0,e,i,.06,{bottom:!1});for(let r=1;r<4;r++)n.line("detail",[t,i*r/4,.06],[e,i*r/4,.06]);let s=Math.round((e-t)/1.25);for(let r=1;r<s;r++){let o=t+(e-t)*r/s;n.line("detail",[o,0,.06],[o,i,.06])}}function fh(n,t){let e=12.2*t,i=8.2*t,s=-e/2,r=e/2,o=-i/2,a=i/2,l=e*.3,c=s+l,u=2.2;n.box("wall",s,0,o,r,xe,a,{top:!1});let h=n.gable(s,o,r,a,xe,{axis:"x",pitch:.5});n.box("detail",c-u,0,a,c+u,.22,a+2.15),n.box("detail",c-1,0,a+2.15,c+1,.11,a+2.5);for(let p of[-1,1])n.box("detail",c+p*(u-.2)-.08,.22,a+1.9,c+p*(u-.2)+.08,2.5,a+2.06);n.gable(c-u,a-1.2,c+u,a+2.1,2.5,{axis:"z",pitch:.5,over:.3,rake:.22});for(let p of[-1,1])n.line("detail",[c+p*(u-.2),1.05,a+1.98],[c+p*(u-.2),1.05,a]);n.sides(s,o,r,a,{front:p=>{n.door(l-1.25,l-.3,2.27,{y0:.22,lite:!0}),n.win(l+.35,1,l+1.45,2.2,{my:1}),n.win(p*.72-1.35,.9,p*.72+1.35,2.3,{mx:2,my:1,lum:.8}),n.win(.55,1,Math.max(1.2,l-u-.5),2.2,{my:1,lum:.3})},right:p=>{n.win(p*.5-.65,.95,p*.5+.65,2.2,{mx:1,my:1,lum:.25}),jn(n,p*.5,xe+p*.14)},left:p=>{Ss(n,p*.5-.62,0,p*.5+.62,.5,0,h+.55);for(let d of[p*.2,p*.8])n.win(d-.4,1,d+.4,2.2,{my:1,lum:.6})},back:p=>{n.door(p*.3-.45,p*.3+.45,2.05,{lite:!0}),n.box("detail",p*.3-.9,0,.07,p*.3+.9,.12,1.1),n.win(p*.58-.6,1.15,p*.58+.6,2.15,{mx:1}),n.win(p*.84-.65,.95,p*.84+.65,2.2,{my:1,lum:.2})}});let f=s-7.2,m=r+5.5,_=o-8.5,S=a+9.5;fe(n,"site",f,_,m,S),qr(n,f-3,m+3,S),fe(n,"site",s-5.3,o+1.2,s-1.7,S),ce(n,s-3.5,a+1.6,Math.PI/2,0),n.path("site",[[c-.5,.02,a+2.5],[c-.5,.02,S]]),n.path("site",[[c+.5,.02,a+2.5],[c+.5,.02,S]]),n.box("site",s-1.1,.9,S-.65,s-.7,1.2,S-.2,{bottom:!0}),n.line("site",[s-.9,0,S-.42],[s-.9,.9,S-.42]),Gt(n,m-1.6,S-2.2,5.4,1.7),Gt(n,r+2.2,o-4.6,7,2.4),Gt(n,s-4.6,o-5.4,5.2,1.7,!0);for(let[p,d]of[[.9,.5],[uh(e),.55],[uh(e)+1.6,.45],[e-.9,.6]])yi(n,s+p,a+.75,d);return Qn(n,[[f,o+1.5],[f,_],[m,_],[m,o+1.5]],1.3),_e(n,c+1.5,a+3.6),{name:"Single-story bungalow",cell:3.048,frontPad:4}}var uh=n=>n*.72-1.9;function dh(n,t){let e=-9*t,i=4.8*t,s=-4.6*t,r=4.6*t,o=3.4*t,a=10.6*t,l=-2.6*t,c=8*t,u=1.3*t;n.box("wall",e,0,s,i,xe,r,{top:!1}),n.box("wall",o,0,l,a,xe,c,{top:!1});let h=n.hip(e,s,i,r,xe,{pitch:.46});n.gable(o,l,a,c,xe,{axis:"z",pitch:.46}),Ss(n,-5.6*t-.4,-1.2,-5.6*t+.4,-.3,xe,h+.5),n.box("detail",u-1.7,0,r,u+1.7,.2,r+1.8);for(let d of[-1,1])n.box("detail",u+d*1.45-.08,.2,r+1.55,u+d*1.45+.08,2.45,r+1.71);n.gable(u-1.7,r-1.6,u+1.7,r+1.75,2.45,{axis:"z",pitch:.46,over:.25,rake:.2});let f=s-3.6;n.slab(-5*t,f,1.2*t,s,2.5,.2);for(let d of[-5*t+.2,-1.9*t,1.2*t-.2])n.box("detail",d-.07,0,f+.15,d+.07,2.5,f+.29);fe(n,"site",-5*t-.4,f-.5,1.2*t+.4,s),n.sides(e,s,i,r,{front:d=>{let v=u-e;n.door(v-.5,v+.5,2.2,{y0:.2,lite:!0,panels:1}),n.win(v-1.25,.9,v-.8,2.2,{lum:.7}),n.win(v+.8,.9,v+1.25,2.2,{lum:.7});let b=6.6*t;n.win(b-1.4,.75,b+1.4,2.25,{mx:2,my:1,lum:.85});for(let g of[1.3*t,3.4*t])n.win(g-.7,.95,g+.7,2.2,{mx:1,my:1,lum:.3})},left:d=>{for(let v of[d*.25,d*.72])n.win(v-.6,.95,v+.6,2.2,{mx:1,lum:.2})},back:d=>{let v=d-(-1.9*t-e);n.win(v-1.3,.12,v+1.3,2.15,{mx:1,lum:.8});for(let b of[d*.07+.6,d*.8,d*.93])n.win(b-.55,1,b+.55,2.2,{my:1,lum:.25})}}),n.sides(o,l,a,c,{front:d=>{Xr(n,d/2-2.45,d/2+2.45),jn(n,d/2,xe+d*.1);for(let v of[d/2-2.8,d/2+2.8])n.box("detail",v-.08,1.85,0,v+.08,2.15,.14,{bottom:!0})},right:d=>{n.door(d*.7-.45,d*.7+.45,2.05),n.win(d*.32-.6,1.1,d*.32+.6,2.1,{mx:1,lum:.15})},back:d=>{jn(n,d/2,xe+d*.1),n.win(d/2-.6,1.1,d/2+.6,2.1,{lum:.15})}});let m=e-5.5,_=a+4.5,S=s-10,p=c+9;fe(n,"site",m,S,_,p),qr(n,m-3,_+3,p),fe(n,"site",o+.3,c,a-.3,p),ce(n,(o+a)/2+1.5,c+3.6,Math.PI/2,1),ce(n,(o+a)/2-1.6,c+3.1,-Math.PI/2,0),n.path("site",[[u-.55,.02,r+1.8],[u-.55,.02,c+2.2],[o+.3,.02,c+2.2]]),n.path("site",[[u+.55,.02,r+1.8],[u+.55,.02,c+1.1],[o+.3,.02,c+1.1]]),Gt(n,m+1.8,p-2.4,5.6,1.8),Gt(n,e-2.5,s-5,7.6,2.7),Gt(n,a+2,l-4,6,2),Gt(n,6*t,s-6.5,5.6,1.8,!0);for(let d=0;d<6;d++)yi(n,e+1+d*(u-2.2-e-1)/5,r+.8,.45+d%3*.08);return Qn(n,[[m,s+2],[m,S],[_,S],[_,l+1]],1.5),_e(n,u+1.4,r+3),{name:"Single-story home with garage",cell:3.048,frontPad:5}}function ph(n,t){let i=-7.5*t,s=6.5*t,r=-5.2*t,o=5.2*t,a=-6.6*t,l=-1.6*t,c=o+1.5,u=s+7.6*t,h=-1.6*t,f=o+1,m=r-3.6;n.box("wall",i,0,r,s,5.65,o,{top:!1}),n.box("wall",a,0,o-.2,l,5.65,c,{top:!1});let _=n.gable(i,r,s,o,5.65,{axis:"x",pitch:.55});n.gable(a,o-3.2,l,c,5.65,{axis:"z",pitch:.55}),n.path("detail",[[i,2.86,o+.01],[a,2.86,o+.01]]),n.path("detail",[[l,2.86,o+.01],[s,2.86,o+.01]]),n.box("wall",s-.1,0,h,u,xe,f,{top:!1}),n.gable(s-2,h,u,f,xe,{axis:"x",pitch:.5});let S=o+2;n.box("detail",l,0,o,s,.22,S),n.box("detail",l+1.2,0,S,l+3.4,.11,S+.4),n.shed(l,o,s,S+.25,2.62,.5);for(let w=0;w<4;w++){let C=l+.2+(s-l-.4)*w/3;n.box("detail",C-.08,.22,S-.2,C+.08,2.62,S-.04)}n.box("wall",-3.2*t,0,m,5*t,xe,r+.1,{top:!1}),n.hip(-3.2*t,m,5*t,r+1.5,xe,{pitch:.42}),fe(n,"site",-4.5*t,m-4.2,5.8*t,m),n.sides(i,r,s,o,{front:w=>{let C=l-i+2.3;n.door(C-.5,C+.5,2.3,{y0:.22,lite:!0,panels:1});for(let A of[C-.85,C+.85])n.win(A-.16,.5,A+.16,2.3,{lum:.8});let x=l-i,y=w;for(let A=0;A<3;A++){let D=x+(y-x)*(A+.5)/3;n.win(D-.6,3.75,D+.6,5.15,{mx:1,my:1,lum:A===1?.2:.75})}let M=x+(y-x)*.78;n.win(M-1.1,.85,M+1.1,2.3,{mx:2,my:1,lum:.8})},left:w=>{for(let C of[w*.22,w*.74])n.win(C-.6,.9,C+.6,2.3,{mx:1,my:1,lum:.3}),n.win(C-.6,3.75,C+.6,5.1,{mx:1,my:1,lum:.7});Ss(n,w*.48-.7,0,w*.48+.7,.55,0,_+.7),jn(n,w*.5,5.65+w*.2)},right:w=>{jn(n,w*.5,5.65+w*.2),n.win(w*.82-.5,3.8,w*.82+.5,5.1,{mx:1,lum:.25})},back:w=>{for(let C=0;C<5;C++){let x=w*(C+.5)/5;n.win(x-.6,3.75,x+.6,5.1,{mx:1,my:1,lum:C%2?.7:.2})}n.win(w*.1-.6,.9,w*.1+.6,2.3,{mx:1,lum:.3}),n.win(w*.9-.6,.9,w*.9+.6,2.3,{mx:1,lum:.6})}}),n.sides(a,o,l,c,{front:w=>{n.win(w/2-1.3,.8,w/2+1.3,2.35,{mx:2,my:1,lum:.85}),n.win(w/2-1.1,3.7,w/2+1.1,5.15,{mx:1,my:1,lum:.5}),jn(n,w/2,5.65+w*.17)}}),n.sides(s,h,u,f,{front:w=>{Xr(n,.7,5.6),Xr(n,6.1,Math.min(w-.5,8.85))},right:w=>{n.win(w*.4-.6,1.1,w*.4+.6,2.1,{mx:1,lum:.15}),n.door(w*.78-.45,w*.78+.45,2.05),jn(n,w*.5,xe+w*.14)},back:w=>n.win(w*.6-.6,1.1,w*.6+.6,2.1,{lum:.2})}),n.sides(-3.2*t,m,5*t,r,{back:w=>{n.win(w/2-1.8,.12,w/2+1.8,2.2,{mx:3,lum:.85});for(let C of[.9,w-.9])n.win(C-.45,.9,C+.45,2.2,{lum:.5})},left:w=>n.win(w/2-.6,.9,w/2+.6,2.2,{mx:1,lum:.5}),right:w=>n.win(w/2-.6,.9,w/2+.6,2.2,{mx:1,lum:.5})});let p=i-7,d=u+5,v=m-11,b=c+11.5;fe(n,"site",p,v,d,b),qr(n,p-3,d+3,b),fe(n,"site",s+.4,f,u-.3,b),ce(n,s+2.6,f+3.4,Math.PI/2,1),ce(n,s+5.6,f+4.2,-Math.PI/2,0),n.path("site",[[l+1.8,.02,S+.4],[l+1.8,.02,f+3],[s+.4,.02,f+3]]),n.path("site",[[l+2.9,.02,S+.4],[l+2.9,.02,f+1.9],[s+.4,.02,f+1.9]]);let g=p+3.2,R=v+3;n.box("site",g-1.5,0,R-1.2,g+1.5,2.1,R+1.2,{top:!1}),n.gable(g-1.5,R-1.2,g+1.5,R+1.2,2.1,{axis:"x",pitch:.5,over:.2,rake:.2,role:"site"}),n.at(g-1.5,0,R+1.2,0,()=>n.door(1,2,1.9)),Gt(n,p+2,b-2.6,6,2),Gt(n,i-4.2,r-1,8.2,2.9),Gt(n,u+2.2,h-5,7.8,2.7),Gt(n,1*t,m-8,8.8,3.1),Gt(n,d-2.5,v+3,6.2,2,!0),Gt(n,d-5.5,v+2.5,5.2,1.7,!0);for(let w=0;w<5;w++)yi(n,a+.5+w*1.05*t,c+.8,.5);for(let w=0;w<4;w++)yi(n,l+4.3+w*1.4,S+.7,.42);return Qn(n,[[p,r+2],[p,v],[d,v],[d,h]],1.6),_e(n,l+2.3,S+2.4),_e(n,l+3.1,S+2.9),{name:"Two-story home",cell:3.048,frontPad:6}}function mh(n,t){let i=-8*t,s=8*t,r=-5.5*t,o=5.5*t,a=o+2.2,l=3.3*t,c=s+11.6*t,u=-4.2*t,h=4*t,f=i-8.2*t,m=-6.6*t,_=2.6*t;n.box("wall",i,0,r,s,6,o,{top:!1});let S=n.hip(i,r,s,o,6,{pitch:.5});n.path("detail",[[-l,3,o+.01],[l,3,o+.01]]);for(let A of[-1,1]){let D=A<0?i:l,V=A<0?-l:s;n.box("wall",D,0,o-.2,V,6,a,{top:!1}),n.gable(D,o-3.6,V,a,6,{axis:"z",pitch:.5}),n.sides(D,o,V,a,{front:B=>{n.win(B/2-1.4,.7,B/2+1.4,2.5,{mx:2,my:1,lum:A<0?.85:.5}),n.win(B/2-1.1,3.8,B/2+1.1,5.4,{mx:1,my:1,lum:A<0?.3:.8}),jn(n,B/2,6+B*.17)},[A<0?"left":"right"]:B=>{}})}let p=o+2.5;n.box("detail",-l+.2,0,o,l-.2,.3,p+.5),n.box("detail",-1.6,0,p+.5,1.6,.15,p+.95);for(let A of[-l+.7,-l*.36,l*.36,l-.7])n.cyl("detail",A,p,.24,.3,5.55,10),n.box("detail",A-.34,5.55,p-.34,A+.34,5.75,p+.34,{bottom:!0}),n.box("detail",A-.34,.3,p-.34,A+.34,.5,p+.34);n.gable(-l+.25,o-2.6,l-.25,p+.3,5.75,{axis:"z",pitch:.32,over:.25,rake:.25}),n.at(-l,0,o,0,()=>{let A=l*2;n.door(A/2-.95,A/2+.95,2.6,{y0:.3,panels:2}),n.line("detail",[A/2,.3,.08],[A/2,2.6,.08]),n.win(A/2-.95,2.68,A/2+.95,3.15,{mx:2,lum:.9});for(let D of[A/2-1.9,A/2+1.9])n.win(D-.35,.6,D+.35,2.6,{my:2,lum:.85});n.win(A/2-1.1,3.9,A/2+1.1,5.3,{mx:2,my:1,lum:.6})}),n.box("wall",s-.1,0,u,c,xe+.1,h,{top:!1}),n.hip(s-3,u,c,h,xe+.1,{pitch:.46}),n.sides(s,u,c,h,{front:A=>{let V=Math.min(2.9,(A-1.6)/3-.5);for(let B=0;B<3;B++){let Z=A*(B+.5)/3;Xr(n,Z-V/2,Z+V/2,2.25)}},right:A=>{for(let D of[A*.3,A*.7])n.win(D-.6,1.1,D+.6,2.2,{mx:1,lum:.2})},back:A=>{n.door(A*.2-.45,A*.2+.45,2.1),n.win(A*.65-.7,1.1,A*.65+.7,2.2,{mx:1,lum:.2})}}),n.box("wall",f,0,m,i+.1,xe+.1,_,{top:!1}),n.hip(f,m,i+3,_,xe+.1,{pitch:.46}),n.sides(f,m,i,_,{front:A=>{for(let D of[A*.25,A*.68])n.win(D-.9,.7,D+.9,2.35,{mx:1,my:1,lum:D<A/2?.8:.3})},left:A=>{for(let D of[A*.22,A*.5,A*.78])n.win(D-.6,.8,D+.6,2.3,{my:1,lum:.55})},back:A=>{n.win(A*.5-1.4,.12,A*.5+1.4,2.25,{mx:2,lum:.8})}}),n.sides(i,r,s,o,{back:A=>{for(let D=0;D<6;D++){let V=A*(D+.5)/6;n.win(V-.7,3.85,V+.7,5.35,{mx:1,my:1,lum:D%3?.65:.2})}n.win(A/2-2.6,.12,A/2+2.6,2.4,{mx:5,lum:.85});for(let D of[A*.12,A*.88])n.win(D-.8,.8,D+.8,2.4,{mx:1,my:1,lum:.4})},left:A=>{for(let D of[A*.7,A*.9])n.win(D-.5,3.9,D+.5,5.3,{mx:1,lum:.5})},right:A=>{for(let D of[A*.1,A*.3])n.win(D-.5,3.9,D+.5,5.3,{mx:1,lum:.3})}}),Ss(n,-5.2*t-.45,-1.4,-5.2*t+.45,-.3,6,S+.6),Ss(n,5.2*t-.45,.3,5.2*t+.45,1.4,6,S+.6);let d=r-4.4;n.slab(-6*t,d,6*t,r,2.95,.3);for(let A=0;A<5;A++)n.cyl("detail",-6*t+.4+(12*t-.8)*A/4,d+.4,.16,0,2.95,8);let v=5.6*t,b=d-9.2,g=d-3.4;fe(n,"site",-v-2.5,b-2.4,v+2.5,d),fe(n,"glass",-v,b,v,g,.06),fe(n,"glass",-v+.35,b+.35,v-.35,g-.35,.03),n.quad("glass",[-v,.04,b],[v,.04,b],[v,.04,g],[-v,.04,g],.22),n.cyl("glass",v+1.2,g-.2,1.15,0,.32,14,{lum:.3});for(let A=0;A<4;A++)n.box("site",-v+1+A*2.1,.25,b-1.6,-v+1.7+A*2.1,.4,b-.5,{bottom:!0});let R=a+10.5,w=R+13.5,C=(A,D,V,B=28)=>Array.from({length:B+1},(Z,F)=>{let q=D+(V-D)*F/B;return[Math.cos(q)*A,.02,R+Math.sin(q)*A]});n.path("site",C(9.6,0,Math.PI*2,44)),n.path("site",C(5.4,0,Math.PI*2,32)),n.cyl("site",0,R,1.9,0,.45,14),n.cyl("glass",0,R,1.5,.45,.5,12,{lum:.3}),n.cyl("site",0,R,.3,.45,1.5,8),n.path("site",[[-2.6,.02,R+9.2],[-2.6,.02,w]]),n.path("site",[[2.6,.02,R+9.2],[2.6,.02,w]]),fe(n,"site",s+.6,h,c-.4,h+8.5),n.path("site",[[s+.6,.02,h+8.5],[9.2,.02,R-2.5]]),n.path("site",[[c-.4,.02,h+8.5],[9.6,.02,R+.6]]),ce(n,s+3*t,h+3.5,Math.PI/2,1),ce(n,s+8.5*t,h+4.4,-Math.PI/2,2),ce(n,-7.4,R+1,Math.PI/2+.25,0);let x=f-7,y=c+6,M=b-9;fe(n,"site",x,M,y,w),qr(n,x-3,y+3,w);for(let A of[-1,1])for(let D=0;D<4;D++)n.box("site",A*3.4-.5,0,R+10.2+D*.82,A*3.4+.5,.7,R+10.9+D*.82);Gt(n,x+2.5,_+3,9,3.2),Gt(n,x+3,w-3,6.2,2),Gt(n,y-2.5,w-3,6.6,2.2),Gt(n,y-3,M+6,9,3.2),Gt(n,x+4,M+5,8,2.8),Gt(n,-v-5.5,b,6.5,2.2,!0),Gt(n,-v-7.5,b+3,5.6,1.9,!0),Gt(n,v+6,b-3,7,2.3,!0);for(let A=0;A<5;A++)yi(n,i+.6+A*(8*t-l-1)/4,a+.8,.55),yi(n,l+.6+A*(8*t-l-1)/4,a+.8,.55);return Qn(n,[[x,m],[x,M],[y,M],[y,u]],1.8,3),_e(n,1.2,p+2.2),_e(n,2,p+2.6),{name:"Large two-story home",cell:3.048,frontPad:9}}function bs(n,t,e,i){for(let s of[0,1.6,2.6])n.line("site",[t,.02,i+s],[e,.02,i+s]);for(let s=t;s<e;s+=9)n.line("site",[s,.02,i+7],[s+4,.02,i+7]);n.line("site",[t,.02,i+11.4],[e,.02,i+11.4])}function Un(n,t,e,i,s=5.4,r=!1,o=1,a=.55,l=!1){hh(n,t,e,i,2.75,s);for(let c=0;c<i;c++)ke(c,o)<a&&ce(n,t+(c+.5)*2.75,e+s/2,r?-Math.PI/2:Math.PI/2,Math.floor(ke(c,o+9)*3),l)}function gh(n,t,e){n.box("site",t,0,e,t+.2,1.9,e+3.6),n.box("site",t+4.4,0,e,t+4.6,1.9,e+3.6),n.box("site",t,0,e,t+4.6,1.9,e+.2),n.box("site",t+.5,0,e+.7,t+2.2,1.35,e+2.8),n.box("site",t+2.5,0,e+.7,t+4.1,1.35,e+2.8)}var dl=(n,t,e,i=3)=>n.extrude("detail",[[.02,i+.42],[1.35,i],[1.35,i-.12],[.02,i+.1]],"x",t,e);function _h(n,t){let e=18.5*t,i=11.6*t,s=4.4,r=-e/2,o=e/2,a=-5,l=a-i,c=26*t,u=8.6*t,h=9.5,f=4.9;n.box("wall",r,0,l,o,s,a,{top:!1}),n.flat(r,l,o,a,s,{parapet:.8}),n.box("wall",r-.15,3.35,a,o+.15,s+1.5,a+.3,{bottom:!0}),n.box("site",r-.6,0,a,o+.6,.15,a+2.3),n.sides(r,l,o,a,{front:v=>{let b=v/2,g=v*.1,R=v*.8;n.win(g,.5,b-1.15,3.1,{mx:Math.max(1,Math.round((b-1.15-g)/1.5)-1),my:1,lum:.8}),n.win(b+1.15,.5,R,3.1,{mx:Math.max(1,Math.round((R-b-1.15)/1.5)-1),my:1,lum:.8}),n.win(b-.95,.15,b+.95,2.5,{mx:1,lum:.95,proud:.1}),n.win(b-.95,2.6,b+.95,3.1,{lum:.7});for(let w of[3.62,s+1.25])n.line("glass",[-.15,w,.31],[v+.15,w,.31]);n.box("detail",v*.83,.15,.05,v*.97,2.05,1),n.line("detail",[v*.9,.15,1],[v*.9,2.05,1]),n.box("detail",.3,.15,.05,1.7,1.75,.8);for(let w=1;w<4;w++)n.line("detail",[.3+w*.35,.15,.8],[.3+w*.35,1.75,.8]);for(let w=v*.22;w<=v*.78;w+=1.7)n.cyl("detail",w,2.75,.09,0,1.05,6)},back:v=>{n.door(v*.72-.5,v*.72+.5,2.15),n.door(v*.3-.9,v*.3+.9,2.4,{panels:3})},right:v=>n.door(v*.7-.5,v*.7+.5,2.15)}),hn(n,-e*.22,l+i*.52,s),hn(n,e*.2,l+i*.42,s,2.2,1.5,1.1),Mi(n,e*.04,l+i*.24,s),Mi(n,-e*.36,l+i*.24,s),n.box("detail",o-2.4,s,l+1.2,o-1.4,s+.35,l+2.2),gh(n,o+3.2,l+.5),n.slab(-c/2,h-u/2,c/2,h+u/2,f,.95),n.loop("glass",[[-c/2-.01,f+.5,h-u/2-.01],[c/2+.01,f+.5,h-u/2-.01],[c/2+.01,f+.5,h+u/2+.01],[-c/2-.01,f+.5,h+u/2+.01]]);let m=Math.max(2,Math.round(c/8.7));for(let v=0;v<m;v++){let b=-c/2+c*(v+.5)/m;n.box("site",b-2.9,0,h-.62,b+2.9,.16,h+.62),n.box("detail",b-.26,.16,h-.26,b+.26,f,h+.26,{top:!1}),n.box("detail",b-.42,.16,h-.42,b+.42,1.25,h+.42);for(let g of[-1,1]){let R=b+g*1.6;n.box("detail",R-.3,.16,h-.44,R+.3,2.15,h+.44),n.box("detail",R-.36,2.15,h-.5,R+.36,2.4,h+.5,{bottom:!0});for(let w of[-1,1]){let C=h+w*.45;n.quad("glass",[R-.2,1.3,C],[R+.2,1.3,C],[R+.2,1.85,C],[R-.2,1.85,C],.85),n.path("detail",[[R+.12,1.2,C],[R+.2,.7,C+w*.25],[R+.05,1,C+w*.1]])}n.path("site",[[b+g*2.75,.16,h-.45],[b+g*2.75,1,h-.45],[b+g*2.75,1,h+.45],[b+g*2.75,.16,h+.45]])}for(let g of[-1,1])n.box("glass",b-.55,f-.07,h+g*u*.27-.3,b+.55,f,h+g*u*.27+.3,{lum:1,bottom:!0});v%2===0?ce(n,b+.2,h+2.4,0,v):ce(n,b-.3,h-2.4,Math.PI,1)}let _=-c/2-9,S=c/2+10,p=l-5,d=h+u/2+9;fe(n,"site",_,p,S,d),bs(n,_-6,S+6,d),Un(n,r+.6,a+2.3,Math.max(3,Math.floor((e-1.2)/2.75)),5,!1,3,.4,!0);for(let v=0;v<3;v++)n.cyl("site",_+3+v*1.7,h-u/2-2.2,.45,0,.05,10);return n.box("detail",r-2.4,0,a+.3,r-1.7,1.55,a+.9),Ms(n,S-3,d-2.5,8.8,3.2,4.6,0,4),xn(n,_+2,d-2,8,0),xn(n,S-2,p+2,8,Math.PI),Gt(n,_+3,p+3,6.5,2.2),Gt(n,_+7.5,p+2.5,5.2,1.7,!0),_e(n,.9,a+3.2),_e(n,-c/2+c*.5/m+1.9,h+1.1),{name:"Gas station and store",cell:3.048,frontPad:12}}function xh(n,t){let e=30*t,i=26*t,s=5,r=-e/2,o=e/2,a=-i/2,l=i/2,c=8.2,u=7.9,h=r-.7,f=h+c,m=l+.7,_=m-c;n.box("wall",r,0,a,o,s,l,{top:!1}),n.flat(r,a,o,l,s,{parapet:1}),n.box("wall",-e*.1,s,l-.3,e*.42,s+2,l+.28,{bottom:!0}),n.box("wall",h,0,_,f,u,m,{top:!1}),n.hip(h,_,f,m,u,{pitch:.6,over:.55}),n.sides(h,_,f,m,{front:g=>{n.win(g/2-1.05,0,g/2+1.05,2.5,{mx:1,lum:.95,proud:.1}),n.slab(g/2-1.9,.05,g/2+1.9,1.7,2.8,.22,"detail"),n.win(.9,5.5,g-.9,6.9,{mx:3,lum:.8});for(let R of[1.35,g-1.35])n.win(R-.55,.6,R+.55,2.5,{lum:.6})},left:g=>{n.win(.9,5.5,g-.9,6.9,{mx:3,lum:.8}),n.win(g/2-1.6,.6,g/2+1.6,2.7,{mx:2,lum:.7}),dl(n,g/2-1.9,g/2+1.9)},right:g=>n.win(.9,6.2,g-.9,6.9,{mx:3,lum:.8})}),n.box("site",f,0,l,o+.5,.15,l+3),n.sides(r,a,o,l,{front:g=>{let R=f-r+1.2,w=Math.max(2,Math.floor((g-R-1)/4.7));for(let C=0;C<w;C++){let x=R+(g-R-1)*(C+.5)/w;n.win(x-1.8,.5,x+1.8,2.9,{mx:2,my:1,lum:.82}),dl(n,x-1.95,x+1.95)}for(let C of[s+.5,s+1.6])n.line("glass",[g/2-e*.1+.4,C,.29],[g/2+e*.42-.4,C,.29])},right:g=>{for(let w of[g*.12,g*.3])n.win(w-1.7,.5,w+1.7,2.9,{mx:2,my:1,lum:.8}),dl(n,w-1.85,w+1.85);let R=g*.58;n.win(R-.75,1.05,R+.75,2.2,{lum:.95}),n.slab(R-2.5,.02,R+2.5,3.6,3.3,.3);for(let w of[-2.25,2.25])n.box("detail",R+w-.1,0,3.3,R+w+.1,3.3,3.5);n.box("detail",g*.86-.9,.95,4.3,g*.86+.9,2.5,4.5,{bottom:!0}),n.line("detail",[g*.86,0,4.4],[g*.86,.95,4.4]),n.path("site",[[-7,.02,4.3],[g+6,.02,4.3]]),n.path("site",[[-7,.02,.5],[g+6,.02,.5]]),ce(n,R+.4,2.3,0,1),ce(n,R+6.6,2.4,0,0),ce(n,R+12.6,2.3,0,2),n.door(g*.93-.5,g*.93+.5,2.15)},left:g=>{let R=g*.2,w=g-c+.1;n.box("site",R,0,.2,w,.12,6.6);for(let x of[.55,1.02])n.path("detail",[[R,x,.2],[R,x,6.6],[w,x,6.6]]);for(let x=R;x<=w+.01;x+=(w-R)/5)n.line("detail",[x,.12,6.6],[x,1.02,6.6]);for(let x=.2;x<6.6;x+=1.6)n.line("detail",[R,.12,x],[R,1.02,x]);let C=Math.max(2,Math.round((w-R)/3.4));for(let x=0;x<C;x++)for(let y of[2,4.9]){let M=R+(w-R)*(x+.5)/C;n.cyl("detail",M,y,.48,.72,.77,8),n.line("detail",[M,.12,y],[M,2.75,y]),n.cone("detail",M,y,1.25,2.15,2.75,8)}n.win(R+1,0,R+2.9,2.4,{mx:1,lum:.85}),n.win(R+4,.6,w-.6,2.7,{mx:3,lum:.7})},back:g=>{n.door(g*.25-.5,g*.25+.5,2.15),n.door(g*.62-1.3,g*.62+1.3,2.8,{panels:3})}});for(let[g,R]of[[-.26,.2],[.12,.22],[-.1,-.2],[.3,-.12]])hn(n,e*g,i*R,s,3,2,1.45);for(let g=0;g<3;g++)Mi(n,o-3-g*1.6,a+3.2,s,.38);n.box("detail",r+2,s,a+2,r+3,s+.35,a+3),gh(n,r+1,a-9);let S=l+3,p=r-12,d=o+14,v=a-11,b=S+25;return fe(n,"site",p,v,d,b),bs(n,p-6,d+6,b),Un(n,f+1.5,S,Math.floor((o-f-1)/2.75),5.4,!1,5,.62),Un(n,p+3,S+12.6,Math.floor((d-p-8)/2.75),5.4,!0,8,.5),xn(n,p+2,S+9,8,0),xn(n,d-2,S+9,8,Math.PI),xn(n,(p+d)/2,S+21,8,Math.PI/2,!0),Ms(n,d-3.5,b-3,9.2,4.2,3.2,0,2),Gt(n,p+3,b-3.5,6.2,2),Gt(n,p+3,v+4,7.4,2.5),Gt(n,d-4,v+4,6.8,2.3),Gt(n,h-3,m+3.5,5.2,1.7),_e(n,h+c/2+.8,m+2.2),_e(n,h+c/2+1.6,m+2.7),_e(n,r-3.4,a+i*.45),{name:"Restaurant",cell:3.048,frontPad:16}}var vh=n=>3+Math.min(3,Math.floor((n-12e3)/7e3)),yh=n=>n<=78?"I":n<=132?"L":"U",Mh=n=>vh(n)+yh(n*.092903/18.3),pl=n=>n>=125e3?3:n>=1e5?2:1;function Sh(n,t,e){let i=vh(e),s=18.3,r=t/s,o=yh(r),a=o==="I"?r:o==="L"?r*.6:r*.46,l=o==="I"?0:o==="L"?r-a:(r-a)/2,c=4.3,u=3.1,h=c+(i-1)*u,f=-a/2,m=a/2,_=-s/2,S=s/2,p=[[f,_,m,S]];l&&p.push([m-s,_-l,m,_]),o==="U"&&p.push([f,_-l,f+s,_]),p.forEach(([F,q,W,et],rt)=>{n.box("wall",F,0,q,W,h,et,{top:!1}),n.flat(F,q,W,et,h,{parapet:1.1});let ut=(xt,Rt)=>{let J=Math.max(2,Math.round(xt/3.9));for(let L=0;L<J;L++){let K=xt*(L+.5)/J;for(let H=0;H<i;H++){let dt=H===0?.9:c+(H-1)*u+.85;n.pane(K-.95,dt,K+.95,H===0?3.3:dt+1.75,ke(L+rt*31+Rt*57,H)>.56?.95:.22)}}for(let L=1;L<i;L++)n.line("detail",[0,c+(L-1)*u,.02],[xt,c+(L-1)*u,.02])};n.sides(F,q,W,et,{front:xt=>ut(xt,0),right:xt=>ut(xt,1),back:xt=>ut(xt,2),left:xt=>ut(xt,3)})});let d=(F,q,W)=>{let et=W?3.4:1.1,rt=W?1.1:3.4;n.box("wall",F-et,0,q-rt,F+et,h+2.5,q+rt);for(let ut=0;ut<i;ut++){let xt=ut===0?1:c+(ut-1)*u+.6;if(W)for(let Rt of[-1,1])n.at(F-.5,0,q+Rt*rt,Rt>0?0:Math.PI,()=>n.pane(Rt>0?0:-1,xt,Rt>0?1:0,xt+2,.7));else for(let Rt of[-1,1])n.at(F+Rt*et,0,q+(Rt>0?.5:-.5),Rt>0?Math.PI/2:-Math.PI/2,()=>n.pane(0,xt,1,xt+2,.7))}};o!=="U"&&d(f-.5,0,!1),o==="I"&&d(m+.5,0,!1),l&&d(m-s/2,_-l-.5,!0),o==="U"&&d(f+s/2,_-l-.5,!0),n.box("wall",-7.4,0,S-.2,7.4,h+2.3,S+.9),n.at(-7.4,0,S+.9,0,()=>{n.win(1.2,.2,13.6,c+u-.5,{mx:5,my:2,lum:.9,proud:.1});for(let F=2;F<i;F++){let q=c+(F-1)*u+.6;n.pane(4.2,q,10.6,q+2.1,.7),n.line("glass",[7.4,q,.05],[7.4,q+2.1,.05])}for(let F of[h+.9,h+1.7])n.line("glass",[3,F,.02],[11.8,F,.02])});let v=S+.9,b=v+10.5;n.slab(-8.2,v,8.2,b,5,.9);for(let F of[-1,1])for(let q of[v+4.2,b-1.2])n.box("detail",F*7-.42,0,q-.42,F*7+.42,5,q+.42,{top:!1}),n.box("detail",F*7-.6,0,q-.6,F*7+.6,1.1,q+.6);for(let F of[-3.6,0,3.6])for(let q of[v+3,b-3])n.box("glass",F-.4,4.93,q-.4,F+.4,5,q+.4,{lum:1,bottom:!0});ce(n,-1.8,v+6.4,0,1),ce(n,4.6,v+6.6,0,0),_e(n,-4.6,v+2.6),_e(n,-3.9,v+2.2),n.box("wall",3,h,-3.6,9.6,h+3.5,2.4);let g=Math.max(2,Math.round(a/24));for(let F=0;F<g;F++){let q=f+a*(F+.5)/g;q>1&&q<11.6||(hn(n,q,5.2,h,3.4,2.2,1.6),Mi(n,q+4,-5.5,h,.4))}n.cyl("detail",-10.5,-1.5,1.7,h,h+2.7,12),n.cyl("detail",-10.5,-1.5,1.1,h+2.7,h+2.95,12),p.slice(1).forEach(([F,q,W,et])=>{for(let rt=0;rt<Math.max(1,Math.round((et-q)/28));rt++)hn(n,(F+W)/2,q+(et-q)*(rt+.5)/Math.max(1,Math.round((et-q)/28)),h,3.4,2.2,1.6)});let[R,w]=o==="I"?[0,_-13]:o==="L"?[m-s-17,_-14]:[0,_-Math.max(15,l*.5)],C=8,x=4.2;fe(n,"site",R-C-4.5,w-x-4,R+C+4.5,w+x+4),n.quad("glass",[R-C,.04,w-x],[R+C,.04,w-x],[R+C,.04,w+x],[R-C,.04,w+x],.24),fe(n,"glass",R-C,w-x,R+C,w+x,.06),fe(n,"glass",R-C+.4,w-x+.4,R+C-.4,w+x-.4,.03);for(let F=0;F<6;F++)n.box("site",R-C+.6+F*2.6,.25,w+x+1.4,R-C+1.3+F*2.6,.4,w+x+3.2,{bottom:!0});n.cyl("glass",R+C+2.2,w-x-1.6,1.3,0,.35,12,{lum:.3}),Qn(n,[[R-C-4.5,w-x-4],[R+C+4.5,w-x-4],[R+C+4.5,w+x+4],[R-C-4.5,w+x+4],[R-C-4.5,w-x-4]],1.4,2.6);let y=b+5.5,M=f-16,A=m+16,D=_-l-16,V=y+27,B=Math.floor((A-M-44)/2/2.75);n.path("site",[[M+4,.02,v+3.4],[A-4,.02,v+3.4]]),n.path("site",[[M+4,.02,b+3],[-10,.02,b+3]]),n.path("site",[[10,.02,b+3],[A-4,.02,b+3]]),Un(n,M+6,y,B,5.4,!1,11,.55),Un(n,A-6-B*2.75,y,B,5.4,!1,13,.5),Un(n,M+6,y+12.6,B,5.4,!0,17,.45),Un(n,A-6-B*2.75,y+12.6,B,5.4,!0,19,.55),fe(n,"site",M,D,A,V),bs(n,M-8,A+8,V);for(let F=0;F<4;F++)xn(n,M+6+(A-M-12)*F/3,y+9,9,Math.PI/2,!0);let Z=Math.max(4,Math.round((A-M)/16));for(let F=0;F<Z;F++){let q=M+5+(A-M-10)*F/(Z-1);Math.abs(q)<9||Gt(n,q,V-3.5,6.5+ke(F,2)*2,2.2+ke(F,3)*.6)}for(let F=0;F<3;F++)ul(n,-13-F*2.2,b+.5,10+(F===1?1:0));return Ms(n,A-5,V-4,11,4.6,3.6,0,2),Gt(n,M+5,D+6,9,3.2),Gt(n,A-5,D+6,8,2.8,!0),Gt(n,M+5,_-4,7.5,2.6),{name:`${i}-story hotel`,cell:15.24,frontPad:18}}function bh(n,t){let e=48*t,i=22*t,s=8.6,r=62*t,o=44*t,a=7.2,l=i,c=-e/2,u=e/2,h=-r/2,f=r/2,m=-o,_=i*.45;n.box("wall",h,0,m,f,a,0,{top:!1}),n.flat(h,m,f,0,a,{parapet:.9}),n.box("wall",c,a,-.3,u,s,0,{bottom:!1});for(let[y,M]of[[c,c+.3],[u-.3,u]])n.box("wall",y,0,0,M,s,_,{top:!1});n.flat(c,0,u,l,s,{parapet:.9}),n.box("wall",c-.25,7.3,l-.35,u+.25,s+.9,l+.25,{bottom:!0});for(let y of[c-.25,u-.35])n.box("wall",y,7.3,_,y+.6,s+.9,l-.35,{bottom:!0});n.at(c,0,l,0,()=>n.win(0,.12,e,7.3,{mx:Math.round(e/2.4)-1,my:2,lum:.34,proud:.12})),n.at(u,0,l,Math.PI/2,()=>n.win(0,.12,l-_,7.3,{mx:Math.round((l-_)/2.4)-1,my:2,lum:.3,proud:.12})),n.at(c,0,_,-Math.PI/2,()=>n.win(0,.12,l-_,7.3,{mx:Math.round((l-_)/2.4)-1,my:2,lum:.3,proud:.12})),fe(n,"site",c+.4,.4,u-.4,l-.4,.03);for(let[y,M,A,D]of[[-.33,.6,.5,0],[-.12,.42,-.3,1],[.14,.62,.35,2],[.34,.4,-.45,0]])ce(n,e*y,i*M,A,D);n.box("detail",-3,0,i*.12,3,1.1,i*.12+1.2),n.slab(c-2.6,l-1,u+2.6,l+3.8,s+1.3,.36);for(let y=0;y<7;y++){let M=c-2+(e+4)*y/6;Math.abs(M)<6.2||n.cyl("detail",M,l+3.3,.15,0,s+1.3,8,{base:!1})}let S=5.8;for(let y of[-1,1])n.box("wall",y>0?S-1.4:-S,0,l+.15,y>0?S:-S+1.4,11.2,l+4.6);n.box("wall",-S+1.4,9.3,l+.15,S-1.4,11.2,l+4.6,{bottom:!0}),n.at(-S+1.4,0,l+4.1,0,()=>{let y=(S-1.4)*2;n.win(0,0,y,9.3,{mx:3,my:3,lum:.6,proud:.1}),n.door(y/2-1.1,y/2+1.1,2.6,{y0:0})});for(let y of[9.9,10.6])n.line("glass",[-S+2,y,l+4.61],[S-2,y,l+4.61]);n.sides(h,m,f,0,{right:y=>{let M=Math.max(5,Math.round((y-12)/5.6));for(let D=0;D<M;D++){let V=7+(y-12)*(D+.5)/M;n.door(V-1.9,V+1.9,4.3,{panels:4})}let A=7+(y-12)*2/M;n.slab(3,.02,A+1,7.2,4.9,.36);for(let D of[3.4,(A+4)/2,A+.6])n.cyl("detail",D,6.8,.16,0,4.9,8,{base:!1});ce(n,A*.55,3.4,0,1),n.path("site",[[-4,.02,7.6],[y+4,.02,7.6]])},left:y=>{for(let M of[y*.2,y*.34,y*.48])n.door(M-1.8,M+1.8,4.3,{panels:4});for(let M of[y*.62,y*.9])n.door(M-.5,M+.5,2.15);n.win(y*.7,1.1,y*.84,2.6,{mx:2,lum:.4})},back:y=>{for(let M of[y*.3,y*.42])n.door(M-1.4,M+1.4,4.3,{y0:1.2,panels:3}),n.box("detail",M-1.7,.85,0,M+1.7,1.2,.35,{bottom:!0});n.door(y*.6-.5,y*.6+.5,2.15)},front:y=>{for(let M of[(r-e)/4,y-(r-e)/4])(r-e)/2>5.4&&n.win(M-2.2,1,M+2.2,3.2,{mx:2,lum:.5})}});for(let y=0;y<4;y++)for(let M of[.3,.68])hn(n,h+r*(y+.5)/4,m*M,a,3.6,2.4,1.7);for(let y=0;y<6;y++)fl(n,h+r*(y+.5)/6,m*.49,a+.04,1.5,3);for(let y=0;y<4;y++)Mi(n,h+4+y*2.2,m+5,a,.42);hn(n,-e*.25,i*.5,s,3.4,2.2,1.6),hn(n,e*.25,i*.5,s,3.4,2.2,1.6);let p=l+14,d=l+22.5,v=0;for(let y=h-6;y<=f+6;y+=3.45)Math.abs(y)<6.5||ce(n,y,p,Math.PI/2+.5,v++%3,!1);for(let y=h-6;y<=f+6;y+=2.95)ce(n,y,d,Math.PI/2,v++%3,!1);for(let y of[-1,1]){let M=y*(e/2+7.5),A=l+6.5;n.box("site",M-2.9,0,A-1.6,M+2.9,.9,A+1.6),n.at(M,.9,A,y*.35,()=>ce(n,0,0,0,y>0?1:2))}let b=h-9,g=Math.floor((o+i-8)/2.95);for(let y=0;y<g;y++)for(let M=0;M<4;M++)ke(y,M+40)<.86&&ce(n,b-M*6.1-(M>1?5.5:0),m+5+y*2.95,M%2?Math.PI:0,Math.floor(ke(y,M)*3),!1);Un(n,f+13,l-14,7,5.4,!1,23,.55,!0);let R=b-4*6.1-12,w=f+36,C=m-12,x=d+8.5;fe(n,"site",R,C,w,x),bs(n,R-10,w+10,x);for(let y=0;y<5;y++)xn(n,R+8+(w-R-16)*y/4,l+18.2,10,Math.PI/2,!0);for(let y=0;y<3;y++)xn(n,b-9.2,m+6+(o+i-10)*y/2,10,0,!0);Ms(n,w-7,x-4,13,5.2,5,0,2);for(let y=0;y<3;y++)ul(n,S+5+y*2.4,l+9,11);return Gt(n,w-6,C+6,8.5,3),Gt(n,w-14,C+5,7.5,2.6,!0),Gt(n,f+30,l+2,7,2.4),_e(n,2.2,l+7),_e(n,3,l+7.5),_e(n,c-4.4,l+9),{name:"Car dealership",cell:15.24,frontPad:14}}function wh(n,t,e){let i=pl(e),s=t/i,r=Math.sqrt(s*2),o=s/r,a=11,l=54,c=-r/2,u=r/2,h=-o/2,f=o/2,m=(w,C,x)=>n.at(0,0,w,C?Math.PI:0,()=>{n.box("wall",c,0,h,u,a,f,{top:!1}),n.flat(c,h,u,f,a,{parapet:1});let y=B=>{let Z=Math.round(B/7.3);for(let F=1;F<Z;F++)n.line("detail",[B*F/Z,0,.02],[B*F/Z,a+1,.02]);n.line("detail",[0,a*.7,.02],[B,a*.7,.02])},M=Math.min(17,r*.17),A=Math.min(12,o*.3);n.sides(c,h,u,f,{front:B=>{y(B);let Z=11,F=B-M-5,q=Math.max(4,Math.floor((F-Z)/4.4));for(let W=0;W<q;W++){let et=Z+(F-Z)*(W+.5)/q;n.door(et-1.4,et+1.4,4.3,{y0:1.25,panels:3}),n.box("detail",et-1.75,.9,0,et+1.75,1.25,.4,{bottom:!0}),ke(W,x*7+1)>.56&&kr(n,et,7.4,Math.PI/2,ke(W,x*7+2)>.45)}n.door(3,7.4,4.7,{panels:4}),n.path("site",[[2.4,.02,0],[2.4,.02,9],[8,.02,9],[8,.02,0]]),n.win(B-M,.2,B-.4,7.4,{mx:Math.round(M/2.3),my:3,lum:.6,proud:.15}),n.slab(B-M*.78,.02,B-M*.22,2.6,3.6,.3),n.win(B-M*.5-1,.2,B-M*.5+1,2.6,{mx:1,lum:.95,proud:.2})},right:B=>{y(B),n.win(.4,.2,A,7.4,{mx:Math.round(A/2.3),my:3,lum:.55,proud:.15}),n.door(B*.7-.5,B*.7+.5,2.2)},back:B=>{y(B);for(let Z of[B*.2,B*.5,B*.8])n.door(Z-.5,Z+.5,2.2)},left:B=>{y(B),n.door(B*.5-2.1,B*.5+2.1,4.6,{panels:4}),n.door(B*.8-.5,B*.8+.5,2.2)}});let D=Math.min(10,Math.max(3,Math.round(r/14))),V=Math.min(4,Math.max(2,Math.round(o/17)));for(let B=0;B<D;B++)for(let Z=0;Z<V;Z++)fl(n,c+r*(B+.5)/D,h+o*(Z+.5)/V,a+.04);for(let B=0;B<4;B++)hn(n,c+r*(B+.5)/4+r/(D*2),h+o*Math.round(V/2)/V,a,3.6,2.4,1.7);hn(n,u-M*.5,f-A*.5,a,2.6,1.8,1.3),Mi(n,u-M*.5-4,f-3,a,.4),n.box("detail",c+2,a,h+2,c+3,a+.35,h+3),Un(n,u+7,f-8,8,5.4,!1,x*5+3,.6)}),_=i===1?[[0,!1]]:i===2?[[-(l+o)/2,!1],[(l+o)/2,!0]]:[[-(l+o)/2,!1],[(l+o)/2,!0],[-(l+o)/2-o-26,!0]];_.forEach(([w,C],x)=>m(w,C,x));let S=Math.min(..._.map(w=>w[0]))-o/2,p=Math.max(..._.map(w=>w[0]))+o/2,d=c-30,v=u+36,b=S-(i===3?44:14),g=p+(i===1?50:16),R=Math.min(12,Math.floor((p-S)/4.2));for(let w=0;w<R;w++)ke(w,77)<.7&&kr(n,c-17,S+4+w*4.2,0,!1);for(let w=0;w<=R;w++)n.line("site",[c-25,.02,S+1.9+w*4.2],[c-9,.02,S+1.9+w*4.2]);if(i===1)for(let w=0;w<7;w++)w%3!==1&&kr(n,c+16+w*4.3,f+38,Math.PI/2,!1);n.box("site",v-9,0,g-5,v-6,2.7,g-2.4),n.slab(v-9.6,g-5.6,v-5.4,g-1.8,2.7,.2,"site"),n.line("site",[v-6,1,g-1.6],[v-1,1,g-1.6]),Qn(n,[[v-10,g],[d,g],[d,b],[v,b],[v,g-6]],2.4,8),bs(n,d-12,v+12,g+3);for(let[w,C]of[[d+4,b+4],[v-4,b+4],[d+4,g-4],[0,i===1?f+30:0],[u+30,(S+p)/2]])xn(n,w,C,12,0,!0);for(let w=0;w<6;w++)Gt(n,d+10+(v-d-30)*w/5,g+1,7+ke(w,5)*2,2.4+ke(w,6)*.6,w%3===2);return _e(n,u-6,(_[0][1]?_[0][0]-o/2:_[0][0]+o/2)+4),{name:i>1?`${i} warehouses`:"Warehouse",cell:15.24,frontPad:i===1?18:0}}var ml=.092903,s0={bungalow:126.6,ranch:246.5,twostory:288.3,estate:477.8,gas:419.5,restaurant:791.3,dealer:4015.5},r0={home:[[1700,"bungalow"],[3100,"ranch"],[4600,"twostory"],[1/0,"estate"]],com:[[6e3,"gas"],[12e3,"restaurant"],[4e4,"hotel"],[8e4,"dealer"],[1/0,"warehouse"]]},o0={bungalow:fh,ranch:dh,twostory:ph,estate:mh,gas:_h,restaurant:xh,dealer:bh};function Yr(n,t){let e=r0[n].find(i=>t<i[0])[1];return{type:e,id:e==="hotel"?"hotel"+Mh(t):e==="warehouse"?"warehouse"+pl(t):e}}function Eh(n,t,e){let i=Yr(n,t).type;if(i==="hotel")return{type:i,...Sh(e,t*ml,t)};if(i==="warehouse")return{type:i,...wh(e,t*ml,t)};let s=t*ml/(n==="home"?1.1:1);return{type:i,...o0[i](e,Math.sqrt(s/s0[i]))}}var a0={wall:{face:[.022,.022,.02],line:16185074,w:1.25,op:.92},roof:{face:[.034,.029,.01],line:16769626,w:1.9,op:1},glass:{face:[1,.78,.1],line:16770698,w:.9,op:.7},detail:{face:[.02,.02,.018],line:12896192,w:1,op:.75},site:{face:[.012,.012,.011],line:9278864,w:.9,op:.36}},l0=`attribute float lum; varying vec3 vW; varying float vLum;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vLum = lum; gl_Position = projectionMatrix * viewMatrix * w; }`,c0=`precision highp float;
varying vec3 vW; varying float vLum;
uniform vec3 uColor, uCam, uCause, uRefC, uOwnerC; uniform float uKind, uClipY, uBuild, uTime, uPulse; uniform vec4 uBounds; uniform vec2 uSplit;
float lineAt(float c){ float fw = max(fwidth(c), 1e-5); return (1.0 - min(abs(fract(c - 0.5) - 0.5) / fw, 1.0)) * smoothstep(0.55, 0.12, fw); }
void main(){
  if (vW.y > uClipY) discard;
  vec3 nx = cross(dFdx(vW), dFdy(vW)); vec3 n = length(nx) > 1e-12 ? normalize(nx) : vec3(0.0, 1.0, 0.0); vec3 v = normalize(uCam - vW); if (dot(n, v) < 0.0) n = -n;
  float ndl = dot(n, normalize(vec3(0.35, 0.8, 0.5))) * 0.5 + 0.5;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  vec3 col; float a = 1.0;
  if (uKind < 0.5) { col = uColor * (0.45 + 0.9 * ndl) + vec3(0.50, 0.48, 0.40) * rim * 0.10; }
  else if (uKind < 1.5) {
    float t = clamp((vW.x - uBounds.x) / max(uBounds.y - uBounds.x, 0.001), 0.0, 1.0), e = 0.006;
    vec3 band = mix(uOwnerC, uRefC, smoothstep(uSplit.x - e, uSplit.x + e, t)); band = mix(band, uCause, smoothstep(uSplit.x + uSplit.y - e, uSplit.x + uSplit.y + e, t));
    float seam = (1.0 - smoothstep(0.0, 0.012, abs(t - uSplit.x))) * step(0.004, uSplit.x) + (1.0 - smoothstep(0.0, 0.012, abs(t - uSplit.x - uSplit.y))) * step(0.004, uSplit.y);
    float pitched = step(n.y, 0.985);
    float lines = mix(max(lineAt(vW.x / 3.0), lineAt(vW.z / 3.0)) * 0.55, lineAt(vW.y / 0.42), pitched);
    float sweep = fract(uTime / 7.0) * 2.2, sx = mix(uBounds.x - 4.0, uBounds.y + 4.0, sweep), d = (vW.x + (vW.z - uBounds.z) * 0.35 - sx) / max((uBounds.y - uBounds.x) * 0.05, 0.6);
    float scan = exp(-d * d) * step(sweep, 1.0);
    col = uColor * (0.5 + 0.8 * ndl) + band * (0.014 + 0.085 * ndl * ndl) + vec3(1.0) * seam * 0.35 + band * lines * 0.32 + band * scan * 0.30 + band * uPulse * 0.28 + vec3(0.9, 0.75, 0.2) * rim * 0.10;
  } else { col = uColor * (0.03 + vLum * vLum * 0.36) * (0.7 + 0.5 * ndl); }
  float edge = uBuild * smoothstep(0.7, 0.0, uClipY - vW.y); col += vec3(1.0, 0.84, 0.04) * edge * (uKind > 1.5 ? 0.4 : 0.9);
  gl_FragColor = vec4(clamp(col, 0.0, 6.0), a);
}`,h0=`precision highp float;
varying vec3 vW; uniform float uR, uCell, uTime;
float grid(vec2 p){ vec2 g = abs(fract(p - 0.5) - 0.5) / max(fwidth(p), vec2(1e-5)); return 1.0 - min(min(g.x, g.y), 1.0); }
void main(){
  float r = length(vW.xz), fade = smoothstep(uR * 2.9, uR * 0.8, r);
  float dens = max(fwidth(vW.x / uCell), fwidth(vW.z / uCell));
  float g1 = grid(vW.xz / uCell) * 0.05 * smoothstep(0.45, 0.08, dens), g2 = grid(vW.xz / (uCell * 5.0)) * 0.095 * smoothstep(0.5, 0.1, dens / 5.0);
  float glow = exp(-r * r / (uR * uR * 1.6)) * 0.07;
  float rr = uR * 1.62, fr = max(fwidth(r), 1e-5), ring = (1.0 - min(abs(r - rr) / fr, 1.0)) * 0.22 + (1.0 - min(abs(r - rr * 1.07) / fr, 1.0)) * 0.07;
  float ang = atan(vW.z, vW.x) + uTime * 0.04, seg = ang / (3.14159265 / 36.0), tick = 1.0 - min(abs(fract(seg - 0.5) - 0.5) / max(fwidth(seg), 1e-5), 1.0);
  float major = step(abs(fract(seg / 9.0 - 0.5) - 0.5), 0.056);
  float tk = tick * step(rr, r) * step(r, rr * (1.022 + 0.03 * major)) * 0.34;
  vec3 col = vec3(0.62, 0.62, 0.58) * (g1 + g2) * fade + vec3(0.42, 0.34, 0.04) * glow + vec3(1.0, 0.84, 0.04) * (ring + tk);
  gl_FragColor = vec4(clamp(col, 0.0, 4.0), 1.0);
}`,Th=n=>1-Math.pow(1-n,3),Ah=n=>Math.round(n/.3048)+" ft";function u0(n,t={}){let e=matchMedia("(prefers-reduced-motion: reduce)").matches,i=new xr({antialias:!1,alpha:!1,powerPreference:"high-performance"});i.localClippingEnabled=!0,i.setClearColor(460808,1);let s=i.domElement;s.className="holo-gl",n.prepend(s);let r=new vr,o=new Le(24,1,.5,4e3);{let L=document.createElement("canvas");L.width=L.height=256;let K=L.getContext("2d"),H=K.createRadialGradient(128,150,0,128,150,190);H.addColorStop(0,"#1d1b12"),H.addColorStop(.55,"#0f0f0c"),H.addColorStop(1,"#070808"),K.fillStyle=H,K.fillRect(0,0,256,256);let dt=new yr(L);dt.colorSpace=Ne,r.background=dt}let a={uClipY:{value:1e6},uBuild:{value:0},uTime:{value:0},uPulse:{value:0},uCam:{value:new N},uBounds:{value:new te(-1,1,-1,1)},uSplit:{value:new At(0,0)},uCause:{value:new Ot(16766474)},uRefC:{value:new Ot(10258687)},uOwnerC:{value:new Ot(16757284)}},l=new je(new N(0,-1,0),1e6),c={},u=new kn;r.add(u);let h=[],f=(L,K,H,dt)=>{let lt=new $n({color:L,linewidth:K,transparent:!0,opacity:H,depthTest:dt,depthWrite:!1,clippingPlanes:[l]});return lt.userData.w=K,h.push(lt),lt};for(let L of Wr){let K=a0[L],H=L==="glass",dt=new le({vertexShader:l0,fragmentShader:c0,side:tn,uniforms:{...a,uColor:{value:new N(...K.face)},uKind:{value:L==="roof"?1:H?2:0}},transparent:H,blending:H?fi:Xn,depthWrite:!H,polygonOffset:!0,polygonOffsetFactor:H?0:1.5,polygonOffsetUnits:H?0:2}),lt=new ye(new Re,dt);lt.renderOrder=H?2:0,lt.frustumCulled=!1;let Et=new vi(new cn,f(K.line,K.w,K.op,!0));Et.renderOrder=3,Et.frustumCulled=!1;let Ht=new vi(Et.geometry,f(K.line,Math.max(.8,K.w*.7),L==="site"?.03:.085,!1));Ht.renderOrder=4,Ht.frustumCulled=!1,u.add(lt,Et,Ht),c[L]={mesh:lt,lines:Et,ghost:Ht}}let m=new ye(new Ki(1,1).rotateX(-Math.PI/2),new le({vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:h0,uniforms:{uR:{value:10},uCell:{value:3.048},uTime:a.uTime},transparent:!0,blending:fi,depthWrite:!1}));m.renderOrder=-1,m.position.y=-.02,r.add(m);let _=new vi(new cn,new $n({color:16185074,linewidth:1,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}));_.renderOrder=5,_.frustumCulled=!1,r.add(_),h.push(_.material);let S=new vi(new cn,new $n({color:16766474,linewidth:1.6,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}));S.renderOrder=6,S.frustumCulled=!1,r.add(S),h.push(S.material);let p=new zr(i,new Me(4,4,{type:/hf=0/.test(location.hash)?rn:Ge,samples:t.lite||/ms=0/.test(location.hash)?0:4}));p.addPass(new Vr(r,o));let d=new es(new At(4,4),.42,.5,.55);/bloom=0/.test(location.hash)||p.addPass(d),/out=0/.test(location.hash)||p.addPass(new Hr);let v=document.createElement("div");v.className="holo-ov",v.innerHTML='<svg class="holo-lead" aria-hidden="true"><path/><circle r="2.5"/></svg><div class="holo-tag holo-roof"><span></span><b></b></div><div class="holo-tag holo-dim"></div><div class="holo-tag holo-dim"></div>',n.append(v);let b=v.querySelector("path"),g=v.querySelector("circle"),R=v.querySelector(".holo-roof"),[w,C]=v.querySelectorAll(".holo-dim"),x={kind:"home",type:null,target:2500,shown:2500,clip:0,phase:"in",phaseT:0,yaw:-.62,pitch:.5,vyaw:0,R:12,Rt:12,cy:2,cyT:2,cx:0,cz:0,cxT:0,czT:0,top:6,split:[0,0],splitT:[0,0],pulse:0,info:null,drag:null,idle:0,seen:!0,t:0,labelsA:0,built:!1,given:""},y=0,M=0,A=0,D=0,V=t.lite?1.5:2,B=0,Z=0;function F(){let L=new Gr,K=Eh(x.kind,x.shown,L);x.info=K,x.type=K.type,x.typeId=Yr(x.kind,x.shown).id;for(let Ut of Wr){let pt=c[Ut],P=new Re;P.setAttribute("position",new ue(L.tris[Ut],3)),P.setAttribute("lum",new ue(L.lum[Ut],1)),pt.mesh.geometry.dispose(),pt.mesh.geometry=P,pt.mesh.visible=L.tris[Ut].length>0;let E=new cn;L.segs[Ut].length&&E.setPositions(L.segs[Ut]),pt.lines.geometry.dispose(),pt.lines.geometry=E,pt.ghost.geometry=E,pt.lines.visible=pt.ghost.visible=L.segs[Ut].length>0}let H=L.b;x.b=H,x.peak=L.peak,x.top=H.y1,a.uBounds.value.set(H.x0,H.x1,H.z0,H.z1),x.cxT=(H.x0+H.x1)/2,x.czT=(H.z0+H.z1)/2+(K.frontPad??0)*.35,x.cyT=H.y1*.34,x.Rt=Math.hypot(H.x1-H.x0,H.z1-H.z0,H.y1)/2*(K.zoom??.86),m.material.uniforms.uCell.value=K.cell;let dt=Math.max(1.4,x.Rt*.13),lt=dt*.22,Et=H.z1+dt,Ht=H.x1+dt,Tt=.04,Kt=[H.x0,Tt,Et,H.x1,Tt,Et,H.x0,Tt,Et-lt,H.x0,Tt,Et+lt,H.x1,Tt,Et-lt,H.x1,Tt,Et+lt,Ht,Tt,H.z0,Ht,Tt,H.z1,Ht-lt,Tt,H.z0,Ht+lt,Tt,H.z0,Ht-lt,Tt,H.z1,Ht+lt,Tt,H.z1],I=new cn;I.setPositions(Kt),_.geometry.dispose(),_.geometry=I,x.dimPts=[[(H.x0+H.x1)/2,Tt,Et+lt*1.6],[Ht+lt*1.6,Tt,(H.z0+H.z1)/2]],w.textContent=Ah(H.x1-H.x0),C.textContent=Ah(H.z1-H.z0);let Yt=1.5,It=[[H.x0-Yt,H.z0-Yt],[H.x1+Yt,H.z0-Yt],[H.x1+Yt,H.z1+Yt],[H.x0-Yt,H.z1+Yt]],Bt=[];for(let Ut=0;Ut<4;Ut++){let pt=It[Ut],P=It[(Ut+1)%4];Bt.push(pt[0],0,pt[1],P[0],0,P[1])}let St=new cn;St.setPositions(Bt),S.geometry.dispose(),S.geometry=St,n.dispatchEvent(new CustomEvent("holo:type",{detail:K}))}function q(){let L=n.clientWidth,K=n.clientHeight;if(!L||!K||L===y&&K===M)return;y=L,M=K;let H=Math.min(V,window.devicePixelRatio||1);i.setPixelRatio(H),i.setSize(L,K,!1),p.setPixelRatio(H),p.setSize(L,K),o.aspect=L/K,o.updateProjectionMatrix();let dt=Math.max(.72,Math.min(1.15,L/760));for(let lt of h)lt.resolution.set(L,K),lt.userData.w&&(lt.linewidth=lt.userData.w*dt)}let W=new N,et=L=>(W.set(L[0],L[1],L[2]).project(o),[(W.x*.5+.5)*y,(-W.y*.5+.5)*M,W.z]);function rt(L){A=0;let K=(L-D)/1e3||.016,H=Math.min(.05,K);D=L,ut(H),xt(),++Z>20&&K<.5&&(B=B*.9+(K>.034?.1:0),B>.6&&V>1&&(V=Math.max(1,V-.5),B=0,y=0)),x.seen&&(!e||x.busy)&&(A=requestAnimationFrame(rt))}function ut(L){q(),x.t+=L,x.busy=!1;let K=Yr(x.kind,x.target);x.typeId!==K.id||x.kindShown!==x.kind?(x.phase!=="out"&&x.built&&(x.phase="out",x.phaseT=0),(!x.built||x.phase==="out"&&x.phaseT>=1)&&(x.kindShown=x.kind,x.shown=x.target,F(),x.phase="in",x.phaseT=e?1:0,x.built=!0,e&&(x.R=x.Rt,x.cx=x.cxT,x.cy=x.cyT,x.cz=x.czT))):Math.abs(x.shown-x.target)>x.target*.002?(x.shown+=(x.target-x.shown)*Math.min(1,L*(e?60:11)),Math.abs(x.shown-x.target)<x.target*.002&&(x.shown=x.target),F(),x.busy=!0):x.shown!==x.target&&(x.shown=x.target,F()),x.phase==="out"?(x.phaseT=Math.min(1,x.phaseT+L/.32),x.clip=1-Th(x.phaseT),x.busy=!0):x.phase==="in"?(x.phaseT=Math.min(1,x.phaseT+L/1.25),x.clip=Th(x.phaseT),x.busy=!0,x.phaseT>=1&&(x.phase="idle",x.pulse=1)):x.clip=1;let H=x.top+1.2,dt=x.phase==="idle"?1e6:x.clip*H;a.uClipY.value=dt,l.constant=dt,a.uBuild.value=x.phase==="idle"?0:1,S.position.y=Math.min(dt,H),S.material.opacity=x.phase==="idle"?0:.85*Math.sin(Math.PI*Math.min(1,x.phaseT*1.02)),x.pulse=Math.max(0,x.pulse-L/1.4),a.uPulse.value=x.pulse*x.pulse,x.pulse>0&&(x.busy=!0);let lt=x.phase==="idle"?1:0;x.labelsA+=(lt-x.labelsA)*Math.min(1,L*6),_.material.opacity=.5*x.labelsA,Math.abs(lt-x.labelsA)>.01&&(x.busy=!0);for(let I=0;I<2;I++){let Yt=x.splitT[I]-x.split[I];Math.abs(Yt)>5e-4?(x.split[I]+=Yt*Math.min(1,L*7),x.busy=!0):x.split[I]=x.splitT[I]}a.uSplit.value.set(x.split[0],x.split[1]);let Et=Math.min(1,L*3.2);for(let[I,Yt]of[["R","Rt"],["cx","cxT"],["cy","cyT"],["cz","czT"]]){let It=x[Yt]-x[I];Math.abs(It)>.002&&(x[I]+=It*Et,x.busy=!0)}x.drag?x.idle=0:(x.idle+=L,x.yaw+=x.vyaw*L,x.vyaw*=Math.pow(.02,L),Math.abs(x.vyaw)>.01&&(x.busy=!0),!e&&x.idle>1.6&&(x.yaw+=L*.11*Math.min(1,(x.idle-1.6)/1.5)));let Ht=o.fov*Math.PI/180,Tt=Math.min(Math.tan(Ht/2),Math.tan(Ht/2)*o.aspect*.92),Kt=x.R/Math.sin(Math.atan(Tt));if(o.position.set(x.cx+Math.sin(x.yaw)*Math.cos(x.pitch)*Kt,x.cy+Math.sin(x.pitch)*Kt,x.cz+Math.cos(x.yaw)*Math.cos(x.pitch)*Kt),o.lookAt(x.cx,x.cy,x.cz),o.near=Math.max(.3,Kt-x.R*6),o.far=Kt+x.R*14,o.updateProjectionMatrix(),o.updateMatrixWorld(),a.uCam.value.copy(o.position),a.uTime.value=x.t,m.scale.setScalar(x.R*16),m.position.set(x.cx,-.02,x.cz),m.material.uniforms.uR.value=x.R,v.style.opacity=x.labelsA.toFixed(3),x.peak&&y){let I=et(x.peak),Yt=I[0]<y*.56,It=Math.max(8,Math.min(y-162,I[0]+(Yt?46:-200))),Bt=Math.max(66,Math.min(M-70,I[1]-74));R.style.transform=`translate(${It.toFixed(1)}px, ${Bt.toFixed(1)}px)`;let St=Yt?It-4:It+158,Ut=Bt+24;b.setAttribute("d",`M${I[0].toFixed(1)} ${I[1].toFixed(1)} L${(Yt?St-16:St+16).toFixed(1)} ${Ut} L${St} ${Ut}`),g.setAttribute("cx",I[0].toFixed(1)),g.setAttribute("cy",I[1].toFixed(1)),[w,C].forEach((pt,P)=>{let E=et(x.dimPts[P]);pt.style.transform=`translate(${E[0].toFixed(1)}px, ${E[1].toFixed(1)}px) translate(-50%, -50%)`,pt.style.visibility=E[0]<20||E[0]>y-20||E[1]>M-10||E[1]<40?"hidden":"visible"})}}function xt(){p.render()}let Rt=()=>{!A&&x.seen&&(D=performance.now(),A=requestAnimationFrame(rt))};new IntersectionObserver(L=>{x.seen=L[0].isIntersecting,Rt()}).observe(n),new ResizeObserver(Rt).observe(n),n.addEventListener("pointerdown",L=>{x.drag={x:L.clientX,y:L.clientY,yaw:x.yaw,pitch:x.pitch,lx:L.clientX,lt:performance.now()},x.vyaw=0,n.setPointerCapture(L.pointerId),Rt()}),n.addEventListener("pointermove",L=>{let K=x.drag;if(!K)return;x.yaw=K.yaw-(L.clientX-K.x)*.0085,x.pitch=Math.max(.16,Math.min(1.15,K.pitch+(L.clientY-K.y)*.005));let H=performance.now();H>K.lt&&(x.vyaw=-(L.clientX-K.lx)*.0085/((H-K.lt)/1e3)*.35,K.lx=L.clientX,K.lt=H),x.busy=!0,Rt()});for(let L of["pointerup","pointercancel"])n.addEventListener(L,()=>{x.drag=null,Rt()});let J={set(L){L.kind&&(x.kind=L.kind),L.sqft&&(x.target=L.sqft),L.tint!=null&&a.uCause.value.set(L.tint),L.labels!=null&&(v.style.display=L.labels?"":"none"),L.owner!=null&&(x.splitT=[L.owner,L.ref??0]),L.given!=null&&(R.querySelector("span").textContent=L.caption??"",R.querySelector("b").textContent=L.given),Rt()},snap(L={}){for(let K=0;K<400&&(K<3||x.busy||x.phase!=="idle");K++)ut(.05);return x.shown=x.target,x.R=x.Rt,x.cx=x.cxT,x.cy=x.cyT,x.cz=x.czT,x.pulse=0,x.labelsA=1,L.yaw!=null&&(x.yaw=L.yaw),L.pitch!=null&&(x.pitch=L.pitch),L.t!=null&&(x.t=L.t),x.idle=0,x.drag={x:0,y:0,yaw:x.yaw,pitch:x.pitch,lx:0,lt:1e15},ut(0),x.drag=null,xt(),x.info},freeze(L){ut(.016),x.phase="in",x.phaseT=L,ut(0),xt()}};return J._dbg={renderer:i,scene:r,camera:o,composer:p,S:x,parts:c,bloom:d},J}window.RoofHolo={mount:u0};})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
