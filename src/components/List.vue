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