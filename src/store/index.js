import Vue from 'vue'
import Vuex from 'vuex'

import pages from './modules/pages'
import vehicles from './modules/vehicles'
import customers from './modules/customers'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
		loadInitialData: ({ dispatch }) => {
			dispatch('loadVehicles')
		}
	},
	modules: {
		pages,
		vehicles,
		customers
	}
})
