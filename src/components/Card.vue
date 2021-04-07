<template>
	<div class="card">
		<!-- <img> -->
		<span>{{text}}</span>
	</div>
</template>

<script>
export default {
	props: [
		'path',
		'text',
	]
}
</script>