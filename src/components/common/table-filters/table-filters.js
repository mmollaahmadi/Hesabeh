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
} from "reactstrap"
import './table-filters.css'

class TableFilters extends React.Component {
  constructor(){
    super();
  }
  render() {
    let filters = [];
    this.props.data.map(filter => {
        filters.push(
          <Button
            className='table-filters-btn'
            color='secondary'
            // onClick={() => this.toggleSort()}
            >
            {filter.value}
          </Button>
        );
    });
    return (
      <Row className="justify-content-center d-flex m-0 mb-3">
        <Col xs='12' className='d-flex justify-content-center my-auto'>
          {filters}
        </Col>
      </Row>
    );
  }
}

export default TableFilters;
