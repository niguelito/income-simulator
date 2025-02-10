import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import BigNumber from 'bignumber.js';

createApp(App).mount('#app');

try {
    BigNumber.config({
        DECIMAL_PLACES: 40,
        RANGE: [-30, 5000]
    });
} catch (err) {
    console.error("BigNumber is being stupid");
    console.error(err);
}

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