<template>
<v-container>
  <div>
<div class="logo-text-hai my-5" align=center>
    <img src='../assets/img/logo.png' width=200px height=80px alt=Medinspire class='logo-login' align=center> 
        <div>
            Medinspire
        </div>
    </div>
    <v-text-field placeholder="User-ID" outlined="" required v-model="userid"/>
 <v-text-field placeholder="Password" outlined=""  v-model="password" type="password" />
 <v-btn color=primary @click="checkLogin">
     Login
 </v-btn>
  </div>
  </v-container>
</template>

<script scoped>
import { db } from '../firebaseapp'
export default {
    data : ()=> ({
        userid : "",
        password : "",
    }),
    methods : {
        checkLogin : async function(){
            let mythis = this;
          let snapshot = await   db.ref("users").once('value');
          snapshot.forEach(function(childSnapshot){
            let   child = childSnapshot.val();
                if(mythis.userid === child.username && mythis.password === child.password)
                //console.log("True");
                {

                    console.log("userid is ",mythis.userid);
                mythis.$store.commit("SET_LOGGED_IN",true,mythis.userid);
                mythis.$store.commit("SET_USER",mythis.userid);
            //    console.log(childSnapshot['.key']);
                mythis.$store.commit("SET_KEY",childSnapshot["key"])
               // console.log(mythis.$store.state.user.username);
                mythis.$router.push(`/UserDashboard`);

                }
           //   console.log(password);
         ///     let password = childSnapshot.password;
           //   if(mythis.userid === username && mythis.password === password)
              //  console.log(true);
          })
        }
    }
}
</script>

<style>

</style>