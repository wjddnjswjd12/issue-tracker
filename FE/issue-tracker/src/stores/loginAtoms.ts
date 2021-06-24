import { atom } from "recoil";

export const userLoggedIn = atom<{
  userName: string;
  userToken: string;
  userProfileImg: string;
}>({
  key: "userLoggedIn",
  default: {
    userName: "Jenny",
    userToken: "",
    userProfileImg: "https://avatars.githubusercontent.com/u/71004200?v=4",
  },
});
