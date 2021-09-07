<script>
    import { count, double, total, initialValue } from './store_3';
</script>

<button on:click={() => {
    $count++;
}}>
    Click!
</button>

<h1>total: {$total}</h1>
<h2>count: {$count}</h2>
<h2>double: {$double}</h2>
<h2>initialValue: {$initialValue}</h2>