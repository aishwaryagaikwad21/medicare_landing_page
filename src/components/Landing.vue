<template>
    <div>

        <div fluid class="topnavbar ">
        


        <div id="myModal" class="modal">
                <div class="modal-content ">
                    <div class="modal-header ">
                    <span class="close " @click="hide()">&times;</span>

                    <Doctor/>

                </div>
            </div>
        </div>

                

                <img src="../assets/img/logo.png" alt="shit" class="logo-bet ">
                    <span class="logo-text-hai">
                        MedInspire
                    </span>
                <v-btn
                class="loginhai mr-10 mt-8"
                color="#32c788"
                x-large
                depressed="True"
                rounded="50%"
                outlined
                >
                        login             
                </v-btn>
                

                  <v-btn 
                class="loginhai mr-5 mt-8"
                color="#32c788"
                x-large
                depressed="True"
                rounded="50%"
                text
                @click="show()"
                >

                
                register
                </v-btn>

              
        </div>  
    <v-container fluid class="white lighten-5 headerhai">
    <v-row >
      <v-col class="ml-8 mt-10">
         <div class="text-left pl-8" > 
             <h1 class="title-help mt-8" >
                 MedInspire <br>
                 Helping Patients.
             </h1>

             <p class="title-pg mt-5">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est incidunt necessitatibus vel in corrupti quibusdam eveniet velit quas omnis reprehenderit iusto ullam consequatur, recusandae blanditiis quod magnam. <br> Aperiam, quis autem!
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
    <Footer />
    </div>

</template>
<script>
import Footer from './Footer'
import Doctor from './DoctorRegistrationForm'
import Facilities from './Facilities'

export default {
    Name:"Landing Page",
    components:{
        Footer,
        Doctor,
        Facilities
    },
    data : ()=> ({
        isHidden: false
    }),
    methods:{
         show() {
            var modal = document.getElementById("myModal");
            modal.style.display="block"
            
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
    line-height: 65px;
    letter-spacing: 2px;
}

.title-pg{
    line-height: 30px;
    color: #a3a8b2;
    width: 100%
    
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




</style>