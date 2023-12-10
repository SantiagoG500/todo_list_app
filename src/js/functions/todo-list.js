export const TodoList = () => {
  const todos = [];

  const addTodo = (todo = {}) => {
    const isInList = checkTodo(todo);
    if (isInList)
      return console.log(
        `Your todo "${todo.data.title}" is already in list, please edit the existing task`
      );
    else return todos.push(todo);
  };
  const deleteTodo = (todoTitle) => {
    const foundTodo = todos.find((todo) => todo.data.title === todoTitle);
    if (foundTodo) todos.splice(todos.indexOf(foundTodo), 1);
    else 'Todo not founded';
  };
  const getTodo = (todoTitle) => {
    const foundTodo = todos.find((todo) => todo.data.title === todoTitle);
    if (foundTodo) return foundTodo;
    else return 'Todo not founded';
  };
  const showTodos = () => console.log(todos);
  const checkTodo = (todo) => {
    const todoTitle = todo.data.title;
    const foundTodo = todos.find((todo) => todo.data.title === todoTitle);

    return foundTodo;
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    getTodo,
    showTodos,
  };
};
