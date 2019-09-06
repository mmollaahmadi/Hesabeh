import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gradient-default pb-6 pt-5">
        <Container className="pt-30 pb-30">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <h2 className="display-3 text-white">درباره‌ی ما</h2>
              <p className="lead text-white">
                همه چیز از دوران دانشجویی شروع شد و این‌که حساب و کتاب خرج و
                مخارج گروهی زمان‌بر و پیچیده بود. تصمیم گرفتیم راه حلی که این
                چند سال برای این مشکل استفاده کردیم رو با شما به اشتراک بزاریم.
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
