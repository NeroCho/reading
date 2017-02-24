/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [{
		path: '/index',
		component: require('../views/index'),
		children: [{
			path: 'main',
			component: require('../views/main')
		}, {
			path: 'movies',
			component: require('../views/movies')
		}, {
			path: 'books',
			component: require('../views/books')
		}]
	}, {
		path: '*',
		redirect: '/index/main'
	}],
	// 让每个页面都滚动到顶部，改变模式为mode: history
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	}
})

export default router