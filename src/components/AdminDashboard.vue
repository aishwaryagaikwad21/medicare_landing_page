<template>
<v-container fluid>
<v-card height="'100px" >
    <v-toolbar class="bg-primary white--text" >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="ml-2">Admin Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="white--text">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
</v-card>
<v-row>
    <v-col>
        <v-card>
            <v-card-title class="mb-3">Users:Count</v-card-title>
            <v-card-text>Patients</v-card-text>
            <v-card-text>Doctors</v-card-text>
            <v-card-text>Admins</v-card-text>
        </v-card>
    </v-col>
        <v-col cols=7>
            <v-card>

            <v-row class="text-center py-5">
                <h2 class="card-title mx-auto text-primary">Pending Mails</h2>
            </v-row>

            </v-card>
            <v-card class="mt-10">
                <v-row>
                    <h1 class="ml-5">Account Authorization</h1>
                    <v-container fluid class="px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum ratione officia sed nulla a nesciunt! Ipsa temporibus 
                    </v-container>
                </v-row>
            </v-card>
                        <v-card class="mt-10">
                <v-row>
                    <h1 class="ml-5">Account Authorization</h1>
                    <v-container fluid class="px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum ratione officia sed nulla a nesciunt! Ipsa temporibus 
                    </v-container>
                </v-row>
            </v-card>
                        <v-card class="mt-10">
                <v-row>
                    <h1 class="ml-5">Account Authorization</h1>
                    <v-container fluid class="px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum ratione officia sed nulla a nesciunt! Ipsa temporibus 
                    </v-container>
                </v-row>
            </v-card>

    </v-col>
        <v-col>
            <v-card>
                <h2 class="pl-2">Chats Rooms available</h2>
                <hr />
                <v-list-item v-for="chatroom in chatrooms" v-bind:key="chatroom.name">
                    <v-list-item-content class="mt-4">
                    <v-list-item-title>{{chatroom.name}} <v-icon class="float-right red--text">mdi-trash-can</v-icon></v-list-item-title>
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
.bg-primary{
    background-color: #32c788 !important;
}
.text-primary{
    color: #32c788;
}
</style>