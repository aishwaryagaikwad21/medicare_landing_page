<template>
  <v-footer
    absolute
    class="py-10"
  >
  <v-container fluid >
   <v-row justify="center" no-gutters>
       <v-col>
           <h1>ABOUT US</h1>
           <h3>Medinspire!</h3>
           <p>A Social media platform to get healthy</p>
           <h3>CONTACT NO: 02142-554212</h3>
           <h3>EMAIL:medinspireus@gmail.com</h3>
       </v-col>
        <v-col>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link class="footer-link" to="/">Privacy Policy</router-link></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
                <v-list-item>
            <v-list-item-content>
            <v-list-item-title><router-link class="footer-link" to="/">Privacy Policy</router-link></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
                <v-list-item>
            <v-list-item-content>
              <v-list-item-title><router-link class="footer-link" to="/">Privacy Policy</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
              <v-list-item>
            <v-list-item-content>
              <v-list-item-title><router-link class="footer-link" to="/">Privacy Policy</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
              </v-col>
       <v-col>
         
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <h3 class="ml-3">Subscribe to our Newsletter</h3>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="fullname"
            :rules="nameRules"
            :counter="10"
            label="Full Name"
            required
          ></v-text-field>
        </v-col>



        <v-col
          cols="12"
          md="12"

        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
               <div class="text-center">
          <v-btn outlined color="primary" dark>Subscribe</v-btn>
        </div>
       </v-col>
    </v-row>


  </v-container>
 
  </v-footer>

    
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      fullname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>
<style scoped>
  .footer-link{
    text-decoration: none;
    color: black;
  }
</style>