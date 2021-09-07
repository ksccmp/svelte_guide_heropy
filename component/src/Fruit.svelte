<script context="module">
    // 반응성 불가
    export let count = 0;
    console.log('Module context!');
</script>

<script>
    export let fruit;
    console.log('Each component init!');
</script>

<div on:click={() => {
    count++;
    // console.log(count);
}}>
    {fruit}
</div>