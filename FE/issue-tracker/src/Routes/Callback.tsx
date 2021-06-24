import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { userLoggedIn } from "@/stores/loginAtoms";

const Callback = ({ history, location }: RouteComponentProps) => {
  const setLoginData = useSetRecoilState(userLoggedIn);
  useEffect(() => {
    const getToken = async () => {
      let params = new URLSearchParams(location.search);
      let code = params.get("code"); // is the number 123

      try {
        const jwt_token = await fetch(
          `http://3.37.161.3/user/login/oauth/github?code=${code}`
        ).then((res) => res.json());

        setLoginData({
          userName: "Jenny",
          userProfileImg: "",
          userToken: jwt_token.data,
        });

        history.push("/issue");
      } catch (e) {
        //
      }
    };
    getToken();
    //user/login/oauth/github/code=`${code}`
  }, []);

  return null;
};

export default withRouter(Callback);
