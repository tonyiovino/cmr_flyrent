<template>
	<app-list-item :isHeader="isHeader" @click="$emit('clicked', ext_data.id)">
		<template v-slot:data>
			<span class="customer__data">
				{{ ext_data.name}} {{ext_data.surname }}
			</span>
			<span class="customer__data">
				{{ ext_data.iva_cf }}
				{{ ext_data.iva }}
				{{ ext_data.fiscal_code }}
			</span>
			<span class="customer__data">
				{{ ext_data.email }}
			</span>
			<span class="customer__data">
				{{ ext_data.tel }}
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
			this.ext_data.name = 'Cliente'
			this.ext_data.iva_cf = 'P.Iva/C.F.'
			this.ext_data.email = 'Email'
			this.ext_data.tel = 'Tel.'
			this.isHeader = true
		}
	}
}
</script>

<style lang="scss">
.customer {
	&__data{
		text-align: center;
	}
}
</style>