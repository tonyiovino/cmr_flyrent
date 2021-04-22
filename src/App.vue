<template>
	<div id="app">
		<app-loading-status />
		<app-errors />

		<div id="app__nav">
			<app-text-link class="text-link--icon" path="/"><img id="app__icon" src="/img/icon-flyrent.png" alt="Error"></app-text-link>
			<!-- <router-link to="/about" class="btn btn--primary">About</router-link> -->
		</div>

		<router-view/>
	</div>
</template>

<script>
import LoadingStatus from './components/TheLoadingStatus.vue'

import { mapActions } from 'vuex'

export default {
	methods: {
		...mapActions([
			'loadInitialData'
		])
	},

	created () {
		this.loadInitialData()
	},

	components: {
		appLoadingStatus: LoadingStatus
	}
}
</script>

<style lang="scss">
*,
*::before,
*::after {
	margin: 0;
	padding: 0;

	box-sizing: inherit;
}

html {
	font-size: 62.5%;
}

body {
	box-sizing: border-box;
}

#app {
	min-height: 100vh;
	background-color: $color-grey-light;
	background-image: linear-gradient(to bottom, rgba($color-primary-light, 0.8), rgba($color-secondary-light, 0.8));


	position: relative;

	&__nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 2rem 4rem;
		position: absolute;

		animation: moveInTop 1s ease-out;
	}

	&__icon {
		width: 12vw;
	}
}
</style>