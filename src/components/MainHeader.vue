<template>
  <el-header class="header" v-show="showHeader">
    <router-link to="/">Header</router-link>
    <div class="icon" @click="goBack" v-show="showBack">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </div>
    <div class="user" v-text="currentUser?.name"></div>
  </el-header>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import { useBackPath, isBackEmpty } from "src/services/back.service";
import { useUsersStore } from "src/stores/users.store";
import { useSettingsStore } from "src/stores/settings.store";

export default defineComponent({
  name: "MainHeader",
  setup() {
    const usersStore = useUsersStore();
    const settingsStore = useSettingsStore();
    const { currentUser } = storeToRefs(usersStore);
    const { showHeader } = storeToRefs(settingsStore);
    const goBack = useBackPath();
    const showBack = isBackEmpty();

    return { currentUser, showHeader, goBack, showBack };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--primary);
  margin: 1px;
}

.user {
  text-transform: uppercase;
  color: rgba(200, 200, 200, 0.5);
  font-weight: bold;
}
</style>
