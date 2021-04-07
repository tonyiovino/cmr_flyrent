<template>
	<div class="automobile" @click="$emit('clicked', data.id)">
		{{ data.marca }} - {{ data.modello }} - {{ data.targa }}
	</div>
</template>

<script>
export default {
	props: [ 'data' ]
}
</script>