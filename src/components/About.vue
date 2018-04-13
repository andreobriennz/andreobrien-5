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
                <strong class="heading-3">About me</strong><br><br>

                I am a developer with experience on dozens of web apps and websites. 
                I am currently looking to secure a position where I can use my skills to bring immediate value and also develop my skillset further.
                <br><br>
                As a full-stack web developer I have experience using HTML, CSS, JavaScript, PHP, NodeJS, MySQL, cloud hosting and more.
                Of these, I consider JavaScript (including React, Vue and vanilla JavaScript) to be my strongest language, followed by PHP. 
                <br><br>
                <!-- Some of my favourite tools include VueJS, Laravel, October CMS, Bulma, Kube, React and Express.js -->
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
};

$(document).ready(function() {
    $('.nav').click(function() {
        $(this).toggleClass('is-active');

        $('.menu-items').toggleClass('mobile-hide');

        app.mobileNav != app.mobileNav;
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
}

.aboutText strong {
    font-weight: 700;
}
</style>
