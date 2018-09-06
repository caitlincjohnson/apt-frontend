import React, { Component } from 'react';

class Asteroid extends Component {
  constructor(props){
    super(props)
    this.state = {
      top: "300px",
      left: "200px"
    }
  }

  render() {
    return (
        <div>
          <img className="asteroid" src="/asteroid.png" style={{top: "300px", left: "200px"}}/>
        </div>
    );
  }
}

export default Asteroid;
