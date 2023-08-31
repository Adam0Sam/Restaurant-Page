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

        const loadTableId = (tableId) => {
            if(typeof tableId === 'undefined'){
                const savedTableId = JSON.parse(sessionStorage.getItem('tableId'));
                tableId = savedTableId ? savedTableId : "not selected";
            }
            document.querySelector('.table-selection').innerText = tableId;
            document.querySelector('.table-order').innerText = tableId;

            sessionStorage.setItem('tableId', tableId);
        }

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
                loadTableId(tableId);
            };
            buttonsToggle(document.querySelectorAll('.restaurant-table'), 'table-clicked', setTableId);
            
        };


        const loadSelection = (tableId) => {
            clear(selection);
            selection.innerHTML =
                `<div class="order-icons">
                <img class="table-image" src="./images/small table icon.svg" alt="">
                <p class="table-text">TABLE:</p>
                <p class="table-count table-selection"></p>
            </div>
            <button id="selection-btn">SELECT AND CONTINUE</button>`
            content.appendChild(selection);
            loadTableId(tableId);
            selectionBtnClicked();
        };

        const selectionBtnClicked = () => {
            const button = document.getElementById("selection-btn");
            button.addEventListener('click', () => {
                const tableId = document.querySelector('.table-selection').innerText;
                if (tableId == 'not selected') {
                    alert('Select a table.');
                    return;
                }
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

    // TO BE CONTINUED    

    // const payment = () => {
    //     content.innerText = 'payment:)'
    // };

    // const orders = () => {
    //     content.innerText = 'orders:)'
    // }

    // const settings = () => {
    //     content.innerText = 'settings:)'
    // }

    const load = {
        menuBtns() {
            const menuArray = document.querySelectorAll('.menu-item');
            const loadSelectedMenu = (item) => {
                const functionMap = {
                    "HOME": home,
                    "MENU": menu,
                    // "PAYMENT": payment,
                    // "ORDERS": orders,
                    // "SETTINGS": settings
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb25zdCBidXR0b25zVG9nZ2xlID0gKG5vZGVsaXN0LCB0b2dnbGVDbGFzcywgYWRkaXRpb25hbEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBBcnJheS5mcm9tKG5vZGVsaXN0KTsgLy8gZm9yIHNvbWUgcmVhc29uIEkgbmVlZCB0byBjb252ZXJ0IHRoZSBub2RlbGlzdCBpbnRvIGFuIGFycmF5IHdpdGhpbiB0aGUgZnVuY3Rpb24gaXRzZWxmXG4gICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlQ2xhc3MpKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCh0b2dnbGVDbGFzcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFkZGl0aW9uYWxGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIGFkZGl0aW9uYWxGdW5jdGlvbihpdGVtKTtcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhciA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlRGl2ID0gKGRpdkNsYXNzKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChkaXZDbGFzcyk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfTtcblxuICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWROYW1lVG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgbmFtZVRvcC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8cD5UQUJMRSBMSVNUPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmbG9vci1idG4gZmxvb3ItMSBmbG9vci1idG4tY2xpY2tlZFwiPkZpcnN0IEZsb29yPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxvb3ItYnRuIGZsb29yLTJcIj5TZWNvbmQgRmxvb3I8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVUb3ApO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydExvYWRpbmdUYWJsZXMgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsb29yID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zsb29yLTEnKSA/IDAgOiA2O1xuICAgICAgICAgICAgICAgIGxvYWRUYWJsZXMoZmxvb3IpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBidXR0b25zVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9vci1idG4nKSwgJ2Zsb29yLWJ0bi1jbGlja2VkJywgc3RhcnRMb2FkaW5nVGFibGVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkVGFibGVJZCA9ICh0YWJsZUlkKSA9PiB7XG4gICAgICAgICAgICBpZih0eXBlb2YgdGFibGVJZCA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkVGFibGVJZCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndGFibGVJZCcpKTtcbiAgICAgICAgICAgICAgICB0YWJsZUlkID0gc2F2ZWRUYWJsZUlkID8gc2F2ZWRUYWJsZUlkIDogXCJub3Qgc2VsZWN0ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1zZWxlY3Rpb24nKS5pbm5lclRleHQgPSB0YWJsZUlkO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLW9yZGVyJykuaW5uZXJUZXh0ID0gdGFibGVJZDtcblxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGFibGVJZCcsIHRhYmxlSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZFRhYmxlcyA9IChmbG9vcikgPT4ge1xuICAgICAgICAgICAgY2xlYXIodGFibGVzKVxuICAgICAgICAgICAgdGFibGVzLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJsZXMpO1xuICAgICAgICAgICAgbG9hZFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgY29uc3Qgc2V0VGFibGVJZCA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVJZCA9IGl0ZW0uY2xhc3NMaXN0WzFdLnNwbGl0KCctJylbMV07XG4gICAgICAgICAgICAgICAgbG9hZFRhYmxlSWQodGFibGVJZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudC10YWJsZScpLCAndGFibGUtY2xpY2tlZCcsIHNldFRhYmxlSWQpO1xuICAgICAgICAgICAgXG4gICAgICAgIH07XG5cblxuICAgICAgICBjb25zdCBsb2FkU2VsZWN0aW9uID0gKHRhYmxlSWQpID0+IHtcbiAgICAgICAgICAgIGNsZWFyKHNlbGVjdGlvbik7XG4gICAgICAgICAgICBzZWxlY3Rpb24uaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm9yZGVyLWljb25zXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInRhYmxlLWltYWdlXCIgc3JjPVwiLi9pbWFnZXMvc21hbGwgdGFibGUgaWNvbi5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhYmxlLXRleHRcIj5UQUJMRTo8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJsZS1jb3VudCB0YWJsZS1zZWxlY3Rpb25cIj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3Rpb24tYnRuXCI+U0VMRUNUIEFORCBDT05USU5VRTwvYnV0dG9uPmBcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGxvYWRUYWJsZUlkKHRhYmxlSWQpO1xuICAgICAgICAgICAgc2VsZWN0aW9uQnRuQ2xpY2tlZCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ0bkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGlvbi1idG5cIik7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1zZWxlY3Rpb24nKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlSWQgPT0gJ25vdCBzZWxlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NlbGVjdCBhIHRhYmxlLicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNRU5VJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNsZWFyKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVUb3AgPSBjcmVhdGVEaXYoJ25hbWUtdG9wJyk7XG4gICAgICAgIGxvYWROYW1lVG9wKCk7XG5cbiAgICAgICAgY29uc3QgdGFibGVzID0gY3JlYXRlRGl2KCd0YWJsZXMnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gY3JlYXRlRGl2KCdzZWxlY3Rpb24nKTtcbiAgICAgICAgbG9hZFRhYmxlcygwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWVudU9iamVjdEZhY3RvcnkgPSAob2xkTmFtZSwgY2F0ZWdvcnksIHNwaWNpbmVzcywgaW1nTGluaywgcHJpY2UpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBvbGROYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgIHNwaWNpbmVzcyxcbiAgICAgICAgICAgIGltZ0xpbmssXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBjb25zdCBtZW51c0xpc3QgPSBtZW51T2JqZWN0OyAtIEFuIG9iamVjdCBzYXZlZCBpbiBsb2NhbFN0b3JhZ2VcbiAgICBjb25zdCBtZW51c0xpc3QgPSB7XG4gICAgICAgIFwiU1RBUlRFUlwiOiB7XG4gICAgICAgICAgICBpdGVtMTogbWVudU9iamVjdEZhY3RvcnkoXCJjaGlja2VuIHdpbmdzXCIsIFwiTlwiLCAyLCBcIi4vaW1hZ2VzL2NoaWNrZW5XaW5nLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMjogbWVudU9iamVjdEZhY3RvcnkoXCJmcmVuY2ggZnJpZXNcIiwgXCJHXCIsIDAsIFwiLi9pbWFnZXMvZnJlbmNoRnJ5LmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMzogbWVudU9iamVjdEZhY3RvcnkoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3RGYWN0b3J5KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMSwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTU6IG1lbnVPYmplY3RGYWN0b3J5KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNzogbWVudU9iamVjdEZhY3RvcnkoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNjogbWVudU9iamVjdEZhY3RvcnkoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAxOSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJNQUlOIENPVVJTRVwiOiB7XG4gICAgICAgICAgICBpdGVtODogbWVudU9iamVjdEZhY3RvcnkoXCJzdW1tZXIgc2FsYWRcIiwgXCJOXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW05OiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0xMDogbWVudU9iamVjdEZhY3RvcnkoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMylcbiAgICAgICAgfSxcbiAgICAgICAgXCJEUklOS1NcIjoge1xuICAgICAgICAgICAgaXRlbTExOiBtZW51T2JqZWN0RmFjdG9yeShcImJyZWFkXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0xMjogbWVudU9iamVjdEZhY3RvcnkoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTEzOiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTE0OiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0xNTogbWVudU9iamVjdEZhY3RvcnkoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMyksXG4gICAgICAgIH0sXG4gICAgICAgIFwiREVTU0VSVFNcIjoge1xuICAgICAgICAgICAgaXRlbTg6IG1lbnVPYmplY3RGYWN0b3J5KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9nbGFzc01lYXQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW05OiBtZW51T2JqZWN0RmFjdG9yeShcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDEsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3RGYWN0b3J5KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZEZvb2RDb250ZW50ID0gKHNlbGVjdGVkTWVudU5hbWUgPSBcIlNUQVJURVJcIikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNZW51ID0gbWVudXNMaXN0W3NlbGVjdGVkTWVudU5hbWVdO1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBzZWxlY3RlZE1lbnUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb29kSXRlbUNvbnRhaW5lciA9IGNyZWF0ZURpdignZm9vZC1pdGVtLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gc2VsZWN0ZWRNZW51W2l0ZW1dO1xuICAgICAgICAgICAgICAgIGxldCBzcGljeUljb25zID0gYGA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5zcGljaW5lc3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzcGljeUljb25zICs9IGA8aW1nIHNyYz1cIi4vaW1hZ2VzL2NoaWxsaS5zdmdcIj5gXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9vZEl0ZW1Db250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJmb29kLWNhcmRcIiBkYXRhLW1lbnUtbGlzdD1cIiR7c2VsZWN0ZWRNZW51TmFtZX1cIiBkYXRhLW1lbnUtaXRlbT1cIiR7aXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZW51SXRlbS5pbWdMaW5rfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLW5hbWVcIj4ke21lbnVJdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWNhdGVnb3J5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtY2F0ZWdvcnktdGV4dFwiPkNBVEVHT1JZOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY2F0ZWdvcnktaWNvbnNcIj4ke21lbnVJdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3NwaWN5SWNvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICAgIGZvb2RDb250ZW50LmFwcGVuZENoaWxkKGZvb2RJdGVtQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZm9vZENhcmRDbGlja2VkID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vZC1jYXJkJylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3JkZXJBc2lkZS5sb2FkT3JkZXIoY2FyZCwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRGb29kRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyQnRucyA9IFtcIlNUQVJURVJcIiwgXCJNQUlOIENPVVJTRVwiLCBcIkRSSU5LU1wiLCBcIkRFU1NFUlRTXCJdO1xuICAgICAgICAgICAgZm9yIChsZXQgYnRuIGluIGZvb3RlckJ0bnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBmb290ZXJCdG4uY2xhc3NMaXN0LmFkZCgnZm9vZC1mb290ZXItYnRuJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZvb3RlckJ0bnNbYnRuXSA9PT0gXCJTVEFSVEVSXCIpIGZvb3RlckJ0bi5jbGFzc0xpc3QuYWRkKCdmb29kLWZvb3Rlci1idG4tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyQnRuLmlubmVyVGV4dCA9IGZvb3RlckJ0bnNbYnRuXTtcbiAgICAgICAgICAgICAgICBmb29kRm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJ0bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2FkU2VsZWN0ZWRNZW51ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhcihmb29kQ29udGVudCk7XG4gICAgICAgICAgICAgICAgbG9hZEZvb2RDb250ZW50KGl0ZW0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb2QtZm9vdGVyLWJ0bicpLCAnZm9vZC1mb290ZXItYnRuLWFjdGl2ZScsIGxvYWRTZWxlY3RlZE1lbnUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZvb2RDb250ZW50ID0gY3JlYXRlRGl2KCdmb29kLWNvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGVudCk7XG4gICAgICAgIGxvYWRGb29kQ29udGVudCgpO1xuXG4gICAgICAgIGNvbnN0IGZvb2RGb290ZXIgPSBjcmVhdGVEaXYoJ2Zvb2QtZm9vdGVyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZEZvb3Rlcik7XG4gICAgICAgIGxvYWRGb29kRm9vdGVyKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVyQXNpZGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItY29udGVudCcpO1xuICAgICAgICBjb25zdCBvcmRlckl0ZW1zID0gY3JlYXRlRGl2KCdvcmRlci1jb250ZW50LWl0ZW1zJyk7XG4gICAgICAgIGNvbnN0IG9yZGVyUHJpY2UgPSBjcmVhdGVEaXYoJ29yZGVyLWNvbnRlbnQtcHJpY2UnKTtcblxuICAgICAgICBsZXQgcXVhbnRpdHlDb3VudCA9IHt9O1xuICAgICAgICBsZXQgdG90YWxQcmljZSA9IDA7XG5cbiAgICAgICAgY29uc3QgbG9hZE9yZGVyID0gKHNlbGVjdGVkQ2FyZCwgbG9hZGVkRnJvbUNhY2hlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9iaiA9IG1lbnVzTGlzdFtzZWxlY3RlZENhcmQuZGF0YXNldC5tZW51TGlzdF1bc2VsZWN0ZWRDYXJkLmRhdGFzZXQubWVudUl0ZW1dO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBzZWxlY3RlZENhcmQuZGF0YXNldC5tZW51SXRlbTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzZWxlY3RlZE9iai5uYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBzZWxlY3RlZE9iai5wcmljZTtcbiAgICAgICAgICAgIGNvbnN0IGltZ0xpbmsgPSBzZWxlY3RlZE9iai5pbWdMaW5rO1xuXG4gICAgICAgICAgICBpZiAoIWxvYWRlZEZyb21DYWNoZSkge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2Vzc2lvbi5hZGRPcmRlckl0ZW0oc2VsZWN0ZWRDYXJkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50LWVtcHR5JykpIHtcbiAgICAgICAgICAgICAgICBjbGVhcihvcmRlckNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZChvcmRlckl0ZW1zKTtcbiAgICAgICAgICAgICAgICBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJQcmljZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZU9yZGVySXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgLT0gaXRlbS5kYXRhc2V0LnByaWNlICogcXVhbnRpdHlDb3VudFtpdGVtSWRdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBxdWFudGl0eUNvdW50W2l0ZW1JZF07XG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtcy5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNlc3Npb24ucmVtb3ZlT3JkZXJJdGVtKGl0ZW1JZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyLWl0ZW0nKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhcihvcmRlckNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkLm9yZGVyRW1wdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBsb2FkT3JkZXJJdGVtID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQURERURcIik7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBwcmljZTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlckl0ZW1CZyA9IGNyZWF0ZURpdignYmFja2dyb3VuZC1ibHVyJyk7XG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuZGF0YXNldC5pZCA9IGlkO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbUJnLmRhdGFzZXQucHJpY2UgPSBwcmljZTtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZ0xpbmt9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItaXRlbS1jb250ZW50LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tdGV4dFwiPiR7bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1pdGVtLWNvbnRlbnQtcHJpY2VcIj4kJHtwcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1pdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tdGV4dFwiPlFVQU5USVRZPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1pdGVtLXF1YW50aXR5LXRleHRcIj4ke3F1YW50aXR5Q291bnRbaWRdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLXJlbW92ZVwiPlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtcy5hcHBlbmRDaGlsZChvcmRlckl0ZW1CZyk7XG4gICAgICAgICAgICAgICAgbG9hZE9yZGVyUHJpY2UoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVuYWJsZVJlbW92QnRuRWZmZWN0cyA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IG9yZGVySXRlbUJnLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1yZW1vdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy9JIHdhcyB1bmFibGUgdG8gZmluZCBhIGNzcyBzb2x1dGlvbiBmb3IgdGhlIG9yZGVySXRlbSB0byBiZSBibHVycmVkIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgcmVtb3ZlQnRuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsdXJPcmRlckl0ZW1XaGlsZUhvdmVyaW5nT3ZlclJlbW92ZUJ0biA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlckl0ZW1Db250ZW50Q2xhc3NsaXN0ID0gb3JkZXJJdGVtQmcucXVlcnlTZWxlY3RvcignLm9yZGVyLWl0ZW0nKS5jbGFzc0xpc3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckl0ZW1Db250ZW50Q2xhc3NsaXN0LmFkZCgnb3JkZXItaXRlbS1ibHVycmVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySXRlbUNvbnRlbnRDbGFzc2xpc3QucmVtb3ZlKCdvcmRlci1pdGVtLWJsdXJyZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2ZWFsUmVtb3ZlQnRuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ29yZGVyLXJlbW92ZS12aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVSZW1vdmVCdG4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb3JkZXItcmVtb3ZlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG9yZGVySXRlbUJnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiByZXZlYWxSZW1vdmVCdG4oKSlcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiByZXZlYWxSZW1vdmVCdG4oKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IGhpZGVSZW1vdmVCdG4oKSk7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVySXRlbUJnLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4gaGlkZVJlbW92ZUJ0bigpKTtcblxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVPcmRlckl0ZW0ob3JkZXJJdGVtQmcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbG9hZE9yZGVyUHJpY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VyY2hhcmdlID0gKygodG90YWxQcmljZSAqIDAuMSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgb3JkZXJQcmljZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWluZm8tdGV4dFwiPlNVQlRPVEFMPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWluZm8tdGV4dFwiPiR7dG90YWxQcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWluZm8tdGV4dFwiPlNFUlZJQ0UgQ0hBUkdFIDxzcGFuIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvLXN1cmNoYXJnZVwiPjEwJTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+JHtzdXJjaGFyZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW50ZXJhY3QtaW5mby10ZXh0XCI+VE9UQUw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW50ZXJhY3QtaW5mby10ZXh0XCI+JHt0b3RhbFByaWNlICsgc3VyY2hhcmdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvcmRlci1jYW5jZWxcIj5DQU5DRUwgT1JERVI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvcmRlci1zZW5kXCI+U0VORCBPUkRFUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWNhbmNlbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhcihvcmRlckNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhcihvcmRlckl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIob3JkZXJQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgPSAwO1xuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eUNvdW50ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGxvYWQub3JkZXJFbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2Vzc2lvbi5yZW1vdmVBbGxPcmRlckl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIShxdWFudGl0eUNvdW50W2lkXSkpIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eUNvdW50W2lkXSA9IDE7XG4gICAgICAgICAgICAgICAgbG9hZE9yZGVySXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlDb3VudFtpZF0rKztcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7c2VsZWN0ZWRDYXJkLmRhdGFzZXQubWVudUl0ZW19XWApXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcub3JkZXItaXRlbS1xdWFudGl0eS10ZXh0JykuaW5uZXJUZXh0ID0gcXVhbnRpdHlDb3VudFtpZF07XG4gICAgICAgICAgICAgICAgbG9hZE9yZGVyUHJpY2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgbG9hZE9yZGVyIH1cbiAgICB9KSgpO1xuXG4gICAgLy8gVE8gQkUgQ09OVElOVUVEICAgIFxuXG4gICAgLy8gY29uc3QgcGF5bWVudCA9ICgpID0+IHtcbiAgICAvLyAgICAgY29udGVudC5pbm5lclRleHQgPSAncGF5bWVudDopJ1xuICAgIC8vIH07XG5cbiAgICAvLyBjb25zdCBvcmRlcnMgPSAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnRlbnQuaW5uZXJUZXh0ID0gJ29yZGVyczopJ1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHNldHRpbmdzID0gKCkgPT4ge1xuICAgIC8vICAgICBjb250ZW50LmlubmVyVGV4dCA9ICdzZXR0aW5nczopJ1xuICAgIC8vIH1cblxuICAgIGNvbnN0IGxvYWQgPSB7XG4gICAgICAgIG1lbnVCdG5zKCkge1xuICAgICAgICAgICAgY29uc3QgbWVudUFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgbG9hZFNlbGVjdGVkTWVudSA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25NYXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiSE9NRVwiOiBob21lLFxuICAgICAgICAgICAgICAgICAgICBcIk1FTlVcIjogbWVudSxcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJQQVlNRU5UXCI6IHBheW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIC8vIFwiT1JERVJTXCI6IG9yZGVycyxcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJTRVRUSU5HU1wiOiBzZXR0aW5nc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGVhcihjb250ZW50KVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTWFwW2l0ZW0uaWRdKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b25zVG9nZ2xlKG1lbnVBcnJheSwgJ21lbnUtaXRlbS1hY3RpdmUnLCBsb2FkU2VsZWN0ZWRNZW51KTtcbiAgICAgICAgfSxcblxuICAgICAgICBob21lUGFnZSgpIHtcbiAgICAgICAgICAgIGNsZWFyKGNvbnRlbnQpO1xuICAgICAgICAgICAgaG9tZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9yZGVyRW1wdHkoKSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItY29udGVudCcpXG4gICAgICAgICAgICBjb25zdCBvcmRlckVtcHR5ID0gY3JlYXRlRGl2KCdvcmRlci1jb250ZW50LWVtcHR5Jyk7XG4gICAgICAgICAgICBvcmRlckVtcHR5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9vcmRlci5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWVtcHR5LXRleHRcIj5OTyBQUk9EVUNUUyBBRERFRDwvcD5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKG9yZGVyRW1wdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGUoKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS10ZXh0Jyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPCAxMCkgbW9udGggPSBcIjBcIiArIG1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGxldCBoaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW0gPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgICB0aW1lSWQuaW5uZXJUZXh0ID0gYCR7bW9udGh9LSR7ZGF5fS0ke3llYXJ9LCAke2hofToke21tfWA7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY3VycmVudFRpbWUoKTtcbiAgICAgICAgICAgIGxldCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4gY3VycmVudFRpbWUoKSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBsb2FkLCBvcmRlckFzaWRlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vVUlcIjtcbmNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgIC8vcHJvdmlkZWQgYnkgbWRuIGRvY3NcbiAgICBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICAgICAgbGV0IHN0b3JhZ2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXNzaW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2F2ZWRPcmRlckl0ZW1MaXN0ID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdvcmRlckl0ZW1MaXN0JykpO1xuICAgICAgICBsZXQgb3JkZXJJdGVtTGlzdCA9IHNhdmVkT3JkZXJJdGVtTGlzdCA/IHNhdmVkT3JkZXJJdGVtTGlzdCA6IFtdO1xuXG4gICAgICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBsb2cuLicpO1xuICAgICAgICAgICAgaWYob3JkZXJJdGVtTGlzdC5sZW5ndGg+MCl7XG5cbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1MaXN0LmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gbGlzdEl0ZW0ubWF0Y2goL2RhdGEtbWVudS1pdGVtPVwiKFteXCJdKylcIi8pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZFsxXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdlbXB0eScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFkZE9yZGVySXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcInNlc3Npb25TdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtTGlzdC5wdXNoKGl0ZW0ub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPcmRlckl0ZW1MaXN0KG9yZGVySXRlbUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZU9yZGVySXRlbSA9ICh0YXJnZXRJZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ3Nlc3Npb25TdG9yYWdlJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdPcmRlcmVkSXRlbUxpc3QgPSBvcmRlckl0ZW1MaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5tYXRjaCgvZGF0YS1tZW51LWl0ZW09XCIoW15cIl0rKVwiLylbMV07XG4gICAgICAgICAgICAgICAgICAgIGlmKHRhcmdldElkIT1pdGVtSWQpIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU9yZGVySXRlbUxpc3QobmV3T3JkZXJlZEl0ZW1MaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZW1vdmVBbGxPcmRlckl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgb3JkZXJJdGVtTGlzdCA9IFtdO1xuICAgICAgICAgICAgdXBkYXRlT3JkZXJJdGVtTGlzdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZU9yZGVySXRlbUxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICAgICAgaWYobGlzdCAmJiBsaXN0Lmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1MaXN0JywgXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1MaXN0JywgXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRPcmRlckl0ZW1MaXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ3Nlc3Npb25TdG9yYWdlJykpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBpdGVtTGlzdCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJJdGVtTGlzdCcpKTtcbiAgICAgICAgICAgICAgICBpZihvcmRlckl0ZW1MaXN0ICE9IG51bGwgJiYgb3JkZXJJdGVtTGlzdCAhPSBbXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG9yZGVySXRlbUxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb29kQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvb2RDYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkub3JkZXJBc2lkZS5sb2FkT3JkZXIoZm9vZENhcmRDb250YWluZXIuZmlyc3RDaGlsZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7IGFkZE9yZGVySXRlbSwgcmVtb3ZlT3JkZXJJdGVtLCByZW1vdmVBbGxPcmRlckl0ZW1zLCBsb2FkT3JkZXJJdGVtTGlzdCB9O1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIHsgc2Vzc2lvbiB9O1xufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSAnLi9VSS5qcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5VSS5sb2FkLm1lbnVCdG5zKCk7XG5VSS5sb2FkLmhvbWVQYWdlKCk7XG5VSS5sb2FkLmRhdGUoKTtcblVJLmxvYWQub3JkZXJFbXB0eSgpO1xuXG5zdG9yYWdlLnNlc3Npb24ubG9hZE9yZGVySXRlbUxpc3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=