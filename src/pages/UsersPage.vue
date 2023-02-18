<template>
  <div class="user-box">
    <SelectUser
      :users="users"
      @changeUserId="changeUserId"
      @deleteUser="deleteUser"
    />
    <UserProgramsList />
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUsersStore } from "src/stores/users.store";
import SelectUser from "src/components/Users/SelectUser.vue";
import UserProgramsList from "src/components/Users/UserProgramsList.vue";

export default defineComponent({
  name: "UsersPage",
  components: { SelectUser, UserProgramsList },
  setup() {
    const usersStore = useUsersStore();
    const { users } = storeToRefs(usersStore);
    const changeCurrentUser = usersStore.changeCurrentUser;
    const deleteCurrentUser = usersStore.deleteCurrentUser;

    function changeUserId(e) {
      changeCurrentUser(e);
    }

    function deleteUser(e) {
      deleteCurrentUser(e);
    }

    return {
      usersStore,
      users,
      deleteUser,
      changeUserId,
    };
  },
});
</script>

<style lang="scss" scoped>
.user-box {
  display: flex;
  flex-direction: column;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.8s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(2000px);
  // opacity: 0;
}
</style>
