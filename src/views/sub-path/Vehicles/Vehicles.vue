<template>
	<app-page>
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
			'deleteVehicle', 'addVehicle'
		]),

		vehicleClicked (vehicleId) {
			this.$router.push('/vehicles/' + vehicleId)
		},

		vehicleDelete (vehicleId) {
			this.deleteVehicle(vehicleId)
		},

		vehicleSave (vehicle) {
			this.addVehicle(vehicle)
		},
	},

	components: {
		appVehicle: Vehicle,
		appInputVehicle: InputVehicle
	}
}
</script>