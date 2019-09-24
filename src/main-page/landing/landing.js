import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// import SignupButton from '../common/signup-button/SignupButton.js';
// import SigninButton from "../../common/signin-button/SigninButton.js";
// import Onboarding from "./Onboarding.js";

class Landing extends React.Component {
  state = {
    exampleModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <div className="landing-position-relative">
        {/* shape Hero */}
        <section className="section section-lg pb-200">
          <Container className="py-lg-md d-flex justify-content-center">
            <Row className="d-flex justify-items-center text-center">
              <Col className="pb-5">
                <h2 className="display-3">
                  حساب،
                  <h1 className="h1-hesabeh">حسابِه</h1>
                  ...
                </h2>
                <h4>مدیریت هزینه‌هاتو به حسابِه بسپار</h4>
                <p>هزینه‌های روزمره رو اینجا ثبت کن و به راحتی مدیریتشون کن</p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Landing;
