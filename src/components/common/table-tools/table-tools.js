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
      <Row className="justify-content-center d-flex m-0 mb-4">
        {/*<Col xs='6' lg="2" className='order-1 order-lg-1 d-flex justify-content-center my-auto'>
          <Button
            className='table-tools-sort-filter-btn'
            color='link'
            onClick={() => this.toggleSort()}>
            <i id='sort-desc-btn' className='fa fa-sort-desc fa-2x mx-2 d-inline-block sort-desc'/>
          </Button>
          <Button className='table-tools-sort-filter-btn' color='link'>
            <i className="fa fa-filter fa-2x mx-2 d-inline"/>
          </Button>
        </Col>*/}
        <Col xs='12' lg='5' className='order-3 order-lg-2 d-flex justify-content-center my-auto'>
          <Form className="audit-form d-inline w-100">
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
        <Col xs='6' lg="2"
        className='order-2 order-lg-3 d-flex justify-content-center mb-3 my-lg-auto'>
          <Button
            color="primary"
            className="p-2 w-100"
            tag={Link}
            to={this.props.buttonLink}
          >
            {this.props.buttonTitle}
          </Button>
        </Col>
        <Col xs='6' lg="2"
        className={`order-2 order-lg-1 d-flex justify-content-center mb-3 my-lg-auto ${this.props.isAnyChecked ? 'disabled' : ''}`}>
          <Button
          disabled={true}
            color="delete"
            className="p-2"
            tag={Link}
            to={this.props.buttonLink}
          >
          حذف
          </Button>
        </Col>
      </Row>
    );
  }
}

export default TableTools;
