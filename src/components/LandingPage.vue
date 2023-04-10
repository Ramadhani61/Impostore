<template>
  <div>
    <v-carousel
      v-model="model"
      height=""
      hide-delimiters
      :next-icon="$ic_arrowright"
      :prev-icon="$ic_arrowleft"
    >
      <v-carousel-item
        v-for="(item, i) in colors"
        :key="i"
        :src="item.src"
        contain
      >
      </v-carousel-item>
    </v-carousel>
    <v-card
      class="mt-6"
      color="btnsecondary"
      flat
      max-width="170"
      max-height="240px"
    >
      <v-card-text class="white--text"> Product Category </v-card-text>
    </v-card>
    <div class="mt-6">
      <div class="d-flex flex-row" width="200px">
        <v-card
          style="filter: drop-shadow(0px 4px 20px rgba(168, 168, 168, 0.1))"
          class="mr-auto card-product"
          width="166px"
          max-width="166px"
          flat
          color=""
          v-for="(item, i) in imgproduct"
          :key="i"
        >
          <v-img
            contain
            class="pa-12 d-inline-block"
            :src="item.src"
            max-width="106px"
          ></v-img>
          <v-card-text class="btnsecondary white--text" style="">
            {{ item.text }}
          </v-card-text>
        </v-card>
      </div>
    </div>
    <h3 class="mt-6 font-weight-medium">All Products</h3>
    <v-row no-gutters class="mt-6">
      <v-col cols="12" md="6" sm="8" class="offset-md-2">
        <v-text-field label="Search Something" solo dense></v-text-field
      ></v-col>
      <v-col cols="12" md="2" sm="8" class="">
        <v-btn
          color="btnprimary"
          class="btn text-capitalize d-flex"
          depressed
          style="text-align-last: justify"
          >Search
        </v-btn></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    model: 0,
    colors: [
      { src: require("../assets/images/banner.png") },
      { src: require("../assets/images/banner.png") },
      { src: require("../assets/images/banner.png") },
    ],
    imgproduct: [
      { src: require("../assets/images/skincare.png"), text: "Skincare" },
      { src: require("../assets/images/smartphone.png"), text: "Smartphone" },
      { src: require("../assets/images/laptop.png"), text: "Laptop & PC" },
      { src: require("../assets/images/fashion.png"), text: "Fashion" },
      { src: require("../assets/images/sepatu.png"), text: "Sepatu" },
      { src: require("../assets/images/elektronik.png"), text: "Electronic" },
    ],
  }),
};
</script>

<style scoped></style>
