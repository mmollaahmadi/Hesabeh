import React from "react";

import Navbar from "../../common/navbar/navbar.js";
import Footer from "../../common/footer/footer.js";

import {
    Container,
    Form,
    FormGroup,
    InputGroup,
    Input,
    Button,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from "reactstrap";
import RequirementsListRequest from "./requirements-list-request.js";
import InviteOthersToMyGroup from "./invite-others-to-my-group";
import JoinToOtherGroup from "./join-to-other-group";

const GROUPS = [
    {
        id: "1",
        username: "ahmaghha",
        users: [
            {
                id: "1",
                username: "mollaahmadi"
            },
            {
                id: "2",
                username: "fatemi"
            }
        ]
    },
    {
        id: "2",
        username: "khabgah",
        users: [
            {
                id: "1",
                username: "hossein"
            }
        ]
    }
];

class CreateNewRequestPage extends React.Component {



    render() {
        return (
            <div>
                <Navbar isLogin="true"/>

                <main className="profile-page pb-5" ref="main">
                    <div className="my-body">
                        <Container>
                            <Row>
                                <Col lg="12">
                                    <RequirementsListRequest groups={GROUPS}/>
                                </Col>

                                <Col lg="7">
                                    <InviteOthersToMyGroup/>
                                </Col>

                                <Col lg="7" className='offset-5'>
                                    <JoinToOtherGroup />

                                </Col>

                            </Row>
                        </Container>
                    </div>
                </main>

                <Footer/>
            </div>
        );
    }
}

export default CreateNewRequestPage;
