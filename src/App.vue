<template>
  <v-app>
    <v-app-bar
      app
      elevation="0"
    >
      <v-toolbar-title >Pinder</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <DoctorRegistrationForm/>

    </v-content>
    <Footer />
  </v-app>
</template>
<style>
@import './colors.css';

</style>
<script>
import DoctorRegistrationForm from './components/DoctorRegistrationForm';
import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    DoctorRegistrationForm,Footer
  },

  data: () => ({
    //
  }),
};
</script>
