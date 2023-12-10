export const Footer = (() => {
  const load = (container) => {
    const footerTag = document.createElement('Footer');
    const template = ` <h1>I'm a Footer</h1> `;

    footerTag.classList.add('main-footer');
    footerTag.innerHTML = template;

    container.appendChild(footerTag);
  };

  return {
    load,
  };
})();
