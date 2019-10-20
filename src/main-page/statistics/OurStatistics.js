import React from "react";
import { Row, Container } from "reactstrap";
import StatisticUnit from "./StatisticUnit.js";

class OurStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfUsers: 0,
      numberOfGroups: 0,
      numberOfTransactions: 0,
      numberOfActiveUsers: 0
    };
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }
  trackScrolling = () => {
    const wrappedElement = document.getElementById("statis");
    if (this.isBottom(wrappedElement)) {
      this.setState({
        numberOfUsers: 1900,
        numberOfGroups: 2000,
        numberOfTransactions: 1245,
        numberOfActiveUsers: 124
      });
    }
  };

  render() {
    const {
      numberOfUsers,
      numberOfGroups,
      numberOfTransactions,
      numberOfActiveUsers
    } = this.state;

    return (
      <div className="section">
        <Container>
          <Row className="mx-0 mt-5 d-flex justify-content-center">
            <p data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="50"
               className="section-title">به حسابِه بپیوندید</p>
          </Row>
          <Row className="mx-0 my-1">
            <StatisticUnit
              title="کاربر"
              value={numberOfUsers}
              img_url={require("../../assets/img/theme/team-4-800x800.jpg")}
            />
            <StatisticUnit
              title="گروه"
              value={numberOfGroups}
              img_url={require("../../assets/img/theme/team-4-800x800.jpg")}
            />
            <StatisticUnit
              title="تراکنش"
              value={numberOfTransactions}
              img_url={require("../../assets/img/theme/team-4-800x800.jpg")}
            />
            <StatisticUnit
              title="کاربر فعال"
              value={numberOfActiveUsers}
              img_url={require("../../assets/img/theme/team-4-800x800.jpg")}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurStatistics;
