<template>
  <div class="programs-list">
    <UserProgramsList :showAddProgram="false" fullHeight />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import UserProgramsList from "src/components/Users/UserProgramsList.vue";

export default defineComponent({
  name: "UserProgramsPage",
  components: { UserProgramsList },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.programs-list {
  margin-top: 20px;
}
</style>
