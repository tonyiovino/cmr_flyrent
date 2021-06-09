<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione anagrafica</h1>
		</template>

		<app-input-customer-private v-if="type"
			:id="$route.params.id"
			@save="customerSave"
		></app-input-customer-private>

		<app-input-customer-company v-else
			:id="$route.params.id"
			@save="customerSave"
		></app-input-customer-company>
	</app-page>
</template>

<script>
import InputCustomerPrivate from '@/components/Registry/InputCustomerPrivate.vue'
import InputCustomerCompany from '@/components/Registry/InputCustomerCompany.vue'

import { mapActions } from 'vuex'

export default {

	methods: {
		...mapActions([
			'editCustomer', 'addError', 'addLogMessage'
		]),

		customerSave (customer) {
			this.editCustomer(customer)
			.then(data => {
				this.addLogMessage(data.msg)
				this.$router.push('/registry')
			})
			.catch(err => {
				this.addError(err.err)
				this.$router.push('/registry')
			})
		},

		helloTest () {
			console.log('hey')
		}
	},

	components: {
		appInputCustomerPrivate: InputCustomerPrivate,
		appInputCustomerCompany: InputCustomerCompany
	}
}
</script>