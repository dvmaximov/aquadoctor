<template>
  <div>
    <div class="input">
      <el-input class="name" v-model="name" :placeholder="$t('newUserName')" />
      <div class="icon save-btn" @click="accept(this.name)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
          />
        </svg>
      </div>
    </div>
    <div class="board-wrap">
      <VirtualKeyboard
        class="keyboard"
        :options="options"
        v-if="visible"
        :layout="layout"
        :cancel="hide"
        :accept="accept"
        :input="keyRef"
        @clickKey="clickKey"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import VirtualKeyboard from "src/components/Keyboard/VirtualKeyboard.vue";
import { useUsersStore } from "src/stores/users.store";

export default defineComponent({
  name: "AddUser",
  components: { VirtualKeyboard },
  setup() {
    const router = useRouter();
    const name = ref("");
    const visible = ref(true);
    const layout = "normal";
    let keyRef = ref(null);

    const options = reactive({
      useKbEvents: false,
      preventClickEvent: false,
    });

    const usersStore = useUsersStore();
    const insert = usersStore.insertUser;

    onMounted(() => {
      keyRef.value = document.querySelector(".name>div>input");
    });

    function accept(text) {
      this.insert(text);
      router.push({ path: "/" });
    }

    function hide() {
      this.visible = false;
    }
    function clickKey(key) {
      this.name = key;
    }

    return {
      visible,
      layout,
      options,
      keyRef,
      name,
      insert,
      accept,
      hide,
      clickKey,
    };
  },
});
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  justify-content: center;
  align-items: center;

  .name {
    width: 70%;
  }
}

.board-wrap {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 10px;

  .keyboard {
    width: 70%;
    justify-content: center;
  }
}
.save-btn {
  margin: 0 10px;
}
</style>
