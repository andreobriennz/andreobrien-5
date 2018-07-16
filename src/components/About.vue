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
                <strong class="heading-3">About me</strong>
                <br><br>
                Andre is a full-stack developer with a passion for learning. He has worked on a variety of websites and web apps
                and has commercial experience using JavaScript, CSS, and PHP.
                <br><br>
                He has a strong passion for JavaScript and programming,
                and also enjoys developing with frameworks such as React, Vue and Laravel and hosting sites using cloud hosting.
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
