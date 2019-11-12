import React from "react";

// reactstrap components
import {Row, Button, Col} from "reactstrap";
import AOS from "aos";
import { Link } from "react-router-dom";
// import SignupButton from '../common/signup-button/SignupButton.js';
// import SigninButton from "../../common/signin-button/SigninButton.js";
// import OnboardingUnit from "./OnboardingUnit.js";

class Landing extends React.Component {
  constructor(){super();}
  componentDidMount() {
    AOS.refresh();
  }
  componentWillMount() {
    AOS.init();
  }

  render() {
    return (
      <Row className="sec">
        <Col
          md="5"
          className="d-flex align-items-center justify-content-lg-end justify-content-center px-auto"
        >
          <div data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="50"
               className="d-block text-center">
            <img
              alt=""
              className="rounded-circle landing-logo"
              src={require("../../../assets/img/theme/logo01.png")}
            />
            <h2 className="h2-hesabeh display-3">
              حساب،
              <h1 className="h1-hesabeh">حسابِه</h1>
              ...
            </h2>
            <h4 className="h4-hesabeh">مدیریت هزینه‌هاتو به حسابِه بسپار</h4>
            <p className="p-hesabeh">
              هزینه‌های روزمره رو اینجا ثبت کن و به راحتی مدیریتشون کن
            </p>
            <Button
            color="primary"
            className="py-1 px-4 primary-button"
            to='/help'
            tag={Link}
            onClick={() => this.props.onChangePage('help')}
            >
              بیشتر
            </Button>
          </div>
        </Col>
        <Col md="7" className="" />
      </Row>
    );
  }
}

export default Landing;
