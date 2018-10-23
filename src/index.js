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

// Smooth scrolling to the top

let toTop = document.getElementById('ScrollTop'),
    position,
    timer;

window.onwheel = function() {

    position = window.pageYOffset;
    if (position >= 600) {
        toTop.style.display = "block";
        setTimeout( () => {
            toTop.style.opacity = 0.6;
            toTop.style.cursor = "pointer";
        }, 100)

        
        toTop.onmouseover = () => {
            toTop.style.opacity = 0.9;
        }
        toTop.onmouseleave = () => {
            toTop.style.opacity = 0.6;
        }
    }
    if (position < 600) {
        toTop.style.opacity = 0;
        toTop.style.cursor = "default";
        setTimeout( () => {
            if (position < 600) {
                toTop.style.display = "none";
            }
        }, 1000);
        
    }
};
window.addEventListener("keyup", keyEnd);

function keyEnd() {
    if (event.keyCode == 35) {
        position = window.pageYOffset;
        toTop.style.opacity = 0.6;
        toTop.style.cursor = "pointer";
        
        toTop.onmouseover = () => {
            toTop.style.opacity = 0.9;
        }
        toTop.onmouseleave = () => {
            toTop.style.opacity = 0.6;
        }
        
    }
}
toTop.onclick = function back() {

    toTop.style.opacity = 0;
    toTop.style.display = "none";
    toTop.style.cursor = "default";

    if (position > 0) {

        window.scrollTo(0, position);
        position = position - 50;
        timer = setTimeout(back, 10);


    } else if (position <= 0) {

        window.scrollTo(0, position);
        setTimeout( () => toTop.style.display = "none", 1000);
        clearTimeout(timer);

    }
}
