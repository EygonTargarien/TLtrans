(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{59:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.default={default:{direction:"horizontal",speed:400,loop:!0,initialSlide:0,autoHeight:!1,effect:"slide",watchOverflow:!1,centeredSlides:!1,freeMode:!1,grabCursor:!0,slidesPerView:3,spaceBetween:50,autoplay:{delay:2500,disableOnInteraction:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar",hide:!0}},review:{loop:!0,slidesPerView:1,speed:800,autoplay:{delay:3500,disableOnInteraction:!0},spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0}},reviewSm:{loop:!0,slidesPerView:1,speed:800,autoplay:{delay:4500,disableOnInteraction:!0},spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0}}}},62:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=n(t(61)),l=n(t(59));function n(e){return e&&e.__esModule?e:{default:e}}var d={defaultConfig:{sliderClass:"[data-slider]"},init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$(this.defaultConfig.sliderClass),i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.config=$.extend(this.defaultConfig,i),e.each(function(e,i){var t=$(i),n=t.closest(".js-sliderContainer"),d=t.data("slider")||"default",s={pagination:{el:n.find(".js-sliderPagination")},navigation:{nextEl:n.find(".js-sliderNext"),prevEl:n.find(".js-sliderPrev")},scrollbar:{el:n.find(".js-sliderScrollBar")}};if(t.data("swiper"))return!0;var o=$.extend(!0,[],l.default.default,l.default[d],s,{}),r=new a.default(t,o);switch(d){case"main":console.log("action")}t.data("swiper",r)})}};i.default=d},7:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.loaderInit=void 0;var a,l=t(62),n=(a=l)&&a.__esModule?a:{default:a};i.loaderInit=function(e,i){n.default.init(e)}}}]);