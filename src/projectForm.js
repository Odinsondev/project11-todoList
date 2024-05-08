//Project Form

export { renderProjectForm };

import { addNewProjectToArray } from "./newProject";
import { renderProjectList } from './renderProjectList';


//cache DOM

const projectFormContainer = document.getElementById('project-form-container');


//functions

function renderProjectForm() {

  const projectFormTest = document.getElementById('new-project-form');
  if (projectFormTest == undefined) {   //to check if form already open

    const form = document.createElement('form');
    form.id = 'new-project-form';
    form.method = 'get';
    projectFormContainer.appendChild(form);

    const ul = document.createElement('ul');
    form.appendChild(ul);

    //title
    const li1 = document.createElement('li');
    ul.appendChild(li1);

    const label1 = document.createElement('label');
    label1.htmlFor = 'project-title';
    label1.textContent = "Title:";
    li1.appendChild(label1);

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.id = 'project-title';
    input1.name = 'project-title';
    input1.required = 'true';
    li1.appendChild(input1);


    //buttons
    const li2 = document.createElement('li');
    li2.id = 'project-li2'
    ul.appendChild(li2);

    //submit button
    const submitButton = document.createElement('button');
    submitButton.id = 'project-submit-button';
    submitButton.type = 'button';
    submitButton.textContent = "Submit";
    li2.appendChild(submitButton);

    //cancel button
    const cancelButton = document.createElement('button');
    cancelButton.id = 'project-cancel-button';
    cancelButton.type = 'button';
    cancelButton.textContent = "Cancel";
    li2.appendChild(cancelButton);

    addSubmitButtonEvent();
    addCancelButtonEvent();
  } else {
    return;   //if form already open
  }
}


function addSubmitButtonEvent() {   //in function because button not in DOM when page loads
  const submitButton = document.getElementById('project-submit-button');
  submitButton.addEventListener('click', addNewProjectToArray);
  submitButton.addEventListener('click', closeForm);
  submitButton.addEventListener('click', renderProjectList);   //added here as cant add to newpr
}


function addCancelButtonEvent() {   //in function because button not in DOM when page loads
  const cancelFormButton = document.getElementById('project-cancel-button');
  cancelFormButton.addEventListener('click', closeForm);
}


function closeForm() {
  projectFormContainer.innerHTML = '';
}
