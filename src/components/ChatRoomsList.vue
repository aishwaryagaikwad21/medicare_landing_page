<template>
    <v-container fluid>
        <h1>
            Chat Rooms Matching Your Symptoms
        </h1>
        <v-list>
            <v-list-item
        v-for="item in items"
        :key="item"
        @click="soja"
      >
      

        <v-list-item-content>
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-container>
</template>
<script>
export default {
    
    data : ()=> ({
            items : ["Ebola","COrona ","Punita","s"]
    }),
    methods : {
        soja : function(){
            console.log("soka")
        }
    }
}
</script>