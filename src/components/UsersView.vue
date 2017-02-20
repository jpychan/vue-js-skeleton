<template>
  <div>
    <h1 v-for="user in users">{{ user.first_name }}</h1>
  </div>
</template>

<script>
import auth from '../auth'
import userData from '../json/users.json'

export default {
    data() {
      return {
        currentUser: auth.user,
        users: []
      }
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers: function() {
        this.users = userData.success.data
      }
    },
    route: {
      canActivate() {
        return auth.user.authenticated
      }
    }
  }
</script>

