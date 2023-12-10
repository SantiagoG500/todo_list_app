import './css/normalize.css';
import { Listener } from './js/functions/listener';
import { Modal } from './js/ui/modal';
import { UI } from './js/ui/ui';
import './styles.css';

const mainContainer = document.getElementById('main-container');

document.addEventListener('load', UI.load());
// mainContainer.addEventListener('pointerdown', () => Listener);
mainContainer.addEventListener('pointerdown', Listener);
// Modal.newTodo();
