import React, { Component } from 'react';
import Asteroid from './asteroid.js';
import neoData from './sample-neo.js';

class AsteroidField extends Component {
  constructor(props){
    super(props)
    this.state = {
      asteroids: neoData.near_earth_objects["2018-09-05"]
    }
  }

  render() {
    console.log(this.state.asteroids);

    let asteroidField = this.state.asteroids.map(asteroid => {
      return (
        <Asteroid />
      )
    })
    return (
        <div className="parent">
          {asteroidField}
        </div>
    );
  }
}

export default AsteroidField;
