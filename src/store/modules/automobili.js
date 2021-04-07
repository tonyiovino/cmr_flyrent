const state = {
	// dati di esempio
	automobili: [
		{ id: 1, targa: 'AB 123 CD', marca: 'Ferrari', modello: 'F40' },
		{ id: 2, targa: 'XY 000 ZZ', marca: 'Porsche', modello: 'Carrera' },
	]
}

const getters = {
	automobili: state => state.automobili
}

export default {
	state,
	getters
}