import { Project } from './project';
import { TodoList } from './todo-list';

export const ProjectList = (() => {
  const projects = [];

  const addProject = (project) => {
    const isInLIst = checkProject(project);
    if (isInLIst)
      return `The project "${project.data.title}" already exist in the project list, use another name.`;
    else return projects.push(project);
  };
  const deleteProject = (projectTitle) => {
    const foundedProject = projects.find(
      (project) => project.data.title === projectTitle
    );

    if (foundedProject)
      return projects.splice(projects.indexOf(foundedProject), 1);
    else return;
  };
  const getProject = (projectTitle) => {
    const foundedProject = projects.find(
      // (project) => console.log(project.data.title, projectTitle)
      (project) => project.data.title === projectTitle
    );

    if (foundedProject) return foundedProject;
    else return Error('Project not founded');
  };

  const checkProject = (project) => {
    const { data } = project;
    const { title } = data;

    const foundedProject = projects.find(
      (project) => project.data.title === title
    );

    return foundedProject;
  };
  const getAllProjects = () => projects;

  const setProjectsFromLS = (projects = []) => {
    for (const project of projects) {
      const { todos, data } = project;
      const todoList = TodoList(todos);
      const obj = Project({ ...data }, todoList);

      addProject(obj);
    }
  };

  return {
    addProject,
    deleteProject,
    getProject,
    getAllProjects,
    setProjectsFromLS,
  };
})();
