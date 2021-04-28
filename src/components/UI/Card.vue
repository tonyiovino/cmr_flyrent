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
	background: $color-primary;
	color: $color-white;
	margin: 0 2rem 2rem;
	border-radius: 2px;
	padding-bottom: 1rem;
	cursor: pointer;
	transition: all .2s;

	animation: moveInLeft 1s ease-out;
	
	&:hover {
		color: $color-white;
		background-color: $color-secondary;

		box-shadow: 0 1rem 2rem rgba($color-black, .8);
		transform: translateY(-4px);
	}

	&:active {
		box-shadow: 0 .5rem 1rem rgba($color-black, .8);
		transform: translateY(-1px);
	}

	&__header {
		margin-bottom: 1rem;

		img {
			border-top-left-radius: 2px;
			border-top-right-radius: 2px;
			width: 100%;
		}
	}

	&__body {
		display: flex;
		flex-direction: column;
		padding-left: 1rem;
		padding-right: 1rem;
		
		&--title {
			font-size: 2.4rem;
			text-align: center;
		}
		
		&--text {
			font-size: 1.8rem;
			text-align: center;
		}
	}
}
</style>