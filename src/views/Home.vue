<template>
	<div class="home page">
		<app-list
			:gridStyle="true"
			:items="pages"
			:itemType="itemType"
		></app-list>
	</div>
</template>

<script>
import List from '@/components/List.vue'
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
		appList: List,
	}


// 	methods: {
// 		automobileClicked (automobileId) {
// 			alert('Click su automobile id' + automobileId)
// 		}
// 	},
}
</script>