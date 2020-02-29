<template>
    <div>

        <div fluid class="topnavbar ">
          


                <v-btn
                class="loginhai mr-10 mt-8"
                color="#32c788"
                x-large
                depressed="True"
                rounded="50%"
                outlined
                
                >
                    Login
                </v-btn>

                

                  <v-btn 
                class="loginhai mr-5 mt-8"
                color="#32c788"
                x-large
                depressed="True"
                rounded="50%"
                text
                >

                
                regsiter
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
    </div>
</template>
<script>

export default {
    Name:"Landing Page",
    components:{
        Footer

    },
    data : ()=> ({
    })
}
</script>

<style>
@import "../colors.css";

.headerhai{
    height: 100%;
}

.topnavbar{
    height: 100px;
}
.title-help{
    font-family: roboto;
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



/* navbar */

.loginhai{
    float: right;
}


/* btn */
.loginhai{
    text-transform: capitalize;
    letter-spacing: 2px;

}
</style>