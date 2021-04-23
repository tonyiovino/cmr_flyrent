<template>
	<div class="log-message" @click="markRead">
		{{msg.id }} - {{ msg.msg }}
	</div>
</template>

<script>
export default {
	props: [ 'msg' ],

	methods: {
		markRead () {
			this.$emit('read', this.msg.id)
		}
	}
}
</script>

<style lang="scss">
.log-message {
	font-size: 2rem;
	color: $color-white;
	background-color: $color-primary;
	padding: 1rem;
	cursor: pointer;
	animation: moveInRight 1s ease-out;

	&:not(:last-child) {
		margin-bottom: 1rem;
	}
}
</style>