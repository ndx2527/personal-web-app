(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-map-Sociology-news"],{"649a":function(t,a,n){"use strict";n.r(a);var e=n("c681"),u=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,(function(){return e[t]}))}(i);a["default"]=u.a},"6b7c":function(t,a,n){"use strict";n.r(a);var e=n("73bf"),u=n("649a");for(var i in u)"default"!==i&&function(t){n.d(a,t,(function(){return u[t]}))}(i);n("cb8b");var c,o=n("f0c5"),s=Object(o["a"])(u["default"],e["b"],e["c"],!1,null,"3a8c3210",null,!1,e["a"],c);a["default"]=s.exports},"73bf":function(t,a,n){"use strict";n.d(a,"b",(function(){return u})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return e}));var e={NewsCard:n("0196").default,uLoadmore:n("c2e8").default},u=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"content"},[n("NewsCard",{attrs:{newsList:t.news}}),n("u-loadmore",{attrs:{status:t.status}})],1)},i=[]},9796:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,".content[data-v-3a8c3210]{padding:%?30?%}",""]),t.exports=a},c681:function(t,a,n){"use strict";(function(t){var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=e(n("2909")),i={data:function(){return{news:[],status:"loadmore",page:1}},methods:{getTiandata:function(){var a=this;this.$u.get("http://api.tianapi.com/internet/index",{key:"c498f8d96e8d9ad2368513957311caf3",num:10,page:this.page}).then((function(n){var e;200==n.code&&((e=a.news).push.apply(e,(0,u.default)(n.newslist)),t.log(a.news))}))}},onLoad:function(){this.getTiandata()},onReachBottom:function(){var t=this;this.page++,this.status="loading",setTimeout((function(){t.getTiandata()}),800)}};a.default=i}).call(this,n("5a52")["default"])},cb8b:function(t,a,n){"use strict";var e=n("cf35"),u=n.n(e);u.a},cf35:function(t,a,n){var e=n("9796");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var u=n("4f06").default;u("c218fcec",e,!0,{sourceMap:!1,shadowMode:!1})}}]);