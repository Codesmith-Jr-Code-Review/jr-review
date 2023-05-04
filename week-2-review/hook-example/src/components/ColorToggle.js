import React, { useContext } from 'react';
import { BackgroundColorContext } from '../App';

const ColorToggle = () => {
  // Access the setBackgroundColor function from the BackgroundColorContext.
  // useContext allows you to access context values from a functional component.
  const { setBackgroundColor } = useContext(BackgroundColorContext);

  // Define a function to handle button click events.
  const handleClick = () => {
    // Update the background color state using the setBackgroundColor function from the context.
    // Pass a function that receives the previous color and returns the toggled color.
    setBackgroundColor((prevColor) => prevColor === 'lightblue' ? 'gray' : 'lightblue');
  };

  return (
    <button onClick={handleClick}>Change Background Color</button>
  );
};

export default ColorToggle;
