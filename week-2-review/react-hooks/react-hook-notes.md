# React Hooks

React hooks allow the you to use state and other React features in functional components without writing a class. 

## Table of Contents
- [useState](#useState)
  - [Basic Syntax](#basic-syntax)
  - [Updating State with a Function](#updating-state-with-a-function)
- [useEffect](#useeffect)
  - [Basic Syntax](#basic-syntax-1)
- [useContext](#usecontext)
- [Lifecycles](#lifecycles)
- [More Links](#more-links)

## useState
- `useState` is a hook that allows you to add local state to functional components
- When state changes, React re-renders the UI

### Basic Syntax
```js
const [state, setState] = useState(initialState);
```
- Takes an initial state value as its argument
- Returns an array containing two elements
  1. Current state value
  2. A function to update the state value

Example:
```jsx
// import useState from react
import React, { useState } from 'react';

// Counter is a function that will increment the count when button is clicked
function Counter() {
  // Initialize state with initial value of 0
  // Array destructuring to assign current state to `count` and function to update state as `setcount`
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <!-- onClick, the count state is incremented by 1 -->
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
- !! When the state is updated, React automatically re-renders the component to reflect the new state !!

### Updating State with a Function
- Usually, when updating the state based on the previous state, you want to use a function that accepts the previous state as its argument

Example: 
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <!-- Pass an arrow function to `setCount` that takes `prevCount` as argument and returns the updated count (`prevCount + 1`) -->
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useEffect
- Allows performing side effects in functional components
  - Fetching data, setting up subscriptions, manually changing the DOM, etc
  - Combination of `componentDidMount` and `componentDidUpdate` and `componentWillUnmount` lifecycle methods

### Basic Syntax
```js
useEffect(() => {
  // side effect code here
}, [/*dependencies*/]);
```
- Takes two arguments:
  1. Function containing side effect code
  2. Optional array of dependencies

  - Dependencies array determines when the side effect function will run. If one of the dependencies in the array change, side effect will run after the render
  - If dependency array is not given, side effect will just run on every render

Example: Fetching Data
```jsx
import React, { useState, useEffect } from 'react';

// Creating simple user component that fetches user data based on `userId`
function User({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Async function that fetches user data from API and sets `user` state with fetched data
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    }

    fetchData();
  }, [userId]); // `userId` passed in, so side effect function only runs whenever `userId` prop changes, avoiding unnecessary API calls

  return (
    <div>
      {user ? <p>User name: {user.name}</p> : <p>Loading...</p>}
    </div>
  );
}
```
Example 2: Cleanup Function
```jsx
import React, { useState, useEffect } from 'react';

// Timer component that counts the elasped seconds
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function that runs when component unmounts or when dependencies change
    // Clears the `intervalId`, preventing memory leaks by interval continuing to run after component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // no dependency array so run only when component mounts and cleanup when component unmounts

  return (
    <div>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}
/**
* Set up interval to update `seconds` state every second when component mounts
* Clears interval when component unmounts, preventing memory leaks
*/
```
MDN hyper-links for [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) & [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)


## useContext
- Used to access values of a context and subscribe to its changes

Example:
- In this example, we will `useContext` to manage application language
- To use `useContext`, first need to create a context using `React.createContext()`
```jsx
import React from 'react';

// Create a context with a default value of 'en' (English)
const LanguageContext = React.createContext('en');
```
- Now a functional component that uses `useContext` to access the value of `LanguageContext`
```jsx
import React, { useContext } from 'react';

function Greeting() {
  // useContext to access current value of `LanguageContext`
  const language = useContext(LanguageContext);

  // Display the greeting based on the current language
  const greeting = language === 'en' ? 'Hello!' : '¡Hola!';

  return <h1>{greeting}</h1>;
}
```
- To change the language
```jsx
import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={language}>
      <Greeting />
      <button onClick={toggleLanguage}>Toggle Language</button>
    </LanguageContext.Provider>
  );
}
/**
 * useState to manage language state
 * when button is clicked, `toggleLanguage` function changes language state, which updates the value of the `LanguageContext.Provider`
 * Greetings component will re-render with the new language value
*/
```

## LifeCycles
Quick review:
1. `componentDidMount`: Called once when the component is mounted. This is typically where you fetch data or set up subscriptions.
2. `componentDidUpdate`: Called whenever the component updates (i.e., when its state or props change). This is where you can perform side effects based on changes in state or props.
3. `componentWillUnmount`: Called just before the component is unmounted and destroyed. This is where you clean up any resources (e.g., timers, subscriptions) that were created during the component's lifecycle.  

![Lifecycle](../assets/lifecycle.png)

Example with React Hook `useEffect`  
- Recall that `useEffect` hook takes 2 arguments: function that defines the side effect that is run and an array of dependencies.
```js
useEffect(() => {
  // side effect to run
}, [/* dependencies */]);
```
### componentDidMount
If you have an empty dependency, this imitates `componentDidMount`. This means the side effect only runs once when the component mounts:
```js
useEffect(() => {
  // side effect to run
}, []);
```
### componentDidUpdate
If you add relevant dependencies in the dependency array, you can imitate the behaviour of `componentDidUpdate`. Every time there is a change or update in the dependencies, the side effect will run:
```js
useEffect(() => {
  // side effect to run
}, [prop1, prop2, state1]);
```
### componentWillUnmount
If you add in a cleanup function in the `useEffect` hook, you are imitating the behaviour of `componentWillUnmount`. When the component is unmounted, the cleanup function is executed:
```js
useEffect(() => {
  // Set up resources here

  return () => {
    // Clean up resources here
  };
}, []);
```

Example: Fetching Data and Cleaning Up
```jsx
import React, { useState, useEffect } from "react";
function ExampleComponent() {
  // Declare state variable 'data' with initial value of null with useState
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define async function to fetch data
    const fetchData = async () => {
      // Fetch data from API
      const response = await fetch("https://api.example.com/data");

      // Parse JSON response
      const result = await response.json();

      // Update 'data' state with fetched data
      setData(result);
    };

    // Call the fetchData function to fetch data when the component mounts
    fetchData();

    // Clean up when the component unmounts
    return () => {
      // Perform any necessary cleanup here (e.g., aborting the fetch request)
      // I didn't add a specific function b/c I'm too lazy :( but the premise is that you could cleanup whatever is ongoing (such as if the fetch request is still ongoing)
    };
  }, []); // Empty dependency array to ensure effect only happens once on mount

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
```

## MORE LINKS
- [React.dev THIS ONE THIS ONE](https://react.dev/reference/react)
- [CodeCademy Hooks](https://www.codecademy.com/learn/react-101/modules/react-hooks-u/cheatsheet)
- [Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)


You love the seniors, yes you do
:)
