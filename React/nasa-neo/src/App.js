import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsteroidField from './components/asteroid_field.js';

class App extends Component {
  render() {
    return (
      <div>
        <AsteroidField />
      </div>
    );
  }
}

export default App;
