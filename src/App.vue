<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Base Project
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">Home</router-link></li>
          <li v-if="currentUser.authenticated"><a v-on:click="logout()" href="javascript:void(0);">Logout</a></li>
          <li v-if="!currentUser.authenticated"><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from './auth'

  export default {
    data () {
      return {
        currentUser: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout()
      }
    }
  }
</script>
