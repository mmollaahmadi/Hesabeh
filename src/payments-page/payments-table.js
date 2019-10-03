import React from "react";
import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

import PaymentsTableRow from "./payments-table-row.js";
import { Link } from "react-router-dom";

class PaymentsTable extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    let payments = [];
    this.props.payments.forEach(payment => {
      payments.push(<PaymentsTableRow data={payment} />);
    });
    return (
      <section className="section pt-0">
        <Container>
          <Card className="card-profile shadow mt-4">
            <CardHeader>
              هزینه ها
              <Row className="justify-content-center">
                <Col lg="auto">
                  <i className="fa fa-sort fa-2x mx-2 d-inline-block" />
                  <i className="fa fa-filter fa-2x mx-2 d-inline" />
                </Col>
                <Col>
                  <Form className="d-inline">
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-search" />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          className="signin-input"
                          placeholder="جستجو ..."
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </Col>
                <Col lg="auto">
                  <Button
                    color="primary"
                    className="p-2"
                    tag={Link}
                    to="/add-new-payment"
                  >
                    افزودن هزینه
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>              
                <Row className="justify-content-center p-5">
                  <Col sm="12" className="notifications-table">
                    {payments}
                  </Col>
                </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default PaymentsTable;
