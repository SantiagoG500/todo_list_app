import './css/normalize.css';
import './styles.css';

import { Listener } from './js/functions/listener';
import { UI } from './js/ui/ui';
import { IndexedDB } from './js/functions/indexed_db';
import { ProjectList } from './js/functions/project-list';

const mainContainer = document.getElementById('main-container');
const initApp = () => {
  UI.load();
  IndexedDB.init();
  IndexedDB.getProjects(ProjectList.getAllProjects());
};

document.addEventListener('load', initApp());
mainContainer.addEventListener('pointerdown', Listener);
