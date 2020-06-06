import React from 'react';
import { NavLink } from "react-router-dom";
import { Card, Form, Input, Button } from "./AuthForm";

const Login = () => {

    return (
      <>
        <h3>LOG-IN FORM</h3>
        <Card>
          <Form>
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="password" />
            <Button>Sign In</Button>
          </Form>
          <NavLink to="/signup">Don't have an account?</NavLink>
        </Card>
      </>
    );
};

export default Login;