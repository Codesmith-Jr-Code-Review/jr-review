document.addEventListener('DOMContentLoaded', () => {
  console.log('ToDo DOM loaded');
  const user = JSON.parse(localStorage.getItem('user'));
  const id = JSON.parse(localStorage.getItem('id'));
  const todos = JSON.parse(localStorage.getItem('todos'));
  console.log('This is the user:', user);
  console.log('This is the user id:', id);
  console.log('This is the todos:', todos);

  // Title Page with User's Name
  const title = document.createElement('h1');
  title.innerText = `ToDo List ${user}`;
  document.querySelector('#todoHome').appendChild(title);

  // Create Todo Form
  const createTodoDiv = document.createElement('div');
  createTodoDiv.setAttribute('id', 'createTodo');
  document.querySelector('#todoHome').appendChild(createTodoDiv);
  const createTodoLabel = document.createElement('h2');
  createTodoLabel.innerText = 'Create a New ToDo';
  document.querySelector('#createTodo').appendChild(createTodoLabel);
  const createTodoForm = document.createElement('form');
  createTodoForm.setAttribute('id', 'create-todo-form');
  document.querySelector('#createTodo').appendChild(createTodoForm);
  const todoName = document.createElement('input');
  todoName.setAttribute('type', 'text');
  todoName.setAttribute('id', 'create-todo-name');
  todoName.setAttribute('placeholder', 'ToDo Name');
  document.querySelector('#createTodo').appendChild(todoName);
  const todoDescription = document.createElement('input');
  todoDescription.setAttribute('type', 'text');
  todoDescription.setAttribute('id', 'create-todo-description');
  todoDescription.setAttribute('placeholder', 'ToDo Description');
  document.querySelector('#createTodo').appendChild(todoDescription);
  const todoSubmit = document.createElement('input');
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.setAttribute('id', 'create-todo-submit');
  todoSubmit.setAttribute('value', 'Submit');
  document.querySelector('#createTodo').appendChild(todoSubmit);

  // Function to add a task to the DOM
  function addTaskToDOM(task) {
    const todoItem = document.createElement('div');
    todoItem.setAttribute('class', 'todoItem');
    document.querySelector('#todoDiv').appendChild(todoItem);
    const todoName = document.createElement('h3');
    todoName.innerText = task.name;
    todoItem.appendChild(todoName);
    const todoDescription = document.createElement('p');
    todoDescription.innerText = task.description;
    todoItem.appendChild(todoDescription);
    const todoDelete = document.createElement('button');
    todoDelete.setAttribute('class', 'todoDelete');
    todoDelete.innerText = 'Delete';
    todoItem.appendChild(todoDelete);
  }

  const todoLabel = document.createElement('h2');
  todoLabel.innerText = 'Your ToDos';
  document.querySelector('#todoHome').appendChild(todoLabel);
  // Display Todos
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('id', 'todoDiv');
  document.querySelector('#todoHome').appendChild(todoDiv);
  todos.forEach((todo) => {
    addTaskToDOM(todo);
  });

  // Delete Todo
  document.querySelector('#todoDiv').addEventListener('click', (e) => {
    if (e.target.className === 'todoDelete') {
      const todoName = e.target.parentNode.childNodes[0].innerText;
      const todoDescription = e.target.parentNode.childNodes[1].innerText;
      console.log('to delete!', todoName, todoDescription);
      const todo = {
        name: todoName,
        description: todoDescription,
        id: id,
      };
      fetch('/api/todos/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('This is the data:', data);
          e.target.parentNode.remove();
        })
        .catch((err) => console.log('Error:', err));
    }
  });


  // Add todo to the user database
  document.querySelector('#create-todo-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const todoName = document.querySelector('#create-todo-name').value;
    const todoDescription = document.querySelector('#create-todo-description').value;
    const todo = {
      name: todoName,
      description: todoDescription,
      id: id,
    };
    fetch('/api/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('This is the data:', data);
        addTaskToDOM(todo);
      })
      .catch((err) => console.log('Error:', err));

  });
});

