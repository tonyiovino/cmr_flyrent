<template>
	<div class="customer list-item" :class="{ 'list-item--header': isHeader }" @click="$emit('clicked', ext_data.id)">
		<span class="customer__data list-item__data">
			<span class="customer__data--name">
				{{ ext_data.name }}
			</span>
			<span class="customer__data--surname">
				{{ ext_data.surname }}
			</span>
			<span class="customer__data--born_date">
				{{ ext_data.born_date }}
			</span>
		</span>
		<span class="customer__actions list-item__actions">
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
			this.ext_data.surname = 'Cognome'
			this.ext_data.name = 'Name'
			this.ext_data.born_date = 'Data di nascita'
			this.isHeader = true
		}
	}
}
</script>

<style lang="scss">
.customer {
	// background-color: $color-secondary-dark;
	// color: $color-white;
	// padding: 1rem 1rem 1rem 2rem;
	// font-size: 2rem;
	// display: flex;
	// justify-content: space-between;
	// align-items: center;
	// border-radius: 15px;
	// margin-bottom: 1rem;
	// letter-spacing: 0.2rem;
	// word-spacing: 0.7rem;
	// cursor: pointer;

	// &__data {
	// 	font-weight: 600;

	// }

	// &__actions {
	// 	color: $color-secondary-light;
	// 	display: flex;
	// 	justify-content: space-evenly;
	// 	align-items: stretch;
	// }
}
</style>