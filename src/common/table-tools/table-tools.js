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

class TableTools extends React.Component{
    render(){
        return(

                <Row className="justify-content-center">
                    <Col lg="2" className='order-1 order-lg-1'>
                        <i className="fa fa-sort fa-2x mx-2 d-inline-block" />
                        <i className="fa fa-filter fa-2x mx-2 d-inline" />
                    </Col>
                    <Col lg='3' className='order-3 order-lg-2'>
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
                    <Col lg="7" className='order-2 order-lg-3'>
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
        );
    }
}

export default TableTools;