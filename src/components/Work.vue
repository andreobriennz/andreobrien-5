<template>
    <section style="padding-top: 4rem">
        <nav class="tabs">

            <ul>
                <li class="active">
                    <a href="/work" style="color: #fff; border: #fff;">All</a>
                </li>
                <li>
                    <a href="/work#javascript" style="color: #fff; border: #fff;">JavaScript</a>
                </li>
                <li>
                    <a href="/work#php" style="color: #fff; border: #fff;">PHP</a>
                </li>
                <li>
                    <a href="/work#sass" style="color: #fff; border: #fff;">CSS</a>
                </li>
            </ul>

        </nav>

        <div class="projects flex-grid space-between">
            <div class="text col-6">
                <p class="big" v-html="tagDescription"></p>
            </div>

            <a
                v-for="project in projectsArray"
                class="col-6"
                data-component="modal" :data-target="'#'+project.id" 
                v-if="true"
                :href="project.link" target="_blank"
                :alt="project.alt">

                <img class="workImage"
                    :src="require('./../assets/images/'+project.image)"
                    alt="Andre OBrien">

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
                <span class="big close"></span>
                <div class="modal-header"><a v-bind:href="project.link" target="_blank">{{ project.title }}</a></div>
                <div class="modal-body">
                    <span v-html="project.description"></span>
                    <br><br>
                    <a v-bind:href="project.link" target="_blank" class="button">View Site</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {allProjects, tagDescriptions} from './../data/work'

export default {
    name: 'Work',
    props: {
        msg: String
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
            const description = tagDescriptions

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
                all: allProjects
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
    font-weight: bold;
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
    /* width: 100%; */
}
a p {
    /* margin: 0; */
    /* padding: 1rem; */
}

a .workDescription {
    display: none;
}  

/* skin */
.work p {
    color: #fafafa;
}
</style>
