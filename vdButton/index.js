(function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["votre-dieu"]=n():t["votre-dieu"]=n()})(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s="daf5")}({"00ee":function(t,n,e){var r=e("b622"),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},"0366":function(t,n,e){var r=e("1c0b");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"06cf":function(t,n,e){var r=e("83ab"),o=e("d1e7"),i=e("5c6c"),c=e("fc6a"),u=e("c04e"),f=e("5135"),a=e("0cfb"),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),a)try{return s(t,n)}catch(e){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},"0cfb":function(t,n,e){var r=e("83ab"),o=e("d039"),i=e("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"19aa":function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},"1be4":function(t,n,e){var r=e("d066");t.exports=r("document","documentElement")},"1c0b":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,n,e){var r=e("b622"),o=r("iterator"),i=!1;try{var c=0,u={next:function(){return{done:!!c++}},return:function(){i=!0}};u[o]=function(){return this},Array.from(u,(function(){throw 2}))}catch(f){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var r={};r[o]=function(){return{next:function(){return{done:e=!0}}}},t(r)}catch(f){}return e}},"1cdc":function(t,n,e){var r=e("342f");t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},"1d80":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},2266:function(t,n,e){var r=e("825a"),o=e("e95a"),i=e("50c4"),c=e("0366"),u=e("35a1"),f=e("2a62"),a=function(t,n){this.stopped=t,this.result=n};t.exports=function(t,n,e){var s,p,l,d,v,b,h,y=e&&e.that,m=!(!e||!e.AS_ENTRIES),g=!(!e||!e.IS_ITERATOR),x=!(!e||!e.INTERRUPTED),w=c(n,y,1+m+x),j=function(t){return s&&f(s),new a(!0,t)},O=function(t){return m?(r(t),x?w(t[0],t[1],j):w(t[0],t[1])):x?w(t,j):w(t)};if(g)s=t;else{if(p=u(t),"function"!=typeof p)throw TypeError("Target is not iterable");if(o(p)){for(l=0,d=i(t.length);d>l;l++)if(v=O(t[l]),v&&v instanceof a)return v;return new a(!1)}s=p.call(t)}b=s.next;while(!(h=b.call(s)).done){try{v=O(h.value)}catch(S){throw f(s),S}if("object"==typeof v&&v&&v instanceof a)return v}return new a(!1)}},"23cb":function(t,n,e){var r=e("a691"),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},"23e7":function(t,n,e){var r=e("da84"),o=e("06cf").f,i=e("9112"),c=e("6eeb"),u=e("ce4e"),f=e("e893"),a=e("94ca");t.exports=function(t,n){var e,s,p,l,d,v,b=t.target,h=t.global,y=t.stat;if(s=h?r:y?r[b]||u(b,{}):(r[b]||{}).prototype,s)for(p in n){if(d=n[p],t.noTargetGet?(v=o(s,p),l=v&&v.value):l=s[p],e=a(h?p:b+(y?".":"#")+p,t.forced),!e&&void 0!==l){if(typeof d===typeof l)continue;f(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),c(s,p,d,t)}}},"241c":function(t,n,e){var r=e("ca84"),o=e("7839"),i=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},2626:function(t,n,e){"use strict";var r=e("d066"),o=e("9bf2"),i=e("b622"),c=e("83ab"),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},2877:function(t,n,e){"use strict";function r(t,n,e,r,o,i,c,u){var f,a="function"===typeof t?t.options:t;if(n&&(a.render=n,a.staticRenderFns=e,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),c?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},a._ssrRegister=f):o&&(f=u?function(){o.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:o),f)if(a.functional){a._injectStyles=f;var s=a.render;a.render=function(t,n){return f.call(n),s(t,n)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:a}}e.d(n,"a",(function(){return r}))},"2a62":function(t,n,e){var r=e("825a");t.exports=function(t){var n=t["return"];if(void 0!==n)return r(n.call(t)).value}},"2cf4":function(t,n,e){var r,o,i,c=e("da84"),u=e("d039"),f=e("0366"),a=e("1be4"),s=e("cc12"),p=e("1cdc"),l=e("605d"),d=c.location,v=c.setImmediate,b=c.clearImmediate,h=c.process,y=c.MessageChannel,m=c.Dispatch,g=0,x={},w="onreadystatechange",j=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},O=function(t){return function(){j(t)}},S=function(t){j(t.data)},_=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};v&&b||(v=function(t){var n=[],e=1;while(arguments.length>e)n.push(arguments[e++]);return x[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(g),g},b=function(t){delete x[t]},l?r=function(t){h.nextTick(O(t))}:m&&m.now?r=function(t){m.now(O(t))}:y&&!p?(o=new y,i=o.port2,o.port1.onmessage=S,r=f(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&d&&"file:"!==d.protocol&&!u(_)?(r=_,c.addEventListener("message",S,!1)):r=w in s("script")?function(t){a.appendChild(s("script"))[w]=function(){a.removeChild(this),j(t)}}:function(t){setTimeout(O(t),0)}),t.exports={set:v,clear:b}},"2d00":function(t,n,e){var r,o,i=e("da84"),c=e("342f"),u=i.process,f=u&&u.versions,a=f&&f.v8;a?(r=a.split("."),o=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},"342f":function(t,n,e){var r=e("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,n,e){var r=e("f5df"),o=e("3f8c"),i=e("b622"),c=i("iterator");t.exports=function(t){if(void 0!=t)return t[c]||t["@@iterator"]||o[r(t)]}},"37e8":function(t,n,e){var r=e("83ab"),o=e("9bf2"),i=e("825a"),c=e("df75");t.exports=r?Object.defineProperties:function(t,n){i(t);var e,r=c(n),u=r.length,f=0;while(u>f)o.f(t,e=r[f++],n[e]);return t}},"3a2d":function(t,n,e){},"3bbe":function(t,n,e){var r=e("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3f8c":function(t,n){t.exports={}},"3fb9":function(t,n,e){"use strict";e("3a2d")},"428f":function(t,n,e){var r=e("da84");t.exports=r},"44ad":function(t,n,e){var r=e("d039"),o=e("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,n,e){var r=e("b622"),o=e("7c73"),i=e("9bf2"),c=r("unscopables"),u=Array.prototype;void 0==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},"44de":function(t,n,e){var r=e("da84");t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},4840:function(t,n,e){var r=e("825a"),o=e("1c0b"),i=e("b622"),c=i("species");t.exports=function(t,n){var e,i=r(t).constructor;return void 0===i||void 0==(e=r(i)[c])?n:o(e)}},4930:function(t,n,e){var r=e("605d"),o=e("2d00"),i=e("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},"4d64":function(t,n,e){var r=e("fc6a"),o=e("50c4"),i=e("23cb"),c=function(t){return function(n,e,c){var u,f=r(n),a=o(f.length),s=i(c,a);if(t&&e!=e){while(a>s)if(u=f[s++],u!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,n,e){var r=e("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},5692:function(t,n,e){var r=e("c430"),o=e("c6cd");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,n,e){var r=e("d066"),o=e("241c"),i=e("7418"),c=e("825a");t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"605d":function(t,n,e){var r=e("c6b6"),o=e("da84");t.exports="process"==r(o.process)},"60da":function(t,n,e){"use strict";var r=e("83ab"),o=e("d039"),i=e("df75"),c=e("7418"),u=e("d1e7"),f=e("7b0b"),a=e("44ad"),s=Object.assign,p=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||i(s({},n)).join("")!=o}))?function(t,n){var e=f(t),o=arguments.length,s=1,p=c.f,l=u.f;while(o>s){var d,v=a(arguments[s++]),b=p?i(v).concat(p(v)):i(v),h=b.length,y=0;while(h>y)d=b[y++],r&&!l.call(v,d)||(e[d]=v[d])}return e}:s},"69f3":function(t,n,e){var r,o,i,c=e("7f9a"),u=e("da84"),f=e("861d"),a=e("9112"),s=e("5135"),p=e("c6cd"),l=e("f772"),d=e("d012"),v=u.WeakMap,b=function(t){return i(t)?o(t):r(t,{})},h=function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}};if(c){var y=p.state||(p.state=new v),m=y.get,g=y.has,x=y.set;r=function(t,n){return n.facade=t,x.call(y,t,n),n},o=function(t){return m.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var w=l("state");d[w]=!0,r=function(t,n){return n.facade=t,a(t,w,n),n},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:b,getterFor:h}},"6eeb":function(t,n,e){var r=e("da84"),o=e("9112"),i=e("5135"),c=e("ce4e"),u=e("8925"),f=e("69f3"),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var f,a=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),f=s(e),f.source||(f.source=p.join("string"==typeof n?n:""))),t!==r?(a?!d&&t[n]&&(l=!0):delete t[n],l?t[n]=e:o(t,n,e)):l?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},7418:function(t,n){n.f=Object.getOwnPropertySymbols},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,e){var r=e("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,n,e){var r,o=e("825a"),i=e("37e8"),c=e("7839"),u=e("d012"),f=e("1be4"),a=e("cc12"),s=e("f772"),p=">",l="<",d="prototype",v="script",b=s("IE_PROTO"),h=function(){},y=function(t){return l+v+p+t+l+"/"+v+p},m=function(t){t.write(y("")),t.close();var n=t.parentWindow.Object;return t=null,n},g=function(){var t,n=a("iframe"),e="java"+v+":";return n.style.display="none",f.appendChild(n),n.src=String(e),t=n.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},x=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}x=r?m(r):g();var t=c.length;while(t--)delete x[d][c[t]];return x()};u[b]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(h[d]=o(t),e=new h,h[d]=null,e[b]=t):e=x(),void 0===n?e:i(e,n)}},"7dd0":function(t,n,e){"use strict";var r=e("23e7"),o=e("9ed3"),i=e("e163"),c=e("d2bb"),u=e("d44e"),f=e("9112"),a=e("6eeb"),s=e("b622"),p=e("c430"),l=e("3f8c"),d=e("ae93"),v=d.IteratorPrototype,b=d.BUGGY_SAFARI_ITERATORS,h=s("iterator"),y="keys",m="values",g="entries",x=function(){return this};t.exports=function(t,n,e,s,d,w,j){o(e,n,s);var O,S,_,E=function(t){if(t===d&&A)return A;if(!b&&t in k)return k[t];switch(t){case y:return function(){return new e(this,t)};case m:return function(){return new e(this,t)};case g:return function(){return new e(this,t)}}return function(){return new e(this)}},P=n+" Iterator",T=!1,k=t.prototype,I=k[h]||k["@@iterator"]||d&&k[d],A=!b&&I||E(d),M="Array"==n&&k.entries||I;if(M&&(O=i(M.call(new t)),v!==Object.prototype&&O.next&&(p||i(O)===v||(c?c(O,v):"function"!=typeof O[h]&&f(O,h,x)),u(O,P,!0,!0),p&&(l[P]=x))),d==m&&I&&I.name!==m&&(T=!0,A=function(){return I.call(this)}),p&&!j||k[h]===A||f(k,h,A),l[n]=A,d)if(S={values:E(m),keys:w?A:E(y),entries:E(g)},j)for(_ in S)(b||T||!(_ in k))&&a(k,_,S[_]);else r({target:n,proto:!0,forced:b||T},S);return S}},"7f9a":function(t,n,e){var r=e("da84"),o=e("8925"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(t,n,e){var r=e("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,n,e){var r=e("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,n,e){var r=e("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"90e3":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},9112:function(t,n,e){var r=e("83ab"),o=e("9bf2"),i=e("5c6c");t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},"94ca":function(t,n,e){var r=e("d039"),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},"9bf2":function(t,n,e){var r=e("83ab"),o=e("0cfb"),i=e("825a"),c=e("c04e"),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},"9ed3":function(t,n,e){"use strict";var r=e("ae93").IteratorPrototype,o=e("7c73"),i=e("5c6c"),c=e("d44e"),u=e("3f8c"),f=function(){return this};t.exports=function(t,n,e){var a=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,a,!1,!0),u[a]=f,t}},a4b4:function(t,n,e){var r=e("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a691:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},a79d:function(t,n,e){"use strict";var r=e("23e7"),o=e("c430"),i=e("fea9"),c=e("d039"),u=e("d066"),f=e("4840"),a=e("cdf9"),s=e("6eeb"),p=!!i&&c((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));r({target:"Promise",proto:!0,real:!0,forced:p},{finally:function(t){var n=f(this,u("Promise")),e="function"==typeof t;return this.then(e?function(e){return a(n,t()).then((function(){return e}))}:t,e?function(e){return a(n,t()).then((function(){throw e}))}:t)}}),o||"function"!=typeof i||i.prototype["finally"]||s(i.prototype,"finally",u("Promise").prototype["finally"])},ae93:function(t,n,e){"use strict";var r,o,i,c=e("d039"),u=e("e163"),f=e("9112"),a=e("5135"),s=e("b622"),p=e("c430"),l=s("iterator"),d=!1,v=function(){return this};[].keys&&(i=[].keys(),"next"in i?(o=u(u(i)),o!==Object.prototype&&(r=o)):d=!0);var b=void 0==r||c((function(){var t={};return r[l].call(t)!==t}));b&&(r={}),p&&!b||a(r,l)||f(r,l,v),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},b0c0:function(t,n,e){var r=e("83ab"),o=e("9bf2").f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/,f="name";r&&!(f in i)&&o(i,f,{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},b575:function(t,n,e){var r,o,i,c,u,f,a,s,p=e("da84"),l=e("06cf").f,d=e("2cf4").set,v=e("1cdc"),b=e("a4b4"),h=e("605d"),y=p.MutationObserver||p.WebKitMutationObserver,m=p.document,g=p.process,x=p.Promise,w=l(p,"queueMicrotask"),j=w&&w.value;j||(r=function(){var t,n;h&&(t=g.domain)&&t.exit();while(o){n=o.fn,o=o.next;try{n()}catch(e){throw o?c():i=void 0,e}}i=void 0,t&&t.enter()},v||h||b||!y||!m?x&&x.resolve?(a=x.resolve(void 0),s=a.then,c=function(){s.call(a,r)}):c=h?function(){g.nextTick(r)}:function(){d.call(p,r)}:(u=!0,f=m.createTextNode(""),new y(r).observe(f,{characterData:!0}),c=function(){f.data=u=!u})),t.exports=j||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},b622:function(t,n,e){var r=e("da84"),o=e("5692"),i=e("5135"),c=e("90e3"),u=e("4930"),f=e("fdbf"),a=o("wks"),s=r.Symbol,p=f?s:s&&s.withoutSetter||c;t.exports=function(t){return i(a,t)&&(u||"string"==typeof a[t])||(u&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},c04e:function(t,n,e){var r=e("861d");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,n){t.exports=!1},c6b6:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},c6cd:function(t,n,e){var r=e("da84"),o=e("ce4e"),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},c8ba:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},ca84:function(t,n,e){var r=e("5135"),o=e("fc6a"),i=e("4d64").indexOf,c=e("d012");t.exports=function(t,n){var e,u=o(t),f=0,a=[];for(e in u)!r(c,e)&&r(u,e)&&a.push(e);while(n.length>f)r(u,e=n[f++])&&(~i(a,e)||a.push(e));return a}},cc12:function(t,n,e){var r=e("da84"),o=e("861d"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},cca6:function(t,n,e){var r=e("23e7"),o=e("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(t,n,e){var r=e("825a"),o=e("861d"),i=e("f069");t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t),c=e.resolve;return c(n),e.promise}},ce4e:function(t,n,e){var r=e("da84"),o=e("9112");t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},d066:function(t,n,e){var r=e("428f"),o=e("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},d1e7:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},d2bb:function(t,n,e){var r=e("825a"),o=e("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(e,[]),n=e instanceof Array}catch(i){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},d44e:function(t,n,e){var r=e("9bf2").f,o=e("5135"),i=e("b622"),c=i("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,c)&&r(t,c,{configurable:!0,value:n})}},da84:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e("c8ba"))},daf5:function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("b0c0");var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{class:["vd-button","button-type-"+t.type,"button-size-"+t.size,{"vd-disabled":t.disabled}],attrs:{disabled:t.prohibit},on:{click:function(n){return t.vdClick(n)}}},[t._t("default")],2)},o=[],i={name:"vd-button",props:{type:{type:String,default:"default"},size:{type:String,default:"medium"},disabled:Boolean},methods:{vdClick:function(t){this.$emit("click",t)}},computed:{prohibit:function(){return this.disabled||void 0}}},c=i,u=(e("3fb9"),e("2877")),f=Object(u["a"])(c,r,o,!1,null,"1e0cfd14",null),a=f.exports;a.install=function(t){t.component(a.name,a)};n["default"]=a},df75:function(t,n,e){var r=e("ca84"),o=e("7839");t.exports=Object.keys||function(t){return r(t,o)}},e163:function(t,n,e){var r=e("5135"),o=e("7b0b"),i=e("f772"),c=e("e177"),u=i("IE_PROTO"),f=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},e177:function(t,n,e){var r=e("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,n,e){"use strict";var r=e("fc6a"),o=e("44d2"),i=e("3f8c"),c=e("69f3"),u=e("7dd0"),f="Array Iterator",a=c.set,s=c.getterFor(f);t.exports=u(Array,"Array",(function(t,n){a(this,{type:f,target:r(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},e2cc:function(t,n,e){var r=e("6eeb");t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},e667:function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(n){return{error:!0,value:n}}}},e6cf:function(t,n,e){"use strict";var r,o,i,c,u=e("23e7"),f=e("c430"),a=e("da84"),s=e("d066"),p=e("fea9"),l=e("6eeb"),d=e("e2cc"),v=e("d44e"),b=e("2626"),h=e("861d"),y=e("1c0b"),m=e("19aa"),g=e("8925"),x=e("2266"),w=e("1c7e"),j=e("4840"),O=e("2cf4").set,S=e("b575"),_=e("cdf9"),E=e("44de"),P=e("f069"),T=e("e667"),k=e("69f3"),I=e("94ca"),A=e("b622"),M=e("605d"),R=e("2d00"),C=A("species"),F="Promise",N=k.get,z=k.set,$=k.getterFor(F),D=p,L=a.TypeError,U=a.document,G=a.process,W=s("fetch"),B=P.f,q=B,V=!!(U&&U.createEvent&&a.dispatchEvent),X="function"==typeof PromiseRejectionEvent,Y="unhandledrejection",K="rejectionhandled",H=0,J=1,Q=2,Z=1,tt=2,nt=I(F,(function(){var t=g(D)!==String(D);if(!t){if(66===R)return!0;if(!M&&!X)return!0}if(f&&!D.prototype["finally"])return!0;if(R>=51&&/native code/.test(D))return!1;var n=D.resolve(1),e=function(t){t((function(){}),(function(){}))},r=n.constructor={};return r[C]=e,!(n.then((function(){}))instanceof e)})),et=nt||!w((function(t){D.all(t)["catch"]((function(){}))})),rt=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},ot=function(t,n){if(!t.notified){t.notified=!0;var e=t.reactions;S((function(){var r=t.value,o=t.state==J,i=0;while(e.length>i){var c,u,f,a=e[i++],s=o?a.ok:a.fail,p=a.resolve,l=a.reject,d=a.domain;try{s?(o||(t.rejection===tt&&ft(t),t.rejection=Z),!0===s?c=r:(d&&d.enter(),c=s(r),d&&(d.exit(),f=!0)),c===a.promise?l(L("Promise-chain cycle")):(u=rt(c))?u.call(c,p,l):p(c)):l(r)}catch(v){d&&!f&&d.exit(),l(v)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&ct(t)}))}},it=function(t,n,e){var r,o;V?(r=U.createEvent("Event"),r.promise=n,r.reason=e,r.initEvent(t,!1,!0),a.dispatchEvent(r)):r={promise:n,reason:e},!X&&(o=a["on"+t])?o(r):t===Y&&E("Unhandled promise rejection",e)},ct=function(t){O.call(a,(function(){var n,e=t.facade,r=t.value,o=ut(t);if(o&&(n=T((function(){M?G.emit("unhandledRejection",r,e):it(Y,e,r)})),t.rejection=M||ut(t)?tt:Z,n.error))throw n.value}))},ut=function(t){return t.rejection!==Z&&!t.parent},ft=function(t){O.call(a,(function(){var n=t.facade;M?G.emit("rejectionHandled",n):it(K,n,t.value)}))},at=function(t,n,e){return function(r){t(n,r,e)}},st=function(t,n,e){t.done||(t.done=!0,e&&(t=e),t.value=n,t.state=Q,ot(t,!0))},pt=function(t,n,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===n)throw L("Promise can't be resolved itself");var r=rt(n);r?S((function(){var e={done:!1};try{r.call(n,at(pt,e,t),at(st,e,t))}catch(o){st(e,o,t)}})):(t.value=n,t.state=J,ot(t,!1))}catch(o){st({done:!1},o,t)}}};nt&&(D=function(t){m(this,D,F),y(t),r.call(this);var n=N(this);try{t(at(pt,n),at(st,n))}catch(e){st(n,e)}},r=function(t){z(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:H,value:void 0})},r.prototype=d(D.prototype,{then:function(t,n){var e=$(this),r=B(j(this,D));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=M?G.domain:void 0,e.parent=!0,e.reactions.push(r),e.state!=H&&ot(e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=N(t);this.promise=t,this.resolve=at(pt,n),this.reject=at(st,n)},P.f=B=function(t){return t===D||t===i?new o(t):q(t)},f||"function"!=typeof p||(c=p.prototype.then,l(p.prototype,"then",(function(t,n){var e=this;return new D((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof W&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return _(D,W.apply(a,arguments))}}))),u({global:!0,wrap:!0,forced:nt},{Promise:D}),v(D,F,!1,!0),b(F),i=s(F),u({target:F,stat:!0,forced:nt},{reject:function(t){var n=B(this);return n.reject.call(void 0,t),n.promise}}),u({target:F,stat:!0,forced:f||nt},{resolve:function(t){return _(f&&this===i?D:this,t)}}),u({target:F,stat:!0,forced:et},{all:function(t){var n=this,e=B(n),r=e.resolve,o=e.reject,i=T((function(){var e=y(n.resolve),i=[],c=0,u=1;x(t,(function(t){var f=c++,a=!1;i.push(void 0),u++,e.call(n,t).then((function(t){a||(a=!0,i[f]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=B(n),r=e.reject,o=T((function(){var o=y(n.resolve);x(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},e893:function(t,n,e){var r=e("5135"),o=e("56ef"),i=e("06cf"),c=e("9bf2");t.exports=function(t,n){for(var e=o(n),u=c.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||u(t,s,f(n,s))}}},e95a:function(t,n,e){var r=e("b622"),o=e("3f8c"),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},f069:function(t,n,e){"use strict";var r=e("1c0b"),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},f5df:function(t,n,e){var r=e("00ee"),o=e("c6b6"),i=e("b622"),c=i("toStringTag"),u="Arguments"==o(function(){return arguments}()),f=function(t,n){try{return t[n]}catch(e){}};t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=f(n=Object(t),c))?e:u?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},f772:function(t,n,e){var r=e("5692"),o=e("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fc6a:function(t,n,e){var r=e("44ad"),o=e("1d80");t.exports=function(t){return r(o(t))}},fdbf:function(t,n,e){var r=e("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,n,e){var r=e("da84");t.exports=r.Promise}})["default"]}));