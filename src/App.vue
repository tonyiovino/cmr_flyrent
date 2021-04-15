<template>
	<div id="app">
		<div id="app__nav">
			<router-link to="/" class="btn btn--primary">Home</router-link>
			<!-- <router-link to="/about" class="btn btn--primary">About</router-link> -->
		</div>

		<router-view/>
	</div>
</template>

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
	min-height: 95vh;
	background: linear-gradient(to bottom right, $color-primary-light, $color-secondary-light);

	position: relative;
}
</style>