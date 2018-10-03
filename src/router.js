import Vue from "vue";
import VueRouter from "vue-router";

import about from "./components/about";
import contacts from './components/contacts';
import team from './components/team';
import projects from './components/projects';
// import interior from './components/interior';
// import exterior from './components/exterior';


Vue.use(VueRouter);

let routes = [
    {
        path: "/"
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/projects",
        component: projects
    },
    {
        path: "/team",
        component: team
    },
    {
        path: "/contacts",
        component: contacts
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
    