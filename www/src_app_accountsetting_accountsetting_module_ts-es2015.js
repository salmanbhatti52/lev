(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_accountsetting_accountsetting_module_ts"],{

/***/ 80033:
/*!*****************************************************************!*\
  !*** ./src/app/accountsetting/accountsetting-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsettingPageRoutingModule": function() { return /* binding */ AccountsettingPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _accountsetting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountsetting.page */ 29636);




const routes = [
    {
        path: '',
        component: _accountsetting_page__WEBPACK_IMPORTED_MODULE_0__.AccountsettingPage
    }
];
let AccountsettingPageRoutingModule = class AccountsettingPageRoutingModule {
};
AccountsettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountsettingPageRoutingModule);



/***/ }),

/***/ 50317:
/*!*********************************************************!*\
  !*** ./src/app/accountsetting/accountsetting.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsettingPageModule": function() { return /* binding */ AccountsettingPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _accountsetting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountsetting-routing.module */ 80033);
/* harmony import */ var _accountsetting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountsetting.page */ 29636);







let AccountsettingPageModule = class AccountsettingPageModule {
};
AccountsettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _accountsetting_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsettingPageRoutingModule
        ],
        declarations: [_accountsetting_page__WEBPACK_IMPORTED_MODULE_1__.AccountsettingPage]
    })
], AccountsettingPageModule);



/***/ }),

/***/ 29636:
/*!*******************************************************!*\
  !*** ./src/app/accountsetting/accountsetting.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsettingPage": function() { return /* binding */ AccountsettingPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_accountsetting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accountsetting.page.html */ 76061);
/* harmony import */ var _accountsetting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountsetting.page.scss */ 67032);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);









let AccountsettingPage = class AccountsettingPage {
    constructor(location, router, platform, navCtrl, workService, restService) {
        this.location = location;
        this.router = router;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.workService = workService;
        this.restService = restService;
        this.togglePlatformAndroid = false;
        this.userNoti = 'Yes';
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
    }
    ionViewWillEnter() {
        console.log('user data--->>accountsetting>>', this.workService.myUserData.data.user_data.notification_switch);
        // this.userNoti = this.workService.myUserData.data.user_data.notification_switch
        this.userNoti = localStorage.getItem('userNotiStatus');
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
    goToBell() {
        this.router.navigate(['notification']);
    }
    goToFAQ() {
        this.router.navigate(['faq']);
    }
    goToTermsService() {
        this.router.navigate(['termsservice']);
    }
    goToMembership() {
        this.router.navigate(['subscription']);
    }
    goToApply() {
        localStorage.removeItem('login');
        console.log(localStorage.getItem('login'));
        this.navCtrl.navigateRoot(['/apply'], { replaceUrl: true });
    }
    getNoti(noti) {
        console.log(noti.detail.checked);
        if (noti.detail.checked) {
            this.userNoti = 'Yes';
            localStorage.setItem('userNotiStatus', 'Yes');
        }
        else {
            this.userNoti = 'No';
            localStorage.setItem('userNotiStatus', 'No');
        }
        var ss = JSON.stringify({
            "users_customers_id": localStorage.getItem('loggedinUserID'),
            "notification_switch": this.userNoti
        });
        this.restService.update_notification_switchAPI(ss).subscribe((res) => {
            console.log('noti res--->', res);
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
};
AccountsettingPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
AccountsettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-accountsetting',
        template: _raw_loader_accountsetting_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accountsetting_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountsettingPage);



/***/ }),

/***/ 67032:
/*!*********************************************************!*\
  !*** ./src/app/accountsetting/accountsetting.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRzZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYWNjb3VudHNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 76061:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accountsetting/accountsetting.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Settings</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goToBell()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/bell.svg\">\n\n    </ion-col>\n  </ion-row>\n\n\n\n  <div style=\"padding: 20px;\" class=\"margin-top-fixed\">\n\n    <ion-row (click)=\"goToFAQ()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">FAQ's</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n                  width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\"       margin-bottom: 12px; margin-top: 12px;\n    width: 100%;\n    border-bottom: 1px solid white;\">\n\n    <ion-row>\n      <ion-col size=\"8\" style=\"padding-top: 8px;\">\n        <p style=\"font-size:10pt;\">Push Notification</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right; padding: 0px;\">\n\n        <ion-toggle *ngIf=\"userNoti == 'Yes'\" (ionChange)=\"getNoti($event)\" [class.togglePaddClass]=\"togglePlatformAndroid\" checked></ion-toggle>\n        <ion-toggle *ngIf=\"userNoti != 'Yes'\" (ionChange)=\"getNoti($event)\" [class.togglePaddClass]=\"togglePlatformAndroid\"></ion-toggle>\n\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\" margin-bottom: 12px; margin-top: 9px; width: 100%; border-bottom: 1px solid white;\">\n\n    <ion-row (click)=\"goToTermsService()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Terms and Services</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n              width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\"    margin-bottom: 12px; margin-top: 12px;\nwidth: 100%;\nborder-bottom: 1px solid white;\">\n\n\n\n    <ion-row (click)=\"goToMembership()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Membership</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n                  width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\"    margin-bottom: 12px; margin-top: 12px;\n    width: 100%;\n    border-bottom: 1px solid white;\">\n\n\n\n\n\n    <ion-row (click)=\"goToApply()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Logout</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n              width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_accountsetting_accountsetting_module_ts-es2015.js.map