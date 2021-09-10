import React, { useContext } from "react";
import "../styles/index.css";
import { AuthContext } from "../Contexts/AuthContext.js";

const Admin = () => {
 const {user} = useContext(AuthContext); 

  return (
    <div className="admin">
      <h1>ADMIN</h1>
      {user.email}
    </div>
  );
};

export default Admin;
