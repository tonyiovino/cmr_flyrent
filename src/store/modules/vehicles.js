import Vue from 'vue'

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

	setVehicles: (state, payload) => {
        state.vehicles = payload
        state.loaded = true
    },

	addVehicle (state, payload) {
		state.vehicles.push(payload)
	},

	editVehicle: (state, payload) => {
		const index = state.vehicles.findIndex(vehicle => vehicle.id === payload.id)
		state.vehicles.splice(index, 1, payload)
	},
	
	deleteVehicle: (state, payload) => {
		state.vehicles = state.vehicles.filter(vehicle => vehicle.id !== payload)
	}
}

const actions = {
	loadVehicles: ({ commit }) => {
        commit('startLoading')
        Vue.http.get('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/vehicles.json')
        .then(res => res.json())
        .then(data => {
            const vehicles = []
            if (data) {
                for (const [key, value] of Object.entries(data)) {
                    vehicles.push({
                        id: key,
                        ...value
                    })
                }
            }
            commit('setVehicles', vehicles)
        })
        .catch(() => {
            commit('fail')
        })
    },

	addVehicle: ({ commit }, vehicle) => {
		return new Promise((resolve, reject) => {
			Vue.http.post('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/vehicles.json', vehicle)
			.then( response => response.json() )
			.then( data => {
				vehicle.id = data.name
				commit('addVehicle', vehicle)
				resolve({ ok: true })
			})
			.catch(() => {
				reject({ ok: false })
			})
		})
	},

	deleteVehicle (context, payload) {
		console.log(payload)
		return new Promise((resolve, reject) => {
			Vue.http.delete('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/vehicles/' + payload + '.json')
			.then(res => res.json())
			.then(() => {
				context.commit('deleteVehicle', payload)
				resolve({ ok: true })
			})
			.catch(() => {
				reject({ ok: false })
			})
		})
	},

	editVehicle: ({ commit }, { id, ...vehicle }) => {
        return new Promise((resolve, reject) => {
            Vue.http.put('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/vehicles/' + id + '.json', vehicle)
            .then( response => response.json() )
            .then( () => {
                commit('editVehicle', { id, ...vehicle })
                resolve({ ok: true })
            })
            .catch(() => {
				reject({ ok: false })
            })
        })
    }
}

export default {
	state,
	getters,
	mutations,
	actions
}