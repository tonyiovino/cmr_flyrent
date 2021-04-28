<template>
	<app-list-item :isHeader="isHeader" @click="$emit('clicked', ext_data.id)">
		<template v-slot:data>
			<span class="customer__data">
				{{ ext_data.surname }}
			</span>
			<span class="customer__data">
				{{ ext_data.name }}
			</span>
			<span class="customer__data">
				{{ ext_data.born_date }}
			</span>
		</template>
		<template v-slot:actions>
			<app-btn className="btn--flat" @click="$emit('delete', ext_data.id)">&times;</app-btn>
		</template>
	</app-list-item>
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
			this.ext_data.surname = 'Cognome'
			this.ext_data.name = 'Nome'
			this.ext_data.born_date = 'Data di nascita'
			this.isHeader = true
		}
	}
}
</script>

<style lang="scss">
.customer {
}
</style>