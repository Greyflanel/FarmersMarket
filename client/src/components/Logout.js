import React, { useContext } from "react";
import { Context } from "../Store";



const Logout = () => {
  const [auth, setAuth] = useContext(Context);
  console.log(Context)
  return (
    <button onClick={(e) => console.log(auth)}>Logout</button>
  )
  
};

export default Logout;
