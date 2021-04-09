import Vue from 'vue'
import Vuex from 'vuex'

import automobili from './modules/automobili'
import pages from './modules/pages'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		automobili,
		pages
	}
})
