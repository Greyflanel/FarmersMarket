import React, { useState, useContext, createContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { CardWindow, Card, Form, FormHeading, Input, Button, Error } from "./AuthForm";
import  {AuthContext} from "../Contexts/AuthContext.js";

const Login = props => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  
  const postLogin = () => {
    axios
      .post("http://localhost:4000/api/login", {
        email,
        password
      })
      .then(res => {
        setToken(res.data.token)
        setIsAdmin(res.data.role === "admin" ? true: false);
        if (res.status === 200) {
          setIsLoggedIn(true);
          
        }
        
      })
      .catch(error => {
        console.log({ error });
        setIsError(true);
      });
  };
  
  
  if (isLoggedIn && token && isAdmin) {
    console.log("LoggedIn:", isLoggedIn, "Admin:", isAdmin)
    return <Redirect to="/products/2" />;
  } 

  return (
    <CardWindow>
      <Card>
        <Form>
          <FormHeading>LOG-IN FORM</FormHeading>
          <Input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
          <Error>The email or password provided was incorrect!</Error>
        )}
      </Card>
    </CardWindow>
  );
};

export default Login;
