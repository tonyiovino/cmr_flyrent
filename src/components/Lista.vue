<template>
	<div class="lista">
		<div :class="component_box">
			<div v-for="item in items" :key="item.id">
				<component
					:is="itemType"
					:data="item"
					@clicked="itemClicked"
				></component>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'items', 'itemType', 'component_box' ],

	methods: {
		itemClicked (itemId){
			this.$emit('item-clicked', itemId)
		}
	}
}
</script>