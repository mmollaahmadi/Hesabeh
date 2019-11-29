import React from 'react'
import {
  Badge,
  Button,
  Col,
  Row
} from "reactstrap"
import './table-filters.css'
// import Labels from '../../common/labels/labels'
import SelectionLabels from "../selection-labels/selection-labels";
import ScrollableHorizontal from "../../my-components/scrollable-horizontal/scrollable-horizontal";

class TableFilters extends React.Component {

  render() {

    let filters = [];

    this.props.filters.forEach(filter => {
      filters.push(
        <Button
          className={`table-filters-btn ${(this.props._selectedFilterID && this.props._selectedFilterID === filter.id) ? 'selected-btn' : ''}`}
          color='secondary'
          onClick={() => this.props.selectSort(filter.id)}
        >
          {filter.value}
        </Button>
      );
      filters.push(
        <Button
          className={`table-filters-btn ${(this.props._selectedFilterID && this.props._selectedFilterID === filter.id) ? 'selected-btn' : ''}`}
          color='secondary'
          onClick={() => this.props.selectSort(filter.id)}
        >
          {filter.value}
        </Button>
      );
    });
    return (

      <>
        <Row className="filters-row">
          <ScrollableHorizontal
            contents={filters}
          />
        </Row>

        <Row
          className={`labels-row ${(!this.props.labels || this.props.labels.length === 0) ? 'd-none' : ''}`}
        >
          <SelectionLabels
            labels={this.props.labels}
            currentUser={this.props.currentUser}
            justify={'center'}
            setLabels={this.setLabels}
            hasClose={false}
          />
        </Row>
      </>
    );
  }
}

export default TableFilters;
