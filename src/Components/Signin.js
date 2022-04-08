import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import ContinueWith from "./ContinueWith";

const Signin = () => {
  return (
    <div className="m-5  shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Form className=" mx-auto p-5">
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label className="fw-bold" for="exampleEmail">
                      Email
                    </Label>
                    <Input
                      required
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className="fw-bold" for="examplePassword">
                      Password
                    </Label>
                    <Input
                      required
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="fw-bold" for="exampleAddress">
                      Full Name
                    </Label>
                    <Input
                      required
                      id="exampleFull NAme"
                      name="Full NAme"
                      placeholder="Your Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="fw-bold" for="exampleAddress2">
                      Mobile Number
                    </Label>
                    <Input
                      required
                      id="exampleAddress2"
                      name="address2"
                      placeholder="Your Mobiles"
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      required
                      id="exampleCheck"
                      name="check"
                      type="checkbox"
                    />
                    <Label className="fw-bold" check for="exampleCheck">
                      All the information is correct.
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Button className="mt-3">Sign in</Button> <br />
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

export default Signin;
