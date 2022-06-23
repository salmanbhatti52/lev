(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_religionpref_religionpref_module_ts"],{

/***/ 10052:
/*!*************************************************************!*\
  !*** ./src/app/religionpref/religionpref-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReligionprefPageRoutingModule": function() { return /* binding */ ReligionprefPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _religionpref_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./religionpref.page */ 57118);




const routes = [
    {
        path: '',
        component: _religionpref_page__WEBPACK_IMPORTED_MODULE_0__.ReligionprefPage
    }
];
let ReligionprefPageRoutingModule = class ReligionprefPageRoutingModule {
};
ReligionprefPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReligionprefPageRoutingModule);



/***/ }),

/***/ 74883:
/*!*****************************************************!*\
  !*** ./src/app/religionpref/religionpref.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReligionprefPageModule": function() { return /* binding */ ReligionprefPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _religionpref_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./religionpref-routing.module */ 10052);
/* harmony import */ var _religionpref_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./religionpref.page */ 57118);







let ReligionprefPageModule = class ReligionprefPageModule {
};
ReligionprefPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _religionpref_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReligionprefPageRoutingModule
        ],
        declarations: [_religionpref_page__WEBPACK_IMPORTED_MODULE_1__.ReligionprefPage]
    })
], ReligionprefPageModule);



/***/ }),

/***/ 57118:
/*!***************************************************!*\
  !*** ./src/app/religionpref/religionpref.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReligionprefPage": function() { return /* binding */ ReligionprefPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_religionpref_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./religionpref.page.html */ 23016);
/* harmony import */ var _religionpref_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./religionpref.page.scss */ 46090);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ 46298);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../work.service */ 8981);








let ReligionprefPage = class ReligionprefPage {
    constructor(location, signupService, workService, restService) {
        this.location = location;
        this.signupService = signupService;
        this.workService = workService;
        this.restService = restService;
        this.religionID = '';
        this.religionArr = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
            this.religionID = 0;
        }
        else {
            this.religionID = this.workService.userPrefData.user_preferences.system_religions_id;
        }
        this.religionArr = this.workService.systemData.system_religions;
        console.log('gender---', this.religionArr);
    }
    goBack() {
        this.location.back();
    }
    religionSelected(val) {
        this.workService.presentLoading();
        console.log(val);
        var userID = localStorage.getItem('loggedinUserID');
        var data = JSON.stringify({
            "system_religions_id": val.system_religions_id
        });
        this.restService.updatePrefAPI('update_religions/', userID, data).subscribe((res) => {
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
};
ReligionprefPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
ReligionprefPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-religionpref',
        template: _raw_loader_religionpref_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_religionpref_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReligionprefPage);



/***/ }),

/***/ 46090:
/*!*****************************************************!*\
  !*** ./src/app/religionpref/religionpref.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGlnaW9ucHJlZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoicmVsaWdpb25wcmVmLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZiZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpdmJnOmFjdGl2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3RpdmVkaXZiZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 23016:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/religionpref/religionpref.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"margin-top-fixed\" style=\"padding: 0px 20px 20px 20px;\">\n\n    <ion-text>Religion *</ion-text>\n\n    <div style=\"margin-top: 28px;\">\n\n      <ion-text *ngFor=\"let religion of religionArr\" class=\"divbg\" (click)=\"religionSelected(religion)\"\n        [class.activedivbg]=\"religion.system_religions_id == religionID\">{{religion.name}}</ion-text>\n\n    </div>\n\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_religionpref_religionpref_module_ts-es2015.js.map