import Vue from 'vue'
import Vuex from 'vuex'

import pages from './modules/pages'
import vehicles from './modules/vehicles'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		pages,
		vehicles
	}
})
