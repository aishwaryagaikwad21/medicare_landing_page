<template>
<v-container>
    <v-row>
        <v-col cols="6">
            <v-img src="@/assets/img/logo.png" alt="" class="real-image" contain widht="80%"  />
            <h1>MedInspire</h1>
            <h3>Help eachother,heal together!</h3>
        </v-col>
        <v-col cols="6">
              <div class="container-fluid text-align text-center my-auto">
                <v-text-field label="Main input" :rules="rules" hide-details="auto"></v-text-field>
                <v-text-field label="Another input"></v-text-field>
            </div>
        </v-col>
    </v-row>
</v-container>

</template>
<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script>
<style scoped>

</style>