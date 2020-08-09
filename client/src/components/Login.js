import React, { useState, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { Card, Form, Input, Button } from "./AuthForm";
import { Context } from "../Store";

const Login = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(Context);
  const referer = props.location;

  const postLogin = () => {
    
    axios
      .post("http://localhost:4000/api/login", {
        username,
        password
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: 'SET_TOKEN', payload: res.data.token })
          dispatch({ type: 'SET_USERNAME', payload: username })
          setIsLoggedIn(true);
          console.log()
        }
      })
      .catch(error => {
        dispatch({ type: 'SET_ERROR', payload: {error} })
        console.log({ error });
      });
  };
  
  if (isLoggedIn) {
    
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
