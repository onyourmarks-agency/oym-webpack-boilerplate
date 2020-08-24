/*! For license information please see js-outdated-browser.build.js.LICENSE.txt?v=12bf97 */
!function(e){var i={};function o(r){if(i[r])return i[r].exports;var s=i[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=i,o.d=function(e,i,r){o.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,i){if(1&i&&(e=o(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var s in e)o.d(r,s,function(i){return e[i]}.bind(null,s));return r},o.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(i,"a",i),i},o.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},o.p="/build/",o(o.s=15)}([,,,,,,,function(e,i,o){var r=o(16),s=o(17),n=o(18),t=o(19),a="#f25648",d="white";e.exports=function(e){var i=function(){var i=new t(navigator.userAgent).getResult(),o=document.getElementById("outdated");e=e||{};var l=window.navigator.language||window.navigator.userLanguage,u=e.backgroundColor||a,w=e.textColor||d,c=e.fullscreen||!1,p=e.language||l.slice(0,2),b=e.dismissValidSeconds||604800,m=e.dismissLocalStorage||"outdatedBrowserDismiss",f="web";"Android"===i.os.name?f="googlePlay":"iOS"===i.os.name&&(f="appStore");var g,h,v,y,x,k,S,T,A,E,O=!1,B=function(){return void 0!==Storage},C=r(i,e);if(!function(){if(!B())return!1;var e=Math.floor(window.localStorage.getItem(m)),i=(new Date).getTime();return!!e&&(i<e+b||(window.localStorage.removeItem(m),!1))}()&&(C.isAndroidButNotChrome||C.isBrowserOutOfDate||!C.isPropertySupported)){O=C.isBrowserUnsupported,!1,o.style.display="table";var j=document.getElementById("outdated");c&&j.classList.add("fullscreen"),j.innerHTML=(y=s[v=p]||s.en,x=e.messages&&e.messages[v],k=n({},y,x),S={web:"<p>"+k.update.web+(k.url?'<a id="buttonUpdateBrowser" rel="nofollow" href="'+k.url+'">'+k.callToAction+"</a>":"")+"</p>",googlePlay:"<p>"+k.update.googlePlay+'<a id="buttonUpdateBrowser" rel="nofollow" href="https://play.google.com/store/apps/details?id=com.android.chrome">'+k.callToAction+"</a></p>",appStore:"<p>"+k.update[f]+"</p>"},T="<p>"+k.update.global+"</p>",A=S[f],E=k.outOfDate,O&&k.unsupported&&(E=k.unsupported),'<div class="vertical-center"><h6>'+E+"</h6>"+T+A+'<p class="last"><a href="#" id="buttonCloseUpdateBrowser" title="'+k.close+'">&times;</a></p></div>'),g=document.getElementById("buttonCloseUpdateBrowser"),h=document.getElementById("buttonUpdateBrowser"),o.style.backgroundColor=u,o.style.color=w,o.children[0].children[0].style.color=w,o.children[0].children[1].style.color=w,h&&(h.style.color=w,h.style.borderColor&&(h.style.borderColor=w),h.onmouseover=function(){this.style.color=u,this.style.backgroundColor=w},h.onmouseout=function(){this.style.color=w,this.style.backgroundColor=u}),g.style.color=w,g.onmousedown=function(){return o.style.display="none",B()&&window.localStorage.setItem(m,(new Date).getTime()),!1}}},o=window.onload;"function"!=typeof window.onload?window.onload=i:window.onload=function(){o&&o(),i()}}},,,,,,,,function(e,i,o){"use strict";o.r(i);var r=o(7);o.n(r)()({requiredCssProperty:"object-fit",language:"nl"})},function(e,i){var o={Chrome:57,Edge:39,Safari:10,"Mobile Safari":10,Opera:50,Firefox:50,Vivaldi:1,IE:!1},r={12:.1,13:21,14:31,15:39,16:41,17:42,18:44};e.exports=function(e,i){var s,n=i.browserSupport?function(e,i){for(var o in i)e[o]=i[o];return e}(o,i.browserSupport):o,t=i.requiredCssProperty||!1,a=e.browser.name;i.requireChromeOnAndroid&&(s="Android"===e.os.name&&"Chrome"!==e.browser.name);var d,l=(d=!1,a in n?n[a]||(d=!0):i.isUnknownBrowserOK||(d=!0),d);return{isAndroidButNotChrome:s,isBrowserOutOfDate:function(){var i=e.browser.version,o=e.browser.major,s=e.os.name,t=e.os.version;"Edge"===a&&o<=18&&(o=r[o]),"Firefox"===a&&"iOS"===s&&(a="Mobile Safari",i=t,o=t.substring(0,t.indexOf(".")));var d=!1;if(l)d=!0;else if(a in n){var u=n[a];if("object"==typeof u){var w=u.major,c=u.minor;if(o<w)d=!0;else if(o==w){i.replace(/[^\d.]/g,"").split(".")[1]<c&&(d=!0)}}else o<u&&(d=!0)}return d}(),isBrowserUnsupported:l,isPropertySupported:function(e){if(!e)return!0;var i=document.createElement("div"),o=["khtml","ms","o","moz","webkit"],r=o.length;if(e in i.style)return!0;for(e=e.replace(/^[a-z]/,(function(e){return e.toUpperCase()}));r--;){if(o[r]+e in i.style)return!0}return!1}(t)}}},function(e){e.exports=JSON.parse('{"en":{"outOfDate":"Your browser is out-of-date!","update":{"global":"You are using a web browser that does not support the latest technology. Update your browser to view this website correctly.","web":"There are modern and safer browsers such as Firefox, Microsoft Edge or Google Chrome you can easily upgrade for free and view this and other websites properly.","googlePlay":"Please install Chrome from Google Play","appStore":"Please update iOS from the Settings App"},"url":"https://browser-update.org/update-browser.html","callToAction":"Update my browser now","close":"Close"},"nl":{"outOfDate":"Je gebruikt een verouderde browser","update":{"global":"Je gebruikt een webbrowser die niet de laatste technologie ondersteund. Update je browser om deze website correct te bekijken.","web":"Er zijn moderne en veiligere browsers zoals Firefox, Microsoft Edge of Google Chrome waarnaar je eenvoudig en gratis kunt upgraden om deze en andere websites goed te bekijken.","googlePlay":"Installeer Chrome of Firefox vanuit de Play Store of zoek online hoe je een andere browser kunt installeren op jouw apparaat.","appStore":"Update je iOS versie via instellingen op je apparaat."},"url":"https://browser-update.org/update-browser.html","callToAction":"Update mijn browser nu ","close":"Sluiten"}}')},function(e,i){e.exports=function e(){if(arguments.length<1||"object"!=typeof arguments[0])return!1;if(arguments.length<2)return arguments[0];for(var i=arguments[0],o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r){var n=i[s],t=r[s];i[s]="object"!=typeof t||null===t?t:e("object"!=typeof n||null===n?{}:n,t)}}return i}},function(e,i,o){var r;!function(s,n){"use strict";var t="model",a="name",d="type",l="vendor",u="version",w="mobile",c="tablet",p="smarttv",b={extend:function(e,i){var o={};for(var r in e)i[r]&&i[r].length%2==0?o[r]=i[r].concat(e[r]):o[r]=e[r];return o},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},m={rgx:function(e,i){for(var o,r,s,n,t,a,d=0;d<i.length&&!t;){var l=i[d],u=i[d+1];for(o=r=0;o<l.length&&!t;)if(t=l[o++].exec(e))for(s=0;s<u.length;s++)a=t[++r],"object"==typeof(n=u[s])&&n.length>0?2==n.length?"function"==typeof n[1]?this[n[0]]=n[1].call(this,a):this[n[0]]=n[1]:3==n.length?"function"!=typeof n[1]||n[1].exec&&n[1].test?this[n[0]]=a?a.replace(n[1],n[2]):void 0:this[n[0]]=a?n[1].call(this,a,n[2]):void 0:4==n.length&&(this[n[0]]=a?n[3].call(this,a.replace(n[1],n[2])):void 0):this[n]=a||void 0;d+=2}},str:function(e,i){for(var o in i)if("object"==typeof i[o]&&i[o].length>0){for(var r=0;r<i[o].length;r++)if(b.has(i[o][r],e))return"?"===o?void 0:o}else if(b.has(i[o],e))return"?"===o?void 0:o;return e}},f={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},g={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,u],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,u],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],u],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],u],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],u],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],u],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],u],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[a,u],[/(QQ)\/([\d\.]+)/i],[a,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],u],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,m.str,f.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[t,l,[d,c]],[/applecoremedia\/[\w\.]+ \((ipad)/],[t,[l,"Apple"],[d,c]],[/(apple\s{0,1}tv)/i],[[t,"Apple TV"],[l,"Apple"],[d,p]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[l,t,[d,c]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[t,[l,"Amazon"],[d,c]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[t,m.str,f.device.amazon.model],[l,"Amazon"],[d,w]],[/android.+aft([bms])\sbuild/i],[t,[l,"Amazon"],[d,p]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[t,l,[d,w]],[/\((ip[honed|\s\w*]+);/i],[t,[l,"Apple"],[d,w]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[l,t,[d,w]],[/\(bb10;\s(\w+)/i],[t,[l,"BlackBerry"],[d,w]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[t,[l,"Asus"],[d,c]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[l,"Sony"],[t,"Xperia Tablet"],[d,c]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[t,[l,"Sony"],[d,w]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[l,t,[d,"console"]],[/android.+;\s(shield)\sbuild/i],[t,[l,"Nvidia"],[d,"console"]],[/(playstation\s[34portablevi]+)/i],[t,[l,"Sony"],[d,"console"]],[/(sprint\s(\w+))/i],[[l,m.str,f.device.sprint.vendor],[t,m.str,f.device.sprint.model],[d,w]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[l,[t,/_/g," "],[d,w]],[/(nexus\s9)/i],[t,[l,"HTC"],[d,c]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[t,[l,"Huawei"],[d,w]],[/android.+(bah2?-a?[lw]\d{2})/i],[t,[l,"Huawei"],[d,c]],[/(microsoft);\s(lumia[\s\w]+)/i],[l,t,[d,w]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[t,[l,"Microsoft"],[d,"console"]],[/(kin\.[onetw]{3})/i],[[t,/\./g," "],[l,"Microsoft"],[d,w]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[t,[l,"Motorola"],[d,w]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[t,[l,"Motorola"],[d,c]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[l,b.trim],[t,b.trim],[d,p]],[/hbbtv.+maple;(\d+)/i],[[t,/^/,"SmartTV"],[l,"Samsung"],[d,p]],[/\(dtv[\);].+(aquos)/i],[t,[l,"Sharp"],[d,p]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[l,"Samsung"],t,[d,c]],[/smart-tv.+(samsung)/i],[l,[d,p],t],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[l,"Samsung"],t,[d,w]],[/sie-(\w*)/i],[t,[l,"Siemens"],[d,w]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[l,"Nokia"],t,[d,w]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[t,[l,"Acer"],[d,c]],[/android.+([vl]k\-?\d{3})\s+build/i],[t,[l,"LG"],[d,c]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[l,"LG"],t,[d,c]],[/(lg) netcast\.tv/i],[l,t,[d,p]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[t,[l,"LG"],[d,w]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[l,t,[d,c]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[t,[l,"Lenovo"],[d,c]],[/(lenovo)[_\s-]?([\w-]+)/i],[l,t,[d,w]],[/linux;.+((jolla));/i],[l,t,[d,w]],[/((pebble))app\/[\d\.]+\s/i],[l,t,[d,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[l,t,[d,w]],[/crkey/i],[[t,"Chromecast"],[l,"Google"],[d,p]],[/android.+;\s(glass)\s\d/i],[t,[l,"Google"],[d,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[t,[l,"Google"],[d,c]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[t,[l,"Google"],[d,w]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[l,"Xiaomi"],[d,w]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[l,"Xiaomi"],[d,c]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[t,[l,"Meizu"],[d,w]],[/(mz)-([\w-]{2,})/i],[[l,"Meizu"],t,[d,w]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[t,[l,"OnePlus"],[d,w]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[t,[l,"RCA"],[d,c]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[t,[l,"Dell"],[d,c]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[t,[l,"Verizon"],[d,c]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[l,"Barnes & Noble"],t,[d,c]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[t,[l,"NuVision"],[d,c]],[/android.+;\s(k88)\sbuild/i],[t,[l,"ZTE"],[d,c]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[t,[l,"Swiss"],[d,w]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[t,[l,"Swiss"],[d,c]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[t,[l,"Zeki"],[d,c]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[l,"Dragon Touch"],t,[d,c]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[t,[l,"Insignia"],[d,c]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[t,[l,"NextBook"],[d,c]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[l,"Voice"],t,[d,w]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[l,"LvTel"],t,[d,w]],[/android.+;\s(PH-1)\s/i],[t,[l,"Essential"],[d,w]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[t,[l,"Envizen"],[d,c]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[l,t,[d,c]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[t,[l,"MachSpeed"],[d,c]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[l,t,[d,c]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[t,[l,"Rotor"],[d,c]],[/android.+(KS(.+))\s+build/i],[t,[l,"Amazon"],[d,c]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[l,t,[d,c]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[d,b.lowerize],l,t],[/[\s\/\(](smart-?tv)[;\)]/i],[[d,p]],[/(android[\w\.\s\-]{0,9});.+build/i],[t,[l,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[u,m.str,f.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,m.str,f.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],u],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,u],[/(haiku)\s(\w+)/i],[a,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},h=function(e,i){if("object"==typeof e&&(i=e,e=void 0),!(this instanceof h))return new h(e,i).getResult();var o=e||(s&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:""),r=i?b.extend(g,i):g;return this.getBrowser=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,o,r.browser),e.major=b.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return m.rgx.call(e,o,r.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return m.rgx.call(e,o,r.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,o,r.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,o,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=e,this},this};h.VERSION="0.7.21",h.BROWSER={NAME:a,MAJOR:"major",VERSION:u},h.CPU={ARCHITECTURE:"architecture"},h.DEVICE={MODEL:t,VENDOR:l,TYPE:d,CONSOLE:"console",MOBILE:w,SMARTTV:p,TABLET:c,WEARABLE:"wearable",EMBEDDED:"embedded"},h.ENGINE={NAME:a,VERSION:u},h.OS={NAME:a,VERSION:u},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=h),i.UAParser=h):void 0===(r=function(){return h}.call(i,o,i,e))||(e.exports=r);var v=s&&(s.jQuery||s.Zepto);if(v&&!v.ua){var y=new h;v.ua=y.getResult(),v.ua.get=function(){return y.getUA()},v.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var o in i)v.ua[o]=i[o]}}}("object"==typeof window?window:this)}]);