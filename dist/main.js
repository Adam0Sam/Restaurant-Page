/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tables.js":
/*!***********************!*\
  !*** ./src/tables.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHome: () => (/* binding */ createHome)
/* harmony export */ });
// import './styles.css';

function createHome(){
const content = document.querySelector('.content');

const nameTop = document.createElement('div');
nameTop.classList.add('name-top');
content.appendChild(nameTop);
const nameP = document.createElement('p');
nameP.innerText = "TABLE LIST";
nameP.appendChild(nameTop);
const buttons = document.createElement('div');
buttons.classList.add('buttons');
buttons.appendChild(nameTop);
const button1 = document.createElement('button')
button1.innerText="First Floor";
buttons.appendChild(button1);
const button2 = document.createElement('button')
button2.innerText="Second Floor";
buttons.appendChild(button2);
console.log('TOP COMPLETE');


const tables = document.createElement('div');
tables.classList.add('tables')
content.appendChild(tables);

for(let i = 1; i <= 6; i++ ){
    const table = document.createElement('div');
    table.classList.add('table');
    tables.appendChild(table);
    const img = document.createElement('img');
    img.setAttribute('src', './images/table.svg');
    img.setAttribute('alt', 'Image of a restaurant table');
    table.appendChild(img);
    const tableP = document.createElement('p');
    tableP.innerText = "T"+i;
    table.appendChild(tableP);
}
console.log("TABLES COMPLETE");

const selection = document.createElement('div');
selection.classList.add('selection');
content.appendChild(selection);
const orderIcons = document.createElement('div');
orderIcons.classList.add('order-icons');
selection.appendChild(orderIcons);
const tableImage =document.createElement('img');
tableImage.classList.add('table-image');
tableImage.setAttribute('src', './images/small table icon.svg');
orderIcons.appendChild(tableImage);
const orderIconsTable = document.createElement('p');
orderIconsTable.classList.add('table-text');
orderIconsTable.innerText = "TABLE:";
orderIcons.appendChild(orderIconsTable);
const orderIconsCount = document.createElement('p');
orderIconsCount.classList.add('table-count');
orderIconsCount.classList.add('table-selection');
orderIconsCount.innerText = "1:";
orderIcons.appendChild(orderIconsCount);
const selectionBtn = document.createElement('button');
selectionBtn.id="selection-btn";
selectionBtn.innerText = "SELECT AND CONTINUE";
selection.appendChild(selectionBtn);
console.log("SELECTION COMPLETE");
}



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
/* harmony import */ var _tables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.js */ "./src/tables.js");


(0,_tables_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('MENU');
const content = document.querySelector('.content');
function removeContent(){
    while (content.lastChild){
        content.lastChild.remove();
    }
}

homeBtn.addEventListener('click', ()=>{
    removeContent();
    (0,_tables_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();
});
menuBtn.addEventListener('click', ()=>{
    removeContent();
    content.innerHTML = "<p>LABAS</p>";
    console.log("LABAS");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2pFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QyxzREFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuY29uc3QgbmFtZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmFtZVRvcC5jbGFzc0xpc3QuYWRkKCduYW1lLXRvcCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChuYW1lVG9wKTtcbmNvbnN0IG5hbWVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubmFtZVAuaW5uZXJUZXh0ID0gXCJUQUJMRSBMSVNUXCI7XG5uYW1lUC5hcHBlbmRDaGlsZChuYW1lVG9wKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuYnV0dG9ucy5hcHBlbmRDaGlsZChuYW1lVG9wKTtcbmNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnV0dG9uMS5pbm5lclRleHQ9XCJGaXJzdCBGbG9vclwiO1xuYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b24xKTtcbmNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnV0dG9uMi5pbm5lclRleHQ9XCJTZWNvbmQgRmxvb3JcIjtcbmJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XG5jb25zb2xlLmxvZygnVE9QIENPTVBMRVRFJyk7XG5cblxuY29uc3QgdGFibGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YWJsZXMuY2xhc3NMaXN0LmFkZCgndGFibGVzJylcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFibGVzKTtcblxuZm9yKGxldCBpID0gMTsgaSA8PSA2OyBpKysgKXtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ3RhYmxlJyk7XG4gICAgdGFibGVzLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvdGFibGUuc3ZnJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0ltYWdlIG9mIGEgcmVzdGF1cmFudCB0YWJsZScpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY29uc3QgdGFibGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhYmxlUC5pbm5lclRleHQgPSBcIlRcIitpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlUCk7XG59XG5jb25zb2xlLmxvZyhcIlRBQkxFUyBDT01QTEVURVwiKTtcblxuY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uJyk7XG5jb250ZW50LmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG5jb25zdCBvcmRlckljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5vcmRlckljb25zLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWljb25zJyk7XG5zZWxlY3Rpb24uYXBwZW5kQ2hpbGQob3JkZXJJY29ucyk7XG5jb25zdCB0YWJsZUltYWdlID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnRhYmxlSW1hZ2UuY2xhc3NMaXN0LmFkZCgndGFibGUtaW1hZ2UnKTtcbnRhYmxlSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvc21hbGwgdGFibGUgaWNvbi5zdmcnKTtcbm9yZGVySWNvbnMuYXBwZW5kQ2hpbGQodGFibGVJbWFnZSk7XG5jb25zdCBvcmRlckljb25zVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5vcmRlckljb25zVGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGUtdGV4dCcpO1xub3JkZXJJY29uc1RhYmxlLmlubmVyVGV4dCA9IFwiVEFCTEU6XCI7XG5vcmRlckljb25zLmFwcGVuZENoaWxkKG9yZGVySWNvbnNUYWJsZSk7XG5jb25zdCBvcmRlckljb25zQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5vcmRlckljb25zQ291bnQuY2xhc3NMaXN0LmFkZCgndGFibGUtY291bnQnKTtcbm9yZGVySWNvbnNDb3VudC5jbGFzc0xpc3QuYWRkKCd0YWJsZS1zZWxlY3Rpb24nKTtcbm9yZGVySWNvbnNDb3VudC5pbm5lclRleHQgPSBcIjE6XCI7XG5vcmRlckljb25zLmFwcGVuZENoaWxkKG9yZGVySWNvbnNDb3VudCk7XG5jb25zdCBzZWxlY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnNlbGVjdGlvbkJ0bi5pZD1cInNlbGVjdGlvbi1idG5cIjtcbnNlbGVjdGlvbkJ0bi5pbm5lclRleHQgPSBcIlNFTEVDVCBBTkQgQ09OVElOVUVcIjtcbnNlbGVjdGlvbi5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdG4pO1xuY29uc29sZS5sb2coXCJTRUxFQ1RJT04gQ09NUExFVEVcIik7XG59XG5cbmV4cG9ydCB7Y3JlYXRlSG9tZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZUhvbWV9IGZyb20gJy4vdGFibGVzLmpzJztcblxuY3JlYXRlSG9tZSgpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTUVOVScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5mdW5jdGlvbiByZW1vdmVDb250ZW50KCl7XG4gICAgd2hpbGUgKGNvbnRlbnQubGFzdENoaWxkKXtcbiAgICAgICAgY29udGVudC5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZW1vdmVDb250ZW50KCk7XG4gICAgY3JlYXRlSG9tZSgpO1xufSk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZW1vdmVDb250ZW50KCk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIjxwPkxBQkFTPC9wPlwiO1xuICAgIGNvbnNvbGUubG9nKFwiTEFCQVNcIik7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=