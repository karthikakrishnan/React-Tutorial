import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Home Page</h1>
        </header>
        <button className="App-intro">
          Menu 1
        </button>

        <button className="App-intro">
          Menu 2
        </button>

        <button className="App-intro">
          Menu 2
        </button>
      </div>
    );
  }
}

export default App;
