<template>
	<div class="vehicle" @click="$emit('clicked', data.id)">
		<span class="vehicle__data">{{ data.brand }} - {{ data.model }} - {{ data.license_plate }}</span>
		<span class="vehicle__actions" @click.stop="$emit('action1', data.id)">&times;</span>
	</div>
</template>

<script>
export default {
	props: [ 'data' ]
}
</script>