(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-map-IT-news~pages-index-map-NBA-news~pages-index-map-Sociology-news~pages-index-map-inte~490f3149"],{"00aa":function(t,e,i){"use strict";i.r(e);var n=i("47f3"),a=i("f290");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("d996");var o,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"c7c48cc8",null,!1,n["a"],o);e["default"]=d.exports},"0196":function(t,e,i){"use strict";i.r(e);var n=i("7a2e"),a=i("cfc3");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("370c");var o,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"faec5a12",null,!1,n["a"],o);e["default"]=d.exports},"028d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"NewsCard",data:function(){return{}},props:{newsList:{type:Array,default:function(){return[]}}},methods:{timediffer:function(t,e){var i={year:"年前",month:"个月前",day:"天前",hour:"小时前",minute:"分钟前",second:"秒前",just:"刚刚"};if(!e)e=new Date;var n=(e-t)/1e3,a="";return a=n<=0||Math.floor(n/60)<=0?i.just:n<3600?Math.floor(n/60)+"".concat(i.minute):n<86400?Math.floor(n/3600)+"".concat(i.hour):n<2592e3?Math.ceil(n/86400)+"".concat(i.day):Math.floor(n/2073600)+"".concat(i.month),a}}};e.default=n},"0de9":function(t,e,i){"use strict";i.r(e),function(t){function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function r(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}function o(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];t[e].apply(t,n)}function c(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];var c=i.shift();if(a())return i.push(i.pop().replace("at ","uni-app:///")),t[c].apply(t,i);var d=i.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,r)+"---END:JSON---"}catch(a){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),u="";if(d.length>1){var l=d.pop();u=d.join("---COMMA---"),0===l.indexOf(" at ")?u+=l:u+="---COMMA---"+l}else u=d[0];t[c](u)}i.d(e,"log",(function(){return o})),i.d(e,"default",(function(){return c}))}.call(this,i("5a52")["default"])},"20a6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */*[data-v-c7c48cc8]{box-sizing:border-box;padding:0;margin:0}.u-line[data-v-c7c48cc8]{vertical-align:middle}',""]),t.exports=e},"305b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */*[data-v-faec5a12]{box-sizing:border-box;padding:0;margin:0}.card[data-v-faec5a12]{display:flex;margin-bottom:%?5?%;align-items:center;height:127px}.card .card-text[data-v-faec5a12]{display:flex;flex-direction:column;justify-content:space-around;height:100%;width:220px}.card .card-title[data-v-faec5a12]{color:#222;font-size:%?36?%;font-weight:600}.card .card-info[data-v-faec5a12]{color:#999}.card .card-info span[data-v-faec5a12]{padding:0 %?10?%}',""]),t.exports=e},"370c":function(t,e,i){"use strict";var n=i("c840"),a=i.n(n);a.a},4229:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */*[data-v-370dcd06]{box-sizing:border-box;padding:0;margin:0}.u-load-more-wrap[data-v-370dcd06]{display:flex;flex-direction:row;justify-content:center;align-items:center}.u-load-more-inner[data-v-370dcd06]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 %?12?%}.u-more[data-v-370dcd06]{position:relative;display:flex;flex-direction:row;justify-content:center}.u-dot-text[data-v-370dcd06]{font-size:%?28?%}.u-loadmore-icon-wrap[data-v-370dcd06]{margin-right:%?8?%}.u-loadmore-icon[data-v-370dcd06]{display:flex;flex-direction:row;align-items:center;justify-content:center}',""]),t.exports=e},"47f3":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-line",style:[t.lineStyle]})},r=[]},"5ec2":function(t,e,i){"use strict";i.r(e);var n=i("7fd5"),a=i("c903");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("ea18");var o,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1b741bef",null,!1,n["a"],o);e["default"]=d.exports},"5f7d":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-loading",props:{mode:{type:String,default:"circle"},color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle:function(){var t={};return t.width=this.size+"rpx",t.height=this.size+"rpx","circle"==this.mode&&(t.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color?this.color:"#c7c7c7")),t}}};e.default=n},"758c":function(t,e,i){"use strict";var n=i("f814"),a=i.n(n);a.a},"7a2e":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uLine:i("00aa").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.newsList,(function(e,n){return i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"card",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOtherPage("/pages/article/other-url",{url:e.url})}}},[i("v-uni-view",{staticClass:"card-text"},[i("v-uni-view",{staticClass:"card-title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"card-info"},[i("span",[t._v(t._s(e.source))]),i("span",[t._v(t._s(t.timediffer(new Date(e.ctime))))])])],1),i("v-uni-view",{},[i("img",{attrs:{src:e.picUrl,alt:"",width:"120",height:"100"}})])],1),i("u-line",{staticClass:"line",attrs:{color:"#c3c3c3"}})],1)})),1)},r=[]},"7fd5":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-loading",class:"circle"==t.mode?"u-loading-circle":"u-loading-flower",style:[t.cricleStyle]}):t._e()},r=[]},"85d2":function(t,e,i){"use strict";i.r(e);var n=i("9c5a"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"90b3":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uLine:i("00aa").default,uLoading:i("5ec2").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-load-more-wrap",style:{backgroundColor:t.bgColor,marginBottom:t.marginBottom+"rpx",marginTop:t.marginTop+"rpx",height:t.$u.addUnit(t.height)}},[i("u-line",{attrs:{color:"#d4d4d4",length:"50"}}),i("v-uni-view",{staticClass:"u-load-more-inner",class:"loadmore"==t.status||"nomore"==t.status?"u-more":""},[i("v-uni-view",{staticClass:"u-loadmore-icon-wrap"},[i("u-loading",{staticClass:"u-loadmore-icon",attrs:{color:t.iconColor,mode:"circle"==t.iconType?"circle":"flower",show:"loading"==t.status&&t.icon}})],1),i("v-uni-view",{staticClass:"u-line-1",class:["nomore"==t.status&&1==t.isDot?"u-dot-text":"u-more-text"],style:[t.loadTextStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._v(t._s(t.showText))])],1),i("u-line",{attrs:{color:"#d4d4d4",length:"50"}})],1)},r=[]},"90ca":function(t,e,i){var n=i("20a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d110e35e",n,!0,{sourceMap:!1,shadowMode:!1})},"94ac":function(t,e,i){var n=i("a648");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4907fc8a",n,!0,{sourceMap:!1,shadowMode:!1})},"9c5a":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-loadmore",props:{bgColor:{type:String,default:"transparent"},icon:{type:Boolean,default:!0},fontSize:{type:String,default:"28"},color:{type:String,default:"#606266"},status:{type:String,default:"loadmore"},iconType:{type:String,default:"circle"},loadText:{type:Object,default:function(){return{loadmore:"加载更多",loading:"正在加载...",nomore:"没有更多了"}}},isDot:{type:Boolean,default:!1},iconColor:{type:String,default:"#b7b7b7"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},height:{type:[String,Number],default:"auto"}},data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:this.fontSize+"rpx",position:"relative",zIndex:1,backgroundColor:this.bgColor}},cricleStyle:function(){return{borderColor:"#e5e5e5 #e5e5e5 #e5e5e5 ".concat(this.circleColor)}},flowerStyle:function(){return{}},showText:function(){var t="";return t="loadmore"==this.status?this.loadText.loadmore:"loading"==this.status?this.loadText.loading:"nomore"==this.status&&this.isDot?this.dotText:this.loadText.nomore,t}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};e.default=n},a648:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */*[data-v-1b741bef]{box-sizing:border-box;padding:0;margin:0}.u-loading-circle[data-v-1b741bef]{display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:u-circle-data-v-1b741bef 1s linear infinite;animation:u-circle-data-v-1b741bef 1s linear infinite}.u-loading-flower[data-v-1b741bef]{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a 1s steps(12) infinite;animation:u-flower-data-v-1b741bef 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes u-flower-data-v-1b741bef{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-flower-data-v-1b741bef{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes u-circle-data-v-1b741bef{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},c2e8:function(t,e,i){"use strict";i.r(e);var n=i("90b3"),a=i("85d2");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("758c");var o,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"370dcd06",null,!1,n["a"],o);e["default"]=d.exports},c840:function(t,e,i){var n=i("305b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("307e8bae",n,!0,{sourceMap:!1,shadowMode:!1})},c903:function(t,e,i){"use strict";i.r(e);var n=i("5f7d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},cfc3:function(t,e,i){"use strict";i.r(e);var n=i("028d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},d195:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-line",props:{color:{type:String,default:"#e4e7ed"},length:{type:String,default:"100%"},direction:{type:String,default:"row"},hairLine:{type:Boolean,default:!0},margin:{type:String,default:"0"},borderStyle:{type:String,default:"solid"}},computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"==this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.borderStyle,t.width=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.borderStyle,t.height=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,t}}};e.default=n},d996:function(t,e,i){"use strict";var n=i("90ca"),a=i.n(n);a.a},ea18:function(t,e,i){"use strict";var n=i("94ac"),a=i.n(n);a.a},f290:function(t,e,i){"use strict";i.r(e);var n=i("d195"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},f814:function(t,e,i){var n=i("4229");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("09c6f078",n,!0,{sourceMap:!1,shadowMode:!1})}}]);