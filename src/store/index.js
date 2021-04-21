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
		},

		loadData: ({ commit }, collectionName) => {
			commit('startLoading')
			Vue.http.get('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/' + collectionName + '.json')
			.then(res => res.json())
			.then(data => {
				const items = []
				if (data) {
					for (const [key, value] of Object.entries(data)) {
						items.push({
							id: key,
							...value
						})
					}
				}
				commit('set_' + collectionName, items)
			})
			.catch(() => {
				commit('fail')
			})
		},
	
		addItem: ({ commit }, { collectionName, item }) => {
			return new Promise((resolve, reject) => {
				Vue.http.post('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/' + collectionName + '.json', item)
				.then( response => response.json() )
				.then( data => {
					item.id = data.name
					commit('addTo_' + collectionName, item)
					resolve({ ok: true })
				})
				.catch(() => {
					reject({ ok: false, err: 'Impossibile aggiungere elemento alla collezione ' + collectionName })
				})
			})
		},
	
		deleteItem (context, { collectionName, itemId }) {
			return new Promise((resolve, reject) => {
				Vue.http.delete('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/' + collectionName + '/' + itemId + '.json')
				.then(res => res.json())
				.then(() => {
					context.commit('deleteFrom_' + collectionName, itemId)
					resolve({ ok: true })
				})
				.catch(() => {
					reject({ ok: false, err: 'Impossibile eliminare elemento dalla collezione ' + collectionName  })
				})
			})
		},
	
		editItem: ({ commit }, { collectionName, id, ...item }) => {
			return new Promise((resolve, reject) => {
				Vue.http.put('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/' + collectionName + '/' + id + '.json', item)
				.then( response => response.json() )
				.then( () => {
					commit('editFrom_' + collectionName, { id, ...item })
					resolve({ ok: true })
				})
				.catch(() => {
					reject({ ok: false, err: 'Impossibile aggiornare elemento della collezione ' + collectionName  })
				})
			})
		}
	},
	modules: {
		pages,
		vehicles,
		customers
	}
})
