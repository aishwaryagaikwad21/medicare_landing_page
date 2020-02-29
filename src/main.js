import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import DoctorsRegistration from './components/DoctorRegistrationForm'
import Landing from './components/Landing';
const  routes = [
    { path: "/", component: DoctorsRegistration },
    {
      path: "/doctorsregistrations",
      component: DoctorsRegistration,
    },
    {
        path:"/landing",component : Landing 
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
