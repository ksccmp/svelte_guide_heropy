<script>
	let innerHTML = '';
	let textContent = 'Hello world!';
</script>

<main>
	<div contenteditable
		 bind:innerHTML={innerHTML}
		 bind:textContent={textContent}>
	</div>

	<div>{innerHTML}</div>
	<div>{textContent}</div>
	<div>{@html innerHTML}</div>
</main>

<style>
	div {
		border: 1px solid red;
		margin-bottom: 10px;
	}
</style>