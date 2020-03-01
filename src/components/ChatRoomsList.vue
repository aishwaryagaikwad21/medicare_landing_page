<template>
    <v-card class="mt-5">

                  <v-list>
                              <v-subheader>Joined Chat Rooms</v-subheader>
                                            <div v-for="room in userRooms" :key="room.name">

                                            <v-list-item @click="()=> goToRoom(room)" >
                            <v-list-item-content>
                               <v-list-item-title>
                                {{room.name}}

                            </v-list-item-title>
                          
                            </v-list-item-content>
                            
                        </v-list-item>
                        <v-divider></v-divider>
                                            </div>
 <v-subheader>Available Chat Rooms</v-subheader>
                                            <div v-for="room in filteredRooms" :key="room.name">

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
                    <v-dialog v-model="roomDialog"
                
                    >
                    <v-card>
                        <v-card-title>Do you want to join this group ?</v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <p>Room Name : {{room.name}}</p>

                                </v-row>
                                <v-row>
                                <p>Room Description : {{room.description}}</p>

                                </v-row>
                            </v-container>
                        </v-card-text>
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
        filteredRooms : [],
        userRooms : [],
        roomDialog : false
    }),
    computed : {
        joinedRooms : function(){
            let filteredRooms =  this.rooms.filter((room)=>{
                console.log(room);
                return room; 
            })
            return filteredRooms;
        }
    },
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
        },
        goToRoom : function(room)
        {
                            this.$router.push(`/ChatRooms/`+room.name);

        }
    },
    async created(){
        
         let snapshot =  await db.ref("users").child(this.$store.state.user.key).child("rooms").once('value');
            snapshot.forEach((childSnapshot)=>{
                    this.userRooms.push(childSnapshot.val())
            })
            let newUserRooms = [];
            for(var i = 0; i<this.rooms.length;i++)
            {
                let room = this.rooms[i];
                console.log(room);
                if(!this.userRooms.includes(room['name']) )
                this.filteredRooms.push(room);
                else 
                newUserRooms.push(room);
            }
            this.userRooms = newUserRooms;
            console.log(this.filteredRooms);
         
        },
    firebase : {
        rooms : db.ref("rooms"),
    }
}
</script>