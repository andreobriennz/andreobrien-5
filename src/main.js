import Vue from 'vue'
// import VueRouter from 'vue-router'
// import _ from 'lodash'

import App from './App.vue'

// Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
    // consider removing evenrything below as its duplicated in App.vue and Layout.vue
    // data: {
    //     h1: 'Andre OBrien <strong>Web Developer</strong>',
    //     mobileNav: false
    // },
    // computed: {
    //     page: function () {
    //       return this.$route.name
    //     },
    //     background: function () {
    //         return this.$route.name + 'Colour';
    //     }
    // },
    // methods: {
    //     update: _.debounce(function (e) {
    //         this.input = e.target.value
    //     }, 300)
    // }
}).$mount('#app')





