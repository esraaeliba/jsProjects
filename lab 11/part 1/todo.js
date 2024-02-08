// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task!');
      return;
    }
  
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
      <span class="inp" onclick="toggleDone(this)">${taskInput.value}</span>
      <div class="innerHTml">
        <span class="doneBtn" onclick="toggleDoneStatus(this)">✔</span>
        <span class="deleteBtn" onclick="deleteTask(this)">✖</span>
      </div>
    `;
  
    taskList.appendChild(taskItem);
    
    // Save task to local storage after appending to the list
    saveTaskToLocalStorage(taskInput.value);
    
    // Clear the input value after adding the task
    taskInput.value = '';
  }
  
  
  // Function to toggle task done status
  function toggleDoneStatus(element) {
    const taskItem = element.parentNode.parentNode;
    const taskText = taskItem.querySelector('.inp');
    taskText.classList.toggle('done');
    taskItem.style.backgroundColor = '#dff0d8';
  
    // Update task status in local storage
    updateTaskStatusInLocalStorage(taskText.textContent);
  }
  
  // Function to delete a task
  function deleteTask(element) {
    const taskList = document.getElementById('taskList');
    const taskItem = element.closest('.task');
    taskList.removeChild(taskItem);
  
    // Remove task from local storage
    removeTaskFromLocalStorage(taskItem.querySelector('.inp').textContent);
  }
  
  // Function to save task to local storage
  function saveTaskToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Function to update task status in local storage
  function updateTaskStatusInLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((storedTask, index) => {
      if (storedTask === task) {
        tasks.splice(index, 1);
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  }
  
  // Function to remove task from local storage
  function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((storedTask, index) => {
      if (storedTask === task) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  }
  function populateTaskListFromLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    tasks.forEach(task => {
      const taskItem = document.createElement('li');
      taskItem.className = 'task';
      taskItem.innerHTML = `
        <span class="inp" onclick="toggleDone(this)">${task}</span>
        <div class="innerHTml">
          <span class="doneBtn" onclick="toggleDoneStatus(this)">✔</span>
          <span class="deleteBtn" onclick="deleteTask(this)">✖</span>
        </div>
      `;
      taskList.appendChild(taskItem);
    });
  }
  
  // Add event listener for DOMContentLoaded to populate the task list from local storage
  document.addEventListener('DOMContentLoaded', populateTaskListFromLocalStorage);
  