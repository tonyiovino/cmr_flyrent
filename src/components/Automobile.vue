<template>
	<div class="automobile" @click="$emit('clicked', data.id)">
		{{ data.brand }} - {{ data.model }} - {{ data.license_plate }}
	</div>
</template>

<script>
export default {
	props: [ 'data' ]
}
</script>