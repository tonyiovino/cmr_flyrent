<template>
	<div class="input">
		<h2 class="heading-secondary" v-if="id">Modifica Veicolo</h2>
		<h2 class="heading-secondary" v-else>Nuovo Veicolo</h2>

		<app-form @submit="submit">
			<div class="form__row">
				<div class="form__group">
					<input type="text" class="form__input" id="brand" v-model.trim="brand" placeholder="Marca" required>
					<label for="brand" class="form__label">Marca</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="model" v-model.trim="model" placeholder="Modello" required>
					<label for="model" class="form__label">Modello</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="license_plate" v-model.trim="license_plate" placeholder="Targa" required>
					<label for="license_plate" class="form__label">Targa</label>
				</div>
			</div>

			<div class="form__actions">
				<app-btn class="btn--primary" type="submit">Salva</app-btn>

				<app-text-link v-if="id" path="/vehicles">Annulla</app-text-link>
				<app-btn class="btn--secondary" v-else type="reset">Pulisci</app-btn>
			</div>
		</app-form>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	props: [ 'id' ],

	computed: {
		...mapGetters([
			'vehicleById'
		])
	},

	data () {
		return {
			brand: '',
			model: '',
			license_plate: ''
		}
	},

	methods: {
		...mapActions([
			'addLogMessage'
		]),

		submit () {
			if (this.brand === '' || this.model === '' || this.license_plate === '') return

			this.$emit('save', {
				id: this.id,
				brand: this.brand,
				model: this.model,
				license_plate: this.license_plate
			})
			
			this.brand = this.model = this.license_plate = ''

			this.addLogMessage('Salvataggio in corso')
		}
	},

	created () {
		if (this.id) {
			const vehicle = this.vehicleById(this.id)
			this.brand = vehicle.brand
			this.model = vehicle.model
			this.license_plate = vehicle.license_plate
		}
	}
}
</script>