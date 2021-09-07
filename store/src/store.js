import { writable, readable, derived, get } from 'svelte/store';

export let count = writable(1);
export let double = derived(count, $count => $count*2);
export let user = readable({
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com',
});

console.log(get(count));
console.log(get(double));
console.log(get(user));