<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Tipo del nuovo cliente</h1>
		</template>

		<div class="input_customer">
			<!-- 2 pulsanti switch che mostrano l'input per il cliente privato, oppure aziendale -->
			<app-btn v-if="isPrivate" @click="toggleType">Cliente aziendale</app-btn>
			<app-btn v-else @click="toggleType">Cliente privato</app-btn>

			<app-input-customer-private v-if="isPrivate"
				@save="customerSave"
			></app-input-customer-private>
			<app-input-customer-company v-else
				@save="customerSave"
			></app-input-customer-company>
		</div>
	</app-page>
</template>

<script>
import InputCustomerCompany from '@/components/Registry/InputCustomerCompany.vue'
import InputCustomerPrivate from '@/components/Registry/InputCustomerPrivate.vue'

import { mapActions } from 'vuex'

export default {
	name: 'Input Customer',

	data () {
		return {
			type: 'private'
		}
	},

	computed: {
		isPrivate () {
			return this.type === 'private'
		}
	},

	methods: {
		...mapActions([
			'addCustomer',
		]),

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

	component: {
		appInputCustomerCompany: InputCustomerCompany,
		appInputCustomerPrivate: InputCustomerPrivate
	}
}
</script>

<style lang="scss">
.input_customer {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin-top: 10rem;

	&__card {
		width: 20vw;
	}
}
</style>