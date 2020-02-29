import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import DoctorsRegistration from './components/DoctorRegistrationForm'
import Landing from './components/Landing';
import UserRegistration from './components/UserRegistration'
import ChatRoom from './components/ChatRoom'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

const  routes = [
    { path: "/", component: UserRegistration },
    { path: "/chatroom", component: ChatRoom},
   
    {
      path: "/doctorsregistrations",
      component: DoctorsRegistration,
    },
    {
        path:"/landing",component : Landing,
    }
  ];
Vue.use(VueRouter)

Vue.config.productionTip = false
console.log(routes)
const router = new VueRouter({
  mode: "history",
  routes,
  base: process.env.BABEL_URL
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
