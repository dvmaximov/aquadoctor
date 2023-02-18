<template>
  <div class="image-box">
    <div
      class="image"
      ref="image"
      :style="{ width: `${imageWidth}px`, height: `${imageHeight}px` }"
    >
      <img v-show="!!image" :src="image" width="75px" height="100px" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Keyframes from '@keyframes/core';

export default {
  name: 'ColorCircleImage',
  computed: {
    ...mapGetters([
      'image',
      'started',
      'imageSpeed',
      'imageWidth',
      'imageHeight',
    ]),
  },
  watch: {
    started: function (val) {
      Keyframes.define([
        {
          name: 'rotateImage',
          '0%': {
            transform:
              'rotate(0deg) translateX(-50%) translateY(50%) rotate(0deg)',
          },
          '100%': {
            transform:
              'rotate(-360deg) translateX(-50%) translateY(50%) rotate(360deg)',
          },
        },
      ]);
      const circle = new Keyframes(this.$refs.image);
      if (val)
        circle.play(
          `rotateImage ${this.imageSpeed}s linear 0s infinite normal forwards`
        );
      else circle.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.image-box {
  position: absolute;
  left: 0;
  top: 0;
  background-color: transparent;
  min-height: 100vh;
  width: 100%;
}
.image {
  width: 75px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
  transform: translate(-50%, 50%);

  img {
    object-fit: cover;
    object-position: center top;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
}
</style>
