<template>
	<app-page>
		<h1 class="heading-primary">Gestione veicoli</h1>
		<app-container>
			<app-input-vehicle
				:id="$route.params.id"
				@save="vehicleSave"
			></app-input-vehicle>
		</app-container>
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