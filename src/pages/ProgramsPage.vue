<template>
  <div class="programs-box">
    <ProgramsList />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProgramsList from "src/components/Programs/ProgramsList.vue";

export default defineComponent({
  name: "ProgramsPage",
  components: { ProgramsList },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.programs-box {
  padding: 20px;
}
</style>
