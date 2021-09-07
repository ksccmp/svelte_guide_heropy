<script>
    export let block;
    export let color;
</script>

<button 
    class:block
    style="background-color: {color};
           color: {color ? 'white' : ''}">
    <slot>
        Default Button! <!-- fallback content, slot에 해당하는 데이터가 없을 경우 사용-->
    </slot>
</button>

<style>
    button {
        background: lightgray;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: .2s;
    }

    button:hover {
        text-decoration: underline;
    }

    button:active {
        transform: scale(1.05);
    }

    button.block {
        width: 100%;
        display: block;
    }
</style>