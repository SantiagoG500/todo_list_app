import { Footer } from './footer';
import { Header } from './header';
import { MainContent } from './main-content';
import { Nav } from './nav';
const mainContainerTag = document.getElementById('main-container');

export const UI = (() => {
  const load = () => {
    Header.load(mainContainerTag);
    Nav.load(mainContainerTag);
    MainContent.load(mainContainerTag);
    Footer.load(mainContainerTag);
  };

  return {
    load,
  };
})();
