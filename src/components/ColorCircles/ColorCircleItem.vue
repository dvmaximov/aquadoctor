<template>
  <div
    class="flex justify-center items-start circle-box"
    ref="circleBox"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  >
    <div
      ref="circleItem"
      class="circle"
      :style="{
        '--color': `${circle.color1}`,
        opacity: opacity,
      }"
    ></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import Keyframes from "@keyframes/core";

const setWindowSize = (size) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const windowSize = width >= height ? height : width;
  return Math.floor((Number(size) / 100) * windowSize);
};

export default defineComponent({
  name: "ColorCircleItem",
  props: {
    circle: {
      type: Object,
      default: () => {},
    },
  },
  setup: (props) => {
    const circleBox = ref(null);
    const circleItem = ref(null);

    const flickDuration =
      Number(props.circle.upTime) +
      Number(props.circle.constTime) +
      Number(props.circle.downTime);
    const upTimePercent = Math.floor(
      (100 * props.circle.upTime) / flickDuration
    );
    const constTimePercent = Math.floor(
      ((Number(props.circle.upTime) + Number(props.circle.constTime)) * 100) /
        flickDuration
    );
    const size = setWindowSize(props.circle.size);
    const opacity = 0.9;
    const visible = ref(false);

    Keyframes.define([
      {
        name: `flick${props.circle.id}color1`,
        "0%": {
          opacity: 0,
          backgroundColor: props.circle.color1,
          boxShadow: `0 0 100px 100px ${props.circle.color1}`,
        },
        "1%": {
          opacity: 0,
          backgroundColor: props.circle.color1,
          boxShadow: `0 0 100px 100px ${props.circle.color1}`,
        },
        [upTimePercent + "%"]: {
          opacity: opacity,
          backgroundColor: props.circle.color1,
          boxShadow: `0 0 100px 100px ${props.circle.color1}`,
        },
        [constTimePercent + "%"]: {
          opacity: opacity,
          backgroundColor: props.circle.color1,
          boxShadow: `0 0 100px 100px ${props.circle.color1}`,
        },
        "100%": {
          opacity: 0,
          backgroundColor: props.circle.color1,
          boxShadow: `0 0 100px 100px ${props.circle.color1}`,
        },
      },
      {
        name: `flick${props.circle.id}color2`,
        "0%": {
          opacity: 0,
          backgroundColor: props.circle.color2,
          boxShadow: `0 0 100px 100px ${props.circle.color2}`,
        },
        [upTimePercent + "%"]: {
          opacity: opacity,
          backgroundColor: props.circle.color2,
          boxShadow: `0 0 100px 100px ${props.circle.color2}`,
        },
        [constTimePercent + "%"]: {
          opacity: opacity,
          backgroundColor: props.circle.color2,
          boxShadow: `0 0 100px 100px ${props.circle.color2}`,
        },
        "100%": {
          opacity: 0,
          backgroundColor: props.circle.color2,
          boxShadow: `0 0 100px 100px ${props.circle.color2}`,
        },
      },
      {
        name: `flick${props.circle.id}color3`,
        "0%": {
          opacity: 0,
          backgroundColor: props.circle.color3,
          boxShadow: `0 0 100px 100px ${props.circle.color3}`,
        },
        [upTimePercent + "%"]: {
          opacity: opacity,
          backgroundColor: props.circle.color3,
          boxShadow: `0 0 100px 100px ${props.circle.color3}`,
        },
        [constTimePercent + "%"]: {
          opacity: opacity,
          backgroundColor: props.circle.color3,
          boxShadow: `0 0 100px 100px ${props.circle.color3}`,
        },
        "100%": {
          opacity: 0,
          backgroundColor: props.circle.color3,
          boxShadow: `0 0 100px 100px ${props.circle.color3}`,
        },
      },
    ]);

    Keyframes.define([
      {
        name: `rotateCircle${props.circle.id}`,
        "0%": {
          transform: `rotate(0deg) translateX(-${props.circle.shift}) translateY(${props.circle.shift}) rotate(0deg)`,
        },
        "100%": {
          transform: `rotate(-360deg) translateX(-${props.circle.shift}) translateY(${props.circle.shift}) rotate(360deg)`,
        },
      },
    ]);

    let flickAnimation;
    let rotateAnimation;

    onMounted(() => {
      flickAnimation = new Keyframes(circleItem.value);
      rotateAnimation = new Keyframes(circleBox.value);
      circleItem.value.style.transform = "translate(-50%, -50%)";
      flickAnimation.loop([
        `flick${props.circle.id}color1 ${flickDuration}s linear 0s normal forwards`,
        `flick${props.circle.id}color2 ${flickDuration}s linear 0s normal forwards`,
        `flick${props.circle.id}color3 ${flickDuration}s linear 0s normal forwards`,
      ]);
      rotateAnimation.play(
        `rotateCircle${props.circle.id} ${props.circle.speed}s linear 0s infinite normal forwards`
      );
      visible.value = true;
    });

    return {
      // flickAnimation: null,
      // rotateAnimation: null,
      opacity,
      circleItem,
      circleBox,
      visible,
      // size: 0,
      size,
    };
  },
  computed: {
    // ...mapGetters([
    //   'flickDuration',
    //   'started',
    //   'color',
    //   'color2',
    //   'color3',
    //   'upTimePercent',
    //   'constTimePercent',
    //   'windowSize',
    // ]),
  },
  created() {
    // this.setSize(this.windowSize);
  },
  methods: {
    prepareFlickAnimation: function () {
      // const speed = this.flickDuration(this.circle.id);
      // if (speed !== 0) {
      //   const upTimePercent = this.upTimePercent(this.circle.id);
      //   const constTimePercent = this.constTimePercent(this.circle.id);
      //   Keyframes.define([
      //     {
      //       name: `flick${this.circle.id}color`,
      //       '0%': {
      //         opacity: 0,
      //         backgroundColor: this.color(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color(this.circle.id)}`,
      //       },
      //       '1%': {
      //         opacity: 0,
      //         backgroundColor: this.color(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color(this.circle.id)}`,
      //       },
      //       [upTimePercent + '%']: {
      //         opacity: this.opacity,
      //         backgroundColor: this.color(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color(this.circle.id)}`,
      //       },
      //       [constTimePercent + '%']: {
      //         opacity: this.opacity,
      //         backgroundColor: this.color(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color(this.circle.id)}`,
      //       },
      //       '100%': {
      //         opacity: 0,
      //         backgroundColor: this.color(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color(this.circle.id)}`,
      //       },
      //     },
      //     {
      //       name: `flick${this.circle.id}color2`,
      //       '0%': {
      //         opacity: 0,
      //         backgroundColor: this.color2(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color2(this.circle.id)}`,
      //       },
      //       [upTimePercent + '%']: {
      //         opacity: this.opacity,
      //         backgroundColor: this.color2(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color2(this.circle.id)}`,
      //       },
      //       [constTimePercent + '%']: {
      //         opacity: this.opacity,
      //         backgroundColor: this.color2(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color2(this.circle.id)}`,
      //       },
      //       '100%': {
      //         opacity: 0,
      //         backgroundColor: this.color2(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color2(this.circle.id)}`,
      //       },
      //     },
      //     {
      //       name: `flick${this.circle.id}color3`,
      //       '0%': {
      //         opacity: 0,
      //         backgroundColor: this.color3(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color3(this.circle.id)}`,
      //       },
      //       [upTimePercent + '%']: {
      //         opacity: this.opacity,
      //         backgroundColor: this.color3(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color3(this.circle.id)}`,
      //       },
      //       [constTimePercent + '%']: {
      //         opacity: this.opacity,
      //         backgroundColor: this.color3(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color3(this.circle.id)}`,
      //       },
      //       '100%': {
      //         opacity: 0,
      //         backgroundColor: this.color3(this.circle.id),
      //         boxShadow: `0 0 100px 100px ${this.color3(this.circle.id)}`,
      //       },
      //     },
      //   ]);
      //   this.flickAnimation = new Keyframes(this.$refs.circle);
      //   // return `flick${this.circle.id} ${speed}s linear 0s normal forwards`;
      //   return speed;
      // } else {
      //   this.flickAnimation;
      //   return null;
      // }
    },
    prepareRotateAnimation: function () {
      // Keyframes.define([
      //   {
      //     name: `rotateCircle${this.circle.id}`,
      //     '0%': {
      //       transform: `rotate(0deg) translateX(-${this.circle.shift}) translateY(${this.circle.shift}) rotate(0deg)`,
      //     },
      //     '100%': {
      //       transform: `rotate(-360deg) translateX(-${this.circle.shift}) translateY(${this.circle.shift}) rotate(360deg)`,
      //     },
      //   },
      // ]);
      // this.rotateAnimation = new Keyframes(this.$refs.circleBox);
      // return `rotateCircle${this.circle.id} ${this.circle.speed}s linear 0s infinite normal forwards`;
    },
  },
  watch: {
    started: function (val) {
      //   if (val) {
      //     const flickSpeed = this.prepareFlickAnimation();
      //     const rotate = this.prepareRotateAnimation();
      //     this.$refs.circle.style.transform = 'translate(-50%, -50%)';
      //     if (!!flickSpeed)
      //       this.flickAnimation.loop([
      //         `flick${this.circle.id}color ${flickSpeed}s linear 0s normal forwards`,
      //         `flick${this.circle.id}color2 ${flickSpeed}s linear 0s normal forwards`,
      //         `flick${this.circle.id}color3 ${flickSpeed}s linear 0s normal forwards`,
      //       ]);
      //     this.rotateAnimation.play(rotate);
      //   } else {
      //     this.$refs.circle.style.transform = 'translate(0, 0)';
      //     this.flickAnimation.reset();
      //     this.$refs.circle.style.transform = null;
      //     this.rotateAnimation.reset();
      //   }
    },
    windowSize: function (val) {
      // this.setSize(val);
    },
  },
});
</script>

<style lang="scss" scoped>
.circle-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.circle {
  width: 100%;
  height: 100%;
  background-color: var(--color);
  box-shadow: 0 0 100px 100px var(--color);
  border-radius: 50%;
}
</style>
