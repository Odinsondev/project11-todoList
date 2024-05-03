//Index

export { addToLocalStorage };

import { projectList } from "./newProject";

//initialize

//cache DOM

//bind events

//functions
function addToLocalStorage() {
  console.log('updating local storage');

  const stringifiedDataToStore = JSON.stringify(projectList);

  localStorage.storedProjectList = stringifiedDataToStore;
}
