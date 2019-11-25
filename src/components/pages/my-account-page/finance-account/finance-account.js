import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import FinanceAccountUnit from "./finance-account-unit.js";
import {getFinanceAccountOfUser} from "../../../../utils/apiUtils";


class FinanceAccount extends React.Component {
  constructor(props){
    super(props);
    this.state={
      financeAccount: {
        privatePayments:'',
        groupPayments:'',
        groupConsumes:'',
        totalSituation:'',
      },
    };
  }
  componentDidMount() {
    let financeAccount = this.state.financeAccount;
    if(this.props.currentUser){
      financeAccount = getFinanceAccountOfUser(this.props.currentUser.id)
    }
    this.setState({
      financeAccount:financeAccount,
    });
  }

  render() {
    return (
      <Container>
        <Row className='m-0'>
          <Col lg="12">
            <Row className="m-0 d-flex justify-content-center">
              <FinanceAccountUnit
                _text="میزان هزینه شخصی"
                cost={this.state.financeAccount.privatePayments}
                imageUri={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              />

              <FinanceAccountUnit
                _text="میزان هزینه گروهی"
                cost={this.state.financeAccount.groupPayments}
                imageUri={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              />

              <FinanceAccountUnit
                _text="میزان مصرف گروهی"
                cost={this.state.financeAccount.groupConsumes}
                imageUri={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              />

              <FinanceAccountUnit
                _text="وضعیت نهایی"
                cost={this.state.financeAccount.totalSituation}
                imageUri={require("../../../../assets/img/theme/team-4-800x800.jpg")}
              />
            </Row>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default FinanceAccount;
