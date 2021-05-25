<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione veicoli</h1>
		</template>

		<template v-slot:actions>
			<app-input-vehicle
				:id="$route.params.id"
				@save="vehicleSave"
			></app-input-vehicle>
		</template>
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
			'editVehicle', 'addError', 'addLogMessage'
		]),

		vehicleSave (vehicle) {
			this.editVehicle(vehicle)
			.then(data => {
				this.addLogMessage(data.msg)
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