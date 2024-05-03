//New Task

export { addNewProjectToArray, projectList };

import { addToLocalStorage } from "./localStorage";


//initialize

//cache DOM

//bind events

//variables
let projectList = [];


//functions
function getFromLocalStorage() {
  console.log('connecting to local storage');

  if (localStorage.getItem('storedProjectList') === null) {
    console.log('no data stored');

    addProjectMiscToArray();

  } else {
    console.log('retrieving data');

    const retrievedStringifiedData = localStorage.getItem('storedProjectList');
    const parsedData = JSON.parse(retrievedStringifiedData);

    projectList = parsedData;
  }
}
getFromLocalStorage();


function addNewProjectToArray() {
  const newProject = createNewProject();
  projectList.push(newProject);
  
  addToLocalStorage();
}


function createNewProject() {
  const title = document.getElementById('project-title').value;

  const project = {};
  project.title = title;
  project.array = [];

  return project;
}


function addProjectMiscToArray() {   //automatically create the first project
  const project1 = {};
  project1.title = "Miscellanious Tasks"
  project1.array = [];

  projectList.push(project1);
}
