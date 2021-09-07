import { App } from "vue";
import czHeader from "./header.vue";

export const CzHeader = Object.assign(czHeader, {
  install(app: App) {
    app.component(czHeader.name, czHeader);
  }
});

export default CzHeader;