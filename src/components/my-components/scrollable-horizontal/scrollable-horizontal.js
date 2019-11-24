import React from 'react'
import './scrollable.css'

export default class ScrollableHorizontal extends React.Component {
  render() {
    let contents = [];
    if (this.props.contents) {
      this.props.contents.forEach(content => {
        contents.push(
          <div className={'scrollable-card--content'}>
            {content}
          </div>
        );
      });
    }
    return (

        <section className={'scrollable-card'}>
          {contents}
        </section>

    );
  }
}