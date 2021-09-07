<script>
	import Fruits from './Fruits.svelte';
</script>

<main>
	<h2>App.svelte</h2>
	<ul class="fruits">
		<li>Apple</li>
		<li>Banana</li>
		<li>Cherry</li>
	</ul>

	<Fruits />
</main>

<style>
	:global(.fruits) {
		color: red;
	}

	:global(.heropy) {
		color: orange;
	}
</style>