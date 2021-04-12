<template>
	<div class="home page">
		<app-list className="list--grid">
			<app-card
				v-for="page in pages"
				:key="page.id"
				:data="page"
			></app-card>
		</app-list>
	</div>
</template>

<script>
import List from '@/components/List.vue'
import Card from '@/components/Card.vue'

import { mapGetters } from 'vuex'

export default {
	name: 'Home',

	computed: {
		...mapGetters([
			'pages'
		])
	},

	components: {
		appList: List,
		appCard: Card
	}
}
</script>