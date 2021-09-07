<script>
	import Heropy from "./Heropy.svelte";

	let heropy;

	const handler = () => {
		console.log(heropy);
		console.log(heropy.name);
		console.log(heropy.getAge());
	}
</script>

<main>
	<button on:click={handler}>
		Toggle!
	</button>

	<Heropy bind:this={heropy} />
</main>