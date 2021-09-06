import React, { useState } from "react";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";
import { CardWindow, Card, Form, FormHeading, Input, Button } from "./AuthForm";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postSignup = () => {
    axios
      .post("http://localhost:4000/api/register", {
        email,
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
          <Input type="password" placeholder="repeat password" />
          <Button onClick={postSignup}>Sign Up</Button>
        </Form>
        <NavLink to="/login">Already have an account?</NavLink>
      </Card>
    </CardWindow>
  );
};

export default Signup;
