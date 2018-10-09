import Vue from "vue";
import VueRouter from "vue-router";

import About from "./components/about";
import Contacts from './components/contacts';
import Team from './components/team';
import Projects from './components/projects/projects';
import Lost from './components/lost';
import Home from './components/home';
import Interior from './components/interior';
import Exterior from './components/exterior';
import Project from './components/projects/project';


Vue.use(VueRouter);

let routes = [{
        path: "/KutsevichPartners",
        component: Home
    },
    {
        path: "/KutsevichPartners/about",
        name: 'about',
        component: About
    },
    {
        path: "/KutsevichPartners/projects",
        name: 'projects',
        component: Projects
    },
    {
        path: "/KutsevichPartners/team",
        component: Team
    },
    {
        path: "/KutsevichPartners/contacts",
        component: Contacts
    },
    {
        path: '*',
        component: Lost
    },
    {
        path: "/KutsevichPartners/interior",
        component: Interior
    },
    {
        path: "/KutsevichPartners/exterior",
        component: Exterior
    },
    {
        path: "/KutsevichPartners/project/:id",
        name: 'project',
        component: Project
    }


];
export default new VueRouter({
    mode: "history",
    routes
})