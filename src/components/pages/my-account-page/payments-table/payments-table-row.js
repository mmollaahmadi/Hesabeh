import React from "react";
import {Row, Col, Badge, Button, Card, Collapse} from "reactstrap";
import Chip from "../../../my-components/chip/chip";
import Labels from '../../../common/labels/labels'
import Pictures from '../../../common/pictures/pictures'
import UserShare from "../../../common/user-share/user-share";

class PaymentsTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      collapse: false,
    };
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
  }

  handleDeleteModal(id){
    this.props.handleDeleteModal(id);
  }

  handleCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    })
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
    let consumersAvatar = [];
    this.props.data.consumers.forEach(user => {
      consumersAvatar.push(
        <div className={'short-consumer-supplier'}>
        <img
          alt=""
          className="rounded-circle chip-avatar-1 mx-1"
          src={require("../../../../assets/img/users/user01.jpg")}
        />
        <span className={'short-consumer-supplier-share consumer'}>{user.share}</span>
        </div>
      );
    });

    let suppliersAvatar = [];
    this.props.data.suppliers.forEach(user => {
      suppliersAvatar.push(
        <div className={'short-consumer-supplier'}>
          <img
            alt=""
            className="rounded-circle chip-avatar-1 mx-1"
            src={require("../../../../assets/img/users/user01.jpg")}
          />
          <span className={'short-consumer-supplier-share supplier'}>{user.share}</span>
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
              <div className={'m-auto'}>
                <Button
                  className="p-0 plus-btn-circle table-row-col-tools-btn"
                  color="primary"
                  onClick={this.handleCollapse}
                >
                  <i className="fa fa-eye"/>
                </Button>
                <Button
                  className="p-0 plus-btn-circle table-row-col-tools-btn"
                  color="primary"
                >
                  <i className="fa fa-edit"/>
                </Button>
                <Button
                  className="plus-btn-circle table-row-col-tools-btn"
                  color="primary"
                  onClick={() => this.handleDeleteModal(this.props.data.id)}
                >
                  <i className="fa fa-trash"/>
                </Button>
              </div>
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

            <Col xs="12"
                 className={`table-row-col justify-content-start my-auto ${(!this.props.data.description || this.props.data.description === '') ? 'd-none' : ''}`}>
              <span className="ml-2 title">توضیح: </span>
              <span>{this.props.data.description}</span>
            </Col>

            <Col
              xs="12"
              className="table-row-col justify-content-start d-inline my-auto"
            >
              <span className="ml-2 mb-2 title">تهیه کنندگان: </span>
              <Collapse isOpen={!this.state.collapse} className={'d-inline'}>
                {suppliersAvatar}
              </Collapse>
              <Collapse isOpen={this.state.collapse}>
                <UserShare
                  users={this.props.data.suppliers}
                  suppliersOrConsumers={'suppliers'}
                  onlyAvatar={!this.state.collapse}
                />
              </Collapse>
            </Col>

            <Col
              xs='12'
              className="table-row-col justify-content-start d-inline my-auto"
            >
              <span className="ml-2 my-auto title">مصرف کنندگان: </span>
              <Collapse isOpen={!this.state.collapse} className={'d-inline'}>
                {consumersAvatar}
              </Collapse>
              <Collapse isOpen={this.state.collapse}>
                <UserShare
                  users={this.props.data.consumers}
                  suppliersOrConsumers={'consumers'}
                  onlyAvatar={!this.state.collapse}
                />
              </Collapse>
            </Col>
            <Collapse isOpen={this.state.collapse}>
              <Col
                xs='12'
                className={`table-row-col justify-content-start my-auto ${(!this.props.data.labels || this.props.data.labels.length === 0 || !this.state.collapse) ? 'd-none' : ''}`}
              >
                <span className="ml-2 title"> برچسبها: </span>
                <Labels labels={this.props.data.labels}/>
              </Col>
              <Col
                xs='12'
                className={`table-row-col justify-content-start my-auto ${(!this.props.data.pictures || this.props.data.pictures.length === 0 || !this.state.collapse) ? 'd-none' : ''}`}
              >
                <span className="ml-2 title">تصاویر:</span>
                <Pictures pictures={this.props.data.pictures}/>
              </Col>
            </Collapse>
            {/*<Col sm="12" className="table-row-line" />*/}
          </Row>
        </Card>
      </div>
    );
  }
}

export default PaymentsTableRow;
