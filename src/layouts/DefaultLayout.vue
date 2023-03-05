<template>
  <div class="default-layout">
    <!-- <Background3D /> -->
    <el-container class="container">
      <MainHeader />
      <el-main class="main">
        <Suspense>
          <template #default>
            <router-view v-slot="{ Component }">
              <Transition mode="out-in">
                <component :is="Component" />
              </Transition>
            </router-view>
            <!-- <router-view></router-view> -->
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
import MainHeader from "../components/MainHeader.vue";
import { defineComponent, onMounted } from "vue";
import { useUsersStore } from "src/stores/users.store";
import { useProgramsStore } from "src/stores/programs.store";

export default defineComponent({
  name: "DefaultLayout",
  components: { MainHeader },
  setup() {
    const usersStore = useUsersStore();
    const programsStore = useProgramsStore();

    onMounted(() => {
      usersStore.requestUsers();
      programsStore.requestPrograms();
    });
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
