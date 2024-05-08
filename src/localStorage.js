//Store data in local storage

export { addToLocalStorage };

import { projectList } from "./newProject";


//functions

function addToLocalStorage() {
  console.log('Updating local storage');

  const stringifiedDataToStore = JSON.stringify(projectList);

  localStorage.storedProjectList = stringifiedDataToStore;
}
