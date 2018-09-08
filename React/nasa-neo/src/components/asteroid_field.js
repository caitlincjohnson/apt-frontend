import React, { Component } from 'react';
import Asteroid from './asteroid.js';
import neoData from './sample-neo.js';

class AsteroidField extends Component {
  constructor(props){
    super(props)
    this.state = {
      asteroids: neoData.near_earth_objects["2018-09-05"],
      height: window.innerHeight,
      width: window.innerWidth
    }
  }

  render() {
    let distanceArray = []
    let numOfAsteroids = this.state.asteroids.length
    // Create an array that pulls in all of the distances from earth
    for (let i = 0; i < numOfAsteroids; i++) {
      distanceArray[i] = this.state.asteroids[i].close_approach_data[0].miss_distance.kilometers
    }
    // Find the maximum distance from earth to use as a boundary
    let maximumDistance = Math.max(...distanceArray)
    // Find the minimum distance from earth to normalize the data
    let minimumDistance = Math.min(...distanceArray)
    let asteroidField = this.state.asteroids.map(asteroid => {
      return (
        <Asteroid asteroid={asteroid} numOfAsteroids={numOfAsteroids} maximumDistance={maximumDistance} minimumDistance={minimumDistance} />
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
