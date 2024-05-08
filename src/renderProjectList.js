//Render Project List, index of currently selected project

export { renderProjectList, index };

import { projectList } from "./newProject";
import { changeSelectedProject } from "./newTask";
import { renderTaskList } from "./renderTaskList";


//cache DOM

const projectListContainer = document.getElementById('project-list-container');


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


function selectProject(projectIndex) {
  const selectProjectButton = document.getElementById('project-button' + `${projectIndex}`);
  selectProjectButton.addEventListener('click', select);

  function select() {

    const selectedProjectTest = document.querySelector('.selected-project');
    if (selectedProjectTest == undefined) {

      const selectedProject = document.getElementById('project-button' + `${projectIndex}`);
      selectedProject.classList.add('selected-project');

      getArrayIndex();
      changeSelectedProject();
      renderTaskList();   //render task list when a project is selected
      
    } else {

      selectedProjectTest.classList.remove('selected-project');

      const selectedProject = document.getElementById('project-button' + `${projectIndex}`);
      selectedProject.classList.add('selected-project');

      getArrayIndex();
      changeSelectedProject();
      renderTaskList();   //render task list when a project is selected

    }
  }
}


function getArrayIndex() {
  const selectedProject = document.querySelector('.selected-project');
  const selectedProjectId = selectedProject.id;
  const selectedProjectIndex = selectedProjectId.slice(14);
  index = Number(selectedProjectIndex);
}


function activateProjectMisc() {
  const projectMiscParent = document.getElementById('project-list-container');

  if (projectMiscParent.hasChildNodes()) {
    projectMiscParent.firstElementChild.classList.add('selected-project');
  } else {
    return;   //if deleting last project
  }
}
