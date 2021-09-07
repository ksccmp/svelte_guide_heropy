<script>
    import Neo from './Neo.svelte';
    import Emily from './Emily.svelte';
    import { getContext } from 'svelte';

    const pm = getContext('pm');
</script>

<h2>Anderson({pm})</h2>
<ul>
    <li>
        <Neo />
    </li>
    <li>
        <Emily />
    </li>
</ul>