import React from "react";
import {
  Table,
  Card,
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

import GroupTableRow from "./group-table-row.js";
import { Link } from "react-router-dom";

class GroupsTable extends React.Component {
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

          <Card className="card-profile shadow mt-5">
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
                      to="/create-new-group"
                    >
                      ایجاد گروه جدید
                    </Button>
                  </Col>
                </Row>

                <Table className="align-items-center" responsive>
                  <thead className="thead-light table-header">
                    <tr>
                      <th scope="col">ردیف</th>
                      <th scope="col">نام گروه</th>
                      <th scope="col">بودجه</th>
                      <th scope="col">کاربران</th>
                      <th scope="col">وضعیت</th>
                      <th scope="col">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <GroupTableRow />
                    <GroupTableRow />
                    <GroupTableRow />
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

export default GroupsTable;
