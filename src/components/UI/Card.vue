<template>
	<div class="card" @click="$router.push(data.path)">
		<div class="card__header">
			<img :src="'https://picsum.photos/id/'+ data.id + '/200/100'">
		</div>
		<div class="card__body">
			<span class="card__body--title">{{ data.title }}</span>
			<span class="card__body--text" v-if="data.text">{{ data.text }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'data' ]
}
</script>

<style lang="scss">
.card {
	background: rgba($color-white, .6);
	color: $color-black;
	margin: 2rem;
	text-align: center;
	border-radius: 2px;
	padding-bottom: 1rem;
	min-height: 20vh;
	cursor: pointer;
	
	&:hover {
		color: $color-white;
		background-color: rgba($color-black, .6);
	}

	&__header {
		margin-bottom: 1rem;

		img {
			border-top-left-radius: 2px;
			border-top-right-radius: 2px;
		}
	}

	&__body {
		display: flex;
		flex-direction: column;
		
		
		&--title {
			font-size: 2rem;
		}
		
		&--text {
			font-size: 1.4rem;
		}
	}
}
</style>