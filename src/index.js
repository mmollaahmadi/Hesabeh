import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app/app';
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();

//
// // import './assets/css/argon-dashboard-react.css';
// import './assets/css/argon-design-system-react.css';
// // import './assets/scss/argon-design-system-react.scss'
//
// import * as serviceWorker from './serviceWorker';
//
// import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/vendor/nucleo/css/nucleo.css";
// import './assets/vendor/font-awesome/css/font-awesome.min.css';
//
// import './assets/css/bootstrap-rtl.css';
//
// import './assets/css/custom.css';
//
// import './assets/css/animate.css';
//
// import 'aos/dist/aos.css';
//
// import 'react-persian-calendar-date-picker/lib/DatePicker.css';
//
// import MainPage from './components/main-page/main-page';
// import UserDashboardPage from './components/user-dashboard-page/user-dashboard-page.js';
// import GroupDashboardPage from './components/group-dashboard-page/group-dashboard-page.js';
// import MyGroupsPage from './components/my-groups-page/my-groups-page.js';
// import NewPasswordRequestPage from './components/forgot-password-pages/new-password-request-page.js';
// import SupportPage from './components/support-page/support-page.js';
// import SignInPage from './components/signin-page/sign-in-page.js';
// import RegisterPage from './components/register-page/register-page.js';
// import PaymentsPage from './components/payments-page/payments-page.js';
// import CreateNewGroupPage from './components/my-groups-page/create-new-group-page.js';
// import NotificationsPage from './components/notifications-page/notifications-page.js';
// import CreateNewRequestPage from './components/notifications-page/new-request/create-new-request-page.js'
// import AddPaymentPage from './components/payments-page/add-new-payment.js';
// import HelpPage from './components/help-page/help-page'
//
// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" exact render={props => <MainPage isLogin='false' />} />
//       <Route
//         path="/register"
//         exact
//         render={props => <RegisterPage {...props} />}
//       />
//       <Route
//         path="/signin"
//         exact
//         render={props => <SignInPage {...props} />}
//       />
//       <Route
//         path="/forgot-password"
//         exact
//         render={props => <NewPasswordRequestPage {...props} />}
//       />
//       <Route
//         path="/support"
//         exact
//         render={props => <SupportPage {...props} />}
//       />
//       <Route
//         path="/help"
//         exact
//         render={props => <HelpPage {...props} />}
//       />
//       <Route
//         path="/my-account"
//         exact
//         render={props => <PaymentsPage {...props} />}
//       />
//       <Route
//         path="/add-new-payment"
//         exact
//         render={props => <AddPaymentPage {...props} />}
//       />
//       <Route
//         path="/dashboard"
//         exact
//         render={props => <UserDashboardPage {...props} />}
//       />
//       <Route
//         path="/notifications"
//         exact
//         render={props => <NotificationsPage {...props} />}
//       />
//       <Route
//         path="/create-new-request"
//         exact
//         render={props => <CreateNewRequestPage {...props} />}
//       />
//       <Route
//         path="/mygroups"
//         exact
//         render={props => <MyGroupsPage {...props} />}
//       />
//       <Route
//         path="/group-dashboard"
//         exact
//         render={props => <GroupDashboardPage {...props} />}
//       />
//       <Route
//         path="/create-new-group"
//         exact
//         render={props => <CreateNewGroupPage {...props} />}
//       />
//       <Redirect to="/" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
//
// /* ReactDOM.render(
// <BrowserRouter>
//     <App />
// </BrowserRouter>, document.getElementById('root'));*/
// // ReactDOM.render(<App />, document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
