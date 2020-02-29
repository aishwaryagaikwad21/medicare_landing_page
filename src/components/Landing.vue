<template>
    <div>

        <div fluid class="topnavbar ">
            
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
                


                <router-link class="header-link" to="/">
                        login
                    </router-link>
                </v-btn>

                

                  <v-btn 
                class="loginhai mr-5 mt-8"
                color="#32c788"
                x-large
                depressed="True"
                rounded="50%"
                text
                >

                
                <router-link class="header-link" to="/doctorsregistrations" >
                register
                </router-link>
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
    <DoctorsHelp />
    <Footer />
    </div>
    
</template>
<script>
import Footer from './Footer'
import Facilities from './Facilities'
import DoctorsHelp from './DoctorsHelp'
export default {
    Name:"Landing Page",
    components:{
        Footer,Facilities,DoctorsHelp

    },
    data : ()=> ({
    })
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
</style>