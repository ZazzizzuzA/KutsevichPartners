import "./styles/styles";
import Vue from "vue";
import router from "./router";
import navigation from "./components/navigation";

import 'owl.carousel';

// Настройки Vue-компонентов

let navigator = new Vue({
    el: '#navigation',
    components: {
        navigation
    },
    template: '<navigation></navigation>',
    router
});

let view = new Vue({
    el: '#app',
    router
})

