import {createHome} from './tables.js';

createHome();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('MENU');
const content = document.querySelector('.content');
function removeContent(){
    while (content.lastChild){
        content.lastChild.remove();
    }
}

homeBtn.addEventListener('click', ()=>{
    removeContent();
    createHome();
});
menuBtn.addEventListener('click', ()=>{
    removeContent();
    content.innerHTML = "<p>LABAS</p>";
    console.log("LABAS");
});