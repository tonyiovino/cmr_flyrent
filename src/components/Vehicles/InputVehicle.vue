<template>
	<div class="input">
		<h2 class="heading-secondary" v-if="id">Modifica Veicolo</h2>
		<h2 class="heading-secondary" v-else>Nuovo Veicolo</h2>

		<form class="form" @submit.prevent="submit">
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

			<div class="form__actions">
				<button type="submit" class="btn btn--save" value="save">Salva</button>
				<button type="submit" class="btn btn--cancel" value="cancel">Annulla</button>
			</div>
		</form>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

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
		submit () {
			if (this.brand === '' || this.model === '' || this.license_plate === '') return

			// if (this.value == 'save') {
				this.$emit('save', {
					id: this.id,
					brand: this.brand,
					model: this.model,
					license_plate: this.license_plate
				})
			// } else {
			// 	this.$emit('cancel', this.id)
			// 	this.$router.push('/vehicles')
			// }
			this.brand = this.model = this.license_plate = ''
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