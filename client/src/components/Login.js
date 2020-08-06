import React, { useState, useContext, createContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { Card, Form, Input, Button } from "./AuthForm";
import AuthContext from "../Contexts/AuthContext";

const Login = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const referer = props.location;

  const postLogin = () => {
    axios
      .post("http://localhost:4000/api/login", {
        username,
        password
      })
      .then(result => {
        if (result.status === 200) {
          setAuthToken(result.data.token);
          setIsLoggedIn(true);
          
        }
      })
      .catch(error => {
        console.log({ error });
      });
  };
  if (isLoggedIn && authToken) {
    console.log(authToken)
    return <Redirect to={referer} />;
  }

  return (
    <>
      <h3>LOG-IN FORM</h3>
      <Card>
        <Form>
          <Input
            type="text"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
              
            }}
            placeholder="email"
          />
          <Input
            type="text"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
              
            }}
            placeholder="password"
          />
          <Button onClick={postLogin}>Sign In</Button>
        </Form>
        <NavLink to="/signup">Don't have an account?</NavLink>
      </Card>
    </>
  );
};

export default Login;
