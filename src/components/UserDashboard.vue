<template>
<div>
    <v-app-bar class="primary-light removeMarginAndPadding" dense>
        <v-toolbar-title>User3020</v-toolbar-title>
        <v-spacer>

        </v-spacer>
        <v-btn class="mr-3 post-button">
            New Post
            <v-icon @click="dialog=true">mdi-plus</v-icon>
        </v-btn>
    </v-app-bar>
    <v-content class="removeMarginAndPadding">
        <v-container fluid class="removeMarginAndPadding" fill-height>
            <v-row>
                <v-col cols="2" class="ml-4 text-center mt-5">
                    <v-card class="pt-4">
                        
                            <h2>Filter Posts By</h2> 
                        
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
      
        <h2 class="mx-auto">Sort by:</h2>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Time Posted"
          editable
          item-value="text"
        ></v-overflow-btn>
        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Posted by Age"
          editable
          item-value="text"
        ></v-overflow-btn>
        
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
.post-button{
    background-color: red;
    
    border-radius: 10px !important;
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
        posts : [],
        dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' },],
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