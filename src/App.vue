<template>
	<div id="app">
		<app-loading-status />

		<div id="app__nav">
			<app-text-link path="/">Home</app-text-link>
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
	background: linear-gradient(to bottom right, $color-primary-light, $color-secondary-light);

	position: relative;
}
</style>