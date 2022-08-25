import './index.css';
import './style.css';
import '../modules/ui.js'
import setDate from '../modules/date.js';
import game from '../modules/game.js';

setDate();
game.getFetch();
game.addUser();
game.refresh();
