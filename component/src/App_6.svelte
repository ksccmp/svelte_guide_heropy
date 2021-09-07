<script>
	import Heropy from './Heropy.svelte';
	import Lewis from './Lewis.svelte';
	import Evan from './Evan.svelte';
    import { getContext } from 'svelte';

    const pm = getContext('pm');
</script>

<main>
	<h1>App({pm})</h1>
	<div>
		<Heropy />
		<Lewis />
		<Evan />
	</div>
</main>

<style>
	h1 {
		font-size: 50px;
	}

	div {
		padding-left: 50px;
	}
</style>