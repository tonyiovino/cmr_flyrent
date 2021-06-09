<template>
	<div class="input input--private">
		<h2 class="heading-secondary" v-if="id">Modifica Cliente Privato</h2>
		<h2 class="heading-secondary" v-else>Nuovo Cliente Privato</h2>

		<app-btn class="btn--secondary" @click="fillAll">Riempi</app-btn>

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
			</div>

			<div class="form__row">
				<div class="form__group">
					<input type="text" class="form__input" id="municipality" v-model.trim="municipality" placeholder="Comune *">
					<label for="municipality" class="form__label">Comune *</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="cap" v-model.trim="cap" placeholder="CAP Referente" required>
					<label for="cap" class="form__label">CAP Referente</label>
				</div>

				<div class="form__group">
					<select class="form__input" id="province" v-model.trim="province" placeholder="Provincia" required>
						<option value="">---</option>
						<option value="Av">Avellino</option>
						<option value="Bn">Benevento</option>
						<option value="Ce">Caserta</option>
						<option value="Na">Napoli</option>
						<option value="Sa">Salerno</option>
					</select>
					<label for="province" class="form__label">Provincia</label>
				</div>
			</div>

			<div class="form__row">
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

			this.name
			= this.surname
			= this.fiscal_code
			= this.address
			= this.municipality
			= this.cap
			= this.province
			= this.email
			= this.tel
			= this.cell = ''

			this.addLogMessage('Salvataggio in corso')
			this.$router.push('/registry')
		},

		fillAll () {

			let numName = Math.random()
			if (numName < 0.3) {
				this.name = 'Gianni'
			} else if (numName < 0.6) {
				this.name = 'Luca'
			} else if (numName < 1) {
				this.name = 'Alfredo'
			}

			let numSurname = Math.random()
			if (numSurname < 0.3) {
				this.surname = 'Rossi'
			} else if (numSurname < 0.6) {
				this.surname = 'Verdi'
			} else if (numSurname < 1) {
				this.surname = 'Bianchi'
			}

			let numFiscalCode = Math.random()
			if (numFiscalCode < 0.3) {
				this.fiscal_code = 'GRSBDT04M44F839Z'
			} else if (numFiscalCode < 0.6) {
				this.fiscal_code = 'LZZFLV04H69A944J'
			} else if (numFiscalCode < 1) {
				this.fiscal_code = 'DSMLDA06S53A662O'
			}

			let numAddres = Math.random()
			if (numAddres < 0.3) {
				this.address = 'Via Milano 8'
			} else if (numAddres < 0.6) {
				this.address = 'Via Bologna 4'
			} else if (numAddres < 1) {
				this.address = 'Via Roma 2'
			}

			let numMunicipality = Math.random()
			if (numMunicipality < 0.3) {
				this.municipality = 'Casoria'
			} else if (numMunicipality < 0.6) {
				this.municipality = 'Secondigliano'
			} else if (numMunicipality < 1) {
				this.municipality = 'Frattamaggiore'
			}

			let numCap = Math.random()
			if (numCap < 0.3) {
				this.cap = '80038'
			} else if (numCap < 0.6) {
				this.cap = '80053'
			} else if (numCap < 1) {
				this.cap = '80011'
			}

			let numProvince = Math.random()
			if (numProvince < 0.3) {
				this.province = 'Ce'
			} else if (numProvince < 0.6) {
				this.province = 'Na'
			} else if (numProvince < 1) {
				this.province = 'Bn'
			}

			let numEmail = Math.random()
			if (numEmail < 0.3) {
				this.email = 'tribalix17@gmail.com'
			} else if (numEmail < 0.6) {
				this.email = 'flexiumux89@gmail.com'
			} else if (numEmail < 1) {
				this.email = 'kenistrix00@gmail.com'
			}

			let numTell = Math.random()
			if (numTell < 0.3) {
				this.tel = '0813849242'
			} else if (numTell < 0.6) {
				this.tel = '0815373293'
			} else if (numTell < 1) {
				this.tel = '0810243092'
			}

			let numCell = Math.random()
			if (numCell < 0.3) {
				this.cell = '3383536902'
			} else if (numCell < 0.6) {
				this.cell = '3510952639'
			} else if (numCell < 1) {
				this.cell = '3804823092'
			}
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