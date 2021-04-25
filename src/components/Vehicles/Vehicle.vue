<template>
	<div class="vehicle list-item" :class="{ 'list-item--header': isHeader }" @click="$emit('clicked', ext_data.id)">
		<span class="vehicle__data list-item__data">
			<span class="vehicle__data--brand">
				{{ ext_data.brand }}
			</span>
			<span class="vehicle__data--model">
				{{ ext_data.model }}
			</span>
			<span class="vehicle__data--license-plate">
				{{ ext_data.license_plate }}
			</span>
		</span>
		<span class="vehicle__actions list-item__actions">
			<app-btn className="btn--flat" @click="$emit('delete', ext_data.id)">&times;</app-btn>
		</span>
	</div>
</template>

<script>
export default {
	props: [ 'data' ],

	data () {
		return {
			isHeader: false,
			ext_data: this.$props.data
		}
	},

	created () {
		if (!this.data) {
			this.ext_data = {}
			this.ext_data.brand = 'Marca'
			this.ext_data.model = 'Modello'
			this.ext_data.license_plate = 'Targa'
			this.isHeader = true
		}
	}
}
</script>

<style lang="scss">
.vehicle {
}
</style>