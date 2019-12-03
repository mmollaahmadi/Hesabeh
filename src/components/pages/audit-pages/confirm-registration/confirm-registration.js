import React, { Component } from "react";
import {confirmAccount} from "../../../../utils/auditUtils";
import {Button} from "reactstrap";

class ConfirmRegistration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: {
        value: ""
      },
      isConfirm: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push("/");
  }

  componentDidMount() {


    confirmAccount(this.props.match.params.token)
      .then(response => {
        // notification.success({
        //   message: "Polling App",
        //   description: response.message || "hiiiiiiiiiiiiiiii!"
        // });
        // this.props.history.push("/login");
        this.setState({
          isConfirm: true
        });
      })
      .catch(error => {
        if (error.status === 401) {
          // notification.error({
          //   message: "Polling App",
          //   description:
          //     "Your Username or Password is incorrect. Please try again!"
          // });
        } else {
          // notification.error({
          //   message: "Polling App",
          //   description:
          //     error.message || "Sorry! Something went wrong. Please try again!"
          // });
        }
      });

    // this.setState({
    //   token: { value: this.props.match.params.token }
    // });
  }


  render() {
    const { isConfirm } = this.state.isConfirm;
    return (
      <div>
        <div>
          {isConfirm ? (
            <h1>Your account is confirm now</h1>
          ) : (
            <h1>waiting...</h1>
          )}
        </div>
        <div>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="login-form-button"
              >
                OK
              </Button>
        </div>
      </div>
    );
  }
}

export default ConfirmRegistration;