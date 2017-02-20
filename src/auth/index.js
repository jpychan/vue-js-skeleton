import {router} from '../main'

// URL and endpoint constants
const API_URL = 'http://127.0.0.1:5000/'
const LOGIN_URL = API_URL + 'login/'
const SIGNUP_URL = API_URL + 'admin/'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false,
    email: '',
    name: ''
  },
  login(context,creds,redirect) {
    // context.$http.post(LOGIN_URL, creds,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    // }).then((response) => {

    //   var data = response.body.success.data
    //   localStorage.setItem('token', data.token)

    //   this.user.authenticated = true
    //   this.user.email = data.user.email
    //   this.user.name = data.user.name

    //   if (redirect) {
    //     router.replace(redirect)
    //   }
    // }, (response) => {
    //   console.log(response)
    // });

    localStorage.setItem('token', '123')

    this.user.authenticated = true
    this.user.email = creds.email
    this.user.name = creds.name

    if (redirect) {
      router.replace(redirect)
    }

    console.log(this.user)

  },

  signup(context, creds) {
    context.$http.post(SIGNUP_URL, creds,
      {
        headers: {
          'Content-Type': 'application/json',
      }
    }).then((response) => {
        router.replace('welcome')
    }, (response) => {
        console.log(response.body.error.message)
        context.error = response.body.error.message
    })
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('token')
    this.user.authenticated = false
    router.replace('home')
  },

  checkAuth() {
    var jwt = localStorage.getItem('token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
}
