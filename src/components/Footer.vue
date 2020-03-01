<template>
  <v-footer
    class="py-10"
  >
  <v-container fluid >
   <v-row justify="center" no-gutters>
       <v-col class="text-center">
           <img src="../assets/img/logo.png" alt="shit" class="logo-footer">
           <h3 class="mx-auto text-gray">Medinspire!</h3>
           <h1 class="mt-6 text-primary">ABOUT US</h1>
           
           <p>A Social media platform to meet and know people with similiar illness.</p>
           <h5>CONTACT NO: 02142-554212</h5>
           <h5>EMAIL:medinspireus@gmail.com</h5>
       </v-col>
        <v-col class="text-center">
          <h2 class="mb-10 text-primary">Useful links</h2>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link class="footer-link" to="/">Privacy Policy</router-link></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
                <v-list-item>
            <v-list-item-content>
            <v-list-item-title><router-link class="footer-link" to="/">Contact Us</router-link></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
                <v-list-item>
            <v-list-item-content>
              <v-list-item-title><router-link class="footer-link" to="/">Donate in Foundation</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
              <v-list-item>
            <v-list-item-content>
              <v-list-item-title><router-link class="footer-link" to="/">About Us</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
              </v-col>
       <v-col>
         
  <v-form v-model="valid">
    <v-container class="pt-0">
      <v-row class="pt-0">
        <h2 class="ml-3 text-primary">Subscribe to our Newsletter</h2>
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
          <v-btn outlined class="primary-color" dark>Subscribe</v-btn>
        </div>
       </v-col>
    </v-row>


  </v-container>
  <v-container fluid class="dark--text text-center primary-background no-pad no-mar">
          <v-card-text class="no-mar" background-color="#327c88">
        {{ new Date().getFullYear() }} — <strong>BUGBUSTERS&copy;</strong>
      </v-card-text>

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
  .footer-link:hover{
    text-decoration: none;
    color: #32c788
  }
  .primary-background{
    background-color: #32c788;
  }
  .primary-color{
    color: #32c788;
    border:1px solid #32c788;
  }
  .logo-footer{
    height: 50px;
  }
  .text-gray{
    color:gray;
  }
  .text-primary{
    color: #32c788;
  }
  .no-pad{
    padding: 0px !important;
  }
  .no-mar{
    margin: 0px !important;
  }
</style>