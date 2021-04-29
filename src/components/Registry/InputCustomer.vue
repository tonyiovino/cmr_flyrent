<template>
	<div class="input">
		<h2 class="heading-secondary" v-if="id">Modifica Cliente</h2>
		<h2 class="heading-secondary" v-else>Nuovo Cliente</h2>

		<app-form @submit="submit">
			<div class="form__row">
				<div class="form__group">
					<input type="text" class="form__input" id="surname" v-model="surname" placeholder="Cognome" required>
					<label for="surname" class="form__label">Cognome</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="name" v-model.trim="name" placeholder="Nome" required>
					<label for="name" class="form__label">Nome</label>
				</div>

				<div class="form__group">
					<input type="date" class="form__input" id="born_date" v-model.trim="born_date" placeholder="Data di nascita" required>
					<label for="born_date" class="form__label">Data di nascita</label>
				</div>
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
import { mapGetters, mapActions } from 'vuex'

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
			born_date: ''
		}
	},

	methods: {
		...mapActions([
			'addLogMessage'
		]),

		submit () {

			if (this.surname === '' || this.name === '' || this.born_date === '') return

			this.$emit('save', {
				id: this.id,
				surname: this.surname,
				name: this.name,
				born_date: this.born_date
			})

			this.surname = this.name = this.born_date = ''

			this.addLogMessage('Salvataggio in corso')
		}
	},

	created () {
		if (this.id) {
			const customer = this.customerById(this.id)
			this.surname = customer.surname
			this.name = customer.name
			this.born_date = customer.born_date
		}
	}
}
</script>