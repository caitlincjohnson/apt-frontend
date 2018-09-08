import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsteroidField from './components/asteroid_field.js';
import Title from './components/title.js';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <AsteroidField />
        <img className="earth-img" src="/earth.png"/>
      </div>
    );
  }
}

export default App;
