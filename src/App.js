import React from 'react';


import './App.css';

import MainPage from './components/pages/main-page/MainPage';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {isLogin: true};
  }

  render(){
    const isLogin = this.state.isLogin;

    return <MainPage isLogin={isLogin}/>;
  }
}

export default App;
