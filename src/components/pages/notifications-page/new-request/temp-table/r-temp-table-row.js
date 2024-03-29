import React from "react";
import { Row, Col } from "reactstrap";
import Chip from "../../../../my-components/chip/chip";

class RTempTableRow extends React.Component {
  constructor(props){
    super(props);
    this.state = {isChecked:false};
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.checked !== this.props.checked && this.props.checked){
      this.setState({isChecked: true});
    }
    if(prevProps.checked !== this.props.checked && !this.props.checked){
      this.setState({isChecked: false});
    }
  }

  handleCheckBoxChange(){
    this.props.updateCheckBoxesStatusList(this.props.data.id);
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
  render() {
    let consumers = [];
    this.props.data.consumers.forEach(consumer => {
      consumers.push(
        <Chip
          link="/mollaahmadi.ir"
          haveCloseButton="false"
          avatarSrc={require("../../../../../assets/img/users/user01.jpg")}
          label={consumer.username}
          class="mb-1 mx-1"
          // onDelete={() => this.deleteUser()}
        />
      );
    });
    return (
      <Col xs="12"
      className={`px-2 p-lg-0 m-1 m-lg-0 ${this.state.isChecked ? 'checked' : 'un-checked'}`}>
        <Row className="m-0">
          <Col
            xs="12"
            lg="auto"
            className="table-row-col justify-content-lg-center check-width px-lg-0"
          >
            {/*<span className="d-lg-none ml-auto">{this.props.data.date}</span>*/}
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
                <span className="signin-modal-text mr-3"></span>
              </label>
            </div>
          </Col>

          {/*<Col
            lg="1"
            className="d-none d-lg-flex table-row-col justify-content-lg-center date-request"
          >
            <span>{this.props.data.date}</span>
          </Col>*/}

          <Col
            xs="6"
            lg="8"
            className=" table-row-col justify-content-lg-center my-auto"
          >
            <span className="d-lg-none ml-2">نام: </span>
            <span>{this.props.data.name}</span>
          </Col>

          <Col
            lg="2"
            className="table-row-col justify-content-lg-center my-auto flex-grow-1"
          >
            <span className="d-lg-none ml-2 w-auto">مصرف کنندگان: </span>
            <Row className="mx-0 consumers">{consumers}</Row>
          </Col>

          <Col sm="12" className="table-row-line" />
        </Row>
      </Col>
    );
  }
}

export default RTempTableRow;
