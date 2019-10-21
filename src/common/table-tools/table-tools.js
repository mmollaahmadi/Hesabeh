import React from 'react'
import {
  Button,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import {Link} from "react-router-dom";
import './table-tools.css'
import AOS from 'aos'

class TableTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDesc: true
    };

  }

  toggleSort = () => {
    const button = document.getElementById('sort-desc-btn');
    button.classList.toggle('is-active');
  };

  render() {

    return (
      <Row className="justify-content-center d-flex m-0 mb-3">
        <Col xs='6' lg="2" className='order-1 order-lg-1 d-flex justify-content-center my-auto'>
          <Button
            className='table-tools-sort-filter-btn'
            color='link'
            onClick={() => this.toggleSort()}>
            <i id='sort-desc-btn' className='fa fa-sort-desc fa-2x mx-2 d-inline-block sort-desc'/>
          </Button>
          <Button className='table-tools-sort-filter-btn' color='link'>
            <i className="fa fa-filter fa-2x mx-2 d-inline"/>
          </Button>
        </Col>
        <Col xs='12' lg='7' className='order-3 order-lg-2 d-flex justify-content-center my-auto'>
          <Form className="d-inline w-100">
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fa fa-search"/>
                </InputGroupText>
              </InputGroupAddon>

              <Input
                className="audit-input"
                placeholder="جستجو ..."
                type="email"
              />
            </InputGroup>

          </Form>
        </Col>
        <Col xs='6' lg="3" className='order-2 order-lg-3 d-flex justify-content-center my-auto'>
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