import React, { Component } from 'react';
import Greeting from './Greeting';
import Visitors from './Visitors';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'white',
      message: 'What up Juniors',
      currVisitor: '',
      names: []
    }
    this.changeColor = this.changeColor.bind(this);
    this.addName = this.addName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeColor() {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.setState({...this.state, currentColor: color});
  }

  handleChange(e){
    e.preventDefault();
    const currentVisitor = e.target.value;
    this.setState({...this.state, currVisitor: currentVisitor});
  }

  addName(e) {
    e.preventDefault();
    //making a copy of this piece of state
    const updatedNameList = this.state.names;
    updatedNameList.push(this.state.currVisitor);
    this.setState({...this.state, names: updatedNameList});
  }

  render() {
    return (
      <div className = 'page'>
        <div>
        <Greeting greeting={this.state.message} textColor={this.state.currentColor} colorChange={this.changeColor}/>
        </div>
        <div>
        <Visitors names={this.state.names} nameAdd={this.addName} currVisitor={this.state.currVisitor} handleChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

export default Page;