function dc(ba,wa,l){return l={path:wa,exports:{},require:function(ca,P){return ec(ca,P===void 0||P===null?l.path:P)}},ba(l,l.exports),l.exports}function ec(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var fc=dc(function(ba,wa){/*! nouislider - 14.6.3 - 11/19/2020 */(function(l){ba.exports=l()})(function(){var l="14.6.3";function ca(b){return typeof b==="object"&&typeof b.to==="function"&&typeof b.from==="function"}function P(b){b.parentElement.removeChild(b)}function xa(b){return b!==null&&b!==void 0}function ya(b){b.preventDefault()}function Va(b){return b.filter(function(a){return this[a]?!1:this[a]=!0},{})}function Wa(b,a){return Math.round(b/a)*a}function Xa(b,a){var h=b.getBoundingClientRect(),f=b.ownerDocument,m=f.documentElement,p=Ba(f);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(p.x=0),a?h.top+p.y-m.clientTop:h.left+p.x-m.clientLeft}function G(b){return typeof b==="number"&&!isNaN(b)&&isFinite(b)}function za(b,a,h){h>0&&(B(b,a),setTimeout(function(){X(b,a)},h))}function Aa(b){return Math.max(Math.min(b,100),0)}function da(b){return Array.isArray(b)?b:[b]}function Ya(b){b=String(b);var a=b.split(".");return a.length>1?a[1].length:0}function B(b,a){b.classList&&!/\s/.test(a)?b.classList.add(a):b.className+=" "+a}function X(b,a){b.classList&&!/\s/.test(a)?b.classList.remove(a):b.className=b.className.replace(new RegExp("(^|\\b)"+a.split(" ").join("|")+"(\\b|$)","gi")," ")}function Za(b,a){return b.classList?b.classList.contains(a):new RegExp("\\b"+a+"\\b").test(b.className)}function Ba(b){var a=window.pageXOffset!==void 0,h=(b.compatMode||"")==="CSS1Compat",f=a?window.pageXOffset:h?b.documentElement.scrollLeft:b.body.scrollLeft,m=a?window.pageYOffset:h?b.documentElement.scrollTop:b.body.scrollTop;return{x:f,y:m}}function _a(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function $a(){var b=!1;try{var a=Object.defineProperty({},"passive",{get:function(){b=!0}});window.addEventListener("test",null,a)}catch(h){}return b}function ab(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function ea(b,a){return 100/(a-b)}function fa(b,a,h){return a*100/(b[h+1]-b[h])}function bb(b,a){return fa(b,b[0]<0?a+Math.abs(b[0]):a-b[0],0)}function cb(b,a){return a*(b[1]-b[0])/100+b[0]}function U(b,a){for(var h=1;b>=a[h];)h+=1;return h}function db(b,a,h){if(h>=b.slice(-1)[0])return 100;var f=U(h,b),m=b[f-1],p=b[f],n=a[f-1],w=a[f];return n+bb([m,p],h)/ea(n,w)}function eb(b,a,h){if(h>=100)return b.slice(-1)[0];var f=U(h,a),m=b[f-1],p=b[f],n=a[f-1],w=a[f];return cb([m,p],(h-n)*ea(n,w))}function fb(b,a,h,f){if(f===100)return f;var m=U(f,b),p=b[m-1],n=b[m];return h?f-p>(n-p)/2?n:p:a[m-1]?b[m-1]+Wa(f-b[m-1],a[m-1]):f}function gb(b,a,h){var f;typeof a==="number"&&(a=[a]);if(!Array.isArray(a))throw new Error("noUiSlider ("+l+"): 'range' contains invalid value.");b==="min"?f=0:b==="max"?f=100:f=parseFloat(b);if(!G(f)||!G(a[0]))throw new Error("noUiSlider ("+l+"): 'range' value isn't numeric.");h.xPct.push(f),h.xVal.push(a[0]),f?h.xSteps.push(isNaN(a[1])?!1:a[1]):isNaN(a[1])||(h.xSteps[0]=a[1]),h.xHighestCompleteStep.push(0)}function hb(b,a,h){if(!a)return;if(h.xVal[b]===h.xVal[b+1]){h.xSteps[b]=h.xHighestCompleteStep[b]=h.xVal[b];return}h.xSteps[b]=fa([h.xVal[b],h.xVal[b+1]],a,0)/ea(h.xPct[b],h.xPct[b+1]);var f=(h.xVal[b+1]-h.xVal[b])/h.xNumSteps[b],m=Math.ceil(Number(f.toFixed(3))-1),p=h.xVal[b]+h.xNumSteps[b]*m;h.xHighestCompleteStep[b]=p}function F(b,a,h){this.xPct=[],this.xVal=[],this.xSteps=[h||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=a;var f,m=[];for(f in b)b.hasOwnProperty(f)&&m.push([b[f],f]);for(m.length&&typeof m[0][0]==="object"?m.sort(function(p,n){return p[0][0]-n[0][0]}):m.sort(function(p,n){return p[0]-n[0]}),f=0;f<m.length;f++)gb(m[f][1],m[f][0],this);for(this.xNumSteps=this.xSteps.slice(0),f=0;f<this.xNumSteps.length;f++)hb(f,this.xNumSteps[f],this)}F.prototype.getDistance=function(b){var a,h=[];for(a=0;a<this.xNumSteps.length-1;a++){var f=this.xNumSteps[a];if(f&&b/f%1!==0)throw new Error("noUiSlider ("+l+"): 'limit', 'margin' and 'padding' of "+this.xPct[a]+"% range must be divisible by step.");h[a]=fa(this.xVal,b,a)}return h},F.prototype.getAbsoluteDistance=function(b,a,h){var f=0;if(b<this.xPct[this.xPct.length-1])for(;b>this.xPct[f+1];)f++;else b===this.xPct[this.xPct.length-1]&&(f=this.xPct.length-2);!h&&b===this.xPct[f+1]&&f++;var m,p=1,n=a[f],w=0,o=0,D=0,C=0;for(h?m=(b-this.xPct[f])/(this.xPct[f+1]-this.xPct[f]):m=(this.xPct[f+1]-b)/(this.xPct[f+1]-this.xPct[f]);n>0;)w=this.xPct[f+1+C]-this.xPct[f+C],a[f+C]*p+100-m*100>100?(o=w*m,p=(n-100*m)/a[f+C],m=1):(o=a[f+C]*w/100*p,p=0),h?(D=D-o,this.xPct.length+C>=1&&C--):(D=D+o,this.xPct.length-C>=1&&C++),n=a[f+C]*p;return b+D},F.prototype.toStepping=function(b){return b=db(this.xVal,this.xPct,b),b},F.prototype.fromStepping=function(b){return eb(this.xVal,this.xPct,b)},F.prototype.getStep=function(b){return b=fb(this.xPct,this.xSteps,this.snap,b),b},F.prototype.getDefaultStep=function(b,a,h){var f=U(b,this.xPct);return(b===100||a&&b===this.xPct[f-1])&&(f=Math.max(f-1,1)),(this.xVal[f]-this.xVal[f-1])/h},F.prototype.getNearbySteps=function(b){var a=U(b,this.xPct);return{stepBefore:{startValue:this.xVal[a-2],step:this.xNumSteps[a-2],highestStep:this.xHighestCompleteStep[a-2]},thisStep:{startValue:this.xVal[a-1],step:this.xNumSteps[a-1],highestStep:this.xHighestCompleteStep[a-1]},stepAfter:{startValue:this.xVal[a],step:this.xNumSteps[a],highestStep:this.xHighestCompleteStep[a]}}},F.prototype.countStepDecimals=function(){var b=this.xNumSteps.map(Ya);return Math.max.apply(null,b)},F.prototype.convert=function(b){return this.getStep(this.toStepping(b))};var Ca={to:function(b){return b!==void 0&&b.toFixed(2)},from:Number},Da={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},K={tooltips:".__tooltips",aria:".__aria"};function Ea(b){if(ca(b))return!0;throw new Error("noUiSlider ("+l+"): 'format' requires 'to' and 'from' methods.")}function ib(b,a){if(!G(a))throw new Error("noUiSlider ("+l+"): 'step' is not numeric.");b.singleStep=a}function jb(b,a){if(!G(a))throw new Error("noUiSlider ("+l+"): 'keyboardPageMultiplier' is not numeric.");b.keyboardPageMultiplier=a}function kb(b,a){if(!G(a))throw new Error("noUiSlider ("+l+"): 'keyboardDefaultStep' is not numeric.");b.keyboardDefaultStep=a}function lb(b,a){if(typeof a!=="object"||Array.isArray(a))throw new Error("noUiSlider ("+l+"): 'range' is not an object.");if(a.min===void 0||a.max===void 0)throw new Error("noUiSlider ("+l+"): Missing 'min' or 'max' in 'range'.");if(a.min===a.max)throw new Error("noUiSlider ("+l+"): 'range' 'min' and 'max' cannot be equal.");b.spectrum=new F(a,b.snap,b.singleStep)}function mb(b,a){a=da(a);if(!Array.isArray(a)||!a.length)throw new Error("noUiSlider ("+l+"): 'start' option is incorrect.");b.handles=a.length,b.start=a}function nb(b,a){b.snap=a;if(typeof a!=="boolean")throw new Error("noUiSlider ("+l+"): 'snap' option must be a boolean.")}function ob(b,a){b.animate=a;if(typeof a!=="boolean")throw new Error("noUiSlider ("+l+"): 'animate' option must be a boolean.")}function pb(b,a){b.animationDuration=a;if(typeof a!=="number")throw new Error("noUiSlider ("+l+"): 'animationDuration' option must be a number.")}function qb(b,a){var h=[!1],f;a==="lower"?a=[!0,!1]:a==="upper"&&(a=[!1,!0]);if(a===!0||a===!1){for(f=1;f<b.handles;f++)h.push(a);h.push(!1)}else{if(!Array.isArray(a)||!a.length||a.length!==b.handles+1)throw new Error("noUiSlider ("+l+"): 'connect' option doesn't match handle count.");h=a}b.connect=h}function rb(b,a){switch(a){case"horizontal":b.ort=0;break;case"vertical":b.ort=1;break;default:throw new Error("noUiSlider ("+l+"): 'orientation' option is invalid.")}}function Fa(b,a){if(!G(a))throw new Error("noUiSlider ("+l+"): 'margin' option must be numeric.");if(a===0)return;b.margin=b.spectrum.getDistance(a)}function sb(b,a){if(!G(a))throw new Error("noUiSlider ("+l+"): 'limit' option must be numeric.");b.limit=b.spectrum.getDistance(a);if(!b.limit||b.handles<2)throw new Error("noUiSlider ("+l+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function tb(b,a){var h;if(!G(a)&&!Array.isArray(a))throw new Error("noUiSlider ("+l+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(a)&&!(a.length===2||G(a[0])||G(a[1])))throw new Error("noUiSlider ("+l+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(a===0)return;for(Array.isArray(a)||(a=[a,a]),b.padding=[b.spectrum.getDistance(a[0]),b.spectrum.getDistance(a[1])],h=0;h<b.spectrum.xNumSteps.length-1;h++)if(b.padding[0][h]<0||b.padding[1][h]<0)throw new Error("noUiSlider ("+l+"): 'padding' option must be a positive number(s).");var f=a[0]+a[1],m=b.spectrum.xVal[0],p=b.spectrum.xVal[b.spectrum.xVal.length-1];if(f/(p-m)>1)throw new Error("noUiSlider ("+l+"): 'padding' option must not exceed 100% of the range.")}function ub(b,a){switch(a){case"ltr":b.dir=0;break;case"rtl":b.dir=1;break;default:throw new Error("noUiSlider ("+l+"): 'direction' option was not recognized.")}}function vb(b,a){if(typeof a!=="string")throw new Error("noUiSlider ("+l+"): 'behaviour' must be a string containing options.");var h=a.indexOf("tap")>=0,f=a.indexOf("drag")>=0,m=a.indexOf("fixed")>=0,p=a.indexOf("snap")>=0,n=a.indexOf("hover")>=0,w=a.indexOf("unconstrained")>=0;if(m){if(b.handles!==2)throw new Error("noUiSlider ("+l+"): 'fixed' behaviour must be used with 2 handles");Fa(b,b.start[1]-b.start[0])}if(w&&(b.margin||b.limit))throw new Error("noUiSlider ("+l+"): 'unconstrained' behaviour cannot be used with margin or limit");b.events={tap:h||p,drag:f,fixed:m,snap:p,hover:n,unconstrained:w}}function wb(b,a){if(a===!1)return;if(a===!0){b.tooltips=[];for(var h=0;h<b.handles;h++)b.tooltips.push(!0)}else{b.tooltips=da(a);if(b.tooltips.length!==b.handles)throw new Error("noUiSlider ("+l+"): must pass a formatter for all handles.");b.tooltips.forEach(function(f){if(typeof f!=="boolean"&&(typeof f!=="object"||typeof f.to!=="function"))throw new Error("noUiSlider ("+l+"): 'tooltips' must be passed a formatter or 'false'.")})}}function xb(b,a){b.ariaFormat=a,Ea(a)}function yb(b,a){b.format=a,Ea(a)}function zb(b,a){b.keyboardSupport=a;if(typeof a!=="boolean")throw new Error("noUiSlider ("+l+"): 'keyboardSupport' option must be a boolean.")}function Ab(b,a){b.documentElement=a}function Bb(b,a){if(typeof a!=="string"&&a!==!1)throw new Error("noUiSlider ("+l+"): 'cssPrefix' must be a string or `false`.");b.cssPrefix=a}function Cb(b,a){if(typeof a!=="object")throw new Error("noUiSlider ("+l+"): 'cssClasses' must be an object.");if(typeof b.cssPrefix==="string"){b.cssClasses={};for(var h in a){if(!a.hasOwnProperty(h))continue;b.cssClasses[h]=b.cssPrefix+a[h]}}else b.cssClasses=a}function Ga(b){var a={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:Ca,format:Ca},h={step:{r:!1,t:ib},keyboardPageMultiplier:{r:!1,t:jb},keyboardDefaultStep:{r:!1,t:kb},start:{r:!0,t:mb},connect:{r:!0,t:qb},direction:{r:!0,t:ub},snap:{r:!1,t:nb},animate:{r:!1,t:ob},animationDuration:{r:!1,t:pb},range:{r:!0,t:lb},orientation:{r:!1,t:rb},margin:{r:!1,t:Fa},limit:{r:!1,t:sb},padding:{r:!1,t:tb},behaviour:{r:!0,t:vb},ariaFormat:{r:!1,t:xb},format:{r:!1,t:yb},tooltips:{r:!1,t:wb},keyboardSupport:{r:!0,t:zb},documentElement:{r:!1,t:Ab},cssPrefix:{r:!0,t:Bb},cssClasses:{r:!0,t:Cb}},f={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Da,keyboardPageMultiplier:5,keyboardDefaultStep:10};b.format&&!b.ariaFormat&&(b.ariaFormat=b.format),Object.keys(h).forEach(function(o){if(!xa(b[o])&&f[o]===void 0){if(h[o].r)throw new Error("noUiSlider ("+l+"): '"+o+"' is required.");return!0}h[o].t(a,xa(b[o])?b[o]:f[o])}),a.pips=b.pips;var m=document.createElement("div"),p=m.style.msTransform!==void 0,n=m.style.transform!==void 0;a.transformRule=n?"transform":p?"msTransform":"webkitTransform";var w=[["left","top"],["right","bottom"]];return a.style=w[a.dir][a.ort],a}function Db(b,a,h){var f=_a(),m=ab(),p=m&&$a(),n=b,w,o,D,C,N,r=a.spectrum,Q=[],A=[],H=[],ga=0,I={},V,R=b.ownerDocument,Y=a.documentElement||R.documentElement,Z=R.body,Fb=-1,_=0,ha=1,ia=2,Gb=R.dir==="rtl"||a.ort===1?0:100;function J(c,d){var e=R.createElement("div");return d&&B(e,d),c.appendChild(e),e}function Hb(c,d){var e=J(c,a.cssClasses.origin),g=J(e,a.cssClasses.handle);return J(g,a.cssClasses.touchArea),g.setAttribute("data-handle",d),a.keyboardSupport&&(g.setAttribute("tabindex","0"),g.addEventListener("keydown",function(j){return Vb(j,d)})),g.setAttribute("role","slider"),g.setAttribute("aria-orientation",a.ort?"vertical":"horizontal"),d===0?B(g,a.cssClasses.handleLower):d===a.handles-1&&B(g,a.cssClasses.handleUpper),e}function Ha(c,d){return d?J(c,a.cssClasses.connect):!1}function Ib(c,d){var e=J(d,a.cssClasses.connects);o=[],D=[],D.push(Ha(e,c[0]));for(var g=0;g<a.handles;g++)o.push(Hb(d,g)),H[g]=g,D.push(Ha(e,c[g+1]))}function Jb(c){B(c,a.cssClasses.target),a.dir===0?B(c,a.cssClasses.ltr):B(c,a.cssClasses.rtl),a.ort===0?B(c,a.cssClasses.horizontal):B(c,a.cssClasses.vertical);var d=getComputedStyle(c).direction;return d==="rtl"?B(c,a.cssClasses.textDirectionRtl):B(c,a.cssClasses.textDirectionLtr),J(c,a.cssClasses.base)}function Kb(c,d){return a.tooltips[d]?J(c.firstChild,a.cssClasses.tooltip):!1}function Ia(){return n.hasAttribute("disabled")}function ja(c){var d=o[c];return d.hasAttribute("disabled")}function ka(){N&&(W("update"+K.tooltips),N.forEach(function(c){c&&P(c)}),N=null)}function Ja(){ka(),N=o.map(Kb),pa("update"+K.tooltips,function(c,d,e){if(!N[d])return;var g=c[d];a.tooltips[d]!==!0&&(g=a.tooltips[d].to(e[d])),N[d].innerHTML=g})}function Lb(){W("update"+K.aria),pa("update"+K.aria,function(c,d,e,g,j){H.forEach(function(k){var i=o[k],u=$(A,k,0,!0,!0,!0),q=$(A,k,100,!0,!0,!0),s=j[k],t=a.ariaFormat.to(e[k]);u=r.fromStepping(u).toFixed(1),q=r.fromStepping(q).toFixed(1),s=r.fromStepping(s).toFixed(1),i.children[0].setAttribute("aria-valuemin",u),i.children[0].setAttribute("aria-valuemax",q),i.children[0].setAttribute("aria-valuenow",s),i.children[0].setAttribute("aria-valuetext",t)})})}function Mb(c,d,e){if(c==="range"||c==="steps")return r.xVal;if(c==="count"){if(d<2)throw new Error("noUiSlider ("+l+"): 'values' (>= 2) required for mode 'count'.");var g=d-1,j=100/g;for(d=[];g--;)d[g]=g*j;d.push(100),c="positions"}if(c==="positions")return d.map(function(k){return r.fromStepping(e?r.getStep(k):k)});if(c==="values")return e?d.map(function(k){return r.fromStepping(r.getStep(r.toStepping(k)))}):d}function Nb(c,d,e){function g(t,x){return(t+x).toFixed(7)/1}var j={},k=r.xVal[0],i=r.xVal[r.xVal.length-1],u=!1,q=!1,s=0;return e=Va(e.slice().sort(function(t,x){return t-x})),e[0]!==k&&(e.unshift(k),u=!0),e[e.length-1]!==i&&(e.push(i),q=!0),e.forEach(function(t,x){var y,v,L,T=t,M=e[x+1],E,sa,ta,ua,Sa,va,Ta,Ua=d==="steps";Ua&&(y=r.xNumSteps[x]),y||(y=M-T);if(T===!1)return;for(M===void 0&&(M=T),y=Math.max(y,1e-7),v=T;v<=M;v=g(v,y)){for(E=r.toStepping(v),sa=E-s,Sa=sa/c,va=Math.round(Sa),Ta=sa/va,L=1;L<=va;L+=1)ta=s+L*Ta,j[ta.toFixed(5)]=[r.fromStepping(ta),0];ua=e.indexOf(v)>-1?ha:Ua?ia:_,!x&&u&&v!==M&&(ua=0),v===M&&q||(j[E.toFixed(5)]=[v,ua]),s=E}}),j}function Ob(c,d,e){var g=R.createElement("div"),j=[];j[_]=a.cssClasses.valueNormal,j[ha]=a.cssClasses.valueLarge,j[ia]=a.cssClasses.valueSub;var k=[];k[_]=a.cssClasses.markerNormal,k[ha]=a.cssClasses.markerLarge,k[ia]=a.cssClasses.markerSub;var i=[a.cssClasses.valueHorizontal,a.cssClasses.valueVertical],u=[a.cssClasses.markerHorizontal,a.cssClasses.markerVertical];B(g,a.cssClasses.pips),B(g,a.ort===0?a.cssClasses.pipsHorizontal:a.cssClasses.pipsVertical);function q(t,x){var y=x===a.cssClasses.value,v=y?i:u,L=y?j:k;return x+" "+v[a.ort]+" "+L[t]}function s(t,x,y){y=d?d(x,y):y;if(y===Fb)return;var v=J(g,!1);v.className=q(y,a.cssClasses.marker),v.style[a.style]=t+"%",y>_&&(v=J(g,!1),v.className=q(y,a.cssClasses.value),v.setAttribute("data-value",x),v.style[a.style]=t+"%",v.innerHTML=e.to(x))}return Object.keys(c).forEach(function(t){s(t,c[t][0],c[t][1])}),g}function la(){C&&(P(C),C=null)}function ma(c){la();var d=c.mode,e=c.density||1,g=c.filter||!1,j=c.values||!1,k=c.stepped||!1,i=Mb(d,j,k),u=Nb(e,d,i),q=c.format||{to:Math.round};return C=n.appendChild(Ob(u,g,q)),C}function Ka(){var c=w.getBoundingClientRect(),d="offset"+["Width","Height"][a.ort];return a.ort===0?c.width||w[d]:c.height||w[d]}function O(c,d,e,g){var j=function(i){i=Pb(i,g.pageOffset,g.target||d);if(!i)return!1;if(Ia()&&!g.doNotReject)return!1;if(Za(n,a.cssClasses.tap)&&!g.doNotReject)return!1;if(c===f.start&&i.buttons!==void 0&&i.buttons>1)return!1;if(g.hover&&i.buttons)return!1;p||i.preventDefault(),i.calcPoint=i.points[a.ort],e(i,g)},k=[];return c.split(" ").forEach(function(i){d.addEventListener(i,j,p?{passive:!0}:!1),k.push([i,j])}),k}function Pb(c,d,e){var g=c.type.indexOf("touch")===0,j=c.type.indexOf("mouse")===0,k=c.type.indexOf("pointer")===0,i,u;c.type.indexOf("MSPointer")===0&&(k=!0);if(c.type==="mousedown"&&!c.buttons&&!c.touches)return!1;if(g){var q=function(x){return x.target===e||e.contains(x.target)||x.target.shadowRoot&&x.target.shadowRoot.contains(e)};if(c.type==="touchstart"){var s=Array.prototype.filter.call(c.touches,q);if(s.length>1)return!1;i=s[0].pageX,u=s[0].pageY}else{var t=Array.prototype.find.call(c.changedTouches,q);if(!t)return!1;i=t.pageX,u=t.pageY}}return d=d||Ba(R),(j||k)&&(i=c.clientX+d.x,u=c.clientY+d.y),c.pageOffset=d,c.points=[i,u],c.cursor=j||k,c}function La(c){var d=c-Xa(w,a.ort),e=d*100/Ka();return e=Aa(e),a.dir?100-e:e}function Qb(c){var d=100,e=!1;return o.forEach(function(g,j){if(ja(j))return;var k=A[j],i=Math.abs(k-c),u=i===100&&d===100,q=i<d,s=i<=d&&c>k;(q||s||u)&&(e=j,d=i)}),e}function Rb(c,d){c.type==="mouseout"&&c.target.nodeName==="HTML"&&c.relatedTarget===null&&na(c,d)}function Sb(c,d){if(navigator.appVersion.indexOf("MSIE 9")===-1&&c.buttons===0&&d.buttonsProperty!==0)return na(c,d);var e=(a.dir?-1:1)*(c.calcPoint-d.startCalcPoint),g=e*100/d.baseSize;Ma(e>0,g,d.locations,d.handleNumbers)}function na(c,d){d.handle&&(X(d.handle,a.cssClasses.active),ga-=1),d.listeners.forEach(function(e){Y.removeEventListener(e[0],e[1])}),ga===0&&(X(n,a.cssClasses.drag),ra(),c.cursor&&(Z.style.cursor="",Z.removeEventListener("selectstart",ya))),d.handleNumbers.forEach(function(e){z("change",e),z("set",e),z("end",e)})}function oa(c,d){if(d.handleNumbers.some(ja))return!1;var e;if(d.handleNumbers.length===1){var g=o[d.handleNumbers[0]];e=g.children[0],ga+=1,B(e,a.cssClasses.active)}c.stopPropagation();var j=[],k=O(f.move,Y,Sb,{target:c.target,handle:e,listeners:j,startCalcPoint:c.calcPoint,baseSize:Ka(),pageOffset:c.pageOffset,handleNumbers:d.handleNumbers,buttonsProperty:c.buttons,locations:A.slice()}),i=O(f.end,Y,na,{target:c.target,handle:e,listeners:j,doNotReject:!0,handleNumbers:d.handleNumbers}),u=O("mouseout",Y,Rb,{target:c.target,handle:e,listeners:j,doNotReject:!0,handleNumbers:d.handleNumbers});j.push.apply(j,k.concat(i,u)),c.cursor&&(Z.style.cursor=getComputedStyle(c.target).cursor,o.length>1&&B(n,a.cssClasses.drag),Z.addEventListener("selectstart",ya,!1)),d.handleNumbers.forEach(function(q){z("start",q)})}function Tb(c){c.stopPropagation();var d=La(c.calcPoint),e=Qb(d);if(e===!1)return!1;a.events.snap||za(n,a.cssClasses.tap,a.animationDuration),S(e,d,!0,!0),ra(),z("slide",e,!0),z("update",e,!0),z("change",e,!0),z("set",e,!0),a.events.snap&&oa(c,{handleNumbers:[e]})}function Ub(c){var d=La(c.calcPoint),e=r.getStep(d),g=r.fromStepping(e);Object.keys(I).forEach(function(j){"hover"===j.split(".")[0]&&I[j].forEach(function(k){k.call(V,g)})})}function Vb(c,d){if(Ia()||ja(d))return!1;var e=["Left","Right"],g=["Down","Up"],j=["PageDown","PageUp"],k=["Home","End"];a.dir&&!a.ort?e.reverse():a.ort&&!a.dir&&(g.reverse(),j.reverse());var i=c.key.replace("Arrow",""),u=i===j[0],q=i===j[1],s=i===g[0]||i===e[0]||u,t=i===g[1]||i===e[1]||q,x=i===k[0],y=i===k[1];if(!s&&!t&&!x&&!y)return!0;c.preventDefault();var v;if(t||s){var L=a.keyboardPageMultiplier,T=s?0:1,M=Ra(d),E=M[T];if(E===null)return!1;E===!1&&(E=r.getDefaultStep(A[d],s,a.keyboardDefaultStep)),(q||u)&&(E*=L),E=Math.max(E,1e-7),E=(s?-1:1)*E,v=Q[d]+E}else y?v=a.spectrum.xVal[a.spectrum.xVal.length-1]:v=a.spectrum.xVal[0];return S(d,r.toStepping(v),!0,!0),z("slide",d),z("update",d),z("change",d),z("set",d),!1}function Wb(c){c.fixed||o.forEach(function(d,e){O(f.start,d.children[0],oa,{handleNumbers:[e]})}),c.tap&&O(f.start,w,Tb,{}),c.hover&&O(f.move,w,Ub,{hover:!0}),c.drag&&D.forEach(function(d,e){if(d===!1||e===0||e===D.length-1)return;var g=o[e-1],j=o[e],k=[d];B(d,a.cssClasses.draggable),c.fixed&&(k.push(g.children[0]),k.push(j.children[0])),k.forEach(function(i){O(f.start,i,oa,{handles:[g,j],handleNumbers:[e-1,e]})})})}function pa(c,d){I[c]=I[c]||[],I[c].push(d),c.split(".")[0]==="update"&&o.forEach(function(e,g){z("update",g)})}function Xb(c){return c===K.aria||c===K.tooltips}function W(c){var d=c&&c.split(".")[0],e=d?c.substring(d.length):c;Object.keys(I).forEach(function(g){var j=g.split(".")[0],k=g.substring(j.length);(!d||d===j)&&(!e||e===k)&&((!Xb(k)||e===k)&&delete I[g])})}function z(c,d,e){Object.keys(I).forEach(function(g){var j=g.split(".")[0];c===j&&I[g].forEach(function(k){k.call(V,Q.map(a.format.to),d,Q.slice(),e||!1,A.slice(),V)})})}function $(c,d,e,g,j,k){var i;return o.length>1&&!a.events.unconstrained&&(g&&d>0&&(i=r.getAbsoluteDistance(c[d-1],a.margin,0),e=Math.max(e,i)),j&&d<o.length-1&&(i=r.getAbsoluteDistance(c[d+1],a.margin,1),e=Math.min(e,i))),o.length>1&&a.limit&&(g&&d>0&&(i=r.getAbsoluteDistance(c[d-1],a.limit,0),e=Math.min(e,i)),j&&d<o.length-1&&(i=r.getAbsoluteDistance(c[d+1],a.limit,1),e=Math.max(e,i))),a.padding&&(d===0&&(i=r.getAbsoluteDistance(0,a.padding[0],0),e=Math.max(e,i)),d===o.length-1&&(i=r.getAbsoluteDistance(100,a.padding[1],1),e=Math.min(e,i))),e=r.getStep(e),e=Aa(e),e===c[d]&&!k?!1:e}function qa(c,d){var e=a.ort;return(e?d:c)+", "+(e?c:d)}function Ma(c,d,e,g){var j=e.slice(),k=[!c,c],i=[c,!c];g=g.slice(),c&&g.reverse(),g.length>1?g.forEach(function(q,s){var t=$(j,q,j[q]+d,k[s],i[s],!1);t===!1?d=0:(d=t-j[q],j[q]=t)}):k=i=[!0];var u=!1;g.forEach(function(q,s){u=S(q,e[q]+d,k[s],i[s])||u}),u&&g.forEach(function(q){z("update",q),z("slide",q)})}function Na(c,d){return a.dir?100-c-d:c}function Yb(c,d){A[c]=d,Q[c]=r.fromStepping(d);var e=10*(Na(d,0)-Gb),g="translate("+qa(e+"%","0")+")";o[c].style[a.transformRule]=g,Oa(c),Oa(c+1)}function ra(){H.forEach(function(c){var d=A[c]>50?-1:1,e=3+(o.length+d*c);o[c].style.zIndex=e})}function S(c,d,e,g,j){return j||(d=$(A,c,d,e,g,!1)),d===!1?!1:(Yb(c,d),!0)}function Oa(c){if(!D[c])return;var d=0,e=100;c!==0&&(d=A[c-1]),c!==D.length-1&&(e=A[c]);var g=e-d,j="translate("+qa(Na(d,g)+"%","0")+")",k="scale("+qa(g/100,"1")+")";D[c].style[a.transformRule]=j+" "+k}function Pa(c,d){return c===null||c===!1||c===void 0?A[d]:(typeof c==="number"&&(c=String(c)),c=a.format.from(c),c=r.toStepping(c),c===!1||isNaN(c)?A[d]:c)}function aa(c,d,e){var g=da(c),j=A[0]===void 0;d=d===void 0?!0:!!d,a.animate&&!j&&za(n,a.cssClasses.tap,a.animationDuration),H.forEach(function(i){S(i,Pa(g[i],i),!0,!1,e)});for(var k=H.length===1?0:1;k<H.length;++k)H.forEach(function(i){S(i,A[i],!0,!0,e)});ra(),H.forEach(function(i){z("update",i),g[i]!==null&&d&&z("set",i)})}function Zb(c){aa(a.start,c)}function _b(c,d,e,g){c=Number(c);if(!(c>=0&&c<H.length))throw new Error("noUiSlider ("+l+"): invalid handle number, got: "+c);S(c,Pa(d,c),!0,!0,g),z("update",c),e&&z("set",c)}function Qa(){var c=Q.map(a.format.to);return c.length===1?c[0]:c}function $b(){W(K.aria),W(K.tooltips);for(var c in a.cssClasses){if(!a.cssClasses.hasOwnProperty(c))continue;X(n,a.cssClasses[c])}for(;n.firstChild;)n.removeChild(n.firstChild);delete n.noUiSlider}function Ra(c){var d=A[c],e=r.getNearbySteps(d),g=Q[c],j=e.thisStep.step,k=null;if(a.snap)return[g-e.stepBefore.startValue||null,e.stepAfter.startValue-g||null];j!==!1&&(g+j>e.stepAfter.startValue&&(j=e.stepAfter.startValue-g)),g>e.thisStep.startValue?k=e.thisStep.step:e.stepBefore.step===!1?k=!1:k=g-e.stepBefore.highestStep,d===100?j=null:d===0&&(k=null);var i=r.countStepDecimals();return j!==null&&j!==!1&&(j=Number(j.toFixed(i))),k!==null&&k!==!1&&(k=Number(k.toFixed(i))),[k,j]}function ac(){return H.map(Ra)}function bc(c,d){var e=Qa(),g=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];g.forEach(function(k){c[k]!==void 0&&(h[k]=c[k])});var j=Ga(h);g.forEach(function(k){c[k]!==void 0&&(a[k]=j[k])}),r=j.spectrum,a.margin=j.margin,a.limit=j.limit,a.padding=j.padding,a.pips?ma(a.pips):la(),a.tooltips?Ja():ka(),A=[],aa(c.start||e,d)}function cc(){w=Jb(n),Ib(a.connect,w),Wb(a.events),aa(a.start),a.pips&&ma(a.pips),a.tooltips&&Ja(),Lb()}return cc(),V={destroy:$b,steps:ac,on:pa,off:W,get:Qa,set:aa,setHandle:_b,reset:Zb,__moveHandles:function(c,d,e){Ma(c,d,A,e)},options:h,updateOptions:bc,target:n,removePips:la,removeTooltips:ka,getTooltips:function(){return N},getOrigins:function(){return o},pips:ma},V}function Eb(b,a){if(!b||!b.nodeName)throw new Error("noUiSlider ("+l+"): create requires a single element, got: "+b);if(b.noUiSlider)throw new Error("noUiSlider ("+l+"): Slider was already initialized.");var h=Ga(a),f=Db(b,h,a);return b.noUiSlider=f,f}return{__spectrum:F,version:l,cssClasses:Da,create:Eb}})});export default fc;
