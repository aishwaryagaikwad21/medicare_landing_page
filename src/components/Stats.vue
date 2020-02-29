<template>
    <v-container fluid class="bg-grey d-flex flex-row justify-center" >
        <v-col cols="3">
            <div class="card-transparent ">
            <v-icon class="icon-mdi text-center">mdi-account-check</v-icon>
                <p>Over 100 verified Doctors and Nutrionalists.</p>
            </div>
        </v-col>        <v-col cols="3">
            <div class="card-transparent">
                <v-icon class="icon-mdi text-center" >mdi-account</v-icon>
                <p>More than 20000 active users!</p>
            </div>
        </v-col>
                <v-col cols="3">
            <div class="card-transparent">
                <v-icon class="icon-mdi" >mdi-account-group</v-icon>
                <p>New Chats rooms added everyday to coonect more people.</p>
            </div>
        </v-col>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bg-grey{
    background-color: #f5f5f5;
    color: rgb(104, 104, 104);
}
.icon-mdi{
   color:rgb(104, 104, 104);
   font-size: 100px !important;
}
.card-transparent{
    text-align: center;
}
</style>