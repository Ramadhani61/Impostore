<template>
  <v-app class="">
    <v-container class="pa-0">
      <v-app-bar app class="apps-bar" color="white">
        <span class="font-weight-reguler text-title">Impo Store</span>

        <v-spacer></v-spacer>
        <!-- <v-btn-toggle v-model="toggle_exclusive" borderless mandatory> -->
        <v-btn class="text-capitalize font-weight-light" text>Home</v-btn>
        <v-btn class="text-capitalize font-weight-light" text>Category</v-btn>
        <v-btn class="text-capitalize font-weight-light" text>
          Product
          <span>
            <v-badge color="btnprimary" dot class="">
              <v-icon small> $ic_tas </v-icon>
            </v-badge>
          </span>
        </v-btn>
        <!-- </v-btn-toggle> -->
        <v-spacer></v-spacer>
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
    </v-container>
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

<style scoped></style>
