import { TodoList } from './todo-list';
// Maybe a "created date" could be added
export const Project = (data = { title: '', description: '' }) => {
  const todoList = TodoList();
  const changeProp = (prop, value) => (data[prop] = value);

  return {
    changeProp,
    todoList,
    data,
  };
};
