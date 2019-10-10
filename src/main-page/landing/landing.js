import React from "react";

// reactstrap components
import { Row, Button, Col } from "reactstrap";
// import SignupButton from '../common/signup-button/SignupButton.js';
// import SigninButton from "../../common/signin-button/SigninButton.js";
// import Onboarding from "./Onboarding.js";

class Landing extends React.Component {

  render() {
    return (
      <Row className="sec">
        <Col md="5" className="d-flex align-items-center justify-content-lg-end justify-content-sm-center px-auto">
          <div className="d-block text-center">
            <img
              alt=""
              className="rounded-circle landing-logo"
              src={require("../../assets/img/theme/logo01.png")}
            />
            <h2 className="h2-hesabeh display-3">
              حساب،
              <h1 className="h1-hesabeh">حسابِه</h1>
              ...
            </h2>
            <h4 className='h4-hesabeh'>مدیریت هزینه‌هاتو به حسابِه بسپار</h4>
            <p className='p-hesabeh'>هزینه‌های روزمره رو اینجا ثبت کن و به راحتی مدیریتشون کن</p>
            <Button color="primary" className="py-1 px-4">
              بیشتر
            </Button>
          </div>
        </Col>
        <Col md="7" className=""/>
      </Row>
    );
  }
}

export default Landing;
