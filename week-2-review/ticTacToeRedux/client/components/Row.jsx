import React from 'react';
import Cell from './Cell.jsx';

function Row({ value, i_index, handleCellClick, Board }) {

  const cells = [];

  for (let j = 0; j < 3; j += 1) {
    cells.push(
      <Cell
        key={j}
        j_index={j}
        i_index={i_index}
        value={value}
        Board={Board}
        handleClick={handleCellClick}
      />
    );
  }
  return (
    <div className="rows">
      {cells}
    </div>
  );
}

export default Row;