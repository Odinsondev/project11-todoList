//Index

import './normalize.css';
import './style.css';
//import other stylesheets

import { renderProjectForm } from './projectForm';
import { renderTaskForm } from './taskForm';

/* import pictureName from './imagedDirectory/imageName'; */

//initialize

//cache DOM
const newProjectButton = document.getElementById('new-project-button');
const newTaskButton = document.getElementById('new-task-button');

//bind events
newProjectButton.addEventListener('click', renderProjectForm);
newTaskButton.addEventListener('click', renderTaskForm);

//functions



//rerender tasks after changing project
//create delete project and delete task functions
//idea - add organize by due date function!!!!!!!!!!!!!!!!!!!