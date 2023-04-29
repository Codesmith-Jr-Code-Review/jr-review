# ToDo List

This simple ToDo List application demonstrates basic DOM manipulation using vanilla JavasScript. Currently, there is functionality to create, read, and delete tasks. To run this application, please open the `todos.html` with Live Share!

## Files

### todo.html
- The main HTML file contains the structure of the application. It includes a `div` with the ID `todoHome` that will hold the content of the application. The `todo.js` file is included as a script at the end of the `body`.

### todo.css
- This file contains the styles for the application. It sets the background color, layout, and basic styling for the application elements.

### todo.js
- The JavaScript file handles the DOM manipulation and functionality of the application. It creates elements, appends them to the DOM, and handles user interactions, such as adding and deleting tasks.

## DOM Manipulation

- This application demonstrates how to create, modify, and delete elements in the DOM using vanilla JavaScript. The elements are created using `document.createElement()`, and attributes are set using `setAttribute()`. Elements are appended to their parent elements using `appendChild()`. Event listeners are added to handle user interactions.

## Challenges

### 1. Add an Edit Functionality
- [ ] Add an "Edit" button next to the "Delete" button for each task. When the user clicks the "Edit" button, the task name should be replaced with an input field pre-filled with the current task name. The user should be able to modify the task name and submit the changes. Update the local `todos` array and the DOM accordingly.

### 2. Create a Completed/Deleted Tasks Section
- [ ] Create a new section in the application to display completed or deleted tasks. When a task is marked as complete or deleted, move it to this new section. This can help users keep track of tasks they have completed or removed. You can add an additional button for marking tasks as complete, or you can use the existing "Delete" button for this purpose.

## Learning Resources
You should not go through all of these resources. These are just a variety of resources you can utilize should you need some different perspectives!

- [Mozilla Developer Network (MDN) - Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN - DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [MDN - DOM Enlightenment](http://www.domenlightenment.com/)
- [MDN - Using Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [W3Schools - JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [Eloquent JavaScript - Chapter 14: The Document Object Model](https://eloquentjavascript.net/14_dom.html)



