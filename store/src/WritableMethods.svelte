<script>
    // import { onDestroy } from 'svelte';
    import { count, name } from './store_1';

    // console.log(count);

    // let number;
    // let userName;

    // // count값이 변화되면 실행됨
    // const unsubscribeCount = count.subscribe((c) => {
    //     number = c;
    // });
    // const unsubscribeCount2 = count.subscribe(() => {});
    // const unsubscribeName = name.subscribe((n) => {
    //     userName = n;
    // });

    // 파라미터로 현재값을 이용하여 return하면 값을 업데이트
    const increase = () => {
        // count.update(c => c+1);
        $count++;
    }

    const changeName = () => {
        // name.set('Neo');
        $name = 'Neo';
    }

    // onDestroy(() => {
    //     unsubscribeCount();
    //     unsubscribeCount2();
    //     unsubscribeName();
    // });
</script>

<button on:click={increase}
        on:click={changeName}>
    Click me!
</button>

<h2>{$count}</h2>
<h2>{$name}</h2>