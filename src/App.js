import React, { Component } from 'react';
import './App.css';
import sample2 from './sample2.png';
import worldmap from './worldmap.jpg';
import cover from './cover.png';
import bg1 from './bg1.jpg';
import bitmap from './bitmap.png';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <div className="App">
      <div className="samp">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={bitmap} alt="bitmap"/>
            <div className="header">
              <h4>Contact</h4>
            </div>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>

      <div classname="img">
        <img src={cover} alt="cover"/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
