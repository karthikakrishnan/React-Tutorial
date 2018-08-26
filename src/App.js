import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header.js';
import { ContentPage } from './ContentPage.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialState: 'Initial State'
    }

    this.menuOne = this.menuOne.bind(this);
  }

  menuOne() {
    alert('Menu One');
  }
  render() {
    return (
      <div>
        <Header />
        <ContentPage />
      </div>
    );
  }
}

export default App;
