<script>
	import WritableMethods from "./WritableMethods.svelte";

	let toggle = true;
</script>

<main>
	<button on:click={() => toggle = !toggle}>
		Toggle
	</button>

	{#if toggle}
		<WritableMethods />
	{/if}
</main>