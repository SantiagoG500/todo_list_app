export const Modal = (() => {
  const MODAL_TEMPLATES = {
    newProject: `
      <label for="project-title">Project Title</label>
      <input type="text" id="project-title">
      <label for="project-description">Description</label>
      <input type="text" id="project-description">
      
      
      <button data-action="add project">Add Project</button>
      <section class="modal__error-message" id="modal__error-message"></section>
      `,
    newTodo: `
      <label for="todo-name">Todo Title</label>
      <input type="text" id="todo-name">

      <label for="todo-date">Due date</label>
      <input type="date" id="todo-date">

      <label for="priority">Task Priority</label>
      <select name="priority" id="priority">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      
      <label for="status">Task Status</label>
      <select name="status" id="status">
        <option value="not started">not started</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>

      <label for="todo-description">Description</label>
      <textarea class="modal__todo-desc" id="todo-description" name="" id="" cols="30" rows="10"></textarea>
      
      
      <button data-action="add todo">Add Todo</button>
      <section class="modal__error-message" id="modal__error-message"></section>
    `,
    editTodo: ` 
      <label for="todo-name">New Title</label>
      <input type="text" id="todo-name">

      <label for="todo-date">Due date</label>
      <input type="date" id="todo-date">

      <label for="priority">Task Priority</label>
      <select name="priority" id="priority">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      
      <label for="status">Task Status</label>
      <select name="status" id="status">
        <option value="not started">not started</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>

      <label for="todo-description">New description</label>
      <textarea class="modal__todo-desc" id="todo-description" name="" id="" cols="30" rows="10"></textarea>
      
      
      <button data-action="finish edit">Edit Todo</button>
      <section class="modal__error-message" id="modal__error-message"></section>
    `,
  };

  const createModal = () => {
    const mainContainer = document.getElementById('main-container');

    const modalContainer = document.createElement('section');
    modalContainer.classList.add('modal-container');
    modalContainer.id = 'modal-container';

    mainContainer.appendChild(modalContainer);
  };
  const destroyModal = () => {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.remove();
  };

  const newProject = () => {
    createModal();
    const modalContainer = document.getElementById('modal-container');

    const modalTag = document.createElement('section');
    modalTag.classList.add('modal');
    modalTag.innerHTML = MODAL_TEMPLATES.newProject;

    modalContainer.appendChild(modalTag);
  };
  const newTodo = () => {
    createModal();
    const modalContainer = document.getElementById('modal-container');

    const modalTag = document.createElement('section');
    modalTag.classList.add('modal');
    modalTag.innerHTML = MODAL_TEMPLATES.newTodo;

    modalContainer.appendChild(modalTag);
  };
  const editTodo = (e) => {
    createModal();
    const modalContainer = document.getElementById('modal-container');
    const dataTodo = e.target.dataset.todo;

    const modalTag = document.createElement('section');
    modalTag.classList.add('modal');
    modalTag.id = 'modal';
    modalTag.dataset.todo = dataTodo;

    modalTag.innerHTML = MODAL_TEMPLATES.editTodo;

    modalContainer.appendChild(modalTag);
  };

  const showMessage = (() => {
    const projectFounded = (title = '') => {
      const errorMessage = document.getElementById('modal__error-message');
      errorMessage.innerText = `The project ${title} already exist!! Use another name for it`;
    };
    const todoFounded = (title = '') => {
      const errorMessage = document.getElementById('modal__error-mesage');
      errorMessage.innerHTML = `The Task ${title} already exist!! Use another name for it`;
    };
    const fillAllFields = () => {
      const errorMessage = document.getElementById('modal__error-message');
      errorMessage.innerText = `You need to fill all the fields to continue`;
    };
    const customError = (error) => {
      const errorMessage = document.getElementById('modal__error-message');
      errorMessage.innerText = error;
    };

    return { projectFounded, fillAllFields, todoFounded, customError };
  })();

  return {
    newProject,
    showMessage,
    destroyModal,
    newTodo,
    editTodo,
  };
})();
