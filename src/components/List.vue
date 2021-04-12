<template>
	<ul class="list" :class="{ 'list--horizontal': horizontalStyle, 'list--grid': gridStyle }">
		<li v-for="item in items" :key="item.id">
			<component
				:is="itemType"
				:data="item"
				@clicked="itemClicked"
				@action1="action1"
			></component>
		</li>
	</ul>
</template>

<script>
export default {
	props: [ 'items', 'itemType', 'horizontalStyle', 'gridStyle' ],

	methods: {
		itemClicked (itemId){
			this.$emit('item-clicked', itemId)
		},

		action1 (itemId) {
			this.$emit('action1', itemId)
		}
	}
}
</script>