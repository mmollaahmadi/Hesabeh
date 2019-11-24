import React from "react";
import Landing from "./landing/landing";
import AboutUs from "./about-us";
import Features from "./features/features.js";
import OurStatistics from "./statistics/OurStatistics.js";
import OnBoarding from "./onboarding/onBoarding.js";
import { goToAnchor,configureAnchors } from 'react-scrollable-anchor'
import './main-page.css';

class MainPage extends React.Component {
// componentDidUpdate(prevProps){
  // configureAnchors({offset: 0, scrollDuration: 2000});
  // if(prevProps.goto !== this.props.goto && this.props.goto === 'features'){
    // goToAnchor('features');
  // }
  // if(this.props.goto === 'about-us'){
  //   goToAnchor('about-us');
  // }
// }
componentDidMount(){
  configureAnchors({offset: 0, scrollDuration: 2000});
  if(this.props.goto === 'features'){
    goToAnchor('features');
  }}
  render() {
    // if(this.props.goto === 'features'){
    //   goToAnchor('features');
    // }
    let mainPage = null;
    if (this.props.isLogin === "false") {
      mainPage = (
        <div>
          <Landing
            onChangePage={this.props.onChangePage}
            goto={this.props.goto}
          />
          <AboutUs />
          <OnBoarding />
          <Features />
          <OurStatistics />
        </div>
      );
    } else {
      mainPage = <div/>;
    }
    return (
      <div>
        {mainPage}
      </div>
    );
  }
}



// const GOODS = [
//     {name: 'miveh', price: '18000', buy_date: '12/02/98', add_date: '01/06/98', adder: 'mollaahmadi', pardakhtkonandeha:'mollaahmadi', masrafkonandeha: {1: 'pashaee'}},
//     {name: 'shampoo', price: '20000', buy_date: '30/05/98', add_date: '01/06/98', adder: 'mollaahmadi', pardakhtkonandeha:'pashaee', masrafkonandeha: {1: 'mollaahmadi', 2: 'pashaee'}},
// ];

export default MainPage;
