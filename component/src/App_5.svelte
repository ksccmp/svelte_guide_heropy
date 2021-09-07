<script>
	import Parent from './Parent.svelte';

	const handler = (event) => {
		// const e = event.detail.e;
		// console.log(e.currentTarget);
		console.log(event.currentTarget);
	}

	const myEventHandler = (e) => {
		console.log(e.detail.myName);
	}
</script>

<main>
	<Parent 
		on:click={handler} 
		on:myEvent={myEventHandler} />
</main>