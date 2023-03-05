<template>
  <div ref="circles" class="circles">
    <div class="icon icon--stop" @click="stopPlay">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM192 160H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"
        />
      </svg>
    </div>
    <ColorCircleItem
      v-for="circle in program.circles"
      :circle="circle"
      :key="circle.id"
    />
    <audio ref="audio" consrols autoplay src=""></audio>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import ColorCircleItem from "src/components/ColorCircles/ColorCircleItem";
import { useSettingsStore } from "src/stores/settings.store";

export default defineComponent({
  name: "ColorCircles",
  props: ["program"],
  components: { ColorCircleItem },
  setup(props) {
    const settingsStore = useSettingsStore();
    const addBackPath = settingsStore.addBackPath;
    const router = useRouter();
    const circles = ref(null);
    const audio = ref(null);
    const trackFile = window.DB.getTrackFile(
      props.program.id,
      props.program.track
    );
    const goBack = settingsStore.useBackPath();

    const activateCircles = () => {
      audio.value.src = URL.createObjectURL(trackFile);
      audio.value.onended = stopPlay;
      settingsStore.setShowHeader(false);
      circles.value.style.opacity = 1;
    };

    onMounted(() => {
      setTimeout(activateCircles, 800);
    });

    onUnmounted(() => {
      settingsStore.setShowHeader(true);
      clearTimeout(activateCircles);
    });

    const stopPlay = () => {
      goBack();
    };

    return {
      stopPlay,
      circles,
      audio,
    };
  },
});
</script>

<style scoped>
.circles {
  background-color: transparent;
  min-height: 100vh;
  width: 100%;
  position: relative;
  opacity: 0;
  overflow: hidden;
  padding: 0;
}
</style>
