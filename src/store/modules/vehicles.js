const state = {
	vehicles: [],
	loaded: false
}

const getters = {
	vehicles: state => state.vehicles,
	vehiclesLoaded: state => state.loaded,
	vehicleById: state => id => {
		return state.vehicles.find(vehicle => vehicle.id === id)
	}
}

const mutations = {
	startLoading: state => {
		state.vehicles = []
		state.loaded = false
	},

	fail: state => {
		state.vehicles = []
		state.loaded = false
	},

	set_vehicles: (state, payload) => {
        state.vehicles = payload
        state.loaded = true
    },

	addTo_vehicles (state, payload) {
		state.vehicles.push(payload)
	},

	editFrom_vehicles: (state, payload) => {
		const index = state.vehicles.findIndex(vehicle => vehicle.id === payload.id)
		state.vehicles.splice(index, 1, payload)
	},
	
	deleteFrom_vehicles: (state, payload) => {
		state.vehicles = state.vehicles.filter(vehicle => vehicle.id !== payload)
	}
}

const actions = {
	loadVehicles: (context) => {
		context.dispatch('loadData', 'vehicles')
	},

	addVehicle: (context, vehicle) => {
		return new Promise((resolve, reject) => {
			context.dispatch('addItem', { collectionName: 'vehicles', item: vehicle })
			.then( data => resolve(data) )
			.catch( err => reject(err) )
		})
	},

	deleteVehicle (context, vehicleId) {
		return new Promise((resolve, reject) => {
			context.dispatch('deleteItem', { collectionName: 'vehicles', itemId: vehicleId })
			.then( data => resolve(data) )
			.catch( err => reject(err) )
		})
	},

	editVehicle: (context, { id, ...vehicle }) => {
		return new Promise((resolve, reject) => {
			context.dispatch('editItem', { collectionName: 'vehicles', id, ...vehicle })
			.then( data => resolve(data) )
			.catch( err => reject(err) )
		})
    }
}

export default {
	state,
	getters,
	mutations,
	actions
}