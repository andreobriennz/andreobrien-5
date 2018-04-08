<template>
    <div>
        <Nav />

        <section style="padding-top: 4rem">
            <nav class="tabs" data-component="tabs">

                <ul>
                    <li class="active">
                        <a href="#all" style="color: #fff; border: #fff;">All</a>
                    </li>
                    <li>
                        <a href="#javascript" style="color: #fff; border: #fff;">JavaScript</a>
                    </li>
                    <li>
                        <a href="#php" style="color: #fff; border: #fff;">PHP</a>
                    </li>
                    <li>
                        <a href="#sass" style="color: #fff; border: #fff;">CSS</a>
                    </li>
                    <li>
                        <!-- <a href="#tools" style="color: #fff; border: #fff;">Tools</a> -->
                    </li>
                </ul>

            </nav>

            <div class="projects flex-grid space-between">
                <div class="text col-6">
                    <p v-html="tagDescription"></p>
                </div>

                <a
                    v-for="project in projectsArray"
                    data-component="modal" 
                    v-bind:data-target="'#'+project.id" 
                    v-if="true"
                    v-bind:href="'#'+project.id"
                    target="_blank"
                    class="col-6">

                    <img class="workImage" 
                        v-bind:src="project.image" 
                        alt="">

                    <div class="workDescription">
                        <h2>...{{ project.title }}</h2>

                        <p>...{{ project.description }}</p>
                    </div>
                </a>

            </div>

            <div 
                v-for="project in projectsArray"
                v-bind:id="project.id"
                class="modal-box hide">
                <div class="modal">
                    <span class="close"></span>
                    <div class="modal-header"><a v-bind:href="project.link" target="_blank">{{ project.title }}</a></div>
                    <div class="modal-body">
                        {{ project.description }}
                        <br><br>
                        <a v-bind:href="project.link" target="_blank" class="button">View Site</button></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Nav from './Nav.vue'
