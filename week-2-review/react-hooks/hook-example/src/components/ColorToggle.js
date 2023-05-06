import React, { useContext } from 'react';
import { BackgroundColorContext } from '../App';

const ColorToggle = () => {
  // Access the setBackgroundColor function from the BackgroundColorContext.
  // useContext allows you to access context values from a functional component.
  const { setBackgroundColor } = useContext(BackgroundColorContext);

  /** Switch between lightblue and gray background colors.
  // Define a function to handle button click events.
  const handleClick = () => {
    // Update the background color state using the setBackgroundColor function from the context.
    // Pass a function that receives the previous color and returns the toggled color.
    setBackgroundColor((prevColor) => prevColor === 'lightblue' ? 'gray' : 'lightblue');
  };
  */

  // /** Random background color.
  const handleClick = () => {
    // Update the background color state using the setBackgroundColor function from the context.
    // Pass a function that sets the background color to a random color.
    setBackgroundColor(() => {
      const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
      return `#${Math.floor(Math.random()*16777215).toString(16)}`; // https://css-tricks.com/snippets/javascript/random-hex-color/
    });
  }
  // */

  return (
    <button onClick={handleClick}>Change Background Color</button>
  );
};

export default ColorToggle;
