import UI from './UI.js';
const content = document.querySelector('.content')

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
