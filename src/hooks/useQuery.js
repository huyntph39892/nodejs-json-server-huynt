import { useState } from "react";

const initialParams = {};

const useQuery = (query = initialParams) => {
  const [params, setParams] = useState(query);

  const resetParams = () => {
    setParams(initialParams);
  };
  const updateParams = (query) => {
    setParams((prevParams) => ({
      ...prevParams,
      ...query,
    }));

    return [params, resetParams, updateParams];
  };
};
export default useQuery;
