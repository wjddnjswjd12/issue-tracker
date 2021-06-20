import { useContext, useState, useEffect, useCallback } from "react";
import { globalStateRoot } from "./RecoilRoot";
import { InitialStateType } from "./myRecoil";

function useMycoilValue(atom: { key: string; default: InitialStateType }) {
  const store = useContext(globalStateRoot).current;
  const [, setState] = useState({});
  const hasData = store.data.has(atom.key);
  if (!hasData) {
    store.data.set(atom.key, atom.default);
    console.log(store.data);
  }
  const forceUpdate = useCallback(() => {
    setState({});
  }, []);

  useEffect(() => {
    store.subscribe({ key: atom.key, fn: forceUpdate });
  }, []);

  return store.getData(atom.key);
}

export default useMycoilValue;
