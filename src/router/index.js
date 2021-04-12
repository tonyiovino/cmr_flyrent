import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Anagrafica from '../views/sub-path/Anagrafica.vue'
import Preventivi from '../views/sub-path/Preventivi.vue'
import Scoring from '../views/sub-path/Scoring.vue'
import Ordini from '../views/sub-path/Ordini.vue'
import Contratti from '../views/sub-path/Contratti.vue'
import Modulistica from '../views/sub-path/Modulistica.vue'
import Comunicazioni from '../views/sub-path/Comunicazioni.vue'
import Note from '../views/sub-path/Note.vue'
import Automobili from '../views/sub-path/Automobili.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/anagrafica',
		name: 'Gestione Anagrafica',
		component: Anagrafica
	},
	{
		path: '/preventivi',
		name: 'Preventivi',
		component: Preventivi
	},
	{
		path: '/scoring',
		name: 'Scoring',
		component: Scoring
	},
	{
		path: '/ordini',
		name: 'Ordini In Corso',
		component: Ordini
	},
	{
		path: '/contratti',
		name: 'Gestione Contratti',
		component: Contratti
	},
	{
		path: '/modulistica',
		name: 'Modulistica',
		component: Modulistica
	},
	{
		path: '/comunicazioni',
		name: 'Comunicazioni',
		component: Comunicazioni
	},
	{
		path: '/note',
		name: 'Note',
		component: Note
	},
	{
		path: '/vehicles',
		name: 'Automobili',
		component: Automobili
	},
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
