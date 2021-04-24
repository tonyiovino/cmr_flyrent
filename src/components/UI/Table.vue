<template>
	<table class="table" :class="className">
		<slot></slot>
	</table>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>

<style lang="scss">

</style>