import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './index.css';
//import App from './App';

import './assets/css/argon-dashboard-react.css';

import './assets/css/argon-design-system-react.css';
// import './assets/scss/argon-design-system-react.scss'

import * as serviceWorker from './serviceWorker';

import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import './assets/vendor/font-awesome/css/font-awesome.min.css';

import './assets/css/bootstrap-rtl.css';

import './assets/css/custom.css';

import MainPage from './main-page/MainPage';
import UserDashboardPage from './user-dashboard-page/UserDashboardPage.js';
import GroupDashboardPage from './group-dashboard-page/GroupDashboardPage.js';
import MyGroupsPage from './my-groups-page/MyGroupsPage.js'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <MainPage isLogin='false' />} />
      <Route
        path="/dashboard"
        exact
        render={props => <UserDashboardPage {...props} />}
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
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

/* ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
