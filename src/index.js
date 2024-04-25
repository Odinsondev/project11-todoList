//Index

import './normalize.css';
import './style.css';
//import other stylesheets

import { renderForm } from './form';
/* import { addSubmitButtonEvent } from './form';
 */

/* import pictureName from './imagedDirectory/imageName'; */


//initialize

//cache DOM
const newTaskButton = document.getElementById('newTaskButton');

//bind events
newTaskButton.addEventListener('click', renderForm);
/* newTaskButton.addEventListener('click', addSubmitButtonEvent);
 */
//functions


//create   add project   function
//make sure new task form cant be opened twice
//render tasks
//create delete project and delete task functions
//idea - add organize by due date function!!!!!!!!!!!!!!!!!!!