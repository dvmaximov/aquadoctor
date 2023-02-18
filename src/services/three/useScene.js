import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  Color,
  Object3D,
} from "three";
// import { ISceneOptions, VoidFunc } from "../../models/three.model";

const initOptions = {
  lightColor: 0xffffff,
  intensity: 0.5,
  bgColor: 0x070d19,
};

//#322F2F

export class Scene3D {
  scene;
  camera;
  renderer;
  node;
  ambientLight;
  animations = [];

  constructor(options = {}) {
    const bgColor = options.bgColor
      ? new Color(options.bgColor)
      : new Color(initOptions.bgColor);
    const { lightColor, intensity } = { ...initOptions, ...options };

    this.scene = new Scene();
    this.scene.background = bgColor;

    this.ambientLight = new AmbientLight(lightColor, intensity);
    this.scene.add(this.ambientLight);

    this.camera = new PerspectiveCamera(75, 1, 0.1, 1000);
    this.camera.position.z = 2;

    this.renderer = new WebGLRenderer();

    window.addEventListener("resize", this.onResizeWindow, false);

    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }

  onResizeWindow = () => {
    if (!this.node) return;
    this.camera.aspect = this.node.clientWidth / this.node.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.node.clientWidth, this.node.clientHeight);
    this.render();
  };

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start(node) {
    if (!node) return;
    const animate = () => {
      requestAnimationFrame(animate);

      this.animations.forEach((fn) => fn());

      this.render();
    };

    this.node = node;
    this.camera.aspect = node.clientWidth / node.clientHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(node.clientWidth, node.clientHeight);
    this.node.appendChild(this.renderer.domElement);
    animate();
  }

  addObject(obj) {
    this.scene.add(obj);
  }

  addAnimation(fn) {
    this.animations.push(fn);
  }
}

const scene = new Scene3D();

export const useScene = () => {
  return scene;
};
