import React, { useState } from 'react';

const Counter = () => {
  // Declare the count state using the useState hook. Initialize count to 50
  // useState allows you to manage local state inside a functional component.
  const [count, setCount] = useState(50);

  // Define a function that updates the count state when the button is clicked
  const handleClick = () => {
    // Update the count state using the setCount function provided by useState.
    // Pass a function that receives the previous count and returns the incremented value.
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div class="counter">
      {/* Display the TRYDENT Star Count with the current count */}
      <h1>TRYDENT Star Count: {count}</h1>

      {/* Attach the handleClick function to the onClick event of the button */}
      <button onClick={handleClick}>MORE STARS</button>
    </div>
  );
};

export default Counter;

/**
 * You could have put the state in the App component and passed the state and setState function down to the Counter component as props.
 * However, this would have required you to pass the props through the ColorToggle component as well (prop drilling) 
 * Can avoid this prop drilling by using the useContext hook to share state across components
*/
