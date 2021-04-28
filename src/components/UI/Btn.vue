<template>
	<button class="btn" :class="className" @click.stop="$emit('click')">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>

<style lang="scss">
.btn {
	background-color: $color-primary-dark;
	border: none;
	color: $color-white;
	font-size: 3rem;
	border-radius: 12px;
	// font-size: 2rem;
	// border-radius: 10rem;
	padding: 1rem 3rem;
	cursor: pointer;
	margin: 1rem;

	&:hover {
		background-color: $color-primary;
		box-shadow: 0 1rem 2rem rgba($color-black, .8);
	}

	&:active {
		box-shadow: 0 .5rem 1rem rgba($color-black, .8);
	}

	&--flat {
		background-color: transparent;
		margin-top: 0;
		margin-bottom: 0;
	}

	&--primary {
		background-color: $color-primary-dark;
	}

	&--secondary {
		background-color: $color-secondary;
	}

	&--undo {
		font-size: 4rem;
		background-color: transparent;
		margin: 2rem;
		padding: 0;

		&:hover {
			background-color: transparent;
			box-shadow: none;
			color: $color-primary;
		}
		
		&:active {
			color: $color-secondary;
			box-shadow: none;
		}
	}
}
</style>