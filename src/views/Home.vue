<template>
	<div class="home">
		<div class="cards-box">
			<app-lista
				:items="pages"
				:itemType="itemType"
			></app-lista>
			<!-- <app-card
				title="Scoring"
				link="/scoring"
			></app-card>
			<app-card
				title="Ordini in corso"
				link="/ordini"
			></app-card>
			<app-card
				title="Gestione contratti"
				link="/contratti"
			></app-card>

			<app-card
				title="Modulistica"
				link="/modulistica"
			></app-card>
			<app-card
				title="Comunicazioni"
				link="/comunicazioni"
			></app-card>
			<app-card
				title="Note"
				link="/note"
			></app-card>	-->
		</div>
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
			itemType: Card
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