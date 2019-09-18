import React from "react";
import { Row, Col, Container } from "reactstrap";

import Onboarding from "./Onboarding.js";
import './Learning.css';

class Learning extends React.Component {
  render() {
    return (
      <div className=" bg pb-6 pt-5">
        <Container className="pt-30 pb-30">
          <Row className="text-center justify-content-center">
            <Col lg="10">
            <p className="section-title">همین حالا شروع کنید
            </p>
              <Row className="d-flex justify-content-center">
                <Onboarding
                  _text="ثبت نام و ورود به حساب کاربری"
                  imageUri={require("../../assets/img/theme/1.png")}
                />
                <Onboarding
                  _text="افزودن خرج و مخارج"
                  imageUri={require("../../assets/img/theme/1.png")}
                />
                <Onboarding
                  _text="بررسی وضعیت مالی"
                  imageUri={require("../../assets/img/theme/1.png")}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Learning;
