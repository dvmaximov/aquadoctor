import {
  TextureLoader,
  Texture,
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  PointsMaterial,
  AdditiveBlending,
} from "three";

import { SpaceMaterialParametrs, VoidFunc } from "../../models/three.model";

class Space {
  vertices = [];
  textureLoader = new TextureLoader();
  geometry = new BufferGeometry();
  star = null;
  materials = [];
  pieces = [];

  fillSpace() {
    this.star = this.textureLoader.load("sprites/star.png");
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      this.vertices.push(x, y, z);
    }

    this.geometry.setAttribute(
      "position",
      new Float32BufferAttribute(this.vertices, 3)
    );
    const parameters = [
      // [[1.0, 0.2, 0.5], this.star, 20],
      // [[0.95, 0.1, 0.5], this.star, 15],
      // [[0.9, 0.05, 0.5], this.star, 10],
      // [0x322f2f, this.star, 8],
      // [0x322f2f, this.star, 7],
      // [0x322f2f, this.star, 6],
      // [0x322f2f, this.star, 5],
      [0x322f2f, this.star, 30],
      [0x322f2f, this.star, 25],
      [0x322f2f, this.star, 20],
      [0x322f2f, this.star, 15],
    ];

    for (let i = 0; i < parameters.length; i++) {
      const color = parameters[i][0];
      const sprite = parameters[i][1];
      const size = parameters[i][2];

      this.materials[i] = new PointsMaterial({
        size: size,
        map: sprite,
        blending: AdditiveBlending,
        depthTest: false,
        transparent: true,
      });
      this.materials[i].color.setHex(color); //.setHSL(color[0], color[1], color[2]);

      const particles = new Points(this.geometry, this.materials[i]);

      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      this.pieces.push(particles);
    }
  }

  getSpace() {
    return this.pieces;
  }

  getAnimation() {
    const fn = () => {
      const time = Date.now() * 0.00001;

      for (let i = 0; i < this.pieces.length; i++) {
        const object = this.pieces[i];

        object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
      }
    };

    return fn;
  }
}

const space = new Space();
space.fillSpace();

export const useSpace = () => {
  return { space: space.getSpace(), animation: space.getAnimation() };
};
