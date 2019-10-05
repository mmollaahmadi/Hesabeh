import React from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";

class DefaultOrderValue extends React.Component {
  render() {
    return (
      <>
      <Col lg="7">
      <Card className="card-profile shadow m-0">
        <CardBody>
          <Form>
            <Row className="px-2">
              <Col lg="12" className="px-4">
                <FormGroup>
                  <Label for="exampleSelect">ترتیب نمایش گروه‌ها</Label>

                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col lg="12" className="px-4">
                <FormGroup>
                  <Label for="exampleSelect">ترتیب نمایش خرج‌ها</Label>

                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col lg="12" className="px-4">
                <FormGroup>
                  <Label for="exampleSelect">ترتیب نمایش اعلام‌ها</Label>

                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      </Col>
      <Col lg="5">
      </Col>
      </>
    );
  }
}
export default DefaultOrderValue;
