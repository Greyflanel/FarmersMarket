import React, { useState } from "react";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";
import { Card, Form, Input, Button } from "./AuthForm";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postSignup = () => {
    axios
      .post("http://localhost:4000/api/register", {
        email,
        password,
      })
      .then((result) => {
        if (result.status === 201) {
          console.log(result);
          return <Redirect to={"/products/1"} />;
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div className="sign-up">
      <h3>SIGN-UP FORM</h3>
      <Card>
        <Form>
          <Input
            type="text"
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
          <Input
            type="role"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <Button onClick={postSignup}>Sign Up</Button>
        </Form>
        <NavLink to="/login">Already have an account?</NavLink>
      </Card>
    </div>
  );
};

export default Admin;
