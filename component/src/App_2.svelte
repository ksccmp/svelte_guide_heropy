<script>
	import User from './User.svelte';

	let users = [
		{
			name: 'Neo',
			age: 85,
			email: 'neo@abc.com',
		},
		{
			name: 'Lewis',
			age: 30,
			email: 'lewis@abc.com',
		},
		{
			name: 'Evan',
			age: 852,
		},
	];
</script>

<main>
	<section>
		{#each users as user}
			<User
				name={user.name}
				age={user.age}
				email={user.email}
			/>
		{/each}
	</section>

	<section>
		{#each users as {name, age, email}}
			<User {name} {age} {email} />
		{/each}
	</section>

	<section>
		{#each users as user}
			<User {...user} />
		{/each}
	</section>
</main>

<style>
	section {
		border: 1px solid orange;
		margin-bottom: 10px;
	}
</style>