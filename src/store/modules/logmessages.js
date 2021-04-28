const state = {
	nextId: 1,
	messages: []
}

const getters = {
	logmessages: state => {
		return state.messages
	}
}

const mutations = {
	addLogMessage: (state, msg) => {
		state.messages.push(msg)
		state.nextId++
	},

	removeLogMessage: (state, msgId) => {
		state.messages = state.messages.filter(msg => {
			return msg.id !== msgId
		})
	}
}

const actions = {
	addLogMessage: (context, msg) => {
		const msgId = state.nextId
		context.commit('addLogMessage', { id: msgId, msg: msg })
		setTimeout(() => context.commit('removeLogMessage', msgId), 1177653000)
	},

	removeLogMessage: (context, msgId) => {
		context.commit('removeLogMessage', msgId)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
