import React, { useContext } from 'react';
import { Button } from "./AuthForm";
import AuthContext from "../Contexts/AuthContext";

const Admin = (props) => {
    const { setAuthTokens } = useContext(AuthContext);
    
    const logOut = () => {
        setAuthTokens();
    }
    return (
      <>
        <h2>Admin</h2>
        <Button onClick={logOut}>Log Out</Button>
        
      </>
    );
};
 
export default Admin;