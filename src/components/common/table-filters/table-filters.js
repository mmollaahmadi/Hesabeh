import React from 'react'
import {
  Badge,
  Button,
  Col,
  Row
} from "reactstrap"
import './table-filters.css'
import Labels from '../../common/labels/labels'
import SelectionLabels from "../selection-labels/selection-labels";
import ScrollableHorizontal from "../../my-components/scrollable-horizontal/scrollable-horizontal";

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
          {/*<ScrollableHorizontal contents={filters}/>*/}
          {filters}
        </Row>

        <Row className={`labels-row ${(!this.props.labels || this.props.labels.length === 0) ? 'd-none' : ''}`}>
          <SelectionLabels
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
