!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ScrollTrigger",[],e):"object"==typeof exports?exports.ScrollTrigger=e():t.ScrollTrigger=e()}(window,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e){
  /*!
   * object-extend
   * A well-tested function to deep extend (or merge) JavaScript objects without further dependencies.
   *
   * http://github.com/bernhardw
   *
   * Copyright 2013, Bernhard Wanger <mail@bernhardwanger.com>
   * Released under the MIT license.
   *
   * Date: 2013-04-10
   */
  t.exports=function t(e,i){return null==e||null==i?e:(Object.keys(i).forEach((function(n){"[object Object]"==Object.prototype.toString.call(i[n])?"[object Object]"!=Object.prototype.toString.call(e[n])?e[n]=i[n]:e[n]=t(e[n],i[n]):e[n]=i[n]})),e)}},function(t,e){Array.prototype.each=function(t){for(var e=this.length,i=0;i<e;i++){var n=this[i];n&&t(n,i)}},NodeList.prototype.each=Array.prototype.each,NodeList.prototype.filter=Array.prototype.filter},function(t,e,i){"use strict";i.r(e);var n=function(){this.trigger={once:!1,offset:{viewport:{x:0,y:0},element:{x:0,y:0}},toggle:{class:{in:"visible",out:"invisible"},callback:{in:null,visible:null,out:null}}},this.scroll={sustain:300,element:window,callback:function(){},start:function(){},stop:function(){},directionChange:function(){}}},o=i(0),s=i.n(o);i(1);function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t){return Number(t)===t&&t%1==0}function c(t){return Number(t)===t&&t%1!=0}var a=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,i=s()((new n).trigger,i),this.offset=i.offset,this.toggle=i.toggle,this.once=i.once,this.visible=null,this.active=!0}var e,i,o;return e=t,(i=[{key:"checkVisibility",value:function(t,e){if(!this.active)return this.visible;var i={w:t.offsetWidth||t.innerWidth||0,h:t.offsetHeight||t.innerHeight||0},n=this.getBounds(),o=this._checkVisibility(n,i,e);if(o!==this.visible){this.visible=o;var s=this._toggleCallback();s instanceof Promise?s.then(this._toggleClass.bind(this)).catch((function(t){console.error("Trigger promise failed"),console.error(t)})):this._toggleClass(),this.visible&&this.once&&(this.active=!1)}else if(o&&"function"==typeof this.toggle.callback.visible)return this.toggle.callback.visible.call(this.element,this);return o}},{key:"getBounds",value:function(){return this.element.getBoundingClientRect()}},{key:"_getElementOffset",value:function(t,e){var i={x:0,y:0};return"function"==typeof this.offset.element.x?i.x=t.width*this.offset.element.x(this,t,e):c(this.offset.element.x)?i.x=t.width*this.offset.element.x:l(this.offset.element.x)&&(i.x=this.offset.element.x),"function"==typeof this.offset.element.y?i.y=t.height*this.offset.element.y(this,t,e):c(this.offset.element.y)?i.y=t.height*this.offset.element.y:l(this.offset.element.y)&&(i.y=this.offset.element.y),i}},{key:"_getViewportOffset",value:function(t,e){var i={x:0,y:0};return"function"==typeof this.offset.viewport.x?i.x=t.w*this.offset.viewport.x(this,t,e):c(this.offset.viewport.x)?i.x=t.w*this.offset.viewport.x:l(this.offset.viewport.x)&&(i.x=this.offset.viewport.x),"function"==typeof this.offset.viewport.y?i.y=t.h*this.offset.viewport.y(this,t,e):c(this.offset.viewport.y)?i.y=t.h*this.offset.viewport.y:l(this.offset.viewport.y)&&(i.y=this.offset.viewport.y),i}},{key:"_checkVisibility",value:function(t,e,i){var n=this._getElementOffset(t,i),o=this._getViewportOffset(e,i),s=!0;return t.left-o.x<-(t.width-n.x)&&(s=!1),t.left+o.x>e.w-n.x&&(s=!1),t.top-o.y<-(t.height-n.y)&&(s=!1),t.top+o.y>e.h-n.y&&(s=!1),s}},{key:"_toggleClass",value:function(){var t=this;if(this.visible)return Array.isArray(this.toggle.class.in)?this.toggle.class.in.each((function(e){t.element.classList.add(e)})):this.element.classList.add(this.toggle.class.in),void(Array.isArray(this.toggle.class.out)?this.toggle.class.out.each((function(e){t.element.classList.remove(e)})):this.element.classList.remove(this.toggle.class.out));Array.isArray(this.toggle.class.in)?this.toggle.class.in.each((function(e){t.element.classList.remove(e)})):this.element.classList.remove(this.toggle.class.in),Array.isArray(this.toggle.class.out)?this.toggle.class.out.each((function(e){t.element.classList.add(e)})):this.element.classList.add(this.toggle.class.out)}},{key:"_toggleCallback",value:function(){if(this.visible){if("function"==typeof this.toggle.callback.in)return this.toggle.callback.in.call(this.element,this)}else if("function"==typeof this.toggle.callback.out)return this.toggle.callback.out.call(this.element,this)}}])&&r(e.prototype,i),o&&r(e,o),t}();function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.triggers=e instanceof Array?e:[]}var e,i,n;return e=t,(i=[{key:"add",value:function(t){var e=this;if(t instanceof a)return this.triggers.push(t);t.each((function(t){t instanceof a?e.triggers.push(t):console.error("Object added to TriggerCollection is not a Trigger. Object: ",t)}))}},{key:"remove",value:function(t){t instanceof a&&(t=[t]),this.triggers=this.triggers.filter((function(e){var i=!1;return t.each((function(t){t==e&&(i=!0)})),!i}))}},{key:"query",value:function(t){return this.triggers.filter((function(e){var i=e.element,n=i.parentNode;return[].slice.call(n.querySelectorAll(t)).indexOf(i)>-1}))}},{key:"search",value:function(t){var e=this.triggers.filter((function(e){if(t instanceof NodeList||Array.isArray(t)){var i=!1;return t.each((function(t){e.element==t&&(i=!0)})),i}return e.element==t}));return 0==e.length?null:e.length>1?e:e[0]}},{key:"call",value:function(t){this.triggers.each(t)}}])&&u(e.prototype,i),n&&u(e,n),t}();function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var g=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._parseOptions(e),"function"==typeof i&&(this.callback=i),this.direction="none",this.position=this.getPosition(),this.lastAction=this._getTimestamp(),this._startRun(),this._boundListener=this._didScroll.bind(this),this.element.addEventListener("scroll",this._boundListener)}var e,i,o;return e=t,(i=[{key:"_parseOptions",value:function(t){var e=(new n).scroll;"function"!=typeof t?(e.callback=function(){},e=s()(e,t)):e.callback=t,this.element=e.element,this.sustain=e.sustain,this.callback=e.callback,this.startCallback=e.start,this.stopCallback=e.stop,this.directionChange=e.directionChange}},{key:"_didScroll",value:function(){var t=this.getPosition();if(this.position!==t){var e=this.direction;(e=t.x!==this.position.x?t.x>this.position.x?"right":"left":t.y!==this.position.y?t.y>this.position.y?"bottom":"top":"none")!==this.direction&&(this.direction=e,"function"==typeof this.directionChange&&this.directionChange(this.direction)),this.position=t,this.lastAction=this._getTimestamp()}else this.direction="none";this.running||this._startRun()}},{key:"_startRun",value:function(){this.running=!0,"function"==typeof this.startCallback&&this.startCallback(),this._loop()}},{key:"_stopRun",value:function(){this.running=!1,"function"==typeof this.stopCallback&&this.stopCallback()}},{key:"getPosition",value:function(){return{x:this.element.pageXOffset||this.element.scrollLeft||document.documentElement.scrollLeft||0,y:this.element.pageYOffset||this.element.scrollTop||document.documentElement.scrollTop||0}}},{key:"_getTimestamp",value:function(){return Number(Date.now())}},{key:"_tick",value:function(){this.callback(this.position,this.direction),this._getTimestamp()-this.lastAction>this.sustain&&this._stopRun(),this.running&&this._loop()}},{key:"_loop",value:function(){(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)})(this._tick.bind(this))}},{key:"kill",value:function(){this.running=!1,this.element.removeEventListener("scroll",this._boundListener)}}])&&f(e.prototype,i),o&&f(e,o),t}();function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.d(e,"Trigger",(function(){return p})),i.d(e,"TriggerCollection",(function(){return v})),i.d(e,"ScrollAnimationLoop",(function(){return d})),i.d(e,"default",(function(){return m}));
  /*!
   * ScrollTrigger
   *
   *
   * http://github.com/terwanerik
   *
   * Copyright 2017, Erik Terwan <erik@erikterwan.com>
   * Released under the MIT license.
   *
   * Date: 2017-07-09
   */
  var p=a,v=h,d=g,m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._parseOptions(e),this._initCollection(),this._initLoop()}var e,i,o;return e=t,(i=[{key:"_parseOptions",value:function(t){t=s()(new n,t),this.defaultTrigger=t.trigger,this.scrollOptions=t.scroll}},{key:"_initCollection",value:function(){var t=document.querySelectorAll("[data-scroll]"),e=[];t.length>0&&(e=this.createTriggers(t)),this.collection=new v(e)}},{key:"_initLoop",value:function(){var t=this;this.loop=new d({sustain:this.scrollOptions.sustain,element:this.scrollOptions.element,callback:function(e,i){t._scrollCallback(e,i)},start:function(){t._scrollStart()},stop:function(){t._scrollStop()},directionChange:function(e){t._scrollDirectionChange(e)}})}},{key:"_scrollCallback",value:function(t,e){var i=this;this.collection.call((function(t){t.checkVisibility(i.scrollOptions.element,e)})),this.scrollOptions.callback(t,e)}},{key:"_scrollStart",value:function(){this.scrollOptions.start()}},{key:"_scrollStop",value:function(){this.scrollOptions.stop()}},{key:"_scrollDirectionChange",value:function(t){this.scrollOptions.directionChange(t)}},{key:"createTrigger",value:function(t,e){return new p(t,s()(this.defaultTrigger,e))}},{key:"createTriggers",value:function(t,e){var i=this,n=[];return t.each((function(t){n.push(i.createTrigger(t,e))})),n}},{key:"add",value:function(t,e){return t instanceof HTMLElement?(this.collection.add(this.createTrigger(t,e)),this):t instanceof p?(this.collection.add(t),this):t instanceof NodeList?(this.collection.add(this.createTriggers(t,e)),this):Array.isArray(t)&&t.length&&t[0]instanceof p?(this.collection.add(t),this):Array.isArray(t)&&t.length&&t[0]instanceof HTMLElement?(this.collection.add(this.createTriggers(t,e)),this):(this.collection.add(this.createTriggers(document.querySelectorAll(t),e)),this)}},{key:"remove",value:function(t){return t instanceof p?(this.collection.remove(t),this):Array.isArray(t)&&t.length&&t[0]instanceof p?(this.collection.remove(t),this):t instanceof HTMLElement?(this.collection.remove(this.search(t)),this):Array.isArray(t)&&t.length&&t[0]instanceof HTMLElement?(this.collection.remove(this.search(t)),this):t instanceof NodeList?(this.collection.remove(this.search(t)),this):Array.isArray(t)&&t.length&&t[0]instanceof p?(this.collection.remove(t),this):(this.collection.remove(this.query(t.toString())),this)}},{key:"query",value:function(t){return this.collection.query(t)}},{key:"search",value:function(t){return this.collection.search(t)}},{key:"listen",value:function(){this.loop||this._initLoop()}},{key:"kill",value:function(){this.loop.kill(),this.loop=null}}])&&y(e.prototype,i),o&&y(e,o),t}()}])}));
  //# sourceMappingURL=ScrollTrigger.min.js.map