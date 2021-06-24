import { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Callback = ({ history, location }: RouteComponentProps) => {
  useEffect(() => {
    const getToken = async () => {
      let params = new URLSearchParams(location.search);
      let code = params.get("code"); // is the number 123

      try {
        const jwt_token = await fetch(
          `http://3.37.161.3/user/login/oauth/github?code=${code}`
        ).then((res) => res.json());

        console.log(jwt_token.data);

        // setLoginState 해야함
        // setUserInfo 해야함
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
