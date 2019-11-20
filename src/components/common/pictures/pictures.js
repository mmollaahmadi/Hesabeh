import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup, Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  Row
} from "reactstrap";
import {Link} from "react-router-dom";

export default class Pictures extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: '',
      toggleModal:false,
    };
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }
  handleToggleModal(url){
    this.setState({
      toggleModal: !this.state.toggleModal,
      url: url,
    });
  }
  render() {
    let pictures = [];
    this.props.pictures.forEach(pic => {
      pictures.push(
        <img
          className={'pictures-list-img'}
          alt={''}
          src={require('../../../assets/img/theme/team-4-800x800.jpg')}
          onClick={() => this.handleToggleModal(pic.url)}
        />
      );
    });
    return (
      <>
        {pictures}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.toggleModal}
          toggle={() => this.handleToggleModal('')}
        >
          <div className="modal-body p-0">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="p-0">
                <img
                  className={'pictures-modal-img'}
                  src={require('../../../assets/img/theme/team-4-800x800.jpg')}
                  alt={''}
                />
              </CardBody>
            </Card>
          </div>
        </Modal>
      </>
    );
  }
}