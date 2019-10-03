import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
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
import { Link } from "react-router-dom";
import NotificationsTableRow from "./notifications-table-row.js";

class NotificationsTable extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    const rows = [];
    this.props.data.forEach(row => {
      rows.push(<NotificationsTableRow rowData={row} />);
    });

    return (
      <section className="section pt-0">
        <Container>
          <Card className="card-profile shadow mt-5">
            <CardHeader>
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
                    to="/create-new-request"
                  >
                    ایجاد درخواست
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center py-5">
                <Col sm="12" className="notifications-table">
                  {rows}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default NotificationsTable;
