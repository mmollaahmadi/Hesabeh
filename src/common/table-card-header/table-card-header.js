import React from 'react'
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";
import {Link} from "react-router-dom";

class TableCardHeader extends React.Component{
    render(){
        return(
            <>
                {this.props.title}
                <Row className="justify-content-center">
                    <Col lg="auto">
                        <i className="fa fa-sort fa-2x mx-2 d-inline-block" />
                        <i className="fa fa-filter fa-2x mx-2 d-inline" />
                    </Col>
                    <Col>
                        <Form className="d-inline">
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>

                                    <Input
                                        className="audit-input"
                                        placeholder="جستجو ..."
                                        type="email"
                                    />
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col lg="auto">
                        <Button
                            color="primary"
                            className="p-2"
                            tag={Link}
                            to={this.props.buttonLink}
                        >
                            {this.props.buttonTitle}
                        </Button>
                    </Col>
                </Row>
                </>
        );
    }
}

export default TableCardHeader;