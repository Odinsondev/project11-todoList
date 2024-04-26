//Render Project List

export { renderProjectList };

import { projectList } from "./newProject";

//initialize

//cache DOM
const projectListContainer = document.getElementById('project-list-container');

//bind events


//variables

//functions
function renderProjectList() {

  deleteProjectList();

  for (let i = 0; i < projectList.length; i++) {
    const projectButton = document.createElement('button');
    projectButton.id = 'project-button' + `${i}`;
    projectButton.type = 'button';
    projectButton.textContent = projectList[i].title;
    projectListContainer.appendChild(projectButton);

    selectProject(i);
    }
}
renderProjectList();

function deleteProjectList() {
  projectListContainer.innerHTML = '';
}

function selectProject(number) {
  const selectProjectButton = document.getElementById('project-button' + `${number}`);
  selectProjectButton.addEventListener('click', select);


  function select() {

    const selectedProjectTest = document.querySelector('.selected-project');
    if (selectedProjectTest == undefined) {

      const selectedProject = document.getElementById('project-button' + `${number}`);
      selectedProject.classList.add('selected-project');

      getArrayIndex();
    } else {

      selectedProjectTest.classList.remove('selected-project');

      const selectedProject = document.getElementById('project-button' + `${number}`);
      selectedProject.classList.add('selected-project');

      getArrayIndex();
    }
  }
}

function getArrayIndex() {
  const selectedProject = document.querySelector('.selected-project');
  const selectedProjectIndex = selectedProject.id;
  const index = selectedProjectIndex.slice(14);
  console.log(index);
}

function changeSelectedProject() {
  
}