export default {
    name: 'Work',
    props: {
        msg: String
    },
    components: {
        Nav
    },
    created: function () {
        let self = this;
        window.addEventListener("hashchange", funcRef, false);

        function funcRef () {
            self.tag = window.location.hash.substr(1)
        }
    },
    computed: {
        tagDescription: function() {
            let description = []
            description['all'] = 'A collection of my favourite projects.'
            description['javascript'] = 'JavaScript is a language I use very freqently, including Vue, ES6 and sometimes TypeScript.'
            description['php'] = 'I have commercial experience developing with PHP. I tend to use Drupal for commerical projects and Laravel for personal projects.'
            description['sass'] = 'While nowadays I spend more time developing with JavaScript and PHP, I still enjoy developing with CSS and SASS and do so freqently. The following work shows some CSS / SASS projects I\'v worked on.'
            description['nodejs'] = ''
            description['tools'] = 'Over the past couple years I periodically built open-source tools. You can <a href="https://github.com/andreobriennz">view them on GitHub</a>.'

            if (description[this.tag] !== undefined) {
                return description[this.tag]
            }
            return description['all']
        },
        projectsArray: function () {
            let primaryTags = []
            let secondaryTags = []

            this.projects.all.forEach(project => {
                if (project.weight > 0) {
                    if (project.tags.includes(this.tag)) {
                        primaryTags.push(project)
                    } 
                    if (project.secondaryTags.includes(this.tag)) {
                        secondaryTags.push(project)
                    } 
                }
            });

            function reorder(a,b) {
                if (a.weight < b.weight) return -1;
                if (a.weight > b.weight) return 1;
                return 0;
            }

            return [...primaryTags.sort(reorder), ...secondaryTags.sort(reorder)];
        }
    },
    data: function () {
        return {
            tag: window.location.hash.substr(1) !== '' ? window.location.hash.substr(1) : 'all',
            projects: {
                all: [
                    {
                        title: 'Andre OBrien - Portfolio',
                        id: 'portfolio',
                        description: `My portfolio is constantly updated. It\'s currently in it\'s fourth version, and has been changed to demonstate the technologies which I use most freqently and reflect my transition from writing mostly pure CSS and JavaScript, to working with JavaScript frameworks such as Vue, as well as various backend frameworks.`,
                        image: 'https://cdn.andreobriennz.com/portfolio-v3/images/work/cm1610light.min.jpg',
                        alt: '',
                        link: 'https://andreobriennz.com',
                        tags: 'all vue javascript es6 typescript',
                        secondaryTags: 'php octobercms laravel',
                        weight: 10
                    },
                    {
                        title: 'Creative Monday',
                        id: 'creative-monday',
                        description: `
                            Creative Monday required a website which was modern, responsive and very fast loading to fit with it's marketing. 
                            
                            To achieve the optimum level of performance, I built the website as a single page, where text and content is rendered by the server and then updated when a user clicks a link.`,
                        image: 'https://cdn.andreobriennz.com/portfolio-v3/images/work/cm1610light.min.jpg',
                        alt: '',
                        link: 'https://creativemonday.co.nz',
                        tags: 'all javascript animation octobercms',
                        secondaryTags: 'php laravel',
                        weight: 1
                    },
                    {
                        title: 'rELEPHANT Editor',
                        id: 'relephant-editor',
                        description: `Earlier in the year I built an online note editor based on PHP and MySQL. However the project was mostly for my own learning, and focused more on programming than design. I'm now rebuilding the editor from the ground up, this time using SimpleMDE and Laravel (with AES-256-CBC encryption). Please note it is currently in alpha and some features are not yet finished.`,
                        image: 'https://cdn.andreobriennz.com/portfolio-v3/images/work/relephant1610.min.jpg',
                        alt: '',
                        link: 'https://relephant.andreobriennz.com/',
                        tags: 'all php laravel vue javascript',
                        secondaryTags: '',
                        weight: 2
                    },
                    {
                        title: 'DH Game',
                        id: 'dh-game',
                        description: `
                            About once a year, as a personal project, I build an online game. The first time around, as part of a group project, I created the logic (JavaScript) for the game along with some of the design, CSS and backend development. The game was themed around robots vs humans, where users play cards to try and defeat the robots. 

                            This time around, I'm building a completely new web app (based on Express.js and React). It's still very early days, but when the game is closer to development I'll provide a link to it. In the meantime try out the original, albeit poorly titled, game Dead Humanity and see if you enjoy it.`,
                        image: 'https://cdn.andreobriennz.com/portfolio-v3/images/work/dh1610light.min.jpg',
                        alt: '',
                        link: 'https://dead-humanity-game.andreobriennz.com/',
                        tags: 'all javascript es6 php laravel',
                        secondaryTags: '',
                        weight: 3
                    },
                    {
                        title: 'Vario Theme',
                        id: 'vario-theme',
                        description: `I created this theme for October CMS. It is designed to be modern, lightweight, fast-loading and easily customizable. It includes a range of different components developers can use, as well as different font and colour options.`,
                        image: 'https://cdn.andreobriennz.com/portfolio-v3/images/work/cm1610light.min.jpg',
                        alt: '',
                        link: 'https://octobercms.com/theme/creativemonday-vario',
                        tags: 'all css sass',
                        secondaryTags: 'css octobercms laravel',
                        weight: 4
                    },
                    {
                        title: 'Shelter of Hope',
                        id: 'shelter-of-hope',
                        description: '',
                        image: '',
                        alt: '',
                        link: '',
                        tags: '',
                        secondaryTags: 'all css',
                        weight: 1
                    },
                    {
                        title: 'GO - Social Media for Board Game Geeks',
                        id: 'GO',
                        description: '',
                        image: '',
                        alt: '',
                        link: '',
                        tags: '',
                        secondaryTags: '',
                        weight: -1
                    },
                    {
                        title: 'Vue, Laravel, Webpack & ES6 Starter Project',
                        id: 'vue-laravel-webpack-starter',
                        description: '',
                        image: '',
                        alt: '',
                        link: '',
                        tags: '',
                        secondaryTags: '',
                        weight: -1
                    },
                    {
                        title: 'MongoDB, Express.js, Node, WebPack, EJS, TypeScript Starter Project',
                        id: 'ME*N-starter',
                        description: 'ME*N Project Setup, just add your chosen front-end framework',
                        image: '',
                        alt: '',
                        link: '',
                        tags: '',
                        secondaryTags: '',
                        weight: -1
                    },
                    {
                        title: 'Skeleton-Flexbox',
                        id: 'skeleton-flexbox',
                        description: 'Fork of Skeleton Boilerplate With Flexbox Framework',
                        image: '',
                        alt: '',
                        link: '',
                        tags: '',
                        secondaryTags: '',
                        weight: -1
                    }
                ]
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* layout */
.work {
    height: auto;
}

.tabs ul {
    border-color: #fafafa;
}

.tabs li:first-of-type {
    padding-left: 0.25rem;
}

.tabs li:hover, li:hover a {
    background-color: #fafafa;
    color: #2278CF !important;
    text-decoration: none;
}

.text {
    padding: 0 1rem;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

a img {
    width: 100%;
}
a p {
    margin: 0;
    padding: 1rem;
}

a .workDescription {
    display: none;
}  

/* skin */
.work p {
    color: #fafafa;
}
</style>
