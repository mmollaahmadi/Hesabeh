import React from "react";
import Account from "./finance-account/finance-account.js";
import PaymentsTable from "./payments-table/payments-table.js";

class MyAccountPage extends React.Component {
  render() {
    return (
      <div className="my-body">
        <Account
          currentUser={this.props.currentUser}
        />
        <PaymentsTable
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default MyAccountPage;
