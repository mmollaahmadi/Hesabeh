import React from "react";
import {Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from "reactstrap";

class UserUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: null,
      // isChecked: false,
      share:{
        placeholder: 'سهم',
        value:1
      }
    };
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event){
    this.props.updateSelectedUserShare(this.props.groupID,this.props.user.id,event.target.value);
    this.setState({
      share:{
        ...this.state.share,
        value: event.target.value,
      },
    });
  }
  handleCheckedChange(id){
    this.props.updateSelectedUsersList(id);
    // this.setState({
    //   isChecked: !this.state.isChecked
    // });
  }
  componentDidMount() {
    this.setState({
      share:{
        ...this.state.share,
        value: this.props.user.shareNumber,
      },
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.user.shareNumber !== this.props.user.shareNumber){
      this.setState({
        share:{
          ...this.state.share,
          value: this.props.user.shareNumber,
        },
      });
    }
  }

  render() {
    let user = this.props.user;
    return (
      <Col xs={"12"} sm={"6"} className="my-1 px-1">
        <Row className="py-1 justify-content-center group-unit-card">
          <Col className="table-header-col px-0 check-width">
            <div className="p-0 px-1 custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id={this.props.user ? 'user_'+this.props.user.id : ""}
                type="checkbox"
                checked={this.props.user ? this.props.user.checked : false}
                onChange={() => this.handleCheckedChange(user.id)}
              />
              <label
                className="custom-control-label pr-1"
                htmlFor={this.props.user ? 'user_'+this.props.user.id : ""}
              >
                <span className="signin-modal-text mr-3"/>
              </label>
            </div>
          </Col>

          <Col xs="3" className="px-0 d-flex align-items-center">
            <img
              className="rounded-circle group-unit-circle-image"
              top
              src={this.props.imageUri}
              alt=""
            />
          </Col>
          <Col xs="7" className="group-unit-name my-auto d-block px-1">
            <span className="group-unit-name-text d-block m-0">
              {user ? user.name : "hi"}
            </span>
            <span className="group-unit-username-text d-block m-0 mt-1">
              {user ? user.username : "hi"}@
            </span>
            <Form
              role="form"
              className={`audit-form mt-1 ${!this.props.hasShareInput ? 'd-none' : ''}`}>
              <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon className={'my-prepend'} addonType="prepend">
                  <InputGroupText className={'p-0'}>
                    <i className="fa fa-pie-chart"/>
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  className="audit-input share-input"
                  placeholder={'سهم'}
                  name="paymentName"
                  type={'number'}
                  value={this.state.share.value}
                  onChange={this.handleInputChange}
                  disabled={!this.props.user.checked}
                />
              </InputGroup>
            </FormGroup>
            </Form>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default UserUnit;
