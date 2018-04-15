<template>
    <section class="Home welcome">
        <div>
            <!-- <h1 class="title">Andre OBrien <strong>Web Developer</strong></h1>
            <h2>Full-Stack Developer | JavaScript Specialist</h2> -->
            <h1 class="title fadedOut">Andre OBrien <strong>Web Developer</strong></h1>
            <h2 v-html="h2" class="invisible"></h2>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home',
    // props: {
    //     msg: String
    // },
    data: function () {
        return {
            // h1: 'Andre OBrien <strong>Web Developer</strong>',
            h2: ''
        }
    },
    created: function () {
        // `this` points to the vm instance
        // console.log('a is: ' + this.a)
        const heading2 = `Full-Stack Developer | JavaScript Specialist`
        const heading2_length = heading2.length

        this.h2 += heading2[0]

        $(function() {
            $('h1').delay (500).fadeIn (2000)
        })
        
        setTimeout(() => {
            const _this = this

            $('h2').removeClass ('invisible')
            for (let i = 1; i < heading2_length; i++) {
                setTimeout( () => {
                    (function (i) {
                        _this.h2 += heading2[i]
                    })(i)
                }, i * 70)
            }
        }, 1500);

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fadedOut {
    display: none;
}
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
