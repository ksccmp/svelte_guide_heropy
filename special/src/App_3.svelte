<script>
	let key = '';
	let innerWidth;
	let innerHeight;
	let outerWidth;
	let outerHeight;
	let online;
	let scrollX;
	let scrollY;

	// window.addEventListener('keydown', event => {
	// 	key = event.key;
	// });
</script>

<svelte:window on:keydown={e => key = e.key} 
			   bind:innerWidth
			   bind:innerHeight
			   bind:outerWidth
			   bind:outerHeight
			   bind:online
			   bind:scrollX
			   bind:scrollY />

<main>
	<h1>{key}</h1>
	<div>innerWidth: {innerWidth}</div>
	<div>innerHeight: {innerHeight}</div>
	<div>outerWidth: {outerWidth}</div>
	<div>outerHeight: {outerHeight}</div>
	<div>online: {online}</div>
	<input type="number" bind:value={scrollX} />
	<input type="number" bind:value={scrollY} />
	<div class="for-scroll"></div>
</main>

<style>
	.for-scroll {
		height: 2000px;
	}
</style>