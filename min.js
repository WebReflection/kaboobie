self.kaboobie=function(e){"use strict";var t=function(e){var t=e.parentNode;if(t){var n=e.$,r=e._;t.replaceChild(n(r).valueOf(),e)}},n=function e(n){for(var r=n.querySelectorAll("kaboobie"),o=0,a=r.length;o<a;o++){var u=r[o];e(u),t(u)}};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/*! (c) Andrea Giammarchi - ISC */()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}new MutationObserver((function(e){for(var r=0,o=e.length;r<o;r++)for(var a=e[r].addedNodes,u=0,i=a[u].length;u<i;u++){var c=a[u];c.querySelectorAll&&(n(c),/^kaboobie$/i.test(c.tagName)&&t(c))}})).observe(document,{childList:!0,subtree:!0});var u={};u.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t[e]=new t("").constructor[e],t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}("prototype");var i=u.CustomEvent,c={};
/*! (c) Andrea Giammarchi - ISC */try{c.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},c.WeakSet=r}(WeakMap)}var l=c.WeakSet;
/*! (c) Andrea Giammarchi */var f="function"==typeof cancelAnimationFrame,s=f?cancelAnimationFrame:clearTimeout,v=f?requestAnimationFrame:setTimeout;function d(e){var t,n,r,o,a;return i(),function(e,i,l){return r=e,o=i,a=l,n||(n=v(u)),--t<0&&c(!0),c};function u(){i(),r.apply(o,a||[])}function i(){t=e||1/0,n=f?0:null}function c(e){var t=!!n;return t&&(s(n),e&&u()),t}}var p=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},h=null,g=function(e){var t=[];return function n(){var r=h,o=[];h={hook:n,args:arguments,stack:t,i:0,length:t.length,after:o};try{return e.apply(null,arguments)}finally{h=r;for(var a=0,u=o.length;a<u;a++)o[a]()}}},y=p(new WeakMap),m=function(e,t,n){e.apply(t,n)},b={async:!1,always:!1},w=function(e,t){return"function"==typeof t?t(e):t},k=function(e,t,n,r){var o=h.i++,a=h,u=a.hook,i=a.args,c=a.stack,l=a.length;o===l&&(h.length=c.push({}).default);var f=c[o];if(f.args=i,o===l){var s="function"==typeof n,v=(s?r:n)||r||b,p=v.async,g=v.always;f.$=s?n(t):w(void 0,t),f._=p?y.get(u)||y.set(u,d()):m,f.f=function(t){var n=e(f.$,t);(g||f.$!==n)&&(f.$=n,f._(u,null,f.args))}}return[f.$,f.f]},A=new WeakMap,C=function(e){var t=e.hook,n=e.args;t.apply(null,n)};
/*! (c) Andrea Giammarchi - ISC */function N(e){this.value!==e&&(this.value=e,A.get(this).forEach(C))}function E(e){return e.hook===this.hook}var S=new WeakMap,x=p(S),M=function(){},O=function(e){return function(t,n){var r=h.i++,o=h,a=o.hook,u=o.after,i=o.stack;if(r<o.length){var c=i[r],l=c.update,f=c.values,s=c.stop;if(!n||n.some(j,f)){c.values=n,e&&s(e);var v=c.clean;v&&(c.clean=null,v());var p=function(){c.clean=t()};e?l(p):u.push(p)}}else{var g=e?d():M,y={clean:null,update:g,values:n,stop:M};h.length=i.push(y),(x.get(a)||x.set(a,[])).push(y);var m=function(){y.clean=t()};e?y.stop=g(m):u.push(m)}}},T=function(e){(S.get(e)||[]).forEach((function(e){var t=e.clean;(0,e.stop)(),t&&(e.clean=null,t())}))},W=S.has.bind(S),$=O(!0),L=O(!1),_=function(e,t){var n=h.i++,r=h,o=r.stack;return n===r.length?h.length=o.push({$:e(),_:t}):t&&!t.some(j,o[n]._)||(o[n]={$:e(),_:t}),o[n].$};function j(e,t){return e!==this[t]}
/*! (c) Andrea Giammarchi - ISC */var D=function(e){var t=e.Event,n=e.WeakSet,r=!0,o=null;return function(e){return r&&(r=!r,o=new n,function(e){var r=new n,a=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var u=0,i=[],c=function(e){i.push(e),clearTimeout(u),u=setTimeout((function(){l(i.splice(u=0,i.length))}),0)};e.addEventListener("DOMNodeRemoved",(function(e){c({addedNodes:[],removedNodes:[e.target]})}),!0),e.addEventListener("DOMNodeInserted",(function(e){c({addedNodes:[e.target],removedNodes:[]})}),!0)}function l(e){for(var t,n=e.length,o=0;o<n;o++)f((t=e[o]).removedNodes,"disconnected",a,r),f(t.addedNodes,"connected",r,a)}function f(e,n,r,o){for(var a,u=new t(n),i=e.length,c=0;c<i;1===(a=e[c++]).nodeType&&s(a,u,n,r,o));}function s(e,t,n,r,a){o.has(e)&&!r.has(e)&&(a.delete(e),r.add(e),e.dispatchEvent(t));for(var u=e.children||[],i=u.length,c=0;c<i;s(u[c++],t,n,r,a));}}(e.ownerDocument)),o.add(e),e}}({Event:i,WeakSet:l}),R=function e(t,n){var r=t.nodeType;if(r){var o=1===r?t:function(e){for(var t=e.firstChild;t&&1!==t.nodeType;)t=t.nextSibling;if(t)return t;throw"unobservable"}(t);D(o),o.addEventListener("disconnected",n,!1)}else{var a=t.valueOf();a!==t&&e(a,n)}},q=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,B=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,F=/<[a-z][^>]+$/i,H=/>[^<>]*$/,I=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,z=/\s+$/,P=function e(t,n){return 0<n--&&(F.test(t[n])||!H.test(t[n])&&e(t,n))},U=function(e,t,n){return B.test(t)?e:"<".concat(t).concat(n.replace(z,""),"></").concat(t,">")},G=function(e,t,n){for(var r=[],o=e.length,a=function(n){var o=e[n-1];r.push(q.test(o)&&P(e,n)?o.replace(q,(function(e,r,o){return"".concat(t).concat(n-1,"=").concat(o||'"').concat(r).concat(o?"":'"')})):"".concat(o,"\x3c!--").concat(t).concat(n-1,"--\x3e"))},u=1;u<o;u++)a(u);r.push(e[o-1]);var i=r.join("").trim();return n?i:i.replace(I,U)},J=Array.isArray,K=[],Q=K.indexOf,V=K.slice,X=function(e,t){return 111===e.nodeType?1/t<0?t?function(e){var t=e.firstChild,n=e.lastChild,r=document.createRange();return r.setStartAfter(t),r.setEndAfter(n),r.deleteContents(),t}(e):e.lastChild:t?e.valueOf():e.firstChild:e},Y=function(e){var t="fragment",n="template",r="content"in a(n)?function(e){var t=a(n);return t.innerHTML=e,t.content}:function(e){var r=a(t),u=a(n),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;u.innerHTML="<table>"+e+"</table>",i=u.querySelectorAll(c)}else u.innerHTML=e,i=u.childNodes;return o(r,i),r};return function(e,t){return("svg"===t?u:r)(e)};function o(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function u(e){var n=a(t),r=a("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",o(n,r.firstChild.childNodes),n}}(document),Z=function(e,t){return e.childNodes[t]},ee=function(e){for(var t=[],n=e.parentNode;n;)t.push(Q.call(n.childNodes,e)),n=(e=n).parentNode;return t},te=document,ne=te.createTreeWalker,re=te.importNode,oe=1!=re.length,ae=oe?function(e,t){return re.call(document,Y(e,t),!0)}:Y,ue=oe?function(e){return ne.call(document,e,129,null,!1)}:function(e){return ne.call(document,e,129)},ie=function(e,t,n){return function(e,t,n,r,o){for(var a=n.length,u=t.length,i=a,c=0,l=0,f=null;c<u||l<i;)if(u===c)for(var s=i<a?l?r(n[l-1],-0).nextSibling:r(n[i-l],0):o;l<i;)e.insertBefore(r(n[l++],1),s);else if(i===l)for(;c<u;)f&&f.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[l])c++,l++;else if(t[u-1]===n[i-1])u--,i--;else if(t[c]===n[i-1]&&n[l]===t[u-1]){var v=r(t[--u],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--i],1),v),t[u]=n[i]}else{if(!f){f=new Map;for(var d=l;d<i;)f.set(n[d],d++)}if(f.has(t[c])){var p=f.get(t[c]);if(l<p&&p<i){for(var h=c,g=1;++h<u&&h<i&&f.get(t[h])===p+g;)g++;if(g>p-l)for(var y=r(t[c],0);l<p;)e.insertBefore(r(n[l++],1),y);else e.replaceChild(r(n[l++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n}(e.parentNode,t,n,X,e)},ce=function(e,t){return"ref"===t?function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e):"aria"===t?function(e){return function(t){for(var n in t){var r="role"===n?n:"aria-".concat(n),o=t[n];null==o?e.removeAttribute(r):e.setAttribute(r,o)}}}(e):".dataset"===t?function(e){var t=e.dataset;return function(e){for(var n in e){var r=e[n];null==r?delete t[n]:t[n]=r}}}(e):"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var o=J(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}}(e,t):function(e,t){var n,r=!0,o=document.createAttributeNS(null,t);return function(t){n!==t&&(null==(n=t)?r||(e.removeAttributeNode(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}}(e,t)};function le(e){var t=e.type,n=e.path.reduceRight(Z,this);return"node"===t?function(e){var t,n,o=[];return function a(u){switch(r(u)){case"string":case"number":case"boolean":t!==u&&(t=u,n?n.textContent=u:n=document.createTextNode(u),o=ie(e,o,[n]));break;case"object":case"undefined":if(null==u){t!=u&&(t=u,o=ie(e,o,[]));break}if(J(u)){t=u,0===u.length?o=ie(e,o,[]):"object"===r(u[0])?o=ie(e,o,u):a(String(u));break}"ELEMENT_NODE"in u&&t!==u&&(t=u,o=ie(e,o,11===u.nodeType?V.call(u.childNodes):[u]))}}}(n):"attr"===t?ce(n,e.name):function(e){var t;return function(n){t!=n&&(t=n,e.textContent=null==n?"":n)}}(n)}var fe="isµ",se=p(new WeakMap),ve=function(e,t){var n=se.get(t)||se.set(t,function(e,t){for(var n=G(t,fe,"svg"===e),r=ae(n,e),o=ue(r),a=[],u=t.length-1,i=0,c="".concat(fe).concat(i);i<u;){var l=o.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===c&&(a.push({type:"node",path:ee(l)}),c="".concat(fe).concat(++i));else{for(;l.hasAttribute(c);)a.push({type:"attr",path:ee(l),name:l.getAttribute(c)}),l.removeAttribute(c),c="".concat(fe).concat(++i);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(c,"--\x3e")&&(a.push({type:"text",path:ee(l)}),c="".concat(fe).concat(++i))}}return{content:r,nodes:a}}(e,t)),r=n.content,o=n.nodes,a=re.call(document,r,!0);return{content:a,updates:o.map(le,a)}},de=function(e,t){var n=t.type,r=t.template,o=t.values,a=o.length;pe(e,o,a);var u=e.entry;u&&u.template===r&&u.type===n||(e.entry=u=function(e,t){var n=ve(e,t);return{type:e,template:t,content:n.content,updates:n.updates,wire:null}}(n,r));for(var i=u,c=i.content,l=i.updates,f=i.wire,s=0;s<a;s++)l[s](o[s]);return f||(u.wire=function(e){var t=e.childNodes,n=t.length;if(n<2)return n?t[0]:e;var r=V.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var o=0;o<n;)e.appendChild(r[o++]);return e}}}(c))},pe=function e(t,n,r){for(var o=t.stack,a=0;a<r;a++){var u=n[a];u instanceof he?n[a]=de(o[a]||(o[a]={stack:[],entry:null,wire:null}),u):J(u)?e(o[a]||(o[a]={stack:[],entry:null,wire:null}),u,u.length):o[a]=null}r<o.length&&o.splice(r)};function he(e,t,n){this.type=e,this.template=t,this.values=n}var ge=Object.create,ye=Object.defineProperties,me=function(e){var t=p(new WeakMap);return ye((function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new he(e,t,r)}),{for:{value:function(n,r){var o=t.get(n)||t.set(n,ge(null));return o[r]||(o[r]=function(t){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return de(t,{type:e,template:n,values:o})}}({stack:[],entry:null,wire:null}))}},node:{value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return de({stack:[],entry:null,wire:null},{type:e,template:t,values:r}).valueOf()}}})},be=p(new WeakMap),we=me("html"),ke=me("svg"),Ae=Array.isArray,Ce=Object.create,Ne=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new he("html",e,n)};Ne.for=Re(we);var Ee=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new he("svg",e,n)};Ee.for=Re(ke);var Se=p(new WeakMap),xe=function(e,t){var n="function"==typeof t?t():t,r=Se.get(e)||Se.set(e,We(null));return r.w=e,r.W=t,function(e,t){var n="function"==typeof t?t():t,r=be.get(e)||be.set(e,{stack:[],entry:null,wire:null}),o=n instanceof he?de(r,n):n;return o!==r.wire&&(r.wire=o,e.textContent="",e.appendChild(o.valueOf())),e}(e,n instanceof De?$e(r,n):(Le(r,n),n))},Me=!1,Oe=function(e,t){t!==e.node&&(e.node&&(Me=!0),e.node=t)},Te=function(e,t){return n=null,r=g((function(){var n=t.fn.apply(null,arguments);n instanceof he?(Le(e,n),Oe(t,je(t,n))):Oe(t,n);try{return t.node}finally{if(Me){Me=!1;for(var r=e;r.p;)r=r.p;xe(r.w,r.W)}}})),function(){var e=r.apply(this,arguments);return W(r)&&R(e,n||(n=T.bind(null,r))),e};var n,r},We=function(e){return{p:e,stack:[],entry:null}},$e=function(e,t){var n,r=t.fn,a=t.template,u=t.values,i=e.entry;return i&&i.fn===r||(e.entry=i={fn:r,hook:null,node:null},i.hook=Te(We(e),i)),(n=i).hook.apply(n,[a].concat(o(u)))},Le=function(e,t){var n=t.values;_e(e,n,n.length)},_e=function e(t,n,r){for(var o=t.stack,a=0;a<r;a++){var u=n[a];u instanceof De?n[a]=$e(o[a]||(o[a]=We(t)),u):u instanceof he?Le(o[a]||(o[a]=We(t)),u):Ae(u)?e(o[a]||(o[a]=We(t)),u,u.length):o[a]=null}r<o.length&&o.splice(r)},je=function(e,t){var n=t.type,r=t.template,a=t.values;return("svg"===n?ke:we).for(e,n).apply(void 0,[r].concat(o(a)))};function De(e,t,n){this.fn=e,this.template=t,this.values=n}function Re(e){var t=p(new WeakMap);return function(n,r){var o=t.get(n)||t.set(n,Ce(null)),a=o[r]||(o[r]=We(null));return function(t){for(var o=arguments.length,u=new Array(o>1?o-1:0),i=1;i<o;i++)u[i-1]=arguments[i];return _e(a,u),e.for(n,r).apply(void 0,[t].concat(u))}}}var qe=new WeakMap,Be=new WeakMap,Fe=[],He=function(e,t){for(var n,r=/(\w+)=/g;n=r.exec(t);)e.push(n[1])},Ie=function(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e.apply(null,(Be.get(t)||ze(t,r))(r))}},ze=function(e,t){for(var n=[e[0]],r=[],o=0,a=1,u=e.length;a<u;a++){var i=t[a-1];if("function"==typeof i&&qe.has(i)&&/<$/.test(n[o])){n[o++]+='kaboobie style="display:none" .$=',n[o++]=" ._=";for(var c=[],l=0;(l=e[a].indexOf(">"))<0;)He(c,e[a++]);He(c,e[a].slice(0,a));var f=e[a].slice(l);0<l&&"/"===e[a][l-1]&&(f=" /"+f),n[o]=f.replace(/<\/>/g,"</kaboobie>"),r.push(c)}else n[++o]=e[a].replace(/<\/>/g,"</kaboobie>"),r.push(Fe)}var s=r.length,v=function(e){for(var t=[],o=0,a=0;a<s;a++){var u=r[a];if(u===Fe)t.push(e[o++]);else{for(var i=e[o++],c={},l=0,f=u.length;l<f;l++)c[u[l]]=e[o++];t.push(i,c)}}return[n].concat(t)};return Be.set(e,v),v},Pe=Ie(Ne),Ue=Ie(Ee);return e.Component=function(e){var t=function(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new De(e,t,r)}}(e);return qe.set(t,!0),t},e.contextual=function(e){var t=!0,n=null,r=g((function(){return e.apply(n,arguments)}));return function e(){var o=r.apply(n=this,arguments);return t&&(t=!t,W(r)&&S.set(e,S.get(r))),o}},e.createContext=function(e){var t={value:e,provide:N};return A.set(t,[]),t},e.html=Pe,e.render=xe,e.svg=Ue,e.useCallback=function(e,t){return _((function(){return e}),t)},e.useContext=function(e){var t=h,n=t.hook,r=t.args,o=A.get(e),a={hook:n,args:r};return o.some(E,a)||o.push(a),e.value},e.useEffect=$,e.useLayoutEffect=L,e.useMemo=_,e.useReducer=k,e.useRef=function(e){var t=h.i++,n=h,r=n.stack;return t===n.length&&(h.length=r.push({current:e})),r[t]},e.useState=function(e,t){return k(w,e,void 0,t)},Object.defineProperty(e,"__esModule",{value:!0}),e}({}).default;