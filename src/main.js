import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import ChatRoomsList from './components/ChatRoomsList';
import DoctorsRegistration from './components/DoctorRegistrationForm'
import Landing from './components/Landing';
import UserRegistration from './components/UserRegistration'
const  routes = [
    { path: "/", component: UserRegistration },
    {
      path: "/doctorsregistrations",
      component: DoctorsRegistration,
    },
    {
        path:"/landing",component : Landing,
    },
    {
      path :"/chatroomslist",component : ChatRoomsList
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
