import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');

let a = false;

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        a = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        a = false;
    }
});

setInterval(() => {
    if (a) {
        try {
            document.getElementById("earn")?.click();
        } catch (E) {}
    }
}, 50)