import React from 'react'
import {Button, Col} from "reactstrap";

class FeaturesButton extends React.Component{
  render() {
    return(
      <Col xs='12' className='justify-content-center p-0 m-0'>
      <Button
        data-aos='zoom-in'
        data-aos-duration='1000'
        data-aos-delay="200"
        className='main-page-text features-btn px-auto'
        color="primary"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </Button>
      </Col>
    );
  }
}

export default FeaturesButton;