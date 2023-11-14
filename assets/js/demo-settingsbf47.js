"use strict";function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,n=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t,r,a;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&(module.exports=e(),t=!0),t||(r=window.Cookies,(a=window.Cookies=e()).noConflict=function(){return window.Cookies=r,a})}(function(){function d(){for(var e=0,t={};e<arguments.length;e++){var r,a=arguments[e];for(r in a)t[r]=a[r]}return t}function l(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function e(s){function i(){}function r(e,t,r){if("undefined"!=typeof document){"number"==typeof(r=d({path:"/"},i.defaults,r)).expires&&(r.expires=new Date(+new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var a=JSON.stringify(t);/^[\{\[]/.test(a)&&(t=a)}catch(e){}t=s.write?s.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var n,o="";for(n in r)r[n]&&(o+="; "+n,!0!==r[n]&&(o+="="+r[n].split(";")[0]));return document.cookie=e+"="+t+o}}function t(e,t){if("undefined"!=typeof document){for(var r={},a=document.cookie?document.cookie.split("; "):[],n=0;n<a.length;n++){var o=a[n].split("="),i=o.slice(1).join("=");t||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var d=l(o[0]),i=(s.read||s)(i,d)||l(i);if(t)try{i=JSON.parse(i)}catch(e){}if(r[d]=i,e===d)break}catch(e){}}return e?r[e]:r}}return i.set=r,i.get=function(e){return t(e,!1)},i.getJSON=function(e){return t(e,!0)},i.remove=function(e,t){r(e,"",d(t,{expires:-1}))},i.defaults={},i.withConverter=e,i}(function(){})}),function(i,d){var s=d("body"),l=d("head"),u="#skin-theme",c=".nk-sidebar",f=".nk-header",m=["landing","Landing"],o=["style","aside","header","skin","mode"],n="light-mode",p="dark-mode",y=".nk-opt-item",h=".nk-opt-list",v={landing:{aside:"is-dark",header:"is-light",style:"ui-default"},general:{aside:"is-dark",header:"is-light",style:"ui-default"}};i.Demo={save:function(e,t){Cookies.set(i.Demo.apps(e),t)},remove:function(e){Cookies.remove(i.Demo.apps(e))},current:function(e){return Cookies.get(i.Demo.apps(e))},apps:function(e){var t,r,a=window.location.pathname.split("/").map(function(e,t,r){return e.replace("-","")}),n=_createForOfIteratorHelper(m);try{for(n.s();!(r=n.n()).done;){var o=r.value;0<=a.indexOf(o)&&(t=o)}}catch(e){n.e(e)}finally{n.f()}return e?e+"_"+t:t},style:function(e,t){var r={mode:n+" "+p,style:"ui-default ui-clean ui-shady ui-softy",aside:"is-light is-default is-theme is-dark",header:"is-light is-default is-theme is-dark"};return"all"===e?r[t]||"":"any"===e?r.mode+" "+r.style+" "+r.aside+" "+r.header:"body"===e?r.mode+" "+r.style:"is-default"===e||"ui-default"===e?"":e},skins:function(e){return!e||"default"===e?"theme":"theme-"+e},defs:function(e){var t=i.Demo.apps(),t=v[t][e]||"";return i.Demo.current(e)?i.Demo.current(e):t},apply:function(){i.Demo.apps();var e,t=_createForOfIteratorHelper(o);try{for(t.s();!(e=t.n()).done;){var r,a,n=e.value;"aside"!==n&&"header"!==n&&"style"!==n||(r=i.Demo.defs(n),d(a="aside"===n?c:"header"===n?f:s).removeClass(i.Demo.style("all",n)),"ui-default"!==r&&"is-default"!==r&&d(a).addClass(r)),"mode"===n&&i.Demo.update(n,i.Demo.current("mode")),"skin"===n&&i.Demo.update(n,i.Demo.current("skin"))}}catch(e){t.e(e)}finally{t.f()}i.Demo.update("dir",i.Demo.current("dir"))},locked:function(e){!0===e?(d(y+"[data-key=aside]").add(y+"[data-key=header]").add(y+"[data-key=skin]").addClass("disabled"),i.Demo.update("skin","default",!0),d(y+"[data-key=skin]").removeClass("active"),d(y+"[data-key=skin][data-update=default]").addClass("active")):d(y+"[data-key=aside]").add(y+"[data-key=header]").add(y+"[data-key=skin]").removeClass("disabled")},update:function(e,t,r){var a,n=i.Demo.style(t,e),o=i.Demo.style("all",e);i.Demo.apps();"aside"!==e&&"header"!==e||(d(a="header"==e?f:c).removeClass(o),d(a).addClass(n)),"mode"===e&&(s.removeClass(o).removeAttr("theme"),n===p?(s.addClass(n).attr("theme","dark"),i.Demo.locked(!0)):(s.addClass(n).removeAttr("theme"),i.Demo.locked(!1))),"style"===e&&(s.removeClass(o),s.addClass(n)),"skin"===e&&(o=i.Demo.skins(n),n=d("#skin-default").attr("href").replace("theme","skins/"+o),"theme"===o?d(u).remove():0<d(u).length?d(u).attr("href",n):l.append('<link id="skin-theme" rel="stylesheet" href="'+n+'">')),!0===r&&i.Demo.save(e,t)},reset:function(){var t=i.Demo.apps();s.removeClass(i.Demo.style("body")).removeAttr("theme"),d(y).removeClass("active"),d(u).remove(),d(c).removeClass(i.Demo.style("all","aside")),d(f).removeClass(i.Demo.style("all","header"));var e,r=_createForOfIteratorHelper(o);try{for(r.s();!(e=r.n()).done;){var a=e.value;d("[data-key='"+a+"']").each(function(){var e=d(this).data("update");"aside"!==a&&"header"!==a&&"style"!==a||e===v[t][a]&&d(this).addClass("active"),"mode"!==a&&"skin"!==a||e!==n&&"default"!==e||d(this).addClass("active")}),i.Demo.remove(a)}}catch(e){r.e(e)}finally{r.f()}d("[data-key='dir']").each(function(){d(this).data("update")===i.Demo.current("dir")&&d(this).addClass("active")}),i.Demo.apply()},load:function(){i.Demo.apply(),0<d(y).length&&d(y).each(function(){var e=d(this).data("update"),t=d(this).data("key");"aside"!==t&&"header"!==t&&"style"!==t||e===i.Demo.defs(t)&&(d(this).parent(h).find(y).removeClass("active"),d(this).addClass("active")),"mode"!==t&&"skin"!==t&&"dir"!==t||e!=i.Demo.current("skin")&&e!=i.Demo.current("mode")&&e!=i.Demo.current("dir")||(d(this).parent(h).find(y).removeClass("active"),d(this).addClass("active"))})},trigger:function(){d(y).on("click",function(e){e.preventDefault();var t=d(this),r=t.parent(h),a=t.data("update"),e=t.data("key");i.Demo.update(e,a,!0),r.find(y).removeClass("active"),t.addClass("active"),"dir"==e&&setTimeout(function(){window.location.reload()},100)}),d(".nk-opt-reset > a").on("click",function(e){e.preventDefault(),i.Demo.reset()})},init:function(e){i.Demo.load(),i.Demo.trigger()}},i.coms.docReady.push(i.Demo.init)}(NioApp,jQuery);