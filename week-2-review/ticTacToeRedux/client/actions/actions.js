/**
 * ************************************
 *
 * @module  actions.js
 * @author William Murphy
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
// import * as types from '../constants/actionTypes';

/**
 * We need redux-thunk or
 * redux-sage for fetches in our action creators
 */

// Action for resetting the game
export const resetGame = () => ({ type: 'RESET_GAME' });

// Action for updating a cell -> why is the index wrapped in curly brackets??
export const playMove = (index) => ({ type: 'PLAY_MOVE', payload: { index } });

