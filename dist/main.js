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
            item1: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "N", 2, "./images/chickenWing.jpg"),
            item2: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("french fries", "G", 0, "./images/frenchFry.jpg"),
            item3: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "N", 1, "./images/summerSalad.jpg"),
            item4: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("summer salad", "0%", 1, "./images/summerSalad.jpg"),
            item5: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("chicken wings", "G", 2, "./images/idkBread.jpg"),
            item6: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("bread", "G", 2, "./images/ikBread.jpg"),
            item7: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 2, "./images/glassMeat.jpg"),
            item8: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 2, "./images/glassMeat.jpg"),
            item9: (0,_interactive__WEBPACK_IMPORTED_MODULE_0__.menuObject)("glass meat", "G", 1, "./images/idkBread.jpg")
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
    let name = oldName.toUpperCase(); // Private variable to store uppercase name

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

const content = document.querySelector('.content')

const menuArray = document.querySelectorAll('.menu-item');
_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].buttonsToggle(menuArray, 'menu-item-active');

_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].home();
const home = document.getElementById('HOME');
home.addEventListener('click', ()=>{
    _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].clear(content)
    _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].home()
});

const menu = document.getElementById('MENU');
menu.addEventListener('click', ()=>{
    _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].clear(content)
    _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].menu()
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RCw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RCw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsbUJBQW1CLHdEQUFVO0FBQzdCLG1CQUFtQix3REFBVTtBQUM3QixtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCLG1CQUFtQix3REFBVTtBQUM3QixtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCLG1CQUFtQix3REFBVTtBQUM3QixtQkFBbUIsd0RBQVU7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHdCQUF3QjtBQUNoRTtBQUNBO0FBQ0EsbURBQW1ELHFCQUFxQjtBQUN4RTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7OztBQ3BMakI7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUI7QUFDekI7O0FBRUE7QUFDQSw4Q0FBRTs7QUFFRiw4Q0FBRTtBQUNGO0FBQ0E7QUFDQSxJQUFJLDhDQUFFO0FBQ04sSUFBSSw4Q0FBRTtBQUNOLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksOENBQUU7QUFDTixJQUFJLDhDQUFFO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbnVPYmplY3QgfSBmcm9tIFwiLi9pbnRlcmFjdGl2ZVwiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb25zdCBob21lID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGxvYWROYW1lVG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgbmFtZVRvcC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8cD5UQUJMRSBMSVNUPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmbG9vci1idG4gZmxvb3ItMSBmbG9vci1idG4tY2xpY2tlZFwiPkZpcnN0IEZsb29yPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxvb3ItYnRuIGZsb29yLTJcIj5TZWNvbmQgRmxvb3I8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVUb3ApO1xuXG4gICAgICAgICAgICAvLyBmbG9vckJ0bkNsaWNrKCk7XG4gICAgICAgICAgICBsZXQgc3RhcnRMb2FkaW5nVGFibGVzO1xuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvb3ItYnRuJyksICdmbG9vci1idG4tY2xpY2tlZCcsXG4gICAgICAgICAgICAgICAgc3RhcnRMb2FkaW5nVGFibGVzID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxvb3IgPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZmxvb3ItMScpID8gMCA6IDY7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRUYWJsZXMoZmxvb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxvYWRUYWJsZXMgPSAoZmxvb3IpID0+IHtcbiAgICAgICAgICAgIGNsZWFyKHRhYmxlcylcbiAgICAgICAgICAgIHRhYmxlcy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFibGVzKTtcbiAgICAgICAgICAgIGxvYWRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGxldCBzZXRUYWJsZUlkO1xuICAgICAgICAgICAgYnV0dG9uc1RvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudC10YWJsZScpLCAndGFibGUtY2xpY2tlZCcsXG4gICAgICAgICAgICAgICAgc2V0VGFibGVJZCA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSWQgPSBpdGVtLmNsYXNzTGlzdFsxXS5zcGxpdCgnLScpWzFdO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtc2VsZWN0aW9uJykuaW5uZXJUZXh0ID0gdGFibGVJZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2VsZWN0aW9uQnRuQ2xpY2tlZCgpO1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkU2VsZWN0aW9uID0gKHRhYmxlSWQpID0+IHtcbiAgICAgICAgICAgIGNsZWFyKHNlbGVjdGlvbik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhYmxlSWQgPT09ICd1bmRlZmluZWQnKSB0YWJsZUlkID0gXCJub3Qgc2VsZWN0ZWRcIjtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwib3JkZXItaWNvbnNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidGFibGUtaW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy9zbWFsbCB0YWJsZSBpY29uLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFibGUtdGV4dFwiPlRBQkxFOjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhYmxlLWNvdW50IHRhYmxlLXNlbGVjdGlvblwiPiR7dGFibGVJZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3Rpb24tYnRuXCI+U0VMRUNUIEFORCBDT05USU5VRTwvYnV0dG9uPmBcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdG5DbGlja2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3Rpb24tYnRuXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1vcmRlcicpLmlubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1zZWxlY3Rpb24nKS5pbm5lclRleHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNsZWFyKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmFtZVRvcC5jbGFzc0xpc3QuYWRkKCduYW1lLXRvcCcpO1xuICAgICAgICBsb2FkTmFtZVRvcCgpO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWJsZXMuY2xhc3NMaXN0LmFkZCgndGFibGVzJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uJyk7XG4gICAgICAgIGxvYWRUYWJsZXMoMCk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgbWVudSA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBtZW51SXRlbXMgPSB7XG4gICAgICAgICAgICBpdGVtMTogbWVudU9iamVjdChcImNoaWNrZW4gd2luZ3NcIiwgXCJOXCIsIDIsIFwiLi9pbWFnZXMvY2hpY2tlbldpbmcuanBnXCIpLFxuICAgICAgICAgICAgaXRlbTI6IG1lbnVPYmplY3QoXCJmcmVuY2ggZnJpZXNcIiwgXCJHXCIsIDAsIFwiLi9pbWFnZXMvZnJlbmNoRnJ5LmpwZ1wiKSxcbiAgICAgICAgICAgIGl0ZW0zOiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiTlwiLCAxLCBcIi4vaW1hZ2VzL3N1bW1lclNhbGFkLmpwZ1wiKSxcbiAgICAgICAgICAgIGl0ZW00OiBtZW51T2JqZWN0KFwic3VtbWVyIHNhbGFkXCIsIFwiMCVcIiwgMSwgXCIuL2ltYWdlcy9zdW1tZXJTYWxhZC5qcGdcIiksXG4gICAgICAgICAgICBpdGVtNTogbWVudU9iamVjdChcImNoaWNrZW4gd2luZ3NcIiwgXCJHXCIsIDIsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIpLFxuICAgICAgICAgICAgaXRlbTY6IG1lbnVPYmplY3QoXCJicmVhZFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9pa0JyZWFkLmpwZ1wiKSxcbiAgICAgICAgICAgIGl0ZW03OiBtZW51T2JqZWN0KFwiZ2xhc3MgbWVhdFwiLCBcIkdcIiwgMiwgXCIuL2ltYWdlcy9nbGFzc01lYXQuanBnXCIpLFxuICAgICAgICAgICAgaXRlbTg6IG1lbnVPYmplY3QoXCJnbGFzcyBtZWF0XCIsIFwiR1wiLCAyLCBcIi4vaW1hZ2VzL2dsYXNzTWVhdC5qcGdcIiksXG4gICAgICAgICAgICBpdGVtOTogbWVudU9iamVjdChcImdsYXNzIG1lYXRcIiwgXCJHXCIsIDEsIFwiLi9pbWFnZXMvaWRrQnJlYWQuanBnXCIpXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbG9hZEZvb2RDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBtZW51SXRlbXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb29kSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvb2RJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaXRlbS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCBzcGljeUljb25zID0gYGA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXNbaXRlbV0uc3BpY2luZXNzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3BpY3lJY29ucyArPSBgPGltZyBzcmM9XCIuL2ltYWdlcy9jaGlsbGkuc3ZnXCI+YFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvb2RJdGVtQ29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiZm9vZC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bWVudUl0ZW1zW2l0ZW1dLmltZ0xpbmt9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtbmFtZVwiPiR7bWVudUl0ZW1zW2l0ZW1dLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWNhdGVnb3J5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtY2F0ZWdvcnktdGV4dFwiPkNBVEVHT1JZOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY2F0ZWdvcnktaWNvbnNcIj4ke21lbnVJdGVtc1tpdGVtXS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzcGljeUljb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICAgICBmb29kQ29udGVudC5hcHBlbmRDaGlsZChmb29kSXRlbUNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsb2FkRm9vZEZvb3RlciA9ICgpID0+IHtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZvb2RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb2RDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtY29udGVudCcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250ZW50KTtcbiAgICAgICAgbG9hZEZvb2RDb250ZW50KCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bWVudCA9ICgpID0+IHtcbiAgICAgICAgY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgYW4gYSBmdW5jdGlvbiBhcmd1bWVudCBsYXRlciBkb3duIHRoZSByb2FkIHRvIGF2b2lkIHRoZSBtZXNzIG9mIGlmc1xuICAgIGNvbnN0IGJ1dHRvbnNUb2dnbGUgPSAobm9kZWxpc3QsIHRvZ2dsZUNsYXNzLCBhZGRpdGlvbmFsRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20obm9kZWxpc3QpOyAvLyBmb3Igc29tZSByZWFzb24gSSBuZWVkIHRvIGNvbnZlcnQgdGhlIG5vZGVsaXN0IGludG8gYW4gYXJyYXkgd2l0aGluIHRoZSBmdW5jdGlvbiBpdHNlbGZcbiAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGVDbGFzcykpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHRvZ2dsZUNsYXNzKTtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxGdW5jdGlvbihpdGVtKTtcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhciA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgaG9tZSwgbWVudSwgcGF5bWVudCwgY2xlYXIsIGJ1dHRvbnNUb2dnbGUgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7IiwiY29uc3QgbWVudU9iamVjdCA9IChvbGROYW1lLCBjYXRlZ29yeSwgc3BpY2luZXNzLCBpbWdMaW5rKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBvbGROYW1lLnRvVXBwZXJDYXNlKCk7IC8vIFByaXZhdGUgdmFyaWFibGUgdG8gc3RvcmUgdXBwZXJjYXNlIG5hbWVcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBzcGljaW5lc3MsXG4gICAgICAgIGltZ0xpbmtcbiAgICB9O1xufTtcblxuZXhwb3J0IHttZW51T2JqZWN0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tICcuL1VJLmpzJztcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbmNvbnN0IG1lbnVBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcblVJLmJ1dHRvbnNUb2dnbGUobWVudUFycmF5LCAnbWVudS1pdGVtLWFjdGl2ZScpO1xuXG5VSS5ob21lKCk7XG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hPTUUnKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIFVJLmNsZWFyKGNvbnRlbnQpXG4gICAgVUkuaG9tZSgpXG59KTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNRU5VJyk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBVSS5jbGVhcihjb250ZW50KVxuICAgIFVJLm1lbnUoKVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=