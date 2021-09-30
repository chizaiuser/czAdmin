import { App } from "vue";
import czDrawer from "./drawer.vue";

export const CzDrawer = Object.assign(czDrawer, {
  install(app: App) {
    app.component(czDrawer.name, czDrawer);
  }
});

export default CzDrawer;