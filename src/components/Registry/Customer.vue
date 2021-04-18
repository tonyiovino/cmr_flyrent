<template>
	<div class="customer" @click="$emit('clicked', data.id)">
		<span class="customer__data">{{ data.id }}) {{ data.surname }} {{ data.name }}</span>
		<span class="customer__actions">
			<!-- Non funziona il click di app-btn. Non funziona neanche per le auto (deleteVehicle). -->
			<!-- <app-btn className="btn--flat" @click="console.log('test')">&times;</app-btn> -->
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
.customer {
    background-color: $color-secondary-dark;
    color: $color-white;
    padding: 1rem 1rem 1rem 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    margin-bottom: 1rem;
	letter-spacing: 0.2rem;
	word-spacing: 0.7rem;

    &__data {
        font-weight: 600;
		justify-content: space-between;
    }

    &__actions {
        color: $color-secondary-light;
        display: flex;
        justify-content: space-evenly;
        align-items: stretch;
    }
}
</style>