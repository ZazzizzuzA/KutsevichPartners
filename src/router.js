import Vue from "vue";
import VueRouter from "vue-router";

import About from "./components/about";
import Contacts from './components/contacts';
import Team from './components/team';
import Projects from './components/projects';
import Lost from './components/lost';
import Home from './components/home';


// import interior from './components/interior';
// import exterior from './components/exterior';


Vue.use(VueRouter);

let routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/about",
        name: 'about',
        component: About
    },
    {
        path: "/projects/",
        component: Projects
    },
    {
        path: "/team",
        component: Team
    },
    {
        path: "/contacts",
        component: Contacts
    },
    {
        path: '*',
        component: Lost
    }
    // {
    //     path: "/interior",
    //     component: interior
    // },
    // {
    //     path: "/exterior",
    //     component: exterior
    // }


];
export default new VueRouter({
    mode: "history",
    routes
})