<script>
    export let todo;
    export let todos;
    
    let isEdit = false;
    let title = todo.title;

    const onEdit = () => {
        isEdit = true;
    }

    const offEdit = () => {
        isEdit = false;
    }

    const updateTodo = () => {
        todo.title = title;
        offEdit();
    }

    const deleteTodo = () => {
        $todos = $todos.filter(t => t.id !== todo.id);
    }
</script>

<main>
    {#if isEdit }
        <div>
            <input type='text' bind:value={title} on:keydown={(e) => {e.key === 'Enter' && updateTodo()}} />
            <button on:click={updateTodo}>
                OK
            </button>
            <button on:click={offEdit}>
                Cancle
            </button>
        </div>
    {:else}
        <div>
            {todo.title}
            <button on:click={onEdit}>
                Edit
            </button>
            <button on:click={deleteTodo}>
                Delete
            </button>
        </div>
    {/if}
</main>