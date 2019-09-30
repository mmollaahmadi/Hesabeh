import React from "react";
import {
  Table,
  Card,
  Container,
  CardHeader,
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
    return (
      <section className="section pt-0">
        <Container>
          <Card className="card-profile shadow mt-4">
            <CardHeader>هزینه ها</CardHeader>
            <div className="px-4">
              <Row className="justify-content-center p-5">
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
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ردیف</th>
                      <th scope="col">نام هزینه</th>
                      <th scope="col">میزان هزینه</th>
                      <th scope="col">شخصی / گروهی</th>
                      <th scope="col">سهم ها</th>
                      <th scope="col">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <PaymentsTableRow />
                    <PaymentsTableRow />
                    <PaymentsTableRow />
                  </tbody>
                </Table>
              </Row>
            </div>
          </Card>
        </Container>
      </section>
    );
  }
}

export default PaymentsTable;
