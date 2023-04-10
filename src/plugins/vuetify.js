import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import colors from "vuetify/lib/util/colors";
import ic_tas from "../assets/icons/logo_product.vue";
import ic_arrowright from "../assets/icons/arrow_right.vue";
import ic_arrowleft from "../assets/icons/arrow_left.vue";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {
      ic_tas: {
        component: ic_tas,
      },
      ic_arrowright: {
        component: ic_arrowright,
      },
      ic_arrowleft: {
        component: ic_arrowleft,
      },
    },
  },
  theme: {
    themes: {
      light: {
        btnprimary: "#6D214F",
        btnsecondary: "#B33771",
        background: "#FAFBFC",
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
