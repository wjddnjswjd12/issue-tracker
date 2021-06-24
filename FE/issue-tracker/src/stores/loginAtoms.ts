import { atom } from "recoil";

export const userLoggedIn = atom<{
  userName: string | null;
  userToken: string | null;
  userProfileImg: string | null;
}>({
  key: "userLoggedIn",
  default: {
    userName: null,
    userToken: null,
    userProfileImg: null,
  },
});
