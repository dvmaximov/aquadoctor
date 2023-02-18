import { boot } from "quasar/wrappers";
import mitt from "mitt";

export default boot(({ app }) => {
  const emitter = mitt();
  app.provide("emitter", emitter);
});
