//New Task

export { addNewProjectToArray, projectList };

//initialize

//cache DOM

//bind events

//variables
const projectList = [];

//functions
function addNewProjectToArray() {
  const newProject = createNewProject();
  projectList.push(newProject);

  console.log(projectList);
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

  console.log(projectList);
}
addProjectMiscToArray();

