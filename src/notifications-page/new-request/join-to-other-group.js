import React from 'react'
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup, Row} from "reactstrap";

class JoinToOtherGroup extends React.Component {
  render() {
    return (
      <Card className="card-profile shadow mt-5">
        <CardHeader>پیوستن به گروه</CardHeader>
        <CardBody>
          <Form role="form" className="w-100 pt-5 pb-4">
            <Row className="justify-content-center mb-3 ml-0 mr-0">
              <Col lg="5">
                <FormGroup className="m-0">
                  <InputGroup className="input-group-alternative">
                    <Input
                      className="signup-input"
                      placeholder="نام گروه"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="2" className="">
                <FormGroup className="m-0">
                  <Button color="primary" >
                    ارسال درخواست
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default JoinToOtherGroup;