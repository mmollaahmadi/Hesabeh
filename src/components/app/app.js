import React, {Component} from 'react';
import './app.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

// import { getCurrentUser } from '../util/APIUtils';
// import { ACCESS_TOKEN } from '../constants';


// import './assets/css/argon-dashboard-react.css';
import '../../assets/css/argon-design-system-react.css';
// import './assets/scss/argon-design-system-react.scss'

// import * as serviceWorker from './serviceWorker';

import "../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/vendor/nucleo/css/nucleo.css";
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';

import '../../assets/css/bootstrap-rtl.css';

import '../../assets/css/custom.css';

import '../../assets/css/animate.css';

import 'aos/dist/aos.css';

import 'react-persian-calendar-date-picker/lib/DatePicker.css';

import MainPage from '../main-page/main-page';
import UserDashboardPage from '../user-dashboard-page/user-dashboard-page.js';
import GroupDashboardPage from '../group-dashboard-page/group-dashboard-page.js';
import MyGroupsPage from '../my-groups-page/my-groups-page.js';
import NewPasswordRequestPage from '../forgot-password-pages/new-password-request-page.js';
import SupportPage from '../support-page/support-page.js';
import SignInPage from '../signin-page/sign-in-page.js';
import RegisterPage from '../register-page/register-page.js';
import PaymentsPage from '../payments-page/payments-page.js';
import CreateNewGroupPage from '../my-groups-page/create-new-group-page.js';
import NotificationsPage from '../notifications-page/notifications-page.js';
import CreateNewRequestPage from '../notifications-page/new-request/create-new-request-page.js'
import AddPaymentPage from '../payments-page/add-new-payment.js';
import HelpPage from '../help-page/help-page'


// import { Layout, notification } from 'antd';
import NavBar from "../common/navbar/navbar";
import Footer from "../common/footer/footer";

// const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: true,
      isLoading: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    // notification.config({
    //   placement: 'topRight',
    //   top: 70,
    //   duration: 3,
    // });
  }

  loadCurrentUser() {
    this.setState({
      currentUser: USERS[0],
      isAuthenticated: true,
      isLoading: true,
    });
    // getCurrentUser()
    //   .then(response => {
    //     this.setState({
    //       currentUser: response,
    //       isAuthenticated: true,
    //       isLoading: false
    //     });
    //   }).catch(error => {
    //   this.setState({
    //     isLoading: false
    //   });
    // });
  }

  componentDidMount() {
     this.loadCurrentUser();
  }

  handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
    // localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);

    // notification[notificationType]({
    //   message: 'Polling App',
    //   description: description,
    // });
  }

  handleLogin() {
    // notification.success({
    //   message: 'Polling App',
    //   description: "You're successfully logged in.",
    // });
    // this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    if (this.state.isLoading) {
      // return <LoadingIndicator />
    }
    return (
      <div className="app-container">
        <NavBar isLogin={this.state.isAuthenticated}
                user={this.state.currentUser}
                onLogout={this.handleLogout}/>
        {/*<AppHeader isAuthenticated={this.state.isAuthenticated}*/}
        {/*           currentUser={this.state.currentUser}*/}
        {/*           onLogout={this.handleLogout} />*/}

        <div className="app-content">
          <div className="container">
            <Switch>
              <Route path="/" exact render={props => <MainPage isLogin='false'/>}/>
              <Route
                path="/register"
                exact
                render={props => <RegisterPage {...props} />}
              />
              <Route
                path="/signin"
                exact
                render={props => <SignInPage {...props} />}
              />
              <Route
                path="/forgot-password"
                exact
                render={props => <NewPasswordRequestPage {...props} />}
              />
              <Route
                path="/support"
                exact
                render={props => <SupportPage {...props} />}
              />
              <Route
                path="/help"
                exact
                render={props => <HelpPage {...props} />}
              />
              <Route
                path="/my-account"
                exact
                render={props => <PaymentsPage {...props} />}
              />
              <Route
                path="/add-new-payment"
                exact
                render={props => <AddPaymentPage {...props} />}
              />
              <Route
                path="/dashboard"
                exact
                render={props => <UserDashboardPage {...props} />}
              />
              <Route
                path="/notifications"
                exact
                render={props => <NotificationsPage {...props} />}
              />
              <Route
                path="/create-new-request"
                exact
                render={props => <CreateNewRequestPage {...props} />}
              />
              <Route
                path="/mygroups"
                exact
                render={props => <MyGroupsPage {...props} />}
              />
              <Route
                path="/group-dashboard"
                exact
                render={props => <GroupDashboardPage {...props} />}
              />
              <Route
                path="/create-new-group"
                exact
                render={props => <CreateNewGroupPage {...props} />}
              />
            </Switch>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);

const USERS = [
  {
    name: "Mohammad Mollaahmadi",
    username: "mollaahmadi",
    email: "mollaahmadimohammad@gmail.com"
  },
  { name: "Ali Pashaee", username: "pashaee", email: "alipashae8@yahoo.com" }
];