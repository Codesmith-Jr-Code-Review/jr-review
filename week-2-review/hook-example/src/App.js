import React, { useState } from 'react';
import Counter from './components/Counter';
import ColorToggle from './components/ColorToggle';

// Create a context to share background color state across components
export const BackgroundColorContext = React.createContext();

const App = () => {
  // Declare the background color state using the useState hook. Initialize backgroundColor to 'lightblue'
  const [backgroundColor, setBackgroundColor] = useState('lightblue');

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      {/* Wrap components in the BackgroundColorContext.Provider, so they have access to setBackgroundColor */}
      <BackgroundColorContext.Provider value={{ setBackgroundColor }}>
        <Counter />
        <ColorToggle />
      </BackgroundColorContext.Provider>
    </div>
  );
};

export default App;
