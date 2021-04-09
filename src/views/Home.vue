<template>
	<div class="home">
		<app-lista
			component_box="cards-box"
			:items="pages"
			:itemType="itemType"
		></app-lista>
	</div>
</template>

<script>
// @ is an alias to /src
import Lista from '@/components/Lista.vue'
import Card from '@/components/Card.vue'

import { mapGetters } from 'vuex'

export default {

	name: 'Home',

	data() {
		return {
			itemType: Card,
		}
	},

	computed: {
		...mapGetters([
			'pages'
		])
	},

	components: {
		appLista: Lista,
	}


// 	methods: {
// 		automobileClicked (automobileId) {
// 			alert('Click su automobile id' + automobileId)
// 		}
// 	},
}
</script>