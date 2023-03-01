<template>
  <div class="selection">
    <el-select
      class="m-2 user-select"
      v-model="userID"
      placeholder="Select user"
      size="large"
      @change="onChange"
    >
      <el-option
        v-for="user in users"
        :key="user.id"
        :label="user.name"
        :value="user.id"
      />
    </el-select>
    <div @click="addBack">
      <router-link to="/adduser">
        <svg
          class="icon icon--plus"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
      </router-link>
    </div>

    <div class="icon icon--minus" @click="deleteUser">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { storeToRefs } from "pinia";

import { useUsersStore } from "src/stores/users.store";
import { addBackPath } from "src/services/back.service";

export default defineComponent({
  name: "SelectUser",
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["changeUserId", "deleteUser"],
  setup(props, { emit }) {
    // let userId = ref(props.currentUserId);
    const userStore = useUsersStore();
    const { currentUser } = storeToRefs(userStore);
    let userID = ref(currentUser.value.id);

    watch(currentUser, (newValue) => {
      if (newValue) userID.value = newValue.id;
    });

    function onChange() {
      emit("changeUserId", userID.value);
    }

    function deleteUser() {
      emit("deleteUser", userID.value);
    }

    function addBack() {
      addBackPath("/users");
    }

    return {
      userID,
      onChange,
      deleteUser,
      addBack,
    };
  },
  // watch: {
  //   currentUser() {
  //     console.log('current');
  //   },
  // },
});
</script>

<style lang="scss" scoped>
.selection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 0px 20px;
}
.user-select {
  width: 70%;
}
</style>
