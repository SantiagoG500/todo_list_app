import './css/normalize.css';
import './styles.css';

import { Listener } from './js/functions/listener';
import { UI } from './js/ui/ui';
import { LocalStorage } from './js/functions/local-storage';
import { ProjectList } from './js/functions/project-list';
import { MainContent } from './js/ui/main-content';
import { Nav } from './js/ui/nav';

const mainContainer = document.getElementById('main-container');
const initApp = () => {
  UI.load();

  if (!LocalStorage.dataIsDefined()) return;

  const storageData = LocalStorage.getData();
  const dataToObj = JSON.parse(storageData);
  const projects = ProjectList.getAllProjects();

  // console.log(dataToObj);
  ProjectList.setProjectsFromLS(dataToObj);

  Nav.loadProjects(projects);
  MainContent.loadContent(projects[0]);
  // console.log(ProjectList.getAllProjects());
};

document.addEventListener('load', initApp());
mainContainer.addEventListener('pointerdown', Listener);
