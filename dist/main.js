(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>d});var t=e(645),o=e.n(t),i=e(667),a=e.n(i),c=e(825),l=o()((function(n){return n[1]})),s=a()(c);l.push([n.id,"html,body {\r\n    background-color: black;\r\n    height: 100%;\r\n    margin: 0;\r\n    font-family: 'Italianno', cursive;\r\n\r\n}\r\nh1 {\r\n    text-align:center;\r\n    font-size:6em;\r\n    color: white;\r\n    margin-bottom: 0%;\r\n    margin-top: 0%;\r\n\r\n}\r\nimg {\r\n    border-radius: 50%;\r\n    width: 75%;\r\n    padding-top: 5px;\r\n    padding-bottom: 50px;\r\n}\r\n.leftTab {\r\n    color: white;\r\n    display: inline;\r\n    margin-right: 20px;\r\n}\r\n.leftTab:hover {\r\n    color: grey;\r\n    transform: rotate(0.5turn);\r\n}\r\n.centerTab {\r\n    color: white;\r\n    display: inline;\r\n    margin-right: 20px;\r\n}\r\n.centerTab:hover {\r\n    color: grey;\r\n}\r\n.rightTab {\r\n    color: white;\r\n    display: inline;\r\n\r\n}\r\n.rightTab:hover {\r\n    color: grey;\r\n}\r\n\r\n.menutabActive {\r\n    color: white;\r\n    display: inline;\r\n    margin-right: 20px;\r\n    text-decoration: underline;\r\n}\r\n.bg {\r\n    background-image: url("+s+");\r\n\r\n    /* Full height */\r\n    height: 100%; \r\n  \r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n}\r\n.navbar {\r\n    padding-top: -20px;\r\n    padding-bottom: 20px;\r\n    margin: auto;\r\n    font-size:300%;\r\n    text-align:center;\r\n}\r\n.content {\r\n    margin-top: 500px;\r\n    max-width: 600px;\r\n    min-height: 550px;\r\n    min-width: 400px;\r\n    font-size: 150%;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.header {\r\n    background-color: rgb(0, 0, 0,0.7);\r\n    margin-top: -5px;\r\n}\r\n.footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: black;\r\n    text-align: center;\r\n    font-size:larger;\r\n    font-weight: bold;\r\n    opacity: 80%;\r\n    font-family: \"Montserrat\", cursive;\r\n\r\n}\r\np {\r\n    color: white;\r\n}\r\n\r\n.gitlink {\r\n    padding-right: 25px;\r\n    text-decoration: none;\r\n    color: white; \r\n\r\n}\r\n.gitlink:hover {\r\n    color: grey;\r\n}\r\n\r\n.Inlink {\r\n    padding-left: 25px;\r\n    text-decoration: none;\r\n    color: white; \r\n \r\n}\r\n.Inlink:hover {\r\n    color: grey;\r\n}\r\n.content {\r\n    text-align: center;\r\n    justify-content: center;\r\n    color: white;\r\n    font-family: 'monsterrat', cursive;\r\n\r\n    margin-top: 5%;\r\n    width: 30%;\r\n    height: 18em;\r\n    padding: 2%;\r\n    background-color: rgb(0, 0, 0,0.7);;\r\n}\r\n.chef_img {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    height: 70%;\r\n\r\n}",""]);const d=l},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],l=r.base?c[0]+r.base:c[0],s=e[l]||0,d="".concat(l," ").concat(s);e[l]=s+1;var u=a(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:g(p,r),references:1}),t.push(d)}return t}function l(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var s,d=(s=[],function(n,r){return s[n]=r,s.filter(Boolean).join("\n")});function u(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,h=0;function g(n,r){var e,t,o;if(r.singleton){var i=h++;e=f||(f=l(r)),t=u.bind(null,e,i,!1),o=u.bind(null,e,i,!0)}else e=l(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var l=c(n,r),s=0;s<e.length;s++){var d=a(e[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=l}}}},825:(n,r,e)=>{n.exports=e.p+"6138051d8bc9fe2c654c.jpg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(426);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;const o=[...document.querySelectorAll("[data-val]")];function i(){[...this.classList].includes("menutabActive")||(o.forEach((n=>{n.classList.remove("menutabActive")})),this.classList.add("menutabActive"))}o.forEach((n=>{n.addEventListener("click",i)}))})()})();