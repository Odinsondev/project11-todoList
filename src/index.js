//Index

import './normalize.css';
import './style.css';

import { renderProjectForm } from './projectForm';
import { deleteProject } from './deleteProject';
import { renderTaskForm } from './taskForm';


//cache DOM

const newProjectButton = document.getElementById('new-project-button');
const deleteProjectButton = document.getElementById('delete-project-button');

const newTaskButton = document.getElementById('new-task-button');


//bind events

newProjectButton.addEventListener('click', renderProjectForm);
deleteProjectButton.addEventListener('click', deleteProject);

newTaskButton.addEventListener('click', renderTaskForm);


//Bug - Task status reverts after editing task
//Bug - Error message in the console upon deleting the last project

//Improve code readability and notes
