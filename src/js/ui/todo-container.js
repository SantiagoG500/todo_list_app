// create a function to load n remove a class from the component
export const TodoContainer = (() => {
  // create different templates when there's a lack of tasks or something

  const load = () => {
    const mainContent = document.getElementById('main-content');
    const todoContainer = document.createElement('article');

    todoContainer.classList.add('todo-container', 'todo-container--no-content');
    todoContainer.id = 'todo-container';

    const template = `

      <section class="todo-container__new-project" id="container-project">
        <h1>No things to do yet!!!</h1>
        <p>Please click the button below to add a new task Todo</p>
        
        <button data-action="new todo">Add new Todo</button>
      </section>
        
      <ul class="todo-container__ul" id="todo-ul">
      </ul>
    `;

    todoContainer.innerHTML = template;
    mainContent.appendChild(todoContainer);
  };

  const loadContent = (project) => {
    const todoUl = document.getElementById('todo-ul');
    const todoContainer = document.getElementById('todo-container');
    const { data, todoList } = project;
    const { todos } = todoList;

    const fragment = document.createDocumentFragment();

    for (const todo of todos) {
      const { data } = todo;
      const todoLi = document.createElement('li');
      const template = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <p>
          priority: <label>${data.priority}</label>
        </p>
        <p>
          Status: <label>${data.status}</label>
        </p>
        <p>
          Due Date: <label>${data.dueDate}</label>
        </p>

        <button class="btn btn--edit" data-todo="${data.title}" data-action="edit todo">Edit</button>
      `;
      todoLi.innerHTML = template;
      fragment.appendChild(todoLi);
    }

    document.getElementById('container-project').innerHTML =
      '<button data-action="new todo">Add new Todo</button>';

    todoUl.innerHTML = '';
    todoUl.appendChild(fragment);
  };

  return {
    load,
    loadContent,
  };
})();

// export const TodoContainer = (() => {
//   const load = () => {
//     const mainContent = document.getElementById('main-content');
//     const todoListTag = document.createElement('section');
//     const template = `
//       <table class="todo-table">
//         <thead class="todo-table__head">
//           <tr class="todo-table__row todo-table__row--head">
//             <th class="todo-table__th">Task</th>
//             <th class="todo-table__th">description</th>
//             <th class="todo-table__th">Due Date</th>
//             <th class="todo-table__th">Status</th>
//             <th class="todo-table__th">Priority</th>

//           </tr>
//         </thead>
//         <tbody class="todo-table__body" id="t-body">
//         </tbody>

//           <tfoot class="todo-table__footer">
//             <tr class="todo-table__row todo-table__row--add-todo">

//               <td class="todo-table__td todo-table__td--footer" colspan="5">
//                 <button class="btn todo-table__btn" data-action="new todo">Add Todo</button>
//               </td>
//             </tr>

//           </tfoot>
//       </table>
//     `;

//     todoListTag.innerHTML = template;
//     todoListTag.classList.add('todo-section');
//     mainContent.appendChild(todoListTag);
//   };
//   const loadContent = (project) => {
//     const { todoList } = project;
//     const { todos } = todoList;

//     const fragment = document.createDocumentFragment();
//     const tBody = document.getElementById('t-body');

//     for (const todo of todos) {
//       const { data } = todo;

//       const rowTag = document.createElement('tr');
//       rowTag.classList.add('todo-table__row');
//       rowTag.classList.add('todo-table__row--todo');

//       const taskTag = document.createElement('td');
//       taskTag.classList.add('todo-table__td');
//       const descTag = document.createElement('td');
//       descTag.classList.add('todo-table__td');

//       taskTag.innerText = data.title;
//       descTag.innerText = data.desc;

//       rowTag.appendChild(taskTag);
//       rowTag.appendChild(descTag);

//       fragment.appendChild(rowTag);
//     }

//     tBody.innerHTML = '';
//     tBody.appendChild(fragment);

//     console.log(todoList);
//   };

//   return {
//     load,
//     loadContent,
//   };
// })();
