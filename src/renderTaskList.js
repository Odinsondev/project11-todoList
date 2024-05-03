//Render task list, Delete task list, Delete task, Edit task

export { renderTaskList };

import { taskList } from "./newTask";

import { renderEditTaskForm } from "./editTask";

import { addToLocalStorage } from "./localStorage";


//initialize

//cache DOM
const taskListContainer = document.getElementById('task-list-container');

//bind events

//variables

//functions
function renderTaskList() {

  deleteTaskList();

  for (let i = 0; i < taskList.length; i++) {
    const task = document.createElement('div');
    task.classList.add('task');
    taskListContainer.appendChild(task);

    const topDiv = document.createElement('div');
    topDiv.classList.add('task-top-div');
    task.appendChild(topDiv);


    const topLeftDiv = document.createElement('div');
    topLeftDiv.classList.add('task-top-left-div');
    topDiv.appendChild(topLeftDiv);

    //checkbox
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.id = 'task-checkbox' + `${i}`;
    if (taskList[i].status == 'not complete') {
      taskCheckbox.checked = false;
    } else if (taskList[i].status == 'complete') {
      taskCheckbox.checked = true;
    }
    topLeftDiv.appendChild(taskCheckbox);
    changeTaskStatus(i);

    //title
    const taskTitle = document.createElement('p');
    taskTitle.id = 'task-title' + `${i}`;
    taskTitle.classList.add('task-title');
    taskTitle.textContent = taskList[i].title;
    if (taskList[i].status == 'complete') {
      taskTitle.classList.add('completed');
    }
    topLeftDiv.appendChild(taskTitle);


    const topRightDiv = document.createElement('div');
    topRightDiv.classList.add('task-top-right-div');
    topDiv.appendChild(topRightDiv);

    //due date
    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-due-date');
    taskDueDate.textContent = taskList[i].dueDate;
    topRightDiv.appendChild(taskDueDate);

    //edit task
    const taskEditButton = document.createElement('button');
    taskEditButton.id = 'task-edit-button' + `${i}`;
    taskEditButton.classList.add('task-edit-button');
    topRightDiv.appendChild(taskEditButton);
    editTask(i);

    //delete task
    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.id = 'task-delete-button' + `${i}`;
    taskDeleteButton.classList.add('task-delete-button');
    topRightDiv.appendChild(taskDeleteButton);
    deleteTask(i);


    //description
    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = taskList[i].description;
    task.appendChild(taskDescription);

    //priority
    if (taskList[i].priority == 'low') {
      task.style.backgroundColor = 'rgb(210, 218, 196)';
    } else if (taskList[i].priority == 'normal') {
      task.style.backgroundColor = 'rgb(190, 223, 140)';
    } else if (taskList[i].priority == 'high') {
      task.style.backgroundColor = 'rgb(239, 220, 112)';
    }
  }
}
renderTaskList();

function deleteTaskList() {
  taskListContainer.innerHTML = '';
}

function deleteTask(number) {
  const taskDeleteButton = document.getElementById('task-delete-button' + `${number}`);
  taskDeleteButton.addEventListener('click', deleteSelectedTask);

  function deleteSelectedTask() {
    taskList.splice(number, 1);

    renderTaskList();

    addToLocalStorage();
  }
}

function editTask(number) {
  const taskEditButton = document.getElementById('task-edit-button' + `${number}`);
  taskEditButton.addEventListener('click', editSelectedTask);

  function editSelectedTask() {
    renderEditTaskForm(number);
  }
}

function changeTaskStatus(taskIndex) {
  const taskStatusCheckbox = document.getElementById('task-checkbox' + `${taskIndex}`);
  taskStatusCheckbox.addEventListener('click', changeStatus);

  function changeStatus() {
    const taskTitle = document.getElementById('task-title' + `${taskIndex}`);

    if (taskStatusCheckbox.checked == false) {
      taskList[taskIndex].status = 'not complete';
      taskTitle.classList.remove('completed');
      addToLocalStorage();
    } else if (taskStatusCheckbox.checked == true) {
      taskList[taskIndex].status = 'complete';
      taskTitle.classList.add('completed');
      addToLocalStorage();
    }
  }
}