import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/Home.vue'),
	},
	{
		path: '/search',
		name: 'Search',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/SearchDetails.vue'),
		params : true,
		props : true
	},
];

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router