<template>
	<div class="home">
		<h1>Questo è il client, il server verrà aggiunto in un secondo momento</h1>

		<h1>Creiamo una pagina per la gestione delle automobili</h1>

		<ul>
			<li>Gestione anagrafica</li>
			<li>Preventivi</li>
			<li>Scoring</li>
			<li>Ordini in corso</li>
			<li>Gestione contratti</li>
			<li>Modulistica</li>
			<li>Comunicazioni</li>
			<li>Note</li>
		</ul>
		<router-link to="/automobili">Automobili</router-link>
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