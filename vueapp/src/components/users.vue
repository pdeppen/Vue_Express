<template>
   <div class="users">
        <h1>Users</h1>
        <div class = "container">
            <form v-on:submit="addUser">
                <div class = "form-group">
                    <input type="text" v-model="newUser.name" placeholder="Enter Name" class = "form-control">
                </div>
                <div class = "form-group">
                    <input type="text" v-model="newUser.email" placeholder="Enter Email" class = "form-control">
                </div>
                <input type="submit" value="Submit">
            </form>
        </div>
        <br/>
        <div class = "container">
            <h2>Exisiting Users</h2>
            <ul class="list-group">
                <li v-for="user in users" class = "list-group-item">
                    <input type="checkbox" class="toggle" v-model="user.contacted">
                    <span :class="{contacted: user.contacted}">
                        {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)" class = "btn btn-danger">x</button>
                    </span>
                </li>
            </ul>
        </div>
   </div> 
</template>

<script>
    export default {
        name: 'users',
        data () {
            return {
                newUser: {},
                users: []
            }
        },
        methods: {
            addUser: function (e) {
                console.log('added user')
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                })
                /* stops form from flashing */
                e.preventDefault();
            },
            deleteUser: function(user) {
                this.users.splice(this.users.indexOf(user), 1)
            }
        },
        created: function() {
            this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(function(response) {
                    this.users = response.data
                })
        }
    }
</script>

<style scoped>
    .contacted {
        text-decoration: line-through
    }

    h1 {
        text-align: center
    }

</style>
