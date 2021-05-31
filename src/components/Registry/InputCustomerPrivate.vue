<template>
	<div class="input input--private">
		<h2 class="heading-secondary" v-if="id">Modifica Cliente Privato</h2>
		<h2 class="heading-secondary" v-else>Nuovo Cliente Privato</h2>

		<app-form @submit="submit">
			<div class="form__row">
				<div class="form__group">
					<input type="text" class="form__input" id="name" v-model.trim="name" placeholder="Nome Referente" required>
					<label for="name" class="form__label">Nome Referente</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="surname" v-model.trim="surname" placeholder="Cognome Referente" required>
					<label for="surname" class="form__label">Cognome Referente</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="fiscal_code" v-model.trim="fiscal_code" placeholder="Codice Fiscale Referente" required>
					<label for="fiscal_code" class="form__label">Codice Fiscale Referente</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="address" v-model.trim="address" placeholder="Indirizzo Referente" required>
					<label for="address" class="form__label">Indirizzo Referente</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="municipality" v-model.trim="municipality" placeholder="Comune" required>
					<label for="municipality" class="form__label">Comune</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="cap" v-model.trim="cap" placeholder="CAP Referente" required>
					<label for="cap" class="form__label">CAP Referente</label>
				</div>

				<div class="form__group">
					<!-- <input type="text" class="form__input" id="cap" v-model.trim="cap" placeholder="Provincia" required> -->
					<select class="form__input" id="province" v-model.trim="province" placeholder="Provincia" required>
						<option>Avellino</option>
						<option>Benevento</option>
						<option>Caserta</option>
						<option>Napoli</option>
						<option>Salerno</option>
					</select>
					<label for="cap" class="form__label">Provincia</label>
				</div>

				<div class="form__group">
					<input type="email" class="form__input" id="email" v-model.trim="email" placeholder="Email" required>
					<label for="email" class="form__label">Email</label>
				</div>

				<div class="form__group">
					<input type="tel" class="form__input" id="tel" v-model.trim="tel" placeholder="Tel." required>
					<label for="tel" class="form__label">Tel.</label>
				</div>

				<div class="form__group">
					<input type="tel" class="form__input" id="cell" v-model.trim="cell" placeholder="Cell." required>
					<label for="cell" class="form__label">Cell.</label>
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
			surname: '',
			fiscal_code: '',
			address: '',
			municipality: '',
			cap: '',
			province: '',
			email: '',
			tel: '',
			cell: ''
		}
	},

	methods: {
		...mapActions([
			'addLogMessage'
		]),

		submit () {

			if (
				this.name === ''
				|| this.surname === ''
				|| this.fiscal_code === ''
				|| this.address === ''
				|| this.municipality === ''
				|| this.cap === ''
				|| this.province === ''
				|| this.email === ''
				|| this.tel === ''
				|| this.cell === ''
			) return

			this.$emit('save', {
				id: this.id,
				name: this.name,
				surname: this.surname,
				fiscal_code: this.fiscal_code,
				address: this.address,
				municipality: this.municipality,
				cap: this.cap,
				province: this.province,
				email: this.email,
				tel: this.tel,
				cell: this.cell
			})

			this.name = this.surname = this.fiscal_code = this.address = this.municipality = this.cap = this.province = this.email = this.tel = this.cell = ''

			this.addLogMessage('Salvataggio in corso')
		}
	},

	created () {
		if (this.id) {
			const customer = this.customerById(this.id)
			this.name = customer.name
			this.surname = customer.surname
			this.fiscal_code = customer.fiscal_code
			this.address = customer.address
			this.municipality = customer.municipality
			this.cap = customer.cap
			this.province = customer.province
			this.email = customer.email
			this.tel = customer.tel
			this.cell = customer.cell
		}
	}
}
</script>