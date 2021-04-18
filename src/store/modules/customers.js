const state = {
	customers: [
		{ id: '1', surname: 'Rossi', name: 'Luca' },
		{ id: '2', surname: 'Verdi', name: 'Mario' }
	],

	nextId: 3
}

const getters = {
	customers: state => state.customers,
	customerById: state => id => {
		return state.customers.find(customer => customer.id === id)
	}
}

const mutations = {
	addCustomer (state, payload) {
		state.customers.push(payload)
	},

	deleteCustomer: (state, payload) => {
		state.customers = state.customers.filter(customer => customer.id !== payload)
	},

	incrNextId (state) {
		state.nextId++
	}
}

const actions = {
	addCustomer (context, payload) {
		payload.id = "" + context.state.nextId
		context.commit('incrNextId')
		context.commit('addCustomer', payload)
	},

	deleteCustomer (context, payload) {
		console.log(payload)
		context.commit('deleteCustomer', payload)
	},
}

export default {
	state,
	getters,
	mutations,
	actions
}