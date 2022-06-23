(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_koshar_koshar_module_ts"],{

/***/ 3162:
/*!*************************************************!*\
  !*** ./src/app/koshar/koshar-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KosharPageRoutingModule": function() { return /* binding */ KosharPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _koshar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./koshar.page */ 74627);




const routes = [
    {
        path: '',
        component: _koshar_page__WEBPACK_IMPORTED_MODULE_0__.KosharPage
    }
];
let KosharPageRoutingModule = class KosharPageRoutingModule {
};
KosharPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KosharPageRoutingModule);



/***/ }),

/***/ 87601:
/*!*****************************************!*\
  !*** ./src/app/koshar/koshar.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KosharPageModule": function() { return /* binding */ KosharPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _koshar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./koshar-routing.module */ 3162);
/* harmony import */ var _koshar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koshar.page */ 74627);







let KosharPageModule = class KosharPageModule {
};
KosharPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _koshar_routing_module__WEBPACK_IMPORTED_MODULE_0__.KosharPageRoutingModule
        ],
        declarations: [_koshar_page__WEBPACK_IMPORTED_MODULE_1__.KosharPage]
    })
], KosharPageModule);



/***/ }),

/***/ 74627:
/*!***************************************!*\
  !*** ./src/app/koshar/koshar.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KosharPage": function() { return /* binding */ KosharPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_koshar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./koshar.page.html */ 86256);
/* harmony import */ var _koshar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koshar.page.scss */ 35574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);








let KosharPage = class KosharPage {
    constructor(location, platform, workService, restService) {
        this.location = location;
        this.platform = platform;
        this.workService = workService;
        this.restService = restService;
        this.togglePlatformAndroid = false;
    }
    ngOnInit() {
        if (this.platform.is('android')) {
            this.togglePlatformAndroid = true;
        }
        else {
            this.togglePlatformAndroid = false;
        }
    }
    goBack() {
        this.location.back();
    }
    ionViewWillEnter() {
        if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
            this.kosherID = 0;
        }
        else {
            this.kosherID = this.workService.userPrefData.user_preferences.system_kosher_id;
            console.log(this.workService.systemData);
        }
        this.kosherArr = this.workService.systemData.kosher;
        console.log('gender---', this.kosherArr);
    }
    getNoti(event, val) {
        console.log(event);
        console.log('val----', val);
        this.workService.presentLoading();
        var userID = localStorage.getItem('loggedinUserID');
        var data = JSON.stringify({
            "system_kosher_id": val.system_kosher_id
        });
        console.log('age====>>', data);
        this.restService.updatePrefAPI('update_koshers/', userID, data).subscribe((res) => {
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
KosharPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
KosharPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-koshar',
        template: _raw_loader_koshar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_koshar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KosharPage);



/***/ }),

/***/ 35574:
/*!*****************************************!*\
  !*** ./src/app/koshar/koshar.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvc2hhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNKIiwiZmlsZSI6Imtvc2hhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 86256:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/koshar/koshar.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center; padding-top: 0px;\">\n      <ion-text style=\"font-size: 15pt;\">Kosher</ion-text>\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"margin-top-fixed\" style=\"padding: 0px 20px 20px 20px;\">\n\n    <ion-row *ngFor=\"let kosh of kosherArr\">\n      <ion-col size=\"9\" style=\"padding-top: 13px;\">\n\n        <p>{{kosh.name}}</p>\n\n      </ion-col>\n\n      <ion-col size=\"3\" style=\"text-align: right;\">\n        <ion-toggle *ngIf=\"kosh.system_kosher_id != kosherID\" (ionChange)=\"getNoti($event, kosh)\"\n          [class.togglePaddClass]=\"togglePlatformAndroid\"></ion-toggle>\n        <ion-toggle *ngIf=\"kosh.system_kosher_id == kosherID\" (ionChange)=\"getNoti($event, kosh)\"\n          [class.togglePaddClass]=\"togglePlatformAndroid\" checked>\n        </ion-toggle>\n      </ion-col>\n    </ion-row>\n\n\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_koshar_koshar_module_ts-es2015.js.map