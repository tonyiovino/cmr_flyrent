<template>
	<ul class="lista">
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
	props: [ 'items', 'itemType' ],

	methods: {
		itemClicked (itemId){
			this.$emit('item-clicked', itemId)
		}
	}
}
</script>