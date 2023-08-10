// import './styles.css';

function createHome(){
const content = document.querySelector('.content');

const nameTop = document.createElement('div');
nameTop.classList.add('name-top');
content.appendChild(nameTop);
const nameP = document.createElement('p');
nameP.innerText = "TABLE LIST";
nameP.appendChild(nameTop);
const buttons = document.createElement('div');
buttons.classList.add('buttons');
buttons.appendChild(nameTop);
const button1 = document.createElement('button')
button1.innerText="First Floor";
buttons.appendChild(button1);
const button2 = document.createElement('button')
button2.innerText="Second Floor";
buttons.appendChild(button2);
console.log('TOP COMPLETE');


const tables = document.createElement('div');
tables.classList.add('tables')
content.appendChild(tables);

for(let i = 1; i <= 6; i++ ){
    const table = document.createElement('div');
    table.classList.add('table');
    tables.appendChild(table);
    const img = document.createElement('img');
    img.setAttribute('src', './images/table.svg');
    img.setAttribute('alt', 'Image of a restaurant table');
    table.appendChild(img);
    const tableP = document.createElement('p');
    tableP.innerText = "T"+i;
    table.appendChild(tableP);
}
console.log("TABLES COMPLETE");

const selection = document.createElement('div');
selection.classList.add('selection');
content.appendChild(selection);
const orderIcons = document.createElement('div');
orderIcons.classList.add('order-icons');
selection.appendChild(orderIcons);
const tableImage =document.createElement('img');
tableImage.classList.add('table-image');
tableImage.setAttribute('src', './images/small table icon.svg');
orderIcons.appendChild(tableImage);
const orderIconsTable = document.createElement('p');
orderIconsTable.classList.add('table-text');
orderIconsTable.innerText = "TABLE:";
orderIcons.appendChild(orderIconsTable);
const orderIconsCount = document.createElement('p');
orderIconsCount.classList.add('table-count');
orderIconsCount.classList.add('table-selection');
orderIconsCount.innerText = "1:";
orderIcons.appendChild(orderIconsCount);
const selectionBtn = document.createElement('button');
selectionBtn.id="selection-btn";
selectionBtn.innerText = "SELECT AND CONTINUE";
selection.appendChild(selectionBtn);
console.log("SELECTION COMPLETE");
}

export {createHome};