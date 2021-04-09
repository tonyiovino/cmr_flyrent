<template>
	<ul class="list" :class="{ 'list--horizontal': horizontalStyle }">
		<li v-for="item in items" :key="item.id">
			<component
				:is="itemType"
				:data="item"
				@clicked="itemClicked"
			></component>
		</li>
	</ul>
</template>

<script>
export default {
	props: [ 'items', 'itemType', 'horizontalStyle' ],

	methods: {
		itemClicked (itemId){
			this.$emit('item-clicked', itemId)
		}
	}
}
</script>