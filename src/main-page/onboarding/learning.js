import React from "react";
import { Row, Col, Container } from "reactstrap";
import Onboarding from "./onboarding.js";

class Learning extends React.Component {
  render() {
    return (
      <div className="py-5 mb-5">
        <Container className="pt-30 pb-30">
          <Row className="text-center justify-content-center">
            <Col lg="10">
            <p className="section-title">همین حالا شروع کنید
            </p>
              <Row className="d-flex justify-content-center">
                <Onboarding
                  _text="ثبت نام و ورود به حساب کاربری"
                  imageUri={require("../../assets/img/theme/circle05.png")}
                />
                <Onboarding
                  _text="ثبت هزینه‌های شخصی و گروهی"
                  imageUri={require("../../assets/img/theme/circle05.png")}
                />
                <Onboarding
                  _text="استفاده از امکانات حسابه"
                  imageUri={require("../../assets/img/theme/circle05.png")}
                />
                <Onboarding
                  _text="استفاده از امکانات حسابه"
                  imageUri={require("../../assets/img/theme/circle05.png")}
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
