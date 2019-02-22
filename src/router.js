import Vue from "vue";
import VueRouter from "vue-router";

import About from "./components/about";
import Contacts from './components/contacts';
import Team from './components/team/team';
import Projects from './components/projects/projects';
import Lost from './components/lost';
import Home from './components/home';
import Category from './components/category';
import Project from './components/projects/project';

Vue.use(VueRouter);

let routes = [{
        path: "/",
        name: 'home',
        component: Home
    },
    {
        path: "/about",
        name: 'about',
        component: About
    },
    {
        path: "/projects",
        name: 'projects',
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
        path: "/projects/:category",
        name: 'category',
        component: Category
    },
    {
        path: "/project/:id",
        name: 'project',
        component: Project
        
    },
    {
        path: '*',
        redirect: { path: '/',  component: Home}
    }
];
export default new VueRouter({
    mode: "history",
    routes
})