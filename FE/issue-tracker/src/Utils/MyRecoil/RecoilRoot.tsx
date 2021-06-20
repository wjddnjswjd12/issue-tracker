import React, { useRef, createContext } from "react";
import { store } from "./myRecoil";

export const globalStateRoot = createContext<any | undefined>(undefined);

export const MyRecoilRoot = ({ children }: { children: React.ReactNode }) => {
  //
  const globalState = useRef(store);
  return (
    <globalStateRoot.Provider value={globalState}>
      {children}
    </globalStateRoot.Provider>
  );
};
