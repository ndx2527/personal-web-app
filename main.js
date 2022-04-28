import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

// 公共方法
Vue.mixin({
	methods: {
		//去其他页面
		goOtherPage(path, params = {}, animationType = "pop-in") {
			this.$u.route({
				url: path,
				params,
				animationType
			})
		},
	},
});


const app = new Vue({
	...App
})
app.$mount()
