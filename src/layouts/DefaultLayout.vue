<template>
  <div class="default-layout">
    <Background3D />
    <el-container class="container">
      <MainHeader />
      <el-main class="main">
        <Suspense>
          <template #default>
            <!-- <router-view v-slot="{ Component }">
              <Transition>
                <component :is="Component" />
              </Transition>
            </router-view> -->
            <router-view></router-view>
          </template>
          <template #fallback>
            <div>Loading...</div>
          </template>
        </Suspense>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
import Background3D from "../components/Background3D.vue";
import MainHeader from "../components/MainHeader.vue";
import { defineComponent } from "vue";
import { useUsersStore } from "src/stores/users.store";

export default defineComponent({
  name: "DefaultLayout",
  components: { Background3D, MainHeader },
  setup() {
    const usersStore = useUsersStore();
    usersStore.requestUsers();
  },
});
</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: inherit;
}
.main {
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.three {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -100;
}
</style>
