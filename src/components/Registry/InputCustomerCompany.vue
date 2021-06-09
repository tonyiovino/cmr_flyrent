<template>
	<div class="input input--company">
		<h2 class="heading-secondary" v-if="id">Modifica Cliente Aziendale</h2>
		<h2 class="heading-secondary" v-else>Nuovo Cliente Aziendale</h2>

		<app-btn class="btn--secondary" @click="fillAll">Riempi</app-btn>

		<app-form @submit="submit">
			<div class="form__row">
				<div class="form__group">
					<input type="text" class="form__input" id="business_name" v-model.trim="business_name" placeholder="Ragione Sociale" required>
					<label for="business_name" class="form__label">Ragione Sociale</label>
				</div>

				<div class="form__group">
					<select class="form__input" id="company_type" v-model.trim="company_type" placeholder="Seleziona Tipo" required>
						<option value="">---</option>
						<option value="spa">S.P.A.</option>
						<option value="sas">S.A.S.</option>
						<option value="snc">S.N.C.</option>
						<option value="srl_u">S.R.L. Uninominale</option>
						<option value="srl">S.R.L.</option>
						<option value="srls">S.R.L.S.</option>
						<option value="indiv_firm">Ditta Individuale</option>
						<option value="freelance">Libero Professionista</option>
						<option value="onlus">Associazione ONLUS</option>
						<option value="public_authority">Ente Pubblico</option>
						<option value="scarl">S.C.A.R.L.</option>
						<option value="cooperative">Soc. Cooperativa</option>
						<option value="associate_firm">Studio Associato</option>
						<option value="agent_trade">Agente di commercio</option>
						<option value="simple">Società semplice</option>
						<option value="consortium">Soc. Consortile</option>
					</select>
					<label for="company_type" class="form__label">Seleziona Tipo</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="iva" v-model.trim="iva" placeholder="P.Iva" required>
					<label for="iva" class="form__label">P.Iva</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="company_code" v-model.trim="company_code" placeholder="Codice Fiscale Aziendale" required>
					<label for="company_code" class="form__label">Codice Fiscale Aziendale</label>
				</div>
			</div>

			<div class="form__row">
				<div class="form__group">
					<input type="text" class="form__input" id="registered_office" v-model.trim="registered_office" placeholder="Sede Legale" required>
					<label for="registered_office" class="form__label">Sede Legale</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="municipality" v-model.trim="municipality" placeholder="Comune *">
					<label for="municipality" class="form__label">Comune *</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="cap" v-model.trim="cap" placeholder="CAP" required>
					<label for="cap" class="form__label">CAP</label>
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
					<input type="text" class="form__input" id="name" v-model.trim="name" placeholder="Nome Referente" required>
					<label for="name" class="form__label">Nome Referente</label>
				</div>

				<div class="form__group">
					<input type="text" class="form__input" id="surname" v-model.trim="surname" placeholder="Cognome Referente" required>
					<label for="surname" class="form__label">Cognome Referente</label>
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

			<div class="form__row">
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
			type: 'company',
			business_name: '',
			company_type: '',
			iva: '',
			company_code: '',
			registered_office: '',
			municipality: '',
			cap: '',
			province: '',
			name: '',
			surname: '',
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
				|| this.business_name === ''
				|| this.company_type === ''
				|| this.iva === ''
				|| this.company_code === ''
				|| this.registered_office === ''
				|| this.cap === ''
				|| this.province === ''
				|| this.name === ''
				|| this.surname === ''
				|| this.email === ''
				|| this.tel === ''
				|| this.cell === ''

			) return

			this.$emit('save', {
				type: this.type,
				id: this.id,
				business_name: this.business_name,
				company_type: this.company_type,
				iva: this.iva,
				company_code: this.company_code,
				registered_office: this.registered_office,
				municipality: this.municipality,
				cap: this.cap,
				province: this.province,
				name: this.name,
				surname: this.surname,
				email: this.email,
				tel: this.tel,
				cell: this.cell
			})

			this.business_name
			= this.company_type
			= this.iva
			= this.company_code
			= this.registered_office
			= this.municipality
			= this.cap
			= this.province
			= this.name
			= this.surname
			= this.email
			= this.tel
			= this.cell = ''

			this.addLogMessage('Salvataggio in corso')
			this.$router.push('/registry')
		},

		fillAll(){
			this.type = 'company'

			let numBusiness_name = Math.random()
			if (numBusiness_name < 0.3) {
				this.business_name = 'Tribalica Lex'
			} else if (numBusiness_name < 0.6) {
				this.business_name = 'Flex Projects'
			} else if (numBusiness_name < 1) {
				this.business_name = 'Ken Kentrixis'
			}

			let numCompany_type = Math.random()
			if (numCompany_type < 0.3) {
				this.company_type = 'spa'
			} else if (numCompany_type < 0.6) {
				this.company_type = 'indiv_firm'
			} else if (numCompany_type < 1) {
				this.company_type = 'associate_firm'
			}

			let numIva = Math.random()
			if (numIva < 0.3) {
				this.iva = '59712390703'
			} else if (numIva < 0.6) {
				this.iva = '66433780575'
			} else if (numIva < 1) {
				this.iva = '31326800161'
			}

			let numCompany_code = Math.random()
			if (numCompany_code < 0.3) {
				this.company_code = 'ZMLLYD43S56C746D'
			} else if (numCompany_code < 0.6) {
				this.company_code = 'NDCCGY38B61E847E'
			} else if (numCompany_code < 1) {
				this.company_code = 'VFMRYP67B67E209I'
			}

			let numRegistered_office = Math.random()
			if (numRegistered_office < 0.3) {
				this.registered_office = 'Viale Europa 190'
			} else if (numRegistered_office < 0.6) {
				this.registered_office = 'Via Federico Confalonieri'
			} else if (numRegistered_office < 1) {
				this.registered_office = 'Via Gaetano Negri 1'
			}

			let numMunicipality = Math.random()
			if (numMunicipality < 0.3) {
				this.municipality = 'Orta Di Atella'
			} else if (numMunicipality < 0.6) {
				this.municipality = 'Giugliano In Campania'
			} else if (numMunicipality < 1) {
				this.municipality = 'Afragola'
			}

			let numCap = Math.random()
			if (numCap < 0.3) {
				this.cap = '80038'
			} else if (numCap < 0.6) {
				this.cap = '80023'
			} else if (numCap < 1) {
				this.cap = '80103'
			}

			let numProvince = Math.random()
			if (numProvince < 0.3) {
				this.province = 'Av'
			} else if (numProvince < 0.6) {
				this.province = 'Na'
			} else if (numProvince < 1) {
				this.province = 'Sa'
			}

			let numName = Math.random()
			if (numName < 0.3) {
				this.name = 'Mario'
			} else if (numName < 0.6) {
				this.name = 'Giovanni'
			} else if (numName < 1) {
				this.name = 'Laura'
			}

			let numSurname = Math.random()
			if (numSurname < 0.3) {
				this.surname = 'Capone'
			} else if (numSurname < 0.6) {
				this.surname = 'Franzese'
			} else if (numSurname < 1) {
				this.surname = 'Scafuto'
			}

			let numEmail = Math.random()
			if (numEmail < 0.3) {
				this.email = 'tribalix17-company@gmail.com'
			} else if (numEmail < 0.6) {
				this.email = 'flexiumux89-company@gmail.com'
			} else if (numEmail < 1) {
				this.email = 'kenistrix00-company@gmail.com'
			}

			let numTell = Math.random()
			if (numTell < 0.3) {
				this.tel = '0813849542'
			} else if (numTell < 0.6) {
				this.tel = '0815373843'
			} else if (numTell < 1) {
				this.tel = '0810129092'
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
			this.type = customer.type
			this.business_name = customer.business_name
			this.company_type = customer.company_type
			this.iva = customer.iva
			this.company_code = customer.company_code
			this.registered_office = customer.registered_office
			this.municipality = customer.municipality
			this.cap = customer.cap
			this.province = customer.province
			this.name = customer.name
			this.surname = customer.surname
			this.email = customer.email
			this.tel = customer.tel
			this.cell = customer.cell
		}
	}
}
</script>