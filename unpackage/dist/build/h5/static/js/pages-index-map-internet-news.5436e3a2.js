(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-map-internet-news"],{"085b":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".content[data-v-392b9a11]{padding:%?30?%}",""]),t.exports=n},2185:function(t,n,e){"use strict";e.r(n);var a=e("c96b"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},"3e7d":function(t,n,e){"use strict";e.r(n);var a=e("b850"),i=e("2185");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("7e68");var s,o=e("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"392b9a11",null,!1,a["a"],s);n["default"]=r.exports},"7e68":function(t,n,e){"use strict";var a=e("a2a5"),i=e.n(a);i.a},a2a5:function(t,n,e){var a=e("085b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("9be6d90a",a,!0,{sourceMap:!1,shadowMode:!1})},b850:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={NewsCard:e("0196").default,uLoadmore:e("c2e8").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("NewsCard",{attrs:{newsList:t.news}}),e("u-loadmore",{attrs:{status:t.status}})],1)},u=[]},c96b:function(t,n,e){"use strict";(function(t){var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("2909")),u={data:function(){return{news:[],status:"loadmore",page:1}},methods:{getTiandata:function(){var n=this;this.$u.get("http://api.tianapi.com/internet/index",{key:"c498f8d96e8d9ad2368513957311caf3",num:10,page:this.page}).then((function(e){var a;200==e.code&&((a=n.news).push.apply(a,(0,i.default)(e.newslist)),t("log",n.news," at pages/index/map/internet-news.vue:28"))}))}},onLoad:function(){this.getTiandata()},onReachBottom:function(){var t=this;this.page++,this.status="loading",setTimeout((function(){t.getTiandata()}),800)}};n.default=u}).call(this,e("0de9")["log"])}}]);