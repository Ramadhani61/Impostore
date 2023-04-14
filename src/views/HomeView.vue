<template>
  <v-app class="">
    <v-app-bar app class="apps-bar" color="white" absolute>
      <div class="">
        <span class="font-weight-reguler text-title">Impo Store</span>
      </div>
      <v-spacer />
      <div class="">
        <v-tabs class="d-flex justify-center" color="btnsecondary">
          <v-tabs-slider color="btnsecondary" class="" style=""></v-tabs-slider>
          <v-tab>Home</v-tab>
          <v-tab>Category</v-tab>
          <v-tab
            >product
            <span>
              <v-badge color="btnprimary" dot class="">
                <v-icon small> $ic_tas </v-icon>
              </v-badge>
            </span></v-tab
          >
        </v-tabs>
      </div>
      <v-spacer />
      <v-btn color="btnsecondary" class="btn text-capitalize mr-2" depressed
        >Sign Up
      </v-btn>
      <v-btn color="btnprimary" class="btn text-capitalize" depressed
        >Login
      </v-btn>
    </v-app-bar>
    <v-main class="mt-2 background">
      <v-container class="">
        <LandingPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";

export default {
  components: {
    LandingPage,
  },
};
</script>

<style scoped></style>
