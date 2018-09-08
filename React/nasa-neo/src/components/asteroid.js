import React, { Component } from 'react';

class Asteroid extends Component {
  constructor(props){
    super(props)
    this.state = {
      height: window.innerHeight-400,
      width: window.innerWidth
    }
  }


  render() {
    // Declare variables
    let {height, width}  = this.state
    let {maximumDistance, minimumDistance, numOfAsteroids, asteroid} = this.props
    let {name, close_approach_data, estimated_diameter, is_potentially_hazardous_asteroid} = asteroid
    let hazardWarning
    let asteroidDistance = close_approach_data[0].miss_distance.kilometers
    // Normalize the asteroid's distance from earth
    let normalizedDistance = asteroidDistance - minimumDistance
    // Normalize the maximum distance from earth
    let normalizedMaxDistance = maximumDistance - minimumDistance
    // Calculate the "height" of the asteroid on the screen compared in respect to others
    let yCoord = (height * normalizedDistance / normalizedMaxDistance)
    // Calculate the x-coordinates of the asteroid based on the number of asteroids and the width of the screen
    let xCoord = Math.floor(Math.random()*width)-(width/2)

    const styles = {
      top: `${yCoord}px`,
      left: `${xCoord}px`
    }

    if (is_potentially_hazardous_asteroid) {
      hazardWarning = 'Hazardous!'
    } else {
      hazardWarning = 'Not hazardous'
    }

    return (
      <div>
        <asteroid style={styles}>
          <img className="asteroid-img" src="/asteroid.png"/>
          <asteroid-details>
            <p style={{fontSize: "1.5em"}}>{name.slice(1,-1)}</p>
            <p>Diameter is {Math.ceil(estimated_diameter.meters.estimated_diameter_max)} meters </p>
            <p>{hazardWarning}</p>
            <p>{close_approach_data[0].miss_distance.kilometers} kms from Earth</p>
          </asteroid-details>
        </asteroid>
      </div>
    );
  }
}

export default Asteroid;
