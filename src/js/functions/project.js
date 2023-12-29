import { TodoList } from './todo-list';
// Maybe a "created date" could be added
export const Project = (
  data = { title: '', description: '' },
  todoList = false
) => {
  const list = todoList ? todoList : TodoList();
  const changeProp = (prop, value) => (data[prop] = value);

  return {
    changeProp,
    todoList: list,
    data,
  };
};
