import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance
      .get(url)
      .then(res => setData(res.data))
      .catch(() => setError("Error fetching data"))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
