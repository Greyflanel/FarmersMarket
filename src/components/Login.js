import React, { useState, useContext, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { CardWindow, Card, Form, FormHeading, Input, Button, Error } from "./AuthForm";
import {AuthContext} from "../Contexts/AuthContext.js";

const Login = props => {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useContext(AuthContext);
  const [token, setToken] = useContext(AuthContext);
  
  const postLogin = () => {
    

    axios
      .post("http://localhost:4000/api/login", {
        email,
        password
      })
      .then(res => {
        
          setAuth({
           ...auth,
           email: res.data.email,
           role: res.data.role,
           isLoggedIn: res.data.token ? true: false,
           token: res.data.token,
           isAdmin: res.data.role === 'admin' ? true: false,
         });
         
      })
      .catch(error => {
        console.log({ error });
        setIsError(true);
      });
     
  };
  console.log(auth.token)
  const logout = () => {
    auth.token = '';
    console.log(auth.token)
  }
  return (
    <CardWindow>
      <Card>
        <Form>
          <FormHeading>LOG-IN FORM</FormHeading>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email address"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          {!auth.token ? (
            <Button onClick={postLogin}>Log In</Button>
          ) : (
            <Button onClick={logout}>Log Out</Button>
          )}
        </Form>
        <NavLink to="/register">Don't have an account?</NavLink>
        {isError && (
          <Error>The email or password provided was incorrect!</Error>
        )}
      </Card>
    </CardWindow>
  );
};

export default Login;
