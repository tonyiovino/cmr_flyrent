<template>
	<div class="vehicles page">
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
	</div>
</template>

<script>
import List from '@/components/List.vue'
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
			alert('Click su automobile id ' + vehicleId)
		},

		vehicleDelete (vehicleId) {
			this.deleteVehicle(vehicleId)
		},

		vehicleSave (vehicle) {
			this.addVehicle(vehicle)
		}
	},

	components: {
		appList: List,
		appVehicle: Vehicle,
		appInputVehicle: InputVehicle
	}
}
</script>