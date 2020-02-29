<template>
    <v-container>
        <v-text-field placeholder="Enter Name or Leave for random" label="UserName" :value="username" disabled>
        </v-text-field>
        
        <v-text-field placeholder="Enter Age" label="Age" type=Number v-model="age">
        </v-text-field>
         <v-text-field placeholder="Password" label="Password" type="password" v-model="password">
        </v-text-field>
        <v-label>
            Gender
        </v-label> 
            <v-radio-group row v-model="gender">
      <v-radio label="Male" value="Male" selected></v-radio>
      <v-radio label="Female"  value="Female"></v-radio>
      <v-radio label="Other" value="Others"></v-radio>
    </v-radio-group>
    
    <v-label>
        Symptoms
        </v-label> 
    <v-textarea solo placeholder="Please enter your symptoms:" value="" v-model="symptoms">
        
    </v-textarea>
    <v-row justify=center>
<v-btn color=primary @click="userRegistration">
   Submit 
</v-btn>
</v-row>
    </v-container>
</template>
<style scoped>

</style>
<script>
import { db } from '../firebaseapp';
export default {
    
    data : ()=> ({
        password : "",
        username : "",
        gender : "Male",
        symptoms : "",
        age : "",
    }),
    async created(){
            this.username = this.generateRandomUsername();
        },


    methods : {
        userRegistration : function(){
            db.ref("users").push({
                "username" : this.username,
                "password" : this.password,
                "age" : this.age,
                "gender" : this.gender,
                "symptoms" : this.symptoms
            })
            this.hide();
        },
        generateRandomUsername : function(){
            var len=6;
            var arr='1234567890'
            var ans = ''; 
            for (var i = len; i > 0; i--) { 
                ans +=  
                  arr[Math.floor(Math.random() * arr.length)]; 
            } 
            this.username = 'user_'+ans;

            return 'user_'+ans;
        }
    },
    props : {
        hide : Function
    }
}
</script>