// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import Users from './components/users'
import Test from './components/test'
import RollingRock from './components/rollingrock'
import Derek from './components/derek'
import Tyler from './components/tyler'
import Justin from './components/justin'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: RollingRock},
    {path:'/test', component: Test},
    {path:'/users', component: Users},
    {path: '/derek', component: Derek},
    {path: '/tyler', component: Tyler},
    {path: '/justin', component: Justin}
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <nav class = "navbar navbar-expand-lg navbar-light bg-light" >
        <div class="container-fluid">
          <div class = "navbar-header">
              <a class="navbar-brand">Group 2</a>
          </div>
          <ul class = "navbar-nav mr-auto" id = "navbarSupportedContent">
            <li class="nav-item active"><router-link to="/Users"><a class = "nav-link">Users</a></router-link></li>
            <li class="nav-item active"><router-link to="/test"><a class = "nav-link">Test</a></router-link></li>
            <li class="nav-item active"><router-link to="/"><a class = "nav-link">Philip</a></router-link></li>
            <li class="nav-item active"><router-link to="/derek"><a class = "nav-link">Derek</a></router-link></li>
            <li class="nav-item active"><router-link to="/tyler"><a class = "nav-link">Tyler</a></router-link></li>
            <li class="nav-item active"><router-link to="/justin"><a class = "nav-link">Justin</a></router-link></li>
          </ul>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  `, 
}).$mount('#app')

