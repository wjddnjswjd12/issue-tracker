import { atom } from "recoil";

export const userLoggedIn = atom<{
  userName: string;
  userToken: string;
  userProfileImg: string;
}>({
  key: "userLoggedIn",
  default: {
    userName: "",
    userToken: "",
    userProfileImg: "",
  },
});
