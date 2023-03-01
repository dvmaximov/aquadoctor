import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    showHeader: true,
  }),
  actions: {
    setShowHeader(value) {
      if (this.showHeader !== value) this.showHeader = value;
    },
    shutdown() {
      window.CMD.runCmd("shutdown now");
    },
  },
});
