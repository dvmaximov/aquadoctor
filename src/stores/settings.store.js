import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    showHeader: true,
    backPaths: [],
  }),
  getters: {
    isBackEmpty() {
      return this.backPaths.length === 0;
    },
  },
  actions: {
    setShowHeader(value) {
      if (this.showHeader !== value) this.showHeader = value;
    },
    shutdown() {
      window.CMD.runCmd("shutdown now");
    },

    useBackPath() {
      const router = useRouter();
      return () => {
        if (this.backPaths.length === 0) return;
        const backPath = this.backPaths.pop();
        router.push(backPath);
      };
    },

    addBackPath(backPath) {
      this.backPaths.push(backPath);
    },

    clearBack() {
      this.backPaths = [];
    },
  },
});
