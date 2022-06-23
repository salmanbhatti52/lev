(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_showimage_showimage_module_ts"],{

/***/ 56689:
/*!*******************************************************!*\
  !*** ./src/app/showimage/showimage-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowimagePageRoutingModule": function() { return /* binding */ ShowimagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _showimage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showimage.page */ 47372);




const routes = [
    {
        path: '',
        component: _showimage_page__WEBPACK_IMPORTED_MODULE_0__.ShowimagePage
    }
];
let ShowimagePageRoutingModule = class ShowimagePageRoutingModule {
};
ShowimagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowimagePageRoutingModule);



/***/ }),

/***/ 12360:
/*!***********************************************!*\
  !*** ./src/app/showimage/showimage.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowimagePageModule": function() { return /* binding */ ShowimagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _showimage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showimage-routing.module */ 56689);
/* harmony import */ var _showimage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showimage.page */ 47372);







let ShowimagePageModule = class ShowimagePageModule {
};
ShowimagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _showimage_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowimagePageRoutingModule
        ],
        declarations: [_showimage_page__WEBPACK_IMPORTED_MODULE_1__.ShowimagePage]
    })
], ShowimagePageModule);



/***/ }),

/***/ 47372:
/*!*********************************************!*\
  !*** ./src/app/showimage/showimage.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowimagePage": function() { return /* binding */ ShowimagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_showimage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./showimage.page.html */ 88645);
/* harmony import */ var _showimage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showimage.page.scss */ 12774);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../work.service */ 8981);







let ShowimagePage = class ShowimagePage {
    constructor(platform, workSertvice, location) {
        this.platform = platform;
        this.workSertvice = workSertvice;
        this.location = location;
        this.cahtImg = '';
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
        this.cahtImg = workSertvice.chatImage;
    }
    goBack() {
        this.location.back();
    }
    ngOnInit() {
    }
};
ShowimagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_2__.WorkService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
ShowimagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-showimage',
        template: _raw_loader_showimage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_showimage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowimagePage);



/***/ }),

/***/ 12774:
/*!***********************************************!*\
  !*** ./src/app/showimage/showimage.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93aW1hZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 88645:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showimage/showimage.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-row>\n    <ion-col style=\"text-align: left;\n    padding: 30px;\">\n     <img (click)=\"goBack()\" style=\"height: 20px;\n     width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n  </ion-row>\n\n\n  <img src={{cahtImg}} style=\"height: 80%;\n  width: 90%;\n  object-fit: cover;\n  position: absolute;\n  top: 10%;\n  left: 5%;\">\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_showimage_showimage_module_ts-es2015.js.map