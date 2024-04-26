//Project Form

export { renderProjectForm };

import { addNewProjectToArray } from "./newProject";

import { renderProjectList } from './renderProjectList';


//initialize

//cache DOM
const projectFormContainer = document.getElementById('project-form-container');

//bind events

//functions
function renderProjectForm() {
  const form = document.createElement('form');
  form.id = 'form2';
  form.method = 'get';
  projectFormContainer.appendChild(form);

  const ul = document.createElement('ul');
  form.appendChild(ul);

  //title
  const li1 = document.createElement('li');
  ul.appendChild(li1);

  const label1 = document.createElement('label');
  label1.htmlFor = 'project-title';
  label1.textContent = "Title";
  li1.appendChild(label1);

  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.id = 'project-title';
  input1.name = 'project-title';
  input1.required = 'true';
  li1.appendChild(input1);

  //submit button
  const li2 = document.createElement('li');
  ul.appendChild(li2);

  const submitButton = document.createElement('button');
  submitButton.id = 'project-submit-button';
  submitButton.type = 'button';
  submitButton.textContent = "Submit";
  li2.appendChild(submitButton);

  addSubmitButtonEvent();
}

function addSubmitButtonEvent() {   //in function because button not in DOM when page loads
  const submitButton = document.getElementById('project-submit-button');
  submitButton.addEventListener('click', addNewProjectToArray);
  submitButton.addEventListener('click', closeForm);
  submitButton.addEventListener('click', renderProjectList);   //added here as cant add to newpr
}

function closeForm() {
  projectFormContainer.innerHTML = '';
}

