function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'task';  // Use class instead of id
  taskItem.innerHTML = `
  <span class="inp" onclick="toggleDone(this)">${taskInput.value}</span>
    <div class="innerHTml">
    <span class="doneBtn" onclick="toggleDoneStatus(this)">✔</span>
    <span class="deleteBtn" onclick="deleteTask(this)">✖</span>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';
}

function toggleDone(element) {
  element.classList.toggle('done');
}

function toggleDoneStatus(element) {
  const taskItem = element.parentNode.parentNode; // Adjusted to go up two levels in the DOM hierarchy
  const taskText = taskItem.querySelector('.inp');
  taskText.classList.toggle('done');
  taskItem.style.backgroundColor = '#dff0d8';
}

function deleteTask(element) {
  const taskList = document.getElementById('taskList');
  const taskItem = element.closest('.task');
  taskList.removeChild(taskItem);
}
