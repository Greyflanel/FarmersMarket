import React, { useState, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { Card, Form, Input, Button, Error } from "./AuthForm";
import { AuthContext } from "../Contexts/AuthContext.js";

const Login = props => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const postLogin = () => {
    axios
      .post("http://localhost:3000/api/login", {
        username,
        password
      })
      .then(res => {
        setToken(res.data.token)
        if (res.status === 200) {
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        console.log({ error });
        setIsError(true);
      });
  };
  
  
  if (isLoggedIn && token) {
    
    return <Redirect to="/products/2" />;
  } 

  return (
    <div className="login">
      <h3>LOG-IN FORM</h3>
      <Card>
        <Form>
          <Input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="email address"
          />
          <Input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <Button onClick={postLogin}>Log In</Button>
        </Form>
        <NavLink to="/register">Don't have an account?</NavLink>
        {isError && (
          <Error>The username or password provided was incorrect!</Error>
        )}
      </Card>
    </div>
  );
};

export default Login;
