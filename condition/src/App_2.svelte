<script>
	// let fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
	let fruits = [
		{ id: '1', name: 'Apple'},
		{ id: '2', name: 'Banana'},
		{ id: '3', name: 'Cherry'},
		{ id: '4', name: 'Apple'},
	];

	const deleteFirst = () => {
		fruits = fruits.slice(1);
	}
</script>

<main>
	<button on:click={deleteFirst}>
		Delete first fruit!
	</button>

	<ul>
		{#each fruits as fruit (fruit.id)}
			<li>{fruit.name}</li>
		{/each}
	</ul>
</main>