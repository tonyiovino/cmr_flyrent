<template>
    <div class="vehicles page">
		<app-input-vehicle
			:id="$route.params.id"
			@save="vehicleSave"
		></app-input-vehicle>
	</div>
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
			this.$router.push('/vehicles')
		}
	}
}
</script>