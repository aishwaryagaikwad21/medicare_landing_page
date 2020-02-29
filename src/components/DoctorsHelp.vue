<template>
    <v-container fluid >
        <v-row>
            <v-col>
                <v-container fluid class="pl-10">
                        <h1>Doctors help us ny registering yourself with us!</h1>
                        <p>Helping other fellow patiennts is easy just register yourself and help the fellow patients!</p>
                        <div class="d-flex">
                                            <router-link class="doctor-login ml-auto mr-10" to="/">
                        Login
                    </router-link>
                                    <router-link class="doctor-register ml-10 mr-auto" to="/">
                        Register
                    </router-link>
                        </div>
                </v-container>
            </v-col>
            <v-col>
                <v-img src="../assets/img/doctorshelp.png" aspect-ratio="2" contain></v-img>
            </v-col>
        </v-row>
    </v-container>
    
</template>
<style>
.doctor-login{
    border:1px solid #32C788;
    color:  #32C788 !important;
    padding: 10px 25px;
    font-size: 20px;
    border-radius: 20px; 
    text-decoration: none;
}
.doctor-register{
    background-image: linear-gradient(to right, #32C788 0%, #38f9d7 100%);
    color:white !important;
    padding: 10px 25px !important;
    font-size: 20px;
    border-radius: 20px; 
    text-decoration: none;
}
</style>
<script>

export default {
    
}
</script>