import React, { useState, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { Card, Form, Input, Button } from "./AuthForm";
import AuthContext from "../Contexts/AuthContext";

const Login = (props) => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useContext(AuthContext);
  const referer = props.location;
    
  const postLogin = () => {
   
    axios
      .post("http://localhost:4000/login", {
        userName,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error)
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
            value={userName}
            onChange={(e) => {
                setUserName(e.target.value);
                console.log(userName)
            }}
            placeholder="email"
          />
          <Input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password)
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
