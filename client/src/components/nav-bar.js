import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

    return (
      <Navbar>
        <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
      </Navbar>  
  );
};

export default AuthNav;