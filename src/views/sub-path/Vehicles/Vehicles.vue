<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione veicoli</h1>
		</template>
		<template v-slot:input>
			<app-input-vehicle
				@save="vehicleSave"
			></app-input-vehicle>
		</template>
		<app-list>
			<app-vehicle />
			<app-vehicle v-for="vehicle in vehicles" :key="vehicle.id"
				:data="vehicle"
				@clicked="vehicleClicked"
				@delete="vehicleDelete"
			></app-vehicle>
		</app-list>
	</app-page>
</template>

<script>
import Vehicle from '@/components/Vehicles/Vehicle.vue'
import InputVehicle from '@/components/Vehicles/InputVehicle.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'vehicles'
		]),

		vehicleHeader () {
			return {
				brand: 'Marca',
				model: 'Modello',
				license_plate: 'Targa'
			}
		}
	},

	methods: {
		...mapActions([
			'deleteVehicle', 'addVehicle', 'addError', 'addLogMessage'
		]),

		vehicleClicked (vehicleId) {
			this.$router.push('/vehicles/' + vehicleId)
		},

		vehicleDelete (vehicleId) {
			this.deleteVehicle(vehicleId)
			.then(data => {
				this.addLogMessage(data.msg)
			})
			.catch(err => {
				this.addError(err.err)
			})
		},

		vehicleSave (vehicle) {
			this.addVehicle(vehicle)
			.then(data => {
				this.addLogMessage(data.msg)
			})
			.catch(err => {
				this.addError(err.err)
			})
		},
	},

	components: {
		appVehicle: Vehicle,
		appInputVehicle: InputVehicle
	}
}
</script>