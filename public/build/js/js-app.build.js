/*! For license information please see js-app.build.js.LICENSE.txt?v=12bf97 */
!function(e){function t(t){for(var n,r,i=t[0],a=t[1],s=0,c=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);c.length;)c.shift()()}var n={},o={2:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"js/"+({0:"bouncer-validation"}[e]||e)+".build.js?v=12bf97"}(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/build/",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=a;r(r.s=21)}([function(e,t){e.exports=function(e){try{var t=window["".concat(e,"Storage")];return t.setItem("test","1"),t.removeItem("test"),!0}catch(e){return!1}}},function(e,t){e.exports=function(e){if("local"===e){if(app.test.isLocalStorageSupported)return window.localStorage}else if(app.test.isSessionStorageSupported)return window.sessionStorage;return{_data:{},setItem:function(e,t){return this._data[e]=String(t)},getItem:function(e){return this._data.hasOwnProperty(e)?this._data[e]:void 0},removeItem:function(e){return delete this._data[e]},clear:function(){return this._data={}}}}},function(e,t){e.exports=function(){var e=window.navigator&&window.navigator.msMaxTouchPoints&&window.MSGesture;return!!("ontouchstart"in window||e||window.DocumentTouch&&document instanceof DocumentTouch)}},function(e,t){e.exports=function(){return window.innerWidth/parseFloat(getComputedStyle(document.querySelector("body"))["font-size"])}},function(e,t){e.exports=function(e,t,n,o){if(e&&t){var r,i;if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),r="; expires="+a.toGMTString()}else r="";i=o?"; domain="+o:"",document.cookie="".concat(e,"=").concat(t).concat(r,"; path=/").concat(i)}}},function(e,t){e.exports=function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null}},function(e,t){e.exports=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}},,function(e,t){!function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,o=Object.create(null),r=function(){clearTimeout(t),t=setTimeout(e,100)},i=function(){},a=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,o,r;return window.XMLHttpRequest&&(n=new XMLHttpRequest,o=t(location),r=t(e),n=void 0===n.withCredentials&&""!==r&&r!==o?XDomainRequest||void 0:XMLHttpRequest),n},s="http://www.w3.org/1999/xlink";e=function(){var e,t,n,u,c,l,d,f,m,h,p=0;function w(){var e;0===(p-=1)&&(i(),window.addEventListener("resize",r,!1),window.addEventListener("orientationchange",r,!1),window.MutationObserver?((e=new MutationObserver(r)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i=function(){try{e.disconnect(),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",r,!1),i=function(){document.documentElement.removeEventListener("DOMSubtreeModified",r,!1),window.removeEventListener("resize",r,!1),window.removeEventListener("orientationchange",r,!1)}))}function v(e){return function(){!0!==o[e.base]&&(e.useEl.setAttributeNS(s,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function g(e){return function(){var t,n=document.body,o=document.createElement("x");e.onload=null,o.innerHTML=e.responseText,(t=o.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",n.insertBefore(t,n.firstChild)),w()}}function b(e){return function(){e.onerror=null,e.ontimeout=null,w()}}for(i(),m=document.getElementsByTagName("use"),c=0;c<m.length;c+=1){try{t=m[c].getBoundingClientRect()}catch(e){t=!1}e=(f=(u=m[c].getAttribute("href")||m[c].getAttributeNS(s,"href")||m[c].getAttribute("xlink:href"))&&u.split?u.split("#"):["",""])[0],n=f[1],l=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!l?(m[c].hasAttribute("href")&&m[c].setAttributeNS(s,"xlink:href",u),e.length&&(!0!==(h=o[e])&&setTimeout(v({useEl:m[c],base:e,hash:n}),0),void 0===h&&void 0!==(d=a(e))&&(h=new d,o[e]=h,h.onload=g(h),h.onerror=b(h),h.ontimeout=b(h),h.open("GET",e),h.send(),p+=1))):l?e.length&&o[e]&&setTimeout(v({useEl:m[c],base:e,hash:n}),0):void 0===o[e]?o[e]=!0:o[e].onload&&(o[e].abort(),delete o[e].onload,o[e]=!0)}m="",p+=1,w()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}()},function(e,t,n){window.hasClass=n(10),window.addClass=n(11),window.removeClass=n(12),window.replaceClass=n(13),window.toggleClass=n(14)},function(e,t){e.exports=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}},function(e,t){e.exports=function(e,t){hasClass(e,t)||(e.className+=" "+t)}},function(e,t){e.exports=function(e,t){if(hasClass(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}},function(e,t){e.exports=function(e,t){if(hasClass(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}},function(e,t){e.exports=function(e,t){hasClass(e,t)?removeClass(e,t):addClass(e,t)}},,,,,,,function(e,t,n){"use strict";n.r(t);n(8);var o=n(0),r=n.n(o),i=n(2),a=n.n(i),s=n(3),u=n.n(s),c=n(1),l=n.n(c),d=n(4),f=n.n(d),m=n(5),h=n.n(m),p=n(6),w=n.n(p),v=(n(9),new Promise((function(e,t){n.e(0).then(n.t.bind(null,23,7)).then((function(n){window.Bouncer=n.default,"function"==typeof window.Bouncer?e(this):t(Error("can't load Bouncer..."))}))}))),g={missingValue:{checkbox:"Dit veld is verplicht.",radio:"Selecteer een waarde.",select:"Selecteer een waarde.","select-multiple":"Kies een waarde.",default:"Dit veld is niet (correct) ingevuld."},patternMismatch:{email:"Vul een geldig e-mailadres in.",url:"Vul een geldige url in.",number:"Vul een nummer in.",color:"Kleuren moeten deze notatie hebben: #rrggbb.",date:"Gebruik het datumformat: YYYY-MM-DD.",time:"Gebruik het 24 uur tijdformaat: Bijvoorbeeld 23:00.",month:"Gebruik het datumformat: YYYY-MM.",password:"Het wachtwoord voldoet niet aan de eisen.",default:"Gebruik het juiste format."},outOfRange:{over:"Kies een waarde lager dan {max}.",under:"Kies een waarde hoger dan {min}."},wrongLength:{over:"Sorry. Je hebt teveel karakters gebruikt. Je gebruikt nu {length} karakters en er is een maximum van {maxLength}.",under:"In dit veld zijn er minimaal {minLength} karakters nodig. Je gebruikt nu {length} karakters."}},b=document.querySelector(".js-form-validate");var y=function(){b&&v.then((function(){new Bouncer(".js-form-validate",{fieldClass:"form__input--error",errorClass:"form__error",messages:g})}))};app.config={breakpoints:{sm:30,md:40,lg:60,xl:74,hamburger:60}},app.test={isEnvironmentIsDev:window.location.host.indexOf(".ebox")>-1,isEnvironmentIsTest:window.location.host.indexOf(".tdebv.nl")>-1,isSessionStorageSupported:r()("session"),isLocalStorageSupported:r()("local"),isTouchDevice:a()()},app.helper={giveScreenWidth:u.a,localStorage:l()("local"),sessionStorage:l()("session"),setCookie:f.a,getCookie:h.a,removeCookie:w.a},y()}]);