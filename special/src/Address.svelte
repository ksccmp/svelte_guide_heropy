<script>
    export let address;
</script>

<ul>
    <li>
        {address.label}
        {#if address.children}
            {#each address.children as address}
                <svelte:self {address} /> <!-- Address 컴포넌트 호출과 동일, 재귀 -->
            {/each}
        {/if}
    </li>
</ul>