export interface ICircle {
  id: string;
  size: string;
  shift: string;
  color1: string;
  color2: string;
  color3: string;
  upTime: string;
  constTime: string;
  downTime: string;
  speed: string;
}
export type Circles = Array<ICircle>;

export interface IProgram {
  id: string;
  name: string;
  circles: Circles;
  rotateSpeed: number;
  imageSpeed: string;
  imageWidth: string;
  imageHeight: string;
}
export type Programs = Array<IProgram>;
