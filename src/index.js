import UI from './UI.js';
import storage from './storage.js';

UI.load.menuBtns();
UI.load.homePage();
UI.load.date();
UI.load.orderEmpty();

storage.session.loadOrderItemList();