<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione anagrafica</h1>
		</template>

		<template v-slot:actions>
			<app-btn v-if="isPrivate" @click="toggleType">Cliente aziendale</app-btn>
			<app-btn v-else @click="toggleType">Cliente privato</app-btn>

			<app-input-customer-private v-if="isPrivate"
				@save="customerSave"
			></app-input-customer-private>
			<app-input-customer-company v-else
				@save="customerSave"
			></app-input-customer-company>
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
import InputCustomerCompany from '@/components/Registry/InputCustomerCompany.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
	data () {
		return {
			type: 'private'
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

		isPrivate () {
			return this.type === 'private'
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

		toggleType () {
			this.type = this.type === 'private' ? 'company' : 'private' 
		}
	},

	components: {
		appCustomer: Customer,
		appInputCustomerPrivate: InputCustomerPrivate,
		appInputCustomerCompany: InputCustomerCompany
	}
}
</script>