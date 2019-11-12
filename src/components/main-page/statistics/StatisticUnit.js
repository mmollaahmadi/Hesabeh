import React from "react";
import { Col } from "reactstrap";
import CountUp from 'react-countup';

class StatisticUnit extends React.Component {

  render() {
    return (
      <Col lg="3" xs="6" id='statis'>
        <div data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-delay="200"
             className="px-0"
             >
          <img
            alt="..."
            className="rounded-circle statistic-circle-image"
            src={this.props.img_url}

          />
          <div className="pt-4 text-center ">

            <p
            className={'main-page-text'}
            >
              <CountUp
              start={1}
              end={this.props.value}
              delay={1}
              duration={2}
              // onEnd={({pauseResume,reset, start, update}) => {
              //   if(!this.props.isShow){
              //     start();
              //     this.onChangeShowing();
              //   }
              //
              // }}
              // onStart={this.onChangeShowing}
              start={this.props.start}/>
              {` ${this.props.title}`}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default StatisticUnit;
