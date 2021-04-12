<template>
	<div class="automobili">
		<app-list
			:items="vehicles"
			:itemType="itemType"
			@item-clicked="deleteVehicle"
		></app-list>
	</div>
</template>

<script>
import List from '@/components/List.vue'
import Automobile from '@/components/Automobile.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
	
	data() {
		return {
			itemType: Automobile,
		}
	},

	methods: {
		...mapActions([
			'deleteVehicle',
		]),
		// automobileClicked (automobileId) {
		// 	alert('Click su automobile id' + automobileId)
		// }
	},

	computed: {
		...mapGetters([
			'vehicles'
		])
	},


	components: {
		appList: List,
	}
}
</script>