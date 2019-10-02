import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Table,
  Modal,
  Button,
  CardFooter
} from "reactstrap";
import Chip from "../common/chip/chip";
import UserGroupAccount from "../common/user-group-account/user-group-account";

class RequirementsListRequest extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    const groups = [];
    this.props.groups.forEach(group => {
      groups.push(<UserGroupAccount username={group.username} />);
    });
    return (
      <Card className="card-profile shadow m-0">
        <CardHeader>ایجاد لیست نیازمندی</CardHeader>
        <CardBody>
          <Row className="pt-5 d-flex justify-content-center">
            <Col lg="12">
              <Form role="form" className="signup-form">
                <Row className="justify-content-center mb-3">
                  <Col lg="auto">
                    <FormGroup className="m-0">
                      <Button
                        color="primary"
                        type="button"
                        onClick={() => this.toggleModal("selectUsers")}
                      >
                        انتخاب مخاطب
                      </Button>
                    </FormGroup>
                  </Col>
                  <Col lg="auto" className="">
                    <FormGroup className="m-0">
                      <Button color="primary" type="button">
                        ارسال لیست
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.selectUsers}
              toggle={() => this.toggleModal("selectUsers")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent p-1">
                    <div className="text-muted  mt-3 mb-2">
                      <h5 className="my-modal-header">انتخاب گروه</h5>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-3">
                    <Row className="d-flex justify-content-center">
                      {groups}
                    </Row>
                  </CardBody>
                  <CardFooter className="justify-content-center d-flex">
                    <Button color="primary">انتخاب</Button>
                  </CardFooter>
                </Card>
              </div>
            </Modal>
            <Col sm="12">
              <Row className="m-0 d-flex justify-content-center">
                <Chip
                  haveCloseButton="true"
                  avatarSrc={require("../assets/img/users/user01.jpg")}
                  label="محمد ملااحمدی"
                  // onDelete={() => this.deleteUser()}
                />
                <Chip
                  haveCloseButton="true"
                  avatarSrc={require("../assets/img/users/user01.jpg")}
                  label="محمد ملااحمدی"
                  // onDelete={() => this.deleteUser()}
                />
              </Row>
            </Col>
            <Col sm="12">
              <Row className="justify-content-center">
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ردیف</th>
                      <th scope="col">کالا</th>
                      <th scope="col">توضیحات</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default RequirementsListRequest;
