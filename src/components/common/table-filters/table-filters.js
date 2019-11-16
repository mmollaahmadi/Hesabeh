import React from 'react'
import {
  Button,
  Col,
  Row
} from "reactstrap"
import './table-filters.css'

class TableFilters extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedItem: 'جدیدترین'
    };
  }
  selectSort = (val)=> {
    this.setState({
      selectedItem: val
    });
  };
  render() {
    let filters = [];

    this.props.data.forEach(filter => {
        filters.push(
          <Col xs='6' sm='3' className='d-flex justify-content-center my-auto'>
          <Button
            className={`table-filters-btn mb-3 w-100 ${this.state.selectedItem === filter.value ? 'selected-btn' : ''}`}
            color='secondary'
            onClick={() => this.selectSort(filter.value)}
            >
            {filter.value}
          </Button>
          </Col>
        );
    });
    return (
      <Row className="justify-content-center d-flex m-0 mb-3">
        <Col xs='12' className='d-flex justify-content-center my-auto'>
        <Row className="justify-content-center d-flex m-0 mb-3">
          {filters}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default TableFilters;
