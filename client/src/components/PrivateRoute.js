import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useContext(AuthContext);
  console.log(isAuthenticated)
  return (
    <Route {...rest} render={props => isAuthenticated ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )}
    />
  )
};

export default PrivateRoute;
