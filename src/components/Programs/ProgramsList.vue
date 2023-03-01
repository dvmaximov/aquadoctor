<template>
  <el-scrollbar height="400px" class="select-program-list">
    <div v-for="program in programs" :key="program.id">
      <div class="program-item">
        <em>{{ program.name }}</em>
        <div class="btn btn--small btn--item" @click="choiced(program)">
          Choice
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { defineComponent, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProgramsStore } from "src/stores/programs.store";
import { useUsersStore } from "src/stores/users.store";

export default defineComponent({
  name: "ProgramsItem",
  setup() {
    const programsStore = useProgramsStore();
    const usersStore = useUsersStore();
    const route = useRoute();
    const router = useRouter();
    const emitter = inject("emitter");

    let showDefault = route.query["showDefault"];
    const { mode, userID } = route.query;

    let programs = [];
    showDefault = showDefault || "all";

    if (mode === "startProgram") {
      programs = usersStore.currentUserPrograms;
    } else {
      if (showDefault === "all") {
        programs = programsStore.allPrograms;
      } else if (showDefault === "notDefault") {
        programs = programsStore.notDefaultPrograms;
      }
    }

    function choiced(program) {
      switch (mode) {
        case "addProgramToUser":
          const { id, name, defaultProgram } = program;
          programsStore.addProgramToUser(userID, { id, name, defaultProgram });
          emitter.off("back", goBack);
          router.push({ path: "/users" });
          break;
      }
    }

    function goBack() {
      switch (mode) {
        case "addProgramToUser":
          emitter.off("back", goBack);
          router.push({ path: "/users" });
          break;
      }
    }

    emitter.on("back", goBack);

    return {
      programs,
      choiced,
    };
  },
});
</script>

<style lang="scss" scoped>
.select-program-list {
  border: 2px solid var(--primary);
}
.program-item {
  display: flex;
  align-items: center;
  padding: 5px;

  em {
    width: 70%;
    height: 50px;
    font-size: 18px;
  }
}
</style>
