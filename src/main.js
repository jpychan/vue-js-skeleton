import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import auth from './auth'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

auth.checkAuth()

const routes = [
    {
        path: '/home',
        component: Home
    },
    {   path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {   path: '*',
        redirect: 'home'
    }
]

export var router = new VueRouter({ routes })

const app = new Vue({
    router,
    components: {
        App
    }

}).$mount('#app')
