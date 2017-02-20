<template>
  <div class="form-horizontal">
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          v-model="form.name"
          placeholder="Name"
          />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Email</label>
        <input
          type="email"
          class="form-control"
          v-model="form.email"
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
          v-model="form.password"
          placeholder="Password"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="submit()">Signup</button>
    <button class="btn btn-danger"><router-link to="/home">Cancel</router-link></button>
    <hr>
  </div>
</template>

<script>

  import auth from '../auth'

  export default {
    data () {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit() {
        var formInput = {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password
        }

        auth.signup(this, formInput)
    }
  }
}
</script>