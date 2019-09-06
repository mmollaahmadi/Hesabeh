import React from 'react';

import {  Col,
  Button,
Row
} from "reactstrap";

class FinalFinancialState extends React.Component {
  render(){
    return(
      <Row className="justify-content-center p-1">
        <Col lg="4" sm="12" className="p-4">
        <Button
          className="btn btn-danger btn-block finance-button"
          color="danger"
          type="button"
        >
      مصرف شما :
      ۳۴۰۰۰ تومان
        </Button>
        </Col>

        <Col lg="4" sm="12" className="p-4">
        <Button
          className="btn btn-info btn-block finance-button"
          color="info"
          type="button"
        >
      وضعیت نهایی :
      ۱۲۰۰۰ تومان
        </Button>
        </Col>

        <Col lg="4" sm="12" className="p-4">
        <Button
          className="btn btn-success btn-block finance-button"
          color="success"
          type="button"
        >
      پرداخت شما :
      ۲۲۰۰۰ تومان
        </Button>
        </Col>
      </Row>
    );
  }
}

export default FinalFinancialState;
