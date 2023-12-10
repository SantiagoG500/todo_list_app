export const Header = (() => {
  const load = (container) => {
    const headerTag = document.createElement('header');
    const template = ` <h1 class="title"  >I'm a header</h1> `;

    headerTag.classList.add('main-header');
    headerTag.innerHTML = template;

    container.appendChild(headerTag);
  };

  return {
    load,
  };
})();
