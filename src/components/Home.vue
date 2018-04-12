<template>
    <section class="Home welcome">
        <div>
            <h1 class="title" v-html="h1"></h1>
            <h2>{{ h2 }}</h2>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home',
    props: {
        msg: String
    },
    data: function () {
        return {
            h1: 'Andre OBrien <strong>Web Developer</strong>',
            h2: 'Full-Stack Developer | JavaScript Specialist'
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

h1,
h2 {
    /* margin-top: 0;
    margin-bottom: 0.5rem; */
}

/* $tablet-plus */
@media only screen and (min-width: 768px) {
    h1,
    h2 {
        /* padding: 1rem 0 0 3rem; */
    }
}

h2 {
    font-size: 20px;
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
