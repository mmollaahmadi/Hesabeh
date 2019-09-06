import React from "react";
import { Container, Row, Table } from "reactstrap";

import ReportTableRow from "./ReportTableRow.js";
import FinalFinancialState from "./FinalFinancialState.js";

class Reports extends React.Component {
  render() {
    return (
      <section className="section pt-1">
        <Container>
          <div className="px-4">
          <FinalFinancialState/>

            <Row className="justify-content-center p-2">
              <div class="border-0 p-3">
                <h3 class="mb-0">جزئیات حساب‌ها</h3>
              </div>
              <Table className="align-items-center" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">نام گروه</th>
                    <th scope="col">بودجه</th>
                    <th scope="col">وضعیت گروه</th>
                    <th scope="col">کاربران</th>

                    <th scope="col">پرداختی شما</th>
                    <th scope="col">مصرف شما</th>
                    <th scope="col">وضعیت مالی شما</th>

                    <th scope="col">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <ReportTableRow />
                  <ReportTableRow />
                  <ReportTableRow />
                  <ReportTableRow />
                  <ReportTableRow />
                  <ReportTableRow />
                </tbody>
              </Table>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}

export default Reports;
