<template>
	<div class="vehicle"  :class="{ 'vehicle--header': isHeader }" @click="$emit('clicked', ext_data.id)">
		<span class="vehicle__data">
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
		<span class="vehicle__actions">
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
	background-color: $color-secondary-dark;
	color: $color-white;
	padding: 1rem 1rem 1rem 2rem;
	font-size: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 0px;
	margin-bottom: .1rem;
	letter-spacing: 0.2rem;
	word-spacing: 0.7rem;
	cursor: pointer;

	&:hover {
		background-color: lighten($color-secondary-dark, 20%);
	}

	&--header {
		background-color: darken($color-primary-dark, 5%);
		color: $color-white;
		cursor: default;
	}

	&--header:hover {
		background-color: darken($color-primary-dark, 5%);
	}

	&--header &__actions {
		visibility: hidden;
	}

	&--header &__data {
		font-weight: 900;
	}

	&:nth-child(even) {
		background-color: darken($color-secondary-dark, 10%);
		color: $color-white;

		&:hover {
			background-color: lighten($color-secondary-dark, 20%);
		}
	}

	&__data {
		font-weight: 400;
		width: 100%;
		display: inline-grid;
		grid-template-columns: repeat(3, 1fr);
	}

	&__actions {
		color: $color-secondary-light;
		display: flex;
		justify-content: space-evenly;
		align-items: stretch;
	}
}
</style>