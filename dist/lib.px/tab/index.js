/*! vue-ydui v1.0.7 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TabPanel=e.Tab=void 0;var i=n(126),r=a(i),o=n(125),s=a(o);e.Tab=r.default,e.TabPanel=s.default},1:function(t,e){t.exports=function(t,e,n,a){var i,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),a){var l=s.computed||(s.computed={});Object.keys(a).forEach(function(t){var e=a[t];l[t]=function(){return e}})}return{esModule:i,exports:r,options:s}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(a[r]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},3:function(t,e,n){function a(t){for(var e=0;e<t.length;e++){var n=t[e],a=d[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(r(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(r(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,n,a=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(a){if(v)return m;a.parentNode.removeChild(a)}if(h){var r=p++;a=f||(f=i()),e=o.bind(null,a,r,!1),n=o.bind(null,a,r,!0)}else a=i(),e=s.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function o(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var r=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function s(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var i=c(t,e);return a(i),function(e){for(var n=[],r=0;r<i.length;r++){var o=i[r],s=d[o.id];s.refs--,n.push(s)}e?(i=c(t,e),a(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],o=r[0],s=r[1],l=r[2],c=r[3],d={id:t+":"+i,css:s,media:l,sourceMap:c};a[o]?a[o].parts.push(d):n.push(a[o]={id:o,parts:[d]})}return n}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),a=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,a=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||a.test(t)},r=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},o=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,a=t===window?0:t.getBoundingClientRect().top,i=e.getBoundingClientRect().top-a,r=i+e.offsetHeight;return i>=0&&i<n||r>0&&r<=n},s=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},l=function(t,e){s(t,e)||(t.className=""===t.className?e:t.className+" "+e)},c=function(t,e){if(s(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},d=function(t){function e(n,a,i){if(n!==a){var r=n+i>a?a:n+i;n>a&&(r=n-i<a?a:n-i),t===window?window.scrollTo(r,r):t.scrollTop=r,window.requestAnimationFrame(function(){return e(r,a,i)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var r=Math.abs(n-a),o=Math.ceil(r/i*50);e(n,a,o)};e.pageScroll=n,e.isIOS=a,e.isColor=i,e.getScrollview=r,e.checkInview=o,e.addClass=l,e.removeClass=c,e.scrollTop=d},44:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'.yd-tab-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:0}.yd-tab-nav:after{content:"";position:absolute;z-index:3;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-tab-nav-item{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;text-align:center;color:#585858;font-size:14px;line-height:42px;display:block;background-color:#fff}.yd-tab-nav-item:active{background-color:#f7f7f7}.yd-tab-nav-item>a{display:inherit;color:inherit}.yd-tab-nav-item:not(:last-child):after{position:absolute;top:35%;right:0;content:"";width:1px;height:30%;-webkit-transform:scaleX(.5);transform:scaleX(.5);border-right:1px solid #d9d9d9}.yd-tab-nav .yd-tab-active{color:currentColor;background-color:#fff}.yd-tab-nav .yd-tab-active:active{background-color:#fff}.yd-tab-nav .yd-tab-active:before{content:"";width:70%;height:2px;position:absolute;left:50%;bottom:0;margin-left:-35%;z-index:4;background-color:currentColor}.yd-tab-panel{position:relative;overflow:hidden;background-color:#fff}.yd-tab-panel-item{width:100%;position:absolute;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.yd-tab-panel-item.yd-tab-active{position:relative;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;-webkit-transform:translateX(0);transform:translateX(0)}.yd-tab-panel-item.yd-tab-active~.yd-tab-panel-item{-webkit-transform:translateX(100%);transform:translateX(100%)}',""])},125:function(t,e,n){var a=n(1)(n(289),n(193),null,null);t.exports=a.exports},126:function(t,e,n){n(206);var a=n(1)(n(290),n(149),null,null);t.exports=a.exports},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-tab"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.navList.length>0,expression:"navList.length > 0"}],staticClass:"yd-tab-nav",style:{color:t.activeColor}},t._l(t.navList,function(e,a){return n("li",{key:a,staticClass:"yd-tab-nav-item",class:e._uid==t.activeIndex?"yd-tab-active":"",on:{click:function(n){t.changeHandler(e._uid,e.label,e.tabkey)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.label))])])})),t._v(" "),n("div",{staticClass:"yd-tab-panel"},[t._t("default")],2)])},staticRenderFns:[]}},193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-tab-panel-item",class:t.classes},[t._t("default")],2)},staticRenderFns:[]}},206:function(t,e,n){var a=n(44);"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);n(3)("a2640886",a,!0)},289:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-tab-panel",props:{label:String,active:Boolean,tabkey:[String,Number]},computed:{classes:function(){return this.$parent.activeIndex==this._uid?"yd-tab-active":""}},watch:{active:function(){this.$parent.init(!0)},label:function(){this.$parent.init(!1,"label")}},mounted:function(){var t=this;this.$nextTick(function(){t.$parent.init(!1)})}}},290:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);e.default={name:"yd-tab",data:function(){return{navList:[],activeIndex:0,tmpIndex:0}},props:{change:Function,callback:Function,activeColor:{validator:function(t){return!t||(0,a.isColor)(t)},default:"#FF5E53"}},methods:{init:function(t,e){var n=this,a=this.$children.filter(function(t){return"yd-tab-panel"===t.$options.name}),i=0;t||(this.navList=[]),a.forEach(function(r,o){return"label"===e?n.navList[o]=r:(t||n.navList.push({_uid:r._uid,label:r.label,tabkey:r.tabkey}),void(r.active?(n.activeIndex=n.tmpIndex=r._uid,n.emitChange(r.label,r.tabkey)):(++i,i>=a.length&&(n.activeIndex=n.tmpIndex=a[0]._uid,n.emitChange(a[0].label,a[0].tabkey)))))})},emitChange:function(t,e){this.change&&(this.change(t,e),console.warn('From VUE-YDUI: The parameter "change" is destroyed, please use "callback".')),this.callback&&this.callback(t,e)},changeHandler:function(t,e,n){this.tmpIndex!=t&&(this.activeIndex=this.tmpIndex=t,this.emitChange(e,n))}}}}})});