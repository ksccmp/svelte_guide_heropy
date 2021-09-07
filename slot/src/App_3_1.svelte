<script>
	import Card from "./Card.svelte";
</script>

<main>
	<Card>
		<div slot="age">85</div>
		<h2 slot="name">Heropy</h2>
		<div slot="email" 
			 let:domain 
			 let:hello>
			 thesecon{domain} / {hello}
		</div>
	</Card>
	<Card>
		<span slot="email" let:domain>neo{domain}</span>
		<h3 slot="name">Neo</h3>
	</Card>
</main>

<style>
	h3 {
		color: red;
	}
</style>