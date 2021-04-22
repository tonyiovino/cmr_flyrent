<template>
	<app-page>
		<h1 class="heading-primary">Pagina Principale</h1>
		<app-list className="list--grid">
			<app-card
				v-for="page in pages"
				:key="page.id"
				:data="page"
			></app-card>
		</app-list>
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