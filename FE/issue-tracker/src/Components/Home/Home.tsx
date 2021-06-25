import Header from "../Header/Header";
import { useRecoilValue } from "recoil";
import { userLoggedIn } from "@/stores/loginAtoms";
import HomeContents from "./HomeContents/HomeContents";

const Home = () => {
  const userData = useRecoilValue(userLoggedIn);
  console.log(userData);
  return (
    <>
      <Header />
      <HomeContents />
    </>
  );
};

export default Home;
