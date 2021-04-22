<template>
	<router-link class="text-link" :to="path">
		<slot></slot>
	</router-link>
</template>

<script>
export default {
	props: [ 'path' ]
}
</script>

<style lang="scss">
.text-link {
	display: inline-block;
	font-size: 6rem;
	color: $color-black;
	text-decoration: none;


	&::after {
		content: '';
		display: block;
		margin: auto;
		height: .4rem;
		width: 0rem;
		background-color: $color-white;
		transition: all 0.15s linear;
	}

	&:hover::after {
		width: 100%;
	}
}
</style>