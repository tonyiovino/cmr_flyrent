const state = {
	nextId: 1,
	errors: []
}

const getters = {
	errors: state => {
		return state.errors
	}
}

const mutations = {
	addError: (state, error) => {
		state.errors.push(error)
		state.nextId++
	},

	removeError: (state, errorId) => {
		state.errors = state.errors.filter(error => {
			return error.id !== errorId
		})
	}
}

const actions = {
	addError: (context, errorMsg) => {
		const errorId = state.nextId
		context.commit('addError', { id: errorId, msg: errorMsg })
		setTimeout(() => context.commit('removeError', errorId), 5000)
	},

	removeError: (context, errorId) => {
		context.commit('removeError', errorId)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
