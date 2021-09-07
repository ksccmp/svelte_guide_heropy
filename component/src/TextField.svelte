<script>
    export let value;
    export let color;

    // $$props => 전체
    // $$restProps => export로 받은 것 제외하고 전체
</script>

<div class="my-custom-input">
    <input 
        bind:value 
        style="color: {color};" 
        {...$$restProps} />
</div>

<style>
    .my-custom-input input {
        border-radius: 100px;
        padding: 10px 20px;
    }
</style>