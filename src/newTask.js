//New Task

export {
  addNewTaskToArray,
  changeSelectedProject,
  taskList,
  activeProjectIndex,
  activateProjectMisc,
  createNewTask
};

import { projectList } from "./newProject";
import { index } from "./renderProjectList";
import { addToLocalStorage } from "./localStorage";
//initialize

//cache DOM
const formContainer = document.getElementById('form-container');

//bind events

//variables
let activeProjectIndex = 0;   //initially selects misc for active project
let taskList = '';

//functions
function activateProject() {   //moving to renderProjects module causes issues
  taskList = projectList[activeProjectIndex].array;
}
activateProject();


function changeSelectedProject() {   //moving to renderProjects module causes issues
  activeProjectIndex = index;
  activateProject();
}

function activateProjectMisc() {   //after deleting a project
  activeProjectIndex = 0;
  activateProject();
}


function addNewTaskToArray() {   ///too many tasks!!!!!!!!!!!!!!
  const newTask = createNewTask();
  taskList.push(newTask);

  renderNewTaskNotification();
  clearForm();

  addToLocalStorage();
}


function createNewTask() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;

  let priority = '';
  if (document.getElementById('low-priority').checked == true) {
    priority = document.getElementById('low-priority').value;
  } else if (document.getElementById('normal-priority').checked == true) {
    priority = document.getElementById('normal-priority').value;
  } else if (document.getElementById('high-priority').checked == true) {
    priority = document.getElementById('high-priority').value;
  } else {}

  const task = {};
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.priority = priority;
  task.status = 'not complete';

  return task;
}

function createDemoTask() {   //adds a demo task to misc tasklist
  if (localStorage.getItem('storedProjectList') === null) {
    const demoTask = {};
    demoTask.title = "Get Back to the Future";
    demoTask.description = "Harness the power of lightning to power the DeLorean";
    demoTask.dueDate = "1955-11-05";
    demoTask.priority = "normal";

    taskList.push(demoTask);
  } else {
    return;   //if existing taskList has been retrieved from localStorage
  }
}
createDemoTask();

function clearForm() {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('normal-priority');

  title.value = '';
  description.value = '';
  dueDate.value = '';
  priority.checked = true;
}

function renderNewTaskNotification() {
  const newTaskTitle = taskList[taskList.length - 1].title;

  const newTaskNotification = document.createElement('p');
  newTaskNotification.textContent = "New task Added: " + `${newTaskTitle}`;
  formContainer.appendChild(newTaskNotification);
}

