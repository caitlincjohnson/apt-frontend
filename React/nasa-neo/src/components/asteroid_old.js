import React, { Component } from 'react';

class Asteroid extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {

    const styles = {
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`
    }

    let { name, close_approach_data, estimated_diameter, is_potentially_hazardous_asteroid } = this.props.asteroid
    let hazardWarning

    if (is_potentially_hazardous_asteroid) {
      hazardWarning = 'Hazardous!'
    } else {
      hazardWarning = 'Not hazardous'
    }

    return (
      <div>
        <img className="asteroid-img" src="/asteroid.png" style={styles}/>
        <asteroid style={styles}>
          <p style={{fontSize: "1.5em"}}>{name.slice(1,-1)}</p>
          <p>Diameter is {Math.ceil(estimated_diameter.meters.estimated_diameter_max)} meters </p>
          <p>{hazardWarning}</p>
          <p>{close_approach_data[0].miss_distance.kilometers} kms from Earth</p>
        </asteroid>
      </div>
    );
  }
}

export default Asteroid;
