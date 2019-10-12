import React from "react";
import { Row, Col, Container } from "reactstrap";
import OnboardingUnit from "./onboarding-unit.js";

class Onboarding extends React.Component {
  render() {
    return (
      <div className="py-5 mb-5">
        <Container className="pt-30 pb-30">
          <Row className="m-0 text-center justify-content-center">
            <Col lg="12">
              <p className="section-title">همین حالا شروع کنید</p>
              <Row className="m-0 d-flex justify-content-center">
                <OnboardingUnit
                  _text="ثبت نام و ورود"
                  imageUri={require("../../assets/img/theme/team-4-800x800.jpg")}
                />
                <OnboardingUnit
                  _text="ثبت هزینه‌ها"
                  imageUri={require("../../assets/img/theme/team-4-800x800.jpg")}
                />
                <OnboardingUnit
                  _text="مدیریت هزینهها"
                  imageUri={require("../../assets/img/theme/team-4-800x800.jpg")}
                />
                <OnboardingUnit
                  _text="گزارش گیری"
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

export default Onboarding;
