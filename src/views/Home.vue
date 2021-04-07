<template>
	<div class="home">
		<ul class="unorder-list">
			<li class="list card">
				<router-link to="/anagrafica" class="link">Gestione anagrafica</router-link>
			</li>
			<li class="list card">
				<router-link to="/preventivi" class="link">Preventivi</router-link>
			</li>
			<li class="list card">
				<router-link to="/scoring" class="link">Scoring</router-link>
			</li>
			<li class="list card">
				<router-link to="/ordini" class="link">Ordini in corso</router-link>
			</li>
			<li class="list card">
				<router-link to="/contratti" class="link">Gestione contratti</router-link>
			</li>
			<li class="list card">
				<router-link to="/modulistica" class="link">Modulistica</router-link>
			</li>
			<li class="list card">
				<router-link to="/comunicazioni" class="link">Comunicazioni</router-link>
			</li>
			<li class="list card">
				<router-link to="/note" class="link">Note</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	components: {
	}
}
</script>