//Render Project List

export { renderProjectList, index };

import { projectList } from "./newProject";

import { changeSelectedProject } from "./newTask";

//initialize

//cache DOM
const projectListContainer = document.getElementById('project-list-container');

//bind events


//variables
let index = '';

//functions
function renderProjectList() {

  deleteProjectList();

  for (let i = 0; i < projectList.length; i++) {
    const projectButton = document.createElement('button');
    projectButton.id = 'project-button' + `${i}`;
    projectButton.classList.add('project-button');
    projectButton.type = 'button';
    projectButton.textContent = projectList[i].title;
    projectListContainer.appendChild(projectButton);

    selectProject(i);   //to enable clicking and selecting newly rendered project buttons
    }
  activateProjectMisc();   //activates misc after every projectList render
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
      changeSelectedProject();
      
    } else {

      selectedProjectTest.classList.remove('selected-project');

      const selectedProject = document.getElementById('project-button' + `${number}`);
      selectedProject.classList.add('selected-project');

      getArrayIndex();
      changeSelectedProject();
    }
  }
}

function getArrayIndex() {
  const selectedProject = document.querySelector('.selected-project');
  const selectedProjectId = selectedProject.id;
  const selectedProjectIndex = selectedProjectId.slice(14);
  index = Number(selectedProjectIndex);
  console.log(index);
}

function activateProjectMisc() {
  const projectMiscParent = document.getElementById('project-list-container');
  projectMiscParent.firstElementChild.classList.add('selected-project');
}