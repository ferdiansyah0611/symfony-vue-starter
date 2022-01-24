import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home'
import About from './About'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	},
]

const router = new VueRouter({
  routes
})

export default router