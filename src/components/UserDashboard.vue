<template>
<div>
    <v-app-bar class="primary-light removeMarginAndPadding" dense>
        <v-toolbar-title>{{user}}</v-toolbar-title>
        <v-spacer>

        </v-spacer>
        <v-btn class="mr-3 post-button" @click="dialog=true">
            New Post
            <v-icon >mdi-plus</v-icon>
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
                                    <!-- Age : {{posts.length}} -->
                                    Age :34
                                    <input/>
                                   
                                    <v-text-field/>
                                </v-row>
                            </v-list-item>
                        </v-list>
      
        <h2 class="mx-auto">Sort by:</h2>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          v-model="sortByTime"
          label="Time Posted"
          editable
          item-value="text"
        ></v-overflow-btn>
        <v-select :items="symptomps" multiple v-model="selectedSymptomps" label="Sort By Symptomps"></v-select>
        
                                </v-card>
                </v-col>

                <v-col cols="7" justify="center">
                    <UserPostCard v-for="post in sortedPosts"  :key="post.key" :description="post.description" :symptoms="post.symptomps" :comments="post.comments" :postKey="post" :rating="post.rating">
                    </UserPostCard>
                </v-col>
                
                <v-col>
                    <ChatRoomList/>

                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="dialog">
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
    computed : {
            sortedPosts : function(){
                if(this.sortByTime == "Newest")
                {
                    let reversedPosts  =[];
                    for(let i =this.posts.length-1;i>=0;i--)
                    reversedPosts.push(this.posts[i]);
                    if(this.selectedSymptomps.length!=0)
                    {
                        let filteredPosts =[]; 
                        for(let j=0;j<this.selectedSymptomps.length;j++)
                        for(let i =0;i<reversedPosts.length;i++)
                            {
                                let post = reversedPosts[i];
                                console.log("Hello"+post);
                                if(post.symptomps.includes(this.selectedSymptomps[j]) && !filteredPosts.includes(post))
                                filteredPosts.push(post);
                            }
                        return filteredPosts;
                    }
                else
                    return reversedPosts;

                }
                else

                return this.posts;
            }
    },
    data : ()=> ({  
        ageFilter : ["Less Than 10","Le"],
        comments : ["You should die","you shouldn't have gone to china"],
        username : "Anonymous",
        user : "user3020",
        sortByTime : "Newest",
        dialog : false,
        symptomps : ["Anxiety","Headache","Pain","Breathing Difficulty","Epilepsy","Obesity","Allergies"],
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
        { text: 'Newest' },
        { text: 'Oldest' },
      ],
    }),
    created(){
    if(this.$store.state.user.loggedIn === false)
            this.$router.replace(`/`);
    else 

    this.user = this.$store.state.user.username;
    console.log(this.$store.state);
  },
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