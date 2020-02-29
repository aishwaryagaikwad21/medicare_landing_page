<template>
    <div>
       <div  class="sender-box mr-5 py-2 pr-5 pl-5 " v-if="sent_by===username">
            <div class="sender-name">{{sent_by}}</div>
                
                 <div class="real-message"> {{message}} </div>   
            </div> 
          <div class="receiver-box   ml-5 py-2 pr-5 pl-5" v-else> 
              
            <div class="receiver-name">{{sent_by}}</div>
            <div class="real-message">{{message}}</div>   
            </div>
                

    </div>
</template>
<script>

export default {
    data : ()=>({
        user  : "",

    }),
    props : {
        "message" : String,
        "sent_by" : String ,
        "username" : String 
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