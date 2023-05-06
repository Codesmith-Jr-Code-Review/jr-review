import React from 'react';

function Cell({ value, handleClick, i_index, j_index, Board }) {
  const indexStr = `${i_index}${j_index}`;
  const index = Number(indexStr);
  return (
    <div className='box'>
      <button className="cells" onClick={() => handleClick(JSON.stringify(index))}>
        {Board[index]}
      </button>
    </div>
  );
}

export default Cell;