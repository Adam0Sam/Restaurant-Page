import { menuObject } from "./interactive";

const UI = (() => {
    const content = document.querySelector('.content');

    const home = () => {

        const loadNameTop = () => {
            nameTop.innerHTML =
                `<p>TABLE LIST</p>
            <div class="buttons">
            <button class="floor-btn floor-1 floor-btn-clicked">First Floor</button>
            <button class="floor-btn floor-2">Second Floor</button>
            </div>`;
            content.appendChild(nameTop);

            // floorBtnClick();
            let startLoadingTables;
            buttonsToggle(document.querySelectorAll('.floor-btn'), 'floor-btn-clicked',
                startLoadingTables = (item) => {
                    const floor = item.classList.contains('floor-1') ? 0 : 6;
                    loadTables(floor);
                });
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
            let setTableId;
            buttonsToggle(document.querySelectorAll('.restaurant-table'), 'table-clicked',
                setTableId = (item) => {
                    const tableId = item.classList[1].split('-')[1];
                    document.querySelector('.table-selection').innerText = tableId;
                }
            );
            selectionBtnClicked();


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

                let spicyIcons = ``;
                for (let i = 0; i < menuItems[item].spiciness; i++) {
                    spicyIcons += `<img src="./images/chilli.svg">`
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

    // create an a function argument later down the road to avoid the mess of ifs
    const buttonsToggle = (nodelist, toggleClass, additionalFunction) => {
        const list = Array.from(nodelist); // for some reason I need to convert the nodelist into an array within the function itself
        list.forEach(item => item.addEventListener('click', () => {
            list.forEach(item => item.classList.remove(toggleClass));
            item.classList.add(toggleClass);
            additionalFunction(item);
        }));
    };

    const clear = (element) => {
        while (element.lastChild) {
            element.lastChild.remove();
        }
    };

    return { home, menu, payment, clear, buttonsToggle }
})();

export default UI;