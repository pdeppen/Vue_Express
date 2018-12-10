<template>
   <div class="test">
        <!-- input binding -->
        <input type="text" v-model="title"><br/>
        <h1>{{title}}</h1>
        <!-- if-else statmenent -->
        <p v-if="showName">{{user.first_name}} {{user.last_name}}</p>
        <p v-else>{{noName}}</p>
        <!-- for loop -->
        <ul>
            <li v-for="item in items">{{item.title}}</li> 
        </ul>
        <!-- events -->
        <button v-on:click="greet(title)">Say Greeting</button>
        <br/>
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <hr/>
        <label>First name: </label><input type="text" v-model="user.first_name">
        <br>
        <label>Last name: </label><input type="text" v-model="user.last_name">
        <h3>{{fullname}}</h3>
        <h2>{{msg}}</h2>
   </div> 
</template>

<script>
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default: 'Foobar'
            }
        },
        data () {
            return {
                title: 'Hello World',
                user: {
                    first_name: 'Philip',
                    last_name: 'Deppen'
                },
                /* display this if no name given */
                noName: 'no name given',
                /* conditional */
                showName: true,
                /* array */
                items: [
                    {title: 'Item One'},
                    {title: 'Item Tow'},
                    {title: 'Item Three'}
                ]
            }
        },
        methods: {
            greet: function(greeting) {
                alert (greeting)
            },
            pressKey: function(e) {
                console.log(e.target.value)
            },
            enterHit: function(e) {
                alert ('Typed: ' + e.target.value)
            }
        },
        computed: {
            fullname: function() {
                return this.user.first_name+ ' ' + this.user.last_name
            }
        }
    }
</script>

<style scoped>

</style>