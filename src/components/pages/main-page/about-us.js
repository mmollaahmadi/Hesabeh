import React from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollableAnchor from 'react-scrollable-anchor'
class AboutUs extends React.Component {
  render() {
    return (
<ScrollableAnchor id={'about-us'}>
      <section className="section dark-section bg pb-6 pt-5">
        <Container className="pt-30 pb-30">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <p data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay="50"
                 className="section-title">درباره‌ی ما</p>
              <p data-aos="zoom-in"
                 data-aos-duration="1000"
                 data-aos-delay="200"
                 className="main-page-text text-justify">
                خریدهای منزل، پرداخت قبوض، اجاره‌بها، تعمیرات منزل، سفر با
                دوستان، خریدهای مشترک هم‌خانه‌ای‌ها، رفتن به سینما و... تنها
                تعداد کمی از هزینه‌هایی هستند که در طول ماه انجام می‌دهیم.
                یادداشت این هزینه‌ها و تقسیم‌بندی هزینه‌های گروهی و بررسی آنها
                می‌تواند کمک کند تا با مدیریت صحیح هزینه‌ها، صرفه‌جویی و
                پس‌انداز کنیم. شما در حسابه می‌توانید هزینه‌ها را ثبت کنید، سهم هر
              فرد را در هزینه‌های گروهی مشخص کنید، لیست خرید تهیه و ارسال کنید،
                گزارش ماهانه دریافت کنید.
              </p>
            </Col>
          </Row>
        </Container>
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
                  className="fill-body-bg-color "
                  points="3560 0 3560 100 0 100"
                />
              </svg>
            </div>
      </section>
      </ScrollableAnchor>
    );
  }
}

export default AboutUs;
