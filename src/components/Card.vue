<template>
	<div class="card">
		<!-- <img> -->
		<div class="card__body">
			<h5 class="card__title">{{ data.title }}</h5>
			<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
			<router-link :to="data.path" class="btn card__btn">Apri</router-link>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'data' ]
}
</script>