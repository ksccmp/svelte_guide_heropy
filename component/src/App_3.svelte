<script>
	import Todo from './Todo_3.svelte';

	let todos = [
		{ id: 1, title: 'Breakfast', done: false},
		{ id: 2, title: 'Lunch', done: false},
		{ id: 3, title: 'Dinner', done: false},
	];
</script>

<main>
	{#each todos as todo, index (todo.id)}
		<Todo bind:todos {todo} {index} />
	{/each}
</main>