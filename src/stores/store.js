import { writable } from "svelte/store";

const storedText = localStorage.getItem('markdown-text');

export const data = writable(storedText);

data.subscribe(value => {
    localStorage.setItem("markdown-text", value);
})

