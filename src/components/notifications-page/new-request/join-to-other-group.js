import React from 'react'
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup, Row, InputGroupText, InputGroupAddon} from "reactstrap";

class JoinToOtherGroup extends React.Component {
  render() {
    return (
      <Card data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-delay="50"
      className="card-profile shadow mt-5">
        <CardHeader>پیوستن به گروه</CardHeader>
        <CardBody>
          <Form role="form" className="audit-form w-100 pt-5 pb-4">
            <Row className="justify-content-center mb-3 ml-0 mr-0">
              <Col lg="5">
                <FormGroup className="m-0">
                <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83"/>
                  </InputGroupText>
                </InputGroupAddon>

                    <Input
                      className="audit-input"
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
