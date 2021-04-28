<template>
	<div class="loading-status" :class="{ hidden: completed }">
		<div class="loading-status__messages">
			<div class="loading-status__message">
				<span class="loading-status__message--text">Caricamento veicoli</span>
				<span class="loading-status__message--ok" :class="{'loading-status__message--ok--green': vehiclesLoaded}"></span>
			</div>
			<div class="loading-status__message">
				<span class="loading-status__message--text">Caricamento clienti</span>
				<span class="loading-status__message--ok" :class="{'loading-status__message--ok--green': customersLoaded}"></span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			//'loadingStatusNeeded',
			'vehiclesLoaded', 'customersLoaded'
		]),

		completed () {
			const result = this.vehiclesLoaded &&
				this.customersLoaded

			return result
		}
	}
}
</script>

<style lang="scss">
.loading-status {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1;
	background-color: rgba($color-black, .9);

	&__messages {
		background-color: $color-grey-light;
		line-height: 2;
		position: absolute;
		top: 20vh;
		left: 30vw;
		width: 40vw;
		font-weight: 300;
		font-size: 3rem;
		border-radius: 5px;
		padding: 3rem 5rem;

		/*
		@include respond(tab-land) {
			font-size: 2.8rem;
			padding: 3rem 4rem;
			width: 60vw;
			left: 20vw;
		}

		@include respond(tab-port) {
			font-size: 2.6rem;
			padding: 2rem 3rem;
			width: 80vw;
			left: 10vw;
		}

		@include respond(phone) {
			left: 5vw;
			width: 90vw;
			padding: 2rem;
			font-size: 2.6rem;
		}
		*/
	}

	&__message {
		display: flex;
		justify-content: space-between;
		padding: 0 1rem;
		
		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		&--ok {
			border: 1px solid $color-black;
			width: 3rem;
			height: 3rem;
			border-radius: 10rem;
			align-self: center;
			background-color: lightsalmon;

			&--green {
				background-color: lime;
			}
		}
	}
}

.hidden {
	display: none;
}
</style>