//New Task

export { addSubmitButtonEvent };

//initialize
const taskList = [];


//cache DOM

//bind events

//functions
function addSubmitButtonEvent() {   //in function as button not in DOM when page loads
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', createNewTask);
  submitButton.addEventListener('click', addTaskToArray);
  submitButton.addEventListener('click', test);

}

function createNewTask() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;

  const task = {};
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.priority = priority;

  return task;
}

function addTaskToArray() {
  const newTask = createNewTask();
  taskList.push(newTask);

  console.log(taskList);
}

function test() {
  const del = document.getElementById('form');
  del.innerHTML = '';
}

