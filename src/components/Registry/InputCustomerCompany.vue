<template>
	<div class="input input--company">
		<h2 class="heading-secondary" v-if="id">Modifica Cliente Aziendale</h2>
		<h2 class="heading-secondary" v-else>Nuovo Cliente Aziendale</h2>

		<app-form @submit="submit">
			<div class="form__row">
				<div class="form__group">
					<input type="text" class="form__input" id="name" v-model.trim="name" placeholder="Cliente" required>
					<label for="name" class="form__label">Cliente</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="cf" v-model.trim="cf" placeholder="C.F." required>
					<label for="cf" class="form__label">C.F.</label>
				</div>

				<div class="form__group">
					<input type="email" class="form__input" id="email" v-model.trim="email" placeholder="Email" required>
					<label for="email" class="form__label">Email</label>
				</div>

				<div class="form__group">
					<input type="tel" class="form__input" id="tel" v-model.trim="tel" placeholder="Tel." required>
					<label for="tel" class="form__label">Tel.</label>
				</div>
			</div>

			<div class="form__actions">
				<app-btn class="btn--primary" type="submit">Salva</app-btn>

				<app-text-link v-if="id" path="/registry">Annulla</app-text-link>
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
			name: '',
			cf: '',
			email: '',
			tel: ''
		}
	},

	methods: {
		...mapActions([
			'addLogMessage'
		]),

		submit () {

			if (this.name === '' || this.cf === '' || this.email === '' || this.tel === '') return

			this.$emit('save', {
				id: this.id,
				name: this.name,
				cf: this.cf,
				email: this.email,
				tel: this.tel
			})

			this.name = this.cf = this.email = this.tel = ''

			this.addLogMessage('Salvataggio in corso')
		}
	},

	created () {
		if (this.id) {
			const customer = this.customerById(this.id)
			this.name = customer.name
			this.cf = customer.cf
			this.email = customer.email
			this.tel = customer.tel
		}
	}
}
</script>