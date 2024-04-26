//Index

import './normalize.css';
import './style.css';
//import other stylesheets

import { renderProjectForm } from './projectForm';
import { renderTaskForm } from './form';

/* import pictureName from './imagedDirectory/imageName'; */

//initialize

//cache DOM
const newProjectButton = document.getElementById('new-project-button');
const newTaskButton = document.getElementById('new-task-button');

//bind events
newProjectButton.addEventListener('click', renderProjectForm);
newTaskButton.addEventListener('click', renderTaskForm);

//functions


//create   add project   function
//make sure new task form cant be opened twice
//render tasks
//create delete project and delete task functions
//idea - add organize by due date function!!!!!!!!!!!!!!!!!!!