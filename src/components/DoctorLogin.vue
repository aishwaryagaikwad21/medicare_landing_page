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
 <v-btn color=primary @click="checkLogin" >
     Login
 </v-btn>
  </div>
  </v-container>
</template>

<script>
import { db } from '../firebaseapp'
export default {
    data : ()=> ({
        mobile :"",
        password :""
    }),
    methods  :{
        checkLogin : async function(){
          let snapshot = await   db.ref("doctors").once('value');
          snapshot.forEach((childSnapshot)=>{
              let child =  childSnapshot.val(); 
              console.log(child);
              if(child['contactno'] === this.mobile && child['password'] === this.password)
              {
                this.$store.commit("SET_LOGGED_IN",true,child.name);
                     this.$store.commit("SET_USER",child.name);
            //    console.log(childSnapshot['.key']);
                this.$store.commit("SET_KEY",childSnapshot["key"])
                this.$router.push(`/DoctorDashBoard`);

              }
          })
        }
    }
}
</script>

<style>

</style>