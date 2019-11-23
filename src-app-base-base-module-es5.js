(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-base-base-module"],{

/***/ "./src/app/base/base.module.ts":
/*!*************************************!*\
  !*** ./src/app/base/base.module.ts ***!
  \*************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.component */ "./src/app/base/base.component.ts");





var routes = [{
        path: '', component: _base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"],
    }, {
        path: 'base', component: _base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"],
    }
];
var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-base-base-module-es5.js.map