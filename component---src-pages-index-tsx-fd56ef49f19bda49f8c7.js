/*! For license information please see component---src-pages-index-tsx-fd56ef49f19bda49f8c7.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{9483:function(t,e,r){var n=r(4411),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a constructor")}},8523:function(t,e,r){"use strict";var n=r(9662),o=TypeError,i=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw o("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new i(t)}},2492:function(t,e,r){var n=r(7854);t.exports=n.Promise},9478:function(t,e,r){var n=r(9670),o=r(111),i=r(8523);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},6707:function(t,e,r){var n=r(9670),o=r(9483),i=r(8554),a=r(5112)("species");t.exports=function(t,e){var r,s=n(t).constructor;return void 0===s||i(r=n(s)[a])?e:o(r)}},7727:function(t,e,r){"use strict";var n=r(2109),o=r(1913),i=r(2492),a=r(7293),s=r(5005),f=r(614),u=r(6707),c=r(9478),l=r(8052),d=i&&i.prototype;if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){d.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=u(this,s("Promise")),r=f(t);return this.then(r?function(r){return c(e,t()).then((function(){return r}))}:t,r?function(r){return c(e,t()).then((function(){throw r}))}:t)}}),!o&&f(i)){var p=s("Promise").prototype.finally;d.finally!==p&&l(d,"finally",p,{unsafe:!0})}},7137:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return q}});var n=r(7294),o=r(6595);function i(t,e){return e||(e=t.slice(0)),t.raw=e,t}var a=r(1008),s=r(3723),f=r(7544),u=r(3168),c=r(3431);r(7727),r(4687);var l="undefined"!=typeof window;l&&window,l&&window.document,l&&window.navigator;var d,p,h,m=function(t,e){var r,o,i,a,s,f,u,c,l,d,p=(0,n.useState)(""),h=p[0],m=p[1],g=(0,n.useState)(0),v=g[0],y=g[1];return r=function(){v>=t.length||m((function(e){var r=e?e+t[v]:t[0];return y((function(t){return t+1})),r}))},o=150,s=(a=i||{}).immediate,f=void 0!==s&&s,u=a.paused,c=void 0!==u&&u,l=(0,n.useRef)(r),d=(0,n.useRef)(),(0,n.useEffect)((function(){l.current=r,!c&&f&&r()}),[r,f,c]),(0,n.useEffect)((function(){if(!d.current||!c)return d.current=setInterval((function(){return l.current()}),o),function(){return d.current&&clearInterval(d.current)};clearInterval(d.current)}),[o,c]),e?t:h};var g=(0,c.F4)(d||(d=i(["\n  0% {\n    border: 0.2rem solid #fff;\n    box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 1rem #ff0080,\n      0 0 0.4rem #ff0080, 0 0 1.4rem #ff0080, inset 0 0 0.6rem #ff0080;\n  }\n  100% {\n    border: 0.2rem solid #fff;\n    box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 1rem #ff0080,\n      0 0 0.4rem #ff0080, 0 0 1.4rem #ff0080, inset 0 0 0.6rem #ff0080;\n      display: none;\n  }\n"]))),v=(0,c.F4)(p||(p=i(["\n  0% {\n    border: 0.2rem solid transparent;\n    box-shadow: 0 0 0.1rem transparent, 0 0 0.1rem transparent, 0 0 1rem transparent,\n      0 0 0.4rem transparent, 0 0 1.4rem transparent, inset 0 0 0.6rem transparent;\n  }\n  100% {\n    border: 0.2rem solid #fff;\n    box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 1rem #ff0080,\n      0 0 0.4rem #ff0080, 0 0 1.4rem #ff0080, inset 0 0 0.6rem #ff0080;\n  }\n"]))),y=(0,c.F4)(h||(h=i(["\n  0% {\n    opacity: 1;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n"]))),x=(0,a.Z)("div",{target:"e160b018"})({name:"1o57u6i",styles:"position:relative;padding-top:46px;width:100%;color:#fff;background-color:rgba(0, 0, 0, 0.7)"}),w=(0,a.Z)("div",{target:"e160b017"})("display:flex;flex-direction:column;justify-content:center;align-items:flex-start;max-width:1100px;height:",(function(t){return t.isActive?"100vh":"0px"}),";margin:0 auto;transition:1s;@media (max-width: 1080px){width:100%;height:",(function(t){return t.isActive?"100vh":"0px"}),";padding:0 20px;align-items:center;}"),b=(0,a.Z)(s.G,{target:"e160b016"})({name:"uptw9f",styles:"z-index:-1;position:absolute;top:0;right:0;left:0;bottom:0;width:100%;object-fit:cover"}),k=(0,a.Z)("div",{target:"e160b015"})("padding:5% 3%;border-radius:20px;animation:",(function(t){return!0===t.isActive?v:g})," 0.5s 2s both;transform:",(function(t){return t.isActive?"translateY(-50%)":{}}),";transition:0.5s;opacity:",(function(t){return t.isActive?1:0}),";@media (max-width: 1080px){transform:",(function(t){return t.isActive?"translateY(-100%)":{}}),";padding:3% 2%;}@media (max-width: 768px){transform:",(function(t){return t.isActive?"translateY(-100%)":{}}),";padding:20px 15px;}"),Z=(0,a.Z)("div",{target:"e160b014"})({name:"1ps7j59",styles:"color:white;text-shadow:0 0 3px #fff,0 0 6px #fff,0 0 12px #ff0080,0 0 18px #ff0080,0 0 24px #ff0080,0 0 33px #ff0080,0 0 45px #ff0080"}),E=(0,a.Z)(Z,{target:"e160b013"})({name:"anaep4",styles:"font-size:16px;font-weight:700;@media (max-width: 1080px){font-size:15px;}"}),L=(0,a.Z)(Z,{target:"e160b012"})({name:"9yqqic",styles:"margin-top:10px;font-size:35px;font-weight:700;@media (max-width: 1080px){font-size:25px;}"}),I=(0,a.Z)("div",{target:"e160b011"})("position:absolute;display:flex;right:35%;bottom:35%;animation:",y," 1s 2.5s infinite alternate-reverse;opacity:0;&:hover{animation-play-state:paused;}@media (max-width: 1080px){justify-content:center;left:0;right:0;bottom:30%;}"),_=(0,a.Z)("button",{target:"e160b010"})({name:"bpgv3z",styles:"padding:8px 5px;border:0.2rem solid #fff;border-radius:20px;box-shadow:0 0 0.1rem #fff,0 0 0.1rem #fff,0 0 1rem #ff0080,0 0 0.4rem #ff0080,0 0 1.4rem #ff0080,inset 0 0 0.6rem #ff0080"}),S=function(t){var e=t.introduceBg,r=t.isIntro,o=t.hideIntro,i=(0,n.useState)(!1),a=i[0],s=i[1],l=(0,n.useCallback)((function(t){!0===a&&!0===r&&t.nativeEvent.deltaY>0&&o()}),[r,a]);return(0,n.useEffect)((function(){setTimeout((function(){s(!0)}),2e3)}),[]),(0,c.tZ)(x,{onWheel:l},e&&(0,c.tZ)(b,{image:e,alt:"introduce background image"}),(0,c.tZ)(w,{isActive:r},(0,c.tZ)(k,{isActive:r},(0,c.tZ)(E,null,!1===r||!0===a?"by 프론트엔드 개발자 김태현":" "),(0,c.tZ)(L,null,m("이해를 위한 기술블로그",!r))),!0===r&&(0,c.tZ)(I,{onClick:o},(0,c.tZ)(_,null,(0,c.tZ)(f.G,{icon:u.XVU,color:"white"})))))},j=r(7462);var O=r(1082);var z=(0,a.Z)((function(t){var e=Object.assign({},(function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t),t));return(0,c.tZ)(O.rU,e)}),{target:"e1eg5kak8"})({name:"1p0nm92",styles:"display:flex;flex-direction:column;border:1px solid #ddd;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}&:hover img{transform:scale(1.1);transition:0.4s;}&:not(:hover) img{transform:scale(1);transition:0.4s;}"}),A=(0,a.Z)("div",{target:"e1eg5kak7"})({name:"1ilur23",styles:"display:flex;flex:1;flex-direction:column;padding:5%"}),P=(0,a.Z)(s.G,{target:"e1eg5kak6"})({name:"1orakp0",styles:"border-radius:4px 4px 0 0;object-fit:cover;transition:0.4s transform"}),G=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"147r3b0",styles:"flex:0.5;display:flex;flex-direction:column;align-items:flex-end;padding:5px 0"}),R=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"1w020xl",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:18px;font-weight:700"}),T=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),C=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1xwwxf1",styles:"display:flex;flex-wrap:wrap;margin-top:10px"}),F=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"1nzijz",styles:"margin-left:5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),N=(0,a.Z)("div",{target:"e1eg5kak0"})("display:-webkit-box;overflow:hidden;margin:auto 0;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:",(function(t){return t.hasImg?2:6}),";-webkit-box-orient:vertical;opacity:0.8;"),Y=function(t){var e=t.title,r=t.date,n=t.categories,o=t.summary,i=t.thumbnail,a=t.link,s=t.selectedCategory;return console.log("thumbnail",i),(0,c.tZ)(z,{to:a+"?category="+s},i&&i.childImageSharp.gatsbyImageData?(0,c.tZ)(P,{image:i.childImageSharp.gatsbyImageData,alt:"Post Item Image"}):null,(0,c.tZ)(A,null,(0,c.tZ)(R,null,e),(0,c.tZ)(G,null,(0,c.tZ)(T,null,r),(0,c.tZ)(C,null,n.map((function(t){return(0,c.tZ)(F,{key:t},t)})))),(0,c.tZ)(N,{hasImg:!!i},o)))},M=function(t,e){var r=(0,n.useRef)(null),o=(0,n.useRef)(null),i=(0,n.useState)(1),a=i[0],s=i[1],f=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,n.useEffect)((function(){o.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(s((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return s(1)}),[t]),(0,n.useEffect)((function(){10*a>=f.length||null===r.current||0===r.current.children.length||null===o.current||o.current.observe(r.current.children[r.current.children.length-1])}),[a,t]),{containerRef:r,postList:f.slice(0,10*a)}};var D=(0,a.Z)("div",{target:"es8e92y0"})({name:"e8gxzd",styles:"display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:3em;max-width:1100px;margin:0 auto;padding:50px 0 100px;@media (max-width: 1080px){grid-template-columns:1fr 1fr;grid-gap:2% 5%;padding:50px 20px;}@media (max-width: 768px){grid-template-columns:1fr;grid-gap:1% 2%;width:100%;padding:50px 20px;}"}),U=function(t){var e=t.selectedCategory,r=t.posts,n=M(e,r),o=n.containerRef,i=n.postList;return(0,c.tZ)(D,{ref:o},i.filter((function(t){return t.node.frontmatter.categories.length>0})).map((function(t){var r=t.node,n=r.id,o=r.fields.slug,i=r.frontmatter;return(0,c.tZ)(Y,(0,j.Z)({},i,{link:o,key:n,selectedCategory:e}))})))},B=r(5547),q=function(t){var e=t.location.search,r=t.data,i=r.site.siteMetadata,a=i.title,s=i.description,f=i.siteUrl,u=r.allMarkdownRemark.edges,l=r.file,d=l.childImageSharp.gatsbyImageData,p=l.publicURL;console.log("index gatsbyImageData",d);var h=(0,B.k9)(e),m=sessionStorage.getItem("initIntroState"),g=(0,n.useState)("false"!==m),v=g[0],y=g[1],x=(0,n.useCallback)((function(){!0===v&&(document.body.style.overflow="auto",y(!1),sessionStorage.setItem("initIntroState","false"))}),[]);return(0,n.useEffect)((function(){!0===v&&(document.body.style.overflow="hidden")}),[]),(0,c.tZ)(o.Z,{title:a,description:s,url:f,image:p,isIntro:v},(0,c.tZ)(S,{introduceBg:d,isIntro:v,hideIntro:x}),(0,c.tZ)(U,{selectedCategory:h,posts:u}))}},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",f=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new I(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=Z(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=d(t,e,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===p)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(t,r,a),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var p={};function h(){}function m(){}function g(){}var v={};c(v,s,(function(){return this}));var y=Object.getPrototypeOf,x=y&&y(y(_([])));x&&x!==r&&i.call(x,s)&&(v=x);var w=g.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,s,f){var u=d(t[o],t,a);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==n(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,f)}),(function(t){r("throw",t,s,f)})):e.resolve(l).then((function(t){c.value=t,s(c)}),(function(t){return r("throw",t,s,f)}))}f(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function Z(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,Z(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=g,c(w,"constructor",g),c(g,"constructor",m),m.displayName=c(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(k.prototype),c(k.prototype,f,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),c(w,u,"Generator"),c(w,s,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),f=i.call(o,"finallyLoc");if(s&&f){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,r){var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fd56ef49f19bda49f8c7.js.map