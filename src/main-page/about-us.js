import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section dark-section bg pb-6 pt-5">
        <Container className="pt-30 pb-30">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <p className="section-title">درباره‌ی ما
              </p>
              <p className="lead text-justify">
              خریدهای منزل، پرداخت قبوض، اجاره‌بها، تعمیرات منزل، سفر با دوستان، خریدهای مشترک هم‌خانه‌ای‌ها،
              رفتن به سینما و... تنها تعداد کمی از هزینه‌هایی هستند که در طول ماه انجام می‌دهیم.
              یادداشت این هزینه‌ها و تقسیم‌بندی هزینه‌های گروهی و بررسی آنها می‌تواند کمک کند تا با مدیریت صحیح هزینه‌ها،
              صرفه‌جویی و پس‌انداز کنیم.

              شما در حسابه میتوانید هزینهها را ثبت کنید، سهم هر فرد رادر هزینه‌های گروهی مشخص کنید، لیست خرید تهیه و ارسال کنید، گزارش
              ماهانه دریافت کنید.

              </p>
            </Col>
          </Row>
        </Container>
        {/* SVG separator
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 3560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="3560 0 3560 100 0 100"
                />
              </svg>
            </div>*/}
      </section>
    );
  }
}

export default AboutUs;
