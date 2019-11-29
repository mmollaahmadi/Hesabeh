import React from 'react'
import {Badge, Col, Row} from "reactstrap";
import './selection-labels.css'
import ScrollableHorizontal from "../../my-components/scrollable-horizontal/scrollable-horizontal";

export default class SelectionLabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLabelsIDS: [],
    };
    this.selectLabel = this.selectLabel.bind(this);
    this.deselectLabel = this.deselectLabel.bind(this);
    this.handleClickLabel = this.handleClickLabel.bind(this);
  }

  handleClickLabel(id) {
    if (this.state.selectedLabelsIDS.includes(id))
      this.deselectLabel(id);
    else
      this.selectLabel(id);
  }

  selectLabel(id) {
    let isSelectedBefore = false;
    if (this.state.selectedLabelsIDS) {
      this.state.selectedLabelsIDS.forEach(labelID => {
        if (labelID === id)
          isSelectedBefore = true;
      });
      if (!isSelectedBefore) {
        let labels = this.state.selectedLabelsIDS;
        labels.push(id);
        this.props.setLabels(labels);
        this.setState({selectedLabelsIDS: labels});
      }
    }
  }

  deselectLabel(id) {
    let labels = this.state.selectedLabelsIDS.filter(function (label) {
      return label !== id;
    });
    this.props.setLabels(labels);
    this.setState({selectedLabelsIDS: labels});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.selectedLabels !== prevProps.selectedLabels) {
      let _labels = [];
      this.props.selectedLabels.forEach(label => {
        _labels.push(label);
      });
      this.setState({selectedLabelsIDS: _labels});
    }
  }

  render() {
    let labels = [];
    if (this.props.labels) {
      this.props.labels.forEach(label => {
        labels.push(
          <Badge
            style={this.state.selectedLabelsIDS.includes(label.id) ? {
              borderColor: 'transparent',
              background: `rgba(${label.color.r},${label.color.g},${label.color.b},${label.color.a})`,
              color: `${label.isTextColorDark ? 'rgb(0,0,0,1)' : 'rgb(255,255,255,1)'}`
            } : {}}
            color="primary"
            className="selection-labels-label align-self-center"
            onClick={() => this.handleClickLabel(label.id)}
          >
            {label.name}
          </Badge>
        );
      });
    }
    return (
      <>
        {/*<Col xs={'auto'} className={`d-flex align-items-center ${!this.props.title ? 'd-none' : ''}`}>
          <p className={'p-0 mx-3 my-auto consumers-text'}>
            {this.props.title}
          </p>
        </Col>
        <Col className="m-0">
          <Row className={`m-0 d-flex justify-content-${this.props.justify}`}>*/}
            <ScrollableHorizontal contents={labels}/>
            {/*{labels}*/}

      </>
    );
  }
}