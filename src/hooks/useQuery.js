import { useState } from "react";

const useQuery = (initial = {}) => {
  const [params, setParams] = useState(initial);

  const resetParams = () => {
    setParams(initial);
  };

  const updateParams = (query) => {
    setParams((prev) => ({
      ...prev,
      ...query,
    }));
  };

  return [params, updateParams, resetParams];
};

export default useQuery;
