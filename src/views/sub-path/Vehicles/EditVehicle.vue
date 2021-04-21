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
			'editVehicle', 'addError'
		]),

		vehicleSave (vehicle) {
			this.editVehicle(vehicle)
			.then(data => {
				console.log('editVehicle data', data)
				this.$router.push('/vehicles')
			})
			.catch(err => {
				this.addError(err.err)
				this.$router.push('/vehicles')
			})
		}
	}
}
</script>