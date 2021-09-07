<script context="module">
    const players = new Set();

    export const stopAll = () => {
        players.forEach(p => p.pause());
    }
</script>

<script>
    import { onMount } from 'svelte';

    export let src;

    let player;

    onMount(() => {
        players.add(player);
    });
</script>

<div>
    <audio bind:this={player}
           {src}
           controls>
        <track kind="captions" />
    </audio>
</div>