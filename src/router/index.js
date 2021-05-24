import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Registry from '../views/sub-path/Registry/Registry.vue'
import Preventivi from '../views/sub-path/Preventivi.vue'
import Scoring from '../views/sub-path/Scoring.vue'
import Ordini from '../views/sub-path/Ordini.vue'
import Contratti from '../views/sub-path/Contratti.vue'
import Modulistica from '../views/sub-path/Modulistica.vue'
import Comunicazioni from '../views/sub-path/Comunicazioni.vue'
import Note from '../views/sub-path/Note.vue'
import Vehicles from '../views/sub-path/Vehicles/Vehicles.vue'

import EditCustomer from '../views/sub-path/Registry/EditCustomer.vue'
import EditVehicle from '../views/sub-path/Vehicles/EditVehicle.vue'

import InputCustomer from '../views/sub-path/Registry/InputCustomer.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/registry',
		name: 'Gestione Anagrafica',
		component: Registry
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
		name: 'Vehicles',
		component: Vehicles
	},
	{
		path: '/registry/:id',
		name: 'EditCustomer',
		component: EditCustomer
	},
	{
		path: '/vehicles/:id',
		name: 'EditVehicle',
		component: EditVehicle
	},
	{
		path: '/input_customer',
		name: 'InputCustomer',
		component: InputCustomer
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
