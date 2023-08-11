const UI = (() => {
    const content = document.querySelector('.content');
    const home = () => {

        const loadNameTop = () => {
            nameTop.innerHTML =
            `<p>TABLE LIST</p>
            <div class="buttons">
            <button class="floor1-btn floor-btn-clicked">First Floor</button>
            <button class="floor2-btn">Second Floor</button>
            </div>`;
            content.appendChild(nameTop);
            
            floorBtnClick();
        };
        const floorBtnClick = () => {
            const buttonToggle = (button) =>{
                button.addEventListener('click', ()=>{
                    document.querySelector('.floor1-btn').classList.toggle('floor-btn-clicked');
                    document.querySelector('.floor2-btn').classList.toggle('floor-btn-clicked');
    
                    const floor = button.classList.contains('floor1-btn') ? 0 : 6;
                    loadTables(floor);
                });
            };
    
            buttonToggle(document.querySelector('.floor1-btn'));
            buttonToggle(document.querySelector('.floor2-btn'))
        };
        
        const loadTables = (floor) => {
            clear(tables)
            tables.innerHTML =
                `<div class="table">
                <img class="restaurant-table table-${++floor}" src="./images/table.svg" alt="Image of a restaurant table">
                <p class="restaurant-text">T${floor}</p>
            </div>
            <div class="table">
                <img class="restaurant-table table-${++floor}" src="./images/table.svg" alt="Image of a restaurant table">
                <p class="restaurant-text">T${floor}</p>
            </div>
            <div class="table">
                <img class="restaurant-table table-${++floor}" src="./images/table.svg" alt="Image of a restaurant table">
                <p class="restaurant-text">T${floor}</p>
            </div>
            <div class="table">
                <img class="restaurant-table table-${++floor}" src="./images/table.svg" alt="Image of a restaurant table">
                <p class="restaurant-text">T${floor}</p>
            </div>
            <div class="table">
                <img class="restaurant-table table-${++floor}" src="./images/table.svg" alt="Image of a restaurant table">
                <p class="restaurant-text">T${floor}</p>
            </div>
            <div class="table">
                <img class="restaurant-table table-${++floor}" src="./images/table.svg" alt="Image of a restaurant table">
                <p class="restaurant-text">T${floor}</p>
            </div>`;
            content.appendChild(tables);
            loadSelection();
            tableClicked();
        };
        const loadSelection = (tableId) => {
            clear(selection);
            if(typeof tableId === 'undefined') tableId = "not selected";
            selection.innerHTML =
                `<div class="order-icons">
                <img class="table-image" src="./images/small table icon.svg" alt="">
                <p class="table-text">TABLE:</p>
                <p class="table-count table-selection">${tableId}</p>
            </div>
            <button id="selection-btn">SELECT AND CONTINUE</button>`
            content.appendChild(selection);
        };

        const tableClicked = () =>{
            const tables = document.querySelectorAll('.restaurant-table');
            tables.forEach((table)=>table.addEventListener('click', ()=>{
                tables.forEach((table)=>{
                    table.classList.remove('table-clicked');
                });
                table.classList.add('table-clicked');
                const tableId = table.classList[1].split('-')[1];
                loadSelection(tableId);
            }));
        };

        clear(content);

        const nameTop = document.createElement('div');
        nameTop.classList.add('name-top');
        loadNameTop();

        const tables = document.createElement('div');
        tables.classList.add('tables');
        const selection = document.createElement('div');
        selection.classList.add('selection');
        loadTables(0);
    };


    const menu = () => {
        clear();
    }

    const payment = () => {
        clear();
    }

    const clear = (element) => {
        while (element.lastChild) {
            element.lastChild.remove();
        }
    };

    return { home, menu, payment }
})();

export default UI;