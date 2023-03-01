<template>
  <el-header class="header" v-show="showHeader">
    <router-link to="/" class="header__link">
      <em class="header__aqua">aqua</em>
      <em class="header__doctor">DOCTOR</em>
    </router-link>
    <div class="icon" @click="goBack" v-show="showBack">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </div>
    <div class="user" v-text="currentUser?.name"></div>
    <div class="icon icon--minus" @click="shutdown">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
        />
      </svg>
    </div>
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
    const shutdown = settingsStore.shutdown;

    return { currentUser, showHeader, goBack, showBack, shutdown };
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
  padding-top: 30px;
  padding-bottom: 30px;
  height: 100px;
}

.user,
.header__doctor {
  text-transform: uppercase;
  color: rgba(200, 200, 200, 0.5);
  font-weight: bold;
  font-size: 22px;
  overflow: hidden;
}

.header__link {
  text-decoration: none;
}

.header__aqua {
  font-size: 18px;
  color: var(--primary);
  font-size: 24px;
  font-weight: bold;
}

.header__doctor {
  font-style: normal;
  margin-left: 2px;
  font-size: 24px;
}
</style>
