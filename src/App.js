import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myData from './data.js';
// Import Components
import Items from './layout/Items.js';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
import BottomAdds from './layout/BottomAdds.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Items items={myData}/>
      <BottomAdds />
      <Footer />
       
      </div>
    );
  }
}

export default App;
