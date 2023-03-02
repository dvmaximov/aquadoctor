<template>
  <div class="programs-box">
    <div class="btn btn--add" @click="onAddProgram" v-if="showAddProgram">
      Add Program
    </div>
    <el-scrollbar :height="listHeight" class="program-list">
      <div
        class="program-item"
        v-for="program in currentUser?.programs"
        :key="program.id"
      >
        <em v-text="program.name"></em>
        <div
          v-if="!!program.defaultProgram === false"
          class="icon icon--small icon--minus icon--item"
          @click="deleteUserProgram(program.id)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
        <div class="btn btn--small btn--item" @click="choiced(program.id)">
          start
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useUsersStore } from "src/stores/users.store";
import { addBackPath } from "src/services/back.service";

export default defineComponent({
  name: "UserProgramsList",
  props: {
    showAddProgram: {
      type: Boolean,
      default: true,
    },
    fullHeight: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const usersStore = useUsersStore();
    const { currentUser } = storeToRefs(usersStore);
    const router = useRouter();
    let listHeight = ref("180px");

    if (props.fullHeight) listHeight.value = "350px";

    function onAddProgram() {
      if (!currentUser) return;
      router.push({
        path: "/programs",
        query: {
          showDefault: "notDefault",
          mode: "addProgramToUser",
          userID: currentUser.value?.id,
        },
      });
      addBackPath("/users");
    }

    function choiced(programID) {
      router.push({ path: "/runner", query: { programID } });
    }

    function deleteUserProgram(programID) {
      usersStore.deleteUserProgram(currentUser.value?.id, programID);
    }

    return {
      onAddProgram,
      currentUser,
      deleteUserProgram,
      choiced,
      listHeight,
    };
  },
});
</script>

<style lang="scss" scoped>
.programs-box {
  margin: 0px 20px 20px 20px;
}

.program-list {
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
.btn--item {
  margin-right: 20px;
  font-size: 18px;
}
.btn--add {
  width: 100%;
}
</style>
