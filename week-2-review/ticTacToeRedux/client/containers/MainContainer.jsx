/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import child components...
import MarketsContainer from './MarketsContainer.jsx';
import TotalsDisplay from '../components/TotalsDisplay.jsx';

// This is our new "props" object
// the react component has access to these through
// --> this.props.(whatever state is in mapStateToProp)
const mapStateToProps = state => (
  {
    totalCards: state.markets.newTotalCards,
    totalMarkets: state.markets.newTotalMarkets
  }
);

// just like in a basic react app we prop drill the state components
// that were brought into our mainContainer (with mapStateToProps) 
// to this components child components. 
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('State.markets: ', this.props);
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          <TotalsDisplay 
            totalCards={this.props.totalCards}
            totalMarkets={this.props.totalMarkets} 
          />
          <MarketsContainer />
        </div>
      </div>
    );
  }
}


// we don't need a disptacher bc we aren't send data to the reducer
export default connect(mapStateToProps, null)(MainContainer);