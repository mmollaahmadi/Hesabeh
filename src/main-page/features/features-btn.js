import React from 'react'
import {Button} from "reactstrap";

class FeaturesButton extends React.Component{
  render() {
    return(
      <Button
        data-aos="fade-up"
        data-aos-duration={this.props.number * 500}
        data-aos-delay="50"
        className='main-page-text features-btn'
        color="primary"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </Button>
    );
  }
}

export default FeaturesButton;