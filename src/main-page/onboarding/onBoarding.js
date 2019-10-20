import React from "react";
import { Row, Col, Container } from "reactstrap";
import OnBoardingUnit from "./on-boarding-unit.js";

class OnBoarding extends React.Component {
  render() {
    return (
      <div className="py-5 mb-5">
        <Container className="pt-30 pb-30">
          <Row className="m-0 text-center justify-content-center">
            <Col lg="12">
              <p data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay="50"
                 className="section-title">همین حالا شروع کنید</p>
              <Row className="m-0 d-flex justify-content-center">
                <OnBoardingUnit
                  number='0'
                  _text="ثبت‌ نام و ورود"
                  imageUri={require("../../assets/img/theme/team-4-800x800.jpg")}
                />
                <OnBoardingUnit
                  number='1'
                  _text="ثبت هزینه‌ها"
                  imageUri={require("../../assets/img/theme/team-4-800x800.jpg")}
                />
                <OnBoardingUnit
                  number='2'
                  _text="مدیریت هزینه‌ها"
                  imageUri={require("../../assets/img/theme/team-4-800x800.jpg")}
                />
                <OnBoardingUnit
                  number='3'
                  _text="گزارش‌گیری"
                  imageUri={require("../../assets/img/theme/team-4-800x800.jpg")}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OnBoarding;
