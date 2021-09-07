<script>
	import TextField from "./TextField.svelte";

	let id = '';
	let pw = '';
</script>

<main>
	<TextField 
		bind:value={id} 
		color="yellowgreen"
		type="email"
		placeholder="ID!"
		maxlength="10"
		required />
	<TextField 
		bind:value={pw}
		color="red"
		type="password"
		placeholder="PW!"
		required />
</main>