<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Tipo del nuovo cliente</h1>
		</template>
		
		<div class="input_customer">
			<!-- 2 pulsanti switch che mostrano l'input per il cliente privato, oppure aziendale -->
			<app-input-customer-private
				@save="customerSave"
			></app-input-customer-private>
			<app-input-customer-company
				@save="customerSave"
			></app-input-customer-company>
		</div>
	</app-page>
</template>

<script>
import InputCustomerCompany from '@/components/Registry/InputCustomerCompany.vue'
import InputCustomerPrivate from '@/components/Registry/InputCustomerPrivate.vue'

export default {
	name: 'Input Customer',

	component : {
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