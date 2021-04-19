<template>
    <app-page>
		<app-input-vehicle
			:id="$route.params.id"
			@save="vehicleSave"
		></app-input-vehicle>
	</app-page>
</template>

<script>
import InputVehicle from '@/components/Vehicles/InputVehicle.vue'

import { mapActions } from 'vuex'

export default {
    components: {
		appInputVehicle: InputVehicle
	},

	methods: {
		...mapActions([
			'editVehicle'
		]),

		vehicleSave (vehicle) {
			this.editVehicle(vehicle)
			.then( () => {
				this.$router.push('/vehicles')
			})
		}
	}
}
</script>