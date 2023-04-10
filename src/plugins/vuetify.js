import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import colors from "vuetify/lib/util/colors";
import ic_tas from "../assets/icons/logo_product.vue";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {
      ic_tas: {
        component: ic_tas,
      },
    },
  },
  theme: {
    themes: {
      light: {
        btnprimary: "#6D214F",
        btnsecondary: "#B33771",
        imam: "#B33771",
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
