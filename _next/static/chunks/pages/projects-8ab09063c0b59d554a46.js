_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"5Yp1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),i=n("b0oO");function o(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.a,{}),Object(r.jsx)("main",{children:e.content})]})}},ARxz:function(e,t,n){e.exports={navUl:"Header_navUl__zCfCS",navLi:"Header_navLi__3AoiR",A:"Header_A__1kR4U",navA:"Header_navA__2RVJ6",navContainer:"Header_navContainer__3Lu9p",logo:"Header_logo__1ZEvY"}},D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("RHEb")}])},LQbt:function(e,t,n){e.exports={container:"Projects_container__5dFV2",item:"Projects_item__1vXUZ",projectName:"Projects_projectName__3x-DT",info:"Projects_info__3rYzx",description:"Projects_description__1loMz"}},RHEb:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var r=n("nKUr"),i=n("W9HR"),o=n("LQbt"),c=n.n(o),a=n("5Yp1"),u=n("q1tI"),s=Object.prototype.hasOwnProperty;var f=new WeakMap,l=0;var d=function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):f.has(e[n])?r=f.get(e[n]):(r=l,f.set(e[n],l++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}(),v=!0,p={isOnline:function(){return v},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){v=!0,e()}),!1),window.addEventListener("offline",(function(){return v=!1}),!1))}},h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},b=new d;var y="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),g=h({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),c=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,c,i)}},errorRetryInterval:1e3*(y?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(y?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i&&e(t[i],n[i]);)i--;return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(s.call(t,r)&&++i&&!s.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},isPaused:function(){return!1}},p),j=Object(u.createContext)({});j.displayName="SWRConfigContext";var m=j,O=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}u((r=r.apply(e,t||[])).next())}))},_=function(e,t){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){c.label=o[1];break}if(6===o[0]&&c.label<i[1]){c.label=i[1],i=o;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(o);break}i[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},w="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),x=w?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},E=w?u.useEffect:u.useLayoutEffect,R={},L={},N={},C={},k={},T={},P={},I=function(){var e=0;return function(){return++e}}();if(!w){var V=function(e){if(g.isDocumentVisible()&&g.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof g.registerOnFocus&&g.registerOnFocus((function(){return V(N)})),"function"===typeof g.registerOnReconnect&&g.registerOnReconnect((function(){return V(C)}))}var M=function(e,t){void 0===t&&(t=!0);var n=b.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var c=k[r];if(r&&c){for(var a=b.get(r),u=b.get(i),s=b.get(o),f=[],l=0;l<c.length;++l)f.push(c[l](t,a,u,s,l>0));return Promise.all(f).then((function(){return b.get(r)}))}return Promise.resolve(b.get(r))},D=function(e,t,n,r){var i=k[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},H=function(e,t,n){return void 0===n&&(n=!0),O(void 0,void 0,void 0,(function(){var r,i,o,c,a,u,s,f,l,d,v,p,h;return _(this,(function(y){switch(y.label){case 0:if(r=b.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,M(e,n)];if(T[i]=I()-1,P[i]=0,c=T[i],a=L[i],f=!1,t&&"function"===typeof t)try{t=t(b.get(i))}catch(g){t=void 0,s=g}if(!t||"function"!==typeof t.then)return[3,5];f=!0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t];case 2:return u=y.sent(),[3,4];case 3:return l=y.sent(),s=l,[3,4];case 4:return[3,6];case 5:u=t,y.label=6;case 6:if((d=function(){if(c!==T[i]||a!==L[i]){if(s)throw s;return!0}})())return[2,u];if("undefined"!==typeof u&&b.set(i,u),b.set(o,s),P[i]=I()-1,!f&&d())return[2,u];if(v=k[i]){for(p=[],h=0;h<v.length;++h)p.push(v[h](!!n,u,s,void 0,h>0));return[2,Promise.all(p).then((function(){if(s)throw s;return b.get(i)}))]}if(s)throw s;return[2,u]}}))}))};m.Provider;var z=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=t[0],i=Object.assign({},g,Object(u.useContext)(m),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),o=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:i.fetcher,c=b.serializeKey(r),a=c[0],s=c[1],f=c[2],l=c[3],d=Object(u.useRef)(i);E((function(){d.current=i}));var v=function(){return i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount},p=function(){var e=b.get(a);return"undefined"===typeof e?i.initialData:e},h=function(){return!!b.get(l)||a&&v()},y=p(),j=b.get(f),V=h(),M=Object(u.useRef)({data:!1,error:!1,isValidating:!1}),z=Object(u.useRef)({data:y,error:j,isValidating:V});Object(u.useDebugValue)(z.current.data);var A,K,S=Object(u.useState)(null)[1],U=Object(u.useCallback)((function(e){var t=!1;for(var n in e)z.current[n]!==e[n]&&(z.current[n]=e[n],M.current[n]&&(t=!0));if(t){if(W.current||!q.current)return;S({})}}),[]),W=Object(u.useRef)(!1),F=Object(u.useRef)(a),q=Object(u.useRef)(!1),Y=Object(u.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];W.current||q.current&&a===F.current&&(t=d.current)[e].apply(t,n)}),[a]),J=Object(u.useCallback)((function(e,t){return H(F.current,e,t)}),[]),G=function(e,t){t&&(e[a]?e[a].push(t):e[a]=[t])},X=function(e,t){if(e[a]){var n=e[a],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},Q=Object(u.useCallback)((function(t){return void 0===t&&(t={}),O(e,void 0,void 0,(function(){var e,n,r,c,u,v,p,h,y,g;return _(this,(function(j){switch(j.label){case 0:if(!a||!o)return[2,!1];if(W.current)return[2,!1];if(d.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,c=void 0!==r&&r,u=!0,v="undefined"!==typeof R[a]&&c,j.label=1;case 1:return j.trys.push([1,6,,7]),U({isValidating:!0}),b.set(l,!0),v||D(a,z.current.data,z.current.error,!0),p=void 0,h=void 0,v?(h=L[a],[4,R[a]]):[3,3];case 2:return p=j.sent(),[3,5];case 3:return i.loadingTimeout&&!b.get(a)&&setTimeout((function(){u&&Y("onLoadingSlow",a,i)}),i.loadingTimeout),R[a]=null!==s?o.apply(void 0,s):o(a),L[a]=h=I(),[4,R[a]];case 4:p=j.sent(),setTimeout((function(){delete R[a],delete L[a]}),i.dedupingInterval),Y("onSuccess",p,a,i),j.label=5;case 5:return L[a]>h?[2,!1]:T[a]&&(h<=T[a]||h<=P[a]||0===P[a])?(U({isValidating:!1}),[2,!1]):(b.set(f,void 0),b.set(l,!1),y={isValidating:!1},"undefined"!==typeof z.current.error&&(y.error=void 0),i.compare(z.current.data,p)||(y.data=p,b.set(a,p)),U(y),v||D(a,p,y.error,!1),[3,7]);case 6:return g=j.sent(),delete R[a],delete L[a],d.current.isPaused()?(U({isValidating:!1}),[2,!1]):(b.set(f,g),z.current.error!==g&&(U({isValidating:!1,error:g}),v||D(a,void 0,g,!1)),Y("onError",g,a,i),i.shouldRetryOnError&&Y("onErrorRetry",g,a,i,Q,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return u=!1,[2,!0]}}))}))}),[a]);if(E((function(){if(a){W.current=!1;var e=q.current;q.current=!0;var t=z.current.data,n=p();F.current!==a&&(F.current=a),i.compare(t,n)||U({data:n});var r=function(){return Q({dedupe:!0})};(e||v())&&("undefined"===typeof n||w?r():x(r));var o=!1,c=function(){!o&&d.current.revalidateOnFocus&&(o=!0,r(),setTimeout((function(){return o=!1}),d.current.focusThrottleInterval))},u=function(){d.current.revalidateOnReconnect&&r()},s=function(e,t,n,o,c){void 0===e&&(e=!0),void 0===c&&(c=!0);var a={},u=!1;return"undefined"===typeof t||i.compare(z.current.data,t)||(a.data=t,u=!0),z.current.error!==n&&(a.error=n,u=!0),"undefined"!==typeof o&&z.current.isValidating!==o&&(a.isValidating=o,u=!0),u&&U(a),!!e&&(c?r():Q())};return G(N,c),G(C,u),G(k,s),function(){U=function(){return null},W.current=!0,X(N,c),X(C,u),X(k,s)}}}),[a,Q]),E((function(){var t=null,n=function(){return O(e,void 0,void 0,(function(){return _(this,(function(e){switch(e.label){case 0:return z.current.error||!d.current.refreshWhenHidden&&!d.current.isDocumentVisible()||!d.current.refreshWhenOffline&&!d.current.isOnline()?[3,2]:[4,Q({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return d.current.refreshInterval&&t&&(t=setTimeout(n,d.current.refreshInterval)),[2]}}))}))};return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,Q]),i.suspense){if(A=b.get(a),K=b.get(f),"undefined"===typeof A&&(A=y),"undefined"===typeof K&&(K=j),"undefined"===typeof A&&"undefined"===typeof K){if(R[a]||Q(),R[a]&&"function"===typeof R[a].then)throw R[a];A=R[a]}if("undefined"===typeof A&&K)throw K}var Z=Object(u.useMemo)((function(){var e={revalidate:Q,mutate:J};return Object.defineProperties(e,{error:{get:function(){return M.current.error=!0,i.suspense?K:F.current===a?z.current.error:j},enumerable:!0},data:{get:function(){return M.current.data=!0,i.suspense?A:F.current===a?z.current.data:y},enumerable:!0},isValidating:{get:function(){return M.current.isValidating=!0,!!a&&z.current.isValidating},enumerable:!0}}),e}),[Q,y,j,J,a,i.suspense,K,A]);return Z};var A=z,K=n("YFqc"),S=n.n(K);function U(){var e=A("https://api.github.com/users/ibveecnk/repos"),t=e.data;return e.error?Object(r.jsx)("div",{children:"failed to load"}):t?"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"==t.documentation_url?Object(r.jsx)("div",{children:"You have been ratelimited by GitHub, please check back later."}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:c.a.info,children:["Total repos: ",t.length]}),Object(r.jsx)("ul",{className:c.a.container,children:t.map((function(e,t){return Object(r.jsx)("li",{className:c.a.item,children:Object(r.jsxs)("div",{className:c.a.projectWrapper,children:[Object(r.jsx)(S.a,{href:e.html_url,children:Object(r.jsx)("span",{className:c.a.projectName,children:Object(r.jsx)("b",{children:e.name})})}),e.description?Object(r.jsx)("span",{className:c.a.description,children:" "+e.description}):Object(r.jsx)("span",{className:c.a.description,children:" No description was provided!"})]})},t)}))})]}):Object(r.jsx)("div",{children:"loading..."})}function W(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(a.a,{content:null}),Object(r.jsx)(i.a,{text:"Projects"}),U()]})}},W9HR:function(e,t,n){"use strict";var r=n("nKUr");t.a=function(e){var t=e.text;return Object(r.jsx)("div",{className:"tWrapper",children:Object(r.jsx)("h1",{className:"title",children:t||""})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},b0oO:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),i=n("YFqc"),o=n.n(i),c=n("ARxz"),a=n.n(c);function u(e){return Object(r.jsxs)("div",{className:a.a.navContainer,children:[Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{className:a.a.A,children:Object(r.jsx)("img",{className:a.a.logo,src:"/icon.png",width:"40px",height:"40px",alt:"ibveecnk"})})}),Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{className:a.a.navUl,children:Object(r.jsx)("li",{className:a.a.navLi,children:Object(r.jsx)(o.a,{href:"/projects",children:Object(r.jsx)("a",{className:a.a.navA&&a.a.A,children:"Projects"})})})})})]})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var o=i(n("q1tI")),c=n("elyg"),a=n("nOHt"),u=n("vNVm"),s={};function f(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),i=n&&n.pathname||"/",l=o.default.useMemo((function(){var t=(0,c.resolveHref)(i,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,c.resolveHref)(i,e.as):a||o}}),[i,e.href,e.as]),d=l.href,v=l.as,p=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var j=o.Children.only(p),m=j&&"object"===typeof j&&j.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),_=r(O,2),w=_[0],x=_[1],E=o.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,o.useEffect)((function(){var e=x&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,i=s[d+"%"+v+(r?"%"+r:"")];e&&!i&&f(n,d,v,{locale:r})}),[v,d,x,g,t,n]);var R={ref:E,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o,locale:u,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,d,v,h,b,y,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),f(n,d,v,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var L="undefined"!==typeof g?g:n&&n.locale,N=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(v,L,n&&n.locales,n&&n.domainLocales);R.href=N||(0,c.addBasePath)((0,c.addLocale)(v,L,n&&n.defaultLocale))}return o.default.cloneElement(j,R)};t.default=l},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=(0,i.useRef)(),s=(0,i.useState)(!1),f=r(s,2),l=f[0],d=f[1],v=(0,i.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,i.useEffect)((function(){if(!c&&!l){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[l]),[v,l]};var i=n("q1tI"),o=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var a=new Map}},[["D85t",0,2,1]]]);