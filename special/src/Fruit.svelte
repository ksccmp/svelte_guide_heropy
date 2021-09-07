<script>
    import { afterUpdate } from 'svelte';

    export let name;

    let updateCount = 0;

    afterUpdate(() => {
        updateCount += 1;
    })
</script>

<!-- <svelte:options immutable /> -->

<h2>{name} ({updateCount})</h2>