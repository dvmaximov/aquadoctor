<template>
  <div ref="sceneRef" class="three"></div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useScene, Scene3D } from "../services/three/useScene";
import { useSpace } from "../services/three/useSpace";

export default defineComponent({
  name: "Background3D",
  components: {},

  setup() {
    const scene = useScene();
    const { space, animation } = useSpace();
    space.forEach((item) => scene.addObject(item));
    scene.addAnimation(animation);
    const sceneRef = ref(null);

    onMounted(() => {
      scene.start(sceneRef.value);
    });

    return { sceneRef, space };
  },
});
</script>

<style lang="scss" scoped>
.three {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1000;
}
</style>
