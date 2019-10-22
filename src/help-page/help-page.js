import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";
import Title from "../common/title/title";
class HelpPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar isLogin="false" />

        <div className="my-body">
          <Container>
            <Row>
              <Col lg="5" className="help-image-col"></Col>
              <Col lg="7" className="help-text-col">
                <p className="text-justify">
                  اولین قدم ایجاد حساب کاربری توی حسابه هست. شما میتونید این
                  کارو با حساب کاربری گوگل خودتون با چند کلیک انجام بدید یا با
                  وارد کردن آدرس پست الکترونیکی خودتون و یه رمز عبور که حتما
                  شامل حروف کوچک و بزرگ انگلیسی، علائم خاص و اعداد است انجام
                  بدید.
                </p>
              </Col>
              <Col lg="7" className="help-image-col">
                <p className="text-justify">
                  قدم بعدی وارد کردن هزینه های روزانه در حساب کاربری خودتون هست.
                  شما میتونید این کار رو از قسمت حساب من و افزودن هزینه انجام
                  بدید
                </p>
              </Col>
              <Col lg="5" className="help-text-col"></Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HelpPage;
