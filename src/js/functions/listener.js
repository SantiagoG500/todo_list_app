import { MainContent } from '../ui/main-content';
import { Modal } from '../ui/modal';
import { Nav } from '../ui/nav';
import { TodoContainer } from '../ui/todo-container';
import { Project } from './project';
import { ProjectList } from './project-list';
import { Todo } from './todo';
import { LocalStorage } from './local-storage';

export const Listener = (e) => {
  const target = e.target;
  const dataAction = target.dataset.action;
  const actions = ListererActions;

  if (!dataAction) return;

  // if (dataAction === 'open project') actions['open project'](target);

  if (actions[dataAction]) actions[dataAction](e);
  else return console.log('Action not founded');
};

const ListererActions = (() => {
  const addProject = () => {
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;

    const newProject = Project({ title, description });
    const projects = ProjectList.getAllProjects();

    const foundedProject = projects.find(
      (project) => project.data.title === title
    );

    if (title == '' || description == '')
      return Modal.showMessage.fillAllFields();

    // Crate database and load the projects in it
    if (!foundedProject) {
      ProjectList.addProject(newProject);
    } else return Modal.showMessage.projectFounded(title);

    MainContent.loadContent(newProject);

    // LocalStorage.(projects);
    LocalStorage.setProjectList(projects);
    Nav.loadProjects(projects);
    Modal.destroyModal();
    console.log(projects);
  };
  const openProject = (e) => {
    const target = e.target;
    const dataProjectName = target.dataset.projectName;
    const project = ProjectList.getProject(dataProjectName);

    if (project instanceof Error) return console.log('project not founded');

    // here ogoes the project info

    MainContent.loadContent(project);
  };

  const addTodo = () => {
    const projectName = document.getElementById('main-content').dataset.project;

    const todoTitle = document.getElementById('todo-name').value;
    const todoDescription = document.getElementById('todo-description').value;
    const dueDate = document.getElementById('todo-date').value;
    const priority = document.getElementById('priority').value;
    const status = document.getElementById('status').value;

    const project = ProjectList.getProject(projectName);
    const projects = ProjectList.getAllProjects();
    const { todoList } = project;

    const condition = todoTitle === '' || todoDescription === '';
    const foundedTodo = todoList.utils.getTodo(todoTitle);

    if (condition) return Modal.showMessage.fillAllFields();

    if (typeof foundedTodo !== 'string')
      return Modal.showMessage.todoFounded(todoTitle);

    let newTodo = {};
    try {
      newTodo = Todo({
        title: todoTitle,
        description: todoDescription,
        dueDate: dueDate,
        priority: priority,
        status: status,
      });
    } catch (error) {
      Modal.showMessage.customError(error);
      return;
    }

    todoList.utils.addTodo(newTodo);
    Modal.destroyModal();

    LocalStorage.setProjectList(projects);
    TodoContainer.loadContent(project);
    console.log(project);
  };
  const editTodo = () => {
    const mainContent = document.getElementById('main-content');
    const dataProject = mainContent.dataset.project;
    const modal = document.getElementById('modal');
    const dataTodo = modal.dataset.todo;

    const projectName = document.getElementById('main-content').dataset.project;

    const title = document.getElementById('todo-name').value;
    const description = document.getElementById('todo-description').value;
    const dueDate = document.getElementById('todo-date').value;
    const priority = document.getElementById('priority').value;
    const status = document.getElementById('status').value;

    const propGroup = {
      title,
      description,
      projectName,
      dueDate,
      priority,
      status,
    };

    const currentProject = ProjectList.getProject(dataProject);
    const { todoList } = currentProject;
    const currentTodo = todoList.utils.getTodo(dataTodo);

    for (const key in propGroup) {
      const conditions = {
        // check if the todoTitle already exist
        title: () => {
          if (title === '') return;
          currentTodo.changeProp(key, title);
        },
        description: () => {
          if (description === '') return;

          currentTodo.changeProp(key, description);
        },
        dueDate: () => {
          if (dueDate === '') return;

          currentTodo.changeProp(key, dueDate);
        },
        status: () => {
          currentTodo.changeProp(key, status);
        },
        priority: () => {
          // if (dueDate === '') return;

          currentTodo.changeProp(key, priority);
        },
      };
      try {
        if (conditions[key]) conditions[key]();
      } catch (error) {
        Modal.showMessage.customError(error);
        return;
      }
      LocalStorage.setProjectList(ProjectList.getAllProjects());
    }

    Modal.destroyModal();
    TodoContainer.loadContent(currentProject);
  };

  return {
    'new project': () => Modal.newProject(),
    'add project': () => addProject(),
    'open project': (e) => openProject(e),
    'new todo': () => Modal.newTodo(),
    'add todo': () => addTodo(),
    'edit todo': (e) => Modal.editTodo(e),
    'finish edit': () => editTodo(),
  };
})();
