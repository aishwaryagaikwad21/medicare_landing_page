<template>
  <v-container>
  <div>
<div class="logo-text-hai my-5" align=center>
    <img src='../assets/img/logo.png' width=200px height=80px alt=Medinspire class='logo-login' align=center> 
        <div>
            Medinspire
        </div>
    </div>
    <v-text-field placeholder="Mobile" outlined="" required v-model="mobile"/>
 <v-text-field placeholder="Password" outlined=""  v-model="password" type="password" />
 <v-btn color=primary>
     Login
 </v-btn>
  </div>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>