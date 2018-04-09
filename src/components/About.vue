<template>
    <section class="About flex-grid space-between">
        <div class="col-6">
            <img 
                :src="require('./../assets/images/andre-min.jpg')"
                alt=""
                class="mobile-hide aboutImage">
        </div>

        <div class="col-6 aboutText">
            <p>
                <strong>About me</strong><br><br>
                I'm a web developer with experience working on over twenty projects. 
                I enjoy creating complex layouts usings CSS, building dynamic websites and web apps with JavaScript, and using PHP and MySQL on the server. 
                Of these, I consider JavaScript to be my greatest strength.
                <br><br>
                Some of my favourite tools include VueJS, Laravel, October CMS, Bulma, Kube, React and Express.js
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
    props: {
        msg: String
    },
}




$(document).ready(function() {
    $('.nav').click(function() {
        $(this).toggleClass('is-active')

        $('.menu-items').toggleClass('mobile-hide')

        app.mobileNav != app.mobileNav
    });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* layout */
.col-6 {
    margin: 0;
}

img,
p {
    padding: 0 10%;
}

.aboutImage {
    height: 100vh;
    padding-top: 5rem;
}

.aboutText {
    color: #fafafa;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.1rem;
}

.aboutText strong {
    font-size: 1.5rem;
    font-weight: 700;
}
</style>
