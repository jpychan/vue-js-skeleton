<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-12">
        <label>Email</label>
        <input
          type="email"
          class="form-control"
          v-model="credentials.email"
          placeholder="Email"
          />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          v-model="credentials.password"
          placeholder="Password"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="submit()">Login</button>
    <button class="btn btn-danger"><router-link to="/home">Cancel</router-link></button>
    <hr>
  </div>
</template>

<script>

  import auth from '../auth'

  export default {
    data () {
      return {
        credentials: {
          email: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit() {
        var credentials = {
          email: this.credentials.email,
          password: this.credentials.password
        }

        auth.login(this, credentials, 'users')
    }
  }
}
</script>