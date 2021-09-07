<script>
	import { writable } from 'svelte/store';
	import Todo from './Todo.svelte';

	let title = '';
	let todos = writable([]);
	let id = 0;

	const createTodo = () => {
		if(!title.trim()) {
			return;
		}

		$todos.push({
			id,
			title,
		});
		$todos = $todos; // 반응성 주기

		id++;
		title = '';
	}
</script>

<main>
	<input type="text" 
		   bind:value={title}
		   on:keydown={(e) => {e.key === 'Enter' && createTodo()}}/>
	<button on:click={createTodo}>
		Create Todo
	</button>

	{#each $todos as todo}
		<Todo {todos} {todo} />
	{/each}
</main>