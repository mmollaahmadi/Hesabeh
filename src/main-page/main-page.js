import React from "react";

import Navbar from "../common/navbar/navbar";
import Landing from "./landing/landing";
import AboutUs from "./about-us";
import OurServices from "./our-services/our-services";
import Footer from "../common/footer/footer.js";
import OurStatistics from "./statistics/OurStatistics.js";
import Learning from "./onboarding/learning.js";

import './main-page.css';

class MainPage extends React.Component {
  render() {
    let mainPage = null;
    if (this.props.isLogin === "false") {
      mainPage = (
        <div>
          <Landing />
          <Learning />
          <OurServices />
          <AboutUs />
          <OurStatistics />
        </div>
      );
    } else {
      mainPage = <div></div>;
    }
    return (
      <div>
        <Navbar isLogin={this.props.isLogin} user={USERS[0]} />
        {mainPage}
        <Footer />
      </div>
    );
  }
}

const USERS = [
  {
    name: "Mohammad Mollaahmadi",
    username: "mollaahmadi",
    email: "mollaahmadimohammad@gmail.com"
  },
  { name: "Ali Pashaee", username: "pashaee", email: "alipashae8@yahoo.com" }
];

// const GOODS = [
//     {name: 'miveh', price: '18000', buy_date: '12/02/98', add_date: '01/06/98', adder: 'mollaahmadi', pardakhtkonandeha:'mollaahmadi', masrafkonandeha: {1: 'pashaee'}},
//     {name: 'shampoo', price: '20000', buy_date: '30/05/98', add_date: '01/06/98', adder: 'mollaahmadi', pardakhtkonandeha:'pashaee', masrafkonandeha: {1: 'mollaahmadi', 2: 'pashaee'}},
// ];

export default MainPage;
