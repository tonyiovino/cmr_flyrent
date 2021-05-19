<template>
	<app-page>
		<template v-slot:header>
			<h1 class="heading-primary">Tipo del nuovo cliente</h1>
		</template>

		<div class="choose-type">
			<app-card
				className="choose-type__card"
				v-for="sub_page in sub_pages"
				:key="sub_page.id"
				:data="sub_page"
			></app-card>
		</div>
	</app-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Choose Type Customer',

	computed: {
		...mapGetters([
			'sub_pages'
		])
	}
}
</script>

<style lang="scss">
.choose-type {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin-top: 10rem;

	&__card {
		width: 20vw;
	}
}
</style>