<template>
  <div>
    <v-app-bar
      class="primary-light"  
      dense
      dark
      fixed
    >
    

      <v-toolbar-title class="display-1">{{roomName}} </v-toolbar-title>

      <v-spacer></v-spacer>

            <div class="numberofpeople">
               <div class="mt-1">78</div> 
            </div>
        

        <v-btn class="mx-2  py-2" dark small color="primary">
              
            Leave Room
        
        </v-btn>


    
    </v-app-bar>

    <div  class="message-text  mt-12 ">
    
        <div v-for="chat in chats" :key="chat.message">
                        
            <UserChatCard :sent_by="chat.sent_by" :message="chat.message" :username="username"/>
            </div>
    </div>

       

    <v-form     class="chat-message  "> 
        <v-container fluid>
            <v-row>
                <v-col cols="11">
  <v-text-field
                v-model="message2"
                solo
                label="Enter Message"
                clearable
            >
           
            </v-text-field>
                </v-col>
                <v-col>
                    <v-btn fab color="primary" @click="sendChat">
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
          
            
        </v-container>
    </v-form>   
 </div>
</template>
<script>
import UserChatCard from "./UserChatCard"
import { db } from '../firebaseapp';
export default {
    data : ()=>({
        roomName  : "",
        key : "",
        message2 :"",
        chats  :[],
        username : ""
    }),
    components : {
        UserChatCard
    },
    mounted: function () {
  window.setInterval(() => {
    this.getChats()
  }, 1000)
},
    methods  : {
        sendChat : function(){
            db.ref("rooms").child(this.key).child("chats").push({
                "message" : this.message2,
                "sent_by"  : this.$store.state.user.username
            })
            this.message2 ="";
            this.getChats();

        },
        getChats : async function(){
            console.log(this.$store.state.user.username);
            if(this.key==undefined)
            console.log(undefined) 
            else  
        this.chats = (await db.ref("rooms").child(this.key).child("chats").once('value')).val()

        }
    },
   async  created(){
       console.log(db);
       this.username = this.$store.state.user.username;
        this.roomName = this.$route.params.name;
        let snapshot =  await db.ref("rooms").once('value');
        snapshot.forEach((chilSnapshot)=>{
            if(chilSnapshot.val().name=== this.roomName)
            {this.key = chilSnapshot['key'];
            }
        });
        this.getChats();
    },
   
}
</script>
<style scoped>
@import "../assets/colors.css";

.chat-message{
   position: fixed;                  /* added */
   bottom:0;                           /* added */
   left:0; 
   width:100%;
}

.numberofpeople{
    background-color: red;
    height: 30px;
    width:30px;
    text-align: center;
    vertical-align: middle !important;
    border-radius: 100%
}

.message-text{
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
    background-color: whitesmoke;
    overflow: auto;
    padding-bottom: 20vh;
}

.sender-box{

    margin-top: 10px;
    max-width: 30%;
    color: white;
    float: right;
    text-align: right;
    border-radius: 20px;
    margin-left: 100% !important;
    background-image: linear-gradient(to right, #32C788 0%, #38f9d7 100%);;
}
.receiver-box{
    
    max-width: 30%;
    margin-top: 10px;
    border: 1px solid #32C788;
    float: left;
    text-align: left;
    border-radius: 20px;
    margin-right: 100% !important;
}

.sender-name{
    text-align: left
}

.real-message{
    text-align: center ;
    display: flex;
    margin-right: 100px;
    width: 100%;
}
</style>