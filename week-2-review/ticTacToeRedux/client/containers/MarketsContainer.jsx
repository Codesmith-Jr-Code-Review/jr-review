/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author WIllilam Murphy
 * @date 21 March 2023
 * @description stateful component that renders instances of MarketCreator and MarketsDisplay
 *
 * This is were all the logic and state is brought to for the rendering of
 * of all the markets
 * 
 * State is brought into this container through mapStateToProps (props of the react component)
 * 
 * The functionality of ...
 *  1) adding new markets to the display
 *  2) adding newCards
 *  3) deleting newCards
 * 
 * will all be handled by mapDispatchToProps (again, props of the component)
 * 
 * We are going to take these pieces of state and dispatches
 * and are going to prop drill them to this containers
 * child components.
 * 
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file (becasue we have dispatchers!!!)
import * as actions from '../actions/actions';
// import child components...
import MarketCreator from '../components/MarketCreator.jsx';
import MarketsDisplay from '../components/MarketsDisplay.jsx';


// bring the pieces of state into this component
const mapStateToProps = state => (
  {
    marketID: state.markets.lastMarketId,
    marketsList: state.markets.newMarketList,
  }
);

// mapDispatchToProps allows functions to be prop drilled to 
// child components
const mapDispatchToProps = dispatch => (
  {
    // each one of these methods dispatchs an action with a payload to
    // the reducer 
    addCard: ((e) => {
      const index = Number(e.target.id);
      // dispatch sends action to reducer (index is the action payload)
      // (note we imported all the actions as 'actions')
      dispatch(actions.addCardActionCreator(index));
    }),

    deleteCard: ((e) => {
      const index = Number(e.target.id);
      // dispatch sends action to reducer (index is the action payload)
      dispatch(actions.deleteCardActionCreator(index));
    }),

    // handle the event within the market creator //
    // This is for the add market button
    addMarket: ((e) => {
      // dispatch addMarketActionCreator
      const input = document.getElementById('inputField');
      if (input.value !== '') {
        dispatch(actions.addMarketActionCreator(input.value));
        // reset the location field for next market
        input.value = '';
      }
    }),
  // We could implement an onChange(e) event handler that continously changes the
  // the state everytime the input field changes.
  // We would need another actionType, actionCreator, dispatch function (here)
  // We would then prop drill this function to the input field and
  // add a case for the reducer. (or we can update the state with a DOM query)
  }
);

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        <MarketCreator
          addMarket={this.props.addMarket}
          key='MarketCreator'>
        </MarketCreator>
        <hr></hr>
        <MarketsDisplay 
          marketsList={this.props.marketsList}
          addCard={this.props.addCard}
          deleteCard={this.props.deleteCard}>
        </MarketsDisplay>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
