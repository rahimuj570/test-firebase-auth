import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
  return (
    <div>
      <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
            Email
          </Label>
          <Input
            required
            id="exampleEmail"
            name="email"
            placeholder="something@idk.cool"
            type="email"
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="examplePassword">
            Password
          </Label>
          <Input
            required
            id="examplePassword"
            name="password"
            placeholder="don't tell!"
            type="password"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
