<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Tipo del nuovo cliente</h1>
		</template>

		<!-- 2 pulsanti switch che mostrano l'input per il cliente privato, oppure aziendale -->
		<!-- <app-btn v-if="isPrivate" @click="toggleType">Cliente aziendale</app-btn>
		<app-btn v-else @click="toggleType">Cliente privato</app-btn> -->
		<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
			<input type="radio" class="btn-check" name="private" id="private" autocomplete="off" checked>
			<label class="btn btn-outline-primary" for="private">Privato</label>

			<input type="radio" class="btn-check" name="company" id="company" autocomplete="off">
			<label class="btn btn-outline-primary" for="company">Aziendale</label>
		</div>

		<div class="input_customer">
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
	name: 'InputCustomer',

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
			'addCustomer', 'addError', 'addLogMessage'
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

	components: {
		appInputCustomerCompany: InputCustomerCompany,
		appInputCustomerPrivate: InputCustomerPrivate
	}
}
</script>

<style lang="scss">
.input_customer {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-top: 10rem;

	&__card {
		width: 20vw;
	}
}
</style>