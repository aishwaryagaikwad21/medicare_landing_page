<template>
    <div>

        <div fluid class="topnavbar ">
        


        <div id="myModal" class="modal">
                <div class="modal-content ">
                    <div class="modal-header ">
                    <span class="close " @click="hide()">&times;</span>

                    <div v-if="this.displaycomponent == 'ul'">
                        <UserLogin/>
                    
                        </div>
                        <div v-if="this.displaycomponent == 'ur'">
                    <UserRegister :hide="hide"/>
                        </div>
                    <div v-if="this.displaycomponent == 'dl'">
                    <DoctorLogin/>
                        </div>
                    <div v-if="this.displaycomponent == 'dr'">
                    <DoctorRegister/>
                        </div>
                    
                </div>
            </div>
        </div>

                

                <img src="../assets/img/logo.png" alt="shit" class="logo-bet ">
                    <span class="logo-text-hai">
                        Medinspire
                    </span>
                <v-btn
                class="loginhai mr-10 mt-8"
                color="#32c788"
                x-large
                :depressed="true"
                rounded
                outlined
                @click="show('ul')"
                >
                        login             
                </v-btn>
                

                  <v-btn 
                class="loginhai mr-5 mt-8"
                color="#32c788"
                x-large
                :depressed="true"
                rounded
                text
                @click="show('ur')"
                >

                
                register for free
                </v-btn>

              
        </div>  
    <v-container fluid class="white lighten-5 headerhai">
    <v-row >
      <v-col class="ml-8 mt-10" style="vertical-align: middle">
         <div class="text-left pl-8" > 
             <h1 class="title-help mt-8" >
                 Medinspire <br>
                <span style="font-size:35px;line-height:0px; letter-spacing: 0px;">  A portal where experience becomes Doctor.  </span>
             </h1>

             <p class="title-pg mt-5" >
                 Get to Know and talk to similiar people on Medinspire and learn from there experiences!
                Become a Community!                
             </p>
         </div>
      </v-col>

      <v-col
        class="lnd-image"
        >
          <img src="@/assets/img/lnd.png" alt="" class="real-image">
      </v-col>

    </v-row>
  </v-container>
    <Facilities />
    
          <v-container fluid class="ml-8" >
        <v-row>
            <v-col>
                <v-container fluid class="pl-10">
                        <h1 class="title-help" style="font-size:40px">Help our community grow by joining as a Doctor, we need your help!</h1>
                        <br>
                        <p class="title-pg">Help other fellow patients <br> by registering yourself 
                        </p>
                        <br>
                        <div class="d-flex">
                            <v-btn x-large class="doctor-register mr-10 " @click="show('dl')" >
                            <pre> Login </pre>
                            </v-btn>

                            <v-btn x-large class="doctor-register ml-10 mr-auto" @click="show('dr')" >
                                    Register
                            </v-btn>
                        </div>
                </v-container>
            </v-col>
            <v-col>
                <v-img src="../assets/img/doctorshelp.png" aspect-ratio="2" contain></v-img>
            </v-col>
        </v-row>
    </v-container>
    <Community />
    <Stats />
    <Footer />
    </div>

</template>
<script>
import Footer from './Footer'
import DoctorRegister from './DoctorRegistrationForm'
import Facilities from './Facilities'
import UserRegister from './UserRegistration'
import UserLogin from './UserLogin'
import DoctorLogin from './DoctorLogin'
import Community from './Community'
import Stats from './Stats'
export default {
    Name:"Landing Page",
    components:{
        Footer,
        DoctorRegister,
        Facilities,
        UserRegister,
        UserLogin,
        DoctorLogin,
        Community,
        Stats
    },
    data : ()=> ({
        isHidden: false,
        displaycomponent:"",
          depressed : true


    }),
    methods:{
         show(type) {
            var modal = document.getElementById("myModal");
            modal.style.display="block"
            this.displaycomponent=type
            
        },
        
        hide() {
            var hideblock =document.getElementById("myModal");
            hideblock.style.display="none"
        }
    }
}



</script>

 
<style>
@import "../assets/colors.css";

.headerhai{
    height: 100%;
}

.topnavbar{
    height: 100px;
}
.title-help{
    font-weight: 700;
    font-size:50px;
    color:#232D42;
    line-height: 50px;
    letter-spacing: 2px;
}

.title-pg{
    line-height: 30px;
    color: #a3a8b2;
    width: 100%;
    font-size:27px;
    
}

.real-image{
    height :600px;
}

/* footer-link */
.header-link{
    text-decoration: none;
    color: #32C788 !important   ;
}

.header-link:hover{
    text-decoration: none;
    color: #32C788;
}




/* navbar */

.loginhai{
    float: right;
}


/* btn */
.loginhai{
    text-transform: capitalize;
    letter-spacing: 2px;
}


/* logobet */

.logo-bet{
    height: 50px;
    margin-top: 40px;
    margin-left: 130px;
}

/* logo-text */

.logo-text-hai{
    font-size: 30px;
    color: grey;
}



/* codied code */
.modal {

  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: #000;
  float: right;
  margin-right: 10px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}



/* doctor login register */
.doctor-login{
    border:1px solid #32C788;
    color:  #32C788 !important;
    padding: 10px 25px;
    font-size: 20px;
    border-radius: 10%; 
    text-decoration: none;
}
.doctor-register{
    background-image: linear-gradient(to right, #32C788 0%, #38f9d7 100%);
    color:white !important;
    font-size: 30px;
    text-decoration: none;
}


</style>