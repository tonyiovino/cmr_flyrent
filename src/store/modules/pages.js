const state = {
	pages: [
		{
			id: '1',
			title: 'Gestione anagrafica',
			text: 'In Work',
			path: '/anagrafica'
		},
		{
			id: '2',
			title: 'Preventivi',
			text: 'Empty',
			path: '/preventivi'
		},
		{
			id: '3',
			title: 'Scoring',
			text: 'Empty',
			path: '/scoring'
		},
		{
			id: '4',
			title: 'Ordini in corso',
			text: 'Empty',
			path: '/ordini'
		},
		{
			id: '5',
			title: 'Gestione contratti',
			text: 'Empty',
			path: '/contratti'
		},
		{
			id: '6',
			title: 'Modulistica',
			text: 'Empty',
			path: '/modulistica'
		},
		{
			id: '7',
			title: 'Comunicazioni',
			text: 'Empty',
			path: '/comunicazioni'
		},
		{
			id: '8',
			title: 'Note',
			text: 'Empty',
			path: '/note'
		},
		{ 
			id: '9',
			title: 'Gestione veicoli',
			text: 'In Work',
			path: '/vehicles'
		}
	]
}

const getters = {
	pages: state => state.pages
}

export default {
	state,
	getters
}