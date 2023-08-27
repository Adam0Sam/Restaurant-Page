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
                if(tableId==='not selected'){
                    alert('Select a table.');
                    return ;
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

    const menu = () => {

        const menus = {
            "STARTER": {
                item1: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "N", 2, "./images/chickenWing.jpg"),
                item2: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("french fries", "G", 0, "./images/frenchFry.jpg"),
                item8: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 2, "./images/glassMeat.jpg"),
                item9: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 1, "./images/idkBread.jpg"),
                item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg"),
                item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg"),
                item5: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "G", 2, "./images/idkBread.jpg")
            },
            "MAIN COURSE": {
                item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg"),
                item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg"),
                item5: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "G", 2, "./images/idkBread.jpg")
            },
            "DRINKS": {
                item6: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("bread", "G", 2, "./images/ikBread.jpg"),
                item7: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 2, "./images/glassMeat.jpg"),
                item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg"),
                item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg"),
                item5: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "G", 2, "./images/idkBread.jpg"),
            },
            "DESSERTS": {
                item8: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 2, "./images/glassMeat.jpg"),
                item9: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 1, "./images/idkBread.jpg"),
                item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg"),
                item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg"),
            }
        }

        const loadFoodContent = (selectedMenuName = "STARTER") => {
            const selectedMenu = menus[selectedMenuName];
            for (let item in selectedMenu) {
                const foodItemContainer = createDiv('food-item-container');

                let spicyIcons = ``;
                for (let i = 0; i < selectedMenu[item].spiciness; i++) {
                    spicyIcons += `<img src="./images/chilli.svg">`
                }

                foodItemContainer.innerHTML =
                    `<div class="food-card">
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
    }

    const payment = () => {
        document.querySelectorAll('body').innerText = 'payment:)'
    };

    const orders = () => {
        document.querySelectorAll('body').innerText = 'orders:)'
    }

    const settings = () => {
        document.querySelectorAll('body').innerText = 'settings:)'
    }

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
const menuObject = (oldName, category, spiciness, imgLink) => {
    let name = oldName.toUpperCase();

    return {
        name,
        category,
        spiciness,
        imgLink
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RCw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RCw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsUUFBUTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUFVO0FBQ2pDLHVCQUF1Qix3REFBVTtBQUNqQyx1QkFBdUIsd0RBQVU7QUFDakMsdUJBQXVCLHdEQUFVO0FBQ2pDLHVCQUF1Qix3REFBVTtBQUNqQyx1QkFBdUIsd0RBQVU7QUFDakMsdUJBQXVCLHdEQUFVO0FBQ2pDLGFBQWE7QUFDYjtBQUNBLHVCQUF1Qix3REFBVTtBQUNqQyx1QkFBdUIsd0RBQVU7QUFDakMsdUJBQXVCLHdEQUFVO0FBQ2pDLGFBQWE7QUFDYjtBQUNBLHVCQUF1Qix3REFBVTtBQUNqQyx1QkFBdUIsd0RBQVU7QUFDakMsdUJBQXVCLHdEQUFVO0FBQ2pDLHVCQUF1Qix3REFBVTtBQUNqQyx1QkFBdUIsd0RBQVU7QUFDakMsYUFBYTtBQUNiO0FBQ0EsdUJBQXVCLHdEQUFVO0FBQ2pDLHVCQUF1Qix3REFBVTtBQUNqQyx1QkFBdUIsd0RBQVU7QUFDakMsdUJBQXVCLHdEQUFVO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0Msa0NBQWtDO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDJCQUEyQjtBQUNuRTtBQUNBO0FBQ0EsbURBQW1ELHdCQUF3QjtBQUMzRTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLEdBQUcsR0FBRztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FDdlFqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUI7O0FBRXpCLDhDQUFFO0FBQ0YsOENBQUU7QUFDRiw4Q0FBRSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVudU9iamVjdCB9IGZyb20gXCIuL2ludGVyYWN0aXZlXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWROYW1lVG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgbmFtZVRvcC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8cD5UQUJMRSBMSVNUPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmbG9vci1idG4gZmxvb3ItMSBmbG9vci1idG4tY2xpY2tlZFwiPkZpcnN0IEZsb29yPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxvb3ItYnRuIGZsb29yLTJcIj5TZWNvbmQgRmxvb3I8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVUb3ApO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydExvYWRpbmdUYWJsZXMgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsb29yID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zsb29yLTEnKSA/IDAgOiA2O1xuICAgICAgICAgICAgICAgIGxvYWRUYWJsZXMoZmxvb3IpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBidXR0b25zVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9vci1idG4nKSwgJ2Zsb29yLWJ0bi1jbGlja2VkJywgc3RhcnRMb2FkaW5nVGFibGVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkVGFibGVzID0gKGZsb29yKSA9PiB7XG4gICAgICAgICAgICBjbGVhcih0YWJsZXMpXG4gICAgICAgICAgICB0YWJsZXMuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmxlcyk7XG4gICAgICAgICAgICBsb2FkU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBzZXRUYWJsZUlkID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZUlkID0gaXRlbS5jbGFzc0xpc3RbMV0uc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtc2VsZWN0aW9uJykuaW5uZXJUZXh0ID0gdGFibGVJZDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBidXR0b25zVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50LXRhYmxlJyksICd0YWJsZS1jbGlja2VkJywgc2V0VGFibGVJZCk7XG4gICAgICAgICAgICBzZWxlY3Rpb25CdG5DbGlja2VkKCk7XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRTZWxlY3Rpb24gPSAodGFibGVJZCkgPT4ge1xuICAgICAgICAgICAgY2xlYXIoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFibGVJZCA9PT0gJ3VuZGVmaW5lZCcpIHRhYmxlSWQgPSBcIm5vdCBzZWxlY3RlZFwiO1xuICAgICAgICAgICAgc2VsZWN0aW9uLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJvcmRlci1pY29uc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ0YWJsZS1pbWFnZVwiIHNyYz1cIi4vaW1hZ2VzL3NtYWxsIHRhYmxlIGljb24uc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YWJsZS10ZXh0XCI+VEFCTEU6PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFibGUtY291bnQgdGFibGUtc2VsZWN0aW9uXCI+JHt0YWJsZUlkfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlbGVjdGlvbi1idG5cIj5TRUxFQ1QgQU5EIENPTlRJTlVFPC9idXR0b24+YFxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ0bkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGlvbi1idG5cIik7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1zZWxlY3Rpb24nKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgaWYodGFibGVJZD09PSdub3Qgc2VsZWN0ZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NlbGVjdCBhIHRhYmxlLicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLW9yZGVyJykuaW5uZXJUZXh0ID0gdGFibGVJZFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNRU5VJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgY2xlYXIoY29udGVudCk7XG5cbiAgICAgICAgY29uc3QgbmFtZVRvcCA9IGNyZWF0ZURpdignbmFtZS10b3AnKTtcbiAgICAgICAgbG9hZE5hbWVUb3AoKTtcblxuICAgICAgICBjb25zdCB0YWJsZXMgPSBjcmVhdGVEaXYoJ3RhYmxlcycpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBjcmVhdGVEaXYoJ3NlbGVjdGlvbicpO1xuICAgICAgICBsb2FkVGFibGVzKDApO1xuICAgIH07XG5cbiAgICBjb25zdCBtZW51ID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1lbnVzID0ge1xuICAgICAgICAgICAgXCJTVEFSVEVSXCI6IHtcbiAgICAgICAgICAgICAgICBpdGVtMTogbWVudU9iamVjdChcImNoaWNrZW4gd2luZ3NcIiwgXCJOXCIsIDIsIFwiLi9pbWFnZXMvY2hpY2tlbldpbmcuanBnXCIpLFxuICAgICAgICAgICAgICAgIGl0ZW0yOiBtZW51T2JqZWN0KFwiZnJlbmNoIGZyaWVzXCIsIFwiR1wiLCAwLCBcIi4vaW1hZ2VzL2ZyZW5jaEZyeS5qcGdcIiksXG4gICAgICAgICAgICAgICAgaXRlbTg6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiksXG4gICAgICAgICAgICAgICAgaXRlbTk6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAxLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiKSxcbiAgICAgICAgICAgICAgICBpdGVtMzogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiksXG4gICAgICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiKSxcbiAgICAgICAgICAgICAgICBpdGVtNTogbWVudU9iamVjdChcImNoaWNrZW4gd2luZ3NcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJNQUlOIENPVVJTRVwiOiB7XG4gICAgICAgICAgICAgICAgaXRlbTM6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCJOXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIpLFxuICAgICAgICAgICAgICAgIGl0ZW00OiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiksXG4gICAgICAgICAgICAgICAgaXRlbTU6IG1lbnVPYmplY3QoXCJjaGlja2VuIHdpbmdzXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiRFJJTktTXCI6IHtcbiAgICAgICAgICAgICAgICBpdGVtNjogbWVudU9iamVjdChcImJyZWFkXCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2lrQnJlYWQuanBnXCIpLFxuICAgICAgICAgICAgICAgIGl0ZW03OiBtZW51T2JqZWN0KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9nbGFzc01lYXQuanBnXCIpLFxuICAgICAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiKSxcbiAgICAgICAgICAgICAgICBpdGVtNDogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIjAlXCIsIDEsIFwiLi9pbWFnZXMvc3VtbWVyU2FsYWQuanBnXCIpLFxuICAgICAgICAgICAgICAgIGl0ZW01OiBtZW51T2JqZWN0KFwiY2hpY2tlbiB3aW5nc1wiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9pZGtCcmVhZC5qcGdcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJERVNTRVJUU1wiOiB7XG4gICAgICAgICAgICAgICAgaXRlbTg6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiksXG4gICAgICAgICAgICAgICAgaXRlbTk6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAxLCBcIi4vaW1hZ2VzL2lka0JyZWFkLmpwZ1wiKSxcbiAgICAgICAgICAgICAgICBpdGVtMzogbWVudU9iamVjdChcInN1bW1lciBzYWxhZFwiLCBcIk5cIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiksXG4gICAgICAgICAgICAgICAgaXRlbTQ6IG1lbnVPYmplY3QoXCJzdW1tZXIgc2FsYWRcIiwgXCIwJVwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRGb29kQ29udGVudCA9IChzZWxlY3RlZE1lbnVOYW1lID0gXCJTVEFSVEVSXCIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWVudSA9IG1lbnVzW3NlbGVjdGVkTWVudU5hbWVdO1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBzZWxlY3RlZE1lbnUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb29kSXRlbUNvbnRhaW5lciA9IGNyZWF0ZURpdignZm9vZC1pdGVtLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNwaWN5SWNvbnMgPSBgYDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkTWVudVtpdGVtXS5zcGljaW5lc3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzcGljeUljb25zICs9IGA8aW1nIHNyYz1cIi4vaW1hZ2VzL2NoaWxsaS5zdmdcIj5gXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9vZEl0ZW1Db250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJmb29kLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzZWxlY3RlZE1lbnVbaXRlbV0uaW1nTGlua31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1uYW1lXCI+JHtzZWxlY3RlZE1lbnVbaXRlbV0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY2F0ZWdvcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1jYXRlZ29yeS10ZXh0XCI+Q0FURUdPUlk6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1jYXRlZ29yeS1pY29uc1wiPiR7c2VsZWN0ZWRNZW51W2l0ZW1dLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3NwaWN5SWNvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICAgIGZvb2RDb250ZW50LmFwcGVuZENoaWxkKGZvb2RJdGVtQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRGb29kRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyQnRucyA9IFtcIlNUQVJURVJcIiwgXCJNQUlOIENPVVJTRVwiLCBcIkRSSU5LU1wiLCBcIkRFU1NFUlRTXCJdO1xuICAgICAgICAgICAgZm9yIChsZXQgYnRuIGluIGZvb3RlckJ0bnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBmb290ZXJCdG4uY2xhc3NMaXN0LmFkZCgnZm9vZC1mb290ZXItYnRuJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZvb3RlckJ0bnNbYnRuXSA9PT0gXCJTVEFSVEVSXCIpIGZvb3RlckJ0bi5jbGFzc0xpc3QuYWRkKCdmb29kLWZvb3Rlci1idG4tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyQnRuLmlubmVyVGV4dCA9IGZvb3RlckJ0bnNbYnRuXTtcbiAgICAgICAgICAgICAgICBmb29kRm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJ0bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2FkU2VsZWN0ZWRNZW51ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhcihmb29kQ29udGVudCk7XG4gICAgICAgICAgICAgICAgbG9hZEZvb2RDb250ZW50KGl0ZW0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb2QtZm9vdGVyLWJ0bicpLCAnZm9vZC1mb290ZXItYnRuLWFjdGl2ZScsIGxvYWRTZWxlY3RlZE1lbnUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZvb2RDb250ZW50ID0gY3JlYXRlRGl2KCdmb29kLWNvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGVudCk7XG4gICAgICAgIGxvYWRGb29kQ29udGVudCgpO1xuXG4gICAgICAgIGNvbnN0IGZvb2RGb290ZXIgPSBjcmVhdGVEaXYoJ2Zvb2QtZm9vdGVyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZEZvb3Rlcik7XG4gICAgICAgIGxvYWRGb29kRm9vdGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bWVudCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keScpLmlubmVyVGV4dCA9ICdwYXltZW50OiknXG4gICAgfTtcblxuICAgIGNvbnN0IG9yZGVycyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keScpLmlubmVyVGV4dCA9ICdvcmRlcnM6KSdcbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5ncyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keScpLmlubmVyVGV4dCA9ICdzZXR0aW5nczopJ1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbnNUb2dnbGUgPSAobm9kZWxpc3QsIHRvZ2dsZUNsYXNzLCBhZGRpdGlvbmFsRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20obm9kZWxpc3QpOyAvLyBmb3Igc29tZSByZWFzb24gSSBuZWVkIHRvIGNvbnZlcnQgdGhlIG5vZGVsaXN0IGludG8gYW4gYXJyYXkgd2l0aGluIHRoZSBmdW5jdGlvbiBpdHNlbGZcbiAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGVDbGFzcykpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHRvZ2dsZUNsYXNzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkaXRpb25hbEZ1bmN0aW9uICE9PSAndW5kZWZpbmVkJykgYWRkaXRpb25hbEZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVEaXYgPSAoZGl2Q2xhc3MpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGRpdkNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZCA9IHtcbiAgICAgICAgbWVudUJ0bnMoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBsb2FkU2VsZWN0ZWRNZW51ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbk1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJIT01FXCI6IGhvbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiTUVOVVwiOiBtZW51LFxuICAgICAgICAgICAgICAgICAgICBcIlBBWU1FTlRcIjogcGF5bWVudCxcbiAgICAgICAgICAgICAgICAgICAgXCJPUkRFUlNcIjogb3JkZXJzLFxuICAgICAgICAgICAgICAgICAgICBcIlNFVFRJTkdTXCI6IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsZWFyKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25NYXBbaXRlbS5pZF0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbnNUb2dnbGUobWVudUFycmF5LCAnbWVudS1pdGVtLWFjdGl2ZScsIGxvYWRTZWxlY3RlZE1lbnUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhvbWVQYWdlKCkge1xuICAgICAgICAgICAgY2xlYXIoY29udGVudCk7XG4gICAgICAgICAgICBob21lKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA8IDEwKSBtb250aCA9IFwiMFwiICsgbW9udGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGhoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIGxldCBtbSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIHRpbWVJZC5pbm5lclRleHQgPSBgJHttb250aH0tJHtkYXl9LSR7eWVhcn0sICR7aGh9OiR7bW19YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjdXJyZW50VGltZSgpO1xuICAgICAgICAgICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiBjdXJyZW50VGltZSgpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGxvYWQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsImNvbnN0IG1lbnVPYmplY3QgPSAob2xkTmFtZSwgY2F0ZWdvcnksIHNwaWNpbmVzcywgaW1nTGluaykgPT4ge1xuICAgIGxldCBuYW1lID0gb2xkTmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHNwaWNpbmVzcyxcbiAgICAgICAgaW1nTGlua1xuICAgIH07XG59O1xuXG5leHBvcnQge21lbnVPYmplY3R9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vVUkuanMnO1xuXG5VSS5sb2FkLm1lbnVCdG5zKCk7XG5VSS5sb2FkLmhvbWVQYWdlKCk7XG5VSS5sb2FkLmRhdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=