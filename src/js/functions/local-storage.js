import { ProjectList } from './project-list';

export const LocalStorage = (() => {
  const STORAGE_NAME = 'Project List';

  const setProjectList = (projectList = []) => {
    const mappedData = projectList.map((project) => {
      const { data, todoList } = project;
      const { todos } = todoList;
      const obj = { data, todos };

      return obj;
    });

    // ProjectList.setProjectsFromLS(mappedData);
    // console.log(JSON.parse(dataToString));
    localStorage.setItem(STORAGE_NAME, JSON.stringify(mappedData));
    // console.log(localStorage.getItem(STORAGE_NAME));
  };
  const deleteTodoList = () => localStorage.removeItem(STORAGE_NAME);
  const dataIsDefined = () => !!localStorage.getItem(STORAGE_NAME);
  const getData = () => localStorage.getItem(STORAGE_NAME);

  return { setProjectList, deleteTodoList, dataIsDefined, getData };
})();
