<!-- 
<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<h2>Parent!</h2>
<button on:click={e => dispatch('click', {e: e})}>
    Parent click!
</button> 
-->

<script>
    import Child from './Child.svelte';
</script>

<h2>Parent!</h2>
<button on:click>
    Parent click!
</button> 

<Child on:myEvent />