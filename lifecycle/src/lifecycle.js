import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
import { writable } from 'svelte/store';

export const lifecycle = () => {
    onMount(() => {
        console.log('onMount');
    });
    
    onDestroy(() => {
        console.log('onDestory');
    });
    
    beforeUpdate(() => {
        console.log('beforeUpdate');
    });
    
    afterUpdate(() => {
        console.log('afterUpdate');
    });
}

export const delayRender = (delay = 3000) => {
    let render = writable(false);

    onMount(() => {
        setTimeout(() => {
            render.set(true);
        }, delay);
    });

    return render;
}