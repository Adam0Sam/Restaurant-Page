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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


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

    const menuObjectFactory = (oldName, category, spiciness, imgLink, price) => {
        let name = oldName.toUpperCase();

        return {
            name,
            category,
            spiciness,
            imgLink,
            price
        };
    };

    // const menusList = menuObject; - An object saved in localStorage
    const menusList = {
        "STARTER": {
            item1: menuObjectFactory("chicken wings", "N", 2, "./images/chickenWing.jpg", 23),
            item2: menuObjectFactory("french fries", "G", 0, "./images/frenchFry.jpg", 23),
            item3: menuObjectFactory("glass meat", "G", 2, "./images/glassMeat.jpg", 23),
            item4: menuObjectFactory("glass meat", "G", 1, "./images/idkBread.jpg", 23),
            item5: menuObjectFactory("summer salad", "N", 1, "./images/summerSalad.jpg", 23),
            item7: menuObjectFactory("summer salad", "0%", 1, "./images/summerSalad.jpg", 23),
            item6: menuObjectFactory("chicken wings", "G", 2, "./images/idkBread.jpg", 19)
        },
        "MAIN COURSE": {
            item8: menuObjectFactory("summer salad", "N", 1, "./images/summerSalad.jpg", 23),
            item9: menuObjectFactory("summer salad", "0%", 1, "./images/summerSalad.jpg", 23),
            item10: menuObjectFactory("chicken wings", "G", 2, "./images/idkBread.jpg", 23)
        },
        "DRINKS": {
            item11: menuObjectFactory("bread", "G", 2, "./images/ikBread.jpg", 23),
            item12: menuObjectFactory("glass meat", "G", 2, "./images/glassMeat.jpg", 23),
            item13: menuObjectFactory("summer salad", "N", 1, "./images/summerSalad.jpg", 23),
            item14: menuObjectFactory("summer salad", "0%", 1, "./images/summerSalad.jpg", 23),
            item15: menuObjectFactory("chicken wings", "G", 2, "./images/idkBread.jpg", 23),
        },
        "DESSERTS": {
            item8: menuObjectFactory("glass meat", "G", 2, "./images/glassMeat.jpg", 23),
            item9: menuObjectFactory("glass meat", "G", 1, "./images/idkBread.jpg", 23),
            item3: menuObjectFactory("summer salad", "N", 1, "./images/summerSalad.jpg", 23),
            item4: menuObjectFactory("summer salad", "0%", 1, "./images/summerSalad.jpg", 23),
        }
    }

    const menu = () => {
        const loadFoodContent = (selectedMenuName = "STARTER") => {
            const selectedMenu = menusList[selectedMenuName];
            for (let item in selectedMenu) {
                const foodItemContainer = createDiv('food-item-container');
                const menuItem = selectedMenu[item];
                let spicyIcons = ``;
                for (let i = 0; i < menuItem.spiciness; i++) {
                    spicyIcons += `<img src="./images/chilli.svg">`
                }

                foodItemContainer.innerHTML =
                    `<div class="food-card" data-menu-list="${selectedMenuName}" data-menu-item="${item}">
                        <div class="food-img">
                            <img src="${menuItem.imgLink}">
                        </div>
                        <div class="food-info">
                            <p class="food-name">${menuItem.name}</p>
                            <div class="food-category-container">
                                <p class="food-category-text">CATEGORY:</p>
                                <div class="food-category-icons">${menuItem.category}
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
                        card.addEventListener('click', () => orderAside.loadOrder(card, false));
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

        let quantityCount = {};
        let totalPrice = 0;

        const loadOrder = (selectedCard, loadedFromCache) => {
            const selectedObj = menusList[selectedCard.dataset.menuList][selectedCard.dataset.menuItem];
            const id = selectedCard.dataset.menuItem;
            const name = selectedObj.name;
            const price = selectedObj.price;
            const imgLink = selectedObj.imgLink;

            if (!loadedFromCache) {
                _storage__WEBPACK_IMPORTED_MODULE_0__["default"].session.addOrderItem(selectedCard);
            }

            if (document.querySelector('.order-content-empty')) {
                clear(orderContent);
                orderContent.appendChild(orderItems);
                orderContent.appendChild(orderPrice);
            }

            const removeOrderItem = (item) => {
                const itemId = item.dataset.id;
                totalPrice -= item.dataset.price * quantityCount[itemId];
                delete quantityCount[itemId];
                orderItems.removeChild(item);
                _storage__WEBPACK_IMPORTED_MODULE_0__["default"].session.removeOrderItem(itemId);

                if (document.querySelectorAll('.order-item').length == 0) {
                    clear(orderContent);
                    load.orderEmpty();
                }
            };

            const loadOrderItem = () => {
                console.log("ADDED");
                totalPrice += price;
                const orderItemBg = createDiv('background-blur');
                orderItemBg.dataset.id = id;
                orderItemBg.dataset.price = price;
                orderItemBg.innerHTML = `
                <div class="order-item">
                    <div class="order-item-content">
                        <img src="${imgLink}" alt="">
                        <div class="order-item-content-info">
                            <p class="order-item-text">${name}</p>
                            <p class="order-item-content-price">$${price}</p>
                        </div>
                    </div>
                    <div class="order-item-quantity">
                        <p class="order-item-text">QUANTITY</p>
                        <p class="order-item-quantity-text">${quantityCount[id]}</p>
                    </div>
                </div>
                <button class="order-remove">REMOVE</button>
                `;
                orderItems.appendChild(orderItemBg);
                loadOrderPrice();

                const enableRemovBtnEffects = (() => {
                    const removeBtn = orderItemBg.querySelector('.order-remove');
                    //I was unable to find a css solution for the orderItem to be blurred when hovering over the removeBtn
                    const blurOrderItemWhileHoveringOverRemoveBtn = (() => {
                        const orderItemContentClasslist = orderItemBg.querySelector('.order-item').classList;

                        removeBtn.addEventListener('mouseenter', () =>
                            orderItemContentClasslist.add('order-item-blurred'));
                        removeBtn.addEventListener('mouseleave', () =>
                            orderItemContentClasslist.remove('order-item-blurred'));
                    })();

                    const revealRemoveBtn = () => {
                        removeBtn.classList.add('order-remove-visible');
                        console.log("visible");
                    };
                    const hideRemoveBtn = () => {
                        removeBtn.classList.remove('order-remove-visible');
                        console.log("invisible");
                    };

                    orderItemBg.addEventListener('mouseenter', () => revealRemoveBtn())
                    orderItemBg.addEventListener('focus', () => revealRemoveBtn());

                    orderItemBg.addEventListener('mouseleave', () => hideRemoveBtn());
                    orderItemBg.addEventListener('focusout', () => hideRemoveBtn());

                    removeBtn.addEventListener('click', () => {
                        removeOrderItem(orderItemBg);
                    });
                })();
            };

            const loadOrderPrice = () => {
                const surcharge = +((totalPrice * 0.1).toFixed(2));
                orderPrice.innerHTML = `
                <div class="order-content-price-info">
                    <div>
                        <p class="order-content-price-info-text">SUBTOTAL</p>
                        <p class="order-content-price-info-text">${totalPrice}</p>
                    </div>
                    <div>
                        <p class="order-content-price-info-text">SERVICE CHARGE <span class="order-content-price-info-surcharge">10%</span></p>
                        <p class="order-content-price-info-text">${surcharge}</p>
                    </div>
                </div>
                <div class="order-content-price-interact">
                    <div class="order-content-price-interact-info">
                        <p class="order-content-price-interact-info-text">TOTAL</p>
                        <p class="order-content-price-interact-info-text">${totalPrice + surcharge}</p>
                    </div>
                    <div class="order-content-price-interact-buttons">
                        <button class="order-cancel">CANCEL ORDER</button>
                        <button class="order-send">SEND ORDER</button>
                    </div>
                </div>
                `;

                document.querySelector('.order-cancel').addEventListener('click', () => {
                    clear(orderContent);
                    clear(orderItems);
                    clear(orderPrice);
                    totalPrice = 0;
                    quantityCount = {};
                    load.orderEmpty();
                    console.log("cleared");
                    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].session.removeAllOrderItems();
                });
            };

            if (!(quantityCount[id])) {
                quantityCount[id] = 1;
                loadOrderItem();
            }
            else {
                quantityCount[id]++;
                totalPrice += price;
                document.querySelector(`[data-id=${selectedCard.dataset.menuItem}]`)
                    .querySelector('.order-item-quantity-text').innerText = quantityCount[id];
                loadOrderPrice();
            }

        }

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

    return { load, orderAside };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");

const storage = (() => {
    //provided by mdn docs
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    };

    const session = (() => {
        const savedOrderItemList = JSON.parse(sessionStorage.getItem('orderItemList'));
        let orderItemList = savedOrderItemList ? savedOrderItemList : [];

        const log = () => {
            console.log('starting log..');
            if(orderItemList.length>0){

                orderItemList.forEach((listItem) => {
                    const id = listItem.match(/data-menu-item="([^"]+)"/);
                    console.log(id[1]);
                });
            }
            else console.log('empty');
        }
        const addOrderItem = (item) => {
            if (storageAvailable("sessionStorage")) {
                orderItemList.push(item.outerHTML);
                updateOrderItemList(orderItemList);
            }
        };

        const removeOrderItem = (targetId) => {
            if (storageAvailable('sessionStorage')) {
                const newOrderedItemList = orderItemList.filter(item => {
                    const itemId = item.match(/data-menu-item="([^"]+)"/)[1];
                    if(targetId!=itemId) return item;
                });
                updateOrderItemList(newOrderedItemList);
            }
        };

        const removeAllOrderItems = () => {
            orderItemList = [];
            updateOrderItemList();
        };

        const updateOrderItemList = (list) => {
            if(list && list.length>0){
                sessionStorage.setItem('orderItemList', 
                JSON.stringify(list));
            }
            else{
                sessionStorage.setItem('orderItemList', 
                JSON.stringify([]));
            }

        };

        const loadOrderItemList = () => {
            if (storageAvailable('sessionStorage')) {
                // const itemList = JSON.parse(sessionStorage.getItem('orderItemList'));
                if(orderItemList != null && orderItemList != []){
                        for (let item of orderItemList) {
                            const foodCardContainer = document.createElement('div');
                            foodCardContainer.innerHTML = item;
                            _UI__WEBPACK_IMPORTED_MODULE_0__["default"].orderAside.loadOrder(foodCardContainer.firstChild, true);
                        }
                }
            }
        };

        return { addOrderItem, removeOrderItem, removeAllOrderItems, loadOrderItemList };
    })();
    return { session };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].load.menuBtns();
_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].load.homePage();
_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].load.date();
_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].load.orderEmpty();

_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].session.loadOrderItemList();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTCxhQUFhO0FBQ2IsQ0FBQztBQUNELGlFQUFlLE9BQU87Ozs7OztVQ2hHdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDVTs7QUFFbkMsOENBQUU7QUFDRiw4Q0FBRTtBQUNGLDhDQUFFO0FBQ0YsOENBQUU7O0FBRUYsbURBQU8sNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgY29uc3QgYnV0dG9uc1RvZ2dsZSA9IChub2RlbGlzdCwgdG9nZ2xlQ2xhc3MsIGFkZGl0aW9uYWxGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gQXJyYXkuZnJvbShub2RlbGlzdCk7IC8vIGZvciBzb21lIHJlYXNvbiBJIG5lZWQgdG8gY29udmVydCB0aGUgbm9kZWxpc3QgaW50byBhbiBhcnJheSB3aXRoaW4gdGhlIGZ1bmN0aW9uIGl0c2VsZlxuICAgICAgICBsaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZUNsYXNzKSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQodG9nZ2xlQ2xhc3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhZGRpdGlvbmFsRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnKSBhZGRpdGlvbmFsRnVuY3Rpb24oaXRlbSk7XG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXIgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICB3aGlsZSAoZWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURpdiA9IChkaXZDbGFzcykgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZGl2Q2xhc3MpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICBjb25zdCBob21lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkTmFtZVRvcCA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hbWVUb3AuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBgPHA+VEFCTEUgTElTVDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxvb3ItYnRuIGZsb29yLTEgZmxvb3ItYnRuLWNsaWNrZWRcIj5GaXJzdCBGbG9vcjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsb29yLWJ0biBmbG9vci0yXCI+U2Vjb25kIEZsb29yPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lVG9wKTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRMb2FkaW5nVGFibGVzID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmbG9vciA9IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmbG9vci0xJykgPyAwIDogNjtcbiAgICAgICAgICAgICAgICBsb2FkVGFibGVzKGZsb29yKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvb3ItYnRuJyksICdmbG9vci1idG4tY2xpY2tlZCcsIHN0YXJ0TG9hZGluZ1RhYmxlcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZFRhYmxlcyA9IChmbG9vcikgPT4ge1xuICAgICAgICAgICAgY2xlYXIodGFibGVzKVxuICAgICAgICAgICAgdGFibGVzLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJsZXMpO1xuICAgICAgICAgICAgbG9hZFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgY29uc3Qgc2V0VGFibGVJZCA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVJZCA9IGl0ZW0uY2xhc3NMaXN0WzFdLnNwbGl0KCctJylbMV07XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLXNlbGVjdGlvbicpLmlubmVyVGV4dCA9IHRhYmxlSWQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudC10YWJsZScpLCAndGFibGUtY2xpY2tlZCcsIHNldFRhYmxlSWQpO1xuICAgICAgICAgICAgc2VsZWN0aW9uQnRuQ2xpY2tlZCgpO1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkU2VsZWN0aW9uID0gKHRhYmxlSWQpID0+IHtcbiAgICAgICAgICAgIGNsZWFyKHNlbGVjdGlvbik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhYmxlSWQgPT09ICd1bmRlZmluZWQnKSB0YWJsZUlkID0gXCJub3Qgc2VsZWN0ZWRcIjtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwib3JkZXItaWNvbnNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidGFibGUtaW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy9zbWFsbCB0YWJsZSBpY29uLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFibGUtdGV4dFwiPlRBQkxFOjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhYmxlLWNvdW50IHRhYmxlLXNlbGVjdGlvblwiPiR7dGFibGVJZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3Rpb24tYnRuXCI+U0VMRUNUIEFORCBDT05USU5VRTwvYnV0dG9uPmBcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdG5DbGlja2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3Rpb24tYnRuXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtc2VsZWN0aW9uJykuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGlmICh0YWJsZUlkID09PSAnbm90IHNlbGVjdGVkJykge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU2VsZWN0IGEgdGFibGUuJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLW9yZGVyJykuaW5uZXJUZXh0ID0gdGFibGVJZFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNRU5VJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgY2xlYXIoY29udGVudCk7XG5cbiAgICAgICAgY29uc3QgbmFtZVRvcCA9IGNyZWF0ZURpdignbmFtZS10b3AnKTtcbiAgICAgICAgbG9hZE5hbWVUb3AoKTtcblxuICAgICAgICBjb25zdCB0YWJsZXMgPSBjcmVhdGVEaXYoJ3RhYmxlcycpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBjcmVhdGVEaXYoJ3NlbGVjdGlvbicpO1xuICAgICAgICBsb2FkVGFibGVzKDApO1xuICAgIH07XG5cbiAgICBjb25zdCBtZW51T2JqZWN0RmFjdG9yeSA9IChvbGROYW1lLCBjYXRlZ29yeSwgc3BpY2luZXNzLCBpbWdMaW5rLCBwcmljZSkgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IG9sZE5hbWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgc3BpY2luZXNzLFxuICAgICAgICAgICAgaW1nTGluayxcbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIGNvbnN0IG1lbnVzTGlzdCA9IG1lbnVPYmplY3Q7IC0gQW4gb2JqZWN0IHNhdmVkIGluIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IG1lbnVzTGlzdCA9IHtcbiAgICAgICAgXCJTVEFSVEVSXCI6IHtcbiAgICAgICAgICAgIGl0ZW0xOiBtZW51T2JqZWN0RmFjdG9yeShcImNoaWNrZW4gd2luZ3NcIiwgXCJOXCIsIDIsIFwiLi9pbWFnZXMvY2hpY2tlbldpbmcuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0yOiBtZW51T2JqZWN0RmFjdG9yeShcImZyZW5jaCBmcmllc1wiLCBcIkdcIiwgMCwgXCIuL2ltYWdlcy9mcmVuY2hGcnkuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0RmFjdG9yeShcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvZ2xhc3NNZWF0LmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNDogbWVudU9iamVjdEZhY3RvcnkoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAxLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNTogbWVudU9iamVjdEZhY3RvcnkoXCJzdW1tZXIgc2FsYWRcIiwgXCJOXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW03OiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW02OiBtZW51T2JqZWN0RmFjdG9yeShcImNoaWNrZW4gd2luZ3NcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDE5KVxuICAgICAgICB9LFxuICAgICAgICBcIk1BSU4gQ09VUlNFXCI6IHtcbiAgICAgICAgICAgIGl0ZW04OiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTk6IG1lbnVPYmplY3RGYWN0b3J5KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTEwOiBtZW51T2JqZWN0RmFjdG9yeShcImNoaWNrZW4gd2luZ3NcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDIzKVxuICAgICAgICB9LFxuICAgICAgICBcIkRSSU5LU1wiOiB7XG4gICAgICAgICAgICBpdGVtMTE6IG1lbnVPYmplY3RGYWN0b3J5KFwiYnJlYWRcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWtCcmVhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTEyOiBtZW51T2JqZWN0RmFjdG9yeShcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvZ2xhc3NNZWF0LmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMTM6IG1lbnVPYmplY3RGYWN0b3J5KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMTQ6IG1lbnVPYmplY3RGYWN0b3J5KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTE1OiBtZW51T2JqZWN0RmFjdG9yeShcImNoaWNrZW4gd2luZ3NcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJERVNTRVJUU1wiOiB7XG4gICAgICAgICAgICBpdGVtODogbWVudU9iamVjdEZhY3RvcnkoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTk6IG1lbnVPYmplY3RGYWN0b3J5KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMSwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTM6IG1lbnVPYmplY3RGYWN0b3J5KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNDogbWVudU9iamVjdEZhY3RvcnkoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtZW51ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkRm9vZENvbnRlbnQgPSAoc2VsZWN0ZWRNZW51TmFtZSA9IFwiU1RBUlRFUlwiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1lbnUgPSBtZW51c0xpc3Rbc2VsZWN0ZWRNZW51TmFtZV07XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIGluIHNlbGVjdGVkTWVudSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvb2RJdGVtQ29udGFpbmVyID0gY3JlYXRlRGl2KCdmb29kLWl0ZW0tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBzZWxlY3RlZE1lbnVbaXRlbV07XG4gICAgICAgICAgICAgICAgbGV0IHNwaWN5SWNvbnMgPSBgYDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLnNwaWNpbmVzczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwaWN5SWNvbnMgKz0gYDxpbWcgc3JjPVwiLi9pbWFnZXMvY2hpbGxpLnN2Z1wiPmBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb29kSXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImZvb2QtY2FyZFwiIGRhdGEtbWVudS1saXN0PVwiJHtzZWxlY3RlZE1lbnVOYW1lfVwiIGRhdGEtbWVudS1pdGVtPVwiJHtpdGVtfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21lbnVJdGVtLmltZ0xpbmt9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtbmFtZVwiPiR7bWVudUl0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY2F0ZWdvcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1jYXRlZ29yeS10ZXh0XCI+Q0FURUdPUlk6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1jYXRlZ29yeS1pY29uc1wiPiR7bWVudUl0ZW0uY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3BpY3lJY29uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICAgICAgZm9vZENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1Db250YWluZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmb29kQ2FyZENsaWNrZWQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb29kLWNhcmQnKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcmRlckFzaWRlLmxvYWRPcmRlcihjYXJkLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZEZvb2RGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb290ZXJCdG5zID0gW1wiU1RBUlRFUlwiLCBcIk1BSU4gQ09VUlNFXCIsIFwiRFJJTktTXCIsIFwiREVTU0VSVFNcIl07XG4gICAgICAgICAgICBmb3IgKGxldCBidG4gaW4gZm9vdGVyQnRucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGZvb3RlckJ0bi5jbGFzc0xpc3QuYWRkKCdmb29kLWZvb3Rlci1idG4nKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyQnRuc1tidG5dID09PSBcIlNUQVJURVJcIikgZm9vdGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZm9vdGVyLWJ0bi1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBmb290ZXJCdG4uaW5uZXJUZXh0ID0gZm9vdGVyQnRuc1tidG5dO1xuICAgICAgICAgICAgICAgIGZvb2RGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvYWRTZWxlY3RlZE1lbnUgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyKGZvb2RDb250ZW50KTtcbiAgICAgICAgICAgICAgICBsb2FkRm9vZENvbnRlbnQoaXRlbS5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vZC1mb290ZXItYnRuJyksICdmb29kLWZvb3Rlci1idG4tYWN0aXZlJywgbG9hZFNlbGVjdGVkTWVudSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZm9vZENvbnRlbnQgPSBjcmVhdGVEaXYoJ2Zvb2QtY29udGVudCcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250ZW50KTtcbiAgICAgICAgbG9hZEZvb2RDb250ZW50KCk7XG5cbiAgICAgICAgY29uc3QgZm9vZEZvb3RlciA9IGNyZWF0ZURpdignZm9vZC1mb290ZXInKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb29kRm9vdGVyKTtcbiAgICAgICAgbG9hZEZvb2RGb290ZXIoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJBc2lkZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IG9yZGVySXRlbXMgPSBjcmVhdGVEaXYoJ29yZGVyLWNvbnRlbnQtaXRlbXMnKTtcbiAgICAgICAgY29uc3Qgb3JkZXJQcmljZSA9IGNyZWF0ZURpdignb3JkZXItY29udGVudC1wcmljZScpO1xuXG4gICAgICAgIGxldCBxdWFudGl0eUNvdW50ID0ge307XG4gICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcblxuICAgICAgICBjb25zdCBsb2FkT3JkZXIgPSAoc2VsZWN0ZWRDYXJkLCBsb2FkZWRGcm9tQ2FjaGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT2JqID0gbWVudXNMaXN0W3NlbGVjdGVkQ2FyZC5kYXRhc2V0Lm1lbnVMaXN0XVtzZWxlY3RlZENhcmQuZGF0YXNldC5tZW51SXRlbV07XG4gICAgICAgICAgICBjb25zdCBpZCA9IHNlbGVjdGVkQ2FyZC5kYXRhc2V0Lm1lbnVJdGVtO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNlbGVjdGVkT2JqLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IHNlbGVjdGVkT2JqLnByaWNlO1xuICAgICAgICAgICAgY29uc3QgaW1nTGluayA9IHNlbGVjdGVkT2JqLmltZ0xpbms7XG5cbiAgICAgICAgICAgIGlmICghbG9hZGVkRnJvbUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXNzaW9uLmFkZE9yZGVySXRlbShzZWxlY3RlZENhcmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWNvbnRlbnQtZW1wdHknKSkge1xuICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKG9yZGVySXRlbXMpO1xuICAgICAgICAgICAgICAgIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZChvcmRlclByaWNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlT3JkZXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSAtPSBpdGVtLmRhdGFzZXQucHJpY2UgKiBxdWFudGl0eUNvdW50W2l0ZW1JZF07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHF1YW50aXR5Q291bnRbaXRlbUlkXTtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1zLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2Vzc2lvbi5yZW1vdmVPcmRlckl0ZW0oaXRlbUlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXItaXRlbScpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQub3JkZXJFbXB0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGxvYWRPcmRlckl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBRERFRFwiKTtcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVySXRlbUJnID0gY3JlYXRlRGl2KCdiYWNrZ3JvdW5kLWJsdXInKTtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5kYXRhc2V0LmlkID0gaWQ7XG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuZGF0YXNldC5wcmljZSA9IHByaWNlO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbUJnLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nTGlua31cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1pdGVtLWNvbnRlbnQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItaXRlbS10ZXh0XCI+JHtuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudC1wcmljZVwiPiQke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tcXVhbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItaXRlbS10ZXh0XCI+UVVBTlRJVFk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tcXVhbnRpdHktdGV4dFwiPiR7cXVhbnRpdHlDb3VudFtpZF19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3JkZXItcmVtb3ZlXCI+UkVNT1ZFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1zLmFwcGVuZENoaWxkKG9yZGVySXRlbUJnKTtcbiAgICAgICAgICAgICAgICBsb2FkT3JkZXJQcmljZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZW5hYmxlUmVtb3ZCdG5FZmZlY3RzID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gb3JkZXJJdGVtQmcucXVlcnlTZWxlY3RvcignLm9yZGVyLXJlbW92ZScpO1xuICAgICAgICAgICAgICAgICAgICAvL0kgd2FzIHVuYWJsZSB0byBmaW5kIGEgY3NzIHNvbHV0aW9uIGZvciB0aGUgb3JkZXJJdGVtIHRvIGJlIGJsdXJyZWQgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSByZW1vdmVCdG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmx1ck9yZGVySXRlbVdoaWxlSG92ZXJpbmdPdmVyUmVtb3ZlQnRuID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVySXRlbUNvbnRlbnRDbGFzc2xpc3QgPSBvcmRlckl0ZW1CZy5xdWVyeVNlbGVjdG9yKCcub3JkZXItaXRlbScpLmNsYXNzTGlzdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySXRlbUNvbnRlbnRDbGFzc2xpc3QuYWRkKCdvcmRlci1pdGVtLWJsdXJyZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQ29udGVudENsYXNzbGlzdC5yZW1vdmUoJ29yZGVyLWl0ZW0tYmx1cnJlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZlYWxSZW1vdmVCdG4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnb3JkZXItcmVtb3ZlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZVJlbW92ZUJ0biA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvcmRlci1yZW1vdmUtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHJldmVhbFJlbW92ZUJ0bigpKVxuICAgICAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHJldmVhbFJlbW92ZUJ0bigpKTtcblxuICAgICAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gaGlkZVJlbW92ZUJ0bigpKTtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiBoaWRlUmVtb3ZlQnRuKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU9yZGVySXRlbShvcmRlckl0ZW1CZyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBsb2FkT3JkZXJQcmljZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdXJjaGFyZ2UgPSArKCh0b3RhbFByaWNlICogMC4xKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICBvcmRlclByaWNlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+U1VCVE9UQUw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+JHt0b3RhbFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+U0VSVklDRSBDSEFSR0UgPHNwYW4gY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWluZm8tc3VyY2hhcmdlXCI+MTAlPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvLXRleHRcIj4ke3N1cmNoYXJnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdC1pbmZvLXRleHRcIj5UT1RBTDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdC1pbmZvLXRleHRcIj4ke3RvdGFsUHJpY2UgKyBzdXJjaGFyZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW50ZXJhY3QtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLWNhbmNlbFwiPkNBTkNFTCBPUkRFUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLXNlbmRcIj5TRU5EIE9SREVSPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVySXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhcihvcmRlclByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5Q291bnQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZC5vcmRlckVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXNzaW9uLnJlbW92ZUFsbE9yZGVySXRlbXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghKHF1YW50aXR5Q291bnRbaWRdKSkge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5Q291bnRbaWRdID0gMTtcbiAgICAgICAgICAgICAgICBsb2FkT3JkZXJJdGVtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eUNvdW50W2lkXSsrO1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gcHJpY2U7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtzZWxlY3RlZENhcmQuZGF0YXNldC5tZW51SXRlbX1dYClcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1pdGVtLXF1YW50aXR5LXRleHQnKS5pbm5lclRleHQgPSBxdWFudGl0eUNvdW50W2lkXTtcbiAgICAgICAgICAgICAgICBsb2FkT3JkZXJQcmljZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBsb2FkT3JkZXIgfVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBwYXltZW50ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ3BheW1lbnQ6KSdcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ29yZGVyczopJ1xuICAgIH1cblxuICAgIGNvbnN0IHNldHRpbmdzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ3NldHRpbmdzOiknXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZCA9IHtcbiAgICAgICAgbWVudUJ0bnMoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBsb2FkU2VsZWN0ZWRNZW51ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbk1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJIT01FXCI6IGhvbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiTUVOVVwiOiBtZW51LFxuICAgICAgICAgICAgICAgICAgICBcIlBBWU1FTlRcIjogcGF5bWVudCxcbiAgICAgICAgICAgICAgICAgICAgXCJPUkRFUlNcIjogb3JkZXJzLFxuICAgICAgICAgICAgICAgICAgICBcIlNFVFRJTkdTXCI6IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsZWFyKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25NYXBbaXRlbS5pZF0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUobWVudUFycmF5LCAnbWVudS1pdGVtLWFjdGl2ZScsIGxvYWRTZWxlY3RlZE1lbnUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhvbWVQYWdlKCkge1xuICAgICAgICAgICAgY2xlYXIoY29udGVudCk7XG4gICAgICAgICAgICBob21lKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3JkZXJFbXB0eSgpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50JylcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRW1wdHkgPSBjcmVhdGVEaXYoJ29yZGVyLWNvbnRlbnQtZW1wdHknKTtcbiAgICAgICAgICAgIG9yZGVyRW1wdHkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL29yZGVyLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItZW1wdHktdGV4dFwiPk5PIFBST0RVQ1RTIEFEREVEPC9wPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJFbXB0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA8IDEwKSBtb250aCA9IFwiMFwiICsgbW9udGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGhoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIGxldCBtbSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIHRpbWVJZC5pbm5lclRleHQgPSBgJHttb250aH0tJHtkYXl9LSR7eWVhcn0sICR7aGh9OiR7bW19YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjdXJyZW50VGltZSgpO1xuICAgICAgICAgICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiBjdXJyZW50VGltZSgpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGxvYWQsIG9yZGVyQXNpZGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsImltcG9ydCBVSSBmcm9tIFwiLi9VSVwiO1xuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgLy9wcm92aWRlZCBieSBtZG4gZG9jc1xuICAgIGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgICAgICBsZXQgc3RvcmFnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICAgICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNlc3Npb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBzYXZlZE9yZGVySXRlbUxpc3QgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbUxpc3QnKSk7XG4gICAgICAgIGxldCBvcmRlckl0ZW1MaXN0ID0gc2F2ZWRPcmRlckl0ZW1MaXN0ID8gc2F2ZWRPcmRlckl0ZW1MaXN0IDogW107XG5cbiAgICAgICAgY29uc3QgbG9nID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGxvZy4uJyk7XG4gICAgICAgICAgICBpZihvcmRlckl0ZW1MaXN0Lmxlbmd0aD4wKXtcblxuICAgICAgICAgICAgICAgIG9yZGVySXRlbUxpc3QuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBsaXN0SXRlbS5tYXRjaCgvZGF0YS1tZW51LWl0ZW09XCIoW15cIl0rKVwiLyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkWzFdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY29uc29sZS5sb2coJ2VtcHR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkT3JkZXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwic2Vzc2lvblN0b3JhZ2VcIikpIHtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1MaXN0LnB1c2goaXRlbS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU9yZGVySXRlbUxpc3Qob3JkZXJJdGVtTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlT3JkZXJJdGVtID0gKHRhcmdldElkKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnc2Vzc2lvblN0b3JhZ2UnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld09yZGVyZWRJdGVtTGlzdCA9IG9yZGVySXRlbUxpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLm1hdGNoKC9kYXRhLW1lbnUtaXRlbT1cIihbXlwiXSspXCIvKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGFyZ2V0SWQhPWl0ZW1JZCkgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT3JkZXJJdGVtTGlzdChuZXdPcmRlcmVkSXRlbUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZUFsbE9yZGVySXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBvcmRlckl0ZW1MaXN0ID0gW107XG4gICAgICAgICAgICB1cGRhdGVPcmRlckl0ZW1MaXN0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXBkYXRlT3JkZXJJdGVtTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgICAgICBpZihsaXN0ICYmIGxpc3QubGVuZ3RoPjApe1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ29yZGVySXRlbUxpc3QnLCBcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ29yZGVySXRlbUxpc3QnLCBcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZE9yZGVySXRlbUxpc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnc2Vzc2lvblN0b3JhZ2UnKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGl0ZW1MaXN0ID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdvcmRlckl0ZW1MaXN0JykpO1xuICAgICAgICAgICAgICAgIGlmKG9yZGVySXRlbUxpc3QgIT0gbnVsbCAmJiBvcmRlckl0ZW1MaXN0ICE9IFtdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygb3JkZXJJdGVtTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvb2RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vZENhcmRDb250YWluZXIuaW5uZXJIVE1MID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSS5vcmRlckFzaWRlLmxvYWRPcmRlcihmb29kQ2FyZENvbnRhaW5lci5maXJzdENoaWxkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsgYWRkT3JkZXJJdGVtLCByZW1vdmVPcmRlckl0ZW0sIHJlbW92ZUFsbE9yZGVySXRlbXMsIGxvYWRPcmRlckl0ZW1MaXN0IH07XG4gICAgfSkoKTtcbiAgICByZXR1cm4geyBzZXNzaW9uIH07XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tICcuL1VJLmpzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cblVJLmxvYWQubWVudUJ0bnMoKTtcblVJLmxvYWQuaG9tZVBhZ2UoKTtcblVJLmxvYWQuZGF0ZSgpO1xuVUkubG9hZC5vcmRlckVtcHR5KCk7XG5cbnN0b3JhZ2Uuc2Vzc2lvbi5sb2FkT3JkZXJJdGVtTGlzdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==