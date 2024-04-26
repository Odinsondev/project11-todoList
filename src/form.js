//Form

export { renderTaskForm };

import { addNewTaskToArray } from "./newTask";

//initialize

//cache DOM
const formContainer = document.getElementById('form-container');

//bind events

//functions
function renderTaskForm() {
  const form = document.createElement('form');
  form.id = 'form';
  form.method = 'get';
  formContainer.appendChild(form);

  const ul = document.createElement('ul');
  form.appendChild(ul);

  //title
  const li1 = document.createElement('li');
  ul.appendChild(li1);

  const label1 = document.createElement('label');
  label1.htmlFor = 'title';
  label1.textContent = "Title";
  li1.appendChild(label1);

  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.id = 'title';
  input1.name = 'title';
  input1.required = 'true';
  li1.appendChild(input1);


  //description
  const li2 = document.createElement('li');
  ul.appendChild(li2);

  const label2 = document.createElement('label');
  label2.htmlFor = 'description';
  label2.textContent = "Description";
  li2.appendChild(label2);

  const input2 = document.createElement('input');
  input2.type = 'text';
  input2.id = 'description';
  input2.name = 'description';
  li2.appendChild(input2);


  //dueDate
  const li3 = document.createElement('li');
  ul.appendChild(li3);

  const label3 = document.createElement('label');
  label3.htmlFor = 'due-date';
  label3.textContent = "Due Date";
  li3.appendChild(label3);

  const input3 = document.createElement('input');
  input3.type = 'text';
  input3.id = 'due-date';
  input3.name = 'dueDate';
  li3.appendChild(input3);


  //priority
  const li4 = document.createElement('li');
  ul.appendChild(li4);

  const label4 = document.createElement('label');
  label4.htmlFor = 'priority';
  label4.textContent = "Priority";
  li4.appendChild(label4);

  const input4 = document.createElement('input');
  input4.type = 'text';
  input4.id = 'priority';
  input4.name = 'priority';
  li4.appendChild(input4);


  //submit button
  const li5 = document.createElement('li');
  ul.appendChild(li5);

  const submitButton = document.createElement('button');
  submitButton.id = 'submit-button';
  submitButton.type = 'button';
  submitButton.textContent = "Submit";
  li5.appendChild(submitButton);


   //close form button
   const li6 = document.createElement('li');
   ul.appendChild(li6);
 
   const closeFormButton = document.createElement('button');
   closeFormButton.id = 'close-form-button';
   closeFormButton.type = 'button';
   closeFormButton.textContent = "Finished";
   li6.appendChild(closeFormButton);

  addSubmitButtonEvent();
  addCloseFormButtonEvent();
}

function addSubmitButtonEvent() {   //in function because button not in DOM when page loads
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', addNewTaskToArray);
}

function addCloseFormButtonEvent() {   //in function because button not in DOM when page loads
  const closeFormButton = document.getElementById('close-form-button');
  closeFormButton.addEventListener('click', closeForm);
}

function closeForm() {
  formContainer.innerHTML = '';
}

