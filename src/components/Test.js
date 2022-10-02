import { useMemo } from "react";
import { useAxios } from "./useAxios.js";

  const Test = () => {
  const { data, error, loaded } = useAxios("/products", "GET", {
    message: "Hello World",
  });
  


  if (loaded) {
    return error ? <span>Error: {error}</span> : <div className="data">{data.map((item) => <h1 key={item.product}>{item.product}</h1>)}</div>;
  }
  return <span>Loading...</span>;
};

export default Test;