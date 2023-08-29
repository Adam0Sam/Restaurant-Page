/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive */ "./src/interactive.js");


const UI = (() => {
    const content = document.querySelector('.content');

    const buttonsToggle = (nodelist, toggleClass, additionalFunction) => {
        const list = Array.from(nodelist); // for some reason I need to convert the nodelist into an array within the function itself
        list.forEach(item => item.addEventListener('click', () => {
            list.forEach(item => item.classList.remove(toggleClass));
            item.classList.add(toggleClass);
            if (typeof additionalFunction !== 'undefined') additionalFunction(item);
        }));
    };

    const clear = (element) => {
        while (element.lastChild) {
            element.lastChild.remove();
        }
    };

    const createDiv = (divClass) => {
        const div = document.createElement('div');
        div.classList.add(divClass);
        return div;
    };

    const home = () => {
        const loadNameTop = () => {
            nameTop.innerHTML =
                `<p>TABLE LIST</p>
            <div class="buttons">
            <button class="floor-btn floor-1 floor-btn-clicked">First Floor</button>
            <button class="floor-btn floor-2">Second Floor</button>
            </div>`;
            content.appendChild(nameTop);

            const startLoadingTables = (item) => {
                const floor = item.classList.contains('floor-1') ? 0 : 6;
                loadTables(floor)
            };

            buttonsToggle(document.querySelectorAll('.floor-btn'), 'floor-btn-clicked', startLoadingTables);
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
            const setTableId = (item) => {
                const tableId = item.classList[1].split('-')[1];
                document.querySelector('.table-selection').innerText = tableId;
            };
            buttonsToggle(document.querySelectorAll('.restaurant-table'), 'table-clicked', setTableId);
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
                const tableId = document.querySelector('.table-selection').innerText;
                if (tableId === 'not selected') {
                    alert('Select a table.');
                    return;
                }
                document.querySelector('.table-order').innerText = tableId
                document.getElementById('MENU').click();
            });
        };


        clear(content);

        const nameTop = createDiv('name-top');
        loadNameTop();

        const tables = createDiv('tables');
        const selection = createDiv('selection');
        loadTables(0);
    };

    const menusList = {
        "STARTER": {
            item1: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "N", 2, "./images/chickenWing.jpg", 23),
            item2: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("french fries", "G", 0, "./images/frenchFry.jpg", 23),
            item8: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 2, "./images/glassMeat.jpg", 23),
            item9: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 1, "./images/idkBread.jpg", 23),
            item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg", 23),
            item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg", 23),
            item5: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "G", 2, "./images/idkBread.jpg", 19)
        },
        "MAIN COURSE": {
            item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg", 23),
            item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg", 23),
            item5: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "G", 2, "./images/idkBread.jpg", 23)
        },
        "DRINKS": {
            item6: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("bread", "G", 2, "./images/ikBread.jpg", 23),
            item7: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 2, "./images/glassMeat.jpg", 23),
            item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg", 23),
            item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg", 23),
            item5: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "G", 2, "./images/idkBread.jpg", 23),
        },
        "DESSERTS": {
            item8: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 2, "./images/glassMeat.jpg", 23),
            item9: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 1, "./images/idkBread.jpg", 23),
            item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg", 23),
            item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg", 23),
        }
    }

    const menu = () => {
        const loadFoodContent = (selectedMenuName = "STARTER") => {
            const selectedMenu = menusList[selectedMenuName];
            for (let item in selectedMenu) {
                const foodItemContainer = createDiv('food-item-container');

                let spicyIcons = ``;
                for (let i = 0; i < selectedMenu[item].spiciness; i++) {
                    spicyIcons += `<img src="./images/chilli.svg">`
                }

                foodItemContainer.innerHTML =
                    `<div class="food-card" data-menu-list="${selectedMenuName}" data-menu-item="${item}">
                        <div class="food-img">
                            <img src="${selectedMenu[item].imgLink}">
                        </div>
                        <div class="food-info">
                            <p class="food-name">${selectedMenu[item].name}</p>
                            <div class="food-category-container">
                                <p class="food-category-text">CATEGORY:</p>
                                <div class="food-category-icons">${selectedMenu[item].category}
                                    <div>
                                        ${spicyIcons}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                foodContent.appendChild(foodItemContainer);
            }

            const foodCardClicked = (() => {
                document.querySelectorAll('.food-card')
                    .forEach(card => {
                        card.addEventListener('click', () => orderAside.loadOrder(card));
                    });
            })();
        };

        const loadFoodFooter = () => {
            const footerBtns = ["STARTER", "MAIN COURSE", "DRINKS", "DESSERTS"];
            for (let btn in footerBtns) {
                const footerBtn = document.createElement('button');
                footerBtn.classList.add('food-footer-btn');
                if (footerBtns[btn] === "STARTER") footerBtn.classList.add('food-footer-btn-active');
                footerBtn.innerText = footerBtns[btn];
                foodFooter.appendChild(footerBtn);
            }
            const loadSelectedMenu = (item) => {
                clear(foodContent);
                loadFoodContent(item.innerText);
            }
            buttonsToggle(document.querySelectorAll('.food-footer-btn'), 'food-footer-btn-active', loadSelectedMenu);
        };

        const foodContent = createDiv('food-content');
        content.appendChild(foodContent);
        loadFoodContent();

        const foodFooter = createDiv('food-footer');
        content.appendChild(foodFooter);
        loadFoodFooter();
    };

    const orderAside = (() => {
        const orderContent = document.querySelector('.order-content');
        const orderItems = createDiv('order-content-items');
        const orderPrice = createDiv('order-content-price');

        const quantityCount = {};
        const totalPrice = 0;
        
        const loadOrder = (selectedItem) => {
            const selectedObj = menusList[selectedItem.dataset.menuList][selectedItem.dataset.menuItem];
            const name = selectedObj.name;
            const price = selectedObj.price;
            const imgLink = selectedObj.imgLink;

            checkIfOrderIsEmpty();

            if(!(quantityCount[name])) quantityCount[name]=1;
            else{
                quantityCount[name]++;
                orderItems.removeChild(document.querySelector(`[data-name=${selectedItem.dataset.menuItem}]`))
            } 
            
            const loadOrderItem = () => {
                console.log("ADDED");
                const orderItem = createDiv('order-item');
                orderItem.dataset.name=selectedItem.dataset.menuItem;
                orderItem.innerHTML = `
                <div class="order-item-content">
                    <img src="${imgLink}" alt="">
                    <div class="order-item-content-info">
                        <p class="order-item-text">${name}</p>
                        <p class="order-item-content-price">$${price}</p>
                    </div>
                </div>
                <div class="order-item-quantity">
                    <p class="order-item-text">QUANTITY</p>
                    <p class="order-item-quantity-text">${quantityCount[name]}</p>
                </div>
                `;
                orderItems.appendChild(orderItem);
            };

            loadOrderItem();
            const loadOrderPrice = () => {
            };
            
            loadOrderPrice();
        }

        const checkIfOrderIsEmpty = () => {
            if(document.querySelector('.order-content-empty')){
                // console.log(document.querySelector('.order-content-empty'));
                clear(orderContent);
                orderContent.appendChild(orderItems);
                orderContent.appendChild(orderPrice);
            }
        };

        return { loadOrder }
    })();

    const payment = () => {
        document.querySelectorAll('body').innerText = 'payment:)'
    };

    const orders = () => {
        document.querySelectorAll('body').innerText = 'orders:)'
    }

    const settings = () => {
        document.querySelectorAll('body').innerText = 'settings:)'
    }

    const load = {
        menuBtns() {
            const menuArray = document.querySelectorAll('.menu-item');
            const loadSelectedMenu = (item) => {
                const functionMap = {
                    "HOME": home,
                    "MENU": menu,
                    "PAYMENT": payment,
                    "ORDERS": orders,
                    "SETTINGS": settings
                }
                clear(content)
                functionMap[item.id]();
            }
            buttonsToggle(menuArray, 'menu-item-active', loadSelectedMenu);
        },

        homePage() {
            clear(content);
            home();
        },

        orderEmpty() {
            const orderContent = document.querySelector('.order-content')
            const orderEmpty = createDiv('order-content-empty');
            orderEmpty.innerHTML = `
                <img src="images/order.svg" alt="">
                <p class="order-empty-text">NO PRODUCTS ADDED</p>
                `;
            orderContent.appendChild(orderEmpty);
        },

        date() {
            const timeId = document.getElementById('date-text');
            const currentTime = () => {
                let date = new Date();
                let month = date.getMonth() + 1;
                if (month < 10) month = "0" + month.toString();
                let day = date.getDate();
                let year = date.getFullYear();
                let hh = date.getHours();
                let mm = date.getMinutes();
                timeId.innerText = `${month}-${day}-${year}, ${hh}:${mm}`;
            };
            currentTime();
            let t = setInterval(() => currentTime(), 1000);
        }
    }

    return { load };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/interactive.js":
/*!****************************!*\
  !*** ./src/interactive.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuObject: () => (/* binding */ menuObject)
/* harmony export */ });
const menuObject = (oldName, category, spiciness, imgLink, price) => {
    let name = oldName.toUpperCase();

    return {
        name,
        category,
        spiciness,
        imgLink,
        price
    };
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");


_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].load.menuBtns();
_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].load.homePage();
_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].load.date();
_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].load.orderEmpty();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RCw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RCw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix3REFBVTtBQUM3QixtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCLG1CQUFtQix3REFBVTtBQUM3QixtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCLG1CQUFtQix3REFBVTtBQUM3QixTQUFTO0FBQ1Q7QUFDQSxtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCLG1CQUFtQix3REFBVTtBQUM3QixTQUFTO0FBQ1Q7QUFDQSxtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCLG1CQUFtQix3REFBVTtBQUM3QixtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCLFNBQVM7QUFDVDtBQUNBLG1CQUFtQix3REFBVTtBQUM3QixtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCLG1CQUFtQix3REFBVTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0Msa0NBQWtDO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQsaUJBQWlCLG9CQUFvQixLQUFLO0FBQ3hHO0FBQ0Esd0NBQXdDLDJCQUEyQjtBQUNuRTtBQUNBO0FBQ0EsbURBQW1ELHdCQUF3QjtBQUMzRTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLDhCQUE4QjtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQSxxREFBcUQsS0FBSztBQUMxRCwrREFBK0QsTUFBTTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxvQkFBb0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsR0FBRyxHQUFHO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUNuVmpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlCOztBQUV6Qiw4Q0FBRTtBQUNGLDhDQUFFO0FBQ0YsOENBQUU7QUFDRiw4Q0FBRSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbnVPYmplY3QgfSBmcm9tIFwiLi9pbnRlcmFjdGl2ZVwiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb25zdCBidXR0b25zVG9nZ2xlID0gKG5vZGVsaXN0LCB0b2dnbGVDbGFzcywgYWRkaXRpb25hbEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBBcnJheS5mcm9tKG5vZGVsaXN0KTsgLy8gZm9yIHNvbWUgcmVhc29uIEkgbmVlZCB0byBjb252ZXJ0IHRoZSBub2RlbGlzdCBpbnRvIGFuIGFycmF5IHdpdGhpbiB0aGUgZnVuY3Rpb24gaXRzZWxmXG4gICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlQ2xhc3MpKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCh0b2dnbGVDbGFzcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFkZGl0aW9uYWxGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIGFkZGl0aW9uYWxGdW5jdGlvbihpdGVtKTtcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhciA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlRGl2ID0gKGRpdkNsYXNzKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChkaXZDbGFzcyk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfTtcblxuICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWROYW1lVG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgbmFtZVRvcC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8cD5UQUJMRSBMSVNUPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmbG9vci1idG4gZmxvb3ItMSBmbG9vci1idG4tY2xpY2tlZFwiPkZpcnN0IEZsb29yPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxvb3ItYnRuIGZsb29yLTJcIj5TZWNvbmQgRmxvb3I8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVUb3ApO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydExvYWRpbmdUYWJsZXMgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsb29yID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zsb29yLTEnKSA/IDAgOiA2O1xuICAgICAgICAgICAgICAgIGxvYWRUYWJsZXMoZmxvb3IpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBidXR0b25zVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9vci1idG4nKSwgJ2Zsb29yLWJ0bi1jbGlja2VkJywgc3RhcnRMb2FkaW5nVGFibGVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkVGFibGVzID0gKGZsb29yKSA9PiB7XG4gICAgICAgICAgICBjbGVhcih0YWJsZXMpXG4gICAgICAgICAgICB0YWJsZXMuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmxlcyk7XG4gICAgICAgICAgICBsb2FkU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBzZXRUYWJsZUlkID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZUlkID0gaXRlbS5jbGFzc0xpc3RbMV0uc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtc2VsZWN0aW9uJykuaW5uZXJUZXh0ID0gdGFibGVJZDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBidXR0b25zVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50LXRhYmxlJyksICd0YWJsZS1jbGlja2VkJywgc2V0VGFibGVJZCk7XG4gICAgICAgICAgICBzZWxlY3Rpb25CdG5DbGlja2VkKCk7XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRTZWxlY3Rpb24gPSAodGFibGVJZCkgPT4ge1xuICAgICAgICAgICAgY2xlYXIoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFibGVJZCA9PT0gJ3VuZGVmaW5lZCcpIHRhYmxlSWQgPSBcIm5vdCBzZWxlY3RlZFwiO1xuICAgICAgICAgICAgc2VsZWN0aW9uLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJvcmRlci1pY29uc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ0YWJsZS1pbWFnZVwiIHNyYz1cIi4vaW1hZ2VzL3NtYWxsIHRhYmxlIGljb24uc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJsZS10ZXh0XCI+VEFCTEU6PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFibGUtY291bnQgdGFibGUtc2VsZWN0aW9uXCI+JHt0YWJsZUlkfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdGlvbi1idG5cIj5TRUxFQ1QgQU5EIENPTlRJTlVFPC9idXR0b24+YFxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ0bkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGlvbi1idG5cIik7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1zZWxlY3Rpb24nKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlSWQgPT09ICdub3Qgc2VsZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTZWxlY3QgYSB0YWJsZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtb3JkZXInKS5pbm5lclRleHQgPSB0YWJsZUlkXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01FTlUnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuICAgICAgICBjbGVhcihjb250ZW50KTtcblxuICAgICAgICBjb25zdCBuYW1lVG9wID0gY3JlYXRlRGl2KCduYW1lLXRvcCcpO1xuICAgICAgICBsb2FkTmFtZVRvcCgpO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlcyA9IGNyZWF0ZURpdigndGFibGVzJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGNyZWF0ZURpdignc2VsZWN0aW9uJyk7XG4gICAgICAgIGxvYWRUYWJsZXMoMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1lbnVzTGlzdCA9IHtcbiAgICAgICAgXCJTVEFSVEVSXCI6IHtcbiAgICAgICAgICAgIGl0ZW0xOiBtZW51T2JqZWN0KFwiY2hpY2tlbiB3aW5nc1wiLCBcIk5cIiwgMiwgXCIuL2ltYWdlcy9jaGlja2VuV2luZy5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTI6IG1lbnVPYmplY3QoXCJmcmVuY2ggZnJpZXNcIiwgXCJHXCIsIDAsIFwiLi9pbWFnZXMvZnJlbmNoRnJ5LmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtODogbWVudU9iamVjdChcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvZ2xhc3NNZWF0LmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtOTogbWVudU9iamVjdChcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDEsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNDogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW01OiBtZW51T2JqZWN0KFwiY2hpY2tlbiB3aW5nc1wiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiwgMTkpXG4gICAgICAgIH0sXG4gICAgICAgIFwiTUFJTiBDT1VSU0VcIjoge1xuICAgICAgICAgICAgaXRlbTM6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCJOXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW00OiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTU6IG1lbnVPYmplY3QoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMylcbiAgICAgICAgfSxcbiAgICAgICAgXCJEUklOS1NcIjoge1xuICAgICAgICAgICAgaXRlbTY6IG1lbnVPYmplY3QoXCJicmVhZFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9pa0JyZWFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNzogbWVudU9iamVjdChcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvZ2xhc3NNZWF0LmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMzogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNTogbWVudU9iamVjdChcImNoaWNrZW4gd2luZ3NcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJERVNTRVJUU1wiOiB7XG4gICAgICAgICAgICBpdGVtODogbWVudU9iamVjdChcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvZ2xhc3NNZWF0LmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtOTogbWVudU9iamVjdChcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDEsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNDogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRGb29kQ29udGVudCA9IChzZWxlY3RlZE1lbnVOYW1lID0gXCJTVEFSVEVSXCIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWVudSA9IG1lbnVzTGlzdFtzZWxlY3RlZE1lbnVOYW1lXTtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gc2VsZWN0ZWRNZW51KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9vZEl0ZW1Db250YWluZXIgPSBjcmVhdGVEaXYoJ2Zvb2QtaXRlbS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCBzcGljeUljb25zID0gYGA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZE1lbnVbaXRlbV0uc3BpY2luZXNzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3BpY3lJY29ucyArPSBgPGltZyBzcmM9XCIuL2ltYWdlcy9jaGlsbGkuc3ZnXCI+YFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvb2RJdGVtQ29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiZm9vZC1jYXJkXCIgZGF0YS1tZW51LWxpc3Q9XCIke3NlbGVjdGVkTWVudU5hbWV9XCIgZGF0YS1tZW51LWl0ZW09XCIke2l0ZW19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7c2VsZWN0ZWRNZW51W2l0ZW1dLmltZ0xpbmt9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtbmFtZVwiPiR7c2VsZWN0ZWRNZW51W2l0ZW1dLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWNhdGVnb3J5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtY2F0ZWdvcnktdGV4dFwiPkNBVEVHT1JZOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY2F0ZWdvcnktaWNvbnNcIj4ke3NlbGVjdGVkTWVudVtpdGVtXS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzcGljeUljb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICAgICBmb29kQ29udGVudC5hcHBlbmRDaGlsZChmb29kSXRlbUNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZvb2RDYXJkQ2xpY2tlZCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb2QtY2FyZCcpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9yZGVyQXNpZGUubG9hZE9yZGVyKGNhcmQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRGb29kRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyQnRucyA9IFtcIlNUQVJURVJcIiwgXCJNQUlOIENPVVJTRVwiLCBcIkRSSU5LU1wiLCBcIkRFU1NFUlRTXCJdO1xuICAgICAgICAgICAgZm9yIChsZXQgYnRuIGluIGZvb3RlckJ0bnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBmb290ZXJCdG4uY2xhc3NMaXN0LmFkZCgnZm9vZC1mb290ZXItYnRuJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZvb3RlckJ0bnNbYnRuXSA9PT0gXCJTVEFSVEVSXCIpIGZvb3RlckJ0bi5jbGFzc0xpc3QuYWRkKCdmb29kLWZvb3Rlci1idG4tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyQnRuLmlubmVyVGV4dCA9IGZvb3RlckJ0bnNbYnRuXTtcbiAgICAgICAgICAgICAgICBmb29kRm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJ0bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2FkU2VsZWN0ZWRNZW51ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhcihmb29kQ29udGVudCk7XG4gICAgICAgICAgICAgICAgbG9hZEZvb2RDb250ZW50KGl0ZW0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb2QtZm9vdGVyLWJ0bicpLCAnZm9vZC1mb290ZXItYnRuLWFjdGl2ZScsIGxvYWRTZWxlY3RlZE1lbnUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZvb2RDb250ZW50ID0gY3JlYXRlRGl2KCdmb29kLWNvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGVudCk7XG4gICAgICAgIGxvYWRGb29kQ29udGVudCgpO1xuXG4gICAgICAgIGNvbnN0IGZvb2RGb290ZXIgPSBjcmVhdGVEaXYoJ2Zvb2QtZm9vdGVyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZEZvb3Rlcik7XG4gICAgICAgIGxvYWRGb29kRm9vdGVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyQXNpZGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItY29udGVudCcpO1xuICAgICAgICBjb25zdCBvcmRlckl0ZW1zID0gY3JlYXRlRGl2KCdvcmRlci1jb250ZW50LWl0ZW1zJyk7XG4gICAgICAgIGNvbnN0IG9yZGVyUHJpY2UgPSBjcmVhdGVEaXYoJ29yZGVyLWNvbnRlbnQtcHJpY2UnKTtcblxuICAgICAgICBjb25zdCBxdWFudGl0eUNvdW50ID0ge307XG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2UgPSAwO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbG9hZE9yZGVyID0gKHNlbGVjdGVkSXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmogPSBtZW51c0xpc3Rbc2VsZWN0ZWRJdGVtLmRhdGFzZXQubWVudUxpc3RdW3NlbGVjdGVkSXRlbS5kYXRhc2V0Lm1lbnVJdGVtXTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzZWxlY3RlZE9iai5uYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBzZWxlY3RlZE9iai5wcmljZTtcbiAgICAgICAgICAgIGNvbnN0IGltZ0xpbmsgPSBzZWxlY3RlZE9iai5pbWdMaW5rO1xuXG4gICAgICAgICAgICBjaGVja0lmT3JkZXJJc0VtcHR5KCk7XG5cbiAgICAgICAgICAgIGlmKCEocXVhbnRpdHlDb3VudFtuYW1lXSkpIHF1YW50aXR5Q291bnRbbmFtZV09MTtcbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlDb3VudFtuYW1lXSsrO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbXMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT0ke3NlbGVjdGVkSXRlbS5kYXRhc2V0Lm1lbnVJdGVtfV1gKSlcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxvYWRPcmRlckl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBRERFRFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlckl0ZW0gPSBjcmVhdGVEaXYoJ29yZGVyLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW0uZGF0YXNldC5uYW1lPXNlbGVjdGVkSXRlbS5kYXRhc2V0Lm1lbnVJdGVtO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nTGlua31cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tdGV4dFwiPiR7bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudC1wcmljZVwiPiQke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tcXVhbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1pdGVtLXRleHRcIj5RVUFOVElUWTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1pdGVtLXF1YW50aXR5LXRleHRcIj4ke3F1YW50aXR5Q291bnRbbmFtZV19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtcy5hcHBlbmRDaGlsZChvcmRlckl0ZW0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbG9hZE9yZGVySXRlbSgpO1xuICAgICAgICAgICAgY29uc3QgbG9hZE9yZGVyUHJpY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsb2FkT3JkZXJQcmljZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tJZk9yZGVySXNFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50LWVtcHR5Jykpe1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50LWVtcHR5JykpO1xuICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKG9yZGVySXRlbXMpO1xuICAgICAgICAgICAgICAgIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZChvcmRlclByaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4geyBsb2FkT3JkZXIgfVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBwYXltZW50ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ3BheW1lbnQ6KSdcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ29yZGVyczopJ1xuICAgIH1cblxuICAgIGNvbnN0IHNldHRpbmdzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ3NldHRpbmdzOiknXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZCA9IHtcbiAgICAgICAgbWVudUJ0bnMoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBsb2FkU2VsZWN0ZWRNZW51ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbk1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJIT01FXCI6IGhvbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiTUVOVVwiOiBtZW51LFxuICAgICAgICAgICAgICAgICAgICBcIlBBWU1FTlRcIjogcGF5bWVudCxcbiAgICAgICAgICAgICAgICAgICAgXCJPUkRFUlNcIjogb3JkZXJzLFxuICAgICAgICAgICAgICAgICAgICBcIlNFVFRJTkdTXCI6IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsZWFyKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25NYXBbaXRlbS5pZF0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUobWVudUFycmF5LCAnbWVudS1pdGVtLWFjdGl2ZScsIGxvYWRTZWxlY3RlZE1lbnUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhvbWVQYWdlKCkge1xuICAgICAgICAgICAgY2xlYXIoY29udGVudCk7XG4gICAgICAgICAgICBob21lKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3JkZXJFbXB0eSgpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50JylcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRW1wdHkgPSBjcmVhdGVEaXYoJ29yZGVyLWNvbnRlbnQtZW1wdHknKTtcbiAgICAgICAgICAgIG9yZGVyRW1wdHkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL29yZGVyLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItZW1wdHktdGV4dFwiPk5PIFBST0RVQ1RTIEFEREVEPC9wPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJFbXB0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA8IDEwKSBtb250aCA9IFwiMFwiICsgbW9udGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGhoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIGxldCBtbSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIHRpbWVJZC5pbm5lclRleHQgPSBgJHttb250aH0tJHtkYXl9LSR7eWVhcn0sICR7aGh9OiR7bW19YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjdXJyZW50VGltZSgpO1xuICAgICAgICAgICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiBjdXJyZW50VGltZSgpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGxvYWQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsImNvbnN0IG1lbnVPYmplY3QgPSAob2xkTmFtZSwgY2F0ZWdvcnksIHNwaWNpbmVzcywgaW1nTGluaywgcHJpY2UpID0+IHtcbiAgICBsZXQgbmFtZSA9IG9sZE5hbWUudG9VcHBlckNhc2UoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBzcGljaW5lc3MsXG4gICAgICAgIGltZ0xpbmssXG4gICAgICAgIHByaWNlXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7bWVudU9iamVjdH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSAnLi9VSS5qcyc7XG5cblVJLmxvYWQubWVudUJ0bnMoKTtcblVJLmxvYWQuaG9tZVBhZ2UoKTtcblVJLmxvYWQuZGF0ZSgpO1xuVUkubG9hZC5vcmRlckVtcHR5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9