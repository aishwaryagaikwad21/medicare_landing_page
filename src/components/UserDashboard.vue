<template>
<div>
    <v-app-bar class="primary-light removeMarginAndPadding" dense>
        <v-toolbar-title>User3020</v-toolbar-title>
        <v-spacer>

        </v-spacer>
        <v-btn icon class="mr-3">
            <v-icon @click="dialog=true">mdi-plus</v-icon>
        </v-btn>
    </v-app-bar>
    <v-content class="removeMarginAndPadding">
        <v-container fluid class="removeMarginAndPadding" fill-height>
            <v-row>
                <v-col cols="2">
                    <v-card>
                        <v-card-text>
                            Filter Posts By 
                        </v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-row>
                                    Age : {{posts.length}}
                                    <input/>
                                    <p>&lt; Age &gt; </p>
                                    <v-text-field/>
                                </v-row>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="7" justify="center">
                    <UserPostCard v-for="post in posts" :key="post.key" :description="post.description" :symptoms="post.symptomps" :comments="post.comments" :postKey="post">
                    </UserPostCard>
                </v-col>
                
                <v-col>
                    <ChatRoomList/>

                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="dialog" v-if="dialog">
            <v-card>
                <v-card-title>
                            Add Post
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
<v-textarea placeholder="Share Your Experience/ Explain your Problems"  id="textarea">

                </v-textarea>
                        </v-row>
                        <v-row>
                            <v-select :items="symptomps"           v-model="e7" multiple label="Select Symptomps (if any)">

                            </v-select>
                        </v-row>
                        <v-row>
                            <v-chip v-for="s in e7" :key="s" class="mr-3">
                                {{s}}
                            </v-chip>

                        </v-row>
                        <v-row justify="center">
                            <v-btn primary @click="post">Post</v-btn>
                        </v-row>
                    </v-container>
                </v-card-text>
                
            </v-card>
        </v-dialog>
    </v-content>
</div>
</template>
<style scoped>
@import "../colors.css";

.h-100
{
    height: 100vh !important; 
}
</style>
<script>
import UserPostCard from './UserPostCard';
import {db} from '../firebaseapp';

import ChatRoomList from './ChatRoomsList';
export default {

    data : ()=> ({
        ageFilter : ["Less Than 10","Le"],
        comments : ["You should die","you shouldn't have gone to china"],
        username : "Anonymous",
        user : "user3020",
        dialog : false,
        symptomps : ["abcd","efgh","ijkl","rer"],
        selectedSymptomps : [],
        e7 :[],
        posts : []
    }),
    methods : {
        post : function(){
            console.log(this.posts);
           // return ;
         var   text = document.getElementById("textarea").value;
            db.ref("posts").push({
                user : this.user,
                description : text,
                symptomps : this.e7,
                comments : [],
                isDoctor : false,
            }),
            document.getElementById("textarea").value ="";
            this.description="";
            this.e7 = []
            this.dialog =false;
                    }
    },
    components : {
        UserPostCard,
        ChatRoomList


    },
   firebase : {
    posts: db.ref("posts"),
  },
}
</script>