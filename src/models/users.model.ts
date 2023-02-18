import { Programs } from './programs.model';

export interface IUser {
  id: string;
  name: string;
  current: boolean;
  image: string | null;
  programs: Programs;
}

export type Users = IUser[];
