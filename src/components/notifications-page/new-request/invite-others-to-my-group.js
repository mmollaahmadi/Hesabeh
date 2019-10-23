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

class InviteOthersToMyGroup extends React.Component{
  constructor(props){
    super(props);
    AOS.init();
  }
    render(){
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

                                <Input
                                    className="audit-input"
                                    placeholder="ایمیل/ نام کاربری / شماره همراه اعضا"
                                    type="email"
                                />
                            </InputGroup>
                        </FormGroup>
                        <Row className="m-0 d-flex justify-content-center">
                            <Chip
                                class="mb-2 ml-2"
                                haveCloseButton="true"
                                avatarSrc={require("../../../assets/img/users/user01.jpg")}
                                label="محمد ملااحمدی"
                                // onDelete={() => this.deleteUser()}
                            />
                            <Chip
                                class="mb-2 ml-2"
                                haveCloseButton="true"
                                avatarSrc={require("../../../assets/img/users/user01.jpg")}
                                label="محمد ملااحمدی"
                                // onDelete={() => this.deleteUser()}
                            />
                            <Chip
                                class="mb-2 ml-2"
                                haveCloseButton="true"
                                avatarSrc={require("../../../assets/img/users/user01.jpg")}
                                label="محمد ملااحمدی"
                                // onDelete={() => this.deleteUser()}
                            />
                        </Row>
                        <FormGroup className="m-0">
                            <Button color="primary" type="button">
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
