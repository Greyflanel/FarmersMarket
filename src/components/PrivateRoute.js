import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from "../Contexts/AuthContext.js"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useContext(AuthContext);

  return (
    <Route {...rest} render={props => authTokens ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: "/login", state: {referer: props.location } }} />
      )}
    />
  )
};

export default PrivateRoute;
