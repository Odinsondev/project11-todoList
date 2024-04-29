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



//project form layout
//create delete project and delete task functions
//create edit task function???

//idea - add organize by due date function!!!!!!!!!!!!!!!!!!!

//bug - required attribute not working as button type is button
//bug - make sure long titles and descriptions don't alter the layout, add scroll or hide