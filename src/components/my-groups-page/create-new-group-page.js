import React from "react";

import "./my-groups.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroup
} from "reactstrap";
import "../../assets/css/custom.css";
import Chip from '../common/chip/chip.js';
import AOS from 'aos'
import Dropzone from "../common/dropzone/dropzone";
import InputAutoSuggestion from '../common/input-auto-suggestion/input-auto-suggestion'
class CreateNewGroupPage extends React.Component {
  constructor(){
    super();
    this.state={
      user: null,
      users:[]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    AOS.init();
  }
  handleAddButton(){
    let _users = this.state.users;
    _users.push(this.state.user);
    this.setState({
      user: null,
      users:_users
    });
  }
handleInputChange(value){
  let user = this.props.getUser(value);
  this.setState({user:user});
}
  componentDidMount(){
    let _users = this.state.users;
    _users.push(this.props.currentUser);
    this.setState({
      users:_users
    });
  }
  render() {
    let userOrMessage = null;
    // if(this.state.isValueEmpty)
    //   userOrMessage=(<p className='no-user p-0 my-2 mx-1'>کاربری با این مشخصات وجود ندارد!</p>);
    if(this.state.user === null){
      userOrMessage=(<p className='no-user p-0 my-2 mx-1'>کاربری با این مشخصات وجود ندارد!</p>);
    }else{
      userOrMessage=(
        <>
        <Chip
        class="mx-1 my-2"
        haveCloseButton="true"
          avatarSrc={require("../../assets/img/users/user01.jpg")}
          label={this.state.user.name}
          // onDelete={() => this.deleteUser()}
        />
        <Button
        className='p-0 my-auto'
        color='primary'
        onClick={this.handleAddButton}>
        افزودن کاربر
        </Button>
        </>
      );
    }

    let users = [];
    this.state.users.forEach(user => {
        users.push(
          <Chip
          class="mb-2 ml-2"
          haveCloseButton="true"
            avatarSrc={require("../../assets/img/users/user01.jpg")}
            label={user.name}
            // onDelete={() => this.deleteUser()}
          />
        );
    });

    return (

        <div className="my-section">
          <Container className="pt-10 pb-30  h-100">
            <Row className="d-flex text-center justify-content-center">
              <Col lg="5"
                   data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-delay="50"
              >
              <Row className="d-flex justify-content-center m-0 mb-2">
              <Dropzone onFilesAdded={console.log}
              image={require("../../assets/img/users/empty-group.png")}
              isCircle={true}
              dontHasButton={true} />
                {/* <DefaultExample ii={dragBody}/>                            */}
              </Row>
              {/*  <img
                  alt="..."
                  className="rounded-circle empty-group"
                  src={require("../../assets/img/users/empty-group.png")}
                />*/}
                <Form role="form" className="audit-form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-users" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input className="audit-input" placeholder="نام گروه" />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user-plus" />
                        </InputGroupText>
                      </InputGroupAddon>


                      <InputAutoSuggestion
                        numberOfUsers={this.state.users.length}
                        content={userOrMessage}
                        handleInputChange={this.handleInputChange}
                      />

                    </InputGroup>
                  </FormGroup>
                  <Row className="my-2 mx-1 p-0 d-flex justify-content-start">
                  <p className="p-0 ml-3 mr-0 my-auto consumers-text">
                    اعضای گروه:
                  </p>
                    {users}
                  </Row>

                  <FormGroup>
                    <Row className="justify-item-center d-flex">
                      <Col className="lg-9 m-0 text-center">
                        <Button
                          className="audit-button"
                          color="primary"
                          to="/payments"
                          tag={Link}
                        >
                          ایجاد گروه
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>

                  <Button
                    className="audit-button"
                    color="default"
                    href="#pablo"
                    onClick={() => this.toggle("password")}
                    name="email"
                  >
                    بازگشت
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>

    );
  }
}

export default CreateNewGroupPage;
