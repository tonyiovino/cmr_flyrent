<template>
	<div class="vehicle" @click="$emit('clicked', data.id)">
		<span class="vehicle__data">{{ data.brand }} {{ data.model }} - {{ data.license_plate }}</span>
		<span class="vehicle__actions">
			<app-btn className="btn--flat" @click="$emit('delete', data.id)">&times;</app-btn>
		</span>
	</div>
</template>

<script>
export default {
	props: [ 'data' ]
}
</script>

<style lang="scss">
.vehicle {
    background-color: $color-secondary-dark;
    color: $color-white;
    padding: 1rem 1rem 1rem 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    margin-bottom: 1rem;

    &__data {

    }

    &__actions {
        color: $color-secondary-light;
        display: flex;
        justify-content: space-evenly;
        align-items: stretch;
    }
}
</style>