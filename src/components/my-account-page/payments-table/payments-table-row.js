import React from "react";
import {Row, Col, Badge, Button, Card} from "reactstrap";
import Chip from "../../common/chip/chip";

class PaymentsTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.checked !== this.props.checked && this.props.checked) {
      this.setState({isChecked: true});
    }
    if (prevProps.checked !== this.props.checked && !this.props.checked) {
      this.setState({isChecked: false});
    }
  }

  handleCheckBoxChange() {
    this.props.updateCheckBoxesStatusList(this.props.data.id);
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    let consumers = [];
    this.props.data.consumers.forEach(consumer => {
      consumers.push(
        <div  className={' consumer-col'}>

          <Chip
            link="/mollaahmadi.ir"
            haveCloseButton="false"
            avatarSrc={require("../../../assets/img/users/user01.jpg")}
            label={consumer.username}
            class=" mx-1"
            // onDelete={() => this.deleteUser()}
          />
          <span color={'danger'}
                 className={'align-items-center d-flex sahm-badge'}>
            {consumer.sahm} سهم
          </span>

        </div>
      );
    });
    return (
      <div
        className={`px-2 p-lg-0 mx-auto my-masonry-grid_column align-self-start ${this.state.isChecked ? 'checked' : 'un-checked'}`}>
        <Card
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="card-profile shadow mt-4">
        <Row className="m-0">
          <Col
            xs="12"
            className="table-row-col justify-content-lg-center check-width px-lg-0"
          >
            <Badge color={'primary'} className="ml-auto date">{this.props.data.date}</Badge>
            <div className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id={this.props.data.id}
                type="checkbox"
                onChange={this.handleCheckBoxChange}
                checked={this.state.isChecked}
              />
              <label
                className="custom-control-label pr-1"
                htmlFor={this.props.data.id}
              >
                <span className="signin-modal-text mr-3"/>
              </label>
            </div>
          </Col>

          <Col
            xs="12"
            className=" table-row-col justify-content-start my-auto"
          >
            <span className="ml-2 title">نام: </span>
            <span>{this.props.data.name}</span>
          </Col>

          <Col
            xs="12"
            className="table-row-col justify-content-start my-auto"
          >
            <span className="ml-2 title">قیمت: </span>
            <span>{this.props.data.value}</span>
          </Col>

          <Col xs="12" className="table-row-col justify-content-start my-auto">
            <span className="ml-2 title">توضیح: </span>
            <span>{this.props.data.description}</span>
          </Col>

          <Col
            xs="12"
            className="table-row-col justify-content-start my-auto"
          >
            <span className="ml-2 title">انجام دهندگان: </span>
            <Chip
              link="/mollaahmadi.ir"
              haveCloseButton="false"
              avatarSrc={require("../../../assets/img/users/user01.jpg")}
              label={this.props.data.group}
              // onDelete={() => this.deleteUser()}
            />
          </Col>

          <Col
            xs='12'
            className="table-row-col justify-content-start d-inline my-auto"
          >
            <span className="ml-2 title">مصرف کنندگان: </span>
            {consumers}
          </Col>
          <Col
            xs='12'
            className="table-row-col justify-content-start d-inline my-auto"
          >
            <span className="ml-2 title"> برچسبها: </span>
          </Col>
          <Col
            xs='12'
            className="table-row-col justify-content-center d-flex my-auto"
          >
            <Button
              color={'delete'}
              className={'table-row-button'}
            >
              حذف
            </Button>
            <Button
              color={'default'}
              className={'table-row-button'}
              onClick={this.props.onClick}
            >
              ویرایش
            </Button>
          </Col>
          {/*<Col sm="12" className="table-row-line" />*/}
        </Row>
        </Card>
      </div>
    );
  }
}

export default PaymentsTableRow;
