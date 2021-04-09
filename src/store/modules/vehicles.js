const state = {
	// fake data, must be loaded from db
	//  - remember to add `loaded` state
	vehicles: [
		{ id: 1, license_plate: 'AB 123 CD', brand: 'Ferrari', model: 'F40' },
		{ id: 2, license_plate: 'XY 000 ZZ', brand: 'Porsche', model: 'Carrera' },
	]
}

const getters = {
	vehicles: state => state.vehicles
}

export default {
	state,
	getters
}