import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myData from './data.js';
// Import Components
import Items from './layout/Items.js';
import Header from './layout/Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        // Add items tag
      </div>
    );
  }
}

export default App;
