//Render Task List

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

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = /* "Task: " +  */taskList[i].title;
    topDiv.appendChild(taskTitle);

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-due-date');
    taskDueDate.textContent = /* "Due Date: " +  */taskList[i].dueDate;
    topDiv.appendChild(taskDueDate);


    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = /* "Description: " +  */taskList[i].description;
    task.appendChild(taskDescription);

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
