//New Task

export { addNewTaskToArray };

import { projectList } from "./newProject";

//initialize

//cache DOM
const formContainer = document.getElementById('form-container');

//bind events

//variables
const taskList = projectList[0].array;   //initially pics misc array for active project



//functions
function addNewTaskToArray() {   ///too many tasks!!!!!!!!!!!!!!
  const newTask = createNewTask();
  taskList.push(newTask);

  console.log(taskList);

  renderNewTaskNotification();
  clearForm();
}


function createNewTask() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;

  const task = {};
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.priority = priority;

  return task;
}

function clearForm() {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('priority');

  title.value = '';
  description.value = '';
  dueDate.value = '';
  priority.value = '';
}

function renderNewTaskNotification() {
  const newTaskTitle = taskList[taskList.length - 1].title;

  const newTaskNotification = document.createElement('p');
  newTaskNotification.textContent = "New task Added: " + `${newTaskTitle}`;
  formContainer.appendChild(newTaskNotification);
}

