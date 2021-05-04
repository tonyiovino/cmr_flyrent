<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Gestione anagrafica</h1>
		</template>

		<template v-slot:input>
			<div class="btn--add__box">
				<app-btn class="btn--add" @click="show=!show" v-if="!show">+</app-btn>
				<app-btn class="btn--add" @click="show=!show" v-else>-</app-btn>
			</div>
			<app-input-customer v-show="show"
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
			show: false
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
	},

	components: {
		appCustomer: Customer,
		appInputCustomer: InputCustomer
	}
}
</script>