import { MainContent } from './main-content';

export const Nav = (() => {
  const load = (container) => {
    const navTag = document.createElement('nav');
    const template = ` 
      <section class="main-nav__projects" id="main-nav__projects"></section>
      <section class="main-nav__new-project">
        <button data-action="new project">Create a new project</button>
      </section>
    `;

    navTag.classList.add('main-nav');
    navTag.innerHTML = template;

    container.appendChild(navTag);
  };
  const loadProjects = (projects) => {
    const navProjectList = document.getElementById('main-nav__projects');
    const fragment = document.createDocumentFragment();

    for (const project of projects) {
      const { data } = project;
      const button = document.createElement('button');

      button.dataset.action = 'open project';
      button.dataset.projectName = data.title;
      button.innerText = data.title;

      fragment.appendChild(button);
    }

    navProjectList.innerHTML = '';
    navProjectList.appendChild(fragment);
  };

  return {
    loadProjects,
    load,
  };
})();
