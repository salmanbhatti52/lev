(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_maritalstatuspref_maritalstatuspref_module_ts"],{

/***/ 2878:
/*!***********************************************************************!*\
  !*** ./src/app/maritalstatuspref/maritalstatuspref-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaritalstatusprefPageRoutingModule": function() { return /* binding */ MaritalstatusprefPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _maritalstatuspref_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maritalstatuspref.page */ 81462);




const routes = [
    {
        path: '',
        component: _maritalstatuspref_page__WEBPACK_IMPORTED_MODULE_0__.MaritalstatusprefPage
    }
];
let MaritalstatusprefPageRoutingModule = class MaritalstatusprefPageRoutingModule {
};
MaritalstatusprefPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaritalstatusprefPageRoutingModule);



/***/ }),

/***/ 49521:
/*!***************************************************************!*\
  !*** ./src/app/maritalstatuspref/maritalstatuspref.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaritalstatusprefPageModule": function() { return /* binding */ MaritalstatusprefPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _maritalstatuspref_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maritalstatuspref-routing.module */ 2878);
/* harmony import */ var _maritalstatuspref_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maritalstatuspref.page */ 81462);







let MaritalstatusprefPageModule = class MaritalstatusprefPageModule {
};
MaritalstatusprefPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maritalstatuspref_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaritalstatusprefPageRoutingModule
        ],
        declarations: [_maritalstatuspref_page__WEBPACK_IMPORTED_MODULE_1__.MaritalstatusprefPage]
    })
], MaritalstatusprefPageModule);



/***/ }),

/***/ 81462:
/*!*************************************************************!*\
  !*** ./src/app/maritalstatuspref/maritalstatuspref.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaritalstatusprefPage": function() { return /* binding */ MaritalstatusprefPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_maritalstatuspref_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maritalstatuspref.page.html */ 3339);
/* harmony import */ var _maritalstatuspref_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maritalstatuspref.page.scss */ 80528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ 46298);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../work.service */ 8981);








let MaritalstatusprefPage = class MaritalstatusprefPage {
    constructor(location, signupService, workService, restService) {
        this.location = location;
        this.signupService = signupService;
        this.workService = workService;
        this.restService = restService;
        this.meritalStatusSelectedID = '';
        this.maritalStatusArr = '';
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    funClick(val) {
        this.workService.presentLoading();
        console.log(val);
        var userID = localStorage.getItem('loggedinUserID');
        var data = JSON.stringify({
            "system_maritalstatus_id": val.system_maritalstatus_id
        });
        this.restService.updatePrefAPI('update_maritalstatus/', userID, data).subscribe((res) => {
            this.workService.hideLoading();
            console.log('resss======', res);
            if (res.status == 'success') {
                this.workService.presentToast(res.message);
                this.location.back();
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    ionViewWillEnter() {
        if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
            this.meritalStatusSelectedID = 0;
        }
        else {
            this.meritalStatusSelectedID = this.workService.userPrefData.user_preferences.system_maritalstatus_id;
            console.log(this.workService.systemData);
        }
        this.maritalStatusArr = this.workService.systemData.system_maritalstatus;
    }
};
MaritalstatusprefPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
MaritalstatusprefPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-maritalstatuspref',
        template: _raw_loader_maritalstatuspref_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maritalstatuspref_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MaritalstatusprefPage);



/***/ }),

/***/ 80528:
/*!***************************************************************!*\
  !*** ./src/app/maritalstatuspref/maritalstatuspref.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcml0YWxzdGF0dXNwcmVmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoibWFyaXRhbHN0YXR1c3ByZWYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmJnIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXZiZzphY3RpdmUge1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3RpdmVkaXZiZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMXB0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ 3339:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maritalstatuspref/maritalstatuspref.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"margin-top-fixed\" style=\"padding: 0px 20px 20px 20px;\">\n\n    <ion-text>Marital Status *</ion-text>\n\n    <div style=\"margin-top: 28px;\">\n\n\n      <ion-text *ngFor=\"let stat of maritalStatusArr\" class=\"divbg\" (click)=\"funClick(stat)\"\n        [class.activedivbg]=\"stat.system_maritalstatus_id ==  meritalStatusSelectedID\">{{stat.name}}</ion-text>\n\n    </div>\n\n\n\n    <!-- <div style=\"margin-top: 40px;\">\n\n    \n      <ion-text class=\"divbg\" (click)=\"funClick('Single')\">Single</ion-text>\n\n\n    </div> -->\n\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_maritalstatuspref_maritalstatuspref_module_ts-es2015.js.map