(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-map-Sociology-news"],{"649a":function(t,n,a){"use strict";a.r(n);var e=a("c681"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},"6b7c":function(t,n,a){"use strict";a.r(n);var e=a("73bf"),o=a("649a");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("cb8b");var u,c=a("f0c5"),s=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"3a8c3210",null,!1,e["a"],u);n["default"]=s.exports},"73bf":function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var e={NewsCard:a("0196").default,uLoadmore:a("c2e8").default},o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"content"},[a("NewsCard",{attrs:{newsList:t.news}}),a("u-loadmore",{attrs:{status:t.status}})],1)},i=[]},9796:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,".content[data-v-3a8c3210]{padding:%?30?%}",""]),t.exports=n},c681:function(t,n,a){"use strict";(function(t){var e=a("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(a("2909")),i={data:function(){return{news:[],status:"loadmore",page:1}},methods:{getTiandata:function(){var n=this;this.$u.get("http://api.tianapi.com/internet/index",{key:"c498f8d96e8d9ad2368513957311caf3",num:10,page:this.page}).then((function(a){var e;200==a.code&&((e=n.news).push.apply(e,(0,o.default)(a.newslist)),t("log",n.news," at pages/index/map/Sociology-news.vue:28"))}))}},onLoad:function(){this.getTiandata()},onReachBottom:function(){var t=this;this.page++,this.status="loading",setTimeout((function(){t.getTiandata()}),800)}};n.default=i}).call(this,a("0de9")["log"])},cb8b:function(t,n,a){"use strict";var e=a("cf35"),o=a.n(e);o.a},cf35:function(t,n,a){var e=a("9796");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("c218fcec",e,!0,{sourceMap:!1,shadowMode:!1})}}]);