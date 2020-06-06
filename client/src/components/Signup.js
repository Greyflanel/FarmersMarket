import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Form, Input, Button } from "./AuthForm";

const Signup = () => {

    return (
        <>
            <h3>SIGN-UP FORM</h3>
      <Card>
        <Form>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Input type="password" placeholder="password again" />
          <Button>Sign Up</Button>
        </Form>
        <NavLink to="/login">Already have an account?</NavLink>
            </Card>
            </>
    );
}

export default Signup;