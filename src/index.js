import UI from './UI.js';
const content = document.querySelector('.content')

const menuArray = document.querySelectorAll('.menu-item');
UI.buttonsToggle(menuArray, 'menu-item-active');

UI.home();
const home = document.getElementById('HOME');
home.addEventListener('click', ()=>{
    UI.clear(content)
    UI.home()
});

const menu = document.getElementById('MENU');
menu.addEventListener('click', ()=>{
    UI.clear(content)
    UI.menu()
});
