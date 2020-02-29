<template>
    <v-card class="mt-5">

                  <v-list>
                              <v-subheader>Joined Chat Rooms</v-subheader>
                                            <div v-for="room in rooms" :key="room.name">

                                            <v-list-item @click="()=> selectRoom(room)" >
                            <v-list-item-content>
                               <v-list-item-title>
                                {{room.name}}

                            </v-list-item-title>
                          
                            </v-list-item-content>
                            
                        </v-list-item>
                        <v-divider></v-divider>
                                            </div>

                    <v-btn text elevation="0" class="my-2" @click="chatDialog=true">Add A Chat Room</v-btn>
                    </v-list>
                    <v-dialog v-model="chatDialog"></v-dialog>
                    <v-dialog v-model="roomDialog"
                
                    >
                    <v-card>
                        <v-card-title>Do you want to join this group ?</v-card-title>
                        <v-card-content>
                            <v-container>
                                <v-row>
                                    <p>Room Name : {{room.name}}</p>

                                </v-row>
                                <v-row>
                                <p>Room Description : {{room.description}}</p>

                                </v-row>
                            </v-container>
                        </v-card-content>
                        <v-card-actions>

          <v-btn
            color="red darken-1"
            text
            @click="roomDialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="joinRoom"
          >
            Yes
          </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-card>
</template>
<script>
import { db } from '../firebaseapp'
export default {
    
    data : ()=> ({
        chatDialog : false,
        chatRoomDescription : "",
        chatRoomName : "",
        rooms : [],
        room : [],
        roomDialog : false
    }),
   
    methods : {
        soja : function(){
            console.log("soka")
        },
        selectRoom : function(room){
            this.room = room;
            this.roomDialog = true;
        },
        createRoom :  function(){
            db.ref("rooms").push({
                "name": this.chatRoomName,
                "description" : this.chatRoomDescription,
            })
            this.chatRoomDescription="";
            this.chatRoomName="";
            this.chatDialog= false;
            this.roomDialog = false;


        },
        joinRoom :  async function(){
            let key = this.$store.state.user.key;
            db.ref("users").child(key).child("rooms").push(this.room.name);
                this.$router.push(`/ChatRooms/`+this.room.name);
        }
    },
    firebase : {
        
        rooms : db.ref("rooms")
    }
}
</script>