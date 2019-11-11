import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon, InputGroupText,
    Row
} from "reactstrap";
import Chip from "../../common/chip/chip";
import AOS from 'aos'
import InputAutoSuggestion from '../../common/input-auto-suggestion/input-auto-suggestion'
class InviteOthersToMyGroup extends React.Component{
  constructor(props){
    super(props);
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

    render(){
      let userOrMessage = null;
      // if(this.state.isValueEmpty)
      //   userOrMessage=(<p className='no-user p-0 my-2 mx-1'>کاربری با این مشخصات وجود ندارد!</p>);
      if(this.state.user === null){
        userOrMessage=(<p className='no-user p-0 my-2 mx-1'>کاربری با این مشخصات وجود ندارد!</p>);
      }else{
        userOrMessage=(
          <Chip
          class="mx-1 my-2"
          haveCloseButton="true"
            avatarSrc={require("../../../assets/img/users/user01.jpg")}
            label={this.state.user.name}
            clickable={true}
            onClick={this.handleAddButton}
            // onDelete={() => this.deleteUser()}
          />
        );
      }

let users = null;
if(this.state.users.length > 0){
  users = [];
  this.state.users.forEach(user => {
      users.push(
        <Chip
        class="mb-2 ml-2"
        haveCloseButton="true"
          avatarSrc={require("../../../assets/img/users/user01.jpg")}
          label={user.name}
          // onDelete={() => this.deleteUser()}
        />
      );
  });
}else{
  users = (
    <p className="p-0 ml-3 mr-0 my-auto consumers-text">
      هیچ کاربری انتخاب نشده است!
    </p>
  );
}


        return(
            <Card data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay="50"
                 className="card-profile shadow mt-5">
                <CardHeader>دعوت به گروه</CardHeader>
                <CardBody>
                    <Form role="form" className="audit-form">
                        <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i class="fa fa-users" />
                                    </InputGroupText>
                                </InputGroupAddon>

                                <Input className="audit-input" placeholder="نام گروه" />
                            </InputGroup>
                        </FormGroup>

                        <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i class="fa fa-user-plus" />
                                    </InputGroupText>
                                </InputGroupAddon>

                                <InputAutoSuggestion
                                  numberOfUsers={this.state.users.length}
                                  content={userOrMessage}
                                  handleInputChange={this.handleInputChange}
                                />
                            </InputGroup>
                        </FormGroup>
                        <Row className="m-0 d-flex justify-content-start">
                        <p className="p-0 ml-3 mr-0 my-auto consumers-text">
                          کاربران:
                        </p>
{users}
                        </Row>
                        <FormGroup className="m-0 mt-2 d-flex justify-content-center">
                            <Button className='payments-btn-lv2 btn btn-primary' color="primary" type="button">
                                ارسال دعوت نامه
                            </Button>
                        </FormGroup>

                    </Form>

                </CardBody>
            </Card>
        );
    }
}

export default InviteOthersToMyGroup;
