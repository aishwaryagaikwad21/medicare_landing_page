<template>
    <v-container>
        <v-text-field placeholder="Enter Name or Leave for random" label="Name" :value="generateRandomUsername()">
        </v-text-field>
        
        <v-text-field placeholder="Enter Age" label="Age" type=Number>
        </v-text-field>
        <v-label>
            Gender
        </v-label> 
            <v-radio-group row>
      <v-radio label="Male" value="radio-1"></v-radio>
      <v-radio label="Female" value="radio-2"></v-radio>
      <v-radio label="Other" value="radio-3"></v-radio>
    </v-radio-group>
    
    <v-label>
        Symptoms
        </v-label> 
    <v-textarea solo placeholder="Please enter your symptoms:" value="">
        
    </v-textarea>
    <v-row justify=center>
<v-btn color=primary>
   Submit 
</v-btn>
</v-row>
    </v-container>
</template>
<style scoped>

</style>
<script>
export default {
    
    data : ()=> ({

    }),
    created(){
        fetch("https://www.patientslikeme.com/medical_entities/search?term=pain&types[]=Condition").then((response)=>{
            console.log(response);
        });

        },


    methods : {
        generateRandomUsername : function(){
            var len=6;
            var arr='1234567890'
            var ans = ''; 
            for (var i = len; i > 0; i--) { 
                ans +=  
                  arr[Math.floor(Math.random() * arr.length)]; 
            } 
            return 'user_'+ans;
        }
    }
}
</script>