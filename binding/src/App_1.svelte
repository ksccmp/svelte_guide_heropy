<script>
import { tick } from "svelte";


	let isShow = false;
	let inputEl;

	const toggle = async () => {
		isShow = !isShow;
		await tick();

		// const inputEl = document.querySelector('input');
		inputEl && inputEl.focus();
	}
</script>

<main>
	<button on:click={toggle}>Edit!</button>
	{#if isShow}
		<input bind:this={inputEl}/>
	{/if}
</main>