import React from "react";
import { Row, Col, Button } from "reactstrap";
import Profile from "../../common/profile/Profile.js";
import "./request.css";
class Request extends React.Component {
  render() {
    return (
      <div>
        <Row className="mb-3 pb-3">
          <Col lg="4">
            <Profile />
          </Col>
          <Col lg="5" className="d-flex justify-content-center align-items-center">
            <p className=" text-center mb-0">
              درخواست ملحق شدن شما به گروه امیرکبیر۵۰۴ را دارد.
            </p>
          </Col>
          <Col lg="3">
            <Button className="btn-1 ml-1" color="success" type="button">
              قبول
            </Button>
            <Button className="btn-1 ml-1" color="danger" type="button">
              بیخیال
            </Button>
          </Col>
        </Row>
        <hr class="style5 mt-0" />
      </div>
    );
  }
}

export default Request;
