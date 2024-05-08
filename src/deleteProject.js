//Delete Project

export { deleteProject };

import { projectList } from "./newProject";
import { activeProjectIndex } from "./newTask";
import { activateProjectMisc } from "./newTask";
import { renderProjectList } from "./renderProjectList";
import { renderTaskList } from "./renderTaskList";
import { addToLocalStorage } from "./localStorage";


//functions

function deleteProject() {
  projectList.splice(activeProjectIndex, 1);

  renderProjectList();
  activateProjectMisc();
  renderTaskList();
  addToLocalStorage();
}
