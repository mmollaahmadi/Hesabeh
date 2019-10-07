import React from "react";
import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Row,
  Col
} from "reactstrap";

import PaymentsTableRow from "./payments-table-row.js";
import TableCardHeader from "../common/table-card-header/table-card-header";

class PaymentsTable extends React.Component {
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
             <TableCardHeader title="هزینهها" buttonTitle="افزودن هزینه" buttonLink="/add-new-payment"/>
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
