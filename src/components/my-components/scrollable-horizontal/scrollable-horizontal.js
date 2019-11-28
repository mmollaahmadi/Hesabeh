import React from 'react'
import './scrollable-horizontal.css'
import {Button} from "reactstrap";

export default class ScrollableHorizontal extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.sideScroll = this.sideScroll.bind(this);
  }

  sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction === 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  next() {
    let container = document.getElementById('container');
    this.sideScroll(container, 'right', 25, 100, 10);
  }

  prev() {
    let container = document.getElementById('container');
    this.sideScroll(container, 'left', 25, 100, 10);
  }

  render() {
    return (
      <>
        <div id="container">
          <div id="content">
            {this.props.contents}
          </div>
        </div>
        <div className={'arrow-layer'}>
          <Button
            id="slide"
            type="button"
            className={'next-prev-btn'}
            onClick={this.next}
          >
            <i className={'fa fa-chevron-right'}/>
          </Button>
          <Button
            id="slideBack"
            type="button"
            className={'next-prev-btn'}
            onClick={this.prev}
          >
            <i className={'fa fa-chevron-left'}/>
          </Button>
        </div>
      </>

    );
  }
}