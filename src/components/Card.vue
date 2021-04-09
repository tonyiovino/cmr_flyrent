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