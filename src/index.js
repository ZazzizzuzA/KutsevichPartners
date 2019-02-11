import "./styles/styles";
import Vue from "vue";
import router from "./router";
import navigation from "./components/navigation";
import downBlock from "./components/footer";
import VueFire from 'vuefire';
import { initializeApp, firebase } from 'firebase';
import environment from './environment/environment';
import 'owl.carousel';

// Настройки Vue-компонентов

Vue.use(VueFire);

// получение данных с базы данных firebase

// teammates.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });

let navigator = new Vue({
    el: '#navigation',
    components: {
        navigation
    },
    template: '<navigation></navigation>',
    router
});

let view = new Vue({
    router,
    firebase: {
        // simple syntax, bind as an array by default
        // anArray: db.ref('url/to/my/collection'),
        // can also bind to a query
        // anArray: db.ref('url/to/my/collection').limitToLast(25)
        // full syntax
    //     anObject: {
    //       source: db.ref(environment.config),
    //       // optionally bind as an object
    //       asObject: true,
    //       // optionally provide the cancelCallback
    //       cancelCallback: function () {},
    //       // this is called once the data has been retrieved from firebase
    //       readyCallback: function () {}
    //     }
    }
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
