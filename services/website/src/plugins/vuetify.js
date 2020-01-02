import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#00d9c9",
        secondary: "#d9000e",
        accent: "#ff321a",
        error: "#cb0000",
        info: "#007bd9",
        success: "#00d95e",
        warning: "#ca00d9"
      }
    }
  }
});
