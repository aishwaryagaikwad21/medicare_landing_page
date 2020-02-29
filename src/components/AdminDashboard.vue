<template>
<v-container fluid>
<v-card height="'100px" >
    <v-toolbar >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="ml-2">Admin Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>
</v-card>
<v-row>
    <v-col>
        some option cart over here
    </v-col>
        <v-col>
        some option cart over here
    </v-col>
        <v-col>
            <v-card>
                <h2>Chats Rooms available</h2>
                <v-list-item v-for="chatroom in chatrooms" v-bind:key="chatroom.name">
                    <v-list-item-content>
                    <v-list-item-title>{{chatroom.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        
    </v-col>

</v-row>

</v-container>
</template>
<script>
import {db} from '../firebaseapp';
export default {
    data:()=>({
            
            chatrooms:[
            ]
    }),
    firebase : {
        chatrooms : db.ref("rooms")
    }
        
    
}
</script>
<style scoped>

</style>