import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

// import { getCurrentUser } from '../util/APIUtils';
// import { ACCESS_TOKEN } from '../constants';

import "../../assets/css/argon-design-system-react.css";
import "../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/vendor/nucleo/css/nucleo.css";
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/css/bootstrap-rtl.css";
import "../../assets/css/custom.css";
import "../../assets/css/animate.css";
import "aos/dist/aos.css";
import "react-persian-calendar-date-picker/lib/DatePicker.css";

import MainPage from "../pages/main-page/main-page";
import UserDashboardPage from "../pages/user-dashboard-page/user-dashboard-page.js";
import GroupDashboardPage from "../pages/group-dashboard-page/group-dashboard-page.js";
import MyGroupsPage from "../pages/my-groups-page/my-groups-page.js";
import NewPasswordRequestPage from "../pages/audit-pages/forgot-password-pages/new-password-request-page.js";
import SupportPage from "../pages/support-page/support-page.js";
import LoginPage from "../pages/audit-pages/login-page/login-page.js";
import RegisterPage from "../pages/audit-pages/register-page/register-page.js";
import MyFinanceAccountPage from "../pages/my-account-page/my-account-page.js";
import CreateNewGroupPage from "../pages/my-groups-page/create-new-group-page.js";
import NotificationsPage from "../pages/notifications-page/notifications-page.js";
import CreateNewRequestPage from "../pages/notifications-page/new-request/create-new-request-page.js";
import AddPaymentPage from "../pages/my-account-page/add-new-payment/add-new-payment.js";
import HelpPage from "../pages/help-page/help-page";
import GoToUp from "../my-components/go-to-up/go-to-up.js";
import NavBar from "../common/nav-bar/nav-bar";
import Footer from "../common/footer/footer";

import { goToAnchor, configureAnchors } from "react-scrollable-anchor";
import { USERS } from "../../constants/constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false,
      selectedPage: "Hesabeh",
      goto: ""
    };
    configureAnchors({offset:-70, scrollDuration: 300});
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getUser = this.getUser.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.goto = this.goto.bind(this);
  }
  goto(pathname, hash) {
    if (this.props.history.location.pathname === pathname) {
      this.props.history.replace(pathname, "1");
      goToAnchor(hash);
    } else {
      this.props.history.push({
        pathname: pathname,
        hash: "#" + hash,
        state: "1"
      });
    }
  }
  handleChangePage(_selectedPage) {
    this.setState({ selectedPage: _selectedPage });
  }
  getUser(usernameOrEmailOrPhoneNumber) {
    let _user = null;
    USERS.forEach(user => {
      if (
        user.username === usernameOrEmailOrPhoneNumber ||
        user.email === usernameOrEmailOrPhoneNumber ||
        user.phoneNumber === usernameOrEmailOrPhoneNumber
      )
        _user = user;
    });
    return _user;
  }
  loadCurrentUser(emailOrUsernameOrPhoneNumber, password) {
    let user = null;
    // eslint-disable-next-line array-callback-return
    USERS.map(u => {
      if (
        (u.username === emailOrUsernameOrPhoneNumber ||
          u.email === emailOrUsernameOrPhoneNumber) &&
        u.password === password
      ) {
        user = {
          id: u.id,
          name: u.name,
          username: u.username,
          email: u.email,
          phoneNumber: u.phoneNumber,
        };
      }
    });

    if (user)
      this.setState({
        currentUser: user,
        isAuthenticated: true,
        isLoading: true,
        selectedPage: "my-account"
      });
    else {
      this.setState({
        currentUser: user,
        isAuthenticated: false,
        isLoading: false
      });
    }
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
    if(!this.state.isAuthenticated){
      this.setState({
        currentUser: null,
        isAuthenticated: false
      });

      this.props.history.push('/');
    }
    // this.loadCurrentUser();
  }

  handleLogout(
    redirectTo = "/",
    // notificationType = "success",
    // description = "You're successfully logged out."
  ) {
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

  handleLogin(emailOrUsernameOrPhoneNumber, password) {
    this.loadCurrentUser(emailOrUsernameOrPhoneNumber, password);
    this.props.history.push("/my-account");
  }

  render() {
    if (this.state.isLoading) {
      // return <LoadingIndicator />
    }
    return (
      <div className="app-container">
        <NavBar
          isLogin={this.state.isAuthenticated}
          currentUser={this.state.currentUser}
          onLogout={this.handleLogout}
          onChangePage={this.handleChangePage}
          selectedPage={this.state.selectedPage}
        />

        <div className="app-content">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <MainPage
                  onChangePage={this.handleChangePage}
                  isLogin="false"
                  goto={this.goto}
                />
              )}
            />
            <Route
              path="/register"
              exact
              render={() => <RegisterPage
                onChangePage={this.handleChangePage} />}
            />
            <Route
              path="/login"
              exact
              render={() => <LoginPage
                onLogin={this.handleLogin}
                onChangePage={this.handleChangePage}
              />}
            />
            <Route
              path="/forgot-password"
              exact
              render={() => <NewPasswordRequestPage
                onChangePage={this.handleChangePage} />}
            />
            <Route
              path="/support"
              exact
              render={() => <SupportPage
                currentUser={this.state.currentUser}
                isLogin={this.state.isAuthenticated}
                onChangePage={this.handleChangePage}
              />}
            />
            <Route
              path="/help"
              exact
              render={props => <HelpPage {...props} />}
            />
            <Route
              path="/my-account"
              exact
              render={() => (
                <MyFinanceAccountPage
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Route
              path="/add-new-payment"
              exact
              render={() => (
                <AddPaymentPage
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Route
              path="/dashboard"
              exact
              render={props => (
                <UserDashboardPage
                  currentUser={this.state.currentUser}
                  onLogout={this.handleLogout}
                  onChangePage={this.handleChangePage}
                  {...props}
                />
              )}
            />
            <Route
              path="/notifications"
              exact
              render={props => <NotificationsPage currentUser={this.state.currentUser} {...props} />}
            />
            <Route
              path="/create-new-request"
              exact
              render={props => (
                <CreateNewRequestPage
                  getUser={this.getUser}
                  currentUser={this.state.currentUser}
                  {...props}
                />
              )}
            />
            <Route
              path="/my-groups"
              exact
              render={props => <MyGroupsPage
                currentUser={this.state.currentUser} {...props} />}
            />
            <Route
              path="/group-dashboard"
              exact
              render={props => <GroupDashboardPage {...props} />}
            />
            <Route
              path="/create-new-group"
              exact
              render={props => (
                <CreateNewGroupPage
                  getUser={this.getUser}
                  currentUser={this.state.currentUser}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
        <Footer
          currentUser={this.state.currentUser}
          isLogin={this.state.isAuthenticated}
          goto={this.goto}
          onChangePage={this.handleChangePage}
         />
        <GoToUp/>
      </div>
    );
  }
}

export default withRouter(App);
