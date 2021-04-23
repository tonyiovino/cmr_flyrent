<template>
	<div class="log-message" @click="markRead">
		{{msg.id }} - {{ msg.msg }}
		<!-- Tasto per annullare la modifica "Undo" -->
		<app-btn class="btn--undo">&crarr;</app-btn>
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
	animation: moveInRight 1s ease-out;
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	&:not(:last-child) {
		margin-bottom: 1rem;
	}
}
</style>