import React from 'react';

function ResetButton({ handleReset }) {
  return (
    <div id='resetDiv'>
      <button 
        className='resetBtn'
        onClick={handleReset}
      >
        Reset Game
      </button>
    </div>
  );
}

export default ResetButton;