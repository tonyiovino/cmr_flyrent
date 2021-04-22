<template>
	<div class="input">
		<h2 class="heading-secondary" v-if="id">Modifica Cliente</h2>
		<h2 class="heading-secondary" v-else>Nuovo Cliente</h2>

		<app-form @submit="submit">
			<div class="form__group">
				<input type="text" class="form__input" id="surname" v-model="surname" placeholder="Cognome" required>
				<label for="surname" class="form__label">Cognome</label>
			</div>

			<div class="form__group">
				<input type="text" class="form__input" id="name" v-model.trim="name" placeholder="Nome" required>
				<label for="name" class="form__label">Nome</label>
			</div>

			<div class="form__actions">
				<app-btn class="btn--primary" type="submit">Salva</app-btn>

				<app-text-link v-if="id" path="/anagrafica">Annulla</app-text-link>
				<app-btn class="btn--secondary" v-else type="reset">Pulisci</app-btn>
			</div>
		</app-form>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	props: [ 'id' ],

	computed: {
		...mapGetters([
			'customerById'
		])
	},

	data () {
		return {
			surname: '',
			name: '',
		}
	},

	methods: {
		submit () {

			if (this.surname === '' || this.name === '') return

			this.$emit('save', {
				id: this.id,
				surname: this.surname,
				name: this.name,
			})
			
			this.surname = this.name = ''
		}
	},

	created () {
		if (this.id) {
			const customer = this.customerById(this.id)
			this.surname = customer.surname
			this.name = customer.name
		}
	}
}
</script>