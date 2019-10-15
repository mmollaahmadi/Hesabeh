import React from "react";
import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import PaymentsTableRow from "./payments-table-row.js";
import TableTools from "../../common/table-tools/table-tools";
import PaymentsTableHeader from "./payments-table-header";

class PaymentsTable extends React.Component {
  render() {
    let payments = [];
    this.props.payments.forEach(payment => {
      payments.push(<PaymentsTableRow data={payment}/>);
    });
    return (
      <section className="section pt-0">
        <Container>
          <Card className="card-profile shadow mt-4">
            <CardHeader>
              هزینه ها
            </CardHeader>
            <CardBody>
              <TableTools buttonTitle="افزودن هزینه" buttonLink="/add-new-payment"/>
              <Row className="justify-content-center px-1">
                <PaymentsTableHeader/>

                  {payments}

              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    );
  }
}

export default PaymentsTable;
