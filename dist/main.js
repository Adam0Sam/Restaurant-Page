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

        let quantityCount = {};
        let totalPrice = 0;

        const loadOrder = (selectedCard) => {
            const selectedObj = menusList[selectedCard.dataset.menuList][selectedCard.dataset.menuItem];
            const id = selectedCard.dataset.menuItem;
            const name = selectedObj.name;
            const price = selectedObj.price;
            const imgLink = selectedObj.imgLink;

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
        let orderItemList = [];
        
        const log = () => {
            orderItemList.forEach((listItem) => console.log(listItem));
        }
        const addOrderItem = (item) => {
            if (storageAvailable("sessionStorage")) {
                orderItemList.push(item.outerHTML);
                updateOrderItemList();
            }
        };

        const removeOrderItem = (item) => {
            if (storageAvailable('sessionStorage')) {
                const itemToRemove = item.outerHTML;
                orderItemList = orderItemList
                    .filter(listItem => listItem !== itemToRemove);
                updateOrderItemList();
            }
        };

        const removeAllOrderItems = () => {
            orderItemList = [];
            updateOrderItemList();
        };

        const updateOrderItemList = () => {
            sessionStorage.setItem('orderItemList',
                JSON.stringify(orderItemList));
        };

        const loadOrderItemList = () => {
            if (storageAvailable('sessionStorage')) {
                const itemList = JSON.parse(sessionStorage.getItem('orderItemList'));
                if (itemList.length > 0) {
                    for (let item of itemList) {
                        const foodCardContainer = document.createElement('div');
                        foodCardContainer.innerHTML = item;
                        _UI__WEBPACK_IMPORTED_MODULE_0__["default"].orderAside.loadOrder(foodCardContainer.firstChild)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0wsYUFBYTtBQUNiLENBQUM7QUFDRCxpRUFBZSxPQUFPOzs7Ozs7VUMvRXRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ1U7O0FBRW5DLDhDQUFFO0FBQ0YsOENBQUU7QUFDRiw4Q0FBRTtBQUNGLDhDQUFFOztBQUVGLG1EQUFPLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGJ1dHRvbnNUb2dnbGUgPSAobm9kZWxpc3QsIHRvZ2dsZUNsYXNzLCBhZGRpdGlvbmFsRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20obm9kZWxpc3QpOyAvLyBmb3Igc29tZSByZWFzb24gSSBuZWVkIHRvIGNvbnZlcnQgdGhlIG5vZGVsaXN0IGludG8gYW4gYXJyYXkgd2l0aGluIHRoZSBmdW5jdGlvbiBpdHNlbGZcbiAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGVDbGFzcykpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHRvZ2dsZUNsYXNzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkaXRpb25hbEZ1bmN0aW9uICE9PSAndW5kZWZpbmVkJykgYWRkaXRpb25hbEZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVEaXYgPSAoZGl2Q2xhc3MpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGRpdkNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZE5hbWVUb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYW1lVG9wLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgYDxwPlRBQkxFIExJU1Q8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsb29yLWJ0biBmbG9vci0xIGZsb29yLWJ0bi1jbGlja2VkXCI+Rmlyc3QgRmxvb3I8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmbG9vci1idG4gZmxvb3ItMlwiPlNlY29uZCBGbG9vcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZVRvcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0TG9hZGluZ1RhYmxlcyA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxvb3IgPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZmxvb3ItMScpID8gMCA6IDY7XG4gICAgICAgICAgICAgICAgbG9hZFRhYmxlcyhmbG9vcilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb29yLWJ0bicpLCAnZmxvb3ItYnRuLWNsaWNrZWQnLCBzdGFydExvYWRpbmdUYWJsZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRUYWJsZXMgPSAoZmxvb3IpID0+IHtcbiAgICAgICAgICAgIGNsZWFyKHRhYmxlcylcbiAgICAgICAgICAgIHRhYmxlcy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFibGVzKTtcbiAgICAgICAgICAgIGxvYWRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHNldFRhYmxlSWQgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSWQgPSBpdGVtLmNsYXNzTGlzdFsxXS5zcGxpdCgnLScpWzFdO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1zZWxlY3Rpb24nKS5pbm5lclRleHQgPSB0YWJsZUlkO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnQtdGFibGUnKSwgJ3RhYmxlLWNsaWNrZWQnLCBzZXRUYWJsZUlkKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbkJ0bkNsaWNrZWQoKTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZFNlbGVjdGlvbiA9ICh0YWJsZUlkKSA9PiB7XG4gICAgICAgICAgICBjbGVhcihzZWxlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YWJsZUlkID09PSAndW5kZWZpbmVkJykgdGFibGVJZCA9IFwibm90IHNlbGVjdGVkXCI7XG4gICAgICAgICAgICBzZWxlY3Rpb24uaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm9yZGVyLWljb25zXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInRhYmxlLWltYWdlXCIgc3JjPVwiLi9pbWFnZXMvc21hbGwgdGFibGUgaWNvbi5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhYmxlLXRleHRcIj5UQUJMRTo8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJsZS1jb3VudCB0YWJsZS1zZWxlY3Rpb25cIj4ke3RhYmxlSWR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0aW9uLWJ0blwiPlNFTEVDVCBBTkQgQ09OVElOVUU8L2J1dHRvbj5gXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnRuQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0aW9uLWJ0blwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLXNlbGVjdGlvbicpLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAodGFibGVJZCA9PT0gJ25vdCBzZWxlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NlbGVjdCBhIHRhYmxlLicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1vcmRlcicpLmlubmVyVGV4dCA9IHRhYmxlSWRcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTUVOVScpLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNsZWFyKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVUb3AgPSBjcmVhdGVEaXYoJ25hbWUtdG9wJyk7XG4gICAgICAgIGxvYWROYW1lVG9wKCk7XG5cbiAgICAgICAgY29uc3QgdGFibGVzID0gY3JlYXRlRGl2KCd0YWJsZXMnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gY3JlYXRlRGl2KCdzZWxlY3Rpb24nKTtcbiAgICAgICAgbG9hZFRhYmxlcygwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWVudU9iamVjdEZhY3RvcnkgPSAob2xkTmFtZSwgY2F0ZWdvcnksIHNwaWNpbmVzcywgaW1nTGluaywgcHJpY2UpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBvbGROYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgIHNwaWNpbmVzcyxcbiAgICAgICAgICAgIGltZ0xpbmssXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBjb25zdCBtZW51c0xpc3QgPSBtZW51T2JqZWN0OyAtIEFuIG9iamVjdCBzYXZlZCBpbiBsb2NhbFN0b3JhZ2VcbiAgICBjb25zdCBtZW51c0xpc3QgPSB7XG4gICAgICAgIFwiU1RBUlRFUlwiOiB7XG4gICAgICAgICAgICBpdGVtMTogbWVudU9iamVjdEZhY3RvcnkoXCJjaGlja2VuIHdpbmdzXCIsIFwiTlwiLCAyLCBcIi4vaW1hZ2VzL2NoaWNrZW5XaW5nLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMjogbWVudU9iamVjdEZhY3RvcnkoXCJmcmVuY2ggZnJpZXNcIiwgXCJHXCIsIDAsIFwiLi9pbWFnZXMvZnJlbmNoRnJ5LmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMzogbWVudU9iamVjdEZhY3RvcnkoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3RGYWN0b3J5KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMSwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTU6IG1lbnVPYmplY3RGYWN0b3J5KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNzogbWVudU9iamVjdEZhY3RvcnkoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNjogbWVudU9iamVjdEZhY3RvcnkoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAxOSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJNQUlOIENPVVJTRVwiOiB7XG4gICAgICAgICAgICBpdGVtODogbWVudU9iamVjdEZhY3RvcnkoXCJzdW1tZXIgc2FsYWRcIiwgXCJOXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW05OiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0xMDogbWVudU9iamVjdEZhY3RvcnkoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMylcbiAgICAgICAgfSxcbiAgICAgICAgXCJEUklOS1NcIjoge1xuICAgICAgICAgICAgaXRlbTExOiBtZW51T2JqZWN0RmFjdG9yeShcImJyZWFkXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0xMjogbWVudU9iamVjdEZhY3RvcnkoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTEzOiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTE0OiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0xNTogbWVudU9iamVjdEZhY3RvcnkoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMyksXG4gICAgICAgIH0sXG4gICAgICAgIFwiREVTU0VSVFNcIjoge1xuICAgICAgICAgICAgaXRlbTg6IG1lbnVPYmplY3RGYWN0b3J5KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9nbGFzc01lYXQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW05OiBtZW51T2JqZWN0RmFjdG9yeShcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDEsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0RmFjdG9yeShcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3RGYWN0b3J5KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZEZvb2RDb250ZW50ID0gKHNlbGVjdGVkTWVudU5hbWUgPSBcIlNUQVJURVJcIikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNZW51ID0gbWVudXNMaXN0W3NlbGVjdGVkTWVudU5hbWVdO1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBzZWxlY3RlZE1lbnUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb29kSXRlbUNvbnRhaW5lciA9IGNyZWF0ZURpdignZm9vZC1pdGVtLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gc2VsZWN0ZWRNZW51W2l0ZW1dO1xuICAgICAgICAgICAgICAgIGxldCBzcGljeUljb25zID0gYGA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5zcGljaW5lc3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzcGljeUljb25zICs9IGA8aW1nIHNyYz1cIi4vaW1hZ2VzL2NoaWxsaS5zdmdcIj5gXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9vZEl0ZW1Db250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJmb29kLWNhcmRcIiBkYXRhLW1lbnUtbGlzdD1cIiR7c2VsZWN0ZWRNZW51TmFtZX1cIiBkYXRhLW1lbnUtaXRlbT1cIiR7aXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZW51SXRlbS5pbWdMaW5rfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLW5hbWVcIj4ke21lbnVJdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWNhdGVnb3J5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtY2F0ZWdvcnktdGV4dFwiPkNBVEVHT1JZOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY2F0ZWdvcnktaWNvbnNcIj4ke21lbnVJdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3NwaWN5SWNvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICAgIGZvb2RDb250ZW50LmFwcGVuZENoaWxkKGZvb2RJdGVtQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZm9vZENhcmRDbGlja2VkID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vZC1jYXJkJylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3JkZXJBc2lkZS5sb2FkT3JkZXIoY2FyZCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZEZvb2RGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb290ZXJCdG5zID0gW1wiU1RBUlRFUlwiLCBcIk1BSU4gQ09VUlNFXCIsIFwiRFJJTktTXCIsIFwiREVTU0VSVFNcIl07XG4gICAgICAgICAgICBmb3IgKGxldCBidG4gaW4gZm9vdGVyQnRucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGZvb3RlckJ0bi5jbGFzc0xpc3QuYWRkKCdmb29kLWZvb3Rlci1idG4nKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyQnRuc1tidG5dID09PSBcIlNUQVJURVJcIikgZm9vdGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZm9vdGVyLWJ0bi1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBmb290ZXJCdG4uaW5uZXJUZXh0ID0gZm9vdGVyQnRuc1tidG5dO1xuICAgICAgICAgICAgICAgIGZvb2RGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvYWRTZWxlY3RlZE1lbnUgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyKGZvb2RDb250ZW50KTtcbiAgICAgICAgICAgICAgICBsb2FkRm9vZENvbnRlbnQoaXRlbS5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vZC1mb290ZXItYnRuJyksICdmb29kLWZvb3Rlci1idG4tYWN0aXZlJywgbG9hZFNlbGVjdGVkTWVudSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZm9vZENvbnRlbnQgPSBjcmVhdGVEaXYoJ2Zvb2QtY29udGVudCcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250ZW50KTtcbiAgICAgICAgbG9hZEZvb2RDb250ZW50KCk7XG5cbiAgICAgICAgY29uc3QgZm9vZEZvb3RlciA9IGNyZWF0ZURpdignZm9vZC1mb290ZXInKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb29kRm9vdGVyKTtcbiAgICAgICAgbG9hZEZvb2RGb290ZXIoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJBc2lkZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IG9yZGVySXRlbXMgPSBjcmVhdGVEaXYoJ29yZGVyLWNvbnRlbnQtaXRlbXMnKTtcbiAgICAgICAgY29uc3Qgb3JkZXJQcmljZSA9IGNyZWF0ZURpdignb3JkZXItY29udGVudC1wcmljZScpO1xuXG4gICAgICAgIGxldCBxdWFudGl0eUNvdW50ID0ge307XG4gICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcblxuICAgICAgICBjb25zdCBsb2FkT3JkZXIgPSAoc2VsZWN0ZWRDYXJkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9iaiA9IG1lbnVzTGlzdFtzZWxlY3RlZENhcmQuZGF0YXNldC5tZW51TGlzdF1bc2VsZWN0ZWRDYXJkLmRhdGFzZXQubWVudUl0ZW1dO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBzZWxlY3RlZENhcmQuZGF0YXNldC5tZW51SXRlbTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzZWxlY3RlZE9iai5uYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBzZWxlY3RlZE9iai5wcmljZTtcbiAgICAgICAgICAgIGNvbnN0IGltZ0xpbmsgPSBzZWxlY3RlZE9iai5pbWdMaW5rO1xuXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWNvbnRlbnQtZW1wdHknKSkge1xuICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKG9yZGVySXRlbXMpO1xuICAgICAgICAgICAgICAgIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZChvcmRlclByaWNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlT3JkZXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSAtPSBpdGVtLmRhdGFzZXQucHJpY2UgKiBxdWFudGl0eUNvdW50W2l0ZW1JZF07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHF1YW50aXR5Q291bnRbaXRlbUlkXTtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1zLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXItaXRlbScpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQub3JkZXJFbXB0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGxvYWRPcmRlckl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBRERFRFwiKTtcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVySXRlbUJnID0gY3JlYXRlRGl2KCdiYWNrZ3JvdW5kLWJsdXInKTtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5kYXRhc2V0LmlkID0gaWQ7XG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuZGF0YXNldC5wcmljZSA9IHByaWNlO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbUJnLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nTGlua31cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1pdGVtLWNvbnRlbnQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItaXRlbS10ZXh0XCI+JHtuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudC1wcmljZVwiPiQke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tcXVhbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItaXRlbS10ZXh0XCI+UVVBTlRJVFk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tcXVhbnRpdHktdGV4dFwiPiR7cXVhbnRpdHlDb3VudFtpZF19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3JkZXItcmVtb3ZlXCI+UkVNT1ZFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1zLmFwcGVuZENoaWxkKG9yZGVySXRlbUJnKTtcbiAgICAgICAgICAgICAgICBsb2FkT3JkZXJQcmljZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZW5hYmxlUmVtb3ZCdG5FZmZlY3RzID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gb3JkZXJJdGVtQmcucXVlcnlTZWxlY3RvcignLm9yZGVyLXJlbW92ZScpO1xuICAgICAgICAgICAgICAgICAgICAvL0kgd2FzIHVuYWJsZSB0byBmaW5kIGEgY3NzIHNvbHV0aW9uIGZvciB0aGUgb3JkZXJJdGVtIHRvIGJlIGJsdXJyZWQgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSByZW1vdmVCdG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmx1ck9yZGVySXRlbVdoaWxlSG92ZXJpbmdPdmVyUmVtb3ZlQnRuID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVySXRlbUNvbnRlbnRDbGFzc2xpc3QgPSBvcmRlckl0ZW1CZy5xdWVyeVNlbGVjdG9yKCcub3JkZXItaXRlbScpLmNsYXNzTGlzdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySXRlbUNvbnRlbnRDbGFzc2xpc3QuYWRkKCdvcmRlci1pdGVtLWJsdXJyZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQ29udGVudENsYXNzbGlzdC5yZW1vdmUoJ29yZGVyLWl0ZW0tYmx1cnJlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZlYWxSZW1vdmVCdG4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnb3JkZXItcmVtb3ZlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZVJlbW92ZUJ0biA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvcmRlci1yZW1vdmUtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHJldmVhbFJlbW92ZUJ0bigpKVxuICAgICAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHJldmVhbFJlbW92ZUJ0bigpKTtcblxuICAgICAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gaGlkZVJlbW92ZUJ0bigpKTtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiBoaWRlUmVtb3ZlQnRuKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU9yZGVySXRlbShvcmRlckl0ZW1CZyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBsb2FkT3JkZXJQcmljZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdXJjaGFyZ2UgPSArKCh0b3RhbFByaWNlICogMC4xKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICBvcmRlclByaWNlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+U1VCVE9UQUw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+JHt0b3RhbFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+U0VSVklDRSBDSEFSR0UgPHNwYW4gY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWluZm8tc3VyY2hhcmdlXCI+MTAlPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvLXRleHRcIj4ke3N1cmNoYXJnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdC1pbmZvLXRleHRcIj5UT1RBTDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdC1pbmZvLXRleHRcIj4ke3RvdGFsUHJpY2UgKyBzdXJjaGFyZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW50ZXJhY3QtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLWNhbmNlbFwiPkNBTkNFTCBPUkRFUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLXNlbmRcIj5TRU5EIE9SREVSPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVySXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhcihvcmRlclByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5Q291bnQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZC5vcmRlckVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJlZFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghKHF1YW50aXR5Q291bnRbaWRdKSkge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5Q291bnRbaWRdID0gMTtcbiAgICAgICAgICAgICAgICBsb2FkT3JkZXJJdGVtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eUNvdW50W2lkXSsrO1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gcHJpY2U7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtzZWxlY3RlZENhcmQuZGF0YXNldC5tZW51SXRlbX1dYClcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1pdGVtLXF1YW50aXR5LXRleHQnKS5pbm5lclRleHQgPSBxdWFudGl0eUNvdW50W2lkXTtcbiAgICAgICAgICAgICAgICBsb2FkT3JkZXJQcmljZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBsb2FkT3JkZXIgfVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBwYXltZW50ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ3BheW1lbnQ6KSdcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ29yZGVyczopJ1xuICAgIH1cblxuICAgIGNvbnN0IHNldHRpbmdzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5JykuaW5uZXJUZXh0ID0gJ3NldHRpbmdzOiknXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZCA9IHtcbiAgICAgICAgbWVudUJ0bnMoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBsb2FkU2VsZWN0ZWRNZW51ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbk1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJIT01FXCI6IGhvbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiTUVOVVwiOiBtZW51LFxuICAgICAgICAgICAgICAgICAgICBcIlBBWU1FTlRcIjogcGF5bWVudCxcbiAgICAgICAgICAgICAgICAgICAgXCJPUkRFUlNcIjogb3JkZXJzLFxuICAgICAgICAgICAgICAgICAgICBcIlNFVFRJTkdTXCI6IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsZWFyKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25NYXBbaXRlbS5pZF0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUobWVudUFycmF5LCAnbWVudS1pdGVtLWFjdGl2ZScsIGxvYWRTZWxlY3RlZE1lbnUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhvbWVQYWdlKCkge1xuICAgICAgICAgICAgY2xlYXIoY29udGVudCk7XG4gICAgICAgICAgICBob21lKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3JkZXJFbXB0eSgpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50JylcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRW1wdHkgPSBjcmVhdGVEaXYoJ29yZGVyLWNvbnRlbnQtZW1wdHknKTtcbiAgICAgICAgICAgIG9yZGVyRW1wdHkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL29yZGVyLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItZW1wdHktdGV4dFwiPk5PIFBST0RVQ1RTIEFEREVEPC9wPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJFbXB0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA8IDEwKSBtb250aCA9IFwiMFwiICsgbW9udGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGhoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIGxldCBtbSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIHRpbWVJZC5pbm5lclRleHQgPSBgJHttb250aH0tJHtkYXl9LSR7eWVhcn0sICR7aGh9OiR7bW19YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjdXJyZW50VGltZSgpO1xuICAgICAgICAgICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiBjdXJyZW50VGltZSgpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGxvYWQsIG9yZGVyQXNpZGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsImltcG9ydCBVSSBmcm9tIFwiLi9VSVwiO1xuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgLy9wcm92aWRlZCBieSBtZG4gZG9jc1xuICAgIGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgICAgICBsZXQgc3RvcmFnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICAgICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNlc3Npb24gPSAoKCkgPT4ge1xuICAgICAgICBsZXQgb3JkZXJJdGVtTGlzdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbG9nID0gKCkgPT4ge1xuICAgICAgICAgICAgb3JkZXJJdGVtTGlzdC5mb3JFYWNoKChsaXN0SXRlbSkgPT4gY29uc29sZS5sb2cobGlzdEl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhZGRPcmRlckl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJzZXNzaW9uU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbUxpc3QucHVzaChpdGVtLm91dGVySFRNTCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT3JkZXJJdGVtTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZU9yZGVySXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnc2Vzc2lvblN0b3JhZ2UnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IGl0ZW0ub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbUxpc3QgPSBvcmRlckl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIobGlzdEl0ZW0gPT4gbGlzdEl0ZW0gIT09IGl0ZW1Ub1JlbW92ZSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT3JkZXJJdGVtTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZUFsbE9yZGVySXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBvcmRlckl0ZW1MaXN0ID0gW107XG4gICAgICAgICAgICB1cGRhdGVPcmRlckl0ZW1MaXN0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXBkYXRlT3JkZXJJdGVtTGlzdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ29yZGVySXRlbUxpc3QnLFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG9yZGVySXRlbUxpc3QpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkT3JkZXJJdGVtTGlzdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdzZXNzaW9uU3RvcmFnZScpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUxpc3QgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbUxpc3QnKSk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9vZENhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb2RDYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBVSS5vcmRlckFzaWRlLmxvYWRPcmRlcihmb29kQ2FyZENvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7IGFkZE9yZGVySXRlbSwgcmVtb3ZlT3JkZXJJdGVtLCByZW1vdmVBbGxPcmRlckl0ZW1zLCBsb2FkT3JkZXJJdGVtTGlzdCB9O1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIHsgc2Vzc2lvbiB9O1xufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSAnLi9VSS5qcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5VSS5sb2FkLm1lbnVCdG5zKCk7XG5VSS5sb2FkLmhvbWVQYWdlKCk7XG5VSS5sb2FkLmRhdGUoKTtcblVJLmxvYWQub3JkZXJFbXB0eSgpO1xuXG5zdG9yYWdlLnNlc3Npb24ubG9hZE9yZGVySXRlbUxpc3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=