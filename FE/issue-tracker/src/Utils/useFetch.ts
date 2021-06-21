import { useEffect, useState } from "react";
import API from "./api";

const useFetch = <T>(path: string) => {
  const [fetchedData, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    API.get(path)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("에러가 발생했습니다.");
      });
  }, [path]);

  return { fetchedData, loading, error };
};

export default useFetch;
