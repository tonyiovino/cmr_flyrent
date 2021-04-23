<template>
	<div class="page" :class="className">
		<header class="page__header">
			<slot name="header"></slot>
		</header>
		<section class="page__input">
			<slot name="input"></slot>
		</section>
		<main class="page__main">
			<slot></slot>
		</main>
	</div>
</template>

<script>
export default {
	props: [ 'className' ]
}
</script>


<style lang="scss">
.page {
	min-height: 100vh;

	&--center {
		margin: 0 auto;
		width: 60%;
	}

	&__header {

	}

	&__input {
		width: 60%;
		margin: 0 auto;
		margin-bottom: 2rem;
	}

	&__main {
		width: 60%;
		margin: 0 auto;
	}
}
</style>