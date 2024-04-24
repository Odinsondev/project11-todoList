//Index

import './normalize.css';
import './style.css';
//import other stylesheets

/* import functionName from './javascriptFile'; */
import renderForm from './form';
import { addSubmitButtonEvent } from './newTask';


/* import createNewTaskObject from './newTask';
 */
/* import pictureName from './imagedDirectory/imageName'; */


//initialize

//cache DOM
const newTaskButton = document.getElementById('newTaskButton');

//bind events
newTaskButton.addEventListener('click', renderForm);
newTaskButton.addEventListener('click', addSubmitButtonEvent);

//functions



//idea - add organize by due date function!!!!!!!!!!!!!!!!!!!