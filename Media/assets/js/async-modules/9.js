(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,e=null,n=window,i=n.clearTimeout,o=n.setTimeout;function c(n){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;i(e),e=o(n,c)}return c.clear=function(){return i(e)},c}},58:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=n(42);(i=c)&&i.__esModule;n(57),n(56);var r={mainClass:".js-timer",bntClass:".js-timerStart"},a=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=this;e.data("timer")instanceof t&&e.data("timer",null),this.$container=e,this.config=$.extend(!0,{},t.config,n),this.$timer=this.$container.closest(this.config.mainClass),this.clock=this.$container.FlipClock({clockFace:"MinuteCounter",clockFaceOptions:{autoStart:!1},onStop:function(){console.log("timer off")}}),this.clock.face.setCountdown(!0),this.clock.setFaceValue(this.config.timer),this.$timer.on("click",this.config.bntClass,function(){i.clock.start()}),this.$container.data("timer",this)}return o(t,null,[{key:"config",get:function(){return r},set:function(t){$.extend(!0,r,t)}}]),t}();e.default=a},6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loaderInit=void 0;var i,o=n(58),c=(i=o)&&i.__esModule?i:{default:i};e.loaderInit=function(t,e){t.each(function(t,e){new c.default($(e),$(e).data("timer"))})}}}]);