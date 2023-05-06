import React, { Component } from 'react';

class Greeting extends Component {

  componentDidMount() {
    this.props.colorChange();
  }

  render() {
    return (
      <div className = 'greeting'>
        <h3 style={{color: this.props.textColor}}>
        {this.props.greeting}
        </h3>
      </div>
    )
  }
}

export default Greeting