<template>
    <article id="app">
        <div class="menuColour" :class="background">
            <NavMenu />

            <router-view :class="page"></router-view>
        </div>
    </article>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

// import $ from 'jquery'
// import jQuery from 'jquery'

import 'imperavi-kube'
import 'imperavi-kube/dist/js/kube.js'

import NavMenu from './components/NavMenu.vue'
import Home from './components/Home.vue'
import Work from './components/Work.vue'
import OpenSource from './components/OpenSource.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home, name: 'home', props: true },
      { path: '/work', component: Work, name: 'work', props: true },
      { path: '/open-source', component: OpenSource, name: 'open-source', props: true },
      { path: '/about', component: About, name: 'about', props: true },
      { path: '/contact', component: Contact, name: 'contact', props: true }
    ]
})

export default {
    name: 'app',
    router: router,
    components: {
        NavMenu
    },
    data: function () {
        return {
            h1: 'Andre OBrien <strong>Web Developer</strong>',
            mobileNav: false,
            body: $('body')
        }
    },
    computed: {
        page: function () {
          return this.$route.name
        },
        background: function () {
            this.body.removeClass()
            this.body.addClass(this.$route.name + 'Colour')
            return this.$route.name + 'Colour';
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.input = e.target.value
        }, 300),
    }
}
</script>

<style>
/* @font-face {
    font-family: 'Open Sans';
    src:  url('./assets/fonts/Open_Sans/OpenSans-bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
} */
.heading-3 {
    font-size: 48px;
}
/* BLOILERPLATE */
* {
    font-family: 'Open Sans', sans-serif !important;
}

body {
    -webkit-font-smoothing: antialiased;
    /* background-color: #1976D2; */
}

.menuColour {
    transition: 2s;
}

.close {
    cursor: pointer;
}

a {
    text-decoration: none;
    cursor: pointer;
}

a:hover {
    text-decoration: none;
}

.hide {
    display: none;
}

@media only screen and (max-width: 768px) {
    .mobile-hide {
        display: none;
    }
}

@media only screen and (min-width: 1024px) {
    .desktop-hide {
        display: none;
    }
}

/* GRID */
.flex-grid {
    display: flex;
    flex-wrap: wrap;
}

.col-3,
.flex-col-3 {
    flex: 3;
}

.col-4,
.flex-col-4 {
    width: 32%;
    width: calc(33.33% - 1rem);
    margin: 0.5rem 0;
}

.col-6,
.flex-col-6 {
    width: 49.5%;
    width: calc(50% - 0.5rem) !important;
    margin: 0.25rem 0;
}

.col-9,
.flex-col-9 {
    flex: 9;
}

.col-12,
.flex-col-12 {
    flex: 12;
}

.space-between {
    justify-content: space-between;
}

.vertial-align {
    align-items: center;
}

@media only screen and (max-width: 1023px) {
    .col-6,
    .flex-col-6 {
        width: 100% !important;
    }
}

/* home */
.home {
    display: flex;
}

.home>div {
    width: 100%;
    z-index: 10;
}

/* LAYOUT */
#app {
    transition: 2s;
}

/* Sections */
article {
    transition: 2s;
}

section {
    height: 100vh;
    width: 100vw;
}

.message {
    margin: 0;
}

.message h5,
.message p {
    color: #fafafa;
}

/* white background link */
.link {
    color: #fafafa;
    text-decoration: underline;
}
.link:hover {
    background-color: #fafafa;
    color: #1976D2;
    text-decoration: none;
}

/* colors */
.homeColour {
    background-color: #2196F3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 4 4'%3E%3Cpath fill='#1976D2' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

.aboutColour {
    background-color: #2196F3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 4 4'%3E%3Cpath fill='#757575' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

.workColour {
    background-color: #1976D2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 4 4'%3E%3Cpath fill='#2196F3' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

.open-sourceColour {
    background-color: #1976D2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 4 4'%3E%3Cpath fill='#2196F3' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

.contactColour {
    background-color: #1976D2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 4 4'%3E%3Cpath fill='#BBDEFB' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
