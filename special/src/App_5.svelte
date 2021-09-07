<script>
	import Fruit from "./Fruit.svelte";

	let fruits = [
		{ id: 1, name: 'Apple' },
		{ id: 2, name: 'Banana' },
		{ id: 3, name: 'Cherry' },
		{ id: 4, name: 'Mango' },
		{ id: 5, name: 'Orange' },
	]
</script>

<main>
	<button on:click={() => {
		fruits[0] = { id: 1, name: 'Apple' }
		fruits = fruits;
	}}>
		Update!
	</button>

	{#each fruits as {id, name} (id)}
		<Fruit {name} />
	{/each}
</main>