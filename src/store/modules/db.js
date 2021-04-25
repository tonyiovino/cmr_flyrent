import Vue from 'vue'

export default {
    loadData: (context, collectionName) => {
        context.commit('startLoading')
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
            context.commit('set_' + collectionName, items)
        })
        .catch(() => {
            context.commit('fail')
        })
    },

    addItem: (context, { collectionName, item }) => {
        return new Promise((resolve, reject) => {
            Vue.http.post('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/' + collectionName + '.json', item)
            .then( response => response.json() )
            .then( data => {
                item.id = data.name
                context.commit('addTo_' + collectionName, item)
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

    editItem: (context, { collectionName, id, ...item }) => {
        return new Promise((resolve, reject) => {
            Vue.http.put('https://cmrflyrent-b50d7-default-rtdb.europe-west1.firebasedatabase.app/' + collectionName + '/' + id + '.json', item)
            .then( response => response.json() )
            .then( () => {
                context.commit('editFrom_' + collectionName, { id, ...item })
                resolve({ ok: true })
            })
            .catch(() => {
                reject({ ok: false, err: 'Impossibile aggiornare elemento della collezione ' + collectionName  })
            })
        })
    }
}