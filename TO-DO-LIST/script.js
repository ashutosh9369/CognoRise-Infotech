const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let tasks = [];

if (localStorage.tasks) {
  tasks = JSON.parse(localStorage.tasks);
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({ text: task, completed: false });
    localStorage.tasks = JSON.stringify(tasks);
    renderTasks();
    taskInput.value = "";
  }
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.textContent = task.text;
    taskElement.dataset.index = index;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", editTask);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", deleteTask);

    taskElement.appendChild(editBtn);
    taskElement.appendChild(deleteBtn);
    taskList.appendChild(taskElement);
  });
}

function editTask(event) {
  const taskIndex = event.target.parentNode.dataset.index;
  const taskText = prompt("Edit task:", tasks[taskIndex].text);
  if (taskText) {
    tasks[taskIndex].text = taskText;
    localStorage.tasks = JSON.stringify(tasks);
    renderTasks();
  }
}

function deleteTask(event) {
  const taskIndex = event.target.parentNode.dataset.index;
  tasks.splice(taskIndex, 1);
  localStorage.tasks = JSON.stringify(tasks);
  renderTasks();
}
