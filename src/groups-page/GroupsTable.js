import React from "react";
import { Table, Card, Container, Row } from "reactstrap";

import GroupTableRow from "./GroupTableRow.js";

class GroupsTable extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    return (
      <section className="section">
        <Container>
          <Card className="card-profile shadow mt--300">
            <div className="px-4">
              <Row className="justify-content-center p-5">
                <div class="border-0 p-3">
                  <h3 class="mb-0">گروه‌های من</h3>
                </div>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">نام گروه</th>
                      <th scope="col">بودجه</th>
                      <th scope="col">وضعیت</th>
                      <th scope="col">کاربران</th>
                      <th scope="col">Completion</th>
                      <th scope="col" />
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
