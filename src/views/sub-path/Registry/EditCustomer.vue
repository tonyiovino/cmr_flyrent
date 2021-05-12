<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione anagrafica</h1>
		</template>

		<template v-slot:input>
			<app-input-customer-private
				:id="$route.params.id"
				@save="customerSave"
			></app-input-customer-private>
		</template>
	</app-page>
</template>

<script>
import InputCustomerPrivate from '@/components/Registry/InputCustomerPrivate.vue'

import { mapActions } from 'vuex'

export default {
	components: {
		appInputCustomerPrivate: InputCustomerPrivate
	},

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
		}
	}
}
</script>