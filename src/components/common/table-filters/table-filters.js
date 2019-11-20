import React from 'react'
import {
  Badge,
  Button,
  Col,
  Row
} from "reactstrap"
import './table-filters.css'
import Labels from '../../common/labels/labels'

class TableFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 'جدیدترین',
    };
  }

  selectSort = (val) => {
    this.setState({
      selectedItem: val
    });
  };

  render() {

    let filters = [];

    this.props.filters.forEach(filter => {
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

      <>
        {/*<span>ترتیب نمایش:</span>*/}
        <Row className="filters-row">
          {filters}
        </Row>

        <Row className={`labels-row ${!this.props.labels ? 'd-none' : ''}`}>
          <Labels labels={this.props.labels} hasClose={false}/>
        </Row>

      </>
    );
  }
}

export default TableFilters;
