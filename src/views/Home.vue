<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">qualcos'altro</h1>
		</template>

		<div class="home-grid">
			<app-card
				v-for="page in pages"
				:key="page.id"
				:data="page"
			></app-card>
		</div>
	</app-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Home',

	computed: {
		...mapGetters([
			'pages'
		])
	}
}
</script>

<style lang="scss">
.home-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	align-items: center;
}
</style>