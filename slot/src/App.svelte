<script>
	import UserCard from "./UserCard.svelte";
</script>

<main>
	<UserCard>
		<h2 slot="name">HEROPY</h2>
		<div slot="age">85</div>
		<div slot="email">thesecon@gmail.com</div>
	</UserCard>

	<UserCard>
		<h2 slot="name">NEO</h2>
		<div slot="email">neo@zillinks.com</div>
	</UserCard>

	<UserCard>
		<h2 slot="name">Evan</h2>
	</UserCard>
</main>