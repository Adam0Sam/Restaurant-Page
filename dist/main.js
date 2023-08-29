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
                const orderItemBg = createDiv('background-blur');
                orderItemBg.dataset.id = id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2IsQ0FBQzs7QUFFRCxpRUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7OztBQzVaakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUI7O0FBRXpCLDhDQUFFO0FBQ0YsOENBQUU7QUFDRiw4Q0FBRTtBQUNGLDhDQUFFLG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVudU9iamVjdCB9IGZyb20gXCIuL2ludGVyYWN0aXZlXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGJ1dHRvbnNUb2dnbGUgPSAobm9kZWxpc3QsIHRvZ2dsZUNsYXNzLCBhZGRpdGlvbmFsRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20obm9kZWxpc3QpOyAvLyBmb3Igc29tZSByZWFzb24gSSBuZWVkIHRvIGNvbnZlcnQgdGhlIG5vZGVsaXN0IGludG8gYW4gYXJyYXkgd2l0aGluIHRoZSBmdW5jdGlvbiBpdHNlbGZcbiAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGVDbGFzcykpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHRvZ2dsZUNsYXNzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkaXRpb25hbEZ1bmN0aW9uICE9PSAndW5kZWZpbmVkJykgYWRkaXRpb25hbEZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVEaXYgPSAoZGl2Q2xhc3MpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGRpdkNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZE5hbWVUb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYW1lVG9wLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgYDxwPlRBQkxFIExJU1Q8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsb29yLWJ0biBmbG9vci0xIGZsb29yLWJ0bi1jbGlja2VkXCI+Rmlyc3QgRmxvb3I8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmbG9vci1idG4gZmxvb3ItMlwiPlNlY29uZCBGbG9vcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZVRvcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0TG9hZGluZ1RhYmxlcyA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxvb3IgPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZmxvb3ItMScpID8gMCA6IDY7XG4gICAgICAgICAgICAgICAgbG9hZFRhYmxlcyhmbG9vcilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb29yLWJ0bicpLCAnZmxvb3ItYnRuLWNsaWNrZWQnLCBzdGFydExvYWRpbmdUYWJsZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRUYWJsZXMgPSAoZmxvb3IpID0+IHtcbiAgICAgICAgICAgIGNsZWFyKHRhYmxlcylcbiAgICAgICAgICAgIHRhYmxlcy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFibGVzKTtcbiAgICAgICAgICAgIGxvYWRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHNldFRhYmxlSWQgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSWQgPSBpdGVtLmNsYXNzTGlzdFsxXS5zcGxpdCgnLScpWzFdO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1zZWxlY3Rpb24nKS5pbm5lclRleHQgPSB0YWJsZUlkO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnQtdGFibGUnKSwgJ3RhYmxlLWNsaWNrZWQnLCBzZXRUYWJsZUlkKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbkJ0bkNsaWNrZWQoKTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZFNlbGVjdGlvbiA9ICh0YWJsZUlkKSA9PiB7XG4gICAgICAgICAgICBjbGVhcihzZWxlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YWJsZUlkID09PSAndW5kZWZpbmVkJykgdGFibGVJZCA9IFwibm90IHNlbGVjdGVkXCI7XG4gICAgICAgICAgICBzZWxlY3Rpb24uaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cIm9yZGVyLWljb25zXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInRhYmxlLWltYWdlXCIgc3JjPVwiLi9pbWFnZXMvc21hbGwgdGFibGUgaWNvbi5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhYmxlLXRleHRcIj5UQUJMRTo8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJsZS1jb3VudCB0YWJsZS1zZWxlY3Rpb25cIj4ke3RhYmxlSWR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VsZWN0aW9uLWJ0blwiPlNFTEVDVCBBTkQgQ09OVElOVUU8L2J1dHRvbj5gXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnRuQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0aW9uLWJ0blwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLXNlbGVjdGlvbicpLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAodGFibGVJZCA9PT0gJ25vdCBzZWxlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NlbGVjdCBhIHRhYmxlLicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1vcmRlcicpLmlubmVyVGV4dCA9IHRhYmxlSWRcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTUVOVScpLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNsZWFyKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVUb3AgPSBjcmVhdGVEaXYoJ25hbWUtdG9wJyk7XG4gICAgICAgIGxvYWROYW1lVG9wKCk7XG5cbiAgICAgICAgY29uc3QgdGFibGVzID0gY3JlYXRlRGl2KCd0YWJsZXMnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gY3JlYXRlRGl2KCdzZWxlY3Rpb24nKTtcbiAgICAgICAgbG9hZFRhYmxlcygwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWVudXNMaXN0ID0ge1xuICAgICAgICBcIlNUQVJURVJcIjoge1xuICAgICAgICAgICAgaXRlbTE6IG1lbnVPYmplY3QoXCJjaGlja2VuIHdpbmdzXCIsIFwiTlwiLCAyLCBcIi4vaW1hZ2VzL2NoaWNrZW5XaW5nLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtMjogbWVudU9iamVjdChcImZyZW5jaCBmcmllc1wiLCBcIkdcIiwgMCwgXCIuL2ltYWdlcy9mcmVuY2hGcnkuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW04OiBtZW51T2JqZWN0KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9nbGFzc01lYXQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW05OiBtZW51T2JqZWN0KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMSwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTM6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCJOXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW00OiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTU6IG1lbnVPYmplY3QoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiLCAxOSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJNQUlOIENPVVJTRVwiOiB7XG4gICAgICAgICAgICBpdGVtMzogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNTogbWVudU9iamVjdChcImNoaWNrZW4gd2luZ3NcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIsIDIzKVxuICAgICAgICB9LFxuICAgICAgICBcIkRSSU5LU1wiOiB7XG4gICAgICAgICAgICBpdGVtNjogbWVudU9iamVjdChcImJyZWFkXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lrQnJlYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW03OiBtZW51T2JqZWN0KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9nbGFzc01lYXQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiLCAyMyksXG4gICAgICAgICAgICBpdGVtNDogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW01OiBtZW51T2JqZWN0KFwiY2hpY2tlbiB3aW5nc1wiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiwgMjMpLFxuICAgICAgICB9LFxuICAgICAgICBcIkRFU1NFUlRTXCI6IHtcbiAgICAgICAgICAgIGl0ZW04OiBtZW51T2JqZWN0KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9nbGFzc01lYXQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW05OiBtZW51T2JqZWN0KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMSwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiwgMjMpLFxuICAgICAgICAgICAgaXRlbTM6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCJOXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIsIDIzKSxcbiAgICAgICAgICAgIGl0ZW00OiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiwgMjMpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZEZvb2RDb250ZW50ID0gKHNlbGVjdGVkTWVudU5hbWUgPSBcIlNUQVJURVJcIikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNZW51ID0gbWVudXNMaXN0W3NlbGVjdGVkTWVudU5hbWVdO1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBzZWxlY3RlZE1lbnUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb29kSXRlbUNvbnRhaW5lciA9IGNyZWF0ZURpdignZm9vZC1pdGVtLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNwaWN5SWNvbnMgPSBgYDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkTWVudVtpdGVtXS5zcGljaW5lc3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzcGljeUljb25zICs9IGA8aW1nIHNyYz1cIi4vaW1hZ2VzL2NoaWxsaS5zdmdcIj5gXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9vZEl0ZW1Db250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJmb29kLWNhcmRcIiBkYXRhLW1lbnUtbGlzdD1cIiR7c2VsZWN0ZWRNZW51TmFtZX1cIiBkYXRhLW1lbnUtaXRlbT1cIiR7aXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzZWxlY3RlZE1lbnVbaXRlbV0uaW1nTGlua31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1uYW1lXCI+JHtzZWxlY3RlZE1lbnVbaXRlbV0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY2F0ZWdvcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1jYXRlZ29yeS10ZXh0XCI+Q0FURUdPUlk6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1jYXRlZ29yeS1pY29uc1wiPiR7c2VsZWN0ZWRNZW51W2l0ZW1dLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3NwaWN5SWNvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICAgIGZvb2RDb250ZW50LmFwcGVuZENoaWxkKGZvb2RJdGVtQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZm9vZENhcmRDbGlja2VkID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vZC1jYXJkJylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3JkZXJBc2lkZS5sb2FkT3JkZXIoY2FyZCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZEZvb2RGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb290ZXJCdG5zID0gW1wiU1RBUlRFUlwiLCBcIk1BSU4gQ09VUlNFXCIsIFwiRFJJTktTXCIsIFwiREVTU0VSVFNcIl07XG4gICAgICAgICAgICBmb3IgKGxldCBidG4gaW4gZm9vdGVyQnRucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGZvb3RlckJ0bi5jbGFzc0xpc3QuYWRkKCdmb29kLWZvb3Rlci1idG4nKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyQnRuc1tidG5dID09PSBcIlNUQVJURVJcIikgZm9vdGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZm9vdGVyLWJ0bi1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBmb290ZXJCdG4uaW5uZXJUZXh0ID0gZm9vdGVyQnRuc1tidG5dO1xuICAgICAgICAgICAgICAgIGZvb2RGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvYWRTZWxlY3RlZE1lbnUgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyKGZvb2RDb250ZW50KTtcbiAgICAgICAgICAgICAgICBsb2FkRm9vZENvbnRlbnQoaXRlbS5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vZC1mb290ZXItYnRuJyksICdmb29kLWZvb3Rlci1idG4tYWN0aXZlJywgbG9hZFNlbGVjdGVkTWVudSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZm9vZENvbnRlbnQgPSBjcmVhdGVEaXYoJ2Zvb2QtY29udGVudCcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250ZW50KTtcbiAgICAgICAgbG9hZEZvb2RDb250ZW50KCk7XG5cbiAgICAgICAgY29uc3QgZm9vZEZvb3RlciA9IGNyZWF0ZURpdignZm9vZC1mb290ZXInKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb29kRm9vdGVyKTtcbiAgICAgICAgbG9hZEZvb2RGb290ZXIoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JkZXJBc2lkZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IG9yZGVySXRlbXMgPSBjcmVhdGVEaXYoJ29yZGVyLWNvbnRlbnQtaXRlbXMnKTtcbiAgICAgICAgY29uc3Qgb3JkZXJQcmljZSA9IGNyZWF0ZURpdignb3JkZXItY29udGVudC1wcmljZScpO1xuXG4gICAgICAgIGxldCBxdWFudGl0eUNvdW50ID0ge307XG4gICAgICAgIGxldCB0b3RhbFByaWNlID0gMDtcblxuICAgICAgICBjb25zdCBsb2FkT3JkZXIgPSAoc2VsZWN0ZWRJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9iaiA9IG1lbnVzTGlzdFtzZWxlY3RlZEl0ZW0uZGF0YXNldC5tZW51TGlzdF1bc2VsZWN0ZWRJdGVtLmRhdGFzZXQubWVudUl0ZW1dO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBzZWxlY3RlZEl0ZW0uZGF0YXNldC5tZW51SXRlbTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzZWxlY3RlZE9iai5uYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBzZWxlY3RlZE9iai5wcmljZTtcbiAgICAgICAgICAgIGNvbnN0IGltZ0xpbmsgPSBzZWxlY3RlZE9iai5pbWdMaW5rO1xuXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWNvbnRlbnQtZW1wdHknKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jb250ZW50LWVtcHR5JykpO1xuICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyQ29udGVudCk7XG4gICAgICAgICAgICAgICAgb3JkZXJDb250ZW50LmFwcGVuZENoaWxkKG9yZGVySXRlbXMpO1xuICAgICAgICAgICAgICAgIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZChvcmRlclByaWNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlT3JkZXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9hZE9yZGVySXRlbSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFEREVEXCIpO1xuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gcHJpY2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJJdGVtQmcgPSBjcmVhdGVEaXYoJ2JhY2tncm91bmQtYmx1cicpO1xuICAgICAgICAgICAgICAgIG9yZGVySXRlbUJnLmRhdGFzZXQuaWQgPSBpZDtcbiAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZ0xpbmt9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItaXRlbS1jb250ZW50LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tdGV4dFwiPiR7bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1pdGVtLWNvbnRlbnQtcHJpY2VcIj4kJHtwcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1pdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyLWl0ZW0tdGV4dFwiPlFVQU5USVRZPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1pdGVtLXF1YW50aXR5LXRleHRcIj4ke3F1YW50aXR5Q291bnRbaWRdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLXJlbW92ZVwiPlJFTU9WRTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgb3JkZXJJdGVtcy5hcHBlbmRDaGlsZChvcmRlckl0ZW1CZyk7XG4gICAgICAgICAgICAgICAgbG9hZE9yZGVyUHJpY2UoKTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZW5hYmxlUmVtb3ZCdG5FZmZlY3RzID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gb3JkZXJJdGVtQmcucXVlcnlTZWxlY3RvcignLm9yZGVyLXJlbW92ZScpO1xuICAgICAgICAgICAgICAgICAgICAvL0kgd2FzIHVuYWJsZSB0byBmaW5kIGEgY3NzIHNvbHV0aW9uIGZvciB0aGUgb3JkZXJJdGVtIHRvIGJlIGJsdXJyZWQgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSByZW1vdmVCdG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmx1ck9yZGVySXRlbVdoaWxlSG92ZXJpbmdPdmVyUmVtb3ZlQnRuID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVySXRlbUNvbnRlbnRDbGFzc2xpc3QgPSBvcmRlckl0ZW1CZy5xdWVyeVNlbGVjdG9yKCcub3JkZXItaXRlbScpLmNsYXNzTGlzdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySXRlbUNvbnRlbnRDbGFzc2xpc3QuYWRkKCdvcmRlci1pdGVtLWJsdXJyZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQ29udGVudENsYXNzbGlzdC5yZW1vdmUoJ29yZGVyLWl0ZW0tYmx1cnJlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZlYWxSZW1vdmVCdG4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnb3JkZXItcmVtb3ZlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZVJlbW92ZUJ0biA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvcmRlci1yZW1vdmUtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHJldmVhbFJlbW92ZUJ0bigpKVxuICAgICAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHJldmVhbFJlbW92ZUJ0bigpKTtcblxuICAgICAgICAgICAgICAgICAgICBvcmRlckl0ZW1CZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gaGlkZVJlbW92ZUJ0bigpKTtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJdGVtQmcuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiBoaWRlUmVtb3ZlQnRuKCkpO1xuICAgICAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGxvYWRPcmRlclByaWNlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1cmNoYXJnZSA9ICsoKHRvdGFsUHJpY2UgKiAwLjEpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgIG9yZGVyUHJpY2UuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvLXRleHRcIj5TVUJUT1RBTDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvLXRleHRcIj4ke3RvdGFsUHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbmZvLXRleHRcIj5TRVJWSUNFIENIQVJHRSA8c3BhbiBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW5mby1zdXJjaGFyZ2VcIj4xMCU8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWluZm8tdGV4dFwiPiR7c3VyY2hhcmdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW50ZXJhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWNvbnRlbnQtcHJpY2UtaW50ZXJhY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0LWluZm8tdGV4dFwiPlRPVEFMPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1jb250ZW50LXByaWNlLWludGVyYWN0LWluZm8tdGV4dFwiPiR7dG90YWxQcmljZSArIHN1cmNoYXJnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItY29udGVudC1wcmljZS1pbnRlcmFjdC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3JkZXItY2FuY2VsXCI+Q0FOQ0VMIE9SREVSPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3JkZXItc2VuZFwiPlNFTkQgT1JERVI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1jYW5jZWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIob3JkZXJDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIob3JkZXJJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyKG9yZGVyUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbFByaWNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHlDb3VudCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsb2FkLm9yZGVyRW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGVhcmVkXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKCEocXVhbnRpdHlDb3VudFtpZF0pKSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlDb3VudFtpZF0gPSAxO1xuICAgICAgICAgICAgICAgIGxvYWRPcmRlckl0ZW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5Q291bnRbaWRdKys7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSArPSBwcmljZTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke3NlbGVjdGVkSXRlbS5kYXRhc2V0Lm1lbnVJdGVtfV1gKVxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm9yZGVyLWl0ZW0tcXVhbnRpdHktdGV4dCcpLmlubmVyVGV4dCA9IHF1YW50aXR5Q291bnRbaWRdO1xuICAgICAgICAgICAgICAgIGxvYWRPcmRlclByaWNlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGxvYWRPcmRlciB9XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHBheW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2JvZHknKS5pbm5lclRleHQgPSAncGF5bWVudDopJ1xuICAgIH07XG5cbiAgICBjb25zdCBvcmRlcnMgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2JvZHknKS5pbm5lclRleHQgPSAnb3JkZXJzOiknXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2JvZHknKS5pbm5lclRleHQgPSAnc2V0dGluZ3M6KSdcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkID0ge1xuICAgICAgICBtZW51QnRucygpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRTZWxlY3RlZE1lbnUgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uTWFwID0ge1xuICAgICAgICAgICAgICAgICAgICBcIkhPTUVcIjogaG9tZSxcbiAgICAgICAgICAgICAgICAgICAgXCJNRU5VXCI6IG1lbnUsXG4gICAgICAgICAgICAgICAgICAgIFwiUEFZTUVOVFwiOiBwYXltZW50LFxuICAgICAgICAgICAgICAgICAgICBcIk9SREVSU1wiOiBvcmRlcnMsXG4gICAgICAgICAgICAgICAgICAgIFwiU0VUVElOR1NcIjogc2V0dGluZ3NcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXIoY29udGVudClcbiAgICAgICAgICAgICAgICBmdW5jdGlvbk1hcFtpdGVtLmlkXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShtZW51QXJyYXksICdtZW51LWl0ZW0tYWN0aXZlJywgbG9hZFNlbGVjdGVkTWVudSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaG9tZVBhZ2UoKSB7XG4gICAgICAgICAgICBjbGVhcihjb250ZW50KTtcbiAgICAgICAgICAgIGhvbWUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvcmRlckVtcHR5KCkge1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWNvbnRlbnQnKVxuICAgICAgICAgICAgY29uc3Qgb3JkZXJFbXB0eSA9IGNyZWF0ZURpdignb3JkZXItY29udGVudC1lbXB0eScpO1xuICAgICAgICAgICAgb3JkZXJFbXB0eS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvb3JkZXIuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvcmRlci1lbXB0eS10ZXh0XCI+Tk8gUFJPRFVDVFMgQURERUQ8L3A+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIG9yZGVyQ29udGVudC5hcHBlbmRDaGlsZChvcmRlckVtcHR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRlKCkge1xuICAgICAgICAgICAgY29uc3QgdGltZUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtdGV4dCcpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gXCIwXCIgKyBtb250aC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBsZXQgaGggPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgbGV0IG1tID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgdGltZUlkLmlubmVyVGV4dCA9IGAke21vbnRofS0ke2RheX0tJHt5ZWFyfSwgJHtoaH06JHttbX1gO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lKCk7XG4gICAgICAgICAgICBsZXQgdCA9IHNldEludGVydmFsKCgpID0+IGN1cnJlbnRUaW1lKCksIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbG9hZCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7IiwiY29uc3QgbWVudU9iamVjdCA9IChvbGROYW1lLCBjYXRlZ29yeSwgc3BpY2luZXNzLCBpbWdMaW5rLCBwcmljZSkgPT4ge1xuICAgIGxldCBuYW1lID0gb2xkTmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHNwaWNpbmVzcyxcbiAgICAgICAgaW1nTGluayxcbiAgICAgICAgcHJpY2VcbiAgICB9O1xufTtcblxuZXhwb3J0IHttZW51T2JqZWN0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tICcuL1VJLmpzJztcblxuVUkubG9hZC5tZW51QnRucygpO1xuVUkubG9hZC5ob21lUGFnZSgpO1xuVUkubG9hZC5kYXRlKCk7XG5VSS5sb2FkLm9yZGVyRW1wdHkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=