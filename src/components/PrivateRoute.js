import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from "../Contexts/AuthContext.js"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext);
  console.log(auth[0].isLoggedIn)
  return (
    <Route {...rest} render={props => auth ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: "/products", state: {referer: props.location } }} />
      )}
    />
  )
};

export default PrivateRoute;
