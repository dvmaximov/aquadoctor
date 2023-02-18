<template>
  <p v-text="program?.name"></p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgramsItem",
  props: ["program"],
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
