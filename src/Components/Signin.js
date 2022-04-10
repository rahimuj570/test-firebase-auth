import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import ContinueWith from "./ContinueWith";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [finalData, setFinalData] = useState({});
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let data = {};
    data.name = name;
    data.password = password;
    data.email = email;
    data.number = number;
    setFinalData(data);
    console.log(finalData);
  }, [number]);
  const readyData = () => {
    let data = {};
    data.name = name;
    data.password = password;
    data.email = email;
    data.number = number;
    setFinalData(data);
    console.log(finalData);
  };
  return (
    <div className="m-5  shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Form onSubmit={(e) => e.preventDefault()} className=" mx-auto p-5">
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label className="fw-bold" for="exampleEmail">
                      Email
                    </Label>
                    <Input
                      onBlur={(e) => setEmail(e.target.value)}
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
                      onBlur={(e) => setPassword(e.target.value)}
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
                      onBlur={(e) => setName(e.target.value)}
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
                      onBlur={(e) => setNumber(e.target.value)}
                      required
                      id="exampleAddress2"
                      name="address2"
                      placeholder="Your Mobiles"
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      onClick={(e) => setCheckBox(e.target.validity.valid)}
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
              {checkBox ? (
                <Button onClick={readyData} className="mt-3">
                  Sign Up
                </Button>
              ) : (
                <Button disabled onClick={readyData} className="mt-3">
                  Sign Up
                </Button>
              )}
              <br />
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
