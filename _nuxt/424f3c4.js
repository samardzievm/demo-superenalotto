(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{289:function(t,e,n){"use strict";n.r(e);var o={name:"ContainerComponent"},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container min-w-full xs:my-8 "},[t._t("default")],2)}),[],!1,null,"e7631204",null);e.default=component.exports},301:function(t,e,n){var map={"./winner1.jpg":302,"./winner2.jpg":303,"./winner3.jpg":304};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=301},302:function(t,e,n){t.exports=n.p+"img/winner1.208a3cc.jpg"},303:function(t,e,n){t.exports=n.p+"img/winner2.e70536f.jpg"},304:function(t,e,n){t.exports=n.p+"img/winner3.28635d4.jpg"},311:function(t,e,n){"use strict";n.r(e);var o={name:"WhenAreTheDraws",components:{ContainerComponent:n(289).default},data:function(){return{winners:[{image:"winner1.jpg",jackpot:"€209.1 million",date:"13th August 2019",name:"Lodi",type:"Single Winner",text:"On 13th August 2019, the SuperEnalotto was won after more than 100 weeks without a jackpot winner. It is to date the highest winning jackpot seen so far. The ticket was purchased in a bar in Lodi, an Italian province located close to Milan. The region is the 8th luckiest in this particular game in wins overall.\n",numbers:[7,32,41,59,75,76,21]},{image:"winner2.jpg",jackpot:"€177.7 million",date:"30th October 2010",name:"Milan",type:"Syndicate",text:"30th October saw a Syndicate of 70 players win a total of €177.7 million. The winners were from 38 different boroughs. To date Milan is the luckiest area for those that play in a Syndicate. October is the month that sees the most jackpots of large value, with three of the biggest 10 jackpots in history being drawn in October. \n",numbers:[4,26,40,54,55,67,41]},{image:"winner3.jpg",jackpot:"€163.5 million",date:"27th October 2016",name:"Vibo Valentia",type:"Single Winner",text:"The third biggest jackpot was drawn on the 27th of October 2016 to a single winner. This comes after the game ran from July 2015 until October 2016 without a jackpot winner. The ticket was purchased at a Tobacco shop on Via Dante Alighieri in the city of Vibo Valentia. \n",numbers:[3,12,23,71,76,83,56]}]}},methods:{getImgUrl:function(t){return n(301)("./"+t)}}},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContainerComponent",{staticClass:"xs:my-12 lg:my-24"},[n("div",{staticClass:"m-auto text-center xl:w-10/12 2xl:w-8/12"},[n("h2",[t._v("When Are The Draws")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("SuperEnalotto draws take place three times a week, on Tuesdays, Thursdays and Saturdays. You can buy tickets to this game up to 45 minutes before the draw closes.")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("The SuperEnalotto is currently making history, with the biggest jackpot of all time still growing. The past top three biggest winners were located in Lodi, Milan and Vibo Valentia.")]),t._v(" "),n("div",{staticClass:"lg:flex"},t._l(t.winners,(function(e,o){return n("div",{key:o,staticClass:"xs:w-full lg:w-4/12 rounded overflow-hidden shadow-lg mt-5 xs:mx-0 lg:mx-2"},[n("img",{staticClass:"w-full",staticStyle:{height:"200px"},attrs:{src:t.getImgUrl(e.image),alt:"SuperEnalotto Winner Biggest Jackpot"}}),t._v(" "),n("div",{staticClass:"px-6 py-4"},[n("h4",{staticClass:"mb-2"},[t._v(t._s(e.jackpot))]),t._v(" "),n("p",{staticClass:"text-sm text-gray-600"},[t._v(t._s(e.date))]),t._v(" "),n("p",{staticClass:"mt-3 text-gray-700 text-base lg:h-50 xl:h-52 2xl:h-44"},[t._v(t._s(e.text))])]),t._v(" "),n("div",{staticClass:"px-6 pt-4 pb-4"},[n("h5",{staticClass:"mb-3 font-bold"},[t._v("Winning Numbers ")]),t._v(" "),t._l(e.numbers,(function(e,o){return n("div",{key:o,staticClass:"inline-flex font-bold text-white rounded-full  flex items-center justify-center font-mono mx-0.5",class:6===o?"bg-red-600":"bg-green-700",staticStyle:{height:"35px",width:"35px","font-size":"20px"}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2)])})),0)])])}),[],!1,null,"6ec69e58",null);e.default=component.exports}}]);