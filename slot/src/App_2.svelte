<script>
	import Card from "./Card_2.svelte";
</script>

<main>
	<Card>
		<div slot="age">85</div>
		<h2 slot="name">Heropy</h2>
		<div slot="email">thesecon@gmail.com</div>
	</Card>
	<Card>
		<span slot="email">neo@abc.com</span>
		<h3 slot="name">Neo</h3>
	</Card>
</main>

<style>
	h3 {
		color: red;
	}
</style>