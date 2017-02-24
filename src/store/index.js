import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import api from '../api'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		gankLoading: true,

		daily: {
			hasData: false
			//每日推荐
		}
	},
	getters: {
		gankLoading: state => state.gankLoading,
		daily: state => state.daily
	},
	mutations: {
		toggleGankLoading(state, bl) {
			state.gankLoading = bl
		},
		updateDaily(state, daily) {
			state.daily = daily
		}
	},
	// 异步的数据操作
	actions: {

	}
})
export default store