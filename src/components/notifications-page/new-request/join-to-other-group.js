import React from 'react'
import {Button, Card, CardBody, CardHeader, Form, FormGroup, Input, InputGroup, InputGroupText, InputGroupAddon} from "reactstrap";

class JoinToOtherGroup extends React.Component {
  render() {
    return (
      <Card data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-delay="50"
      className="card-profile shadow mt-5">
        <CardHeader>درخواست پیوستن به گروه</CardHeader>
        <CardBody>
          <Form role="form" className="audit-form w-100 p-0">


              <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                              <i class="fa fa-users" />
                          </InputGroupText>
                      </InputGroupAddon>

                      <Input className="audit-input" placeholder="نام گروه" />
                  </InputGroup>
              </FormGroup>


                <FormGroup className="m-0 d-flex justify-content-center">
                  <Button className='payments-btn-lv2 btn btn-primary' color="primary" >
                    ارسال درخواست
                  </Button>
                </FormGroup>

          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default JoinToOtherGroup;
