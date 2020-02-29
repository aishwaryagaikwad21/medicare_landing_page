<template>
   <v-card>

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

                    <v-dialog v-model="chatDialog">
                        <v-card>
                            <v-card-title>Add a Chat Room</v-card-title>
                            <v-container>
                                <v-text-field placeholder="Chat Room Name" outlined label="Chat Room Name" v-model="chatRoomName"></v-text-field>
                                <v-text-field placeholder="Short Description" outlined label="Description" v-model="chatRoomDescription"></v-text-field>
                                <v-btn flat color="primary" @click="createRoom">Create</v-btn>
                            </v-container>
                        </v-card>
                    </v-dialog>
                                            
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