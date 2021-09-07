<script>
	import Heropy from "./Heropy_4.svelte";

	let toggle = false;
</script>

<main>
	<button on:click={() => toggle = !toggle}>
		Toggle!
	</button>

	{#if toggle}
		<Heropy />
	{/if}
</main>