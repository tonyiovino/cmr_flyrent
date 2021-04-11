<template>
	<div class="vehicle" @click="$emit('clicked', data.id)">
		<span class="vehicle__data">{{ data.brand }} {{ data.model }} - {{ data.license_plate }}</span>
		<span class="vehicle__actions">
			<button class="btn btn--flat" @click.stop="$emit('action1', data.id)">&times;</button>
		</span>
	</div>
</template>

<script>
export default {
	props: [ 'data' ]
}
</script>