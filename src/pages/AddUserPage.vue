<template>
  <div>
    <AddUser />
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
import { useRouter } from "vue-router";

import AddUser from "src/components/Users/AddUser.vue";

export default defineComponent({
  name: "AddUserPage",
  components: { AddUser },
  setup() {
    const emitter = inject("emitter");
    const router = useRouter();

    function goBack() {
      emitter.off("back", goBack);
      router.push({ path: "/" });
    }

    emitter.on("back", goBack);

    return {};
  },
});
</script>

<style lang="scss" scoped></style>
