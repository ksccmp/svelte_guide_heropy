<script>
	import { onMount } from 'svelte';
	import Heropy from './Heropy_1.svelte'; // 컴포넌트를 대문자로 작성하는걸 파스칼 케이스라고 부름

	let heropy;

	onMount(() => {
		console.log(heropy);
		console.log(heropy.title);
	})
</script>

<main>
	<Heropy title="Good~" bind:this={heropy}/>
</main>