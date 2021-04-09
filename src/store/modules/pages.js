const state = {
	pages: [
		{ id: 1, title: 'Gestione anagrafica', path: '/anagrafica' },
		{ id: 2, title: 'Preventivi', path: '/preventivi' },
	]
}

const getters = {
	pages: state => state.pages
}

export default {
	state,
	getters
}