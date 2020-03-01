<template>
<v-container fluid>
<v-card height="'100px" >
    <v-toolbar class="bg-primary white--text" >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="ml-2">Admin Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="white--text" to="../landing">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
</v-card>
<v-row>
    <v-col>
        <v-card>
            <v-card-title class="mb-3">Users:Count</v-card-title>
            <v-card-text>Patients : {{users.length}}</v-card-text>
            <v-card-text>Doctors  :{{doctors.length }}</v-card-text>
            <v-card-text>Admins  : 1</v-card-text>
        </v-card>
    </v-col>
        <v-col cols=7>
            <v-card>

            <v-row class="text-center py-5">
                <h2 class="card-title mx-auto text-primary">Pending Mails</h2>
            </v-row>

            </v-card>
            <v-card class="mt-10" v-for="doctor in unverifiedDoctors" :key="doctor.contactno">
                <v-row>
                    <h1 class="ml-5">{{doctor.name}}</h1>
                    <v-container fluid class="px-5">
                        <v-row>
                            <v-btn text @click="()=> downloadCertificate(doctor)">Download Certificate</v-btn>
                                                        <v-btn text @click="()=>verifyDoctor(doctor)">Verify Doctor</v-btn>

                        </v-row>
                    </v-container>
                </v-row>
            </v-card>
            

    </v-col>
        <v-col>
            <v-card>
                <h2 class="pl-2">Chats Rooms available</h2>
                <hr />
                <v-list-item v-for="chatroom in chatrooms" v-bind:key="chatroom.name" @click="()=>openDialog(chatroom)">
                    <v-list-item-content class="mt-4">
                    <v-list-item-title>{{chatroom.name}} <v-icon class="float-right red--text">mdi-trash-can</v-icon></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                                    <v-btn text elevation="0" class="my-2" @click="addDialog=true">Add A Chat Room</v-btn>

            </v-card>
        
    </v-col>

</v-row>
    <v-dialog v-model="deleteRoom">
            <v-card>
                <v-card-title>Delete Room </v-card-title>
                <v-card-text>Are you sure you want to  delete room  : {{room.name }}</v-card-text>
                <v-card-actions>
                      <v-btn
            color="red darken-1"
            text
            @click="deleteRoom = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="deleteRoomFromDb"
          >
            Yes
          </v-btn>
                </v-card-actions>
            </v-card>
            
    </v-dialog>
    <v-dialog v-model="addDialog">
        <v-card>
            <v-card-title>Add Rooms</v-card-title>
            <v-card-text>
                <v-text-field label="Room Name" v-model="name">Room Name </v-text-field>
                <v-text-field label="Short Description">Short Description </v-text-field>
                         <v-card-actions>
                      <v-btn
            color="red darken-1"
            text
            @click="addDialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="addRoom"
          >
            Yes
          </v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="verifyDialog"> 
        <v-card>
            <v-card-title>
                <v-row>
                    <v-col cols="11">
                Verify Doctor

                    </v-col>
                <v-btn icon @click="verifyDialog=false"> <v-icon>mdi-close</v-icon></v-btn>
                </v-row>

            </v-card-title>
            <v-card-actions>
                <v-btn text color="red">
                    No
                </v-btn>
                <v-btn text color="green" @click="verfyDoctorDb">
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-container>
</template>
<script>
import {db,storage} from '../firebaseapp';
export default {
    data:()=>({
            
            chatrooms:[
            ],
            room : {},
            users : [],
            name : "",
            description : "" ,
            addDialog : false,
            doctor : {},
            doctors : [],
            deleteRoom : false,
            verifyDialog : false,
    }),
    computed : {
        unverifiedDoctors : function(){
            let ud = this.doctors.filter((doctor)=>{
                console.log(doctor)
                if(doctor.verified === false)
                return doctor;
            })
            console.log(ud);
            return ud;
        }
    },
    methods : {
        verfyDoctorDb : function()
        {
            db.ref("doctors").child(this.doctor[".key"]).child("verified").set(true);
            this.verifyDialog = false;
        },
        verifyDoctor : function(doctor)
        {
            this.doctor  = doctor;
            this.verifyDialog = true
        },
        openDialog : function(room)
        {
            console.log(room);
            this.room = room;
            this.deleteRoom = true
        },
        downloadCertificate : function(doctor){
            console.log("mai chala");
                  var httpreference = storage.refFromURL(doctor.link);
      httpreference.getDownloadURL().then(function(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.onload = function(event) {
            console.log(event);
          var blob = xhr.response;
          var filename = "certificate"+".pdf";
          var link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = filename;
          link.click();
        };
        xhr.send();
      });
    },
        addRoom : function()
        {
            db.ref("rooms").push({
                "name" : this.name,
                "description" : this.description
            })
            this.addDialog = false;
        },
        deleteRoomFromDb : function(){
           // console.log(this.room[".key"])
            db.ref("rooms").child(this.room[".key"]).remove();
            this.deleteRoom = false;

        }
    },
    firebase : {
        users : db.ref("users"),
        doctors : db.ref("doctors"),
        chatrooms : db.ref("rooms"),
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