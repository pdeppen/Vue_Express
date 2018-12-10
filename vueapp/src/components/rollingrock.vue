<template>
   <div class="rollingrock">
        <h1>Philip's Page</h1>
        
        <!-- displays welcome message -->
        <button v-if="showWelcomeMessage" class = "float-right">{{welcomeMessage}}</button>

        <h3>Register/Login</h3>
        
        <!-- register button -->
        <button class="btn btn-primary" data-toggle="modal" data-target="#registerModal"><h3>Register</h3></button>

        <!-- Modal (Dialog box) -->
        <div class="modal fade" id="registerModal" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content -->
                <div class = "modal-content">
                    <div class = "modal-header">
                        <h4 class = "modal-title">Register</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class = "modal-body">
                        <input type = "email" name = "email" placeholder="email" v-model="email">
                        <input type = "password" name="password" placeholder="password" v-model="password">
                    </div>
                    <div class = "modal-footer">
                        <button type = "button" class = "btn btn-secondary" @click = "register" data-dismiss="modal">Register</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- login button -->
        <button class="btn btn-primary" data-toggle="modal" data-target="#loginModal"><h3>Login</h3></button>
        
        <!-- Modal (Dialog box) -->
        <div class="modal fade" id="loginModal" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content -->
                <div class = "modal-content">
                    <div class = "modal-header">
                        <h4 class = "modal-title">Login</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class = "modal-body">
                        <input type = "email" name = "currentEmail" placeholder="email" v-model="currentEmail">
                        <input type = "password" name="currentPassword" placeholder="password" v-model="currentPassword">
                    </div>
                    <div class = "modal-footer">
                        <button class = "btn btn-seconday" data-dismiss="modal" @click = "checkUser">Login</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- displays existing users -->
        <div class = "container">
            <h2>Exisiting Users</h2>
            <ul class="list-group">
                <li v-for="email in emails" class = "list-group-item">
                    <b>Email:</b> {{email.email}} <b>Password:</b> {{email.password}}
                </li>
            </ul>
        </div>
   </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    name: 'rollingrock',
    data () {
        /* variables */
        return {
            email: 'abc',
            password: '123',
            currentEmail: '',
            currentPassword:'',
            welcomeMessage: '',
            emails: [],
            showWelcomeMessage: false
        }
    },
    methods: {
        /* register button click event */
        async register () {
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            alert(response.data)
            this.refreshEmails()
        },
        /* refresh emails when page loads and new user added */
        refreshEmails() {
            /* calls "get" again after posting */
            AuthenticationService.displayEmails()
                .then(response => (this.emails = response.data))
                .catch(response => console.log(response))
        },
        /* here when login button clicked */
        async checkUser() {
            const response = await AuthenticationService.checkUser({
                email: this.currentEmail,
                password: this.currentPassword
            })
            this.welcomeMessage = response.data
            alert(this.welcomeMessage)
            this.showWelcomeMessage = true
        }
    },
    /* this happens when page is loaded */
    mounted () {
        this.refreshEmails()
    }
}
</script>

<style scoped>
   
    .contacted {
        text-decoration: line-through
    }

    .rollingrock {
        background-color: #CACFD2
    }

    h1 {
        text-align: center
    }

    h2 {
        text-align : center
    }

</style>
