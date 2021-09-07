<script>
    import { createEventDispatcher } from 'svelte';
    export let todo;

    const dispatch = createEventDispatcher();

    const deleteTodo = () => {
        dispatch('deleteMe', {
            todoId: todo.id,
        });
    }
</script>

<div>
    <input type="checkbox" bind:value={todo.done} />
    {todo.title}
    <button on:click={deleteTodo}>X</button>
</div>