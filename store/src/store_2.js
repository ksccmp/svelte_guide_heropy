import { readable } from 'svelte/store';

const userData = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com',
    token:' AksndkQkdna23',
}

export let user = readable(userData, (set) => {
    console.log('구독자가 1명 이상일 때');
    delete userData.token;
    set(userData);
    return () => {
        console.log('구독자가 0명일 때');
    }
});