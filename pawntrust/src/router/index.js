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
		path: '/searchdetails',
		name: 'Search',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/SearchDetails.vue'),
		params : true,
		props : true
	},
	{
		path: '/aboutus',
		name: 'AboutUs',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/AboutUs.vue'),
		params : true,
		props : true
	},
	{
		path: '/investorrelations',
		name: 'InvestorRelations',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/InvestorRelations.vue'),
		params : true,
		props : true
	},
	{
		path: '/contactus',
		name: 'ContactUs',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/ContactUs.vue'),
		params : true,
		props : true
	},
	{
		path: '/search',
		name: 'SearchDetails',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/Search.vue'),
		params : true,
		props : true
	},
	{
		path: '/pawnit',
		name: 'PawnIt',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/PawnIt.vue'),
		params : true,
		props : true
	},
	{
		path: '/sellit',
		name: 'SellIt',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/SellIt.vue'),
		params : true,
		props : true
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/Login.vue'),
		params : true,
		props : true
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/SignUp.vue'),
		params : true,
		props : true
	},
];

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router