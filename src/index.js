import "./styles/styles";
import Vue from "vue";
import router from "./router";
import navigation from "./components/navigation";
import downBlock from "./components/footer";

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
    router
}).$mount('#app');

let blockFooter = new Vue({
    el: "#footer",
    components: {
        downBlock
    },
    template: '<downBlock></downBlock>',
});
