const state = {
	pages: [
		{ id: 1, title: 'Gestione anagrafica', path: '/anagrafica' },
		{ id: 2, title: 'Preventivi', path: '/preventivi' },
		{ id: 3, title: 'Scoring', path: '/scoring' },
		{ id: 4, title: 'Ordini in corso', path: '/ordini' },
		{ id: 5, title: 'Gestione contratti', path: '/contratti' },
		{ id: 6, title: 'Modulistica', path: '/modulistica' },
		{ id: 7, title: 'Comunicazioni', path: '/comunicazioni' },
		{ id: 8, title: 'Note', path: '/note' },
		{ id: 9, title: 'Gestione veicoli', text: 'some text', path: '/vehicles' }
	]
}

const getters = {
	pages: state => state.pages
}

export default {
	state,
	getters
}