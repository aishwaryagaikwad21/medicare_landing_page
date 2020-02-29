<template>
  <div>
    <v-app-bar
      class="primary-light"  
      dense
      dark
      fixed
    >
    

      <v-toolbar-title class="display-1">Chat Room </v-toolbar-title>

      <v-spacer></v-spacer>

            <div class="numberofpeople">
               <div class="mt-1">78</div> 
            </div>
        

        <v-btn class="mx-2  py-2" dark small color="primary">
              
            Leave Room
        
        </v-btn>


    
    </v-app-bar>

    <div  class="message-text  mt-12 ">
          <!-- <li v-for="index in 10" :key="index">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus soluta, modi quia deserunt ratione molestias rem nesciunt, accusamus id reprehenderit porro, eveniet nobis dolor nihil mollitia odit doloribus pariatur quos.</div>
        </li> -->
        <div v-for="index in 10" :key="index">
            <!-- senderhai -->
        <div  class="sender-box mr-5 py-2 pr-5 pl-5 ">
            <div class="sender-name">name :</div>
                
                 <div class="real-message"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ea suscipit ullam vel itaque totam minima amet vero enim molestias. Architecto odit neque qui beatae exercitationem a fugiat illum fuga. </div>   
            </div>

        <!-- reciver -->
        <div class="receiver-box   ml-5 py-2 pr-5 pl-5"> 
            <div class="receiver-name">name :</div>
            <div class="real-message">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eos itaque hic corporis ipsam! Architecto ipsam exercitationem quas dignissimos unde provident. Molestias modi fugit illo? Officia est excepturi ipsa velit?</div>   
            </div>
        </div>
    </div>

       

    <v-form     class="chat-message  "> 
        <v-container fluid>
            <v-text-field
                v-model="message2"
                solo
                label="Enter Message"
                clearable
            >
           
            </v-text-field>
            
        </v-container>
    </v-form>   
 </div>
</template>
<script>
export default {
    name:"Chat room"
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