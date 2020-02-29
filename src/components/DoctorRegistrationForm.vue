<template>
<v-container>

     <v-text-field placeholder="Name" outlined="">
         
     </v-text-field>
     <v-text-field placeholder="Age" outlined="" type="number">
         
     </v-text-field>
     <v-select
      v-model="selectedFruits"
      :items="qualifications"
      label="Qualification"
      outlined
      multiple
    >
    </v-select>
 </v-container>

</template>
<script>
export default {
    data : ()=>({
        qualifications : ["B.HONS,H.HONS,X.HONS,Physicrits"]
       })
}
</script>