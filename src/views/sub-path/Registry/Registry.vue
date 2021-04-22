<template>
	<app-page>
		<h1 class="heading-primary">Gestione anagrafica</h1>
		<app-input-customer
			@save="customerSave"
		></app-input-customer>
		
		<app-list>
			<app-customer v-for="customer in customers" :key="customer.id"
				:data="customer"
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
	computed: {
		...mapGetters([
			'customers'
		])
	},

	methods: {
		...mapActions([
			'deleteCustomer', 'addCustomer'
		]),

		customerDelete (customerId) {
			this.deleteCustomer(customerId)
		},

		customerSave (customer) {
			console.log(customer)
			this.addCustomer(customer)
		},
	},

	components: {
		appCustomer: Customer,
		appInputCustomer: InputCustomer
	}
}
</script>