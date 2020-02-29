<template>
  <div>
    <v-app-bar
      class="primary-light"  
      dense
      dark
      fixed
    >
    

      <v-toolbar-title>Page title</v-toolbar-title>

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

            jatinda.kjvdajsvasvkhasvads
            
            </div>

        <!-- reciver -->
        <div class="receiver-box   ml-5 py-2 pr-5 pl-5"> 
            djasldhaksgd
            
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
    background-color: green;
    overflow: auto;
    padding-bottom: 30vh;
    padding-bottom: 30vh;
}

.sender-box{

    margin-top: 10px;
    border: 2px solid red;
    float: right;
    text-align: right;
    border-radius: 20px;
    margin-left: 100% !important;
}
.receiver-box{
    margin-top: 10px;
    border: 2px solid red;
    float: left;
    text-align: left;
    border-radius: 20px;
    margin-right: 100% !important;
}
</style>