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

        let quantityCount = {};
        let totalPrice = 0;

        const loadOrder = (selectedItem) => {
            const selectedObj = menusList[selectedItem.dataset.menuList][selectedItem.dataset.menuItem];
            const id = selectedItem.dataset.menuItem;
            const name = selectedObj.name;
            const price = selectedObj.price;
            const imgLink = selectedObj.imgLink;

            if (document.querySelector('.order-content-empty')) {
                // console.log(document.querySelector('.order-content-empty'));
                clear(orderContent);
                orderContent.appendChild(orderItems);
                orderContent.appendChild(orderPrice);
            }

            const removeOrderItem = (item) => {
                console.log(item);
            }

            const loadOrderItem = () => {
                console.log("ADDED");
                totalPrice += price;
                const orderItem = createDiv('order-item');
                orderItem.dataset.id = id;
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
                    <p class="order-item-quantity-text">${quantityCount[id]}</p>
                </div>
                <button class="order-remove">REMOVE</button>
                `;
                orderItems.appendChild(orderItem);
                loadOrderPrice();

                //I was unable to find a css solution for the orderItem to be blurred when hovering over the removeBtn
                // const blurOrderItemWhileHoveringOverRemove

                const revealRemoveBtn = (orderItem) => {
                    orderItem.querySelector('.order-remove').classList.add('order-remove-visible');
                    console.log("visible");
                };
                const hideRemoveBtn = (orderItem) => {
                    orderItem.querySelector('.order-remove').classList.remove('order-remove-visible');
                    console.log("invisible");
                };

                orderItem.addEventListener('mouseenter', () => revealRemoveBtn(orderItem))
                orderItem.addEventListener('focus', () => revealRemoveBtn(orderItem));

                orderItem.addEventListener('mouseleave', () => hideRemoveBtn(orderItem));
                orderItem.addEventListener('focusout', () => hideRemoveBtn(orderItem));
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
                document.querySelector(`[data-id=${selectedItem.dataset.menuItem}]`)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055Qjs7QUFFekIsOENBQUU7QUFDRiw4Q0FBRTtBQUNGLDhDQUFFO0FBQ0YsOENBQUUsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludGVyYWN0aXZlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW51T2JqZWN0IH0gZnJvbSBcIi4vaW50ZXJhY3RpdmVcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgY29uc3QgYnV0dG9uc1RvZ2dsZSA9IChub2RlbGlzdCwgdG9nZ2xlQ2xhc3MsIGFkZGl0aW9uYWxGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gQXJyYXkuZnJvbShub2RlbGlzdCk7IC8vIGZvciBzb21lIHJlYXNvbiBJIG5lZWQgdG8gY29udmVydCB0aGUgbm9kZWxpc3QgaW50byBhbiBhcnJheSB3aXRoaW4gdGhlIGZ1bmN0aW9uIGl0c2VsZlxuICAgICAgICBsaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZUNsYXNzKSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQodG9nZ2xlQ2xhc3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhZGRpdGlvbmFsRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnKSBhZGRpdGlvbmFsRnVuY3Rpb24oaXRlbSk7XG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXIgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICB3aGlsZSAoZWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURpdiA9IChkaXZDbGFzcykgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZGl2Q2xhc3MpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICBjb25zdCBob21lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkTmFtZVRvcCA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hbWVUb3AuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBgPHA+VEFCTEUgTElTVDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxvb3ItYnRuIGZsb29yLTEgZmxvb3ItYnRuLWNsaWNrZWRcIj5GaXJzdCBGbG9vcjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsb29yLWJ0biBmbG9vci0yXCI+U2Vjb25kIEZsb29yPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lVG9wKTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRMb2FkaW5nVGFibGVzID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmbG9vciA9IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmbG9vci0xJykgPyAwIDogNjtcbiAgICAgICAgICAgICAgICBsb2FkVGFibGVzKGZsb29yKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvb3ItYnRuJyksICdmbG9vci1idG4tY2xpY2tlZCcsIHN0YXJ0TG9hZGluZ1RhYmxlcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZFRhYmxlcyA9IChmbG9vcikgPT4ge1xuICAgICAgICAgICAgY2xlYXIodGFibGVzKVxuICAgICAgICAgICAgdGFibGVzLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJsZXMpO1xuICAgICAgICAgICAgbG9hZFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgY29uc3Qgc2V0VGFibGVJZCA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVJZCA9IGl0ZW0uY2xhc3NMaXN0WzFdLnNwbGl0KCctJylbMV07XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLXNlbGVjdGlvbicpLmlubmVyVGV4dCA9IHRhYmxlSWQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudC10YWJsZScpLCAndGFibGUtY2xpY2tlZCcsIHNldFRhYmxlSWQpO1xuICAgICAgICAgICAgc2VsZWN0aW9uQnRuQ2xpY2tlZCgpO1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkU2VsZWN0aW9uID0gKHRhYmxlSWQpID0+IHtcbiAgICAgICAgICAgIGNsZWFyKHNlbGVjdGlvbik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhYmxlSWQgPT09ICd1bmRlZmluZWQnKSB0YWJsZUlkID0gXCJub3Qgc2VsZWN0ZWRcIjtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwib3JkZXItaWNvbnNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidGFibGUtaW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy9zbWFsbCB0YWJsZSBpY29uLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFibGUtdGV4dFwiPlRBQkxFOjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhYmxlLWNvdW50IHRhYmxlLXNlbGVjdGlvblwiPiR7dGFibGVJZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3Rpb24tYnRuXCI+U0VMRUNUIEFORCBDT05USU5VRTwvYnV0dG9uPmBcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdG5DbGlja2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3Rpb24tYnRuXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtc2VsZWN0aW9uJykuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGlmICh0YWJsZUlkID09PSAnbm90IHNlbGVjdGVkJykge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU2VsZWN0IGEgdGFibGUuJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLW9yZGVyJykuaW5uZXJUZXh0ID0gdGFibGVJZFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNRU5VJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgY2xlYXIoY29udGVudCk7XG5cbiAgICAgICAgY29uc3QgbmFtZVRvcCA9IGNyZWF0ZURpdignbmFtZS10b3AnKTtcbiAgICAgICAgbG9hZE5hbWVUb3AoKTtcblxuICAgICAgICBjb25zdCB0YWJsZXMgPSBjcmVhdGVEaXYoJ3RhYmxlcycpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBjcmVhdGVEaXYoJ3NlbGVjdGlvbicpO1xuICAgICAgICBsb2FkVGFibGVzKDApO1xuICAgIH07XG5cbiAgICBjb25zdCBtZW51c0xpc3QgPSB7XG4gICAgICAgIFwiU1RBUlRFUlwiOiB7XG4gICAgICAgICAgICBpdGVtMTogbWVudU9iamVjdChcImNoaWNrZW4gd2luZ3NcIiwgXCJOXCIsIDIsIFwiLi9pbWFnZXMvY2hpY2tlbldpbmcuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0yOiBtZW51T2JqZWN0KFwiZnJlbmNoIGZyaWVzXCIsIFwiR1wiLCAwLCBcIi4vaW1hZ2VzL2ZyZW5jaEZyeS5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTg6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTk6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAxLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMzogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNTogbWVudU9iamVjdChcImNoaWNrZW4gd2luZ3NcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDE5KVxuICAgICAgICB9LFxuICAgICAgICBcIk1BSU4gQ09VUlNFXCI6IHtcbiAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNDogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW01OiBtZW51T2JqZWN0KFwiY2hpY2tlbiB3aW5nc1wiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiwgMjMpXG4gICAgICAgIH0sXG4gICAgICAgIFwiRFJJTktTXCI6IHtcbiAgICAgICAgICAgIGl0ZW02OiBtZW51T2JqZWN0KFwiYnJlYWRcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWtCcmVhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTc6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTM6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCJOXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW00OiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTU6IG1lbnVPYmplY3QoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMyksXG4gICAgICAgIH0sXG4gICAgICAgIFwiREVTU0VSVFNcIjoge1xuICAgICAgICAgICAgaXRlbTg6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTk6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAxLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMzogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtZW51ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkRm9vZENvbnRlbnQgPSAoc2VsZWN0ZWRNZW51TmFtZSA9IFwiU1RBUlRFUlwiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1lbnUgPSBtZW51c0xpc3Rbc2VsZWN0ZWRNZW51TmFtZV07XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIGluIHNlbGVjdGVkTWVudSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvb2RJdGVtQ29udGFpbmVyID0gY3JlYXRlRGl2KCdmb29kLWl0ZW0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3BpY3lJY29ucyA9IGBgO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRNZW51W2l0ZW1dLnNwaWNpbmVzczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwaWN5SWNvbnMgKz0gYDxpbWcgc3JjPVwiLi9pbWFnZXMvY2hpbGxpLnN2Z1wiPmBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb29kSXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImZvb2QtY2FyZFwiIGRhdGEtbWVudS1saXN0PVwiJHtzZWxlY3RlZE1lbnVOYW1lfVwiIGRhdGEtbWVudS1pdGVtPVwiJHtpdGVtfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3NlbGVjdGVkTWVudVtpdGVtXS5pbWdMaW5rfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLW5hbWVcIj4ke3NlbGVjdGVkTWVudVtpdGVtXS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1jYXRlZ29yeS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLWNhdGVnb3J5LXRleHRcIj5DQVRFR09SWTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWNhdGVnb3J5LWljb25zXCI+JHtzZWxlY3RlZE1lbnVbaXRlbV0uY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3BpY3lJY29uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICAgICAgZm9vZENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1Db250YWluZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmb29kQ2FyZENsaWNrZWQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb29kLWNhcmQnKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcmRlckFzaWRlLmxvYWRPcmRlcihjYXJkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkRm9vZEZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlckJ0bnMgPSBbXCJTVEFSVEVSXCIsIFwiTUFJTiBDT1VSU0VcIiwgXCJEUklOS1NcIiwgXCJERVNTRVJUU1wiXTtcbiAgICAgICAgICAgIGZvciAobGV0IGJ0biBpbiBmb290ZXJCdG5zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9vdGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZm9vdGVyLWJ0bicpO1xuICAgICAgICAgICAgICAgIGlmIChmb290ZXJCdG5zW2J0bl0gPT09IFwiU1RBUlRFUlwiKSBmb290ZXJCdG4uY2xhc3NMaXN0LmFkZCgnZm9vZC1mb290ZXItYnRuLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGZvb3RlckJ0bi5pbm5lclRleHQgPSBmb290ZXJCdG5zW2J0bl07XG4gICAgICAgICAgICAgICAgZm9vZEZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJCdG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9hZFNlbGVjdGVkTWVudSA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXIoZm9vZENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxvYWRGb29kQ29udGVudChpdGVtLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b25zVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb29kLWZvb3Rlci1idG4nKSwgJ2Zvb2QtZm9vdGVyLWJ0bi1hY3RpdmUnLCBsb2FkU2VsZWN0ZWRNZW51KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmb29kQ29udGVudCA9IGNyZWF0ZURpdignZm9vZC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRlbnQpO1xuICAgICAgICBsb2FkRm9vZENvbnRlbnQoKTtcblxuICAgICAgICBjb25zdCBmb29kRm9vdGVyID0gY3JlYXRlRGl2KCdmb29kLWZvb3RlcicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RGb290ZXIpO1xuICAgICAgICBsb2FkRm9vZEZvb3RlcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlckFzaWRlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JkZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3Qgb3JkZXJJdGVtcyA9IGNyZWF0ZURpdignb3JkZXItY29udGVudC1pdGVtcycpO1xuICAgICAgICBjb25zdCBvcmRlclByaWNlID0gY3JlYXRlRGl2KCdvcmRlci1jb250ZW50LXByaWNlJyk7XG5cbiAgICAgICAgbGV0IHF1YW50aXR5Q291bnQgPSB7fTtcbiAgICAgICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xuXG4gICAgICAgIGNvbnN0IGxvYWRPcmRlciA9IChzZWxlY3RlZEl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT2JqID0gbWVudXNMaXN0W3NlbGVjdGVkSXRlbS5kYXRhc2V0Lm1lbnVMaXN0XVtzZWxlY3RlZEl0ZW0uZGF0YXNldC5tZW51SXRlbV07XG4gICAgICAgICAgICBjb25zdCBpZCA9IHNlbGVjdGVkSXRlbS5kYXRhc2V0Lm1lbnVJdGVtO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNlbGVjdGVkT2JqLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IHNlbGVjdGVkT2JqLnByaWNlO1xuICAgICAgICAgICAgY29uc3QgaW1nTGluayA9IHNlbGVjdGVkT2JqLmltZ0xpbms7XG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItY29udGVudC1lbXB0eScpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWNvbnRlbnQtZW1wdHknKSk7XG4gICAgICAgICAgICAgICAgY2xlYXIob3JkZXJDb250ZW50KTtcbiAgICAgICAgICAgICAgICBvcmRlckNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJJdGVtcyk7XG4gICAgICAgICAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKG9yZGVyUHJpY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZW1vdmVPcmRlckl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb2FkT3JkZXJJdGVtID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQURERURcIik7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBwcmljZTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlckl0ZW0gPSBjcmVhdGVEaXYoJ29yZGVyLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW0uZGF0YXNldC5pZCA9IGlkO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nTGlua31cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tdGV4dFwiPiR7bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudC1wcmljZVwiPiQke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tcXVhbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1pdGVtLXRleHRcIj5RVUFOVElUWTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1pdGVtLXF1YW50aXR5LXRleHRcIj4ke3F1YW50aXR5Q291bnRbaWRdfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3JkZXItcmVtb3ZlXCI+UkVNT1ZFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1zLmFwcGVuZENoaWxkKG9yZGVySXRlbSk7XG4gICAgICAgICAgICAgICAgbG9hZE9yZGVyUHJpY2UoKTtcblxuICAgICAgICAgICAgICAgIC8vSSB3YXMgdW5hYmxlIHRvIGZpbmQgYSBjc3Mgc29sdXRpb24gZm9yIHRoZSBvcmRlckl0ZW0gdG8gYmUgYmx1cnJlZCB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHJlbW92ZUJ0blxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGJsdXJPcmRlckl0ZW1XaGlsZUhvdmVyaW5nT3ZlclJlbW92ZVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmV2ZWFsUmVtb3ZlQnRuID0gKG9yZGVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvcmRlckl0ZW0ucXVlcnlTZWxlY3RvcignLm9yZGVyLXJlbW92ZScpLmNsYXNzTGlzdC5hZGQoJ29yZGVyLXJlbW92ZS12aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVSZW1vdmVCdG4gPSAob3JkZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVySXRlbS5xdWVyeVNlbGVjdG9yKCcub3JkZXItcmVtb3ZlJykuY2xhc3NMaXN0LnJlbW92ZSgnb3JkZXItcmVtb3ZlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG9yZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gcmV2ZWFsUmVtb3ZlQnRuKG9yZGVySXRlbSkpXG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gcmV2ZWFsUmVtb3ZlQnRuKG9yZGVySXRlbSkpO1xuXG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBoaWRlUmVtb3ZlQnRuKG9yZGVySXRlbSkpO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IGhpZGVSZW1vdmVCdG4ob3JkZXJJdGVtKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBsb2FkT3JkZXJQcmljZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdXJjaGFyZ2UgPSArKCh0b3RhbFByaWNlICogMC4xKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICBvcmRlclByaWNlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+U1VCVE9UQUw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+JHt0b3RhbFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby10ZXh0XCI+U0VSVklDRSBDSEFSR0UgPHNwYW4gY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWluZm8tc3VyY2hhcmdlXCI+MTAlPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvLXRleHRcIj4ke3N1cmNoYXJnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdC1pbmZvLXRleHRcIj5UT1RBTDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdC1pbmZvLXRleHRcIj4ke3RvdGFsUHJpY2UgKyBzdXJjaGFyZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW50ZXJhY3QtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLWNhbmNlbFwiPkNBTkNFTCBPUkRFUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLXNlbmRcIj5TRU5EIE9SREVSPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQub3JkZXJFbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyZWRcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIShxdWFudGl0eUNvdW50W2lkXSkpIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eUNvdW50W2lkXSA9IDE7XG4gICAgICAgICAgICAgICAgbG9hZE9yZGVySXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlDb3VudFtpZF0rKztcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7c2VsZWN0ZWRJdGVtLmRhdGFzZXQubWVudUl0ZW19XWApXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcub3JkZXItaXRlbS1xdWFudGl0eS10ZXh0JykuaW5uZXJUZXh0ID0gcXVhbnRpdHlDb3VudFtpZF07XG4gICAgICAgICAgICAgICAgbG9hZE9yZGVyUHJpY2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgbG9hZE9yZGVyIH1cbiAgICB9KSgpO1xuXG4gICAgY29uc3QgcGF5bWVudCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keScpLmlubmVyVGV4dCA9ICdwYXltZW50OiknXG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVycyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keScpLmlubmVyVGV4dCA9ICdvcmRlcnM6KSdcbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5ncyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keScpLmlubmVyVGV4dCA9ICdzZXR0aW5nczopJ1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWQgPSB7XG4gICAgICAgIG1lbnVCdG5zKCkge1xuICAgICAgICAgICAgY29uc3QgbWVudUFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgbG9hZFNlbGVjdGVkTWVudSA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25NYXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiSE9NRVwiOiBob21lLFxuICAgICAgICAgICAgICAgICAgICBcIk1FTlVcIjogbWVudSxcbiAgICAgICAgICAgICAgICAgICAgXCJQQVlNRU5UXCI6IHBheW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIFwiT1JERVJTXCI6IG9yZGVycyxcbiAgICAgICAgICAgICAgICAgICAgXCJTRVRUSU5HU1wiOiBzZXR0aW5nc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGVhcihjb250ZW50KVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTWFwW2l0ZW0uaWRdKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b25zVG9nZ2xlKG1lbnVBcnJheSwgJ21lbnUtaXRlbS1hY3RpdmUnLCBsb2FkU2VsZWN0ZWRNZW51KTtcbiAgICAgICAgfSxcblxuICAgICAgICBob21lUGFnZSgpIHtcbiAgICAgICAgICAgIGNsZWFyKGNvbnRlbnQpO1xuICAgICAgICAgICAgaG9tZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9yZGVyRW1wdHkoKSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItY29udGVudCcpXG4gICAgICAgICAgICBjb25zdCBvcmRlckVtcHR5ID0gY3JlYXRlRGl2KCdvcmRlci1jb250ZW50LWVtcHR5Jyk7XG4gICAgICAgICAgICBvcmRlckVtcHR5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9vcmRlci5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWVtcHR5LXRleHRcIj5OTyBQUk9EVUNUUyBBRERFRDwvcD5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKG9yZGVyRW1wdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGUoKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS10ZXh0Jyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPCAxMCkgbW9udGggPSBcIjBcIiArIG1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGxldCBoaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW0gPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgICB0aW1lSWQuaW5uZXJUZXh0ID0gYCR7bW9udGh9LSR7ZGF5fS0ke3llYXJ9LCAke2hofToke21tfWA7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY3VycmVudFRpbWUoKTtcbiAgICAgICAgICAgIGxldCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4gY3VycmVudFRpbWUoKSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBsb2FkIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTsiLCJjb25zdCBtZW51T2JqZWN0ID0gKG9sZE5hbWUsIGNhdGVnb3J5LCBzcGljaW5lc3MsIGltZ0xpbmssIHByaWNlKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBvbGROYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgc3BpY2luZXNzLFxuICAgICAgICBpbWdMaW5rLFxuICAgICAgICBwcmljZVxuICAgIH07XG59O1xuXG5leHBvcnQge21lbnVPYmplY3R9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vVUkuanMnO1xuXG5VSS5sb2FkLm1lbnVCdG5zKCk7XG5VSS5sb2FkLmhvbWVQYWdlKCk7XG5VSS5sb2FkLmRhdGUoKTtcblVJLmxvYWQub3JkZXJFbXB0eSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==