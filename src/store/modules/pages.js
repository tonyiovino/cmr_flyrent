const state = {
	pages: [
		{
			id: '1',
			name: 'registry',
			title: 'Gestione anagrafica',
			text: 'In Work',
			path: '/anagrafica'
		},
		{
			id: '2',
			name: 'estimate',
			title: 'Preventivi',
			text: 'Empty',
			path: '/preventivi'
		},
		{
			id: '3',
			name: 'scoring',
			title: 'Scoring',
			text: 'Empty',
			path: '/scoring'
		},
		{
			id: '4',
			name: 'orders',
			title: 'Ordini in corso',
			text: 'Empty',
			path: '/ordini'
		},
		{
			id: '5',
			name: 'contracts',
			title: 'Gestione contratti',
			text: 'Empty',
			path: '/contratti'
		},
		{
			id: '6',
			name: 'forms',
			title: 'Modulistica',
			text: 'Empty',
			path: '/modulistica'
		},
		{
			id: '7',
			name: 'comunications',
			title: 'Comunicazioni',
			text: 'Empty',
			path: '/comunicazioni'
		},
		{
			id: '8',
			name: 'notes',
			title: 'Note',
			text: 'Empty',
			path: '/note'
		},
		{ 
			id: '9',
			name: 'vehicles',
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