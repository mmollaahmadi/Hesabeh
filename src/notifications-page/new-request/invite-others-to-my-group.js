import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon, InputGroupText,
    Row
} from "reactstrap";
import Chip from "../../common/chip/chip";
import {Link} from "react-router-dom";

class InviteOthersToMyGroup extends React.Component{
    render(){
        return(
            <Card className="card-profile shadow mt-5">
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
                                avatarSrc={require("../../assets/img/users/user01.jpg")}
                                label="محمد ملااحمدی"
                                // onDelete={() => this.deleteUser()}
                            />
                            <Chip
                                class="mb-2 ml-2"
                                haveCloseButton="true"
                                avatarSrc={require("../../assets/img/users/user01.jpg")}
                                label="محمد ملااحمدی"
                                // onDelete={() => this.deleteUser()}
                            />
                            <Chip
                                class="mb-2 ml-2"
                                haveCloseButton="true"
                                avatarSrc={require("../../assets/img/users/user01.jpg")}
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