(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_interestedin_interestedin_module_ts"],{

/***/ 75714:
/*!*************************************************************!*\
  !*** ./src/app/interestedin/interestedin-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterestedinPageRoutingModule": function() { return /* binding */ InterestedinPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _interestedin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interestedin.page */ 61585);




const routes = [
    {
        path: '',
        component: _interestedin_page__WEBPACK_IMPORTED_MODULE_0__.InterestedinPage
    }
];
let InterestedinPageRoutingModule = class InterestedinPageRoutingModule {
};
InterestedinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InterestedinPageRoutingModule);



/***/ }),

/***/ 5143:
/*!*****************************************************!*\
  !*** ./src/app/interestedin/interestedin.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterestedinPageModule": function() { return /* binding */ InterestedinPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _interestedin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interestedin-routing.module */ 75714);
/* harmony import */ var _interestedin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interestedin.page */ 61585);







let InterestedinPageModule = class InterestedinPageModule {
};
InterestedinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _interestedin_routing_module__WEBPACK_IMPORTED_MODULE_0__.InterestedinPageRoutingModule
        ],
        declarations: [_interestedin_page__WEBPACK_IMPORTED_MODULE_1__.InterestedinPage]
    })
], InterestedinPageModule);



/***/ }),

/***/ 61585:
/*!***************************************************!*\
  !*** ./src/app/interestedin/interestedin.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterestedinPage": function() { return /* binding */ InterestedinPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_interestedin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./interestedin.page.html */ 39971);
/* harmony import */ var _interestedin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interestedin.page.scss */ 88865);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup.service */ 46298);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);







let InterestedinPage = class InterestedinPage {
    constructor(location, signupService, workService) {
        this.location = location;
        this.signupService = signupService;
        this.workService = workService;
        this.lookingForID = '';
        this.LookingForArr = '';
        this.selectedLookingForID = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //this.selectedGenderID = selectedGenderID
        this.lookingForID = localStorage.getItem('lookingForSelectedID');
        this.LookingForArr = this.workService.systemData.system_looking_for;
        console.log('gender---', this.lookingForID);
    }
    goBack() {
        this.location.back();
    }
    funClick(val) {
        console.log(val);
        localStorage.setItem('lookingFor', val.name);
        localStorage.setItem('lookingForSelectedID', val.system_looking_for_id);
        this.signupService.lookingFor = val;
        this.location.back();
    }
};
InterestedinPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService }
];
InterestedinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-interestedin',
        template: _raw_loader_interestedin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_interestedin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InterestedinPage);



/***/ }),

/***/ 88865:
/*!*****************************************************!*\
  !*** ./src/app/interestedin/interestedin.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divbg {\n  margin-left: 10px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  margin-left: 10px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZXN0ZWRpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJpbnRlcmVzdGVkaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmJnIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2Ymc6YWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 39971:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interestedin/interestedin.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 20px;\">\n\n    <ion-text>What Are You Looking For?</ion-text>\n\n    <!-- <div style=\"margin-top: 28px;\">\n\n      <ion-text class=\"divbg\" (click)=\"funClick('Dating')\">Dating</ion-text>\n\n      <ion-text class=\"divbg\" style=\"margin-left: 20px;\" (click)=\"funClick('Marriage')\">Marriage</ion-text>\n\n\n\n    </div> -->\n\n\n    <div style=\"margin-top: 28px;\">\n\n      <ion-text *ngFor=\"let look of LookingForArr\" class=\"divbg\" (click)=\"funClick(look)\"\n        [class.activedivbg]=\"look.system_looking_for_id == lookingForID\">{{look.name}}</ion-text>\n\n    </div>\n\n\n    <!-- \n    <div style=\"margin-top: 40px;\">\n\n\n      <ion-text class=\"divbg\" (click)=\"funClick('Not Specific')\">Not Specific</ion-text>\n\n\n\n    </div> -->\n\n\n\n\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_interestedin_interestedin_module_ts-es2015.js.map