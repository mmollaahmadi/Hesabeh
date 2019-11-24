import React from "react";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import AOS from 'aos'
import ScrollableAnchor from 'react-scrollable-anchor'
import HelpTabsManagement from "./help-tabs-management"
import RegisterLoginHelp from './register-login-help'

class HelpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'register-login'
    };
    this.handleSelectTab = this.handleSelectTab.bind(this);
    AOS.init();
  }

  handleSelectTab(tab) {
    this.setState({selectedTab: tab,});
  }

  render() {
    let helpContent = null;
    if(this.state.selectedTab === 'register-login'){
      helpContent=(
        <RegisterLoginHelp />
      );
    }else if (this.state.selectedTab === 'groups'){
      helpContent=(
        <RegisterLoginHelp />
      );
    }else if (this.state.selectedTab === 'payments'){
      helpContent=(
        <RegisterLoginHelp />
      );
    }else if (this.state.selectedTab === 'notifications'){
      helpContent=(
        <RegisterLoginHelp />
      );
    }
    return (
      <ScrollableAnchor id={'help'}>
        <div className="my-body">
          <Container>
            <HelpTabsManagement
              selectedTab={this.state.selectedTab}
              handleSelectTab={this.handleSelectTab}
            />
            {helpContent}
          </Container>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default HelpPage;
