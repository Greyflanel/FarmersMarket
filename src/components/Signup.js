import React, { useState } from "react";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";
import { CardWindow, Card, Form, FormHeading, Input, Button } from "./AuthForm";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postSignup = () => {
    axios
      .post("http://localhost:3000/api/register", {
        username,
        password
      })
      .then(res => {
        if (res.status === 201) {
          return <Redirect to={"/products"} />;
        }
      })
      .catch(error => {
        console.log({ error });
      });
  };

  return (
    <CardWindow>
      <Card>
        <Form>
          <FormHeading>SIGN-UP FORM</FormHeading>
          <Input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
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
          <Input type="password" placeholder="repeat password" />
          <Button onClick={postSignup}>Sign Up</Button>
        </Form>
        <NavLink to="/login">Already have an account?</NavLink>
      </Card>
    </CardWindow>
  );
};

export default Signup;
