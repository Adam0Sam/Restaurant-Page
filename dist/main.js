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
            const buttonToggle = (button) =>{
                button.addEventListener('click', ()=>{
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
        };
        const loadSelection = (tableId) => {
            clear(selection);
            if(typeof tableId === 'undefined') tableId = "not selected";
            selection.innerHTML =
                `<div class="order-icons">
                <img class="table-image" src="./images/small table icon.svg" alt="">
                <p class="table-text">TABLE:</p>
                <p class="table-count table-selection">${tableId}</p>
            </div>
            <button id="selection-btn">SELECT AND CONTINUE</button>`
            content.appendChild(selection);
        };

        const tableClicked = () =>{
            const tables = document.querySelectorAll('.restaurant-table');
            tables.forEach((table)=>table.addEventListener('click', ()=>{
                tables.forEach((table)=>{
                    table.classList.remove('table-clicked');
                });
                table.classList.add('table-clicked');
                const tableId = table.classList[1].split('-')[1];
                loadSelection(tableId);
            }));
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
        clear();
    }

    const payment = () => {
        clear();
    }

    const clear = (element) => {
        while (element.lastChild) {
            element.lastChild.remove();
        }
    };

    return { home, menu, payment }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

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


_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].home();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RCw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RCw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLEVBQUU7Ozs7OztVQ3JIakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055Qjs7QUFFekIsOENBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBob21lID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGxvYWROYW1lVG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgbmFtZVRvcC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYDxwPlRBQkxFIExJU1Q8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsb29yMS1idG4gZmxvb3ItYnRuLWNsaWNrZWRcIj5GaXJzdCBGbG9vcjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsb29yMi1idG5cIj5TZWNvbmQgRmxvb3I8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVUb3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmbG9vckJ0bkNsaWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZsb29yQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25Ub2dnbGUgPSAoYnV0dG9uKSA9PntcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxvb3IxLWJ0bicpLmNsYXNzTGlzdC50b2dnbGUoJ2Zsb29yLWJ0bi1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9vcjItYnRuJykuY2xhc3NMaXN0LnRvZ2dsZSgnZmxvb3ItYnRuLWNsaWNrZWQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxvb3IgPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmbG9vcjEtYnRuJykgPyAwIDogNjtcbiAgICAgICAgICAgICAgICAgICAgbG9hZFRhYmxlcyhmbG9vcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgYnV0dG9uVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9vcjEtYnRuJykpO1xuICAgICAgICAgICAgYnV0dG9uVG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9vcjItYnRuJykpXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBsb2FkVGFibGVzID0gKGZsb29yKSA9PiB7XG4gICAgICAgICAgICBjbGVhcih0YWJsZXMpXG4gICAgICAgICAgICB0YWJsZXMuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnQtdGFibGUgdGFibGUtJHsrK2Zsb29yfVwiIHNyYz1cIi4vaW1hZ2VzL3RhYmxlLnN2Z1wiIGFsdD1cIkltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVzdGF1cmFudC10ZXh0XCI+VCR7Zmxvb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudC10YWJsZSB0YWJsZS0keysrZmxvb3J9XCIgc3JjPVwiLi9pbWFnZXMvdGFibGUuc3ZnXCIgYWx0PVwiSW1hZ2Ugb2YgYSByZXN0YXVyYW50IHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXN0YXVyYW50LXRleHRcIj5UJHtmbG9vcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50LXRhYmxlIHRhYmxlLSR7KytmbG9vcn1cIiBzcmM9XCIuL2ltYWdlcy90YWJsZS5zdmdcIiBhbHQ9XCJJbWFnZSBvZiBhIHJlc3RhdXJhbnQgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3RhdXJhbnQtdGV4dFwiPlQke2Zsb29yfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmxlcyk7XG4gICAgICAgICAgICBsb2FkU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB0YWJsZUNsaWNrZWQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbG9hZFNlbGVjdGlvbiA9ICh0YWJsZUlkKSA9PiB7XG4gICAgICAgICAgICBjbGVhcihzZWxlY3Rpb24pO1xuICAgICAgICAgICAgaWYodHlwZW9mIHRhYmxlSWQgPT09ICd1bmRlZmluZWQnKSB0YWJsZUlkID0gXCJub3Qgc2VsZWN0ZWRcIjtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwib3JkZXItaWNvbnNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidGFibGUtaW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy9zbWFsbCB0YWJsZSBpY29uLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFibGUtdGV4dFwiPlRBQkxFOjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhYmxlLWNvdW50IHRhYmxlLXNlbGVjdGlvblwiPiR7dGFibGVJZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3Rpb24tYnRuXCI+U0VMRUNUIEFORCBDT05USU5VRTwvYnV0dG9uPmBcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0YWJsZUNsaWNrZWQgPSAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50LXRhYmxlJyk7XG4gICAgICAgICAgICB0YWJsZXMuZm9yRWFjaCgodGFibGUpPT50YWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgdGFibGVzLmZvckVhY2goKHRhYmxlKT0+e1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCd0YWJsZS1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGUtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSWQgPSB0YWJsZS5jbGFzc0xpc3RbMV0uc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICAgICBsb2FkU2VsZWN0aW9uKHRhYmxlSWQpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNsZWFyKGNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmFtZVRvcC5jbGFzc0xpc3QuYWRkKCduYW1lLXRvcCcpO1xuICAgICAgICBsb2FkTmFtZVRvcCgpO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWJsZXMuY2xhc3NMaXN0LmFkZCgndGFibGVzJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uJyk7XG4gICAgICAgIGxvYWRUYWJsZXMoMCk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICAgICAgY2xlYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXltZW50ID0gKCkgPT4ge1xuICAgICAgICBjbGVhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBob21lLCBtZW51LCBwYXltZW50IH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vVUkuanMnO1xuXG5VSS5ob21lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=