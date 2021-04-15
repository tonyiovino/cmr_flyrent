<template>
	<ul class="list" :class="className">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>

<style lang="scss">
.list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;

    &--horizontal {
        flex-direction: row;
        flex-wrap: wrap;
    }

    &--grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        align-items: center;
    }
}
</style>