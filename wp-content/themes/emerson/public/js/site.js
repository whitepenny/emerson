!function(e){var t,i,n,a=navigator.userAgent;function s(){for(var e=document.querySelectorAll("picture > img, img[srcset][sizes]"),t=0;t<e.length;t++)!function(e){var t,n,a=e.parentNode;"PICTURE"===a.nodeName.toUpperCase()?(t=i.cloneNode(),a.insertBefore(t,a.firstElementChild),setTimeout(function(){a.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))}(e[t])}function r(){clearTimeout(t),t=setTimeout(s,99)}function o(){r(),n&&n.addListener&&n.addListener(r)}e.HTMLPictureElement&&/ecko/.test(a)&&a.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(i=document.createElement("source"),n=e.matchMedia&&matchMedia("(orientation: landscape)"),i.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),r))}(window),function(e,s,c){"use strict";function d(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function k(e,t){return e.res-t.res}function x(e,t){var n,a,i;if(e&&t)for(i=R.parseSet(t),e=R.makeUrl(e),n=0;n<i.length;n++)if(e===R.makeUrl(i[n].url)){a=i[n];break}return a}function n(e){for(var t,n,a,i,s=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,r=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i,o=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(r.push(s),s=[])}for(var a,i="",s=[],r=[],o=0,l=0,c=!1;;){if(""===(a=e.charAt(l)))return t(),n(),r;if(c){if("*"===a&&"/"===e[l+1]){c=!1,l+=2,t();continue}l+=1}else{if(d(a)){if(e.charAt(l-1)&&d(e.charAt(l-1))||!i){l+=1;continue}if(0===o){t(),l+=1;continue}a=" "}else if("("===a)o+=1;else if(")"===a)--o;else{if(","===a){t(),n(),l+=1;continue}if("/"===a&&"*"===e.charAt(l+1)){c=!0,l+=2;continue}}i+=a,l+=1}}}(e),l=o.length,c=0;c<l;c++)if(n=(t=o[c])[t.length-1],i=n,s.test(i)&&0<=parseFloat(i)||r.test(i)||"0"===i||"-0"===i||"+0"===i){if(a=n,t.pop(),0===t.length)return a;if(t=t.join(" "),R.matchesMedia(t))return a}return"100vw"}s.createElement("picture");function t(){}function a(e,t,n,a){e.addEventListener?e.addEventListener(t,n,a||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function i(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}}function P(e,t){return e.w?(e.cWidth=R.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var r,u,l,o,p,f,h,m,g,v,y,w,b,A,$,C,S,T,E,z,O,R={},I=!1,j=s.createElement("img"),M=j.getAttribute,H=j.setAttribute,D=j.removeAttribute,_=s.documentElement,L={},G={algorithm:""},q="data-pfsrc",W=q+"set",F=navigator.userAgent,Q=/rident/.test(F)||/ecko/.test(F)&&F.match(/rv\:(\d+)/)&&35<RegExp.$1,U="currentSrc",B=/\s+\+?\d+(e\d+)?w/,Y=/(\([^)]+\))?\s*(.+)/,V=e.picturefillCFG,N="font-size:100%!important;",K=!0,J={},X={},Z=e.devicePixelRatio,ee={px:1,in:96},te=s.createElement("a"),ne=!1,ae=/^[ \t\n\r\u000c]+/,ie=/^[, \t\n\r\u000c]+/,se=/^[^ \t\n\r\u000c]+/,re=/[,]+$/,oe=/^\d+$/,le=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,ce=(o=/^([\d\.]+)(em|vw|px)$/,p=i(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in J))if(J[e]=!1,t&&(n=e.match(o)))J[e]=n[1]*ee[n[2]];else try{J[e]=new Function("e",p(e))(ee)}catch(e){}return J[e]}),de=function(e){if(I){var t,n,a,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),a=(t=i.elements||R.qsa(i.context||s,i.reevaluate||i.reselect?R.sel:R.selShort)).length){for(R.setupRun(i),ne=!0,n=0;n<a;n++)R.fillImg(t[n],i);R.teardownRun(i)}}};function ue(){2===S.width&&(R.supSizes=!0),u=R.supSrcset&&!R.supSizes,I=!0,setTimeout(de)}e.console&&console.warn,U in j||(U="src"),L["image/jpeg"]=!0,L["image/gif"]=!0,L["image/png"]=!0,L["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),R.ns=("pf"+(new Date).getTime()).substr(0,9),R.supSrcset="srcset"in j,R.supSizes="sizes"in j,R.supPicture=!!e.HTMLPictureElement,R.supSrcset&&R.supPicture&&!R.supSizes&&(T=s.createElement("img"),j.srcset="data:,a",T.src="data:,a",R.supSrcset=j.complete===T.complete,R.supPicture=R.supSrcset&&R.supPicture),R.supSrcset&&!R.supSizes?(C="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",(S=s.createElement("img")).onload=ue,S.onerror=ue,S.setAttribute("sizes","9px"),S.srcset=C+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",S.src=C):I=!0,R.selShort="picture>img,img[srcset]",R.sel=R.selShort,R.cfg=G,R.DPR=Z||1,R.u=ee,R.types=L,R.setSize=t,R.makeUrl=i(function(e){return te.href=e,te.href}),R.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},R.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?R.matchesMedia=function(e){return!e||matchMedia(e).matches}:R.matchesMedia=R.mMQ,R.matchesMedia.apply(this,arguments)},R.mMQ=function(e){return!e||ce(e)},R.calcLength=function(e){var t=ce(e,!0)||!1;return t<0&&(t=!1),t},R.supportsType=function(e){return!e||L[e]},R.parseSize=i(function(e){var t=(e||"").match(Y);return{media:t&&t[1],length:t&&t[2]}}),R.parseSet=function(e){return e.cands||(e.cands=function(a,u){function e(e){var t,n=e.exec(a.substring(o));return n?(t=n[0],o+=t.length,t):void 0}function t(){for(var e,t,n,a,i,s,r,o,l=!1,c={},d=0;d<f.length;d++)i=(a=f[d])[a.length-1],s=a.substring(0,a.length-1),r=parseInt(s,10),o=parseFloat(s),oe.test(s)&&"w"===i?((e||t)&&(l=!0),0===r?l=!0:e=r):le.test(s)&&"x"===i?((e||t||n)&&(l=!0),o<0?l=!0:t=o):oe.test(s)&&"h"===i?((n||t)&&(l=!0),0===r?l=!0:n=r):l=!0;l||(c.url=p,e&&(c.w=e),t&&(c.d=t),n&&(c.h=n),n||t||e||(c.d=1),1===c.d&&(u.has1x=!0),c.set=u,h.push(c))}for(var p,f,n,i,s,r=a.length,o=0,h=[];;){if(e(ie),r<=o)return h;p=e(se),f=[],","===p.slice(-1)?(p=p.replace(re,""),t()):function(){for(e(ae),n="",i="in descriptor";;){if(s=a.charAt(o),"in descriptor"===i)if(d(s))n&&(f.push(n),n="",i="after descriptor");else{if(","===s)return o+=1,n&&f.push(n),t();if("("===s)n+=s,i="in parens";else{if(""===s)return n&&f.push(n),t();n+=s}}else if("in parens"===i)if(")"===s)n+=s,i="in descriptor";else{if(""===s)return f.push(n),t();n+=s}else if("after descriptor"===i&&!d(s)){if(""===s)return t();i="in descriptor",--o}o+=1}}()}}(e.srcset,e)),e.cands},R.getEmValue=function(){var e,t,n,a;return!r&&(e=s.body)&&(t=s.createElement("div"),n=_.style.cssText,a=e.style.cssText,t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",_.style.cssText=N,e.style.cssText=N,e.appendChild(t),r=t.offsetWidth,e.removeChild(t),r=parseFloat(r,10),_.style.cssText=n,e.style.cssText=a),r||16},R.calcListLength=function(e){var t;return e in X&&!G.uT||(t=R.calcLength(n(e)),X[e]=t||ee.width),X[e]},R.setRes=function(e){var t;if(e)for(var n=0,a=(t=R.parseSet(e)).length;n<a;n++)P(t[n],e.sizes);return t},R.setRes.res=P,R.applySetCandidate=function(e,t){if(e.length){var n,a,i,s,r,o,l,c=t[R.ns],d=R.DPR,u=c.curSrc||t[U],p=c.curCan||(b=t,A=u,!($=e[0].set)&&A&&($=($=b[R.ns].sets)&&$[$.length-1]),(C=x(A,$))&&(A=R.makeUrl(A),b[R.ns].curSrc=A,(b[R.ns].curCan=C).res||P(C,C.set.sizes)),C);if(p&&p.set===e[0].set&&((l=Q&&!t.complete&&p.res-.1>d)||(p.cached=!0,p.res>=d&&(r=p))),!r)for(e.sort(k),r=e[(s=e.length)-1],a=0;a<s;a++)if((n=e[a]).res>=d){r=e[i=a-1]&&(l||u!==R.makeUrl(n.url))&&(f=e[i].res,h=n.res,m=d,g=e[i].cached,w=y=void 0,w="saveData"===G.algorithm?2.7<f?m+1:(y=(h-m)*(v=Math.pow(f-.6,1.5)),g&&(y+=.1*v),f+y):1<m?Math.sqrt(f*h):f,m<w)?e[i]:n;break}r&&(o=R.makeUrl(r.url),c.curSrc=o,c.curCan=r,o!==u&&R.setSrc(t,r),R.setSize(t))}var f,h,m,g,v,y,w,b,A,$,C},R.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},R.getSet=function(e){for(var t,n,a=!1,i=e[R.ns].sets,s=0;s<i.length&&!a;s++)if((t=i[s]).srcset&&R.matchesMedia(t.media)&&(n=R.supportsType(t.type))){"pending"===n&&(t=n),a=t;break}return a},R.parseSets=function(e,t,n){var a,i,s,r,o=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[R.ns];l.src!==c&&!n.src||(l.src=M.call(e,"src"),l.src?H.call(e,q,l.src):D.call(e,q)),l.srcset!==c&&!n.srcset&&R.supSrcset&&!e.srcset||(a=M.call(e,"srcset"),l.srcset=a,r=!0),l.sets=[],o&&(l.pic=!0,function(e,t){for(var n,a,i=e.getElementsByTagName("source"),s=0,r=i.length;s<r;s++)(n=i[s])[R.ns]=!0,(a=n.getAttribute("srcset"))&&t.push({srcset:a,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,l.sets)),l.srcset?(i={srcset:l.srcset,sizes:M.call(e,"sizes")},l.sets.push(i),(s=(u||l.src)&&B.test(l.srcset||""))||!l.src||x(l.src,i)||i.has1x||(i.srcset+=", "+l.src,i.cands.push({url:l.src,d:1,set:i}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(o||i&&!R.supSrcset||s&&!R.supSizes),r&&R.supSrcset&&!l.supported&&(a?(H.call(e,W,a),e.srcset=""):D.call(e,W)),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==R.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},R.fillImg=function(e,t){var n,a,i,s,r,o=t.reselect||t.reevaluate;e[R.ns]||(e[R.ns]={}),n=e[R.ns],!o&&n.evaled===l||(n.parsed&&!t.reevaluate||R.parseSets(e,e.parentNode,t),n.supported?n.evaled=l:(a=e,s=R.getSet(a),r=!1,"pending"!==s&&(r=l,s&&(i=R.setRes(s),R.applySetCandidate(i,a))),a[R.ns].evaled=r))},R.setupRun=function(){ne&&!K&&Z===e.devicePixelRatio||(K=!1,Z=e.devicePixelRatio,J={},X={},R.DPR=Z||1,ee.width=Math.max(e.innerWidth||0,_.clientWidth),ee.height=Math.max(e.innerHeight||0,_.clientHeight),ee.vw=ee.width/100,ee.vh=ee.height/100,l=[ee.height,ee.width,Z].join("-"),ee.em=R.getEmValue(),ee.rem=ee.em)},R.supPicture?(de=t,R.fillImg=t):(w=e.attachEvent?/d$|^c/:/d$|^c|^i/,b=function(){var e=s.readyState||"";A=setTimeout(b,"loading"===e?200:999),s.body&&(R.fillImgs(),(f=f||w.test(e))&&clearTimeout(A))},A=setTimeout(b,s.body?9:99),$=_.clientHeight,a(e,"resize",(h=function(){K=Math.max(e.innerWidth||0,_.clientWidth)!==ee.width||_.clientHeight!==$,$=_.clientHeight,K&&R.fillImgs()},m=99,y=function(){var e=new Date-v;e<m?g=setTimeout(y,m-e):(g=null,h())},function(){v=new Date,g=g||setTimeout(y,m)})),a(s,"readystatechange",b)),R.picturefill=de,R.fillImgs=de,R.teardownRun=t,de._=R,e.picturefillCFG={pf:R,push:function(e){var t=e.shift();"function"==typeof R[t]?R[t].apply(R,e):(G[t]=e[0],ne&&R.fillImgs({reselect:!0}))}};for(;V&&V.length;)e.picturefillCFG.push(V.shift());e.picturefill=de,"object"==typeof module&&"object"==typeof module.exports?module.exports=de:"function"==typeof define&&define.amd&&define("picturefill",function(){return de}),R.supPicture||(L["image/webp"]=(E="image/webp",z="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(O=new e.Image).onerror=function(){L[E]=!1,de()},O.onload=function(){L[E]=1===O.width,de()},O.src=z,"pending"))}(window,document),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(m){"use strict";function e(){this.Version="@version",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=i,this.$window=m(i),this.document=s,this.$document=m(s),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}}var t,n,a,i="undefined"!=typeof window?window:this,s=i.document,r={killEvent:function(e,t){try{e.preventDefault(),e.stopPropagation(),t&&e.stopImmediatePropagation()}catch(e){}},killGesture:function(e){try{e.preventDefault()}catch(e){}},lockViewport:function(e){f[e]=!0,m.isEmptyObject(f)||h||(t.length?t.attr("content",a):t=m("head").append('<meta name="viewport" content="'+a+'">'),l.$body.on(d.gestureChange,r.killGesture).on(d.gestureStart,r.killGesture).on(d.gestureEnd,r.killGesture),h=!0)},unlockViewport:function(e){"undefined"!==m.type(f[e])&&delete f[e],m.isEmptyObject(f)&&h&&(t.length&&(n?t.attr("content",n):t.remove()),l.$body.off(d.gestureChange).off(d.gestureStart).off(d.gestureEnd),h=!1)},startTimer:function(e,t,n,a){return r.clearTimer(e),(a?setInterval:setTimeout)(n,t)},clearTimer:function(e,t){e&&((t?clearInterval:clearTimeout)(e),e=null)},sortAsc:function(e,t){return parseInt(e,10)-parseInt(t,10)},sortDesc:function(e,t){return parseInt(t,10)-parseInt(e,10)},decodeEntities:function(e){var t=l.document.createElement("textarea");return t.innerHTML=e,t.value},parseQueryString:function(e){for(var t={},n=e.slice(e.indexOf("?")+1).split("&"),a=0;a<n.length;a++){var i=n[a].split("=");t[i[0]]=i[1]}return t}},l=new e,o=m.Deferred(),c={base:"{ns}",element:"{ns}-element"},d={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",gestureChange:"gesturechange.{ns}",gestureStart:"gesturestart.{ns}",gestureEnd:"gestureend.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"},u=null,p=20,f=[],h=!1;function g(e,t,n,a){var i,s={raw:{}};for(i in a=a||{})a.hasOwnProperty(i)&&("classes"===e?(s.raw[a[i]]=t+"-"+a[i],s[a[i]]="."+t+"-"+a[i]):(s.raw[i]=a[i],s[i]=a[i]+"."+t));for(i in n)n.hasOwnProperty(i)&&("classes"===e?(s.raw[i]=n[i].replace(/{ns}/g,t),s[i]=n[i].replace(/{ns}/g,"."+t)):(s.raw[i]=n[i].replace(/.{ns}/g,""),s[i]=n[i].replace(/{ns}/g,t)));return s}function v(){l.windowWidth=l.$window.width(),l.windowHeight=l.$window.height(),u=r.startTimer(u,p,y)}function y(){for(var e in l.ResizeHandlers)l.ResizeHandlers.hasOwnProperty(e)&&l.ResizeHandlers[e].callback.call(window,l.windowWidth,l.windowHeight)}function w(e,t){return parseInt(e.priority)-parseInt(t.priority)}return e.prototype.NoConflict=function(){for(var e in l.DontConflict=!0,l.Plugins)l.Plugins.hasOwnProperty(e)&&(m[e]=l.Conflicts[e],m.fn[e]=l.Conflicts.fn[e])},e.prototype.Ready=function(e){"complete"===l.document.readyState||"loading"!==l.document.readyState&&!l.document.documentElement.doScroll?e():l.document.addEventListener("DOMContentLoaded",e)},e.prototype.Plugin=function(e,t){function u(e){return e.data(h)}var p,f,n,h;return l.Plugins[e]=(f=t,n="fs-"+(p=e),h="fs"+p.replace(/(^|\s)([a-z])/g,function(e,t,n){return t+n.toUpperCase()}),f.initialized=!1,f.priority=f.priority||10,f.classes=g("classes",n,c,f.classes),f.events=g("events",p,d,f.events),f.functions=m.extend({getData:u,iterate:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0,a=this.length;n<a;n++){var i=this.eq(n),s=u(i)||{};"undefined"!==m.type(s.$el)&&e.apply(i,[s].concat(t))}return this}},r,f.functions),f.methods=m.extend(!0,{_construct:m.noop,_postConstruct:m.noop,_destruct:m.noop,_resize:!1,destroy:function(e){f.functions.iterate.apply(this,[f.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(f.classes.raw.element).removeData(h)}},f.methods),f.utilities=m.extend(!0,{_initialize:!1,_delegate:!1,defaults:function(e){f.defaults=m.extend(!0,f.defaults,e||{})}},f.utilities),f.widget&&(l.Conflicts.fn[p]=m.fn[p],m.fn[h]=function(e){if(this instanceof m){var t=f.methods[e];if("object"===m.type(e)||!e)return function(e){var t,n,a,i,s,r,o,l="object"===m.type(e),c=Array.prototype.slice.call(arguments,l?1:0),d=m();for(e=m.extend(!0,{},f.defaults||{},l?e:{}),n=0,a=this.length;n<a;n++){u(t=this.eq(n))||(f.guid++,i="__"+f.guid,s=f.classes.raw.base+i,r=t.data(p+"-options"),o=m.extend(!0,{$el:t,guid:i,numGuid:f.guid,rawGuid:s,dotGuid:"."+s},e,"object"===m.type(r)?r:{}),t.addClass(f.classes.raw.element).data(h,o),f.methods._construct.apply(t,[o].concat(c)),d=d.add(t))}for(n=0,a=d.length;n<a;n++)t=d.eq(n),f.methods._postConstruct.apply(t,[u(t)]);return this}.apply(this,arguments);if(t&&0!==e.indexOf("_")){var n=[t].concat(Array.prototype.slice.call(arguments,1));return f.functions.iterate.apply(this,n)}return this}},l.DontConflict||(m.fn[p]=m.fn[h])),l.Conflicts[p]=m[p],m[h]=f.utilities._delegate||function(e){var t=f.utilities[e]||f.utilities._initialize||!1;if(t){var n=Array.prototype.slice.call(arguments,"object"===m.type(e)?0:1);return t.apply(window,n)}},l.DontConflict||(m[p]=m[h]),f.namespace=p,f.namespaceClean=h,f.guid=0,f.methods._resize&&(l.ResizeHandlers.push({namespace:p,priority:f.priority,callback:f.methods._resize}),l.ResizeHandlers.sort(w)),f.methods._raf&&(l.RAFHandlers.push({namespace:p,priority:f.priority,callback:f.methods._raf}),l.RAFHandlers.sort(w)),f),l.Plugins[e]},l.$window.on("resize.fs",v),v(),function e(){if(l.support.raf)for(var t in l.window.requestAnimationFrame(e),l.RAFHandlers)l.RAFHandlers.hasOwnProperty(t)&&l.RAFHandlers[t].callback.call(window)}(),l.Ready(function(){l.$body=m("body"),m("html").addClass(l.support.touch?"touchevents":"no-touchevents"),t=m('meta[name="viewport"]'),n=!!t.length&&t.attr("content"),a="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",o.resolve()}),d.clickTouchStart=d.click+" "+d.touchStart,function(){var e,t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},n=["transition","-webkit-transition"],a={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},i="transitionend",s="",r="",o=document.createElement("div");for(e in t)if(t.hasOwnProperty(e)&&e in o.style){i=t[e],l.support.transition=!0;break}for(e in d.transitionEnd=i+".{ns}",n)if(n.hasOwnProperty(e)&&n[e]in o.style){s=n[e];break}for(e in l.transition=s,a)if(a.hasOwnProperty(e)&&a[e]in o.style){l.support.transform=!0,r=a[e];break}l.transform=r}(),window.Formstone=l}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],e):e(jQuery,Formstone)}(function(u,a){"use strict";function e(){(C=$.scrollTop()+a.windowHeight)<0&&(C=0),b.iterate.call(x,o)}function t(){k=u(v.base),x=u(v.lazy),b.iterate.call(x,r)}function n(e){var t;e.visible&&(t=e.source,e.source=null,i(e,t,!0))}function i(e,t,n){if(t!==e.source&&e.visible){var a;e.source=t,e.responsive=!1,e.isYouTube=!1,"object"===u.type(t)&&"string"===u.type(t.video)&&(a=t.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i))&&1<=a.length&&(e.isYouTube=!0,e.videoId=a[1]);var i=!e.isYouTube&&"object"===u.type(t)&&(t.hasOwnProperty("mp4")||t.hasOwnProperty("ogg")||t.hasOwnProperty("webm"));if(e.video=e.isYouTube||i,e.playing=!1,e.isYouTube)e.playerReady=!1,e.posterLoaded=!1,p(e,t,n);else if("object"===u.type(t)&&t.hasOwnProperty("poster"))!function(t,e){t.source&&t.source.poster&&(d(t,t.source.poster,!0,!0),e=!1);var n='<div class="'+[y.media,y.video,!0!==e?y.animated:""].join(" ")+'" aria-hidden="true">';n+="<video playsinline",t.loop&&(n+=" loop"),t.mute&&(n+=" muted"),t.autoPlay&&(n+=" autoplay"),n+=">",t.source.webm&&(n+='<source src="'+t.source.webm+'" type="video/webm" />'),t.source.mp4&&(n+='<source src="'+t.source.mp4+'" type="video/mp4" />'),t.source.ogg&&(n+='<source src="'+t.source.ogg+'" type="video/ogg" />'),n+="</video>";var a=u(n+="</div>");a.find("video").one(w.loadedMetaData,function(e){a.fsTransition({property:"opacity"},function(){f(t)}).css({opacity:1}),m(t),t.$el.trigger(w.loaded),t.autoPlay&&h(t)}),t.$container.append(a)}(e,n);else{var s=t;if("object"===u.type(t)){var r,o=[],l=[];for(r in t)t.hasOwnProperty(r)&&l.push(r);for(r in l.sort(b.sortAsc),l)l.hasOwnProperty(r)&&o.push({width:parseInt(l[r]),url:t[l[r]],mq:A.matchMedia("(min-width: "+parseInt(l[r])+"px)")});e.responsive=!0,e.sources=o,s=c(e)}d(e,s,!1,n)}}else e.$el.trigger(w.loaded)}function c(e){var t=e.source;if(e.responsive)for(var n in t=e.sources[0].url,e.sources)e.sources.hasOwnProperty(n)&&(a.support.matchMedia?e.sources[n].mq.matches&&(t=e.sources[n].url):e.sources[n].width<a.fallbackWidth&&(t=e.sources[n].url));return t}function d(e,t,n,a){var i=[y.media,y.image,!0!==a?y.animated:""].join(" "),s=u('<div class="'+i+'" aria-hidden="true"><img alt="'+e.alt+'"></div>'),r=s.find("img"),o=t;r.one(w.load,function(){P&&s.addClass(y.native).css({backgroundImage:"url('"+o+"')"}),s.fsTransition({property:"opacity"},function(){n||f(e)}).css({opacity:1}),m(e),n&&!a||e.$el.trigger(w.loaded)}).one(w.error,e,l).attr("src",o),e.responsive&&s.addClass(y.responsive),e.$container.append(s),!r[0].complete&&4!==r[0].readyState||r.trigger(w.load),e.currentSource=o}function p(t,e,n){var a,i,s,r,o;t.videoId||(a=e.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/),t.videoId=a[1]),t.posterLoaded||(t.source.poster||(t.source.poster="//img.youtube.com/vi/"+t.videoId+"/0.jpg"),t.posterLoaded=!0,d(t,t.source.poster,!0,n),n=!1),u("script[src*='youtube.com/iframe_api']").length||u("head").append('<script src="//www.youtube.com/iframe_api"><\/script>'),S?(i=t.guid+"_"+t.youTubeGuid++,s='<div class="'+[y.media,y.embed,!0!==n?y.animated:""].join(" ")+'" aria-hidden="true">',s+='<div id="'+i+'"></div>',r=u(s+="</div>"),(o=u.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:i,loop:t.loop?1:0,autoplay:1,mute:1,origin:A.location.protocol+"//"+A.location.host},t.youtubeOptions)).autoplay=1,t.$container.append(r),t.player&&(t.oldPlayer=t.player,t.player=null),t.player=new A.YT.Player(i,{videoId:t.videoId,playerVars:o,events:{onReady:function(e){t.playerReady=!0,t.mute&&t.player.mute(),t.autoPlay?t.player.playVideo():t.player.pauseVideo()},onStateChange:function(e){t.playing||e.data!==A.YT.PlayerState.PLAYING?t.loop&&t.playing&&e.data===A.YT.PlayerState.ENDED&&t.player.playVideo():(t.playing=!0,r.fsTransition({property:"opacity"},function(){f(t)}).css({opacity:1}),m(t),t.$el.trigger(w.loaded)),t.$el.find(v.embed).addClass(y.ready)},onPlaybackQualityChange:function(e){},onPlaybackRateChange:function(e){},onError:function(e){l({data:t})},onApiChange:function(e){}}}),m(t)):T.push({data:t,source:e})}function f(e){var t=e.$container.find(v.media);1<=t.length&&(t.not(":last").remove(),e.oldPlayer=null)}function l(e){e.data.$el.trigger(w.error)}function h(e){var t;e.video&&!e.playing&&(e.isYouTube?e.playerReady?e.player.playVideo():e.autoPlay=!0:((t=e.$container.find("video")).length&&t[0].play(),e.playing=!0))}function s(e){var t;e.visible&&(e.responsive&&(t=c(e))!==e.currentSource?d(e,t,!1,!0):m(e))}function m(e){for(var t=e.$container.find(v.media),n=0,a=t.length;n<a;n++){var i,s,r,o,l=t.eq(n),c=e.isYouTube?"iframe":l.find("video").length?"video":"img",d=l.find(c);!d.length||"img"==c&&P||(i=e.$el.outerWidth(),s=e.$el.outerHeight(),r=function(e,t){if(e.isYouTube)return{height:500,width:500/e.embedRatio};if(t.is("img")){var n=t[0];if("undefined"!==u.type(n.naturalHeight))return{height:n.naturalHeight,width:n.naturalWidth};var a=new Image;return a.src=n.src,{height:a.height,width:a.width}}return{height:t[0].videoHeight,width:t[0].videoWidth}}(e,d),e.width=r.width,e.height=r.height,e.left=0,e.top=0,o=e.isYouTube?e.embedRatio:e.width/e.height,e.height=s,e.width=e.height*o,e.width<i&&(e.width=i,e.height=e.width/o),e.left=-(e.width-i)/2,e.top=-(e.height-s)/2,l.css({height:e.height,width:e.width,left:e.left,top:e.top}))}}function r(e){e.scrollTop=e.$el.offset().top}function o(e){!e.visible&&e.scrollTop<C+e.lazyEdge&&(e.visible=!0,n(e))}var g=a.Plugin("background",{widget:!0,defaults:{alt:"",autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:function(e){e.youTubeGuid=0,e.$container=u('<div class="'+y.container+'"></div>').appendTo(this),e.thisClasses=[y.base,e.customClass],e.visible=!0,e.lazy&&(e.visible=!1,e.thisClasses.push(y.lazy)),this.addClass(e.thisClasses.join(" ")),t(),e.lazy?(r(e),o(e)):n(e)},_destruct:function(e){e.$container.remove(),this.removeClass(e.thisClasses.join(" ")).off(w.namespace),t()},_resize:function(){b.iterate.call(k,s),b.iterate.call(x,r),b.iterate.call(x,o)},play:h,pause:function(e){var t;e.video&&e.playing&&(e.isYouTube?e.playerReady?e.player.pauseVideo():e.autoPlay=!1:(t=e.$container.find("video")).length&&t[0].pause(),e.playing=!1)},mute:function(e){var t;e.video&&(e.isYouTube&&e.playerReady?e.player.mute():(t=e.$container.find("video")).length&&(t[0].muted=!0)),e.mute=!0},unmute:function(e){var t;e.video&&(e.isYouTube&&e.playerReady?e.player.unMute():(t=e.$container.find("video")).length&&(t[0].muted=!1),e.playing=!0),e.mute=!1},resize:m,load:i,unload:function(e){var t=e.$container.find(v.media);1<=t.length&&t.fsTransition({property:"opacity"},function(){t.remove(),delete e.source}).css({opacity:0})}}}),v=g.classes,y=v.raw,w=g.events,b=g.functions,A=a.window,$=a.$window,C=0,k=[],x=[],P="backgroundSize"in a.document.documentElement.style,S=!1,T=[];a.Ready(function(){e(),$.on("scroll",e)}),A.onYouTubeIframeAPIReady=function(){for(var e in S=!0,T)T.hasOwnProperty(e)&&p(T[e].data,T[e].source);T=[]}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(o,e){"use strict";function t(){f=p.height(),u.iterate.call(g,l)}function n(){g=o(r.base),t()}function a(e){var t;!e.hasParent||(t=e.$parent.scrollTop())!==e.parentScroll&&(i(e),e.parentScroll=t)}function l(e){if(e.initialized){switch(e.parentHeight=e.hasParent?e.$parent.outerHeight(!1):f,e.windowIntersect){case"top":e.windowCheck=0-e.offset;break;case"middle":case"center":e.windowCheck=e.parentHeight/2-e.offset;break;case"bottom":e.windowCheck=e.parentHeight-e.offset}switch(e.elOffset=e.$target.offset(),e.elIntersect){case"top":e.elCheck=e.elOffset.top;break;case"middle":e.elCheck=e.elOffset.top+e.$target.outerHeight()/2;break;case"bottom":e.elCheck=e.elOffset.top+e.$target.outerHeight()}var t;e.hasParent&&(t=e.$parent.offset(),e.elCheck-=t.top),i(e)}}function i(e){e.initialized&&(e.windowCheck+(e.hasParent?e.parentScroll:h)>=e.elCheck?(e.active||e.$el.trigger(d.activate),e.active=!0,e.$el.addClass(c.active)):e.reverse&&(e.active&&e.$el.trigger(d.deactivate),e.active=!1,e.$el.removeClass(c.active)))}var s=e.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:function(e){e.initialized=!1;var t=o(e.$el.data("checkpoint-parent")),n=o(e.$el.data("checkpoint-container")),a=e.$el.data("checkpoint-intersect"),i=e.$el.data("checkpoint-offset");a&&(e.intersect=a),i&&(e.offset=i);var s=e.intersect.split("-");e.windowIntersect=s[0],e.elIntersect=s[1],e.visible=!1,e.$target=n.length?n:e.$el,e.hasParent=0<t.length,e.$parent=t;var r=e.$target.find("img");r.length&&r.on(d.load,e,l),e.$el.addClass(c.base),e.initialized=!0},_postConstruct:function(e){n(),t()},_destruct:function(e){e.$el.removeClass(c.base),n()},_resize:t,_raf:function(){(h=p.scrollTop())<0&&(h=0),h!==m&&(u.iterate.call(g,i),m=h),u.iterate.call(g,a)},resize:l}}),r=(s.namespace,s.classes),c=r.raw,d=s.events,u=s.functions,p=(e.window,e.$window),f=0,h=0,m=0,g=[]}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(s,e){"use strict";function r(){!function(){for(var e in i={unit:o.unit},m)if(m.hasOwnProperty(e))for(var t in h[e]){var n,a;h[e].hasOwnProperty(t)&&(n="Infinity"===t?1/0:parseInt(t,10),a=-1<e.indexOf("max"),h[e][t].matches&&(a?(!i[e]||n<i[e])&&(i[e]=n):(!i[e]||n>i[e])&&(i[e]=n)))}}(),n.trigger(d.mqChange,[i])}function l(e){var t=c(e.media),n=f[t],a=e.matches,i=a?d.enter:d.leave;if(n&&(n.active||!n.active&&a)){for(var s in n[i])n[i].hasOwnProperty(s)&&n[i][s].apply(n.mq);n.active=!0}}function c(e){return e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}var t=e.Plugin("mediaquery",{utilities:{_initialize:function(e){for(var t in e=e||{},m)m.hasOwnProperty(t)&&(o[t]=e[t]?s.merge(e[t],o[t]):o[t]);for(var n in(o=s.extend(o,e)).minWidth.sort(p.sortDesc),o.maxWidth.sort(p.sortAsc),o.minHeight.sort(p.sortDesc),o.maxHeight.sort(p.sortAsc),m)if(m.hasOwnProperty(n))for(var a in h[n]={},o[n]){var i;o[n].hasOwnProperty(a)&&((i=window.matchMedia("("+m[n]+": "+(o[n][a]===1/0?1e5:o[n][a])+o.unit+")")).addListener(r),h[n][o[n][a]]=i)}r()},state:function(){return i},bind:function(e,t,n){var a=u.matchMedia(t),i=c(a.media);for(var s in f[i]||(f[i]={mq:a,active:!0,enter:{},leave:{}},f[i].mq.addListener(l)),n)n.hasOwnProperty(s)&&f[i].hasOwnProperty(s)&&(f[i][s][e]=n[s]);var r=f[i],o=a.matches;o&&r[d.enter].hasOwnProperty(e)?(r[d.enter][e].apply(a),r.active=!0):!o&&r[d.leave].hasOwnProperty(e)&&(r[d.leave][e].apply(a),r.active=!1)},unbind:function(e,t){if(e)if(t){var n=c(t);f[n]&&(f[n].enter[e]&&delete f[n].enter[e],f[n].leave[e]&&delete f[n].leave[e])}else for(var a in f)f.hasOwnProperty(a)&&(f[a].enter[e]&&delete f[a].enter[e],f[a].leave[e]&&delete f[a].leave[e])}},events:{mqChange:"mqchange"}}),o={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},d=s.extend(t.events,{enter:"enter",leave:"leave"}),n=e.$window,u=n[0],p=t.functions,i=null,f=[],h={},m={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],e):e(jQuery,Formstone)}(function(s,e){"use strict";function n(e){e.$handle.fsSwap("deactivate")}function r(e){e.data.$handle.addClass(m.focus)}function o(e){e.data.$handle.removeClass(m.focus)}function l(e){var t=e.data;13!==e.keyCode&&32!==e.keyCode||(v.killEvent(e),t.$handle.trigger(g.raw.click))}function c(e){var t;e.originalEvent||((t=e.data).open||(t.$el.trigger(g.open).attr("aria-hidden",!1),t.$content.addClass(t.contentClassesOpen).one(g.click,function(){n(t)}),t.$handle.attr("aria-expanded",!0),t.label&&t.$handle.html(t.labels.open),t.isToggle||y.addClass(m.lock),t.open=!0,t.$nav.focus()))}function d(e){var t;e.originalEvent||(t=e.data).open&&(t.$el.trigger(g.close).attr("aria-hidden",!0),t.$content.removeClass(t.contentClassesOpen).off(g.namespace),t.$handle.attr("aria-expanded",!1),t.label&&t.$handle.html(t.labels.closed),a(t),t.open=!1,t.$el.focus())}function u(e){var t=e.data;t.$el.attr("aria-hidden",!0),t.$handle.attr("aria-controls",t.ariaId).attr("aria-expanded",!1),t.$content.addClass(m.enabled),setTimeout(function(){t.$animate.addClass(m.animated)},0),t.label&&t.$handle.html(t.labels.closed)}function p(e){var t=e.data;t.$el.removeAttr("aria-hidden"),t.$handle.removeAttr("aria-controls").removeAttr("aria-expanded"),t.$content.removeClass(m.enabled,m.animated),t.$animate.removeClass(m.animated),i(t),a(t)}function a(e){e.isToggle||y.removeClass(m.lock)}function i(e){if(e.label)if(1<e.$handle.length)for(var t=0,n=e.$handle.length;t<n;t++)e.$handle.eq(t).html(e.originalLabel[t]);else e.$handle.html(e.originalLabel)}var t=e.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",theme:"fs-light",type:"toggle"},classes:["handle","nav","content","animated","enabled","focus","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_construct:function(e){e.handleGuid=m.handle+e.guid,e.isToggle="toggle"===e.type,e.open=!1,e.isToggle&&(e.gravity="");var t=m.base,n=[t,e.type].join("-"),a=e.gravity?[n,e.gravity].join("-"):"",i=[e.rawGuid,e.theme,e.customClass].join(" ");e.handle=this.data(f+"-handle"),e.content=this.data(f+"-content"),e.handleClasses=[m.handle,m.handle.replace(t,n),a?m.handle.replace(t,a):"",e.handleGuid,i].join(" "),e.thisClasses=[m.nav.replace(t,n),a?m.nav.replace(t,a):"",i],e.contentClasses=[m.content.replace(t,n),i].join(" "),e.contentClassesOpen=[a?m.content.replace(t,a):"",m.open].join(" "),e.$nav=this.addClass(e.thisClasses.join(" ")).attr("role","navigation"),e.$handle=s(e.handle).addClass(e.handleClasses),e.$content=s(e.content).addClass(e.contentClasses),e.$animate=s().add(e.$nav).add(e.$content),function(e){if(e.label)if(1<e.$handle.length){e.originalLabel=[];for(var t=0,n=e.$handle.length;t<n;t++)e.originalLabel[t]=e.$handle.eq(t).html()}else e.originalLabel=e.$handle.html()}(e),e.navTabIndex=e.$nav.attr("tabindex"),e.$nav.attr("tabindex",-1),e.id=this.attr("id"),e.id?e.ariaId=e.id:(e.ariaId=e.rawGuid,this.attr("id",e.ariaId)),e.$handle.attr("data-swap-target",e.dotGuid).attr("data-swap-linked",e.handleGuid).attr("data-swap-group",m.base).attr("tabindex",0).on("activate.swap"+e.dotGuid,e,c).on("deactivate.swap"+e.dotGuid,e,d).on("enable.swap"+e.dotGuid,e,u).on("disable.swap"+e.dotGuid,e,p).on(g.focus+e.dotGuid,e,r).on(g.blur+e.dotGuid,e,o).fsSwap({maxWidth:e.maxWidth,classes:{target:e.dotGuid,enabled:h.enabled,active:h.open,raw:{target:e.rawGuid,enabled:m.enabled,active:m.open}}}),e.$handle.is("a, button")||e.$handle.on(g.keyPress+e.dotGuid,e,l)},_destruct:function(e){e.$content.removeClass([e.contentClasses,e.contentClassesOpen].join(" ")).off(g.namespace),e.$handle.removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeAttr("data-swap-group").removeData("swap-linked").removeData("tabindex").removeClass(e.handleClasses).off(e.dotGuid).html(e.originalLabel).fsSwap("destroy"),e.$nav.attr("tabindex",e.navTabIndex),i(e),a(e),this.removeAttr("aria-hidden").removeClass(e.thisClasses.join(" ")).off(g.namespace),this.attr("id")===e.rawGuid&&this.removeAttr("id")},open:function(e){e.$handle.fsSwap("activate")},close:n,enable:function(e){e.$handle.fsSwap("enable")},disable:function(e){e.$handle.fsSwap("disable")}}}),f=t.namespace,h=t.classes,m=h.raw,g=t.events,v=t.functions,y=null;e.Ready(function(){y=s("html, body")})}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(a,e){"use strict";function n(e,t){var n;e.enabled&&!e.active&&(e.group&&!t&&a(e.group).not(e.$el).not(e.linked)[o.namespaceClean]("deactivate",!0),n=e.group?a(e.group).index(e.$el):null,e.$swaps.addClass(e.classes.raw.active),t||e.linked&&a(e.linked).not(e.$el)[o.namespaceClean]("activate",!0),this.trigger(d.activate,[n]),e.active=!0)}function i(e,t){e.enabled&&e.active&&(e.$swaps.removeClass(e.classes.raw.active),t||e.linked&&a(e.linked).not(e.$el)[o.namespaceClean]("deactivate",!0),this.trigger(d.deactivate),e.active=!1)}function t(e,t){e.enabled||(e.enabled=!0,e.$swaps.addClass(e.classes.raw.enabled),t||a(e.linked).not(e.$el)[o.namespaceClean]("enable"),this.trigger(d.enable),e.onEnable?(e.active=!1,n.call(this,e)):(e.active=!0,i.call(this,e)))}function s(e,t){e.enabled&&(e.enabled=!1,e.$swaps.removeClass([e.classes.raw.enabled,e.classes.raw.active].join(" ")),t||a(e.linked).not(e.$el)[o.namespaceClean]("disable"),this.trigger(d.disable))}function r(e){u.killEvent(e);var t=e.data;t.active&&t.collapse?i.call(t.$el,t):n.call(t.$el,t)}var o=e.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:function(e){e.enabled=!1,e.active=!1,e.classes=a.extend(!0,{},c,e.classes),e.target=this.data(l+"-target"),e.$target=a(e.target).addClass(e.classes.raw.target),e.mq="(max-width:"+(e.maxWidth===1/0?"100000px":e.maxWidth)+")";var t=this.data(l+"-linked");e.linked=!!t&&"[data-"+l+'-linked="'+t+'"]';var n=this.data(l+"-group");e.group=!!n&&"[data-"+l+'-group="'+n+'"]',e.$swaps=a().add(this).add(e.$target),this.on(d.click+e.dotGuid,e,r)},_postConstruct:function(e){e.collapse||!e.group||a(e.group).filter("[data-"+l+"-active]").length||a(e.group).eq(0).attr("data-"+l+"-active","true"),e.onEnable=this.data(l+"-active")||!1,a.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){t.call(e.$el,e,!0)},leave:function(){s.call(e.$el,e,!0)}})},_destruct:function(e){a.fsMediaquery("unbind",e.rawGuid),e.$swaps.removeClass([e.classes.raw.enabled,e.classes.raw.active].join(" ")).off(d.namespace)},activate:n,deactivate:i,enable:t,disable:s}}),l=o.namespace,c=o.classes,d=o.events,u=o.functions}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(o,i){"use strict";function s(e){e.stopPropagation(),e.preventDefault();var t=e.data,n=e.originalEvent,a=t.target?t.$target:t.$el;t.property&&n.propertyName!==t.property||!o(n.target).is(a)||r(t)}function r(e){e.always||e.$el[t.namespaceClean]("destroy"),e.callback.apply(e.$el)}function l(e){var t,n,a,i={};if(e instanceof o&&(e=e[0]),u.getComputedStyle)for(var s=0,r=(t=u.getComputedStyle(e,null)).length;s<r;s++)n=t[s],a=t.getPropertyValue(n),i[n]=a;else if(e.currentStyle)for(n in t=e.currentStyle)i[n]=t[n];return i}var t=i.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:function(n,e){var t,a;e&&(n.$target=this.find(n.target),n.$check=n.target?n.$target:this,n.callback=e,n.styles=l(n.$check),n.timer=null,t=n.$check.css(i.transition+"-duration"),a=parseFloat(t),i.support.transition&&t&&a?this.on(c.transitionEnd,n,s):n.timer=d.startTimer(n.timer,50,function(){var e,t;t=l((e=n).$check),function(e,t){if(o.type(e)===o.type(t)){for(var n in e){if(!e.hasOwnProperty(n))return;if(!e.hasOwnProperty(n)||!t.hasOwnProperty(n)||e[n]!==t[n])return}return 1}}(e.styles,t)||r(e),e.styles=t},!0))},_destruct:function(e){d.clearTimer(e.timer,!0),this.off(c.namespace)},resolve:r}}),c=t.events,d=t.functions,u=i.window}),document.createElement("picture"),function(e){Formstone.Ready(function(){e(".js-background").background(),e(".js-checkpoint, [data-checkpoint-animation]").checkpoint({offset:100,reverse:!0}),e(".js-navigation").navigation(),e(".js-swap").swap()})}(jQuery);
//# sourceMappingURL=site.js.map
