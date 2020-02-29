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
  </v-app>
</template>
<style>
@import './colors.css';

</style>
<script>
import DoctorRegistrationForm from './components/DoctorRegistrationForm';

export default {
  name: 'App',

  components: {
    DoctorRegistrationForm
  },

  data: () => ({
    //
  }),
};
</script>
