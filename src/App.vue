<template>
  <v-app>
    <v-app-bar app class="apps-bar">
      <v-toolbar-title>Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="btnsecondary" class="btn" depressed>Sign Up </v-btn>
      <v-btn color="btnprimary" class="btn" depressed>Login </v-btn>
    </v-app-bar>
    <v-main>
      <LandingPage />
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",

  components: {
    LandingPage,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.apps-bar {
  padding: 3px 81px;
  background: #ffff !important;
  box-shadow: 0px 6px 10px rgba(170, 170, 170, 0.1) !important;
}
</style>
