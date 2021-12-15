import { App } from "vue";
import czUser from "./user.vue";

export const CzHeader = Object.assign(czUser, {
  install(app: App) {
    app.component(czUser.name, czUser);
  }
});

export default CzHeader;