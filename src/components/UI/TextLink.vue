<template>
    <router-link class="text-link" :to="path">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: [ 'path' ]
}
</script>

<style lang="scss">
.text-link {
    text-decoration: none;
	color: $color-primary-dark;
    font-size: 2rem;
    border-bottom: 1px solid $color-primary-dark;
    display: inline-block;
    padding-bottom: .25rem;
}
</style>