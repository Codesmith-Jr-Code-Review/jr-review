import React, { Component } from 'react';

class Visitors extends Component {
  render() {
    
    //maps over our name array
    const names = this.props.names.map((el) => {
      return <li>{el}</li>
    })

    return (
      <div>
        <div>
          <form className="form-control">
            <label>
            Who goes there?
              <input type='text'
              onChange={(e) => this.props.handleChange(e)}/>
            </label>
            <input type='button' value='Submit' onClick={(e) => this.props.nameAdd(e)}/>
          </form>
        </div>
        <div>
          <ul>
            {names}
          </ul>
        </div>
      </div>
    )
  }
}

export default Visitors