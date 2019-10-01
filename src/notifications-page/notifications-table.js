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

import NotificationsTableRow from "./notifications-table-row.js";
import { Link } from "react-router-dom";
import NotificationTable from './notification-table/notification-table.js';
const DATA = [
  {
    id: "1",
    sender: "mollaahmadi",
    type: "buy-list",
    "targetGroup": "mollaahmadi-family",
    "buy-list": [
      {
        id: "1",
        name: "شامپو تخم مرغی صحت",
        description: "نداشت نگیر"
      },
      {
        id: "2",
        name: "سس گوجه فرنگی",
        description: "فقط دلپذیر باشه ها"
      }
    ]
  },
  {
    id: "2",
    sender: "mahlagha",
    type: "join-to-my-group",
    "targetGroup": "hamsayeha",
    "buy-list": []
  },
  {
    id: "3",
    sender: "ali",
    type: "join-me-to-other-group",
    "targetGroup": "itc",
    "buy-list": []
  },
  {
    id: "4",
    sender: "sepanta",
    type: "disjoin-from-my-group",
    "targetGroup": "khabgah",
    "buy-list": []
  },
  {
    id: "5",
    sender: "mahlagha",
    type: "disjoin-me-from-other-group",
    "targetGroup": "غضنفر و دوستان",
    "buy-list": []
  }
];
class NotificationsTable extends React.Component {
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
                      to="/create-new-request"
                    >
                      ایجاد درخواست
                    </Button>
                  </Col>
                </Row>
                <NotificationTable data={DATA} />
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ردیف</th>
                      <th scope="col">فرستنده</th>
                      <th scope="col">درخواست</th>
                      <th scope="col">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <NotificationsTableRow />
                    <NotificationsTableRow />
                    <NotificationsTableRow />
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

export default NotificationsTable;
