import Vue from 'vue'
import App from './App'
import Axios from './utils/diyaxios'
import VueLazyload from 'vue-lazyload'
import store from './store'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'assets/theme.less'
Vue.use(MuseUI)
Vue.use(VueLazyload)
Vue.prototype.$http = Axios // 重写$http

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})