import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userLoggedIn } from "@/stores/loginAtoms";
import API from "./api";

const useFetch = <T>(path: string) => {
  const [fetchedData, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const loginData = useRecoilValue(userLoggedIn);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    API.get(path, loginData.userToken)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(`에러가 발생했습니다. error status: ${error}`);
      });
  }, [path]);

  return { fetchedData, loading, error };
};

export default useFetch;
