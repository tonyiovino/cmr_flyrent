<template>
	<div class="vehicle" @click="$emit('clicked', data.id)">
		{{ data.brand }} - {{ data.model }} - {{ data.license_plate }}
		<span @click.stop="$emit('action1', data.id)">&times;</span>
	</div>
</template>

<script>
export default {
	props: [ 'data' ]
}
</script>