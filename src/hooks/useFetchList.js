import { useState, useEffect, useCallback } from "react";
import { fetchProducts } from "../api/productApi";

const useFetchList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setList(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [list, loading, error, fetchData];
};

export default useFetchList;
