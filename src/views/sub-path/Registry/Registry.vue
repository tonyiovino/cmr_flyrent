<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione anagrafica</h1>
		</template>

		<template v-slot:input>
			<app-input-customer-private
				@save="customerSave"
			></app-input-customer-private>
		</template>
		<div class="actions-cards">
			<app-text-link path="/input_customer">Aggiungi cliente</app-text-link>
		</div>

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
import InputCustomerPrivate from '@/components/Registry/InputCustomerPrivate.vue'

import { mapGetters, mapActions } from 'vuex'

export default {

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
		}
	},

	methods: {
		...mapActions([
			'deleteCustomer', 'addCustomer', 'addError', 'addLogMessage'
		]),

		customerClicked (customerId) {
			this.$router.push('/registry/' + customerId)
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
	},

	components: {
		appCustomer: Customer,
		appInputCustomerPrivate: InputCustomerPrivate
	}
}
</script>