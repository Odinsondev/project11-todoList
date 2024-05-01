//Render task list, Delete task list, Delete task, Edit task

export { renderTaskList };

import { taskList } from "./newTask";


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

    //title
    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = taskList[i].title;
    topDiv.appendChild(taskTitle);

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
    console.log(taskList[i].priority);
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
  }
}

function editTask(number) {
  const taskEditButton = document.getElementById('task-edit-button' + `${number}`);
  taskEditButton.addEventListener('click', editSelectedTask);

  function editSelectedTask() {
    console.log(number);
  }


}