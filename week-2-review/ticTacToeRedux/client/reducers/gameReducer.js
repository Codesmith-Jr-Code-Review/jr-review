/**
 * ************************************
 *
 * @author William Murphy
 * @date
 * @description reducer for ticTacToe
 *
 * ************************************
 */



// import * as types from '../constants/actionTypes';

const initialState = {
  board: {
    0: '',
    1: null,
    2: null,
    10: null,
    11: null,
    12: null,
    20: null,
    21: null,
    22: null,
  },
  player: 'X',
  winner: null,
  turns: 0,
};


const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_MOVE':{
      const { index } = action.payload;

      // Why do we do this?
      const newBoard = structuredClone(state.board);
      
      if (newBoard[index] || winner) {
        // If the square is already selected or game has ended, do nothing
        return state;
      }
      
      // Are we mutating state?
      const newTurns = state.turns + 1;
      newBoard[index] = state.player;

      console.log(newBoard[index]);

      const winner = calculateWinner(newBoard, newTurns);
      // What is this line doing?
      const newPlayer = state.player === 'X' ? 'O' : 'X';

      return {
        ...state,
        board: newBoard,
        player: newPlayer,
        winner,
      };
    }
    case 'RESET_GAME':{
      return {...initialState};
    }
    default:{
      //Why is this line so important?
      return state;
    }
  }
};

/////////////////// Helper Functions ///////////////////////////

const calculateWinner = (board, newTurns) => {

  // label the winning arrays

  // In this winningLines array
  const winningLines = [
    [0, 1, 2], // top row
    [0, 10, 20], // left col
    [1, 11, 21], // center row
    [10, 11, 12], // center col
    [20, 21, 22], // bottom row
    [2, 21, 22], // right col
    [0, 11, 22], // diagonal 1
    [2, 11, 20], // diagonal 2
  ];

  // if the board is full return 'tie'
  if (newTurns > 8) {
    // console.log('Tie')
    return '...It\'s actually a Tie!';
  }
  // console.log(newTurns)
  // check the current board against the winning arrays
  for (let i = 0; i < winningLines.length; i++) {
    const [ a, b, c ] = winningLines[i];
    // array destructuring (just shorthand to grab each element of winningLines[i]])
    // console.log(a,b,c)
    // (the board's key are numbers : )
    if (board[a] && board[a] === board[b] && board[b] === board[c]){
      // console.log(board[a], ' Wins');
      return board[a];
    }
  }
  // else neither has won
  return null;
};

export default gameReducer;