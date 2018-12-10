import Api from '@/services/Api'

export default {
    register (credentials) {
        /* first argument is end point found in server/src/app.js */
        return Api().post('register', credentials)
    },
    displayEmails () {
        return Api().get('emails')
    },
    checkUser (credentials) {
        return Api().post('login', credentials)
    },
    displayImages () {
      return Api().get('justin')
    },
    tylerDisplayText () {
        return Api().get('tyler')
    },
    buttonStuff(){
        return Api().post('test')
    }
    
}

/* example of how this is used */
// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })
