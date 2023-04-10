<template>
  <v-app class="">
    <v-app-bar app class="apps-bar" color="white">
      <v-toolbar-title>Impo Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <span class="ma-3">Home</span>
        <span class="ma-3">Category</span>
        <span class=""
          >Product
          <span>
            <v-badge color="btnprimary" dot class="ma-1">
              <v-icon small> $ic_tas </v-icon>
            </v-badge>
          </span>
        </span>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="btnsecondary" class="btn" depressed>Sign Up </v-btn>
      <v-btn color="btnprimary" class="btn" depressed>Login </v-btn>
    </v-app-bar>
    <v-main class="mt-2">
      <v-container class="">
        <LandingPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";

export default {
  components: {
    LandingPage,
  },
};
</script>
