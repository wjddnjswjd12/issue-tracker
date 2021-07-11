import { StylesProvider } from "@material-ui/core/styles";

import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import Router from "@/Routes/Router";
import GlobalStyles from "@/Styles/GlobalStyles";
import { MyRecoilRoot } from "./Utils/MyRecoil/RecoilRoot";

const App = () => {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <MyRecoilRoot>
          <RecoilRoot>
            <Suspense fallback={<div>Loading...</div>}>
              <GlobalStyles />
              <Router />
            </Suspense>
          </RecoilRoot>
        </MyRecoilRoot>
      </StylesProvider>
    </div>
  );
};

export default App;
