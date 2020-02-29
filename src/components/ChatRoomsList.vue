<template>
    <v-card>

                    <v-list>
                              <v-subheader>Chat Rooms</v-subheader>
                                            <div v-for="room in rooms" :key="room">

                                            <v-list-item @click="console.log('xyz')" >
                            <v-list-item-content>
                               <v-list-item-title>
                                {{room}}

                            </v-list-item-title>
                          
                            </v-list-item-content>
                            
                        </v-list-item>
                        <v-divider></v-divider>
                                            </div>

                    <v-btn flat elevation="0" class="my-2" @click="chatDialog=true">Add A Chat Room</v-btn>
                    </v-list>

                                        </v-card>
                    <v-dialog v-model="chatDialog"></v-dialog>
</template>
<script>
export default {
    
    data : ()=> ({
        rooms : ["Corona Virus","Balzimer","JatinVirus","Punita Bacterial Infection"],
    }),
    methods : {
        soja : function(){
            console.log("soka")
        }
    }
}
</script>