<template>
<v-container class="pa-5">
        <v-form>
             <div class="py-6 " align=center style="font-size:30px; font-color:#32c788" >
          Enter Details 
        </div>
<v-row justify="center" >
 
    
    </v-row>
    
     <v-text-field placeholder="Name" outlined="" required v-model="name">
         
     </v-text-field>
     <v-text-field placeholder="Age" outlined="" type="number" required v-model="age">
         
     </v-text-field>
     <v-select
      v-model="selectedQualifications"
      :items="qualifications"
      label="Qualification"
      outlined
      multiple
    >
    </v-select>
         <v-text-field placeholder="Experience(in years)" outlined="" type="number" v-model="experience" required>
         </v-text-field>
     <v-text-field placeholder="Contact" outlined="" type="number" required v-model="contactno">
         
     </v-text-field>    
      <v-text-field
            label="Upload Certificate for Verification"  
            @click="pickFile"
            v-model="DocumentFileName"
            readonly
            prepend-icon="attach_file"
          ></v-text-field>
          <input
            type="file"
            style="display: none"
            ref="Document"
            accept="application/pdf"
            @change="onFilePicked"
          />
                              <v-text-field placeholder="Password" outlined=""  v-model="password" type="password" />

                    <v-text-field placeholder="Additional Details" outlined=""  v-model="additionalDetails"/>

    <v-row justify="center">
 <v-btn color="primary" @click="register"> 
     Register
    </v-btn>
    </v-row>
        </v-form>


 </v-container>
</template>
<script>
import { db, storage } from "../firebaseapp";
var uploadTask = "";

export default {
    data : ()=>({
        qualifications : ["B.HONS","H.HONS","X.HONS","Physicrits"],
        age : "",
        name :"",
        selectedQualifications :[],
        additionalDetails : "",
        selectedFileName : "",
        experience : "",
          DocumentFile: null,
      DocumentFileName: "",
      DocumentFileUrl: "",
      downloadUrl: "",
      contactno : "",
      password : ""
       }),
    methods : {
         pickFile() {
      this.$refs.Document.click();
    },
        register : function(){
         let mythis =this;
           // console.log(mythis);
           console.log(db);
            var storageRef  = storage.ref();
            uploadTask = storageRef
        .child(this.DocumentFileName)
        .put(this.DocumentFile);
        uploadTask.on(
            "state_changed",
            function(snapshot){
                 var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log("Upload is " + progress + "% done");

            },
             function(error) {
          // Handle unsuccessful uploads
          console.log(error);
        },
         function() {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log("File available at", downloadURL);
            var doctor = {
              link: downloadURL,
              name: mythis.name,
              contactno: mythis.contactno,
              experience : mythis.experience,
              additionalDetails : mythis.additionalDetails,
              age : mythis.age,
              qualifications : mythis.selectedQualifications,
              password : mythis.password,
              verified : false

            };
            db.ref("doctors")
              .push(doctor);
          });
        }
      );

        },
        onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.DocumentFileName = files[0].name;
        if (this.DocumentFileName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.DocumentFileUrl = fr.result;
          this.DocumentFile = files[0];
        });
      }
    }
    }
}
</script>