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
      <div>
      <div className="landing-position-relative">
        {/* shape Hero */}
        <section className="section section-lg section-shaped pb-200">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span className="span-50" />
            <span className="span-170" />
            <span />
            <span />
            <span className="span-200" />
            <span />
            <span className="span-150" />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="px-0 ">
              <Row className="text-center">
                <Col className="pb-5">
                  <h2 className="display-3">
                    حساب،
                    <h1 className="h1-hesabeh">حسابِه</h1>
                    ...
                  </h2>
                  <p className="lead">
                  اگه میخوای حساب و کتاب هزینه‌هایی که روزانه برای خودت، خونوادت، دوستات، محل کارت و ... انجام میدی، دستت باشه توی حسابِه ثبت‌نام کن، گروه ایجاد کن، دوستات، خونوادت، همکارات رو دعوت کن، هزینه‌هاتو ثبت کن، بدهی‌هات رو تسویه کن و از کلی امکان دیگه که به زودی به حسابِه اضافه میشن با خیال راحت استفاده کن.
                  </p>
                  {/*<div className="btn-wrapper">
                    <SigninButton title="شروع" buttonOrLink="button"
                  </div>*/}
                </Col>
              {/*  <Col lg="12" className="">

                  <Row className="mt--3">
                  <Onboarding
                    _text="ثبت نام و ورود به حساب کاربری"
                    imageUri={require("../assets/img/theme/team-1-800x800.jpg")}
                  />
                  <Onboarding
                    _text="افزودن خرج و مخارج"
                    imageUri={require("../assets/img/theme/team-1-800x800.jpg")}
                  />
                  <Onboarding
                    _text="بررسی وضعیت مالی"
                    imageUri={require("../assets/img/theme/team-1-800x800.jpg")}
                  />
                  <Onboarding
                    _text="پرداخت هزینه‌ها"
                    imageUri={require("../assets/img/theme/team-1-800x800.jpg")}
                  />
                  </Row>




                </Col>*/}
              </Row>
            </div>
          </Container>

        </section>




      </div>
      {/* 1st Hero Variation
      <Container className="onboard">
      <Row >
      <Onboarding
        _text="ثبت نام و ورود به حساب کاربری"
        imageUri={require("../assets/img/theme/team-1-800x800.jpg")}
      />
      <Onboarding
        _text="افزودن خرج و مخارج"
        imageUri={require("../assets/img/theme/team-1-800x800.jpg")}
      />
      <Onboarding
        _text="بررسی وضعیت مالی"
        imageUri={require("../assets/img/theme/team-1-800x800.jpg")}
      />
      <Onboarding
        _text="پرداخت هزینه‌ها"
        imageUri={require("../assets/img/theme/team-1-800x800.jpg")}
      />
      </Row>

      </Container>*/}
      </div>
    );
  }
}

export default Landing;
