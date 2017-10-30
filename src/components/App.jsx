import React, { Component } from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import './normalize.css';
import './App.css';

class App extends Component {

render(){
    return (
      <div id="app-container">
        <Header />
        <div id='main'>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
