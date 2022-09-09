import './bootstrap';
import { createApp } from 'vue';


const app = createApp({});


Object.entries(import.meta.globEager("./**/*.vue")).forEach(
    ([path, definition]) => {
        app.component(
            path
                .split("/")
                .pop()
                .replace(/\.\w+$/, ""),
            definition.default
        );
    }
);
app.config.globalProperties.$filters = {};

Object.entries(import.meta.globEager("./filters/**")).forEach(
    ([path, definition]) => {
        app.config.globalProperties.$filters[
            path.split("/").pop().split(".")[0]
        ] = definition.default;
    }
);

app.mount('#app');
