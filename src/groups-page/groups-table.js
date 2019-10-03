import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
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

import GroupsTableRow from "./my-groups-table-row.js";
import { Link } from "react-router-dom";

class GroupsTable extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    let myGroups = [];
    this.props.myGroups.forEach(group => {
      myGroups.push(<GroupsTableRow dataGroup={group} />);
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
                    to="/create-new-group"
                  >
                    ایجاد گروه جدید
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center p-5">
                <Col sm="12" className="notifications-table">
                  {myGroups}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default GroupsTable;
