(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function _v(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var kf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function ny(){if(rg)return Ro;rg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=e,Ro.jsx=i,Ro.jsxs=i,Ro}var og;function iy(){return og||(og=1,kf.exports=ny()),kf.exports}var gi=iy(),Wf={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function ay(){if(lg)return te;lg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),y=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,x={};function g(L,nt,xt){this.props=L,this.context=nt,this.refs=x,this.updater=xt||A}g.prototype.isReactComponent={},g.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},g.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function I(){}I.prototype=g.prototype;function O(L,nt,xt){this.props=L,this.context=nt,this.refs=x,this.updater=xt||A}var U=O.prototype=new I;U.constructor=O,C(U,g.prototype),U.isPureReactComponent=!0;var Y=Array.isArray;function G(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function D(L,nt,xt){var Z=xt.ref;return{$$typeof:o,type:L,key:nt,ref:Z!==void 0?Z:null,props:xt}}function R(L,nt){return D(L.type,nt,L.props)}function B(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function rt(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return nt[xt]})}var et=/\/+/g;function ht(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?rt(""+L.key):nt.toString(36)}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function N(L,nt,xt,Z,ct){var Et=typeof L;(Et==="undefined"||Et==="boolean")&&(L=null);var yt=!1;if(L===null)yt=!0;else switch(Et){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(L.$$typeof){case o:case e:yt=!0;break;case v:return yt=L._init,N(yt(L._payload),nt,xt,Z,ct)}}if(yt)return ct=ct(L),yt=Z===""?"."+ht(L,0):Z,Y(ct)?(xt="",yt!=null&&(xt=yt.replace(et,"$&/")+"/"),N(ct,nt,xt,"",function(ee){return ee})):ct!=null&&(B(ct)&&(ct=R(ct,xt+(ct.key==null||L&&L.key===ct.key?"":(""+ct.key).replace(et,"$&/")+"/")+yt)),nt.push(ct)),1;yt=0;var Ht=Z===""?".":Z+":";if(Y(L))for(var It=0;It<L.length;It++)Z=L[It],Et=Ht+ht(Z,It),yt+=N(Z,nt,xt,Et,ct);else if(It=M(L),typeof It=="function")for(L=It.call(L),It=0;!(Z=L.next()).done;)Z=Z.value,Et=Ht+ht(Z,It++),yt+=N(Z,nt,xt,Et,ct);else if(Et==="object"){if(typeof L.then=="function")return N(ft(L),nt,xt,Z,ct);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function j(L,nt,xt){if(L==null)return L;var Z=[],ct=0;return N(L,Z,"","",function(Et){return nt.call(xt,Et,ct++)}),Z}function k(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Tt={map:j,forEach:function(L,nt,xt){j(L,function(){nt.apply(this,arguments)},xt)},count:function(L){var nt=0;return j(L,function(){nt++}),nt},toArray:function(L){return j(L,function(nt){return nt})||[]},only:function(L){if(!B(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return te.Activity=S,te.Children=Tt,te.Component=g,te.Fragment=i,te.Profiler=l,te.PureComponent=O,te.StrictMode=s,te.Suspense=m,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,te.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},te.cache=function(L){return function(){return L.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(L,nt,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Z=C({},L.props),ct=L.key;if(nt!=null)for(Et in nt.key!==void 0&&(ct=""+nt.key),nt)!K.call(nt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&nt.ref===void 0||(Z[Et]=nt[Et]);var Et=arguments.length-2;if(Et===1)Z.children=xt;else if(1<Et){for(var yt=Array(Et),Ht=0;Ht<Et;Ht++)yt[Ht]=arguments[Ht+2];Z.children=yt}return D(L.type,ct,Z)},te.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},te.createElement=function(L,nt,xt){var Z,ct={},Et=null;if(nt!=null)for(Z in nt.key!==void 0&&(Et=""+nt.key),nt)K.call(nt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ct[Z]=nt[Z]);var yt=arguments.length-2;if(yt===1)ct.children=xt;else if(1<yt){for(var Ht=Array(yt),It=0;It<yt;It++)Ht[It]=arguments[It+2];ct.children=Ht}if(L&&L.defaultProps)for(Z in yt=L.defaultProps,yt)ct[Z]===void 0&&(ct[Z]=yt[Z]);return D(L,Et,ct)},te.createRef=function(){return{current:null}},te.forwardRef=function(L){return{$$typeof:d,render:L}},te.isValidElement=B,te.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:k}},te.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},te.startTransition=function(L){var nt=P.T,xt={};P.T=xt;try{var Z=L(),ct=P.S;ct!==null&&ct(xt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(G,St)}catch(Et){St(Et)}finally{nt!==null&&xt.types!==null&&(nt.types=xt.types),P.T=nt}},te.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},te.use=function(L){return P.H.use(L)},te.useActionState=function(L,nt,xt){return P.H.useActionState(L,nt,xt)},te.useCallback=function(L,nt){return P.H.useCallback(L,nt)},te.useContext=function(L){return P.H.useContext(L)},te.useDebugValue=function(){},te.useDeferredValue=function(L,nt){return P.H.useDeferredValue(L,nt)},te.useEffect=function(L,nt){return P.H.useEffect(L,nt)},te.useEffectEvent=function(L){return P.H.useEffectEvent(L)},te.useId=function(){return P.H.useId()},te.useImperativeHandle=function(L,nt,xt){return P.H.useImperativeHandle(L,nt,xt)},te.useInsertionEffect=function(L,nt){return P.H.useInsertionEffect(L,nt)},te.useLayoutEffect=function(L,nt){return P.H.useLayoutEffect(L,nt)},te.useMemo=function(L,nt){return P.H.useMemo(L,nt)},te.useOptimistic=function(L,nt){return P.H.useOptimistic(L,nt)},te.useReducer=function(L,nt,xt){return P.H.useReducer(L,nt,xt)},te.useRef=function(L){return P.H.useRef(L)},te.useState=function(L){return P.H.useState(L)},te.useSyncExternalStore=function(L,nt,xt){return P.H.useSyncExternalStore(L,nt,xt)},te.useTransition=function(){return P.H.useTransition()},te.version="19.2.8",te}var cg;function md(){return cg||(cg=1,Wf.exports=ay()),Wf.exports}var Oo=md();const sy=_v(Oo);var qf={exports:{}},Co={},Yf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function ry(){return ug||(ug=1,(function(o){function e(N,j){var k=N.length;N.push(j);t:for(;0<k;){var St=k-1>>>1,Tt=N[St];if(0<l(Tt,j))N[St]=j,N[k]=Tt,k=St;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var j=N[0],k=N.pop();if(k!==j){N[0]=k;t:for(var St=0,Tt=N.length,L=Tt>>>1;St<L;){var nt=2*(St+1)-1,xt=N[nt],Z=nt+1,ct=N[Z];if(0>l(xt,k))Z<Tt&&0>l(ct,xt)?(N[St]=ct,N[Z]=k,St=Z):(N[St]=xt,N[nt]=k,St=nt);else if(Z<Tt&&0>l(ct,k))N[St]=ct,N[Z]=k,St=Z;else break t}}return j}function l(N,j){var k=N.sortIndex-j.sortIndex;return k!==0?k:N.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,S=null,y=3,M=!1,A=!1,C=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=N)s(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function Y(N){if(C=!1,U(N),!A)if(i(m)!==null)A=!0,G||(G=!0,rt());else{var j=i(p);j!==null&&ft(Y,j.startTime-N)}}var G=!1,P=-1,K=5,D=-1;function R(){return x?!0:!(o.unstable_now()-D<K)}function B(){if(x=!1,G){var N=o.unstable_now();D=N;var j=!0;try{t:{A=!1,C&&(C=!1,I(P),P=-1),M=!0;var k=y;try{e:{for(U(N),S=i(m);S!==null&&!(S.expirationTime>N&&R());){var St=S.callback;if(typeof St=="function"){S.callback=null,y=S.priorityLevel;var Tt=St(S.expirationTime<=N);if(N=o.unstable_now(),typeof Tt=="function"){S.callback=Tt,U(N),j=!0;break e}S===i(m)&&s(m),U(N)}else s(m);S=i(m)}if(S!==null)j=!0;else{var L=i(p);L!==null&&ft(Y,L.startTime-N),j=!1}}break t}finally{S=null,y=k,M=!1}j=void 0}}finally{j?rt():G=!1}}}var rt;if(typeof O=="function")rt=function(){O(B)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ht=et.port2;et.port1.onmessage=B,rt=function(){ht.postMessage(null)}}else rt=function(){g(B,0)};function ft(N,j){P=g(function(){N(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var k=y;y=j;try{return N()}finally{y=k}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=y;y=N;try{return j()}finally{y=k}},o.unstable_scheduleCallback=function(N,j,k){var St=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?St+k:St):k=St,N){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=k+Tt,N={id:v++,callback:j,priorityLevel:N,startTime:k,expirationTime:Tt,sortIndex:-1},k>St?(N.sortIndex=k,e(p,N),i(m)===null&&N===i(p)&&(C?(I(P),P=-1):C=!0,ft(Y,k-St))):(N.sortIndex=Tt,e(m,N),A||M||(A=!0,G||(G=!0,rt()))),N},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(N){var j=y;return function(){var k=y;y=j;try{return N.apply(this,arguments)}finally{y=k}}}})(jf)),jf}var fg;function oy(){return fg||(fg=1,Yf.exports=ry()),Yf.exports}var Zf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function ly(){if(hg)return bn;hg=1;var o=md();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},bn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:y,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},bn.requestFormReset=function(m){s.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.8",bn}var dg;function cy(){if(dg)return Zf.exports;dg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=ly(),Zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function uy(){if(pg)return Co;pg=1;var o=oy(),e=md(),i=cy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,r=f;break}if(E===r){_=!0,r=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=c;break}if(E===r){_=!0,r=f,a=c;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var et=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case g:return"Profiler";case x:return"StrictMode";case Y:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case O:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var ft=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function L(t){return{current:t}}function nt(t){0>Tt||(t.current=St[Tt],St[Tt]=null,Tt--)}function xt(t,n){Tt++,St[Tt]=t.current,t.current=n}var Z=L(null),ct=L(null),Et=L(null),yt=L(null);function Ht(t,n){switch(xt(Et,n),xt(ct,t),xt(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?D_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=D_(n),t=w_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(Z),xt(Z,t)}function It(){nt(Z),nt(ct),nt(Et)}function ee(t){t.memoizedState!==null&&xt(yt,t);var n=Z.current,a=w_(n,t.type);n!==a&&(xt(ct,t),xt(Z,a))}function Le(t){ct.current===t&&(nt(Z),nt(ct)),yt.current===t&&(nt(yt),Eo._currentValue=k)}var ue,ke;function F(t){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+ke}var En=!1;function le(t,n){if(!t||En)return"";En=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var $=ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ot){$=ot}t.call(_t.prototype)}}else{try{throw Error()}catch(ot){$=ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&$&&typeof ot.stack=="string")return[ot.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var z=_.split(`
`),J=E.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===J.length)for(r=z.length-1,c=J.length-1;1<=r&&0<=c&&z[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==J[c]){var ut=`
`+z[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=c);break}}}finally{En=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?F(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return F(t.type);case 16:return F("Lazy");case 13:return t.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return F("Activity");default:return""}}function Wt(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,w=o.unstable_cancelCallback,T=o.unstable_shouldYield,tt=o.unstable_requestPaint,dt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,_e=o.unstable_IdlePriority,bt=o.log,zt=o.unstable_setDisableYieldValue,qt=null,Xt=null;function Lt(t){if(typeof bt=="function"&&zt(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(qt,t)}catch{}}var Qt=Math.clz32?Math.clz32:V,ne=Math.log,Ne=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(ne(t)/Ne|0)|0}var At=256,lt=262144,gt=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Rt(r):(_&=E,_!==0?c=Rt(_):a||(a=E&~t,a!==0&&(c=Rt(a))))):(E=r&~f,E!==0?c=Rt(E):_!==0?c=Rt(_):a||(a=r&~t,a!==0&&(c=Rt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function We(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),t}function xe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ci(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,J=t.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Qt(a),_t=1<<ut;E[ut]=0,z[ut]=-1;var $=J[ut];if($!==null)for(J[ut]=null,ut=0;ut<$.length;ut++){var ot=$[ut];ot!==null&&(ot.lane&=-536870913)}a&=~_t}r!==0&&Pr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Pr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Qt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function zr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Qt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function xi(t,n){var a=n&-n;return a=(a&42)!==0?1:Wa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Wa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function As(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Br(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:$_(t.type))}function qa(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var ui=Math.random().toString(36).slice(2),Ye="__reactFiber$"+ui,vn="__reactProps$"+ui,wi="__reactContainer$"+ui,Ir="__reactEvents$"+ui,Bc="__reactListeners$"+ui,Ic="__reactHandles$"+ui,Vo="__reactResources$"+ui,Ya="__reactMarker$"+ui;function b(t){delete t[Ye],delete t[vn],delete t[Ir],delete t[Bc],delete t[Ic]}function X(t){var n=t[Ye];if(n)return n;for(var a=t.parentNode;a;){if(n=a[wi]||a[Ye]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=B_(t);t!==null;){if(a=t[Ye])return a;t=B_(t)}return n}t=a,a=t.parentNode}return null}function it(t){if(t=t[Ye]||t[wi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function st(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function W(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(t){t[Ya]=!0}var wt=new Set,Ot={};function Nt(t,n){Zt(t,n),Zt(t+"Capture",n)}function Zt(t,n){for(Ot[t]=n,t=0;t<n.length;t++)wt.add(n[t])}var $t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yt={},ge={};function Me(t){return De.call(ge,t)?!0:De.call(Yt,t)?!1:$t.test(t)?ge[t]=!0:(Yt[t]=!0,!1)}function Ge(t,n,a){if(Me(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Fe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ie(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function en(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ee(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Cn(t){if(!t._valueTracker){var n=en(t)?"checked":"value";t._valueTracker=Ee(t,n,""+t[n])}}function Ui(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=en(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ja=/[\n"\\]/g;function fe(t){return t.replace(ja,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,a,r,c,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ft(n)):t.value!==""+Ft(n)&&(t.value=""+Ft(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?cn(t,_,Ft(n)):a!=null?cn(t,_,Ft(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ft(E):t.removeAttribute("name")}function Dn(t,n,a,r,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Cn(t);return}a=a!=null?""+Ft(a):"",n=n!=null?""+Ft(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Cn(t)}function cn(t,n,a){n==="number"&&pn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ke(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Ft(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Rs(t,n,a){if(n!=null&&(n=""+Ft(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ft(a):""}function Mi(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Ft(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Cn(t)}function Cs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ad(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Qv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Rd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ad(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ad(t,f,n[f])}function Fc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return $v.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Li(){}var Hc=null;function Gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ds=null,ws=null;function Cd(t){var n=it(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[vn]||null;if(!c)throw Error(s(90));Tn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ui(r)}break t;case"textarea":Rs(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(t,!!a.multiple,n,!1)}}}var Vc=!1;function Dd(t,n,a){if(Vc)return t(n,a);Vc=!0;try{var r=t(n);return r}finally{if(Vc=!1,(Ds!==null||ws!==null)&&(wl(),Ds&&(n=Ds,t=ws,ws=Ds=null,Cd(n),t)))for(n=0;n<t.length;n++)Cd(t[n])}}function Fr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[vn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Ni)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Xc=!1}var ua=null,kc=null,ko=null;function wd(){if(ko)return ko;var t,n=kc,a=n.length,r,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return ko=c.slice(t,1<r?1-r:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Ud(){return!1}function Ln(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Ud,this.isPropagationStopped=Ud,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Ln(Za),Gr=S({},Za,{view:0,detail:0}),t0=Ln(Gr),Wc,qc,Vr,jo=S({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vr&&(Vr&&t.type==="mousemove"?(Wc=t.screenX-Vr.screenX,qc=t.screenY-Vr.screenY):qc=Wc=0,Vr=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),Ld=Ln(jo),e0=S({},jo,{dataTransfer:0}),n0=Ln(e0),i0=S({},Gr,{relatedTarget:0}),Yc=Ln(i0),a0=S({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=Ln(a0),r0=S({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o0=Ln(r0),l0=S({},Za,{data:0}),Nd=Ln(l0),c0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=f0[t])?!!n[t]:!1}function jc(){return h0}var d0=S({},Gr,{key:function(t){if(t.key){var n=c0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=Ln(d0),m0=S({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=Ln(m0),_0=S({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),g0=Ln(_0),v0=S({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=Ln(v0),y0=S({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x0=Ln(y0),M0=S({},Za,{newState:0,oldState:0}),E0=Ln(M0),T0=[9,13,27,32],Zc=Ni&&"CompositionEvent"in window,Xr=null;Ni&&"documentMode"in document&&(Xr=document.documentMode);var b0=Ni&&"TextEvent"in window&&!Xr,Pd=Ni&&(!Zc||Xr&&8<Xr&&11>=Xr),zd=" ",Bd=!1;function Id(t,n){switch(t){case"keyup":return T0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function A0(t,n){switch(t){case"compositionend":return Fd(n);case"keypress":return n.which!==32?null:(Bd=!0,zd);case"textInput":return t=n.data,t===zd&&Bd?null:t;default:return null}}function R0(t,n){if(Us)return t==="compositionend"||!Zc&&Id(t,n)?(t=wd(),ko=kc=ua=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pd&&n.locale!=="ko"?null:n.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!C0[t.type]:n==="textarea"}function Gd(t,n,a,r){Ds?ws?ws.push(r):ws=[r]:Ds=r,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var kr=null,Wr=null;function D0(t){E_(t,0)}function Zo(t){var n=st(t);if(Ui(n))return t}function Vd(t,n){if(t==="change")return n}var Xd=!1;if(Ni){var Kc;if(Ni){var Qc="oninput"in document;if(!Qc){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),Qc=typeof kd.oninput=="function"}Kc=Qc}else Kc=!1;Xd=Kc&&(!document.documentMode||9<document.documentMode)}function Wd(){kr&&(kr.detachEvent("onpropertychange",qd),Wr=kr=null)}function qd(t){if(t.propertyName==="value"&&Zo(Wr)){var n=[];Gd(n,Wr,t,Gc(t)),Dd(D0,n)}}function w0(t,n,a){t==="focusin"?(Wd(),kr=n,Wr=a,kr.attachEvent("onpropertychange",qd)):t==="focusout"&&Wd()}function U0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Wr)}function L0(t,n){if(t==="click")return Zo(n)}function N0(t,n){if(t==="input"||t==="change")return Zo(n)}function O0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:O0;function qr(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function Yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jd(t,n){var a=Yd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yd(a)}}function Zd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Zd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Kd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pn(t.document)}return n}function Jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var P0=Ni&&"documentMode"in document&&11>=document.documentMode,Ls=null,$c=null,Yr=null,tu=!1;function Qd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||Ls==null||Ls!==pn(r)||(r=Ls,"selectionStart"in r&&Jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&qr(Yr,r)||(Yr=r,r=Bl($c,"onSelect"),0<r.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ls)))}function Ka(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ns={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},eu={},Jd={};Ni&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Qa(t){if(eu[t])return eu[t];if(!Ns[t])return t;var n=Ns[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jd)return eu[t]=n[a];return t}var $d=Qa("animationend"),tp=Qa("animationiteration"),ep=Qa("animationstart"),z0=Qa("transitionrun"),B0=Qa("transitionstart"),I0=Qa("transitioncancel"),np=Qa("transitionend"),ip=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function fi(t,n){ip.set(t,n),Nt(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Jn=[],Os=0,iu=0;function Qo(){for(var t=Os,n=iu=Os=0;n<t;){var a=Jn[n];Jn[n++]=null;var r=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&ap(a,c,f)}}function Jo(t,n,a,r){Jn[Os++]=t,Jn[Os++]=n,Jn[Os++]=a,Jn[Os++]=r,iu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function au(t,n,a,r){return Jo(t,n,a,r),$o(t)}function Ja(t,n){return Jo(t,null,null,n),$o(t)}function ap(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Qt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<_o)throw _o=0,pf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ps={};function F0(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,r){return new F0(t,n,a,r)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")su(t)&&(_=1);else if(typeof t=="string")_=kS(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=kn(31,a,n,c),t.elementType=D,t.lanes=f,t;case C:return $a(a.children,c,f,n);case x:_=8,c|=24;break;case g:return t=kn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case Y:return t=kn(13,a,n,c),t.elementType=Y,t.lanes=f,t;case G:return t=kn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:_=10;break t;case I:_=9;break t;case U:_=11;break t;case P:_=14;break t;case K:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=kn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function $a(t,n,a,r){return t=kn(7,t,r,n),t.lanes=a,t}function ru(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function rp(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function ou(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var op=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},op.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var zs=[],Bs=0,el=null,jr=0,ti=[],ei=0,fa=null,Ei=1,Ti="";function Pi(t,n){zs[Bs++]=jr,zs[Bs++]=el,el=t,jr=n}function lp(t,n,a){ti[ei++]=Ei,ti[ei++]=Ti,ti[ei++]=fa,fa=t;var r=Ei;t=Ti;var c=32-Qt(r)-1;r&=~(1<<c),a+=1;var f=32-Qt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ei=1<<32-Qt(n)+c|a<<c|r,Ti=f+t}else Ei=1<<f|a<<c|r,Ti=t}function lu(t){t.return!==null&&(Pi(t,1),lp(t,1,0))}function cu(t){for(;t===el;)el=zs[--Bs],zs[Bs]=null,jr=zs[--Bs],zs[Bs]=null;for(;t===fa;)fa=ti[--ei],ti[ei]=null,Ti=ti[--ei],ti[ei]=null,Ei=ti[--ei],ti[ei]=null}function cp(t,n){ti[ei++]=Ei,ti[ei++]=Ti,ti[ei++]=fa,Ei=n.id,Ti=n.overflow,fa=t}var Sn=null,Ve=null,ye=!1,ha=null,ni=!1,uu=Error(s(519));function da(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zr($n(n,t)),uu}function up(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ye]=t,n[vn]=r,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)de(vo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Dn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Mi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||R_(n.textContent,a)?(r.popover!=null&&(de("beforetoggle",n),de("toggle",n)),r.onScroll!=null&&de("scroll",n),r.onScrollEnd!=null&&de("scrollend",n),r.onClick!=null&&(n.onclick=Li),n=!0):n=!1,n||da(t,!0)}function fp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:Sn=Sn.return}}function Is(t){if(t!==Sn)return!1;if(!ye)return fp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&Ve&&da(t),fp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ve=z_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ve=z_(t)}else n===27?(n=Ve,Ra(t.type)?(t=Of,Of=null,Ve=t):Ve=n):Ve=Sn?ai(t.stateNode.nextSibling):null;return!0}function ts(){Ve=Sn=null,ye=!1}function fu(){var t=ha;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),ha=null),t}function Zr(t){ha===null?ha=[t]:ha.push(t)}var hu=L(null),es=null,zi=null;function pa(t,n,a){xt(hu,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=hu.current,nt(hu)}function du(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function pu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),du(f.return,a,t),r||(_=null);break t}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),du(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Fs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=c.type;Xn(c.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(c===yt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&pu(n,t,a,r),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ns(t){es=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return hp(es,t)}function il(t,n){return es===null&&ns(t),hp(t,n)}function hp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(s(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var H0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},G0=o.unstable_scheduleCallback,V0=o.unstable_NormalPriority,nn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new H0,data:new Map,refCount:0}}function Kr(t){t.refCount--,t.refCount===0&&G0(V0,function(){t.controller.abort()})}var Qr=null,_u=0,Hs=0,Gs=null;function X0(t,n){if(Qr===null){var a=Qr=[];_u=0,Hs=yf(),Gs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return _u++,n.then(dp,dp),n}function dp(){if(--_u===0&&Qr!==null){Gs!==null&&(Gs.status="fulfilled");var t=Qr;Qr=null,Hs=0,Gs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function k0(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var pp=N.S;N.S=function(t,n){Qm=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&X0(t,n),pp!==null&&pp(t,n)};var is=L(null);function gu(){var t=is.current;return t!==null?t:He.pooledCache}function al(t,n){n===null?xt(is,is.current):xt(is,n.pool)}function mp(){var t=gu();return t===null?null:{parent:nn._currentValue,pool:t}}var Vs=Error(s(460)),vu=Error(s(474)),sl=Error(s(542)),rl={then:function(){}};function _p(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Li,Li),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sp(t),t;default:if(typeof n.status=="string")n.then(Li,Li);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sp(t),t}throw ss=n,Vs}}function as(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ss=a,Vs):a}}var ss=null;function vp(){if(ss===null)throw Error(s(459));var t=ss;return ss=null,t}function Sp(t){if(t===Vs||t===sl)throw Error(s(483))}var Xs=null,Jr=0;function ol(t){var n=Jr;return Jr+=1,Xs===null&&(Xs=[]),gp(Xs,t,n)}function $r(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function yp(t){function n(q,H){if(t){var Q=q.deletions;Q===null?(q.deletions=[H],q.flags|=16):Q.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function r(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function c(q,H){return q=Oi(q,H),q.index=0,q.sibling=null,q}function f(q,H,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<H?(q.flags|=67108866,H):Q):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function _(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,H,Q,pt){return H===null||H.tag!==6?(H=ru(Q,q.mode,pt),H.return=q,H):(H=c(H,Q),H.return=q,H)}function z(q,H,Q,pt){var jt=Q.type;return jt===C?ut(q,H,Q.props.children,pt,Q.key):H!==null&&(H.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===K&&as(jt)===H.type)?(H=c(H,Q.props),$r(H,Q),H.return=q,H):(H=tl(Q.type,Q.key,Q.props,null,q.mode,pt),$r(H,Q),H.return=q,H)}function J(q,H,Q,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=ou(Q,q.mode,pt),H.return=q,H):(H=c(H,Q.children||[]),H.return=q,H)}function ut(q,H,Q,pt,jt){return H===null||H.tag!==7?(H=$a(Q,q.mode,pt,jt),H.return=q,H):(H=c(H,Q),H.return=q,H)}function _t(q,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=ru(""+H,q.mode,Q),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return Q=tl(H.type,H.key,H.props,null,q.mode,Q),$r(Q,H),Q.return=q,Q;case A:return H=ou(H,q.mode,Q),H.return=q,H;case K:return H=as(H),_t(q,H,Q)}if(ft(H)||rt(H))return H=$a(H,q.mode,Q,null),H.return=q,H;if(typeof H.then=="function")return _t(q,ol(H),Q);if(H.$$typeof===O)return _t(q,il(q,H),Q);ll(q,H)}return null}function $(q,H,Q,pt){var jt=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return jt!==null?null:E(q,H,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===jt?z(q,H,Q,pt):null;case A:return Q.key===jt?J(q,H,Q,pt):null;case K:return Q=as(Q),$(q,H,Q,pt)}if(ft(Q)||rt(Q))return jt!==null?null:ut(q,H,Q,pt,null);if(typeof Q.then=="function")return $(q,H,ol(Q),pt);if(Q.$$typeof===O)return $(q,H,il(q,Q),pt);ll(q,Q)}return null}function ot(q,H,Q,pt,jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(Q)||null,E(H,q,""+pt,jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return q=q.get(pt.key===null?Q:pt.key)||null,z(H,q,pt,jt);case A:return q=q.get(pt.key===null?Q:pt.key)||null,J(H,q,pt,jt);case K:return pt=as(pt),ot(q,H,Q,pt,jt)}if(ft(pt)||rt(pt))return q=q.get(Q)||null,ut(H,q,pt,jt,null);if(typeof pt.then=="function")return ot(q,H,Q,ol(pt),jt);if(pt.$$typeof===O)return ot(q,H,Q,il(H,pt),jt);ll(H,pt)}return null}function Bt(q,H,Q,pt){for(var jt=null,Te=null,Gt=H,se=H=0,Se=null;Gt!==null&&se<Q.length;se++){Gt.index>se?(Se=Gt,Gt=null):Se=Gt.sibling;var be=$(q,Gt,Q[se],pt);if(be===null){Gt===null&&(Gt=Se);break}t&&Gt&&be.alternate===null&&n(q,Gt),H=f(be,H,se),Te===null?jt=be:Te.sibling=be,Te=be,Gt=Se}if(se===Q.length)return a(q,Gt),ye&&Pi(q,se),jt;if(Gt===null){for(;se<Q.length;se++)Gt=_t(q,Q[se],pt),Gt!==null&&(H=f(Gt,H,se),Te===null?jt=Gt:Te.sibling=Gt,Te=Gt);return ye&&Pi(q,se),jt}for(Gt=r(Gt);se<Q.length;se++)Se=ot(Gt,q,se,Q[se],pt),Se!==null&&(t&&Se.alternate!==null&&Gt.delete(Se.key===null?se:Se.key),H=f(Se,H,se),Te===null?jt=Se:Te.sibling=Se,Te=Se);return t&&Gt.forEach(function(La){return n(q,La)}),ye&&Pi(q,se),jt}function Kt(q,H,Q,pt){if(Q==null)throw Error(s(151));for(var jt=null,Te=null,Gt=H,se=H=0,Se=null,be=Q.next();Gt!==null&&!be.done;se++,be=Q.next()){Gt.index>se?(Se=Gt,Gt=null):Se=Gt.sibling;var La=$(q,Gt,be.value,pt);if(La===null){Gt===null&&(Gt=Se);break}t&&Gt&&La.alternate===null&&n(q,Gt),H=f(La,H,se),Te===null?jt=La:Te.sibling=La,Te=La,Gt=Se}if(be.done)return a(q,Gt),ye&&Pi(q,se),jt;if(Gt===null){for(;!be.done;se++,be=Q.next())be=_t(q,be.value,pt),be!==null&&(H=f(be,H,se),Te===null?jt=be:Te.sibling=be,Te=be);return ye&&Pi(q,se),jt}for(Gt=r(Gt);!be.done;se++,be=Q.next())be=ot(Gt,q,se,be.value,pt),be!==null&&(t&&be.alternate!==null&&Gt.delete(be.key===null?se:be.key),H=f(be,H,se),Te===null?jt=be:Te.sibling=be,Te=be);return t&&Gt.forEach(function(ey){return n(q,ey)}),ye&&Pi(q,se),jt}function ze(q,H,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var jt=Q.key;H!==null;){if(H.key===jt){if(jt=Q.type,jt===C){if(H.tag===7){a(q,H.sibling),pt=c(H,Q.props.children),pt.return=q,q=pt;break t}}else if(H.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===K&&as(jt)===H.type){a(q,H.sibling),pt=c(H,Q.props),$r(pt,Q),pt.return=q,q=pt;break t}a(q,H);break}else n(q,H);H=H.sibling}Q.type===C?(pt=$a(Q.props.children,q.mode,pt,Q.key),pt.return=q,q=pt):(pt=tl(Q.type,Q.key,Q.props,null,q.mode,pt),$r(pt,Q),pt.return=q,q=pt)}return _(q);case A:t:{for(jt=Q.key;H!==null;){if(H.key===jt)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(q,H.sibling),pt=c(H,Q.children||[]),pt.return=q,q=pt;break t}else{a(q,H);break}else n(q,H);H=H.sibling}pt=ou(Q,q.mode,pt),pt.return=q,q=pt}return _(q);case K:return Q=as(Q),ze(q,H,Q,pt)}if(ft(Q))return Bt(q,H,Q,pt);if(rt(Q)){if(jt=rt(Q),typeof jt!="function")throw Error(s(150));return Q=jt.call(Q),Kt(q,H,Q,pt)}if(typeof Q.then=="function")return ze(q,H,ol(Q),pt);if(Q.$$typeof===O)return ze(q,H,il(q,Q),pt);ll(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(q,H.sibling),pt=c(H,Q),pt.return=q,q=pt):(a(q,H),pt=ru(Q,q.mode,pt),pt.return=q,q=pt),_(q)):a(q,H)}return function(q,H,Q,pt){try{Jr=0;var jt=ze(q,H,Q,pt);return Xs=null,jt}catch(Gt){if(Gt===Vs||Gt===sl)throw Gt;var Te=kn(29,Gt,null,q.mode);return Te.lanes=pt,Te.return=q,Te}finally{}}}var rs=yp(!0),xp=yp(!1),ma=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=$o(t),ap(t,null,a),n}return Jo(t,r,n,a),$o(t)}function to(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,zr(t,a)}}function xu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mu=!1;function eo(){if(Mu){var t=Gs;if(t!==null)throw t}}function no(t,n,a,r){Mu=!1;var c=t.updateQueue;ma=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,J=z.next;z.next=null,_===null?f=J:_.next=J,_=z;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==_&&(E===null?ut.firstBaseUpdate=J:E.next=J,ut.lastBaseUpdate=z))}if(f!==null){var _t=c.baseState;_=0,ut=J=z=null,E=f;do{var $=E.lane&-536870913,ot=$!==E.lane;if(ot?(ve&$)===$:(r&$)===$){$!==0&&$===Hs&&(Mu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Bt=t,Kt=E;$=n;var ze=a;switch(Kt.tag){case 1:if(Bt=Kt.payload,typeof Bt=="function"){_t=Bt.call(ze,_t,$);break t}_t=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Kt.payload,$=typeof Bt=="function"?Bt.call(ze,_t,$):Bt,$==null)break t;_t=S({},_t,$);break t;case 2:ma=!0}}$=E.callback,$!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[$]:ot.push($))}else ot={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(J=ut=ot,z=_t):ut=ut.next=ot,_|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ut===null&&(z=_t),c.baseState=z,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ma|=_,t.lanes=_,t.memoizedState=_t}}function Mp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Ep(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Mp(a[t],n)}var ks=L(null),cl=L(0);function Tp(t,n){t=qi,xt(cl,t),xt(ks,n),qi=t|n.baseLanes}function Eu(){xt(cl,qi),xt(ks,ks.current)}function Tu(){qi=cl.current,nt(ks),nt(cl)}var Wn=L(null),ii=null;function va(t){var n=t.alternate;xt(Qe,Qe.current&1),xt(Wn,t),ii===null&&(n===null||ks.current!==null||n.memoizedState!==null)&&(ii=t)}function bu(t){xt(Qe,Qe.current),xt(Wn,t),ii===null&&(ii=t)}function bp(t){t.tag===22?(xt(Qe,Qe.current),xt(Wn,t),ii===null&&(ii=t)):Sa()}function Sa(){xt(Qe,Qe.current),xt(Wn,Wn.current)}function qn(t){nt(Wn),ii===t&&(ii=null),nt(Qe)}var Qe=L(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lf(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=0,ae=null,Oe=null,an=null,fl=!1,Ws=!1,os=!1,hl=0,io=0,qs=null,W0=0;function je(){throw Error(s(321))}function Au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Ru(t,n,a,r,c,f){return Ii=f,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?lm:Vu,os=!1,f=a(r,c),os=!1,Ws&&(f=Rp(n,a,r,c)),Ap(t),f}function Ap(t){N.H=ro;var n=Oe!==null&&Oe.next!==null;if(Ii=0,an=Oe=ae=null,fl=!1,io=0,qs=null,n)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&nl(t)&&(sn=!0))}function Rp(t,n,a,r){ae=t;var c=0;do{if(Ws&&(qs=null),io=0,Ws=!1,25<=c)throw Error(s(301));if(c+=1,an=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=cm,f=n(a,r)}while(Ws);return f}function q0(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?ao(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(ae.flags|=1024),n}function Cu(){var t=hl!==0;return hl=0,t}function Du(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function wu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Ii=0,an=Oe=ae=null,Ws=!1,io=hl=0,qs=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ae.memoizedState=an=t:an=an.next=t,an}function Je(){if(Oe===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=an===null?ae.memoizedState:an.next;if(n!==null)an=n,Oe=t;else{if(t===null)throw ae.alternate===null?Error(s(467)):Error(s(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},an===null?ae.memoizedState=an=t:an=an.next=t}return an}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(t){var n=io;return io+=1,qs===null&&(qs=[]),t=gp(qs,t,n),n=ae,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?lm:Vu),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ao(t);if(t.$$typeof===O)return yn(t)}throw Error(s(438,String(t)))}function Uu(t){var n=null,a=ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ae.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=Je();return Lu(n,Oe,t)}function Lu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=_=null,z=null,J=n,ut=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(ve&_t)===_t:(Ii&_t)===_t){var $=J.revertLane;if($===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Hs&&(ut=!0);else if((Ii&$)===$){J=J.next,$===Hs&&(ut=!0);continue}else _t={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(E=z=_t,_=f):z=z.next=_t,ae.lanes|=$,Ma|=$;_t=J.action,os&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else $={lane:_t,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(E=z=$,_=f):z=z.next=$,ae.lanes|=_t,Ma|=_t;J=J.next}while(J!==null&&J!==n);if(z===null?_=f:z.next=E,!Xn(f,t.memoizedState)&&(sn=!0,ut&&(a=Gs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Nu(t){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Xn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Cp(t,n,a){var r=ae,c=Je(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Xn((Oe||c).memoizedState,a);if(_&&(c.memoizedState=a,sn=!0),c=c.queue,zu(Up.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,Ys(9,{destroy:void 0},wp.bind(null,r,c,a,n),null),He===null)throw Error(s(349));f||(Ii&127)!==0||Dp(r,n,a)}return a}function Dp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ae.updateQueue,n===null?(n=dl(),ae.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wp(t,n,a,r){n.value=a,n.getSnapshot=r,Lp(n)&&Np(t)}function Up(t,n,a){return a(function(){Lp(n)&&Np(t)})}function Lp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Np(t){var n=Ja(t,2);n!==null&&Bn(n,t,2)}function Ou(t){var n=wn();if(typeof t=="function"){var a=t;if(t=a(),os){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Op(t,n,a,r){return t.baseState=a,Lu(t,Oe,typeof r=="function"?r:Fi)}function Y0(t,n,a,r,c){if(vl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Pp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Pp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=N.T,_={};N.T=_;try{var E=a(c,r),z=N.S;z!==null&&z(_,E),zp(t,n,E)}catch(J){Pu(t,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),N.T=f}}else try{f=a(c,r),zp(t,n,f)}catch(J){Pu(t,n,J)}}function zp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Bp(t,n,r)},function(r){return Pu(t,n,r)}):Bp(t,n,a)}function Bp(t,n,a){n.status="fulfilled",n.value=a,Ip(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Pp(t,a)))}function Pu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Ip(n),n=n.next;while(n!==r)}t.action=null}function Ip(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fp(t,n){return n}function Hp(t,n){if(ye){var a=He.formState;if(a!==null){t:{var r=ae;if(ye){if(Ve){e:{for(var c=Ve,f=ni;c.nodeType!==8;){if(!f){c=null;break e}if(c=ai(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ve=ai(c.nextSibling),r=c.data==="F!";break t}}da(r)}r=!1}r&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=r,a=sm.bind(null,ae,r),r.dispatch=a,r=Ou(!1),f=Gu.bind(null,ae,!1,r.queue),r=wn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Y0.bind(null,ae,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Gp(t){var n=Je();return Vp(n,Oe,t)}function Vp(t,n,a){if(n=Lu(t,n,Fp)[0],t=ml(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ao(n)}catch(_){throw _===Vs?sl:_}else r=n;n=Je();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ae.flags|=2048,Ys(9,{destroy:void 0},j0.bind(null,c,a),null)),[r,f,t]}function j0(t,n){t.action=n}function Xp(t){var n=Je(),a=Oe;if(a!==null)return Vp(n,a,t);Je(),n=n.memoizedState,a=Je();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ys(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ae.updateQueue,n===null&&(n=dl(),ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function kp(){return Je().memoizedState}function _l(t,n,a,r){var c=wn();ae.flags|=t,c.memoizedState=Ys(1|n,{destroy:void 0},a,r===void 0?null:r)}function gl(t,n,a,r){var c=Je();r=r===void 0?null:r;var f=c.memoizedState.inst;Oe!==null&&r!==null&&Au(r,Oe.memoizedState.deps)?c.memoizedState=Ys(n,f,a,r):(ae.flags|=t,c.memoizedState=Ys(1|n,f,a,r))}function Wp(t,n){_l(8390656,8,t,n)}function zu(t,n){gl(2048,8,t,n)}function Z0(t){ae.flags|=4;var n=ae.updateQueue;if(n===null)n=dl(),ae.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function qp(t){var n=Je().memoizedState;return Z0({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Yp(t,n){return gl(4,2,t,n)}function jp(t,n){return gl(4,4,t,n)}function Zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Kp(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,Zp.bind(null,n,t),a)}function Bu(){}function Qp(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Au(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Jp(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Au(n,r[1]))return r[0];if(r=t(),os){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r}function Iu(t,n,a){return a===void 0||(Ii&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=$m(),ae.lanes|=t,Ma|=t,a)}function $p(t,n,a,r){return Xn(a,n)?a:ks.current!==null?(t=Iu(t,a,r),Xn(t,n)||(sn=!0),t):(Ii&42)===0||(Ii&1073741824)!==0&&(ve&261930)===0?(sn=!0,t.memoizedState=a):(t=$m(),ae.lanes|=t,Ma|=t,n)}function tm(t,n,a,r,c){var f=j.p;j.p=f!==0&&8>f?f:8;var _=N.T,E={};N.T=E,Gu(t,!1,n,a);try{var z=c(),J=N.S;if(J!==null&&J(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=k0(z,r);so(t,n,ut,Zn(t))}else so(t,n,r,Zn(t))}catch(_t){so(t,n,{then:function(){},status:"rejected",reason:_t},Zn())}finally{j.p=f,_!==null&&E.types!==null&&(_.types=E.types),N.T=_}}function K0(){}function Fu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=em(t).queue;tm(t,c,n,k,a===null?K0:function(){return nm(t),a(r)})}function em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function nm(t){var n=em(t);n.next===null&&(n=t.alternate.memoizedState),so(t,n.next.queue,{},Zn())}function Hu(){return yn(Eo)}function im(){return Je().memoizedState}function am(){return Je().memoizedState}function Q0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=_a(a);var r=ga(n,t,a);r!==null&&(Bn(r,n,a),to(r,n,a)),n={cache:mu()},t.payload=n;return}n=n.return}}function J0(t,n,a){var r=Zn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?rm(n,a):(a=au(t,n,a,r),a!==null&&(Bn(a,t,r),om(a,n,r)))}function sm(t,n,a){var r=Zn();so(t,n,a,r)}function so(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))rm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,Xn(E,_))return Jo(t,n,c,0),He===null&&Qo(),!1}catch{}finally{}if(a=au(t,n,c,r),a!==null)return Bn(a,t,r),om(a,n,r),!0}return!1}function Gu(t,n,a,r){if(r={lane:2,revertLane:yf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(s(479))}else n=au(t,a,r,2),n!==null&&Bn(n,t,2)}function vl(t){var n=t.alternate;return t===ae||n!==null&&n===ae}function rm(t,n){Ws=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function om(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,zr(t,a)}}var ro={readContext:yn,use:pl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};ro.useEffectEvent=je;var lm={readContext:yn,use:pl,useCallback:function(t,n){return wn().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:Wp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,_l(4194308,4,Zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return _l(4194308,4,t,n)},useInsertionEffect:function(t,n){_l(4,2,t,n)},useMemo:function(t,n){var a=wn();n=n===void 0?null:n;var r=t();if(os){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=wn();if(a!==void 0){var c=a(n);if(os){Lt(!0);try{a(n)}finally{Lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=J0.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var n=wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ou(t);var n=t.queue,a=sm.bind(null,ae,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(t,n){var a=wn();return Iu(a,t,n)},useTransition:function(){var t=Ou(!1);return t=tm.bind(null,ae,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ae,c=wn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),He===null)throw Error(s(349));(ve&127)!==0||Dp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Wp(Up.bind(null,r,f,t),[t]),r.flags|=2048,Ys(9,{destroy:void 0},wp.bind(null,r,f,a,n),null),a},useId:function(){var t=wn(),n=He.identifierPrefix;if(ye){var a=Ti,r=Ei;a=(r&~(1<<32-Qt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=W0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Hu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t){var n=wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gu.bind(null,ae,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uu,useCacheRefresh:function(){return wn().memoizedState=Q0.bind(null,ae)},useEffectEvent:function(t){var n=wn(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Vu={readContext:yn,use:pl,useCallback:Qp,useContext:yn,useEffect:zu,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:jp,useMemo:Jp,useReducer:ml,useRef:kp,useState:function(){return ml(Fi)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=Je();return $p(a,Oe.memoizedState,t,n)},useTransition:function(){var t=ml(Fi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:ao(t),n]},useSyncExternalStore:Cp,useId:im,useHostTransitionStatus:Hu,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,n){var a=Je();return Op(a,Oe,t,n)},useMemoCache:Uu,useCacheRefresh:am};Vu.useEffectEvent=qp;var cm={readContext:yn,use:pl,useCallback:Qp,useContext:yn,useEffect:zu,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:jp,useMemo:Jp,useReducer:Nu,useRef:kp,useState:function(){return Nu(Fi)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=Je();return Oe===null?Iu(a,t,n):$p(a,Oe.memoizedState,t,n)},useTransition:function(){var t=Nu(Fi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:ao(t),n]},useSyncExternalStore:Cp,useId:im,useHostTransitionStatus:Hu,useFormState:Xp,useActionState:Xp,useOptimistic:function(t,n){var a=Je();return Oe!==null?Op(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:am};cm.useEffectEvent=qp;function Xu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Zn(),c=_a(r);c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,r),n!==null&&(Bn(n,t,r),to(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Zn(),c=_a(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,r),n!==null&&(Bn(n,t,r),to(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=ga(t,r,a),n!==null&&(Bn(n,t,a),to(n,t,a))}};function um(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!qr(a,r)||!qr(c,f):!0}function fm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ku.enqueueReplaceState(n,n.state,null)}function ls(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function hm(t){Ko(t)}function dm(t){console.error(t)}function pm(t){Ko(t)}function Sl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function mm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wu(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(t,n)},a}function _m(t){return t=_a(t),t.tag=3,t}function gm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){mm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){mm(n,a,r),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function $0(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=Wn.current,a!==null){switch(a.tag){case 31:case 13:return ii===null?Ul():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),gf(t,r,c)),!1;case 22:return a.flags|=65536,r===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),gf(t,r,c)),!1}throw Error(s(435,a.tag))}return gf(t,r,c),Ul(),!1}if(ye)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==uu&&(t=Error(s(422),{cause:r}),Zr($n(t,a)))):(r!==uu&&(n=Error(s(423),{cause:r}),Zr($n(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=$n(r,a),c=Wu(t.stateNode,r,c),xu(t,c),Ze!==4&&(Ze=2)),!1;var f=Error(s(520),{cause:r});if(f=$n(f,a),mo===null?mo=[f]:mo.push(f),Ze!==4&&(Ze=2),n===null)return!0;r=$n(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Wu(a.stateNode,r,t),xu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=_m(c),gm(c,t,a,r),xu(a,c),!1}a=a.return}while(a!==null);return!1}var qu=Error(s(461)),sn=!1;function xn(t,n,a,r){n.child=t===null?xp(n,null,a,r):rs(n,t.child,a,r)}function vm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return ns(n),r=Ru(t,n,a,_,f,c),E=Cu(),t!==null&&!sn?(Du(t,n,c),Hi(t,n,c)):(ye&&E&&lu(n),n.flags|=1,xn(t,n,r,c),n.child)}function Sm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ym(t,n,f,r,c)):(t=tl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!tf(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(_,r)&&t.ref===n.ref)return Hi(t,n,c)}return n.flags|=1,t=Oi(f,r),t.ref=n.ref,t.return=n,n.child=t}function ym(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(qr(f,r)&&t.ref===n.ref)if(sn=!1,n.pendingProps=r=f,tf(t,c))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,Hi(t,n,c)}return Yu(t,n,a,r,c)}function xm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Mm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?Tp(n,f):Eu(),bp(n);else return r=n.lanes=536870912,Mm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(al(n,f.cachePool),Tp(n,f),Sa(),n.memoizedState=null):(t!==null&&al(n,null),Eu(),Sa());return xn(t,n,c,a),n.child}function oo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mm(t,n,a,r,c){var f=gu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),Eu(),bp(n),t!==null&&Fs(t,n,r,!0),n.childLanes=c,null}function yl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Em(t,n,a){return rs(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,qn(n),n.memoizedState=null,t}function tS(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(r.mode==="hidden")return t=yl(n,r),n.lanes=536870912,oo(null,t);if(bu(n),(t=Ve)?(t=P_(t,ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=rp(t),a.return=n,n.child=a,Sn=n,Ve=null)):t=null,t===null)throw da(n);return n.lanes=536870912,null}return yl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(bu(n),c)if(n.flags&256)n.flags&=-257,n=Em(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(sn||Fs(t,n,a,!1),c=(a&t.childLanes)!==0,sn||c){if(r=He,r!==null&&(_=xi(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ja(t,_),Bn(r,t,_),qu;Ul(),n=Em(t,n,a)}else t=f.treeContext,Ve=ai(_.nextSibling),Sn=n,ye=!0,ha=null,ni=!1,t!==null&&cp(n,t),n=yl(n,r),n.flags|=4096;return n}return t=Oi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yu(t,n,a,r,c){return ns(n),a=Ru(t,n,a,r,void 0,c),r=Cu(),t!==null&&!sn?(Du(t,n,c),Hi(t,n,c)):(ye&&r&&lu(n),n.flags|=1,xn(t,n,a,c),n.child)}function Tm(t,n,a,r,c,f){return ns(n),n.updateQueue=null,a=Rp(n,r,a,c),Ap(t),r=Cu(),t!==null&&!sn?(Du(t,n,f),Hi(t,n,f)):(ye&&r&&lu(n),n.flags|=1,xn(t,n,a,f),n.child)}function bm(t,n,a,r,c){if(ns(n),n.stateNode===null){var f=Ps,_=a.contextType;typeof _=="object"&&_!==null&&(f=yn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Su(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?yn(_):Ps,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Xu(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&ku.enqueueReplaceState(f,f.state,null),no(n,r,f,c),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=ls(a,E);f.props=z;var J=f.context,ut=a.contextType;_=Ps,typeof ut=="object"&&ut!==null&&(_=yn(ut));var _t=a.getDerivedStateFromProps;ut=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==_)&&fm(n,f,r,_),ma=!1;var $=n.memoizedState;f.state=$,no(n,r,f,c),eo(),J=n.memoizedState,E||$!==J||ma?(typeof _t=="function"&&(Xu(n,a,_t,r),J=n.memoizedState),(z=ma||um(n,a,z,r,$,J,_))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=_,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,yu(t,n),_=n.memoizedProps,ut=ls(a,_),f.props=ut,_t=n.pendingProps,$=f.context,J=a.contextType,z=Ps,typeof J=="object"&&J!==null&&(z=yn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_t||$!==z)&&fm(n,f,r,z),ma=!1,$=n.memoizedState,f.state=$,no(n,r,f,c),eo();var ot=n.memoizedState;_!==_t||$!==ot||ma||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof E=="function"&&(Xu(n,a,E,r),ot=n.memoizedState),(ut=ma||um(n,a,ut,r,$,ot,z)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=z,r=ut):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,xl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=rs(n,t.child,null,c),n.child=rs(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Hi(t,n,c),t}function Am(t,n,a,r){return ts(),n.flags|=256,xn(t,n,a,r),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(t){return{baseLanes:t,cachePool:mp()}}function Ku(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=jn),t}function Rm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(c?va(n):Sa(),(t=Ve)?(t=P_(t,ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=rp(t),a.return=n,n.child=a,Sn=n,Ve=null)):t=null,t===null)throw da(n);return Nf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Sa(),c=n.mode,E=Ml({mode:"hidden",children:E},c),r=$a(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Zu(a),r.childLanes=Ku(t,_,a),n.memoizedState=ju,oo(null,r)):(va(n),Qu(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=Ju(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),E=r.fallback,c=n.mode,r=Ml({mode:"visible",children:r.children},c),E=$a(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,rs(n,t.child,null,a),r=n.child,r.memoizedState=Zu(a),r.childLanes=Ku(t,_,a),n.memoizedState=ju,n=oo(null,r));else if(va(n),Nf(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var J=_.dgst;_=J,r=Error(s(419)),r.stack="",r.digest=_,Zr({value:r,source:null,stack:null}),n=Ju(t,n,a)}else if(sn||Fs(t,n,a,!1),_=(a&t.childLanes)!==0,sn||_){if(_=He,_!==null&&(r=xi(_,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,Ja(t,r),Bn(_,t,r),qu;Lf(E)||Ul(),n=Ju(t,n,a)}else Lf(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Ve=ai(E.nextSibling),Sn=n,ye=!0,ha=null,ni=!1,t!==null&&cp(n,t),n=Qu(n,r.children),n.flags|=4096);return n}return c?(Sa(),E=r.fallback,c=n.mode,z=t.child,J=z.sibling,r=Oi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,J!==null?E=Oi(J,E):(E=$a(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,oo(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Zu(a):(c=E.cachePool,c!==null?(z=nn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=mp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Ku(t,_,a),n.memoizedState=ju,oo(t.child,r)):(va(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Qu(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function Ju(t,n,a){return rs(n,t.child,null,a),t=Qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Cm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),du(t.return,n,a)}function $u(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Dm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=Qe.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,xt(Qe,_),xn(t,n,r,a),r=ye?jr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,a,n);else if(t.tag===19)Cm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),$u(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}$u(n,!0,a,null,f,r);break;case"together":$u(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function eS(t,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),pa(n,nn,t.memoizedState.cache),ts();break;case 27:case 5:ee(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rm(t,n,a):(va(n),t=Hi(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Fs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Dm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(Qe,Qe.current),r)break;return null;case 22:return n.lanes=0,xm(t,n,a,n.pendingProps);case 24:pa(n,nn,t.memoizedState.cache)}return Hi(t,n,a)}function wm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!tf(t,a)&&(n.flags&128)===0)return sn=!1,eS(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,ye&&(n.flags&1048576)!==0&&lp(n,jr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=as(n.elementType),n.type=t,typeof t=="function")su(t)?(r=ls(t,r),n.tag=1,n=bm(null,n,t,r,a)):(n.tag=0,n=Yu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===U){n.tag=11,n=vm(null,n,t,r,a);break t}else if(c===P){n.tag=14,n=Sm(null,n,t,r,a);break t}}throw n=ht(t)||t,Error(s(306,n,""))}}return n;case 0:return Yu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ls(r,n.pendingProps),bm(t,n,r,c,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,yu(t,n),no(n,r,null,a);var _=n.memoizedState;if(r=_.cache,pa(n,nn,r),r!==f.cache&&pu(n,[nn],a,!0),eo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Am(t,n,r,a);break t}else if(r!==c){c=$n(Error(s(424)),n),Zr(c),n=Am(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=ai(t.firstChild),Sn=n,ye=!0,ha=null,ni=!0,a=xp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ts(),r===c){n=Hi(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return xl(t,n),t===null?(a=G_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,r=Il(Et.current).createElement(a),r[Ye]=n,r[vn]=t,Mn(r,a,t),vt(r),n.stateNode=r):n.memoizedState=G_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&ye&&(r=n.stateNode=I_(n.type,n.pendingProps,Et.current),Sn=n,ni=!0,c=Ve,Ra(n.type)?(Of=c,Ve=ai(r.firstChild)):Ve=c),xn(t,n,n.pendingProps.children,a),xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((c=r=Ve)&&(r=US(r,n.type,n.pendingProps,ni),r!==null?(n.stateNode=r,Sn=n,Ve=ai(r.firstChild),ni=!1,c=!0):c=!1),c||da(n)),ee(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Df(c,f)?r=null:_!==null&&Df(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Ru(t,n,q0,null,null,a),Eo._currentValue=c),xl(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=Ve)&&(a=LS(a,n.pendingProps,ni),a!==null?(n.stateNode=a,Sn=n,Ve=null,t=!0):t=!1),t||da(n)),null;case 13:return Rm(t,n,a);case 4:return Ht(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=rs(n,null,r,a):xn(t,n,r,a),n.child;case 11:return vm(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),xn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ns(n),c=yn(c),r=r(c),n.flags|=1,xn(t,n,r,a),n.child;case 14:return Sm(t,n,n.type,n.pendingProps,a);case 15:return ym(t,n,n.type,n.pendingProps,a);case 19:return Dm(t,n,a);case 31:return tS(t,n,a);case 22:return xm(t,n,a,n.pendingProps);case 24:return ns(n),r=yn(nn),t===null?(c=gu(),c===null&&(c=He,f=mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Su(n),pa(n,nn,c)):((t.lanes&a)!==0&&(yu(t,n),no(n,null,null,a),eo()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,nn,r)):(r=f.cache,pa(n,nn,r),r!==c.cache&&pu(n,[nn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Gi(t){t.flags|=4}function ef(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(i_())t.flags|=8192;else throw ss=rl,vu}else t.flags&=-16777217}function Um(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!q_(n))if(i_())t.flags|=8192;else throw ss=rl,vu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,Qs|=n)}function lo(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function nS(t,n,a){var r=n.pendingProps;switch(cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Bi(nn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Is(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fu())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Gi(n),f!==null?(Xe(n),Um(n,f)):(Xe(n),ef(n,c,null,r,a))):f?f!==t.memoizedState?(Gi(n),Xe(n),Um(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Gi(n),Xe(n),ef(n,c,t,r,a)),null;case 27:if(Le(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}t=Z.current,Is(n)?up(n):(t=I_(c,r,a),n.stateNode=t,Gi(n))}return Xe(n),null;case 5:if(Le(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(f=Z.current,Is(n))up(n);else{var _=Il(Et.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[Ye]=n,f[vn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Mn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Gi(n)}}return Xe(n),ef(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,Is(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ye]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||R_(t.nodeValue,a)),t||da(n,!0)}else t=Il(t).createTextNode(r),t[Ye]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Is(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ye]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Is(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ye]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Xe(n),null);case 4:return It(),t===null&&Tf(n.stateNode.containerInfo),Xe(n),null;case 10:return Bi(n.type),Xe(n),null;case 19:if(nt(Qe),r=n.memoizedState,r===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)lo(r,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,lo(r,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sp(a,t),a=a.sibling;return xt(Qe,Qe.current&1|2),ye&&Pi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&dt()>Cl&&(n.flags|=128,c=!0,lo(r,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),lo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ye)return Xe(n),null}else 2*dt()-r.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,lo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=dt(),t.sibling=null,a=Qe.current,xt(Qe,c?a&1|2:a&1),ye&&Pi(n,r.treeForkCount),t):(Xe(n),null);case 22:case 23:return qn(n),Tu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&nt(is),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(nn),Xe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function iS(t,n){switch(cu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(nn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(s(340));ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(Qe),null;case 4:return It(),null;case 10:return Bi(n.type),null;case 22:case 23:return qn(n),Tu(),t!==null&&nt(is),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(nn),null;case 25:return null;default:return null}}function Lm(t,n){switch(cu(n),n.tag){case 3:Bi(nn),It();break;case 26:case 27:case 5:Le(n);break;case 4:It();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:nt(Qe);break;case 10:Bi(n.type);break;case 22:case 23:qn(n),Tu(),t!==null&&nt(is);break;case 24:Bi(nn)}}function co(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(E){Ue(n,n.return,E)}}function ya(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var z=a,J=E;try{J()}catch(ut){Ue(c,z,ut)}}}r=r.next}while(r!==f)}}catch(ut){Ue(n,n.return,ut)}}function Nm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ep(n,a)}catch(r){Ue(t,t.return,r)}}}function Om(t,n,a){a.props=ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ue(t,n,r)}}function uo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Ue(t,n,c)}}function bi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ue(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ue(t,n,c)}else a.current=null}function Pm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ue(t,t.return,c)}}function nf(t,n,a){try{var r=t.stateNode;bS(r,t.type,a,n),r[vn]=n}catch(c){Ue(t,t.return,c)}}function zm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function af(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||zm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Li));else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(sf(t,n,a),t=t.sibling;t!==null;)sf(t,n,a),t=t.sibling}function Tl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function Bm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,r,a),n[Ye]=t,n[vn]=a}catch(f){Ue(t,t.return,f)}}var Vi=!1,rn=!1,rf=!1,Im=typeof WeakSet=="function"?WeakSet:Set,mn=null;function aS(t,n){if(t=t.containerInfo,Rf=Wl,t=Kd(t),Jc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,z=-1,J=0,ut=0,_t=t,$=null;e:for(;;){for(var ot;_t!==a||c!==0&&_t.nodeType!==3||(E=_+c),_t!==f||r!==0&&_t.nodeType!==3||(z=_+r),_t.nodeType===3&&(_+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)$=_t,_t=ot;for(;;){if(_t===t)break e;if($===a&&++J===c&&(E=_),$===f&&++ut===r&&(z=_),(ot=_t.nextSibling)!==null)break;_t=$,$=_t.parentNode}_t=ot}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:t,selectionRange:a},Wl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Bt=ls(a.type,c);t=r.getSnapshotBeforeUpdate(Bt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Ue(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Uf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Uf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Fm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ki(t,a),r&4&&co(5,a);break;case 1:if(ki(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ue(a,a.return,_)}else{var c=ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ue(a,a.return,_)}}r&64&&Nm(a),r&512&&uo(a,a.return);break;case 3:if(ki(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ep(t,n)}catch(_){Ue(a,a.return,_)}}break;case 27:n===null&&r&4&&Bm(a);case 26:case 5:ki(t,a),n===null&&r&4&&Pm(a),r&512&&uo(a,a.return);break;case 12:ki(t,a);break;case 31:ki(t,a),r&4&&Vm(t,a);break;case 13:ki(t,a),r&4&&Xm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dS.bind(null,a),NS(t,a))));break;case 22:if(r=a.memoizedState!==null||Vi,!r){n=n!==null&&n.memoizedState!==null||rn,c=Vi;var f=rn;Vi=r,(rn=n)&&!f?Wi(t,a,(a.subtreeFlags&8772)!==0):ki(t,a),Vi=c,rn=f}break;case 30:break;default:ki(t,a)}}function Hm(t){var n=t.alternate;n!==null&&(t.alternate=null,Hm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&b(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,Nn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Gm(t,n,a),a=a.sibling}function Gm(t,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:rn||bi(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||bi(a,n);var r=qe,c=Nn;Ra(a.type)&&(qe=a.stateNode,Nn=!1),Xi(t,n,a),yo(a.stateNode),qe=r,Nn=c;break;case 5:rn||bi(a,n);case 6:if(r=qe,c=Nn,qe=null,Xi(t,n,a),qe=r,Nn=c,qe!==null)if(Nn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ue(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ue(a,n,f)}break;case 18:qe!==null&&(Nn?(t=qe,N_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),sr(t)):N_(qe,a.stateNode));break;case 4:r=qe,c=Nn,qe=a.stateNode.containerInfo,Nn=!0,Xi(t,n,a),qe=r,Nn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),rn||ya(4,a,n),Xi(t,n,a);break;case 1:rn||(bi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Om(a,n,r)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,Xi(t,n,a),rn=r;break;default:Xi(t,n,a)}}function Vm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{sr(t)}catch(a){Ue(n,n.return,a)}}}function Xm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{sr(t)}catch(a){Ue(n,n.return,a)}}function sS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Im),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Im),n;default:throw Error(s(435,t.tag))}}function bl(t,n){var a=sS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=pS.bind(null,t,r);r.then(c,c)}})}function On(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(Ra(E.type)){qe=E.stateNode,Nn=!1;break t}break;case 5:qe=E.stateNode,Nn=!1;break t;case 3:case 4:qe=E.stateNode.containerInfo,Nn=!0;break t}E=E.return}if(qe===null)throw Error(s(160));Gm(f,_,c),qe=null,Nn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)km(n,t),n=n.sibling}var hi=null;function km(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:On(n,t),Pn(t),r&4&&(ya(3,t,t.return),co(3,t),ya(5,t,t.return));break;case 1:On(n,t),Pn(t),r&512&&(rn||a===null||bi(a,a.return)),r&64&&Vi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=hi;if(On(n,t),Pn(t),r&512&&(rn||a===null||bi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ya]||f[Ye]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,r,a),f[Ye]=t,vt(f),r=f;break t;case"link":var _=k_("link","href",c).get(r+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;case"meta":if(_=k_("meta","content",c).get(r+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ye]=t,vt(f),r=f}t.stateNode=r}else W_(c,t.type,t.stateNode);else t.stateNode=X_(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?W_(c,t.type,t.stateNode):X_(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:On(n,t),Pn(t),r&512&&(rn||a===null||bi(a,a.return)),a!==null&&r&4&&nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(On(n,t),Pn(t),r&512&&(rn||a===null||bi(a,a.return)),t.flags&32){c=t.stateNode;try{Cs(c,"")}catch(Bt){Ue(t,t.return,Bt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,nf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(rf=!0);break;case 6:if(On(n,t),Pn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Bt){Ue(t,t.return,Bt)}}break;case 3:if(Gl=null,c=hi,hi=Fl(n.containerInfo),On(n,t),hi=c,Pn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{sr(n.containerInfo)}catch(Bt){Ue(t,t.return,Bt)}rf&&(rf=!1,Wm(t));break;case 4:r=hi,hi=Fl(t.stateNode.containerInfo),On(n,t),Pn(t),hi=r;break;case 12:On(n,t),Pn(t);break;case 31:On(n,t),Pn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,bl(t,r)));break;case 13:On(n,t),Pn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=dt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,bl(t,r)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=Vi,ut=rn;if(Vi=J||c,rn=ut||z,On(n,t),rn=ut,Vi=J,Pn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Vi||rn||cs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=z.stateNode;var _t=z.memoizedProps.style,$=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Bt){Ue(z,z.return,Bt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Bt){Ue(z,z.return,Bt)}}}else if(n.tag===18){if(a===null){z=n;try{var ot=z.stateNode;c?O_(ot,!0):O_(z.stateNode,!1)}catch(Bt){Ue(z,z.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,bl(t,a))));break;case 19:On(n,t),Pn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,bl(t,r)));break;case 30:break;case 21:break;default:On(n,t),Pn(t)}}function Pn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(zm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=af(t);Tl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Cs(_,""),a.flags&=-33);var E=af(t);Tl(t,E,_);break;case 3:case 4:var z=a.stateNode.containerInfo,J=af(t);sf(t,J,z);break;default:throw Error(s(161))}}catch(ut){Ue(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Wm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Wm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fm(t,n.alternate,n),n=n.sibling}function cs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),cs(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Om(n,n.return,a),cs(n);break;case 27:yo(n.stateNode);case 26:case 5:bi(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}t=t.sibling}}function Wi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Wi(c,f,a),co(4,f);break;case 1:if(Wi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ue(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Mp(z[c],E)}catch(J){Ue(r,r.return,J)}}a&&_&64&&Nm(f),uo(f,f.return);break;case 27:Bm(f);case 26:case 5:Wi(c,f,a),a&&r===null&&_&4&&Pm(f),uo(f,f.return);break;case 12:Wi(c,f,a);break;case 31:Wi(c,f,a),a&&_&4&&Vm(c,f);break;case 13:Wi(c,f,a),a&&_&4&&Xm(c,f);break;case 22:f.memoizedState===null&&Wi(c,f,a),uo(f,f.return);break;case 30:break;default:Wi(c,f,a)}n=n.sibling}}function of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Kr(a))}function lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Kr(t))}function di(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(t,n,a,r),n=n.sibling}function qm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(t,n,a,r),c&2048&&co(9,n);break;case 1:di(t,n,a,r);break;case 3:di(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Kr(t)));break;case 12:if(c&2048){di(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ue(n,n.return,z)}}else di(t,n,a,r);break;case 31:di(t,n,a,r);break;case 13:di(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?di(t,n,a,r):fo(t,n):f._visibility&2?di(t,n,a,r):(f._visibility|=2,js(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&of(_,n);break;case 24:di(t,n,a,r),c&2048&&lf(n.alternate,n);break;default:di(t,n,a,r)}}function js(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,z=r,J=_.flags;switch(_.tag){case 0:case 11:case 15:js(f,_,E,z,c),co(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?js(f,_,E,z,c):fo(f,_):(ut._visibility|=2,js(f,_,E,z,c)),c&&J&2048&&of(_.alternate,_);break;case 24:js(f,_,E,z,c),c&&J&2048&&lf(_.alternate,_);break;default:js(f,_,E,z,c)}n=n.sibling}}function fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:fo(a,r),c&2048&&of(r.alternate,r);break;case 24:fo(a,r),c&2048&&lf(r.alternate,r);break;default:fo(a,r)}n=n.sibling}}var ho=8192;function Zs(t,n,a){if(t.subtreeFlags&ho)for(t=t.child;t!==null;)Ym(t,n,a),t=t.sibling}function Ym(t,n,a){switch(t.tag){case 26:Zs(t,n,a),t.flags&ho&&t.memoizedState!==null&&WS(a,hi,t.memoizedState,t.memoizedProps);break;case 5:Zs(t,n,a);break;case 3:case 4:var r=hi;hi=Fl(t.stateNode.containerInfo),Zs(t,n,a),hi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ho,ho=16777216,Zs(t,n,a),ho=r):Zs(t,n,a));break;default:Zs(t,n,a)}}function jm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function po(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,Km(r,t)}jm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zm(t),t=t.sibling}function Zm(t){switch(t.tag){case 0:case 11:case 15:po(t),t.flags&2048&&ya(9,t,t.return);break;case 3:po(t);break;case 12:po(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):po(t);break;default:po(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,Km(r,t)}jm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function Km(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Kr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else t:for(a=t;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(Hm(r),r===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var rS={getCacheForType:function(t){var n=yn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return yn(nn).controller.signal}},oS=typeof WeakMap=="function"?WeakMap:Map,Re=0,He=null,he=null,ve=0,we=0,Yn=null,xa=!1,Ks=!1,cf=!1,qi=0,Ze=0,Ma=0,us=0,uf=0,jn=0,Qs=0,mo=null,zn=null,ff=!1,Rl=0,Qm=0,Cl=1/0,Dl=null,Ea=null,un=0,Ta=null,Js=null,Yi=0,hf=0,df=null,Jm=null,_o=0,pf=null;function Zn(){return(Re&2)!==0&&ve!==0?ve&-ve:N.T!==null?yf():Br()}function $m(){if(jn===0)if((ve&536870912)===0||ye){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),jn=t}else jn=536870912;return t=Wn.current,t!==null&&(t.flags|=32),jn}function Bn(t,n,a){(t===He&&(we===2||we===9)||t.cancelPendingCommit!==null)&&($s(t,0),ba(t,ve,jn,!1)),gn(t,a),((Re&2)===0||t!==He)&&(t===He&&((Re&2)===0&&(us|=a),Ze===4&&ba(t,ve,jn,!1)),Ai(t))}function t_(t,n,a){if((Re&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Jt(t,n),c=r?uS(t,n):_f(t,n,!0),f=r;do{if(c===0){Ks&&!r&&ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!lS(a)){c=_f(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;c=mo;var z=E.current.memoizedState.isDehydrated;if(z&&($s(E,_).flags|=256),_=_f(E,_,!1),_!==2){if(cf&&!z){E.errorRecoveryDisabledLanes|=f,us|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){$s(t,0),ba(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ba(r,n,jn,!xa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Rl+300-dt(),10<c)){if(ba(r,n,jn,!xa),Dt(r,0,!0)!==0)break t;Yi=n,r.timeoutHandle=U_(e_.bind(null,r,a,zn,Dl,ff,n,jn,us,Qs,xa,f,"Throttled",-0,0),c);break t}e_(r,a,zn,Dl,ff,n,jn,us,Qs,xa,f,null,-0,0)}}break}while(!0);Ai(t)}function e_(t,n,a,r,c,f,_,E,z,J,ut,_t,$,ot){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},Ym(n,f,_t);var Bt=(f&62914560)===f?Rl-dt():(f&4194048)===f?Qm-dt():0;if(Bt=qS(_t,Bt),Bt!==null){Yi=f,t.cancelPendingCommit=Bt(c_.bind(null,t,n,f,a,r,c,_,E,z,ut,_t,null,$,ot)),ba(t,f,_,!J);return}}c_(t,n,f,a,r,c,_,E,z)}function lS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(t,n,a,r){n&=~uf,n&=~us,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Qt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Pr(t,a,n)}function wl(){return(Re&6)===0?(go(0),!1):!0}function mf(){if(he!==null){if(we===0)var t=he.return;else t=he,zi=es=null,wu(t),Xs=null,Jr=0,t=he;for(;t!==null;)Lm(t.alternate,t),t=t.return;he=null}}function $s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,CS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yi=0,mf(),He=t,he=a=Oi(t.current,null),ve=n,we=0,Yn=null,xa=!1,Ks=Jt(t,n),cf=!1,Qs=jn=uf=us=Ma=Ze=0,zn=mo=null,ff=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Qt(r),f=1<<c;n|=t[c],r&=~f}return qi=n,Qo(),a}function n_(t,n){ae=null,N.H=ro,n===Vs||n===sl?(n=vp(),we=3):n===vu?(n=vp(),we=4):we=n===qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,he===null&&(Ze=1,Sl(t,$n(n,t.current)))}function i_(){var t=Wn.current;return t===null?!0:(ve&4194048)===ve?ii===null:(ve&62914560)===ve||(ve&536870912)!==0?t===ii:!1}function a_(){var t=N.H;return N.H=ro,t===null?ro:t}function s_(){var t=N.A;return N.A=rS,t}function Ul(){Ze=4,xa||(ve&4194048)!==ve&&Wn.current!==null||(Ks=!0),(Ma&134217727)===0&&(us&134217727)===0||He===null||ba(He,ve,jn,!1)}function _f(t,n,a){var r=Re;Re|=2;var c=a_(),f=s_();(He!==t||ve!==n)&&(Dl=null,$s(t,n)),n=!1;var _=Ze;t:do try{if(we!==0&&he!==null){var E=he,z=Yn;switch(we){case 8:mf(),_=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(n=!0);var J=we;if(we=0,Yn=null,tr(t,E,z,J),a&&Ks){_=0;break t}break;default:J=we,we=0,Yn=null,tr(t,E,z,J)}}cS(),_=Ze;break}catch(ut){n_(t,ut)}while(!0);return n&&t.shellSuspendCounter++,zi=es=null,Re=r,N.H=c,N.A=f,he===null&&(He=null,ve=0,Qo()),_}function cS(){for(;he!==null;)r_(he)}function uS(t,n){var a=Re;Re|=2;var r=a_(),c=s_();He!==t||ve!==n?(Dl=null,Cl=dt()+500,$s(t,n)):Ks=Jt(t,n);t:do try{if(we!==0&&he!==null){n=he;var f=Yn;e:switch(we){case 1:we=0,Yn=null,tr(t,n,f,1);break;case 2:case 9:if(_p(f)){we=0,Yn=null,o_(n);break}n=function(){we!==2&&we!==9||He!==t||(we=7),Ai(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:_p(f)?(we=0,Yn=null,o_(n)):(we=0,Yn=null,tr(t,n,f,7));break;case 5:var _=null;switch(he.tag){case 26:_=he.memoizedState;case 5:case 27:var E=he;if(_?q_(_):E.stateNode.complete){we=0,Yn=null;var z=E.sibling;if(z!==null)he=z;else{var J=E.return;J!==null?(he=J,Ll(J)):he=null}break e}}we=0,Yn=null,tr(t,n,f,5);break;case 6:we=0,Yn=null,tr(t,n,f,6);break;case 8:mf(),Ze=6;break t;default:throw Error(s(462))}}fS();break}catch(ut){n_(t,ut)}while(!0);return zi=es=null,N.H=r,N.A=c,Re=a,he!==null?0:(He=null,ve=0,Qo(),Ze)}function fS(){for(;he!==null&&!T();)r_(he)}function r_(t){var n=wm(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Ll(t):he=n}function o_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Tm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Tm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:wu(n);default:Lm(a,n),n=he=sp(n,qi),n=wm(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Ll(t):he=n}function tr(t,n,a,r){zi=es=null,wu(n),Xs=null,Jr=0;var c=n.return;try{if($0(t,c,n,a,ve)){Ze=1,Sl(t,$n(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ze=1,Sl(t,$n(a,t.current)),he=null;return}n.flags&32768?(ye||r===1?t=!0:Ks||(ve&536870912)!==0?t=!1:(xa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Wn.current,r!==null&&r.tag===13&&(r.flags|=16384))),l_(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){l_(n,xa);return}t=n.return;var a=nS(n.alternate,n,qi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ze===0&&(Ze=5)}function l_(t,n){do{var a=iS(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ze=6,he=null}function c_(t,n,a,r,c,f,_,E,z){t.cancelPendingCommit=null;do Nl();while(un!==0);if((Re&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=iu,ci(t,a,f,_,E,z),t===He&&(he=He=null,ve=0),Js=n,Ta=t,Yi=a,hf=f,df=c,Jm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mS(Ct,function(){return p_(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,c=j.p,j.p=2,_=Re,Re|=4;try{aS(t,n,a)}finally{Re=_,j.p=c,N.T=r}}un=1,u_(),f_(),h_()}}function u_(){if(un===1){un=0;var t=Ta,n=Js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=j.p;j.p=2;var c=Re;Re|=4;try{km(n,t);var f=Cf,_=Kd(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&Zd(E.ownerDocument.documentElement,E)){if(z!==null&&Jc(E)){var J=z.start,ut=z.end;if(ut===void 0&&(ut=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ut,E.value.length);else{var _t=E.ownerDocument||document,$=_t&&_t.defaultView||window;if($.getSelection){var ot=$.getSelection(),Bt=E.textContent.length,Kt=Math.min(z.start,Bt),ze=z.end===void 0?Kt:Math.min(z.end,Bt);!ot.extend&&Kt>ze&&(_=ze,ze=Kt,Kt=_);var q=jd(E,Kt),H=jd(E,ze);if(q&&H&&(ot.rangeCount!==1||ot.anchorNode!==q.node||ot.anchorOffset!==q.offset||ot.focusNode!==H.node||ot.focusOffset!==H.offset)){var Q=_t.createRange();Q.setStart(q.node,q.offset),ot.removeAllRanges(),Kt>ze?(ot.addRange(Q),ot.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),ot.addRange(Q))}}}}for(_t=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var pt=_t[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Wl=!!Rf,Cf=Rf=null}finally{Re=c,j.p=r,N.T=a}}t.current=n,un=2}}function f_(){if(un===2){un=0;var t=Ta,n=Js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=j.p;j.p=2;var c=Re;Re|=4;try{Fm(t,n.alternate,n)}finally{Re=c,j.p=r,N.T=a}}un=3}}function h_(){if(un===4||un===3){un=0,tt();var t=Ta,n=Js,a=Yi,r=Jm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Js=Ta=null,d_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),As(a),n=n.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(qt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,c=j.p,j.p=2,N.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var E=r[_];f(E.value,{componentStack:E.stack})}}finally{N.T=n,j.p=c}}(Yi&3)!==0&&Nl(),Ai(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===pf?_o++:(_o=0,pf=t):_o=0,go(0)}}function d_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Kr(n)))}function Nl(){return u_(),f_(),h_(),p_()}function p_(){if(un!==5)return!1;var t=Ta,n=hf;hf=0;var a=As(Yi),r=N.T,c=j.p;try{j.p=32>a?32:a,N.T=null,a=df,df=null;var f=Ta,_=Yi;if(un=0,Js=Ta=null,Yi=0,(Re&6)!==0)throw Error(s(331));var E=Re;if(Re|=4,Zm(f.current),qm(f,f.current,_,a),Re=E,go(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(qt,f)}catch{}return!0}finally{j.p=c,N.T=r,d_(t,n)}}function m_(t,n,a){n=$n(a,n),n=Wu(t.stateNode,n,2),t=ga(t,n,2),t!==null&&(gn(t,2),Ai(t))}function Ue(t,n,a){if(t.tag===3)m_(t,t,a);else for(;n!==null;){if(n.tag===3){m_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){t=$n(a,t),a=_m(2),r=ga(n,a,2),r!==null&&(gm(a,r,n,t),gn(r,2),Ai(r));break}}n=n.return}}function gf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new oS;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(cf=!0,c.add(a),t=hS.bind(null,t,n,a),n.then(t,t))}function hS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(ve&a)===a&&(Ze===4||Ze===3&&(ve&62914560)===ve&&300>dt()-Rl?(Re&2)===0&&$s(t,0):uf|=a,Qs===ve&&(Qs=0)),Ai(t)}function __(t,n){n===0&&(n=ln()),t=Ja(t,n),t!==null&&(gn(t,n),Ai(t))}function dS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),__(t,a)}function pS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),__(t,a)}function mS(t,n){return kt(t,n)}var Ol=null,er=null,vf=!1,Pl=!1,Sf=!1,Aa=0;function Ai(t){t!==er&&t.next===null&&(er===null?Ol=er=t:er=er.next=t),Pl=!0,vf||(vf=!0,gS())}function go(t,n){if(!Sf&&Pl){Sf=!0;do for(var a=!1,r=Ol;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Qt(42|t)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,y_(r,f))}else f=ve,f=Dt(r,r===He?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Jt(r,f)||(a=!0,y_(r,f));r=r.next}while(a);Sf=!1}}function _S(){g_()}function g_(){Pl=vf=!1;var t=0;Aa!==0&&RS()&&(t=Aa);for(var n=dt(),a=null,r=Ol;r!==null;){var c=r.next,f=v_(r,n);f===0?(r.next=null,a===null?Ol=c:a.next=c,c===null&&(er=a)):(a=r,(t!==0||(f&3)!==0)&&(Pl=!0)),r=c}un!==0&&un!==5||go(t),Aa!==0&&(Aa=0)}function v_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Qt(f),E=1<<_,z=c[_];z===-1?((E&a)===0||(E&r)!==0)&&(c[_]=We(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=He,a=ve,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&w(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&w(r),As(a)){case 2:case 8:a=Vt;break;case 32:a=Ct;break;case 268435456:a=_e;break;default:a=Ct}return r=S_.bind(null,t),a=kt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&w(r),t.callbackPriority=2,t.callbackNode=null,2}function S_(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var r=ve;return r=Dt(t,t===He?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(t_(t,r,n),v_(t,dt()),t.callbackNode!=null&&t.callbackNode===a?S_.bind(null,t):null)}function y_(t,n){if(Nl())return null;t_(t,n,!0)}function gS(){DS(function(){(Re&6)!==0?kt(mt,_S):g_()})}function yf(){if(Aa===0){var t=Hs;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),Aa=t}return Aa}function x_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function M_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function vS(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=x_((c[vn]||null).action),_=r.submitter;_&&(n=(n=_[vn]||null)?x_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Yo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Aa!==0){var z=_?M_(c,_):new FormData(c);Fu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=_?M_(c,_):new FormData(c),Fu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var xf=0;xf<nu.length;xf++){var Mf=nu[xf],SS=Mf.toLowerCase(),yS=Mf[0].toUpperCase()+Mf.slice(1);fi(SS,"on"+yS)}fi($d,"onAnimationEnd"),fi(tp,"onAnimationIteration"),fi(ep,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(z0,"onTransitionRun"),fi(B0,"onTransitionStart"),fi(I0,"onTransitionCancel"),fi(np,"onTransitionEnd"),Zt("onMouseEnter",["mouseout","mouseover"]),Zt("onMouseLeave",["mouseout","mouseover"]),Zt("onPointerEnter",["pointerout","pointerover"]),Zt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function E_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],z=E.instance,J=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ut){Ko(ut)}c.currentTarget=null,f=z}else for(_=0;_<r.length;_++){if(E=r[_],z=E.instance,J=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ut){Ko(ut)}c.currentTarget=null,f=z}}}}function de(t,n){var a=n[Ir];a===void 0&&(a=n[Ir]=new Set);var r=t+"__bubble";a.has(r)||(T_(n,t,2,!1),a.add(r))}function Ef(t,n,a){var r=0;n&&(r|=4),T_(a,t,r,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[zl]){t[zl]=!0,wt.forEach(function(a){a!=="selectionchange"&&(xS.has(a)||Ef(a,!1,t),Ef(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,Ef("selectionchange",!1,n))}}function T_(t,n,a,r){switch($_(n)){case 2:var c=ZS;break;case 8:c=KS;break;default:c=Ff}a=c.bind(null,n,a,t),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function bf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=r.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=X(E),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){r=f=_;continue t}E=E.parentNode}}r=r.return}Dd(function(){var J=f,ut=Gc(a),_t=[];t:{var $=ip.get(t);if($!==void 0){var ot=Yo,Bt=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":ot=p0;break;case"focusin":Bt="focus",ot=Yc;break;case"focusout":Bt="blur",ot=Yc;break;case"beforeblur":case"afterblur":ot=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=g0;break;case $d:case tp:case ep:ot=s0;break;case np:ot=S0;break;case"scroll":case"scrollend":ot=t0;break;case"wheel":ot=x0;break;case"copy":case"cut":case"paste":ot=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Od;break;case"toggle":case"beforetoggle":ot=E0}var Kt=(n&4)!==0,ze=!Kt&&(t==="scroll"||t==="scrollend"),q=Kt?$!==null?$+"Capture":null:$;Kt=[];for(var H=J,Q;H!==null;){var pt=H;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||q===null||(pt=Fr(H,q),pt!=null&&Kt.push(So(H,pt,Q))),ze)break;H=H.return}0<Kt.length&&($=new ot($,Bt,null,a,ut),_t.push({event:$,listeners:Kt}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",$&&a!==Hc&&(Bt=a.relatedTarget||a.fromElement)&&(X(Bt)||Bt[wi]))break t;if((ot||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,ot?(Bt=a.relatedTarget||a.toElement,ot=J,Bt=Bt?X(Bt):null,Bt!==null&&(ze=u(Bt),Kt=Bt.tag,Bt!==ze||Kt!==5&&Kt!==27&&Kt!==6)&&(Bt=null)):(ot=null,Bt=J),ot!==Bt)){if(Kt=Ld,pt="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Od,pt="onPointerLeave",q="onPointerEnter",H="pointer"),ze=ot==null?$:st(ot),Q=Bt==null?$:st(Bt),$=new Kt(pt,H+"leave",ot,a,ut),$.target=ze,$.relatedTarget=Q,pt=null,X(ut)===J&&(Kt=new Kt(q,H+"enter",Bt,a,ut),Kt.target=Q,Kt.relatedTarget=ze,pt=Kt),ze=pt,ot&&Bt)e:{for(Kt=MS,q=ot,H=Bt,Q=0,pt=q;pt;pt=Kt(pt))Q++;pt=0;for(var jt=H;jt;jt=Kt(jt))pt++;for(;0<Q-pt;)q=Kt(q),Q--;for(;0<pt-Q;)H=Kt(H),pt--;for(;Q--;){if(q===H||H!==null&&q===H.alternate){Kt=q;break e}q=Kt(q),H=Kt(H)}Kt=null}else Kt=null;ot!==null&&b_(_t,$,ot,Kt,!1),Bt!==null&&ze!==null&&b_(_t,ze,Bt,Kt,!0)}}t:{if($=J?st(J):window,ot=$.nodeName&&$.nodeName.toLowerCase(),ot==="select"||ot==="input"&&$.type==="file")var Te=Vd;else if(Hd($))if(Xd)Te=N0;else{Te=U0;var Gt=w0}else ot=$.nodeName,!ot||ot.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?J&&Fc(J.elementType)&&(Te=Vd):Te=L0;if(Te&&(Te=Te(t,J))){Gd(_t,Te,a,ut);break t}Gt&&Gt(t,$,J),t==="focusout"&&J&&$.type==="number"&&J.memoizedProps.value!=null&&cn($,"number",$.value)}switch(Gt=J?st(J):window,t){case"focusin":(Hd(Gt)||Gt.contentEditable==="true")&&(Ls=Gt,$c=J,Yr=null);break;case"focusout":Yr=$c=Ls=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,Qd(_t,a,ut);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Qd(_t,a,ut)}var se;if(Zc)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Us?Id(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Pd&&a.locale!=="ko"&&(Us||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Us&&(se=wd()):(ua=ut,kc="value"in ua?ua.value:ua.textContent,Us=!0)),Gt=Bl(J,Se),0<Gt.length&&(Se=new Nd(Se,t,null,a,ut),_t.push({event:Se,listeners:Gt}),se?Se.data=se:(se=Fd(a),se!==null&&(Se.data=se)))),(se=b0?A0(t,a):R0(t,a))&&(Se=Bl(J,"onBeforeInput"),0<Se.length&&(Gt=new Nd("onBeforeInput","beforeinput",null,a,ut),_t.push({event:Gt,listeners:Se}),Gt.data=se)),vS(_t,t,J,a,ut)}E_(_t,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Fr(t,a),c!=null&&r.unshift(So(t,c,f)),c=Fr(t,n),c!=null&&r.push(So(t,c,f))),t.tag===3)return r;t=t.return}return[]}function MS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function b_(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,z=E.alternate,J=E.stateNode;if(E=E.tag,z!==null&&z===r)break;E!==5&&E!==26&&E!==27||J===null||(z=J,c?(J=Fr(a,f),J!=null&&_.unshift(So(a,J,z))):c||(J=Fr(a,f),J!=null&&_.push(So(a,J,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function A_(t){return(typeof t=="string"?t:""+t).replace(ES,`
`).replace(TS,"")}function R_(t,n){return n=A_(n),A_(t)===n}function Pe(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Cs(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Cs(t,""+r);break;case"className":Fe(t,"class",r);break;case"tabIndex":Fe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(t,a,r);break;case"style":Rd(t,r,f);break;case"data":if(n!=="object"){Fe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",c.name,c,null),Pe(t,n,"formEncType",c.formEncType,c,null),Pe(t,n,"formMethod",c.formMethod,c,null),Pe(t,n,"formTarget",c.formTarget,c,null)):(Pe(t,n,"encType",c.encType,c,null),Pe(t,n,"method",c.method,c,null),Pe(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Li);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Xo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":de("beforetoggle",t),de("toggle",t),Ge(t,"popover",r);break;case"xlinkActuate":ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ie(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ie(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ie(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ie(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ge(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jv.get(a)||a,Ge(t,a,r))}}function Af(t,n,a,r,c,f){switch(a){case"style":Rd(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Cs(t,r):(typeof r=="number"||typeof r=="bigint")&&Cs(t,""+r);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ge(t,a,r)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(t,n,f,_,a,null)}}c&&Pe(t,n,"srcSet",a.srcSet,a,null),r&&Pe(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=_=c=null,z=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":_=ut;break;case"checked":z=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Pe(t,n,r,ut,a,null)}}Dn(t,f,E,z,J,_,c,!1);return;case"select":de("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Pe(t,n,c,E,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Ke(t,!!r,n,!1):a!=null&&Ke(t,!!r,a,!0);return;case"textarea":de("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Pe(t,n,_,E,a,null)}Mi(t,r,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(t,n,z,r,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(r=0;r<vo.length;r++)de(vo[r],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(t,n,J,r,a,null)}return;default:if(Fc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Af(t,n,ut,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Pe(t,n,E,r,a,null))}function bS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,z=null,J=null,ut=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=_t;default:r.hasOwnProperty(ot)||Pe(t,n,ot,null,r,_t)}}for(var $ in r){var ot=r[$];if(_t=a[$],r.hasOwnProperty($)&&(ot!=null||_t!=null))switch($){case"type":f=ot;break;case"name":c=ot;break;case"checked":J=ot;break;case"defaultChecked":ut=ot;break;case"value":_=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==_t&&Pe(t,n,$,ot,r,_t)}}Tn(t,_,E,z,J,ut,f,c);return;case"select":ot=_=E=$=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ot=z;default:r.hasOwnProperty(f)||Pe(t,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==z&&Pe(t,n,c,f,r,z)}n=E,a=_,r=ot,$!=null?Ke(t,!!a,$,!1):!!r!=!!a&&(n!=null?Ke(t,!!a,n,!0):Ke(t,!!a,a?[]:"",!1));return;case"textarea":ot=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pe(t,n,E,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":$=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Pe(t,n,_,c,r,f)}Rs(t,$,ot);return;case"option":for(var Bt in a)if($=a[Bt],a.hasOwnProperty(Bt)&&$!=null&&!r.hasOwnProperty(Bt))switch(Bt){case"selected":t.selected=!1;break;default:Pe(t,n,Bt,null,r,$)}for(z in r)if($=r[z],ot=a[z],r.hasOwnProperty(z)&&$!==ot&&($!=null||ot!=null))switch(z){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Pe(t,n,z,$,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)$=a[Kt],a.hasOwnProperty(Kt)&&$!=null&&!r.hasOwnProperty(Kt)&&Pe(t,n,Kt,null,r,$);for(J in r)if($=r[J],ot=a[J],r.hasOwnProperty(J)&&$!==ot&&($!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:Pe(t,n,J,$,r,ot)}return;default:if(Fc(n)){for(var ze in a)$=a[ze],a.hasOwnProperty(ze)&&$!==void 0&&!r.hasOwnProperty(ze)&&Af(t,n,ze,void 0,r,$);for(ut in r)$=r[ut],ot=a[ut],!r.hasOwnProperty(ut)||$===ot||$===void 0&&ot===void 0||Af(t,n,ut,$,r,ot);return}}for(var q in a)$=a[q],a.hasOwnProperty(q)&&$!=null&&!r.hasOwnProperty(q)&&Pe(t,n,q,null,r,$);for(_t in r)$=r[_t],ot=a[_t],!r.hasOwnProperty(_t)||$===ot||$==null&&ot==null||Pe(t,n,_t,$,r,ot)}function C_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&C_(_)){for(_=0,E=c.responseEnd,r+=1;r<a.length;r++){var z=a[r],J=z.startTime;if(J>E)break;var ut=z.transferSize,_t=z.initiatorType;ut&&C_(_t)&&(z=z.responseEnd,_+=ut*(z<E?1:(E-J)/(z-J)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rf=null,Cf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function D_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function RS(){var t=window.event;return t&&t.type==="popstate"?t===wf?!1:(wf=t,!0):(wf=null,!1)}var U_=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,L_=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof L_<"u"?function(t){return L_.resolve(null).then(t).catch(wS)}:U_;function wS(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function N_(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),sr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[Ya]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);sr(n)}function O_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Uf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function US(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ya])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ai(t.nextSibling),t===null)break}return null}function LS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ai(t.nextSibling),t===null))return null;return t}function P_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ai(t.nextSibling),t===null))return null;return t}function Lf(t){return t.data==="$?"||t.data==="$~"}function Nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function NS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Of=null;function z_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function B_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function I_(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);b(t)}var si=new Map,F_=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ji=j.d;j.d={f:OS,r:PS,D:zS,C:BS,L:IS,m:FS,X:GS,S:HS,M:VS};function OS(){var t=ji.f(),n=wl();return t||n}function PS(t){var n=it(t);n!==null&&n.tag===5&&n.type==="form"?nm(n):ji.r(t)}var nr=typeof document>"u"?null:document;function H_(t,n,a){var r=nr;if(r&&typeof n=="string"&&n){var c=fe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),F_.has(c)||(F_.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Mn(n,"link",t),vt(n),r.head.appendChild(n)))}}function zS(t){ji.D(t),H_("dns-prefetch",t,null)}function BS(t,n){ji.C(t,n),H_("preconnect",t,n)}function IS(t,n,a){ji.L(t,n,a);var r=nr;if(r&&t&&n){var c='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fe(a.imageSizes)+'"]')):c+='[href="'+fe(t)+'"]';var f=c;switch(n){case"style":f=ir(t);break;case"script":f=ar(t)}si.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(xo(f))||n==="script"&&r.querySelector(Mo(f))||(n=r.createElement("link"),Mn(n,"link",t),vt(n),r.head.appendChild(n)))}}function FS(t,n){ji.m(t,n);var a=nr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fe(r)+'"][href="'+fe(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(t)}if(!si.has(f)&&(t=S({rel:"modulepreload",href:t},n),si.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mo(f)))return}r=a.createElement("link"),Mn(r,"link",t),vt(r),a.head.appendChild(r)}}}function HS(t,n,a){ji.S(t,n,a);var r=nr;if(r&&t){var c=W(r).hoistableStyles,f=ir(t);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(xo(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(f))&&Pf(t,a);var z=_=r.createElement("link");vt(z),Mn(z,"link",t),z._p=new Promise(function(J,ut){z.onload=J,z.onerror=ut}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function GS(t,n){ji.X(t,n);var a=nr;if(a&&t){var r=W(a).hoistableScripts,c=ar(t),f=r.get(c);f||(f=a.querySelector(Mo(c)),f||(t=S({src:t,async:!0},n),(n=si.get(c))&&zf(t,n),f=a.createElement("script"),vt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function VS(t,n){ji.M(t,n);var a=nr;if(a&&t){var r=W(a).hoistableScripts,c=ar(t),f=r.get(c);f||(f=a.querySelector(Mo(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=si.get(c))&&zf(t,n),f=a.createElement("script"),vt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function G_(t,n,a,r){var c=(c=Et.current)?Fl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=W(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ir(a.href);var f=W(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(xo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),f||XS(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=W(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ir(t){return'href="'+fe(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function V_(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function XS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Mn(n,"link",a),vt(n),t.head.appendChild(n))}function ar(t){return'[src="'+fe(t)+'"]'}function Mo(t){return"script[async]"+t}function X_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+fe(a.href)+'"]');if(r)return n.instance=r,vt(r),r;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),vt(r),Mn(r,"style",c),Hl(r,a.precedence,t),n.instance=r;case"stylesheet":c=ir(a.href);var f=t.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;r=V_(a),(c=si.get(c))&&Pf(r,c),f=(t.ownerDocument||t).createElement("link"),vt(f);var _=f;return _._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),Mn(f,"link",r),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=ar(a.src),(c=t.querySelector(Mo(f)))?(n.instance=c,vt(c),c):(r=a,(c=si.get(f))&&(r=S({},a),zf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),vt(c),Mn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Hl(r,a.precedence,t));return n.instance}function Hl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function k_(t,n,a){if(Gl===null){var r=new Map,c=Gl=new Map;c.set(a,r)}else c=Gl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ya]||f[Ye]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function W_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function kS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function WS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ir(r.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,r=V_(r),(c=si.get(c))&&Pf(r,c),f=f.createElement("link"),vt(f);var _=f;_._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),Mn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bf=0;function qS(t,n){return t.stylesheets&&t.count===0&&kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Bf===0&&(Bf=62500*AS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Bf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function kl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(YS,t),Xl=null,Vl.call(t))}function YS(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var r=a.get(null);else{a=new Map,Xl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Vl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:O,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function jS(t,n,a,r,c,f,_,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xe(0),this.hiddenUpdates=xe(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Y_(t,n,a,r,c,f,_,E,z,J,ut,_t){return t=new jS(t,n,a,_,z,J,ut,_t,E),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Su(f),t}function j_(t){return t?(t=Ps,t):Ps}function Z_(t,n,a,r,c,f){c=j_(c),r.context===null?r.context=c:r.pendingContext=c,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ga(t,r,n),a!==null&&(Bn(a,t,n),to(a,t,n))}function K_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){K_(t,n),(t=t.alternate)&&K_(t,n)}function Q_(t){if(t.tag===13||t.tag===31){var n=Ja(t,67108864);n!==null&&Bn(n,t,67108864),If(t,67108864)}}function J_(t){if(t.tag===13||t.tag===31){var n=Zn();n=Wa(n);var a=Ja(t,n);a!==null&&Bn(a,t,n),If(t,n)}}var Wl=!0;function ZS(t,n,a,r){var c=N.T;N.T=null;var f=j.p;try{j.p=2,Ff(t,n,a,r)}finally{j.p=f,N.T=c}}function KS(t,n,a,r){var c=N.T;N.T=null;var f=j.p;try{j.p=8,Ff(t,n,a,r)}finally{j.p=f,N.T=c}}function Ff(t,n,a,r){if(Wl){var c=Hf(r);if(c===null)bf(t,n,r,ql,a),tg(t,r);else if(JS(c,t,n,a,r))r.stopPropagation();else if(tg(t,r),n&4&&-1<QS.indexOf(t)){for(;c!==null;){var f=it(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Rt(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var z=1<<31-Qt(_);E.entanglements[1]|=z,_&=~z}Ai(f),(Re&6)===0&&(Cl=dt()+500,go(0))}}break;case 31:case 13:E=Ja(f,2),E!==null&&Bn(E,f,2),wl(),If(f,2)}if(f=Hf(r),f===null&&bf(t,n,r,ql,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else bf(t,n,r,null,a)}}function Hf(t){return t=Gc(t),Gf(t)}var ql=null;function Gf(t){if(ql=null,t=X(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function $_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case mt:return 2;case Vt:return 8;case Ct:case Pt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Vf=!1,Ca=null,Da=null,wa=null,To=new Map,bo=new Map,Ua=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tg(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=it(n),n!==null&&Q_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function JS(t,n,a,r,c){switch(n){case"focusin":return Ca=Ao(Ca,t,n,a,r,c),!0;case"dragenter":return Da=Ao(Da,t,n,a,r,c),!0;case"mouseover":return wa=Ao(wa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ao(To.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Ao(bo.get(f)||null,t,n,a,r,c)),!0}return!1}function eg(t){var n=X(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,qa(t.priority,function(){J_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,qa(t.priority,function(){J_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Hc=r,a.target.dispatchEvent(r),Hc=null}else return n=it(a),n!==null&&Q_(n),t.blockedOn=a,!1;n.shift()}return!0}function ng(t,n,a){Yl(t)&&a.delete(n)}function $S(){Vf=!1,Ca!==null&&Yl(Ca)&&(Ca=null),Da!==null&&Yl(Da)&&(Da=null),wa!==null&&Yl(wa)&&(wa=null),To.forEach(ng),bo.forEach(ng)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Vf||(Vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$S)))}var Zl=null;function ig(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Gf(r||a)===null)continue;break}var f=it(a);f!==null&&(t.splice(n,3),n-=3,Fu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function sr(t){function n(z){return jl(z,t)}Ca!==null&&jl(Ca,t),Da!==null&&jl(Da,t),wa!==null&&jl(wa,t),To.forEach(n),bo.forEach(n);for(var a=0;a<Ua.length;a++){var r=Ua[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)eg(a),a.blockedOn===null&&Ua.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[vn]||null;if(typeof f=="function")_||ig(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[vn]||null)E=_.formAction;else if(Gf(c)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),ig(a)}}}function ag(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Xf(t){this._internalRoot=t}Kl.prototype.render=Xf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Zn();Z_(a,r,t,n,null,null)},Kl.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Z_(t.current,2,null,t,null,null),wl(),n[wi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Br();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,t),a===0&&eg(t)}};var sg=e.version;if(sg!=="19.2.8")throw Error(s(527,sg,"19.2.8"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var ty={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{qt=Ql.inject(ty),Xt=Ql}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=hm,f=dm,_=pm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Y_(t,1,!1,null,null,a,r,null,c,f,_,ag),t[wi]=n.current,Tf(t),new Xf(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=hm,_=dm,E=pm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Y_(t,1,!0,n,a??null,r,c,z,f,_,E,ag),n.context=j_(null),a=n.current,r=Zn(),r=Wa(r),c=_a(r),c.callback=null,ga(a,c,r),a=r,n.current.lanes=a,gn(n,a),Ai(n),t[wi]=n.current,Tf(t),new Kl(n)},Co.version="19.2.8",Co}var mg;function fy(){if(mg)return qf.exports;mg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=uy(),qf.exports}var hy=fy();const dy=_v(hy);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="171",Er={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},py=0,_g=1,my=2,gv=1,_y=2,ta=3,Xa=0,Hn=1,ea=2,Ga=0,Tr=1,Ah=2,gg=3,vg=4,gy=5,vs=100,vy=101,Sy=102,yy=103,xy=104,My=200,Ey=201,Ty=202,by=203,Rh=204,Ch=205,Ay=206,Ry=207,Cy=208,Dy=209,wy=210,Uy=211,Ly=212,Ny=213,Oy=214,Dh=0,wh=1,Uh=2,Rr=3,Lh=4,Nh=5,Oh=6,Ph=7,vv=0,Py=1,zy=2,Va=0,By=1,Iy=2,Fy=3,Hy=4,Gy=5,Vy=6,Xy=7,Sv=300,Cr=301,Dr=302,zh=303,Bh=304,Nc=306,Ih=1e3,ys=1001,Fh=1002,yi=1003,ky=1004,Jl=1005,Ci=1006,Kf=1007,xs=1008,oa=1009,yv=1010,xv=1011,zo=1012,gd=1013,Ms=1014,na=1015,Bo=1016,vd=1017,Sd=1018,wr=1020,Mv=35902,Ev=1021,Tv=1022,Si=1023,bv=1024,Av=1025,br=1026,Ur=1027,Rv=1028,yd=1029,Cv=1030,xd=1031,Md=1033,Ec=33776,Tc=33777,bc=33778,Ac=33779,Hh=35840,Gh=35841,Vh=35842,Xh=35843,kh=36196,Wh=37492,qh=37496,Yh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,td=37815,ed=37816,nd=37817,id=37818,ad=37819,sd=37820,rd=37821,Rc=36492,od=36494,ld=36495,Dv=36283,cd=36284,ud=36285,fd=36286,Wy=3200,qy=3201,Yy=0,jy=1,Ha="",oi="srgb",Lr="srgb-linear",wc="linear",Be="srgb",rr=7680,Sg=519,Zy=512,Ky=513,Qy=514,wv=515,Jy=516,$y=517,tx=518,ex=519,yg=35044,xg="300 es",ia=2e3,Uc=2001;class bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,hd=180/Math.PI;function Io(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function pe(o,e,i){return Math.max(e,Math.min(i,o))}function nx(o,e){return(o%e+e)%e}function Qf(o,e,i){return(1-i)*o+i*e}function Do(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ix={DEG2RAD:Cc};class ce{constructor(e=0,i=0){ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=pe(this.x,e.x,i.x),this.y=pe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=pe(this.x,e,i),this.y=pe(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(pe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(e,i,s,l,u,h,d,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],S=s[7],y=s[2],M=s[5],A=s[8],C=l[0],x=l[3],g=l[6],I=l[1],O=l[4],U=l[7],Y=l[2],G=l[5],P=l[8];return u[0]=h*C+d*I+m*Y,u[3]=h*x+d*O+m*G,u[6]=h*g+d*U+m*P,u[1]=p*C+v*I+S*Y,u[4]=p*x+v*O+S*G,u[7]=p*g+v*U+S*P,u[2]=y*C+M*I+A*Y,u[5]=y*x+M*O+A*G,u[8]=y*g+M*U+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=v*h-d*p,y=d*m-v*u,M=p*u-h*m,A=i*S+s*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(l*p-v*s)*C,e[2]=(d*s-l*h)*C,e[3]=y*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Jf.makeScale(e,i)),this}rotate(e){return this.premultiply(Jf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Jf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new re;function Uv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Lc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ax(){const o=Lc("canvas");return o.style.display="block",o}const Mg={};function yr(o){o in Mg||(Mg[o]=!0,console.warn(o))}function sx(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function rx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ox(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Eg=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tg=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Ar(l.r),l.g=Ar(l.g),l.b=Ar(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?wc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:e,whitePoint:s,transfer:wc,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),o}const Ae=lx();function sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ar(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let or;class cx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{or===void 0&&(or=Lc("canvas")),or.width=e.width,or.height=e.height;const s=or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=or}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Lc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=sa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(sa(i[s]/255)*255):i[s]=sa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class Lv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push($f(l[h].image)):u.push($f(l[h]))}else u=$f(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fx=0;class Gn extends bs{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=ys,l=ys,u=Ci,h=xs,d=Si,m=oa,p=Gn.DEFAULT_ANISOTROPY,v=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Io(),this.name="",this.source=new Lv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Sv;Gn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],v=m[4],S=m[8],y=m[1],M=m[5],A=m[9],C=m[2],x=m[6],g=m[10];if(Math.abs(v-y)<.01&&Math.abs(S-C)<.01&&Math.abs(A-x)<.01){if(Math.abs(v+y)<.1&&Math.abs(S+C)<.1&&Math.abs(A+x)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(M+1)/2,Y=(g+1)/2,G=(v+y)/4,P=(S+C)/4,K=(A+x)/4;return O>U&&O>Y?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=G/s,u=P/s):U>Y?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=G/l,u=K/l):Y<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(Y),s=P/u,l=K/u),this.set(s,l,u,i),this}let I=Math.sqrt((x-A)*(x-A)+(S-C)*(S-C)+(y-v)*(y-v));return Math.abs(I)<.001&&(I=1),this.x=(x-A)/I,this.y=(S-C)/I,this.z=(y-v)/I,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=pe(this.x,e.x,i.x),this.y=pe(this.y,e.y,i.y),this.z=pe(this.z,e.z,i.z),this.w=pe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=pe(this.x,e,i),this.y=pe(this.y,e,i),this.z=pe(this.z,e,i),this.w=pe(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hx extends bs{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Gn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Lv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends hx{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Nv extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dx extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],S=s[l+3];const y=u[h+0],M=u[h+1],A=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(S!==C||m!==y||p!==M||v!==A){let x=1-d;const g=m*y+p*M+v*A+S*C,I=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const Y=Math.sqrt(O),G=Math.atan2(Y,g*I);x=Math.sin(x*G)/Y,d=Math.sin(d*G)/Y}const U=d*I;if(m=m*x+y*U,p=p*x+M*U,v=v*x+A*U,S=S*x+C*U,x===1-d){const Y=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=Y,p*=Y,v*=Y,S*=Y}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],S=u[h],y=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+v*S+m*M-p*y,e[i+1]=m*A+v*y+p*S-d*M,e[i+2]=p*A+v*M+d*y-m*S,e[i+3]=v*A-d*S-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),S=d(u/2),y=m(s/2),M=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=y*v*S+p*M*A,this._y=p*M*S-y*v*A,this._z=p*v*A+y*M*S,this._w=p*v*S-y*M*A;break;case"YXZ":this._x=y*v*S+p*M*A,this._y=p*M*S-y*v*A,this._z=p*v*A-y*M*S,this._w=p*v*S+y*M*A;break;case"ZXY":this._x=y*v*S-p*M*A,this._y=p*M*S+y*v*A,this._z=p*v*A+y*M*S,this._w=p*v*S-y*M*A;break;case"ZYX":this._x=y*v*S-p*M*A,this._y=p*M*S+y*v*A,this._z=p*v*A-y*M*S,this._w=p*v*S+y*M*A;break;case"YZX":this._x=y*v*S+p*M*A,this._y=p*M*S+y*v*A,this._z=p*v*A-y*M*S,this._w=p*v*S-y*M*A;break;case"XZY":this._x=y*v*S-p*M*A,this._y=p*M*S-y*v*A,this._z=p*v*A+y*M*S,this._w=p*v*S+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],S=i[10],y=s+d+S;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>S){const M=2*Math.sqrt(1+s-d-S);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>S){const M=2*Math.sqrt(1+d-s-S);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+S-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pe(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),S=Math.sin((1-i)*v)/p,y=Math.sin(i*v)/p;return this._w=h*S+this._w*y,this._x=s*S+this._x*y,this._y=l*S+this._y*y,this._z=u*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,s=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(bg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(bg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),v=2*(d*i-u*l),S=2*(u*s-h*i);return this.x=i+m*p+h*S-d*v,this.y=s+m*v+d*p-u*S,this.z=l+m*S+u*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=pe(this.x,e.x,i.x),this.y=pe(this.y,e.y,i.y),this.z=pe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=pe(this.x,e,i),this.y=pe(this.y,e,i),this.z=pe(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(pe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const th=new at,bg=new Ts;class Fo{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),tc.subVectors(this.max,wo),lr.subVectors(e.a,wo),cr.subVectors(e.b,wo),ur.subVectors(e.c,wo),Na.subVectors(cr,lr),Oa.subVectors(ur,cr),fs.subVectors(lr,ur);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-fs.z,fs.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,fs.z,0,-fs.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-fs.y,fs.x,0];return!eh(i,lr,cr,ur,tc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,lr,cr,ur,tc))?!1:(ec.crossVectors(Na,Oa),i=[ec.x,ec.y,ec.z],eh(i,lr,cr,ur,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new at,new at,new at,new at,new at,new at,new at,new at],pi=new at,$l=new Fo,lr=new at,cr=new at,ur=new at,Na=new at,Oa=new at,fs=new at,wo=new at,tc=new at,ec=new at,hs=new at;function eh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){hs.fromArray(o,u);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=e.dot(hs),p=i.dot(hs),v=s.dot(hs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const px=new Fo,Uo=new at,nh=new at;class Oc{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):px.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Uo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(nh)),this.expandByPoint(Uo.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new at,ih=new at,nc=new at,Pa=new at,ah=new at,ic=new at,sh=new at;class Ed{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ih.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(ih);const u=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Pa.dot(this.direction),m=-Pa.dot(nc),p=Pa.lengthSq(),v=Math.abs(1-h*h);let S,y,M,A;if(v>0)if(S=h*m-d,y=h*d-m,A=u*v,S>=0)if(y>=-A)if(y<=A){const C=1/v;S*=C,y*=C,M=S*(S+h*y+2*d)+y*(h*S+y+2*m)+p}else y=u,S=Math.max(0,-(h*y+d)),M=-S*S+y*(y+2*m)+p;else y=-u,S=Math.max(0,-(h*y+d)),M=-S*S+y*(y+2*m)+p;else y<=-A?(S=Math.max(0,-(-h*u+d)),y=S>0?-u:Math.min(Math.max(-u,-m),u),M=-S*S+y*(y+2*m)+p):y<=A?(S=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(S=Math.max(0,-(h*u+d)),y=S>0?u:Math.min(Math.max(-u,-m),u),M=-S*S+y*(y+2*m)+p);else y=h>0?-u:u,S=Math.max(0,-(h*y+d)),M=-S*S+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(ih).addScaledVector(nc,y),M}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),v>=0?(u=(e.min.y-y.y)*v,h=(e.max.y-y.y)*v):(u=(e.max.y-y.y)*v,h=(e.min.y-y.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-y.z)*S,m=(e.max.z-y.z)*S):(d=(e.max.z-y.z)*S,m=(e.min.z-y.z)*S),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,s,l,u){ah.subVectors(i,e),ic.subVectors(s,e),sh.crossVectors(ah,ic);let h=this.direction.dot(sh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot(ic.crossVectors(Pa,ic));if(m<0)return null;const p=d*this.direction.dot(ah.cross(Pa));if(p<0||m+p>h)return null;const v=-d*Pa.dot(sh);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,s,l,u,h,d,m,p,v,S,y,M,A,C,x){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,v,S,y,M,A,C,x)}set(e,i,s,l,u,h,d,m,p,v,S,y,M,A,C,x){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=v,g[10]=S,g[14]=y,g[3]=M,g[7]=A,g[11]=C,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/fr.setFromMatrixColumn(e,0).length(),u=1/fr.setFromMatrixColumn(e,1).length(),h=1/fr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const y=h*v,M=h*S,A=d*v,C=d*S;i[0]=m*v,i[4]=-m*S,i[8]=p,i[1]=M+A*p,i[5]=y-C*p,i[9]=-d*m,i[2]=C-y*p,i[6]=A+M*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*v,M=m*S,A=p*v,C=p*S;i[0]=y+C*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*S,i[5]=h*v,i[9]=-d,i[2]=M*d-A,i[6]=C+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*v,M=m*S,A=p*v,C=p*S;i[0]=y-C*d,i[4]=-h*S,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*v,i[9]=C-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*v,M=h*S,A=d*v,C=d*S;i[0]=m*v,i[4]=A*p-M,i[8]=y*p+C,i[1]=m*S,i[5]=C*p+y,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,M=h*p,A=d*m,C=d*p;i[0]=m*v,i[4]=C-y*S,i[8]=A*S+M,i[1]=S,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*S+A,i[10]=y-C*S}else if(e.order==="XZY"){const y=h*m,M=h*p,A=d*m,C=d*p;i[0]=m*v,i[4]=-S,i[8]=p*v,i[1]=y*S+C,i[5]=h*v,i[9]=M*S-A,i[2]=A*S-M,i[6]=d*v,i[10]=C*S+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,_x)}lookAt(e,i,s){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),za.crossVectors(s,Kn),za.lengthSq()===0&&(Math.abs(s.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),za.crossVectors(s,Kn)),za.normalize(),ac.crossVectors(Kn,za),l[0]=za.x,l[4]=ac.x,l[8]=Kn.x,l[1]=za.y,l[5]=ac.y,l[9]=Kn.y,l[2]=za.z,l[6]=ac.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],S=s[5],y=s[9],M=s[13],A=s[2],C=s[6],x=s[10],g=s[14],I=s[3],O=s[7],U=s[11],Y=s[15],G=l[0],P=l[4],K=l[8],D=l[12],R=l[1],B=l[5],rt=l[9],et=l[13],ht=l[2],ft=l[6],N=l[10],j=l[14],k=l[3],St=l[7],Tt=l[11],L=l[15];return u[0]=h*G+d*R+m*ht+p*k,u[4]=h*P+d*B+m*ft+p*St,u[8]=h*K+d*rt+m*N+p*Tt,u[12]=h*D+d*et+m*j+p*L,u[1]=v*G+S*R+y*ht+M*k,u[5]=v*P+S*B+y*ft+M*St,u[9]=v*K+S*rt+y*N+M*Tt,u[13]=v*D+S*et+y*j+M*L,u[2]=A*G+C*R+x*ht+g*k,u[6]=A*P+C*B+x*ft+g*St,u[10]=A*K+C*rt+x*N+g*Tt,u[14]=A*D+C*et+x*j+g*L,u[3]=I*G+O*R+U*ht+Y*k,u[7]=I*P+O*B+U*ft+Y*St,u[11]=I*K+O*rt+U*N+Y*Tt,u[15]=I*D+O*et+U*j+Y*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],S=e[6],y=e[10],M=e[14],A=e[3],C=e[7],x=e[11],g=e[15];return A*(+u*m*S-l*p*S-u*d*y+s*p*y+l*d*M-s*m*M)+C*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*v-u*m*v)+x*(+i*p*S-i*d*M-u*h*S+s*h*M+u*d*v-s*p*v)+g*(-l*d*v-i*m*S+i*d*y+l*h*S-s*h*y+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=e[9],y=e[10],M=e[11],A=e[12],C=e[13],x=e[14],g=e[15],I=S*x*p-C*y*p+C*m*M-d*x*M-S*m*g+d*y*g,O=A*y*p-v*x*p-A*m*M+h*x*M+v*m*g-h*y*g,U=v*C*p-A*S*p+A*d*M-h*C*M-v*d*g+h*S*g,Y=A*S*m-v*C*m-A*d*y+h*C*y+v*d*x-h*S*x,G=i*I+s*O+l*U+u*Y;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return e[0]=I*P,e[1]=(C*y*u-S*x*u-C*l*M+s*x*M+S*l*g-s*y*g)*P,e[2]=(d*x*u-C*m*u+C*l*p-s*x*p-d*l*g+s*m*g)*P,e[3]=(S*m*u-d*y*u-S*l*p+s*y*p+d*l*M-s*m*M)*P,e[4]=O*P,e[5]=(v*x*u-A*y*u+A*l*M-i*x*M-v*l*g+i*y*g)*P,e[6]=(A*m*u-h*x*u-A*l*p+i*x*p+h*l*g-i*m*g)*P,e[7]=(h*y*u-v*m*u+v*l*p-i*y*p-h*l*M+i*m*M)*P,e[8]=U*P,e[9]=(A*S*u-v*C*u-A*s*M+i*C*M+v*s*g-i*S*g)*P,e[10]=(h*C*u-A*d*u+A*s*p-i*C*p-h*s*g+i*d*g)*P,e[11]=(v*d*u-h*S*u-v*s*p+i*S*p+h*s*M-i*d*M)*P,e[12]=Y*P,e[13]=(v*C*l-A*S*l+A*s*y-i*C*y-v*s*x+i*S*x)*P,e[14]=(A*d*l-h*C*l-A*s*m+i*C*m+h*s*x-i*d*x)*P,e[15]=(h*S*l-v*d*l+v*s*m-i*S*m-h*s*y+i*d*y)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,S=d+d,y=u*p,M=u*v,A=u*S,C=h*v,x=h*S,g=d*S,I=m*p,O=m*v,U=m*S,Y=s.x,G=s.y,P=s.z;return l[0]=(1-(C+g))*Y,l[1]=(M+U)*Y,l[2]=(A-O)*Y,l[3]=0,l[4]=(M-U)*G,l[5]=(1-(y+g))*G,l[6]=(x+I)*G,l[7]=0,l[8]=(A+O)*P,l[9]=(x-I)*P,l[10]=(1-(y+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=fr.set(l[0],l[1],l[2]).length();const h=fr.set(l[4],l[5],l[6]).length(),d=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,v=1/h,S=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=v,mi.elements[5]*=v,mi.elements[6]*=v,mi.elements[8]*=S,mi.elements[9]*=S,mi.elements[10]*=S,i.setFromRotationMatrix(mi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=ia){const m=this.elements,p=2*u/(i-e),v=2*u/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let M,A;if(d===ia)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Uc)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=ia){const m=this.elements,p=1/(i-e),v=1/(s-l),S=1/(h-u),y=(i+e)*p,M=(s+l)*v;let A,C;if(d===ia)A=(h+u)*S,C=-2*S;else if(d===Uc)A=u*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const fr=new at,mi=new tn,mx=new at(0,0,0),_x=new at(1,1,1),za=new at,ac=new at,Kn=new at,Ag=new tn,Rg=new Ts;class la{constructor(e=0,i=0,s=0,l=la.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],S=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(pe(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-pe(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ag,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class Ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const Cg=new at,hr=new Ts,Qi=new tn,sc=new at,Lo=new at,vx=new at,Sx=new Ts,Dg=new at(1,0,0),wg=new at(0,1,0),Ug=new at(0,0,1),Lg={type:"added"},yx={type:"removed"},dr={type:"childadded",child:null},rh={type:"childremoved",child:null};class Vn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new at,i=new la,s=new Ts,l=new at(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new re}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return hr.setFromAxisAngle(e,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,i){return hr.setFromAxisAngle(e,i),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Dg,e)}rotateY(e){return this.rotateOnAxis(wg,e)}rotateZ(e){return this.rotateOnAxis(Ug,e)}translateOnAxis(e,i){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Dg,e)}translateY(e){return this.translateOnAxis(wg,e)}translateZ(e){return this.translateOnAxis(Ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?sc.copy(e):sc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Lo,sc,this.up):Qi.lookAt(sc,Lo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(Qi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lg),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(yx),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lg),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),S=h(e.shapes),y=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new at(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new at,Ji=new at,oh=new at,$i=new at,pr=new at,mr=new at,Ng=new at,lh=new at,ch=new at,uh=new at,fh=new $e,hh=new $e,dh=new $e;class vi{constructor(e=new at,i=new at,s=new at){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),_i.subVectors(e,i),l.cross(_i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){_i.subVectors(l,i),Ji.subVectors(s,i),oh.subVectors(e,i);const h=_i.dot(_i),d=_i.dot(Ji),m=_i.dot(oh),p=Ji.dot(Ji),v=Ji.dot(oh),S=h*p-d*d;if(S===0)return u.set(0,0,0),null;const y=1/S,M=(p*m-d*v)*y,A=(h*v-d*m)*y;return u.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return fh.setScalar(0),hh.setScalar(0),dh.setScalar(0),fh.fromBufferAttribute(e,i),hh.fromBufferAttribute(e,s),dh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(fh,u.x),h.addScaledVector(hh,u.y),h.addScaledVector(dh,u.z),h}static isFrontFacing(e,i,s,l){return _i.subVectors(s,i),Ji.subVectors(e,i),_i.cross(Ji).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),_i.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return vi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;pr.subVectors(l,s),mr.subVectors(u,s),lh.subVectors(e,s);const m=pr.dot(lh),p=mr.dot(lh);if(m<=0&&p<=0)return i.copy(s);ch.subVectors(e,l);const v=pr.dot(ch),S=mr.dot(ch);if(v>=0&&S<=v)return i.copy(l);const y=m*S-v*p;if(y<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(pr,h);uh.subVectors(e,u);const M=pr.dot(uh),A=mr.dot(uh);if(A>=0&&M<=A)return i.copy(u);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(mr,d);const x=v*A-M*S;if(x<=0&&S-v>=0&&M-A>=0)return Ng.subVectors(u,l),d=(S-v)/(S-v+(M-A)),i.copy(l).addScaledVector(Ng,d);const g=1/(x+C+y);return h=C*g,d=y*g,i.copy(s).addScaledVector(pr,h).addScaledVector(mr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},rc={h:0,s:0,l:0};function ph(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ae.workingColorSpace){if(e=nx(e,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=ph(h,u,e+1/3),this.g=ph(h,u,e),this.b=ph(h,u,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=oi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oi){const s=Pv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Ae.fromWorkingColorSpace(Rn.copy(this),e),Math.round(pe(Rn.r*255,0,255))*65536+Math.round(pe(Rn.g*255,0,255))*256+Math.round(pe(Rn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=v<=.5?S/(h+d):S/(2-h-d),h){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=oi){Ae.fromWorkingColorSpace(Rn.copy(this),e);const i=Rn.r,s=Rn.g,l=Rn.b;return e!==oi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+i,Ba.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ba),e.getHSL(rc);const s=Qf(Ba.h,rc.h,i),l=Qf(Ba.s,rc.s,i),u=Qf(Ba.l,rc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ce;Ce.NAMES=Pv;let xx=0;class Ho extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Tr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ch&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zv extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new at,oc=new ce;class Di{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=yg,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Do(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yg&&(e.usage=this.usage),e}}class Bv extends Di{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Iv extends Di{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ra extends Di{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Mx=0;const ri=new tn,mh=new Vn,_r=new at,Qn=new Fo,No=new Fo,_n=new at;class ca extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?Iv:Bv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new re().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,s){return ri.makeTranslation(e,i,s),this.applyMatrix4(ri),this}scale(e,i,s){return ri.makeScale(e,i,s),this.applyMatrix4(ri),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ra(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const s=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Qn.min,No.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,No.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(No.min),Qn.expandByPoint(No.max))}Qn.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)_n.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(e,p),_n.add(_r)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new at,m[K]=new at;const p=new at,v=new at,S=new at,y=new ce,M=new ce,A=new ce,C=new at,x=new at;function g(K,D,R){p.fromBufferAttribute(s,K),v.fromBufferAttribute(s,D),S.fromBufferAttribute(s,R),y.fromBufferAttribute(u,K),M.fromBufferAttribute(u,D),A.fromBufferAttribute(u,R),v.sub(p),S.sub(p),M.sub(y),A.sub(y);const B=1/(M.x*A.y-A.x*M.y);isFinite(B)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(B),x.copy(S).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(B),d[K].add(C),d[D].add(C),d[R].add(C),m[K].add(x),m[D].add(x),m[R].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let K=0,D=I.length;K<D;++K){const R=I[K],B=R.start,rt=R.count;for(let et=B,ht=B+rt;et<ht;et+=3)g(e.getX(et+0),e.getX(et+1),e.getX(et+2))}const O=new at,U=new at,Y=new at,G=new at;function P(K){Y.fromBufferAttribute(l,K),G.copy(Y);const D=d[K];O.copy(D),O.sub(Y.multiplyScalar(Y.dot(D))).normalize(),U.crossVectors(G,D);const B=U.dot(m[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,B)}for(let K=0,D=I.length;K<D;++K){const R=I[K],B=R.start,rt=R.count;for(let et=B,ht=B+rt;et<ht;et+=3)P(e.getX(et+0)),P(e.getX(et+1)),P(e.getX(et+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new at,u=new at,h=new at,d=new at,m=new at,p=new at,v=new at,S=new at;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),C=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),d.add(v),m.add(v),p.add(v),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,S=d.normalized,y=new p.constructor(m.length*v);let M=0,A=0;for(let C=0,x=m.length;C<x;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*v;for(let g=0;g<v;g++)y[A++]=p[M++]}return new Di(y,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ca,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,S=p.length;v<S;v++){const y=p[v],M=e(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,y=p.length;S<y;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],S=u[p];for(let y=0,M=S.length;y<M;y++)v.push(S[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Og=new tn,ds=new Ed,lc=new Oc,Pg=new at,cc=new at,uc=new at,fc=new at,_h=new at,hc=new at,zg=new at,dc=new at;class aa extends Vn{constructor(e=new ca,i=new zv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],S=u[m];v!==0&&(_h.fromBufferAttribute(S,e),h?hc.addScaledVector(_h,v):hc.addScaledVector(_h.sub(i),v))}i.add(hc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(u),ds.copy(e.ray).recast(e.near),!(lc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(lc,Pg)===null||ds.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Og.copy(u).invert(),ds.copy(e.ray).applyMatrix4(Og),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ds)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=y.length;A<C;A++){const x=y[A],g=h[x.materialIndex],I=Math.max(x.start,M.start),O=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let U=I,Y=O;U<Y;U+=3){const G=d.getX(U),P=d.getX(U+1),K=d.getX(U+2);l=pc(this,g,e,s,p,v,S,G,P,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let x=A,g=C;x<g;x+=3){const I=d.getX(x),O=d.getX(x+1),U=d.getX(x+2);l=pc(this,h,e,s,p,v,S,I,O,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=y.length;A<C;A++){const x=y[A],g=h[x.materialIndex],I=Math.max(x.start,M.start),O=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let U=I,Y=O;U<Y;U+=3){const G=U,P=U+1,K=U+2;l=pc(this,g,e,s,p,v,S,G,P,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let x=A,g=C;x<g;x+=3){const I=x,O=x+1,U=x+2;l=pc(this,h,e,s,p,v,S,I,O,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Ex(o,e,i,s,l,u,h,d){let m;if(e.side===Hn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Xa,d),m===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function pc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const v=Ex(o,e,i,s,cc,uc,fc,zg);if(v){const S=new at;vi.getBarycoord(zg,cc,uc,fc,S),l&&(v.uv=vi.getInterpolatedAttribute(l,d,m,p,S,new ce)),u&&(v.uv1=vi.getInterpolatedAttribute(u,d,m,p,S,new ce)),h&&(v.normal=vi.getInterpolatedAttribute(h,d,m,p,S,new at),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new at,materialIndex:0};vi.getNormal(cc,uc,fc,y.normal),v.face=y,v.barycoord=S}return v}class Go extends ca{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],S=[];let y=0,M=0;A("z","y","x",-1,-1,s,i,e,h,u,0),A("z","y","x",1,-1,s,i,-e,h,u,1),A("x","z","y",1,1,e,s,i,l,h,2),A("x","z","y",1,-1,e,s,-i,l,h,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ra(p,3)),this.setAttribute("normal",new ra(v,3)),this.setAttribute("uv",new ra(S,2));function A(C,x,g,I,O,U,Y,G,P,K,D){const R=U/P,B=Y/K,rt=U/2,et=Y/2,ht=G/2,ft=P+1,N=K+1;let j=0,k=0;const St=new at;for(let Tt=0;Tt<N;Tt++){const L=Tt*B-et;for(let nt=0;nt<ft;nt++){const xt=nt*R-rt;St[C]=xt*I,St[x]=L*O,St[g]=ht,p.push(St.x,St.y,St.z),St[C]=0,St[x]=0,St[g]=G>0?1:-1,v.push(St.x,St.y,St.z),S.push(nt/P),S.push(1-Tt/K),j+=1}}for(let Tt=0;Tt<K;Tt++)for(let L=0;L<P;L++){const nt=y+L+ft*Tt,xt=y+L+ft*(Tt+1),Z=y+(L+1)+ft*(Tt+1),ct=y+(L+1)+ft*Tt;m.push(nt,xt,ct),m.push(xt,Z,ct),k+=6}d.addGroup(M,k,D),M+=k,y+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)e[l]=s[l]}return e}function Tx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Fv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const bx={clone:Nr,merge:Un};var Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=Tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Hv extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new at,Bg=new ce,Ig=new ce;class li extends Hv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,Bg,Ig),i.subVectors(Ig,Bg)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,vr=1;class Cx extends Vn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(gr,vr,e,i);l.layers=this.layers,this.add(l);const u=new li(gr,vr,e,i);u.layers=this.layers,this.add(u);const h=new li(gr,vr,e,i);h.layers=this.layers,this.add(h);const d=new li(gr,vr,e,i);d.layers=this.layers,this.add(d);const m=new li(gr,vr,e,i);m.layers=this.layers,this.add(m);const p=new li(gr,vr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Uc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(S,y,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Gv extends Gn{constructor(e,i,s,l,u,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:Cr,super(e,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dx extends Es{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Gv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ci}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Go(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:Ga});u.uniforms.tEquirect.value=i;const h=new aa(l,u),d=i.minFilter;return i.minFilter===xs&&(i.minFilter=Ci),new Cx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class wx extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const gh=new at,Ux=new at,Lx=new re;class Fa{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=gh.subVectors(s,i).cross(Ux.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(gh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Lx.getNormalMatrix(e),l=this.coplanarPoint(gh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Oc,mc=new at;class Vv{constructor(e=new Fa,i=new Fa,s=new Fa,l=new Fa,u=new Fa,h=new Fa){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ia){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],S=l[6],y=l[7],M=l[8],A=l[9],C=l[10],x=l[11],g=l[12],I=l[13],O=l[14],U=l[15];if(s[0].setComponents(m-u,y-p,x-M,U-g).normalize(),s[1].setComponents(m+u,y+p,x+M,U+g).normalize(),s[2].setComponents(m+h,y+v,x+A,U+I).normalize(),s[3].setComponents(m-h,y-v,x-A,U-I).normalize(),s[4].setComponents(m-d,y-S,x-C,U-O).normalize(),i===ia)s[5].setComponents(m+d,y+S,x+C,U+O).normalize();else if(i===Uc)s[5].setComponents(d,S,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mc.x=l.normal.x>0?e.max.x:e.min.x,mc.y=l.normal.y>0?e.max.y:e.min.y,mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xv extends Ho{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fg=new tn,dd=new Ed,_c=new Oc,gc=new at;class Nx extends Vn{constructor(e=new ca,i=new Xv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(l),_c.radius+=u,e.ray.intersectsSphere(_c)===!1)return;Fg.copy(l).invert(),dd.copy(e.ray).applyMatrix4(Fg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,S=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let A=y,C=M;A<C;A++){const x=p.getX(A);gc.fromBufferAttribute(S,x),Hg(gc,x,m,l,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(S.count,h.start+h.count);for(let A=y,C=M;A<C;A++)gc.fromBufferAttribute(S,A),Hg(gc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Hg(o,e,i,s,l,u,h){const d=dd.distanceSqToPoint(o);if(d<i){const m=new at;dd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class vc extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class kv extends Gn{constructor(e,i,s,l,u,h,d,m,p,v=br){if(v!==br&&v!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===br&&(s=Ms),s===void 0&&v===Ur&&(s=wr),super(null,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:yi,this.minFilter=m!==void 0?m:yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Pc extends ca{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,S=e/d,y=i/m,M=[],A=[],C=[],x=[];for(let g=0;g<v;g++){const I=g*y-h;for(let O=0;O<p;O++){const U=O*S-u;A.push(U,-I,0),C.push(0,0,1),x.push(O/d),x.push(1-g/m)}}for(let g=0;g<m;g++)for(let I=0;I<d;I++){const O=I+p*g,U=I+p*(g+1),Y=I+1+p*(g+1),G=I+1+p*g;M.push(O,U,G),M.push(U,Y,G)}this.setIndex(M),this.setAttribute("position",new ra(A,3)),this.setAttribute("normal",new ra(C,3)),this.setAttribute("uv",new ra(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ox extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Px extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zx extends Hv{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Bx extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ix{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=Gg();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Gg(){return performance.now()}class Vg{constructor(e=1,i=0,s=0){return this.radius=e,this.phi=i,this.theta=s,this}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fx extends bs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Xg(o,e,i,s){const l=Hx(s);switch(i){case Ev:return o*e;case bv:return o*e;case Av:return o*e*2;case Rv:return o*e/l.components*l.byteLength;case yd:return o*e/l.components*l.byteLength;case Cv:return o*e*2/l.components*l.byteLength;case xd:return o*e*2/l.components*l.byteLength;case Tv:return o*e*3/l.components*l.byteLength;case Si:return o*e*4/l.components*l.byteLength;case Md:return o*e*4/l.components*l.byteLength;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gh:case Xh:return Math.max(o,16)*Math.max(e,8)/4;case Hh:case Vh:return Math.max(o,8)*Math.max(e,8)/2;case kh:case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rc:case od:case ld:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dv:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ud:case fd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Hx(o){switch(o){case oa:case yv:return{byteLength:1,components:1};case zo:case xv:case Bo:return{byteLength:2,components:1};case vd:case Sd:return{byteLength:2,components:4};case Ms:case gd:case na:return{byteLength:4,components:1};case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Gx(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,S=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function s(d,m,p){const v=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,v);else{S.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<S.length;M++){const A=S[y],C=S[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++y,S[y]=C)}S.length=y+1;for(let M=0,A=S.length;M<A;M++){const C=S[M];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
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
#endif`,kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
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
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kx=`#ifdef USE_BATCHING
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
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
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
}`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
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
#endif`,HM=`struct PhysicalMaterial {
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
}`,GM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,aE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
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
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AE=`float getShadowMask() {
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
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,DE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wE=`#ifdef USE_SKINNING
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
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
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
#endif`,zE=`#ifdef USE_TRANSMISSION
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
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
}`,jE=`#if DEPTH_PACKING == 3200
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
}`,ZE=`#define DISTANCE
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
}`,KE=`#define DISTANCE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
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
}`,tT=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#define LAMBERT
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
}`,aT=`#define LAMBERT
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
}`,sT=`#define MATCAP
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
}`,rT=`#define MATCAP
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
}`,oT=`#define NORMAL
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
}`,lT=`#define NORMAL
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
}`,cT=`#define PHONG
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
}`,uT=`#define PHONG
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
}`,fT=`#define STANDARD
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
}`,hT=`#define STANDARD
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
}`,dT=`#define TOON
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
}`,pT=`#define TOON
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
}`,mT=`uniform float size;
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
}`,_T=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,vT=`uniform vec3 color;
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
}`,ST=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Vx,alphahash_pars_fragment:Xx,alphamap_fragment:kx,alphamap_pars_fragment:Wx,alphatest_fragment:qx,alphatest_pars_fragment:Yx,aomap_fragment:jx,aomap_pars_fragment:Zx,batching_pars_vertex:Kx,batching_vertex:Qx,begin_vertex:Jx,beginnormal_vertex:$x,bsdfs:tM,iridescence_fragment:eM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:rM,color_fragment:oM,color_pars_fragment:lM,color_pars_vertex:cM,color_vertex:uM,common:fM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:dM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:_M,emissivemap_pars_fragment:gM,colorspace_fragment:vM,colorspace_pars_fragment:SM,envmap_fragment:yM,envmap_common_pars_fragment:xM,envmap_pars_fragment:MM,envmap_pars_vertex:EM,envmap_physical_pars_fragment:OM,envmap_vertex:TM,fog_vertex:bM,fog_pars_vertex:AM,fog_fragment:RM,fog_pars_fragment:CM,gradientmap_pars_fragment:DM,lightmap_pars_fragment:wM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:LM,lights_pars_begin:NM,lights_toon_fragment:PM,lights_toon_pars_fragment:zM,lights_phong_fragment:BM,lights_phong_pars_fragment:IM,lights_physical_fragment:FM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:VM,lights_fragment_end:XM,logdepthbuf_fragment:kM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:YM,map_fragment:jM,map_pars_fragment:ZM,map_particle_fragment:KM,map_particle_pars_fragment:QM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:$M,morphinstance_vertex:tE,morphcolor_vertex:eE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:aE,normal_fragment_begin:sE,normal_fragment_maps:rE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:_E,premultiplied_alpha_fragment:gE,project_vertex:vE,dithering_fragment:SE,dithering_pars_fragment:yE,roughnessmap_fragment:xE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:bE,shadowmask_pars_fragment:AE,skinbase_vertex:RE,skinning_pars_vertex:CE,skinning_vertex:DE,skinnormal_vertex:wE,specularmap_fragment:UE,specularmap_pars_fragment:LE,tonemapping_fragment:NE,tonemapping_pars_fragment:OE,transmission_fragment:PE,transmission_pars_fragment:zE,uv_pars_fragment:BE,uv_pars_vertex:IE,uv_vertex:FE,worldpos_vertex:HE,background_vert:GE,background_frag:VE,backgroundCube_vert:XE,backgroundCube_frag:kE,cube_vert:WE,cube_frag:qE,depth_vert:YE,depth_frag:jE,distanceRGBA_vert:ZE,distanceRGBA_frag:KE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:$E,linedashed_frag:tT,meshbasic_vert:eT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:aT,meshmatcap_vert:sT,meshmatcap_frag:rT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:fT,meshphysical_frag:hT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:_T,shadow_vert:gT,shadow_frag:vT,sprite_vert:ST,sprite_frag:yT},Ut={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ri={basic:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Un([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Un([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Un([Ut.points,Ut.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Un([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Un([Ut.common,Ut.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Un([Ut.sprite,Ut.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Un([Ut.common,Ut.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Un([Ut.lights,Ut.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Ri.physical={uniforms:Un([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Sc={r:0,b:0,g:0},ms=new la,xT=new tn;function MT(o,e,i,s,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,v,S=null,y=0,M=null;function A(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function C(O){let U=!1;const Y=A(O);Y===null?g(d,m):Y&&Y.isColor&&(g(Y,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(O,U){const Y=A(U);Y&&(Y.isCubeTexture||Y.mapping===Nc)?(v===void 0&&(v=new aa(new Go(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Nr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,P,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),ms.copy(U.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),v.material.uniforms.envMap.value=Y,v.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(ms)),v.material.toneMapped=Ae.getTransfer(Y.colorSpace)!==Be,(S!==Y||y!==Y.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,S=Y,y=Y.version,M=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):Y&&Y.isTexture&&(p===void 0&&(p=new aa(new Pc(2,2),new ka({name:"BackgroundMaterial",uniforms:Nr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=Y,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(Y.colorSpace)!==Be,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),p.material.uniforms.uvTransform.value.copy(Y.matrix),(S!==Y||y!==Y.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=Y,y=Y.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,U){O.getRGB(Sc,Fv(o)),s.buffers.color.setClear(Sc.r,Sc.g,Sc.b,U,h)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),m=U,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,g(d,m)},render:C,addToRenderList:x,dispose:I}}function ET(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,h=!1;function d(R,B,rt,et,ht){let ft=!1;const N=S(et,rt,B);u!==N&&(u=N,p(u.object)),ft=M(R,et,rt,ht),ft&&A(R,et,rt,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,U(R,B,rt,et),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function S(R,B,rt){const et=rt.wireframe===!0;let ht=s[R.id];ht===void 0&&(ht={},s[R.id]=ht);let ft=ht[B.id];ft===void 0&&(ft={},ht[B.id]=ft);let N=ft[et];return N===void 0&&(N=y(m()),ft[et]=N),N}function y(R){const B=[],rt=[],et=[];for(let ht=0;ht<i;ht++)B[ht]=0,rt[ht]=0,et[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:rt,attributeDivisors:et,object:R,attributes:{},index:null}}function M(R,B,rt,et){const ht=u.attributes,ft=B.attributes;let N=0;const j=rt.getAttributes();for(const k in j)if(j[k].location>=0){const Tt=ht[k];let L=ft[k];if(L===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),Tt===void 0||Tt.attribute!==L||L&&Tt.data!==L.data)return!0;N++}return u.attributesNum!==N||u.index!==et}function A(R,B,rt,et){const ht={},ft=B.attributes;let N=0;const j=rt.getAttributes();for(const k in j)if(j[k].location>=0){let Tt=ft[k];Tt===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const L={};L.attribute=Tt,Tt&&Tt.data&&(L.data=Tt.data),ht[k]=L,N++}u.attributes=ht,u.attributesNum=N,u.index=et}function C(){const R=u.newAttributes;for(let B=0,rt=R.length;B<rt;B++)R[B]=0}function x(R){g(R,0)}function g(R,B){const rt=u.newAttributes,et=u.enabledAttributes,ht=u.attributeDivisors;rt[R]=1,et[R]===0&&(o.enableVertexAttribArray(R),et[R]=1),ht[R]!==B&&(o.vertexAttribDivisor(R,B),ht[R]=B)}function I(){const R=u.newAttributes,B=u.enabledAttributes;for(let rt=0,et=B.length;rt<et;rt++)B[rt]!==R[rt]&&(o.disableVertexAttribArray(rt),B[rt]=0)}function O(R,B,rt,et,ht,ft,N){N===!0?o.vertexAttribIPointer(R,B,rt,ht,ft):o.vertexAttribPointer(R,B,rt,et,ht,ft)}function U(R,B,rt,et){C();const ht=et.attributes,ft=rt.getAttributes(),N=B.defaultAttributeValues;for(const j in ft){const k=ft[j];if(k.location>=0){let St=ht[j];if(St===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const Tt=St.normalized,L=St.itemSize,nt=e.get(St);if(nt===void 0)continue;const xt=nt.buffer,Z=nt.type,ct=nt.bytesPerElement,Et=Z===o.INT||Z===o.UNSIGNED_INT||St.gpuType===gd;if(St.isInterleavedBufferAttribute){const yt=St.data,Ht=yt.stride,It=St.offset;if(yt.isInstancedInterleavedBuffer){for(let ee=0;ee<k.locationSize;ee++)g(k.location+ee,yt.meshPerAttribute);R.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ee=0;ee<k.locationSize;ee++)x(k.location+ee);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ee=0;ee<k.locationSize;ee++)O(k.location+ee,L/k.locationSize,Z,Tt,Ht*ct,(It+L/k.locationSize*ee)*ct,Et)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<k.locationSize;yt++)g(k.location+yt,St.meshPerAttribute);R.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<k.locationSize;yt++)x(k.location+yt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let yt=0;yt<k.locationSize;yt++)O(k.location+yt,L/k.locationSize,Z,Tt,L*ct,L/k.locationSize*yt*ct,Et)}}else if(N!==void 0){const Tt=N[j];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(k.location,Tt);break;case 3:o.vertexAttrib3fv(k.location,Tt);break;case 4:o.vertexAttrib4fv(k.location,Tt);break;default:o.vertexAttrib1fv(k.location,Tt)}}}}I()}function Y(){K();for(const R in s){const B=s[R];for(const rt in B){const et=B[rt];for(const ht in et)v(et[ht].object),delete et[ht];delete B[rt]}delete s[R]}}function G(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const rt in B){const et=B[rt];for(const ht in et)v(et[ht].object),delete et[ht];delete B[rt]}delete s[R.id]}function P(R){for(const B in s){const rt=s[B];if(rt[R.id]===void 0)continue;const et=rt[R.id];for(const ht in et)v(et[ht].object),delete et[ht];delete rt[R.id]}}function K(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:Y,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:x,disableUnusedAttributes:I}}function TT(o,e,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,S){S!==0&&(o.drawArraysInstanced(s,p,v,S),i.update(v,s,S))}function d(p,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,S);let M=0;for(let A=0;A<S;A++)M+=v[A];i.update(M,s,1)}function m(p,v,S,y){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],v[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,y,0,S);let A=0;for(let C=0;C<S;C++)A+=v[C]*y[C];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function bT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Si&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const K=P===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==oa&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==na&&!K)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Y=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:Y,maxSamples:G}}function AT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Fa,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const M=S.length!==0||y||s!==0||l;return l=y,s=S.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,y){i=v(S,y,0)},this.setState=function(S,y,M){const A=S.clippingPlanes,C=S.clipIntersection,x=S.clipShadows,g=o.get(S);if(!l||A===null||A.length===0||u&&!x)u?v(null):p();else{const I=u?0:s,O=I*4;let U=g.clippingState||null;m.value=U,U=v(A,y,O,M);for(let Y=0;Y!==O;++Y)U[Y]=i[Y];g.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,y,M,A){const C=S!==null?S.length:0;let x=null;if(C!==0){if(x=m.value,A!==!0||x===null){const g=M+C*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(x===null||x.length<g)&&(x=new Float32Array(g));for(let O=0,U=M;O!==C;++O,U+=4)h.copy(S[O]).applyMatrix4(I,d),h.normal.toArray(x,U),x[U+3]=h.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}function RT(o){let e=new WeakMap;function i(h,d){return d===zh?h.mapping=Cr:d===Bh&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===zh||d===Bh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Dx(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Mr=4,kg=[.125,.215,.35,.446,.526,.582],Ss=20,vh=new zx,Wg=new Ce;let Sh=null,yh=0,xh=0,Mh=!1;const gs=(1+Math.sqrt(5))/2,Sr=1/gs,qg=[new at(-gs,Sr,0),new at(gs,Sr,0),new at(-Sr,0,gs),new at(Sr,0,gs),new at(0,gs,-Sr),new at(0,gs,Sr),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class Yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Sh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,yh,xh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Cr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Bo,format:Si,colorSpace:Lr,depthBuffer:!1},l=jg(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jg(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(u)),this._blurMaterial=DT(u,e,i)}return l}_compileMaterial(e){const i=new aa(this._lodPlanes[0],e);this._renderer.compile(i,vh)}_sceneToCubeUV(e,i,s,l){const d=new li(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(Wg),v.toneMapping=Va,v.autoClear=!1;const M=new zv({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),A=new aa(new Go,M);let C=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,C=!0):(M.color.copy(Wg),C=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):I===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const O=this._cubeSize;yc(l,I*O,g>2?O:0,O,O),v.setRenderTarget(l),C&&v.render(A,d),v.render(e,d)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=y,v.autoClear=S,e.background=x}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Cr||e.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new aa(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;yc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,vh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=qg[(l-u-1)%qg.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new aa(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ss-1),C=u/A,x=isFinite(u)?1+Math.floor(v*C):Ss;x>Ss&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ss}`);const g=[];let I=0;for(let P=0;P<Ss;++P){const K=P/C,D=Math.exp(-K*K/2);g.push(D),P===0?I+=D:P<x&&(I+=2*D)}for(let P=0;P<g.length;P++)g[P]=g[P]/I;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=g,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=A,y.mipInt.value=O-s;const U=this._sizeLods[l],Y=3*U*(l>O-Mr?l-O+Mr:0),G=4*(this._cubeSize-U);yc(i,Y,G,3*U,2*U),m.setRenderTarget(i),m.render(S,vh)}}function CT(o){const e=[],i=[],s=[];let l=o;const u=o-Mr+1+kg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Mr?m=kg[h-o+Mr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,S=1+p,y=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,A=6,C=3,x=2,g=1,I=new Float32Array(C*A*M),O=new Float32Array(x*A*M),U=new Float32Array(g*A*M);for(let G=0;G<M;G++){const P=G%3*2/3-1,K=G>2?0:-1,D=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];I.set(D,C*A*G),O.set(y,x*A*G);const R=[G,G,G,G,G,G];U.set(R,g*A*G)}const Y=new ca;Y.setAttribute("position",new Di(I,C)),Y.setAttribute("uv",new Di(O,x)),Y.setAttribute("faceIndex",new Di(U,g)),e.push(Y),l>Mr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function jg(o,e,i){const s=new Es(o,e,i);return s.texture.mapping=Nc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function DT(o,e,i){const s=new Float32Array(Ss),l=new at(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Zg(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Kg(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function wT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===zh||m===Bh,v=m===Cr||m===Dr;if(p||v){let S=e.get(d);const y=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new Yg(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Yg(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function UT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&yr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function LT(o,e,i,s){const l={},u=new WeakMap;function h(S){const y=S.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(S,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(S){const y=S.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function p(S){const y=[],M=S.index,A=S.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let O=0,U=I.length;O<U;O+=3){const Y=I[O+0],G=I[O+1],P=I[O+2];y.push(Y,G,G,P,P,Y)}}else if(A!==void 0){const I=A.array;C=A.version;for(let O=0,U=I.length/3-1;O<U;O+=3){const Y=O+0,G=O+1,P=O+2;y.push(Y,G,G,P,P,Y)}}else return;const x=new(Uv(y)?Iv:Bv)(y,1);x.version=C;const g=u.get(S);g&&e.remove(g),u.set(S,x)}function v(S){const y=u.get(S);if(y){const M=S.index;M!==null&&y.version<M.version&&p(S)}else p(S);return u.get(S)}return{get:d,update:m,getWireframeAttribute:v}}function NT(o,e,i){let s;function l(y){s=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,M){o.drawElements(s,M,u,y*h),i.update(M,s,1)}function p(y,M,A){A!==0&&(o.drawElementsInstanced(s,M,u,y*h,A),i.update(M,s,A))}function v(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,y,0,A);let x=0;for(let g=0;g<A;g++)x+=M[g];i.update(x,s,1)}function S(y,M,A,C){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<y.length;g++)p(y[g]/h,M[g],C[g]);else{x.multiDrawElementsInstancedWEBGL(s,M,0,u,y,0,C,0,A);let g=0;for(let I=0;I<A;I++)g+=M[I]*C[I];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function OT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function PT(o,e,i){const s=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==S){let R=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),C===!0&&(U=2),x===!0&&(U=3);let Y=d.attributes.position.count*U,G=1;Y>e.maxTextureSize&&(G=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const P=new Float32Array(Y*G*4*S),K=new Nv(P,Y,G,S);K.type=na,K.needsUpdate=!0;const D=U*4;for(let B=0;B<S;B++){const rt=g[B],et=I[B],ht=O[B],ft=Y*G*4*B;for(let N=0;N<rt.count;N++){const j=N*D;A===!0&&(l.fromBufferAttribute(rt,N),P[ft+j+0]=l.x,P[ft+j+1]=l.y,P[ft+j+2]=l.z,P[ft+j+3]=0),C===!0&&(l.fromBufferAttribute(et,N),P[ft+j+4]=l.x,P[ft+j+5]=l.y,P[ft+j+6]=l.z,P[ft+j+7]=0),x===!0&&(l.fromBufferAttribute(ht,N),P[ft+j+8]=l.x,P[ft+j+9]=l.y,P[ft+j+10]=l.z,P[ft+j+11]=ht.itemSize===4?l.w:1)}}y={count:S,texture:K,size:new ce(Y,G)},s.set(d,y),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let x=0;x<p.length;x++)A+=p[x];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function zT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,S=e.get(m,v);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const qv=new Gn,Qg=new kv(1,1),Yv=new Nv,jv=new dx,Zv=new Gv,Jg=[],$g=[],tv=new Float32Array(16),ev=new Float32Array(9),nv=new Float32Array(4);function Or(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=Jg[l];if(u===void 0&&(u=new Float32Array(l),Jg[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function zc(o,e){let i=$g[e];i===void 0&&(i=new Int32Array(e),$g[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function BT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function GT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;nv.set(s),o.uniformMatrix2fv(this.addr,!1,nv),dn(i,s)}}function VT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;ev.set(s),o.uniformMatrix3fv(this.addr,!1,ev),dn(i,s)}}function XT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;tv.set(s),o.uniformMatrix4fv(this.addr,!1,tv),dn(i,s)}}function kT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function jT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function JT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Qg.compareFunction=wv,u=Qg):u=qv,i.setTexture2D(e||u,l)}function $T(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||jv,l)}function tb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Zv,l)}function eb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Yv,l)}function nb(o){switch(o){case 5126:return BT;case 35664:return IT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return XT;case 5124:case 35670:return kT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}function ib(o,e){o.uniform1fv(this.addr,e)}function ab(o,e){const i=Or(e,this.size,2);o.uniform2fv(this.addr,i)}function sb(o,e){const i=Or(e,this.size,3);o.uniform3fv(this.addr,i)}function rb(o,e){const i=Or(e,this.size,4);o.uniform4fv(this.addr,i)}function ob(o,e){const i=Or(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lb(o,e){const i=Or(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function cb(o,e){const i=Or(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ub(o,e){o.uniform1iv(this.addr,e)}function fb(o,e){o.uniform2iv(this.addr,e)}function hb(o,e){o.uniform3iv(this.addr,e)}function db(o,e){o.uniform4iv(this.addr,e)}function pb(o,e){o.uniform1uiv(this.addr,e)}function mb(o,e){o.uniform2uiv(this.addr,e)}function _b(o,e){o.uniform3uiv(this.addr,e)}function gb(o,e){o.uniform4uiv(this.addr,e)}function vb(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||qv,u[h])}function Sb(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||jv,u[h])}function yb(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Zv,u[h])}function xb(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Yv,u[h])}function Mb(o){switch(o){case 5126:return ib;case 35664:return ab;case 35665:return sb;case 35666:return rb;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return fb;case 35668:case 35672:return hb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return _b;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return xb}}class Eb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=nb(i.type)}}class Tb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Mb(i.type)}}class bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function iv(o,e){o.seq.push(e),o.map[e.id]=e}function Ab(o,e,i){const s=o.name,l=s.length;for(Eh.lastIndex=0;;){const u=Eh.exec(s),h=Eh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){iv(i,p===void 0?new Eb(d,o,e):new Tb(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new bb(d),iv(i,S)),i=S}}}class Dc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Ab(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function av(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Rb=37297;let Cb=0;function Db(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const sv=new re;function wb(o){Ae._getMatrix(sv,Ae.workingColorSpace,o);const e=`mat3( ${sv.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function rv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Db(o.getShaderSource(e),h)}else return l}function Ub(o,e){const i=wb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Lb(o,e){let i;switch(e){case By:i="Linear";break;case Iy:i="Reinhard";break;case Fy:i="Cineon";break;case Hy:i="ACESFilmic";break;case Vy:i="AgX";break;case Xy:i="Neutral";break;case Gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new at;function Nb(){Ae.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),e=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Pb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function zb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Po(o){return o!==""}function ov(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(o){return o.replace(Bb,Fb)}const Ib=new Map;function Fb(o,e){let i=oe[e];if(i===void 0){const s=Ib.get(e);if(s!==void 0)i=oe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return pd(i)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(o){return o.replace(Hb,Gb)}function Gb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function uv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===_y?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case vv:e="ENVMAP_BLENDING_MULTIPLY";break;case Py:e="ENVMAP_BLENDING_MIX";break;case zy:e="ENVMAP_BLENDING_ADD";break}return e}function qb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Yb(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Vb(i),p=Xb(i),v=kb(i),S=Wb(i),y=qb(i),M=Ob(i),A=Pb(u),C=l.createProgram();let x,g,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Po).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Po).join(`
`),g.length>0&&(g+=`
`)):(x=[uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),g=[uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?oe.tonemapping_pars_fragment:"",i.toneMapping!==Va?Lb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Ub("linearToOutputTexel",i.outputColorSpace),Nb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),h=pd(h),h=ov(h,i),h=lv(h,i),d=pd(d),d=ov(d,i),d=lv(d,i),h=cv(h),d=cv(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",i.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=I+x+h,U=I+g+d,Y=av(l,l.VERTEX_SHADER,O),G=av(l,l.FRAGMENT_SHADER,U);l.attachShader(C,Y),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(B){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C).trim(),et=l.getShaderInfoLog(Y).trim(),ht=l.getShaderInfoLog(G).trim();let ft=!0,N=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,Y,G);else{const j=rv(l,Y,"vertex"),k=rv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+rt+`
`+j+`
`+k)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(et===""||ht==="")&&(N=!1);N&&(B.diagnostics={runnable:ft,programLog:rt,vertexShader:{log:et,prefix:x},fragmentShader:{log:ht,prefix:g}})}l.deleteShader(Y),l.deleteShader(G),K=new Dc(l,C),D=zb(l,C)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,Rb)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=Y,this.fragmentShader=G,this}let jb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Kb(e),i.set(e,s)),s}}class Kb{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}}function Qb(o,e,i,s,l,u,h){const d=new Ov,m=new Zb,p=new Set,v=[],S=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function x(D,R,B,rt,et){const ht=rt.fog,ft=et.geometry,N=D.isMeshStandardMaterial?rt.environment:null,j=(D.isMeshStandardMaterial?i:e).get(D.envMap||N),k=j&&j.mapping===Nc?j.image.height:null,St=A[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Tt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,L=Tt!==void 0?Tt.length:0;let nt=0;ft.morphAttributes.position!==void 0&&(nt=1),ft.morphAttributes.normal!==void 0&&(nt=2),ft.morphAttributes.color!==void 0&&(nt=3);let xt,Z,ct,Et;if(St){const xe=Ri[St];xt=xe.vertexShader,Z=xe.fragmentShader}else xt=D.vertexShader,Z=D.fragmentShader,m.update(D),ct=m.getVertexShaderID(D),Et=m.getFragmentShaderID(D);const yt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),It=et.isInstancedMesh===!0,ee=et.isBatchedMesh===!0,Le=!!D.map,ue=!!D.matcap,ke=!!j,F=!!D.aoMap,En=!!D.lightMap,le=!!D.bumpMap,me=!!D.normalMap,Wt=!!D.displacementMap,De=!!D.emissiveMap,kt=!!D.metalnessMap,w=!!D.roughnessMap,T=D.anisotropy>0,tt=D.clearcoat>0,dt=D.dispersion>0,Mt=D.iridescence>0,mt=D.sheen>0,Vt=D.transmission>0,Ct=T&&!!D.anisotropyMap,Pt=tt&&!!D.clearcoatMap,_e=tt&&!!D.clearcoatNormalMap,bt=tt&&!!D.clearcoatRoughnessMap,zt=Mt&&!!D.iridescenceMap,qt=Mt&&!!D.iridescenceThicknessMap,Xt=mt&&!!D.sheenColorMap,Lt=mt&&!!D.sheenRoughnessMap,Qt=!!D.specularMap,ne=!!D.specularColorMap,Ne=!!D.specularIntensityMap,V=Vt&&!!D.transmissionMap,At=Vt&&!!D.thicknessMap,lt=!!D.gradientMap,gt=!!D.alphaMap,Rt=D.alphaTest>0,Dt=!!D.alphaHash,Jt=!!D.extensions;let We=Va;D.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(We=o.toneMapping);const ln={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:Z,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:Et,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:ee,batchingColor:ee&&et._colorsTexture!==null,instancing:It,instancingColor:It&&et.instanceColor!==null,instancingMorph:It&&et.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Lr,alphaToCoverage:!!D.alphaToCoverage,map:Le,matcap:ue,envMap:ke,envMapMode:ke&&j.mapping,envMapCubeUVHeight:k,aoMap:F,lightMap:En,bumpMap:le,normalMap:me,displacementMap:y&&Wt,emissiveMap:De,normalMapObjectSpace:me&&D.normalMapType===jy,normalMapTangentSpace:me&&D.normalMapType===Yy,metalnessMap:kt,roughnessMap:w,anisotropy:T,anisotropyMap:Ct,clearcoat:tt,clearcoatMap:Pt,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:dt,iridescence:Mt,iridescenceMap:zt,iridescenceThicknessMap:qt,sheen:mt,sheenColorMap:Xt,sheenRoughnessMap:Lt,specularMap:Qt,specularColorMap:ne,specularIntensityMap:Ne,transmission:Vt,transmissionMap:V,thicknessMap:At,gradientMap:lt,opaque:D.transparent===!1&&D.blending===Tr&&D.alphaToCoverage===!1,alphaMap:gt,alphaTest:Rt,alphaHash:Dt,combine:D.combine,mapUv:Le&&C(D.map.channel),aoMapUv:F&&C(D.aoMap.channel),lightMapUv:En&&C(D.lightMap.channel),bumpMapUv:le&&C(D.bumpMap.channel),normalMapUv:me&&C(D.normalMap.channel),displacementMapUv:Wt&&C(D.displacementMap.channel),emissiveMapUv:De&&C(D.emissiveMap.channel),metalnessMapUv:kt&&C(D.metalnessMap.channel),roughnessMapUv:w&&C(D.roughnessMap.channel),anisotropyMapUv:Ct&&C(D.anisotropyMap.channel),clearcoatMapUv:Pt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&C(D.sheenRoughnessMap.channel),specularMapUv:Qt&&C(D.specularMap.channel),specularColorMapUv:ne&&C(D.specularColorMap.channel),specularIntensityMapUv:Ne&&C(D.specularIntensityMap.channel),transmissionMapUv:V&&C(D.transmissionMap.channel),thicknessMapUv:At&&C(D.thicknessMap.channel),alphaMapUv:gt&&C(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(me||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ft.attributes.uv&&(Le||gt),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Ht,skinning:et.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:We,decodeVideoTexture:Le&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:De&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Jt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&D.extensions.multiDraw===!0||ee)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function g(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)R.push(B),R.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(I(R,D),O(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function I(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function O(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const R=A[D.type];let B;if(R){const rt=Ri[R];B=bx.clone(rt.uniforms)}else B=D.uniforms;return B}function Y(D,R){let B;for(let rt=0,et=v.length;rt<et;rt++){const ht=v[rt];if(ht.cacheKey===R){B=ht,++B.usedTimes;break}}return B===void 0&&(B=new Yb(o,R,D,u),v.push(B)),B}function G(D){if(--D.usedTimes===0){const R=v.indexOf(D);v[R]=v[v.length-1],v.pop(),D.destroy()}}function P(D){m.remove(D)}function K(){m.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:U,acquireProgram:Y,releaseProgram:G,releaseShaderCache:P,programs:v,dispose:K}}function Jb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function $b(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function fv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function hv(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(S,y,M,A,C,x){let g=o[e];return g===void 0?(g={id:S.id,object:S,geometry:y,material:M,groupOrder:A,renderOrder:S.renderOrder,z:C,group:x},o[e]=g):(g.id=S.id,g.object=S,g.geometry=y,g.material=M,g.groupOrder=A,g.renderOrder=S.renderOrder,g.z=C,g.group=x),e++,g}function d(S,y,M,A,C,x){const g=h(S,y,M,A,C,x);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(S,y,M,A,C,x){const g=h(S,y,M,A,C,x);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(S,y){i.length>1&&i.sort(S||$b),s.length>1&&s.sort(y||fv),l.length>1&&l.sort(y||fv)}function v(){for(let S=e,y=o.length;S<y;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function tA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new hv,o.set(s,[h])):l>=u.length?(h=new hv,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function eA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Ce};break;case"SpotLight":i={position:new at,direction:new at,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function nA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let iA=0;function aA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sA(o){const e=new eA,i=nA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new at);const l=new at,u=new tn,h=new tn;function d(p){let v=0,S=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,A=0,C=0,x=0,g=0,I=0,O=0,U=0,Y=0,G=0,P=0;p.sort(aA);for(let D=0,R=p.length;D<R;D++){const B=p[D],rt=B.color,et=B.intensity,ht=B.distance,ft=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=rt.r*et,S+=rt.g*et,y+=rt.b*et;else if(B.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(B.sh.coefficients[N],et);P++}else if(B.isDirectionalLight){const N=e.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,k=i.get(B);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,s.directionalShadow[M]=k,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=B.shadow.matrix,I++}s.directional[M]=N,M++}else if(B.isSpotLight){const N=e.get(B);N.position.setFromMatrixPosition(B.matrixWorld),N.color.copy(rt).multiplyScalar(et),N.distance=ht,N.coneCos=Math.cos(B.angle),N.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),N.decay=B.decay,s.spot[C]=N;const j=B.shadow;if(B.map&&(s.spotLightMap[Y]=B.map,Y++,j.updateMatrices(B),B.castShadow&&G++),s.spotLightMatrix[C]=j.matrix,B.castShadow){const k=i.get(B);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,s.spotShadow[C]=k,s.spotShadowMap[C]=ft,U++}C++}else if(B.isRectAreaLight){const N=e.get(B);N.color.copy(rt).multiplyScalar(et),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),s.rectArea[x]=N,x++}else if(B.isPointLight){const N=e.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),N.distance=B.distance,N.decay=B.decay,B.castShadow){const j=B.shadow,k=i.get(B);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,s.pointShadow[A]=k,s.pointShadowMap[A]=ft,s.pointShadowMatrix[A]=B.shadow.matrix,O++}s.point[A]=N,A++}else if(B.isHemisphereLight){const N=e.get(B);N.skyColor.copy(B.color).multiplyScalar(et),N.groundColor.copy(B.groundColor).multiplyScalar(et),s.hemi[g]=N,g++}}x>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=y;const K=s.hash;(K.directionalLength!==M||K.pointLength!==A||K.spotLength!==C||K.rectAreaLength!==x||K.hemiLength!==g||K.numDirectionalShadows!==I||K.numPointShadows!==O||K.numSpotShadows!==U||K.numSpotMaps!==Y||K.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=x,s.point.length=A,s.hemi.length=g,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+Y-G,s.spotLightMap.length=Y,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=P,K.directionalLength=M,K.pointLength=A,K.spotLength=C,K.rectAreaLength=x,K.hemiLength=g,K.numDirectionalShadows=I,K.numPointShadows=O,K.numSpotShadows=U,K.numSpotMaps=Y,K.numLightProbes=P,s.version=iA++)}function m(p,v){let S=0,y=0,M=0,A=0,C=0;const x=v.matrixWorldInverse;for(let g=0,I=p.length;g<I;g++){const O=p[g];if(O.isDirectionalLight){const U=s.directional[S];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),S++}else if(O.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),M++}else if(O.isRectAreaLight){const U=s.rectArea[A];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),h.identity(),u.copy(O.matrixWorld),u.premultiply(x),h.extractRotation(u),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(O.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),y++}else if(O.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(x),C++}}}return{setup:d,setupView:m,state:s}}function dv(o){const e=new sA(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function rA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new dv(o),e.set(l,[d])):u>=h.length?(d=new dv(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
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
}`;function cA(o,e,i){let s=new Vv;const l=new ce,u=new ce,h=new $e,d=new Ox({depthPacking:qy}),m=new Px,p={},v=i.maxTextureSize,S={[Xa]:Hn,[Hn]:Xa,[ea]:ea},y=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:oA,fragmentShader:lA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new ca;A.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new aa(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gv;let g=this.type;this.render=function(G,P,K){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(Ga),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const et=g!==ta&&this.type===ta,ht=g===ta&&this.type!==ta;for(let ft=0,N=G.length;ft<N;ft++){const j=G[ft],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const St=k.getFrameExtents();if(l.multiply(St),u.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/St.x),l.x=u.x*St.x,k.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/St.y),l.y=u.y*St.y,k.mapSize.y=u.y)),k.map===null||et===!0||ht===!0){const L=this.type!==ta?{minFilter:yi,magFilter:yi}:{};k.map!==null&&k.map.dispose(),k.map=new Es(l.x,l.y,L),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const Tt=k.getViewportCount();for(let L=0;L<Tt;L++){const nt=k.getViewport(L);h.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),rt.viewport(h),k.updateMatrices(j,L),s=k.getFrustum(),U(P,K,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===ta&&I(k,K),k.needsUpdate=!1}g=this.type,x.needsUpdate=!1,o.setRenderTarget(D,R,B)};function I(G,P){const K=e.update(C);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Es(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(P,null,K,y,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(P,null,K,M,C,null)}function O(G,P,K,D){let R=null;const B=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)R=B;else if(R=K.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const rt=R.uuid,et=P.uuid;let ht=p[rt];ht===void 0&&(ht={},p[rt]=ht);let ft=ht[et];ft===void 0&&(ft=R.clone(),ht[et]=ft,P.addEventListener("dispose",Y)),R=ft}if(R.visible=P.visible,R.wireframe=P.wireframe,D===ta?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:S[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const rt=o.properties.get(R);rt.light=K}return R}function U(G,P,K,D,R){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===ta)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const et=e.update(G),ht=G.material;if(Array.isArray(ht)){const ft=et.groups;for(let N=0,j=ft.length;N<j;N++){const k=ft[N],St=ht[k.materialIndex];if(St&&St.visible){const Tt=O(G,St,D,R);G.onBeforeShadow(o,G,P,K,et,Tt,k),o.renderBufferDirect(K,null,et,Tt,G,k),G.onAfterShadow(o,G,P,K,et,Tt,k)}}}else if(ht.visible){const ft=O(G,ht,D,R);G.onBeforeShadow(o,G,P,K,et,ft,null),o.renderBufferDirect(K,null,et,ft,G,null),G.onAfterShadow(o,G,P,K,et,ft,null)}}const rt=G.children;for(let et=0,ht=rt.length;et<ht;et++)U(rt[et],P,K,D,R)}function Y(G){G.target.removeEventListener("dispose",Y);for(const K in p){const D=p[K],R=G.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const uA={[Dh]:wh,[Uh]:Oh,[Lh]:Ph,[Rr]:Nh,[wh]:Dh,[Oh]:Uh,[Ph]:Lh,[Nh]:Rr};function fA(o,e){function i(){let V=!1;const At=new $e;let lt=null;const gt=new $e(0,0,0,0);return{setMask:function(Rt){lt!==Rt&&!V&&(o.colorMask(Rt,Rt,Rt,Rt),lt=Rt)},setLocked:function(Rt){V=Rt},setClear:function(Rt,Dt,Jt,We,ln){ln===!0&&(Rt*=We,Dt*=We,Jt*=We),At.set(Rt,Dt,Jt,We),gt.equals(At)===!1&&(o.clearColor(Rt,Dt,Jt,We),gt.copy(At))},reset:function(){V=!1,lt=null,gt.set(-1,0,0,0)}}}function s(){let V=!1,At=!1,lt=null,gt=null,Rt=null;return{setReversed:function(Dt){if(At!==Dt){const Jt=e.get("EXT_clip_control");At?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const We=Rt;Rt=null,this.setClear(We)}At=Dt},getReversed:function(){return At},setTest:function(Dt){Dt?yt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!V&&(o.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(At&&(Dt=uA[Dt]),gt!==Dt){switch(Dt){case Dh:o.depthFunc(o.NEVER);break;case wh:o.depthFunc(o.ALWAYS);break;case Uh:o.depthFunc(o.LESS);break;case Rr:o.depthFunc(o.LEQUAL);break;case Lh:o.depthFunc(o.EQUAL);break;case Nh:o.depthFunc(o.GEQUAL);break;case Oh:o.depthFunc(o.GREATER);break;case Ph:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Dt}},setLocked:function(Dt){V=Dt},setClear:function(Dt){Rt!==Dt&&(At&&(Dt=1-Dt),o.clearDepth(Dt),Rt=Dt)},reset:function(){V=!1,lt=null,gt=null,Rt=null,At=!1}}}function l(){let V=!1,At=null,lt=null,gt=null,Rt=null,Dt=null,Jt=null,We=null,ln=null;return{setTest:function(xe){V||(xe?yt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(xe){At!==xe&&!V&&(o.stencilMask(xe),At=xe)},setFunc:function(xe,gn,ci){(lt!==xe||gt!==gn||Rt!==ci)&&(o.stencilFunc(xe,gn,ci),lt=xe,gt=gn,Rt=ci)},setOp:function(xe,gn,ci){(Dt!==xe||Jt!==gn||We!==ci)&&(o.stencilOp(xe,gn,ci),Dt=xe,Jt=gn,We=ci)},setLocked:function(xe){V=xe},setClear:function(xe){ln!==xe&&(o.clearStencil(xe),ln=xe)},reset:function(){V=!1,At=null,lt=null,gt=null,Rt=null,Dt=null,Jt=null,We=null,ln=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},S={},y=new WeakMap,M=[],A=null,C=!1,x=null,g=null,I=null,O=null,U=null,Y=null,G=null,P=new Ce(0,0,0),K=0,D=!1,R=null,B=null,rt=null,et=null,ht=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,j=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=j>=2);let St=null,Tt={};const L=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),xt=new $e().fromArray(L),Z=new $e().fromArray(nt);function ct(V,At,lt,gt){const Rt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(V,Dt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<lt;Jt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(At+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return Dt}const Et={};Et[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Et[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Et[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),yt(o.DEPTH_TEST),h.setFunc(Rr),le(!1),me(_g),yt(o.CULL_FACE),F(Ga);function yt(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function Ht(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function It(V,At){return S[V]!==At?(o.bindFramebuffer(V,At),S[V]=At,V===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=At),V===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ee(V,At){let lt=M,gt=!1;if(V){lt=y.get(At),lt===void 0&&(lt=[],y.set(At,lt));const Rt=V.textures;if(lt.length!==Rt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Jt=Rt.length;Dt<Jt;Dt++)lt[Dt]=o.COLOR_ATTACHMENT0+Dt;lt.length=Rt.length,gt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,gt=!0);gt&&o.drawBuffers(lt)}function Le(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const ue={[vs]:o.FUNC_ADD,[vy]:o.FUNC_SUBTRACT,[Sy]:o.FUNC_REVERSE_SUBTRACT};ue[yy]=o.MIN,ue[xy]=o.MAX;const ke={[My]:o.ZERO,[Ey]:o.ONE,[Ty]:o.SRC_COLOR,[Rh]:o.SRC_ALPHA,[wy]:o.SRC_ALPHA_SATURATE,[Cy]:o.DST_COLOR,[Ay]:o.DST_ALPHA,[by]:o.ONE_MINUS_SRC_COLOR,[Ch]:o.ONE_MINUS_SRC_ALPHA,[Dy]:o.ONE_MINUS_DST_COLOR,[Ry]:o.ONE_MINUS_DST_ALPHA,[Uy]:o.CONSTANT_COLOR,[Ly]:o.ONE_MINUS_CONSTANT_COLOR,[Ny]:o.CONSTANT_ALPHA,[Oy]:o.ONE_MINUS_CONSTANT_ALPHA};function F(V,At,lt,gt,Rt,Dt,Jt,We,ln,xe){if(V===Ga){C===!0&&(Ht(o.BLEND),C=!1);return}if(C===!1&&(yt(o.BLEND),C=!0),V!==gy){if(V!==x||xe!==D){if((g!==vs||U!==vs)&&(o.blendEquation(o.FUNC_ADD),g=vs,U=vs),xe)switch(V){case Tr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ah:o.blendFunc(o.ONE,o.ONE);break;case gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Tr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ah:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,O=null,Y=null,G=null,P.set(0,0,0),K=0,x=V,D=xe}return}Rt=Rt||At,Dt=Dt||lt,Jt=Jt||gt,(At!==g||Rt!==U)&&(o.blendEquationSeparate(ue[At],ue[Rt]),g=At,U=Rt),(lt!==I||gt!==O||Dt!==Y||Jt!==G)&&(o.blendFuncSeparate(ke[lt],ke[gt],ke[Dt],ke[Jt]),I=lt,O=gt,Y=Dt,G=Jt),(We.equals(P)===!1||ln!==K)&&(o.blendColor(We.r,We.g,We.b,ln),P.copy(We),K=ln),x=V,D=!1}function En(V,At){V.side===ea?Ht(o.CULL_FACE):yt(o.CULL_FACE);let lt=V.side===Hn;At&&(lt=!lt),le(lt),V.blending===Tr&&V.transparent===!1?F(Ga):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const gt=V.stencilWrite;d.setTest(gt),gt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),De(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function me(V){V!==py?(yt(o.CULL_FACE),V!==B&&(V===_g?o.cullFace(o.BACK):V===my?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),B=V}function Wt(V){V!==rt&&(N&&o.lineWidth(V),rt=V)}function De(V,At,lt){V?(yt(o.POLYGON_OFFSET_FILL),(et!==At||ht!==lt)&&(o.polygonOffset(At,lt),et=At,ht=lt)):Ht(o.POLYGON_OFFSET_FILL)}function kt(V){V?yt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function w(V){V===void 0&&(V=o.TEXTURE0+ft-1),St!==V&&(o.activeTexture(V),St=V)}function T(V,At,lt){lt===void 0&&(St===null?lt=o.TEXTURE0+ft-1:lt=St);let gt=Tt[lt];gt===void 0&&(gt={type:void 0,texture:void 0},Tt[lt]=gt),(gt.type!==V||gt.texture!==At)&&(St!==lt&&(o.activeTexture(lt),St=lt),o.bindTexture(V,At||Et[V]),gt.type=V,gt.texture=At)}function tt(){const V=Tt[St];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(V){xt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),xt.copy(V))}function Lt(V){Z.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function Qt(V,At){let lt=p.get(At);lt===void 0&&(lt=new WeakMap,p.set(At,lt));let gt=lt.get(V);gt===void 0&&(gt=o.getUniformBlockIndex(At,V.name),lt.set(V,gt))}function ne(V,At){const gt=p.get(At).get(V);m.get(At)!==gt&&(o.uniformBlockBinding(At,gt,V.__bindingPointIndex),m.set(At,gt))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},St=null,Tt={},S={},y=new WeakMap,M=[],A=null,C=!1,x=null,g=null,I=null,O=null,U=null,Y=null,G=null,P=new Ce(0,0,0),K=0,D=!1,R=null,B=null,rt=null,et=null,ht=null,xt.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:yt,disable:Ht,bindFramebuffer:It,drawBuffers:ee,useProgram:Le,setBlending:F,setMaterial:En,setFlipSided:le,setCullFace:me,setLineWidth:Wt,setPolygonOffset:De,setScissorTest:kt,activeTexture:w,bindTexture:T,unbindTexture:tt,compressedTexImage2D:dt,compressedTexImage3D:Mt,texImage2D:zt,texImage3D:qt,updateUBOMapping:Qt,uniformBlockBinding:ne,texStorage2D:_e,texStorage3D:bt,texSubImage2D:mt,texSubImage3D:Vt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Pt,scissor:Xt,viewport:Lt,reset:Ne}}function hA(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,v=new WeakMap;let S;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,T){return M?new OffscreenCanvas(w,T):Lc("canvas")}function C(w,T,tt){let dt=1;const Mt=kt(w);if((Mt.width>tt||Mt.height>tt)&&(dt=tt/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const mt=Math.floor(dt*Mt.width),Vt=Math.floor(dt*Mt.height);S===void 0&&(S=A(mt,Vt));const Ct=T?A(mt,Vt):S;return Ct.width=mt,Ct.height=Vt,Ct.getContext("2d").drawImage(w,0,0,mt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+Vt+")."),Ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),w;return w}function x(w){return w.generateMipmaps}function g(w){o.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(w,T,tt,dt,Mt=!1){if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let mt=T;if(T===o.RED&&(tt===o.FLOAT&&(mt=o.R32F),tt===o.HALF_FLOAT&&(mt=o.R16F),tt===o.UNSIGNED_BYTE&&(mt=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(mt=o.R8UI),tt===o.UNSIGNED_SHORT&&(mt=o.R16UI),tt===o.UNSIGNED_INT&&(mt=o.R32UI),tt===o.BYTE&&(mt=o.R8I),tt===o.SHORT&&(mt=o.R16I),tt===o.INT&&(mt=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(mt=o.RG32F),tt===o.HALF_FLOAT&&(mt=o.RG16F),tt===o.UNSIGNED_BYTE&&(mt=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(mt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(mt=o.RG16UI),tt===o.UNSIGNED_INT&&(mt=o.RG32UI),tt===o.BYTE&&(mt=o.RG8I),tt===o.SHORT&&(mt=o.RG16I),tt===o.INT&&(mt=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),tt===o.UNSIGNED_INT&&(mt=o.RGB32UI),tt===o.BYTE&&(mt=o.RGB8I),tt===o.SHORT&&(mt=o.RGB16I),tt===o.INT&&(mt=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(mt=o.RGBA32UI),tt===o.BYTE&&(mt=o.RGBA8I),tt===o.SHORT&&(mt=o.RGBA16I),tt===o.INT&&(mt=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),T===o.RGBA){const Vt=Mt?wc:Ae.getTransfer(dt);tt===o.FLOAT&&(mt=o.RGBA32F),tt===o.HALF_FLOAT&&(mt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(mt=Vt===Be?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function U(w,T){let tt;return w?T===null||T===Ms||T===wr?tt=o.DEPTH24_STENCIL8:T===na?tt=o.DEPTH32F_STENCIL8:T===zo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===wr?tt=o.DEPTH_COMPONENT24:T===na?tt=o.DEPTH_COMPONENT32F:T===zo&&(tt=o.DEPTH_COMPONENT16),tt}function Y(w,T){return x(w)===!0||w.isFramebufferTexture&&w.minFilter!==yi&&w.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function G(w){const T=w.target;T.removeEventListener("dispose",G),K(T),T.isVideoTexture&&v.delete(T)}function P(w){const T=w.target;T.removeEventListener("dispose",P),R(T)}function K(w){const T=s.get(w);if(T.__webglInit===void 0)return;const tt=w.source,dt=y.get(tt);if(dt){const Mt=dt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(w),Object.keys(dt).length===0&&y.delete(tt)}s.remove(w)}function D(w){const T=s.get(w);o.deleteTexture(T.__webglTexture);const tt=w.source,dt=y.get(tt);delete dt[T.__cacheKey],h.memory.textures--}function R(w){const T=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let Mt=0;Mt<T.__webglFramebuffer[dt].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[dt][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[dt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=w.textures;for(let dt=0,Mt=tt.length;dt<Mt;dt++){const mt=s.get(tt[dt]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),s.remove(tt[dt])}s.remove(w)}let B=0;function rt(){B=0}function et(){const w=B;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),B+=1,w}function ht(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function ft(w,T){const tt=s.get(w);if(w.isVideoTexture&&Wt(w),w.isRenderTargetTexture===!1&&w.version>0&&tt.__version!==w.version){const dt=w.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(tt,w,T);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function N(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){Z(tt,w,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function j(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){Z(tt,w,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function k(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){ct(tt,w,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const St={[Ih]:o.REPEAT,[ys]:o.CLAMP_TO_EDGE,[Fh]:o.MIRRORED_REPEAT},Tt={[yi]:o.NEAREST,[ky]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[Kf]:o.LINEAR_MIPMAP_NEAREST,[xs]:o.LINEAR_MIPMAP_LINEAR},L={[Zy]:o.NEVER,[ex]:o.ALWAYS,[Ky]:o.LESS,[wv]:o.LEQUAL,[Qy]:o.EQUAL,[tx]:o.GEQUAL,[Jy]:o.GREATER,[$y]:o.NOTEQUAL};function nt(w,T){if(T.type===na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===Kf||T.magFilter===Jl||T.magFilter===xs||T.minFilter===Ci||T.minFilter===Kf||T.minFilter===Jl||T.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,St[T.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,Tt[T.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,Tt[T.minFilter]),T.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==Jl&&T.minFilter!==xs||T.type===na&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function xt(w,T){let tt=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",G));const dt=T.source;let Mt=y.get(dt);Mt===void 0&&(Mt={},y.set(dt,Mt));const mt=ht(T);if(mt!==w.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),Mt[mt].usedTimes++;const Vt=Mt[w.__cacheKey];Vt!==void 0&&(Mt[w.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(T)),w.__cacheKey=mt,w.__webglTexture=Mt[mt].texture}return tt}function Z(w,T,tt){let dt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=o.TEXTURE_3D);const Mt=xt(w,T),mt=T.source;i.bindTexture(dt,w.__webglTexture,o.TEXTURE0+tt);const Vt=s.get(mt);if(mt.version!==Vt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+tt);const Ct=Ae.getPrimaries(Ae.workingColorSpace),Pt=T.colorSpace===Ha?null:Ae.getPrimaries(T.colorSpace),_e=T.colorSpace===Ha||Ct===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=C(T.image,!1,l.maxTextureSize);bt=De(T,bt);const zt=u.convert(T.format,T.colorSpace),qt=u.convert(T.type);let Xt=O(T.internalFormat,zt,qt,T.colorSpace,T.isVideoTexture);nt(dt,T);let Lt;const Qt=T.mipmaps,ne=T.isVideoTexture!==!0,Ne=Vt.__version===void 0||Mt===!0,V=mt.dataReady,At=Y(T,bt);if(T.isDepthTexture)Xt=U(T.format===Ur,T.type),Ne&&(ne?i.texStorage2D(o.TEXTURE_2D,1,Xt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,bt.width,bt.height,0,zt,qt,null));else if(T.isDataTexture)if(Qt.length>0){ne&&Ne&&i.texStorage2D(o.TEXTURE_2D,At,Xt,Qt[0].width,Qt[0].height);for(let lt=0,gt=Qt.length;lt<gt;lt++)Lt=Qt[lt],ne?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Lt.width,Lt.height,zt,qt,Lt.data):i.texImage2D(o.TEXTURE_2D,lt,Xt,Lt.width,Lt.height,0,zt,qt,Lt.data);T.generateMipmaps=!1}else ne?(Ne&&i.texStorage2D(o.TEXTURE_2D,At,Xt,bt.width,bt.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,zt,qt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Xt,bt.width,bt.height,0,zt,qt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ne&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Xt,Qt[0].width,Qt[0].height,bt.depth);for(let lt=0,gt=Qt.length;lt<gt;lt++)if(Lt=Qt[lt],T.format!==Si)if(zt!==null)if(ne){if(V)if(T.layerUpdates.size>0){const Rt=Xg(Lt.width,Lt.height,T.format,T.type);for(const Dt of T.layerUpdates){const Jt=Lt.data.subarray(Dt*Rt/Lt.data.BYTES_PER_ELEMENT,(Dt+1)*Rt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Dt,Lt.width,Lt.height,1,zt,Jt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Lt.width,Lt.height,bt.depth,zt,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Xt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Lt.width,Lt.height,bt.depth,zt,qt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,Xt,Lt.width,Lt.height,bt.depth,0,zt,qt,Lt.data)}else{ne&&Ne&&i.texStorage2D(o.TEXTURE_2D,At,Xt,Qt[0].width,Qt[0].height);for(let lt=0,gt=Qt.length;lt<gt;lt++)Lt=Qt[lt],T.format!==Si?zt!==null?ne?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Lt.width,Lt.height,zt,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,Xt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Lt.width,Lt.height,zt,qt,Lt.data):i.texImage2D(o.TEXTURE_2D,lt,Xt,Lt.width,Lt.height,0,zt,qt,Lt.data)}else if(T.isDataArrayTexture)if(ne){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Xt,bt.width,bt.height,bt.depth),V)if(T.layerUpdates.size>0){const lt=Xg(bt.width,bt.height,T.format,T.type);for(const gt of T.layerUpdates){const Rt=bt.data.subarray(gt*lt/bt.data.BYTES_PER_ELEMENT,(gt+1)*lt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,zt,qt,Rt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,zt,qt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,bt.width,bt.height,bt.depth,0,zt,qt,bt.data);else if(T.isData3DTexture)ne?(Ne&&i.texStorage3D(o.TEXTURE_3D,At,Xt,bt.width,bt.height,bt.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,zt,qt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,bt.width,bt.height,bt.depth,0,zt,qt,bt.data);else if(T.isFramebufferTexture){if(Ne)if(ne)i.texStorage2D(o.TEXTURE_2D,At,Xt,bt.width,bt.height);else{let lt=bt.width,gt=bt.height;for(let Rt=0;Rt<At;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Xt,lt,gt,0,zt,qt,null),lt>>=1,gt>>=1}}else if(Qt.length>0){if(ne&&Ne){const lt=kt(Qt[0]);i.texStorage2D(o.TEXTURE_2D,At,Xt,lt.width,lt.height)}for(let lt=0,gt=Qt.length;lt<gt;lt++)Lt=Qt[lt],ne?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,zt,qt,Lt):i.texImage2D(o.TEXTURE_2D,lt,Xt,zt,qt,Lt);T.generateMipmaps=!1}else if(ne){if(Ne){const lt=kt(bt);i.texStorage2D(o.TEXTURE_2D,At,Xt,lt.width,lt.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,qt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Xt,zt,qt,bt);x(T)&&g(dt),Vt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function ct(w,T,tt){if(T.image.length!==6)return;const dt=xt(w,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+tt);const mt=s.get(Mt);if(Mt.version!==mt.__version||dt===!0){i.activeTexture(o.TEXTURE0+tt);const Vt=Ae.getPrimaries(Ae.workingColorSpace),Ct=T.colorSpace===Ha?null:Ae.getPrimaries(T.colorSpace),Pt=T.colorSpace===Ha||Vt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let gt=0;gt<6;gt++)!_e&&!bt?zt[gt]=C(T.image[gt],!0,l.maxCubemapSize):zt[gt]=bt?T.image[gt].image:T.image[gt],zt[gt]=De(T,zt[gt]);const qt=zt[0],Xt=u.convert(T.format,T.colorSpace),Lt=u.convert(T.type),Qt=O(T.internalFormat,Xt,Lt,T.colorSpace),ne=T.isVideoTexture!==!0,Ne=mt.__version===void 0||dt===!0,V=Mt.dataReady;let At=Y(T,qt);nt(o.TEXTURE_CUBE_MAP,T);let lt;if(_e){ne&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Qt,qt.width,qt.height);for(let gt=0;gt<6;gt++){lt=zt[gt].mipmaps;for(let Rt=0;Rt<lt.length;Rt++){const Dt=lt[Rt];T.format!==Si?Xt!==null?ne?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,Dt.width,Dt.height,Xt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,0,0,Dt.width,Dt.height,Xt,Lt,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt,Qt,Dt.width,Dt.height,0,Xt,Lt,Dt.data)}}}else{if(lt=T.mipmaps,ne&&Ne){lt.length>0&&At++;const gt=kt(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Qt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){ne?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,zt[gt].width,zt[gt].height,Xt,Lt,zt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Qt,zt[gt].width,zt[gt].height,0,Xt,Lt,zt[gt].data);for(let Rt=0;Rt<lt.length;Rt++){const Jt=lt[Rt].image[gt].image;ne?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,Jt.width,Jt.height,Xt,Lt,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Qt,Jt.width,Jt.height,0,Xt,Lt,Jt.data)}}else{ne?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Xt,Lt,zt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Qt,Xt,Lt,zt[gt]);for(let Rt=0;Rt<lt.length;Rt++){const Dt=lt[Rt];ne?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,0,0,Xt,Lt,Dt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt+1,Qt,Xt,Lt,Dt.image[gt])}}}x(T)&&g(o.TEXTURE_CUBE_MAP),mt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function Et(w,T,tt,dt,Mt,mt){const Vt=u.convert(tt.format,tt.colorSpace),Ct=u.convert(tt.type),Pt=O(tt.internalFormat,Vt,Ct,tt.colorSpace),_e=s.get(T),bt=s.get(tt);if(bt.__renderTarget=T,!_e.__hasExternalTextures){const zt=Math.max(1,T.width>>mt),qt=Math.max(1,T.height>>mt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,mt,Pt,zt,qt,T.depth,0,Vt,Ct,null):i.texImage2D(Mt,mt,Pt,zt,qt,0,Vt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Mt,bt.__webglTexture,0,le(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Mt,bt.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(w,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,w),T.depthBuffer){const dt=T.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,mt=U(T.stencilBuffer,Mt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=le(T);me(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,mt,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,w)}else{const dt=T.textures;for(let Mt=0;Mt<dt.length;Mt++){const mt=dt[Mt],Vt=u.convert(mt.format,mt.colorSpace),Ct=u.convert(mt.type),Pt=O(mt.internalFormat,Vt,Ct,mt.colorSpace),_e=le(T);tt&&me(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,Pt,T.width,T.height):me(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,Pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const Mt=dt.__webglTexture,mt=le(T);if(T.depthTexture.format===br)me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Ur)me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function It(w){const T=s.get(w),tt=w.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==w.depthTexture){const dt=w.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=dt}if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ht(T.__webglFramebuffer,w)}else if(tt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=o.createRenderbuffer(),yt(T.__webglDepthbuffer[dt],w,!1);else{const Mt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),yt(T.__webglDepthbuffer,w,!1);else{const dt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(w,T,tt){const dt=s.get(w);T!==void 0&&Et(dt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&It(w)}function Le(w){const T=w.texture,tt=s.get(w),dt=s.get(T);w.addEventListener("dispose",P);const Mt=w.textures,mt=w.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=T.version,h.memory.textures++),mt){tt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ct]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)tt.__webglFramebuffer[Ct][Pt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Ct=0,Pt=Mt.length;Ct<Pt;Ct++){const _e=s.get(Mt[Ct]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&me(w)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Mt.length;Ct++){const Pt=Mt[Ct];tt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct]);const _e=u.convert(Pt.format,Pt.colorSpace),bt=u.convert(Pt.type),zt=O(Pt.internalFormat,_e,bt,Pt.colorSpace,w.isXRRenderTarget===!0),qt=le(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,zt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(tt.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)Et(tt.__webglFramebuffer[Ct][Pt],w,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Pt);else Et(tt.__webglFramebuffer[Ct],w,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);x(T)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ct=0,Pt=Mt.length;Ct<Pt;Ct++){const _e=Mt[Ct],bt=s.get(_e);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),nt(o.TEXTURE_2D,_e),Et(tt.__webglFramebuffer,w,_e,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,0),x(_e)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ct=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),nt(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)Et(tt.__webglFramebuffer[Pt],w,T,o.COLOR_ATTACHMENT0,Ct,Pt);else Et(tt.__webglFramebuffer,w,T,o.COLOR_ATTACHMENT0,Ct,0);x(T)&&g(Ct),i.unbindTexture()}w.depthBuffer&&It(w)}function ue(w){const T=w.textures;for(let tt=0,dt=T.length;tt<dt;tt++){const Mt=T[tt];if(x(Mt)){const mt=I(w),Vt=s.get(Mt).__webglTexture;i.bindTexture(mt,Vt),g(mt),i.unbindTexture()}}}const ke=[],F=[];function En(w){if(w.samples>0){if(me(w)===!1){const T=w.textures,tt=w.width,dt=w.height;let Mt=o.COLOR_BUFFER_BIT;const mt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=s.get(w),Ct=T.length>1;if(Ct)for(let Pt=0;Pt<T.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Pt]);const _e=s.get(T[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_e,0)}o.blitFramebuffer(0,0,tt,dt,0,0,tt,dt,Mt,o.NEAREST),m===!0&&(ke.length=0,F.length=0,ke.push(o.COLOR_ATTACHMENT0+Pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ke.push(mt),F.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Pt=0;Pt<T.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Pt]);const _e=s.get(T[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,_e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const T=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function le(w){return Math.min(l.maxSamples,w.samples)}function me(w){const T=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(w){const T=h.render.frame;v.get(w)!==T&&(v.set(w,T),w.update())}function De(w,T){const tt=w.colorSpace,dt=w.format,Mt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||tt!==Lr&&tt!==Ha&&(Ae.getTransfer(tt)===Be?(dt!==Si||Mt!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function kt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=rt,this.setTexture2D=ft,this.setTexture2DArray=N,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=ee,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=me}function dA(o,e){function i(s,l=Ha){let u;const h=Ae.getTransfer(l);if(s===oa)return o.UNSIGNED_BYTE;if(s===vd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Sd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Mv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===yv)return o.BYTE;if(s===xv)return o.SHORT;if(s===zo)return o.UNSIGNED_SHORT;if(s===gd)return o.INT;if(s===Ms)return o.UNSIGNED_INT;if(s===na)return o.FLOAT;if(s===Bo)return o.HALF_FLOAT;if(s===Ev)return o.ALPHA;if(s===Tv)return o.RGB;if(s===Si)return o.RGBA;if(s===bv)return o.LUMINANCE;if(s===Av)return o.LUMINANCE_ALPHA;if(s===br)return o.DEPTH_COMPONENT;if(s===Ur)return o.DEPTH_STENCIL;if(s===Rv)return o.RED;if(s===yd)return o.RED_INTEGER;if(s===Cv)return o.RG;if(s===xd)return o.RG_INTEGER;if(s===Md)return o.RGBA_INTEGER;if(s===Ec||s===Tc||s===bc||s===Ac)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Ec)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Ec)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===Xh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Hh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===Wh||s===qh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===kh||s===Wh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===id)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rc||s===od||s===ld)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Rc)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===od)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ld)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dv||s===cd||s===ud||s===fd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Rc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===cd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ud)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const pA={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const x=i.getJointPose(C,s),g=this._getHandJoint(p,C);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],y=v.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&y>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(pA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new vc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_A=`
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

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Gn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ka({vertexShader:mA,fragmentShader:_A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new aa(new Pc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends bs{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,S=null,y=null,M=null,A=null;const C=new gA,x=i.getContextAttributes();let g=null,I=null;const O=[],U=[],Y=new ce;let G=null;const P=new li;P.viewport=new $e;const K=new li;K.viewport=new $e;const D=[P,K],R=new Bx;let B=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=O[Z];return ct===void 0&&(ct=new Th,O[Z]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=O[Z];return ct===void 0&&(ct=new Th,O[Z]=ct),ct.getGripSpace()},this.getHand=function(Z){let ct=O[Z];return ct===void 0&&(ct=new Th,O[Z]=ct),ct.getHandSpace()};function et(Z){const ct=U.indexOf(Z.inputSource);if(ct===-1)return;const Et=O[ct];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,p||h),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ht(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",ft);for(let Z=0;Z<O.length;Z++){const ct=U[Z];ct!==null&&(U[Z]=null,O[Z].disconnect(ct))}B=null,rt=null,C.reset(),e.setRenderTarget(g),M=null,y=null,S=null,l=null,I=null,xt.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(Y.width,Y.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",ft),x.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(Y),l.renderState.layers===void 0){const ct={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Es(M.framebufferWidth,M.framebufferHeight,{format:Si,type:oa,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ct=null,Et=null,yt=null;x.depth&&(yt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=x.stencil?Ur:br,Et=x.stencil?wr:Ms);const Ht={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:u};S=new XRWebGLBinding(l,i),y=S.createProjectionLayer(Ht),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new Es(y.textureWidth,y.textureHeight,{format:Si,type:oa,depthTexture:new kv(y.textureWidth,y.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ft(Z){for(let ct=0;ct<Z.removed.length;ct++){const Et=Z.removed[ct],yt=U.indexOf(Et);yt>=0&&(U[yt]=null,O[yt].disconnect(Et))}for(let ct=0;ct<Z.added.length;ct++){const Et=Z.added[ct];let yt=U.indexOf(Et);if(yt===-1){for(let It=0;It<O.length;It++)if(It>=U.length){U.push(Et),yt=It;break}else if(U[It]===null){U[It]=Et,yt=It;break}if(yt===-1)break}const Ht=O[yt];Ht&&Ht.connect(Et)}}const N=new at,j=new at;function k(Z,ct,Et){N.setFromMatrixPosition(ct.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const yt=N.distanceTo(j),Ht=ct.projectionMatrix.elements,It=Et.projectionMatrix.elements,ee=Ht[14]/(Ht[10]-1),Le=Ht[14]/(Ht[10]+1),ue=(Ht[9]+1)/Ht[5],ke=(Ht[9]-1)/Ht[5],F=(Ht[8]-1)/Ht[0],En=(It[8]+1)/It[0],le=ee*F,me=ee*En,Wt=yt/(-F+En),De=Wt*-F;if(ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(De),Z.translateZ(Wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ht[10]===-1)Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const kt=ee+Wt,w=Le+Wt,T=le-De,tt=me+(yt-De),dt=ue*Le/w*kt,Mt=ke*Le/w*kt;Z.projectionMatrix.makePerspective(T,tt,dt,Mt,kt,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function St(Z,ct){ct===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ct=Z.near,Et=Z.far;C.texture!==null&&(C.depthNear>0&&(ct=C.depthNear),C.depthFar>0&&(Et=C.depthFar)),R.near=K.near=P.near=ct,R.far=K.far=P.far=Et,(B!==R.near||rt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,rt=R.far),P.layers.mask=Z.layers.mask|2,K.layers.mask=Z.layers.mask|4,R.layers.mask=P.layers.mask|K.layers.mask;const yt=Z.parent,Ht=R.cameras;St(R,yt);for(let It=0;It<Ht.length;It++)St(Ht[It],yt);Ht.length===2?k(R,P,K):R.projectionMatrix.copy(P.projectionMatrix),Tt(Z,R,yt)};function Tt(Z,ct,Et){Et===null?Z.matrix.copy(ct.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=hd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(Z){m=Z,y!==null&&(y.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let L=null;function nt(Z,ct){if(v=ct.getViewerPose(p||h),A=ct,v!==null){const Et=v.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let yt=!1;Et.length!==R.cameras.length&&(R.cameras.length=0,yt=!0);for(let It=0;It<Et.length;It++){const ee=Et[It];let Le=null;if(M!==null)Le=M.getViewport(ee);else{const ke=S.getViewSubImage(y,ee);Le=ke.viewport,It===0&&(e.setRenderTargetTextures(I,ke.colorTexture,y.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(I))}let ue=D[It];ue===void 0&&(ue=new li,ue.layers.enable(It),ue.viewport=new $e,D[It]=ue),ue.matrix.fromArray(ee.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ee.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Le.x,Le.y,Le.width,Le.height),It===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),yt===!0&&R.cameras.push(ue)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const It=S.getDepthInformation(Et[0]);It&&It.isValid&&It.texture&&C.init(e,It,l.renderState)}}for(let Et=0;Et<O.length;Et++){const yt=U[Et],Ht=O[Et];yt!==null&&Ht!==void 0&&Ht.update(yt,ct,p||h)}L&&L(Z,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),A=null}const xt=new Wv;xt.setAnimationLoop(nt),this.setAnimationLoop=function(Z){L=Z},this.dispose=function(){}}}const _s=new la,SA=new tn;function yA(o,e){function i(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function s(x,g){g.color.getRGB(x.fogColor.value,Fv(o)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,I,O,U){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(x,g):g.isMeshToonMaterial?(u(x,g),S(x,g)):g.isMeshPhongMaterial?(u(x,g),v(x,g)):g.isMeshStandardMaterial?(u(x,g),y(x,g),g.isMeshPhysicalMaterial&&M(x,g,U)):g.isMeshMatcapMaterial?(u(x,g),A(x,g)):g.isMeshDepthMaterial?u(x,g):g.isMeshDistanceMaterial?(u(x,g),C(x,g)):g.isMeshNormalMaterial?u(x,g):g.isLineBasicMaterial?(h(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?m(x,g,I,O):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,i(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Hn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,i(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Hn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,i(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,i(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const I=e.get(g),O=I.envMap,U=I.envMapRotation;O&&(x.envMap.value=O,_s.copy(U),_s.x*=-1,_s.y*=-1,_s.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),x.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(_s)),x.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,x.aoMapTransform))}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function m(x,g,I,O){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*I,x.scale.value=O*.5,g.map&&(x.map.value=g.map,i(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function v(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function S(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function y(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function M(x,g,I){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,g){g.matcap&&(x.matcap.value=g.matcap)}function C(x,g){const I=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function xA(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const U=O.program;s.uniformBlockBinding(I,U)}function p(I,O){let U=l[I.id];U===void 0&&(A(I),U=v(I),l[I.id]=U,I.addEventListener("dispose",x));const Y=O.program;s.updateUBOMapping(I,Y);const G=e.render.frame;u[I.id]!==G&&(y(I),u[I.id]=G)}function v(I){const O=S();I.__bindingPointIndex=O;const U=o.createBuffer(),Y=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,Y,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function S(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const O=l[I.id],U=I.uniforms,Y=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,P=U.length;G<P;G++){const K=Array.isArray(U[G])?U[G]:[U[G]];for(let D=0,R=K.length;D<R;D++){const B=K[D];if(M(B,G,D,Y)===!0){const rt=B.__offset,et=Array.isArray(B.value)?B.value:[B.value];let ht=0;for(let ft=0;ft<et.length;ft++){const N=et[ft],j=C(N);typeof N=="number"||typeof N=="boolean"?(B.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,rt+ht,B.__data)):N.isMatrix3?(B.__data[0]=N.elements[0],B.__data[1]=N.elements[1],B.__data[2]=N.elements[2],B.__data[3]=0,B.__data[4]=N.elements[3],B.__data[5]=N.elements[4],B.__data[6]=N.elements[5],B.__data[7]=0,B.__data[8]=N.elements[6],B.__data[9]=N.elements[7],B.__data[10]=N.elements[8],B.__data[11]=0):(N.toArray(B.__data,ht),ht+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,O,U,Y){const G=I.value,P=O+"_"+U;if(Y[P]===void 0)return typeof G=="number"||typeof G=="boolean"?Y[P]=G:Y[P]=G.clone(),!0;{const K=Y[P];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return Y[P]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function A(I){const O=I.uniforms;let U=0;const Y=16;for(let P=0,K=O.length;P<K;P++){const D=Array.isArray(O[P])?O[P]:[O[P]];for(let R=0,B=D.length;R<B;R++){const rt=D[R],et=Array.isArray(rt.value)?rt.value:[rt.value];for(let ht=0,ft=et.length;ht<ft;ht++){const N=et[ht],j=C(N),k=U%Y,St=k%j.boundary,Tt=k+St;U+=St,Tt!==0&&Y-Tt<j.storage&&(U+=Y-Tt),rt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=U,U+=j.storage}}}const G=U%Y;return G>0&&(U+=Y-G),I.__size=U,I.__cache={},this}function C(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function x(I){const O=I.target;O.removeEventListener("dispose",x);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class MA{constructor(e={}){const{canvas:i=ax(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),C=new Int32Array(4);let x=null,g=null;const I=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Va,this.toneMappingExposure=1;const U=this;let Y=!1,G=0,P=0,K=null,D=-1,R=null;const B=new $e,rt=new $e;let et=null;const ht=new Ce(0);let ft=0,N=i.width,j=i.height,k=1,St=null,Tt=null;const L=new $e(0,0,N,j),nt=new $e(0,0,N,j);let xt=!1;const Z=new Vv;let ct=!1,Et=!1;const yt=new tn,Ht=new tn,It=new at,ee=new $e,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function ke(){return K===null?k:1}let F=s;function En(b,X){return i.getContext(b,X)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_d}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),F===null){const X="webgl2";if(F=En(X,b),F===null)throw En(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let le,me,Wt,De,kt,w,T,tt,dt,Mt,mt,Vt,Ct,Pt,_e,bt,zt,qt,Xt,Lt,Qt,ne,Ne,V;function At(){le=new UT(F),le.init(),ne=new dA(F,le),me=new bT(F,le,e,ne),Wt=new fA(F,le),me.reverseDepthBuffer&&y&&Wt.buffers.depth.setReversed(!0),De=new OT(F),kt=new Jb,w=new hA(F,le,Wt,kt,me,ne,De),T=new RT(U),tt=new wT(U),dt=new Gx(F),Ne=new ET(F,dt),Mt=new LT(F,dt,De,Ne),mt=new zT(F,Mt,dt,De),Xt=new PT(F,me,w),bt=new AT(kt),Vt=new Qb(U,T,tt,le,me,Ne,bt),Ct=new yA(U,kt),Pt=new tA,_e=new rA(le),qt=new MT(U,T,tt,Wt,mt,M,m),zt=new cA(U,mt,me),V=new xA(F,De,me,Wt),Lt=new TT(F,le,De),Qt=new NT(F,le,De),De.programs=Vt.programs,U.capabilities=me,U.extensions=le,U.properties=kt,U.renderLists=Pt,U.shadowMap=zt,U.state=Wt,U.info=De}At();const lt=new vA(U,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(N,j,!1))},this.getSize=function(b){return b.set(N,j)},this.setSize=function(b,X,it=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,j=X,i.width=Math.floor(b*k),i.height=Math.floor(X*k),it===!0&&(i.style.width=b+"px",i.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(N*k,j*k).floor()},this.setDrawingBufferSize=function(b,X,it){N=b,j=X,k=it,i.width=Math.floor(b*it),i.height=Math.floor(X*it),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,X,it,st){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,X,it,st),Wt.viewport(B.copy(L).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,X,it,st){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,X,it,st),Wt.scissor(rt.copy(nt).multiplyScalar(k).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){Wt.setScissorTest(xt=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(b=!0,X=!0,it=!0){let st=0;if(b){let W=!1;if(K!==null){const vt=K.texture.format;W=vt===Md||vt===xd||vt===yd}if(W){const vt=K.texture.type,wt=vt===oa||vt===Ms||vt===zo||vt===wr||vt===vd||vt===Sd,Ot=qt.getClearColor(),Nt=qt.getClearAlpha(),Zt=Ot.r,$t=Ot.g,Yt=Ot.b;wt?(A[0]=Zt,A[1]=$t,A[2]=Yt,A[3]=Nt,F.clearBufferuiv(F.COLOR,0,A)):(C[0]=Zt,C[1]=$t,C[2]=Yt,C[3]=Nt,F.clearBufferiv(F.COLOR,0,C))}else st|=F.COLOR_BUFFER_BIT}X&&(st|=F.DEPTH_BUFFER_BIT),it&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),Pt.dispose(),_e.dispose(),kt.dispose(),T.dispose(),tt.dispose(),mt.dispose(),Ne.dispose(),V.dispose(),Vt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Pr),lt.removeEventListener("sessionend",zr),xi.stop()};function gt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const b=De.autoReset,X=zt.enabled,it=zt.autoUpdate,st=zt.needsUpdate,W=zt.type;At(),De.autoReset=b,zt.enabled=X,zt.autoUpdate=it,zt.needsUpdate=st,zt.type=W}function Dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){const X=b.target;X.removeEventListener("dispose",Jt),We(X)}function We(b){ln(b),kt.remove(b)}function ln(b){const X=kt.get(b).programs;X!==void 0&&(X.forEach(function(it){Vt.releaseProgram(it)}),b.isShaderMaterial&&Vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,it,st,W,vt){X===null&&(X=Le);const wt=W.isMesh&&W.matrixWorld.determinant()<0,Ot=Ir(b,X,it,st,W);Wt.setMaterial(st,wt);let Nt=it.index,Zt=1;if(st.wireframe===!0){if(Nt=Mt.getWireframeAttribute(it),Nt===void 0)return;Zt=2}const $t=it.drawRange,Yt=it.attributes.position;let ge=$t.start*Zt,Me=($t.start+$t.count)*Zt;vt!==null&&(ge=Math.max(ge,vt.start*Zt),Me=Math.min(Me,(vt.start+vt.count)*Zt)),Nt!==null?(ge=Math.max(ge,0),Me=Math.min(Me,Nt.count)):Yt!=null&&(ge=Math.max(ge,0),Me=Math.min(Me,Yt.count));const Ge=Me-ge;if(Ge<0||Ge===1/0)return;Ne.setup(W,st,Ot,it,Nt);let Fe,ie=Lt;if(Nt!==null&&(Fe=dt.get(Nt),ie=Qt,ie.setIndex(Fe)),W.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*ke()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(W.isLine){let Ft=st.linewidth;Ft===void 0&&(Ft=1),Wt.setLineWidth(Ft*ke()),W.isLineSegments?ie.setMode(F.LINES):W.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else W.isPoints?ie.setMode(F.POINTS):W.isSprite&&ie.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ie.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ft=W._multiDrawStarts,en=W._multiDrawCounts,Ee=W._multiDrawCount,Cn=Nt?dt.get(Nt).bytesPerElement:1,Ui=kt.get(st).currentProgram.getUniforms();for(let pn=0;pn<Ee;pn++)Ui.setValue(F,"_gl_DrawID",pn),ie.render(Ft[pn]/Cn,en[pn])}else if(W.isInstancedMesh)ie.renderInstances(ge,Ge,W.count);else if(it.isInstancedBufferGeometry){const Ft=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,en=Math.min(it.instanceCount,Ft);ie.renderInstances(ge,Ge,en)}else ie.render(ge,Ge)};function xe(b,X,it){b.transparent===!0&&b.side===ea&&b.forceSinglePass===!1?(b.side=Hn,b.needsUpdate=!0,Ye(b,X,it),b.side=Xa,b.needsUpdate=!0,Ye(b,X,it),b.side=ea):Ye(b,X,it)}this.compile=function(b,X,it=null){it===null&&(it=b),g=_e.get(it),g.init(X),O.push(g),it.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),b!==it&&b.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const st=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let wt=0;wt<vt.length;wt++){const Ot=vt[wt];xe(Ot,it,W),st.add(Ot)}else xe(vt,it,W),st.add(vt)}),O.pop(),g=null,st},this.compileAsync=function(b,X,it=null){const st=this.compile(b,X,it);return new Promise(W=>{function vt(){if(st.forEach(function(wt){kt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){W(b);return}setTimeout(vt,10)}le.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let gn=null;function ci(b){gn&&gn(b)}function Pr(){xi.stop()}function zr(){xi.start()}const xi=new Wv;xi.setAnimationLoop(ci),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(b){gn=b,lt.setAnimationLoop(b),b===null?xi.stop():xi.start()},lt.addEventListener("sessionstart",Pr),lt.addEventListener("sessionend",zr),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,X,K),g=_e.get(b,O.length),g.init(X),O.push(g),Ht.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Ht),Et=this.localClippingEnabled,ct=bt.init(this.clippingPlanes,Et),x=Pt.get(b,I.length),x.init(),I.push(x),lt.enabled===!0&&lt.isPresenting===!0){const vt=U.xr.getDepthSensingMesh();vt!==null&&Wa(vt,X,-1/0,U.sortObjects)}Wa(b,X,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(St,Tt),ue=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,ue&&qt.addToRenderList(x,b),this.info.render.frame++,ct===!0&&bt.beginShadows();const it=g.state.shadowsArray;zt.render(it,b,X),ct===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=x.opaque,W=x.transmissive;if(g.setupLights(),X.isArrayCamera){const vt=X.cameras;if(W.length>0)for(let wt=0,Ot=vt.length;wt<Ot;wt++){const Nt=vt[wt];Br(st,W,b,Nt)}ue&&qt.render(b);for(let wt=0,Ot=vt.length;wt<Ot;wt++){const Nt=vt[wt];As(x,b,Nt,Nt.viewport)}}else W.length>0&&Br(st,W,b,X),ue&&qt.render(b),As(x,b,X);K!==null&&(w.updateMultisampleRenderTarget(K),w.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(U,b,X),Ne.resetDefaultState(),D=-1,R=null,O.pop(),O.length>0?(g=O[O.length-1],ct===!0&&bt.setGlobalState(U.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?x=I[I.length-1]:x=null};function Wa(b,X,it,st){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){st&&ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ht);const wt=mt.update(b),Ot=b.material;Ot.visible&&x.push(b,wt,Ot,it,ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const wt=mt.update(b),Ot=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ee.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ee.copy(wt.boundingSphere.center)),ee.applyMatrix4(b.matrixWorld).applyMatrix4(Ht)),Array.isArray(Ot)){const Nt=wt.groups;for(let Zt=0,$t=Nt.length;Zt<$t;Zt++){const Yt=Nt[Zt],ge=Ot[Yt.materialIndex];ge&&ge.visible&&x.push(b,wt,ge,it,ee.z,Yt)}}else Ot.visible&&x.push(b,wt,Ot,it,ee.z,null)}}const vt=b.children;for(let wt=0,Ot=vt.length;wt<Ot;wt++)Wa(vt[wt],X,it,st)}function As(b,X,it,st){const W=b.opaque,vt=b.transmissive,wt=b.transparent;g.setupLightsView(it),ct===!0&&bt.setGlobalState(U.clippingPlanes,it),st&&Wt.viewport(B.copy(st)),W.length>0&&qa(W,X,it),vt.length>0&&qa(vt,X,it),wt.length>0&&qa(wt,X,it),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Br(b,X,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Es(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Bo:oa,minFilter:xs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const vt=g.state.transmissionRenderTarget[st.id],wt=st.viewport||B;vt.setSize(wt.z,wt.w);const Ot=U.getRenderTarget();U.setRenderTarget(vt),U.getClearColor(ht),ft=U.getClearAlpha(),ft<1&&U.setClearColor(16777215,.5),U.clear(),ue&&qt.render(it);const Nt=U.toneMapping;U.toneMapping=Va;const Zt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),ct===!0&&bt.setGlobalState(U.clippingPlanes,st),qa(b,it,st),w.updateMultisampleRenderTarget(vt),w.updateRenderTargetMipmap(vt),le.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Yt=0,ge=X.length;Yt<ge;Yt++){const Me=X[Yt],Ge=Me.object,Fe=Me.geometry,ie=Me.material,Ft=Me.group;if(ie.side===ea&&Ge.layers.test(st.layers)){const en=ie.side;ie.side=Hn,ie.needsUpdate=!0,ui(Ge,it,st,Fe,ie,Ft),ie.side=en,ie.needsUpdate=!0,$t=!0}}$t===!0&&(w.updateMultisampleRenderTarget(vt),w.updateRenderTargetMipmap(vt))}U.setRenderTarget(Ot),U.setClearColor(ht,ft),Zt!==void 0&&(st.viewport=Zt),U.toneMapping=Nt}function qa(b,X,it){const st=X.isScene===!0?X.overrideMaterial:null;for(let W=0,vt=b.length;W<vt;W++){const wt=b[W],Ot=wt.object,Nt=wt.geometry,Zt=st===null?wt.material:st,$t=wt.group;Ot.layers.test(it.layers)&&ui(Ot,X,it,Nt,Zt,$t)}}function ui(b,X,it,st,W,vt){b.onBeforeRender(U,X,it,st,W,vt),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(U,X,it,st,b,vt),W.transparent===!0&&W.side===ea&&W.forceSinglePass===!1?(W.side=Hn,W.needsUpdate=!0,U.renderBufferDirect(it,X,st,W,b,vt),W.side=Xa,W.needsUpdate=!0,U.renderBufferDirect(it,X,st,W,b,vt),W.side=ea):U.renderBufferDirect(it,X,st,W,b,vt),b.onAfterRender(U,X,it,st,W,vt)}function Ye(b,X,it){X.isScene!==!0&&(X=Le);const st=kt.get(b),W=g.state.lights,vt=g.state.shadowsArray,wt=W.state.version,Ot=Vt.getParameters(b,W.state,vt,X,it),Nt=Vt.getProgramCacheKey(Ot);let Zt=st.programs;st.environment=b.isMeshStandardMaterial?X.environment:null,st.fog=X.fog,st.envMap=(b.isMeshStandardMaterial?tt:T).get(b.envMap||st.environment),st.envMapRotation=st.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",Jt),Zt=new Map,st.programs=Zt);let $t=Zt.get(Nt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===wt)return wi(b,Ot),$t}else Ot.uniforms=Vt.getUniforms(b),b.onBeforeCompile(Ot,U),$t=Vt.acquireProgram(Ot,Nt),Zt.set(Nt,$t),st.uniforms=Ot.uniforms;const Yt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Yt.clippingPlanes=bt.uniform),wi(b,Ot),st.needsLights=Ic(b),st.lightsStateVersion=wt,st.needsLights&&(Yt.ambientLightColor.value=W.state.ambient,Yt.lightProbe.value=W.state.probe,Yt.directionalLights.value=W.state.directional,Yt.directionalLightShadows.value=W.state.directionalShadow,Yt.spotLights.value=W.state.spot,Yt.spotLightShadows.value=W.state.spotShadow,Yt.rectAreaLights.value=W.state.rectArea,Yt.ltc_1.value=W.state.rectAreaLTC1,Yt.ltc_2.value=W.state.rectAreaLTC2,Yt.pointLights.value=W.state.point,Yt.pointLightShadows.value=W.state.pointShadow,Yt.hemisphereLights.value=W.state.hemi,Yt.directionalShadowMap.value=W.state.directionalShadowMap,Yt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Yt.spotShadowMap.value=W.state.spotShadowMap,Yt.spotLightMatrix.value=W.state.spotLightMatrix,Yt.spotLightMap.value=W.state.spotLightMap,Yt.pointShadowMap.value=W.state.pointShadowMap,Yt.pointShadowMatrix.value=W.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function vn(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Dc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function wi(b,X){const it=kt.get(b);it.outputColorSpace=X.outputColorSpace,it.batching=X.batching,it.batchingColor=X.batchingColor,it.instancing=X.instancing,it.instancingColor=X.instancingColor,it.instancingMorph=X.instancingMorph,it.skinning=X.skinning,it.morphTargets=X.morphTargets,it.morphNormals=X.morphNormals,it.morphColors=X.morphColors,it.morphTargetsCount=X.morphTargetsCount,it.numClippingPlanes=X.numClippingPlanes,it.numIntersection=X.numClipIntersection,it.vertexAlphas=X.vertexAlphas,it.vertexTangents=X.vertexTangents,it.toneMapping=X.toneMapping}function Ir(b,X,it,st,W){X.isScene!==!0&&(X=Le),w.resetTextureUnits();const vt=X.fog,wt=st.isMeshStandardMaterial?X.environment:null,Ot=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Lr,Nt=(st.isMeshStandardMaterial?tt:T).get(st.envMap||wt),Zt=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,$t=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!it.morphAttributes.position,ge=!!it.morphAttributes.normal,Me=!!it.morphAttributes.color;let Ge=Va;st.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ge=U.toneMapping);const Fe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ie=Fe!==void 0?Fe.length:0,Ft=kt.get(st),en=g.state.lights;if(ct===!0&&(Et===!0||b!==R)){const cn=b===R&&st.id===D;bt.setState(st,b,cn)}let Ee=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==en.state.version||Ft.outputColorSpace!==Ot||W.isBatchedMesh&&Ft.batching===!1||!W.isBatchedMesh&&Ft.batching===!0||W.isBatchedMesh&&Ft.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ft.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ft.instancing===!1||!W.isInstancedMesh&&Ft.instancing===!0||W.isSkinnedMesh&&Ft.skinning===!1||!W.isSkinnedMesh&&Ft.skinning===!0||W.isInstancedMesh&&Ft.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ft.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ft.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ft.instancingMorph===!1&&W.morphTexture!==null||Ft.envMap!==Nt||st.fog===!0&&Ft.fog!==vt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==bt.numPlanes||Ft.numIntersection!==bt.numIntersection)||Ft.vertexAlphas!==Zt||Ft.vertexTangents!==$t||Ft.morphTargets!==Yt||Ft.morphNormals!==ge||Ft.morphColors!==Me||Ft.toneMapping!==Ge||Ft.morphTargetsCount!==ie)&&(Ee=!0):(Ee=!0,Ft.__version=st.version);let Cn=Ft.currentProgram;Ee===!0&&(Cn=Ye(st,X,W));let Ui=!1,pn=!1,ja=!1;const fe=Cn.getUniforms(),Tn=Ft.uniforms;if(Wt.useProgram(Cn.program)&&(Ui=!0,pn=!0,ja=!0),st.id!==D&&(D=st.id,pn=!0),Ui||R!==b){Wt.buffers.depth.getReversed()?(yt.copy(b.projectionMatrix),rx(yt),ox(yt),fe.setValue(F,"projectionMatrix",yt)):fe.setValue(F,"projectionMatrix",b.projectionMatrix),fe.setValue(F,"viewMatrix",b.matrixWorldInverse);const Ke=fe.map.cameraPosition;Ke!==void 0&&Ke.setValue(F,It.setFromMatrixPosition(b.matrixWorld)),me.logarithmicDepthBuffer&&fe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&fe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,pn=!0,ja=!0)}if(W.isSkinnedMesh){fe.setOptional(F,W,"bindMatrix"),fe.setOptional(F,W,"bindMatrixInverse");const cn=W.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),fe.setValue(F,"boneTexture",cn.boneTexture,w))}W.isBatchedMesh&&(fe.setOptional(F,W,"batchingTexture"),fe.setValue(F,"batchingTexture",W._matricesTexture,w),fe.setOptional(F,W,"batchingIdTexture"),fe.setValue(F,"batchingIdTexture",W._indirectTexture,w),fe.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&fe.setValue(F,"batchingColorTexture",W._colorsTexture,w));const Dn=it.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Xt.update(W,it,Cn),(pn||Ft.receiveShadow!==W.receiveShadow)&&(Ft.receiveShadow=W.receiveShadow,fe.setValue(F,"receiveShadow",W.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Tn.envMap.value=Nt,Tn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&X.environment!==null&&(Tn.envMapIntensity.value=X.environmentIntensity),pn&&(fe.setValue(F,"toneMappingExposure",U.toneMappingExposure),Ft.needsLights&&Bc(Tn,ja),vt&&st.fog===!0&&Ct.refreshFogUniforms(Tn,vt),Ct.refreshMaterialUniforms(Tn,st,k,j,g.state.transmissionRenderTarget[b.id]),Dc.upload(F,vn(Ft),Tn,w)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Dc.upload(F,vn(Ft),Tn,w),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&fe.setValue(F,"center",W.center),fe.setValue(F,"modelViewMatrix",W.modelViewMatrix),fe.setValue(F,"normalMatrix",W.normalMatrix),fe.setValue(F,"modelMatrix",W.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const cn=st.uniformsGroups;for(let Ke=0,Rs=cn.length;Ke<Rs;Ke++){const Mi=cn[Ke];V.update(Mi,Cn),V.bind(Mi,Cn)}}return Cn}function Bc(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Ic(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,X,it){kt.get(b.texture).__webglTexture=X,kt.get(b.depthTexture).__webglTexture=it;const st=kt.get(b);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const it=kt.get(b);it.__webglFramebuffer=X,it.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,it=0){K=b,G=X,P=it;let st=!0,W=null,vt=!1,wt=!1;if(b){const Nt=kt.get(b);if(Nt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Nt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Nt.__hasExternalTextures)w.rebindTextures(b,kt.get(b.texture).__webglTexture,kt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&kt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(wt=!0);const $t=kt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[X])?W=$t[X][it]:W=$t[X],vt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?W=kt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?W=$t[it]:W=$t,B.copy(b.viewport),rt.copy(b.scissor),et=b.scissorTest}else B.copy(L).multiplyScalar(k).floor(),rt.copy(nt).multiplyScalar(k).floor(),et=xt;if(Wt.bindFramebuffer(F.FRAMEBUFFER,W)&&st&&Wt.drawBuffers(b,W),Wt.viewport(B),Wt.scissor(rt),Wt.setScissorTest(et),vt){const Nt=kt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,it)}else if(wt){const Nt=kt.get(b.texture),Zt=X||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,it||0,Zt)}D=-1},this.readRenderTargetPixels=function(b,X,it,st,W,vt,wt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ot=Ot[wt]),Ot){Wt.bindFramebuffer(F.FRAMEBUFFER,Ot);try{const Nt=b.texture,Zt=Nt.format,$t=Nt.type;if(!me.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-st&&it>=0&&it<=b.height-W&&F.readPixels(X,it,st,W,ne.convert(Zt),ne.convert($t),vt)}finally{const Nt=K!==null?kt.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,X,it,st,W,vt,wt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ot=Ot[wt]),Ot){const Nt=b.texture,Zt=Nt.format,$t=Nt.type;if(!me.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-st&&it>=0&&it<=b.height-W){Wt.bindFramebuffer(F.FRAMEBUFFER,Ot);const Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,vt.byteLength,F.STREAM_READ),F.readPixels(X,it,st,W,ne.convert(Zt),ne.convert($t),0);const ge=K!==null?kt.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,ge);const Me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await sx(F,Me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,vt),F.deleteBuffer(Yt),F.deleteSync(Me),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,it=0){b.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const st=Math.pow(2,-it),W=Math.floor(b.image.width*st),vt=Math.floor(b.image.height*st),wt=X!==null?X.x:0,Ot=X!==null?X.y:0;w.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,it,0,0,wt,Ot,W,vt),Wt.unbindTexture()};const Vo=F.createFramebuffer(),Ya=F.createFramebuffer();this.copyTextureToTexture=function(b,X,it=null,st=null,W=0,vt=null){b.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,b=arguments[1],X=arguments[2],vt=arguments[3]||0,it=null),vt===null&&(W!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=W,W=0):vt=0);let wt,Ot,Nt,Zt,$t,Yt,ge,Me,Ge;const Fe=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(it!==null)wt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,Nt=it.isBox3?it.max.z-it.min.z:1,Zt=it.min.x,$t=it.min.y,Yt=it.isBox3?it.min.z:0;else{const Dn=Math.pow(2,-W);wt=Math.floor(Fe.width*Dn),Ot=Math.floor(Fe.height*Dn),b.isDataArrayTexture?Nt=Fe.depth:b.isData3DTexture?Nt=Math.floor(Fe.depth*Dn):Nt=1,Zt=0,$t=0,Yt=0}st!==null?(ge=st.x,Me=st.y,Ge=st.z):(ge=0,Me=0,Ge=0);const ie=ne.convert(X.format),Ft=ne.convert(X.type);let en;X.isData3DTexture?(w.setTexture3D(X,0),en=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(w.setTexture2DArray(X,0),en=F.TEXTURE_2D_ARRAY):(w.setTexture2D(X,0),en=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),Cn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ui=F.getParameter(F.UNPACK_SKIP_PIXELS),pn=F.getParameter(F.UNPACK_SKIP_ROWS),ja=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,$t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);const fe=b.isDataArrayTexture||b.isData3DTexture,Tn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const Dn=kt.get(b),cn=kt.get(X),Ke=kt.get(Dn.__renderTarget),Rs=kt.get(cn.__renderTarget);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let Mi=0;Mi<Nt;Mi++)fe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(b).__webglTexture,W,Yt+Mi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(X).__webglTexture,vt,Ge+Mi)),F.blitFramebuffer(Zt,$t,wt,Ot,ge,Me,wt,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||kt.has(b)){const Dn=kt.get(b),cn=kt.get(X);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Vo),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ya);for(let Ke=0;Ke<Nt;Ke++)fe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dn.__webglTexture,W,Yt+Ke):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dn.__webglTexture,W),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,cn.__webglTexture,vt,Ge+Ke):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,cn.__webglTexture,vt),W!==0?F.blitFramebuffer(Zt,$t,wt,Ot,ge,Me,wt,Ot,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(en,vt,ge,Me,Ge+Ke,Zt,$t,wt,Ot):F.copyTexSubImage2D(en,vt,ge,Me,Zt,$t,wt,Ot);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(en,vt,ge,Me,Ge,wt,Ot,Nt,ie,Ft,Fe.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(en,vt,ge,Me,Ge,wt,Ot,Nt,ie,Fe.data):F.texSubImage3D(en,vt,ge,Me,Ge,wt,Ot,Nt,ie,Ft,Fe):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,vt,ge,Me,wt,Ot,ie,Ft,Fe.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,vt,ge,Me,Fe.width,Fe.height,ie,Fe.data):F.texSubImage2D(F.TEXTURE_2D,vt,ge,Me,wt,Ot,ie,Ft,Fe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Cn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ui),F.pixelStorei(F.UNPACK_SKIP_ROWS,pn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ja),vt===0&&X.generateMipmaps&&F.generateMipmap(en),Wt.unbindTexture()},this.copyTextureToTexture3D=function(b,X,it=null,st=null,W=0){return b.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,b=arguments[2],X=arguments[3],W=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,it,st,W)},this.initRenderTarget=function(b){kt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Wt.unbindTexture()},this.resetState=function(){G=0,P=0,K=null,Wt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const pv={type:"change"},bd={type:"start"},Kv={type:"end"},Mc=new Ed,mv=new Fa,EA=Math.cos(70*ix.DEG2RAD),fn=new at,Fn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6;class TA extends Fx{constructor(e,i=null){super(e,i),this.state=Ie.NONE,this.enabled=!0,this.target=new at,this.cursor=new at,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new at,this._lastQuaternion=new Ts,this._lastTargetPosition=new at,this._quat=new Ts().setFromUnitVectors(e.up,new at(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vg,this._sphericalDelta=new Vg,this._scale=1,this._panOffset=new at,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new at,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AA.bind(this),this._onPointerDown=bA.bind(this),this._onPointerUp=RA.bind(this),this._onContextMenu=OA.bind(this),this._onMouseWheel=wA.bind(this),this._onKeyDown=UA.bind(this),this._onTouchStart=LA.bind(this),this._onTouchMove=NA.bind(this),this._onMouseDown=CA.bind(this),this._onMouseMove=DA.bind(this),this._interceptControlDown=PA.bind(this),this._interceptControlUp=zA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pv),this.update(),this.state=Ie.NONE}update(e=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),l<-Math.PI?l+=Fn:l>Math.PI&&(l-=Fn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new at(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new at(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Mc.origin.copy(this.object.position),Mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mc.direction))<EA?this.object.lookAt(this.target):(mv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mc.intersectPlane(mv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(pv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ce,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function bA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function AA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function RA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kv),this.state=Ie.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function CA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ie.DOLLY;break;case Er.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ie.ROTATE}break;case Er.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(bd)}function DA(o){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function wA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(o.preventDefault(),this.dispatchEvent(bd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Kv))}function UA(o){this.enabled!==!1&&this._handleKeyDown(o)}function LA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ie.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ie.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(bd)}function NA(o){switch(this._trackPointer(o),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ie.NONE}}function OA(o){this.enabled!==!1&&o.preventDefault()}function PA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BA(){const o=Oo.useRef(null),e=Oo.useRef(null),[i,s]=Oo.useState(!0);return Oo.useEffect(()=>{const l=o.current;if(!l)return;const u=new wx,h=new li(75,window.innerWidth/window.innerHeight,.1,1e3),d=new MA({antialias:!0});e.current=d,d.setPixelRatio(window.devicePixelRatio),d.setSize(window.innerWidth,window.innerHeight),d.setClearColor(0),l.appendChild(d.domElement);const m=Math.cos,p=Math.sin,v=Math.PI,S=Math.atan,y=(B,rt)=>Math.sqrt(B*B+rt*rt),M=new ca,A=[],C=[],x=new Ce;let g=0;const I=.05,O=(B,rt)=>{let et=B/8-25,ht=rt/8-25,ft=y(et,ht)/3,N=5*m(ft);const j=S(9*m(ht)),k=B/2+et/(Math.abs(j)<1e-6?1e-6:j)*p(N*4-g),St=N/3-g/8;return[k*p(St)*I,(rt/4+5*ft*ft+k)/2*m(St)*I,(k*.9*m(St*2+ft/4)+N*15*p(ft-g/3))*I]};for(let B=0;B<400;B+=1)for(let rt=0;rt<400;rt+=1){const[et,ht,ft]=O(rt,B);A.push(et,ht,ft),x.setHSL(Math.abs(ft*2),.7,.5),C.push(x.r,x.g,x.b)}M.setAttribute("position",new ra(A,3)),M.setAttribute("color",new ra(C,3));const U=new Xv({size:.01,vertexColors:!0,transparent:!0,opacity:.8,blending:Ah,sizeAttenuation:!0}),Y=new Nx(M,U);u.add(Y),h.position.z=2,h.position.y=.5,h.lookAt(0,0,0);const G=new TA(h,d.domElement);G.enableDamping=!0;let P;const K=new Ix,D=()=>{P=requestAnimationFrame(D),g+=v/2*K.getDelta();const B=Y.geometry.attributes.position.array,rt=Y.geometry.attributes.color.array;let et=0;for(let ht=0;ht<400;ht+=1)for(let ft=0;ft<400;ft+=1){const[N,j,k]=O(ft,ht);B[et]=N,B[et+1]=j,B[et+2]=k,x.setHSL((k*.5+.5)%1,.7,.5),rt[et]=x.r,rt[et+1]=x.g,rt[et+2]=x.b,et+=3}Y.geometry.attributes.position.needsUpdate=!0,Y.geometry.attributes.color.needsUpdate=!0,Y.rotation.y+=.001,Y.rotation.x+=5e-4,G.update(),d.render(u,h)},R=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",R),D(),()=>{window.removeEventListener("resize",R),P&&cancelAnimationFrame(P),l&&e.current&&(l.removeChild(e.current.domElement),e.current.dispose()),G.dispose(),M.dispose(),U.dispose()}},[]),gi.jsxs("div",{style:{position:"relative"},children:[gi.jsx("div",{ref:o,style:{width:"100vw",height:"100vh",backgroundColor:"black",overflow:"hidden"}}),i&&gi.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"90%",maxWidth:"400px",padding:"1rem",backgroundColor:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(10px)",borderRadius:"1rem",border:"1px solid rgba(255, 255, 255, 0.1)",color:"white",fontFamily:"system-ui, -apple-system, sans-serif",zIndex:1e3,transition:"opacity 0.3s ease",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.5)"},children:[gi.jsx("button",{onClick:()=>s(!1),style:{position:"absolute",top:"1rem",right:"1rem",background:"none",border:"none",color:"rgba(255, 255, 255, 0.6)",cursor:"pointer",fontSize:"1.2rem",padding:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",width:"30px",height:"30px",borderRadius:"50%",transition:"all 0.2s ease"},"aria-label":"Close description",children:"×"}),gi.jsx("h2",{style:{margin:"0 0 0.5rem 0",fontSize:"1.2rem",fontWeight:"500",textAlign:"center",color:"rgba(255, 255, 255, 0.9)"},children:"Mathematical Visualization"}),gi.jsx("p",{style:{margin:"0",fontSize:"0.9rem",lineHeight:"1.5",textAlign:"center",color:"rgba(255, 255, 255, 0.7)"},children:"This is a 3D visualization of a mathematical formula transformed into a dynamic point cloud. Each point's position is calculated using trigonometric functions and vector mathematics, creating an organic, flowing pattern. The colors shift based on the depth (z-axis) of each point, while the entire structure gently rotates in 3D space."}),gi.jsxs("div",{style:{marginTop:"1rem",textAlign:"center"},children:["Get the Idea from this ",gi.jsx("a",{href:"https://x.com/yuruyurau/status/1844771001315283451",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(32,182,170,0.9)",textDecoration:"underline",fontSize:"1rem"},children:"Tweet"}),gi.jsx("a",{href:"https://github.com/Danialsamadi/visualArt",target:"_blank",rel:"noopener noreferrer",style:{display:"block",color:"rgba(32,182,170,0.9)",textDecoration:"underline",fontSize:"1rem",marginTop:"0.5rem"},children:"Source Code"})]})]})]})}dy.createRoot(document.getElementById("root")).render(gi.jsx(sy.StrictMode,{children:gi.jsx(BA,{})}));
