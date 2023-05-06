/**
 * ************************************
 *
 * @module  App.jsx
 * @author William Murphy
 * @date 05/05/2023
 * 
 * 
 * This is the component that is wrapped by redux's "Provider"
 * The provider is an instance that provider class that provides the
 * store to this app
 *
 * ************************************
 */

import React from 'react';

import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame, playMove } from './actions/actions.js';

import Board from './components/Board.jsx';
import Winner from './components/Winner.jsx';
import ResetButton from './components/resetButton.jsx';

const mapStateToProps = state => ({
  board: state.game.board,
  player: state.game.player,
  winner: state.game.winner,
});


function App() {
  const dispatch = useDispatch();
  const {winner, player, board} = useSelector(state => state.game);

  const handleCellClick = (index) => {
    if (Board[index] || winner) {
      return;
    }
    console.log(index);
    dispatch(playMove(index));
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div className="window">
      <h1 id='headLine'>Tic Tac Toe</h1>
      <Board
        className='Board'
        Board={board} 
        value={player} 
        handleCellClick={handleCellClick} 
      />
      {winner && 
      <Winner 
        className='status'
        winner={winner} 
      />}
      <ResetButton 
        handleReset={handleReset} />
    </div>
  );
}

// export default App;


export default connect(mapStateToProps)(App);
