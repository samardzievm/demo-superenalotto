(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3,6,9,10],{288:function(t,e,n){"use strict";n.r(e);var r={name:"ContainerComponent"},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container min-w-full xs:py-12 lg:py-24"},[n("div",{staticClass:"m-auto xs:w-full xl:w-10/12 2xl:w-8/12 3xl:w-6/12"},[t._t("default")],2)])}),[],!1,null,"17ddaaf8",null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var r={name:"LargeButton",props:["text","link"]},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 text-center xs:text-lg sm:text-xl md:text-2xl font-bold"},[n("a",{staticClass:"bg-red-600 rounded-2xl p-2 px-7 text-white hover:bg-red-500 focus:bg-red-700",attrs:{href:t.link}},[t._v(t._s(t.text))])])}),[],!1,null,"5219d07c",null);e.default=component.exports},290:function(t,e,n){t.exports=n.p+"img/deadline.e5734a6.png"},291:function(t,e,n){t.exports=n.p+"img/money.3234dcb.png"},292:function(t,e,n){t.exports=n.p+"img/winner1.208a3cc.jpg"},293:function(t,e,n){t.exports=n.p+"img/winner2.e70536f.jpg"},294:function(t,e,n){t.exports=n.p+"img/winner3.28635d4.jpg"},297:function(t,e,n){var map={"./deadline.png":290,"./money.png":291,"./winner1.jpg":292,"./winner2.jpg":293,"./winner3.jpg":294};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=297},298:function(t,e,n){t.exports=function(t){"use strict";var e,n=(e="Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}),i={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&n(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var e=this;if(!e.instance){var n=e.$el,i=new t.CountUp(n,e.endVal,e.options);i.error||(e.instance=i,e.delay<0?e.$emit("ready",i,t.CountUp):setTimeout((function(){return i.start((function(){return e.$emit("ready",i,t.CountUp)}))}),e.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&n(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&n(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&n(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&n(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&n(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(""),function(t,e,n,i,s,r,o,a,u,l){"boolean"!=typeof o&&(u=a,a=o,o=!1);var c,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),i&&(d._scopeId=i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):e&&(c=o?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(d.functional){var p=d.render;d.render=function(t,e){return c.call(e),p(t,e)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,c):[c]}return n}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},void 0,i,"data-v-0abbdf5a",!1,void 0,void 0,void 0)}(n(299))},299:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return o}));var r=function(){return(r=Object.assign||function(t){for(var i,e=1,a=arguments.length;e<a;e++)for(var s in i=arguments[e])Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);return t}).apply(this,arguments)},o=function(){function t(t,i,e){var a=this;this.endVal=i,this.options=e,this.version="2.2.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var i=t-a.startTime;a.remaining=a.duration-i,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(i,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(i,a.startVal,a.endVal-a.startVal,a.duration):a.countDown?a.frameVal=a.startVal-(a.startVal-a.endVal)*(i/a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(i/a.duration),a.countDown?a.frameVal=a.frameVal<a.endVal?a.endVal:a.frameVal:a.frameVal=a.frameVal>a.endVal?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),i<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(t){var i,e,s,n,r=t<0?"-":"";i=Math.abs(t).toFixed(a.options.decimalPlaces);var o=(i+="").split(".");if(e=o[0],s=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){n="";for(var l=0,c=e.length;l<c;++l)0!==l&&l%3==0&&(n=a.options.separator+n),n=e[c-l-1]+n;e=n}return a.options.numerals&&a.options.numerals.length&&(e=e.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),r+a.options.prefix+e+s+a.options.suffix},this.easeOutExpo=function(t,i,e,a){return e*(1-Math.pow(2,-10*t/a))*1024/1023+i},this.options=r(r({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",void 0!==window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,e=t.el.offsetTop+t.el.offsetHeight;e<i&&e>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>e&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},300:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("74768844",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";var r=n(2),o=n(4),l=n(40),c=n(25),d=n(31),f=n(196),h=n(13),m=n(3),v=n(195),_=n(138),y=n(311),w=n(312),x=n(80),k=n(313),C=[],V=o(C.sort),S=o(C.push),E=m((function(){C.sort(void 0)})),N=m((function(){C.sort(null)})),j=_("sort"),A=!m((function(){if(x)return x<70;if(!(y&&y>3)){if(w)return!0;if(k)return k<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)C.push({k:t+n,v:e})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)t=C[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:E||!N||!j||!A},{sort:function(t){void 0!==t&&l(t);var e=c(this);if(A)return void 0===t?V(e):V(e,t);var n,r,o=[],m=d(e);for(r=0;r<m;r++)r in e&&S(o,e[r]);for(v(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:h(e)>h(n)?1:-1}}(t)),n=o.length,r=0;r<n;)e[r]=o[r++];for(;r<m;)f(e,r++);return e}})},311:function(t,e,n){var r=n(64).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},312:function(t,e,n){var r=n(64);t.exports=/MSIE|Trident/.test(r)},313:function(t,e,n){var r=n(64).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},314:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7);e.default={name:"flipCountdown",props:{deadline:{type:String},stop:{type:Boolean},showDays:{type:Boolean,required:!1,default:!0},showHours:{type:Boolean,required:!1,default:!0},showMinutes:{type:Boolean,required:!1,default:!0},showSeconds:{type:Boolean,required:!1,default:!0},labels:{type:Object,required:!1,default:function(){return{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"}}},countdownSize:{type:String,required:!1},labelSize:{type:String,required:!1}},data:function(){var t=i();return{now:Math.trunc((new Date).getTime()/1e3),date:null,interval:null,diff:0,show:!1,timeData:[{current:0,previous:0,label:this.labels.days,elementId:"flip-card-days-"+t,show:this.showDays},{current:0,previous:0,label:this.labels.hours,elementId:"flip-card-hours-"+t,show:this.showHours},{current:0,previous:0,label:this.labels.minutes,elementId:"flip-card-minutes-"+t,show:this.showMinutes},{current:0,previous:0,label:this.labels.seconds,elementId:"flip-card-seconds-"+t,show:this.showSeconds}]}},created:function(){var t=this;if(!this.deadline)throw new Error("Missing props 'deadline'");var e=this.deadline;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'");this.interval=setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},mounted:function(){0!==this.diff&&(this.show=!0)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{deadline:function(t,e){var n=this.deadline;if(this.date=Math.trunc(Date.parse(n.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'")},now:function(t){this.diff=this.date-this.now,this.diff<=0||this.stop?(this.diff=0,this.updateTime(3,0)):this.updateAllCards()},diff:function(t){0===t&&(this.$emit("timeElapsed"),this.updateAllCards())}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{updateAllCards:function(){this.updateTime(0,this.days),this.updateTime(1,this.hours),this.updateTime(2,this.minutes),this.updateTime(3,this.seconds)},updateTime:function(t,e){if(!(t>=this.timeData.length||void 0===e)){window.requestAnimationFrame&&(this.frame=requestAnimationFrame(this.updateTime.bind(this)));var n=this.timeData[t],i=e<0?0:e,a=document.querySelector("#"+n.elementId);if(i!==n.current&&(n.previous=n.current,n.current=i,a&&(a.classList.remove("flip"),a.offsetWidth,a.classList.add("flip")),0===t)){var r=a.querySelectorAll("span b");if(r){var o=!0,l=!1,s=void 0;try{for(var c,d=r[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){var f=c.value,u=f.classList[0];if(e/1e3>=1){if(!u.includes("-4digits")){var p=u+"-4digits";f.classList.add(p),f.classList.remove(u)}}else if(u.includes("-4digits")){var h=u.replace("-4digits","");f.classList.add(h),f.classList.remove(u)}}}catch(t){l=!0,s=t}finally{try{!o&&d.return&&d.return()}finally{if(l)throw s}}}}}}},beforeDestroy:function(){window.cancelAnimationFrame&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(this.interval)}}},function(t,e,n){"use strict";function i(t){n(2)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var l=n(10),s=n(11),c=i,d=Object(s.a)(r.a,l.a,l.b,!1,c,"data-v-cff81de8",null);e.default=d.exports},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(5).default)("49966720",i,!0,{})},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.flip-clock[data-v-cff81de8] {\n  text-align: center;\n  perspective: 600px;\n  margin: 0 auto;\n}\n.flip-clock *[data-v-cff81de8],\n.flip-clock *[data-v-cff81de8]:before,\n.flip-clock *[data-v-cff81de8]:after {\n  box-sizing: border-box;\n}\n.flip-clock__piece[data-v-cff81de8] {\n  display: inline-block;\n  margin: 0 0.2vw;\n}\n@media (min-width: 1000px) {\n.flip-clock__piece[data-v-cff81de8] {\n    margin: 0 5px;\n}\n}\n.flip-clock__slot[data-v-cff81de8] {\n  font-size: 1rem;\n  line-height: 1.5;\n  display: block;\n}\n.flip-card[data-v-cff81de8] {\n  display: block;\n  position: relative;\n  padding-bottom: 0.72em;\n  font-size: 2.25rem;\n  line-height: 0.95;\n}\n@media (min-width: 1000px) {\n.flip-clock__slot[data-v-cff81de8] {\n    font-size: 1.2rem;\n}\n.flip-card[data-v-cff81de8] {\n    font-size: 3rem;\n}\n}\n.flip-card__top[data-v-cff81de8],\n.flip-card__bottom[data-v-cff81de8],\n.flip-card__back-bottom[data-v-cff81de8],\n.flip-card__back[data-v-cff81de8]::before,\n.flip-card__back[data-v-cff81de8]::after {\n  display: block;\n  color: #cca900;\n  background: #222;\n  padding: 0.23em 0.15em 0.4em;\n  border-radius: 0.15em 0.15em 0 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  transform-style: preserve-3d;\n  width: 2.1em;\n  height: 0.72em;\n}\n.flip-card__top-4digits[data-v-cff81de8],\n.flip-card__bottom-4digits[data-v-cff81de8],\n.flip-card__back-bottom-4digits[data-v-cff81de8],\n.flip-card__back-4digits[data-v-cff81de8]::before,\n.flip-card__back-4digits[data-v-cff81de8]::after {\n  display: block;\n  color: #cca900;\n  background: #222;\n  padding: 0.23em 0.15em 0.4em;\n  border-radius: 0.15em 0.15em 0 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  transform-style: preserve-3d;\n  width: 2.65em;\n  height: 0.72em;\n}\n.flip-card__bottom[data-v-cff81de8],\n.flip-card__back-bottom[data-v-cff81de8],\n.flip-card__bottom-4digits[data-v-cff81de8],\n.flip-card__back-bottom-4digits[data-v-cff81de8] {\n  color: #ffdc00;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  border-top: solid 1px #000;\n  background: #393939;\n  border-radius: 0 0 0.15em 0.15em;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 2;\n}\n.flip-card__back-bottom[data-v-cff81de8],\n.flip-card__back-bottom-4digits[data-v-cff81de8] {\n  z-index: 1;\n}\n.flip-card__bottom[data-v-cff81de8]::after,\n.flip-card__back-bottom[data-v-cff81de8]::after,\n.flip-card__bottom-4digits[data-v-cff81de8]::after,\n.flip-card__back-bottom-4digits[data-v-cff81de8]::after {\n  display: block;\n  margin-top: -0.72em;\n}\n.flip-card__back[data-v-cff81de8]::before,\n.flip-card__bottom[data-v-cff81de8]::after,\n.flip-card__back-bottom[data-v-cff81de8]::after,\n.flip-card__back-4digits[data-v-cff81de8]::before,\n.flip-card__bottom-4digits[data-v-cff81de8]::after,\n.flip-card__back-bottom-4digits[data-v-cff81de8]::after {\n  content: attr(data-value);\n}\n.flip-card__back[data-v-cff81de8],\n.flip-card__back-4digits[data-v-cff81de8] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  left: 0%;\n  pointer-events: none;\n}\n.flip-card__back[data-v-cff81de8]::before,\n.flip-card__back-4digits[data-v-cff81de8]::before {\n  position: relative;\n  overflow: hidden;\n  z-index: -1;\n}\n.flip .flip-card__back[data-v-cff81de8]::before,\n.flip .flip-card__back-4digits[data-v-cff81de8]::before {\n  z-index: 1;\n  animation: flipTop-data-v-cff81de8 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);\n  animation-fill-mode: both;\n  transform-origin: center bottom;\n}\n.flip .flip-card__bottom[data-v-cff81de8],\n.flip .flip-card__bottom-4digits[data-v-cff81de8] {\n  transform-origin: center top;\n  animation-fill-mode: both;\n  animation: flipBottom-data-v-cff81de8 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);\n}\n@keyframes flipTop-data-v-cff81de8 {\n0% {\n    transform: rotateX(0deg);\n    z-index: 2;\n}\n0%,\n  99% {\n    opacity: 1;\n}\n100% {\n    transform: rotateX(-90deg);\n    opacity: 0;\n}\n}\n@keyframes flipBottom-data-v-cff81de8 {\n0%,\n  50% {\n    z-index: -1;\n    transform: rotateX(90deg);\n    opacity: 0;\n}\n51% {\n    opacity: 1;\n}\n100% {\n    opacity: 1;\n    transform: rotateX(0deg);\n    z-index: 5;\n}\n}\n",""])},function(t,e,n){"use strict";function i(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=a(i);return[n].concat(i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}))).concat([r]).join("\n")}return[n].join("\n")}function a(t){return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t)))))," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=i(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var o=0;o<t.length;o++){var l=t[o];null!=l[0]&&i[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),e.push(l))}},e}},function(t,e,n){"use strict";function i(t,e,n,i){m=n,b=i||{};var r=Object(c.a)(t,e);return a(r),function(e){for(var n=[],i=0;i<r.length;i++){var o=r[i];(l=f[o.id]).refs--,n.push(l)}for(e?a(r=Object(c.a)(t,e)):r=[],i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete f[l.id]}}}}function a(t){for(var e=0;e<t.length;e++){var n=t[e],i=f[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(o(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(a=0;a<n.parts.length;a++)r.push(o(n.parts[a]));f[n.id]={id:n.id,refs:1,parts:r}}}}function r(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function o(t){var e,n,i=document.querySelector("style["+_+'~="'+t.id+'"]');if(i){if(m)return v;i.parentNode.removeChild(i)}if(g){var a=h++;i=p||(p=r()),e=l.bind(null,i,a,!1),n=l.bind(null,i,a,!0)}else i=r(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function l(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,a);else{var r=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function s(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),b.ssrId&&t.setAttribute(_,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var c=n(6),d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f={},u=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,m=!1,v=function(){},b=null,_="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var r=e[a],o=r[0],l={id:t+":"+a,css:r[1],media:r[2],sourceMap:r[3]};i[o]?i[o].parts.push(l):n.push(i[o]={id:o,parts:[l]})}return n}e.a=i},function(t,e,n){function i(t,e,n){var i=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var l=0;l<16;++l)e[i+l]=o[l];return e||r(o)}var a=n(8),r=n(9);t.exports=i},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);t.exports=function(){return n(i),i}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}},function(t,e){function n(t,e){var n=e||0,a=i;return[a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]]].join("")}for(var i=[],a=0;a<256;++a)i[a]=(a+256).toString(16).substr(1);t.exports=n},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flip-clock"},[t._l(t.timeData,(function(e){return[n("span",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"data.show"}],key:e.label,staticClass:"flip-clock__piece",attrs:{id:e.elementId}},[n("span",{staticClass:"flip-clock__card flip-card",style:t.countdownSize?"font-size:"+t.countdownSize:""},[n("b",{staticClass:"flip-card__top"},[t._v(t._s(t._f("twoDigits")(e.current)))]),t._v(" "),n("b",{staticClass:"flip-card__bottom",attrs:{"data-value":t._f("twoDigits")(e.current)}}),t._v(" "),n("b",{staticClass:"flip-card__back",attrs:{"data-value":t._f("twoDigits")(e.previous)}}),t._v(" "),n("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":t._f("twoDigits")(e.previous)}})]),t._v(" "),n("span",{staticClass:"flip-clock__slot",style:t.labelSize?"font-size:"+t.labelSize:""},[t._v(t._s(e.label))])])]}))],2)},a=[]},function(t,e,n){"use strict";function i(t,e,n,i,a,r,o,l){var s=typeof(t=t||{}).default;"object"!==s&&"function"!==s||(t=t.default);var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId=r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):a&&(c=l?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(d.functional){d._injectStyles=c;var f=d.render;d.render=function(t,e){return c.call(e),f(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:d}}e.a=i}])},315:function(t,e,n){"use strict";n(300)},316:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,"ul[data-v-2f4504cf]{padding:0;margin:0;clear:both}li[data-v-2f4504cf]{list-style-type:none;list-style-position:outside;display:inline-flex;top:50%;left:50%}input[type=checkbox][data-v-2f4504cf]:checked,input[type=checkbox][data-v-2f4504cf]:not(:checked){position:absolute;left:-9999%}input[type=checkbox]+label[data-v-2f4504cf]{display:inline-block;cursor:pointer;border:1px solid #000;color:#000;background-color:#fff}input[type=checkbox]:checked+label[data-v-2f4504cf]{color:#fff;background-color:#000}",""]),r.locals={},t.exports=r},325:function(t,e,n){"use strict";n.r(e);var r={name:"BiggestJackpotAbout",data:function(){return{winners:[{image:"winner1.jpg",jackpot:"€209.1 million",location:"Lodi, Lombardy",date:"13th August 2019",type:"Single Winner",text:"In 2019 history was made with the biggest SuperEnalotto ever seen in Italy. The single ticket was purchased in a bar, a location now synonymous with luck and fortune to the community. The person that purchased the ticket chose to remain anonymous under states’ rights and their identity to this day is unknown to the public.",numbers:[7,32,41,59,75,76,21]},{image:"winner2.jpg",jackpot:"€177.7 million",location:"Milano, Lombardy",date:"30th October 2010",type:"Syndicate",text:"When the jackpot was won in 2010 it was the highest in the game’s history to date. It would be another 9 years before the jackpot would reach a number higher than the €177.7M mark that was celebrated at that time. The ticket was shared between a Syndicate of 70 individuals that loved to play the lottery around the Lombardy region. The ticket was purchased in Milan.\n",numbers:[4,26,40,54,55,67,41]},{image:"winner3.jpg",jackpot:"€163.5 million",location:"Vibo Valentia, Calabria",date:"27th October 2016",type:"Single Winner",text:"In 2016, after more than 200 draws and over one year with no winners, the SuperEnalotto was won in Vibo Valentia. At the time it was the second highest jackpot ever known to the public and the lucky ticket was purchased at a tobacconist. It was historically noted that at the time the jackpot was bigger than even the Powerball total, which was $150M on the same day. \n",numbers:[12,23,71,76,83,56,35]},{image:"winner1.jpg",jackpot:"",location:"",date:"",type:"",text:"",numbers:[]},{image:"winner1.jpg",jackpot:"",location:"",date:"",type:"",text:"",numbers:[]}]}},methods:{getImgUrl:function(t){return n(297)("./"+t)}}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h3",{staticClass:"mt-10"},[t._v("Biggest Jackpot Winners Right Now")]),t._v(" "),t._l(t.winners,(function(e){return n("div",{key:e,staticClass:"flex mt-10 rounded-xl bg-gray-50 shadow-xl p-10"},[n("div",{staticClass:"xl:w-5/12"},[n("img",{staticClass:"w-full h-full",attrs:{src:t.getImgUrl(e.image),alt:"Winner SuperEnalotto millions"}})]),t._v(" "),n("div",{staticClass:"xl:w-7/12 text-left px-7"},[n("p",{staticClass:"text-small text-gray-400 text-right"},[n("i",{class:"Single Winner"===e.type?"fas fa-user-alt":"fa fa-users",staticStyle:{"font-size":"24px"}}),t._v(" "+t._s(e.type)+" "),n("br")]),t._v(" "),n("h2",{staticClass:"text-3xl font-bold"},[t._v(t._s(e.jackpot))]),t._v(" "),n("p",{staticClass:"text-small text-gray-400 mt-3"},[n("i",{staticClass:"fas fa-map-marker-alt",staticStyle:{"font-size":"24px"}}),t._v(" "+t._s(e.location)+" "),n("br"),t._v(" "),n("i",{staticClass:"far fa-calendar-alt mt-2",staticStyle:{"font-size":"24px"}}),t._v(" "+t._s(e.date)),n("br")]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v(t._s(e.text))]),t._v(" "),n("h5",{staticClass:"mt-3 font-bold"},[t._v("Winning numbers")]),t._v(" "),n("div",{staticClass:"mt-3 flex"},t._l(e.numbers,(function(e,r){return n("span",{key:r,staticClass:" inline-flex\n                     font-bold font-mono rounded-full items-center justify-center m-0.5\n                     xs:w-8 xs:h-8 lg:w-10 lg:h-10 xl:text-xl",class:6===r?"text-gray-50 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:text-black":"bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-black hover:text-white",staticStyle:{border:"1px solid black"}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),t._m(0,!0)])])}))],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-actions justify-end"},[n("button",{staticClass:"btn btn-danger"},[t._v("Learn More")])])}],!1,null,"0be55a98",null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);n(310);var r=n(314),o=n.n(r),l={name:"CountdownAndNumbersPick",components:{LargeButton:n(289).default,FlipCountdown:o.a},data:function(){return{selectedNumbers:[]}},computed:{sortSelectedNumbers:function(){if(7===this.selectedNumbers.length)return this.selectedNumbers.sort((function(a,b){return a-b}))},atblLinkWithPickedNumbers:function(){var t="https://allthebestlottos.com/en/lottery/play-superenalotto-online";return 7===this.selectedNumbers.length?t+"?&numbers="+this.selectedNumbers:t}}},c=(n(315),n(24)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex"},[n("div",{staticClass:"xl:w-8/12 2xl:w-7/12 grid grid-cols-1"},[n("h4",{staticClass:"lg:text-2xl 2xl:text-3xl"},[t._v("Next Draw in")]),t._v(" "),n("flip-countdown",{staticClass:"mt-5",attrs:{deadline:"2022-07-24 20:00:00"}})],1),t._v(" "),n("div",{staticClass:"xl:w-4/12 2xl:w-5/12 grid grid-cols-1 "},[n("h4",{staticClass:"lg:text-2xl 2xl:text-3xl"},[t._v("Pick the winning numbers:")]),t._v(" "),n("div",{staticClass:"dropdown dropdown-end"},[t._l(7,(function(e){return n("label",{key:e,staticClass:"cursor-pointer bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-black hover:text-white inline-flex\n                        font-bold font-mono rounded-full  items-center justify-center mx-0.5\n                        xs:w-8 xs:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 xl:text-xl",class:7===t.selectedNumbers.length?"mt-10":"",attrs:{tabindex:"0"}},[t._v("\n          "+t._s(t.selectedNumbers.length<7?"?":t.sortSelectedNumbers[e-1])+"\n        ")])})),t._v(" "),t.selectedNumbers.length<7?n("div",{staticClass:"card compact dropdown-content shadow bg-base-100 rounded-box w-full h-72 overflow-auto",attrs:{tabindex:"0"}},[n("div",{staticClass:"card-body"},[n("h2",{staticClass:"card-title m-auto"},[t._v("Select 7 numbers")]),t._v(" "),n("ul",{},t._l(90,(function(e){return n("li",{key:e},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedNumbers,expression:"selectedNumbers"}],attrs:{id:"check_"+e,type:"checkbox",name:"check_"+e,"true-value":[]},domProps:{value:e,checked:Array.isArray(t.selectedNumbers)?t._i(t.selectedNumbers,e)>-1:t._q(t.selectedNumbers,[])},on:{change:function(n){var r=t.selectedNumbers,o=n.target,l=!!o.checked&&[];if(Array.isArray(r)){var c=e,d=t._i(r,c);o.checked?d<0&&(t.selectedNumbers=r.concat([c])):d>-1&&(t.selectedNumbers=r.slice(0,d).concat(r.slice(d+1)))}else t.selectedNumbers=l}}}),t._v(" "),n("label",{staticClass:"inline-flex font-bold font-mono rounded-full items-center justify-center m-0.5\n                              xs:w-8 xs:h-8 lg:w-10 lg:h-10 xl:text-xl",class:t.selectedNumbers.includes(e)?"text-gray-50 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:text-black":"bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-black hover:text-white",attrs:{for:"check_"+e}},[t._v("\n                  "+t._s(e)+"\n                ")])])})),0)])]):t._e()],2),t._v(" "),7===t.selectedNumbers.length?n("div",{staticClass:"pt-5"},[n("span",{staticClass:"btn btn-danger",on:{click:function(e){t.selectedNumbers=[]}}},[t._v("RESET")])]):t._e()])]),t._v(" "),n("LargeButton",{staticClass:"mt-16",attrs:{text:"Play SuperEnalotto",link:t.atblLinkWithPickedNumbers}})],1)}),[],!1,null,"2f4504cf",null);e.default=component.exports},340:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(47),n(298)),l=n.n(o),c=n(288),d=n(325),f={name:"About",components:{CountdownAndNumbersPick:n(326).default,BiggestJackpotAbout:d.default,ContainerComponent:c.default,ICountUp:l.a},middleware:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("getLottery");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{defaultBiggestJackpotValue:24e7,currentJackpot:this.$store.state.lottery.jackpot_raw,endVal:0,counterUp:{delay:500,options:{useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:"€"}}}},created:function(){this.endVal=this.currentJackpot},updated:function(){this.endVal=this.currentJackpot},methods:{onReady:function(t,e){t.update(this.endVal)}}},h=n(24),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ContainerComponent",{staticClass:"text-center"},[n("h2",[t._v("About SuperEnalotto")]),t._v(" "),t.currentJackpot>t.defaultBiggestJackpotValue?n("p",{staticClass:"mt-8 xl:text-lg 2xl:text-xl"},[t._v("\n      The SuperEnalotto jackpot "),n("strong",[t._v("is currently the highest in history")]),t._v(", with the "),n("strong",[t._v("jackpot over\n      €200 million")]),t._v(" for the second\n      time ever in the time this game has existed. As the jackpot continues to climb the number will be updated in\n      accordance with the draws until history is made with the highest winner in the Italian lottery.\n    ")]):n("p",{staticClass:"mt-8 text-xl"},[t._v("Some text if the jackpot is not the highest right now")]),t._v(" "),n("h4",{staticClass:"my-12 xs:text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl text-7xl text-red-700 font-bold"},[n("ICountUp",{attrs:{delay:t.counterUp.delay,"end-val":t.endVal,options:t.counterUp.options},on:{ready:t.onReady}})],1),t._v(" "),n("CountdownAndNumbersPick",{staticClass:"my-24"}),t._v(" "),n("BiggestJackpotAbout")],1),t._v(" "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1)}),[],!1,null,"7c271912",null);e.default=component.exports}}]);