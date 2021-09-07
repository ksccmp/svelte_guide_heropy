<script>
    let age = 85;
    export let name = 'Heropy';
    export const getAge = () => {
        console.log(age);
    }
</script>

<svelte:options accessors />

<h1 on:click={getAge}>{name}!</h1>