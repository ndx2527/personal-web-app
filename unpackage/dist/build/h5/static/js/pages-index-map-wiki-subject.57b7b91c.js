(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-map-wiki-subject"],{"0373":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */*[data-v-7ea92cef]{box-sizing:border-box;padding:0;margin:0}uni-page-body[data-v-7ea92cef]{height:100vh;width:100vw;background-color:#faf7f8;padding-top:%?30?%}uni-page-body .header[data-v-7ea92cef]{height:%?200?%;width:100%;background-color:#fff;padding:%?30?%;color:#c3504c;line-height:1.5}uni-page-body .header .header-title[data-v-7ea92cef]{font-size:%?36?%;font-weight:600;margin-bottom:%?10?%}uni-page-body .card[data-v-7ea92cef]{margin:%?30?% auto;width:%?700?%;background:#fff;box-shadow:0 2px 12px 0 rgba(0,0,0,.06);border-radius:4px;border:1px solid #e4e7ed;display:flex;flex-direction:column}uni-page-body .card .card-title[data-v-7ea92cef]{text-align:center;height:%?80?%;line-height:%?80?%;font-size:%?40?%}uni-page-body .card .card-line[data-v-7ea92cef]{width:100%;height:%?2?%;background:#e4e7ed}uni-page-body .card .card-answer[data-v-7ea92cef]{display:flex;flex-direction:column;padding:%?20?%}uni-page-body .card .card-answer .card-answerLi[data-v-7ea92cef]{display:flex;align-items:center;padding:%?15?% %?10?%;margin:3px 0;box-sizing:border-box;border:solid #fff 1px}uni-page-body .card .card-answer .card-answerLi .card-answerNum[data-v-7ea92cef]{background-color:#9e989a;border-radius:50%;height:%?60?%;width:%?60?%;line-height:%?60?%;text-align:center;margin-right:%?20?%;color:#fff}uni-page-body .card .card-answer .card-answerLi .card-text[data-v-7ea92cef]{color:#606266;width:%?540?%}uni-page-body .bottom-button[data-v-7ea92cef]{display:flex;position:fixed;bottom:%?35?%;left:%?50?%;right:%?50?%;justify-content:space-around}uni-page-body .analysis[data-v-7ea92cef]{padding:%?0?% %?40?%;padding-bottom:%?200?%;color:#606266;font-size:%?32?%;line-height:1.8}uni-page-body .error[data-v-7ea92cef]{border:solid red 1px!important;background-color:rgba(255,0,0,.1);border-radius:4px;box-sizing:border-box}uni-page-body .correct[data-v-7ea92cef]{background-color:rgba(34,193,31,.1);border:solid #22c11f 1px!important;border-radius:4px;box-sizing:border-box}body.?%PAGE?%[data-v-7ea92cef]{background-color:#faf7f8}',""]),e.exports=t},"07f7":function(e,t,a){"use strict";a.r(t);var r=a("c22e"),n=a.n(r);for(var o in r)"default"!==o&&function(e){a.d(t,e,(function(){return r[e]}))}(o);t["default"]=n.a},"19c3":function(e,t,a){var r=a("0373");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("4f06").default;n("50e0c4d7",r,!0,{sourceMap:!1,shadowMode:!1})},"2c73":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{question:{analytic:"",answer:"",answerA:"",answerB:"",answerC:"",answerD:"",title:""},state:!1,choose:"",parsing:!1}},onLoad:function(){this.getTiandata()},methods:{getTiandata:function(){var t=this;this.$u.get("http://api.tianapi.com/baiketiku/index",{key:"c498f8d96e8d9ad2368513957311caf3"}).then((function(a){t.question=a.newslist[0],e.log(a),e.log(t.question)}))},nextQuestion:function(){this.state=!1,this.choose="",this.parsing=!1,this.getTiandata()},chooseAnswer:function(e){this.state||(this.state=!0,this.choose=e)},lookParsing:function(){this.state&&(this.parsing=!0)}}};t.default=a}).call(this,a("5a52")["default"])},"48ec":function(e,t,a){var r=a("cefd");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("4f06").default;n("09901dff",r,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return r}));var r={uButton:a("59ec").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"header-title"},[e._v("题目:")]),a("v-uni-view",{staticClass:"header-text"},[e._v(e._s(e.question.title))])],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"card-title"},[e._v("选择答案")]),a("v-uni-view",{staticClass:"card-line"}),a("v-uni-view",{staticClass:"card-answer"},[a("v-uni-view",{staticClass:"card-answerLi",class:{error:"A"==e.choose,correct:"A"==e.question.answer&&e.state},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseAnswer("A")}}},[a("v-uni-view",{staticClass:"card-answerNum"},[e._v("A")]),a("v-uni-view",{staticClass:"card-text"},[e._v(e._s(e.question.answerA))])],1),a("v-uni-view",{staticClass:"card-answerLi",class:{error:"B"==e.choose,correct:"B"==e.question.answer&&e.state},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseAnswer("B")}}},[a("v-uni-view",{staticClass:"card-answerNum"},[e._v("B")]),a("v-uni-view",{staticClass:"card-text"},[e._v(e._s(e.question.answerB))])],1),a("v-uni-view",{staticClass:"card-answerLi",class:{error:"C"==e.choose,correct:"C"==e.question.answer&&e.state},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseAnswer("C")}}},[a("v-uni-view",{staticClass:"card-answerNum"},[e._v("C")]),a("v-uni-view",{staticClass:"card-text"},[e._v(e._s(e.question.answerC))])],1),a("v-uni-view",{staticClass:"card-answerLi",class:{error:"D"==e.choose,correct:"D"==e.question.answer&&e.state},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseAnswer("D")}}},[a("v-uni-view",{staticClass:"card-answerNum"},[e._v("D")]),a("v-uni-view",{staticClass:"card-text"},[e._v(e._s(e.question.answerD))])],1)],1)],1),e.parsing?a("v-uni-view",{staticClass:"analysis"},[a("v-uni-text",[e._v("答案："+e._s(e.question.answer))]),a("br"),a("v-uni-text",[e._v("解析："+e._s(e.question.analytic?e.question.analytic:"无"))])],1):e._e(),a("v-uni-view",{staticClass:"bottom-button"},[a("u-button",{attrs:{type:"primary",plain:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lookParsing.apply(void 0,arguments)}}},[e._v("查看解析")]),a("u-button",{attrs:{type:"error",plain:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.nextQuestion.apply(void 0,arguments)}}},[e._v("下一题")])],1)],1)},o=[]},"57b6":function(e,t,a){"use strict";var r=a("19c3"),n=a.n(r);n.a},"59ec":function(e,t,a){"use strict";a.r(t);var r=a("a622"),n=a("07f7");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("66b4");var i,c=a("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"5c660135",null,!1,r["a"],i);t["default"]=s.exports},"66b4":function(e,t,a){"use strict";var r=a("48ec"),n=a.n(r);n.a},"6e93":function(e,t,a){"use strict";a.r(t);var r=a("2c73"),n=a.n(r);for(var o in r)"default"!==o&&function(e){a.d(t,e,(function(){return r[e]}))}(o);t["default"]=n.a},a622:function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+e.size,e.plain?"u-btn--"+e.type+"--plain":"",e.loading?"u-loading":"","circle"==e.shape?"u-round-circle":"",e.hairLine?e.showHairLineBorder:"u-btn--bold-border","u-btn--"+e.type,e.disabled?"u-btn--"+e.type+"--disabled":""],style:[e.customStyle,{overflow:e.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),disabled:e.disabled,"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":"sendMessagePath",lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"hover-class":e.getHoverClass,loading:e.loading},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.launchapp.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.click(t)}}},[e._t("default"),e.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[e.waveActive?"u-wave-active":""],style:{top:e.rippleTop+"px",left:e.rippleLeft+"px",width:e.fields.targetWidth+"px",height:e.fields.targetWidth+"px","background-color":e.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):e._e()],2)},o=[]},c22e:function(e,t,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var e="";return e=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",e},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(e){var t=this;this.$u.throttle((function(){!0!==t.loading&&!0!==t.disabled&&(t.ripple&&(t.waveActive=!1,t.$nextTick((function(){this.getWaveQuery(e)}))),t.$emit("click",e))}),this.throttleTime)},getWaveQuery:function(e){var t=this;this.getElQuery().then((function(a){var r=a[0];if(r.width&&r.width&&(r.targetWidth=r.height>r.width?r.height:r.width,r.targetWidth)){t.fields=r;var n="",o="";n=e.touches[0].clientX,o=e.touches[0].clientY,t.rippleTop=o-r.top-r.targetWidth/2,t.rippleLeft=n-r.left-r.targetWidth/2,t.$nextTick((function(){t.waveActive=!0}))}}))},getElQuery:function(){var e=this;return new Promise((function(t){var a="";a=uni.createSelectorQuery().in(e),a.select(".u-btn").boundingClientRect(),a.exec((function(e){t(e)}))}))},getphonenumber:function(e){this.$emit("getphonenumber",e)},getuserinfo:function(e){this.$emit("getuserinfo",e)},error:function(e){this.$emit("error",e)},opensetting:function(e){this.$emit("opensetting",e)},launchapp:function(e){this.$emit("launchapp",e)}}};t.default=r},c5ac:function(e,t,a){"use strict";a.r(t);var r=a("56d7"),n=a("6e93");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("57b6");var i,c=a("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"7ea92cef",null,!1,r["a"],i);t["default"]=s.exports},cefd:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */*[data-v-5c660135]{box-sizing:border-box;padding:0;margin:0}.u-btn[data-v-5c660135]::after{border:none}.u-btn[data-v-5c660135]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-5c660135]{border:1px solid #fff}.u-btn--default[data-v-5c660135]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-5c660135]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-5c660135]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-5c660135]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-5c660135]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-5c660135]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-5c660135]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-5c660135]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-5c660135]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-5c660135]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-5c660135]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-5c660135]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-5c660135]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-5c660135]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-5c660135]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-5c660135]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-5c660135]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-5c660135]{border-radius:%?100?%}.u-round-circle[data-v-5c660135]::after{border-radius:%?100?%}.u-loading[data-v-5c660135]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-5c660135]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-5c660135]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-5c660135]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-5c660135]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-5c660135]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-5c660135]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-5c660135]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-5c660135]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-5c660135]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-5c660135]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-5c660135]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-5c660135]{background:#18b566!important;color:#fff}.u-info-hover[data-v-5c660135]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-5c660135]{background:#f29100!important;color:#fff}.u-error-hover[data-v-5c660135]{background:#dd6161!important;color:#fff}',""]),e.exports=t}}]);