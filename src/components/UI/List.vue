<template>
	<ul class="list" :class="className">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>

<style lang="scss">
.list {
	list-style-type: none;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: stretch;
}

.list-item {
	background-color: $color-secondary-dark;
	color: $color-white;
	padding: 1rem 1rem 1rem 2rem;
	font-size: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: lighten($color-secondary-dark, 20%);
	}

	&__data {
		font-weight: 400;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	&__actions {
		color: $color-secondary-light;
		display: flex;
		justify-content: space-evenly;
		align-items: stretch;
	}

	&:nth-child(even) {
		background-color: darken($color-secondary-dark, 10%);
		color: $color-white;

		&:hover {
			background-color: lighten($color-secondary-dark, 20%);
		}
	}

	&--header {
		background-color: darken($color-primary-dark, 5%);
		color: $color-white;
		cursor: default;

		&:hover {
			background-color: darken($color-primary-dark, 5%);
		}
	}

	&--header &__actions {
		visibility: hidden;
	}

	&--header &__data {
		font-weight: 900;
	}
}
</style>