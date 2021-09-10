import React, { useState, useContext, createContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { CardWindow, Card, Form, FormHeading, Input, Button, Error } from "./AuthForm";
import {AuthContext} from "../Contexts/AuthContext.js";

const Login = props => {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useContext(AuthContext);
  

  const postLogin = () => {
    axios
      .post("http://localhost:4000/api/login", {
        email,
        password
      })
      .then(res => {
        if (res.status === 200) {
          setAuth({
           ...auth,
           email: res.data.email,
           role: res.data.role,
           isLoggedIn: res.data.token ? true: false,
           isAdmin: res.data.role === 'admin' ? true: false,
         })
         alert("Successfully Logged In!")
        }
         
      })
      .catch(error => {
        console.log({ error });
        setIsError(true);
      });
  };
  
          

 
  // if (isLoggedIn && token && isAdmin) {
  //   console.log("LoggedIn:", isLoggedIn, "Admin:", isAdmin)
  //   return <Redirect to="/admin" />;
  // } 

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
            <Button onClick={postLogin}>Log In</Button>
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
