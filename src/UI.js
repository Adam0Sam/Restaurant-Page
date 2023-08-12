import { menuObject } from "./interactive";

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
            const buttonToggle = (button) => {
                button.addEventListener('click', () => {
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
            selectionBtnClicked();
        };
        const tableClicked = () => {
            const tables = document.querySelectorAll('.restaurant-table');
            tables.forEach((table) => table.addEventListener('click', () => {
                tables.forEach((table) => {
                    table.classList.remove('table-clicked');
                });
                table.classList.add('table-clicked');
                const tableId = table.classList[1].split('-')[1];
                document.querySelector('.table-selection').innerText = tableId;
            }));
        };

        const loadSelection = (tableId) => {
            clear(selection);
            if (typeof tableId === 'undefined') tableId = "not selected";
            selection.innerHTML =
                `<div class="order-icons">
                <img class="table-image" src="./images/small table icon.svg" alt="">
                <p class="table-text">TABLE:</p>
                <p class="table-count table-selection">${tableId}</p>
            </div>
            <button id="selection-btn">SELECT AND CONTINUE</button>`
            content.appendChild(selection);
        };

        const selectionBtnClicked = () => {
            const button = document.getElementById("selection-btn");
            button.addEventListener('click', () => {
                document.querySelector('.table-order').innerText = document.querySelector('.table-selection').innerText;
            });
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

        const menuItems = {
            item1: menuObject("chicken wings", "N", 2, "./images/chickenWing.jpg"),
            item2: menuObject("french fries", "G", 0, "./images/frenchFry.jpg"),
            item3: menuObject("summer salad", "N", 1, "./images/summerSalad.jpg"),
            item4: menuObject("summer salad", "0%", 1, "./images/summerSalad.jpg"),
            item5: menuObject("chicken wings", "G", 2, "./images/idkBread.jpg"),
            item6: menuObject("bread", "G", 2, "./images/ikBread.jpg"),
            item7: menuObject("glass meat", "G", 2, "./images/glassMeat.jpg"),
            item8: menuObject("glass meat", "G", 2, "./images/glassMeat.jpg"),
            item9: menuObject("glass meat", "G", 1, "./images/idkBread.jpg")
        };

        const loadFoodContent = () => {
            for (let item in menuItems) {
                const foodItemContainer = document.createElement('div');
                foodItemContainer.classList.add('food-item-container');

                let spicyIcons=``;
                for (let i = 0; i < menuItems[item].spiciness; i++) {
                    spicyIcons+=`<img src="./images/chilli.svg">`
                }

                foodItemContainer.innerHTML =
                    `<div class="food-card">
                        <div class="food-img">
                            <img src="${menuItems[item].imgLink}">
                        </div>
                        <div class="food-info">
                            <p class="food-name">${menuItems[item].name}</p>
                            <div class="food-category-container">
                                <p class="food-category-text">CATEGORY:</p>
                                <div class="food-category-icons">${menuItems[item].category}
                                    <div>
                                        ${spicyIcons}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                foodContent.appendChild(foodItemContainer);
            }

        };

        const loadFoodFooter = () => {

        };

        const foodContent = document.createElement('div');
        foodContent.classList.add('food-content');
        content.appendChild(foodContent);
        loadFoodContent();
    }

    const payment = () => {
        clear();
    }

    const clear = (element) => {
        while (element.lastChild) {
            element.lastChild.remove();
        }
    };

    return { home, menu, payment, clear }
})();

export default UI;