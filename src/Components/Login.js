import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import ContinueWith from "./ContinueWith";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="mt-5 col-md-8">
            <Form inline>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="fw-bold me-sm-2" for="exampleEmail">
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
                <Label className="fw-bold me-sm-2" for="examplePassword">
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
              <Button className="mt-3 ">Log In</Button> <br />
              <Button onClick={() => navigate("/")} className="bg-info mt-2 ">
                Registered with Email
              </Button>
            </Form>
          </div>
          <div className="col-md-4">
            <ContinueWith></ContinueWith>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
