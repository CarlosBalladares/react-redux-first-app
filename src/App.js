import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';


import Posts from './components/Posts.js'
import Postform from './components/Postform.js'

import store from './store.js';




class App extends Component {
  render(){

    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Postform/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
