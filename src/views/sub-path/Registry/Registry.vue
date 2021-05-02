<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione anagrafica</h1>
		</template>
		<app-btn class="btn--add" @click="ok">+</app-btn>

		<!--I template va sopra al pulsante, e poi pensavo
			che non funzionasse con v-show
		-->
		<template v-slot:input>
			<!-- <app-input-customer > -->
			<app-input-customer v-show="shoow"
				@save="customerSave"
			></app-input-customer>
		</template>
		<app-list>
			<app-customer />
			<app-customer v-for="customer in customers" :key="customer.id"
				:data="customer"
				@clicked="customerClicked"
				@delete="customerDelete"
			></app-customer>
		</app-list>
	</app-page>
</template>

<script>
import Customer from '@/components/Registry/Customer.vue'
import InputCustomer from '@/components/Registry/InputCustomer.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
	data (){
		return {
			shoow: false
		}
	},

	computed: {
		...mapGetters([
			'customers'
		]),

		customerHeader () {
			return {
				surname: 'Cognome',
				name: 'Nome',
				born_date: 'Data di nascita'
			}
		}
	},

	methods: {
		...mapActions([
			'deleteCustomer', 'addCustomer', 'addError', 'addLogMessage'
		]),

		customerClicked (customerId) {
			this.$router.push('/customers/' + customerId)
		},

		customerDelete (customerId) {
			this.deleteCustomer(customerId)
			.then(data => {
				this.addLogMessage(data.msg)
			})
			.catch(err => {
				this.addError(err.err)
			})
		},

		customerSave (customer) {
			this.addCustomer(customer)
			.then(data => {
				this.addLogMessage(data.msg)
			})
			.catch(err => {
				this.addError(err.err)
			})
		},
		ok () {
			this.shoow = !this.shoow
		}
	},

	components: {
		appCustomer: Customer,
		appInputCustomer: InputCustomer
	}
}
</script>