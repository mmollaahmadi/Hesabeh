import React from "react";

// reactstrap components
import { Row, Button, Col } from "reactstrap";
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
      <Row className="sec">
        <Col lg="4" className="d-flex align-items-center px-auto offset-lg-1">
          <div className="d-block text-center">
            <img
              alt=""
              className="rounded-circle landing-logo"
              src={require("../../assets/img/theme/logo01.png")}
            />
            <h2 className="display-3">
              حساب،
              <h1 className="h1-hesabeh">حسابِه</h1>
              ...
            </h2>
            <h4>مدیریت هزینه‌هاتو به حسابِه بسپار</h4>
            <p>هزینه‌های روزمره رو اینجا ثبت کن و به راحتی مدیریتشون کن</p>
            <Button color="primary" className="py-1 px-4">
              بیشتر
            </Button>
          </div>
        </Col>
        <Col lg="7" className="land-pic"></Col>
      </Row>
    );
  }
}

export default Landing;
