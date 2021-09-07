<script>
	let name = 'Heropy';
	let index = 0;
</script>

<main>
	{@debug index, name}
	<h1 on:click={() => {index++;}}>Hello {name}!</h1>
</main>