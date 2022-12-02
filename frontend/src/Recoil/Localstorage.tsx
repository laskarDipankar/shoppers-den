import { atom, selector } from "recoil";

export interface User {
  shopid?: string;
  userid?: string;
}

export const Owner = atom<User>({
  key: "shop",
  default: {},
});
