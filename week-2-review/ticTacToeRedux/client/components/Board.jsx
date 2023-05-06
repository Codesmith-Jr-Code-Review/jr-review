import React from 'react';
import Row from './Row.jsx';



function Board({ board, i_index, handleCellClick, value, Board }) {

  const rows = [];

  for (let i = 0; i < 3; i += 1) {
    rows.push(
      <Row
        key={i}
        i_index = {i}
        value={value}
        Board={Board}
        handleCellClick={handleCellClick}
      />
    );
  }
  return (
    <div id="board">
      {/* {JSON.stringify(Board)} */}
      {rows}
    </div>
  );
}

export default Board;