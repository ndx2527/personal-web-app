(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-map-stand-last"],{"45c8":function(a,t,e){"use strict";e.r(t);var n=e("5697"),i=e.n(n);for(var r in n)"default"!==r&&function(a){e.d(t,a,(function(){return n[a]}))}(r);t["default"]=i.a},"4be8":function(a,t,e){"use strict";e.r(t);var n=e("a608"),i=e("45c8");for(var r in i)"default"!==r&&function(a){e.d(t,a,(function(){return i[a]}))}(r);e("ead9");var o,d=e("f0c5"),s=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"2227f216",null,!1,n["a"],o);t["default"]=s.exports},5697:function(a,t,e){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{question:{analytic:"",answer:"",answerA:"",answerB:"",answerC:"",answerD:"",title:""},state:!1,choose:"",parsing:!1}},onLoad:function(){this.getTiandata()},methods:{getTiandata:function(){var t=this;this.$u.get("http://api.tianapi.com/baiketiku/index",{key:"c498f8d96e8d9ad2368513957311caf3"}).then((function(e){t.question=e.newslist[0],a.log(e),a.log(t.question)}))},nextQuestion:function(){this.state=!1,this.choose="",this.parsing=!1,this.getTiandata()},chooseAnswer:function(a){this.state||(this.state=!0,this.choose=a)},lookParsing:function(){this.state&&(this.parsing=!0)}}};t.default=e}).call(this,e("5a52")["default"])},a608:function(a,t,e){"use strict";var n;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return n}));var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"content"},[a._v("一站到底")])},r=[]},bbf2:function(a,t,e){var n=e("bf0c");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=e("4f06").default;i("3d1ce216",n,!0,{sourceMap:!1,shadowMode:!1})},bf0c:function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */*[data-v-2227f216]{box-sizing:border-box;padding:0;margin:0}uni-page-body[data-v-2227f216]{height:100vh;width:100vw;background-color:#faf7f8;padding-top:%?30?%}uni-page-body .header[data-v-2227f216]{height:%?200?%;width:100%;background-color:#fff;padding:%?30?%;color:#c3504c;line-height:1.5}uni-page-body .header .header-title[data-v-2227f216]{font-size:%?36?%;font-weight:600;margin-bottom:%?10?%}uni-page-body .card[data-v-2227f216]{margin:%?30?% auto;width:%?700?%;background:#fff;box-shadow:0 2px 12px 0 rgba(0,0,0,.06);border-radius:4px;border:1px solid #e4e7ed;display:flex;flex-direction:column}uni-page-body .card .card-title[data-v-2227f216]{text-align:center;height:%?80?%;line-height:%?80?%;font-size:%?40?%}uni-page-body .card .card-line[data-v-2227f216]{width:100%;height:%?2?%;background:#e4e7ed}uni-page-body .card .card-answer[data-v-2227f216]{display:flex;flex-direction:column;padding:%?20?%}uni-page-body .card .card-answer .card-answerLi[data-v-2227f216]{display:flex;align-items:center;padding:%?15?% %?10?%;margin:3px 0;box-sizing:border-box;border:solid #fff 1px}uni-page-body .card .card-answer .card-answerLi .card-answerNum[data-v-2227f216]{background-color:#9e989a;border-radius:50%;height:%?60?%;width:%?60?%;line-height:%?60?%;text-align:center;margin-right:%?20?%;color:#fff}uni-page-body .card .card-answer .card-answerLi .card-text[data-v-2227f216]{color:#606266;width:%?540?%}uni-page-body .bottom-button[data-v-2227f216]{display:flex;position:fixed;bottom:%?35?%;left:%?50?%;right:%?50?%;justify-content:space-around}uni-page-body .analysis[data-v-2227f216]{padding:%?0?% %?40?%;padding-bottom:%?200?%;color:#606266;font-size:%?32?%;line-height:1.8}uni-page-body .error[data-v-2227f216]{border:solid red 1px!important;background-color:rgba(255,0,0,.1);border-radius:4px;box-sizing:border-box}uni-page-body .correct[data-v-2227f216]{background-color:rgba(34,193,31,.1);border:solid #22c11f 1px!important;border-radius:4px;box-sizing:border-box}body.?%PAGE?%[data-v-2227f216]{background-color:#faf7f8}',""]),a.exports=t},ead9:function(a,t,e){"use strict";var n=e("bbf2"),i=e.n(n);i.a}}]);