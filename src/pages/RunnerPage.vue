<template>
  <ColorCircles :program="program" />
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useProgramsStore } from "src/stores/programs.store";

import ColorCircles from "src/components/ColorCircles/ColorCircles.vue";

export default defineComponent({
  name: "HomePage",
  components: { ColorCircles },
  async setup() {
    const route = useRoute();
    const programsStore = useProgramsStore();
    programsStore.requestPrograms();
    const program = programsStore.programByID(route.query["programID"]);
    return {
      program,
    };
  },
});
</script>

<style lang="scss" scoped></style>
