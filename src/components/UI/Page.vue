<template>
	<div class="page" :class="className">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>


<style lang="scss">
.page {
	min-height: 100vh;

	&--center {
		margin: 0 auto;
		width: 60%;
	}
}
</style>