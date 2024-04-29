//Index

import './normalize.css';
import './style.css';
//import other stylesheets

import { renderProjectForm } from './projectForm';
import { deleteProject } from './deleteProject';
import { renderTaskForm } from './taskForm';

/* import pictureName from './imagedDirectory/imageName'; */

//initialize

//cache DOM
const newProjectButton = document.getElementById('new-project-button');
const deleteProjectButton = document.getElementById('delete-project-button');

const newTaskButton = document.getElementById('new-task-button');

//bind events
newProjectButton.addEventListener('click', renderProjectForm);
deleteProjectButton.addEventListener('click', deleteProject);

newTaskButton.addEventListener('click', renderTaskForm);

//functions



//create delete task function
//create edit task function
//add tickbox to tasks
//local storage

//maybe - rename project

//idea - add organize by due date function!

//bug - required attribute not working as button type is button
//bug - make sure long titles and descriptions don't alter the layout, add scroll or hide