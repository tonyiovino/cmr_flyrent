<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione anagrafica</h1>
		</template>

		<template v-slot:input>
			<app-input-customer
				:id="$route.params.id"
				@save="customerSave"
			></app-input-customer>
		</template>
	</app-page>
</template>

<script>
import InputCustomer from '@/components/Registry/InputCustomer.vue'

import { mapActions } from 'vuex'

export default {
	components: {
		appInputCustomer: InputCustomer
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