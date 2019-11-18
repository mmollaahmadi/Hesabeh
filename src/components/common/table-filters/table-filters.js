import React from 'react'
import {
  Badge,
  Button,
  Col,
  Row
} from "reactstrap"
import './table-filters.css'
import reactCSS from 'reactcss'

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
    const styles = reactCSS({
      'default': {
        color: {
          color: `${this.state.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`,
          background: `rgba(${this.state.colorPicked.r},${this.state.colorPicked.g},${this.state.colorPicked.b},${this.state.colorPicked.a})`,
        },
        textColor: {
          color: `${this.state.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`,
        }
      },
    });
    let labels = [];
    this.props.labels.forEach(label => {
      labels.push(
        <Badge
          style={{
            background: `rgba(${label.color.r},${label.color.g},${label.color.b},${label.color.a})`,
            color: `${label.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`
          }}
          color="primary"
          className="profile-label align-self-center px-2">
          {label.name}
          <i className="fa fa-close mr-3 profile-label-close-btn"
             // onClick={() => this.handleDeleteLabel(label.id)}
          />
        </Badge>
      );
    });

    let filters = [];

    this.props.filters.forEach(filter => {
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
