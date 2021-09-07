<script>
	let count = 0;

	const increase = () => {
		count++;
	}

	const current = (e) => {
		console.log(e.currentTarget);
	}
</script>

<main>
	<button 
		on:click={increase}
		on:click={current}
		on:click={() => console.log('click!')}>
		Click me!
	</button>

	<h1>{count}</h1>
</main>