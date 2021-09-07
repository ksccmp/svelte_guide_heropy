<script>
	let fruits = [
		{ id: 1, name: 'Apple' },
		{ id: 2, name: 'Banana' },
		{ id: 3, name: 'Cherry' },
	];

	const assign = (fruit) => {
		fruit.name += '!';
		fruits = fruits;
	}
</script>

<main>
	<section>
		{#each fruits as fruit (fruit.id)}
			<div on:click={() => assign(fruit)}>
				{fruit.name}
			</div>
		{/each}
	</section>

	<!-- 인라인에선 반응성 코드 필요 X -->
	<section>
		{#each fruits as fruit (fruit.id)}
			<div on:click={() => fruit.name += '!'}>
				{fruit.name}
			</div>
		{/each}
	</section>

	<section>
		{#each fruits as {id, name} (id)}
			<div on:click={() => name += '!'}>
				{name}
			</div>
		{/each}
	</section>
</main>

<style>
	section {
		border: 1px solid orange;
		margin-bottom: 10px;
		padding: 10px;
		font-size: 1.8em;
		font-weight: 600;
	}
</style>