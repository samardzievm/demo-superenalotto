(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4],{285:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("53e97a73",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var l={name:"ContainerComponent"},r=n(20),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container min-w-full xs:my-8 "},[t._t("default")],2)}),[],!1,null,"e7631204",null);e.default=component.exports},287:function(t,e,n){"use strict";n(285)},288:function(t,e,n){var l=n(76)((function(i){return i[1]}));l.push([t.i,".ball[data-v-a80b69e8]{display:block;width:150px;height:150px;border-radius:50%;color:#000;font-weight:800;font-size:24px}.ball-middle-align[data-v-a80b69e8]{position:relative;text-align:center}.ball-center-text[data-v-a80b69e8]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.main[data-v-a80b69e8]{background-color:#ff0;box-shadow:inset -25px -15px 40px rgba(89,88,88,.3);background-image:linear-gradient(-45deg,rgba(211,211,75,.3),transparent)}.extra[data-v-a80b69e8]{background-color:#f51b1b;box-shadow:inset -25px -15px 40px rgba(0,0,0,.3);background-image:linear-gradient(-45deg,rgba(255,255,220,.3),transparent)}@media (min-width:220px){.ball[data-v-a80b69e8]{font-size:18px;width:35px;height:35px;margin:0 3px}}@media (min-width:360px){.ball[data-v-a80b69e8]{font-size:20px;width:40px;height:40px;font-weight:800}}@media (min-width:440px){.ball[data-v-a80b69e8]{font-size:22px;width:45px;height:45px}}@media (min-width:600px){.ball[data-v-a80b69e8]{font-size:24px;width:55px;height:55px}}@media (min-width:767px){.ball[data-v-a80b69e8]{margin:0 5px;font-size:24px;width:70px;height:70px}}",""]),l.locals={},t.exports=l},290:function(t,e,n){"use strict";n.r(e);var l={name:"LottoBall",props:["type","color"]},r=(n(287),n(20)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"main"===t.type?n("div",{staticClass:"ball ball-middle-align",class:t.type,style:"color: "+t.color+";"},[n("span",{staticClass:"ball-center-text"},[t._t("default")],2)]):n("div",{staticClass:"ball ball-middle-align",class:t.type},[n("span",{staticClass:"ball-center-text",style:"color: "+t.color+";"},[t._t("default")],2)])}),[],!1,null,"a80b69e8",null);e.default=component.exports},291:function(t,e,n){"use strict";n.r(e);var l={name:"CardSmall",props:["title","text","image"]},r=n(20),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:w-8/12 lg:w-3/12 m-auto mt-10 rounded overflow-hidden shadow-lg text-center"},[t.image?n("img",{staticClass:"w-full",attrs:{src:"assets/images/"+t.image,alt:t.title}}):t._e(),t._v(" "),n("div",{staticClass:"px-6 py-4"},[n("div",{staticClass:"xs:text-xl lg:text-2xl text-green-900 font-bold"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"text-red-600 xs:text-2xl lg:text-3xl font-extrabold"},[t._v(t._s(t.text))])])])}),[],!1,null,"0b2caf28",null);e.default=component.exports},296:function(t,e,n){"use strict";n.r(e);var l=n(286),r=n(290),o={name:"LatestResults",components:{CardSmall:n(291).default,LottoBall:r.default,ContainerComponent:l.default},data:function(){return{numbers:{jolly:69,main:[4,30,42,46,58,89],superstar:10},winningTickets:{headers:[{title:"Number of Winners",value:"number_of_winners"},{title:"Winning Prize",value:"prize"},{title:"Match",value:"match"}],rows:[{match:"Instant Win",number_of_winners:3176,prize:"€ 25"},{match:"2 Main Numbers",number_of_winners:437829,prize:"€ 5.82"},{match:"3 Main Numbers",number_of_winners:24693,prize:"€ 33.29"},{match:"4 Main Numbers",number_of_winners:581,prize:"€ 470.36"},{match:"5 Main Numbers",number_of_winners:3,prize:"€ 89335.4"},{match:"5 Main Numbers + Jolly",number_of_winners:0,prize:"€ 0"},{match:"6 Main Numbers",number_of_winners:1,prize:"€ 2306997.28"}]}}},methods:{getBoldTextRowClass:function(t,e){return t>3&&e>0?"text-red-600 xs:text-lg md:text-xl xl:text-2xl font-bold hover:font-extrabold":""},getEvenRowBackgroundColorClass:function(t){return t%2==0?"border-b-2 border-dashed":"border-b-4"}}},c=n(20),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContainerComponent",[n("h2",{staticClass:"xs:text-3xl lg:text-5xl text-green-900 text-center font-extrabold"},[t._v("Latest Results")]),t._v(" "),n("p",{staticClass:"mt-5 mb-10 text-center"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dolor explicabo natus ratione totam!")]),t._v(" "),n("div",{staticClass:"m-auto mt-5 text-center text-white bg-green-700 rounded-3xl lg:w-8/12 xl:w-7/12 2xl:w-6/12 lg:p-5"},[n("h3",{staticClass:"text-2xl font-bold xs:pt-5 lg:pt-0"},[t._v("Latest Draw Numbers")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("Check the latest results against your ticket to find out if you’re a winner!")]),t._v(" "),n("div",{staticClass:"m-auto xs:flex xl:inline-flex justify-center xs:pb-8 lg:mt-5 py-5"},[t._l(t.numbers.main,(function(e,l){return n("LottoBall",{key:l,attrs:{type:"main"}},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),n("LottoBall",{attrs:{type:"extra",color:"white"}},[t._v(t._s(t.numbers.jolly))])],2)]),t._v(" "),n("div",{staticClass:"m-auto mt-10 lg:w-8/12"},[n("CardSmall",{attrs:{title:"Latest Jackpot",text:"€229M+"}}),t._v(" "),n("table",{staticClass:"mt-5 m-auto w-full lg:text-lg xl:text-xl text-center text-black "},[n("thead",[n("tr",{staticClass:"border-b-green-800 border-b-4 h-16"},t._l(t.winningTickets.headers,(function(header,e){return n("th",{key:e,staticClass:"w-4/12 text-green-900 font-extrabold"},[t._v(t._s(header.title))])})),0)]),t._v(" "),n("tbody",t._l(t.winningTickets.rows,(function(e,l){return n("tr",{key:l,staticClass:"hover:font-bold border-b-green-800 h-16",class:[t.getBoldTextRowClass(l,e.number_of_winners),t.getEvenRowBackgroundColorClass(l)]},[n("td",[t._v(t._s(e.number_of_winners))]),t._v(" "),n("td",[t._v(t._s(e.prize))]),t._v(" "),n("td",[t._v(t._s(e.match))])])})),0)])],1)])}),[],!1,null,"5fe4e954",null);e.default=component.exports}}]);