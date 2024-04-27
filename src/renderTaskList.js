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

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = "Task: " + taskList[i].title;
    task.appendChild(taskTitle);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = "Description: " + taskList[i].description;
    task.appendChild(taskDescription);

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('task-due-date');
    taskDueDate.textContent = "Due Date: " + taskList[i].dueDate;
    task.appendChild(taskDueDate);

    const taskPriority = document.createElement('p');
    taskPriority.classList.add('task-priority');
    taskPriority.textContent = "Priority: " + taskList[i].priority;
    task.appendChild(taskPriority);
  }
}
renderTaskList();

function deleteTaskList() {
  taskListContainer.innerHTML = '';
}
