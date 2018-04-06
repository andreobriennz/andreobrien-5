<template>
    <div>
        <Nav />

        <section class="Home welcome">
            <div>
                <h1 v-html="h1"></h1>
                <h2>{{ h2 }}</h2>
            </div>
        </section>
    </div>

</template>

<script>
import Nav from './Nav.vue'
export default {
    name: 'Home',
    props: {
        msg: String
    },
    components: {
        Nav
    },
    data: function () {
        return {
            h1: 'Andre OBrien <strong>Web Developer</strong>',
            h2: 'JavaScript & PHP Development'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* layout */
.welcome {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
}

.welcome h1 {
    font-size: 3rem;
    padding: 0;
}

h1,
h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
}

/* $tablet-plus */
@media only screen and (min-width: 768px) {
    h1,
    h2 {
        padding: 1rem 0 0 3rem;
    }
}

h2 {
    font-size: 1.25rem;
}

p {
    margin: 0;
}

/* skin */
h1,
h2 {
    font-weight: normal;
    color: #fafafa;
}
</style>
