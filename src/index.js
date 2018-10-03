import "./styles/styles";
import Vue from "vue";
import router from "./router";
import templateNavigator from "./components/navigation";

let navigator = new Vue({
    el: '#navigation',
    components: {
        "navigation": templateNavigator
    },
    template: '<navigation></navigation>',
    router
});

let view = new Vue({
    el: '#app',
    router
})