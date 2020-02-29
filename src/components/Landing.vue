<template>
    <div>

        <div fluid class="topnavbar">
            <v-btn
            class="register "

            >

            </v-btn>
            <v-btn 
            class="loginbutton"
            >
                jaitn
            </v-btn>
        </div>  
    <v-container fluid class="white lighten-5 headerhai">
    <v-row >
      <v-col class="ml-8 mt-10">
         <div class="text-left pl-8 " > 
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
require('@/assets/styles/main.css')

export default {
    data : ()=> ({

    })
}
</script>

<style src="@/assets/styles/mystyles.css" >

.headerhai{
    height: 100%;
}

.topnavbar{
    height: 70px;
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
    width: 90%
    
}

.real-image{
    height :600px;
}

</style>