<script>
	import { tick } from 'svelte';

	let name = 'world';

	const handler = async () => {
		name = 'Heropy';
		await tick();
		
		const h1 = document.querySelector('h1');
		console.log(h1.innerText);
	}
</script>

<main>
	<h1 on:click={handler}>Hello {name}!</h1>
</main>