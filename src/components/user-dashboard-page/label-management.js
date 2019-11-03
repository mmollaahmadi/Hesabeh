import React from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  InputGroup,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
  Card,
  CardBody,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";
import { GithubPicker } from "react-color";
class LabelManagement extends React.Component {
  render() {
    return (
      <>
      <Col lg="7" className="order-2 mt-3">
      <Card data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="shadow m-0 mt-5">
        <CardBody>
          <Form role="form" className="audit-form">
            <Row className="justify-content-center mb-3">
              <Col lg="auto">
                <FormGroup className="m-0">
                  <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-tag"/>
                    </InputGroupText>
                  </InputGroupAddon>
                    <Input className="audit-input" placeholder="نام برچسب" />
                  </InputGroup>
                </FormGroup>
              </Col>

              <Col lg="auto" className="d-flex align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle className="p-0 btn-circle m-0">
                    <i className="fa fa-paint-brush"></i>
                  </DropdownToggle>
                  <DropdownMenu className="p-0">
                    <DropdownItem className="p-0">
                      <GithubPicker className="color-picker" />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>

              <Col lg="auto" className="">
                <FormGroup className="m-0">
                  <Button color="primary" type="button">
                    ایجاد برچسب
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>

          <Row className="justify-content-start">
            <h6 className="m-0"> برچسبها:</h6>
            <Badge color="primary" className="profile-label align-self-center">
              برچسب 1<i className="fa fa-close mr-2"></i>
            </Badge>
            <Badge color="primary" className="profile-label align-self-center">
              برچسب 1<i className="fa fa-close mr-2"></i>
            </Badge>
          </Row>
        </CardBody>
      </Card>
      </Col>
      <Col lg="5" className="order-1">
      </Col>
      </>
    );
  }
}
export default LabelManagement;