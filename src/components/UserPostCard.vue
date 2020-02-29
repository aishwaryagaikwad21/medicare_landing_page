<template>
<div>


    <v-card  class="ma-5">
                        <v-card-title>
                           <v-icon large left>mdi-account-outline
 </v-icon>
                    Anonymous
                        </v-card-title>
                        <v-card-text class="headline font-weight-bold">
    {{description}}

    </v-card-text>
    <v-list>

        <v-subheader>
            <v-row justify="end" class="pr-5 mr-5">
 Write a Comment
            </v-row>

           </v-subheader>
        
    </v-list>
    <div v-if="symptoms!=undefined ===true">
    <v-subheader class="ml-5">
        Symptoms
    </v-subheader>
    <v-container>

    <v-row class="ml-5">
        <v-chip v-for="symptom in symptoms" :key="symptom" class="mr-2">
            {{symptom}}
        </v-chip>
    </v-row>
    </v-container>
    </div>
    <v-subheader class="ml-5">
        {{comments === undefined? "Be the first one to comment " : "Comment Now"}}
    </v-subheader>
    <div v-for="comment in comments" :key="comment">
    <v-list-item >
            <v-list-item-content>
                <v-list-item-title>
                    <v-icon>mdi-account-outline</v-icon>
                    {{comment}}
                </v-list-item-title>
                </v-list-item-content> 
        </v-list-item>
        <v-divider></v-divider>
    </div>
        <v-container>
 <v-row class="removeMarginAndPadding">
        <v-col cols="11" class="removeMarginAndPadding" >
            <v-text-field multi-line    placeholder="Post a Comment " class="ml-4" 
            v-model="comment"
            >

            </v-text-field>
        </v-col>
            <v-col cols="1">
 <v-btn icon>
                <v-icon @click="postComment">mdi-arrow-right</v-icon>
            </v-btn>
            </v-col>
           
    </v-row>
        </v-container>
       
                    </v-card>
    
</div>
</template>
<style scoped>
@import "../colors.css";

</style>
<script>
import {db} from '../firebaseapp';
export default {
    
      data : ()=> ({
        ageFilter : ["Less Than 10","Le"],
        rooms : ["Corona Virus","Balzimer","JatinVirus","Punita Bacterial Infection"],
        username : "Anonymous",
        comment : ""
    }),
    props : {
        description : String,
        symptoms : Array,
        comments : Object,
        postKey : Object
    },
    methods : {
        postComment : function(){
            let key = this.postKey['.key'];
            if(this.comment!="")
            {db.ref("posts").child(key).child("comments").push(this.comment);
                         this.comment = "";
            }
        }
    }
}
</script>