import React from 'react'
import {Button, Col} from "reactstrap";
import AOS from 'aos'


class FeaturesButton extends React.Component {
  constructor(props){
    super(props);
    // this.speedFeatureBtn = React.createRef();
    AOS.init({

    });
  }
  componentDidMount() {
    // const el = document.getElementById('features-btn');
    //   if(this.props.number === this.props.featureSelectedNumber){
    //     el.classList.add('features-btn-active');
    //   }else {
    //     el.classList.remove('features-btn-active');
    //   }
  }

  render() {
    return (
      <Col xs='12' className='justify-content-center p-0 m-0'>
        <Button
          id={'features-btn'}
          // ref={this.speedFeatureBtn}
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay="200"
          // className='main-page-text features-btn px-auto'
          className={`main-page-text features-btn px-auto ${this.props.number === this.props.featureSelectedNumber ? 'features-btn-active' : 'features-btn-not-active'}`}
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