<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione anagrafica</h1>
		</template>

		<template v-slot:actions>
			<!-- card -->
			<app-text-link path="/registry/input_customer">Aggiungi cliente</app-text-link>
		</template>

		<div class="find-element">
			<span>Filtra Ancora:</span>
			<input type="text" @input="filter" placeholder="Cerca in questa tabella...">	
		</div>

		<app-list>
			<app-customer />
			<app-customer v-for="customer in customersFiltered" :key="customer.id"
				:data="customer"
				@clicked="customerClicked"
				@delete="customerDelete"
			></app-customer>
		</app-list>
	</app-page>
</template>

<script>
import Customer from '@/components/Registry/Customer.vue'

import { mapGetters, mapActions } from 'vuex'

export default {

	data () {
		return {
			customersFiltered: []
		}
	},

	computed: {
		...mapGetters([
			'customers'
		]),

		customerHeader () {
			return {
				name: 'Cliente',
				iva_cf: 'P.Iva/C.F.',
				email: 'Email',
				tel: 'Tel.'
			}
		},
	},

	methods: {
		...mapActions([
			'deleteCustomer', 'addCustomer', 'addError', 'addLogMessage'
		]),

		customerClicked (customerId) {
			this.$router.push('/registry/edit_customer/' + customerId)
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

		filter (event) {
			const key = event.target.value.toLowerCase()
			this.customersFiltered = this.customers.filter(customer => {
				return Object.values(customer).slice(1).reduce((acc, value) => {
					return acc || value.toLowerCase().includes(key)
				}, false)
			})
		}
	},

	created () {
		this.customersFiltered = [ ...this.customers ]
	},

	components: {
		appCustomer: Customer,
	}
}
</script>