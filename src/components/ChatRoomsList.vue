<template>
    <v-card class="mt-5">

                    <v-list>
                              <v-subheader>Chat Rooms</v-subheader>
                                            <div v-for="room in rooms" :key="room.name">

                                            <v-list-item @click="console.log('xyz')" >
                            <v-list-item-content>
                               <v-list-item-title>
                                {{room.name}}

                            </v-list-item-title>
                          
                            </v-list-item-content>
                            
                        </v-list-item>
                        <v-divider></v-divider>
                                            </div>

                    <v-btn flat elevation="0" class="my-2" @click="chatDialog=true">Add A Chat Room</v-btn>
                    </v-list>
                    <v-dialog v-model="chatDialog"></v-dialog>

                                        </v-card>
</template>
<script>
import { db } from '../firebaseapp'
export default {
    
    data : ()=> ({
        chatDialog : false,
        chatRoomDescription : "",
        chatRoomName : "",
        rooms : []
    }),
    methods : {
        soja : function(){
            console.log("soka")
        },
        createRoom :  function(){
            db.ref("rooms").push({
                "name": this.chatRoomName,
                "description" : this.chatRoomDescription,
            })
            this.chatRoomDescription="";
            this.chatRoomName="";
            this.chatDialog= false;

        }
    },
    firebase : {
        rooms : db.ref("rooms")
    }
}
</script>