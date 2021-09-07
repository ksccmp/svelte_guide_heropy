<svelte:head>
    <link rel="stylesheet" href="./main.css">
</svelte:head>

<!-- 열닫 태그가 아닌 빈 태그로만 가능 -->
<svelte:body on:mousemove={e => console.log(e.clientX, e.clientY)} />

<h1>Heropy!</h1>