import { ProjectList } from '../functions/project-list';
import { TodoContainer } from './todo-container';

export const MainContent = (() => {
  const load = (container) => {
    const contentTag = document.createElement('section');
    const template = `
      <h1> There's not any project yet!!! </h1>
      <p> Create a Project in the button you'll see above </p>
    `;

    contentTag.classList.add('main-content');
    contentTag.id = 'main-content';
    container.appendChild(contentTag);

    const projects = ProjectList.getAllProjects();

    if (projects.length === 0) contentTag.innerHTML = template;
    else loadContent();
  };

  const loadContent = (content) => {
    const contentTag = document.getElementById('main-content');
    let project = {};

    if (!content) project = { ...ProjectList.getAllProjects()[0].data };
    else project = { ...content.data };

    const { title, description } = project;
    contentTag.dataset.project = title;

    const template = `
      <section>
        <h1> ${title}</h1>
        <p> ${description}</p>
      </section>
    `;

    contentTag.innerHTML = template;
    TodoContainer.load();
    TodoContainer.loadContent(content);
  };

  return {
    load,
    loadContent,
  };
})();
