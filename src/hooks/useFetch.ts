import { useState, useEffect } from "react";

function useFetch<T>(fetchFn: () => Promise<T>, dep?: unknown) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchFn();

        if (!cancelled) {
          setData(result);
        }
      } catch (error) {
        if (!cancelled) {
          setError(error instanceof Error ? error.message : "Error desconegut");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);

  return { data, loading, error };
}

export default useFetch;
