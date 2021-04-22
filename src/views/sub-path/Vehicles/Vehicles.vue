<template>
	<app-page>
		<h1 class="heading-primary">Gestione veicoli</h1>
		<app-container>
			<app-input-vehicle
				@save="vehicleSave"
			></app-input-vehicle>

			<app-list>
				<app-vehicle v-for="vehicle in vehicles" :key="vehicle.id"
					:data="vehicle"
					@clicked="vehicleClicked"
					@delete="vehicleDelete"
				></app-vehicle>
			</app-list>
		</app-container>
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
		])
	},

	methods: {
		...mapActions([
			'deleteVehicle', 'addVehicle', 'addError'
		]),

		vehicleClicked (vehicleId) {
			this.$router.push('/vehicles/' + vehicleId)
		},

		vehicleDelete (vehicleId) {
			this.deleteVehicle(vehicleId)
			.then(data => {
				console.log('deleteVehicle data', data)
			})
			.catch(err => {
				this.addError(err.err)
			})
		},

		vehicleSave (vehicle) {
			this.addVehicle(vehicle)
			.then(data => {
				console.log('addVehicle data', data)
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