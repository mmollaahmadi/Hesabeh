import React from "react";
import { Row, Container } from "reactstrap";
import StatisticUnit from "./StatisticUnit.js";


class OurStatistics extends React.Component {
  render() {
    return (
      <div className="section">
      <Container >
        <Row className="mx-0 mt-5 d-flex justify-content-center">
          <p className="section-title">
          به حسابِه بپیوندید
          </p>
        </Row>
        <Row className="mx-0 my-1">
          <StatisticUnit
            text="۱۲۳ کاربر"
            img_url={require("../../assets/img/theme/icons8-team-64.png")}
          />
          <StatisticUnit
            text="۴۰ گروه"
            img_url={require("../../assets/img/theme/icons8-team-64.png")}
          />
          <StatisticUnit
            text="۴۰۰ تراکنش"
            img_url={require("../../assets/img/theme/icons8-team-64.png")}
          />
          <StatisticUnit
            text="۱۰۰ کاربر فعال"
            img_url={require("../../assets/img/theme/icons8-team-64.png")}
          />
        </Row>
      </Container>
      </div>
    );
  }
}

export default OurStatistics;
