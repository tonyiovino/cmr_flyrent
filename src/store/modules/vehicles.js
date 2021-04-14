const state = {
	// fake data, must be loaded from db
	//  - remember to add `loaded` state
	vehicles: [
		{ id: '1', license_plate: 'AB 123 CD', brand: 'Ferrari', model: 'F40' },
		{ id: '2', license_plate: 'XY 000 ZZ', brand: 'Porsche', model: 'Carrera' },
	],

	nextId: 3
}

const getters = {
	vehicles: state => state.vehicles,
	vehicleById: state => id => {
		return state.vehicles.find(vehicle => vehicle.id === id)
	}
}

const mutations = {
	addVehicle (state, payload) {
		state.vehicles.push(payload)
	},

	editVehicle: (state, payload) => {
		const index = state.vehicles.findIndex(vehicle => vehicle.id === payload.id)
		state.vehicles.splice(index, 1, payload)
	},
	
	deleteVehicle: (state, payload) => {
		state.vehicles = state.vehicles.filter(vehicle => vehicle.id !== payload)
	},

	incrNextId (state) {
		state.nextId++
	}
}

const actions = {
	addVehicle (context, payload) {
		payload.id = "" + context.state.nextId
		context.commit('incrNextId')
		context.commit('addVehicle', payload)
	},

	editVehicle (context, payload) {
		context.commit('editVehicle', payload)
	},

	deleteVehicle (context, payload) {
		context.commit('deleteVehicle', payload)
	},
}

export default {
	state,
	getters,
	mutations,
	actions
}