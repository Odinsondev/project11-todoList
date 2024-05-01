//editTask - all copied from taskForm.js
//maybe move delete task here as well


//import i from renderTaskList
//render form with current input in input field
//on submit delete old object and add new object to array, then render
//remove finised button

export { renderEditTaskForm };

import { addNewTaskToArray } from "./newTask";
import { renderTaskList } from "./renderTaskList";

//initialize

//cache DOM
const taskListContainer = document.getElementById('task-list-container');
const formContainer = document.getElementById('form-container');

//bind events

//functions
function deleteTaskList() {
  taskListContainer.innerHTML = '';
}

function renderEditTaskForm() {

  deleteTaskList();   //clear content2 for the form

  const taskFormTest = document.getElementById('new-task-form');
  if (taskFormTest == undefined) {   //to check if form already open

    const form = document.createElement('form');
    form.id = 'new-task-form';
    form.method = 'get';
    formContainer.appendChild(form);

    const ul = document.createElement('ul');
    form.appendChild(ul);


    //title and due date
    const li1 = document.createElement('li');
    li1.id = 'li1';
    ul.appendChild(li1);

    //title
    const titleDiv = document.createElement('div');
    titleDiv.id = 'title-div';
    li1.appendChild(titleDiv);

    const label1 = document.createElement('label');
    label1.htmlFor = 'title';
    label1.textContent = "Title:";
    titleDiv.appendChild(label1);

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.id = 'title';
    input1.name = 'title';
    input1.placeholder = '     What should I do? (Required)'
    input1.required = 'true';
    titleDiv.appendChild(input1);

    //dueDate
    const dateDiv = document.createElement('div');
    dateDiv.id = 'date-div';
    li1.appendChild(dateDiv);

    const label2 = document.createElement('label');
    label2.htmlFor = 'due-date';
    label2.textContent = "Due Date:";
    dateDiv.appendChild(label2);

    const input2 = document.createElement('input');
    input2.type = 'date';
    input2.id = 'due-date';
    input2.name = 'due-date';
    dateDiv.appendChild(input2);


    //description
    const li2 = document.createElement('li');
    li2.id = 'li2';
    ul.appendChild(li2);

    const label3 = document.createElement('label');
    label3.htmlFor = 'description';
    label3.textContent = "Description:";
    li2.appendChild(label3);

    const input3 = document.createElement('textarea');
    input3.id = 'description';
    input3.name = 'description';
    input3.rows = '3';
    input3.placeholder = '\n     How and Why should I do it? (Optional)';
    li2.appendChild(input3);

    //no li3


    //priority
    const li4 = document.createElement('li');
    li4.id = 'li4';
    ul.appendChild(li4);

    const priorityFieldset = document.createElement('fieldset');
    priorityFieldset.id = 'priority-fieldset';
    li4.appendChild(priorityFieldset);

    const priorityLegend = document.createElement('legend');
    priorityLegend.textContent = 'Priority:';
    priorityFieldset.appendChild(priorityLegend);

    //low prio
    const lowPrioDiv = document.createElement('div');
    lowPrioDiv.id = 'low-prio-div'
    priorityFieldset.appendChild(lowPrioDiv);

    const label4 = document.createElement('label');
    label4.htmlFor = 'low-priority';
    label4.textContent = "Low";
    lowPrioDiv.appendChild(label4);

    const input4 = document.createElement('input');
    input4.type = 'radio';
    input4.id = 'low-priority';
    input4.name = 'priority';
    input4.value = 'low'
    lowPrioDiv.appendChild(input4);

    //norm prio
    const normPrioDiv = document.createElement('div');
    normPrioDiv.id = 'norm-prio-div';
    priorityFieldset.appendChild(normPrioDiv);

    const label5 = document.createElement('label');
    label5.htmlFor = 'normal-priority';
    label5.textContent = "Normal";
    normPrioDiv.appendChild(label5);

    const input5 = document.createElement('input');
    input5.type = 'radio';
    input5.id = 'normal-priority';
    input5.name = 'priority';
    input5.value = 'normal'
    input5.checked = true
    normPrioDiv.appendChild(input5);

    //high prio
    const highPrioDiv = document.createElement('div');
    highPrioDiv.id = 'high-prio-div';
    priorityFieldset.appendChild(highPrioDiv);

    const label6 = document.createElement('label');
    label6.htmlFor = 'high-priority';
    label6.textContent = "High";
    highPrioDiv.appendChild(label6);

    const input6 = document.createElement('input');
    input6.type = 'radio';
    input6.id = 'high-priority';
    input6.name = 'priority';
    input6.value = 'high'
    highPrioDiv.appendChild(input6);


    //buttons
    const li5 = document.createElement('li');
    li5.id = 'li5';
    ul.appendChild(li5);

    //submit button
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.type = 'button';
    submitButton.textContent = "Submit";
    li5.appendChild(submitButton);
  
    const closeFormButton = document.createElement('button');
    closeFormButton.id = 'close-form-button';
    closeFormButton.type = 'button';
    closeFormButton.textContent = "Finished";
    li5.appendChild(closeFormButton);

    addSubmitButtonEvent();
    addCloseFormButtonEvent();
  } else {
    return;   //if form already open
  }
}

function addSubmitButtonEvent() {   //in function because button not in DOM when page loads
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', addNewTaskToArray);
}

function addCloseFormButtonEvent() {   //in function because button not in DOM when page loads
  const closeFormButton = document.getElementById('close-form-button');
  closeFormButton.addEventListener('click', closeForm);
  closeFormButton.addEventListener('click', renderTaskList);
}

function closeForm() {
  formContainer.innerHTML = '';
}
