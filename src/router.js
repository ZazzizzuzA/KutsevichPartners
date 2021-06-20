import Vue from "vue";
import VueRouter from "vue-router";

import About from "./components/about";
import Contacts from './components/contacts';
import Team from './components/team/team';
import Projects from './components/projects/projects';
import Home from './components/home';
import CategoryInterior from './components/categoryInterior';
import CategoryExterior from './components/categoryExterior';
import Project from './components/projects/project';

Vue.use(VueRouter);

let routes = [{
        path: "",
        name: 'home',
        component: Home
    },
    {
        path: "/about",
        name: 'about',
        component: About
    },
    {
        path: "/projects/",
        name: 'projects',
        component: Projects
    },
    {
        path: "/team/",
        component: Team
    },
    {
        path: "/contacts/",
        component: Contacts
    },
    {
        path: "/projects/interior",
        name: 'categoryInt',
        component: CategoryInterior
    },
    {
        path: "/projects/exterior",
        name: 'categoryExt',
        component: CategoryExterior
    },
    {
        path: "/project/:id",
        name: 'project',
        component: Project
    },
    {
        path: '*',
        redirect: '/'
    }
];
export default new VueRouter({
    mode: "history",
    routes
})