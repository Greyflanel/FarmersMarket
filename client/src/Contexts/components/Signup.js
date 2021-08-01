import React, { useState } from "react";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";
import { Card, Form, Input, Button } from "./AuthForm";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postSignup = () => {
    axios
      .post("http://localhost:4000/api/register", {
        username,
        password
      })
      .then(result => {
        if (result.status === 201) {
          console.log(result)
          return <Redirect to={"/productlist"} />;
        }
      })
      .catch(error => {
        console.log({ error });
      });
  };

  return (
    <>
      <h3>SIGN-UP FORM</h3>
      <Card>
        <Form>
          <Input
            type="text"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
              
            }}
            placeholder="username"
          />
          <Input
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
              
            }}
            placeholder="password"
          />
          {/* <Input type="password" placeholder="password again" /> */}
          <Button onClick={postSignup}>Sign Up</Button>
        </Form>
        <NavLink to="/login">Already have an account?</NavLink>
      </Card>
    </>
  );
};

export default Signup;
