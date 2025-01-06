//New project, project list, get data from local storage

export { addNewProjectToArray, projectList };

import { addToLocalStorage } from './localStorage';

//variables

let projectList = [];

//functions

function getFromLocalStorage() {
  console.log('Connecting to local storage');

  if (localStorage.getItem('storedProjectList') === null) {
    console.log('No data stored');

    addProjectMiscToArray();
  } else {
    console.log('Retrieving data');

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

function addProjectMiscToArray() {
  //automatically create the first project
  const project1 = {};
  project1.title = 'Miscellanious Tasks';
  project1.array = [];

  projectList.push(project1);
}
