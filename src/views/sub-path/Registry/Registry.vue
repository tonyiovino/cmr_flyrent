<template>
	<app-page>
		<h1>Gestione anagrafica</h1>
		<p>{{ cutomer }}</p>
		<app-customer>
		</app-customer>
	</app-page>
</template>

<script>
import Customer from '@/components/Registry/Customer.vue'
// import InputRegistry from '@/components/Registry/InputRegistry.vue'

import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'customer'
		])
	},

	methods: {
	},

	components: {
		appCustomerd: Customer,
	}
}
</script>