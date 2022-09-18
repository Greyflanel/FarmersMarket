import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // 
  if (isLoading) {
    return <div></div>;
  }
const userName = user.name.replace(/@.*/, "");
  
  return (
    isAuthenticated && (
      <div className="user-profile">
        <h2>Welcome</h2>
        <h3>{userName}</h3>
      </div>
    )
  );
};

export default User;
