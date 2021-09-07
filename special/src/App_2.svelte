<script>
	import Heropy from "./Heropy_2.svelte";
	import Neo from "./Neo.svelte";

	let components = [
		{ name: 'Heropy', comp: Heropy },
		{ name: 'Neo', comp: Neo },
	]

	let index = 1;
	let selected = components[0].comp;
</script>

<main>
	{#each components as {name, comp}, i (name)}
		<label>
			<input type="radio"
				   value={comp}
				   bind:group={selected}
				   on:change={() => index = i+1} />
			{name}
		</label>
	{/each}

	<svelte:component this={selected} {index} />

	<!-- {#if selected === 'Heropy'}
		<Heropy />
	{:else if selected === 'Neo'}
		<Neo />
	{/if} -->
</main>