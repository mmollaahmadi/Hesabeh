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

    this.props.data.map(filter => {
        filters.push(
          <Button
            className={`table-filters-btn ${this.state.selectedItem === filter.value ? 'selected-btn' : ''}`}
            color='secondary'
            onClick={() => this.selectSort(filter.value)}
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
