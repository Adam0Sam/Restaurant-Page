import UI from './UI.js';
const content = document.querySelector('.content');

const timeId = document.getElementById('date-text');
const currentTime = (()=>{
    let date = new Date();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hh = date.getHours();
    let mm = date.getMinutes();
    timeId.innerText = `${month}-${day}-${year}, ${hh}:${mm}`
    let t = setTimeout(()=>currentTime(), 60000);
})();

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
