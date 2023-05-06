# Hook Example

This project demonstrates the usage of React hooks, specifically useState and useContext, to create a simple counter application with a toggleable background color. The application consists of two components: Counter and ColorToggle. The Counter component displays the current count and increments it when a button is clicked. The ColorToggle component changes the background color of the application when a button is clicked.

## Project Structure
```
.
├── src
│   ├── App.js                   # Main application component
│   ├── components
│   │   ├── Counter.js           # Counter component that handles incrementing the count
│   │   └── ColorToggle.js       # ColorToggle component that toggles the background color
│   ├── index.js                 # Application entry point
│   └── styles.css               # Styles for the application
├── .gitignore                   # Specifies files to be ignored by Git
├── package.json                 # Lists dependencies and project information
├── package-lock.json            # Automatically generated file with exact dependency versions
└── README.md                    # This README file

```
## Getting Started

To run the project, follow these steps:
1. Change to the project directory:
  ```
  cd week-2-review/react-hooks/hook-example
  ```
2. Install the dependencies:
  ```
  npm install
  ```
3. Start the development server:
  ```
  npm start
  ```
4. Open your browser and go to http://localhost:3000. You should now see the application running.
5. To stop the development server, press Ctrl + C in the terminal.

