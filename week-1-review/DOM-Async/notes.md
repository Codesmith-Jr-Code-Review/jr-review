# JavaScript and DOM Manipulation Notes

## Table of Contents
- [JavaScript and DOM Manipulation Notes](#javascript-and-dom-manipulation-notes)
  - [Introduction to DOM](#introduction-to-dom)
  - [Accessing and Modifying Elements](#accessing-and-modifying-elements)
    - [Selecting Elements](#selecting-elements)
    - [Modification of Elements](#modification-of-elements)
    - [Creating and Adding Elements](#creating-and-adding-elements)
    - [Removing Elements](#removing-elements)
    - [Event Listeners](#event-listeners)
  - [Asynchronous Operations](#asynchronous-operations)
    - [Promises (THIS IS IMPORTANT)](#promises-this-is-important)
    - [Async/Await](#asyncawait)
    - [Thenables](#thenables)


## Introduction to DOM
- DOM is programming interface for HTML and XML documents, representing structure of a document as a tree of objects.
- Each object represents a part of the document, such as an element, attribute, or text
  <details>
    <summary> DOM Model Example </summary>
    <img src="../assets/DOM-model.svg.png" alt= DOM-Model” width="500rem">
  </details> 

## Accessing and Modifying Elements

### Selecting Elements
- `document.querySelector(selector)`: Selects the first element that matches the specific selector
- `document.querySelectorAll(selector)`: Returns a Node List of all elements that match the specific selector
  <details>
    <summary>Example</summary>

    ```js
    // grabs first item with an id of 'container'
    const container = document.querySelector('#container');

    // grabs all the items that have a class of 'button'
    const buttons = document.querySelectorAll('.button');
    ```
  </details>
### Modification of Elements
There is a bit, but pay special attention to the "***" ones, they the most useful
- `element.innerHTML`: Get or set the HTML content of an element. ***
- `element.textContent`: Get or set the text content of an element. ***
- `element.setAttribute(name, value)`: Set an attribute of an element. ***
- `element.removeAttribute(name)`: Remove an attribute of an element.
- `element.classList.add(className)`: Add a class to an element.
- `element.classList.remove(className)`: Remove a class from an element.
  <details>
    <summary>Example</summary>

    ```js
    //  assign first item with id 'container' to the variable container
    const container = document.querySelector('#container');

    // assign the innerHTML property of container 'Cool!'
    container.innerHTML = '<p>Cool!</p>';

    // give the container's 'best-osp' attribute a value of 'trydent'
    container.setAttribute('best-osp', 'trydent');

    // ! Think of the container as an object. You have given the object's innerHTML key a value and the object's data-custom key a value as well
    ```
  </details>

### Creating and Adding
- `document.createElement(tagName)`: Create a new element with the specified tag name.
- `parentNode.appendChild(childNode)`: Append a child node to the parent node.
  <details>
    <summary>Example</summary>

    ```js
    // create a new element newParagraph with a <p> tag
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph.';
    const container = document.querySelector('#container');

    // append newParagraph to the container node
    container.appendChild(newParagraph);
    ```
  </details>

### Removing Elements
- `parentNode.removeChild(childNode)`: Remove a child node from the parent node.
  <details>
    <summary>Example</summary>

    ```js
    const container = document.querySelector('#container');

    // grab the first <p> inside container
    const paragraphToRemove = container.querySelector('p');

    // delete the first <p> from the container node
    container.removeChild(paragraphToRemove);
    ```
  </details>

### Event Listeners
- `element.addEventListener(event, callback)`: Attach an event listener to an element.
- `element.removeEventListener(event, callback)`: Remove an event listener from an element.
  <details>
    <summary>Example</summary>

    ```js
    const button = document.querySelector('button');

    // function will log 'Button clicked!' 
    function handleClick() {
      console.log('Button clicked!');
    }

    // listening for a 'click' event on the button. When the event happens, runs handleClick
    button.addEventListener('click', handleClick);

    // Later, if you want to remove the event listener
    // button.removeEventListener('click', handleClick);
    ```
  </details>

## Asynchronous Operations
- Asynch allows multiple tasks to be performed simultaneously.
- Don't have to wait for one task to complete before starting the next

### Promises (THIS IS IMPORTANT)
- Promise is an object that represents the eventual completion (or failure) of an asynch operation and its resulting value
- Promises have 3 states:
  1. Pending
  2. Fulfilled
  3. Rejected

- Think of it like this:
  - Your parents forgot your birthday so they gave you a "coupon", where you could ask for whatever you wanted whenever.
  - 2 months later, you ask your parents for a playstation
  > Currently, the voucher is in a pending state: order has been placed, but nothing delivered
  - Scenario 1: Your parents actually agree and get you a playstation.
  > Voucher is now fulfilled: playstation has been delivered successfully, and you can now use that playstation to do whatever you want next
  - Scenario 2: Your parents say no
  > Voucher is now rejected: product couldn't be delivered and you are big sad

  <details>
    <summary>Example</summary>

    ```js
    // Create a new promise
    const promise = new Promise((resolve, reject) => {
      // Simulate an asynchronous operation using setTimeout
      setTimeout(() => {
        // Resolve the promise with a value
        resolve('Playstation received');
      }, 1000);
    });

    // Handle the resolved promise using .then()
    promise.then((result) => {
      console.log(result); // Output: 'Promise resolved'
    });
    /** Summary Because Promises are Important
     * Created a new Promise and stored it in the promise variable.
     * Promise represents the eventually complete or failure of asynch operation and its resulting value (Imma get this playstation or I won't, but if I get it, wow Imma play lots of games)
     * Inside the promise example, there is a setTimeout function to simulate an async operation. So after 1 second (1000 ms), we are gonna try to do something
     * BOOM, 1 second, great, we actually resolved the promise! Now the value 'Playstation received' is passed to the resolve function (which remember was a parameter) and it becomes the result of the promise
     * 'promise' variable is now representing the Promise that will be resolved with 'Playstation received' after 1 second
    */
    ```
  </details>

- Promises have a few key methods
  1. `.then()`: Chained after a promise, it takes two optional arguments: (1) fulfillment handler and (2) rejection handler
  2. `.catch()`: Handles rejection case, taking a single rejection handler as the argument
  3. `finally()`: Executes given function when promise is settled, regardless of outcome
  _______not very often used in Codesmith

### Async/Await
- Cool kids way of handling promises and make async code look and behave more like synchronous code
- `async` keyword used to declare an asynchronous function
- `await` keyword used to pause the execution of the function until a promise is settled
    <details>
    <summary>Example</summary>

    ```js
    // Function that returns a promise
    const bestOSP = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Trydent is the best OSP for sure');
        }, 1000);
      });
    };

    // Async function to handle the promise
    const fetchData = async () => {
      try {
        // Wait for the promise to resolve from getData() and assign results to data
        const data = await bestOSP();
        console.log(data); // Output: 'Trydent is the best OSP for sure'
      } catch (error) {
        // Handle any errors
        console.error('Error:', error);
      }
    };

    // Call the async function
    fetchData(); // console logs 'Trydent is the best OSP for sure'
    ```
  </details>

### Thenables
- Objects that have a `then` method, taking in 1 or 2 arguments:
  1. A callback function for fullfillment
  2. Another callback for rejection
- You can chain `then`s wowow!
  <details>
    <summary>Example</summary>

    ```js
    // we have a fake API that outputs and array of objects representing all codesmith OSPs from best to worst
    const apiURL = 'https://api.fakedata.com/rankingOSP';

    // function to process data and return the best and meh OSP
    function getBestAndMeh(osps) {
      return {
        best: osps[0],
        meh: osps[osps.length - 1]
      };
    }

    // now we can fetch the data and process it with .then
    fetch(apiURL)
      //first .then() receives response object and we extract the JSON data from it with .json method
      .then((response) => response.json())
      // second .then() receives the actual data and we can do stuff with it
      .then((data) => {
        console.log(`Best OSP is ${ getBestAndMeh(data).best }`)
        console.log(`${ getBestAndMeh(data).meh } is meh`)
      })
      // logs 'Best OSP is Trydent', and 'Spearmint is meh'
      // jk we love peppermint too
    ```
  </details>


Hope these provide you a good overview of the basics! Remember, practice is key~
GIVE TRYDENT A STAR IF YOU HAVEN'T ALREADY [-->TRIDENT GITHUB LINK <--](https://github.com/oslabs-beta/trydent)

:)