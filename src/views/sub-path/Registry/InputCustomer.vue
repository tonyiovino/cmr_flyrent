<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Tipo del nuovo cliente</h1>
		</template>

		<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
			<input type="radio" class="btn-check" name="private" id="private" v-model="type" value="private" autocomplete="off" checked>
			<label class="btn btn-outline-primary" for="private">Privato</label>

			<input type="radio" class="btn-check" name="company" id="company" v-model="type" value="company" autocomplete="off">
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

import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'InputCustomer',

	data () {
		return {
			type: 'private'
		}
	},

	computed: {
		...mapGetters([
			'customers'
		]),

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