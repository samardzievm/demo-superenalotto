(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{293:function(t,l,e){var content=e(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(79).default)("ccad3cca",content,!0,{sourceMap:!1})},297:function(t,l,e){"use strict";e(293)},298:function(t,l,e){var n=e(78)((function(i){return i[1]}));n.push([t.i,"",""]),n.locals={},t.exports=n},304:function(t,l,e){"use strict";e.r(l);e(39);var n={name:"TableDaisyUI",props:["tableData"],data:function(){return{numberOfColumns:0,thClass:null,thStyle:null,tdClass:null}},created:function(){this.numberOfColumns=Object.keys(this.tableData.rows[0]).length,this.thClass="xl:text-lg xl:font-extrabold bg-green-700 text-white",2===this.numberOfColumns?this.tdClass="w-6/12":3===this.numberOfColumns?this.tdClass="w-4/12":4===this.numberOfColumns&&(this.tdClass="w-3/12")}},o=(e(297),e(24)),component=Object(o.a)(n,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"overflow-x-auto"},[e("table",{staticClass:"table w-full text-center"},[e("thead",[e("tr",t._l(t.tableData.headers,(function(header){return e("th",{key:header,class:t.thClass,attrs:{colspan:1===t.tableData.headers.length?t.numberOfColumns:""}},[t._v(t._s(header))])})),0)]),t._v(" "),e("tbody",t._l(t.tableData.rows,(function(l,n){return e("tr",{key:n,staticClass:"hover:font-bold"},[e("td",{class:t.tdClass},[t._v(t._s(l.column1))]),t._v(" "),l.column2?e("td",{class:t.tdClass},[t._v(t._s(l.column2))]):t._e(),t._v(" "),l.column3?e("td",{class:t.tdClass},[t._v(t._s(l.column3))]):t._e(),t._v(" "),l.column4?e("td",{class:t.tdClass},[t._v(t._s(l.column4))]):t._e()])})),0),t._v(" "),t.tableData.footer?e("tfoot",[e("tr",t._l(t.tableData.footer,(function(l){return e("th",{key:l,staticClass:"xl:text-lg xl:font-extrabold text-black",style:t.thStyle,attrs:{colspan:1===t.tableData.headers.length?t.numberOfColumns:""}},[t._v(t._s(l))])})),0)]):t._e()])])}),[],!1,null,"661c7714",null);l.default=component.exports}}]);