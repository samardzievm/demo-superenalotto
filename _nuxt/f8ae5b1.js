(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,6,7,8,9,10,11,12,13],{288:function(t,e,n){"use strict";n.r(e);var l={name:"ContainerComponent"},o=n(24),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container min-w-full xs:py-12 lg:py-24"},[n("div",{staticClass:"m-auto xs:w-full xl:w-10/12 2xl:w-8/12 3xl:w-6/12"},[t._t("default")],2)])}),[],!1,null,"17ddaaf8",null);e.default=component.exports},289:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("60a22817",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("3053a468",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n.r(e);var l={name:"LargeButton",props:["text","link"]},o=n(24),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 text-center xs:text-xl sm:text-2xl md:text-3xl font-bold"},[n("button",{staticClass:"bg-red-600 rounded-tr-2xl p-3 px-10 text-white hover:bg-red-500 focus:bg-red-700"},[t._v(t._s(t.text))])])}),[],!1,null,"56802d50",null);e.default=component.exports},292:function(t,e,n){"use strict";n(289)},293:function(t,e,n){var l=n(78)((function(i){return i[1]}));l.push([t.i,".ball[data-v-53484d4e]{display:block;width:150px;height:150px;border-radius:50%;color:#000;font-weight:800;font-size:24px}.ball-middle-align[data-v-53484d4e]{position:relative;text-align:center}.ball-center-text[data-v-53484d4e]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.main[data-v-53484d4e]{background-color:#ff0;box-shadow:inset -25px -15px 40px rgba(89,88,88,.3);background-image:linear-gradient(-45deg,rgba(211,211,75,.3),transparent)}.extra[data-v-53484d4e]{background-color:#f51b1b;box-shadow:inset -25px -15px 40px rgba(0,0,0,.3);background-image:linear-gradient(-45deg,rgba(255,255,220,.3),transparent)}@media (min-width:220px){.ball[data-v-53484d4e]{font-size:18px;width:35px;height:35px;margin:0 3px}}@media (min-width:360px){.ball[data-v-53484d4e]{font-size:20px;width:37px;height:37px;font-weight:800}}@media (min-width:400px){.ball[data-v-53484d4e]{font-size:20px;width:40px;height:40px;font-weight:800}}@media (min-width:440px){.ball[data-v-53484d4e]{font-size:22px;width:45px;height:45px}}@media (min-width:600px){.ball[data-v-53484d4e]{font-size:24px;width:55px;height:55px}}@media (min-width:767px){.ball[data-v-53484d4e]{margin:0 5px;font-size:24px;width:70px;height:70px}.ball[data-v-53484d4e]:hover{color:#fff}}",""]),l.locals={},t.exports=l},294:function(t,e,n){"use strict";n(290)},295:function(t,e,n){var l=n(78)((function(i){return i[1]}));l.push([t.i,"",""]),l.locals={},t.exports=l},296:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("2799847a",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n.r(e);var l={name:"LottoBall",props:["type","color"]},o=(n(292),n(24)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"main"===t.type?n("div",{staticClass:"ball ball-middle-align",class:t.type,style:"color: "+t.color+";"},[n("span",{staticClass:"ball-center-text"},[t._t("default")],2)]):n("div",{staticClass:"ball ball-middle-align",class:t.type},[n("span",{staticClass:"ball-center-text",style:"color: "+t.color+";"},[t._t("default")],2)])}),[],!1,null,"53484d4e",null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var l={name:"CardSmall",props:["title","text","image"]},o=n(24),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-auto xs:w-8/12 sm:w-6/12 md:w-4/12 xl:w-4/12 2xl:w-3/12 mt-10 rounded overflow-hidden shadow-lg text-center"},[t.image?n("img",{staticClass:"w-full",attrs:{src:"assets/images/"+t.image,alt:t.title}}):t._e(),t._v(" "),n("div",{staticClass:"px-6 py-4"},[n("div",{staticClass:"xs:text-xl lg:text-2xl text-green-900 font-bold"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"text-red-600 xs:text-2xl lg:text-3xl font-extrabold"},[t._v(t._s(t.text))])])])}),[],!1,null,"6be0caec",null);e.default=component.exports},299:function(t,e,n){"use strict";n.r(e);n(39);var l={name:"TableDaisyUI",props:["tableData"],data:function(){return{numberOfColumns:0,thClass:null,thStyle:null,tdClass:null}},created:function(){this.numberOfColumns=Object.keys(this.tableData.rows[0]).length,this.thClass="xl:text-lg xl:font-extrabold text-green-900",this.thStyle="background-color: yellowgreen;",2===this.numberOfColumns?this.tdClass="w-6/12":3===this.numberOfColumns?this.tdClass="w-4/12":4===this.numberOfColumns&&(this.tdClass="w-3/12")}},o=(n(294),n(24)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full text-center"},[n("thead",[n("tr",t._l(t.tableData.headers,(function(header){return n("th",{key:header,class:t.thClass,attrs:{colspan:1===t.tableData.headers.length?t.numberOfColumns:""}},[t._v(t._s(header))])})),0)]),t._v(" "),n("tbody",t._l(t.tableData.rows,(function(e,l){return n("tr",{key:l,staticClass:"hover:font-bold"},[n("td",{class:t.tdClass},[t._v(t._s(e.column1))]),t._v(" "),e.column2?n("td",{class:t.tdClass},[t._v(t._s(e.column2))]):t._e(),t._v(" "),e.column3?n("td",{class:t.tdClass},[t._v(t._s(e.column3))]):t._e(),t._v(" "),e.column4?n("td",{class:t.tdClass},[t._v(t._s(e.column4))]):t._e()])})),0),t._v(" "),t.tableData.footer?n("tfoot",[n("tr",t._l(t.tableData.footer,(function(e){return n("th",{key:e,staticClass:"xl:text-lg xl:font-extrabold text-red-600",style:t.thStyle,attrs:{colspan:1===t.tableData.headers.length?t.numberOfColumns:""}},[t._v(t._s(e))])})),0)]):t._e()])])}),[],!1,null,"05e94ddc",null);e.default=component.exports},300:function(t,e,n){var map={"./winner1.jpg":301,"./winner2.jpg":302,"./winner3.jpg":303};function l(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=o,t.exports=l,l.id=300},301:function(t,e,n){t.exports=n.p+"img/winner1.208a3cc.jpg"},302:function(t,e,n){t.exports=n.p+"img/winner2.e70536f.jpg"},303:function(t,e,n){t.exports=n.p+"img/winner3.28635d4.jpg"},304:function(t,e,n){t.exports=function(t){"use strict";var e,n=(e="Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}),i={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&n(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var e=this;if(!e.instance){var n=e.$el,i=new t.CountUp(n,e.endVal,e.options);i.error||(e.instance=i,e.delay<0?e.$emit("ready",i,t.CountUp):setTimeout((function(){return i.start((function(){return e.$emit("ready",i,t.CountUp)}))}),e.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&n(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&n(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&n(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&n(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&n(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(""),function(t,e,n,i,s,l,o,a,u,r){"boolean"!=typeof o&&(u=a,a=o,o=!1);var c,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),i&&(d._scopeId=i),l?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(l)},d._ssrRegister=c):e&&(c=o?function(){e.call(this,r(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(d.functional){var p=d.render;d.render=function(t,e){return c.call(e),p(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return n}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},void 0,i,"data-v-0abbdf5a",!1,void 0,void 0,void 0)}(n(305))},305:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return o}));var l=function(){return(l=Object.assign||function(t){for(var i,e=1,a=arguments.length;e<a;e++)for(var s in i=arguments[e])Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);return t}).apply(this,arguments)},o=function(){function t(t,i,e){var a=this;this.endVal=i,this.options=e,this.version="2.2.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var i=t-a.startTime;a.remaining=a.duration-i,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(i,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(i,a.startVal,a.endVal-a.startVal,a.duration):a.countDown?a.frameVal=a.startVal-(a.startVal-a.endVal)*(i/a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(i/a.duration),a.countDown?a.frameVal=a.frameVal<a.endVal?a.endVal:a.frameVal:a.frameVal=a.frameVal>a.endVal?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),i<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(t){var i,e,s,n,l=t<0?"-":"";i=Math.abs(t).toFixed(a.options.decimalPlaces);var o=(i+="").split(".");if(e=o[0],s=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){n="";for(var r=0,c=e.length;r<c;++r)0!==r&&r%3==0&&(n=a.options.separator+n),n=e[c-r-1]+n;e=n}return a.options.numerals&&a.options.numerals.length&&(e=e.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),l+a.options.prefix+e+s+a.options.suffix},this.easeOutExpo=function(t,i,e,a){return e*(1-Math.pow(2,-10*t/a))*1024/1023+i},this.options=l(l({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",void 0!==window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,e=t.el.offsetTop+t.el.offsetHeight;e<i&&e>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>e&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},306:function(t,e,n){"use strict";n(296)},307:function(t,e,n){var l=n(78)((function(i){return i[1]}));l.push([t.i,".background-italy[data-v-19d1943f]{max-width:100%;height:100vh;overflow-x:hidden;background:#007005;background:linear-gradient(90deg,#007005,#23e339 20%,#fffefe 33%,#fef8f9 67%,#ff000f 80%,#cb000a)}.center-middle-content[data-v-19d1943f]{height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center}",""]),l.locals={},t.exports=l},308:function(t,e,n){"use strict";n.r(e);n(39);var l=n(288),o=n(297),r=n(298),c={name:"LatestResults",components:{LargeButton:n(291).default,CardSmall:r.default,LottoBall:o.default,ContainerComponent:l.default},scrollToTop:!0,data:function(){return{jackpot:null,numbers:null,formatDrawDate:null,prizes:null,winners:null,tableData:{headers:["Number of Winners","Winning Prize","Match"],rows:[{column1:"Instant Win",column2:null,column3:"€ null"},{column1:"2 Numbers",column2:null,column3:null},{column1:"3 Numbers",column2:null,column3:null},{column1:"4 Numbers",column2:null,column3:null},{column1:"5 Numbers",column2:null,column3:null},{column1:"5 Numbers + Jolly",column2:null,column3:null},{column1:"6 Numbers",column2:null,column3:null}]},tableData2:{headers:["Match","Number of Winners","Winning Prize"],rows:[{column1:"Instant Win",column2:3176,column3:"€ 25"},{column1:"2 Numbers",column2:437829,column3:"€ 5.82"},{column1:"3 Numbers",column2:24693,column3:"€ 33.29"},{column1:"4 Numbers",column2:581,column3:"€ 470.36"},{column1:"5 Numbers",column2:3,column3:"€ 89335.4"},{column1:"5 Numbers + Jolly",column2:"0",column3:"€ 0"},{column1:"6 Numbers",column2:1,column3:"€ 2306997.28"}],customRowClass:{rowCondition:3,columnCondition:0,operator:">",customClass:"text-red-600 xs:text-lg md:text-xl xl:text-3xl font-bold hover:font-extrabold",customStyle:""}}}},created:function(){this.numberOfColumns=Object.keys(this.tableData.rows[0]).length,this.thClass="",this.thStyle="",this.jackpot=this.$store.state.latestResults.jackpot,this.numbers=JSON.parse(this.$store.state.latestResults.numbers),this.formatDrawDate=new Date(this.$store.state.latestResults.date).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric"}),this.winners=JSON.parse(this.$store.state.latestResults.winners),this.prizes=JSON.parse(this.$store.state.latestResults.prizes)},mounted:function(){this.tableData.rows[0].column2=this.winners.instant,this.tableData.rows[0].column3="€ "+this.prizes.instant,this.tableData.rows[1].column2=this.winners["match-2"],this.tableData.rows[1].column3="€ "+this.prizes["match-2"],this.tableData.rows[2].column2=this.winners["match-3"],this.tableData.rows[2].column3="€ "+this.prizes["match-3"],this.tableData.rows[3].column2=this.winners["match-4"],this.tableData.rows[3].column3="€ "+this.prizes["match-4"],this.tableData.rows[4].column2=this.winners["match-5"],this.tableData.rows[4].column3="€ "+this.prizes["match-5"],this.tableData.rows[5].column2=this.winners["match-5-j"],this.tableData.rows[5].column3="€ "+this.prizes["match-5-j"],this.tableData.rows[6].column2=this.winners["match-6"],this.tableData.rows[6].column3="€ "+this.prizes["match-6"]},methods:{getBoldTextRowClass:function(t,e){return t>3&&e>0?"text-green-800 xs:text-lg md:text-xl xl:text-2xl font-bold hover:font-extrabold":""}}},d=n(24),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContainerComponent",[n("h2",{staticClass:"xs:text-3xl lg:text-5xl text-green-900 text-center font-extrabold"},[t._v("Latest Results")]),t._v(" "),n("p",{staticClass:"mt-5 mb-10 text-center"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dolor explicabo natus ratione totam!")]),t._v(" "),n("div",{staticClass:"m-auto mt-5 xs:w-full md:w-10/12 lg:w-9/12 text-center text-white bg-green-700 rounded-3xl p-5"},[n("h3",{staticClass:"text-2xl text-white font-bold pt-0"},[t._v("Latest Draw Numbers")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("Check the latest results against your ticket to find out if you’re a winner!")]),t._v(" "),n("div",{staticClass:"m-auto xs:flex xl:inline-flex justify-center py-5"},[t._l(t.numbers.main,(function(e,l){return n("LottoBall",{key:l,attrs:{type:"main"}},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),n("LottoBall",{attrs:{type:"extra",color:"white"}},[t._v(t._s(t.numbers.jolly))])],2),t._v(" "),n("p",{staticClass:"xs:text-lg md:text-xl font-semibold"},[t._v("The draw held on "+t._s(t.formatDrawDate))])]),t._v(" "),n("div",{staticClass:"m-auto mt-10"},[n("CardSmall",{attrs:{title:"Latest Jackpot",text:t.jackpot}}),t._v(" "),n("div",{staticClass:"overflow-x-auto mt-10"},[n("table",{staticClass:"table w-full text-center"},[n("thead",[n("tr",t._l(t.tableData.headers,(function(header){return n("th",{key:header,class:t.thClass,attrs:{colspan:1===t.tableData.headers.length?t.numberOfColumns:""}},[t._v(t._s(header))])})),0)]),t._v(" "),n("tbody",t._l(t.tableData.rows,(function(e,l){return n("tr",{key:l,staticClass:"hover:font-bold",class:t.getBoldTextRowClass(l,e.column2)},[e.column2>0?n("td",{staticClass:"w-4/12"},[t._v(t._s(e.column2))]):n("td",{staticClass:"w-4/12"},[t._v("0")]),t._v(" "),e.column3?n("td",{staticClass:"w-4/12"},[t._v(t._s(e.column3))]):t._e(),t._v(" "),n("td",{staticClass:"w-4/12"},[t._v(t._s(e.column1))])])})),0)])]),t._v(" "),n("LargeButton",{attrs:{text:"Previous Results"}})],1)])}),[],!1,null,"3a2b3043",null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var l={name:"HowToPlay",components:{ContainerComponent:n(288).default}},o=n(24),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContainerComponent",[n("div",{staticClass:"m-auto lg:flex"},[n("div",{staticClass:"xs:w-full lg:w-8/12 text-center"},[n("div",{staticClass:"h-full grid grid-cols-1 lg:px-5 xl:px-3"},[n("div",{staticClass:"self-start"},[n("h2",{staticClass:"text-center"},[t._v("How To Play")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam dicta exercitationem, fuga minus neque nesciunt pariatur porro possimus quae quos ratione recusandae sapiente velit!")])]),t._v(" "),n("div",{staticClass:"self-center xs:mt-5"},[n("div",{staticClass:"m-auto xs:inline md:flex "},[n("div",{staticClass:"xs:w-full md:w-4/12"},[n("span",{staticClass:"text-green-900 text-6xl font-extrabold"},[t._v("1")]),t._v(" "),n("p",[t._v("Pick number from 1 to 90")])]),t._v(" "),n("div",{staticClass:"xs:w-full md:w-4/12"},[n("span",{staticClass:"text-green-900 text-6xl font-extrabold"},[t._v("2")]),t._v(" "),n("p",[t._v("Enter 6 numbers")])]),t._v(" "),n("div",{staticClass:"xs:w-full md:w-4/12"},[n("span",{staticClass:"text-green-900 text-6xl font-extrabold"},[t._v("3")]),t._v(" "),n("p",[t._v("Click XXX button")])])])]),t._v(" "),n("div",{staticClass:"self-end xs:mt-5"},[n("h5",{staticClass:"font-bold"},[t._v("More information can be found on our "),n("span",{staticClass:"underline cursor-pointer text-red-600 hover:text-red-500"},[t._v("How to Play page")]),t._v(".")])])])]),t._v(" "),n("div",{staticClass:"xs:w-full lg:w-4/12 xs:mt-5 lg:mt-0 h-full"},[n("img",{staticClass:"m-auto h-full",attrs:{src:"https://source.unsplash.com/user/c_v_r/500x500",alt:"How To Play SuperEnalotto Online"}})])])])}),[],!1,null,"4b578918",null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var l={name:"WhenAreTheDraws",components:{ContainerComponent:n(288).default},data:function(){return{winners:[{image:"winner1.jpg",jackpot:"€209.1 million",date:"13th August 2019",name:"Lodi",type:"Single Winner",text:"On 13th August 2019, the SuperEnalotto was won after more than 100 weeks without a jackpot winner. It is to date the highest winning jackpot seen so far. The ticket was purchased in a bar in Lodi, an Italian province located close to Milan. The region is the 8th luckiest in this particular game in wins overall.\n",numbers:[7,32,41,59,75,76,21]},{image:"winner2.jpg",jackpot:"€177.7 million",date:"30th October 2010",name:"Milan",type:"Syndicate",text:"30th October saw a Syndicate of 70 players win a total of €177.7 million. The winners were from 38 different boroughs. To date Milan is the luckiest area for those that play in a Syndicate. October is the month that sees the most jackpots of large value, with three of the biggest 10 jackpots in history being drawn in October. \n",numbers:[4,26,40,54,55,67,41]},{image:"winner3.jpg",jackpot:"€163.5 million",date:"27th October 2016",name:"Vibo Valentia",type:"Single Winner",text:"The third biggest jackpot was drawn on the 27th of October 2016 to a single winner. This comes after the game ran from July 2015 until October 2016 without a jackpot winner. The ticket was purchased at a Tobacco shop on Via Dante Alighieri in the city of Vibo Valentia. \n",numbers:[3,12,23,71,76,83,56]}]}},methods:{getImgUrl:function(t){return n(300)("./"+t)}}},o=n(24),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContainerComponent",[n("div",{staticClass:"m-auto text-center"},[n("h2",[t._v("When Are The Draws")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("SuperEnalotto draws take place three times a week, on "),n("strong",[t._v("Tuesdays, Thursdays and Saturdays")]),t._v(".\n      You can buy tickets to this game "),n("strong",[t._v("up to 45 minutes")]),t._v(" before the draw closes.")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("The SuperEnalotto is currently making history, with the biggest jackpot of all time still growing. The past top three biggest winners were located in Lodi, Milan and Vibo Valentia.")]),t._v(" "),n("div",{staticClass:"xl:flex"},t._l(t.winners,(function(e,l){return n("div",{key:l,staticClass:"xs:w-full sm:w-10/12 md:w-7/12 lg:w-7/12 rounded overflow-hidden shadow-lg mt-5 xs:mx-0 sm:m-auto sm:mt-5 xl:mx-2"},[n("img",{staticClass:"w-full",staticStyle:{height:"200px"},attrs:{src:t.getImgUrl(e.image),alt:"SuperEnalotto Winner Biggest Jackpot"}}),t._v(" "),n("div",{staticClass:"px-6 py-4"},[n("h4",{staticClass:"mb-2"},[t._v(t._s(e.jackpot))]),t._v(" "),n("p",{staticClass:"text-sm text-gray-600"},[t._v(t._s(e.date))]),t._v(" "),n("p",{staticClass:"mt-3 text-gray-700 text-base lg:h-50 xl:h-52 2xl:h-50 3xl:h-44 4xl:h-36"},[t._v(t._s(e.text))])]),t._v(" "),n("div",{staticClass:"px-6 pt-4 pb-8"},[n("h5",{staticClass:"mb-3 font-bold"},[t._v("Winning Numbers ")]),t._v(" "),t._l(e.numbers,(function(e,l){return n("div",{key:l,staticClass:"inline-flex font-bold text-white rounded-full  flex items-center justify-center font-mono mx-0.5",class:6===l?"bg-red-600":"bg-green-700",staticStyle:{height:"31px",width:"31px","font-size":"19px"}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2)])})),0)])])}),[],!1,null,"05e0cda0",null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var l=n(288),o=n(299),r={name:"OddsAndOtherPrizes",components:{LargeButton:n(291).default,TableDaisyUI:o.default,ContainerComponent:l.default},data:function(){return{tableData:{headers:["Odds of Winning"],rows:[{column1:"Match 6",column2:"1:622,614,630"},{column1:"Match 5 + Jolly",column2:"1:103,769,105"},{column1:"Match 5",column2:"1:1,250,230"},{column1:"Match 4",column2:"1:11,907"},{column1:"Match 3",column2:"1:327"},{column1:"Match 2",column2:"1:22"}],footer:["Overall odds of winning a prize: 1 in 20*"]}}}},c=n(24),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContainerComponent",{staticClass:"bg-gray-50"},[n("div",{staticClass:"m-auto text-center"},[n("h2",[t._v("Odds and Other Prizes")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia quasi reiciendis unde veritatis voluptates.")]),t._v(" "),n("TableDaisyUI",{staticClass:"mt-10",attrs:{"table-data":t.tableData}}),t._v(" "),n("LargeButton",{attrs:{text:"Odds and Prizes"}}),t._v(" "),n("p",{staticClass:"mt-10"},[t._v("The overall odds of winning a prize in the Superenalotto game are 1 in 20. The odds of winning the jackpot\n      prize pool are 1:622,614,630. Further odds breakdown can be found in Odds and Prizes.")])],1)])}),[],!1,null,"85155d26",null);e.default=component.exports},312:function(t,e,n){"use strict";n.r(e);var l=n(304),o={name:"HeroSection",components:{ICountUp:n.n(l).a},props:["jackpot"],data:function(){return{delay:500,endVal:this.jackpot,options:{useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:"€"}}},methods:{onReady:function(t,e){t.update(this.endVal)}}},r=(n(306),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-50"},[n("div",{staticClass:"xs:w-1/12 md:w-2/12 lg:w-3/12"}),t._v(" "),n("div",{staticClass:"xs:w-10/12 md:w-8/12 lg:w-6/12 center-middle-content text-center m-auto"},[n("h1",{staticClass:"xs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-green-900 font-extrabold"},[t._v("SuperEnalotto")]),t._v(" "),n("h2",{staticClass:"xs:text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl mt-5 text-7xl text-red-700 font-bold"},[n("ICountUp",{attrs:{delay:t.delay,"end-val":t.endVal,options:t.options},on:{ready:t.onReady}})],1),t._v(" "),n("p",{staticClass:"xs:text-xl sm:text-2xl 2xl:text-3xl mt-5 font-bold text-green-900"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, optio?")]),t._v(" "),n("button",{staticClass:"mt-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",staticStyle:{width:"200px",height:"50px"},attrs:{type:"button"}},[t._v("\n      PLAY NOW\n    ")])]),t._v(" "),n("div",{staticClass:"xs:w-1/12 md:w-2/12 lg:w-3/12"})])}),[],!1,null,"19d1943f",null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);var l=n(9),o=(n(47),n(308)),r=n(309),c=n(310),d=n(311),h={name:"IndexPage",components:{HeroSection:n(312).default,OddsAndOtherPrizes:d.default,WhenAreTheDraws:c.default,HowToPlay:r.default,LatestResults:o.default},middleware:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("getLottery");case 3:return e.next=5,n.dispatch("getLatestResults");case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{lottery:[],latestResults:[]}},created:function(){this.lottery=this.$store.state.lottery,this.latestResults=this.$store.state.latestResults}},m=n(24),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeroSection",{attrs:{jackpot:t.lottery.jackpot_raw}}),t._v(" "),n("LatestResults",{staticClass:"bg-white"}),t._v(" "),n("HowToPlay",{staticClass:"bg-gray-50"}),t._v(" "),n("WhenAreTheDraws",{staticClass:"bg-white"}),t._v(" "),n("OddsAndOtherPrizes",{staticClass:"bg-gray-50"})],1)}),[],!1,null,null,null);e.default=component.exports}}]);