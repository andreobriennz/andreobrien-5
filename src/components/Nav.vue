<template>
    <nav class="nav flex-grid vertal-align">
        <div v-if="mobileNav = false" class="col-6 logo">
            <router-link to="/"
                v-if="page !=='home'"
                style="padding: 0; margin: 0;" 
                v-html="h1">
            </router-link>
        </div>
    
        <div class="menu">
            <div class="desktop-hide container">
                <div class="hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>

            <div class="menu-items mobile-hide col-6">
                <div>
                    <router-link to="/" :class="{ active: page === 'home' }">Home</router-link>
                    <router-link to="/work" :class="{ active: page === 'work' }">Work</router-link>
                    <router-link to="/about" :class="{ active: page === 'about' }">About</router-link>
                    <router-link to="/contact" :class="{ active: page === 'contact' }">Contact</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    page: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* layout */
.nav {
    position: fixed;
    z-index: 20;
    padding-top: 1.5rem;
    width: 100%;
    text-align: right;
}

a {
    padding: 2rem;
    padding-bottom: 1.25rem;
}
@media only screen and (min-width: 1024px) {
    a:last-of-type {
        margin-right: 2rem;
    }
}

.logo {
    text-align: left;
    padding: 0 0 0 4rem;
    font-size: 1.5rem;
}

.menu div {
    width: 100vw;
}


/* skin */
a {
    color: #fafafa;
}
a:hover,
a.active {
    border-bottom: solid 2px #fafafa;
    color: #fafafa;
}

.logo a:hover {
    text-decoration: none !important;
}

/* hamburger */
.hamburger {
    padding: 1rem;
}
  
.hamburger .line{
width: 50px;
height: 5px;
background-color: #ecf0f1;
display: block;
margin: 8px auto;
-webkit-transition: all 0.3s ease-in-out;
-o-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;
}

.hamburger.is-active .line:nth-child(1){
-webkit-transform: translateY(13px);
-ms-transform: translateY(13px);
-o-transform: translateY(13px);
transform: translateY(13px);
}

.hamburger.is-active .line:nth-child(3){
-webkit-transform: translateY(-13px);
-ms-transform: translateY(-13px);
-o-transform: translateY(-13px);
transform: translateY(-13px);
}

@media only screen and (max-width: 1023px) {
    .nav {
        padding: 0;
    }

    .stripe {
        display: none;
    }


    .menu-items {
        padding-top: 4rem;
        height: 100vh;
        width: 100vw;
        text-align: center;
        font-weight: bold;
        font-size: 2.5rem;
        border: none;
        background-color: #2278CF;
        box-shadow: 0rem 0rem 1rem #555;
    }

    .menu-items.mobile-hide {
        display: none;
    }

    .menu-items .active {
        border: none;
    }

    a {
        display: block;
    }
}
</style>
