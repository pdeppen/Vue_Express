<template>
  <div id="app">
    <!-- <test msg="Hello"></test> -->
    <users></users>
  </div>
</template>

<script>
import Test from './components/test.vue'
import Users from './components/users.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: {
    Test, Users
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

