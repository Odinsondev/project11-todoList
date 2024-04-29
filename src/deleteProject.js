//Delete Project

export { deleteProject };

import { projectList } from "./newProject";
import { activeProjectIndex } from "./newTask";
import { activateProjectMisc } from "./newTask";
import { renderProjectList } from "./renderProjectList";
import { renderTaskList } from "./renderTaskList";


//initialize

//cache DOM

//bind events

//functions
function deleteProject() {
  projectList.splice(activeProjectIndex, 1);

  renderProjectList();

  activateProjectMisc();
  renderTaskList();
}